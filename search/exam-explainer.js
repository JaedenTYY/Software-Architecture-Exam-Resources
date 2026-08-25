((root) => {
  function createExamExplainer(config, options = {}) {
    const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
    const concepts = cfg.concepts || [];
    const byId = cfg.byId || Object.fromEntries(concepts.map(c => [c.id, c]));
    const boundary = cfg.boundary || {};
    const maxEvidence = options.maxEvidence || 4;

    function normalize(value) {
      return String(value || "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[–—]/g, "-")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9+#.\-/]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function isWhyQuery(raw) {
      const q = normalize(raw);
      return /(^|\s)(why|how come)(\s|$)/.test(q) || /\b(explain why|reason why)\b/.test(q);
    }

    function directConcepts(raw, queryConcepts = []) {
      const q = normalize(raw);
      const found = new Map();
      for (const qc of queryConcepts || []) {
        const concept = byId[qc.id];
        if (concept && qc.direct) found.set(concept.id, concept);
      }
      for (const concept of concepts) {
        const terms = [concept.label, ...(concept.aliases || [])].map(normalize).filter(Boolean);
        if (terms.some(term => containsTerm(q, term))) {
          found.set(concept.id, concept);
        }
      }
      return [...found.values()];
    }

    function escapeRegex(value) {
      return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function containsTerm(haystack, term) {
      if (boundary.containsTerm) return boundary.containsTerm(haystack, term);
      if (!term) return false;
      const escaped = escapeRegex(term).replace(/\s+/g, "\\s+");
      return new RegExp(`(^|[^a-z0-9+#])${escaped}(s|es)?(?=$|[^a-z0-9+#])`).test(normalize(haystack));
    }

    function findConcept(rows, categories) {
      return rows.find(c => categories.includes(c.category)) || null;
    }

    function findQuality(rows) {
      const preferred = ["availability", "performance", "modifiability", "security", "testability", "usability", "interoperability"];
      for (const id of preferred) {
        const hit = rows.find(c => c.id === id);
        if (hit) return hit;
      }
      return rows.find(c => c.category === "quality") || null;
    }

    function evidenceRows(results, subject, target) {
      const rows = (results || []).filter(r => Number(r._score || 0) > 0).slice(0, 30);
      const subjectTerms = subject ? [subject.label, ...(subject.aliases || [])].map(normalize) : [];
      const targetTerms = target ? [target.label, ...(target.aliases || [])].map(normalize) : [];
      return rows.map(result => {
        const text = normalize([result.subtopic, result.topic, result.prompt, result.answer_outline, result.body, (result.tags || []).join(" ")].filter(Boolean).join(" "));
        let fit = Number(result._score || 0);
        if (subjectTerms.some(t => t && containsTerm(text, t))) fit *= 1.3;
        if (targetTerms.some(t => t && containsTerm(text, t))) fit *= 1.2;
        return { result, fit };
      }).sort((a, b) => b.fit - a.fit).slice(0, maxEvidence).map(x => x.result);
    }

    function asEvidence(result, subject, target) {
      const raw = String(result.answer_outline || result.body || result.prompt || "").replace(/\s+/g, " ").trim();
      return {
        id: result.id,
        title: result._resultType === "reference" ? result.title : `${result.id} - ${result.subtopic || result.topic || "Question"}`,
        resultType: result._resultType || "question",
        score: Number(result._score || 0),
        snippet: extractCausalExcerpt(raw, subject, target)
      };
    }

    function extractCausalExcerpt(text, subject, target) {
      if (!text) return "";
      const sentences = text.split(/(?<=[.!?])\s+|\n+/).map(s => s.trim()).filter(Boolean);
      const subjectTerms = subject ? [subject.label, ...(subject.aliases || [])].map(normalize) : [];
      const targetTerms = target ? [target.label, ...(target.aliases || [])].map(normalize) : [];
      const causal = /\b(because|therefore|thus|so that|allows?|enables?|improves?|increases?|reduces?|locali[sz]es?|decouples?|distribut|parallel|bottleneck|single point|overhead|failure|latency|coupling|dependency|recover|replica|buffer|indirection|interoperab|interface|contract)\b/;
      const ranked = sentences.map((sentence, index) => {
        const n = normalize(sentence);
        let score = causal.test(n) ? 3 : 0;
        if (subjectTerms.some(t => t && containsTerm(n, t))) score += 2;
        if (targetTerms.some(t => t && containsTerm(n, t))) score += 2;
        if (index < 2) score += 0.5;
        return { sentence, score, index };
      }).sort((a, b) => b.score - a.score || a.index - b.index);
      const picked = ranked.filter(r => r.score > 0).slice(0, 2);
      const chosen = (picked.length ? picked : ranked.slice(0, 2)).sort((a, b) => a.index - b.index).map(r => r.sentence).join(" ");
      return chosen.length > 420 ? `${chosen.slice(0, 417).trim()}...` : chosen;
    }

    const RULES = [
      {
        id: "architecture-important",
        match: q => /\bwhy\b.*\b(software )?architecture\b.*\b(important|matter|matters|needed|valuable)\b/.test(q),
        title: "Why Software Architecture Matters",
        answer: "Software architecture matters because early structural decisions enable or constrain important quality attributes, provide a common basis for stakeholder communication and analysis, and shape implementation, change cost, integration, estimation and organizational work. Architectural decisions are also among the earliest and hardest decisions to change later.",
        chain: ["Early structural decisions", "constrain qualities and dependencies", "affect change, implementation and stakeholder reasoning"],
        exam: "Software architecture is important because it captures the system's fundamental structures and early design decisions, allowing stakeholders to reason about quality attributes and change before implementation makes those decisions expensive to reverse."
      },
      {
        id: "layer-modifiability",
        subject: "layer", target: "modifiability",
        answer: "Layer improves modifiability when responsibilities are semantically coherent and dependencies obey the allowed-to-use rules. A change can often remain inside the affected layer instead of rippling through unrelated implementation units.",
        chain: ["Coherent layer responsibilities", "restricted dependencies", "localized change", "better modifiability"],
        exam: "Layer supports modifiability because stable layer boundaries restrict dependencies and localize responsibility, reducing the ripple effect of many changes."
      },
      {
        id: "layer-performance",
        subject: "layer", target: "performance",
        answer: "Layer can threaten performance because requests may cross several boundaries and require extra calls, transformations or indirection. Bridging can reduce that overhead, but it weakens the separation that gives the pattern its modifiability benefit.",
        chain: ["More layer crossings", "extra indirection / transformation", "more latency or processing cost", "performance may worsen"],
        exam: "Layer may degrade performance because each additional boundary can add calls and transformations; bypassing layers may recover speed but weakens architectural separation."
      },
      {
        id: "pipe-throughput",
        subject: "pipe-and-filter",
        match: q => /\b(throughput|performance|parallel|buffer)\b/.test(q) && !/\b(too many|more filters|more stages|hurt|worse|degrad|overhead|not always)\b/.test(q),
        answer: "Buffered pipes allow adjacent filters to work on different data items at the same time. This pipeline parallelism increases throughput because multiple stages can be active concurrently, although it does not necessarily reduce the latency of one individual item.",
        chain: ["Buffered pipes", "filters work concurrently on different items", "pipeline parallelism", "higher throughput"],
        exam: "Pipe-and-Filter can improve throughput because buffering lets independent filters execute concurrently on different items in the stream."
      },
      {
        id: "pipe-overhead",
        subject: "pipe-and-filter",
        match: q => /\b(too many|more filters|more stages|hurt|worse|degrad|overhead|not always)\b/.test(q),
        answer: "Adding filters does not automatically improve performance. Extra stages introduce buffering, copying, scheduling, synchronization and possibly data-conversion overhead, so those costs can offset the throughput gained from pipeline parallelism.",
        chain: ["More filters", "more buffering / synchronization / copying", "extra overhead", "performance gain may disappear"],
        exam: "More filters do not guarantee better performance because pipeline parallelism must outweigh the extra buffering, scheduling, synchronization and data-transfer overhead introduced by additional stages."
      },
      {
        id: "p2p-scalability",
        subject: "peer-to-peer",
        match: q => /\b(scalab|scale|more users|more peers)\b/.test(q),
        answer: "Peer-to-Peer can scale because a new participant can add resources such as bandwidth, storage or processing capacity as well as adding demand. Capacity can therefore grow with the peer population instead of every new user being only a client of one centralized server.",
        chain: ["New peer joins", "adds demand + resources", "capacity grows with population", "scalability can improve"],
        exam: "P2P can improve scalability because peers may contribute resources as they join, so system capacity can grow together with demand rather than remaining concentrated at one server."
      },
      {
        id: "p2p-availability",
        subject: "peer-to-peer", target: "availability",
        match: q => !/\b(not guarantee|not guaranteed|doesn.t guarantee|does not guarantee|why not)\b/.test(q),
        answer: "Peer-to-Peer can improve availability when several peers provide overlapping resources. If one peer disappears, discovery/routing can bind the request to another peer that can provide the same resource, so no single peer is necessarily critical.",
        chain: ["Overlapping providers", "one peer fails", "request finds another provider", "service remains available"],
        exam: "P2P may improve availability because equivalent resources can be provided by multiple peers, allowing requests to be redirected when one peer leaves or fails."
      },
      {
        id: "p2p-availability-not-guaranteed",
        subject: "peer-to-peer",
        match: q => /\b(not guarantee|not guaranteed|doesn.t guarantee|does not guarantee|why not)\b/.test(q) && /\bavailab/.test(q),
        answer: "P2P does not guarantee availability. If the required resource exists on only one peer, that peer is effectively critical; losing it still causes service failure for that resource. Availability depends on overlapping providers plus working discovery/routing, not on the P2P label alone.",
        chain: ["Only one peer has required resource", "that peer fails", "no alternative provider exists", "service failure"],
        exam: "P2P alone does not guarantee availability because a unique resource can still create a single critical provider; replicated/overlapping resources and discovery are required to mask peer loss."
      },
      {
        id: "client-server-availability",
        subject: "client-server", target: "availability",
        answer: "Client-Server can threaten availability because the central server, or a shared dependency behind it, can become a single point of failure. Replication and failover can mitigate this, but merely adding servers is insufficient if they still share an unavailable database or no failover mechanism exists.",
        chain: ["Central service/dependency", "failure affects many clients", "externally visible outage", "availability threatened"],
        exam: "Client-Server may threaten availability because a centralized server or shared backend can become a single point of failure unless redundancy and failover remove that dependency."
      },
      {
        id: "client-server-performance",
        subject: "client-server", target: "performance",
        answer: "Client-Server can threaten performance because many clients concentrate requests on centralized server resources. Under high load the server or its dependencies may become bottlenecks, increasing response time or reducing throughput.",
        chain: ["Many client requests", "centralized processing/resource", "bottleneck under load", "response time worsens"],
        exam: "Client-Server may degrade performance when centralized server resources become bottlenecks as client demand increases."
      },
      {
        id: "publish-subscribe-modifiability",
        subject: "publish-subscribe", target: "modifiability",
        answer: "Publish-Subscribe improves modifiability/extensibility because publisher correctness does not depend on knowing the identities of all recipients. Subscribers can be added, removed or changed without modifying the publisher for each concrete consumer.",
        chain: ["Publisher does not know concrete subscribers", "subscriber set can change independently", "fewer direct dependencies", "better modifiability/extensibility"],
        exam: "Publish-Subscribe supports modifiability because publishers are decoupled from concrete subscriber identities, allowing subscribers to evolve without corresponding publisher changes."
      },
      {
        id: "shared-data-modifiability",
        subject: "shared-data", target: "modifiability",
        answer: "Shared-Data can reduce direct component-to-component coupling because accessors exchange information indirectly through the shared store. However, all accessors may still become coupled to the common schema, so schema changes can create broad ripple effects.",
        chain: ["Indirect exchange through repository", "fewer accessor-to-accessor dependencies", "but shared schema remains", "modifiability trade-off"],
        exam: "Shared-Data can improve component independence by replacing direct communication with a common store, but schema coupling can make database changes expensive."
      },
      {
        id: "soa-interoperability",
        subject: "soa", target: "interoperability",
        answer: "SOA supports interoperability because independently managed providers expose published service interfaces/contracts and consumers interact through those contracts rather than depending on provider internals. Protocol/data transformation infrastructure can bridge heterogeneous technologies.",
        chain: ["Published service contract", "consumer depends on interface not internals", "heterogeneous providers can interoperate", "better interoperability"],
        exam: "SOA improves interoperability by exposing independently managed capabilities through published service contracts, allowing heterogeneous consumers and providers to communicate through agreed interfaces."
      },
      {
        id: "broker-modifiability",
        subject: "broker", target: "modifiability",
        answer: "Broker improves modifiability because clients interact through an intermediary rather than binding directly to a particular server identity/location. Providers can be moved or replaced while the broker redirects requests without requiring every client to change.",
        chain: ["Client calls broker", "broker resolves provider", "provider identity/location hidden", "provider can change independently"],
        exam: "Broker supports modifiability through location transparency: clients depend on the brokered service rather than on a particular provider location or identity."
      },
      {
        id: "mvc-modifiability",
        subject: "mvc", target: "modifiability",
        answer: "MVC supports modifiability by separating application state/logic in the Model from presentation in Views and input mediation in Controllers. UI representations can change or multiple views can be added without rewriting the core model logic.",
        chain: ["Separate Model / View / Controller", "presentation changes isolated from model logic", "multiple views can evolve", "better modifiability"],
        exam: "MVC improves modifiability because it separates application state and logic from presentation and input concerns, allowing UI changes to remain largely independent of the Model."
      },
      {
        id: "map-reduce-performance",
        subject: "map-reduce",
        match: q => /\b(performance|throughput|scalab|parallel|large|huge|massive)\b/.test(q),
        answer: "Map-Reduce improves throughput/scalability for massive batch datasets because infrastructure partitions the input across many independent Map tasks, shuffles intermediate key/value data, and executes Reduce tasks in parallel. The benefit depends on sufficient data size and balanced partitions; skew and framework overhead can reduce it.",
        chain: ["Partition large input", "parallel Map tasks", "shuffle/sort", "parallel Reduce", "high batch throughput"],
        exam: "Map-Reduce can improve performance on very large batch workloads because the infrastructure partitions work across many parallel Map/Reduce tasks, although skew and framework overhead remain trade-offs."
      },
      {
        id: "multi-tier-security",
        subject: "multi-tier", target: "security",
        answer: "Multi-Tier can improve security because runtime component groups are placed in separate deployment boundaries and communication between tiers can be constrained. Different tiers can receive different network exposure, privileges and protection policies.",
        chain: ["Separate runtime tiers", "controlled cross-tier communication", "different protection boundaries", "better security isolation"],
        exam: "Multi-Tier can support security by placing responsibilities in separate deployment boundaries and constraining communication and exposure between tiers."
      },
      {
        id: "observer-why",
        subject: "observer",
        answer: "Observer is useful when one subject must notify an unknown or changing set of dependent objects. The subject depends on the Observer interface rather than concrete observers, so dependents can be added or removed without tightly coupling the subject to each one.",
        chain: ["Subject state changes", "subject notifies Observer interface", "many concrete observers update", "notification remains loosely coupled"],
        exam: "Observer is appropriate because it establishes a one-to-many dependency in which a subject notifies registered observers without depending on their concrete classes."
      },
      {
        id: "state-why",
        subject: "state",
        answer: "State is useful when an object's behavior changes with its internal state. State-specific behavior is moved into separate State classes, avoiding large repeated conditionals in the Context and localizing transitions/behavior.",
        chain: ["Context has changing internal state", "state-specific behavior moved to State objects", "fewer scattered conditionals", "behavior is easier to vary"],
        exam: "State is suitable because it encapsulates state-specific behavior in separate State objects, allowing the Context to change behavior by changing its current State rather than spreading conditionals throughout the code."
      },
      {
        id: "factory-method-why",
        subject: "factory-method",
        answer: "Factory Method is useful when the creator should not hard-code the concrete class it instantiates. Creation is delegated to subclasses/overridable factory methods, so client logic can depend on the Product abstraction while concrete products vary.",
        chain: ["Creator depends on Product abstraction", "subclass chooses ConcreteProduct", "creation decision is localized", "client is decoupled from concrete construction"],
        exam: "Factory Method is suitable because object creation is delegated so subclasses decide the concrete product while clients program to the Product abstraction."
      },
      {
        id: "singleton-why",
        subject: "singleton",
        answer: "Singleton is useful only when the design genuinely requires exactly one controlled instance and a global access point. It centralizes control of that unique instance, but it can also introduce global-state coupling and testability problems, so it should not be used merely for convenience.",
        chain: ["Exactly one instance required", "constructor/access controlled", "single shared instance", "global coupling is the trade-off"],
        exam: "Singleton is appropriate when exactly one controlled instance is an explicit requirement; the pattern enforces unique access but introduces global-state coupling as a trade-off."
      },
      {
        id: "composite-why",
        subject: "composite",
        answer: "Composite is useful for recursive part-whole structures because both Leaf and Composite implement the same Component abstraction. Clients can invoke the same operations on individual objects and groups without special-case traversal logic.",
        chain: ["Leaf and Composite share Component interface", "Composite contains Components recursively", "client treats both uniformly", "simpler tree operations"],
        exam: "Composite is suitable because leaves and recursive groups share the same Component interface, allowing clients to treat individual and composite objects uniformly."
      },
      {
        id: "facade-why",
        subject: "facade",
        answer: "Facade is useful when clients need a simple entry point to a complex subsystem. The Facade provides a unified higher-level interface and coordinates subsystem classes, reducing the number of direct dependencies clients must understand.",
        chain: ["Complex subsystem", "Facade exposes simpler interface", "client depends on facade", "reduced subsystem coupling"],
        exam: "Facade is suitable because it provides a unified higher-level interface to a complex subsystem, reducing client knowledge of and coupling to subsystem classes."
      },
      {
        id: "atam-why",
        subject: "atam",
        answer: "ATAM is useful because an architecture can be evaluated against business drivers and prioritized quality-attribute scenarios before the complete system is built. The analysis exposes risks, non-risks, sensitivity points and trade-off points early, when architectural changes are still cheaper.",
        chain: ["Business drivers + QA scenarios", "analyze architectural approaches", "identify risks/sensitivity/trade-offs", "improve architecture before implementation"],
        exam: "ATAM is appropriate when architectural decisions must be evaluated early against important quality scenarios and business goals, because it systematically exposes risks and trade-offs before construction is complete."
      },
      {
        id: "qaw-why",
        subject: "qaw",
        answer: "QAW is useful when quality requirements are weak or incomplete and architecture is not yet final. It brings stakeholders together to brainstorm, consolidate, prioritize and refine quality-attribute scenarios, producing concrete drivers for architectural design.",
        chain: ["Multiple stakeholders", "brainstorm/prioritize QA scenarios", "refine top scenarios", "clear architectural drivers"],
        exam: "QAW is appropriate before architecture is finalized because it turns stakeholder quality concerns into prioritized, concrete quality-attribute scenarios that can drive design."
      },
      {
        id: "palm-why",
        subject: "palm",
        answer: "PALM is useful when quality requirements or quantitative targets lack a clear business rationale. It traces business goals to quality drivers and examines their pedigree, helping stakeholders keep, renegotiate or relax requirements based on where they came from and why they matter.",
        chain: ["Business goals", "quality drivers", "pedigree of requirements", "better justified architectural requirements"],
        exam: "PALM is appropriate when architects need to connect quality requirements to business goals and validate the pedigree of important quantitative drivers."
      },
      {
        id: "add-why",
        subject: "add",
        answer: "ADD is useful because architecture is designed iteratively around architecturally significant requirements. Each iteration chooses an element, identifies the relevant ASRs, generates a design solution, then verifies/refines requirements before continuing, so the design remains quality-driven rather than arbitrary.",
        chain: ["Select element", "identify ASRs", "generate design solution", "verify/refine", "iterate"],
        exam: "ADD is appropriate because it decomposes and designs the architecture iteratively using ASRs as the primary drivers, checking each design hypothesis before proceeding."
      },
      {
        id: "qa-scenario-why",
        subject: "quality-attribute-scenario",
        answer: "A six-part quality-attribute scenario is useful because vague statements such as 'the system should be fast' are not architecturally testable. Source, Stimulus, Environment, Artifact, Response and Response Measure make the quality requirement concrete enough to design for and evaluate objectively.",
        chain: ["Vague quality goal", "six-part scenario", "measurable response", "design/evaluation can reason about it"],
        exam: "Quality-attribute scenarios matter because they convert vague quality goals into concrete, measurable stimuli and responses that architects can design for and later evaluate."
      },
      {
        id: "utility-tree-why",
        subject: "utility-tree",
        answer: "A Utility Tree is useful because it organizes quality concerns into refinements and concrete scenarios, then rates scenario leaves by Business Value and Architectural Impact. High/High leaves reveal the scenarios that deserve the most architectural attention.",
        chain: ["Quality attributes", "refinements", "concrete scenarios", "Business Value / Architectural Impact", "prioritized ASRs"],
        exam: "A Utility Tree helps prioritize architecture work by organizing concrete quality scenarios and rating them by business value and architectural impact, with H/H leaves receiving the greatest attention."
      },
      {
        id: "redundancy-not-guarantee",
        match: q => /\bwhy\b.*\b(more servers|redundancy|replication|replicas?)\b.*\b(not|doesn.t|does not|cannot|can't)\b.*\b(guarantee|ensure)\b.*\bavailability\b/.test(q) || /\bwhy\b.*\b(more servers|redundancy|replication|replicas?)\b.*\bavailability\b/.test(q),
        answer: "Redundancy is only a mechanism, not a guarantee of availability. All replicas may still depend on one failed database/network, or the system may lack detection and failover, so an internal fault can still become an externally visible service failure.",
        chain: ["Add replicas", "shared dependency or missing failover remains", "fault still reaches users", "availability not guaranteed"],
        exam: "Adding replicas does not guarantee availability because shared dependencies and missing detection/failover can still create an end-to-end single point of failure."
      }
    ];

    function explain(raw, queryConcepts, rankedResults) {
      if (!isWhyQuery(raw)) return null;
      const q = normalize(raw);
      const rows = directConcepts(raw, queryConcepts);
      const subject = findConcept(rows, ["architectural-pattern", "design-pattern", "framework", "tactic", "structure", "testing", "documentation", "principle"]);
      const target = findQuality(rows) || rows.find(c => c.category === "security" || c.category === "risk") || null;

      let rule = RULES.find(r => {
        if (r.subject && (!subject || subject.id !== r.subject)) return false;
        if (r.target && (!target || target.id !== r.target)) return false;
        if (r.match && !r.match(q, rows)) return false;
        return !!(r.subject || r.match);
      });

      if (!rule && subject) {
        rule = RULES.find(r => r.subject === subject.id && !r.target && (!r.match || r.match(q, rows)));
      }

      const supporting = evidenceRows(rankedResults, subject, target);
      const evidence = supporting.map(r => asEvidence(r, subject, target));

      if (rule) {
        const label = rule.title || (subject && target ? `${subject.label} → ${target.label}` : subject?.label || "Why this happens");
        return {
          shown: true,
          state: "answer",
          answerMode: "why",
          stateLabel: "Causal Explanation",
          title: "Why / Explanation",
          explanationTitle: label,
          intent: { intent: "explanation", label: "Why / Causal Explanation", confidence: 0.95, polarity: "neutral", reasons: ["query explicitly asks why"] },
          subject: subject ? publicConcept(subject) : null,
          target: target ? publicConcept(target) : null,
          why: [rule.answer],
          mechanismChain: rule.chain || [],
          examReady: rule.exam ? [rule.exam] : [],
          evidence,
          related: [],
          alternatives: [],
          matchingResults: supporting.length,
          independentEvidenceGroups: supporting.length,
          confidence: { level: evidence.length ? "High" : "Medium", numeric: evidence.length ? 0.86 : 0.65, queryAlignment: 1 },
          grounding: rule.id,
          winner: subject ? { ...publicConcept(subject), percent: 100, share: 1, score: 1, supportCount: supporting.length, independentSupportCount: supporting.length, evidence } : { id: rule.id, label, category: "explanation", percent: 100, share: 1, score: 1, supportCount: supporting.length, independentSupportCount: supporting.length, evidence }
        };
      }

      const fallbackLines = evidence.map(e => e.snippet).filter(Boolean).slice(0, 2);
      if (fallbackLines.length) {
        const label = subject && target ? `${subject.label} → ${target.label}` : subject?.label || target?.label || "Course-grounded explanation";
        return {
          shown: true,
          state: "answer",
          answerMode: "why",
          stateLabel: "Evidence-Based Explanation",
          title: "Why / Explanation",
          explanationTitle: label,
          intent: { intent: "explanation", label: "Why / Causal Explanation", confidence: 0.72, polarity: "neutral", reasons: ["query explicitly asks why; explanation extracted from local answer evidence"] },
          subject: subject ? publicConcept(subject) : null,
          target: target ? publicConcept(target) : null,
          why: fallbackLines,
          mechanismChain: [],
          examReady: [fallbackLines.join(" ")],
          evidence,
          related: [],
          alternatives: [],
          matchingResults: supporting.length,
          independentEvidenceGroups: supporting.length,
          confidence: { level: "Medium", numeric: 0.58, queryAlignment: subject || target ? 0.7 : 0.4 },
          grounding: "local-evidence-fallback",
          winner: subject ? { ...publicConcept(subject), percent: 100, share: 1, score: 1, supportCount: supporting.length, independentSupportCount: supporting.length, evidence } : { id: "why-fallback", label, category: "explanation", percent: 100, share: 1, score: 1, supportCount: supporting.length, independentSupportCount: supporting.length, evidence }
        };
      }

      return {
        shown: true,
        state: "insufficient-information",
        answerMode: "why",
        stateLabel: "Insufficient Explanation Evidence",
        title: "Why / Explanation",
        intent: { intent: "explanation", label: "Why / Causal Explanation", confidence: 0.5, polarity: "neutral", reasons: ["query explicitly asks why"] },
        subject: subject ? publicConcept(subject) : null,
        target: target ? publicConcept(target) : null,
        why: ["I can identify that this is a why-question, but the local course evidence is not strong enough to produce a reliable causal explanation."],
        missingInformation: ["Add the pattern/decision and the quality or effect you want explained, e.g. 'Why does Layer improve modifiability?'"],
        evidence: [],
        related: [],
        alternatives: []
      };
    }

    function publicConcept(concept) {
      return concept ? { id: concept.id, label: concept.label, category: concept.category } : null;
    }

    return { isWhyQuery, explain, inspect: () => ({ rules: RULES.length, concepts: concepts.length }) };
  }

  root.createExamExplainer = createExamExplainer;
  if (typeof module !== "undefined") module.exports = { createExamExplainer };
})(typeof window !== "undefined" ? window : globalThis);
