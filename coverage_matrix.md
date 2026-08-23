# CSC3209 Coverage Matrix

This bank is deliberately broader than the existing notes. The notes were used as a baseline, then the lecture decks and three supplied past papers were used to expand the question perspectives.

| Lecture / Scope | Core examinable perspectives covered | Questions |
|---|---|---:|
| Lecture 1 — What is Software Architecture? | definition; elements/relations/properties; architectural vs implementation detail; abstraction | 32 |
| Structures & Views | module, component-and-connector, allocation; structure vs view; stakeholder-specific views | 32 |
| Lecture 2 — Why Architecture Matters | quality enablement/inhibition; change impact; communication; constraints; early prediction | 32 |
| Lecture 3 — Contexts of Architecture | technical, project life-cycle, business, professional contexts; Architecture Influence Cycle | 32 |
| Lecture 4 — Architectural Patterns | context/problem/solution; pattern selection; elements/connectors; constraints; QA trade-offs; comparisons; pattern-specific mechanisms | 1848 |
| Lecture 5 — Quality Attributes | availability, interoperability, modifiability, performance, security, testability, usability; runtime/design-time; design decisions | 812 |
| Lecture 6 — Tactics & Patterns | tactic vs pattern; pattern weaknesses repaired by tactics; broker augmentation; quality reasoning | 20 |
| Lecture 7 — QA Scenarios | source, stimulus, environment, artifact, response, response measure; scenario critique/construction | 672 |
| Lecture 8 — Architecture & Requirements | ASRs; QAW; PALM; business goals; Utility Trees; H/M/L business value and architectural impact | 128 |
| Lecture 9 — Designing an Architecture | ADD iterations; decomposition; generate-and-test; ASR-driven design | 72 |
| Lecture 10 — Documentation | informal/semiformal/formal notation; view templates; context; rationale; variability; cross-view mappings | 96 |
| Lecture 11 — Implementation & Testing | architecture-code conformance; frameworks/templates/tools; testing levels/strategies; risk-based testing | 72 |
| Lecture 12 — Architecture Evaluation | ATAM 9 steps; risks/non-risks; risk themes; sensitivity/trade-off points; lightweight evaluation | 72 |
| Lecture 13 — Design Patterns | creational/structural/behavioral catalogues; Factory Method, Singleton, Composite, Facade, Observer, State; architecture vs design level | 416 |
| Integrated past-paper practice | Q1 pattern selection/trade-offs/QA; Q2 QA + utility tree/notation; Q3 deep pattern analysis; Q4 design patterns/views/mappings | 224 |

## Architectural-pattern coverage

| Pattern | Questions directly centered on pattern |
|---|---:|
| Layer | 216 |
| Broker | 192 |
| Model-View-Controller | 172 |
| Pipe-and-Filter | 204 |
| Client-Server | 224 |
| Peer-to-Peer | 204 |
| Service-Oriented Architecture | 204 |
| Publish-Subscribe | 172 |
| Shared-Data | 172 |
| Map-Reduce | 204 |
| Multi-Tier | 204 |

## Question types

| Type | Count |
|---|---:|
| Scenario application | 352 |
| Elements and relations | 352 |
| Quality trade-off | 352 |
| Constraint / failure reasoning | 352 |
| Compare and distinguish | 320 |
| Multi-part exam question | 224 |
| Formal six-part scenario | 224 |
| Scenario critique | 224 |
| Runtime/design-time reasoning | 224 |
| Intent/applicability/participants | 144 |
| Pattern selection under ambiguity | 144 |
| Architecture decision reasoning | 140 |
| Category + examples | 96 |
| Architecture vs implementation | 32 |
| Construct utility tree | 32 |
| Identify ASRs | 32 |
| Apply QAW | 32 |
| Business goals and pedigree | 32 |
| Choose view | 32 |
| Informal vs semiformal vs formal | 32 |
| Document a view | 32 |
| Cross-view mapping | 32 |
| Definition and boundary | 32 |
| Consequences and change | 32 |
| Architecture Influence Cycle | 32 |
| Apply ADD | 24 |
| Critical design reasoning | 24 |
| ASR allocation | 24 |
| Implementation conformance | 24 |
| Architecture-informed testing | 24 |
| Testing reasoning | 24 |
| ATAM steps and outputs | 24 |
| Risk reasoning | 24 |
| ATAM tailoring | 24 |
| Explain relationship | 20 |
| Bridging and upward calls | 12 |
| Variant selection | 12 |
| Discovery, hops and supernodes | 12 |
| Pipeline parallelism | 12 |
| ESB, registry, orchestration | 12 |
| Replication and coupling | 12 |
| Many views and constraints | 12 |
| Partition imbalance | 12 |
| Distinction | 12 |
| Work assignment patterns | 12 |

## Difficulty

| Difficulty | Count |
|---|---:|
| Hard | 1088 |
| Very Hard | 1612 |
| Brutal | 1188 |

## Bank totals

- Total questions: **3,888**
- Unique IDs: **3,888**
- Scenario domains: **32**
- Topic packs: **14**

## Design principle

The bank intentionally repeats **concepts** across different domains and question forms, but not merely the same wording. The objective is to make you recognize the invariant architectural reasoning underneath a new scenario.

The recurring reasoning chain is:

**Requirement → concern → pattern/decision → elements & relations → mechanism → quality effect → trade-off → measurable scenario**
