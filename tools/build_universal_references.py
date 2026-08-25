#!/usr/bin/env python3
"""Parse universal and past-paper answer material into browser search results."""

from __future__ import annotations

import json
import re
from pathlib import Path

from build_past_paper_references import build as build_past_paper_references

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "universal_answers.md"
OUT = ROOT / "search" / "universal_references.js"


def strip_number(title: str) -> str:
    return re.sub(r"^\d+\.\s*", "", title).strip()


def parse_sections(markdown: str) -> list[dict]:
    matches = list(re.finditer(r"^##\s+(.+?)\s*$", markdown, flags=re.MULTILINE))
    sections: list[dict] = []
    for index, match in enumerate(matches, start=1):
        start = match.end()
        end = matches[index].start() if index < len(matches) else len(markdown)
        body = markdown[start:end].strip()
        title = strip_number(match.group(1))
        sections.append(
            {
                "id": f"REF-{index:03d}",
                "title": title,
                "source": "universal_answers.md",
                "concepts": [],
                "body": body,
            }
        )
    return sections


def main() -> None:
    sections = parse_sections(SOURCE.read_text(encoding="utf-8"))
    OUT.write_text(
        "window.UNIVERSAL_REFERENCES = "
        + json.dumps(sections, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(sections)} universal references")
    build_past_paper_references()


if __name__ == "__main__":
    main()
