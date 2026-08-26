# Architecture and Requirements — CSC3209 Question Pack

Questions: **128**

## Q02561 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for University Student Portal**

Utility
- **Availability → Fault recovery:** During normal operation, the primary University Student Portal application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The University Student Portal completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The University Student Portal rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the University Student Portal stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02562 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** University Student Portal  

The University Student Portal backlog contains: (i) rename a menu label, (ii) A student must access centrally managed timetable and academic records from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Student Portal must integrate with online banking provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02563 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** University Student Portal  

The University Student Portal has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02564 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Management of the University Student Portal gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02565 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Online Trading Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Online Trading Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Online Trading Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Online Trading Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Online Trading Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02566 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

The Online Trading Platform backlog contains: (i) rename a menu label, (ii) A trader must access centrally managed portfolio and real-time market data from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Trading Platform must integrate with payment/banking service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02567 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

The Online Trading Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02568 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Management of the Online Trading Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02569 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Electricity Utility App**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Electricity Utility App application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Electricity Utility App completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Electricity Utility App rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Electricity Utility App stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02570 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

The Electricity Utility App backlog contains: (i) rename a menu label, (ii) A utility customer must access centrally managed electricity usage and bill history from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Utility Application must integrate with CIMB/credit-card payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02571 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

The Electricity Utility App has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02572 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Management of the Electricity Utility App gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02573 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Digital Game Store**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Digital Game Store application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Digital Game Store completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Digital Game Store rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Digital Game Store stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02574 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

The Digital Game Store backlog contains: (i) rename a menu label, (ii) A gamer must access centrally managed game progress and achievements from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Game Distribution Platform must integrate with publisher/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02575 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

The Digital Game Store has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02576 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Management of the Digital Game Store gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02577 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Flight Booking System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Flight Booking System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Flight Booking System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Flight Booking System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Flight Booking System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02578 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

The Flight Booking System backlog contains: (i) rename a menu label, (ii) A passenger must access centrally managed booking and boarding-pass information from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Flight Booking System must integrate with airline/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02579 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

The Flight Booking System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02580 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Management of the Flight Booking System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02581 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for E-Commerce Marketplace**

Utility
- **Availability → Fault recovery:** During normal operation, the primary E-Commerce Marketplace application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The E-Commerce Marketplace completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The E-Commerce Marketplace rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the E-Commerce Marketplace stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02582 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace backlog contains: (i) rename a menu label, (ii) A shopper must access centrally managed orders, products and carts from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Marketplace must integrate with payment and courier services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02583 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02584 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Management of the E-Commerce Marketplace gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02585 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Digital Banking App**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Digital Banking App application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Digital Banking App completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Digital Banking App rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Digital Banking App stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02586 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

The Digital Banking App backlog contains: (i) rename a menu label, (ii) A bank customer must access centrally managed accounts and transaction history from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Banking Application must integrate with interbank transfer network and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02587 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

The Digital Banking App has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02588 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Management of the Digital Banking App gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02589 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Food Delivery Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Food Delivery Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Food Delivery Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Food Delivery Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Food Delivery Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02590 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform backlog contains: (i) rename a menu label, (ii) A customer must access centrally managed orders and delivery status from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Food Delivery Platform must integrate with restaurant and payment services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02591 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02592 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Management of the Food Delivery Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02593 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Hospital Information System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Hospital Information System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Hospital Information System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Hospital Information System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Hospital Information System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02594 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

The Hospital Information System backlog contains: (i) rename a menu label, (ii) A clinician must access centrally managed patient records and observations from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Hospital Information System must integrate with external laboratory system and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02595 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

The Hospital Information System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02596 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Management of the Hospital Information System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02597 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Smart Traffic Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Smart Traffic Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Smart Traffic Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Smart Traffic Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Smart Traffic Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02598 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform backlog contains: (i) rename a menu label, (ii) A traffic operator must access centrally managed road and signal status from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Traffic Management Platform must integrate with mapping/weather service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02599 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02600 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Management of the Smart Traffic Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02601 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Ride-Hailing Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Ride-Hailing Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Ride-Hailing Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Ride-Hailing Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Ride-Hailing Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02602 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform backlog contains: (i) rename a menu label, (ii) A rider must access centrally managed trip and driver information from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Ride-Hailing Platform must integrate with mapping/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02603 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02604 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Management of the Ride-Hailing Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02605 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Video Streaming Service**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Video Streaming Service application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Video Streaming Service completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Video Streaming Service rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Video Streaming Service stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02606 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

The Video Streaming Service backlog contains: (i) rename a menu label, (ii) A viewer must access centrally managed watch history and catalog from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Streaming Platform must integrate with content/CDN service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02607 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

The Video Streaming Service has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02608 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Management of the Video Streaming Service gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02609 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Music Streaming Service**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Music Streaming Service application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Music Streaming Service completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Music Streaming Service rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Music Streaming Service stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02610 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

The Music Streaming Service backlog contains: (i) rename a menu label, (ii) A listener must access centrally managed playlists and listening history from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Music Streaming Platform must integrate with music-rights/catalog service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02611 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

The Music Streaming Service has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02612 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Management of the Music Streaming Service gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02613 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Cloud File Storage**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Cloud File Storage application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Cloud File Storage completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Cloud File Storage rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Cloud File Storage stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02614 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

The Cloud File Storage backlog contains: (i) rename a menu label, (ii) A user must access centrally managed files and sharing metadata from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Cloud Storage Platform must integrate with identity provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02615 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

The Cloud File Storage has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02616 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Management of the Cloud File Storage gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02617 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Social Network  

For the Social Network, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Social Network**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Social Network application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Social Network completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Social Network rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Social Network stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02618 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Social Network  

The Social Network backlog contains: (i) rename a menu label, (ii) A member must access centrally managed profiles and posts from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Social Network must integrate with identity/media service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02619 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Social Network  

The Social Network has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02620 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Social Network  

Management of the Social Network gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02621 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Smart Home Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Smart Home Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Smart Home Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Smart Home Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Smart Home Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02622 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

The Smart Home Platform backlog contains: (i) rename a menu label, (ii) A homeowner must access centrally managed device state and automation rules from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Smart Home Platform must integrate with weather/voice-assistant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02623 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

The Smart Home Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02624 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Management of the Smart Home Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02625 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Logistics Tracking System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Logistics Tracking System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Logistics Tracking System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Logistics Tracking System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Logistics Tracking System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02626 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System backlog contains: (i) rename a menu label, (ii) A operations user must access centrally managed shipment status and routes from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Logistics Platform must integrate with carrier/map service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02627 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02628 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Management of the Logistics Tracking System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02629 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Insurance Claims System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Insurance Claims System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Insurance Claims System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Insurance Claims System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Insurance Claims System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02630 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

The Insurance Claims System backlog contains: (i) rename a menu label, (ii) A claims officer must access centrally managed policies and claims from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Claims Platform must integrate with bank/identity verification service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02631 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

The Insurance Claims System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02632 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Management of the Insurance Claims System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02633 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Hotel Booking Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Hotel Booking Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Hotel Booking Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Hotel Booking Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Hotel Booking Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02634 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform backlog contains: (i) rename a menu label, (ii) A guest must access centrally managed reservations and room inventory from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Hotel Booking Platform must integrate with hotel/payment provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02635 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02636 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Management of the Hotel Booking Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02637 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Online Learning Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Online Learning Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Online Learning Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Online Learning Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Online Learning Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02638 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

The Online Learning Platform backlog contains: (i) rename a menu label, (ii) A learner must access centrally managed courses and progress from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Learning Platform must integrate with video/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02639 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

The Online Learning Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02640 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Management of the Online Learning Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02641 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Cybersecurity Monitoring Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Cybersecurity Monitoring Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Cybersecurity Monitoring Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Cybersecurity Monitoring Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Cybersecurity Monitoring Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02642 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform backlog contains: (i) rename a menu label, (ii) A security analyst must access centrally managed alerts and security events from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Security Monitoring Platform must integrate with threat-intelligence service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02643 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02644 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Management of the Cybersecurity Monitoring Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02645 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Warehouse Management System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Warehouse Management System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Warehouse Management System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Warehouse Management System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Warehouse Management System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02646 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

The Warehouse Management System backlog contains: (i) rename a menu label, (ii) A warehouse operator must access centrally managed inventory and order status from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Warehouse Platform must integrate with supplier/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02647 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

The Warehouse Management System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02648 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Management of the Warehouse Management System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02649 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Payroll and HR System**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Payroll and HR System application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Payroll and HR System completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Payroll and HR System rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Payroll and HR System stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02650 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

The Payroll and HR System backlog contains: (i) rename a menu label, (ii) A HR officer must access centrally managed employee and payroll records from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The HR Platform must integrate with bank/tax service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02651 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

The Payroll and HR System has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02652 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Management of the Payroll and HR System gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02653 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Telecommunications Billing**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Telecommunications Billing application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Telecommunications Billing completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Telecommunications Billing rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Telecommunications Billing stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02654 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing backlog contains: (i) rename a menu label, (ii) A subscriber must access centrally managed usage and invoices from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Telecom Billing Platform must integrate with payment/network service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02655 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02656 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Management of the Telecommunications Billing gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02657 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Digital Library**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Digital Library application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Digital Library completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Digital Library rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Digital Library stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02658 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Digital Library  

The Digital Library backlog contains: (i) rename a menu label, (ii) A reader must access centrally managed catalog and borrowing history from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Digital Library must integrate with publisher/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02659 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Digital Library  

The Digital Library has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02660 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Digital Library  

Management of the Digital Library gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02661 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Medical Imaging Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Medical Imaging Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Medical Imaging Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Medical Imaging Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Medical Imaging Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02662 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

The Medical Imaging Platform backlog contains: (i) rename a menu label, (ii) A radiologist must access centrally managed medical images and reports from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Imaging Platform must integrate with hospital/PACS service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02663 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

The Medical Imaging Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02664 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

Management of the Medical Imaging Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02665 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Manufacturing Monitoring**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Manufacturing Monitoring application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Manufacturing Monitoring completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Manufacturing Monitoring rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Manufacturing Monitoring stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02666 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

The Manufacturing Monitoring backlog contains: (i) rename a menu label, (ii) A plant engineer must access centrally managed machine status and production data from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Manufacturing Monitoring Platform must integrate with maintenance/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02667 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

The Manufacturing Monitoring has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02668 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

Management of the Manufacturing Monitoring gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02669 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Government Citizen Portal**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Government Citizen Portal application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Government Citizen Portal completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Government Citizen Portal rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Government Citizen Portal stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02670 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

The Government Citizen Portal backlog contains: (i) rename a menu label, (ii) A citizen must access centrally managed applications and government records from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Citizen Services Portal must integrate with national identity/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02671 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

The Government Citizen Portal has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02672 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

Management of the Government Citizen Portal gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02673 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Digital Wallet**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Digital Wallet application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Digital Wallet completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Digital Wallet rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Digital Wallet stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02674 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

The Digital Wallet backlog contains: (i) rename a menu label, (ii) A wallet user must access centrally managed balance and payments from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Digital Wallet must integrate with bank/merchant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02675 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

The Digital Wallet has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02676 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

Management of the Digital Wallet gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02677 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Event Ticketing Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Event Ticketing Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Event Ticketing Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Event Ticketing Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Event Ticketing Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02678 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

The Event Ticketing Platform backlog contains: (i) rename a menu label, (ii) A attendee must access centrally managed tickets and seat inventory from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Ticketing Platform must integrate with payment/venue service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02679 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

The Event Ticketing Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02680 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

Management of the Event Ticketing Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02681 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Online Auction Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Online Auction Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Online Auction Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Online Auction Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Online Auction Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02682 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

The Online Auction Platform backlog contains: (i) rename a menu label, (ii) A bidder must access centrally managed auctions and bids from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Auction Platform must integrate with payment/shipping service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02683 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

The Online Auction Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02684 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

Management of the Online Auction Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02685 — Utility Tree (Very Hard, 5 marks)

**Type:** Construct utility tree  
**Exam family:** Past Paper Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a utility tree containing at least four quality attributes, at least one refinement under each, and one concrete ASR scenario per refinement. Rate each leaf using **[Business Value, Architectural Impact]** with H/M/L and explain which leaf should drive architecture first.

<details><summary>Answer framework / marking outline</summary>

**Example answer for Supply Chain Platform**

Utility
- **Availability → Fault recovery:** During normal operation, the primary Supply Chain Platform application instance fails. The platform detects the fault, transfers service to a healthy instance and restores access within 5 seconds with no more than 1 failed request. **[H, H]**
- **Performance → Peak-load response:** During the busiest period, 500 concurrent users submit core requests. The Supply Chain Platform completes at least 95% within 2 seconds while sustaining 500 requests per second. **[H, H]**
- **Security → Access control:** During normal operation, an unauthenticated actor requests a protected record. The Supply Chain Platform rejects the request within 1 second, exposes no protected fields and creates an audit record. **[H, H]**
- **Modifiability → Localized business-rule change:** During development, the product owner requests a new validation rule. One developer implements and tests it within 2 working days while changing no more than 2 modules. **[M, H]**

**First architectural driver:** start with the Availability, Performance and Security leaves because each is **[H, H]**. If one leaf must be selected, choose Availability fault recovery first: it requires early structural decisions such as redundancy, health monitoring, failover and state recovery that are expensive to retrofit. The H/M/L ratings are an example and should be confirmed with the Supply Chain Platform stakeholders.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02686 — ASR (Brutal, 5 marks)

**Type:** Identify ASRs  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

The Supply Chain Platform backlog contains: (i) rename a menu label, (ii) A supply planner must access centrally managed inventory, suppliers and orders from multiple devices over a network and receive the same authoritative information regardless of device., (iii) The Supply Chain Platform must integrate with supplier/logistics service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently., and (iv) change an icon. Identify which are most likely architecturally significant requirements and defend the decision using both characteristics of an ASR.

<details><summary>Answer framework / marking outline</summary>

An ASR has **profound architectural impact** and **high business/mission value**. (ii) and (iii) are strong candidates because they can alter major structure/interaction/integration decisions. Cosmetic changes are usually local unless unusual business/safety context elevates them. ASR status is contextual.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02687 — QAW (Brutal, 8 marks)

**Type:** Apply QAW  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

The Supply Chain Platform has many stakeholders but weakly specified quality requirements and the architecture is not final. Explain why a **Quality Attribute Workshop (QAW)** is suitable. Give the eight steps in order and state the useful architectural outputs.

<details><summary>Answer framework / marking outline</summary>

QAW is stakeholder-focused and generates/prioritizes/refines system-level QA scenarios before architecture is completed. Steps: 1 presentation/introductions; 2 business/mission presentation; 3 architectural plan presentation; 4 identify architectural drivers; 5 scenario brainstorming; 6 consolidate; 7 prioritize; 8 refine top scenarios into six-part form. Outputs: clarified drivers and prioritized/refined QA scenarios suitable for utility-tree capture.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>

## Q02688 — PALM (Brutal, 8 marks)

**Type:** Business goals and pedigree  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

Management of the Supply Chain Platform gives a demanding quantitative quality requirement but nobody can explain why the number was chosen. Explain how **PALM** could help, list its seven steps, and show how pedigree/business-goal reasoning could lead to keeping, changing or relaxing the requirement.

<details><summary>Answer framework / marking outline</summary>

PALM elicits/document business goals and establishes pedigree for QA drivers. Steps: 1 PALM overview; 2 business drivers; 3 architecture drivers; 4 business-goal elicitation/consolidation/prioritization; 5 identify potential QAs from goals; 6 assign pedigree to existing QA drivers and investigate quantitative sources; 7 conclusion/next steps. A justified number is defended; an arbitrary one may be renegotiated.



**Grounding:** Lecture8_Architecture and Requirements (1).pdf

</details>
