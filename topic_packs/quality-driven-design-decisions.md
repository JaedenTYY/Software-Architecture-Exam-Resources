# Quality-Driven Design Decisions — CSC3209 Question Pack

Questions: **140**

## Q02818 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Place authentication and authorization policy in one University Student Portal IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02819 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Use asynchronous publish-subscribe for University Student Portal status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02820 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Define one versioned canonical University Student Portal record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02821 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Give the University Student Portal application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02822 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Deploy University Student Portal presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02823 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Bind the University Student Portal payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02824 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the University Student Portal:** Use a transactional relational database for authoritative University Student Portal records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02826 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Place authentication and authorization policy in one Online Trading Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02827 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Use asynchronous publish-subscribe for Online Trading Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02828 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Define one versioned canonical Online Trading Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02829 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Give the Online Trading Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02830 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Deploy Online Trading Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02831 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Bind the Online Trading Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02832 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Trading Platform:** Use a transactional relational database for authoritative Online Trading Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02834 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Place authentication and authorization policy in one Electricity Utility App IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02835 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Use asynchronous publish-subscribe for Electricity Utility App status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02836 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Define one versioned canonical Electricity Utility App record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02837 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Give the Electricity Utility App application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02838 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Deploy Electricity Utility App presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02839 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Bind the Electricity Utility App payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02840 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Electricity Utility App:** Use a transactional relational database for authoritative Electricity Utility App records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02842 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Place authentication and authorization policy in one Digital Game Store IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02843 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Use asynchronous publish-subscribe for Digital Game Store status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02844 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Define one versioned canonical Digital Game Store record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02845 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Give the Digital Game Store application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02846 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Deploy Digital Game Store presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02847 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Bind the Digital Game Store payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02848 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Game Store:** Use a transactional relational database for authoritative Digital Game Store records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02850 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Place authentication and authorization policy in one Flight Booking System IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02851 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Use asynchronous publish-subscribe for Flight Booking System status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02852 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Define one versioned canonical Flight Booking System record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02853 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Give the Flight Booking System application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02854 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Deploy Flight Booking System presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02855 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Bind the Flight Booking System payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02856 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Flight Booking System:** Use a transactional relational database for authoritative Flight Booking System records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02858 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Place authentication and authorization policy in one E-Commerce Marketplace IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02859 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Use asynchronous publish-subscribe for E-Commerce Marketplace status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02860 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Define one versioned canonical E-Commerce Marketplace record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02861 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Give the E-Commerce Marketplace application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02862 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Deploy E-Commerce Marketplace presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02863 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Bind the E-Commerce Marketplace payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02864 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the E-Commerce Marketplace:** Use a transactional relational database for authoritative E-Commerce Marketplace records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02866 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Place authentication and authorization policy in one Digital Banking App IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02867 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Use asynchronous publish-subscribe for Digital Banking App status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02868 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Define one versioned canonical Digital Banking App record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02869 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Give the Digital Banking App application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02870 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Deploy Digital Banking App presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02871 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Bind the Digital Banking App payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02872 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Digital Banking App:** Use a transactional relational database for authoritative Digital Banking App records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02874 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Place authentication and authorization policy in one Food Delivery Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02875 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Use asynchronous publish-subscribe for Food Delivery Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02876 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Define one versioned canonical Food Delivery Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02877 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Give the Food Delivery Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02878 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Deploy Food Delivery Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02879 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Bind the Food Delivery Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02880 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Food Delivery Platform:** Use a transactional relational database for authoritative Food Delivery Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02882 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Place authentication and authorization policy in one Hospital Information System IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02883 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Use asynchronous publish-subscribe for Hospital Information System status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02884 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Define one versioned canonical Hospital Information System record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02885 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Give the Hospital Information System application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02886 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Deploy Hospital Information System presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02887 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Bind the Hospital Information System payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02888 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hospital Information System:** Use a transactional relational database for authoritative Hospital Information System records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02890 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Place authentication and authorization policy in one Smart Traffic Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02891 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Use asynchronous publish-subscribe for Smart Traffic Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02892 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Define one versioned canonical Smart Traffic Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02893 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Give the Smart Traffic Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02894 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Deploy Smart Traffic Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02895 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Bind the Smart Traffic Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02896 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Traffic Platform:** Use a transactional relational database for authoritative Smart Traffic Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02898 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Place authentication and authorization policy in one Ride-Hailing Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02899 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Use asynchronous publish-subscribe for Ride-Hailing Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02900 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Define one versioned canonical Ride-Hailing Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02901 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Give the Ride-Hailing Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02902 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Deploy Ride-Hailing Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02903 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Bind the Ride-Hailing Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02904 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Ride-Hailing Platform:** Use a transactional relational database for authoritative Ride-Hailing Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02906 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Place authentication and authorization policy in one Video Streaming Service IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02907 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Use asynchronous publish-subscribe for Video Streaming Service status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02908 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Define one versioned canonical Video Streaming Service record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02909 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Give the Video Streaming Service application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02910 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Deploy Video Streaming Service presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02911 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Bind the Video Streaming Service payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02912 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Video Streaming Service:** Use a transactional relational database for authoritative Video Streaming Service records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02914 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Place authentication and authorization policy in one Music Streaming Service IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02915 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Use asynchronous publish-subscribe for Music Streaming Service status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02916 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Define one versioned canonical Music Streaming Service record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02917 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Give the Music Streaming Service application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02918 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Deploy Music Streaming Service presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02919 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Bind the Music Streaming Service payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02920 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Music Streaming Service:** Use a transactional relational database for authoritative Music Streaming Service records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02922 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Place authentication and authorization policy in one Cloud File Storage IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02923 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Use asynchronous publish-subscribe for Cloud File Storage status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02924 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Define one versioned canonical Cloud File Storage record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02925 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Give the Cloud File Storage application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02926 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Deploy Cloud File Storage presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02927 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Bind the Cloud File Storage payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02928 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Cloud File Storage:** Use a transactional relational database for authoritative Cloud File Storage records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02930 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Place authentication and authorization policy in one Social Network IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02931 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Use asynchronous publish-subscribe for Social Network status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02932 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Define one versioned canonical Social Network record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02933 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Give the Social Network application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02934 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Deploy Social Network presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02935 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Bind the Social Network payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02936 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Social Network:** Use a transactional relational database for authoritative Social Network records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02938 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Place authentication and authorization policy in one Smart Home Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02939 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Use asynchronous publish-subscribe for Smart Home Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02940 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Define one versioned canonical Smart Home Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02941 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Give the Smart Home Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02942 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Deploy Smart Home Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02943 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Bind the Smart Home Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02944 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Smart Home Platform:** Use a transactional relational database for authoritative Smart Home Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02946 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Place authentication and authorization policy in one Logistics Tracking System IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02947 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Use asynchronous publish-subscribe for Logistics Tracking System status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02948 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Define one versioned canonical Logistics Tracking System record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02949 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Give the Logistics Tracking System application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02950 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Deploy Logistics Tracking System presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02951 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Bind the Logistics Tracking System payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02952 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Logistics Tracking System:** Use a transactional relational database for authoritative Logistics Tracking System records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02954 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Place authentication and authorization policy in one Insurance Claims System IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02955 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Use asynchronous publish-subscribe for Insurance Claims System status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02956 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Define one versioned canonical Insurance Claims System record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02957 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Give the Insurance Claims System application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02958 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Deploy Insurance Claims System presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02959 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Bind the Insurance Claims System payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02960 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Insurance Claims System:** Use a transactional relational database for authoritative Insurance Claims System records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02962 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Place authentication and authorization policy in one Hotel Booking Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02963 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Use asynchronous publish-subscribe for Hotel Booking Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02964 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Define one versioned canonical Hotel Booking Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02965 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Give the Hotel Booking Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02966 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Deploy Hotel Booking Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02967 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Bind the Hotel Booking Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02968 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Hotel Booking Platform:** Use a transactional relational database for authoritative Hotel Booking Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02970 — Allocation of responsibilities (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Allocation of responsibilities** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Place authentication and authorization policy in one Online Learning Platform IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02971 — Coordination model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Coordination model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Use asynchronous publish-subscribe for Online Learning Platform status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02972 — Data model (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Data model** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Define one versioned canonical Online Learning Platform record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02973 — Management of resources (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Management of resources** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Give the Online Learning Platform application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02974 — Mapping among architectural elements (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Mapping among architectural elements** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Deploy Online Learning Platform presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02975 — Binding-time decisions (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Binding-time decisions** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Bind the Online Learning Platform payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>

## Q02976 — Choice of technology (Brutal, 4 marks)

**Type:** Architecture decision reasoning  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain how the architectural design-decision category **Choice of technology** can affect at least two quality attributes. Give one concrete decision, one beneficial consequence and one trade-off.

<details><summary>Answer framework / marking outline</summary>

**Concrete decision for the Online Learning Platform:** Use a transactional relational database for authoritative Online Learning Platform records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.



**Grounding:** Lecture5_UnderstandingQualityAttributes.pdf

</details>
