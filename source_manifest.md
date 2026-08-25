# Source / Scope Manifest

The generated material is derived from the CSC3209 course materials supplied in the exam resource pack and the five past-year papers/model-answer companions maintained in this repository.

## Lecture scope present in the course materials
- Lecture 1 — What is Software Architecture?
- Lecture 2 — Why Is Software Architecture Important?
- Lecture 3 — The Many Contexts of Software Architecture
- Lecture 4 — Architectural Patterns (catalogue; Layer; Broker; MVC; Pipe-and-Filter; Client-Server; Peer-to-Peer; SOA; Publish-Subscribe; Shared-Data; Map-Reduce; Multi-Tier; other patterns)
- Lecture 5 — Understanding Quality Attributes
- Lecture 6 — Relationships Between Tactics and Patterns
- Lecture 7 — Quality Attribute Scenarios
- Lecture 8 — Architecture and Requirements
- Lecture 9 — Designing an Architecture
- Lecture 10 — Documenting Software Architectures
- Lecture 11 — Architecture Implementation and Testing
- Lecture 12 — Architecture Evaluation
- Lecture 13 — Design Patterns (Introduction, Creational, Structural, Behavioral)

## Existing note baseline
The resource pack also contains the existing CSC3209 open-book notes and an Obsidian-style `SWA/` note tree. The question engine does **not** assume those notes are complete; lecture material was used to extend perspectives that were missing or thin, particularly Lectures 9–13.

## Past papers used for exam grammar and searchable cross-checking
- January 2024
- August 2024
- January 2025
- August 2025
- January 2026

Repository-readable transcriptions and course-grounded model-answer companions are stored under:

`Learning Materials/Past Year Exam Papers/`

Each model-answer `## Question N` section is converted into a searchable past-paper reference by `tools/build_past_paper_references.py`. The generated data lives in `search/past_paper_references.js`; the Markdown answer files remain the source of truth.

The engine does not claim to predict the exact final paper. It generalizes recurring assessment forms, indexes the supplied historical papers for cross-checking, and deliberately creates harder transfer variations.
