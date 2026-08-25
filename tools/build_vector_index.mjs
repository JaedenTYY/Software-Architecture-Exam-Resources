#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { env, pipeline } from "@huggingface/transformers";
import { ROOT, buildVectorDocuments, corpusHashForDocuments } from "./vector_corpus.mjs";

const MODEL_ID = "all-MiniLM-L6-v2";
const MODEL_SOURCE = "sentence-transformers/all-MiniLM-L6-v2";
const MODEL_RUNTIME = "@huggingface/transformers";
const MODEL_DTYPE = "q8";
const DIMENSIONS = 384;
const OUT_META = path.join(ROOT, "search", "vector_index.meta.json");
const OUT_BIN = path.join(ROOT, "search", "vector_index.bin");
const BATCH_SIZE = Number(process.env.VECTOR_BATCH_SIZE || 32);

function configureLocalTransformers() {
  env.allowLocalModels = true;
  env.allowRemoteModels = false;
  env.localModelPath = path.join(ROOT, "models") + path.sep;
  if (env.backends?.onnx?.wasm) {
    env.backends.onnx.wasm.wasmPaths = path.join(ROOT, "models", "wasm") + path.sep;
  }
}

function rowsFromOutput(out, expectedRows) {
  const list = typeof out.tolist === "function" ? out.tolist() : null;
  if (list) return list;
  const data = out.data;
  const dims = Math.floor(data.length / expectedRows);
  const rows = [];
  for (let i = 0; i < expectedRows; i += 1) {
    rows.push(Array.from(data.subarray(i * dims, (i + 1) * dims)));
  }
  return rows;
}

function quantizeRow(row) {
  if (row.length !== DIMENSIONS) {
    throw new Error(`Expected ${DIMENSIONS} dimensions, got ${row.length}`);
  }
  const out = new Int8Array(DIMENSIONS);
  for (let i = 0; i < DIMENSIONS; i += 1) {
    const value = Math.max(-1, Math.min(1, Number(row[i]) || 0));
    out[i] = Math.max(-127, Math.min(127, Math.round(value * 127)));
  }
  return out;
}

async function main() {
  configureLocalTransformers();
  const docs = buildVectorDocuments();
  const corpusHash = corpusHashForDocuments(docs);
  console.log(`Vector corpus: ${docs.length} documents`);
  console.log(`Corpus hash: ${corpusHash}`);
  console.log("Loading local MiniLM q8 model...");
  const loadStart = performance.now();
  const extractor = await pipeline("feature-extraction", MODEL_ID, { dtype: MODEL_DTYPE });
  const loadMs = performance.now() - loadStart;
  console.log(`Model loaded in ${Math.round(loadMs)} ms`);

  const matrix = new Int8Array(docs.length * DIMENSIONS);
  const embedStart = performance.now();
  for (let i = 0; i < docs.length; i += BATCH_SIZE) {
    const batch = docs.slice(i, i + BATCH_SIZE);
    const out = await extractor(batch.map(d => d.text.slice(0, 1200)), { pooling: "mean", normalize: true });
    const rows = rowsFromOutput(out, batch.length);
    rows.forEach((row, j) => matrix.set(quantizeRow(row), (i + j) * DIMENSIONS));
    console.log(`Embedded ${Math.min(i + batch.length, docs.length)}/${docs.length}`);
  }
  const embedMs = performance.now() - embedStart;

  fs.writeFileSync(OUT_BIN, Buffer.from(matrix.buffer, matrix.byteOffset, matrix.byteLength));
  const meta = {
    kind: "CSC3209 local vector semantic index",
    version: 1,
    buildVersion: 1,
    model: MODEL_ID,
    modelSource: MODEL_SOURCE,
    runtime: MODEL_RUNTIME,
    dtype: MODEL_DTYPE,
    dimensions: DIMENSIONS,
    pooling: "mean",
    normalized: true,
    quantization: {
      type: "int8_symmetric_unit",
      scale: 127,
      dequantize: "value / 127"
    },
    documentCount: docs.length,
    documents: docs.map(d => ({ id: d.id, kind: d.kind })),
    corpusHash,
    sourceTextHash: corpusHash,
    files: {
      vectors: "vector_index.bin"
    },
    timingsMs: {
      modelLoad: Math.round(loadMs),
      documentEmbedding: Math.round(embedMs)
    },
    generatedAt: new Date().toISOString()
  };
  fs.writeFileSync(OUT_META, JSON.stringify(meta, null, 2) + "\n");
  console.log(`Wrote ${path.relative(ROOT, OUT_META)}`);
  console.log(`Wrote ${path.relative(ROOT, OUT_BIN)} (${matrix.byteLength.toLocaleString()} bytes)`);
  console.log(`Embedding time: ${Math.round(embedMs)} ms`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
