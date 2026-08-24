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
require(path.join(ROOT, "search/exam-explainer.js"));

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);
const explainer = global.createExamExplainer(global.CSC3209_SEARCH_CONFIG);

const tests = [
  {
    query: "Why does Layer improve modifiability?",
    subject: "Layer",
    target: "Modifiability",
    includes: ["dependencies", "local", "modifiability"]
  },
  {
    query: "Why can too many layers hurt performance?",
    subject: "Layer",
    target: "Performance",
    includes: ["indirection", "performance"]
  },
  {
    query: "Why does Pipe-and-Filter improve throughput?",
    subject: "Pipe-and-Filter",
    includes: ["parallel", "throughput"]
  },
  {
    query: "Why do more filters not always improve performance?",
    subject: "Pipe-and-Filter",
    includes: ["buffer", "overhead"]
  },
  {
    query: "Why is P2P scalable?",
    subject: "Peer-to-Peer",
    includes: ["resources", "demand"]
  },
  {
    query: "Why does P2P not guarantee availability?",
    subject: "Peer-to-Peer",
    includes: ["only one peer", "availability"]
  },
  {
    query: "Why can Client-Server threaten availability?",
    subject: "Client-Server",
    target: "Availability",
    includes: ["single point of failure"]
  },
  {
    query: "Why can Client-Server become slow under high load?",
    subject: "Client-Server",
    includes: ["bottleneck"]
  },
  {
    query: "Why does Publish-Subscribe improve modifiability?",
    subject: "Publish-Subscribe",
    target: "Modifiability",
    includes: ["subscriber", "decoupl"]
  },
  {
    query: "Why does SOA support interoperability?",
    subject: "Service-Oriented Architecture",
    target: "Interoperability",
    includes: ["published service", "interface"]
  },
  {
    query: "Why does Broker improve modifiability?",
    subject: "Broker",
    target: "Modifiability",
    includes: ["location", "provider"]
  },
  {
    query: "Why does MVC improve modifiability?",
    subject: "MVC",
    target: "Modifiability",
    includes: ["model", "view"]
  },
  {
    query: "Why is Map-Reduce suitable for huge batch datasets?",
    subject: "Map-Reduce",
    includes: ["parallel", "partition"]
  },
  {
    query: "Why can Multi-Tier improve security?",
    subject: "Multi-Tier",
    target: "Security",
    includes: ["deployment", "boundar"]
  },
  {
    query: "Why is Observer useful?",
    subject: "Observer",
    includes: ["subject", "observer"]
  },
  {
    query: "Why is State pattern useful when behavior changes with internal state?",
    subject: "State",
    includes: ["state", "condition"]
  },
  {
    query: "Why is Factory Method useful?",
    subject: "Factory Method",
    includes: ["creation", "concrete"]
  },
  {
    query: "Why should Singleton only be used when one instance is actually required?",
    subject: "Singleton",
    includes: ["one", "global"]
  },
  {
    query: "Why is Composite suitable for tree structures?",
    subject: "Composite",
    includes: ["leaf", "uniform"]
  },
  {
    query: "Why is Facade useful for a complex subsystem?",
    subject: "Facade",
    includes: ["interface", "subsystem"]
  },
  {
    query: "Why is ATAM useful before construction?",
    subject: "ATAM",
    includes: ["risk", "quality"]
  },
  {
    query: "Why is QAW useful before architecture is final?",
    subject: "QAW",
    includes: ["stakeholder", "scenario"]
  },
  {
    query: "Why is PALM useful when a quality target has no business rationale?",
    subject: "PALM",
    includes: ["business", "pedigree"]
  },
  {
    query: "Why is ADD useful for architecture design?",
    subject: "ADD",
    includes: ["asr", "iterat"]
  },
  {
    query: "Why do we need a six-part quality attribute scenario?",
    subject: "Quality Attribute Scenario",
    includes: ["measur", "stimulus"]
  },
  {
    query: "Why is a Utility Tree useful?",
    subject: "Utility Tree",
    includes: ["business value", "architectural impact"]
  },
  {
    query: "Why do more servers not guarantee availability?",
    includes: ["shared", "failover", "availability"]
  },
  {
    query: "Why is software architecture important?",
    includes: ["quality", "decision"]
  }
];

function run(query) {
  const search = engine.search({ query, mode: "hybrid", includeAnswers: true });
  return explainer.explain(query, search.concepts, search.results);
}

function text(prediction) {
  return [
    ...(prediction.why || []),
    ...(prediction.mechanismChain || []),
    ...(prediction.examReady || []),
    ...(prediction.evidence || []).map(e => e.snippet)
  ].join(" ").toLowerCase();
}

let failures = 0;
for (const test of tests) {
  const prediction = run(test.query);
  const haystack = text(prediction || {});
  const checks = [
    ["recognized why", explainer.isWhyQuery(test.query)],
    ["shown", prediction?.shown === true],
    ["why mode", prediction?.answerMode === "why"],
    ["answer state", prediction?.state === "answer"]
  ];
  if (test.subject) checks.push(["subject", prediction?.subject?.label === test.subject]);
  if (test.target) checks.push(["target", prediction?.target?.label === test.target]);
  for (const term of test.includes || []) checks.push([`contains ${term}`, haystack.includes(term.toLowerCase())]);
  checks.push(["exam-ready", (prediction?.examReady || []).length > 0]);
  checks.push(["mechanism chain", (prediction?.mechanismChain || []).length >= 3]);

  const ok = checks.every(([, pass]) => pass);
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"}: ${test.query}`);
  console.log(`Subject: ${prediction?.subject?.label || "(none)"} · Target: ${prediction?.target?.label || "(none)"} · Confidence: ${prediction?.confidence?.level || "(none)"}`);
  console.log(`Answer: ${(prediction?.why || []).join(" ") || "(none)"}`);
  console.log(`Chain: ${(prediction?.mechanismChain || []).join(" -> ") || "(none)"}`);
  if (!ok) for (const [name, pass] of checks) if (!pass) console.log(`  failed: ${name}`);
}

const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const wiring = [
  ["explainer script", /search\/exam-explainer\.js/.test(html)],
  ["explainer instantiated", /createExamExplainer/.test(html)],
  ["why routing", /examExplainer\.isWhyQuery\(query\)/.test(html)],
  ["causal mechanism UI", /Causal mechanism/.test(html)],
  ["cross-check evidence UI", /Supporting evidence \/ cross-check/.test(html)]
];
const wiringOk = wiring.every(([, pass]) => pass);
if (!wiringOk) failures += 1;
console.log(`\n${wiringOk ? "PASS" : "FAIL"}: Browser why-question wiring`);
for (const [name, pass] of wiring) if (!pass) console.log(`  failed: ${name}`);

if (failures) {
  console.error(`\n${failures} why-explainer test(s) failed.`);
  process.exit(1);
}
console.log("\nAll why-explainer tests passed.");
