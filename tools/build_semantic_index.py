#!/usr/bin/env python3
"""Build the compact CSC3209 concept index used for search diagnostics.

This fallback semantic index is not a neural embedding index. It maps question
IDs to concepts inferred from the central course ontology. Matching uses the
same phrase/token/plural boundary semantics as the browser search so rebuilding
the index cannot reintroduce substring errors such as layer->player.
"""

from __future__ import annotations

import json
import re
import subprocess
from functools import lru_cache
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QUESTION_FILES = [
    ROOT / "questions.json",
    ROOT / "expansion" / "questions_advanced.json",
    ROOT / "expansion" / "questions_code.json",
]
OUT = ROOT / "semantic_index.js"

# Course/generator labels that are deliberately narrower than the public
# ontology wording. Keeping these build-time aliases here makes regeneration
# deterministic without broadening ordinary query aliases unnecessarily.
BUILD_ALIASES = {
    "implementation-conformance": ["architecture erosion", "architecture drift"],
}


def normalize(value: object) -> str:
    text = str(value or "").lower()
    text = text.replace("&", " and ").replace("–", "-").replace("—", "-")
    text = re.sub(r"[^a-z0-9+#.\-/]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


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


def prepare_concepts(concepts: list[dict]) -> list[dict]:
    prepared = []
    for concept in concepts:
        terms = []
        seen = set()
        raw_terms = [
            concept["label"],
            *concept.get("aliases", []),
            *BUILD_ALIASES.get(concept["id"], []),
        ]
        for raw in raw_terms:
            term = normalize(raw)
            if len(term) > 1 and term not in seen:
                seen.add(term)
                terms.append(term)
        prepared.append({**concept, "_label": normalize(concept["label"]), "_terms": terms})
    return prepared


def infer_concepts(text: str, row: dict, concepts: list[dict]) -> list[str]:
    haystack = normalize(text)
    haystack_terms = phrase_set(haystack.split())
    found: list[tuple[str, float]] = []
    subtopic = normalize(row.get("subtopic"))
    topic = normalize(row.get("topic"))
    tags = {normalize(t) for t in row.get("tags", [])}
    architecture_erosion = subtopic in {"architecture erosion", "architecture drift"}

    for concept in concepts:
        # Architecture erosion is a conformance problem: implemented dependency
        # structure has drifted from the documented architecture. It should not
        # be indexed as generic Architecture-Informed Testing merely because the
        # surrounding answer discusses testing as a possible detection activity.
        if architecture_erosion and concept["id"] == "architecture-testing":
            continue

        score = 0.0
        label = concept["_label"]
        if subtopic == label:
            score += 5.0
        if topic == label:
            score += 3.0
        if label in tags or concept["id"] in tags:
            score += 2.0
        if architecture_erosion and concept["id"] == "implementation-conformance":
            score += 5.0
        for term in concept["_terms"]:
            if contains_term(haystack_terms, term):
                score += 2.0 + min(2.0, len(term.split()) * 0.25)
                break
        if score > 0:
            found.append((concept["id"], score))
    found.sort(key=lambda x: (-x[1], x[0]))
    return [concept_id for concept_id, _ in found[:10]]


def phrase_set(tokens: list[str]) -> set[str]:
    phrases: set[str] = set()
    max_len = 12
    for i in range(len(tokens)):
        parts = []
        for token in tokens[i : i + max_len]:
            parts.append(token)
            phrases.add(" ".join(parts))
    return phrases


def contains_term(haystack_terms: set[str], term: str) -> bool:
    return any(variant in haystack_terms for variant in term_variants(term))


@lru_cache(maxsize=None)
def term_variants(term: str) -> tuple[str, ...]:
    normalized = normalize(term)
    if not normalized:
        return tuple()
    variants = [normalized]
    parts = normalized.split()
    if not parts:
        return tuple(variants)
    last = parts[-1]
    if re.fullmatch(r"[a-z0-9]+", last) and len(last) >= 3:
        plural_last: set[str] = set()
        if re.search(r"(s|x|z|ch|sh)$", last):
            plural_last.add(last + "es")
        else:
            plural_last.add(last + "s")
        if re.search(r"[bcdfghjklmnpqrstvwxyz]y$", last):
            plural_last.add(last[:-1] + "ies")
        for plural in sorted(plural_last):
            variants.append(" ".join([*parts[:-1], plural]))
    return tuple(variants)


def main() -> None:
    concepts = prepare_concepts(load_concepts())
    questions = load_questions()
    documents = []
    for q in questions:
        text = " | ".join(
            str(part or "")
            for part in [
                q.get("topic"), q.get("subtopic"), q.get("type"),
                q.get("scenario"), " ".join(q.get("tags", [])),
                q.get("prompt"), q.get("answer_outline"),
                q.get("exam_trap"), q.get("source"),
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
        "window.SEMANTIC_INDEX = " + json.dumps(payload, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(documents)} documents")


if __name__ == "__main__":
    main()
