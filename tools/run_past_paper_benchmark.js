#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const ROOT = path.resolve(__dirname, "..");
const args = new Set(process.argv.slice(2));
const enforce = !args.has("--no-enforce");
const jsonOnly = args.has("--json");
const outputArg = process.argv.indexOf("--output");
const outputFile = outputArg >= 0 ? process.argv[outputArg + 1] : null;
const useVectors = args.has("--vectors");

global.window = global;
require(path.join(ROOT, "questions.js"));
require(path.join(ROOT, "expansion/questions_advanced.js"));
require(path.join(ROOT, "expansion/questions_code.js"));
require(path.join(ROOT, "search/concepts.js"));
require(path.join(ROOT, "search/universal_references.js"));
require(path.join(ROOT, "semantic_index.js"));
require(path.join(ROOT, "search/hybrid-search.js"));
require(path.join(ROOT, "search/predictor-calibration.js"));
require(path.join(ROOT, "search/answer-predictor.js"));

const mergeBank = (rows, bank) => (rows || []).map(row => ({ ...row, bank: row.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);
const predictor = global.createAnswerPredictor(global.CSC3209_SEARCH_CONFIG);
const benchmark = JSON.parse(fs.readFileSync(path.join(ROOT, "benchmarks/past_paper_benchmark.json"), "utf8"));
const modes = (args.has("--all-modes") || useVectors) ? ["exact", "hybrid", "semantic"] : ["hybrid"];
const forms = ["full_context", "isolated_requirement"];

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function resultText(result) {
  return normalize([
    result.id, result.title, result.topic, result.subtopic, result.type, result.prompt,
    result.answer_outline, result.body, ...(result.tags || []), ...(result._concepts || []),
    ...(result._matchedConcepts || []).map(row => row.label)
  ].filter(Boolean).join(" "));
}

function supportsCase(result, testCase) {
  if ((testCase.relevant_reference_ids || []).includes(result.id)) return true;
  const primary = [result.subtopic, result.title, ...(result.tags || [])].map(normalize);
  const directMatches = (result._matchedConcepts || []).filter(match => match.kind === "direct").map(match => normalize(match.label));
  return (testCase.accepted_answers || []).some(answer => primary.includes(normalize(answer)) || directMatches.includes(normalize(answer)));
}

function rankOfSupportingResult(results, testCase) {
  const index = results.findIndex(result => supportsCase(result, testCase));
  return index < 0 ? null : index + 1;
}

function expectedState(testCase, form) {
  return typeof testCase.expected_state === "string" ? testCase.expected_state : testCase.expected_state[form];
}

function acceptedWinner(testCase, winner) {
  const actual = normalize(winner?.label);
  return !!actual && testCase.accepted_answers.some(answer => normalize(answer) === actual);
}

function ratio(numerator, denominator) {
  return denominator ? numerator / denominator : null;
}

function summarize(rows) {
  const expectedAnswers = rows.filter(row => row.expectedState === "answer");
  const expectedAmbiguous = rows.filter(row => row.expectedState === "ambiguous");
  const expectedNoEvidence = rows.filter(row => row.expectedState === "no-evidence");
  const answersByConfidence = level => rows.filter(row => row.confidence === level && row.state === "answer");
  const confidenceAccuracy = level => {
    const selected = answersByConfidence(level);
    return ratio(selected.filter(row => row.correctWinner && row.expectedState === "answer").length, selected.length);
  };
  return {
    cases: rows.length,
    winnerAccuracy: ratio(expectedAnswers.filter(row => row.correctWinner && row.state === "answer").length, expectedAnswers.length),
    fullContextAccuracy: ratio(expectedAnswers.filter(row => row.form === "full_context" && row.correctWinner && row.state === "answer").length, expectedAnswers.filter(row => row.form === "full_context").length),
    isolatedAccuracy: ratio(expectedAnswers.filter(row => row.form === "isolated_requirement" && row.correctWinner && row.state === "answer").length, expectedAnswers.filter(row => row.form === "isolated_requirement").length),
    highConfidenceAccuracy: confidenceAccuracy("High"),
    mediumConfidenceAccuracy: confidenceAccuracy("Medium"),
    abstentionRate: ratio(rows.filter(row => row.state !== "answer").length, rows.length),
    falseAbstentionRate: ratio(expectedAnswers.filter(row => row.state !== "answer").length, expectedAnswers.length),
    ambiguityCorrectness: ratio(expectedAmbiguous.filter(row => row.state === "ambiguous").length, expectedAmbiguous.length),
    noEvidenceCorrectness: ratio(expectedNoEvidence.filter(row => row.state === "no-evidence").length, expectedNoEvidence.length),
    highConfidenceWrong: rows.filter(row => row.state === "answer" && row.confidence === "High" && !(row.expectedState === "answer" && row.correctWinner)).length,
    top1RetrievalAccuracy: ratio(rows.filter(row => row.supportingRank === 1).length, rows.length),
    top5RetrievalCoverage: ratio(rows.filter(row => row.supportingRank && row.supportingRank <= 5).length, rows.length),
    relevantReferenceTop10: ratio(rows.filter(row => row.referenceRank && row.referenceRank <= 10).length, rows.length),
    meanSearchMs: ratio(rows.reduce((sum, row) => sum + row.searchMs, 0), rows.length)
  };
}

async function createVectorScorer() {
  const [{ env, pipeline }, corpus] = await Promise.all([import("@huggingface/transformers"), import("./vector_corpus.mjs")]);
  const dimensions = 384;
  const meta = JSON.parse(fs.readFileSync(path.join(ROOT, "search/vector_index.meta.json"), "utf8"));
  const docs = corpus.buildVectorDocuments();
  if (meta.corpusHash !== corpus.corpusHashForDocuments(docs)) throw new Error("Vector index is stale; run npm run build:vectors before vector benchmarking.");
  const vectors = new Int8Array(fs.readFileSync(path.join(ROOT, "search/vector_index.bin")));
  const idToRow = new Map((meta.documents || []).map((doc, row) => [doc.id, row]));
  env.allowLocalModels = true;
  env.allowRemoteModels = false;
  env.localModelPath = path.join(ROOT, "models") + path.sep;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.wasmPaths = path.join(ROOT, "models/wasm") + path.sep;
  const extractor = await pipeline("feature-extraction", "all-MiniLM-L6-v2", { dtype: "q8" });
  const cache = new Map();
  return async (query, eligibleIds) => {
    const cacheKey = `${query}\u0000${eligibleIds.length}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);
    const output = await extractor([String(query).slice(0, 1200)], { pooling: "mean", normalize: true });
    const queryVector = typeof output.tolist === "function" ? output.tolist()[0] : Array.from(output.data.subarray(0, dimensions));
    const scored = [];
    for (const id of eligibleIds) {
      const row = idToRow.get(id);
      if (row == null) continue;
      let dot = 0;
      const offset = row * dimensions;
      for (let index = 0; index < dimensions; index += 1) dot += queryVector[index] * (vectors[offset + index] / 127);
      scored.push([id, dot]);
    }
    scored.sort((a, b) => b[1] - a[1]);
    const top = scored.slice(0, 800);
    const max = Math.max(0.0001, top[0]?.[1] || 0.0001);
    const scores = new Map(top.filter(([, score]) => score > 0).map(([id, score]) => [id, score / max]));
    cache.set(cacheKey, scores);
    return scores;
  };
}

async function main() {
const predictionRows = [];
const retrievalByMode = Object.fromEntries(modes.map(mode => [mode, []]));
const vectorScoresFor = useVectors ? await createVectorScorer() : null;

for (const testCase of benchmark.cases) {
  for (const form of forms) {
    const query = testCase[form];
    let hybridSearch = null;
    for (const mode of modes) {
      const searchOptions = { query, mode, includeAnswers: true };
      if (vectorScoresFor && mode !== "exact") searchOptions.vectorScores = await vectorScoresFor(query, engine.vectorEligibleIds(searchOptions));
      const start = performance.now();
      const search = engine.search(searchOptions);
      const searchMs = performance.now() - start;
      const supportingRank = rankOfSupportingResult(search.results, testCase);
      const referenceIndex = search.results.findIndex(result => (testCase.relevant_reference_ids || []).includes(result.id));
      retrievalByMode[mode].push({
        id: testCase.id,
        paper: testCase.paper,
        form,
        query,
        supportingRank,
        referenceRank: referenceIndex < 0 ? null : referenceIndex + 1,
        searchMs
      });
      if (mode === "hybrid") hybridSearch = search;
    }

    const prediction = predictor.predict(query, hybridSearch.concepts, hybridSearch.results, global.CSC3209_SEARCH_CONFIG);
    const winner = prediction.winner?.label || null;
    const state = prediction.state || "no-evidence";
    const expected = expectedState(testCase, form);
    const correctWinner = acceptedWinner(testCase, prediction.winner);
    const retrieval = retrievalByMode.hybrid[retrievalByMode.hybrid.length - 1];
    predictionRows.push({
      id: testCase.id,
      paper: testCase.paper,
      question: testCase.question,
      form,
      query,
      expectedIntent: testCase.expected_intent,
      inferredIntent: prediction.intent?.intent || null,
      expectedState: expected,
      state,
      acceptedAnswers: testCase.accepted_answers,
      mustNotAnswer: testCase.must_not_answer || [],
      winner,
      confidence: prediction.confidence?.level || null,
      confidenceScore: prediction.confidence?.numeric ?? null,
      correctWinner,
      correctState: state === expected,
      supportingRank: retrieval.supportingRank,
      referenceRank: retrieval.referenceRank,
      searchMs: retrieval.searchMs,
      source: testCase.source,
      notes: testCase.notes
    });
  }
}

const modeComparison = {};
for (const mode of modes) {
  const rows = retrievalByMode[mode];
  modeComparison[mode] = {
    top1: ratio(rows.filter(row => row.supportingRank === 1).length, rows.length),
    top5: ratio(rows.filter(row => row.supportingRank && row.supportingRank <= 5).length, rows.length),
    referenceTop10: ratio(rows.filter(row => row.referenceRank && row.referenceRank <= 10).length, rows.length),
    meanSearchMs: ratio(rows.reduce((sum, row) => sum + row.searchMs, 0), rows.length)
  };
}

const metrics = summarize(predictionRows);
const failures = predictionRows.filter(row => !row.correctState || (row.expectedState === "answer" && !row.correctWinner));
const report = {
  schemaVersion: 1,
  benchmarkCases: benchmark.cases.length,
  papers: [...new Set(benchmark.cases.map(testCase => testCase.paper))],
  forms,
  predictorMode: "hybrid",
  vectorSearchEnabled: useVectors,
  metrics,
  modeComparison,
  failures,
  results: predictionRows
};

if (outputFile) fs.writeFileSync(path.resolve(ROOT, outputFile), `${JSON.stringify(report, null, 2)}\n`);

if (jsonOnly) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const pct = value => value == null ? "n/a" : `${(value * 100).toFixed(1)}%`;
  console.log(`Past-paper benchmark: ${benchmark.cases.length} cases, ${predictionRows.length} full/isolated evaluations`);
  console.log(`Full-context accuracy: ${pct(metrics.fullContextAccuracy)}`);
  console.log(`Isolated accuracy: ${pct(metrics.isolatedAccuracy)}`);
  console.log(`High-confidence wrong: ${metrics.highConfidenceWrong}`);
  console.log(`Ambiguity correctness: ${pct(metrics.ambiguityCorrectness)}`);
  console.log(`Hybrid Top-5 retrieval: ${pct(metrics.top5RetrievalCoverage)}`);
  for (const [mode, values] of Object.entries(modeComparison)) {
    console.log(`${mode}: Top-1 ${pct(values.top1)} | Top-5 ${pct(values.top5)} | mean ${values.meanSearchMs.toFixed(2)} ms`);
  }
  if (failures.length) {
    console.log("\nFailed cases:");
    for (const row of failures) {
      console.log(`- ${row.id} [${row.form}] expected ${row.expectedState}/${row.acceptedAnswers.join(" or ")} -> ${row.state}/${row.winner || "none"} (${row.confidence || "no confidence"})`);
    }
  }
}

if (enforce) {
  const targetFailures = [];
  if ((metrics.fullContextAccuracy || 0) < 0.9) targetFailures.push("full-context accuracy below 90%");
  if (metrics.highConfidenceWrong !== 0) targetFailures.push("high-confidence wrong answers are not zero");
  if ((metrics.top5RetrievalCoverage || 0) < 0.95) targetFailures.push("hybrid Top-5 retrieval coverage below 95%");
  if ((metrics.ambiguityCorrectness || 0) < 1) targetFailures.push("real-paper ambiguity case was not handled correctly");
  if (targetFailures.length) {
    console.error(`\nBenchmark target failures: ${targetFailures.join("; ")}`);
    process.exit(1);
  }
}
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
