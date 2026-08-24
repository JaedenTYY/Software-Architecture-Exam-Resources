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

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);

const tests = [
  {
    query: "system continues working if server crashes",
    expected: [["Availability"], ["Failover", "Redundancy"], ["Fault", "Failure"]]
  },
  {
    query: "change UI without changing business rules",
    expected: [["Layer"], ["Modifiability"], ["Separation of Concerns"]]
  },
  {
    query: "data transformed through several independent stages",
    expected: [["Pipe-and-Filter"]]
  },
  {
    query: "every computer can both request and provide files",
    expected: [["Peer-to-Peer"]]
  },
  {
    query: "one event producer informs many listeners",
    expected: [["Publish-Subscribe", "Observer"]]
  },
  {
    query: "95 percent requests in under 2 seconds",
    expected: [["Performance"], ["Quality Attribute Scenario"], ["Response Measure"]]
  },
  {
    query: "who are you",
    expected: [["Authentication"]]
  },
  {
    query: "are you allowed to do this",
    expected: [["Authorization"]]
  },
  {
    query: "where software runs on physical machines",
    expected: [["Allocation Structure", "Multi-Tier"]]
  },
  {
    query: "how code responsibilities are organized",
    expected: [["Module Structure", "Layer"]]
  },
  {
    query: "how components communicate while system is running",
    expected: [["Component-and-Connector"]]
  },
  {
    query: "one database crashing affects all otherwise independent services",
    expected: [["Single Point of Failure"], ["Availability"], ["Shared-Data"]]
  },
  {
    query: "adding more servers does not automatically guarantee",
    expected: [["Availability"], ["Redundancy"], ["Failover", "Single Point of Failure"]]
  },
  {
    query: "source stimulus environment",
    expected: [["Quality Attribute Scenario"], ["Response Measure"]]
  },
  {
    query: "business value architecture impact high high",
    expected: [["Utility Tree"], ["ASR"]]
  },
  {
    query: "Peer-to-Peer",
    expected: [["Peer-to-Peer"]]
  },
  {
    query: "observer",
    expected: [["Observer"]]
  }
];

function haystackFor(result) {
  return [
    result.title,
    result.topic,
    result.subtopic,
    result.type,
    result.prompt,
    result.body,
    ...(result._matchedConcepts || []).map(c => c.label),
    ...(result._concepts || [])
  ].filter(Boolean).join(" | ").toLowerCase();
}

let failures = 0;
for (const test of tests) {
  const { results, concepts } = engine.search({ query: test.query, mode: "hybrid", includeAnswers: false });
  const topConcepts = concepts.map(c => c.label);
  const topResults = results.slice(0, 10);
  const resultText = topResults.map(haystackFor).join("\n");
  const conceptText = topConcepts.join(" | ").toLowerCase();
  const ok = test.expected.every(group => group.some(term => {
    const needle = term.toLowerCase();
    return conceptText.includes(needle) || resultText.includes(needle);
  }));
  if (!ok) failures += 1;
  console.log(`\n${ok ? "PASS" : "FAIL"}: ${test.query}`);
  console.log(`Concepts: ${topConcepts.join(" · ") || "(none)"}`);
  console.log("Top results:");
  for (const r of results.slice(0, 5)) {
    const label = r._resultType === "reference" ? `Reference: ${r.title}` : `${r.id} ${r.subtopic} (${r.topic})`;
    const matches = (r._matchedConcepts || []).map(c => c.label).join(" · ");
    console.log(`- ${label}${matches ? ` | ${matches}` : ""}`);
  }
}

if (failures) {
  console.error(`\n${failures} search test(s) failed.`);
  process.exit(1);
}
console.log("\nAll semantic search tests passed.");
