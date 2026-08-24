#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

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
    name: "Test A",
    query: "Which best architecture pattern for someone to get information periodically?",
    intent: "architectural-pattern",
    state: "ambiguous",
    notWinner: ["Service-Oriented Architecture"],
    possibilities: ["Client-Server", "Publish-Subscribe"],
    missingIncludes: "Who initiates the communication?"
  },
  {
    name: "Test B",
    query: "Users request updated information from the server every 30 seconds.",
    state: "answer",
    winner: "Client-Server",
    category: "architectural-pattern",
    confidenceOneOf: ["High", "Medium"],
    whyIncludes: "request"
  },
  {
    name: "Test C",
    query: "Users automatically receive an update whenever new information becomes available.",
    state: "answer",
    winner: "Publish-Subscribe",
    category: "architectural-pattern",
    confidenceOneOf: ["High"]
  },
  {
    name: "Test D",
    query: "The platform integrates independently provided payment, identity and shipping services through published network interfaces.",
    state: "answer",
    winner: "Service-Oriented Architecture",
    category: "architectural-pattern",
    confidenceOneOf: ["High"]
  },
  {
    name: "Test E",
    query: "Server A crashes, but traffic is redirected and users continue normally. What quality attribute is demonstrated?",
    intent: "quality",
    state: "answer",
    winner: "Availability",
    category: "quality",
    confidenceOneOf: ["High"]
  },
  {
    name: "Test F",
    query: "Who are you?",
    intent: "security-concept",
    state: "answer",
    winner: "Authentication",
    category: "security",
    confidenceOneOf: ["High"],
    notWinner: ["Authorization"]
  },
  {
    name: "Test G",
    query: "Are you allowed to do this?",
    intent: "security-concept",
    state: "answer",
    winner: "Authorization",
    category: "security",
    confidenceOneOf: ["High"],
    notWinner: ["Authentication"]
  },
  {
    name: "Test H",
    query: "source stimulus environment artifact response response measure",
    intent: "framework",
    state: "answer",
    winner: "Quality Attribute Scenario",
    category: "framework",
    confidenceOneOf: ["High"]
  },
  {
    name: "Test I",
    query: "Data is passed through several independent stages, each transforming its input before forwarding its output.",
    state: "answer",
    winner: "Pipe-and-Filter",
    category: "architectural-pattern",
    confidenceOneOf: ["High"]
  },
  {
    name: "Test J",
    query: "Each network node may both request and provide its own resources.",
    state: "answer",
    winner: "Peer-to-Peer",
    category: "architectural-pattern",
    confidenceOneOf: ["High"]
  },
  {
    name: "Regression 1",
    query: "Which architectural pattern lets users receive updates when information changes?",
    intent: "architectural-pattern",
    state: "answer",
    winner: "Publish-Subscribe",
    category: "architectural-pattern",
    notWinner: ["Observer", "Performance"]
  },
  {
    name: "Regression 2",
    query: "Which design pattern automatically updates interested objects when one object changes state?",
    intent: "design-pattern",
    state: "answer",
    winner: "Observer",
    category: "design-pattern",
    related: "Publish-Subscribe",
    notWinner: ["Publish-Subscribe"]
  },
  {
    name: "Regression 3",
    query: "The server crashes but users continue normally. What quality attribute is this about?",
    intent: "quality",
    state: "answer",
    winner: "Availability",
    category: "quality",
    confidenceOneOf: ["High"]
  },
  {
    name: "Regression 4",
    query: "What quality can Layer improve by isolating changes?",
    intent: "quality-enhanced",
    state: "answer",
    winner: "Modifiability",
    category: "quality"
  },
  {
    name: "Regression 5",
    query: "What quality can be degraded by too many Layer boundaries?",
    intent: "quality-threatened",
    state: "answer",
    winner: "Performance",
    category: "quality"
  },
  {
    name: "Regression 6",
    query: "Which architectural pattern processes data through successive independent transformations?",
    intent: "architectural-pattern",
    state: "answer",
    winner: "Pipe-and-Filter",
    category: "architectural-pattern"
  },
  {
    name: "Regression 7",
    query: "Which pattern has entities that can both request and provide resources?",
    intent: "architectural-pattern",
    state: "answer",
    winner: "Peer-to-Peer",
    category: "architectural-pattern"
  },
  {
    name: "Regression 8",
    query: "Who are you?",
    intent: "security-concept",
    state: "answer",
    winner: "Authentication",
    category: "security",
    notWinner: ["Authorization"]
  },
  {
    name: "Regression 9",
    query: "Are you allowed to access this resource?",
    intent: "security-concept",
    state: "answer",
    winner: "Authorization",
    category: "security",
    notWinner: ["Authentication"]
  },
  {
    name: "Regression 10",
    query: "source stimulus environment artifact response response measure",
    intent: "framework",
    state: "answer",
    winner: "Quality Attribute Scenario",
    category: "framework"
  },
  {
    name: "Regression 11",
    query: "What is the best architectural pattern for distributing notifications?",
    intent: "architectural-pattern",
    state: "answer",
    winner: "Publish-Subscribe",
    category: "architectural-pattern",
    notCategory: "quality"
  },
  {
    name: "Regression 12",
    query: "Users get information periodically",
    state: "ambiguous",
    ambiguous: true,
    possibilities: ["Client-Server", "Publish-Subscribe"]
  }
];

function runPrediction(query) {
  const search = engine.search({ query, mode: "hybrid", includeAnswers: true });
  return predictor.predict(query, search.concepts, search.results, global.CSC3209_SEARCH_CONFIG);
}

function relatedContains(prediction, label) {
  return (prediction.related || []).some(group => group.concepts.some(concept => concept.label === label));
}

function possibilitiesContain(prediction, label) {
  return (prediction.possibilities || []).some(item => item.label === label || item.concept?.label === label);
}

function textIncludes(values, text) {
  return (values || []).some(value => String(value).toLowerCase().includes(text.toLowerCase()));
}

let failures = 0;
for (const test of tests) {
  const prediction = runPrediction(test.query);
  const checks = [];
  checks.push(["shown", prediction.shown === true]);
  if (test.intent) checks.push(["intent", prediction.intent?.intent === test.intent]);
  if (test.state) checks.push(["state", prediction.state === test.state]);
  if (test.winner) checks.push(["winner", prediction.winner?.label === test.winner]);
  if (test.category) checks.push(["category", prediction.winner?.category === test.category]);
  if (test.notWinner) {
    for (const label of test.notWinner) checks.push([`not winner ${label}`, prediction.winner?.label !== label]);
  }
  if (test.notCategory) checks.push([`not category ${test.notCategory}`, prediction.winner?.category !== test.notCategory]);
  if (test.related) checks.push([`related ${test.related}`, relatedContains(prediction, test.related) || (prediction.alternatives || []).some(c => c.label === test.related)]);
  if (test.ambiguous) checks.push(["ambiguous", prediction.ambiguity?.isAmbiguous === true]);
  if (test.confidenceOneOf) checks.push(["confidence", test.confidenceOneOf.includes(prediction.confidence?.level)]);
  if (test.possibilities) {
    for (const label of test.possibilities) checks.push([`possibility ${label}`, possibilitiesContain(prediction, label)]);
  }
  if (test.missingIncludes) checks.push(["missing information", textIncludes(prediction.missingInformation, test.missingIncludes)]);
  if (test.whyIncludes) checks.push(["why includes", textIncludes([...(prediction.why || []), ...(prediction.examReady || [])], test.whyIncludes)]);

  const ok = checks.every(([, passed]) => passed);
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"} ${test.name || ""}: ${test.query}`);
  console.log(`State: ${prediction.state || "(none)"} · Intent: ${prediction.intent?.intent || "(none)"} · Winner: ${prediction.winner?.label || "(none)"} · Category: ${prediction.winner?.category || "(none)"} · Confidence: ${prediction.confidence?.level || "(none)"} · Ambiguous: ${prediction.ambiguity?.isAmbiguous ? "yes" : "no"}`);
  if (prediction.possibilities?.length) console.log(`Possibilities: ${prediction.possibilities.map(p => p.label).join(" · ")}`);
  if (prediction.missingInformation?.length) console.log(`Missing: ${prediction.missingInformation.join(" · ")}`);
  console.log(`Alternatives: ${(prediction.alternatives || []).map(c => `${c.label} ${c.percent}%`).join(" · ") || "(none)"}`);
  if (!ok) {
    for (const [name, passed] of checks) {
      if (!passed) console.log(`  failed: ${name}`);
    }
  }
}

const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const toggleChecks = [
  ["toggle input", /id="predictionToggle"/.test(indexHtml)],
  ["toggle storage key", /csc3209-predicted-answer-enabled/.test(indexHtml)],
  ["toggle hides panel", /hidePrediction\(\)/.test(indexHtml)],
  ["toggle skips predictor", /!els\.predictionToggle\.checked/.test(indexHtml)]
];
const toggleOk = toggleChecks.every(([, passed]) => passed);
if (!toggleOk) failures += 1;
console.log(`\n${toggleOk ? "PASS" : "FAIL"} Test K: Predicted Exam Answer ON/OFF toggle wiring`);
for (const [name, passed] of toggleChecks) {
  if (!passed) console.log(`  failed: ${name}`);
}

if (failures) {
  console.error(`\n${failures} answer predictor test(s) failed.`);
  process.exit(1);
}
console.log("\nAll answer predictor tests passed.");
