#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { ROOT, buildVectorDocuments, corpusHashForDocuments } from "./vector_corpus.mjs";

const META = path.join(ROOT, "search", "vector_index.meta.json");
const BIN = path.join(ROOT, "search", "vector_index.bin");
const DIMENSIONS = 384;

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!fs.existsSync(META) || !fs.existsSync(BIN)) {
  fail("Vector index is missing.\nRun: npm run build:vectors");
}

const meta = JSON.parse(fs.readFileSync(META, "utf8"));
const docs = buildVectorDocuments();
const corpusHash = corpusHashForDocuments(docs);

if (meta.corpusHash !== corpusHash) {
  fail("Vector index is stale.\nRun: npm run build:vectors");
}

if (meta.documentCount !== docs.length) {
  fail("Vector index document count is stale.\nRun: npm run build:vectors");
}

if (meta.dimensions !== DIMENSIONS) {
  fail(`Vector index dimensions must be ${DIMENSIONS}.\nRun: npm run build:vectors`);
}

const expectedIds = docs.map(d => d.id);
const actualIds = (meta.documents || []).map(d => d.id);
if (expectedIds.length !== actualIds.length || expectedIds.some((id, index) => id !== actualIds[index])) {
  fail("Vector index document ordering is stale.\nRun: npm run build:vectors");
}

const stat = fs.statSync(BIN);
const expectedBytes = docs.length * DIMENSIONS;
if (stat.size !== expectedBytes) {
  fail(`Vector binary size mismatch: expected ${expectedBytes}, got ${stat.size}.\nRun: npm run build:vectors`);
}

console.log(`Vector index fresh: ${docs.length} documents, ${DIMENSIONS} dimensions, ${stat.size.toLocaleString()} bytes`);
