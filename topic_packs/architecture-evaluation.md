# Architecture Evaluation — CSC3209 Question Pack

Questions: **72**

## Q03121 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** University Student Portal  

The University Student Portal is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **University Student Portal** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03122 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

During ATAM for the University Student Portal, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **University Student Portal** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03123 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** University Student Portal  

The University Student Portal is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **University Student Portal**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the University Student Portal becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03124 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

The Online Trading Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Online Trading Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03125 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

During ATAM for the Online Trading Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Online Trading Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03126 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

The Online Trading Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Online Trading Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Online Trading Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03127 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

The Electricity Utility App is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Electricity Utility App** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03128 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

During ATAM for the Electricity Utility App, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Electricity Utility App** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03129 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

The Electricity Utility App is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Electricity Utility App**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Electricity Utility App becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03130 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

The Digital Game Store is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Digital Game Store** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03131 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

During ATAM for the Digital Game Store, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Digital Game Store** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03132 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

The Digital Game Store is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Digital Game Store**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Digital Game Store becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03133 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

The Flight Booking System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Flight Booking System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03134 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

During ATAM for the Flight Booking System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Flight Booking System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03135 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

The Flight Booking System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Flight Booking System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Flight Booking System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03136 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **E-Commerce Marketplace** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03137 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

During ATAM for the E-Commerce Marketplace, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **E-Commerce Marketplace** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03138 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **E-Commerce Marketplace**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the E-Commerce Marketplace becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03139 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

The Digital Banking App is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Digital Banking App** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03140 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

During ATAM for the Digital Banking App, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Digital Banking App** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03141 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

The Digital Banking App is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Digital Banking App**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Digital Banking App becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03142 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Food Delivery Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03143 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

During ATAM for the Food Delivery Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Food Delivery Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03144 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Food Delivery Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Food Delivery Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03145 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

The Hospital Information System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Hospital Information System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03146 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

During ATAM for the Hospital Information System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Hospital Information System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03147 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

The Hospital Information System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Hospital Information System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Hospital Information System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03148 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Smart Traffic Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03149 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

During ATAM for the Smart Traffic Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Smart Traffic Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03150 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Smart Traffic Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Smart Traffic Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03151 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Ride-Hailing Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03152 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

During ATAM for the Ride-Hailing Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Ride-Hailing Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03153 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Ride-Hailing Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Ride-Hailing Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03154 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

The Video Streaming Service is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Video Streaming Service** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03155 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

During ATAM for the Video Streaming Service, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Video Streaming Service** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03156 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

The Video Streaming Service is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Video Streaming Service**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Video Streaming Service becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03157 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

The Music Streaming Service is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Music Streaming Service** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03158 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

During ATAM for the Music Streaming Service, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Music Streaming Service** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03159 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

The Music Streaming Service is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Music Streaming Service**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Music Streaming Service becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03160 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

The Cloud File Storage is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Cloud File Storage** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03161 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

During ATAM for the Cloud File Storage, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Cloud File Storage** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03162 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

The Cloud File Storage is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Cloud File Storage**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Cloud File Storage becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03163 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Social Network  

The Social Network is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Social Network** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03164 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

During ATAM for the Social Network, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Social Network** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03165 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Social Network  

The Social Network is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Social Network**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Social Network becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03166 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

The Smart Home Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Smart Home Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03167 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

During ATAM for the Smart Home Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Smart Home Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03168 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

The Smart Home Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Smart Home Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Smart Home Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03169 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Logistics Tracking System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03170 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

During ATAM for the Logistics Tracking System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Logistics Tracking System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03171 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Logistics Tracking System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Logistics Tracking System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03172 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

The Insurance Claims System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Insurance Claims System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03173 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

During ATAM for the Insurance Claims System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Insurance Claims System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03174 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

The Insurance Claims System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Insurance Claims System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Insurance Claims System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03175 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Hotel Booking Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03176 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

During ATAM for the Hotel Booking Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Hotel Booking Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03177 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Hotel Booking Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Hotel Booking Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03178 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

The Online Learning Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Online Learning Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03179 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

During ATAM for the Online Learning Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Online Learning Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03180 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

The Online Learning Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Online Learning Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Online Learning Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03181 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Cybersecurity Monitoring Platform** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03182 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

During ATAM for the Cybersecurity Monitoring Platform, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Cybersecurity Monitoring Platform** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03183 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Cybersecurity Monitoring Platform**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Cybersecurity Monitoring Platform becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03184 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

The Warehouse Management System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Warehouse Management System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03185 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

During ATAM for the Warehouse Management System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Warehouse Management System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03186 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

The Warehouse Management System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Warehouse Management System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Warehouse Management System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03187 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

The Payroll and HR System is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Payroll and HR System** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03188 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

During ATAM for the Payroll and HR System, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Payroll and HR System** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03189 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

The Payroll and HR System is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Payroll and HR System**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Payroll and HR System becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03190 — ATAM (Brutal, 10 marks)

**Type:** ATAM steps and outputs  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing is enterprise-critical and its architecture must be evaluated before construction. Explain why **ATAM** is appropriate, list its nine steps in order, identify at least five tangible outputs, and distinguish a risk, non-risk, sensitivity point and trade-off point.

<details><summary>Answer framework / marking outline</summary>

ATAM is appropriate before constructing the enterprise-critical **Telecommunications Billing** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.

**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.

**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.

**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03191 — ATAM scenario analysis (Brutal, 6 marks)

**Type:** Risk reasoning  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

During ATAM for the Telecommunications Billing, stakeholders introduce a high-priority scenario that the architect never considered. Explain why this discovery may itself be a project risk and how ATAM steps 7-9 should respond.

<details><summary>Answer framework / marking outline</summary>

The new high-priority **Telecommunications Billing** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>

## Q03192 — Lightweight evaluation (Very Hard, 5 marks)

**Type:** ATAM tailoring  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing is a smaller, lower-risk project with limited time. Compare full ATAM with a lightweight architecture evaluation. What is gained and lost by tailoring the process?

<details><summary>Answer framework / marking outline</summary>

For the smaller, lower-risk **Telecommunications Billing**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the Telecommunications Billing becomes mission critical or architectural failure becomes expensive.



**Grounding:** Lecture12_ArchitectureEvaluation.pdf

</details>
