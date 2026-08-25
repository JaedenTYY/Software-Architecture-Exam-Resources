#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { env, pipeline } from "@huggingface/transformers";
import { ROOT } from "./vector_corpus.mjs";

const DIMENSIONS = 384;

function rowsFromOutput(out) {
  if (typeof out.tolist === "function") return out.tolist();
  const data = out.data;
  return [Array.from(data.subarray(0, DIMENSIONS))];
}

function score(queryVector, vectors, count) {
  const scored = [];
  for (let row = 0; row < count; row += 1) {
    let dot = 0;
    const offset = row * DIMENSIONS;
    for (let i = 0; i < DIMENSIONS; i += 1) dot += queryVector[i] * (vectors[offset + i] / 127);
    scored.push(dot);
  }
  scored.sort((a, b) => b - a);
  return scored[0];
}

async function embed(extractor, text) {
  const out = await extractor([text], { pooling: "mean", normalize: true });
  return rowsFromOutput(out)[0];
}

async function main() {
  const meta = JSON.parse(fs.readFileSync(path.join(ROOT, "search/vector_index.meta.json"), "utf8"));
  const vectors = new Int8Array(fs.readFileSync(path.join(ROOT, "search/vector_index.bin")));
  env.allowLocalModels = true;
  env.allowRemoteModels = false;
  env.localModelPath = path.join(ROOT, "models") + path.sep;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.wasmPaths = path.join(ROOT, "models", "wasm") + path.sep;

  const loadStart = performance.now();
  const extractor = await pipeline("feature-extraction", "all-MiniLM-L6-v2", { dtype: "q8" });
  const loadMs = performance.now() - loadStart;

  await embed(extractor, "warm up");
  const query = "keep the service usable when one backend dies";
  const embedStart = performance.now();
  const vector = await embed(extractor, query);
  const embedMs = performance.now() - embedStart;

  const scoreStart = performance.now();
  const top = score(vector, vectors, meta.documentCount);
  const scoringMs = performance.now() - scoreStart;

  const endStart = performance.now();
  const vector2 = await embed(extractor, "change the user interface without rewriting core business rules");
  score(vector2, vectors, meta.documentCount);
  const endMs = performance.now() - endStart;

  console.log(JSON.stringify({
    modelLoadMs: Math.round(loadMs),
    warmQueryEmbeddingMs: Math.round(embedMs),
    vectorScoringMs: Math.round(scoringMs),
    hybridVectorPassMs: Math.round(endMs),
    documentCount: meta.documentCount,
    dimensions: DIMENSIONS,
    topScore: Number(top.toFixed(4))
  }, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
