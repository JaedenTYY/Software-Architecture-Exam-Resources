# Past-Paper Blueprint and Exam Grammar

The five supplied exam cycles differ in domain, but their **question grammar is highly stable**. Use this to practise transfer rather than memorizing one scenario.

Exam cycles indexed:
- January 2024
- August 2024
- January 2025
- August 2025
- January 2026

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

Patterns seen across the supplied papers include:
- Service-Oriented Architecture
- Peer-to-Peer
- Pipe-and-Filter
- Model-View-Controller
- Map-Reduce

Therefore the bank applies the same deep-dive grammar to **every architectural pattern in scope**, not only the patterns that happened to appear historically.

## Family Q4 — Design patterns, architecture views and documentation
Typical asks include:
1. Explain a GoF design-pattern category.
2. Name patterns and motivate them with real examples.
3. Select an implementation-level pattern for a scenario (especially notification → Observer).
4. Draw/explain Module, Component-and-Connector or Allocation views.
5. Map elements across views.
6. Explain view-template/documentation contents and notation choices.

### High-value distinction
Architectural patterns shape system structures; GoF design patterns are closer to class/object implementation design. Similar intent (e.g. Publish-Subscribe vs Observer) does not make them the same abstraction level.

## Family Q5 — Additional design-pattern application
The August 2025 paper includes a fifth question, reinforcing that the exam is not permanently constrained to a four-question layout. Treat question numbers as historical grammar, not a guaranteed final-paper template.

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
