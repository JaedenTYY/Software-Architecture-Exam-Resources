((root) => {
  const DEFAULTS = {
    maxEvidenceResults: 30,
    minResultScoreRatio: 0.08,
    minResultScore: 3,
    minCandidateScore: 0.8,
    maxEvidencePerCandidate: 4,
    ambiguityMargin: 0.22,
    weakConfidenceCutoff: 0.28,
    groupDamping: 1.35
  };

  const INTENT_LABELS = {
    "architectural-pattern": "Architectural Pattern",
    "design-pattern": "Design Pattern",
    quality: "Quality Attribute",
    tactic: "Tactic",
    structure: "Structure / View",
    framework: "Framework",
    "trade-off": "Trade-off",
    "quality-enhanced": "Enhanced Quality",
    "quality-threatened": "Threatened Quality",
    general: "General"
  };

  const CATEGORY_LABELS = {
    "architectural-pattern": "Architectural Patterns",
    "design-pattern": "Design Patterns",
    quality: "Quality Attributes",
    security: "Security Concepts",
    tactic: "Tactics",
    structure: "Structures",
    framework: "Frameworks",
    principle: "Principles",
    risk: "Risks",
    reference: "Reference Frameworks",
    documentation: "Documentation",
    "design-pattern-category": "Design Pattern Categories"
  };

  function createAnswerPredictor(config, options = {}) {
    const cfg = config || root.CSC3209_SEARCH_CONFIG || {};
    const settings = { ...DEFAULTS, ...options };
    const concepts = cfg.concepts || [];
    const byId = cfg.byId || Object.fromEntries(concepts.map(c => [c.id, c]));
    const byLabel = new Map(concepts.map(c => [normalize(c.label), c]));
    const byAlias = buildAliasIndex(concepts);

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

    function buildAliasIndex(items) {
      const rows = [];
      for (const concept of items) {
        for (const alias of [concept.label, ...(concept.aliases || [])]) {
          const term = normalize(alias);
          if (term.length >= 2) rows.push({ term, concept, length: term.length });
        }
      }
      return rows.sort((a, b) => b.length - a.length);
    }

    function containsTerm(haystack, term) {
      if (!term) return false;
      if (term.length <= 3) {
        return new RegExp(`(^|\\s)${escapeRegex(term)}(\\s|$)`).test(haystack);
      }
      return haystack.includes(term);
    }

    function escapeRegex(value) {
      return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function inferIntent(raw, queryConcepts = []) {
      const q = normalize(raw);
      let intent = "general";
      let confidence = 0.38;
      let polarity = "neutral";
      const reasons = [];

      const has = pattern => pattern.test(q);
      const enhanced = has(/\b(enhance|enhanced|improve|improves|improved|benefit|advantage|support|increase|helps?)\b/);
      const threatened = has(/\b(threat|threaten|threatened|degrade|degraded|degrades|limitation|drawback|disadvantage|trade[ -]?off|penalty|weakness|cost)\b/);

      if (has(/\b(design|gof|implementation|object|class)\s+patterns?\b/) || has(/\bwhich design pattern\b/)) {
        intent = "design-pattern"; confidence = 0.92; reasons.push("query asks for a design pattern");
      } else if (has(/\b(architectural|architecture)\s+patterns?\b/) || has(/\bbest architecture pattern\b/) || has(/\bwhich architectural pattern\b/)) {
        intent = "architectural-pattern"; confidence = 0.94; reasons.push("query asks for an architectural pattern");
      } else if (has(/\b(which|what|best)\s+patterns?\b/)) {
        intent = "architectural-pattern"; confidence = 0.68; reasons.push("query asks for a pattern without saying design-level");
      }

      if (has(/\b(source stimulus environment|response measure|utility tree|business value architecture impact|business value architectural impact|asr|qaw|palm|add)\b/)) {
        intent = "framework"; confidence = Math.max(confidence, 0.88); reasons.push("query uses framework vocabulary");
      }
      if (has(/\b(structure|view|where software runs|physical machines|code responsibilities|components communicate|runtime interaction|allocation|module|c&c|component and connector)\b/)) {
        intent = "structure"; confidence = Math.max(confidence, 0.82); reasons.push("query asks about architectural structures/views");
      }
      if (has(/\b(tactic|heartbeat|health check|ping echo|failover|redundancy|replication)\b/) && has(/\bwhat|which|best|use\b/)) {
        intent = "tactic"; confidence = Math.max(confidence, 0.78); reasons.push("query asks for a tactic");
      }
      if (has(/\b(quality attribute|which quality|what quality|quality is|quality can|quality may|what qa|which qa)\b/)) {
        intent = threatened ? "quality-threatened" : enhanced ? "quality-enhanced" : "quality";
        confidence = Math.max(confidence, threatened || enhanced ? 0.9 : 0.86);
        reasons.push("query asks for a quality attribute");
      }
      if (threatened && intent === "general") {
        intent = "quality-threatened"; confidence = 0.72; reasons.push("query asks about a limitation or degradation");
      } else if (enhanced && intent === "general") {
        intent = "quality-enhanced"; confidence = 0.7; reasons.push("query asks about an advantage or improvement");
      }
      if (has(/\b(who are you|prove identity|verify identity|login|credentials|password)\b/)) {
        intent = "quality"; confidence = Math.max(confidence, 0.74); reasons.push("query asks for a security concept");
      }
      if (has(/\b(allowed to|permission|access rights|authorize|authorization|privilege)\b/)) {
        intent = "quality"; confidence = Math.max(confidence, 0.74); reasons.push("query asks for a security concept");
      }

      if (threatened) polarity = "threatened";
      else if (enhanced) polarity = "enhanced";

      const directConcepts = (queryConcepts || [])
        .filter(c => c.direct && byId[c.id])
        .map(c => byId[c.id]);
      if (intent === "general" && directConcepts.length === 1) {
        const category = directConcepts[0].category;
        if (["quality", "security", "framework", "structure", "tactic"].includes(category)) {
          intent = category === "security" ? "quality" : category;
          confidence = Math.max(confidence, 0.56);
          reasons.push("query directly names one concept");
        }
      }

      return { intent, label: INTENT_LABELS[intent], confidence, polarity, reasons };
    }

    function compatibleCategories(intent) {
      if (intent === "architectural-pattern") return new Set(["architectural-pattern"]);
      if (intent === "design-pattern") return new Set(["design-pattern"]);
      if (intent === "quality" || intent === "quality-enhanced" || intent === "quality-threatened") return new Set(["quality", "security"]);
      if (intent === "tactic") return new Set(["tactic"]);
      if (intent === "structure") return new Set(["structure"]);
      if (intent === "framework") return new Set(["framework"]);
      if (intent === "trade-off") return new Set(["quality", "security", "architectural-pattern", "design-pattern", "tactic", "risk"]);
      return null;
    }

    function inferQueryConcepts(raw, queryConcepts = []) {
      const q = normalize(raw);
      const found = new Map();
      for (const qc of queryConcepts || []) {
        if (byId[qc.id]) found.set(qc.id, { concept: byId[qc.id], direct: !!qc.direct, strength: qc.direct ? 2.4 : 0.9 });
      }
      for (const row of byAlias) {
        if (!containsTerm(q, row.term)) continue;
        const prev = found.get(row.concept.id);
        const strength = 1.6 + Math.min(2.4, row.term.split(/\s+/).length * 0.45);
        if (!prev || strength > prev.strength) {
          found.set(row.concept.id, { concept: row.concept, direct: true, strength });
        }
      }
      return [...found.values()].sort((a, b) => b.strength - a.strength);
    }

    function extractSubject(queryConceptRows, intent) {
      if (!["quality-enhanced", "quality-threatened", "trade-off"].includes(intent.intent)) return null;
      const cats = compatibleCategories(intent.intent);
      const direct = queryConceptRows.filter(row => row.direct);
      const subject = direct.find(row => {
        const category = row.concept.category;
        if (cats && cats.has(category)) return false;
        return ["architectural-pattern", "design-pattern", "tactic", "structure", "framework", "quality", "security"].includes(category);
      });
      return subject ? subject.concept : null;
    }

    function predict(rawQuery, queryConcepts, rankedResults, configOverride) {
      if (configOverride && configOverride !== cfg) {
        return createAnswerPredictor(configOverride, options).predict(rawQuery, queryConcepts, rankedResults);
      }
      const raw = String(rawQuery || "").trim();
      if (!raw) return { shown: false, reason: "empty-query" };

      const intent = inferIntent(raw, queryConcepts);
      const queryConceptRows = inferQueryConcepts(raw, queryConcepts);
      const subject = extractSubject(queryConceptRows, intent);
      const cats = compatibleCategories(intent.intent);
      const evidenceRows = selectEvidence(rankedResults || []);
      if (!evidenceRows.length) return { shown: false, reason: "weak-search-evidence", intent };

      const candidates = aggregateCandidates(evidenceRows, cats, intent, subject, queryConcepts);
      if (!candidates.length) {
        return {
          shown: false,
          reason: "no-compatible-candidates",
          intent,
          subject: subject ? publicConcept(subject) : null
        };
      }

      const total = candidates.reduce((sum, c) => sum + c.score, 0);
      candidates.forEach(c => {
        c.share = total > 0 ? c.score / total : 0;
        c.percent = Math.round(c.share * 100);
      });
      candidates.sort((a, b) => b.score - a.score || b.independentSupportCount - a.independentSupportCount || a.label.localeCompare(b.label));

      const winner = candidates[0];
      const runner = candidates[1] || null;
      const confidence = calculateConfidence(winner, runner, total, intent);
      const ambiguity = detectAmbiguity(raw, winner, runner, confidence, intent);
      const related = relatedConceptGroups(evidenceRows, new Set(candidates.slice(0, 4).map(c => c.id)));
      const why = buildWhy(raw, winner, intent, subject, ambiguity);

      if (winner.score < settings.minCandidateScore || (confidence.numeric < settings.weakConfidenceCutoff && winner.independentSupportCount < 1)) {
        return {
          shown: false,
          reason: "weak-candidate-consensus",
          intent,
          subject: subject ? publicConcept(subject) : null,
          debug: { winner: publicCandidate(winner), confidence }
        };
      }

      return {
        shown: true,
        title: "Predicted Exam Answer",
        intent,
        subject: subject ? publicConcept(subject) : null,
        winner: publicCandidate(winner),
        alternatives: candidates.slice(1, 4).map(publicCandidate),
        candidates: candidates.slice(0, 6).map(publicCandidate),
        related,
        evidence: winner.evidence.slice(0, settings.maxEvidencePerCandidate),
        matchingResults: evidenceRows.length,
        independentEvidenceGroups: winner.independentSupportCount,
        confidence,
        ambiguity,
        why
      };
    }

    function selectEvidence(results) {
      const rows = (results || []).filter(r => Number(r._score || 0) > 0);
      const maxScore = Math.max(0, ...rows.map(r => Number(r._score || 0)));
      const threshold = Math.max(settings.minResultScore, maxScore * settings.minResultScoreRatio);
      return rows
        .filter(r => Number(r._score || 0) >= threshold)
        .slice(0, settings.maxEvidenceResults);
    }

    function aggregateCandidates(results, categories, intent, subject, queryConcepts) {
      const candidates = new Map();
      const maxScore = Math.max(1, ...results.map(r => Number(r._score || 0)));
      const groupSeen = new Map();

      for (const result of results) {
        const resultRelevance = Math.sqrt(Math.max(0, Number(result._score || 0)) / maxScore);
        const resultConcepts = conceptsForResult(result);
        const groupKey = evidenceGroupKey(result);
        const groupCount = groupSeen.get(groupKey) || 0;
        groupSeen.set(groupKey, groupCount + 1);
        const duplicateDamping = 1 / (1 + groupCount * settings.groupDamping);
        const subjectMultiplier = subject ? subjectEvidenceMultiplier(result, resultConcepts, subject) : 1;
        if (subject && subjectMultiplier <= 0.12) continue;

        for (const row of resultConcepts) {
          const concept = row.concept;
          if (!concept) continue;
          if (categories && !categories.has(concept.category)) continue;
          if (subject && concept.id === subject.id) continue;

          let evidenceWeight = row.strength * resultRelevance * duplicateDamping * subjectMultiplier;
          evidenceWeight *= polarityMultiplier(result, concept, intent);
          evidenceWeight *= intentCategoryMultiplier(concept, intent, queryConcepts);
          if (evidenceWeight <= 0.01) continue;

          const current = candidates.get(concept.id) || {
            id: concept.id,
            label: concept.label,
            category: concept.category,
            score: 0,
            supportCount: 0,
            evidenceGroups: new Set(),
            evidence: []
          };
          current.score += evidenceWeight;
          current.supportCount += 1;
          current.evidenceGroups.add(groupKey);
          addEvidence(current, result, evidenceWeight, concept);
          candidates.set(concept.id, current);
        }
      }

      return [...candidates.values()]
        .map(c => ({ ...c, independentSupportCount: c.evidenceGroups.size }))
        .filter(c => c.score >= settings.minCandidateScore);
    }

    function conceptsForResult(result) {
      const rows = new Map();
      const add = (concept, strength, reason) => {
        if (!concept) return;
        const prev = rows.get(concept.id);
        if (!prev || strength > prev.strength) rows.set(concept.id, { concept, strength, reason });
      };

      for (const match of result._matchedConcepts || []) {
        add(byId[match.id] || byLabel.get(normalize(match.label)), match.kind === "direct" ? 3.4 : 1.35, `matched ${match.kind || "concept"}`);
      }
      for (const label of result._concepts || []) add(byLabel.get(normalize(label)), 1.15, "indexed concept");
      add(conceptForText(result.subtopic), 3.2, "subtopic");
      add(conceptForText(result.topic), 2.2, "topic");
      add(conceptForText(result.title), 2.6, "reference title");
      for (const tag of result.tags || []) add(conceptForText(tag), 1.9, "tag");

      for (const concept of conceptsMentionedInText([result.answer_outline, result.exam_trap, result.body].filter(Boolean).join(" ")).slice(0, 12)) {
        add(concept, 0.85, "answer/reference text");
      }

      return [...rows.values()];
    }

    function conceptForText(value) {
      const n = normalize(value);
      if (!n) return null;
      return byLabel.get(n) || byId[n] || null;
    }

    function conceptsMentionedInText(text) {
      const haystack = normalize(text);
      const found = [];
      const seen = new Set();
      for (const row of byAlias) {
        if (seen.has(row.concept.id)) continue;
        if (!containsTerm(haystack, row.term)) continue;
        seen.add(row.concept.id);
        found.push(row.concept);
      }
      return found;
    }

    function evidenceGroupKey(result) {
      if (result._resultType === "reference") return `ref:${result.id}`;
      return [
        result.bank || "",
        result.family || "",
        result.topic || "",
        result.subtopic || "",
        result.type || ""
      ].join("|");
    }

    function subjectEvidenceMultiplier(result, rows, subject) {
      if (!subject) return 1;
      if (rows.some(row => row.concept.id === subject.id)) return 1.35;
      const haystack = normalize([result.subtopic, result.topic, result.prompt, result.answer_outline, result.body, (result.tags || []).join(" ")].join(" "));
      const subjectTerms = [subject.label, ...(subject.aliases || [])].map(normalize).filter(Boolean);
      return subjectTerms.some(term => containsTerm(haystack, term)) ? 1.15 : 0.1;
    }

    function polarityMultiplier(result, concept, intent) {
      if (!["quality-enhanced", "quality-threatened"].includes(intent.intent)) return 1;
      const text = normalize([result.answer_outline, result.body, result.exam_trap, result.prompt].filter(Boolean).join(" "));
      const label = normalize(concept.label);
      const enhanced = hasNear(text, ["enhanced", "enhance", "improve", "improves", "improved", "advantage", "benefit"], label);
      const threatened = hasNear(text, ["threatened", "threaten", "degrade", "degraded", "limitation", "drawback", "trade off", "penalty", "weakness"], label);
      if (intent.intent === "quality-enhanced") {
        if (enhanced && !threatened) return 2.4;
        if (threatened && !enhanced) return 0.18;
        if (enhanced && threatened) return 1.1;
        return 0.55;
      }
      if (threatened && !enhanced) return 2.4;
      if (enhanced && !threatened) return 0.18;
      if (enhanced && threatened) return 1.1;
      return 0.55;
    }

    function intentCategoryMultiplier(concept, intent, queryConcepts) {
      if (intent.intent !== "general") return 1;
      const directIds = new Set((queryConcepts || []).filter(c => c.direct).map(c => c.id));
      if (directIds.has(concept.id)) return 1.2;
      if (concept.category === "design-pattern" || concept.category === "design-pattern-category") return 0.32;
      if (concept.category === "principle" || concept.category === "risk") return 0.65;
      return 1;
    }

    function hasNear(text, markers, label) {
      if (!text || !label) return false;
      const labelIndex = text.indexOf(label);
      if (labelIndex < 0) return false;
      return markers.some(marker => {
        let index = text.indexOf(marker);
        while (index >= 0) {
          if (Math.abs(index - labelIndex) <= 140) return true;
          index = text.indexOf(marker, index + marker.length);
        }
        return false;
      });
    }

    function addEvidence(candidate, result, weight, concept) {
      const snippet = evidenceSnippet(result, concept);
      const item = {
        id: result.id,
        title: result._resultType === "reference" ? result.title : `${result.id} - ${result.subtopic}`,
        resultType: result._resultType || "question",
        score: Number(result._score || 0),
        weight,
        snippet
      };
      candidate.evidence.push(item);
      candidate.evidence.sort((a, b) => b.weight - a.weight);
      candidate.evidence = candidate.evidence.slice(0, settings.maxEvidencePerCandidate + 2);
    }

    function evidenceSnippet(result, concept) {
      const text = String(result.answer_outline || result.body || result.prompt || "").replace(/\s+/g, " ").trim();
      if (!text) return "";
      const label = String(concept.label || "");
      const idx = normalize(text).indexOf(normalize(label));
      if (idx >= 0) {
        const start = Math.max(0, idx - 80);
        return trimSnippet(text.slice(start, start + 220));
      }
      return trimSnippet(text.slice(0, 220));
    }

    function trimSnippet(text) {
      const clean = String(text || "").replace(/\*\*/g, "").trim();
      return clean.length > 210 ? `${clean.slice(0, 207).trim()}...` : clean;
    }

    function calculateConfidence(winner, runner, total, intent) {
      const dominance = total ? winner.score / total : 0;
      const runnerScore = runner ? runner.score : 0;
      const margin = (winner.score - runnerScore) / Math.max(winner.score, 1);
      const evidenceStrength = Math.min(1, winner.independentSupportCount / 10);
      const numeric = clamp(0.4 * dominance + 0.25 * margin + 0.2 * evidenceStrength + 0.15 * intent.confidence, 0, 1);
      const level = numeric >= 0.72 ? "High" : numeric >= 0.48 ? "Medium" : "Low";
      return {
        level,
        numeric,
        dominance,
        margin,
        evidenceStrength,
        intentConfidence: intent.confidence
      };
    }

    function detectAmbiguity(raw, winner, runner, confidence, intent) {
      const q = normalize(raw);
      const close = !!runner && (winner.score - runner.score) / Math.max(winner.score, 1) < settings.ambiguityMargin;
      const underspecified = /\b(periodically|information|updates?|notify|notification|get information|best|suitable)\b/.test(q) && !/\b(event|change|changed|push|poll|request|client|server|subscriber|publisher)\b/.test(q);
      const low = confidence.level === "Low" || (confidence.level === "Medium" && (close || underspecified));
      const notes = [];
      if (close) notes.push("Top compatible candidates have close weighted support.");
      if (underspecified && confidence.level !== "High") notes.push("The query leaves the interaction mechanism underspecified.");
      if (/\bperiodically\b/.test(q)) notes.push("If updates are pushed when information changes, Publish-Subscribe fits; if clients actively request on an interval, Client-Server polling may fit.");
      return { isAmbiguous: close || low || (underspecified && confidence.level !== "High"), notes };
    }

    function relatedConceptGroups(results, excludedIds) {
      const groups = new Map();
      for (const result of results.slice(0, 12)) {
        for (const row of conceptsForResult(result)) {
          const concept = row.concept;
          if (!concept || excludedIds.has(concept.id)) continue;
          const key = concept.category;
          if (!groups.has(key)) groups.set(key, new Map());
          const bucket = groups.get(key);
          bucket.set(concept.id, (bucket.get(concept.id) || 0) + row.strength);
        }
      }
      return [...groups.entries()]
        .map(([category, rows]) => ({
          category,
          label: CATEGORY_LABELS[category] || category,
          concepts: [...rows.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([id]) => publicConcept(byId[id]))
        }))
        .filter(group => group.concepts.length)
        .sort((a, b) => a.label.localeCompare(b.label));
    }

    function buildWhy(raw, winner, intent, subject, ambiguity) {
      const subjectText = subject ? ` for ${subject.label}` : "";
      const base = `${winner.label} has the strongest weighted ${INTENT_LABELS[intent.intent].toLowerCase()} evidence${subjectText}.`;
      const evidence = winner.evidence[0]?.snippet ? winner.evidence[0].snippet : "";
      const lines = [base];
      if (evidence) lines.push(evidence);
      if (ambiguity.isAmbiguous && ambiguity.notes.length) lines.push(ambiguity.notes[0]);
      return lines.slice(0, 3);
    }

    function publicConcept(concept) {
      return concept ? { id: concept.id, label: concept.label, category: concept.category } : null;
    }

    function publicCandidate(candidate) {
      return {
        id: candidate.id,
        label: candidate.label,
        category: candidate.category,
        score: candidate.score,
        percent: candidate.percent || 0,
        share: candidate.share || 0,
        supportCount: candidate.supportCount,
        independentSupportCount: candidate.independentSupportCount,
        evidence: (candidate.evidence || []).slice(0, settings.maxEvidencePerCandidate)
      };
    }

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    return {
      predict,
      inferIntent,
      inspect: () => ({ concepts: concepts.length, settings })
    };
  }

  root.createAnswerPredictor = createAnswerPredictor;
  if (typeof module !== "undefined") module.exports = { createAnswerPredictor };
})(typeof window !== "undefined" ? window : globalThis);
