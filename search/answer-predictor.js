((root) => {
  const DEFAULTS = {
    maxEvidenceResults: 30,
    minResultScoreRatio: 0.08,
    minResultScore: 3,
    minCandidateScore: 0.8,
    maxEvidencePerCandidate: 4,
    ambiguityMargin: 0.22,
    weakConfidenceCutoff: 0.28,
    groupDamping: 1.35,
    weakMechanismAlignment: 0.12,
    minArchitecturalMechanism: 0.34
  };

  const PREDICTION_STATE = {
    ANSWER: "answer",
    AMBIGUOUS: "ambiguous",
    INSUFFICIENT_INFORMATION: "insufficient-information",
    NO_EVIDENCE: "no-evidence"
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
    "security-concept": "Security Concept",
    general: "General"
  };

  const STATE_LABELS = {
    [PREDICTION_STATE.ANSWER]: "Answer",
    [PREDICTION_STATE.AMBIGUOUS]: "Ambiguous Requirement",
    [PREDICTION_STATE.INSUFFICIENT_INFORMATION]: "Insufficient Information",
    [PREDICTION_STATE.NO_EVIDENCE]: "No Evidence"
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
        intent = "security-concept"; confidence = Math.max(confidence, 0.94); reasons.push("query asks for an identity security concept");
      }
      if (has(/\b(allowed to|permission|access rights|authorize|authorization|privilege)\b/)) {
        intent = "security-concept"; confidence = Math.max(confidence, 0.94); reasons.push("query asks for a permission security concept");
      }

      if (intent === "general" && has(/\b(automatically receive|receive an update whenever|receive updates? when|whenever .* changes?|new information becomes available|publisher|subscriber|event-driven|event driven|polling|periodically requests?|request .* server every|server every|both request and provide|successive .* transformations?|independent stages|published network interfaces?|service provider|service consumer)\b/)) {
        intent = "architectural-pattern"; confidence = 0.72; reasons.push("query describes an architectural interaction mechanism");
      }

      if (threatened) polarity = "threatened";
      else if (enhanced) polarity = "enhanced";

      const directConcepts = (queryConcepts || [])
        .filter(c => c.direct && byId[c.id])
        .map(c => byId[c.id]);
      if (intent === "general" && directConcepts.length === 1) {
        const category = directConcepts[0].category;
        if (["quality", "security", "framework", "structure", "tactic"].includes(category)) {
          intent = category === "security" ? "security-concept" : category;
          confidence = Math.max(confidence, 0.56);
          reasons.push("query directly names one concept");
        }
      }

      return { intent, label: INTENT_LABELS[intent], confidence, polarity, reasons };
    }

    function compatibleCategories(intent) {
      if (intent === "architectural-pattern") return new Set(["architectural-pattern"]);
      if (intent === "design-pattern") return new Set(["design-pattern"]);
      if (intent === "security-concept") return new Set(["security"]);
      if (intent === "quality" || intent === "quality-enhanced" || intent === "quality-threatened") return new Set(["quality"]);
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

    function analyzeArchitecturalMechanisms(raw) {
      const q = normalize(raw);
      const mechanisms = new Map();
      const add = (conceptId, score, clue, mechanism, useWhen, distinction) => {
        const concept = byId[conceptId];
        if (!concept) return;
        const prev = mechanisms.get(conceptId) || {
          concept,
          score: 0,
          clues: [],
          mechanism,
          useWhen,
          distinction
        };
        prev.score += score;
        if (clue && !prev.clues.includes(clue)) prev.clues.push(clue);
        mechanisms.set(conceptId, prev);
      };
      const has = pattern => pattern.test(q);

      if (has(/\b(client|user|browser|app)\s+(actively\s+)?(requests?|asks?|fetches?|retrieves?|checks?|polls?)\b/) || has(/\b(requests?|fetches?|retrieves?|checks?|polls?)\s+.*\b(server|centralized service)\b/)) {
        add("client-server", 0.78, "client/user initiates a request", "An asymmetric client initiates request/reply interaction with a server that provides the service.", "Use when clients actively request or poll for the information.", "Client-Server = request/reply initiated by the client.");
      }
      if (has(/\b(server|centralized server|central service)\b/) && has(/\b(request|reply|response|fetch|retrieve|provide)\b/)) {
        add("client-server", 0.42, "central server provides requested information", "An asymmetric client initiates request/reply interaction with a server that provides the service.", "Use when clients actively request or poll for the information.", "Client-Server = request/reply initiated by the client.");
      }
      if (has(/\b(polling|polls?|check(s|ing)? every|every \d+|every thirty|every 30|fixed interval|periodically requests?|scheduled request|client refreshes)\b/)) {
        add("client-server", 0.72, "polling or scheduled request", "An asymmetric client initiates request/reply interaction with a server that provides the service.", "Use when clients actively request or poll for the information.", "Client-Server = request/reply initiated by the client.");
      }

      if (has(/\b(publish|publisher|subscriber|subscribers|pubsub|event channel|event-driven|event driven)\b/)) {
        add("publish-subscribe", 0.88, "publisher/subscriber event vocabulary", "Publishers emit events and interested subscribers receive them without directly requesting each update.", "Use when information is pushed to subscribers when an event or change occurs.", "Publish-Subscribe = event-driven dissemination to subscribers.");
      }
      if (has(/\b(push(ed|es)?|automatically receive|automatically notify|notify subscribers|notify listeners|interested subscribers|interested users|receive an update whenever|receive updates? when .* changes?|whenever .* changes?|information changes?|when new information .* available|new information becomes available)\b/)) {
        add("publish-subscribe", 0.86, "push or change-triggered update", "Publishers emit events and interested subscribers receive them without directly requesting each update.", "Use when information is pushed to subscribers when an event or change occurs.", "Publish-Subscribe = event-driven dissemination to subscribers.");
      }
      if (has(/\bnotifications?|updates?\b/) && has(/\b(distribut\w*|broadcast|inform|many|multiple|interested|listeners?)\b/)) {
        add("publish-subscribe", 0.62, "one update distributed to many interested receivers", "Publishers emit events and interested subscribers receive them without directly requesting each update.", "Use when information is pushed to subscribers when an event or change occurs.", "Publish-Subscribe = event-driven dissemination to subscribers.");
      }

      if (has(/\b(soa|service oriented architecture|service-oriented architecture|service provider|service consumer|service registry|service discovery|published (service )?(interface|contract)s?|independently provided .* services?|heterogeneous .* services?|network interfaces?|interoperability)\b/)) {
        add("soa", 0.95, "independent network services with published interfaces", "Computation is achieved through cooperating independently provided and consumed network services with published interfaces.", "Use when the problem is about service provider/consumer interoperability or discoverable network services.", "SOA requires independently provided/consumed services and published interfaces, not merely periodic retrieval.");
      }

      if (has(/\b(peer[- ]?to[- ]?peer|p2p|equal peers|decentralized|both request and provide|request and provide|share (their|own) resources|peer discovery|network node .* both request .* provide)\b/)) {
        add("peer-to-peer", 0.9, "equal peers request and provide resources", "Peers have symmetric roles and can both request and provide resources.", "Use when nodes are peers rather than fixed clients and servers.", "Peer-to-Peer requires peers to both request and provide resources.");
      }
      if (has(/\b(pipe[- ]and[- ]filter|pipeline|successive( independent)? transformations?|several independent stages|multiple transformations?|stream|filters?|transforming .* forwarding|transform(ed|s)? .* stages?)\b/)) {
        add("pipe-and-filter", 0.94, "successive independent transformations", "Data flows through filters that transform it and pipes that carry outputs to the next stage.", "Use when the main mechanism is staged data transformation.", "Pipe-and-Filter = successive transformations through independent filters.");
      }
      if (has(/\b(layered?|strict layering|allowed[- ]to[- ]use|presentation .* business .* data|isolate changes|separate implementation responsibilities|dependency organization|ui .* business rules?)\b/)) {
        add("layer", 0.86, "layered dependency and responsibility organization", "Responsibilities are separated into layers with controlled allowed-to-use dependencies.", "Use when the requirement is about dependency organization or isolating implementation changes.", "Layer = module responsibility/dependency organization, not physical deployment tiers.");
      }
      if (has(/\b(shared[- ]data|shared database|common repository|centralized data|multiple components access .* data|same persistent data|repository|blackboard)\b/)) {
        add("shared-data", 0.85, "shared repository accessed by multiple components", "Multiple components communicate indirectly through a common data repository.", "Use when the key mechanism is a shared persistent data store.", "Shared-Data = common repository; Client-Server = clients requesting a server service.");
      }
      if (has(/\b(broker|intermediary|client proxy|server proxy|location transparency|forward requests?|dynamic binding)\b/)) {
        add("broker", 0.86, "intermediary broker forwards requests", "A broker mediates interaction and provides location transparency between clients and servers.", "Use when an intermediary hides service location or forwards calls.", "Broker requires an intermediary/proxy mechanism.");
      }
      if (has(/\b(multi[- ]tier|deployment tier|physical tiers?|client tier|application tier|data tier|separate runtime environments?|software mapped .* physical)\b/)) {
        add("multi-tier", 0.86, "physical deployment tiers", "Software responsibilities are deployed onto separate physical/runtime tiers.", "Use when the question is about deployment/runtime allocation.", "Multi-Tier = physical deployment; Layer = logical/module organization.");
      }

      for (const row of mechanisms.values()) row.score = clamp(row.score, 0, 1);

      const hasPeriodic = has(/\b(periodic|periodically|fixed interval|interval|every \d+|every thirty|every 30|regularly)\b/);
      const asksForInfo = has(/\b(get|receive|fetch|retrieve|information|updates?|data|content)\b/);
      const pollingStrong = (mechanisms.get("client-server")?.score || 0) >= 0.7;
      const pushStrong = (mechanisms.get("publish-subscribe")?.score || 0) >= 0.7;
      const periodicAmbiguous = hasPeriodic && asksForInfo && !pollingStrong && !pushStrong;

      return {
        mechanisms,
        periodicAmbiguous,
        strongest: [...mechanisms.values()].sort((a, b) => b.score - a.score),
        hasAny: mechanisms.size > 0
      };
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
      const architecture = analyzeArchitecturalMechanisms(raw);
      const evidenceRows = selectEvidence(rankedResults || []);
      if (!evidenceRows.length) {
        return noEvidencePrediction(intent, subject);
      }

      if ((intent.intent === "architectural-pattern" || intent.intent === "general") && architecture.periodicAmbiguous) {
        return buildPeriodicAmbiguity(raw, intent, evidenceRows);
      }

      if (intent.intent === "architectural-pattern" && !architecture.hasAny) {
        return insufficientPrediction(intent, subject, "The query asks for an architectural pattern but does not establish the architectural mechanism.", [
          "What initiates the interaction?",
          "Is the concern request/reply, event notification, staged transformation, peer resource sharing, shared data, brokering, service interoperability, layering, or deployment tiers?"
        ]);
      }

      const candidates = aggregateCandidates(evidenceRows, cats, intent, subject, queryConcepts, architecture, raw);
      if (!candidates.length) {
        return {
          shown: true,
          state: PREDICTION_STATE.INSUFFICIENT_INFORMATION,
          stateLabel: STATE_LABELS[PREDICTION_STATE.INSUFFICIENT_INFORMATION],
          reason: "no-compatible-candidates",
          intent,
          subject: subject ? publicConcept(subject) : null,
          why: ["No compatible local concept has enough support for the requested answer category."],
          missingInformation: ["Add the architectural mechanism, quality attribute, pattern name, or distinguishing condition."]
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
      const examReady = buildExamReadyJustification(winner, intent, subject);
      const whyNot = buildWhyNotAlternatives(raw, winner, candidates.slice(1, 4), intent, architecture);

      if (winner.score < settings.minCandidateScore || (confidence.numeric < settings.weakConfidenceCutoff && winner.independentSupportCount < 1)) {
        return {
          shown: true,
          state: PREDICTION_STATE.NO_EVIDENCE,
          stateLabel: STATE_LABELS[PREDICTION_STATE.NO_EVIDENCE],
          reason: "weak-candidate-consensus",
          intent,
          subject: subject ? publicConcept(subject) : null,
          confidence,
          why: ["The strongest compatible candidate is too weak to present as an exam answer."],
          evidence: winner.evidence.slice(0, settings.maxEvidencePerCandidate),
          debug: { winner: publicCandidate(winner), confidence }
        };
      }

      return {
        shown: true,
        state: PREDICTION_STATE.ANSWER,
        stateLabel: STATE_LABELS[PREDICTION_STATE.ANSWER],
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
        why,
        examReady,
        whyNot
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

    function aggregateCandidates(results, categories, intent, subject, queryConcepts, architecture, rawQuery) {
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
          evidenceWeight *= mechanismAlignmentMultiplier(concept, intent, architecture);
          evidenceWeight *= answerRoleMultiplier(concept, intent, rawQuery);
          if (evidenceWeight <= 0.01) continue;

          const current = candidates.get(concept.id) || {
            id: concept.id,
            label: concept.label,
            category: concept.category,
            score: 0,
            supportCount: 0,
            evidenceGroups: new Set(),
            evidence: [],
            queryAlignment: queryAlignment(rawQuery, concept, intent, architecture)
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
        result.type || "",
        result.scenario || ""
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

    function mechanismAlignmentMultiplier(concept, intent, architecture) {
      if (intent.intent !== "architectural-pattern") return 1;
      const alignment = architecture?.mechanisms?.get(concept.id)?.score || 0;
      if (alignment >= settings.minArchitecturalMechanism) return 0.45 + alignment;
      return settings.weakMechanismAlignment;
    }

    function answerRoleMultiplier(concept, intent, rawQuery) {
      const q = normalize(rawQuery);
      if (intent.intent === "quality" || intent.intent === "quality-enhanced" || intent.intent === "quality-threatened") {
        if (["fault", "failure", "end-to-end-availability", "recovery"].includes(concept.id) && /\bquality attribute|what quality|which quality|quality is|quality can|quality may\b/.test(q)) return 0.42;
        if (["latency", "throughput"].includes(concept.id) && /\bquality attribute|what quality|which quality\b/.test(q)) return 0.5;
      }
      if (intent.intent === "framework" && concept.id === "response-measure" && /\bsource stimulus environment artifact response response measure\b/.test(q)) return 0.35;
      return 1;
    }

    function queryAlignment(raw, concept, intent, architecture) {
      const q = normalize(raw);
      if (!concept) return 0;
      if (intent.intent === "architectural-pattern") {
        const mechanismScore = architecture?.mechanisms?.get(concept.id)?.score || 0;
        if (mechanismScore >= 0.75) return 1;
        if (mechanismScore >= settings.minArchitecturalMechanism) return 0.72;
        return 0.12;
      }
      if (concept.category === "architectural-pattern") {
        const mechanismScore = architecture?.mechanisms?.get(concept.id)?.score || 0;
        if (mechanismScore >= 0.75) return 1;
        if (mechanismScore >= settings.minArchitecturalMechanism) return 0.72;
      }
      const directTerms = [concept.label, ...(concept.aliases || [])].map(normalize).filter(Boolean);
      const direct = directTerms.some(term => containsTerm(q, term));
      if (direct) return 1;
      if (concept.id === "availability" && /\b(crash|fails?|failover|redirect|continue|normally|still works|available|traffic)\b/.test(q)) return 0.95;
      if (concept.id === "authentication" && /\b(who are you|identity|login|credentials|password|prove)\b/.test(q)) return 1;
      if (concept.id === "authorization" && /\b(allowed|permission|access rights|privilege|authorize)\b/.test(q)) return 1;
      if (concept.id === "quality-attribute-scenario" && /\b(source stimulus environment artifact response response measure|response measure|six part)\b/.test(q)) return 1;
      if (concept.id === "modifiability" && /\b(isolat|change|modify|without changing|low coupling|separation)\b/.test(q)) return 0.9;
      if (concept.id === "performance" && /\b(degraded|too many|latency|response time|throughput|slow|boundaries)\b/.test(q)) return 0.85;
      return 0.4;
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
      const alignment = winner.queryAlignment || 0;
      const numeric = clamp(0.3 * dominance + 0.2 * margin + 0.15 * evidenceStrength + 0.15 * intent.confidence + 0.2 * alignment, 0, 1);
      const level = numeric >= 0.62 ? "High" : numeric >= 0.46 ? "Medium" : "Low";
      return {
        level,
        numeric,
        dominance,
        margin,
        evidenceStrength,
        intentConfidence: intent.confidence,
        queryAlignment: alignment
      };
    }

    function detectAmbiguity(raw, winner, runner, confidence, intent) {
      const q = normalize(raw);
      const directWinner = winner.queryAlignment >= 0.9 && intent.confidence >= 0.84;
      const close = !!runner && !directWinner && (winner.score - runner.score) / Math.max(winner.score, 1) < settings.ambiguityMargin;
      const underspecified = /\b(periodically|information|updates?|notify|notification|get information|best|suitable)\b/.test(q) && !/\b(event|change|changed|push|poll|request|client|server|subscriber|publisher)\b/.test(q);
      const low = confidence.level === "Low" && (close || underspecified);
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

    function buildExamReadyJustification(winner, intent, subject) {
      if (!winner) return [];
      const subjectText = subject ? ` for ${subject.label}` : "";
      const mechanisms = {
        "client-server": "the client initiates request/reply interactions with a centralized server that provides the required information",
        "publish-subscribe": "publishers disseminate events to interested subscribers without each subscriber explicitly requesting each update",
        "pipe-and-filter": "data is passed through independent filters that transform it before forwarding output through pipes",
        "peer-to-peer": "nodes act as peers that can both request and provide resources",
        layer: "responsibilities are separated into layers with controlled dependencies so changes can be localized",
        "shared-data": "multiple components access a shared repository as the communication/data-sharing mechanism",
        broker: "an intermediary broker/proxy forwards requests and provides location transparency",
        "multi-tier": "software responsibilities are deployed across separate physical/runtime tiers",
        soa: "independently provided network services interact through published service interfaces or contracts"
      };
      const qualityMechanisms = {
        availability: "the system masks faults through recovery, redundancy, or failover so users do not observe a service failure",
        authentication: "the system verifies identity, answering who the user or actor is",
        authorization: "the system checks permissions, answering what the authenticated actor is allowed to do",
        "quality-attribute-scenario": "the answer should structure the requirement as Source, Stimulus, Environment, Artifact, Response, and Response Measure",
        modifiability: "the design localizes changes and reduces ripple effects across unrelated responsibilities",
        performance: "the design affects response time, latency, throughput, or processing delay"
      };
      const mechanism = mechanisms[winner.id] || qualityMechanisms[winner.id];
      if (!mechanism) return [];
      const category = INTENT_LABELS[intent.intent] || "answer";
      return [`Requirement -> ${category} -> ${winner.label} -> ${mechanism}${subjectText}.`];
    }

    function buildWhyNotAlternatives(raw, winner, alternatives, intent, architecture) {
      if (intent.intent !== "architectural-pattern") return [];
      const q = normalize(raw);
      const rows = [];
      for (const alt of alternatives || []) {
        if (!alt || alt.id === winner.id) continue;
        const alignment = architecture?.mechanisms?.get(alt.id)?.score || 0;
        if (alignment >= 0.6) continue;
        if (alt.id === "soa") rows.push({ label: alt.label, reason: "Requires cooperating service providers/consumers, published interfaces/contracts, discovery, or interoperability; periodic retrieval alone does not justify it." });
        if (alt.id === "peer-to-peer") rows.push({ label: alt.label, reason: "Requires peers to both request and provide resources; that symmetric role is not established here." });
        if (alt.id === "publish-subscribe" && !/\b(event|push|whenever|subscriber|publisher|notify)\b/.test(q)) rows.push({ label: alt.label, reason: "Requires event-driven push to subscribers; active polling points to Client-Server instead." });
        if (alt.id === "client-server" && !/\b(request|server|poll|fetch|retrieve|client)\b/.test(q)) rows.push({ label: alt.label, reason: "Requires client-initiated request/reply or polling; event-driven push points to Publish-Subscribe instead." });
      }
      return rows.slice(0, 3);
    }

    function noEvidencePrediction(intent, subject) {
      return {
        shown: true,
        state: PREDICTION_STATE.NO_EVIDENCE,
        stateLabel: STATE_LABELS[PREDICTION_STATE.NO_EVIDENCE],
        reason: "weak-search-evidence",
        intent,
        subject: subject ? publicConcept(subject) : null,
        why: ["The local question bank and references did not provide enough matching evidence to predict an answer."],
        missingInformation: ["Try adding the pattern mechanism, quality attribute, symptom, or exact CSC3209 term."]
      };
    }

    function insufficientPrediction(intent, subject, message, missingInformation) {
      return {
        shown: true,
        state: PREDICTION_STATE.INSUFFICIENT_INFORMATION,
        stateLabel: STATE_LABELS[PREDICTION_STATE.INSUFFICIENT_INFORMATION],
        reason: "insufficient-information",
        intent,
        subject: subject ? publicConcept(subject) : null,
        why: [message],
        missingInformation: missingInformation || []
      };
    }

    function buildPeriodicAmbiguity(raw, intent, evidenceRows) {
      const client = byId["client-server"];
      const pubsub = byId["publish-subscribe"];
      const possibilities = [
        {
          concept: publicConcept(client),
          label: client.label,
          condition: "Use this if the client or user actively requests, checks, fetches, or polls for information at fixed intervals.",
          mechanism: "Client-Server / polling = request/reply initiated by the client."
        },
        {
          concept: publicConcept(pubsub),
          label: pubsub.label,
          condition: "Use this if the system pushes information when new information or events become available.",
          mechanism: "Publish-Subscribe = event-driven dissemination to subscribers."
        }
      ];
      const evidence = [
        ...evidenceForConcept(evidenceRows, "client-server", true).slice(0, 2),
        ...evidenceForConcept(evidenceRows, "publish-subscribe", true).slice(0, 2)
      ].slice(0, settings.maxEvidencePerCandidate);
      return {
        shown: true,
        state: PREDICTION_STATE.AMBIGUOUS,
        stateLabel: STATE_LABELS[PREDICTION_STATE.AMBIGUOUS],
        title: "Predicted Exam Answer",
        intent,
        subject: null,
        winner: null,
        alternatives: [],
        candidates: [],
        possibilities,
        missingInformation: ["Who initiates the communication?"],
        examDistinction: [
          "Client requests on an interval -> Client-Server / polling.",
          "System pushes when information changes or becomes available -> Publish-Subscribe."
        ],
        why: ["No single architectural pattern is justified yet because the query says information is obtained periodically but does not say whether the client requests it or the system pushes it."],
        examReady: [
          "State the missing interaction mechanism first, then choose Client-Server for active polling or Publish-Subscribe for event-driven push."
        ],
        related: relatedConceptGroups(evidenceRows, new Set(["client-server", "publish-subscribe"])),
        evidence,
        matchingResults: evidenceRows.length,
        independentEvidenceGroups: new Set(evidence.map(e => e.groupKey || e.id)).size,
        ambiguity: {
          isAmbiguous: true,
          notes: ["The requirement is ambiguous around the interaction mechanism.", "Who initiates communication determines the answer."]
        },
        confidence: null
      };
    }

    function evidenceForConcept(results, conceptId, strict = false) {
      const concept = byId[conceptId];
      if (!concept) return [];
      return results
        .map(result => {
          const row = conceptsForResult(result).find(r => r.concept.id === conceptId);
          if (!row) return null;
          if (strict && !isDirectEvidenceForConcept(result, concept)) return null;
          return {
            id: result.id,
            title: result._resultType === "reference" ? result.title : `${result.id} - ${result.subtopic}`,
            resultType: result._resultType || "question",
            score: Number(result._score || 0),
            weight: row.strength,
            snippet: evidenceSnippet(result, concept),
            groupKey: evidenceGroupKey(result)
          };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .slice(0, settings.maxEvidencePerCandidate);
    }

    function isDirectEvidenceForConcept(result, concept) {
      const label = normalize(concept.label);
      if (normalize(result.subtopic) === label || normalize(result.title) === label) return true;
      return (result._matchedConcepts || []).some(c => (c.id === concept.id || normalize(c.label) === label) && c.kind === "direct");
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
        queryAlignment: candidate.queryAlignment || 0,
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
      analyzeArchitecturalMechanisms,
      PREDICTION_STATE,
      inspect: () => ({ concepts: concepts.length, settings })
    };
  }

  root.createAnswerPredictor = createAnswerPredictor;
  root.CSC3209_PREDICTION_STATE = PREDICTION_STATE;
  if (typeof module !== "undefined") module.exports = { createAnswerPredictor, PREDICTION_STATE };
})(typeof window !== "undefined" ? window : globalThis);
