#!/usr/bin/env python3
"""Build the compact CSC3209 concept index used for search diagnostics.

This fallback semantic index is not a neural embedding index. It maps question
IDs to concepts inferred from the central course ontology. Matching uses the
same phrase/token boundary semantics as the browser search so rebuilding the
index cannot reintroduce substring errors such as layer->player.
"""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QUESTION_FILES = [
    ROOT / "questions.json",
    ROOT / "expansion" / "questions_advanced.json",
    ROOT / "expansion" / "questions_code.json",
]
OUT = ROOT / "semantic_index.js"


def normalize(value: object) -> str:
    text = str(value or "").lower()
    text = text.replace("&", " and ").replace("–", "-").replace("—", "-")
    text = re.sub(r"[^a-z0-9+#.\-/]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def contains_term(haystack: str, term: str) -> bool:
    """Match a complete token/phrase, never a substring inside another word."""
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


def load_questions() -> list[dict]:
    rows: list[dict] = []
    for path in QUESTION_FILES:
        rows.extend(json.loads(path.read_text(encoding="utf-8")))
    return rows


def infer_concepts(text: str, row: dict, concepts: list[dict]) -> list[str]:
    haystack = normalize(text)
    found: list[tuple[str, float]] = []
    subtopic = normalize(row.get("subtopic"))
    topic = normalize(row.get("topic"))
    tags = {normalize(t) for t in row.get("tags", [])}
    for concept in concepts:
        score = 0.0
        label = normalize(concept["label"])
        if subtopic == label:
            score += 5.0
        if topic == label:
            score += 3.0
        if label in tags or concept["id"] in tags:
            score += 2.0
        for alias in [concept["label"], *concept.get("aliases", [])]:
            term = normalize(alias)
            if len(term) > 1 and contains_term(haystack, term):
                score += 2.0 + min(2.0, len(term.split()) * 0.25)
                break
        if score > 0:
            found.append((concept["id"], score))
    found.sort(key=lambda x: (-x[1], x[0]))
    return [concept_id for concept_id, _ in found[:10]]


def main() -> None:
    concepts = load_concepts()
    questions = load_questions()
    documents = []
    for q in questions:
        text = " | ".join(
            str(part or "")
            for part in [
                q.get("topic"),
                q.get("subtopic"),
                q.get("type"),
                q.get("scenario"),
                " ".join(q.get("tags", [])),
                q.get("prompt"),
                q.get("answer_outline"),
                q.get("exam_trap"),
                q.get("source"),
            ]
        )
        documents.append({"id": q["id"], "concepts": infer_concepts(text, q, concepts)})

    payload = {
        "kind": "CSC3209 fallback semantic concept index",
        "embedding_model": None,
        "embedding_dimensions": 0,
        "documents": documents,
    }
    OUT.write_text(
        "window.SEMANTIC_INDEX = "
        + json.dumps(payload, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(documents)} documents")


if __name__ == "__main__":
    main()
