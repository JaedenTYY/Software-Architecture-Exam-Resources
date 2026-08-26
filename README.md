# CSC3209 Software Architecture Exam Search Engine

Offline study package generated from your supplied notes/lecture materials and the supplied past-year papers.

## Quick start — how to run

This is a static browser application. There is no backend, no database server and no API key.

Runtime search remains static-site compatible. Exact and CSC3209 concept fallback search work by opening `index.html` directly. Full local vector-semantic search should be served over HTTP so the browser can fetch the local ONNX model, WASM runtime and vector index.

### Requirements

For normal exam/study use you only need:

- a modern browser such as Chrome, Edge, Safari or Firefox.

For development/validation you may also want:

- **Node.js** to install the minimal vector tooling, run automated tests and rebuild the browser embedding bundle;
- **Python 3** to run a local HTTP server or rebuild generated search/reference indexes.

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

#### Option A — same npm workflow as the notes repo

Install dependencies:

```sh
npm install
```

Build generated search/reference indexes, vector assets and the browser MiniLM bundle:

```sh
npm run index
```

Run the local development server:

```sh
npm run dev
```

Open:

```text
http://localhost:8000/
```

The dev server also exposes a GitHub Pages-style subpath for path-safety testing:

```text
http://localhost:8000/Software-Architecture-Exam-Resources/
```

For the normal production/static check:

```sh
npm run build
npm run serve
```

This repository is already a static site, so `npm run build` validates/regenerates committed static assets instead of producing a Next.js `out/` directory. `npm run serve` serves the repository root as the deployable static site.

#### Option B — open directly

Open `index.html` in your browser.

On macOS you can run:

```sh
open index.html
```

Or simply double-click `index.html` in Finder/File Explorer.

Exact search and CSC3209 concept fallback search work this way. Browser security normally prevents `file://` pages from fetching ONNX/model assets, so full MiniLM vector semantic search requires the npm dev/serve flow above or another HTTP static server.

#### Option C — run any local static server

Recommended for full local vector-semantic search:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Stop the server with `Ctrl+C`.

### 3. Verify the installation / latest changes

Run all automated checks from the repository root:

```sh
npm ci
npm run build:semantic
npm run check:vectors
npm run build:browser
node tools/run_search_tests.js
node tools/run_answer_predictor_tests.js
node tools/run_why_explainer_tests.js
node tools/run_hardening_tests.js
node tools/run_local_semantic_tests.js
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
All local vector semantic tests passed.
```

`node --check` normally prints nothing when the file has valid JavaScript syntax.

To regenerate document embeddings after changing the question/reference corpus:

```sh
npm run build:vectors
```

To fail fast if the committed vector index is stale:

```sh
npm run check:vectors
```

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
- **search/local-semantic.js** — source for the browser MiniLM query-embedding/vector-index adapter.
- **search/local-semantic.bundle.js** — generated browser bundle for `@huggingface/transformers`.
- **search/vector_index.meta.json** and **search/vector_index.bin** — generated static int8 document/reference vector index.
- **models/** — vendored local `all-MiniLM-L6-v2` q8 ONNX model, tokenizer and ONNX Runtime WASM assets.
- **sw.js** and **search/offline-manifest.js** — content-versioned offline exam pack for the application shell, question banks, search/predictor code, references and optional local-vector assets.
- **tools/build_vector_index.mjs** — rebuilds the local MiniLM document/reference vector index.
- **tools/check_vector_index.mjs** — validates that the committed vector index matches the current corpus hash.
- **tools/run_local_semantic_tests.js** — real MiniLM/vector-index regression tests.
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

## Reliability and validation

The repository treats wrong confidence as more harmful than an explicit ambiguity or abstention. Validation enforces the exact 3,888 Original, 171 Advanced Depth and 72 Code Implementation counts; meaningful `answer_outline` coverage; a `code_answer` for every coding question; unique IDs; and complete Quality Attribute coverage (672 Original + 25 Advanced = 697).

Answers must perform the requested work rather than only describe how to answer. In particular, all 672 Original Quality Attribute questions now include scenario-specific worked observations or complete six-part examples, and all 32 Utility Tree construction questions include four concrete rated leaves plus a justified first architectural driver. The generated-content audit rejects known delegation phrases and incomplete QA/Utility Tree templates.

Corpus correctness uses the seven CSC3209 top-level Quality Attributes only: Availability, Interoperability, Modifiability, Performance, Security, Testability and Usability. Details and mechanisms such as Latency, Throughput, Fault, Recovery, scalability and centralized control remain searchable, but cannot be presented as alternative top-level QA categories. The original bank has no surviving generator in repository history, so `questions.json` is the canonical source and `tools/apply_corpus_corrections.js` is the idempotent source-policy/regeneration step. Expansion banks are regenerated from their Python generators in a temporary directory and byte-compared with committed outputs.

The real-paper benchmark contains 35 independently maintained requirements from January 2024, August 2024, January 2025, August 2025 and January 2026. Each is evaluated in full-context and isolated-requirement form (70 predictor evaluations). Expected answers come from this repository's model-answer Markdown files; they are not represented as official university marking schemes. Benchmark records remain separate from ontology aliases and predictor calibration rules.

Confidence is a deterministic support label, not a probability. High requires clear intent, strong query/mechanism alignment, a meaningful winner margin, source/template-damped support and no unresolved tie. Exact ties, near ties without a decisive architectural distinction, and conflicting mechanism clues return `ambiguous`; clearly unrelated queries return `no-evidence`. Generated scenario variants share evidence groups, and Original generated evidence receives less trust than source-grounded Advanced and past-paper/reference evidence.

Search results apply a deterministic relevance floor and template-family diversification. The UI reports meaningful results separately from all internally scored candidates; no questions are deleted. Exact IDs, direct concepts, natural-language mechanism matches, relevant references and local-vector matches have explicit safeguards.

Run the reliability suites directly:

```sh
node tools/run_answer_completeness_tests.js
node tools/run_corpus_correctness_tests.js
node tools/run_generated_question_quality_tests.js
node tools/run_search_tests.js
node tools/run_answer_predictor_tests.js
node tools/run_why_explainer_tests.js
node tools/run_hardening_tests.js
node tools/run_result_diversity_tests.js
node tools/run_local_semantic_tests.js
node tools/run_past_paper_benchmark.js
node tools/run_offline_smoke_tests.js
```

Use `npm run verify` for the ordered suite. Use `npm run benchmark:modes` for the slower Exact/Hybrid/Semantic comparison with the committed local MiniLM vector index. The generated-content audit currently reports three known source-material warnings: Lectures 9, 11 and 12 are cited by the question bank but their PDFs are not supplied in this repository.

Dependency audit status (26 August 2026): `esbuild` was upgraded to 0.28.2, removing its moderate development-server advisory. `npm audit` still reports the high-severity `sharp <0.35.0` advisory through `@huggingface/transformers`; no patched Transformers dependency path is currently available. `sharp` is an optional Node image-processing dependency and is not included in the static browser/offline bundle. The mitigation is to build only from trusted local corpus/model inputs, avoid exposing Node tooling as a service, and upgrade when Transformers supports a patched `sharp` release.

## How to use the search engine

1. Open `index.html` directly or use the local server instructions above.
2. Search any term or clue, e.g. `availability`, `P2P`, `bridging`, `ATAM`, `Observer`, `utility tree`, `system continues working if server crashes`, or `change UI without changing business rules`.
3. Ask causal questions naturally, e.g. `Why does Layer improve modifiability?`, `How does Layer improve modifiability?`, `Explain how Pipe-and-Filter supports parallelization`, or `Why does P2P not guarantee availability?`. These route to the causal explainer rather than the normal winner-selection path.
4. Search past-paper wording directly when you want examiner-style cross-checking, for example `August 2025 MVC weakness` or `January 2026 Map-Reduce shuffle partition skew`. The matching past-paper/model-answer reference can appear alongside generated questions and Universal Answers.
5. Narrow with Topic, Pattern/Subtopic, Question Type, Difficulty, Past-Paper Family, Scenario Domain or Marks.
6. Choose a search mode:
   - **Hybrid**: default. Shows immediate lexical/CSC3209 concept results, then reranks with local MiniLM vector similarity when the model/index are ready.
   - **Semantic**: local MiniLM vector search is the primary ranking signal, with exact-ID/exact-term safeguards and CSC3209 concept evidence retained for explainability.
   - **Exact / Keywords**: lexical-only ranking for predictable emergency lookup. It does not initialize MiniLM.
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

There are three retrieval layers:

- **Lexical**: normalized tokens, field weights, light stemming, typo tolerance for short field matches and exact phrase boosts.
- **CSC3209 ontology**: deterministic concept and related-concept matching for course-grounded explainability, predictor calibration and fallback semantic behavior.
- **Local MiniLM vectors**: `@huggingface/transformers` runs the q8 ONNX `all-MiniLM-L6-v2` model in the browser through ONNX/WASM. Only the user's query is embedded at runtime. Document and reference embeddings are precomputed into static assets.

Model/runtime details:

- Model: `all-MiniLM-L6-v2`
- Runtime: `@huggingface/transformers`
- Browser inference: ONNX/WASM
- Quantized model: q8
- Embedding dimensions: 384
- Pooling/normalization: mean pooling with normalized vectors
- External calls at runtime: none

Vector storage:

- `search/vector_index.bin`: contiguous int8 matrix, one 384-byte row per document/reference.
- `search/vector_index.meta.json`: model metadata, document ordering, dimensions, corpus hash and build timing.
- Quantization: normalized float embeddings are stored as `round(value * 127)`, then approximated as `value / 127` during cosine scoring.
- Current generated index: 4,187 documents/references, 384 dimensions, 1,607,808 bytes.

The vector metadata stores a deterministic hash over ordered document IDs and semantic source text. If questions or references change without rebuilding vectors, `npm run check:vectors` fails with:

```text
Vector index is stale.
Run: npm run build:vectors
```

Ranking formulas when vector scores are available:

```text
Hybrid   = 0.45 vector + 0.35 lexical + 0.10 CSC3209 concept + 0.10 metadata/exact safeguards
Semantic = 0.68 vector + 0.05 lexical + 0.09 CSC3209 concept + 0.18 metadata/exact safeguards
```

The metadata/exact safeguard term includes exact IDs, exact subtopic/topic/title matches, exact phrase matches and direct-concept specificity. This is why explicit exam terms and specific sub-concepts such as `Observer`, `Peer-to-Peer`, `ATAM` and `Authentication` remain ahead of broader semantically related material.

When vector scores are not available yet, Hybrid/Semantic show the existing lexical/concept results immediately and then update after the async local query embedding finishes. Exact mode remains lexical-only and does not load MiniLM.

Vector candidates are not limited to the lexical top 30. For Hybrid/Semantic, the browser scores the full filtered vector corpus, keeps the strongest semantic candidates, unions them with lexical/concept candidates, and applies the final formula. Structured filters narrow the eligible vector rows before scoring.

Exact explicit terms such as `Observer`, `Peer-to-Peer` and `ATAM` retain exact metadata/concept safeguards so they outrank merely related material.

Concept aliases and exact phrase boosts use **phrase/token boundaries plus simple plural morphology**, not arbitrary substring matching. This allows `Layer` and `layers`, and `State` and `states`, while preventing false matches such as `layer` inside `player`, `players` or `multiplayer`, and `state` inside `statement`. `layered` is not matched unless added explicitly as an alias.

The concept layer uses the CSC3209 ontology to connect ordinary clues to formal concepts such as Availability, Failover, Layer, Pipe-and-Filter, Peer-to-Peer, Authentication and Authorization. Related concepts are weaker than direct matches, so distinctions such as Fault vs Failure, Layer vs Multi-Tier and Observer vs Publish-Subscribe are preserved.

Universal answer sections and past-paper/model-answer question groups are indexed as separate **Reference** results instead of one large Markdown blob. Past-paper references retain their exact exam cycle/question in the title and point back to the companion model-answer Markdown file through their source metadata.

The MiniLM model is retrieval-only. It is not used to generate predicted answers, why explanations, exam-ready justifications or confidence probabilities.

Offline behavior:

- On the first successful HTTP load, the service worker atomically prepares the application shell, all question banks, ontology/search/predictor code and reference data. It also caches the local model/vector pack where browser quota permits.
- Mutable corpus, index and predictor assets use network-first refresh with fallback to the last complete exam pack. A content-derived cache version and upgrade cleanup prevent old question/search assets from persisting indefinitely after a deployment.
- Navigation requests fall back to cached `index.html`, so a prepared exam pack can reload and use answers, filters, Exact search, concept search and prediction without connectivity. Local vector search remains available when the optional model/vector pack was cached successfully.
- Direct `file://` use still supports lexical and CSC3209 concept fallback search.
- If the browser cannot load ONNX/WASM/model assets, the UI reports that local semantic search is unavailable and keeps the concept fallback active.

Measured local asset sizes:

- ONNX q8 model: 22,972,370 bytes
- ONNX Runtime WASM: 21,596,019 bytes
- ONNX Runtime loader module: 44,484 bytes
- Tokenizer: 711,661 bytes
- Vector binary: 1,607,808 bytes
- Vector metadata: about 253 KB
- Browser semantic bundle: about 2.1 MB

Measured on this local machine with `node tools/measure_vector_performance.mjs`:

- Model initialization: 80 ms
- Warm query embedding: 2 ms
- Full vector scoring over 4,187 rows: 3 ms
- End-to-end warm Hybrid vector pass: 3 ms

Browser first-load time depends on cache state and device/network speed because the model and WASM assets are large. Search results are still shown immediately before MiniLM is ready.

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

Confidence combines winner dominance, margin over the runner-up, independent trustworthy evidence groups, intent confidence and direct query alignment. High is gated: a large generated-corpus consensus cannot compensate for weak query alignment or an unresolved tie. Low confidence is still useful: it means the engine found a plausible answer but the evidence is narrow, close, mostly corpus-derived, or the query is underspecified.

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

This version implements genuine local neural retrieval while keeping the deterministic CSC3209 concept index as a fallback and explainability layer.

The browser embeds only the user's query with the vendored quantized `all-MiniLM-L6-v2` ONNX model. Document and reference embeddings are precomputed at build time and committed as the compact int8 `search/vector_index.bin` matrix. The generated `semantic_index.js` still contains concept IDs mapped to question IDs, but it is no longer presented as vector search.

The model, tokenizer, ONNX Runtime WASM assets and vector index are served from this repository/site. Queries are not sent to Hugging Face or any external LLM/API. If the page is opened through `file://` or the browser cannot fetch ONNX/WASM assets, the app disables vector enhancement cleanly and continues with lexical plus CSC3209 concept search.

Upstream references:

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
