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
    const generatedConceptIndex = new Map(((root.SEMANTIC_INDEX && root.SEMANTIC_INDEX.documents) || []).map(d => [d.id, d.concepts || []]));

    const questionDocs = (questions || []).map(q => buildQuestionDoc(q));
    const referenceDocs = (references || []).map(r => buildReferenceDoc(r));
    const docs = [...questionDocs, ...referenceDocs];
    const idf = buildIdf(docs);
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
      for (const token of normalize(value).split(/\s+/).filter(Boolean).map(stem)) {
        if (token.length < 2) continue;
        counts.set(token, (counts.get(token) || 0) + 1);
      }
      return counts;
    }

    function buildQuestionDoc(q) {
      const fieldText = {
        id: q.id,
        bank: q.bank,
        topic: q.topic,
        subtopic: q.subtopic,
        type: q.type,
        difficulty: q.difficulty,
        family: q.family,
        scenario: q.scenario,
        tags: (q.tags || []).join(" "),
        prompt: q.prompt,
        answer: [q.answer_outline, q.exam_trap, q.code_answer].filter(Boolean).join(" "),
        source: q.source
      };
      const semanticText = [
        q.topic, q.subtopic, q.type, q.scenario, fieldText.tags, q.prompt,
        q.answer_outline, q.exam_trap, q.source
      ].filter(Boolean).join(" | ");
      const conceptsFound = conceptsFromGeneratedIndex(q, semanticText);
      return {
        kind: "question",
        id: q.id,
        item: q,
        fieldText,
        norm: mapValues(fieldText, normalize),
        counts: mapValues(fieldText, tokenCounts),
        uniqueTokens: new Set(tokenize(Object.values(fieldText).join(" "), { keepStopWords: true })),
        concepts: conceptsFound,
        conceptSet: new Set(conceptsFound.map(c => c.id)),
        semanticText
      };
    }

    function buildReferenceDoc(r) {
      const isPastPaper = r.referenceType === "past-paper";
      const fieldText = {
        id: r.id,
        topic: isPastPaper ? "Past Paper / Model Answer" : "Universal Answer Reference",
        subtopic: r.title,
        type: isPastPaper ? "Past Paper / Model Answer" : "Reference",
        tags: (r.concepts || []).join(" "),
        prompt: r.title,
        answer: r.body,
        source: r.source || "universal_answers.md"
      };
      const semanticText = [r.title, r.body, fieldText.tags, fieldText.topic].join(" | ");
      const conceptsFound = mergeConceptLists(
        (r.concepts || []).map(id => ({ id, strength: 2.8, reason: isPastPaper ? "past-paper tag" : "reference tag" })),
        inferConcepts(semanticText)
      );
      return {
        kind: "reference",
        id: r.id,
        item: r,
        fieldText,
        norm: mapValues(fieldText, normalize),
        counts: mapValues(fieldText, tokenCounts),
        uniqueTokens: new Set(tokenize(Object.values(fieldText).join(" "), { keepStopWords: true })),
        concepts: conceptsFound,
        conceptSet: new Set(conceptsFound.map(c => c.id)),
        semanticText
      };
    }

    function conceptsFromGeneratedIndex(q, semanticText) {
      const indexed = generatedConceptIndex.get(q.id) || [];
      const subtopic = normalize(q.subtopic);
      const topic = normalize(q.topic);
      const tags = new Set((q.tags || []).map(normalize));
      const indexedRows = indexed.map(id => {
        const concept = byId[id];
        const label = normalize(concept?.label);
        let strength = 1.8;
        let reason = "generated index";
        if (label && subtopic === label) { strength = 6.2; reason = "subtopic"; }
        else if (label && topic === label) { strength = 4.2; reason = "topic"; }
        else if (label && (tags.has(label) || tags.has(id))) { strength = 3.3; reason = "tag"; }
        return { id, strength, reason };
      }).filter(c => byId[c.id]);

      // The generated index is a build-time optimization, not the source of truth.
      // Always merge live ontology inference so newly added CSC3209 concepts work
      // immediately even before semantic_index.js is regenerated.
      return mergeConceptLists(indexedRows, inferConcepts(semanticText, q)).slice(0, 18);
    }

    function mapValues(obj, fn) {
      return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
    }

    function buildIdf(items) {
      const df = new Map();
      for (const doc of items) {
        for (const token of doc.uniqueTokens) df.set(token, (df.get(token) || 0) + 1);
      }
      const n = Math.max(1, items.length);
      return token => Math.log(1 + (n - (df.get(token) || 0) + 0.5) / ((df.get(token) || 0) + 0.5));
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
          const aliasScores = entry.terms.map(term => {
            const aliasTokens = tokenize(term);
            if (!aliasTokens.length) return 0;
            const hits = aliasTokens.filter(t => fullTokens.has(t)).length;
            if (!hits) return 0;
            return hits / Math.max(2, aliasTokens.length);
          });
          const best = Math.max(0, ...aliasScores);
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

    function containsTerm(haystack, term) {
      if (boundary.containsTerm) return boundary.containsTerm(haystack, term);
      if (!term) return false;
      const escaped = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      return new RegExp(`(^|[^a-z0-9+#])${escaped}(s|es)?(?=$|[^a-z0-9+#])`).test(normalize(haystack));
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

    function lexicalScore(doc, query, includeAnswers, mode) {
      if (!query.tokens.length) return doc.kind === "question" ? 1 : 0;
      const fieldWeights = {
        id: 18,
        subtopic: 12,
        topic: 8,
        tags: 7,
        prompt: 5.5,
        type: 3,
        scenario: 2.2,
        family: 1.6,
        bank: 1.2,
        answer: includeAnswers || doc.kind === "reference" ? 2.4 : 0.7,
        source: 0.8
      };
      let total = 0;
      let matched = 0;
      for (const token of query.tokens) {
        let tokenScore = 0;
        for (const [field, counts] of Object.entries(doc.counts)) {
          const fw = fieldWeights[field] || 1;
          if (!fw) continue;
          const tf = counts.get(token) || fuzzyTokenCount(token, doc, field);
          if (!tf) continue;
          tokenScore += fw * (1 + Math.log(tf + 1)) * Math.max(0.6, idf(token));
        }
        if (tokenScore > 0) {
          matched += 1;
          total += tokenScore;
        }
      }
      const coverage = matched / Math.max(1, query.tokens.length);
      total *= 0.35 + coverage;
      if (query.norm) {
        if (doc.norm.id === query.norm) total += weights.exactId;
        if (doc.norm.subtopic === query.norm) total += weights.exactSubtopic;
        if (doc.norm.topic === query.norm) total += weights.exactTopic;
        if (query.norm.length >= 3 && containsTerm(doc.norm.prompt, query.norm)) total += weights.exactPhrasePrompt;
        if (query.norm.length >= 3 && containsTerm(doc.norm.tags, query.norm)) total += weights.exactPhraseTags;
        if ((includeAnswers || doc.kind === "reference") && query.norm.length >= 3 && containsTerm(doc.norm.answer, query.norm)) total += weights.exactPhraseAnswer;
      }
      if (mode === "exact") return total * weights.lexical;
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
      if ((includeAnswers || doc.kind === "reference") && query.norm.length >= 3 && containsTerm(doc.norm.answer, query.norm)) score += 0.32;
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

    function fuzzyTokenCount(token, doc, field) {
      if (token.length < 5 || field === "answer" || field === "source") return 0;
      let best = 0;
      for (const candidate of doc.counts[field].keys()) {
        if (Math.abs(candidate.length - token.length) > 1) continue;
        if (editDistanceAtMostOne(token, candidate)) {
          best = Math.max(best, 0.35);
          break;
        }
      }
      return best;
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

    function semanticScore(doc, query, includeAnswers) {
      if (!query.concepts.length) return { score: 0, matches: [] };
      let score = 0;
      const matches = [];
      for (const qc of query.concepts) {
        const qConcept = byId[qc.id];
        const direct = doc.concepts.find(c => c.id === qc.id);
        if (direct) {
          const directQueryConcept = query.directConceptIds.has(qc.id);
          const multiplier = directQueryConcept ? weights.conceptDirect : weights.conceptRelated;
          const value = multiplier * Math.min(2.5, qc.strength) * Math.min(2.4, direct.strength) / 5;
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
        const relatedHit = doc.concepts.find(c => (qConcept.related || []).includes(c.id) || (byId[c.id]?.related || []).includes(qc.id));
        if (relatedHit) {
          const value = weights.conceptRelated * Math.min(2.2, qc.strength) * Math.min(2.2, relatedHit.strength) / 6;
          score += value;
          matches.push({ id: relatedHit.id, label: byId[relatedHit.id].label, score: value, kind: "related" });
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

    function search(options) {
      const query = getQueryData(options.query || "");
      const mode = options.mode || "hybrid";
      const includeAnswers = !!options.includeAnswers;
      const includeReferences = !!query.norm && !options.favOnly && !options.codeOnly && !options.mockMode;
      const activeDocs = includeReferences ? docs : questionDocs;
      const vectorScores = options.vectorScores instanceof Map ? options.vectorScores : null;
      const out = [];
      for (const doc of activeDocs) {
        if (doc.kind === "question" && !passesQuestionFilters(doc.item, options)) continue;
        const lex = mode === "semantic" ? 0 : lexicalScore(doc, query, includeAnswers, mode);
        const lexicalForVector = mode === "semantic" ? lexicalScore(doc, query, includeAnswers, "hybrid") : lex;
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
        const score = mode === "semantic" ? semInfo.score + lex * 0.12 : mode === "exact" ? lex : lexicalPart + semInfo.score;
        if (!query.tokens.length && !query.concepts.length && doc.kind === "reference") continue;
        if (!query.tokens.length || score > 0.05 || vectorScore > 0) {
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
      }
      if (vectorScores && mode !== "exact") applyVectorRanking(out, mode);
      out.sort((a, b) => {
        if (!query.tokens.length && !query.concepts.length) return String(a.id).localeCompare(String(b.id), undefined, { numeric: true });
        return b._score - a._score || Number(b.marks || 0) - Number(a.marks || 0) || String(a.id).localeCompare(String(b.id), undefined, { numeric: true });
      });
      return { results: out, concepts: query.concepts.slice(0, 10).map(c => ({ id: c.id, label: byId[c.id].label, direct: query.directConceptIds.has(c.id) })) };
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
      const includeReferences = !!query.norm && !options.favOnly && !options.codeOnly && !options.mockMode;
      const activeDocs = includeReferences ? docs : questionDocs;
      const ids = [];
      for (const doc of activeDocs) {
        if (doc.kind === "question" && !passesQuestionFilters(doc.item, options)) continue;
        ids.push(doc.id);
      }
      return ids;
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
      inspect: () => ({ questions: questionDocs.length, references: referenceDocs.length, concepts: concepts.length })
    };
  }

  root.createHybridSearchEngine = createHybridSearchEngine;
  if (typeof module !== "undefined") module.exports = { createHybridSearchEngine };
})(typeof window !== "undefined" ? window : globalThis);
