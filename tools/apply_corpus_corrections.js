#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { applyWorkedAnswers } = require("./corpus_worked_answers.js");

const ROOT = path.resolve(__dirname, "..");
const QUESTIONS_JSON = path.join(ROOT, "questions.json");
const QUESTIONS_JS = path.join(ROOT, "questions.js");
const QUESTIONS_TSV = path.join(ROOT, "questions.tsv");
const READABLE_FILES = [
  path.join(ROOT, "ALL_QUESTIONS.md"),
  ...fs.readdirSync(path.join(ROOT, "topic_packs"))
    .filter(name => name.endsWith(".md"))
    .map(name => path.join(ROOT, "topic_packs", name))
];

const CHECK_ONLY = process.argv.includes("--check");

function replaceRequired(value, before, after, context) {
  if (!value.includes(before)) return value;
  return value.split(before).join(after);
}

function replaceTag(tags, before, after) {
  const out = [];
  for (const tag of tags || []) {
    const replacements = tag === before ? after : [tag];
    for (const replacement of replacements) {
      if (replacement && !out.includes(replacement)) out.push(replacement);
    }
  }
  return out;
}

function replaceQaDetails(question) {
  question.answer_outline = question.answer_outline
    .replaceAll("Performance/Latency", "Performance (latency)")
    .replaceAll("Performance/Throughput", "Performance (throughput)");
  question.tags = replaceTag(question.tags, "Performance/Latency", ["Performance", "latency"]);
  question.tags = replaceTag(question.tags, "Performance/Throughput", ["Performance", "throughput"]);
}

function correctClientServer(question) {
  if (question.subtopic === "Client-Server" && question.type === "Scenario application") {
    question.answer_outline = question.answer_outline.replace(
      "- Likely enhanced quality: Centralized control. Likely trade-off: Performance.",
      "- Likely enhanced quality: Modifiability because a common service can be changed in one location or a small number of locations. Likely trade-off: Performance."
    );
  }

  if (question.subtopic === "Client-Server" && question.type === "Quality trade-off") {
    question.answer_outline = question.answer_outline
      .replace(
        "Enhanced: **Centralized control** because centralizes service provision so many distributed clients can request the same managed resource or functionality.",
        "Enhanced: **Modifiability** because common services are factored into one location or a small number of locations, localizing changes shared by many clients."
      )
      .replace(
        "Threatened: **Performance** because a central server may become a bottleneck or single point of failure and moving functionality later can be costly.",
        "Threatened: **Performance** because many client requests can make the server a bottleneck, increasing response time or reducing throughput."
      );
    question.tags = replaceTag(question.tags, "Centralized control", ["Modifiability"]);
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q1 Pattern Selection") {
    question.answer_outline = question.answer_outline.replaceAll(
      "likely trade-off: Centralized control vs Performance",
      "likely trade-off: Modifiability vs Performance"
    );
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q3 Pattern Deep Dive" && /\*\*Client-Server\*\*/.test(question.prompt)) {
    question.answer_outline = question.answer_outline
      .replace(
        "Enhanced candidate: Centralized control because centralizes service provision so many distributed clients can request the same managed resource or functionality.",
        "Enhanced candidate: Modifiability because common services are factored into one location or a small number of locations, localizing changes shared by many clients."
      )
      .replace(
        "Threatened candidate: Performance because a central server may become a bottleneck or single point of failure and moving functionality later can be costly.",
        "Threatened candidate: Performance because many client requests can make the server a bottleneck, increasing response time or reducing throughput."
      );
  }
}

function correctMvc(question) {
  if (question.subtopic === "Model-View-Controller" && question.type === "Scenario application") {
    question.answer_outline = question.answer_outline.replace(
      "Likely enhanced quality: Modifiability. Likely trade-off: Complexity.",
      "Likely enhanced quality: Modifiability. Likely trade-off: Performance when frequent Model changes trigger many View refreshes."
    );
  }

  if (question.subtopic === "Model-View-Controller" && question.type === "Quality trade-off") {
    question.answer_outline = question.answer_outline.replace(
      "Threatened: **Complexity** because the separation can be unnecessary for simple UIs and may mismatch UI toolkits that combine input/output widgets.",
      "Threatened: **Performance** when frequent Model changes trigger many View refreshes or notifications, adding update overhead and latency."
    );
    question.tags = replaceTag(question.tags, "Complexity", ["Performance"]);
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q1 Pattern Selection") {
    question.answer_outline = question.answer_outline.replaceAll(
      "likely trade-off: Modifiability vs Complexity",
      "likely trade-off: Modifiability vs Performance"
    );
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q3 Pattern Deep Dive" && /\*\*Model-View-Controller\*\*/.test(question.prompt)) {
    question.answer_outline = question.answer_outline
      .replace(
        "Threatened candidate: Complexity because the separation can be unnecessary for simple UIs and may mismatch UI toolkits that combine input/output widgets.",
        "Threatened candidate: Performance. Frequent Model changes can trigger many View refreshes or notifications, adding update overhead and latency."
      )
      .replace(
        "Threatened candidate: Performance when frequent Model changes trigger many View refreshes or notifications, adding update overhead and latency.",
        "Threatened candidate: Performance. Frequent Model changes can trigger many View refreshes or notifications, adding update overhead and latency."
      );
  }
}

function correctMapReduce(question) {
  if (question.subtopic === "Map-Reduce" && question.type === "Scenario application") {
    question.answer_outline = question.answer_outline
      .replace(
        "Likely enhanced quality: Performance (throughput). Likely trade-off: Complexity.",
        "Likely enhanced quality: Performance. Mechanism: parallel Map and Reduce instances can increase batch throughput. Likely weakness: Performance can degrade when framework overhead or partition skew outweighs parallelism."
      )
      .replace(
        "Likely enhanced quality: Performance through higher batch throughput. Likely weakness: Performance can degrade when framework overhead or partition skew outweighs parallelism.",
        "Likely enhanced quality: Performance. Mechanism: parallel Map and Reduce instances can increase batch throughput. Likely weakness: Performance can degrade when framework overhead or partition skew outweighs parallelism."
      );
  }

  if (question.subtopic === "Map-Reduce" && question.type === "Quality trade-off") {
    question.type = "Quality benefit and weakness";
    question.prompt = question.prompt.replace(
      "Explain one quality attribute that the pattern may enhance and a different quality attribute that may be threatened. For each, explain the mechanism rather than merely naming the quality.",
      "Explain one quality attribute that the pattern may enhance and one source-grounded condition under which that benefit can be lost. Explain the mechanism rather than merely naming the quality or weakness."
    );
    question.answer_outline = question.answer_outline
      .replace(
        "Enhanced: **Performance (throughput)** because runs many map instances across processors, shuffles/sorts key-value output, then combines results in reduce functions while infrastructure deploys, monitors and recovers tasks.",
        "Enhanced: **Performance** because many Map instances process partitions concurrently and Reduce instances combine grouped results, increasing batch throughput."
      )
      .replace(
        "Threatened: **Complexity** because framework overhead is unjustified for small data; unbalanced partitions reduce parallel benefit and multi-reduce workflows become complex.",
        "Weakness: **Performance** can degrade when framework startup, shuffle/sort and synchronization overhead dominate a small workload, or when partition skew leaves one worker as the straggler."
      );
    question.tags = replaceTag(question.tags, "Complexity", ["framework-overhead", "partition-skew"]);
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q1 Pattern Selection") {
    question.answer_outline = question.answer_outline.replaceAll(
      "likely trade-off: Performance (throughput) vs Complexity",
      "likely benefit/limitation: Performance through batch throughput vs framework overhead and orchestration complexity"
    );
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q3 Pattern Deep Dive" && /\*\*Map-Reduce\*\*/.test(question.prompt)) {
    question.prompt = question.prompt.replace(
      "d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]",
      "d) Describe a source-grounded weakness or condition under which the performance benefit may be lost, and explain the mechanism. [2]"
    );
    question.answer_outline = question.answer_outline
      .replace(
        "Enhanced candidate: Performance (throughput) because runs many map instances across processors, shuffles/sorts key-value output, then combines results in reduce functions while infrastructure deploys, monitors and recovers tasks.",
        "Enhanced candidate: Performance because many Map instances process partitions concurrently and Reduce instances combine grouped results, increasing batch throughput."
      )
      .replace(
        "Threatened candidate: Complexity because framework overhead is unjustified for small data; unbalanced partitions reduce parallel benefit and multi-reduce workflows become complex.",
        "Weakness candidate: Performance can degrade when framework overhead dominates a small workload or partition skew leaves one worker as the straggler."
      );
  }
}

function correctMultiTier(question) {
  if (question.subtopic === "Multi-Tier" && question.type === "Scenario application") {
    question.answer_outline = question.answer_outline.replace(
      "Likely enhanced quality: Security. Likely trade-off: Complexity.",
      "Likely enhanced quality: Security. Likely weakness: substantial hardware, software, design and operational cost/complexity."
    );
  }

  if (question.subtopic === "Multi-Tier" && question.type === "Quality trade-off") {
    question.type = "Quality benefit and weakness";
    question.prompt = question.prompt.replace(
      "Explain one quality attribute that the pattern may enhance and a different quality attribute that may be threatened. For each, explain the mechanism rather than merely naming the quality.",
      "Explain one quality attribute that the pattern may enhance and one source-grounded weakness of the pattern. For each, explain the mechanism rather than merely naming the quality or weakness."
    );
    question.answer_outline = question.answer_outline.replace(
      "Threatened: **Complexity** because adds hardware/software/design/operational cost and complexity that may not be justified for small systems.",
      "Weakness: substantial **cost and complexity** because separate tiers add hardware, software, design, implementation and operational overhead that may not be justified for a simple system."
    );
    question.tags = replaceTag(question.tags, "Complexity", ["cost", "deployment-complexity"]);
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q1 Pattern Selection") {
    question.answer_outline = question.answer_outline.replaceAll(
      "likely trade-off: Security vs Complexity",
      "likely benefit/limitation: Security vs deployment cost and complexity"
    );
  }

  if (question.topic === "Integrated Past-Paper Practice" && question.subtopic === "Q3 Pattern Deep Dive" && /\*\*Multi-Tier\*\*/.test(question.prompt)) {
    question.prompt = question.prompt.replace(
      "d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]",
      "d) Describe a source-grounded weakness of the pattern and explain its cause. [2]"
    );
    question.answer_outline = question.answer_outline.replace(
      "Threatened candidate: Complexity because adds hardware/software/design/operational cost and complexity that may not be justified for small systems.",
      "Weakness candidate: substantial cost and complexity because separate tiers add hardware, software, design, implementation and operational overhead that may not be justified for a simple system."
    );
  }
}

function correctConcretePatternMapping(question) {
  if (question.type !== "Elements and relations" || !question.answer_outline.startsWith("Map these elements into the scenario:")) return;
  const scenario = question.scenario || "the system";
  const mappings = {
    "Layer": `Concrete mapping for **${scenario}**: the user-interface code is the presentation layer, the scenario's application/business rules are the domain or service layer, and persistence/database adapters are the data-access layer. A user action calls downward through allowed-to-use relations from presentation to application logic and then to data access; results return upward without persistence code depending on the UI. Constraint: each software unit belongs to exactly one layer, with dependencies following the permitted layer ordering.`,
    "Broker": `Concrete mapping for **${scenario}**: the application that requests the distributed capability is the Client; the replaceable capability providers are Servers; the Broker locates/selects a provider and forwards request/reply traffic; client-side and server-side proxies hide location and protocol details where used. The client attaches to the Broker rather than a provider identity, allowing a different provider instance to handle a later request.`,
    "Model-View-Controller": `Concrete mapping for **${scenario}**: the authoritative scenario data and application functions form the Model; each interactive representation is a View; input handlers for user actions are Controllers. A Controller interprets input and queries or changes the Model, then affected Views read or are notified of the changed Model state so the representations remain synchronized.`,
    "Pipe-and-Filter": `Concrete mapping for **${scenario}**: each independent transformation required for the uploaded or streamed item is a Filter, and each Pipe carries one stage's output to the next stage's input. The item enters the first Filter, passes through the transformation sequence, and leaves as the final processed output. Filters transform data; Pipes convey it without owning transformation logic.`,
    "Client-Server": `Concrete mapping for **${scenario}**: the web/mobile/device application used by the actor is the Client, and the centrally managed authoritative record or service is the Server. The Client sends a request over the network, the Server reads or updates the authoritative state, and a reply returns the result; clients do not become service providers merely because several devices are used.`,
    "Peer-to-Peer": `Concrete mapping for **${scenario}**: each participating user device or node that contributes and requests the shared resource is a Peer; a discovery node or supernode is optional, not the owner of all resources. A Peer discovers another participant and directly requests/provides the resource through peer request/reply connections, while attachments may change as peers join or leave.`,
    "Service-Oriented Architecture": `Concrete mapping for **${scenario}**: the scenario application is the Service Consumer, while each independently managed external capability is a Service Provider exposing a published network interface or contract. The consumer invokes that contract using REST/SOAP or messaging; an ESB, registry, or orchestration service is included only if the scenario needs routing, discovery, transformation, or workflow coordination.`,
    "Publish-Subscribe": `Concrete mapping for **${scenario}**: the component that detects or produces the scenario event is the Publisher; interested users, channels, or components are Subscribers; the event distributor/channel is the publish-subscribe connector. The Publisher announces the event without naming every recipient, and the distributor delivers it to the currently registered interested Subscribers.`,
    "Shared-Data": `Concrete mapping for **${scenario}**: the authoritative repository holding the scenario's shared records is the Shared-Data Store; the independent application components that read or write those records are Data Accessors. Accessors communicate indirectly by reading/writing the repository rather than calling one another to exchange the shared state, so consistency and ownership rules must be defined at the store boundary.`,
    "Map-Reduce": `Concrete mapping for **${scenario}**: the large input/log files are partitioned by the Infrastructure; Map workers transform each partition into intermediate key/value records; shuffle/sort groups equal keys; Reduce workers aggregate each group into the required result. The Infrastructure distributes tasks, moves intermediate data, monitors workers, and reruns failed work.`,
    "Multi-Tier": `Concrete mapping for **${scenario}**: user-interface runtime components form the presentation tier, application/business processing forms the application tier, and persistent records/services form the data tier. Request/reply communication crosses the permitted tier boundaries, and each tier is allocated to its own deployable runtime/platform so it can be secured or scaled independently; each component belongs to one tier.`
  };
  if (mappings[question.subtopic]) question.answer_outline = mappings[question.subtopic];
}

function correctSourceReferences(question) {
  const replacements = new Map([
    ["Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf", "Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf"],
    ["Lecture8_Architecture and Requirements (1).pdf", "Lecture8_Architecture and Requirements.pdf"],
    ["Lecture1_What is Software ArchitectureV2.pdf", "Lecture1_What is Software ArchitectureV2 (1).pdf"],
    ["Lecture10_Documenting Software Architectures (1).pdf", "Lecture10_Documenting Software Architectures.pdf"],
    ["Lecture2_Why Is Software Architecture Important (1).pdf", "Lecture2_Why Is Software Architecture Important (2).pdf"]
  ]);
  for (const [before, after] of replacements) question.source = String(question.source || "").replaceAll(before, after);
}

const QA_EXAMPLES = {
  Availability: {
    definition: "readiness to provide service and recovery from faults",
    source: "a failed application-server process",
    stimulus: "the process crashes and stops responding to health checks",
    environment: "normal operation while users have active sessions",
    response: "detect the failure, remove the failed instance from service, fail over active requests and restore normal operation",
    measure: "service is restored within 5 seconds with no more than 1 failed request",
    classification: "runtime-observable",
    observation: "inject the process failure while users send requests, then measure failed requests and recovery time"
  },
  Interoperability: {
    definition: "the ability of systems to exchange and use meaningful information",
    source: "an approved external system",
    stimulus: "it sends a valid standards-compliant data-exchange request",
    environment: "normal operation with the published integration contract active",
    response: "validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning",
    measure: "100% of valid exchanges conform to the published contract and complete within 3 seconds",
    classification: "runtime-observable, although interface and semantic compatibility are designed and verified before deployment",
    observation: "send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time"
  },
  Modifiability: {
    definition: "the cost and risk of making a change",
    source: "the product owner",
    stimulus: "requests a new validation rule for an existing transaction",
    environment: "development and test time before the next release",
    response: "locate the affected elements, implement and test the rule without unintended changes to unrelated behavior",
    measure: "one developer completes the change within 2 working days and modifies no more than 2 modules",
    classification: "primarily design/development-time, with deployment behavior relevant only after the change has been produced",
    observation: "give a developer the change request and measure elapsed effort, affected modules and regression-test results"
  },
  Performance: {
    definition: "the ability to meet timing and throughput requirements",
    source: "500 concurrent authenticated users",
    stimulus: "submit core service requests during a five-minute workload burst",
    environment: "peak-load operation on the production-sized deployment",
    response: "accept, process and return the requested results without exhausting resources",
    measure: "at least 95% of requests complete within 2 seconds while sustaining 500 requests per second",
    classification: "runtime-observable",
    observation: "run the stated peak workload and measure response-time percentiles, throughput and errors"
  },
  Security: {
    definition: "protection of data and services from unauthorized access or modification while allowing legitimate use",
    source: "an unauthenticated external actor",
    stimulus: "attempts to read a protected user record through the public interface",
    environment: "normal operation while legitimate users are active",
    response: "reject the request, disclose no protected data and record the attempt for audit",
    measure: "zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created",
    classification: "runtime-observable, while threat analysis and control selection also occur at design time",
    observation: "issue the unauthorized request and inspect the response, protected store and audit trail"
  },
  Testability: {
    definition: "the ease of controlling and observing software so tests can reveal and isolate faults",
    source: "an integration tester",
    stimulus: "injects an invalid response from a downstream dependency while executing an automated test",
    environment: "the isolated integration-test environment with test doubles and diagnostic logging enabled",
    response: "control the dependency response, expose the resulting behavior and identify the responsible element",
    measure: "the test runs automatically and isolates the fault to one element within 10 minutes",
    classification: "primarily design/development-time because controllability, observability and fault isolation are evaluated during testing",
    observation: "run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time"
  },
  Usability: {
    definition: "the ease with which a user learns, efficiently uses and recovers while using the system",
    source: "a first-time representative user",
    stimulus: "attempts the system's primary transaction after reading only the on-screen instructions",
    environment: "normal operation on a supported device without staff assistance",
    response: "present understandable controls and feedback, prevent or explain invalid input and confirm successful completion",
    measure: "at least 90% of first-time users complete the transaction within 3 minutes without assistance",
    classification: "runtime-observable through representative user interaction, although the supporting interaction design is created earlier",
    observation: "conduct the stated usability task and measure completion rate, time, errors and requests for assistance"
  }
};

function qaScenarioLines(question, example) {
  const scenario = question.scenario || "the system";
  return [
    `Source: ${example.source}.`,
    `Stimulus: ${example.stimulus}.`,
    `Environment: ${example.environment}.`,
    `Artifact: the **${scenario}** and the components that implement the affected service.`,
    `Response: the ${scenario} must ${example.response}.`,
    `Response Measure: ${example.measure}.`
  ].join("\n");
}

function addWorkedQualityAnswer(question) {
  if (question.topic !== "Quality Attributes" || !QA_EXAMPLES[question.subtopic]) return;
  const example = QA_EXAMPLES[question.subtopic];
  const scenarioLines = qaScenarioLines(question, example);

  if (question.type === "Formal six-part scenario") {
    question.answer_outline = `**Example answer**\nQuality attribute: **${question.subtopic}** - ${example.definition}.\n${scenarioLines}\n\nThis is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.`;
  }

  if (question.type === "Scenario critique") {
    question.answer_outline = `**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.\n\n**Concrete replacement for ${question.scenario}:**\n${scenarioLines}\n\nThe replacement captures **${question.subtopic}** because it tests ${example.definition}, rather than relying on an unmeasurable adjective.`;
  }

  if (question.type === "Runtime/design-time reasoning") {
    question.answer_outline = `**Answer:** ${question.subtopic} is **${example.classification}**. It concerns ${example.definition}.\n\n**Worked observation for ${question.scenario}:** ${example.observation}. The acceptance criterion is that ${example.measure}. This states what is actually observed instead of treating the classification as a memorized label.`;
  }
}

function addWorkedUtilityTreeAnswer(question) {
  if (question.type !== "Construct utility tree") return;
  const scenario = question.scenario || "the system";
  question.answer_outline = `**Example answer for ${scenario}**\n\nUtility\n- **Availability → Fault recovery:** During normal operation, the primary ${scenario} application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**\n- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The ${scenario} completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**\n- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The ${scenario} rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**\n- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**\n\n**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the ${scenario} stakeholders.`;
}

function correctedQuestion(question) {
  const corrected = JSON.parse(JSON.stringify(question));
  replaceQaDetails(corrected);
  correctClientServer(corrected);
  correctMvc(corrected);
  correctMapReduce(corrected);
  correctMultiTier(corrected);
  correctConcretePatternMapping(corrected);
  addWorkedQualityAnswer(corrected);
  addWorkedUtilityTreeAnswer(corrected);
  applyWorkedAnswers(corrected);
  correctSourceReferences(corrected);
  return corrected;
}

function tsvCell(value) {
  const text = String(value == null ? "" : value);
  return /[\t\r\n"]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function renderTsv(questions) {
  const fields = ["id", "topic", "subtopic", "type", "difficulty", "marks", "family", "scenario", "prompt", "answer_outline", "tags", "source", "exam_trap"];
  const lines = [fields.join("\t")];
  for (const question of questions) {
    lines.push(fields.map(field => tsvCell(field === "tags" ? (question.tags || []).join(", ") : question[field])).join("\t"));
  }
  return `${lines.join("\n")}\n`;
}

function updateReadableFile(file, beforeQuestions, afterQuestions) {
  let output = fs.readFileSync(file, "utf8");
  for (let index = 0; index < beforeQuestions.length; index += 1) {
    const before = beforeQuestions[index];
    const after = afterQuestions[index];
    const blockStart = output.indexOf(`## ${before.id} `);
    if (blockStart < 0) continue;
    const nextBlock = output.indexOf("\n## ", blockStart + 4);
    const blockEnd = nextBlock < 0 ? output.length : nextBlock;
    let block = output.slice(blockStart, blockEnd);
    if (before.prompt !== after.prompt) block = block.replace(before.prompt, after.prompt);
    if (before.answer_outline !== after.answer_outline) block = block.replace(before.answer_outline, after.answer_outline);
    if (before.type !== after.type) {
      block = block.replace(`**Type:** ${before.type}`, `**Type:** ${after.type}`);
    }
    output = output.slice(0, blockStart) + block + output.slice(blockEnd);
  }
  return output;
}

function writeOrCheck(file, next, errors) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (current === next) return;
  if (CHECK_ONLY) errors.push(path.relative(ROOT, file));
  else fs.writeFileSync(file, next, "utf8");
}

const beforeQuestions = JSON.parse(fs.readFileSync(QUESTIONS_JSON, "utf8"));
const afterQuestions = beforeQuestions.map(correctedQuestion);
const changedIds = afterQuestions.filter((question, index) => JSON.stringify(question) !== JSON.stringify(beforeQuestions[index])).map(question => question.id);
const errors = [];

writeOrCheck(QUESTIONS_JSON, `${JSON.stringify(afterQuestions, null, 2)}\n`, errors);
writeOrCheck(QUESTIONS_JS, `window.QUESTIONS = ${JSON.stringify(afterQuestions)};\n`, errors);
writeOrCheck(QUESTIONS_TSV, renderTsv(afterQuestions), errors);

for (const file of READABLE_FILES) {
  const next = updateReadableFile(file, beforeQuestions, afterQuestions);
  writeOrCheck(file, next, errors);
}

if (CHECK_ONLY && errors.length) {
  console.error(`Corpus assets are stale: ${errors.join(", ")}`);
  process.exit(1);
}

console.log(`${CHECK_ONLY ? "Checked" : "Corrected"} original corpus; ${changedIds.length} question records required source-policy changes.`);
if (changedIds.length) console.log(`Changed IDs: ${changedIds.join(", ")}`);
