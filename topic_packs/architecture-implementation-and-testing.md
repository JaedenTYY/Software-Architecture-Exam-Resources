# Architecture Implementation and Testing — CSC3209 Question Pack

Questions: **72**

## Q03049 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** University Student Portal  

During implementation of the University Student Portal, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03050 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03051 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

A test team for the University Student Portal argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03052 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

During implementation of the Online Trading Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03053 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03054 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

A test team for the Online Trading Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03055 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

During implementation of the Electricity Utility App, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03056 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03057 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

A test team for the Electricity Utility App argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03058 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

During implementation of the Digital Game Store, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03059 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03060 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

A test team for the Digital Game Store argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03061 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

During implementation of the Flight Booking System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03062 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03063 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

A test team for the Flight Booking System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03064 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

During implementation of the E-Commerce Marketplace, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03065 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03066 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

A test team for the E-Commerce Marketplace argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03067 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

During implementation of the Digital Banking App, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03068 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03069 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

A test team for the Digital Banking App argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03070 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

During implementation of the Food Delivery Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03071 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03072 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

A test team for the Food Delivery Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03073 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

During implementation of the Hospital Information System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03074 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03075 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

A test team for the Hospital Information System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03076 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

During implementation of the Smart Traffic Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03077 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03078 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

A test team for the Smart Traffic Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03079 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

During implementation of the Ride-Hailing Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03080 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03081 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

A test team for the Ride-Hailing Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03082 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

During implementation of the Video Streaming Service, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03083 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03084 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

A test team for the Video Streaming Service argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03085 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

During implementation of the Music Streaming Service, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03086 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03087 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

A test team for the Music Streaming Service argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03088 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

During implementation of the Cloud File Storage, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03089 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03090 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

A test team for the Cloud File Storage argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03091 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Social Network  

During implementation of the Social Network, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03092 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03093 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

A test team for the Social Network argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03094 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

During implementation of the Smart Home Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03095 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03096 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

A test team for the Smart Home Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03097 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

During implementation of the Logistics Tracking System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03098 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03099 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

A test team for the Logistics Tracking System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03100 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

During implementation of the Insurance Claims System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03101 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03102 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

A test team for the Insurance Claims System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03103 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

During implementation of the Hotel Booking Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03104 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03105 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

A test team for the Hotel Booking Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03106 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

During implementation of the Online Learning Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03107 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03108 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

A test team for the Online Learning Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03109 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

During implementation of the Cybersecurity Monitoring Platform, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03110 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03111 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

A test team for the Cybersecurity Monitoring Platform argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03112 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

During implementation of the Warehouse Management System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03113 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03114 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

A test team for the Warehouse Management System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03115 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

During implementation of the Payroll and HR System, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03116 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03117 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

A test team for the Payroll and HR System argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03118 — Architecture erosion (Very Hard, 5 marks)

**Type:** Implementation conformance  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

During implementation of the Telecommunications Billing, developers repeatedly bypass documented architectural constraints because direct calls are easier. Explain **architecture erosion**, why it invalidates earlier architectural reasoning, and give at least three techniques from the lecture for keeping code and architecture consistent.

<details><summary>Answer framework / marking outline</summary>

Architecture erosion is drift between implemented code and intended/documented architecture. It can invalidate QA reasoning because dependencies/interactions no longer obey the analyzed design. Techniques: embed design knowledge in code/comments/conventions; use frameworks; use code templates; enforce architectural rules with tools/build checks; mark documentation out of date; schedule code/document synchronization.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03119 — Testing levels (Brutal, 8 marks)

**Type:** Architecture-informed testing  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, compare how architecture informs **unit testing, integration testing and acceptance testing**. Include one quality-attribute test that becomes meaningful at integration time and explain why architecture is especially important for the test setup.

<details><summary>Answer framework / marking outline</summary>

Unit: architecture helps define units, responsibilities and interfaces; harnesses can test functional behavior, synthetic performance load or fault injection. Integration: architecture defines increments/interfaces and is where runtime QAs such as performance, reliability/availability and security can be tested end-to-end, including process failure and long-running resource behavior. Acceptance: architecture has a smaller but useful role in selecting/stressing QA behavior.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>

## Q03120 — Black/White/Gray Box (Very Hard, 5 marks)

**Type:** Testing reasoning  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

A test team for the Telecommunications Billing argues that black-box testing makes architecture irrelevant. Critique this claim and distinguish black-box, white-box and gray-box testing with one architecture-informed use for each.

<details><summary>Answer framework / marking outline</summary>

Black-box uses requirements rather than implementation internals, but architectural elements/interfaces carry responsibilities and interface contracts that guide tests. White-box uses internal structures/control paths and can target architecture internals. Gray-box uses partial internal knowledge, e.g. component interactions. Architecture helps identify critical units, interfaces, risks and harness boundaries at all levels.



**Grounding:** Lecture11_ArchitectureImplementationTesting.pdf

</details>
