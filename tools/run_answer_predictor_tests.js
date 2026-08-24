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
require(path.join(ROOT, "search/answer-predictor.js"));

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);
const predictor = global.createAnswerPredictor(global.CSC3209_SEARCH_CONFIG);

const tests = [
  {
    query: "Which architectural pattern lets users receive updates when information changes?",
    intent: "architectural-pattern",
    winner: "Publish-Subscribe",
    category: "architectural-pattern",
    notWinner: ["Observer", "Performance"]
  },
  {
    query: "Which design pattern automatically updates interested objects when one object changes state?",
    intent: "design-pattern",
    winner: "Observer",
    category: "design-pattern",
    related: "Publish-Subscribe",
    notWinner: ["Publish-Subscribe"]
  },
  {
    query: "The server crashes but users continue normally. What quality attribute is this about?",
    intent: "quality",
    winner: "Availability",
    category: "quality"
  },
  {
    query: "What quality can Layer improve by isolating changes?",
    intent: "quality-enhanced",
    winner: "Modifiability",
    category: "quality"
  },
  {
    query: "What quality can be degraded by too many Layer boundaries?",
    intent: "quality-threatened",
    winner: "Performance",
    category: "quality"
  },
  {
    query: "Which architectural pattern processes data through successive independent transformations?",
    intent: "architectural-pattern",
    winner: "Pipe-and-Filter",
    category: "architectural-pattern"
  },
  {
    query: "Which pattern has entities that can both request and provide resources?",
    intent: "architectural-pattern",
    winner: "Peer-to-Peer",
    category: "architectural-pattern"
  },
  {
    query: "Who are you?",
    intent: "quality",
    winner: "Authentication",
    category: "security",
    notWinner: ["Authorization"]
  },
  {
    query: "Are you allowed to access this resource?",
    intent: "quality",
    winner: "Authorization",
    category: "security",
    notWinner: ["Authentication"]
  },
  {
    query: "source stimulus environment artifact response response measure",
    intent: "framework",
    winner: "Quality Attribute Scenario",
    category: "framework"
  },
  {
    query: "What is the best architectural pattern for distributing notifications?",
    intent: "architectural-pattern",
    winner: "Publish-Subscribe",
    category: "architectural-pattern",
    notCategory: "quality"
  },
  {
    query: "Users get information periodically",
    ambiguous: true,
    confidenceOneOf: ["Low", "Medium"]
  }
];

function runPrediction(query) {
  const search = engine.search({ query, mode: "hybrid", includeAnswers: true });
  return predictor.predict(query, search.concepts, search.results, global.CSC3209_SEARCH_CONFIG);
}

function relatedContains(prediction, label) {
  return (prediction.related || []).some(group => group.concepts.some(concept => concept.label === label));
}

let failures = 0;
for (const test of tests) {
  const prediction = runPrediction(test.query);
  const checks = [];
  checks.push(["shown", prediction.shown === true]);
  if (test.intent) checks.push(["intent", prediction.intent?.intent === test.intent]);
  if (test.winner) checks.push(["winner", prediction.winner?.label === test.winner]);
  if (test.category) checks.push(["category", prediction.winner?.category === test.category]);
  if (test.notWinner) {
    for (const label of test.notWinner) checks.push([`not winner ${label}`, prediction.winner?.label !== label]);
  }
  if (test.notCategory) checks.push([`not category ${test.notCategory}`, prediction.winner?.category !== test.notCategory]);
  if (test.related) checks.push([`related ${test.related}`, relatedContains(prediction, test.related) || (prediction.alternatives || []).some(c => c.label === test.related)]);
  if (test.ambiguous) checks.push(["ambiguous", prediction.ambiguity?.isAmbiguous === true]);
  if (test.confidenceOneOf) checks.push(["confidence", test.confidenceOneOf.includes(prediction.confidence?.level)]);

  const ok = checks.every(([, passed]) => passed);
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"}: ${test.query}`);
  console.log(`Intent: ${prediction.intent?.intent || "(none)"} · Winner: ${prediction.winner?.label || "(none)"} · Category: ${prediction.winner?.category || "(none)"} · Confidence: ${prediction.confidence?.level || "(none)"} · Ambiguous: ${prediction.ambiguity?.isAmbiguous ? "yes" : "no"}`);
  console.log(`Alternatives: ${(prediction.alternatives || []).map(c => `${c.label} ${c.percent}%`).join(" · ") || "(none)"}`);
  if (!ok) {
    for (const [name, passed] of checks) {
      if (!passed) console.log(`  failed: ${name}`);
    }
  }
}

if (failures) {
  console.error(`\n${failures} answer predictor test(s) failed.`);
  process.exit(1);
}
console.log("\nAll answer predictor tests passed.");
