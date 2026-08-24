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

  function removeConcept(queryConcepts, id) {
    return (queryConcepts || []).filter(c => c.id !== id);
  }

  function install(factory) {
    wrappedFactory = function calibratedCreateExamExplainer(config, options) {
      const explainer = factory(config, options);
      const originalExplain = explainer.explain.bind(explainer);

      explainer.explain = function calibratedExplain(rawQuery, queryConcepts, rankedResults) {
        const q = normalize(rawQuery);
        const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
        let raw = rawQuery;
        let concepts = queryConcepts || [];

        // "scalable" is a common exam wording; normalize it to the explicit
        // scalability/mechanism vocabulary used by the deterministic rule.
        if (/\bwhy\b.*\b(p2p|peer[- ]?to[- ]?peer)\b.*\b(scalable|scalability|scale|scales)\b/.test(q)) {
          concepts = upsertDirectConcept(concepts, cfg, "peer-to-peer");
          raw = `${rawQuery} scalability scale more peers add resources demand capacity`;
        }

        // "slow under high load" is a performance symptom even when the user
        // never says the formal QA name. Make the causal target explicit.
        if (/\bwhy\b.*\b(client[- ]?server|client server)\b.*\b(slow|slower|high load|heavy load|many clients|bottleneck|overloaded?)\b/.test(q)) {
          concepts = upsertDirectConcept(concepts, cfg, "client-server");
          concepts = upsertDirectConcept(concepts, cfg, "performance");
          raw = `${rawQuery} performance bottleneck response time throughput high load`;
        }

        // Business Goal intentionally lists PALM as related vocabulary in the
        // ontology. When the acronym itself is explicitly present, PALM must
        // be the explanation subject rather than the broader Business Goal.
        if (/\bwhy\b.*\bpalm\b/.test(q)) {
          concepts = removeConcept(concepts, "business-goal");
          concepts = upsertDirectConcept(concepts, cfg, "palm");
        }

        return originalExplain(raw, concepts, rankedResults);
      };

      return explainer;
    };
  }

  Object.defineProperty(root, "createExamExplainer", {
    configurable: true,
    enumerable: true,
    get() { return wrappedFactory; },
    set(factory) { install(factory); }
  });
})(typeof window !== "undefined" ? window : globalThis);
