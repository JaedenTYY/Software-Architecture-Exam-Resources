# CSC3209 Coverage Matrix

This bank is deliberately broader than the existing notes. The notes were used as a baseline, then the lecture material and five supplied past-paper cycles were used to expand the question perspectives. The browser combines the 3,888-question original bank with the Advanced Depth and Code Implementation expansions for **4,131 searchable questions**.

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
| Integrated past-paper practice | Q1 pattern selection/trade-offs/QA; Q2 QA + utility tree/notation; Q3 deep pattern analysis; later questions design patterns/views/mappings/documentation | 224 |

The perspective counts above describe generated coverage slices and can overlap where one question intentionally exercises several course concepts. They should not be summed to derive the bank total.

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

## Combined difficulty

| Difficulty | Count |
|---|---:|
| Hard | 1,102 |
| Very Hard | 1,736 |
| Brutal | 1,293 |

## Combined bank totals

- Total questions: **4,131**
- Original bank: **3,888**
- Advanced Depth: **171**
- Code Implementation: **72**
- Past-paper/model-answer searchable reference groups: **21** across **5 exam cycles**
- Past-paper cycles: January 2024, August 2024, January 2025, August 2025, January 2026

## Original generator baseline

The original 3,888-question generator used 32 scenario domains and 14 topic packs. The Advanced Depth and Code Implementation banks are additional expansion layers and are included in the 4,131-question browser total above.

## Design principle

The bank intentionally repeats **concepts** across different domains and question forms, but not merely the same wording. The objective is to make you recognize the invariant architectural reasoning underneath a new scenario.

The recurring reasoning chain is:

**Requirement → concern → pattern/decision → elements & relations → mechanism → quality effect → trade-off → measurable scenario**
