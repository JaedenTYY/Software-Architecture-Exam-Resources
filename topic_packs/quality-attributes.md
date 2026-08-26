# Quality Attributes — CSC3209 Question Pack

Questions: **672**

## Q01889 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01890 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Availability requirement for the University Student Portal: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01891 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Availability** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for University Student Portal:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01892 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01893 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Availability requirement for the Online Trading Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01894 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Availability** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Online Trading Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01895 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01896 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Availability requirement for the Electricity Utility App: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01897 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Availability** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Electricity Utility App:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01898 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01899 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Availability requirement for the Digital Game Store: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01900 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Availability** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Digital Game Store:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01901 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01902 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Availability requirement for the Flight Booking System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01903 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Availability** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Flight Booking System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01904 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01905 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Availability requirement for the E-Commerce Marketplace: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01906 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Availability** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for E-Commerce Marketplace:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01907 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01908 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Availability requirement for the Digital Banking App: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01909 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Availability** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Digital Banking App:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01910 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01911 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Availability requirement for the Food Delivery Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01912 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Availability** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Food Delivery Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01913 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01914 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Availability requirement for the Hospital Information System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01915 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Availability** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Hospital Information System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01916 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01917 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Availability requirement for the Smart Traffic Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01918 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Availability** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Smart Traffic Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01919 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01920 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Availability requirement for the Ride-Hailing Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01921 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Availability** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Ride-Hailing Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01922 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01923 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Availability requirement for the Video Streaming Service: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01924 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Availability** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Video Streaming Service:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01925 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01926 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Availability requirement for the Music Streaming Service: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01927 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Availability** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Music Streaming Service:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01928 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01929 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Availability requirement for the Cloud File Storage: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01930 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Availability** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Cloud File Storage:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01931 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01932 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Availability requirement for the Social Network: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01933 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Availability** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Social Network:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01934 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01935 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Availability requirement for the Smart Home Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01936 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Availability** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Smart Home Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01937 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01938 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Availability requirement for the Logistics Tracking System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01939 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Availability** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Logistics Tracking System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01940 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01941 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Availability requirement for the Insurance Claims System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01942 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Availability** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Insurance Claims System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01943 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01944 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Availability requirement for the Hotel Booking Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01945 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Availability** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Hotel Booking Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01946 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01947 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Availability requirement for the Online Learning Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01948 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Availability** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Online Learning Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01949 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01950 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Availability requirement for the Cybersecurity Monitoring Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01951 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Availability** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Cybersecurity Monitoring Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01952 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01953 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Availability requirement for the Warehouse Management System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01954 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Availability** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Warehouse Management System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01955 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01956 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Availability requirement for the Payroll and HR System: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01957 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Availability** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Payroll and HR System:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01958 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01959 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Availability requirement for the Telecommunications Billing: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01960 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Availability** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Telecommunications Billing:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01961 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01962 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Availability requirement for the Digital Library: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01963 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Availability** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Digital Library:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01964 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01965 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Availability requirement for the Medical Imaging Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01966 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Availability** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Medical Imaging Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01967 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01968 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Availability requirement for the Manufacturing Monitoring: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01969 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Availability** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Manufacturing Monitoring:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01970 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01971 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Availability requirement for the Government Citizen Portal: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01972 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Availability** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Government Citizen Portal:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01973 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01974 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Availability requirement for the Digital Wallet: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01975 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Availability** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Digital Wallet:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01976 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01977 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Availability requirement for the Event Ticketing Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01978 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Availability** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Event Ticketing Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01979 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01980 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Availability requirement for the Online Auction Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01981 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Availability** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Online Auction Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01982 — Availability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Availability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Availability** - readiness to provide service and recovery from faults.
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01983 — Availability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Availability requirement for the Supply Chain Platform: 'The system should have very good availability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: a failed application-server process.
Stimulus: the process crashes and stops responding to health checks.
Environment: normal operation while users have active sessions.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must detect the failure, remove the failed instance from service, fail over active requests and restore normal operation.
Response Measure: service is restored within 5 seconds with no more than 1 failed request.

The replacement captures **Availability** because it tests readiness to provide service and recovery from faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01984 — Availability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Availability** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Availability is **runtime-observable**. It concerns readiness to provide service and recovery from faults.

**Worked observation for Supply Chain Platform:** inject the process failure while users send requests, then measure failed requests and recovery time. The acceptance criterion is that service is restored within 5 seconds with no more than 1 failed request. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01985 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01986 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Interoperability requirement for the University Student Portal: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01987 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Interoperability** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for University Student Portal:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01988 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01989 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Interoperability requirement for the Online Trading Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01990 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Interoperability** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Online Trading Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01991 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01992 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Interoperability requirement for the Electricity Utility App: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01993 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Interoperability** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Electricity Utility App:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01994 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01995 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Interoperability requirement for the Digital Game Store: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01996 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Interoperability** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Digital Game Store:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01997 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01998 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Interoperability requirement for the Flight Booking System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q01999 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Interoperability** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Flight Booking System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02000 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02001 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Interoperability requirement for the E-Commerce Marketplace: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02002 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Interoperability** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for E-Commerce Marketplace:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02003 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02004 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Interoperability requirement for the Digital Banking App: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02005 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Interoperability** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Digital Banking App:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02006 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02007 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Interoperability requirement for the Food Delivery Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02008 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Interoperability** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Food Delivery Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02009 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02010 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Interoperability requirement for the Hospital Information System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02011 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Interoperability** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Hospital Information System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02012 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02013 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Interoperability requirement for the Smart Traffic Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02014 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Interoperability** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Smart Traffic Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02015 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02016 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Interoperability requirement for the Ride-Hailing Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02017 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Interoperability** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Ride-Hailing Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02018 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02019 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Interoperability requirement for the Video Streaming Service: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02020 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Interoperability** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Video Streaming Service:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02021 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02022 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Interoperability requirement for the Music Streaming Service: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02023 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Interoperability** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Music Streaming Service:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02024 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02025 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Interoperability requirement for the Cloud File Storage: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02026 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Interoperability** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Cloud File Storage:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02027 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02028 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Interoperability requirement for the Social Network: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02029 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Interoperability** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Social Network:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02030 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02031 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Interoperability requirement for the Smart Home Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02032 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Interoperability** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Smart Home Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02033 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02034 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Interoperability requirement for the Logistics Tracking System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02035 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Interoperability** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Logistics Tracking System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02036 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02037 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Interoperability requirement for the Insurance Claims System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02038 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Interoperability** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Insurance Claims System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02039 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02040 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Interoperability requirement for the Hotel Booking Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02041 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Interoperability** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Hotel Booking Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02042 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02043 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Interoperability requirement for the Online Learning Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02044 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Interoperability** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Online Learning Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02045 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02046 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Interoperability requirement for the Cybersecurity Monitoring Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02047 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Interoperability** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Cybersecurity Monitoring Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02048 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02049 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Interoperability requirement for the Warehouse Management System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02050 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Interoperability** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Warehouse Management System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02051 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02052 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Interoperability requirement for the Payroll and HR System: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02053 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Interoperability** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Payroll and HR System:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02054 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02055 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Interoperability requirement for the Telecommunications Billing: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02056 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Interoperability** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Telecommunications Billing:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02057 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02058 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Interoperability requirement for the Digital Library: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02059 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Interoperability** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Digital Library:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02060 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02061 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Interoperability requirement for the Medical Imaging Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02062 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Interoperability** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Medical Imaging Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02063 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02064 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Interoperability requirement for the Manufacturing Monitoring: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02065 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Interoperability** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Manufacturing Monitoring:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02066 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02067 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Interoperability requirement for the Government Citizen Portal: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02068 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Interoperability** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Government Citizen Portal:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02069 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02070 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Interoperability requirement for the Digital Wallet: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02071 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Interoperability** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Digital Wallet:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02072 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02073 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Interoperability requirement for the Event Ticketing Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02074 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Interoperability** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Event Ticketing Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02075 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02076 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Interoperability requirement for the Online Auction Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02077 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Interoperability** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Online Auction Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02078 — Interoperability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Interoperability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Interoperability** - the ability of systems to exchange and use meaningful information.
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02079 — Interoperability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Interoperability requirement for the Supply Chain Platform: 'The system should have very good interoperability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: an approved external system.
Stimulus: it sends a valid standards-compliant data-exchange request.
Environment: normal operation with the published integration contract active.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must validate the contract, translate the exchanged representation where needed and process the information with its agreed meaning.
Response Measure: 100% of valid exchanges conform to the published contract and complete within 3 seconds.

The replacement captures **Interoperability** because it tests the ability of systems to exchange and use meaningful information, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02080 — Interoperability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Interoperability** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Interoperability is **runtime-observable, although interface and semantic compatibility are designed and verified before deployment**. It concerns the ability of systems to exchange and use meaningful information.

**Worked observation for Supply Chain Platform:** send contract-valid and contract-invalid exchanges, then verify correct interpretation, rejection behavior and completion time. The acceptance criterion is that 100% of valid exchanges conform to the published contract and complete within 3 seconds. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02081 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02082 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Modifiability requirement for the University Student Portal: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02083 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Modifiability** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for University Student Portal:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02084 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02085 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Modifiability requirement for the Online Trading Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02086 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Modifiability** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Online Trading Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02087 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02088 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Modifiability requirement for the Electricity Utility App: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02089 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Modifiability** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Electricity Utility App:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02090 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02091 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Modifiability requirement for the Digital Game Store: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02092 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Modifiability** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Digital Game Store:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02093 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02094 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Modifiability requirement for the Flight Booking System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02095 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Modifiability** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Flight Booking System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02096 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02097 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Modifiability requirement for the E-Commerce Marketplace: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02098 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Modifiability** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for E-Commerce Marketplace:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02099 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02100 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Modifiability requirement for the Digital Banking App: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02101 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Modifiability** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Digital Banking App:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02102 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02103 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Modifiability requirement for the Food Delivery Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02104 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Modifiability** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Food Delivery Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02105 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02106 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Modifiability requirement for the Hospital Information System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02107 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Modifiability** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Hospital Information System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02108 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02109 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Modifiability requirement for the Smart Traffic Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02110 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Modifiability** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Smart Traffic Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02111 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02112 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Modifiability requirement for the Ride-Hailing Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02113 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Modifiability** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Ride-Hailing Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02114 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02115 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Modifiability requirement for the Video Streaming Service: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02116 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Modifiability** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Video Streaming Service:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02117 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02118 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Modifiability requirement for the Music Streaming Service: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02119 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Modifiability** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Music Streaming Service:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02120 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02121 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Modifiability requirement for the Cloud File Storage: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02122 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Modifiability** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Cloud File Storage:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02123 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02124 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Modifiability requirement for the Social Network: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02125 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Modifiability** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Social Network:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02126 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02127 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Modifiability requirement for the Smart Home Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02128 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Modifiability** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Smart Home Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02129 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02130 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Modifiability requirement for the Logistics Tracking System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02131 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Modifiability** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Logistics Tracking System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02132 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02133 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Modifiability requirement for the Insurance Claims System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02134 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Modifiability** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Insurance Claims System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02135 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02136 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Modifiability requirement for the Hotel Booking Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02137 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Modifiability** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Hotel Booking Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02138 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02139 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Modifiability requirement for the Online Learning Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02140 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Modifiability** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Online Learning Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02141 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02142 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Modifiability requirement for the Cybersecurity Monitoring Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02143 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Modifiability** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Cybersecurity Monitoring Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02144 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02145 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Modifiability requirement for the Warehouse Management System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02146 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Modifiability** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Warehouse Management System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02147 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02148 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Modifiability requirement for the Payroll and HR System: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02149 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Modifiability** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Payroll and HR System:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02150 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02151 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Modifiability requirement for the Telecommunications Billing: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02152 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Modifiability** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Telecommunications Billing:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02153 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02154 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Modifiability requirement for the Digital Library: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02155 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Modifiability** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Digital Library:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02156 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02157 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Modifiability requirement for the Medical Imaging Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02158 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Modifiability** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Medical Imaging Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02159 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02160 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Modifiability requirement for the Manufacturing Monitoring: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02161 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Modifiability** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Manufacturing Monitoring:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02162 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02163 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Modifiability requirement for the Government Citizen Portal: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02164 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Modifiability** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Government Citizen Portal:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02165 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02166 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Modifiability requirement for the Digital Wallet: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02167 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Modifiability** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Digital Wallet:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02168 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02169 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Modifiability requirement for the Event Ticketing Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02170 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Modifiability** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Event Ticketing Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02171 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02172 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Modifiability requirement for the Online Auction Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02173 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Modifiability** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Online Auction Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02174 — Modifiability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Modifiability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Modifiability** - the cost and risk of making a change.
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02175 — Modifiability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Modifiability requirement for the Supply Chain Platform: 'The system should have very good modifiability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: the product owner.
Stimulus: requests a new validation rule for an existing transaction.
Environment: development and test time before the next release.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must locate the affected elements, implement and test the rule without unintended changes to unrelated behavior.
Response Measure: one developer completes the change within 2 working days and modifies no more than 2 modules.

The replacement captures **Modifiability** because it tests the cost and risk of making a change, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02176 — Modifiability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Modifiability** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Modifiability is **primarily design/development-time, with deployment behavior relevant only after the change has been produced**. It concerns the cost and risk of making a change.

**Worked observation for Supply Chain Platform:** give a developer the change request and measure elapsed effort, affected modules and regression-test results. The acceptance criterion is that one developer completes the change within 2 working days and modifies no more than 2 modules. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02177 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02178 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Performance requirement for the University Student Portal: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02179 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Performance** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for University Student Portal:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02180 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02181 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Performance requirement for the Online Trading Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02182 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Performance** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Online Trading Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02183 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02184 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Performance requirement for the Electricity Utility App: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02185 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Performance** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Electricity Utility App:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02186 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02187 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Performance requirement for the Digital Game Store: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02188 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Performance** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Digital Game Store:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02189 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02190 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Performance requirement for the Flight Booking System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02191 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Performance** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Flight Booking System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02192 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02193 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Performance requirement for the E-Commerce Marketplace: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02194 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Performance** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for E-Commerce Marketplace:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02195 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02196 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Performance requirement for the Digital Banking App: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02197 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Performance** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Digital Banking App:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02198 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02199 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Performance requirement for the Food Delivery Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02200 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Performance** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Food Delivery Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02201 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02202 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Performance requirement for the Hospital Information System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02203 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Performance** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Hospital Information System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02204 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02205 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Performance requirement for the Smart Traffic Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02206 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Performance** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Smart Traffic Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02207 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02208 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Performance requirement for the Ride-Hailing Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02209 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Performance** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Ride-Hailing Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02210 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02211 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Performance requirement for the Video Streaming Service: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02212 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Performance** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Video Streaming Service:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02213 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02214 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Performance requirement for the Music Streaming Service: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02215 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Performance** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Music Streaming Service:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02216 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02217 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Performance requirement for the Cloud File Storage: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02218 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Performance** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Cloud File Storage:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02219 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02220 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Performance requirement for the Social Network: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02221 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Performance** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Social Network:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02222 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02223 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Performance requirement for the Smart Home Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02224 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Performance** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Smart Home Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02225 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02226 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Performance requirement for the Logistics Tracking System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02227 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Performance** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Logistics Tracking System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02228 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02229 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Performance requirement for the Insurance Claims System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02230 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Performance** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Insurance Claims System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02231 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02232 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Performance requirement for the Hotel Booking Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02233 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Performance** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Hotel Booking Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02234 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02235 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Performance requirement for the Online Learning Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02236 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Performance** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Online Learning Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02237 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02238 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Performance requirement for the Cybersecurity Monitoring Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02239 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Performance** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Cybersecurity Monitoring Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02240 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02241 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Performance requirement for the Warehouse Management System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02242 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Performance** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Warehouse Management System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02243 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02244 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Performance requirement for the Payroll and HR System: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02245 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Performance** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Payroll and HR System:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02246 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02247 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Performance requirement for the Telecommunications Billing: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02248 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Performance** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Telecommunications Billing:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02249 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02250 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Performance requirement for the Digital Library: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02251 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Performance** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Digital Library:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02252 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02253 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Performance requirement for the Medical Imaging Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02254 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Performance** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Medical Imaging Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02255 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02256 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Performance requirement for the Manufacturing Monitoring: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02257 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Performance** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Manufacturing Monitoring:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02258 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02259 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Performance requirement for the Government Citizen Portal: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02260 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Performance** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Government Citizen Portal:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02261 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02262 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Performance requirement for the Digital Wallet: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02263 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Performance** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Digital Wallet:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02264 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02265 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Performance requirement for the Event Ticketing Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02266 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Performance** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Event Ticketing Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02267 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02268 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Performance requirement for the Online Auction Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02269 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Performance** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Online Auction Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02270 — Performance (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Performance** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Performance** - the ability to meet timing and throughput requirements.
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02271 — Performance (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Performance requirement for the Supply Chain Platform: 'The system should have very good performance.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: 500 concurrent authenticated users.
Stimulus: submit core service requests during a five-minute workload burst.
Environment: peak-load operation on the production-sized deployment.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must accept, process and return the requested results without exhausting resources.
Response Measure: at least 95% of requests complete within 2 seconds while sustaining 500 requests per second.

The replacement captures **Performance** because it tests the ability to meet timing and throughput requirements, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02272 — Performance (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Performance** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Performance is **runtime-observable**. It concerns the ability to meet timing and throughput requirements.

**Worked observation for Supply Chain Platform:** run the stated peak workload and measure response-time percentiles, throughput and errors. The acceptance criterion is that at least 95% of requests complete within 2 seconds while sustaining 500 requests per second. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02273 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02274 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Security requirement for the University Student Portal: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02275 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Security** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for University Student Portal:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02276 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02277 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Security requirement for the Online Trading Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02278 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Security** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Online Trading Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02279 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02280 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Security requirement for the Electricity Utility App: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02281 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Security** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Electricity Utility App:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02282 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02283 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Security requirement for the Digital Game Store: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02284 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Security** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Digital Game Store:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02285 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02286 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Security requirement for the Flight Booking System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02287 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Security** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Flight Booking System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02288 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02289 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Security requirement for the E-Commerce Marketplace: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02290 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Security** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for E-Commerce Marketplace:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02291 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02292 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Security requirement for the Digital Banking App: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02293 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Security** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Digital Banking App:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02294 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02295 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Security requirement for the Food Delivery Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02296 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Security** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Food Delivery Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02297 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02298 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Security requirement for the Hospital Information System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02299 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Security** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Hospital Information System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02300 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02301 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Security requirement for the Smart Traffic Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02302 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Security** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Smart Traffic Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02303 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02304 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Security requirement for the Ride-Hailing Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02305 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Security** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Ride-Hailing Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02306 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02307 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Security requirement for the Video Streaming Service: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02308 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Security** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Video Streaming Service:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02309 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02310 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Security requirement for the Music Streaming Service: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02311 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Security** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Music Streaming Service:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02312 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02313 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Security requirement for the Cloud File Storage: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02314 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Security** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Cloud File Storage:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02315 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02316 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Security requirement for the Social Network: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02317 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Security** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Social Network:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02318 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02319 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Security requirement for the Smart Home Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02320 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Security** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Smart Home Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02321 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02322 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Security requirement for the Logistics Tracking System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02323 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Security** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Logistics Tracking System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02324 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02325 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Security requirement for the Insurance Claims System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02326 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Security** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Insurance Claims System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02327 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02328 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Security requirement for the Hotel Booking Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02329 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Security** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Hotel Booking Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02330 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02331 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Security requirement for the Online Learning Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02332 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Security** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Online Learning Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02333 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02334 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Security requirement for the Cybersecurity Monitoring Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02335 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Security** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Cybersecurity Monitoring Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02336 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02337 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Security requirement for the Warehouse Management System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02338 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Security** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Warehouse Management System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02339 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02340 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Security requirement for the Payroll and HR System: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02341 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Security** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Payroll and HR System:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02342 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02343 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Security requirement for the Telecommunications Billing: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02344 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Security** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Telecommunications Billing:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02345 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02346 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Security requirement for the Digital Library: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02347 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Security** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Digital Library:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02348 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02349 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Security requirement for the Medical Imaging Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02350 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Security** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Medical Imaging Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02351 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02352 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Security requirement for the Manufacturing Monitoring: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02353 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Security** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Manufacturing Monitoring:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02354 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02355 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Security requirement for the Government Citizen Portal: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02356 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Security** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Government Citizen Portal:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02357 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02358 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Security requirement for the Digital Wallet: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02359 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Security** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Digital Wallet:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02360 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02361 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Security requirement for the Event Ticketing Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02362 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Security** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Event Ticketing Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02363 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02364 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Security requirement for the Online Auction Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02365 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Security** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Online Auction Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02366 — Security (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Security** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Security** - protection of data and services from unauthorized access or modification while allowing legitimate use.
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02367 — Security (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Security requirement for the Supply Chain Platform: 'The system should have very good security.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: an unauthenticated external actor.
Stimulus: attempts to read a protected user record through the public interface.
Environment: normal operation while legitimate users are active.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must reject the request, disclose no protected data and record the attempt for audit.
Response Measure: zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created.

The replacement captures **Security** because it tests protection of data and services from unauthorized access or modification while allowing legitimate use, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02368 — Security (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Security** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Security is **runtime-observable, while threat analysis and control selection also occur at design time**. It concerns protection of data and services from unauthorized access or modification while allowing legitimate use.

**Worked observation for Supply Chain Platform:** issue the unauthorized request and inspect the response, protected store and audit trail. The acceptance criterion is that zero protected fields are disclosed, the request is rejected within 1 second and one audit record is created. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02369 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02370 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Testability requirement for the University Student Portal: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02371 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Testability** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for University Student Portal:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02372 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02373 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Testability requirement for the Online Trading Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02374 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Testability** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Online Trading Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02375 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02376 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Testability requirement for the Electricity Utility App: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02377 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Testability** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Electricity Utility App:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02378 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02379 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Testability requirement for the Digital Game Store: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02380 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Testability** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Digital Game Store:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02381 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02382 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Testability requirement for the Flight Booking System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02383 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Testability** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Flight Booking System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02384 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02385 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Testability requirement for the E-Commerce Marketplace: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02386 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Testability** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for E-Commerce Marketplace:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02387 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02388 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Testability requirement for the Digital Banking App: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02389 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Testability** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Digital Banking App:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02390 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02391 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Testability requirement for the Food Delivery Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02392 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Testability** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Food Delivery Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02393 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02394 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Testability requirement for the Hospital Information System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02395 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Testability** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Hospital Information System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02396 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02397 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Testability requirement for the Smart Traffic Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02398 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Testability** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Smart Traffic Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02399 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02400 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Testability requirement for the Ride-Hailing Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02401 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Testability** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Ride-Hailing Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02402 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02403 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Testability requirement for the Video Streaming Service: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02404 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Testability** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Video Streaming Service:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02405 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02406 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Testability requirement for the Music Streaming Service: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02407 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Testability** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Music Streaming Service:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02408 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02409 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Testability requirement for the Cloud File Storage: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02410 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Testability** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Cloud File Storage:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02411 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02412 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Testability requirement for the Social Network: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02413 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Testability** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Social Network:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02414 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02415 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Testability requirement for the Smart Home Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02416 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Testability** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Smart Home Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02417 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02418 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Testability requirement for the Logistics Tracking System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02419 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Testability** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Logistics Tracking System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02420 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02421 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Testability requirement for the Insurance Claims System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02422 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Testability** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Insurance Claims System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02423 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02424 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Testability requirement for the Hotel Booking Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02425 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Testability** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Hotel Booking Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02426 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02427 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Testability requirement for the Online Learning Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02428 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Testability** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Online Learning Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02429 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02430 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Testability requirement for the Cybersecurity Monitoring Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02431 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Testability** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Cybersecurity Monitoring Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02432 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02433 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Testability requirement for the Warehouse Management System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02434 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Testability** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Warehouse Management System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02435 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02436 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Testability requirement for the Payroll and HR System: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02437 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Testability** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Payroll and HR System:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02438 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02439 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Testability requirement for the Telecommunications Billing: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02440 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Testability** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Telecommunications Billing:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02441 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02442 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Testability requirement for the Digital Library: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02443 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Testability** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Digital Library:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02444 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02445 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Testability requirement for the Medical Imaging Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02446 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Testability** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Medical Imaging Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02447 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02448 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Testability requirement for the Manufacturing Monitoring: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02449 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Testability** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Manufacturing Monitoring:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02450 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02451 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Testability requirement for the Government Citizen Portal: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02452 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Testability** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Government Citizen Portal:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02453 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02454 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Testability requirement for the Digital Wallet: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02455 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Testability** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Digital Wallet:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02456 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02457 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Testability requirement for the Event Ticketing Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02458 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Testability** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Event Ticketing Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02459 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02460 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Testability requirement for the Online Auction Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02461 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Testability** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Online Auction Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02462 — Testability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Testability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Testability** - the ease of controlling and observing software so tests can reveal and isolate faults.
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02463 — Testability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Testability requirement for the Supply Chain Platform: 'The system should have very good testability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: an integration tester.
Stimulus: injects an invalid response from a downstream dependency while executing an automated test.
Environment: the isolated integration-test environment with test doubles and diagnostic logging enabled.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must control the dependency response, expose the resulting behavior and identify the responsible element.
Response Measure: the test runs automatically and isolates the fault to one element within 10 minutes.

The replacement captures **Testability** because it tests the ease of controlling and observing software so tests can reveal and isolate faults, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02464 — Testability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Testability** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Testability is **primarily design/development-time because controllability, observability and fault isolation are evaluated during testing**. It concerns the ease of controlling and observing software so tests can reveal and isolate faults.

**Worked observation for Supply Chain Platform:** run the fault-injection test and measure automation coverage, diagnostic evidence and isolation time. The acceptance criterion is that the test runs automatically and isolates the fault to one element within 10 minutes. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02465 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** University Student Portal  

For the University Student Portal, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02466 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A teammate writes this Usability requirement for the University Student Portal: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for University Student Portal:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **University Student Portal** and the components that implement the affected service.
Response: the University Student Portal must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02467 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

Is **Usability** primarily observable at runtime for the University Student Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for University Student Portal:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02468 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02469 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A teammate writes this Usability requirement for the Online Trading Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Trading Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Trading Platform** and the components that implement the affected service.
Response: the Online Trading Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02470 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Is **Usability** primarily observable at runtime for the Online Trading Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Online Trading Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02471 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02472 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A teammate writes this Usability requirement for the Electricity Utility App: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Electricity Utility App:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Electricity Utility App** and the components that implement the affected service.
Response: the Electricity Utility App must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02473 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Is **Usability** primarily observable at runtime for the Electricity Utility App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Electricity Utility App:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02474 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Game Store  

For the Digital Game Store, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02475 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A teammate writes this Usability requirement for the Digital Game Store: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Game Store:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Game Store** and the components that implement the affected service.
Response: the Digital Game Store must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02476 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Is **Usability** primarily observable at runtime for the Digital Game Store? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Digital Game Store:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02477 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Flight Booking System  

For the Flight Booking System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02478 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A teammate writes this Usability requirement for the Flight Booking System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Flight Booking System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Flight Booking System** and the components that implement the affected service.
Response: the Flight Booking System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02479 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Is **Usability** primarily observable at runtime for the Flight Booking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Flight Booking System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02480 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02481 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A teammate writes this Usability requirement for the E-Commerce Marketplace: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for E-Commerce Marketplace:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **E-Commerce Marketplace** and the components that implement the affected service.
Response: the E-Commerce Marketplace must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02482 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

Is **Usability** primarily observable at runtime for the E-Commerce Marketplace? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for E-Commerce Marketplace:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02483 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Banking App  

For the Digital Banking App, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02484 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A teammate writes this Usability requirement for the Digital Banking App: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Banking App:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Banking App** and the components that implement the affected service.
Response: the Digital Banking App must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02485 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Is **Usability** primarily observable at runtime for the Digital Banking App? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Digital Banking App:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02486 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02487 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A teammate writes this Usability requirement for the Food Delivery Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Food Delivery Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Food Delivery Platform** and the components that implement the affected service.
Response: the Food Delivery Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02488 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Is **Usability** primarily observable at runtime for the Food Delivery Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Food Delivery Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02489 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hospital Information System  

For the Hospital Information System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02490 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A teammate writes this Usability requirement for the Hospital Information System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hospital Information System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Hospital Information System** and the components that implement the affected service.
Response: the Hospital Information System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02491 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Is **Usability** primarily observable at runtime for the Hospital Information System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Hospital Information System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02492 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02493 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A teammate writes this Usability requirement for the Smart Traffic Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Traffic Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Smart Traffic Platform** and the components that implement the affected service.
Response: the Smart Traffic Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02494 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Is **Usability** primarily observable at runtime for the Smart Traffic Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Smart Traffic Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02495 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02496 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A teammate writes this Usability requirement for the Ride-Hailing Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Ride-Hailing Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Ride-Hailing Platform** and the components that implement the affected service.
Response: the Ride-Hailing Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02497 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Is **Usability** primarily observable at runtime for the Ride-Hailing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Ride-Hailing Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02498 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02499 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A teammate writes this Usability requirement for the Video Streaming Service: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Video Streaming Service:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Video Streaming Service** and the components that implement the affected service.
Response: the Video Streaming Service must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02500 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Is **Usability** primarily observable at runtime for the Video Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Video Streaming Service:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02501 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02502 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A teammate writes this Usability requirement for the Music Streaming Service: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Music Streaming Service:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Music Streaming Service** and the components that implement the affected service.
Response: the Music Streaming Service must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02503 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Is **Usability** primarily observable at runtime for the Music Streaming Service? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Music Streaming Service:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02504 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02505 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A teammate writes this Usability requirement for the Cloud File Storage: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cloud File Storage:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Cloud File Storage** and the components that implement the affected service.
Response: the Cloud File Storage must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02506 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Is **Usability** primarily observable at runtime for the Cloud File Storage? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Cloud File Storage:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02507 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Social Network  

For the Social Network, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02508 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Social Network  

A teammate writes this Usability requirement for the Social Network: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Social Network:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Social Network** and the components that implement the affected service.
Response: the Social Network must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02509 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Is **Usability** primarily observable at runtime for the Social Network? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Social Network:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02510 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02511 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A teammate writes this Usability requirement for the Smart Home Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Smart Home Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Smart Home Platform** and the components that implement the affected service.
Response: the Smart Home Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02512 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Is **Usability** primarily observable at runtime for the Smart Home Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Smart Home Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02513 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02514 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A teammate writes this Usability requirement for the Logistics Tracking System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Logistics Tracking System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Logistics Tracking System** and the components that implement the affected service.
Response: the Logistics Tracking System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02515 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Is **Usability** primarily observable at runtime for the Logistics Tracking System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Logistics Tracking System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02516 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02517 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A teammate writes this Usability requirement for the Insurance Claims System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Insurance Claims System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Insurance Claims System** and the components that implement the affected service.
Response: the Insurance Claims System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02518 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Is **Usability** primarily observable at runtime for the Insurance Claims System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Insurance Claims System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02519 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02520 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A teammate writes this Usability requirement for the Hotel Booking Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Hotel Booking Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Hotel Booking Platform** and the components that implement the affected service.
Response: the Hotel Booking Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02521 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Is **Usability** primarily observable at runtime for the Hotel Booking Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Hotel Booking Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02522 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02523 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A teammate writes this Usability requirement for the Online Learning Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Learning Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Learning Platform** and the components that implement the affected service.
Response: the Online Learning Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02524 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Is **Usability** primarily observable at runtime for the Online Learning Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Online Learning Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02525 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02526 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A teammate writes this Usability requirement for the Cybersecurity Monitoring Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Cybersecurity Monitoring Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Cybersecurity Monitoring Platform** and the components that implement the affected service.
Response: the Cybersecurity Monitoring Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02527 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Is **Usability** primarily observable at runtime for the Cybersecurity Monitoring Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Cybersecurity Monitoring Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02528 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02529 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A teammate writes this Usability requirement for the Warehouse Management System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Warehouse Management System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Warehouse Management System** and the components that implement the affected service.
Response: the Warehouse Management System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02530 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Is **Usability** primarily observable at runtime for the Warehouse Management System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Warehouse Management System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02531 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02532 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A teammate writes this Usability requirement for the Payroll and HR System: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Payroll and HR System:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Payroll and HR System** and the components that implement the affected service.
Response: the Payroll and HR System must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02533 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Is **Usability** primarily observable at runtime for the Payroll and HR System? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Payroll and HR System:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02534 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02535 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A teammate writes this Usability requirement for the Telecommunications Billing: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Telecommunications Billing:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Telecommunications Billing** and the components that implement the affected service.
Response: the Telecommunications Billing must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02536 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Is **Usability** primarily observable at runtime for the Telecommunications Billing? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Telecommunications Billing:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02537 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Library  

For the Digital Library, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02538 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Library  

A teammate writes this Usability requirement for the Digital Library: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Library:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Library** and the components that implement the affected service.
Response: the Digital Library must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02539 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Is **Usability** primarily observable at runtime for the Digital Library? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Digital Library:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02540 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02541 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

A teammate writes this Usability requirement for the Medical Imaging Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Medical Imaging Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Medical Imaging Platform** and the components that implement the affected service.
Response: the Medical Imaging Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02542 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Is **Usability** primarily observable at runtime for the Medical Imaging Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Medical Imaging Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02543 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02544 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

A teammate writes this Usability requirement for the Manufacturing Monitoring: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Manufacturing Monitoring:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Manufacturing Monitoring** and the components that implement the affected service.
Response: the Manufacturing Monitoring must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02545 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Is **Usability** primarily observable at runtime for the Manufacturing Monitoring? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Manufacturing Monitoring:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02546 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02547 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

A teammate writes this Usability requirement for the Government Citizen Portal: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Government Citizen Portal:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Government Citizen Portal** and the components that implement the affected service.
Response: the Government Citizen Portal must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02548 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Is **Usability** primarily observable at runtime for the Government Citizen Portal? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Government Citizen Portal:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02549 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Digital Wallet  

For the Digital Wallet, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02550 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

A teammate writes this Usability requirement for the Digital Wallet: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Digital Wallet:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Digital Wallet** and the components that implement the affected service.
Response: the Digital Wallet must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02551 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Is **Usability** primarily observable at runtime for the Digital Wallet? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Digital Wallet:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02552 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02553 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

A teammate writes this Usability requirement for the Event Ticketing Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Event Ticketing Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Event Ticketing Platform** and the components that implement the affected service.
Response: the Event Ticketing Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02554 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Is **Usability** primarily observable at runtime for the Event Ticketing Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Event Ticketing Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02555 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02556 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

A teammate writes this Usability requirement for the Online Auction Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Online Auction Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Online Auction Platform** and the components that implement the affected service.
Response: the Online Auction Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02557 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Is **Usability** primarily observable at runtime for the Online Auction Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Online Auction Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02558 — Usability (Hard, 4 marks)

**Type:** Formal six-part scenario  
**Exam family:** Past Paper Q1/Q2  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, construct a **Usability** quality-attribute scenario using all six parts: Source, Stimulus, Environment, Artifact, Response and Response Measure. Make the response measure objectively testable and scenario-specific.

<details><summary>Answer framework / marking outline</summary>

**Example answer**
Quality attribute: **Usability** - the ease with which a user learns, efficiently uses and recovers while using the system.
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

This is testable because the environment, observed response and pass/fail threshold are explicit. The numerical target is an example; in a real project it must be agreed with stakeholders.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02559 — Usability (Very Hard, 4 marks)

**Type:** Scenario critique  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

A teammate writes this Usability requirement for the Supply Chain Platform: 'The system should have very good usability.' Diagnose why this is architecturally weak, then replace it with a concrete requirement that an architect could reason about and a tester could verify.

<details><summary>Answer framework / marking outline</summary>

**Diagnosis:** The original statement is not architecturally useful because “very good” does not identify a source, stimulus, operating condition, affected artifact, required response or measurable acceptance threshold.

**Concrete replacement for Supply Chain Platform:**
Source: a first-time representative user.
Stimulus: attempts the system's primary transaction after reading only the on-screen instructions.
Environment: normal operation on a supported device without staff assistance.
Artifact: the **Supply Chain Platform** and the components that implement the affected service.
Response: the Supply Chain Platform must present understandable controls and feedback, prevent or explain invalid input and confirm successful completion.
Response Measure: at least 90% of first-time users complete the transaction within 3 minutes without assistance.

The replacement captures **Usability** because it tests the ease with which a user learns, efficiently uses and recovers while using the system, rather than relying on an unmeasurable adjective.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>

## Q02560 — Usability (Very Hard, 3 marks)

**Type:** Runtime/design-time reasoning  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Is **Usability** primarily observable at runtime for the Supply Chain Platform? Justify your answer by describing what would actually be observed or measured. If the answer is nuanced, state the nuance rather than forcing a binary claim.

<details><summary>Answer framework / marking outline</summary>

**Answer:** Usability is **runtime-observable through representative user interaction, although the supporting interaction design is created earlier**. It concerns the ease with which a user learns, efficiently uses and recovers while using the system.

**Worked observation for Supply Chain Platform:** conduct the stated usability task and measure completion rate, time, errors and requests for assistance. The acceptance criterion is that at least 90% of first-time users complete the transaction within 3 minutes without assistance. This states what is actually observed instead of treating the classification as a memorized label.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf

</details>
