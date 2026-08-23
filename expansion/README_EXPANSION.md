# CSC3209 Exam Search Engine — Expansion Pack

**243 new questions and answers added on top of the original 3,888. Nothing in the original project was modified, renamed, or deleted.**

---

## Quick start

Open **`index.html`** — the single, unified search interface. It now searches all **4,131** questions (3,888 original + 243 new) in one place.

New controls added to the existing toolbar:
- **Bank** dropdown — All / Original / Advanced Depth / Code Implementation
- **Coding Questions Only** button — jumps straight to the 72 code questions
- Every result card carries a colour-coded **bank badge**, and code questions show a syntax-styled Java block inside the revealed answer

There is no second HTML file. `index_ORIGINAL_BACKUP.html` is an untouched copy of the original interface, kept only as a safety net.

---

## What was added

| Bank | Questions | ID prefix | What it covers |
|---|---:|---|---|
| **Advanced Depth** | 171 | `ADV-0001` … `ADV-0171` | In-depth content from the lecture slides that the original bank only touched at surface level |
| **Code Implementation** | 72 | `CODE-0001` … `CODE-0072` | The coding material in Lecture 13 and the ATM archive, which had **no** coverage at all in the original bank |
| **Total new** | **243** | | |

### Advanced Depth breakdown

| Topic | Questions | What makes it deeper than the original |
|---|---:|---|
| Architectural Patterns (Depth) | 38 | Layer bridging & upward calls, segmented-layer rules, MVC's model-controller constraint, tier adjacency, SOA's three connectors, pub-sub's three variants, Map-Reduce constraints, P2P supernodes/hops, Shared-Data schema coupling, work-assignment patterns, WebSphere topologies |
| Architecture and Requirements (Depth) | 29 | All 8 QAW steps incl. the 30% voting rule, all 7 PALM steps, the 7-part business-goal scenario and its sentence template, the three business-goal/architecture relationships, ASR selection test, utility-tree two-dimensional prioritisation |
| Quality Attributes | 25 | The actual per-attribute general-scenario "possible values" tables from Lecture 7, response-measure critique, concrete→general scenario decomposition, the three problems with QA discussions |
| Foundations (Depth) | 22 | All 13 reasons individually, local/nonlocal/architectural change classification, the four contexts, the Architecture Influence Cycle's return edges, good-architecture process vs structural rules |
| Architecture Documentation (Depth) | 17 | The 5-section view template, the 6 beyond-views sections, the full notation comparison table (B-Method/Event-B/Z, Paris Métro), the 3-step view-selection method |
| Quality-Driven Design Decisions | 16 | The real content for all seven categories — hard vs soft resources, coordination properties, the two mapping kinds, binding-time mechanics |
| Tactics and Patterns | 14 | Layer's five named tactics, the full ping/echo → performance → scheduling → intermediary → restrict-dependencies cascade, recursion termination |
| Structures and Views (Depth) | 10 | Class/generalization, decomposition, uses, data model, deployment, implementation and work-assignment structures |

### Code Implementation breakdown

Built on **7 complete codebases** transcribed from the lecturer's own slides and archive:

| Codebase | Source | Questions |
|---|---|---:|
| Factory Method (`Shape`/`ShapeFactory`) | Creational slides 14–18 | 5 |
| Singleton (`SingleObject`) | Creational slides 22–24 | 4 |
| Composite (`Employee`/`Manager`/`Developer`) | Structural slides 14–20 | 5 |
| Facade (`ShapeMaker`) | Structural slides 28–34 | 4 |
| Observer (`Celebrity`/`Follower`) | Behavioural slides 15–19 | 5 |
| State — robot (`Robot`/`RoboticState`) | Behavioural slides 29–31 | 6 |
| State — ATM (`ATMMachine` + 4 states) | `ATMMachineStateExample.rar` + Tutorial 8 | 10 |
| Applied scenarios, UML↔code, pattern selection, code quality | across all | 33 |

Question types include: write full implementation, trace program output, predict output for a new sequence, fill in the missing class, spot the violation, refactor conditionals to State, extend the codebase, map code to GoF participants, derive UML from code, translate UML to code, choose/reject a pattern with justification.

**Every code answer is a complete, compilable Java snippet.**

---

## What changed in `index.html`

The original interface was extended, not rewritten. Everything that worked before still works: search scoring, all seven original filters, favourites in `localStorage`, the 50-mark mock generator, random hard drill, TSV export, URL state, print stylesheet and keyboard shortcuts.

Changes made:

| Change | Detail |
|---|---|
| Two `<script src>` lines added | loads `expansion/questions_advanced.js` and `expansion/questions_code.js` |
| Data merge | the three banks are merged into the working array at load time; the source arrays are **not** mutated |
| Bank filter | new dropdown, wired into filtering, reset and URL state |
| Coding-only button | new toggle |
| Card rendering | bank badge, `code` chip, Java code block, light markdown (bold + tables) in answers |
| Search | now also matches question IDs and code content |
| Export | TSV gains `Bank` and `Code` columns |
| Copy answer | now includes the code snippet |

`questions.json`, `questions.js`, `questions.tsv`, `ALL_QUESTIONS.md`, `topic_packs/` and all other original files remain **byte-for-byte unchanged**.

## Verification performed

- **All 7 codebases were compiled with `javac` and executed.** Every stated output matches actual program output exactly. Two errors in draft traces were caught this way and corrected.
- **Overlap check against the original 3,888** — see `OVERLAP_REPORT.txt`:
  - 0 ID collisions
  - 0 exact prompt duplicates
  - 0 exact answer duplicates
  - 0 near-duplicates at or above 0.50 Jaccard similarity
  - Highest similarity of any new question to any original: **0.414**
  - 96 of the 97 new question types do not exist in the original bank
- **All original data files verified byte-identical** — see `INTEGRITY_CHECK.txt`. Only `index.html` was intentionally modified, to consolidate search into one interface; the original is preserved as `index_ORIGINAL_BACKUP.html`.

---

## How to find the new content

**Four independent ways:**

1. **ID prefix** — `ADV-` and `CODE-`. Originals are `Q00001`–`Q03888`, so origin is unambiguous at a glance. You can also type an ID straight into the search box.
2. **Bank filter** in `index.html` — All / Original / Advanced Depth / Code Implementation. Each result card also carries a coloured bank badge.
3. **"Coding Questions Only" button** — instantly narrows to the 72 questions that carry a code answer.
4. **Separate markdown packs** — `topic_packs_advanced/` and `topic_packs_code/`, same collapsible `<details>` format as the original packs, for reading or printing offline.

---

## Files added

```
index.html                        ← MODIFIED: now loads and searches all 3 banks
index_ORIGINAL_BACKUP.html        ← untouched copy of the original interface

expansion/
├── questions_advanced.json/.js   ← 171 Advanced Depth questions
├── questions_code.json/.js       ←  72 Code Implementation questions
├── ALL_ADVANCED_QUESTIONS.md     ← all 171, one readable file
├── ALL_CODE_QUESTIONS.md         ←  all 72, one readable file
├── topic_packs_advanced/         ← 8 topic packs + INDEX.md
├── topic_packs_code/             ← 1 topic pack + INDEX.md
├── code_examples/                ← 7 runnable Java codebases
│   ├── ATMMachineStateExample/   (from the lecturer's .rar)
│   ├── StateExample_Robot/
│   ├── ObserverExample/
│   ├── CompositeExample/
│   ├── FacadeExample/
│   ├── FactoryMethodExample/
│   └── SingletonExample/
├── generator/                    ← the scripts that built the banks
├── OVERLAP_REPORT.txt
├── INTEGRITY_CHECK.txt
└── README_EXPANSION.md           ← this file
```

Each `code_examples/` folder contains an `EXPECTED_OUTPUT.txt` verified by execution. To run one:

```bash
cd code_examples/ATMMachineStateExample
javac *.java -d out
java -cp out ATMMachineStateExample.TestATMMachine
```

---

## Data schema

New questions reuse the original schema so the data stays compatible, and add three fields:

| Field | Present in original? | Purpose |
|---|---|---|
| `id`, `topic`, `subtopic`, `type`, `difficulty`, `marks`, `family`, `prompt`, `answer_outline`, `tags`, `source`, `exam_trap` | yes | unchanged meaning |
| `bank` | no — added | `"Advanced Depth"` or `"Code Implementation"` |
| `code_answer` | no — added | full Java snippet (code bank only) |
| `language` | no — added | `"java"` |

The original objects are **not** given a `bank` field on disk. `index_expansion.html` labels them as "Original" in memory only, at load time.

---

## Scope note

Lectures 9 (ADD), 11 (Implementation & Testing) and 12 (ATAM) were **excluded** from this expansion, as you confirmed they are not examinable. The original bank's 216 questions on those topics are untouched and still present — they are simply not expanded.

---

## Regenerating

```bash
cd generator
python3 gen_code.py && python3 gen_code2.py     # code bank
python3 gen_adv1.py && python3 gen_adv2.py && python3 gen_adv3.py   # advanced bank
python3 gen_packs.py                             # markdown packs
python3 check_overlap.py                         # overlap verification
```

The generators only ever write into `expansion/`. They read the original `questions.json` for overlap checking but never write to it.
