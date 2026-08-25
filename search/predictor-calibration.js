((root) => {
  let wrappedFactory = null;

  const TOP_LEVEL_QUALITY_IDS = new Set([
    "availability", "interoperability", "modifiability", "performance",
    "security", "testability", "usability"
  ]);
  const QUALITY_DETAIL_IDS = new Set([
    "fault", "failure", "end-to-end-availability", "recovery", "latency", "throughput"
  ]);
  const QUESTION_FILTER_KEYS = [
    "bank", "topic", "subtopic", "qtype", "difficulty", "family", "scenario", "marks"
  ];
  const ATAM_CONSTITUENTS = new Set([
    "utility-tree", "sensitivity-point", "trade-off-point", "architectural-risk", "risk-theme"
  ]);

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

  function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function containsTerm(haystack, term) {
    if (!term) return false;
    const escaped = escapeRegex(normalize(term));
    return new RegExp(`(^|[^a-z0-9+#])${escaped}(?=$|[^a-z0-9+#])`).test(normalize(haystack));
  }

  function loadPastPaperReferences() {
    if (root.PAST_PAPER_REFERENCES?.length) return;
    if (typeof module !== "undefined" && typeof require === "function") {
      try { require("./past_paper_references.js"); } catch (_) {}
      return;
    }
    if (typeof document !== "undefined" && document.readyState === "loading") {
      // This script itself is parser-loaded near the end of index.html. Writing
      // the generated data script here keeps existing HTML wiring unchanged and
      // executes the data before the following application script runs.
      document.write('<script src="search/past_paper_references.js"><\\/script>');
    }
  }

  function conceptTerms(concept) {
    return [concept?.label, ...(concept?.aliases || [])].map(normalize).filter(Boolean);
  }

  function boundaryDirectIds(raw, queryConcepts, config) {
    const ids = new Set((queryConcepts || []).filter(c => c.direct).map(c => c.id));
    const q = normalize(raw);
    for (const concept of config?.concepts || []) {
      if (conceptTerms(concept).some(term => containsTerm(q, term))) ids.add(concept.id);
    }
    return ids;
  }

  function embeddedFalsePositive(raw, concept) {
    const q = normalize(raw);
    return conceptTerms(concept).some(term => {
      if (!term || /\s/.test(term) || term.length <= 3) return false;
      return q.includes(term) && !containsTerm(q, term);
    });
  }

  function resultSupportsConcept(result, concept) {
    if (!result || !concept) return false;
    const label = normalize(concept.label);
    const id = normalize(concept.id);
    if ([result.subtopic, result.topic, result.title].some(v => {
      const n = normalize(v);
      return n === label || n === id;
    })) return true;
    if ((result.tags || []).some(t => {
      const n = normalize(t);
      return n === label || n === id;
    })) return true;
    const text = normalize([
      result.title, result.subtopic, result.topic, result.prompt,
      result.answer_outline, result.exam_trap, result.body, (result.tags || []).join(" ")
    ].filter(Boolean).join(" "));
    return conceptTerms(concept).some(term => containsTerm(text, term));
  }

  function sanitizeStaleSemanticResult(result, config) {
    const directBefore = (result._matchedConcepts || []).filter(m => m.kind === "direct");
    if (!directBefore.length && !(result._concepts || []).length) return result;

    const matched = (result._matchedConcepts || []).filter(match => {
      if (match.kind !== "direct") return true;
      return resultSupportsConcept(result, config?.byId?.[match.id]);
    });
    const concepts = (result._concepts || []).filter(label => {
      const concept = (config?.concepts || []).find(c => normalize(c.label) === normalize(label));
      return !concept || resultSupportsConcept(result, concept);
    });

    const directAfter = matched.filter(m => m.kind === "direct").length;
    if (directAfter === directBefore.length) return { ...result, _concepts: concepts };

    const oldSem = Number(result._semanticScore || 0);
    const ratio = directBefore.length ? directAfter / directBefore.length : 1;
    const newSem = oldSem * Math.max(0.2, ratio);
    const oldScore = Number(result._score || 0);
    return {
      ...result,
      _matchedConcepts: matched,
      _concepts: concepts,
      _semanticScore: newSem,
      _score: Math.max(Number(result._lexicalScore || 0) * 0.2, oldScore - oldSem + newSem)
    };
  }

  function rerankSecurityLookup(search) {
    const directSecurity = (search.concepts || []).find(c => c.direct && ["authentication", "authorization"].includes(c.id));
    if (!directSecurity) return search;
    const label = normalize(directSecurity.label);
    const rows = (search.results || []).map(result => {
      let factor = 1;
      const topicish = [result.subtopic, result.topic].map(normalize);
      if (result._resultType !== "reference" && topicish.includes("security")) factor *= 1.7;
      if (result._resultType !== "reference" && (result._matchedConcepts || []).some(m => m.id === directSecurity.id && m.kind === "direct")) factor *= 1.2;
      if (result._resultType === "reference" && !containsTerm(result.title || "", label)) factor *= 0.72;
      return { ...result, _score: Number(result._score || 0) * factor };
    }).sort((a, b) => Number(b._score || 0) - Number(a._score || 0));
    return { ...search, results: rows };
  }

  function installHybridSearchCalibration() {
    const factory = root.createHybridSearchEngine;
    if (typeof factory !== "function" || factory.__csc3209Hardening) return;
    const wrapped = function hardenedHybridFactory(questions, references, config) {
      const engine = factory(questions, references, config);
      const originalSearch = engine.search.bind(engine);
      const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
      engine.search = function hardenedSearch(options = {}) {
        let search = originalSearch(options);
        let results = (search.results || []).map(r => sanitizeStaleSemanticResult(r, cfg));

        // Reference cards do not possess question-bank metadata such as bank,
        // difficulty, family, marks or scenario. When such a structured filter
        // is active, exclude references rather than allowing them to leak past
        // filters that only apply to question rows.
        if (QUESTION_FILTER_KEYS.some(key => String(options[key] || "").trim())) {
          results = results.filter(r => r._resultType !== "reference");
        }

        search = { ...search, results: results.sort((a, b) => Number(b._score || 0) - Number(a._score || 0)) };
        return rerankSecurityLookup(search);
      };
      return engine;
    };
    wrapped.__csc3209Hardening = true;
    root.createHybridSearchEngine = wrapped;
  }

  function conservativeReferenceEvidence(results) {
    const seenReferenceSources = new Set();
    return (results || []).filter(result => {
      if (result._resultType !== "reference") return true;
      const source = String(result.source || result.id || "reference");
      if (seenReferenceSources.has(source)) return false;
      seenReferenceSources.add(source);
      return true;
    });
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
        result.subtopic, result.topic,
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

  function stateClue(q) {
    return /\b(object|context)\b.*\b(change|changes|changing)\b.*\bbehavio[u]?r\b.*\b(internal )?state\b/.test(q)
      || /\bbehavio[u]?r\b.*\b(internal )?state\b.*\b(instead of|avoid|replace|without)\b.*\b(conditionals?|if else|switch)\b/.test(q)
      || /\b(internal )?state\b.*\b(instead of|avoid|replace)\b.*\b(conditionals?|if else|switch)\b/.test(q)
      || (/\bbehavio[u]?r\b/.test(q) && /\binternal state\b/.test(q) && /\bconditionals?\b/.test(q));
  }

  function observerClue(q) {
    return /\b(observer|observers|listeners?|interested objects?|dependent objects?|notify observers?|automatically updates?|one-to-many)\b/.test(q)
      || /\b(one object|subject)\b.*\b(change|changes)\b.*\b(notify|update)\b/.test(q);
  }

  function stateFocusedResults(results) {
    return biasResults(results, "state", "State", "Observer", 2.0, 0.52);
  }

  function maybePreferExplicitState(prediction) {
    if (!prediction || prediction.state !== "answer") return prediction;
    if (prediction.winner?.id === "state") return prediction;
    if (prediction.winner?.id !== "observer") return prediction;
    const stateCandidate = (prediction.candidates || []).find(c => c.id === "state");
    if (!stateCandidate) return prediction;
    const observerScore = Math.max(0.001, Number(prediction.winner.score || 0));
    if (Number(stateCandidate.score || 0) < observerScore * 0.55) return prediction;
    return {
      ...prediction,
      winner: stateCandidate,
      alternatives: [prediction.winner, ...(prediction.alternatives || [])].filter(x => x?.id !== "state").slice(0, 3),
      confidence: { ...(prediction.confidence || {}), level: "Medium", numeric: Math.min(0.6, Number(prediction.confidence?.numeric || 0.6)), queryAlignment: 1 },
      ambiguity: { isAmbiguous: false, notes: [] },
      why: ["State is selected from the explicit mechanism in the query: one object's behavior varies with its own internal state, and state-specific behavior replaces scattered conditional logic."],
      examReady: ["The State pattern is suitable because it encapsulates state-specific behavior in separate State objects, allowing the Context to change behavior by changing its current State rather than spreading conditional logic throughout the code."],
      calibration: "explicit-state-mechanism-tiebreak"
    };
  }

  function cleanDesignAlternatives(prediction, q) {
    if (!prediction || prediction.state !== "answer" || prediction.intent?.intent !== "design-pattern") return prediction;
    const hasState = stateClue(q);
    const hasObserver = observerClue(q);
    const winnerId = prediction.winner?.id;
    const keep = candidate => {
      if (!candidate) return false;
      if (candidate.id === "state" && winnerId !== "state" && !hasState) return false;
      if (candidate.id === "observer" && winnerId !== "observer" && !hasObserver) return false;
      if (candidate.id === "observer" && winnerId === "state" && hasState && !hasObserver) return false;
      if (candidate.id === "state" && winnerId === "observer" && hasObserver && !hasState) return false;
      return true;
    };
    return { ...prediction, alternatives: (prediction.alternatives || []).filter(keep) };
  }

  function asksForTopLevelQuality(rawQuery) {
    return /\b(quality attribute|which quality|what quality|what qa|which qa)\b/.test(normalize(rawQuery));
  }

  function topLevelQualityConfig(config) {
    if (!config?.concepts) return config;
    const concepts = config.concepts.map(concept => QUALITY_DETAIL_IDS.has(concept.id)
      ? { ...concept, category: "quality-detail", answerEligibleAsQualityAttribute: false }
      : concept);
    return { ...config, concepts, byId: Object.fromEntries(concepts.map(c => [c.id, c])) };
  }

  function atamMethodClue(q) {
    const clues = [
      /\bbusiness drivers?\b/.test(q),
      /\butility tree\b/.test(q),
      /\bsensitivity points?\b/.test(q),
      /\btrade[- ]?off points?\b/.test(q),
      /\brisks?\b/.test(q),
      /\barchitecture evaluation|evaluation method\b/.test(q)
    ].filter(Boolean).length;
    return clues >= 4 && (/\bevaluation|method|architecture\b/.test(q) || clues >= 5);
  }

  function calibrateAtam(prediction) {
    if (!prediction || prediction.state !== "answer" || prediction.winner?.id !== "atam") return prediction;
    return {
      ...prediction,
      alternatives: (prediction.alternatives || []).filter(a => !ATAM_CONSTITUENTS.has(a.id)),
      confidence: { ...(prediction.confidence || {}), level: "High", numeric: Math.max(0.76, Number(prediction.confidence?.numeric || 0)), queryAlignment: 1 },
      ambiguity: { isAmbiguous: false, notes: [] },
      why: ["ATAM is the evaluation method described by the combined clues: business drivers, a Utility Tree, architectural approaches, risks, sensitivity points and trade-off points."],
      examReady: ["ATAM evaluates an architecture against business drivers and prioritized quality scenarios, identifying risks, non-risks, sensitivity points and trade-off points before construction is complete."],
      calibration: "explicit-atam-method"
    };
  }

  function enforcePredictionBoundary(prediction, rawQuery, queryConcepts, config) {
    if (!prediction || prediction.state !== "answer" || !prediction.winner) return prediction;
    const concept = config?.byId?.[prediction.winner.id];
    if (!concept || !embeddedFalsePositive(rawQuery, concept)) return prediction;
    const supported = boundaryDirectIds(rawQuery, queryConcepts, config).has(concept.id);
    if (supported) return prediction;
    return {
      ...prediction,
      state: "no-evidence",
      stateLabel: "No Evidence",
      winner: null,
      alternatives: [],
      confidence: null,
      why: ["A concept name appeared only as a substring inside an unrelated word, so it was rejected rather than treated as exam evidence."],
      missingInformation: ["Add a complete CSC3209 concept, mechanism or requirement clue."],
      calibration: "boundary-false-positive-rejected"
    };
  }

  function installAnswerPredictor(factory) {
    wrappedFactory = function calibratedCreateAnswerPredictor(config, options) {
      const predictor = factory(config, options);
      const originalPredict = predictor.predict.bind(predictor);
      predictor.predict = function calibratedPredict(rawQuery, queryConcepts, rankedResults, configOverride) {
        const q = normalize(rawQuery);
        const cfg = configOverride || config || root.CSC3209_SEARCH_CONFIG || {};
        const preparedResults = conservativeReferenceEvidence(rankedResults);
        let prediction;

        if (asksForTopLevelQuality(rawQuery)) {
          const qaCfg = topLevelQualityConfig(cfg);
          prediction = originalPredict(rawQuery, queryConcepts, preparedResults, qaCfg);
          if (prediction?.state === "answer" && prediction.winner && !TOP_LEVEL_QUALITY_IDS.has(prediction.winner.id)) {
            prediction = {
              ...prediction,
              state: "insufficient-information",
              stateLabel: "Insufficient Information",
              winner: null,
              alternatives: [],
              why: ["The evidence identifies a supporting quality detail or metric, but not one of the seven top-level CSC3209 quality attributes strongly enough to present as the answer."],
              missingInformation: ["Identify the top-level quality attribute: Availability, Interoperability, Modifiability, Performance, Security, Testability or Usability."]
            };
          }
          return enforcePredictionBoundary(prediction, rawQuery, queryConcepts, cfg);
        }

        if (atamMethodClue(q)) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "atam");
          prediction = originalPredict(`${rawQuery} ATAM architecture tradeoff analysis method`, concepts, biasResults(preparedResults, "atam", "ATAM", null, 2.2, 1), configOverride);
          prediction = calibrateAtam(prediction);
          return enforcePredictionBoundary(prediction, rawQuery, concepts, cfg);
        }

        const mvcClue = /\bmodel\b.*\bmultiple\b.*\b(synchronized\s+)?views?\b.*\bcontrollers?\b.*\b(handle|handles|mediate|mediates)\b.*\b(input|user input)\b/.test(q)
          || /\bmultiple\b.*\bsynchronized\b.*\bviews?\b.*\bmodel\b/.test(q)
          || (/\bmodel\b/.test(q) && /\bviews?\b/.test(q) && /\bcontrollers?\b/.test(q) && /\binput\b/.test(q));
        if (mvcClue) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "mvc");
          prediction = originalPredict(`${rawQuery} model view controller mvc`, concepts, biasResults(preparedResults, "mvc", "MVC", "Layer"), configOverride);
          return enforcePredictionBoundary(cleanDesignAlternatives(prediction, q), rawQuery, concepts, cfg);
        }

        if (stateClue(q)) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "state");
          prediction = originalPredict(`${rawQuery} State state-specific behavior Context ConcreteState`, concepts, stateFocusedResults(preparedResults), configOverride);
          prediction = maybePreferExplicitState(prediction);
          prediction = cleanDesignAlternatives(prediction, q);
          return enforcePredictionBoundary(prediction, rawQuery, concepts, cfg);
        }

        prediction = originalPredict(rawQuery, queryConcepts, preparedResults, configOverride);
        prediction = cleanDesignAlternatives(prediction, q);
        return enforcePredictionBoundary(prediction, rawQuery, queryConcepts, cfg);
      };
      return predictor;
    };
  }

  function isExplanationIntent(raw) {
    const q = normalize(raw);
    return /(^|\s)(why|how come)(\s|$)/.test(q)
      || /\b(explain why|reason why)\b/.test(q)
      || /^how\s+(does|do|can|could|would|will|is|are|was|were)\b/.test(q)
      || /^(explain|describe)\s+how\b/.test(q)
      || /^what\s+(causes|makes)\b/.test(q);
  }

  function addExplanationHints(raw, q) {
    let expanded = raw;
    if (/\b(mvc|model view controller)\b/.test(q) && /\b(separat|ui|user interface|presentation|view)\b/.test(q)) expanded += " modifiability model view controller presentation separation";
    if (/\b(pipe[- ]and[- ]filter|pipeline|filters?)\b/.test(q) && /\b(parallel|parallelization|parallelisation|throughput)\b/.test(q)) expanded += " throughput performance buffered pipes pipeline parallelism";
    if (/\b(map[- ]reduce|map reduce)\b/.test(q) && /\b(parallel|large|huge|massive|batch)\b/.test(q)) expanded += " performance scalability parallel batch partition";
    if (/\blayer\b/.test(q) && /\b(isolat|change|modif|maintain)\b/.test(q)) expanded += " modifiability localized change restricted dependencies";
    return expanded;
  }

  function calibratedExplanation(subject, target, answer, chain, exam) {
    const evidence = [];
    return {
      shown: true, state: "answer", answerMode: "why", stateLabel: "Causal Explanation",
      title: "Why / Explanation", explanationTitle: target ? `${subject.label} → ${target.label}` : subject.label,
      intent: { intent: "explanation", label: "Why / Causal Explanation", confidence: 0.95, polarity: "neutral", reasons: ["query asks for a causal mechanism"] },
      subject, target: target || null, why: [answer], mechanismChain: chain, examReady: [exam], evidence,
      related: [], alternatives: [], matchingResults: 0, independentEvidenceGroups: 0,
      confidence: { level: "High", numeric: 0.82, queryAlignment: 1 },
      grounding: "calibrated-course-rule",
      winner: { ...subject, percent: 100, share: 1, score: 1, supportCount: 0, independentSupportCount: 0, evidence }
    };
  }

  function installExplainerCalibration() {
    const factory = root.createExamExplainer;
    if (typeof factory !== "function" || factory.__csc3209Calibrated) return;
    const calibratedFactory = function calibratedCreateExamExplainer(config, options) {
      const explainer = factory(config, options);
      const originalExplain = explainer.explain.bind(explainer);
      const originalIsWhyQuery = explainer.isWhyQuery.bind(explainer);
      const cfg = config || root.CSC3209_SEARCH_CONFIG || {};

      explainer.isWhyQuery = rawQuery => originalIsWhyQuery(rawQuery) || isExplanationIntent(rawQuery);
      explainer.explain = function calibratedExplain(rawQuery, queryConcepts, rankedResults) {
        const q = normalize(rawQuery);
        const explanationIntent = isExplanationIntent(rawQuery);
        let raw = explanationIntent && !originalIsWhyQuery(rawQuery) ? `Why ${rawQuery}` : rawQuery;
        let concepts = queryConcepts || [];
        raw = addExplanationHints(raw, q);

        if (/\bavailability\b/.test(q) && /\bredundan(cy|t)|replicas?|replication\b/.test(q) && /\b(improv|enhanc|support|increase)\b/.test(q)) {
          return calibratedExplanation(
            { id: "redundancy", label: "Redundancy", category: "tactic" },
            { id: "availability", label: "Availability", category: "quality" },
            "Redundancy can improve availability by providing an alternative instance that can continue service when one instance faults. The benefit requires fault detection and failover, and it can still be defeated by shared dependencies.",
            ["Duplicate service instances", "detect failed instance", "fail over to healthy instance", "fault is masked from users", "availability improves"],
            "Redundancy supports Availability when duplicated components are combined with detection and failover so an internal component fault does not become an externally visible service failure."
          );
        }

        if (/\b(mvc|model view controller)\b/.test(q) && /\bviews?\b/.test(q) && /\bsynchron/.test(q)) {
          return calibratedExplanation(
            { id: "mvc", label: "MVC", category: "architectural-pattern" },
            null,
            "MVC keeps multiple views consistent by making them present the same Model state and refreshing/notifying them when that Model changes. Controllers update or query the Model rather than maintaining independent copies of application state in each View.",
            ["Controller changes/queries Model", "Model remains authoritative state", "Views read or are notified of Model changes", "multiple Views present consistent state"],
            "In MVC, synchronized Views are derived from the same Model; after Model changes, the affected Views are refreshed/notified, keeping presentation state separate from application state."
          );
        }

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

        const prediction = originalExplain(raw, concepts, conservativeReferenceEvidence(rankedResults));
        if (!prediction?.subject) return prediction;
        const concept = cfg.byId?.[prediction.subject.id];
        if (!concept || !embeddedFalsePositive(rawQuery, concept)) return prediction;
        if (boundaryDirectIds(rawQuery, queryConcepts, cfg).has(concept.id)) return prediction;
        return {
          ...prediction,
          state: "insufficient-information",
          stateLabel: "Insufficient Explanation Evidence",
          subject: null,
          target: null,
          winner: null,
          why: ["A possible course concept appeared only as a substring inside an unrelated word, so it was rejected rather than used as the explanation subject."],
          mechanismChain: [],
          examReady: [],
          evidence: [],
          missingInformation: ["Name the architectural pattern/decision or add a mechanism/effect that identifies it."],
          confidence: null,
          grounding: "boundary-false-positive-rejected"
        };
      };
      return explainer;
    };
    calibratedFactory.__csc3209Calibrated = true;
    root.createExamExplainer = calibratedFactory;
  }

  function installUiClarifications() {
    if (typeof document === "undefined") return;
    const checkbox = document.getElementById("searchAnswers");
    const label = checkbox?.parentElement;
    if (label) {
      const textNode = [...label.childNodes].find(node => node.nodeType === 3 && /Search answer outlines/i.test(node.nodeValue || ""));
      if (textNode) textNode.nodeValue = " Boost question answer outlines";
      label.title = "Question answer outlines already contribute weak concept evidence; this option gives their literal text extra lexical weight. Reference cards remain searchable source material.";
    }
  }

  loadPastPaperReferences();
  installHybridSearchCalibration();
  installExplainerCalibration();
  installUiClarifications();

  Object.defineProperty(root, "createAnswerPredictor", {
    configurable: true,
    enumerable: true,
    get() { return wrappedFactory; },
    set(factory) { installAnswerPredictor(factory); }
  });
})(typeof window !== "undefined" ? window : globalThis);
