# Architecture Implementation and Testing — CSC3209 Question Pack

Questions: **72**

## Q03049 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** University Student Portal  

During implementation of the University Student Portal, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented University Student Portal code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03050 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one University Student Portal module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03051 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A test team for the University Student Portal argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **University Student Portal** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03052 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

During implementation of the Online Trading Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Online Trading Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03053 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Online Trading Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03054 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A test team for the Online Trading Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Online Trading Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03055 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

During implementation of the Electricity Utility App, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Electricity Utility App code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03056 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Electricity Utility App module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03057 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A test team for the Electricity Utility App argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Electricity Utility App** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03058 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

During implementation of the Digital Game Store, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Digital Game Store code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03059 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Digital Game Store module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03060 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A test team for the Digital Game Store argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Digital Game Store** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03061 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

During implementation of the Flight Booking System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Flight Booking System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03062 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Flight Booking System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03063 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A test team for the Flight Booking System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Flight Booking System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03064 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

During implementation of the E-Commerce Marketplace, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented E-Commerce Marketplace code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03065 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one E-Commerce Marketplace module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03066 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A test team for the E-Commerce Marketplace argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **E-Commerce Marketplace** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03067 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

During implementation of the Digital Banking App, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Digital Banking App code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03068 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Digital Banking App module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03069 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A test team for the Digital Banking App argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Digital Banking App** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03070 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

During implementation of the Food Delivery Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Food Delivery Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03071 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Food Delivery Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03072 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A test team for the Food Delivery Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Food Delivery Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03073 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

During implementation of the Hospital Information System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Hospital Information System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03074 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Hospital Information System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03075 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A test team for the Hospital Information System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Hospital Information System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03076 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

During implementation of the Smart Traffic Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Smart Traffic Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03077 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Smart Traffic Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03078 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A test team for the Smart Traffic Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Smart Traffic Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03079 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

During implementation of the Ride-Hailing Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Ride-Hailing Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03080 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Ride-Hailing Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03081 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A test team for the Ride-Hailing Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Ride-Hailing Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03082 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

During implementation of the Video Streaming Service, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Video Streaming Service code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03083 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Video Streaming Service module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03084 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A test team for the Video Streaming Service argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Video Streaming Service** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03085 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

During implementation of the Music Streaming Service, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Music Streaming Service code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03086 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Music Streaming Service module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03087 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A test team for the Music Streaming Service argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Music Streaming Service** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03088 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

During implementation of the Cloud File Storage, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Cloud File Storage code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03089 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Cloud File Storage module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03090 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A test team for the Cloud File Storage argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Cloud File Storage** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03091 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Social Network  

During implementation of the Social Network, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Social Network code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03092 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Social Network module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03093 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

A test team for the Social Network argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Social Network** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03094 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

During implementation of the Smart Home Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Smart Home Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03095 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Smart Home Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03096 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A test team for the Smart Home Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Smart Home Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03097 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

During implementation of the Logistics Tracking System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Logistics Tracking System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03098 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Logistics Tracking System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03099 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A test team for the Logistics Tracking System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Logistics Tracking System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03100 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

During implementation of the Insurance Claims System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Insurance Claims System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03101 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Insurance Claims System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03102 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A test team for the Insurance Claims System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Insurance Claims System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03103 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

During implementation of the Hotel Booking Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Hotel Booking Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03104 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Hotel Booking Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03105 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A test team for the Hotel Booking Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Hotel Booking Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03106 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

During implementation of the Online Learning Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Online Learning Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03107 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Online Learning Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03108 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A test team for the Online Learning Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Online Learning Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03109 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

During implementation of the Cybersecurity Monitoring Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Cybersecurity Monitoring Platform code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03110 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Cybersecurity Monitoring Platform module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03111 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A test team for the Cybersecurity Monitoring Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Cybersecurity Monitoring Platform** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03112 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

During implementation of the Warehouse Management System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Warehouse Management System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03113 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Warehouse Management System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03114 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A test team for the Warehouse Management System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Warehouse Management System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03115 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

During implementation of the Payroll and HR System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Payroll and HR System code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03116 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Payroll and HR System module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03117 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A test team for the Payroll and HR System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Payroll and HR System** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03118 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

During implementation of the Telecommunications Billing, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

**Architecture erosion** occurs when implemented Telecommunications Billing code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.

Use at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03119 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

**Unit testing:** test one Telecommunications Billing module behind its interface, such as a registration-rule service with repository and clock test doubles.
**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.
**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03120 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A test team for the Telecommunications Billing argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Reject the claim: black-box tests hide implementation details, but the **Telecommunications Billing** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.

- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.
- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.
- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>
