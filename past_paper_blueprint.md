# Past-Paper Blueprint and Exam Grammar

The three supplied papers differ in domain, but their **question grammar is highly stable**. Use this to practise transfer rather than memorizing one scenario.

## Family Q1 — Pattern selection under requirements
Typical shape:
1. Three functional/quality-driven requirements.
2. Select one suitable architectural pattern per requirement.
3. Justify with pattern-specific elements/relations/mechanism.
4. State advantage / enhanced QA.
5. State limitation / degraded QA.
6. Construct or reason about a formal QA scenario.
7. Newer variation: identify which listed qualities are observable at runtime.

### How to train
For every requirement, force yourself to write:
**clue → problem → candidate patterns → decisive distinction → selected pattern → enhanced QA → threatened QA**.

## Family Q2 — Quality requirements and prioritization
Typical shape:
1. Four QA requirements or scenarios for one/more stakeholder groups.
2. Informal + formal six-part specifications.
3. Utility Tree.
4. Business Value / Architectural Impact prioritization.
5. Sometimes select/justify informal, semiformal or formal architectural notation.

### How to train
Do not reuse the same response measure for every quality. Make each response measurable and scenario-specific.

## Family Q3 — Deep architectural-pattern analysis
The named pattern changes between papers. Typical asks:
1. Invent a concrete business-system benefit/scenario.
2. Identify pattern elements and connectors in that scenario.
3. Explain a pattern-specific mechanism.
4. Explain one enhanced quality.
5. Explain a different threatened quality.

Patterns seen in supplied papers:
- Service-Oriented Architecture
- Peer-to-Peer
- Pipe-and-Filter

Therefore the bank applies the same deep-dive grammar to **every architectural pattern in scope**, not only those three.

## Family Q4 — Implementation-level design patterns and/or views
Typical asks:
1. Explain a GoF design-pattern category.
2. Name patterns and motivate them with real examples.
3. Select an implementation-level pattern for a scenario (especially notification → Observer).
4. Another variation: draw/explain Client-Server and Layer views, then map elements between the two.

### High-value distinction
Architectural patterns shape system structures; GoF design patterns are closer to class/object implementation design. Similar intent (e.g. Publish-Subscribe vs Observer) does not make them the same abstraction level.

## Tough variants in this bank
The generated bank intentionally adds:
- plausible-but-wrong pattern choices;
- single-point-of-failure counterexamples;
- conflicting quality attributes;
- pattern combinations;
- runtime vs design-time traps;
- strict layering vs bridging;
- P2P hops/supernodes;
- Pipe-and-Filter pipeline parallelism;
- SOA registry/ESB/orchestration;
- Shared-Data schema coupling/replication;
- Map-Reduce skew and framework overhead;
- Multi-Tier vs Layer;
- ATAM sensitivity/trade-off points;
- ADD decisions driven by competing ASRs;
- architecture/implementation conformance and risk-based testing.

