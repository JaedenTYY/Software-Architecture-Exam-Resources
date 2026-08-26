# Designing an Architecture — CSC3209 Question Pack

Questions: **72**

## Q02977 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** University Student Portal  

You are beginning architecture design for the University Student Portal. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to register for a subject. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One University Student Portal iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02978 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Explain why architecture design for the University Student Portal should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the University Student Portal ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02979 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** University Student Portal  

The University Student Portal has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **University Student Portal** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02980 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

You are beginning architecture design for the Online Trading Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to place a stock order. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Online Trading Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02981 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Explain why architecture design for the Online Trading Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Online Trading Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02982 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

The Online Trading Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Online Trading Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02983 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

You are beginning architecture design for the Electricity Utility App. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to pay an electricity bill. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Electricity Utility App iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02984 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Explain why architecture design for the Electricity Utility App should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Electricity Utility App ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02985 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

The Electricity Utility App has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Electricity Utility App** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02986 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

You are beginning architecture design for the Digital Game Store. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to purchase and download a game. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Digital Game Store iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02987 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Explain why architecture design for the Digital Game Store should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Digital Game Store ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02988 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

The Digital Game Store has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Digital Game Store** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02989 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

You are beginning architecture design for the Flight Booking System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to book a flight. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Flight Booking System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02990 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Explain why architecture design for the Flight Booking System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Flight Booking System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02991 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

The Flight Booking System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Flight Booking System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02992 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

You are beginning architecture design for the E-Commerce Marketplace. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to place an order. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One E-Commerce Marketplace iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02993 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Explain why architecture design for the E-Commerce Marketplace should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the E-Commerce Marketplace ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02994 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **E-Commerce Marketplace** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02995 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

You are beginning architecture design for the Digital Banking App. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to transfer money. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Digital Banking App iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02996 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Explain why architecture design for the Digital Banking App should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Digital Banking App ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02997 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

The Digital Banking App has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Digital Banking App** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02998 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

You are beginning architecture design for the Food Delivery Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to place a food order. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Food Delivery Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q02999 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Explain why architecture design for the Food Delivery Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Food Delivery Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03000 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Food Delivery Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03001 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

You are beginning architecture design for the Hospital Information System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to update a patient record. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Hospital Information System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03002 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Explain why architecture design for the Hospital Information System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Hospital Information System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03003 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

The Hospital Information System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Hospital Information System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03004 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

You are beginning architecture design for the Smart Traffic Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to change a traffic-control plan. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Smart Traffic Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03005 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Explain why architecture design for the Smart Traffic Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Smart Traffic Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03006 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Smart Traffic Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03007 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

You are beginning architecture design for the Ride-Hailing Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to request a ride. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Ride-Hailing Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03008 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Explain why architecture design for the Ride-Hailing Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Ride-Hailing Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03009 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Ride-Hailing Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03010 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

You are beginning architecture design for the Video Streaming Service. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to start a video. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Video Streaming Service iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03011 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Explain why architecture design for the Video Streaming Service should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Video Streaming Service ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03012 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

The Video Streaming Service has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Video Streaming Service** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03013 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

You are beginning architecture design for the Music Streaming Service. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to play a song. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Music Streaming Service iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03014 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Explain why architecture design for the Music Streaming Service should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Music Streaming Service ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03015 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

The Music Streaming Service has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Music Streaming Service** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03016 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

You are beginning architecture design for the Cloud File Storage. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to upload a file. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Cloud File Storage iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03017 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Explain why architecture design for the Cloud File Storage should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Cloud File Storage ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03018 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

The Cloud File Storage has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Cloud File Storage** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03019 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Social Network  

You are beginning architecture design for the Social Network. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to publish a post. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Social Network iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03020 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

Explain why architecture design for the Social Network should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Social Network ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03021 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Social Network  

The Social Network has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Social Network** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03022 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

You are beginning architecture design for the Smart Home Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to change a device setting. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Smart Home Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03023 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Explain why architecture design for the Smart Home Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Smart Home Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03024 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

The Smart Home Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Smart Home Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03025 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

You are beginning architecture design for the Logistics Tracking System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to update a shipment. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Logistics Tracking System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03026 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Explain why architecture design for the Logistics Tracking System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Logistics Tracking System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03027 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Logistics Tracking System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03028 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

You are beginning architecture design for the Insurance Claims System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to approve a claim. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Insurance Claims System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03029 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Explain why architecture design for the Insurance Claims System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Insurance Claims System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03030 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

The Insurance Claims System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Insurance Claims System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03031 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

You are beginning architecture design for the Hotel Booking Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to reserve a room. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Hotel Booking Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03032 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Explain why architecture design for the Hotel Booking Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Hotel Booking Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03033 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Hotel Booking Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03034 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

You are beginning architecture design for the Online Learning Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to submit an assessment. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Online Learning Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03035 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Explain why architecture design for the Online Learning Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Online Learning Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03036 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

The Online Learning Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Online Learning Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03037 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

You are beginning architecture design for the Cybersecurity Monitoring Platform. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to investigate an alert. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Cybersecurity Monitoring Platform iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03038 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Explain why architecture design for the Cybersecurity Monitoring Platform should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Cybersecurity Monitoring Platform ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03039 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Cybersecurity Monitoring Platform** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03040 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

You are beginning architecture design for the Warehouse Management System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to allocate stock. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Warehouse Management System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03041 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Explain why architecture design for the Warehouse Management System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Warehouse Management System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03042 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

The Warehouse Management System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Warehouse Management System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03043 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

You are beginning architecture design for the Payroll and HR System. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to run payroll. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Payroll and HR System iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03044 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Explain why architecture design for the Payroll and HR System should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Payroll and HR System ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03045 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

The Payroll and HR System has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Payroll and HR System** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03046 — ADD (Brutal, 10 marks)

**Type:** Apply ADD  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

You are beginning architecture design for the Telecommunications Billing. Apply the **Attribute-Driven Design (ADD)** method. State all five steps and demonstrate one iteration using a high-priority ASR related to pay an invoice. Explain when backtracking is justified.

<details><summary>Answer framework / marking outline</summary>

**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.

**One Telecommunications Billing iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.

**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03047 — Generate and Test (Very Hard, 5 marks)

**Type:** Critical design reasoning  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Explain why architecture design for the Telecommunications Billing should be viewed as **generate and test**, not **guess and test**. Describe where an initial design hypothesis can come from and how test results should influence the next hypothesis.

<details><summary>Answer framework / marking outline</summary>

Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the Telecommunications Billing ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.

The initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>

## Q03048 — Decomposition (Very Hard, 5 marks)

**Type:** ASR allocation  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing has system-wide performance and availability requirements. Explain why decomposition does not make those whole-system qualities disappear. Show how an architect can decompose the system while allocating responsibilities/quality obligations to child elements and respecting pre-existing component constraints.

<details><summary>Answer framework / marking outline</summary>

Decomposition does not remove the **Telecommunications Billing** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.

For a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.



**Grounding:** Lecture9_Designing An Architecture.pdf

</details>
