# CSC3209 Software Architecture Exam Search Engine

Offline study package generated from your supplied notes/lecture materials and the supplied past-year papers.

## Contents

- **index.html** — open this in any modern browser; no server or installation required.
- **questions.js** — the full question bank used by the search interface.
- **questions.json** — machine-readable bank for future processing.
- **search/concepts.js** — CSC3209 concept ontology used for conceptual search, related-concept chips and match explanations.
- **search/hybrid-search.js** — local hybrid ranking engine.
- **search/answer-predictor.js** — deterministic predicted-answer consensus layer built on top of ranked search results.
- **search/universal_references.js** — parsed reference-result sections from the universal answer material.
- **semantic_index.js** — generated compact fallback concept index. This is not a neural embedding index.
- **tools/build_universal_references.py** — regenerates reference search sections from `universal_answers.md`.
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

1. Open `index.html`.
2. Search any term or clue, e.g. `availability`, `P2P`, `bridging`, `ATAM`, `Observer`, `utility tree`, `system continues working if server crashes`, or `change UI without changing business rules`.
3. Narrow with Topic, Pattern/Subtopic, Question Type, Difficulty, Past-Paper Family, Scenario Domain or Marks.
4. Choose a search mode:
   - **Hybrid**: default. Combines exact keywords, BM25-style lexical scoring and CSC3209 concept matching.
   - **Semantic**: prioritizes inferred course concepts from natural-language clues.
   - **Exact / Keywords**: lexical-only ranking for predictable emergency lookup.
5. Leave **Search answers** off when testing yourself; turn it on when using the bank as a reference engine. Concept search still learns from answer outlines so it can find the right idea from answer-style clues, but the checkbox gives answer text extra lexical weight.
6. Read the **Predicted Exam Answer** panel when it appears. It infers the likely answer category first, then derives a local consensus from matching questions and references.
7. Use related-concept chips to jump from a clue to the formal CSC3209 term.
8. Use **Random Hard Question** for drills.
9. Use **Generate 50-Mark Mock** for an exam-shaped practice set.
10. Star difficult questions; favourites are stored locally in your browser.
11. Reveal an answer only after attempting the question.
12. Open `universal_answers.md` for reusable response structures.

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

The concept layer uses the CSC3209 ontology to connect ordinary clues to formal concepts such as Availability, Failover, Layer, Pipe-and-Filter, Peer-to-Peer, Authentication and Authorization. Related concepts are weaker than direct matches, so distinctions such as Fault vs Failure, Layer vs Multi-Tier and Observer vs Publish-Subscribe are preserved.

Universal answer sections are indexed as separate **Reference** results instead of one large Markdown blob.

## Predicted Exam Answer

The Predicted Exam Answer feature does not call an LLM and does not generate answers from the internet. It derives a deterministic consensus from the local CSC3209 ontology, ranked question bank, Universal Answer references and existing answer frameworks.

The predictor first classifies the query intent before selecting a winner. Supported intents include architectural pattern, design pattern, quality attribute, tactic, structure/view, framework, trade-off, enhanced quality, threatened quality and general. This prevents a query like `best architectural pattern for distributing notifications` from selecting `Performance` merely because performance appears in many answer outlines; only architectural-pattern concepts are eligible to win.

Weighted evidence percentage is the winner's share of compatible local evidence, not a probability that the answer is correct. Stronger ranked results contribute more than weak results, and repeated generated variants are dampened by evidence-group clustering so near-duplicate questions do not create fake certainty.

Confidence combines winner dominance, margin over the runner-up, independent evidence groups, underlying search strength and intent confidence. Low confidence is still useful: it means the engine found a plausible answer but the evidence is narrow, close, or the query is underspecified.

Alternatives and ambiguity are intentional. If multiple concepts solve different interpretations, the panel shows the runner-up concepts and may explain the distinction, for example pushed event updates versus client polling.

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

Run the semantic ranking checks:

```sh
node tools/run_search_tests.js
```

Run the predicted-answer checks:

```sh
node tools/run_answer_predictor_tests.js
```

## Suggested study workflow

- **Pass 1:** Filter one topic; answer Hard questions.
- **Pass 2:** Answer Very Hard/Brutal comparison and failure-reasoning questions.
- **Pass 3:** Generate 50-mark mocks without searching answers.
- **Pass 4:** Search the engine for every concept you got wrong and compare multiple variants.
- **Final open-book prep:** keep the Universal Answers and recognition table accessible, but adapt every answer to the actual scenario.
