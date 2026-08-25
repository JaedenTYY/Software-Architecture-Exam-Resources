((root) => {
  let wrappedFactory = null;

  const TOP_LEVEL_QUALITY_IDS = new Set([
    "availability",
    "interoperability",
    "modifiability",
    "performance",
    "security",
    "testability",
    "usability"
  ]);
  const QUALITY_DETAIL_IDS = new Set([
    "fault",
    "failure",
    "end-to-end-availability",
    "recovery",
    "latency",
    "throughput"
  ]);

  const PAST_PAPER_REFERENCES = [
    {
      id: "PY-2024-01-Q1",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2024 Q1: Video-game platform pattern selection and Performance scenario",
      body: "Video-game platform. For notification when a matching new game becomes available, Publish-Subscribe is the strongest architectural answer because publishers/events can disseminate updates to interested gamers without each gamer polling. Gamer-to-gamer communication can be justified with Peer-to-Peer when gamers act as equal communication peers; a centralized chat service would instead justify Client-Server. Persistent progress/profile access across PCs is naturally supported by Client-Server with centrally managed persistent data. For each pattern, state the concrete elements, interaction mechanism, one QA consequence and one trade-off. A Performance QA scenario must contain Source, Stimulus, Environment, Artifact, Response and a measurable Response Measure such as a response-time percentile.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
      concepts: ["publish-subscribe","peer-to-peer","client-server","performance","quality-attribute-scenario"]
    },
    {
      id: "PY-2024-01-Q2",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2024 Q2: QA scenarios, Utility Tree and notation",
      body: "Create scenario-specific quality requirements for gamers and publishers using the six-part QA form: Source, Stimulus, Environment, Artifact, Response, Response Measure. Suitable top-level qualities include Performance, Availability, Security, Usability, Modifiability, Testability or Interoperability when justified by the scenario. Build a Utility Tree as Utility → QA → refinement → concrete scenario [Business Value, Architectural Impact]; High/High leaves are strong ASR candidates. For architectural documentation, compare informal, semiformal and formal notation and justify the chosen rigor; semiformal notation is often a balanced choice when stakeholders need understandable but less ambiguous views.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
      concepts: ["quality-attribute-scenario","utility-tree","asr","architecture-notation"]
    },
    {
      id: "PY-2024-01-Q3",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2024 Q3: Service-Oriented Architecture",
      body: "SOA is appropriate when independently provided/consumed network services cooperate through published service interfaces or contracts. Map the scenario to service consumer, service provider and, when applicable, registry/ESB/orchestration. Interoperability and modifiability can improve because consumers depend on published contracts rather than provider internals. Trade-offs include network/serialization overhead, service-versioning complexity, security across service boundaries and possible intermediary bottlenecks. Do not justify SOA merely because a system uses a network; the decisive mechanism is independently managed services plus published interfaces/contracts.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
      concepts: ["soa","interoperability","modifiability","performance","security"]
    },
    {
      id: "PY-2024-01-Q4",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2024 Q4: Creational patterns and Observer notification",
      body: "Creational design patterns encapsulate or control object-creation decisions so client code depends less on concrete construction. Course-emphasized examples include Factory Method and Singleton: Factory Method delegates product creation; Singleton enforces exactly one controlled instance when that is a real requirement. For the requirement that gamers be notified when a matching game becomes available at implementation/design-pattern level, Observer is suitable: a Subject maintains/notifies registered Observers when state changes. Distinguish this GoF pattern from system-level Publish-Subscribe architecture.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
      concepts: ["design-pattern-category","factory-method","singleton","observer","publish-subscribe"]
    },
    {
      id: "PY-2024-08-Q1",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2024 Q1: myTNB pattern selection and Performance scenario",
      body: "For electricity-consumption threshold notifications, Publish-Subscribe is appropriate because an event can notify interested users when the threshold is crossed. For payment through independently provided online-banking/card services, SOA is appropriate when the application consumes published external service interfaces/contracts. For storing and tracking usage/bill information over the Internet, Client-Server is a strong answer because clients request centrally managed persistent information; Shared-Data can also describe the repository mechanism when the question emphasizes multiple accessors sharing one store. Explain one advantage and limitation causally for each selected pattern, then write a measurable six-part Performance scenario.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
      concepts: ["publish-subscribe","soa","client-server","shared-data","performance","quality-attribute-scenario"]
    },
    {
      id: "PY-2024-08-Q2",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2024 Q2: QA scenarios, Utility Tree and documentation notation",
      body: "Write four scenario-specific quality requirements in six-part form and make every Response Measure objective. Organize them in a Utility Tree with QA, refinement and scenario leaves prioritized by Business Value and Architectural Impact. For notation, compare informal (fast but ambiguous), semiformal (defined conventions such as UML-style views) and formal (mathematically precise but costly/specialized). Select the notation based on stakeholder precision and analysis needs instead of claiming one notation is universally best.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
      concepts: ["quality-attribute-scenario","utility-tree","architecture-notation","asr"]
    },
    {
      id: "PY-2024-08-Q3",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2024 Q3: Peer-to-Peer",
      body: "P2P uses equal peer roles: each peer may request and provide resources, with peer discovery/dynamic attachment supporting decentralized cooperation. A concrete business example should name the peer resources and how peers find/use one another. Scalability can improve because joining peers can add capacity as well as demand; Availability can improve when equivalent resources exist on multiple peers. Security, trust and consistency may be threatened because decentralized participants are harder to authenticate/control and replicas/resources can diverge. P2P does not guarantee Availability when only one peer holds a required resource.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
      concepts: ["peer-to-peer","availability","security","performance"]
    },
    {
      id: "PY-2024-08-Q4",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2024 Q4: Behavioral design patterns and Observer",
      body: "Behavioral GoF patterns organize how objects communicate and how responsibilities/algorithms are distributed. Course-emphasized examples are Observer and State. Observer establishes a one-to-many dependency so a Subject notifies registered Observers after a relevant state change. State encapsulates state-specific behavior in State objects so a Context changes behavior by changing its current State rather than spreading conditionals. For an implementation-level threshold-notification requirement, Observer is the direct answer; system-level event distribution remains Publish-Subscribe.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
      concepts: ["design-pattern-category","observer","state","publish-subscribe"]
    },
    {
      id: "PY-2025-01-Q1",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2025 Q1: Trading platform patterns and runtime quality attributes",
      body: "A trading UI with multiple synchronized charts and responsive user interaction can justify MVC because Model state is separated from Views and Controllers; threshold stock notifications justify Publish-Subscribe; external payment providers with published interfaces justify SOA. For runtime observability: Performance, Usability and Security are observable through running-system behavior, while Modifiability is primarily a design/development-time quality. A formal runtime QA scenario must use Source, Stimulus, Environment, Artifact, Response and a measurable Response Measure.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
      concepts: ["mvc","publish-subscribe","soa","performance","usability","security","modifiability","quality-attribute-scenario"]
    },
    {
      id: "PY-2025-01-Q2",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2025 Q2: QA scenarios and Utility Tree",
      body: "Create four concrete six-part quality-attribute scenarios for the trading platform, each with a quantified response measure. Then organize the same scenarios in a Utility Tree: Utility → QA → refinement → scenario [Business Value, Architectural Impact]. Prioritize leaves using H/M/L and explain why High/High leaves are architecturally significant rather than simply labeling them.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
      concepts: ["quality-attribute-scenario","utility-tree","asr"]
    },
    {
      id: "PY-2025-01-Q3",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2025 Q3: Pipe-and-Filter and pipeline parallelism",
      body: "Pipe-and-Filter is a C&C pattern for successive transformations of a data stream. Filters independently transform input; pipes carry intermediate output. Buffered pipes enable pipeline parallelism: while one filter processes item 1, adjacent filters can process later items concurrently, increasing throughput. A limitation is that additional stages can add buffering, copying, synchronization and scheduling overhead; failure of a mandatory stage can also stop the pipeline. Do not confuse this with Map-Reduce, which partitions massive batch datasets across Map/Reduce tasks with shuffle/sort.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
      concepts: ["pipe-and-filter","throughput","performance","component-and-connector","map-reduce"]
    },
    {
      id: "PY-2025-01-Q4",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2025 Q4: Client-Server view, Layer view, cross-view mapping and Observer",
      body: "Document Client-Server as a Component-and-Connector/runtime view showing clients, servers and request/reply connectors. Document Layer as a Module view showing implementation responsibilities and allowed-to-use dependencies. Cross-view mapping states how layer/module elements implement or are implemented by runtime client/server elements; mappings may be one-to-one, one-to-many or many-to-one. For a new implementation-level promotion-notification feature, Observer is suitable because a subject notifies registered dependent observers. Layer is logical/module organization; it is not the same as physical Multi-Tier deployment.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
      concepts: ["client-server","layer","component-and-connector","module-structure","cross-view-mapping","observer","multi-tier"]
    },
    {
      id: "PY-2025-08-Q1",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2025 Q1: Healthcare platform patterns and runtime QA measurement",
      body: "Embedding an external mapping capability can justify SOA when the healthcare system consumes an independently provided Google Maps-style service through a published interface. Online insurance balance/claim tracking is naturally Client-Server with centrally managed persistent information. Claim/promotion notifications justify Publish-Subscribe. For Availability, Performance, Usability and Security, explain runtime observability and give one measurable response measure for each, then write a scenario-specific informal runtime QA requirement.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
      concepts: ["soa","client-server","publish-subscribe","availability","performance","usability","security"]
    },
    {
      id: "PY-2025-08-Q2",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2025 Q2: QA scenarios and Utility Tree",
      body: "Write four formal six-part QA scenarios for the healthcare management system and make each response measure testable. Build the Utility Tree from the same requirements and rate every leaf by Business Value and Architectural Impact. Use the tree to identify the scenarios that most strongly constrain architectural decisions.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
      concepts: ["quality-attribute-scenario","utility-tree","asr"]
    },
    {
      id: "PY-2025-08-Q3",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2025 Q3: Model-View-Controller",
      body: "MVC separates application state/functionality (Model), presentation (View) and user-input mediation (Controller). Multiple Views can present synchronized representations of the same Model while Controllers translate user actions into operations. The separation can improve modifiability/testability because presentation changes can remain largely independent of core model logic. A weakness is extra structural/event-flow complexity, especially for simple interfaces or UI toolkits that naturally combine input and presentation concerns.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
      concepts: ["mvc","modifiability","testability","component-and-connector"]
    },
    {
      id: "PY-2025-08-Q4",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2025 Q4: Architecture views and view-template documentation",
      body: "The three major architecture structure families are Module (static implementation organization), Component-and-Connector (runtime interaction), and Allocation (software mapped to environment such as hardware/deployment/teams/files). A view is a representation of one structure. A documented view commonly contains Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale. For the MVC scenario, a primary C&C presentation should show Model, View and Controller elements plus their runtime interactions rather than merely listing classes.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
      concepts: ["module-structure","component-and-connector","allocation-structure","view-documentation","mvc"]
    },
    {
      id: "PY-2025-08-Q5",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — August 2025 Q5: Behavioral patterns and Observer notification",
      body: "Behavioral patterns address communication and responsibility among objects. For claim-approval or promotion notifications at implementation/design level, Observer is suitable: the Subject represents the claim/promotion source and registered Observer objects represent dependent UI/application objects or users' notification adapters. When the Subject changes, observers are notified through the Observer interface. Distinguish this object-level GoF collaboration from architectural Publish-Subscribe event distribution.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
      concepts: ["design-pattern-category","observer","publish-subscribe"]
    },
    {
      id: "PY-2026-01-Q1",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2026 Q1: HPC QA scenarios and Utility Tree",
      body: "For an HPC online platform, choose four quality concerns that materially affect architecture and express each as Source, Stimulus, Environment, Artifact, Response and measurable Response Measure. Performance can measure job completion/response under workload; Availability can measure service recovery/uptime; Security can measure rejection/auditing of unauthorized operations; Usability or Interoperability may also be justified. Put the scenarios into a Utility Tree and prioritize by Business Value and Architectural Impact so architecturally significant High/High scenarios stand out.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
      concepts: ["quality-attribute-scenario","performance","availability","security","utility-tree","asr"]
    },
    {
      id: "PY-2026-01-Q2",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2026 Q2: HPC pattern selection and runtime qualities",
      body: "Task-completion notification strongly supports Publish-Subscribe when the platform pushes completion events to interested users. Online tracking of submitted tasks/data supports Client-Server because users request centrally managed information over the Internet. Payment/plan integration can justify SOA when independently provided payment services are consumed through published interfaces/contracts. Explain a QA advantage and trade-off for each. Availability, Performance, Usability and Security are observable at runtime and should be paired with concrete response measures rather than vague claims.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
      concepts: ["publish-subscribe","client-server","soa","availability","performance","usability","security"]
    },
    {
      id: "PY-2026-01-Q3",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2026 Q3: Map-Reduce parallel processing",
      body: "Map-Reduce is suitable for enormous batch datasets because infrastructure partitions input across many Map tasks, shuffles/sorts intermediate key/value data and combines results through Reduce tasks. Parallel Map/Reduce execution can improve throughput/scalability and the infrastructure may monitor/restart failed tasks. Weaknesses include framework overhead on small jobs, partition/data skew that creates stragglers, shuffle/network cost and increased complexity for workflows requiring many dependent stages. Distinguish Map-Reduce batch partitioning from Pipe-and-Filter successive stream transformation.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
      concepts: ["map-reduce","performance","throughput","allocation-structure","pipe-and-filter"]
    },
    {
      id: "PY-2026-01-Q4",
      referenceType: "past-paper",
      title: "Past Paper + Model Answer — January 2026 Q4: Notations, architecture views and view template",
      body: "Architecture documentation may use informal notation (fast but ambiguous), semiformal notation (defined syntax/conventions with balanced precision) or formal notation (mathematically precise/analyzable but costly). Major structure/view families are Module, Component-and-Connector and Allocation. A view-template answer should explain Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale. For the Map-Reduce scenario, a primary allocation-oriented presentation can show data partitions/tasks mapped across computational nodes/infrastructure while also identifying Map, shuffle/sort and Reduce responsibilities.",
      source: "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
      concepts: ["architecture-notation","module-structure","component-and-connector","allocation-structure","view-documentation","map-reduce"]
    }
  ];

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

  function installPastPaperReferences() {
    const existing = root.UNIVERSAL_REFERENCES || [];
    const seen = new Set(existing.map(r => r.id));
    const additions = PAST_PAPER_REFERENCES.filter(r => !seen.has(r.id));
    if (additions.length) root.UNIVERSAL_REFERENCES = [...existing, ...additions];
    root.CSC3209_PAST_PAPER_REFERENCES = PAST_PAPER_REFERENCES;
  }

  function upsertDirectConcept(queryConcepts, config, id) {
    const concept = config?.byId?.[id];
    if (!concept) return queryConcepts || [];
    const rows = (queryConcepts || []).filter(c => c.id !== id);
    return [{ id, label: concept.label, direct: true }, ...rows];
  }

  function removeConcept(queryConcepts, id) {
    return (queryConcepts || []).filter(c => c.id !== id);
  }

  function biasResults(results, preferredId, preferredLabel, competingLabel, preferredFactor = 1.8, competingFactor = 0.58) {
    return (results || []).map(result => {
      const labels = new Set([
        result.subtopic,
        result.topic,
        ...(result._concepts || []),
        ...(result._matchedConcepts || []).map(c => c.label)
      ].filter(Boolean).map(normalize));
      const preferred = labels.has(normalize(preferredLabel));
      const competing = competingLabel && labels.has(normalize(competingLabel));
      let score = Number(result._score || 0);
      if (preferred) score *= preferredFactor;
      if (competing && !preferred) score *= competingFactor;
      const matched = [...(result._matchedConcepts || [])];
      if (preferred && !matched.some(c => c.id === preferredId)) {
        matched.unshift({ id: preferredId, label: preferredLabel, kind: "direct", score: 999 });
      }
      return { ...result, _score: score, _matchedConcepts: matched };
    }).sort((a, b) => Number(b._score || 0) - Number(a._score || 0));
  }

  function stateFocusedResults(results) {
    // Preserve the original evidence text. State questions often mention Observer
    // comparatively, so only adjust ranking/matched-concept emphasis here rather
    // than deleting answer evidence or forcing confidence.
    return biasResults(results, "state", "State", "Observer", 2.0, 0.52);
  }

  function maybePreferExplicitState(prediction) {
    if (!prediction || prediction.state !== "answer") return prediction;
    if (prediction.winner?.id === "state" || normalize(prediction.winner?.label) === "state") return prediction;
    if (!(prediction.winner?.id === "observer" || normalize(prediction.winner?.label) === "observer")) return prediction;
    const stateCandidate = (prediction.candidates || []).find(c => c.id === "state" || normalize(c.label) === "state");
    if (!stateCandidate) return prediction;

    const currentScore = Math.max(0.001, Number(prediction.winner?.score || 0));
    const stateScore = Number(stateCandidate.score || 0);
    if (stateScore < currentScore * 0.55) return prediction;

    const previousWinner = prediction.winner;
    const alternatives = [previousWinner, ...(prediction.alternatives || [])]
      .filter(Boolean)
      .filter((item, index, arr) => (item.id || item.label) !== "state" && arr.findIndex(x => (x.id || x.label) === (item.id || item.label)) === index)
      .slice(0, 3);

    return {
      ...prediction,
      winner: stateCandidate,
      alternatives,
      confidence: {
        ...(prediction.confidence || {}),
        level: "Medium",
        numeric: Math.min(0.6, Number(prediction.confidence?.numeric || 0.6)),
        queryAlignment: 1
      },
      ambiguity: { isAmbiguous: false, notes: [] },
      why: [
        "State is selected from the explicit mechanism in the query: one object's behavior varies with its own internal state, and state-specific behavior replaces scattered conditional logic."
      ],
      examReady: [
        "The State pattern is suitable because it encapsulates state-specific behavior in separate State objects, allowing the Context to change behavior by changing its current State rather than spreading conditional logic throughout the code."
      ],
      calibration: "explicit-state-mechanism-tiebreak"
    };
  }

  function asksForTopLevelQuality(rawQuery) {
    const q = normalize(rawQuery);
    return /\b(quality attribute|which quality|what quality|what qa|which qa)\b/.test(q);
  }

  function topLevelQualityConfig(config) {
    if (!config?.concepts) return config;
    const concepts = config.concepts.map(concept => QUALITY_DETAIL_IDS.has(concept.id)
      ? { ...concept, category: "quality-detail", answerEligibleAsQualityAttribute: false }
      : concept);
    return { ...config, concepts, byId: Object.fromEntries(concepts.map(c => [c.id, c])) };
  }

  function installAnswerPredictor(factory) {
    wrappedFactory = function calibratedCreateAnswerPredictor(config, options) {
      const predictor = factory(config, options);
      const originalPredict = predictor.predict.bind(predictor);
      predictor.predict = function calibratedPredict(rawQuery, queryConcepts, rankedResults, configOverride) {
        const q = normalize(rawQuery);
        const cfg = configOverride || config || root.CSC3209_SEARCH_CONFIG || {};

        // Explicit top-level QA questions may only be won by the seven CSC3209
        // top-level quality attributes. Fault/failure/recovery and latency/
        // throughput remain searchable supporting concepts, but cannot win here.
        if (asksForTopLevelQuality(rawQuery)) {
          const qaCfg = topLevelQualityConfig(cfg);
          const prediction = originalPredict(rawQuery, queryConcepts, rankedResults, qaCfg);
          if (prediction?.state === "answer" && prediction.winner && !TOP_LEVEL_QUALITY_IDS.has(prediction.winner.id)) {
            return {
              ...prediction,
              state: "insufficient-information",
              stateLabel: "Insufficient Information",
              winner: null,
              alternatives: [],
              why: ["The evidence identifies a supporting quality detail or metric, but not one of the seven top-level CSC3209 quality attributes strongly enough to present as the answer."],
              missingInformation: ["Identify the top-level quality attribute: Availability, Interoperability, Modifiability, Performance, Security, Testability or Usability."]
            };
          }
          return prediction;
        }

        const mvcClue = /\bmodel\b.*\bmultiple\b.*\b(synchronized\s+)?views?\b.*\bcontrollers?\b.*\b(handle|handles|mediate|mediates)\b.*\b(input|user input)\b/.test(q)
          || /\bmultiple\b.*\bsynchronized\b.*\bviews?\b.*\bmodel\b/.test(q)
          || (/\bmodel\b/.test(q) && /\bviews?\b/.test(q) && /\bcontrollers?\b/.test(q) && /\binput\b/.test(q));
        if (mvcClue) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "mvc");
          const results = biasResults(rankedResults, "mvc", "MVC", "Layer");
          return originalPredict(`${rawQuery} model view controller mvc`, concepts, results, configOverride);
        }

        const stateClue = /\b(object|context)\b.*\b(change|changes|changing)\b.*\bbehavio[u]?r\b.*\b(internal )?state\b/.test(q)
          || /\bbehavio[u]?r\b.*\b(internal )?state\b.*\b(instead of|avoid|replace|without)\b.*\b(conditionals?|if else|switch)\b/.test(q)
          || /\b(internal )?state\b.*\b(instead of|avoid|replace)\b.*\b(conditionals?|if else|switch)\b/.test(q)
          || (/\bbehavio[u]?r\b/.test(q) && /\binternal state\b/.test(q) && /\bconditionals?\b/.test(q));
        if (stateClue) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "state");
          const results = stateFocusedResults(rankedResults);
          const prediction = originalPredict(`${rawQuery} State state-specific behavior Context ConcreteState`, concepts, results, configOverride);
          return maybePreferExplicitState(prediction);
        }

        return originalPredict(rawQuery, queryConcepts, rankedResults, configOverride);
      };
      return predictor;
    };
  }

  function isExplanationIntent(raw) {
    const q = normalize(raw);
    return /(^|\s)(why|how come)(\s|$)/.test(q)
      || /\b(explain why|reason why)\b/.test(q)
      || /^how\s+(does|do|can|could|would|will)\b/.test(q)
      || /^(explain|describe)\s+how\b/.test(q)
      || /^what\s+(causes|makes)\b/.test(q);
  }

  function addExplanationHints(raw, q) {
    let expanded = raw;
    if (/\b(mvc|model view controller)\b/.test(q) && /\b(separat|ui|user interface|presentation|view)\b/.test(q)) {
      expanded += " modifiability model view controller presentation separation";
    }
    if (/\b(pipe[- ]and[- ]filter|pipeline|filters?)\b/.test(q) && /\b(parallel|parallelization|parallelisation|throughput)\b/.test(q)) {
      expanded += " throughput performance buffered pipes pipeline parallelism";
    }
    if (/\b(map[- ]reduce|map reduce)\b/.test(q) && /\b(parallel|large|huge|massive|batch)\b/.test(q)) {
      expanded += " performance scalability parallel batch partition";
    }
    if (/\blayer\b/.test(q) && /\b(isolat|change|modif|maintain)\b/.test(q)) {
      expanded += " modifiability localized change restricted dependencies";
    }
    return expanded;
  }

  // The browser loads exam-explainer.js before this calibration file. Wrap it
  // in place so normal exam grammar (why/how/explain how/describe how) reaches
  // the deterministic causal explanation path.
  function installExplainerCalibration() {
    const factory = root.createExamExplainer;
    if (typeof factory !== "function" || factory.__csc3209Calibrated) return;

    const calibratedFactory = function calibratedCreateExamExplainer(config, options) {
      const explainer = factory(config, options);
      const originalExplain = explainer.explain.bind(explainer);
      const originalIsWhyQuery = explainer.isWhyQuery.bind(explainer);

      explainer.isWhyQuery = function calibratedIsWhyQuery(rawQuery) {
        return originalIsWhyQuery(rawQuery) || isExplanationIntent(rawQuery);
      };

      explainer.explain = function calibratedExplain(rawQuery, queryConcepts, rankedResults) {
        const q = normalize(rawQuery);
        const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
        const explanationIntent = isExplanationIntent(rawQuery);
        let raw = explanationIntent && !originalIsWhyQuery(rawQuery) ? `Why ${rawQuery}` : rawQuery;
        let concepts = queryConcepts || [];

        raw = addExplanationHints(raw, q);

        if (/\b(p2p|peer[- ]?to[- ]?peer)\b.*\b(scalable|scalability|scale|scales|scaling)\b/.test(q)) {
          concepts = upsertDirectConcept(concepts, cfg, "peer-to-peer");
          raw = `${raw} scalability scale more peers add resources demand capacity`;
        }

        if (/\b(client[- ]?server|client server)\b.*\b(slow|slower|high load|heavy load|many clients|bottleneck|overload|overloaded)\b/.test(q)) {
          concepts = upsertDirectConcept(concepts, cfg, "client-server");
          concepts = upsertDirectConcept(concepts, cfg, "performance");
          raw = `${raw} performance bottleneck response time throughput high load`;
        }

        if (/\bpalm\b/.test(q)) {
          concepts = removeConcept(concepts, "business-goal");
          concepts = upsertDirectConcept(concepts, cfg, "palm");
        }

        return originalExplain(raw, concepts, rankedResults);
      };
      return explainer;
    };
    calibratedFactory.__csc3209Calibrated = true;
    root.createExamExplainer = calibratedFactory;
  }

  installPastPaperReferences();
  installExplainerCalibration();

  Object.defineProperty(root, "createAnswerPredictor", {
    configurable: true,
    enumerable: true,
    get() { return wrappedFactory; },
    set(factory) { installAnswerPredictor(factory); }
  });
})(typeof window !== "undefined" ? window : globalThis);
