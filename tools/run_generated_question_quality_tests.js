#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const bankFiles = ["questions.json", "expansion/questions_advanced.json", "expansion/questions_code.json"];
const questions = bankFiles.flatMap(file => JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8")).map(question => ({ ...question, _file: file })));
const violations = [];
const warnings = [];
const missingSources = new Map();
const knownUnavailableSources = new Set([
  "Lecture9_Designing An Architecture.pdf",
  "Lecture11_ArchitectureImplementationTesting.pdf",
  "Lecture12_ArchitectureEvaluation.pdf"
]);
const normalize = value => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
const add = (bucket, code, question, field, message) => bucket.push({ code, id: question.id, file: question._file, field, message });

const materialFiles = new Set();
function indexFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) indexFiles(full);
    else materialFiles.add(entry.name);
  }
}
indexFiles(path.join(ROOT, "Learning Materials"));

for (const question of questions) {
  const prompt = String(question.prompt || "").trim();
  const answer = String(question.answer_outline || "").trim();
  const combined = `${prompt}\n${answer}\n${(question.tags || []).join(" ")}`;

  if (answer.length < 80) add(violations, "SUSPICIOUSLY_SHORT_ANSWER", question, "answer_outline", `Answer has only ${answer.length} characters.`);
  if (/\b(?:TODO|TBD|PLACEHOLDER|ANSWER UNAVAILABLE)\b|\{\{[^}]+\}\}|%\([a-z_]+\)s|(?<!\w)%s/i.test(combined)) add(violations, "UNRESOLVED_TEMPLATE_TOKEN", question, "prompt/answer_outline/tags", "Unresolved placeholder or generator token found.");
  if (normalize(prompt) === normalize(answer)) add(violations, "ANSWER_REPEATS_PROMPT", question, "answer_outline", "Answer merely repeats the prompt.");
  if (!Array.isArray(question.tags) || !question.tags.length) add(violations, "MISSING_TAGS", question, "tags", "Question has no usable tags.");
  if (/Environment: state an explicit|Replace it with a six-part scenario|A good answer explains|Use \*\*Utility →|Map these elements into the scenario|Explain which real component plays each role/i.test(answer)) {
    add(violations, "ANSWER_DELEGATES_REQUIRED_WORK", question, "answer_outline", "Answer gives instructions for constructing an answer instead of supplying the requested worked example.");
  }

  if (question.topic === "Quality Attributes") {
    if (!normalize(answer).includes(normalize(question.scenario))) add(violations, "QA_EXAMPLE_NOT_SCENARIO_SPECIFIC", question, "answer_outline", "Quality Attribute answer does not apply its example to the named scenario.");
    if (["Formal six-part scenario", "Scenario critique"].includes(question.type)) {
      for (const part of ["Source:", "Stimulus:", "Environment:", "Artifact:", "Response:", "Response Measure:"]) {
        if (!answer.includes(part)) add(violations, "INCOMPLETE_QA_SCENARIO", question, "answer_outline", `Worked Quality Attribute answer is missing ${part}`);
      }
    }
  }

  if (question.type === "Construct utility tree") {
    const qaBranches = ["Availability →", "Performance →", "Security →", "Modifiability →"];
    if (!normalize(answer).includes(normalize(question.scenario)) || !qaBranches.every(branch => answer.includes(branch)) || !/\[[HML], [HML]\]/.test(answer)) {
      add(violations, "INCOMPLETE_UTILITY_TREE_EXAMPLE", question, "answer_outline", "Utility Tree answer must include a scenario-specific worked tree with four rated quality branches.");
    }
  }

  if (question.type === "Elements and relations") {
    if (/Map these elements into the scenario:|Explain which real component plays each role/i.test(answer)) add(violations, "UNPERFORMED_SCENARIO_MAPPING", question, "answer_outline", "Answer asks the student to perform the concrete mapping instead of providing it.");
    if (question.scenario && !normalize(answer).includes(normalize(question.scenario))) add(violations, "SCENARIO_ENTITY_NOT_SUBSTITUTED", question, "answer_outline", "Concrete mapping does not name the generated scenario.");
  }

  if (question._file === "expansion/questions_code.json") {
    const code = String(question.code_answer || "").trim();
    const substantiveCodeOrTrace = /\b(class|interface|enum|record|output|trace|predicted output|public|private|protected|void|return|new\s+[A-Z])\b/i.test(code) || /@Override/.test(code);
    if (code.length < 100 || !substantiveCodeOrTrace || /\b(?:TODO|TBD)\b/.test(code)) add(violations, "INCOMPLETE_CODE_ANSWER", question, "code_answer", "Coding answer is missing substantive code/trace reasoning or contains a placeholder.");
  }

  for (const source of String(question.source || "").split(";")) {
    const match = source.match(/([^/;]+\.pdf)\b/i);
    if (match && !materialFiles.has(match[1].trim())) {
      const sourceName = match[1].trim();
      const row = missingSources.get(sourceName) || { source: sourceName, count: 0, sampleIds: [] };
      row.count += 1;
      if (row.sampleIds.length < 8) row.sampleIds.push(question.id);
      missingSources.set(sourceName, row);
    }
  }

  const promptTokens = new Set(normalize(prompt).split(" ").filter(token => token.length > 3));
  const answerTokens = new Set(normalize(answer).split(" ").filter(token => token.length > 3));
  const overlap = [...promptTokens].filter(token => answerTokens.has(token)).length;
  const union = new Set([...promptTokens, ...answerTokens]).size;
  if (union && overlap / union > 0.9 && answer.length < prompt.length * 1.3) add(warnings, "HIGH_PROMPT_ANSWER_OVERLAP", question, "answer_outline", "Answer is unusually close to the prompt and should be reviewed manually.");
}

for (const row of missingSources.values()) {
  const target = knownUnavailableSources.has(row.source) ? warnings : violations;
  target.push({ code: knownUnavailableSources.has(row.source) ? "KNOWN_SOURCE_NOT_SUPPLIED" : "BROKEN_SOURCE_REFERENCE", id: null, file: "Learning Materials", field: "source", message: `${row.source} is referenced by ${row.count} questions but is not present locally. Sample IDs: ${row.sampleIds.join(", ")}` });
}

const report = {
  ok: violations.length === 0,
  auditedQuestions: questions.length,
  checks: ["placeholders", "worked-answer completeness", "Quality Attribute scenarios", "Utility Tree examples", "scenario-role mapping", "source references", "answer repetition", "tags", "code completeness", "answer length"],
  violations,
  warnings,
  missingSourceReferences: [...missingSources.values()]
};
console.log(JSON.stringify(report, null, 2));
if (violations.length) process.exit(1);
