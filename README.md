# CSC3209 Software Architecture Exam Search Engine

Offline study package generated from your supplied notes/lecture materials and the supplied past-year papers.

## Quick start — how to run

This is a static browser application. There is no backend, no database server, no API key and no `npm install` step.

### Requirements

For normal exam/study use you only need:

- a modern browser such as Chrome, Edge, Safari or Firefox.

For development/validation you may also want:

- **Node.js** to run the automated search, predictor, explanation and hardening tests;
- **Python 3** only if you want to run a local HTTP server or rebuild generated search/reference indexes.

### 1. Get the latest copy

If you have not cloned the repository yet:

```sh
git clone https://github.com/JaedenTYY/Software-Architecture-Exam-Resources.git
cd Software-Architecture-Exam-Resources
```

If you already have it locally:

```sh
git pull
```

### 2. Run the app

#### Option A — open directly

Open `index.html` in your browser.

On macOS you can run:

```sh
open index.html
```

Or simply double-click `index.html` in Finder/File Explorer.

The search engine is designed to work locally and offline.

#### Option B — run a local static server

If you prefer serving the repository over localhost:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

### 3. Verify the installation / latest changes

Run all automated checks from the repository root:

```sh
node tools/run_search_tests.js
node tools/run_answer_predictor_tests.js
node tools/run_why_explainer_tests.js
node tools/run_hardening_tests.js
```

Then run JavaScript syntax checks:

```sh
node --check search/hybrid-search.js
node --check search/predictor-calibration.js
node --check search/exam-explainer.js
node --check search/answer-predictor.js
```

A healthy build should end with:

```text
All semantic search and ranking tests passed.
All answer predictor tests passed.
All why-explainer tests passed.
All repository hardening tests passed.
```

`node --check` normally prints nothing when the file has valid JavaScript syntax.

### 4. Try a few exam-style searches

Examples:

```text
system continues working if server crashes
Which pattern has entities that can both request and provide resources?
Which architectural pattern processes data through successive independent transformations?
Who are you?
Why does Layer improve modifiability?
How does Layer improve modifiability?
Explain how Pipe-and-Filter supports parallelization.
Why can Client-Server become slow under high load?
August 2025 MVC Model View Controller weakness modifiability
January 2026 Map-Reduce shuffle partition skew weakness
```

Normal questions use the search + Predicted Exam Answer pipeline. Causal exam wording such as `why`, `how does`, `explain how`, `describe how`, `how come` and `what causes` routes to the local causal explainer and shows a direct explanation, mechanism chain, exam-ready wording and supporting evidence for cross-checking.

## Contents

- **index.html** — open this in any modern browser; no server or installation required.
- **questions.js** — the full question bank used by the search interface.
- **questions.json** — machine-readable bank for future processing.
- **search/concepts.js** — CSC3209 concept ontology used for conceptual search, related-concept chips and match explanations.
- **search/hybrid-search.js** — local hybrid ranking engine with boundary-safe phrase/concept matching.
- **search/answer-predictor.js** — deterministic predicted-answer consensus layer built on top of ranked search results.
- **search/predictor-calibration.js** — deterministic calibration rules for high-value ambiguous/pattern-recognition cases; also loads the repository-readable past-paper/model-answer evidence into the reference corpus.
- **search/exam-explainer.js** — deterministic course-grounded causal explainer used by Why/How-style exam questions.
- **search/universal_references.js** — parsed reference-result sections from the universal answer material.
- **Learning Materials/Past Year Exam Papers/** — January 2024, August 2024, January 2025, August 2025 and January 2026 papers plus complete model-answer companions.
- **semantic_index.js** — generated compact fallback concept index. This is not a neural embedding index.
- **tools/build_universal_references.py** — regenerates reference search sections from `universal_answers.md`.
- **tools/run_hardening_tests.js** — cross-layer regression tests for boundary matching, top-level QA eligibility, causal routing, State evidence preservation and past-paper indexing.
- **universal_answers.md** — reusable exam answer structures and pattern reference.
- **coverage_matrix.md** — coverage by lecture/topic/question type.
- **past_paper_blueprint.md** — recurring past-paper grammar and how the bank extends it.

## Question bank

**4,131 questions**

Banks:
- Original: 3,888
- Advanced Depth: 171
- Code Implementation: 72

Difficulty:
- Hard: 1,102
- Very Hard: 1,736
- Brutal: 1,293

The bank is deliberately difficult. It is designed for an open-book exam where recognizing terminology is not enough; questions require pattern selection, scenario mapping, mechanism-based justification, trade-off reasoning and quality-attribute precision.

## How to use the search engine

1. Open `index.html` directly or use the local server instructions above.
2. Search any term or clue, e.g. `availability`, `P2P`, `bridging`, `ATAM`, `Observer`, `utility tree`, `system continues working if server crashes`, or `change UI without changing business rules`.
3. Ask causal questions naturally, e.g. `Why does Layer improve modifiability?`, `How does Layer improve modifiability?`, `Explain how Pipe-and-Filter supports parallelization`, or `Why does P2P not guarantee availability?`. These route to the causal explainer rather than the normal winner-selection path.
4. Search past-paper wording directly when you want examiner-style cross-checking, for example `August 2025 MVC weakness` or `January 2026 Map-Reduce shuffle partition skew`. The matching past-paper/model-answer reference can appear alongside generated questions and Universal Answers.
5. Narrow with Topic, Pattern/Subtopic, Question Type, Difficulty, Past-Paper Family, Scenario Domain or Marks.
6. Choose a search mode:
   - **Hybrid**: default. Combines exact keywords, BM25-style lexical scoring and CSC3209 concept matching.
   - **Semantic**: prioritizes inferred course concepts from natural-language clues.
   - **Exact / Keywords**: lexical-only ranking for predictable emergency lookup.
7. Leave **Search answers** off when testing yourself; turn it on when using the bank as a reference engine. Concept search still learns from answer outlines so it can find the right idea from answer-style clues, but the checkbox gives answer text extra lexical weight.
8. Use the **Predicted Exam Answer** toggle to turn the prediction/explanation panel on or off. Normal search continues either way.
9. Read the **Predicted Exam Answer** panel when it appears. It infers the likely answer category first, then derives a local consensus from matching questions and references.
10. For a causal Why/How query, read the **Direct answer**, then follow the **Causal mechanism** chain and use the supporting evidence to cross-check the concept before writing your answer.
11. Use related-concept chips to jump from a clue to the formal CSC3209 term.
12. Use **Random Hard Question** for drills.
13. Use **Generate 50-Mark Mock** for an exam-shaped practice set.
14. Star difficult questions; favourites are stored locally in your browser.
15. Reveal an answer only after attempting the question.
16. Open `universal_answers.md` and the past-paper/model-answer folder for reusable response structures and direct examiner-style examples.

## Search architecture

The engine is fully local and static. No exam query is sent to an external API.

Ranking is:

```text
finalScore = lexicalScore + semanticConceptScore + metadataBoosts
```

Key weights live in `search/concepts.js`:

```js
exactId: 120
exactSubtopic: 90
exactTopic: 55
exactPhrasePrompt: 34
exactPhraseTags: 30
exactPhraseAnswer: 18
lexical: 8
semantic: 72
conceptDirect: 42
conceptRelated: 14
conceptSubtopic: 34
conceptTopic: 24
conceptTag: 16
conceptReferenceTitle: 18
reference: 8
```

The lexical layer uses normalized tokens, stop-word filtering, light stemming, typo tolerance for short field matches, field weights and OR-style matching. A result is no longer rejected just because one query token is absent. In Hybrid mode, multi-word conceptual clues dampen incidental lexical-only matches so direct CSC3209 concept matches can outrank generic wording overlap.

Concept aliases and exact phrase boosts use **phrase/token boundaries**, not arbitrary substring matching. This prevents false semantic matches such as `layer` inside `player` or `state` inside `statement` while still allowing complete multi-word aliases and hyphenated pattern names.

The concept layer uses the CSC3209 ontology to connect ordinary clues to formal concepts such as Availability, Failover, Layer, Pipe-and-Filter, Peer-to-Peer, Authentication and Authorization. Related concepts are weaker than direct matches, so distinctions such as Fault vs Failure, Layer vs Multi-Tier and Observer vs Publish-Subscribe are preserved.

Universal answer sections and past-paper/model-answer question groups are indexed as separate **Reference** results instead of one large Markdown blob. Past-paper references retain their exact exam cycle/question in the title and point back to the companion model-answer Markdown file through their source metadata.

## Predicted Exam Answer

The Predicted Exam Answer feature does not call an LLM and does not generate answers from the internet. It derives a deterministic consensus from the local CSC3209 ontology, ranked question bank, Universal Answer references, past-paper/model-answer references and existing answer frameworks.

The predictor first classifies the query intent before selecting a winner. Supported intents include architectural pattern, design pattern, quality attribute, security concept, tactic, structure/view, framework, trade-off, enhanced quality, threatened quality and general. This prevents a query like `best architectural pattern for distributing notifications` from selecting `Performance` merely because performance appears in many answer outlines; only architectural-pattern concepts are eligible to win.

For explicit top-level quality-attribute questions, only the seven CSC3209 top-level QAs are answer-eligible:

- Availability
- Interoperability
- Modifiability
- Performance
- Security
- Testability
- Usability

Supporting concepts/metrics such as Fault, Failure, Recovery, Latency and Throughput remain searchable and may appear in evidence, but they cannot replace the requested top-level QA answer.

The predictor has four states:

- **Answer**: one compatible answer is clearly supported.
- **Ambiguous**: multiple answers are plausible because a missing condition changes the mechanism.
- **Insufficient Information**: the query asks for an answer type but does not give enough architectural detail to justify one.
- **No Evidence**: the local bank and references do not contain strong enough matching evidence.

For architectural-pattern questions, the predictor checks the mechanism described by the query before trusting corpus consensus. For example, `get information periodically` is intentionally treated as ambiguous unless the query says whether clients poll/request the data or the system pushes event updates. Client-Server is supported by request/reply or polling clues; Publish-Subscribe is supported by event, push, publisher/subscriber or notification clues; SOA requires independent service providers/consumers, published interfaces/contracts, service discovery or interoperability.

The **Predicted Exam Answer** toggle is stored in `localStorage` under `csc3209-predicted-answer-enabled`. Turning it off hides the panel and skips prediction work while leaving Hybrid, Semantic and Exact search unchanged.

Weighted evidence percentage is the winner's share of compatible local evidence, not a probability that the answer is correct. Stronger ranked results contribute more than weak results, and repeated generated variants are dampened by evidence-group clustering so near-duplicate questions do not create fake certainty.

Confidence combines winner dominance, margin over the runner-up, independent evidence groups, intent confidence and direct query alignment. Low confidence is still useful: it means the engine found a plausible answer but the evidence is narrow, close, mostly corpus-derived, or the query is underspecified.

The State-vs-Observer calibration is deliberately conservative. An explicit `behavior changes with internal state instead of conditionals` mechanism can break a close Observer/State tie, but the calibration preserves the original evidence text and does not manufacture High confidence merely because the rule fired.

Alternatives and ambiguity are intentional. If multiple concepts solve different interpretations, the panel shows the runner-up concepts and may explain the distinction, for example pushed event updates versus client polling.

## Why / How causal explanation mode

Causal exam wording is handled by the local causal explainer instead of the normal winner-selection path. Recognized forms include:

- `Why does ...?`
- `How does ...?`
- `How can ...?`
- `Explain how ...`
- `Describe how ...`
- `How come ...?`
- `What causes ...?`

The explainer is deterministic and course-grounded. For supported questions it presents:

1. **Direct answer** — the causal explanation in plain exam language.
2. **Causal mechanism** — a short chain such as `restricted dependencies → localized change → better modifiability`.
3. **Exam-ready justification** — a concise sentence or paragraph that can be adapted to the exact scenario.
4. **Supporting evidence / cross-check** — local question-bank, past-paper/model-answer or Universal Answer material that can be opened and verified.

Examples include Layer → Modifiability, Pipe-and-Filter → Throughput, P2P → Scalability/Availability, Client-Server bottlenecks, Publish-Subscribe → Modifiability, SOA → Interoperability, MVC → Modifiability, Map-Reduce → large-batch scalability, GoF pattern rationale, ATAM, QAW, PALM, ADD, Utility Trees and six-part QA scenarios.

If no dedicated causal rule exists, the explainer attempts an evidence-based explanation from the strongest local material rather than inventing an unsupported answer.

Recommended open-book exam workflow:

1. Paste or type the essential requirement from the exam.
2. Review the inferred intent.
3. Review the predicted answer, ambiguity warning, missing information, or Why/How explanation.
4. Read **Why it fits** / **Direct answer** and the concise exam-ready justification.
5. Check alternatives and distinguishing conditions when applicable.
6. Open supporting evidence and cross-check the concept against Universal Answers and the indexed past-paper/model-answer material.
7. Adapt the justification to the exact scenario instead of copying it blindly.

## Semantic model and offline behavior

This version implements the static conceptual semantic fallback, not neural browser embeddings.

Two approaches were evaluated:

- Browser embeddings plus precomputed document vectors using `sentence-transformers/all-MiniLM-L6-v2`: practical model shape for semantic search, 384 dimensions, with a quantized ONNX browser model around 24 MB. A Float32 document index for about 4,100 items would be about 6 MB before compression, or smaller if quantized.
- Lexical plus CSC3209 ontology/concept expansion: zero model download, works from `file://`, fast initial load, fully offline, and directly tuned to the exam vocabulary.

The second approach is used here to avoid making a lightweight offline exam tool depend on a first-load model download or a large uncommitted ML build pipeline. The generated `semantic_index.js` is about 401 KB and contains concept IDs mapped to question IDs, not full question objects or embedding vectors.

Sources used for the embedding feasibility check:

- `sentence-transformers/all-MiniLM-L6-v2` model card: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
- Transformers.js repository/docs: https://github.com/huggingface/transformers.js/
- Quantized MiniLM ONNX listing: https://huggingface.co/Xenova/transformers.js/tree/main/quantized/sentence-transformers/all-MiniLM-L6-v2/default

## Rebuilding and validating search

Rebuild the compact concept index:

```sh
python3 tools/build_semantic_index.py
```

Rebuild universal answer reference sections:

```sh
python3 tools/build_universal_references.py
```

Run the complete automated validation suite:

```sh
node tools/run_search_tests.js
node tools/run_answer_predictor_tests.js
node tools/run_why_explainer_tests.js
node tools/run_hardening_tests.js
```

`run_search_tests.js` now validates **ranking positions**, not just whether an expected word appears somewhere in the first ten results. It also contains negative substring tests such as `player` ≠ `Layer` and validates that past-paper/model-answer references participate in retrieval.

`run_hardening_tests.js` specifically covers:

- explicit top-level QA eligibility,
- Latency/Throughput remaining searchable without winning top-level QA questions,
- How/Explain-how/Describe-how causal routing,
- State-vs-Observer evidence preservation,
- phrase-boundary false-positive prevention,
- August 2025 MVC and January 2026 Map-Reduce past-paper/model-answer retrieval.

Run syntax checks after modifying search/predictor/explainer code:

```sh
node --check search/hybrid-search.js
node --check search/predictor-calibration.js
node --check search/exam-explainer.js
node --check search/answer-predictor.js
```

Current expected successful endings are:

```text
All semantic search and ranking tests passed.
All answer predictor tests passed.
All why-explainer tests passed.
All repository hardening tests passed.
```

## Suggested study workflow

- **Pass 1:** Filter one topic; answer Hard questions.
- **Pass 2:** Answer Very Hard/Brutal comparison and failure-reasoning questions.
- **Pass 3:** Generate 50-mark mocks without searching answers.
- **Pass 4:** Search the engine for every concept you got wrong and compare generated-bank evidence with the indexed past-paper/model-answer references.
- **Final open-book prep:** keep the Universal Answers, past-paper/model-answer folder and recognition table accessible, but adapt every answer to the actual scenario.
