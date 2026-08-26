#!/usr/bin/env node
const childProcess = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const JSON_ONLY = process.argv.includes("--json");
const taxonomy = JSON.parse(fs.readFileSync(path.join(ROOT, "corpus/qa_taxonomy.json"), "utf8"));
const topLevel = new Set(taxonomy.top_level_quality_attributes.map(value => value.toLowerCase()));
const pseudo = new Set(Object.keys(taxonomy.non_top_level_terms));
const banks = ["questions.json", "expansion/questions_advanced.json", "expansion/questions_code.json"];
const questions = banks.flatMap(file => JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8")).map(question => ({ ...question, _file: file })));

global.window = global;
require(path.join(ROOT, "search/concepts.js"));
const config = global.CSC3209_SEARCH_CONFIG;

const violations = [];
const qaQuestion = question => /quality attribute|enhanced quality|threatened quality|quality trade[- ]?off/i.test([question.prompt, question.type, question.subtopic].join(" "));
const correctionQuestion = question => /correct a mis-stated quality|not a quality attribute|quality-vs-mechanism/i.test([question.type, question.answer_outline, (question.tags || []).join(" ")].join(" "));

const claimPatterns = [
  { role: "enhanced", regex: /(?:Likely enhanced quality|Enhanced candidate|Enhanced):\s*(?:\*\*)?([^*\.\n]+?)(?:\*\*)?(?=\s+because|\.|\n|$)/gi },
  { role: "threatened", regex: /(?:Threatened candidate|Threatened):\s*(?:\*\*)?([^*\.\n]+?)(?:\*\*)?(?=\s+because|\.|\n|$)/gi }
];

function cleanClaim(value) {
  return String(value || "").replace(/\*\*/g, "").replace(/\s*\([^)]*\)\s*$/, "").trim();
}

for (const question of questions) {
  if (!qaQuestion(question) || correctionQuestion(question)) continue;
  for (const { role, regex } of claimPatterns) {
    regex.lastIndex = 0;
    for (const match of String(question.answer_outline || "").matchAll(regex)) {
      const raw = match[1].trim();
      const claim = cleanClaim(raw);
      if (!topLevel.has(claim.toLowerCase())) {
        violations.push({
          code: "INVALID_TOP_LEVEL_QA",
          id: question.id,
          file: question._file,
          field: "answer_outline",
          role,
          value: raw,
          message: `Explicit ${role} QA must be one of the seven course categories.`
        });
      }
    }
  }

  const hasTopLevelTag = (question.tags || []).some(value => topLevel.has(String(value).toLowerCase()));
  for (const tag of question.tags || []) {
    if (pseudo.has(String(tag).toLowerCase()) && /quality trade[- ]?off/i.test(question.type) && !hasTopLevelTag) {
      violations.push({
        code: "PSEUDO_QA_TAG",
        id: question.id,
        file: question._file,
        field: "tags",
        value: tag,
        message: "A known non-top-level term is tagged as part of an explicit QA trade-off."
      });
    }
  }
}

const byId = config.byId || {};
for (const label of taxonomy.top_level_quality_attributes) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  if (!byId[id] || byId[id].category !== "quality" || byId[id].answerEligibleAsQualityAttribute === false) {
    violations.push({ code: "ONTOLOGY_TOP_LEVEL_MISMATCH", id, file: "search/concepts.js", field: "category", value: byId[id]?.category || null, message: `${label} must be an answer-eligible top-level quality.` });
  }
}
for (const id of ["fault", "failure", "end-to-end-availability", "recovery", "latency", "throughput"]) {
  if (byId[id]?.category === "quality" || byId[id]?.answerEligibleAsQualityAttribute !== false) {
    violations.push({ code: "ONTOLOGY_DETAIL_MISMATCH", id, file: "search/concepts.js", field: "category", value: byId[id]?.category || null, message: `${byId[id]?.label || id} must remain searchable but cannot compete as a top-level QA.` });
  }
}

for (const question of questions) {
  const answer = String(question.answer_outline || "").replace(/\s+/g, " ").trim();
  if (answer.length < 30 || /^(todo|tbd|placeholder|answer unavailable|n\/a)\b/i.test(answer)) {
    violations.push({ code: "EMPTY_OR_PLACEHOLDER_ANSWER", id: question.id, file: question._file, field: "answer_outline", value: answer, message: "Question has no meaningful answer." });
  }
}

try {
  childProcess.execFileSync(process.execPath, [path.join(ROOT, "tools/apply_corpus_corrections.js"), "--check"], { cwd: ROOT, stdio: "pipe" });
} catch (error) {
  violations.push({ code: "GENERATED_BANK_NOT_REPRODUCIBLE", id: null, file: "questions.js/questions.tsv", field: null, value: null, message: String(error.stderr || error.message).trim() });
}

const generatorDir = path.join(ROOT, "expansion/generator");
const forbiddenGeneratorClaims = [
  /Likely enhanced quality:\s*Centralized control/i,
  /Enhanced(?: candidate)?:\s*\*\*?Centralized control/i,
  /Likely (?:trade-off|threatened quality):\s*Complexity/i,
  /Threatened(?: candidate)?:\s*\*\*?Complexity/i,
  /Likely enhanced quality:\s*Performance\/(?:Latency|Throughput)/i
];
for (const file of fs.readdirSync(generatorDir).filter(name => /^gen_.*\.py$/.test(name))) {
  const source = fs.readFileSync(path.join(generatorDir, file), "utf8");
  for (const pattern of forbiddenGeneratorClaims) {
    if (pattern.test(source)) {
      violations.push({ code: "GENERATOR_PSEUDO_QA_CLAIM", id: null, file: `expansion/generator/${file}`, field: "source", value: pattern.source, message: "Generator contains a known non-top-level term in an explicit QA answer slot." });
    }
  }
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "csc3209-generators-"));
const tempExpansion = path.join(tempRoot, "expansion");
const tempGenerator = path.join(tempExpansion, "generator");
try {
  fs.mkdirSync(tempExpansion, { recursive: true });
  fs.cpSync(generatorDir, tempGenerator, { recursive: true });
  for (const script of ["gen_adv1.py", "gen_adv2.py", "gen_adv3.py", "gen_code.py", "gen_code2.py"]) {
    childProcess.execFileSync("python3", [script], { cwd: tempGenerator, stdio: "pipe" });
  }
  for (const file of ["questions_advanced.json", "questions_advanced.js", "questions_code.json", "questions_code.js"]) {
    const expected = fs.readFileSync(path.join(ROOT, "expansion", file));
    const generated = fs.readFileSync(path.join(tempExpansion, file));
    if (!expected.equals(generated)) {
      violations.push({ code: "EXPANSION_BANK_NOT_REPRODUCIBLE", id: null, file: `expansion/${file}`, field: null, value: null, message: "Committed expansion asset differs from a fresh generator run." });
    }
  }
} catch (error) {
  violations.push({ code: "EXPANSION_GENERATOR_FAILED", id: null, file: "expansion/generator", field: null, value: null, message: String(error.stderr || error.message).trim() });
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

const report = {
  ok: violations.length === 0,
  taxonomy: taxonomy.top_level_quality_attributes,
  auditedQuestions: questions.length,
  explicitQaQuestions: questions.filter(qaQuestion).length,
  violations
};

console.log(JSON.stringify(report, null, 2));
if (violations.length) process.exit(1);
