import { env, pipeline } from "@huggingface/transformers";

const MODEL_ID = "all-MiniLM-L6-v2";
const MODEL_DTYPE = "q8";
const DIMENSIONS = 384;
const TOP_VECTOR_CANDIDATES = 800;

function createLocalSemanticSearch() {
  const listeners = new Set();
  const queryCache = new Map();
  let indexPromise = null;
  let extractorPromise = null;
  let status = { kind: "idle", message: "Exact search ready" };
  let lastMetrics = null;

  function emit(next) {
    status = next;
    for (const listener of listeners) listener(status);
  }

  function subscribe(listener) {
    listeners.add(listener);
    listener(status);
    return () => listeners.delete(listener);
  }

  function baseUrl(relativePath) {
    return new URL(relativePath, document.baseURI).href;
  }

  function isFileProtocol() {
    return location.protocol === "file:";
  }

  function configureTransformers() {
    env.allowLocalModels = true;
    env.allowRemoteModels = false;
    env.localModelPath = baseUrl("models/");
    if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.wasmPaths = baseUrl("models/wasm/");
  }

  async function loadIndex() {
    if (indexPromise) return indexPromise;
    indexPromise = (async () => {
      if (isFileProtocol()) throw new Error("Local semantic model requires HTTP");
      emit({ kind: "loading-index", message: "Local semantic index loading..." });
      const t0 = performance.now();
      const metaRes = await fetch(baseUrl("search/vector_index.meta.json"), { cache: "force-cache" });
      if (!metaRes.ok) throw new Error(`Vector metadata unavailable (${metaRes.status})`);
      const meta = await metaRes.json();
      const binRes = await fetch(baseUrl("search/vector_index.bin"), { cache: "force-cache" });
      if (!binRes.ok) throw new Error(`Vector index unavailable (${binRes.status})`);
      const buffer = await binRes.arrayBuffer();
      const vectors = new Int8Array(buffer);
      if (meta.dimensions !== DIMENSIONS || vectors.length !== meta.documentCount * DIMENSIONS) {
        throw new Error("Vector index shape mismatch");
      }
      const idToRow = new Map((meta.documents || []).map((doc, row) => [doc.id, row]));
      const loadMs = performance.now() - t0;
      lastMetrics = { ...(lastMetrics || {}), vectorIndexLoadMs: Math.round(loadMs), vectorIndexBytes: vectors.byteLength };
      return { meta, vectors, idToRow };
    })();
    indexPromise.catch(error => {
      indexPromise = null;
      emit({ kind: "unavailable", message: `${error.message}; concept fallback active.` });
    });
    return indexPromise;
  }

  async function loadExtractor() {
    if (extractorPromise) return extractorPromise;
    extractorPromise = (async () => {
      if (isFileProtocol()) throw new Error("Local semantic model requires HTTP");
      configureTransformers();
      emit({ kind: "loading-model", message: "Local semantic model loading..." });
      const t0 = performance.now();
      const extractor = await pipeline("feature-extraction", MODEL_ID, { dtype: MODEL_DTYPE });
      const modelLoadMs = performance.now() - t0;
      lastMetrics = { ...(lastMetrics || {}), modelLoadMs: Math.round(modelLoadMs) };
      emit({ kind: "ready", message: "Local semantic model ready" });
      return extractor;
    })();
    extractorPromise.catch(error => {
      extractorPromise = null;
      emit({ kind: "unavailable", message: `${error.message}; concept fallback active.` });
    });
    return extractorPromise;
  }

  function normalizeQuery(query) {
    return String(query || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function rowsFromOutput(out) {
    if (typeof out.tolist === "function") return out.tolist();
    const data = out.data;
    return [Array.from(data.subarray(0, DIMENSIONS))];
  }

  async function embedQuery(query) {
    const key = normalizeQuery(query);
    if (queryCache.has(key)) return queryCache.get(key);
    const extractor = await loadExtractor();
    const t0 = performance.now();
    const out = await extractor([String(query || "").slice(0, 1200)], { pooling: "mean", normalize: true });
    const row = rowsFromOutput(out)[0];
    const vector = new Float32Array(row);
    const embedMs = performance.now() - t0;
    lastMetrics = { ...(lastMetrics || {}), queryEmbeddingMs: Math.round(embedMs) };
    queryCache.set(key, vector);
    return vector;
  }

  function scoreRows(queryVector, index, eligibleIds) {
    const t0 = performance.now();
    const eligible = eligibleIds && eligibleIds.length ? eligibleIds : (index.meta.documents || []).map(d => d.id);
    const scored = [];
    for (const id of eligible) {
      const row = index.idToRow.get(id);
      if (row == null) continue;
      let dot = 0;
      const offset = row * DIMENSIONS;
      for (let i = 0; i < DIMENSIONS; i += 1) dot += queryVector[i] * (index.vectors[offset + i] / 127);
      scored.push([id, dot]);
    }
    scored.sort((a, b) => b[1] - a[1]);
    const top = scored.slice(0, TOP_VECTOR_CANDIDATES);
    const max = Math.max(0.0001, top[0]?.[1] || 0.0001);
    const scores = new Map();
    for (const [id, score] of top) {
      if (score <= 0) continue;
      scores.set(id, Math.max(0, Math.min(1, score / max)));
    }
    const scoringMs = performance.now() - t0;
    lastMetrics = {
      ...(lastMetrics || {}),
      vectorScoringMs: Math.round(scoringMs),
      vectorCandidates: top.length,
      eligibleDocuments: eligible.length
    };
    return scores;
  }

  async function score(query, eligibleIds) {
    const t0 = performance.now();
    const [index, queryVector] = await Promise.all([loadIndex(), embedQuery(query)]);
    const vectorScores = scoreRows(queryVector, index, eligibleIds);
    lastMetrics = { ...(lastMetrics || {}), semanticEndToEndMs: Math.round(performance.now() - t0) };
    return { vectorScores, meta: index.meta, metrics: lastMetrics };
  }

  return {
    score,
    subscribe,
    getStatus: () => status,
    getMetrics: () => lastMetrics
  };
}

window.createLocalSemanticSearch = createLocalSemanticSearch;
