#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
global.window = global;
require(path.join(ROOT, "questions.js"));
require(path.join(ROOT, "expansion/questions_advanced.js"));
require(path.join(ROOT, "expansion/questions_code.js"));
require(path.join(ROOT, "search/concepts.js"));
require(path.join(ROOT, "search/universal_references.js"));
require(path.join(ROOT, "semantic_index.js"));
require(path.join(ROOT, "search/hybrid-search.js"));
require(path.join(ROOT, "search/exam-explainer.js"));
require(path.join(ROOT, "search/predictor-calibration.js"));
require(path.join(ROOT, "search/answer-predictor.js"));

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);
const predictor = global.createAnswerPredictor(global.CSC3209_SEARCH_CONFIG);
const explainer = global.createExamExplainer(global.CSC3209_SEARCH_CONFIG);
const blockedTopLevelQualityWinners = new Set(["Fault", "Failure", "End-to-End Availability", "Recovery", "Latency", "Throughput"]);
let failures = 0;

function pass(name, ok, details = "") {
  if (!ok) failures += 1;
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}${details ? ` — ${details}` : ""}`);
}

function search(query, includeAnswers = true, extra = {}) {
  return engine.search({ query, mode: "hybrid", includeAnswers, ...extra });
}

function predict(query) {
  const s = search(query, true);
  return predictor.predict(query, s.concepts, s.results, global.CSC3209_SEARCH_CONFIG);
}

function explain(query) {
  const s = search(query, true);
  return explainer.explain(query, s.concepts, s.results);
}

// 1. Top-level QA eligibility.
{
  const p = predict("Server A crashes, traffic is redirected and users continue normally. What quality attribute is demonstrated?");
  const badAlternative = (p.alternatives || []).some(a => blockedTopLevelQualityWinners.has(a.label));
  pass("Top-level QA: Availability wins", p.state === "answer" && p.winner?.label === "Availability", `winner=${p.winner?.label || "none"}`);
  pass("Top-level QA: detail concepts not alternatives", !badAlternative, `alternatives=${(p.alternatives || []).map(a => a.label).join(", ") || "none"}`);
}
{
  const p = predict("95 percent of requests complete in under 2 seconds. Which quality attribute is this?");
  const badAlternative = (p.alternatives || []).some(a => blockedTopLevelQualityWinners.has(a.label));
  pass("Top-level QA: Performance beats Latency/Throughput", p.state === "answer" && p.winner?.label === "Performance", `winner=${p.winner?.label || "none"}`);
  pass("Performance QA alternatives remain top-level", !badAlternative, `alternatives=${(p.alternatives || []).map(a => a.label).join(", ") || "none"}`);
}
{
  const s = search("latency", true);
  pass("Latency remains searchable as a detail/metric", s.concepts.some(c => c.label === "Latency"), `concepts=${s.concepts.map(c => c.label).join(", ")}`);
}

// 2. Explanation grammar includes why/how/how-is/how-are forms.
for (const test of [
  { query: "How does Layer improve modifiability?", subject: "Layer", target: "Modifiability" },
  { query: "Explain how Pipe-and-Filter supports parallelization.", subject: "Pipe-and-Filter" },
  { query: "Describe how MVC separates user-interface functionality from application functionality.", subject: "MVC" },
  { query: "How is Availability improved by redundancy?", subject: "Redundancy", target: "Availability" },
  { query: "How are MVC views kept synchronized?", subject: "MVC" }
]) {
  const p = explain(test.query);
  const routed = explainer.isWhyQuery(test.query);
  const subjectOk = p?.subject?.label === test.subject;
  const targetOk = !test.target || p?.target?.label === test.target;
  pass(`Explanation routing: ${test.query}`, routed && p?.answerMode === "why" && p?.state === "answer" && subjectOk && targetOk, `subject=${p?.subject?.label || "none"}, target=${p?.target?.label || "none"}`);
}

// 3. State-vs-Observer correction and alternative hygiene.
{
  const p = predict("Which pattern lets an object change behavior when its internal state changes instead of spreading conditionals?");
  const hasEvidenceText = (p.winner?.evidence || []).some(e => String(e.snippet || "").trim().length > 0);
  const observerPollution = (p.alternatives || []).some(a => a.label === "Observer");
  pass("State mechanism wins over Observer", p.state === "answer" && p.winner?.label === "State", `winner=${p.winner?.label || "none"}, confidence=${p.confidence?.level || "none"}`);
  pass("State calibration preserves evidence", hasEvidenceText, `evidence=${(p.winner?.evidence || []).length}`);
  pass("Explicit State query removes Observer comparison pollution", !observerPollution, `alternatives=${(p.alternatives || []).map(a => a.label).join(", ") || "none"}`);
}
for (const query of [
  "Which pattern ensures exactly one controlled instance with a global access point?",
  "Which pattern lets clients treat leaf objects and recursive composite groups uniformly?",
  "Which pattern provides one simple unified interface over a complex subsystem?",
  "Which pattern delegates object creation so a subclass decides which concrete product to instantiate?"
]) {
  const p = predict(query);
  pass(`Unrelated State alternative suppressed: ${query}`, !(p.alternatives || []).some(a => a.label === "State"), `winner=${p.winner?.label || "none"}; alternatives=${(p.alternatives || []).map(a => a.label).join(", ") || "none"}`);
}

// 4. Boundary safety is enforced in search, predictor and explainer.
for (const test of [
  { query: "player profile statistics", forbidden: "Layer" },
  { query: "statement object text", forbidden: "State" },
  { query: "multiplayer profile", forbidden: "Layer" }
]) {
  const s = search(test.query, true);
  const direct = s.concepts.filter(c => c.direct).map(c => c.label);
  pass(`Boundary-safe search: ${test.query}`, !direct.includes(test.forbidden), `direct=${direct.join(", ") || "none"}`);
  const p = predictor.predict(test.query, s.concepts, s.results, global.CSC3209_SEARCH_CONFIG);
  pass(`Boundary-safe predictor: ${test.query}`, p?.winner?.label !== test.forbidden, `winner=${p?.winner?.label || "none"}`);
}
{
  const p = explain("Why is a player profile useful?");
  pass("Boundary-safe explainer: player is not Layer", p?.subject?.label !== "Layer", `state=${p?.state || "none"}; subject=${p?.subject?.label || "none"}`);
}

// 5. Rebuilding the semantic index must not restore substring matching.
{
  const builder = fs.readFileSync(path.join(ROOT, "tools/build_semantic_index.py"), "utf8");
  pass("Semantic-index builder uses boundary matcher", !builder.includes("return term in haystack") && builder.includes("[^a-z0-9+#]"), "builder checked statically");
}

// 6. Past-year model answers are generated first-class evidence.
{
  const s = search("August 2025 MVC Model View Controller weakness modifiability", true);
  const rank = s.results.findIndex(r => r.referenceType === "past-paper" && /August 2025 Q3/i.test(r.title || ""));
  pass("August 2025 MVC model answer indexed", rank >= 0 && rank < 8, `rank=${rank >= 0 ? rank + 1 : "not found"}`);
}
{
  const s = search("January 2026 Map-Reduce shuffle partition skew weakness", true);
  const rank = s.results.findIndex(r => r.referenceType === "past-paper" && /January 2026 Q3/i.test(r.title || ""));
  pass("January 2026 Map-Reduce model answer indexed", rank >= 0 && rank < 8, `rank=${rank >= 0 ? rank + 1 : "not found"}`);
}
const pastPaperCount = (global.UNIVERSAL_REFERENCES || []).filter(r => r.referenceType === "past-paper").length;
pass("All past-paper question groups loaded", pastPaperCount >= 21, `count=${pastPaperCount}`);
pass("Past-paper data is separated from predictor calibration", Array.isArray(global.PAST_PAPER_REFERENCES) && global.PAST_PAPER_REFERENCES.length >= 21, `generated=${global.PAST_PAPER_REFERENCES?.length || 0}`);
pass("Past-paper generator exists", fs.existsSync(path.join(ROOT, "tools/build_past_paper_references.py")), "tools/build_past_paper_references.py");

// 7. Structured question filters must not leak unrelated Reference cards.
{
  const s = search("availability", true, { bank: "Code Implementation", difficulty: "Brutal" });
  const leaked = s.results.filter(r => r._resultType === "reference");
  pass("Question metadata filters exclude Reference leakage", leaked.length === 0, `referenceLeaks=${leaked.length}`);
}

// 8. References from one source count conservatively as one predictor source.
{
  const cfg = global.CSC3209_SEARCH_CONFIG;
  const universal = (global.UNIVERSAL_REFERENCES || []).filter(r => r.source === "universal_answers.md").slice(0, 3);
  const synthetic = universal.map((r, i) => ({
    ...r,
    _resultType: "reference",
    _score: 100 - i,
    _matchedConcepts: [{ id: "availability", label: "Availability", kind: "direct", score: 50 }],
    _concepts: ["Availability"]
  }));
  const p = predictor.predict(
    "What quality attribute means the service remains available?",
    [{ id: "availability", label: "Availability", direct: true }],
    synthetic,
    cfg
  );
  pass("Same-source references do not fake independent evidence", Number(p.independentEvidenceGroups || 0) <= 1, `independent=${p.independentEvidenceGroups || 0}`);
}

// 9. ATAM method query should be decisive, not ambiguous among its outputs.
{
  const p = predict("Which evaluation method uses business drivers, a utility tree, risks, sensitivity points and trade-off points?");
  const constituentAlt = (p.alternatives || []).some(a => ["Utility Tree", "Sensitivity Point", "Trade-off Point", "Architectural Risk", "Risk Theme"].includes(a.label));
  pass("ATAM explicit method query wins", p.state === "answer" && p.winner?.label === "ATAM", `winner=${p.winner?.label || "none"}`);
  pass("ATAM explicit method query is High confidence", p.confidence?.level === "High" && !p.ambiguity?.isAmbiguous, `confidence=${p.confidence?.level || "none"}; ambiguous=${!!p.ambiguity?.isAmbiguous}`);
  pass("ATAM outputs are not competing method alternatives", !constituentAlt, `alternatives=${(p.alternatives || []).map(a => a.label).join(", ") || "none"}`);
}

// 10. Short Authentication lookup should prefer a direct Security question over
// generic P2P/reference cards that merely mention authentication.
{
  const s = search("who are you", true);
  const first = s.results[0];
  pass("Authentication cross-check ranking is focused", first && first._resultType !== "reference" && /security/i.test(`${first.subtopic || ""} ${first.topic || ""}`), `top=${first?.id || "none"} ${first?.subtopic || first?.title || ""}`);
}

if (failures) {
  console.error(`\n${failures} hardening test(s) failed.`);
  process.exit(1);
}
console.log("\nAll repository hardening tests passed.");
