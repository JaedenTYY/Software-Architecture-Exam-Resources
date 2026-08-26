#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BANKS = [
  { name: "Original", file: "questions.json", expected: 3888 },
  { name: "Advanced Depth", file: "expansion/questions_advanced.json", expected: 171 },
  { name: "Code Implementation", file: "expansion/questions_code.json", expected: 72, code: true }
];
const EXPECTED_TOTAL = 4131;
const EXPECTED_QA_COUNTS = { Original: 672, "Advanced Depth": 25 };
const TOP_LEVEL_QUALITY_ATTRIBUTES = [
  "Availability",
  "Interoperability",
  "Modifiability",
  "Performance",
  "Security",
  "Testability",
  "Usability"
];

const failures = [];
const all = [];
const normalized = value => String(value || "").replace(/\s+/g, " ").trim();
const meaningful = value => {
  const text = normalized(value);
  return text.length >= 30 && !/^(todo|tbd|placeholder|answer unavailable|n\/?a|none|pending|not available|coming soon)\b/i.test(text);
};
const searchableText = question => [
  question.topic,
  question.subtopic,
  question.type,
  question.family,
  question.scenario,
  question.prompt,
  question.answer_outline,
  ...(question.tags || [])
].map(normalized).join(" ").toLowerCase();

for (const bank of BANKS) {
  const rows = JSON.parse(fs.readFileSync(path.join(ROOT, bank.file), "utf8"));
  if (!Array.isArray(rows)) {
    failures.push(`${bank.file}: expected a JSON array`);
    continue;
  }
  if (rows.length !== bank.expected) failures.push(`${bank.name}: expected ${bank.expected} questions, found ${rows.length}`);
  for (const question of rows) {
    all.push({ ...question, _bank: bank.name });
    if (!meaningful(question.prompt)) failures.push(`${question.id}: empty or placeholder prompt`);
    if (!meaningful(question.answer_outline)) failures.push(`${question.id}: empty or placeholder answer_outline`);
    if (bank.code && !meaningful(question.code_answer)) failures.push(`${question.id}: coding question has no meaningful code_answer`);
  }
}

const ids = new Set();
for (const question of all) {
  if (!normalized(question.id)) failures.push(`${question._bank}: question without an ID`);
  else if (ids.has(question.id)) failures.push(`${question.id}: duplicate ID`);
  else ids.add(question.id);
}

const qualityRows = all.filter(question => question.topic === "Quality Attributes");
for (const [bank, expected] of Object.entries(EXPECTED_QA_COUNTS)) {
  const count = qualityRows.filter(question => question._bank === bank).length;
  if (count !== expected) failures.push(`${bank} Quality Attributes: expected ${expected}, found ${count}`);
}
for (const question of qualityRows) {
  if (!meaningful(question.answer_outline)) failures.push(`${question.id}: Quality Attribute question lacks a meaningful answer`);
}
for (const attribute of TOP_LEVEL_QUALITY_ATTRIBUTES) {
  const matches = qualityRows.filter(question => searchableText(question).includes(attribute.toLowerCase()));
  if (!matches.length) failures.push(`No Quality Attribute question/evidence found for ${attribute}`);
}
if (all.length !== EXPECTED_TOTAL) failures.push(`Total: expected ${EXPECTED_TOTAL}, found ${all.length}`);

if (failures.length) {
  console.error(JSON.stringify({ ok: false, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  counts: {
    original: BANKS[0].expected,
    advanced: BANKS[1].expected,
    code: BANKS[2].expected,
    total: all.length,
    qualityAttributesOriginal: EXPECTED_QA_COUNTS.Original,
    qualityAttributesAdvanced: EXPECTED_QA_COUNTS["Advanced Depth"],
    qualityAttributesTotal: qualityRows.length
  },
  checks: [
    "meaningful prompt and answer_outline",
    "code_answer for coding questions",
    "unique IDs",
    "all Quality Attribute questions answered",
    "all seven top-level Quality Attributes represented"
  ]
}, null, 2));
