#!/usr/bin/env node
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "search/offline-manifest.js");
const checkOnly = process.argv.includes("--check");
const critical = [
  "./", "index.html", "questions.js", "expansion/questions_advanced.js", "expansion/questions_code.js",
  "search/concepts.js", "search/universal_references.js", "search/past_paper_references.js", "semantic_index.js",
  "search/hybrid-search.js", "search/exam-explainer.js", "search/predictor-calibration.js", "search/answer-predictor.js"
];
const optional = [
  "search/local-semantic.bundle.js", "search/vector_index.meta.json", "search/vector_index.bin",
  "models/all-MiniLM-L6-v2/config.json", "models/all-MiniLM-L6-v2/tokenizer.json", "models/all-MiniLM-L6-v2/tokenizer_config.json",
  "models/all-MiniLM-L6-v2/onnx/model_quantized.onnx", "models/wasm/ort-wasm-simd-threaded.jsep.mjs", "models/wasm/ort-wasm-simd-threaded.jsep.wasm"
];

for (const asset of [...critical, ...optional].filter(asset => asset !== "./")) {
  if (!fs.existsSync(path.join(ROOT, asset))) throw new Error(`Offline asset does not exist: ${asset}`);
}

const hash = crypto.createHash("sha256");
for (const asset of [...critical, ...optional]) {
  hash.update(asset);
  hash.update("\0");
  hash.update(fs.readFileSync(path.join(ROOT, asset === "./" ? "index.html" : asset)));
  hash.update("\0");
}
const manifest = { version: hash.digest("hex").slice(0, 16), critical, optional };
const output = `self.CSC3209_OFFLINE_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`;
const current = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, "utf8") : "";
if (checkOnly && current !== output) {
  console.error("Offline manifest is stale. Run: node tools/build_offline_manifest.js");
  process.exit(1);
}
if (!checkOnly && current !== output) fs.writeFileSync(OUTPUT, output);
console.log(`Offline manifest ${checkOnly ? "verified" : "built"}: ${manifest.version} (${critical.length} critical, ${optional.length} optional assets)`);
