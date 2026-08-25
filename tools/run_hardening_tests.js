#!/usr/bin/env node
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

function search(query, includeAnswers = true) {
  return engine.search({ query, mode: "hybrid", includeAnswers });
}

function predict(query) {
  const s = search(query, true);
  return predictor.predict(query, s.concepts, s.results, global.CSC3209_SEARCH_CONFIG);
}

function explain(query) {
  const s = search(query, true);
  return explainer.explain(query, s.concepts, s.results);
}

// 1. Top-level QA eligibility: supporting concepts/metrics may remain evidence,
// but cannot win an explicit "quality attribute" question.
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

// A direct sub-concept lookup remains possible; only explicit top-level QA
// answer eligibility is restricted.
{
  const s = search("latency", true);
  pass("Latency remains searchable as a detail/metric", s.concepts.some(c => c.label === "Latency"), `concepts=${s.concepts.map(c => c.label).join(", ")}`);
}

// 2. Explanation intent supports normal exam grammar beyond a literal "why".
for (const test of [
  { query: "How does Layer improve modifiability?", subject: "Layer", target: "Modifiability" },
  { query: "Explain how Pipe-and-Filter supports parallelization.", subject: "Pipe-and-Filter" },
  { query: "Describe how MVC separates user-interface functionality from application functionality.", subject: "MVC" }
]) {
  const p = explain(test.query);
  const routed = explainer.isWhyQuery(test.query);
  const subjectOk = p?.subject?.label === test.subject;
  const targetOk = !test.target || p?.target?.label === test.target;
  pass(`Explanation routing: ${test.query}`, routed && p?.answerMode === "why" && p?.state === "answer" && subjectOk && targetOk, `subject=${p?.subject?.label || "none"}, target=${p?.target?.label || "none"}`);
}

// 3. State calibration must correct the State-vs-Observer mechanism without
// erasing supporting evidence or manufacturing High confidence.
{
  const p = predict("Which pattern lets an object change behavior when its internal state changes instead of spreading conditionals?");
  const hasEvidenceText = (p.winner?.evidence || []).some(e => String(e.snippet || "").trim().length > 0);
  pass("State mechanism wins over Observer", p.state === "answer" && p.winner?.label === "State", `winner=${p.winner?.label || "none"}, confidence=${p.confidence?.level || "none"}`);
  pass("State calibration preserves evidence", hasEvidenceText, `evidence=${(p.winner?.evidence || []).length}`);
}

// 4. Boundary safety: aliases must match phrases/tokens, never substrings inside
// unrelated words.
for (const test of [
  { query: "player profile statistics", forbidden: "Layer" },
  { query: "statement object text", forbidden: "State" },
  { query: "multiplayer profile", forbidden: "Layer" }
]) {
  const s = search(test.query, true);
  const direct = s.concepts.filter(c => c.direct).map(c => c.label);
  pass(`Boundary-safe concepts: ${test.query}`, !direct.includes(test.forbidden), `direct=${direct.join(", ") || "none"}`);
}

// 5. Past-year model answers must be first-class searchable evidence.
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

if (failures) {
  console.error(`\n${failures} hardening test(s) failed.`);
  process.exit(1);
}
console.log("\nAll repository hardening tests passed.");
