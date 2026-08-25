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
require(path.join(ROOT, "search/predictor-calibration.js"));

const DIMENSIONS = 384;
const TOP_VECTOR_CANDIDATES = 800;

const mergeBank = (arr, bank) => (arr || []).map(o => ({ ...o, bank: o.bank || bank }));
const questions = [
  ...mergeBank(global.QUESTIONS, "Original"),
  ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
  ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
];
const engine = global.createHybridSearchEngine(questions, global.UNIVERSAL_REFERENCES || [], global.CSC3209_SEARCH_CONFIG);

function textFor(result) {
  return [
    result.id,
    result.title,
    result.topic,
    result.subtopic,
    result.prompt,
    result.body,
    result.answer_outline,
    ...(result._concepts || []),
    ...(result._matchedConcepts || []).map(c => c.label)
  ].filter(Boolean).join(" | ").toLowerCase();
}

function rankFor(results, needles) {
  const lower = needles.map(n => n.toLowerCase());
  for (let i = 0; i < results.length; i += 1) {
    const text = textFor(results[i]);
    if (lower.some(needle => text.includes(needle))) return i + 1;
  }
  return Infinity;
}

function rowsFromOutput(out) {
  if (typeof out.tolist === "function") return out.tolist();
  const data = out.data;
  return [Array.from(data.subarray(0, DIMENSIONS))];
}

async function main() {
  const [{ env, pipeline }, corpus] = await Promise.all([
    import("@huggingface/transformers"),
    import("./vector_corpus.mjs")
  ]);
  const docs = corpus.buildVectorDocuments();
  const meta = JSON.parse(fs.readFileSync(path.join(ROOT, "search/vector_index.meta.json"), "utf8"));
  const vectors = new Int8Array(fs.readFileSync(path.join(ROOT, "search/vector_index.bin")));
  const idToRow = new Map((meta.documents || []).map((doc, row) => [doc.id, row]));

  env.allowLocalModels = true;
  env.allowRemoteModels = false;
  env.localModelPath = path.join(ROOT, "models") + path.sep;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.wasmPaths = path.join(ROOT, "models", "wasm") + path.sep;

  const extractor = await pipeline("feature-extraction", "all-MiniLM-L6-v2", { dtype: "q8" });

  async function vectorScoresFor(query, eligibleIds) {
    const out = await extractor([query.slice(0, 1200)], { pooling: "mean", normalize: true });
    const q = rowsFromOutput(out)[0];
    const scored = [];
    for (const id of eligibleIds) {
      const row = idToRow.get(id);
      if (row == null) continue;
      let dot = 0;
      const offset = row * DIMENSIONS;
      for (let i = 0; i < DIMENSIONS; i += 1) dot += q[i] * (vectors[offset + i] / 127);
      scored.push([id, dot]);
    }
    scored.sort((a, b) => b[1] - a[1]);
    const top = scored.slice(0, TOP_VECTOR_CANDIDATES);
    const max = Math.max(0.0001, top[0]?.[1] || 0.0001);
    return new Map(top.filter(([, score]) => score > 0).map(([id, score]) => [id, score / max]));
  }

  const tests = [
    { query: "keep the service usable when one backend dies", expected: ["availability", "failover"], maxRank: 5 },
    { query: "machines contribute their own resources and also consume resources from others", expected: ["peer-to-peer"], maxRank: 3 },
    { query: "information passes through independent transformations one after another", expected: ["pipe-and-filter"], maxRank: 3 },
    { query: "change the user interface without rewriting core business rules", expected: ["layer", "mvc", "modifiability"], maxRank: 5 },
    { query: "verify who a user actually is", expected: ["authentication"], maxRank: 3 },
    { query: "Observer", expected: ["observer"], maxRank: 1, mode: "semantic" },
    { query: "Peer-to-Peer", expected: ["peer-to-peer"], maxRank: 1, mode: "semantic" },
    { query: "ATAM", expected: ["atam"], maxRank: 1, mode: "semantic" }
  ];

  let failures = 0;
  for (const test of tests) {
    const mode = test.mode || "hybrid";
    const options = { query: test.query, mode, includeAnswers: true };
    const eligibleIds = engine.vectorEligibleIds(options);
    const vectorScores = await vectorScoresFor(test.query, eligibleIds);
    const search = engine.search({ ...options, vectorScores });
    const rank = rankFor(search.results, test.expected);
    const topVector = Number(search.results[0]?._vectorScore || 0);
    const ok = rank <= test.maxRank && topVector > 0;
    if (!ok) failures += 1;
    console.log(`\n${ok ? "PASS" : "FAIL"} local semantic: ${test.query}`);
    console.log(`Expected rank <= ${test.maxRank}; actual rank ${Number.isFinite(rank) ? rank : "not found"}; top vector score ${topVector.toFixed(3)}`);
    for (const result of search.results.slice(0, 5)) {
      console.log(`- ${result.id} ${result.subtopic || result.title || result.topic} | vector=${Number(result._vectorScore || 0).toFixed(3)} score=${Number(result._score || 0).toFixed(1)}`);
    }
  }

  const freshHash = corpus.corpusHashForDocuments(docs);
  const fresh = meta.corpusHash === freshHash && meta.documentCount === docs.length;
  if (!fresh) failures += 1;
  console.log(`\n${fresh ? "PASS" : "FAIL"} vector metadata freshness`);

  if (failures) {
    console.error(`\n${failures} local semantic test(s) failed.`);
    process.exitCode = 1;
    return;
  }
  console.log("\nAll local vector semantic tests passed.");
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
