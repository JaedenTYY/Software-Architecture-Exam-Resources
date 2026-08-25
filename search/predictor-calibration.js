((root) => {
  let wrappedFactory = null;

  const TOP_LEVEL_QUALITY_IDS = new Set(["availability","interoperability","modifiability","performance","security","testability","usability"]);
  const QUALITY_DETAIL_IDS = new Set(["fault","failure","end-to-end-availability","recovery","latency","throughput"]);
  const QUESTION_FILTER_KEYS = ["bank","topic","subtopic","qtype","difficulty","family","scenario","marks"];
  const ATAM_CONSTITUENTS = new Set(["utility-tree","sensitivity-point","trade-off-point","architectural-risk","risk-theme"]);

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").replace(/[–—]/g, "-")
      .replace(/&/g, " and ").replace(/[^a-z0-9+#.\-/]+/g, " ")
      .replace(/\s+/g, " ").trim();
  }
  function escapeRegex(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function containsTerm(haystack, term) {
    if (!term) return false;
    return new RegExp(`(^|[^a-z0-9+#])${escapeRegex(normalize(term))}(?=$|[^a-z0-9+#])`).test(normalize(haystack));
  }

  function loadPastPaperReferences() {
    if (root.PAST_PAPER_REFERENCES?.length) return;
    if (typeof module !== "undefined" && typeof require === "function") {
      try { require("./past_paper_references.js"); } catch (_) {}
      return;
    }
    if (typeof document !== "undefined" && document.readyState === "loading") {
      document.write('<script src="search/past_paper_references.js"></scr' + 'ipt>');
    }
  }

  const conceptTerms = concept => [concept?.label, ...(concept?.aliases || [])].map(normalize).filter(Boolean);
  function boundaryDirectIds(raw, queryConcepts, config) {
    const ids = new Set((queryConcepts || []).filter(c => c.direct).map(c => c.id));
    const q = normalize(raw);
    for (const concept of config?.concepts || []) if (conceptTerms(concept).some(term => containsTerm(q, term))) ids.add(concept.id);
    return ids;
  }
  function embeddedFalsePositive(raw, concept) {
    const q = normalize(raw);
    return conceptTerms(concept).some(term => term && !/\s/.test(term) && term.length > 3 && q.includes(term) && !containsTerm(q, term));
  }
  function resultSupportsConcept(result, concept) {
    if (!result || !concept) return false;
    const label = normalize(concept.label), id = normalize(concept.id);
    if ([result.subtopic,result.topic,result.title].some(v => [label,id].includes(normalize(v)))) return true;
    if ((result.tags || []).some(t => [label,id].includes(normalize(t)))) return true;
    const text = [result.title,result.subtopic,result.topic,result.prompt,result.answer_outline,result.exam_trap,result.body,(result.tags || []).join(" ")].filter(Boolean).join(" ");
    return conceptTerms(concept).some(term => containsTerm(text, term));
  }
  function sanitizeStaleSemanticResult(result, config) {
    const directBefore = (result._matchedConcepts || []).filter(m => m.kind === "direct");
    const matched = (result._matchedConcepts || []).filter(m => m.kind !== "direct" || resultSupportsConcept(result, config?.byId?.[m.id]));
    const concepts = (result._concepts || []).filter(label => {
      const concept = (config?.concepts || []).find(c => normalize(c.label) === normalize(label));
      return !concept || resultSupportsConcept(result, concept);
    });
    const directAfter = matched.filter(m => m.kind === "direct").length;
    if (directAfter === directBefore.length) return { ...result, _concepts: concepts };
    const oldSem = Number(result._semanticScore || 0), ratio = directBefore.length ? directAfter / directBefore.length : 1;
    const newSem = oldSem * Math.max(0.2, ratio), oldScore = Number(result._score || 0);
    return { ...result, _matchedConcepts: matched, _concepts: concepts, _semanticScore: newSem, _score: Math.max(Number(result._lexicalScore || 0) * 0.2, oldScore - oldSem + newSem) };
  }

  function rerankSecurityLookup(search) {
    const direct = (search.concepts || []).find(c => c.direct && ["authentication","authorization"].includes(c.id));
    if (!direct) return search;
    const rows = (search.results || []).map(result => {
      let factor = 1;
      const topicish = [result.subtopic,result.topic].map(normalize);
      if (result._resultType !== "reference" && topicish.includes("security")) factor *= 1.7;
      if (result._resultType !== "reference" && (result._matchedConcepts || []).some(m => m.id === direct.id && m.kind === "direct")) factor *= 1.2;
      if (result._resultType === "reference" && !containsTerm(result.title || "", direct.label)) factor *= 0.72;
      return { ...result, _score: Number(result._score || 0) * factor };
    }).sort((a,b) => Number(b._score || 0) - Number(a._score || 0));
    return { ...search, results: rows };
  }

  function installHybridSearchCalibration() {
    const factory = root.createHybridSearchEngine;
    if (typeof factory !== "function" || factory.__csc3209Hardening) return;
    const wrapped = function(questions, references, config) {
      const engine = factory(questions, references, config), originalSearch = engine.search.bind(engine);
      const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
      engine.search = function(options = {}) {
        let search = originalSearch(options);
        let results = (search.results || []).map(r => sanitizeStaleSemanticResult(r, cfg));
        if (QUESTION_FILTER_KEYS.some(key => String(options[key] || "").trim())) results = results.filter(r => r._resultType !== "reference");
        search = { ...search, results: results.sort((a,b) => Number(b._score || 0) - Number(a._score || 0)) };
        return rerankSecurityLookup(search);
      };
      return engine;
    };
    wrapped.__csc3209Hardening = true;
    root.createHybridSearchEngine = wrapped;
  }

  function conservativeReferenceEvidence(results) {
    const seen = new Set();
    return (results || []).filter(result => {
      if (result._resultType !== "reference") return true;
      const source = String(result.source || result.id || "reference");
      if (seen.has(source)) return false;
      seen.add(source); return true;
    });
  }
  function upsertDirectConcept(rows, config, id) {
    const concept = config?.byId?.[id];
    if (!concept) return rows || [];
    return [{ id, label: concept.label, direct: true }, ...(rows || []).filter(c => c.id !== id)];
  }
  const removeConcept = (rows, id) => (rows || []).filter(c => c.id !== id);

  function biasResults(results, preferredId, preferredLabel, competingLabel, preferredFactor = 1.8, competingFactor = 0.58) {
    return (results || []).map(result => {
      const labels = new Set([result.subtopic,result.topic,...(result._concepts || []),...(result._matchedConcepts || []).map(c => c.label)].filter(Boolean).map(normalize));
      const preferred = labels.has(normalize(preferredLabel)), competing = competingLabel && labels.has(normalize(competingLabel));
      let score = Number(result._score || 0);
      if (preferred) score *= preferredFactor;
      if (competing && !preferred) score *= competingFactor;
      const matched = [...(result._matchedConcepts || [])];
      if (preferred && !matched.some(c => c.id === preferredId)) matched.unshift({ id: preferredId, label: preferredLabel, kind: "direct", score: 999 });
      return { ...result, _score: score, _matchedConcepts: matched };
    }).sort((a,b) => Number(b._score || 0) - Number(a._score || 0));
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
  const stateFocusedResults = results => biasResults(results, "state", "State", "Observer", 2.0, 0.52);

  function maybePreferExplicitState(prediction) {
    if (!prediction || prediction.state !== "answer" || prediction.winner?.id === "state" || prediction.winner?.id !== "observer") return prediction;
    const state = (prediction.candidates || []).find(c => c.id === "state");
    if (!state || Number(state.score || 0) < Math.max(0.001, Number(prediction.winner.score || 0)) * 0.55) return prediction;
    return { ...prediction, winner: state, alternatives: [prediction.winner,...(prediction.alternatives || [])].filter(x => x?.id !== "state").slice(0,3),
      confidence: { ...(prediction.confidence || {}), level:"Medium", numeric:Math.min(0.6,Number(prediction.confidence?.numeric || 0.6)), queryAlignment:1 },
      ambiguity:{isAmbiguous:false,notes:[]},
      why:["State is selected from the explicit mechanism in the query: one object's behavior varies with its own internal state, and state-specific behavior replaces scattered conditional logic."],
      examReady:["The State pattern is suitable because it encapsulates state-specific behavior in separate State objects, allowing the Context to change behavior by changing its current State rather than spreading conditional logic throughout the code."],
      calibration:"explicit-state-mechanism-tiebreak" };
  }
  function cleanDesignAlternatives(prediction, q) {
    if (!prediction || prediction.state !== "answer" || prediction.intent?.intent !== "design-pattern") return prediction;
    const hasState = stateClue(q), hasObserver = observerClue(q), winner = prediction.winner?.id;
    const keep = c => c && !(c.id === "state" && winner !== "state" && !hasState)
      && !(c.id === "observer" && winner !== "observer" && !hasObserver)
      && !(c.id === "observer" && winner === "state" && hasState && !hasObserver)
      && !(c.id === "state" && winner === "observer" && hasObserver && !hasState);
    return { ...prediction, alternatives:(prediction.alternatives || []).filter(keep) };
  }

  const asksForTopLevelQuality = raw => /\b(quality attribute|which quality|what quality|what qa|which qa)\b/.test(normalize(raw));
  function topLevelQualityConfig(config) {
    if (!config?.concepts) return config;
    const concepts = config.concepts.map(c => QUALITY_DETAIL_IDS.has(c.id) ? { ...c, category:"quality-detail", answerEligibleAsQualityAttribute:false } : c);
    return { ...config, concepts, byId:Object.fromEntries(concepts.map(c => [c.id,c])) };
  }
  function atamMethodClue(q) {
    const count = [/\bbusiness drivers?\b/,/\butility tree\b/,/\bsensitivity points?\b/,/\btrade[- ]?off points?\b/,/\brisks?\b/,/\barchitecture evaluation|evaluation method\b/].filter(r => r.test(q)).length;
    return count >= 4 && (/\bevaluation|method|architecture\b/.test(q) || count >= 5);
  }
  function calibrateAtam(p) {
    if (!p || p.state !== "answer" || p.winner?.id !== "atam") return p;
    return { ...p, alternatives:(p.alternatives || []).filter(a => !ATAM_CONSTITUENTS.has(a.id)),
      confidence:{...(p.confidence || {}),level:"High",numeric:Math.max(0.76,Number(p.confidence?.numeric || 0)),queryAlignment:1},
      ambiguity:{isAmbiguous:false,notes:[]},
      why:["ATAM is the evaluation method described by the combined clues: business drivers, a Utility Tree, architectural approaches, risks, sensitivity points and trade-off points."],
      examReady:["ATAM evaluates an architecture against business drivers and prioritized quality scenarios, identifying risks, non-risks, sensitivity points and trade-off points before construction is complete."], calibration:"explicit-atam-method" };
  }
  function enforcePredictionBoundary(p, raw, queryConcepts, config) {
    if (!p || p.state !== "answer" || !p.winner) return p;
    const concept = config?.byId?.[p.winner.id];
    if (!concept || !embeddedFalsePositive(raw, concept) || boundaryDirectIds(raw, queryConcepts, config).has(concept.id)) return p;
    return { ...p, state:"no-evidence", stateLabel:"No Evidence", winner:null, alternatives:[], confidence:null,
      why:["A concept name appeared only as a substring inside an unrelated word, so it was rejected rather than treated as exam evidence."],
      missingInformation:["Add a complete CSC3209 concept, mechanism or requirement clue."], calibration:"boundary-false-positive-rejected" };
  }

  function installAnswerPredictor(factory) {
    wrappedFactory = function(config, options) {
      const predictor = factory(config, options), originalPredict = predictor.predict.bind(predictor);
      predictor.predict = function(rawQuery, queryConcepts, rankedResults, configOverride) {
        const q = normalize(rawQuery), cfg = configOverride || config || root.CSC3209_SEARCH_CONFIG || {};
        const prepared = conservativeReferenceEvidence(rankedResults);
        let p;
        if (asksForTopLevelQuality(rawQuery)) {
          p = originalPredict(rawQuery, queryConcepts, prepared, topLevelQualityConfig(cfg));
          if (p?.state === "answer" && p.winner && !TOP_LEVEL_QUALITY_IDS.has(p.winner.id)) p = { ...p, state:"insufficient-information", stateLabel:"Insufficient Information", winner:null, alternatives:[], why:["The evidence identifies a supporting quality detail or metric, but not one of the seven top-level CSC3209 quality attributes strongly enough to present as the answer."], missingInformation:["Identify the top-level quality attribute: Availability, Interoperability, Modifiability, Performance, Security, Testability or Usability."] };
          return enforcePredictionBoundary(p, rawQuery, queryConcepts, cfg);
        }
        if (atamMethodClue(q)) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "atam");
          p = originalPredict(`${rawQuery} ATAM architecture tradeoff analysis method`, concepts, biasResults(prepared,"atam","ATAM",null,2.2,1), configOverride);
          return enforcePredictionBoundary(calibrateAtam(p), rawQuery, concepts, cfg);
        }
        const mvc = /\bmodel\b.*\bmultiple\b.*\b(synchronized\s+)?views?\b.*\bcontrollers?\b.*\b(handle|handles|mediate|mediates)\b.*\b(input|user input)\b/.test(q)
          || /\bmultiple\b.*\bsynchronized\b.*\bviews?\b.*\bmodel\b/.test(q)
          || (/\bmodel\b/.test(q) && /\bviews?\b/.test(q) && /\bcontrollers?\b/.test(q) && /\binput\b/.test(q));
        if (mvc) {
          const concepts = upsertDirectConcept(queryConcepts,cfg,"mvc");
          p = originalPredict(`${rawQuery} model view controller mvc`, concepts, biasResults(prepared,"mvc","MVC","Layer"), configOverride);
          return enforcePredictionBoundary(cleanDesignAlternatives(p,q),rawQuery,concepts,cfg);
        }
        if (stateClue(q)) {
          const concepts = upsertDirectConcept(queryConcepts,cfg,"state");
          p = originalPredict(`${rawQuery} State state-specific behavior Context ConcreteState`, concepts, stateFocusedResults(prepared), configOverride);
          return enforcePredictionBoundary(cleanDesignAlternatives(maybePreferExplicitState(p),q),rawQuery,concepts,cfg);
        }
        p = cleanDesignAlternatives(originalPredict(rawQuery,queryConcepts,prepared,configOverride),q);
        return enforcePredictionBoundary(p,rawQuery,queryConcepts,cfg);
      };
      return predictor;
    };
  }

  function isExplanationIntent(raw) {
    const q = normalize(raw);
    return /(^|\s)(why|how come)(\s|$)/.test(q) || /\b(explain why|reason why)\b/.test(q)
      || /^how\s+(does|do|can|could|would|will|is|are|was|were)\b/.test(q)
      || /^(explain|describe)\s+how\b/.test(q) || /^what\s+(causes|makes)\b/.test(q);
  }
  function addExplanationHints(raw,q) {
    let out = raw;
    if (/\b(mvc|model view controller)\b/.test(q) && /\b(separat|ui|user interface|presentation|view)\b/.test(q)) out += " modifiability model view controller presentation separation";
    if (/\b(pipe[- ]and[- ]filter|pipeline|filters?)\b/.test(q) && /\b(parallel|parallelization|parallelisation|throughput)\b/.test(q)) out += " throughput performance buffered pipes pipeline parallelism";
    if (/\b(map[- ]reduce|map reduce)\b/.test(q) && /\b(parallel|large|huge|massive|batch)\b/.test(q)) out += " performance scalability parallel batch partition";
    if (/\blayer\b/.test(q) && /\b(isolat|change|modif|maintain)\b/.test(q)) out += " modifiability localized change restricted dependencies";
    return out;
  }
  function calibratedExplanation(subject,target,answer,chain,exam) {
    const evidence=[];
    return { shown:true,state:"answer",answerMode:"why",stateLabel:"Causal Explanation",title:"Why / Explanation",explanationTitle:target?`${subject.label} → ${target.label}`:subject.label,
      intent:{intent:"explanation",label:"Why / Causal Explanation",confidence:0.95,polarity:"neutral",reasons:["query asks for a causal mechanism"]},subject,target:target||null,why:[answer],mechanismChain:chain,examReady:[exam],evidence,related:[],alternatives:[],matchingResults:0,independentEvidenceGroups:0,
      confidence:{level:"High",numeric:0.82,queryAlignment:1},grounding:"calibrated-course-rule",winner:{...subject,percent:100,share:1,score:1,supportCount:0,independentSupportCount:0,evidence} };
  }

  function installExplainerCalibration() {
    const factory = root.createExamExplainer;
    if (typeof factory !== "function" || factory.__csc3209Calibrated) return;
    const wrapped = function(config, options) {
      const explainer = factory(config,options), originalExplain = explainer.explain.bind(explainer), originalIsWhy = explainer.isWhyQuery.bind(explainer);
      const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
      explainer.isWhyQuery = raw => originalIsWhy(raw) || isExplanationIntent(raw);
      explainer.explain = function(rawQuery,queryConcepts,rankedResults) {
        const q=normalize(rawQuery), explanationIntent=isExplanationIntent(rawQuery);
        let raw=explanationIntent && !originalIsWhy(rawQuery)?`Why ${rawQuery}`:rawQuery, concepts=queryConcepts||[];
        raw=addExplanationHints(raw,q);
        if (/\bavailability\b/.test(q) && /\bredundan(cy|t)|replicas?|replication\b/.test(q) && /\b(improv|enhanc|support|increase)\b/.test(q)) return calibratedExplanation(
          {id:"redundancy",label:"Redundancy",category:"tactic"},{id:"availability",label:"Availability",category:"quality"},
          "Redundancy can improve availability by providing an alternative instance that can continue service when one instance faults. The benefit requires fault detection and failover, and it can still be defeated by shared dependencies.",
          ["Duplicate service instances","detect failed instance","fail over to healthy instance","fault is masked from users","availability improves"],
          "Redundancy supports Availability when duplicated components are combined with detection and failover so an internal component fault does not become an externally visible service failure."
        );
        if (/\b(mvc|model view controller)\b/.test(q) && /\bviews?\b/.test(q) && /\bsynchron/.test(q)) return calibratedExplanation(
          {id:"mvc",label:"MVC",category:"architectural-pattern"},null,
          "MVC keeps multiple views consistent by making them present the same Model state and refreshing/notifying them when that Model changes. Controllers update or query the Model rather than maintaining independent copies of application state in each View.",
          ["Controller changes/queries Model","Model remains authoritative state","Views read or are notified of Model changes","multiple Views present consistent state"],
          "In MVC, synchronized Views are derived from the same Model; after Model changes, the affected Views are refreshed/notified, keeping presentation state separate from application state."
        );
        if (/\b(p2p|peer[- ]?to[- ]?peer)\b.*\b(scalable|scalability|scale|scales|scaling)\b/.test(q)) { concepts=upsertDirectConcept(concepts,cfg,"peer-to-peer"); raw+= " scalability scale more peers add resources demand capacity"; }
        if (/\b(client[- ]?server|client server)\b.*\b(slow|slower|high load|heavy load|many clients|bottleneck|overload|overloaded)\b/.test(q)) { concepts=upsertDirectConcept(concepts,cfg,"client-server"); concepts=upsertDirectConcept(concepts,cfg,"performance"); raw+=" performance bottleneck response time throughput high load"; }
        if (/\bpalm\b/.test(q)) { concepts=removeConcept(concepts,"business-goal"); concepts=upsertDirectConcept(concepts,cfg,"palm"); }
        const p=originalExplain(raw,concepts,conservativeReferenceEvidence(rankedResults));
        if (!p?.subject) return p;
        const concept=cfg.byId?.[p.subject.id];
        if (!concept || !embeddedFalsePositive(rawQuery,concept) || boundaryDirectIds(rawQuery,queryConcepts,cfg).has(concept.id)) return p;
        return { ...p,state:"insufficient-information",stateLabel:"Insufficient Explanation Evidence",subject:null,target:null,winner:null,
          why:["A possible course concept appeared only as a substring inside an unrelated word, so it was rejected rather than used as the explanation subject."],mechanismChain:[],examReady:[],evidence:[],missingInformation:["Name the architectural pattern/decision or add a mechanism/effect that identifies it."],confidence:null,grounding:"boundary-false-positive-rejected" };
      };
      return explainer;
    };
    wrapped.__csc3209Calibrated=true;
    root.createExamExplainer=wrapped;
  }

  function installUiClarifications() {
    if (typeof document === "undefined") return;
    const checkbox=document.getElementById("searchAnswers"), label=checkbox?.parentElement;
    if (!label) return;
    const textNode=[...label.childNodes].find(node => node.nodeType===3 && /Search answer outlines/i.test(node.nodeValue || ""));
    if (textNode) textNode.nodeValue=" Boost question answer outlines";
    label.title="Question answer outlines already contribute weak concept evidence; this option gives their literal text extra lexical weight. Reference cards remain searchable source material.";
  }

  loadPastPaperReferences();
  installHybridSearchCalibration();
  installExplainerCalibration();
  installUiClarifications();

  Object.defineProperty(root,"createAnswerPredictor",{
    configurable:true,enumerable:true,
    get(){return wrappedFactory;},
    set(factory){installAnswerPredictor(factory);}
  });
})(typeof window !== "undefined" ? window : globalThis);
