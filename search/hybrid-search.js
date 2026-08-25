((root) => {
  function createHybridSearchEngine(questions, references, config) {
    const cfg = config || root.CSC3209_SEARCH_CONFIG;
    const concepts = cfg.concepts;
    const byId = cfg.byId || Object.fromEntries(concepts.map(c => [c.id, c]));
    const boundary = cfg.boundary || {};
    const stop = new Set(cfg.stopWords || []);
    const weights = cfg.weights;
    const conceptLexemes = concepts.map(c => ({
      concept: c,
      terms: [c.label, ...(c.aliases || [])].map(normalize).filter(Boolean)
    }));
    const conceptNameLookup = new Map();
    for (const concept of concepts) {
      conceptNameLookup.set(normalize(concept.id), concept.id);
      conceptNameLookup.set(normalize(concept.label), concept.id);
    }

    const generatedConceptIndex = new Map(
      ((root.SEMANTIC_INDEX && root.SEMANTIC_INDEX.documents) || []).map(d => [d.id, d.concepts || []])
    );

    const BASE_FIELD_WEIGHTS = {
      id: 18,
      subtopic: 12,
      topic: 8,
      tags: 7,
      prompt: 5.5,
      type: 3,
      scenario: 2.2,
      family: 1.6,
      bank: 1.2,
      source: 0.8
    };
    const ANSWER_WEIGHT = 2.4;
    const REFERENCE_ANSWER_WEIGHT = 2.4;

    const basePostings = new Map();
    const answerPostings = new Map();
    const conceptPostings = new Map();
    const fuzzyCache = new Map();
    const answerNormCache = new Map();
    const docs = [];
    const questionDocs = [];
    const referenceDocs = [];
    const docById = new Map();
    let answerIndexReady = false;
    let lastQueryKey = "";
    let lastQueryData = null;

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

    function stem(token) {
      if (token.length > 5 && token.endsWith("ies")) return token.slice(0, -3) + "y";
      if (token.length > 5 && token.endsWith("ing")) return token.slice(0, -3);
      if (token.length > 4 && token.endsWith("ed")) return token.slice(0, -2);
      if (token.length > 4 && token.endsWith("es")) return token.slice(0, -2);
      if (token.length > 3 && token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
      return token;
    }

    function tokenize(value, options = {}) {
      const raw = normalize(value).split(/\s+/).filter(Boolean);
      const out = [];
      for (const token of raw) {
        if (!options.keepStopWords && stop.has(token)) continue;
        if (token.length < 2) continue;
        out.push(stem(token));
      }
      return [...new Set(out)];
    }

    function tokenCounts(value) {
      const counts = new Map();
      const raw = normalize(value).split(/\s+/).filter(Boolean);
      for (const rawToken of raw) {
        if (stop.has(rawToken)) continue;
        const token = stem(rawToken);
        if (token.length < 2) continue;
        counts.set(token, (counts.get(token) || 0) + 1);
      }
      return counts;
    }

    function containsTerm(haystack, term) {
      if (boundary.containsTerm) return boundary.containsTerm(haystack, term);
      if (!term) return false;
      const escaped = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      return new RegExp(`(^|[^a-z0-9+#])${escaped}(s|es)?(?=$|[^a-z0-9+#])`).test(normalize(haystack));
    }

    function mergeConceptLists(...lists) {
      const merged = new Map();
      for (const list of lists) {
        for (const c of list || []) {
          if (!byId[c.id]) continue;
          const prev = merged.get(c.id);
          if (!prev || c.strength > prev.strength) merged.set(c.id, c);
        }
      }
      return [...merged.values()].sort((a, b) => b.strength - a.strength);
    }

    function inferConcepts(text, q) {
      const direct = [];
      const haystack = normalize(text);
      const fullTokens = new Set(tokenize(text));
      for (const entry of conceptLexemes) {
        let strength = 0;
        let reason = "";
        for (const term of entry.terms) {
          if (!term || term.length < 2) continue;
          if (containsTerm(haystack, term)) {
            const termTokens = tokenize(term);
            const phraseStrength = termTokens.length > 1 ? 2.6 + Math.min(3, termTokens.length * 0.35) : 1.7;
            if (phraseStrength > strength) {
              strength = phraseStrength;
              reason = term;
            }
          }
        }
        if (!strength) {
          let best = 0;
          for (const term of entry.terms) {
            const aliasTokens = tokenize(term);
            if (!aliasTokens.length) continue;
            const hits = aliasTokens.filter(t => fullTokens.has(t)).length;
            if (!hits) continue;
            best = Math.max(best, hits / Math.max(2, aliasTokens.length));
          }
          if (best >= 0.65) {
            strength = best * 1.4;
            reason = "term overlap";
          }
        }
        if (q && normalize(q.subtopic) === normalize(entry.concept.label)) {
          strength += 4.5;
          reason = "subtopic";
        } else if (q && normalize(q.topic) === normalize(entry.concept.label)) {
          strength += 3.2;
          reason = "topic";
        }
        if (q && (q.tags || []).some(t => normalize(t) === normalize(entry.concept.label) || normalize(t) === entry.concept.id)) {
          strength += 2.6;
          reason = "tag";
        }
        if (strength > 0.9) direct.push({ id: entry.concept.id, strength, reason });
      }
      return mergeConceptLists(direct).slice(0, 18);
    }

    function conceptsFromGeneratedIndex(q) {
      const rows = [];
      const indexed = generatedConceptIndex.get(q.id) || [];
      const subtopic = normalize(q.subtopic);
      const topic = normalize(q.topic);
      const tags = new Set((q.tags || []).map(normalize));

      for (const id of indexed) {
        const concept = byId[id];
        if (!concept) continue;
        const label = normalize(concept.label);
        let strength = 1.8;
        let reason = "generated index";
        if (label && subtopic === label) { strength = 6.2; reason = "subtopic"; }
        else if (label && topic === label) { strength = 4.2; reason = "topic"; }
        else if (label && (tags.has(label) || tags.has(normalize(id)))) { strength = 3.3; reason = "tag"; }
        rows.push({ id, strength, reason });
      }

      // Runtime document-side ontology inference used to scan every full question
      // during page startup. Generated concept assignments are now the source of
      // truth; only cheap exact metadata matches are supplemented here.
      for (const [value, strength, reason] of [
        [subtopic, 6.2, "subtopic"],
        [topic, 4.2, "topic"]
      ]) {
        const id = conceptNameLookup.get(value);
        if (id) rows.push({ id, strength, reason });
      }
      for (const tag of tags) {
        const id = conceptNameLookup.get(tag);
        if (id) rows.push({ id, strength: 3.3, reason: "tag" });
      }
      return mergeConceptLists(rows).slice(0, 18);
    }

    function registerConcepts(doc) {
      for (const concept of doc.concepts) {
        let set = conceptPostings.get(concept.id);
        if (!set) conceptPostings.set(concept.id, set = new Set());
        set.add(doc.index);
      }
    }

    function addFieldToPostings(postings, value, fieldWeight, docIndex) {
      if (!value || !fieldWeight) return;
      for (const [token, tf] of tokenCounts(value)) {
        let posting = postings.get(token);
        if (!posting) postings.set(token, posting = new Map());
        const contribution = fieldWeight * (1 + Math.log(tf + 1));
        posting.set(docIndex, (posting.get(docIndex) || 0) + contribution);
      }
    }

    function buildQuestionDoc(q) {
      const tags = (q.tags || []).join(" ");
      const conceptsFound = conceptsFromGeneratedIndex(q);
      const doc = {
        kind: "question",
        id: q.id,
        item: q,
        index: docs.length,
        norm: {
          id: normalize(q.id),
          bank: normalize(q.bank),
          topic: normalize(q.topic),
          subtopic: normalize(q.subtopic),
          type: normalize(q.type),
          difficulty: normalize(q.difficulty),
          family: normalize(q.family),
          scenario: normalize(q.scenario),
          tags: normalize(tags),
          prompt: normalize(q.prompt),
          source: normalize(q.source)
        },
        concepts: conceptsFound,
        conceptSet: new Set(conceptsFound.map(c => c.id)),
        conceptStrength: new Map(conceptsFound.map(c => [c.id, c.strength]))
      };
      docs.push(doc);
      questionDocs.push(doc);
      docById.set(doc.id, doc);
      for (const [field, fieldWeight] of Object.entries(BASE_FIELD_WEIGHTS)) {
        const value = field === "tags" ? tags : q[field];
        addFieldToPostings(basePostings, value, fieldWeight, doc.index);
      }
      registerConcepts(doc);
      return doc;
    }

    function buildReferenceDoc(r) {
      const isPastPaper = r.referenceType === "past-paper";
      const tags = (r.concepts || []).join(" ");
      const titleConcepts = inferConcepts(`${r.title || ""} ${tags}`);
      const conceptsFound = mergeConceptLists(
        (r.concepts || []).map(id => ({ id, strength: 2.8, reason: isPastPaper ? "past-paper tag" : "reference tag" })),
        titleConcepts
      );
      const doc = {
        kind: "reference",
        id: r.id,
        item: r,
        index: docs.length,
        norm: {
          id: normalize(r.id),
          bank: "",
          topic: normalize(isPastPaper ? "Past Paper / Model Answer" : "Universal Answer Reference"),
          subtopic: normalize(r.title),
          type: normalize(isPastPaper ? "Past Paper / Model Answer" : "Reference"),
          difficulty: "",
          family: "",
          scenario: "",
          tags: normalize(tags),
          prompt: normalize(r.title),
          source: normalize(r.source || "universal_answers.md")
        },
        concepts: conceptsFound,
        conceptSet: new Set(conceptsFound.map(c => c.id)),
        conceptStrength: new Map(conceptsFound.map(c => [c.id, c.strength]))
      };
      docs.push(doc);
      referenceDocs.push(doc);
      docById.set(doc.id, doc);
      addFieldToPostings(basePostings, r.id, BASE_FIELD_WEIGHTS.id, doc.index);
      addFieldToPostings(basePostings, r.title, BASE_FIELD_WEIGHTS.subtopic + BASE_FIELD_WEIGHTS.prompt, doc.index);
      addFieldToPostings(basePostings, tags, BASE_FIELD_WEIGHTS.tags, doc.index);
      addFieldToPostings(basePostings, r.body, REFERENCE_ANSWER_WEIGHT, doc.index);
      addFieldToPostings(basePostings, r.source || "universal_answers.md", BASE_FIELD_WEIGHTS.source, doc.index);
      registerConcepts(doc);
      return doc;
    }

    for (const q of questions || []) buildQuestionDoc(q);
    for (const r of references || []) buildReferenceDoc(r);

    const totalDocs = Math.max(1, docs.length);

    function ensureAnswerIndex() {
      if (answerIndexReady) return;
      for (const doc of questionDocs) {
        const q = doc.item;
        const answer = [q.answer_outline, q.exam_trap, q.code_answer].filter(Boolean).join(" ");
        addFieldToPostings(answerPostings, answer, ANSWER_WEIGHT, doc.index);
      }
      answerIndexReady = true;
      fuzzyCache.clear();
    }

    function idfFor(posting) {
      const df = posting ? posting.size : 0;
      return Math.log(1 + (totalDocs - df + 0.5) / (df + 0.5));
    }

    function editDistanceAtMostOne(a, b) {
      if (a === b) return true;
      if (Math.abs(a.length - b.length) > 1) return false;
      let i = 0, j = 0, edits = 0;
      while (i < a.length && j < b.length) {
        if (a[i] === b[j]) { i += 1; j += 1; continue; }
        edits += 1;
        if (edits > 1) return false;
        if (a.length > b.length) i += 1;
        else if (b.length > a.length) j += 1;
        else { i += 1; j += 1; }
      }
      return edits + (a.length - i) + (b.length - j) <= 1;
    }

    function fuzzyAlternatives(token, includeAnswers) {
      if (token.length < 5) return [];
      const cacheKey = `${includeAnswers ? 1 : 0}:${token}`;
      if (fuzzyCache.has(cacheKey)) return fuzzyCache.get(cacheKey);
      const matches = [];
      const seen = new Set();
      const scan = postings => {
        for (const candidate of postings.keys()) {
          if (seen.has(candidate)) continue;
          seen.add(candidate);
          if (Math.abs(candidate.length - token.length) > 1) continue;
          if (editDistanceAtMostOne(token, candidate)) {
            matches.push(candidate);
            if (matches.length >= 6) return true;
          }
        }
        return false;
      };
      if (!scan(basePostings) && includeAnswers) scan(answerPostings);
      fuzzyCache.set(cacheKey, matches);
      return matches;
    }

    function getQueryData(raw) {
      const key = normalize(raw);
      if (key === lastQueryKey && lastQueryData) return lastQueryData;
      const tokens = tokenize(raw);
      const conceptsFound = inferConcepts(raw);
      const expanded = [];
      for (const c of conceptsFound.slice(0, 10)) {
        const concept = byId[c.id];
        expanded.push(c);
        for (const relatedId of concept.related || []) {
          if (byId[relatedId]) expanded.push({ id: relatedId, strength: Math.max(0.65, c.strength * 0.38), reason: `related to ${concept.label}` });
        }
      }
      const queryData = {
        raw,
        norm: key,
        tokens,
        concepts: mergeConceptLists(expanded),
        directConceptIds: new Set(conceptsFound.map(c => c.id))
      };
      lastQueryKey = key;
      lastQueryData = queryData;
      return queryData;
    }

    function addPostingScores(token, postings, stateByDoc, touched, multiplier) {
      const posting = postings.get(token);
      if (!posting) return false;
      const idf = Math.max(0.6, idfFor(posting));
      for (const [docIndex, rawScore] of posting) {
        let state = stateByDoc.get(docIndex);
        if (!state) stateByDoc.set(docIndex, state = { score: 0, matched: 0 });
        state.score += rawScore * idf * multiplier;
        touched.add(docIndex);
      }
      return true;
    }

    function collectLexicalCandidates(query, includeAnswers) {
      if (includeAnswers) ensureAnswerIndex();
      const stateByDoc = new Map();
      for (const token of query.tokens) {
        const touched = new Set();
        const exactBase = addPostingScores(token, basePostings, stateByDoc, touched, 1);
        const exactAnswer = includeAnswers ? addPostingScores(token, answerPostings, stateByDoc, touched, 1) : false;
        if (!exactBase && !exactAnswer) {
          for (const fuzzy of fuzzyAlternatives(token, includeAnswers)) {
            addPostingScores(fuzzy, basePostings, stateByDoc, touched, 0.35);
            if (includeAnswers) addPostingScores(fuzzy, answerPostings, stateByDoc, touched, 0.35);
          }
        }
        for (const docIndex of touched) stateByDoc.get(docIndex).matched += 1;
      }
      return stateByDoc;
    }

    function getAnswerNorm(doc) {
      if (doc.kind === "reference") return normalize(doc.item.body);
      if (answerNormCache.has(doc.id)) return answerNormCache.get(doc.id);
      const q = doc.item;
      const value = normalize([q.answer_outline, q.exam_trap, q.code_answer].filter(Boolean).join(" "));
      answerNormCache.set(doc.id, value);
      return value;
    }

    function exactBoost(doc, query, includeAnswers) {
      if (!query.norm) return 0;
      let total = 0;
      if (doc.norm.id === query.norm) total += weights.exactId;
      if (doc.norm.subtopic === query.norm) total += weights.exactSubtopic;
      if (doc.norm.topic === query.norm) total += weights.exactTopic;
      if (query.norm.length >= 3 && containsTerm(doc.norm.prompt, query.norm)) total += weights.exactPhrasePrompt;
      if (query.norm.length >= 3 && containsTerm(doc.norm.tags, query.norm)) total += weights.exactPhraseTags;
      if ((includeAnswers || doc.kind === "reference") && query.norm.length >= 3 && containsTerm(getAnswerNorm(doc), query.norm)) {
        total += weights.exactPhraseAnswer;
      }
      return total;
    }

    function lexicalScore(doc, query, includeAnswers, mode, lexicalState) {
      if (!query.tokens.length) return doc.kind === "question" ? 1 : 0;
      const state = lexicalState || { score: 0, matched: 0 };
      const coverage = state.matched / Math.max(1, query.tokens.length);
      let total = state.score * (0.35 + coverage) + exactBoost(doc, query, includeAnswers);
      if (mode === "exact") total *= weights.lexical;
      return total;
    }

    function exactMetadataScore(doc, query, includeAnswers) {
      if (!query.norm) return 0;
      let score = 0;
      if (doc.norm.id === query.norm) score += 1;
      if (doc.norm.subtopic === query.norm) score += 0.95;
      if (doc.norm.topic === query.norm) score += 0.72;
      if (query.norm.length >= 3 && containsTerm(doc.norm.prompt, query.norm)) score += 0.55;
      if (query.norm.length >= 3 && containsTerm(doc.norm.tags, query.norm)) score += 0.48;
      if ((includeAnswers || doc.kind === "reference") && query.norm.length >= 3 && containsTerm(getAnswerNorm(doc), query.norm)) score += 0.32;
      for (const conceptId of query.directConceptIds || []) {
        const concept = byId[conceptId];
        if (!concept || !doc.conceptSet.has(conceptId)) continue;
        const label = normalize(concept.label);
        const id = normalize(conceptId);
        let conceptFit = 0.58;
        if (doc.norm.subtopic === label || doc.norm.subtopic === id) conceptFit = 1;
        else if (doc.norm.topic === label || doc.norm.topic === id) conceptFit = 0.86;
        else if (containsTerm(doc.norm.tags || "", label) || containsTerm(doc.norm.tags || "", id)) conceptFit = 0.82;
        else if (doc.kind === "reference" && containsTerm(doc.norm.subtopic || "", label)) conceptFit = 0.78;
        score += conceptFit;
      }
      return Math.min(1, score);
    }

    function semanticScore(doc, query, includeAnswers) {
      if (!query.concepts.length) return { score: 0, matches: [] };
      let score = 0;
      const matches = [];
      for (const qc of query.concepts) {
        const qConcept = byId[qc.id];
        const directStrength = doc.conceptStrength.get(qc.id);
        if (directStrength != null) {
          const directQueryConcept = query.directConceptIds.has(qc.id);
          const multiplier = directQueryConcept ? weights.conceptDirect : weights.conceptRelated;
          const value = multiplier * Math.min(2.5, qc.strength) * Math.min(2.4, directStrength) / 5;
          score += value;
          if (directQueryConcept) {
            const label = normalize(qConcept.label);
            const conceptId = normalize(qc.id);
            if (doc.norm.subtopic === label || doc.norm.subtopic === conceptId) score += weights.conceptSubtopic;
            if (doc.norm.topic === label || doc.norm.topic === conceptId) score += weights.conceptTopic;
            if (containsTerm(doc.norm.tags || "", label) || containsTerm(doc.norm.tags || "", conceptId)) score += weights.conceptTag;
            if (doc.kind === "reference" && containsTerm(doc.norm.subtopic || "", label)) score += weights.conceptReferenceTitle;
          }
          matches.push({ id: qc.id, label: qConcept.label, score: value, kind: directQueryConcept ? "direct" : "related" });
          continue;
        }
        let relatedId = null;
        for (const candidateId of qConcept.related || []) {
          if (doc.conceptSet.has(candidateId)) { relatedId = candidateId; break; }
        }
        if (!relatedId) {
          for (const candidateId of doc.conceptSet) {
            if ((byId[candidateId]?.related || []).includes(qc.id)) { relatedId = candidateId; break; }
          }
        }
        if (relatedId) {
          const relatedStrength = doc.conceptStrength.get(relatedId) || 1;
          const value = weights.conceptRelated * Math.min(2.2, qc.strength) * Math.min(2.2, relatedStrength) / 6;
          score += value;
          matches.push({ id: relatedId, label: byId[relatedId].label, score: value, kind: "related" });
        }
      }
      if (includeAnswers) score *= 1.08;
      if (doc.kind === "reference") score += weights.reference;
      const deduped = [];
      const seen = new Set();
      for (const m of matches.sort((a, b) => b.score - a.score)) {
        if (seen.has(m.id)) continue;
        seen.add(m.id);
        deduped.push(m);
      }
      return { score: score * weights.semantic / 72, matches: deduped.slice(0, 5) };
    }

    function hasStructuredFilters(options) {
      return ["bank", "topic", "subtopic", "qtype", "difficulty", "family", "scenario", "marks"].some(key => !!options[key]);
    }

    function passesQuestionFilters(q, options) {
      if (options.favOnly && !options.favorites?.has(q.id)) return false;
      if (options.codeOnly && !q.code_answer) return false;
      const filterMap = [
        ["bank", "bank"], ["topic", "topic"], ["subtopic", "subtopic"], ["qtype", "type"],
        ["difficulty", "difficulty"], ["family", "family"], ["scenario", "scenario"], ["marks", "marks"]
      ];
      for (const [optionKey, questionKey] of filterMap) {
        if (options[optionKey] && String(q[questionKey]) !== String(options[optionKey])) return false;
      }
      return true;
    }

    function isEligible(doc, options, includeReferences) {
      if (doc.kind === "reference") return includeReferences;
      return passesQuestionFilters(doc.item, options);
    }

    function addConceptCandidates(candidateIndices, query) {
      for (const qc of query.concepts) {
        const posting = conceptPostings.get(qc.id);
        if (!posting) continue;
        for (const docIndex of posting) candidateIndices.add(docIndex);
      }
    }

    function search(options) {
      const query = getQueryData(options.query || "");
      const mode = options.mode || "hybrid";
      const includeAnswers = !!options.includeAnswers;
      const includeReferences = !!query.norm && !options.favOnly && !options.codeOnly && !options.mockMode && !hasStructuredFilters(options);
      const vectorScores = options.vectorScores instanceof Map ? options.vectorScores : null;

      if (!query.tokens.length && !query.concepts.length) {
        const rows = [];
        for (const doc of questionDocs) {
          if (!passesQuestionFilters(doc.item, options)) continue;
          rows.push({ ...doc.item, _resultType: "question", _score: 1, _lexicalScore: 1, _semanticScore: 0, _vectorScore: 0, _exactMetadataScore: 0, _matchedConcepts: [], _concepts: doc.concepts.slice(0, 9).map(c => byId[c.id]?.label).filter(Boolean) });
        }
        rows.sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
        return { results: rows, concepts: [] };
      }

      const lexicalStates = collectLexicalCandidates(query, includeAnswers);
      const candidateIndices = new Set(lexicalStates.keys());
      if (mode !== "exact") addConceptCandidates(candidateIndices, query);
      if (vectorScores && mode !== "exact") {
        for (const id of vectorScores.keys()) {
          const doc = docById.get(id);
          if (doc) candidateIndices.add(doc.index);
        }
      }

      const out = [];
      for (const docIndex of candidateIndices) {
        const doc = docs[docIndex];
        if (!doc || !isEligible(doc, options, includeReferences)) continue;
        const lexicalState = lexicalStates.get(docIndex) || { score: 0, matched: 0 };
        const rawLex = lexicalScore(doc, query, includeAnswers, mode === "exact" ? "exact" : "hybrid", lexicalState);
        const lex = mode === "semantic" ? 0 : rawLex;
        const lexicalForVector = rawLex;
        const semInfo = mode === "exact" ? { score: 0, matches: [] } : semanticScore(doc, query, includeAnswers);
        let lexicalPart = lex;
        if (mode === "hybrid" && query.concepts.length && query.tokens.length > 1) {
          const directHits = new Set(semInfo.matches.filter(m => m.kind === "direct").map(m => m.id));
          const directCoverage = directHits.size / Math.max(1, query.directConceptIds.size);
          lexicalPart = lex * (0.2 + 0.4 * directCoverage);
        } else if (mode === "hybrid" && query.concepts.length && semInfo.score === 0) {
          lexicalPart = lex * 0.35;
        }
        const vectorScore = vectorScores && mode !== "exact" ? Number(vectorScores.get(doc.id) || 0) : 0;
        const exactScore = exactMetadataScore(doc, query, includeAnswers);
        const score = mode === "semantic" ? semInfo.score + rawLex * 0.12 : mode === "exact" ? rawLex : lexicalPart + semInfo.score;
        if (score <= 0.05 && vectorScore <= 0) continue;
        out.push({
          ...doc.item,
          _resultType: doc.kind,
          _score: score,
          _lexicalScore: lex,
          _lexicalScoreForVector: lexicalForVector,
          _semanticScore: semInfo.score,
          _vectorScore: vectorScore,
          _exactMetadataScore: exactScore,
          _matchedConcepts: semInfo.matches,
          _concepts: doc.concepts.slice(0, 9).map(c => byId[c.id]?.label).filter(Boolean)
        });
      }

      if (vectorScores && mode !== "exact") applyVectorRanking(out, mode);
      out.sort((a, b) => b._score - a._score || Number(b.marks || 0) - Number(a.marks || 0) || String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
      return {
        results: out,
        concepts: query.concepts.slice(0, 10).map(c => ({ id: c.id, label: byId[c.id].label, direct: query.directConceptIds.has(c.id) }))
      };
    }

    function applyVectorRanking(rows, mode) {
      const maxLex = Math.max(1, ...rows.map(r => Number(r._lexicalScoreForVector || r._lexicalScore || 0)));
      const maxConcept = Math.max(1, ...rows.map(r => Number(r._semanticScore || 0)));
      const formula = mode === "semantic"
        ? { vector: 0.68, lexical: 0.05, concept: 0.09, metadata: 0.18 }
        : { vector: 0.45, lexical: 0.35, concept: 0.10, metadata: 0.10 };
      for (const row of rows) {
        const vector = Math.max(0, Math.min(1, Number(row._vectorScore || 0)));
        const lexical = Math.max(0, Math.min(1, Number(row._lexicalScoreForVector || row._lexicalScore || 0) / maxLex));
        const concept = Math.max(0, Math.min(1, Number(row._semanticScore || 0) / maxConcept));
        const metadata = Math.max(0, Math.min(1, Number(row._exactMetadataScore || 0)));
        row._score = 100 * (
          formula.vector * vector +
          formula.lexical * lexical +
          formula.concept * concept +
          formula.metadata * metadata
        );
        row._rankingFormula = formula;
      }
    }

    function vectorEligibleIds(options) {
      const query = getQueryData(options.query || "");
      const includeReferences = !!query.norm && !options.favOnly && !options.codeOnly && !options.mockMode && !hasStructuredFilters(options);
      const ids = [];
      for (const doc of questionDocs) {
        if (passesQuestionFilters(doc.item, options)) ids.push(doc.id);
      }
      if (includeReferences) for (const doc of referenceDocs) ids.push(doc.id);
      return ids;
    }

    function explainResult(result) {
      if (Number(result._vectorScore || 0) > 0) {
        const strength = result._vectorScore >= 0.78 ? "strong" : result._vectorScore >= 0.62 ? "moderate" : "supporting";
        const conceptsText = result._matchedConcepts?.length ? ` · Matched concepts: ${result._matchedConcepts.map(c => c.label).join(" · ")}` : "";
        return `Local semantic similarity: ${strength}${conceptsText}`;
      }
      if (result.referenceType === "past-paper") {
        const conceptsText = result._matchedConcepts?.length ? ` · ${result._matchedConcepts.map(c => c.label).join(" · ")}` : "";
        return `Past-paper/model-answer match${conceptsText}`;
      }
      if (result._matchedConcepts?.length) {
        const prefix = result._semanticScore >= result._lexicalScore ? "Semantic match" : "Matched concepts";
        return `${prefix}: ${result._matchedConcepts.map(c => c.label).join(" · ")}`;
      }
      if (result._lexicalScore > 0) return "Keyword match";
      return "";
    }

    return {
      search,
      vectorEligibleIds,
      explainResult,
      tokenize,
      normalize,
      inspect: () => ({
        questions: questionDocs.length,
        references: referenceDocs.length,
        concepts: concepts.length,
        strategy: "inverted-index",
        vocabulary: basePostings.size
      })
    };
  }

  root.createHybridSearchEngine = createHybridSearchEngine;
  if (typeof module !== "undefined") module.exports = { createHybridSearchEngine };
})(typeof window !== "undefined" ? window : globalThis);