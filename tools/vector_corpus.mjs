import crypto from "node:crypto";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

function loadGlobals() {
  global.window = global;
  require(path.join(ROOT, "questions.js"));
  require(path.join(ROOT, "expansion/questions_advanced.js"));
  require(path.join(ROOT, "expansion/questions_code.js"));
  require(path.join(ROOT, "search/concepts.js"));
  require(path.join(ROOT, "search/universal_references.js"));
  require(path.join(ROOT, "search/past_paper_references.js"));
  require(path.join(ROOT, "semantic_index.js"));
  require(path.join(ROOT, "search/predictor-calibration.js"));
}

function mergeBank(rows, bank) {
  return (rows || []).map(row => ({ ...row, bank: row.bank || bank }));
}

function normalizeSpace(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function hashPayload(payload) {
  return crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}

function conceptLabels(ids, byId) {
  return (ids || []).map(id => byId[id]?.label || id).filter(Boolean);
}

export function buildVectorDocuments() {
  loadGlobals();
  const config = global.CSC3209_SEARCH_CONFIG || {};
  const byId = config.byId || {};
  const generatedConceptIndex = new Map(((global.SEMANTIC_INDEX && global.SEMANTIC_INDEX.documents) || []).map(d => [d.id, d.concepts || []]));
  const questions = [
    ...mergeBank(global.QUESTIONS, "Original"),
    ...mergeBank(global.QUESTIONS_ADVANCED, "Advanced Depth"),
    ...mergeBank(global.QUESTIONS_CODE, "Code Implementation")
  ];
  const references = global.UNIVERSAL_REFERENCES || [];
  const docs = [];

  for (const q of questions) {
    const conceptIds = generatedConceptIndex.get(q.id) || [];
    const concepts = conceptLabels(conceptIds, byId);
    const text = [
      `Question ${q.id}`,
      `Bank: ${q.bank || ""}`,
      `Topic: ${q.topic || ""}`,
      `Subtopic: ${q.subtopic || ""}`,
      `Question type: ${q.type || ""}`,
      `Difficulty: ${q.difficulty || ""}`,
      `Exam family: ${q.family || ""}`,
      `Scenario: ${q.scenario || ""}`,
      `Tags: ${(q.tags || []).join(", ")}`,
      `Canonical concepts: ${concepts.join(", ")}`,
      `Prompt: ${q.prompt || ""}`,
      `Answer outline: ${q.answer_outline || ""}`,
      `Exam trap: ${q.exam_trap || ""}`,
      `Source: ${q.source || ""}`
    ].map(normalizeSpace).filter(Boolean).join(" | ");
    docs.push({
      id: q.id,
      kind: "question",
      bank: q.bank || "",
      topic: q.topic || "",
      subtopic: q.subtopic || "",
      concepts: conceptIds,
      text
    });
  }

  for (const r of references) {
    const conceptIds = r.concepts || [];
    const concepts = conceptLabels(conceptIds, byId);
    const isPastPaper = r.referenceType === "past-paper";
    const text = [
      `Reference ${r.id}`,
      `Reference type: ${isPastPaper ? "Past Paper / Model Answer" : "Universal Answer Reference"}`,
      `Title: ${r.title || ""}`,
      `Canonical concepts: ${concepts.join(", ")}`,
      `Body: ${r.body || ""}`,
      `Source: ${r.source || ""}`
    ].map(normalizeSpace).filter(Boolean).join(" | ");
    docs.push({
      id: r.id,
      kind: "reference",
      referenceType: r.referenceType || "universal",
      title: r.title || "",
      concepts: conceptIds,
      text
    });
  }

  docs.sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
  return docs;
}

export function corpusHashForDocuments(docs) {
  return hashPayload(docs.map(d => ({ id: d.id, kind: d.kind, text: d.text })));
}
