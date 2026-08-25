#!/usr/bin/env node
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
global.window = global;
require(path.join(ROOT, "questions.js"));
require(path.join(ROOT, "expansion/questions_advanced.js"));
require(path.join(ROOT, "expansion/questions_code.js"));

const banks = [
  { name: "Original", rows: global.QUESTIONS || [], expected: 3888 },
  { name: "Advanced Depth", rows: global.QUESTIONS_ADVANCED || [], expected: 171 },
  { name: "Code Implementation", rows: global.QUESTIONS_CODE || [], expected: 72 }
];

const TOP_LEVEL_QUALITY_ATTRIBUTES = [
  "Availability",
  "Interoperability",
  "Modifiability",
  "Performance",
  "Security",
  "Testability",
  "Usability"
];

const EXPECTED_QUALITY_TOPIC_COUNTS = {
  Original: 672,
  "Advanced Depth": 25
};

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isMissingAnswer(question) {
  const answer = text(question.answer_outline);
  if (!answer) return true;
  if (answer.length < 10) return true;
  return /^(?:n\/?a|none|tbd|todo|pending|answer unavailable|not available|coming soon|placeholder)\.?$/i.test(answer);
}

function isQualityQuestion(question) {
  return /quality\s+attributes?/i.test(text(question.topic));
}

function searchableQuestionText(question) {
  return [
    question.topic,
    question.subtopic,
    question.type,
    question.family,
    question.scenario,
    question.prompt,
    question.answer_outline,
    ...(question.tags || [])
  ].map(text).join(" ").toLowerCase();
}

let failed = false;
const all = [];

console.log("Answer completeness audit\n");

for (const bank of banks) {
  if (bank.rows.length !== bank.expected) {
    failed = true;
    console.error(`[FAIL] ${bank.name}: expected ${bank.expected} questions, found ${bank.rows.length}.`);
  } else {
    console.log(`[PASS] ${bank.name}: ${bank.rows.length}/${bank.expected} questions loaded.`);
  }

  for (const q of bank.rows) all.push({ ...q, _bankName: bank.name });

  const missing = bank.rows.filter(isMissingAnswer);
  if (missing.length) {
    failed = true;
    console.error(`[FAIL] ${bank.name}: ${missing.length} question(s) have a missing/placeholder answer_outline.`);
    for (const q of missing.slice(0, 100)) console.error(`  - ${q.id}: ${q.topic} / ${q.subtopic} / ${q.type}`);
    if (missing.length > 100) console.error(`  ... ${missing.length - 100} more`);
  } else {
    console.log(`[PASS] ${bank.name}: every question has a non-empty answer_outline.`);
  }

  if (bank.name === "Code Implementation") {
    const missingCode = bank.rows.filter(q => !text(q.code_answer));
    if (missingCode.length) {
      failed = true;
      console.error(`[FAIL] ${bank.name}: ${missingCode.length} question(s) have no code_answer.`);
      for (const q of missingCode.slice(0, 100)) console.error(`  - ${q.id}: ${q.subtopic} / ${q.type}`);
    } else {
      console.log(`[PASS] ${bank.name}: every coding question has a code_answer.`);
    }
  }
}

const ids = new Set();
const duplicateIds = [];
for (const q of all) {
  if (!text(q.id)) {
    failed = true;
    console.error(`[FAIL] Question without an ID in ${q._bankName}.`);
    continue;
  }
  if (ids.has(q.id)) duplicateIds.push(q.id);
  ids.add(q.id);
}
if (duplicateIds.length) {
  failed = true;
  console.error(`[FAIL] Duplicate question IDs: ${[...new Set(duplicateIds)].join(", ")}`);
} else {
  console.log(`[PASS] IDs are unique across all ${all.length} questions.`);
}

const qualityRows = all.filter(isQualityQuestion);
console.log(`\nQuality Attribute audit: ${qualityRows.length} question(s)`);

for (const [bankName, expected] of Object.entries(EXPECTED_QUALITY_TOPIC_COUNTS)) {
  const count = qualityRows.filter(q => q._bankName === bankName).length;
  if (count !== expected) {
    failed = true;
    console.error(`[FAIL] ${bankName} Quality Attributes topic: expected ${expected}, found ${count}.`);
  } else {
    console.log(`[PASS] ${bankName} Quality Attributes topic: ${count}/${expected} questions loaded.`);
  }
}

const missingQualityAnswers = qualityRows.filter(isMissingAnswer);
if (missingQualityAnswers.length) {
  failed = true;
  console.error(`[FAIL] Quality Attributes: ${missingQualityAnswers.length} answer(s) unavailable.`);
  for (const q of missingQualityAnswers) console.error(`  - ${q.id} [${q._bankName}] ${q.subtopic} / ${q.type}`);
} else {
  console.log(`[PASS] Quality Attributes: every one of the ${qualityRows.length} questions has an answer_outline.`);
}

for (const qa of TOP_LEVEL_QUALITY_ATTRIBUTES) {
  const needle = qa.toLowerCase();
  const matches = qualityRows.filter(q => searchableQuestionText(q).includes(needle));
  if (!matches.length) {
    failed = true;
    console.error(`[FAIL] No Quality Attribute question/evidence found for ${qa}.`);
  } else {
    console.log(`[PASS] ${qa}: ${matches.length} Quality Attribute question(s) contain grounded answer/search evidence.`);
  }
}

const totalMissing = all.filter(isMissingAnswer);
console.log(`\nRepository answer coverage: ${all.length - totalMissing.length}/${all.length} (${((all.length - totalMissing.length) / Math.max(1, all.length) * 100).toFixed(2)}%)`);
console.log(`Quality Attribute answer coverage: ${qualityRows.length - missingQualityAnswers.length}/${qualityRows.length} (${((qualityRows.length - missingQualityAnswers.length) / Math.max(1, qualityRows.length) * 100).toFixed(2)}%)`);

if (failed) {
  console.error("\nAnswer completeness audit FAILED.");
  process.exit(1);
}

console.log("\nAll question-bank answer completeness checks passed.");
