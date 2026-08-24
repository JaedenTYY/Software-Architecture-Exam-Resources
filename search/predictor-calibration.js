((root) => {
  let wrappedFactory = null;

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

  function upsertDirectConcept(queryConcepts, config, id) {
    const concept = config?.byId?.[id];
    if (!concept) return queryConcepts || [];
    const rows = (queryConcepts || []).filter(c => c.id !== id);
    return [{ id, label: concept.label, direct: true }, ...rows];
  }

  function biasResults(results, preferredId, preferredLabel, competingLabel) {
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
      if (preferred) score *= 1.8;
      if (competing && !preferred) score *= 0.58;
      const matched = [...(result._matchedConcepts || [])];
      if (preferred && !matched.some(c => c.id === preferredId)) {
        matched.unshift({ id: preferredId, label: preferredLabel, kind: "direct", score: 999 });
      }
      return { ...result, _score: score, _matchedConcepts: matched };
    }).sort((a, b) => Number(b._score || 0) - Number(a._score || 0));
  }

  function install(factory) {
    wrappedFactory = function calibratedCreateAnswerPredictor(config, options) {
      const predictor = factory(config, options);
      const originalPredict = predictor.predict.bind(predictor);
      predictor.predict = function calibratedPredict(rawQuery, queryConcepts, rankedResults, configOverride) {
        const q = normalize(rawQuery);
        const cfg = configOverride || config || root.CSC3209_SEARCH_CONFIG || {};

        const mvcClue = /\bmodel\b.*\bmultiple\b.*\bviews?\b.*\bcontrollers?\b.*\b(handle|handles|mediate|mediates)\b.*\b(input|user input)\b/.test(q)
          || /\bmultiple\b.*\bsynchronized\b.*\bviews?\b.*\bmodel\b/.test(q);
        if (mvcClue) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "mvc");
          const results = biasResults(rankedResults, "mvc", "MVC", "Layer");
          return originalPredict(`${rawQuery} model view controller mvc`, concepts, results, configOverride);
        }

        const stateClue = /\b(object|context)\b.*\b(change|changes|changing)\b.*\bbehavio[u]?r\b.*\b(internal )?state\b/.test(q)
          || /\bstate\b.*\b(instead of|avoid|replace)\b.*\b(conditionals?|if else|switch)\b/.test(q)
          || /\bbehavio[u]?r\b.*\binternal state\b.*\b(conditionals?|if else|switch)\b/.test(q);
        if (stateClue) {
          const concepts = upsertDirectConcept(queryConcepts, cfg, "state");
          const results = biasResults(rankedResults, "state", "State", "Observer");
          return originalPredict(`${rawQuery} state pattern state-specific behavior`, concepts, results, configOverride);
        }

        return originalPredict(rawQuery, queryConcepts, rankedResults, configOverride);
      };
      return predictor;
    };
  }

  Object.defineProperty(root, "createAnswerPredictor", {
    configurable: true,
    enumerable: true,
    get() { return wrappedFactory; },
    set(factory) { install(factory); }
  });
})(typeof window !== "undefined" ? window : globalThis);
