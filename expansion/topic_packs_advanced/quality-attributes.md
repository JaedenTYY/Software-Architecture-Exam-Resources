# Quality Attributes

*Advanced Depth bank — 25 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0031 — Availability (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Availability general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Availability is readiness to provide service and to be there when needed; it encompasses reliability and adds the notion of recovery (repair). Fundamentally about minimising service outage time by mitigating faults.

| Portion | Possible values |
|---|---|
| Source | internal/external: people, hardware, software, physical infrastructure, physical environment |
| Stimulus | fault: omission, crash, incorrect timing, incorrect response |
| Artifact | system's processors, communication channels, persistent storage, processes |
| Environment | normal operation, startup, shutdown, repair mode, degraded operation, overloaded operation |
| Response | prevent the fault from becoming a failure; detect the fault (log it, notify appropriate entities); recover from the fault (disable the source of events causing the fault, be temporarily unavailable while repair is effected, fix or mask the fault/failure or contain the damage, operate in degraded mode while repair is effected) |
| Response Measure | time or time interval when the system must be available; availability percentage such as 99.999%; time to detect the fault; time to repair the fault; time or time interval in which the system can be in degraded mode; proportion or rate of a class of faults the system prevents or handles without failing |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: availability, general-scenario, possible-values, recall*

</details>

---

## ADV-0032 — Availability (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Availability** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Availability list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Availability list: time or time interval when the system must be available; availability percentage such as 99.999%; time to detect the fault; time to repair the fault; time or time interval in which the system can be in degraded mode; proportion or rate of a class of faults the system prevents or handles without failing

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: availability, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0033 — Availability (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Availability** scenario is:

> *The heartbeat monitor determines that the server is nonresponsive during normal operations. The system informs the operator and continues to operate with no downtime.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Availability:

- Source — from the list: internal/external: people, hardware, software, physical infrastructure, physical environment
- Stimulus — from the list: fault: omission, crash, incorrect timing, incorrect response
- Artifact — from the list: system's processors, communication channels, persistent storage, processes
- Environment — from the list: normal operation, startup, shutdown, repair mode, degraded operation, overloaded operation
- Response — from the list: prevent the fault from becoming a failure; detect the fault (log it, notify appropriate entities); recover from the fault (disable the source of events causing the fault, be temporarily unavailable while repair is effected, fix or mask the fault/failure or contain the damage, operate in degraded mode while repair is effected)
- Response Measure — from the list: time or time interval when the system must be available; availability percentage such as 99.999%; time to detect the fault; time to repair the fault; time or time interval in which the system can be in degraded mode; proportion or rate of a class of faults the system prevents or handles without failing

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: availability, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0034 — Interoperability (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Interoperability general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Interoperability is the degree to which two or more systems can usefully exchange meaningful information; like all quality attributes it is not a yes-or-no proposition but has shades of meaning.

| Portion | Possible values |
|---|---|
| Source | a system |
| Stimulus | a request to exchange information among system(s) |
| Artifact | the systems that wish to interoperate |
| Environment | system(s) wishing to interoperate are discovered at run time, or known prior to run time |
| Response | the request is appropriately rejected and appropriate entities are notified; or the request is appropriately accepted and information is exchanged successfully; or the request is logged by one or more of the involved systems |
| Response Measure | percentage of information exchanges correctly processed; percentage of information exchanges correctly rejected |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: interoperability, general-scenario, possible-values, recall*

</details>

---

## ADV-0035 — Interoperability (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Interoperability** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Interoperability list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Interoperability list: percentage of information exchanges correctly processed; percentage of information exchanges correctly rejected

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: interoperability, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0036 — Interoperability (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Interoperability** scenario is:

> *Our vehicle information system sends our current location to the traffic monitoring system. The traffic monitoring system combines our location with other information, overlays this information on a Google Map, and broadcasts it. Our location information is correctly included with a probability of 99.9%.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Interoperability:

- Source — from the list: a system
- Stimulus — from the list: a request to exchange information among system(s)
- Artifact — from the list: the systems that wish to interoperate
- Environment — from the list: system(s) wishing to interoperate are discovered at run time, or known prior to run time
- Response — from the list: the request is appropriately rejected and appropriate entities are notified; or the request is appropriately accepted and information is exchanged successfully; or the request is logged by one or more of the involved systems
- Response Measure — from the list: percentage of information exchanges correctly processed; percentage of information exchanges correctly rejected

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: interoperability, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0037 — Modifiability (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Modifiability general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Modifiability is change, and specifically the cost and risk of making changes. To plan for it an architect must consider three questions: what can change, what is the likelihood of the change, and when is the change made and who makes it.

| Portion | Possible values |
|---|---|
| Source | end user, developer, system administrator |
| Stimulus | a directive to add/delete/modify functionality, or change a quality attribute, capacity, or technology |
| Artifact | code, data, interfaces, components, resources, configurations |
| Environment | runtime, compile time, build time, initiation time, design time |
| Response | make the modification; test the modification; deploy the modification |
| Response Measure | cost in terms of number, size and complexity of affected artifacts; effort; calendar time; money (direct outlay or opportunity cost); extent to which this modification affects other functions or quality attributes; new defects introduced |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: modifiability, general-scenario, possible-values, recall*

</details>

---

## ADV-0038 — Modifiability (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Modifiability** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Modifiability list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Modifiability list: cost in terms of number, size and complexity of affected artifacts; effort; calendar time; money (direct outlay or opportunity cost); extent to which this modification affects other functions or quality attributes; new defects introduced

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: modifiability, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0039 — Modifiability (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Modifiability** scenario is:

> *The developer wishes to change the user interface by modifying the code at design time. The modifications are made with no side effects within three hours.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Modifiability:

- Source — from the list: end user, developer, system administrator
- Stimulus — from the list: a directive to add/delete/modify functionality, or change a quality attribute, capacity, or technology
- Artifact — from the list: code, data, interfaces, components, resources, configurations
- Environment — from the list: runtime, compile time, build time, initiation time, design time
- Response — from the list: make the modification; test the modification; deploy the modification
- Response Measure — from the list: cost in terms of number, size and complexity of affected artifacts; effort; calendar time; money (direct outlay or opportunity cost); extent to which this modification affects other functions or quality attributes; new defects introduced

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: modifiability, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0040 — Performance (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Performance general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Performance is time, and the software system's ability to meet timing requirements. Characterising the events that can occur, when they can occur, and the element's time-based response to them is the essence of discussing performance.

| Portion | Possible values |
|---|---|
| Source | internal or external to the system |
| Stimulus | arrival of a periodic, sporadic, or stochastic event |
| Artifact | system or one or more components in the system |
| Environment | operational mode: normal, emergency, peak load, overload |
| Response | process events; change level of service |
| Response Measure | latency, deadline, throughput, jitter, miss rate |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: performance, general-scenario, possible-values, recall*

</details>

---

## ADV-0041 — Performance (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Performance** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Performance list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Performance list: latency, deadline, throughput, jitter, miss rate

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: performance, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0042 — Performance (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Performance** scenario is:

> *Users initiate transactions under normal operations. The system processes the transactions with an average latency of two seconds.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Performance:

- Source — from the list: internal or external to the system
- Stimulus — from the list: arrival of a periodic, sporadic, or stochastic event
- Artifact — from the list: system or one or more components in the system
- Environment — from the list: operational mode: normal, emergency, peak load, overload
- Response — from the list: process events; change level of service
- Response Measure — from the list: latency, deadline, throughput, jitter, miss rate

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: performance, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0043 — Security (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Security general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Security is a measure of the system's ability to protect data and information from unauthorized access while still providing access to people and systems that are authorized. Characterised by CIA — confidentiality, integrity, availability — supported by authentication, nonrepudiation and authorization.

| Portion | Possible values |
|---|---|
| Source | human or another system which may have been previously identified (either correctly or incorrectly) or may be currently unknown; a human attacker may be from outside the organization or from inside it |
| Stimulus | unauthorized attempt is made to display data, change or delete data, access system services, change the system's behavior, or reduce availability |
| Artifact | system services; data within the system; a component or resources of the system; data produced or consumed by the system |
| Environment | the system is either online or offline, connected to or disconnected from a network, behind a firewall or open to a network, fully operational, partially operational, or not operational |
| Response | transactions are carried out such that data/services are protected from unauthorized access, are not manipulated without authorization, parties are identified with assurance, parties cannot repudiate their involvement, and data/resources/services remain available for legitimate use; the system tracks activities by recording access or modification, recording attempts, and notifying appropriate entities when an apparent attack is occurring |
| Response Measure | how much of a system is compromised when a particular component or data value is compromised; how much time passed before an attack was detected; how many attacks were resisted; how long it takes to recover from a successful attack; how much data is vulnerable to a particular attack |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: security, general-scenario, possible-values, recall*

</details>

---

## ADV-0044 — Security (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Security** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Security list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Security list: how much of a system is compromised when a particular component or data value is compromised; how much time passed before an attack was detected; how many attacks were resisted; how long it takes to recover from a successful attack; how much data is vulnerable to a particular attack

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: security, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0045 — Security (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Security** scenario is:

> *A disgruntled employee from a remote location attempts to modify the pay rate table during normal operations. The system maintains an audit trail and the correct data is restored within a day.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Security:

- Source — from the list: human or another system which may have been previously identified (either correctly or incorrectly) or may be currently unknown; a human attacker may be from outside the organization or from inside it
- Stimulus — from the list: unauthorized attempt is made to display data, change or delete data, access system services, change the system's behavior, or reduce availability
- Artifact — from the list: system services; data within the system; a component or resources of the system; data produced or consumed by the system
- Environment — from the list: the system is either online or offline, connected to or disconnected from a network, behind a firewall or open to a network, fully operational, partially operational, or not operational
- Response — from the list: transactions are carried out such that data/services are protected from unauthorized access, are not manipulated without authorization, parties are identified with assurance, parties cannot repudiate their involvement, and data/resources/services remain available for legitimate use; the system tracks activities by recording access or modification, recording attempts, and notifying appropriate entities when an apparent attack is occurring
- Response Measure — from the list: how much of a system is compromised when a particular component or data value is compromised; how much time passed before an attack was detected; how many attacks were resisted; how long it takes to recover from a successful attack; how much data is vulnerable to a particular attack

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: security, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0046 — Testability (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Testability general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Testability is the ease with which software can be made to demonstrate its faults through (typically execution-based) testing. Specifically, the probability that — assuming the software has at least one fault — it will fail on its next test execution. For a system to be properly testable it must be possible to control each component's inputs (and possibly manipulate its internal state) and then observe its outputs (and possibly its internal state).

| Portion | Possible values |
|---|---|
| Source | unit testers, integration testers, system testers, acceptance testers, end users, either running tests manually or using automated testing tools |
| Stimulus | a set of tests are executed due to the completion of a coding increment such as a class, layer or service; the completed integration of a subsystem; the complete implementation of the system; or the delivery of the system to the customer |
| Artifact | the portion of the system being tested |
| Environment | design time, development time, compile time, integration time, deployment time, run time |
| Response | execute test suite and capture results; capture activity that resulted in the fault; control and monitor the state of the system |
| Response Measure | effort to find a fault or class of faults; effort to achieve a given percentage of state space coverage; probability of a fault being revealed by the next test; time to perform tests; effort to detect faults; length of longest dependency chain in test; length of time to prepare test environment; reduction in risk exposure computed as size(loss) x prob(loss) |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: testability, general-scenario, possible-values, recall*

</details>

---

## ADV-0047 — Testability (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Testability** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Testability list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Testability list: effort to find a fault or class of faults; effort to achieve a given percentage of state space coverage; probability of a fault being revealed by the next test; time to perform tests; effort to detect faults; length of longest dependency chain in test; length of time to prepare test environment; reduction in risk exposure computed as size(loss) x prob(loss)

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: testability, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0048 — Testability (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Testability** scenario is:

> *The unit tester completes a code unit during development and performs a test sequence whose results are captured and that gives 85% path coverage within 3 hours of testing.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Testability:

- Source — from the list: unit testers, integration testers, system testers, acceptance testers, end users, either running tests manually or using automated testing tools
- Stimulus — from the list: a set of tests are executed due to the completion of a coding increment such as a class, layer or service; the completed integration of a subsystem; the complete implementation of the system; or the delivery of the system to the customer
- Artifact — from the list: the portion of the system being tested
- Environment — from the list: design time, development time, compile time, integration time, deployment time, run time
- Response — from the list: execute test suite and capture results; capture activity that resulted in the fault; control and monitor the state of the system
- Response Measure — from the list: effort to find a fault or class of faults; effort to achieve a given percentage of state space coverage; probability of a fault being revealed by the next test; time to perform tests; effort to detect faults; length of longest dependency chain in test; length of time to prepare test environment; reduction in risk exposure computed as size(loss) x prob(loss)

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: testability, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0049 — Usability (Very Hard, 8 marks)

**Type:** Recall general-scenario values  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Reproduce the **Usability general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks.

<details>
<summary><strong>Show answer</strong></summary>

Usability is how easy it is for the user to accomplish a desired task and the kind of user support the system provides. It comprises learning system features, using a system efficiently, minimizing the impact of errors, adapting the system to user needs, and increasing confidence and satisfaction.

| Portion | Possible values |
|---|---|
| Source | end user, possibly in a specialized role |
| Stimulus | end user tries to use a system efficiently, learn to use the system, minimize the impact of errors, adapt the system, or configure the system |
| Artifact | system or the specific portion of the system with which the user is interacting |
| Environment | runtime or configuration time |
| Response | the system should either provide the user with the features needed or anticipate the user's needs |
| Response Measure | task time; number of errors; number of tasks accomplished; user satisfaction; gain of user knowledge; ratio of successful operations to total operations; amount of time or data lost when an error occurs |

> **Exam trap:** Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.

*Tags: usability, general-scenario, possible-values, recall*

</details>

---

## ADV-0050 — Usability (Brutal, 6 marks)

**Type:** Critique a response measure  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

A team writes this response measure for a **Usability** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own Usability list that would be acceptable instead.

<details>
<summary><strong>Show answer</strong></summary>

It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.

Acceptable measures from the lecture's Usability list: task time; number of errors; number of tasks accomplished; user satisfaction; gain of user knowledge; ratio of successful operations to total operations; amount of time or data lost when an error occurs

> **Exam trap:** Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.

*Tags: usability, response-measure, testability-of-requirements, critique*

</details>

---

## ADV-0051 — Usability (Very Hard, 7 marks)

**Type:** Match concrete scenario to general scenario  
**Source:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 7's sample concrete **Usability** scenario is:

> *The user downloads a new application and is using it productively after two minutes of experimentation.*

Decompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates.

<details>
<summary><strong>Show answer</strong></summary>

Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for Usability:

- Source — from the list: end user, possibly in a specialized role
- Stimulus — from the list: end user tries to use a system efficiently, learn to use the system, minimize the impact of errors, adapt the system, or configure the system
- Artifact — from the list: system or the specific portion of the system with which the user is interacting
- Environment — from the list: runtime or configuration time
- Response — from the list: the system should either provide the user with the features needed or anticipate the user's needs
- Response Measure — from the list: task time; number of errors; number of tasks accomplished; user satisfaction; gain of user knowledge; ratio of successful operations to total operations; amount of time or data lost when an error occurs

The purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising.

> **Exam trap:** Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.

*Tags: usability, concrete-scenario, decompose, general-to-concrete*

</details>

---

## ADV-0052 — Runtime vs development-time (Very Hard, 6 marks)

**Type:** Classify by observation method  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf; Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf

Lecture 5 divides quality attributes into two categories. State the division precisely, classify all seven attributes from Lecture 7, and explain the test you applied — not merely the answer.

<details>
<summary><strong>Show answer</strong></summary>

The division is between attributes that **describe some property of the system at run time** (the lecture's examples: availability, performance, usability) and those that **describe some property of the development of the system** (its examples: modifiability, testability).

The test to apply: ask whether the response in the scenario is performed by *the system* or by *the developers*. Lecture 5 makes this explicit — 'the response consists of the responsibilities that the system (for runtime qualities) or the developers (for development-time qualities) should perform'.

Applying it: Availability, Performance, Security and Usability are runtime — the system detects, processes, resists or guides. Interoperability is runtime — two systems exchange information while running. Modifiability is development-time — a developer makes, tests and deploys a change. Testability is development/testing-time — a tester executes a suite. Confirmation comes from the Environment rows: Modifiability's environments are 'runtime, compile time, build time, initiation time, design time' and Testability's are lifecycle phases, whereas Performance's are load conditions.

> **Exam trap:** Memorising the list without the test. The examiner can ask about an attribute not on your list.

*Tags: runtime, development-time, classification, who-responds*

</details>

---

## ADV-0053 — Quality attribute considerations (Brutal, 8 marks)

**Type:** Explain the three problems  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

Lecture 5 states there are three problems with conventional discussions of quality attributes, and that scenarios solve two of them. Name all three problems and state precisely which are solved by scenarios and which by something else.

<details>
<summary><strong>Show answer</strong></summary>

Problem 1 — **the definitions are not testable**. It is meaningless to say a system will be 'modifiable': every system is modifiable with respect to one set of changes and not another, and similarly a system may be robust to some faults and brittle to others.

Problem 2 — **endless time is wasted arguing which quality a concern belongs to**. Is a failure due to a denial-of-service attack an aspect of availability, performance, security or usability? All four communities would claim it and all are to some extent correct, but this does not help architects create solutions.

Problem 3 — **each attribute community has developed its own vocabulary**. Performance has 'events' arriving, security has 'attacks' arriving, availability has 'failures', usability has 'user input' — all possibly referring to the same occurrence.

Scenarios solve problems 1 and 2: a six-part scenario is testable and it sidesteps the ownership argument by describing the occurrence rather than labelling it. Problem 3 is solved differently — by 'a discussion of each attribute, concentrating on its underlying concerns, to illustrate the concepts fundamental to that attribute community'. Saying scenarios solve all three is wrong.

> **Exam trap:** Claiming scenarios fix all three. The lecture explicitly solves the vocabulary problem by a different means.

*Tags: quality-attributes, three-problems, scenarios, vocabulary*

</details>

---

## ADV-0054 — Functionality (Brutal, 7 marks)

**Type:** Explain orthogonality  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

Lecture 5 claims 'functionality does not determine architecture' and that 'functionality and quality attributes are orthogonal'. Defend both claims, then explain why we decompose systems at all if functionality alone does not require it.

<details>
<summary><strong>Show answer</strong></summary>

First claim: given a set of required functionality there is no end to the architectures that could satisfy it — the functionality could be divided in any number of ways and the sub-pieces assigned to different elements. The lecture pushes this to its limit: 'if functionality were the only thing that mattered, you wouldn't have to divide the system into pieces at all'. A single monolithic blob can be functionally correct.

Second claim: orthogonality means you can vary one while holding the other fixed. The same function can be fast or slow, secure or open, easy or hard to change — so knowing the function tells you nothing about the qualities, and vice versa. Lecture 5's illustration is one functional requirement ('when the user presses the green button the Options dialog appears') carrying separate performance, availability and usability annotations.

Why we decompose anyway: 'we design our systems as structured sets of cooperating architectural elements — modules, layers, classes, services, databases, apps, threads, peers, tiers — to make them understandable and to support a variety of other purposes', and 'those other purposes are the other quality attributes'. Structure exists to serve qualities, not functionality.

> **Exam trap:** Arguing functionality does constrain architecture because 'you need a module for each feature'. That is a convention, not a necessity.

*Tags: functionality, orthogonality, decomposition, why-structure*

</details>

---

## ADV-0055 — Requirement categories (Very Hard, 6 marks)

**Type:** Classify a requirement  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

Lecture 5 divides system requirements into three categories. Name them, define each precisely, and classify these four: (a) the system shall run on Ubuntu 24.04; (b) 95% of searches return within 2 seconds; (c) the system shall let a lecturer publish grades; (d) the team shall reuse the existing authentication module.

<details>
<summary><strong>Show answer</strong></summary>

The three categories are **functional requirements** (what the system must do, how it must behave or react to run-time stimuli), **quality attribute requirements** (annotations that qualify functional requirements — how fast, how resilient to erroneous input, how easy to learn), and **constraints** (a design decision with zero degrees of freedom, i.e. a decision already made for you; the lecture's examples are a requirement to use a certain programming language or to reuse a certain existing module).

(a) Constraint — the platform decision is already made, zero degrees of freedom.
(b) Quality attribute — it qualifies the search function with a testable performance measure.
(c) Functional — it states what the system must do.
(d) Constraint — this is verbatim the lecture's own example of a constraint.

> **Exam trap:** Calling (d) a functional requirement. 'Reuse an existing module' is the lecture's textbook example of a constraint.

*Tags: requirements, constraints, classification, zero-degrees-of-freedom*

</details>

---
