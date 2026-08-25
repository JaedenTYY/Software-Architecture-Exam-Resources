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
// Loads past-paper/model-answer references before the engine is instantiated.
require(path.join(ROOT, "search/predictor-calibration.js"));

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);

// Ranking assertions are intentionally stricter than the original suite.
// A test no longer passes merely because a desired word occurs somewhere in
// the first 10 results. The expected concept must be near the top, or a
// specifically requested source/result must be within an explicit rank bound.
const tests = [
  { query: "system continues working if server crashes", concept: ["Availability"], maxConceptRank: 2 },
  { query: "change UI without changing business rules", concept: ["Layer", "Modifiability"], maxConceptRank: 2 },
  { query: "data transformed through several independent stages", concept: ["Pipe-and-Filter"], maxConceptRank: 1 },
  { query: "every computer can both request and provide files", concept: ["Peer-to-Peer"], maxConceptRank: 1 },
  { query: "one event producer informs many listeners", concept: ["Publish-Subscribe", "Observer"], maxConceptRank: 2 },
  { query: "95 percent requests in under 2 seconds", concept: ["Performance"], maxConceptRank: 2 },
  { query: "who are you", concept: ["Authentication"], maxConceptRank: 1 },
  { query: "are you allowed to do this", concept: ["Authorization"], maxConceptRank: 1 },
  { query: "where software runs on physical machines", concept: ["Allocation Structure"], maxConceptRank: 2 },
  { query: "how code responsibilities are organized", concept: ["Module Structure", "Layer"], maxConceptRank: 2 },
  { query: "how components communicate while system is running", concept: ["Component-and-Connector"], maxConceptRank: 1 },
  { query: "one database crashing affects all otherwise independent services", concept: ["Single Point of Failure", "Availability"], maxConceptRank: 3 },
  { query: "adding more servers does not automatically guarantee", concept: ["Availability", "Redundancy", "Single Point of Failure"], maxConceptRank: 3 },
  { query: "source stimulus environment", concept: ["Quality Attribute Scenario"], maxConceptRank: 2 },
  { query: "business value architecture impact high high", concept: ["Utility Tree", "ASR"], maxConceptRank: 2 },
  { query: "Peer-to-Peer", concept: ["Peer-to-Peer"], maxConceptRank: 1 },
  { query: "observer", concept: ["Observer"], maxConceptRank: 1 },

  // Architectural patterns that previously lacked complete mechanism support.
  { query: "multiple synchronized views display the same model and controllers handle user input", concept: ["MVC"], maxConceptRank: 1 },
  { query: "huge dataset partitioned into map tasks then shuffle sort then reduce tasks", concept: ["Map-Reduce"], maxConceptRank: 1 },

  // GoF recognition without explicitly naming the design-pattern category.
  { query: "exactly one controlled instance global access point", concept: ["Singleton"], maxConceptRank: 1 },
  { query: "individual leaves and recursive groups treated uniformly", concept: ["Composite"], maxConceptRank: 1 },
  { query: "simple unified interface hides a complex subsystem", concept: ["Facade"], maxConceptRank: 1 },
  { query: "object behavior changes with internal state instead of conditionals", concept: ["State"], maxConceptRank: 1 },
  { query: "subclass decides which concrete product to instantiate", concept: ["Factory Method"], maxConceptRank: 1 },

  // Later lecture scope.
  { query: "architecture evaluation business drivers utility tree sensitivity point trade-off point", concept: ["ATAM"], maxConceptRank: 1 },
  { query: "informal semiformal formal notation architecture documentation", concept: ["Architecture Notation"], maxConceptRank: 1 },
  { query: "primary presentation element catalog context diagram variability guide rationale", concept: ["View Documentation"], maxConceptRank: 1 },
  { query: "mapping between module and runtime views implements is implemented by", concept: ["Cross-View Mapping"], maxConceptRank: 1 },
  { query: "implementation code violates documented architecture detect dependency violations", concept: ["Implementation Conformance"], maxConceptRank: 1 },
  { query: "risk based testing architecturally significant paths integration system acceptance regression", concept: ["Architecture-Informed Testing", "Testing Levels"], maxConceptRank: 2 },
  { query: "business goals quality concerns pedigree requirements", concept: ["PALM", "Business Goal"], maxConceptRank: 2 },
  { query: "choose element identify ASRs generate design solution iterate", concept: ["ADD"], maxConceptRank: 2 },

  // Past papers/model answers must participate in search evidence, not merely
  // exist as browsable Markdown files.
  {
    query: "August 2025 MVC model views controllers weakness modifiability",
    result: ["past paper + model answer", "august 2025 q3", "model-view-controller"],
    maxResultRank: 8,
    referenceType: "past-paper"
  },
  {
    query: "January 2026 Map-Reduce shuffle partition skew weakness",
    result: ["past paper + model answer", "january 2026 q3", "map-reduce"],
    maxResultRank: 8,
    referenceType: "past-paper"
  }
];

const boundaryTests = [
  { query: "player profile statistics", forbiddenDirect: ["Layer"] },
  { query: "statement object text", forbiddenDirect: ["State"] },
  { query: "multiplayer profile", forbiddenDirect: ["Layer"] }
];

function haystackFor(result) {
  return [
    result.title,
    result.topic,
    result.subtopic,
    result.type,
    result.prompt,
    result.body,
    result.answer_outline,
    result.source,
    ...(result._matchedConcepts || []).map(c => c.label),
    ...(result._concepts || [])
  ].filter(Boolean).join(" | ").toLowerCase();
}

function firstMatchingConceptRank(concepts, expected) {
  const labels = concepts.map(c => String(c.label || "").toLowerCase());
  const needles = expected.map(x => x.toLowerCase());
  const ranks = labels.map((label, index) => needles.some(needle => label === needle || label.includes(needle)) ? index + 1 : Infinity);
  return Math.min(...ranks, Infinity);
}

function firstMatchingResultRank(results, expected, referenceType) {
  const needles = expected.map(x => x.toLowerCase());
  for (let i = 0; i < results.length; i += 1) {
    const result = results[i];
    if (referenceType && result.referenceType !== referenceType) continue;
    const text = haystackFor(result);
    if (needles.every(needle => text.includes(needle))) return i + 1;
  }
  return Infinity;
}

let failures = 0;
for (const test of tests) {
  const { results, concepts } = engine.search({ query: test.query, mode: "hybrid", includeAnswers: true });
  const checks = [];

  if (test.concept) {
    const rank = firstMatchingConceptRank(concepts, test.concept);
    checks.push([`concept rank <= ${test.maxConceptRank}`, rank <= test.maxConceptRank, rank]);
  }
  if (test.result) {
    const rank = firstMatchingResultRank(results, test.result, test.referenceType);
    checks.push([`result rank <= ${test.maxResultRank}`, rank <= test.maxResultRank, rank]);
  }

  const ok = checks.every(([, pass]) => pass);
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"}: ${test.query}`);
  console.log(`Concepts: ${concepts.map(c => `${c.label}${c.direct ? "*" : ""}`).join(" · ") || "(none)"}`);
  console.log("Top results:");
  for (const r of results.slice(0, 5)) {
    const label = r._resultType === "reference" ? `Reference: ${r.title}` : `${r.id} ${r.subtopic} (${r.topic})`;
    const matches = (r._matchedConcepts || []).map(c => c.label).join(" · ");
    console.log(`- ${label}${r.referenceType ? ` [${r.referenceType}]` : ""}${matches ? ` | ${matches}` : ""}`);
  }
  for (const [name, pass, rank] of checks) {
    if (!pass) console.log(`  failed: ${name}; actual rank = ${Number.isFinite(rank) ? rank : "not found"}`);
  }
}

for (const test of boundaryTests) {
  const { concepts } = engine.search({ query: test.query, mode: "hybrid", includeAnswers: true });
  const direct = new Set(concepts.filter(c => c.direct).map(c => c.label));
  const bad = test.forbiddenDirect.filter(label => direct.has(label));
  const ok = bad.length === 0;
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"} boundary: ${test.query}`);
  console.log(`Direct concepts: ${[...direct].join(" · ") || "(none)"}`);
  if (!ok) console.log(`  false substring concepts: ${bad.join(" · ")}`);
}

const info = engine.inspect();
const pastPaperCount = (global.UNIVERSAL_REFERENCES || []).filter(r => r.referenceType === "past-paper").length;
const corpusCheck = pastPaperCount >= 21 && info.references >= pastPaperCount;
if (!corpusCheck) failures += 1;
console.log(`\n${corpusCheck ? "PASS" : "FAIL"}: Past-paper/model-answer corpus indexed (${pastPaperCount} past-paper refs; ${info.references} total refs)`);

if (failures) {
  console.error(`\n${failures} search test(s) failed.`);
  process.exit(1);
}
console.log("\nAll semantic search and ranking tests passed.");
