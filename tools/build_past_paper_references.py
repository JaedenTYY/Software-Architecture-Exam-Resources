#!/usr/bin/env python3
"""Build searchable past-paper/model-answer references from the real answer files.

The generated file is loaded by predictor-calibration.js in both the browser and
Node test harnesses. Each `## Question N — ...` section becomes one searchable
reference, so edits to the model-answer Markdown remain the source of truth.
"""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAPER_DIR = ROOT / "Learning Materials" / "Past Year Exam Papers"
OUT = ROOT / "search" / "past_paper_references.js"
ANSWER_FILES = sorted(PAPER_DIR.glob("CSC3209_*_Answers.md"))


def normalize(value: object) -> str:
    text = str(value or "").lower()
    text = text.replace("&", " and ").replace("–", "-").replace("—", "-")
    text = re.sub(r"[^a-z0-9+#.\-/]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def contains_term(haystack: str, term: str) -> bool:
    if not term:
        return False
    return re.search(
        rf"(^|[^a-z0-9+#]){re.escape(term)}(?=$|[^a-z0-9+#])",
        haystack,
    ) is not None


def load_concepts() -> list[dict]:
    script = """
global.window = {};
require('./search/concepts.js');
console.log(JSON.stringify(global.window.CSC3209_SEARCH_CONFIG.concepts));
"""
    result = subprocess.run(
        ["node", "-e", script],
        cwd=ROOT,
        check=True,
        text=True,
        capture_output=True,
    )
    return json.loads(result.stdout)


def infer_concepts(text: str, concepts: list[dict]) -> list[str]:
    haystack = normalize(text)
    found: list[tuple[str, float]] = []
    for concept in concepts:
        best = 0.0
        for raw in [concept["label"], *concept.get("aliases", [])]:
            term = normalize(raw)
            if len(term) < 2 or not contains_term(haystack, term):
                continue
            tokens = term.split()
            score = 2.0 + min(3.0, len(tokens) * 0.45)
            if normalize(concept["label"]) == term:
                score += 0.7
            best = max(best, score)
        if best:
            found.append((concept["id"], best))
    found.sort(key=lambda row: (-row[1], row[0]))
    return [concept_id for concept_id, _ in found[:12]]


def display_cycle(path: Path) -> tuple[str, str]:
    match = re.match(r"CSC3209_(January|August)_(\d{4})_Answers\.md", path.name)
    if not match:
        raise ValueError(f"Unexpected answer filename: {path.name}")
    month, year = match.groups()
    cycle = f"{month} {year}"
    code = f"{year}-{'01' if month == 'January' else '08'}"
    return cycle, code


def plain_text(markdown: str) -> str:
    text = re.sub(r"```.*?```", " ", markdown, flags=re.DOTALL)
    text = re.sub(r"^>.*$", " ", text, flags=re.MULTILINE)
    text = re.sub(r"^[-|: ]+$", " ", text, flags=re.MULTILINE)
    text = re.sub(r"^#{1,6}\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", text)
    text = text.replace("**", "").replace("`", "")
    text = re.sub(r"\s+", " ", text).strip()
    return text[:5000]


def parse_file(path: Path, concepts: list[dict]) -> list[dict]:
    markdown = path.read_text(encoding="utf-8")
    matches = list(re.finditer(r"^##\s+Question\s+(\d+)\s*[—-]\s*(.+?)\s*$", markdown, flags=re.MULTILINE))
    cycle, cycle_code = display_cycle(path)
    refs: list[dict] = []
    for index, match in enumerate(matches):
        question_no = int(match.group(1))
        question_title = match.group(2).strip()
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(markdown)
        section = markdown[start:end].strip()
        body = plain_text(section)
        semantic_text = f"{cycle} Question {question_no} {question_title} {body}"
        refs.append(
            {
                "id": f"PY-{cycle_code}-Q{question_no}",
                "referenceType": "past-paper",
                "examCycle": cycle,
                "questionNumber": question_no,
                "title": f"Past Paper + Model Answer — {cycle} Q{question_no}: {question_title}",
                "body": body,
                "source": str(path.relative_to(ROOT)).replace("\\", "/"),
                "concepts": infer_concepts(semantic_text, concepts),
            }
        )
    return refs


def build() -> list[dict]:
    concepts = load_concepts()
    refs: list[dict] = []
    for path in ANSWER_FILES:
        refs.extend(parse_file(path, concepts))

    payload = json.dumps(refs, ensure_ascii=False, indent=2)
    OUT.write_text(
        "((root) => {\n"
        f"  const refs = {payload};\n"
        "  root.PAST_PAPER_REFERENCES = refs;\n"
        "  const existing = root.UNIVERSAL_REFERENCES || [];\n"
        "  const seen = new Set(existing.map(r => r.id));\n"
        "  const additions = refs.filter(r => !seen.has(r.id));\n"
        "  if (additions.length) root.UNIVERSAL_REFERENCES = [...existing, ...additions];\n"
        "  if (typeof module !== 'undefined') module.exports = refs;\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(refs)} past-paper references")
    return refs


def main() -> None:
    build()


if __name__ == "__main__":
    main()
