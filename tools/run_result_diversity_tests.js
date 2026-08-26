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
require(path.join(ROOT, "search/predictor-calibration.js"));

const questions = [...global.QUESTIONS, ...global.QUESTIONS_ADVANCED, ...global.QUESTIONS_CODE];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);
let failures = 0;
function check(name, ok, details) {
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}${details ? ` - ${details}` : ""}`);
  if (!ok) failures += 1;
}

for (const query of ["Availability", "Layer", "Pipe-and-Filter", "Observer", "Client-Server", "Utility Tree"]) {
  const search = engine.search({ query, mode: "hybrid", includeAnswers: true });
  const top = search.results.slice(0, 10);
  const counts = new Map();
  for (const row of top) counts.set(row._duplicateGroup, (counts.get(row._duplicateGroup) || 0) + 1);
  const distinct = counts.size;
  const largestGroup = Math.max(0, ...counts.values());
  check(`${query} Top 10 contains distinct evidence`, distinct >= 6 && largestGroup <= 3, `distinct=${distinct}, largestTemplateGroup=${largestGroup}`);
  check(`${query} reports meaningful rather than all scored candidates`, search.meaningfulCount === search.results.length && search.candidateCount >= search.meaningfulCount && search.meaningfulCount > 0, `meaningful=${search.meaningfulCount}, candidates=${search.candidateCount}`);
}

{
  const search = engine.search({ query: "Q00001", mode: "exact", includeAnswers: false });
  check("Exact ID survives relevance floor", search.results[0]?.id === "Q00001", `top=${search.results[0]?.id || "none"}`);
}
{
  const search = engine.search({ query: "successive independent transformations", mode: "hybrid", includeAnswers: true });
  const rank = search.results.findIndex(row => row.subtopic === "Pipe-and-Filter" || /Pipe-and-Filter/.test(row.title || ""));
  check("Natural-language mechanism survives relevance floor", rank >= 0 && rank < 5, `rank=${rank < 0 ? "not found" : rank + 1}`);
}
{
  const search = engine.search({ query: "Utility Tree", mode: "hybrid", includeAnswers: true });
  const rank = search.results.findIndex(row => row._resultType === "reference");
  check("Relevant references survive relevance floor", rank >= 0 && rank < 10, `rank=${rank < 0 ? "not found" : rank + 1}`);
}

if (failures) {
  console.error(`\n${failures} result diversity/relevance test(s) failed.`);
  process.exit(1);
}
console.log("\nAll result diversity and relevance-floor tests passed.");
