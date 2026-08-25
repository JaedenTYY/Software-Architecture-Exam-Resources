# CSC3209 January 2026 — Model Answers

> **Status:** Course-grounded model answer key, not an official university marking scheme. Alternative answers may be valid when the selected pattern/quality attribute is correctly mapped to the scenario and justified through its mechanism.
>
> Use with: [CSC3209 January 2026 Exam](./CSC3209_January_2026_Exam.md) and [Universal Answer Frameworks](../../universal_answers.md).

---

## Question 1 — HPC online platform: Quality Attribute Scenarios and Utility Tree

### 1(a) Four QA scenarios

#### HPC1 — Performance

| Part | Answer |
|---|---|
| **Source** | HPC user |
| **Stimulus** | Submits a computational job and requests job status/performance information |
| **Environment** | Peak platform load |
| **Artifact** | Job-management/monitoring service |
| **Response** | System accepts the job request and returns current status/monitoring information |
| **Response Measure** | 95% of interactive job-management/status requests complete within 2 seconds |

#### HPC2 — Availability

| Part | Answer |
|---|---|
| **Source** | Compute-node/service fault |
| **Stimulus** | One processing/service node fails while jobs are running |
| **Environment** | Normal production operation |
| **Artifact** | HPC job-processing platform |
| **Response** | Platform detects the failure, reschedules/restarts affected work on a healthy node and keeps the service accessible |
| **Response Measure** | Failure detected within 5 seconds and affected job recovery/rescheduling begins within 30 seconds |

#### HPC3 — Security

| Part | Answer |
|---|---|
| **Source** | Unauthorized external actor |
| **Stimulus** | Attempts to access another user’s submitted jobs, processed data or compute resources |
| **Environment** | Normal Internet operation |
| **Artifact** | Identity/job/data-access services |
| **Response** | System authenticates/authorizes the request, rejects unauthorized access and records an audit event |
| **Response Measure** | 100% of unauthorized access attempts are rejected and logged |

#### HPC4 — Usability

| Part | Answer |
|---|---|
| **Source** | First-time HPC user |
| **Stimulus** | Attempts to submit a computational job through the web interface |
| **Environment** | Normal operation |
| **Artifact** | HPC web portal |
| **Response** | UI guides the user through data selection, resource selection, submission and confirmation |
| **Response Measure** | 90% of first-time users successfully submit a basic job within 5 minutes without assistance |

---

### 1(b) Utility Tree

```text
Utility
├── Performance
│   └── Interactive job-management responsiveness
│       └── HPC1: 95% interactive requests < 2 s [H,H]
├── Availability
│   └── Compute/service fault recovery
│       └── HPC2: detect < 5 s; recovery starts < 30 s [H,H]
├── Security
│   └── Job/data confidentiality and access control
│       └── HPC3: reject/log all unauthorized access [H,H]
└── Usability
    └── First-time job submission
        └── HPC4: 90% submit in < 5 min unaided [M,M]
```

`[Business Value, Architectural Impact]`. The `[H,H]` scenarios are strong ASR candidates because they have both high stakeholder value and strong architectural consequences.

---

## Question 2 — HPC requirements and architectural patterns

### 2(a) Three suitable architectural patterns

#### Requirement 1 — Notify users whenever a submitted task/workflow completes

**Pattern: Publish-Subscribe**

The job/workflow subsystem publishes a `job completed` event. User-notification components are subscribers and receive the event without the job processor directly calling every user.

**Why it fits:** the requirement is event-driven notification triggered when a task changes state to completed.

#### Requirement 2 — Store and track submitted tasks and processed data via the Internet

**Pattern: Client-Server**

The browser/application is the **client** and the centralized job/data-management service is the **server**. Clients request job status/data and submit updates through request/reply interactions while the server maintains authoritative persistent state.

**Why it fits:** distributed users need Internet access to centrally managed job and processed-data records.

#### Requirement 3 — Pay fees/join plans for additional computing power

**Pattern: Service-Oriented Architecture (SOA)**

The HPC platform consumes independently managed payment/billing capabilities through published network service interfaces/contracts.

**Why it fits:** the key issue is integration/interoperability with external payment/service providers rather than merely storing user data.

---

### 2(b) Advantage and limitation for each selected pattern

| Pattern | Advantage / enhanced QA | Limitation / threatened QA |
|---|---|---|
| **Publish-Subscribe** | **Modifiability/extensibility** can improve because new notification channels/subscribers can be added without changing the job-completion publisher for each concrete consumer. | **Performance/predictability** may be threatened because queues/event routing add latency and make delivery/order timing less direct. |
| **Client-Server** | **Consistency/manageability** can improve because job/data state is maintained centrally and all clients see one authoritative record. | **Availability/performance** may be threatened because the central server/database can become a bottleneck or single point of failure. |
| **SOA** | **Interoperability** can improve because the HPC platform depends on a published payment/service contract rather than on the provider’s internal implementation. | **Performance/availability** may be threatened because remote calls add network/serialization latency and depend on external services. |

---

### 2(c) Runtime-observable quality attributes and measurements

The four listed attributes — **Availability, Performance, Usability and Security** — can all be observed/measured from behavior of the running system.

| QA | Runtime? | Example measurement |
|---|---|---|
| **Availability** | Yes | 99.99% service uptime or failover within 5 seconds after a service-instance fault |
| **Performance** | Yes | 95% of job-status requests complete within 2 seconds |
| **Usability** | Yes | 90% of first-time users submit a basic job within 5 minutes without assistance |
| **Security** | Yes | 100% of unauthorized job/data access attempts are rejected and logged |

---

### 2(d) Informal runtime QA scenario

Example — Availability:

> While jobs are running, one job-management service instance fails. The HPC platform should redirect requests to a healthy instance and restore normal access within 5 seconds so users can continue monitoring their submitted work.

---

## Question 3 — Map-Reduce

### 3(a) Concrete business software scenario

Example: an online retailer wants to analyze **billions of historical transaction/clickstream records** to calculate total sales per product/category.

The dataset is split across many workers:

```text
Large transaction files
        |
        v
+----------------+
| Parallel Maps  |  emit (product, amount)
+----------------+
        |
        v
  Shuffle / Sort
        |
        v
+----------------+
| Parallel Reduces| sum amounts per product
+----------------+
        |
        v
Sales totals
```

**Why it fits:** the workload is a very large batch dataset that can be partitioned into independent parallel Map tasks and combined through Reduce tasks.

---

### 3(b) Map-Reduce elements in the scenario

1. **Input dataset / partitions** — large transaction/clickstream files split into chunks.
2. **Map tasks/workers** — independently process partitions and emit intermediate key/value pairs, e.g. `(productId, saleAmount)`.
3. **Map-Reduce infrastructure/framework** — schedules tasks, monitors workers and coordinates execution.
4. **Shuffle/Sort stage** — groups intermediate output by key so all values for the same product/category reach the appropriate reducer.
5. **Reduce tasks/workers** — combine values for each key, e.g. sum total sales per product.
6. **Output** — aggregated business-analysis results.

---

### 3(c) How Map-Reduce supports parallel processing and performance

The infrastructure partitions a huge input dataset across many independent **Map tasks**, allowing multiple chunks to be processed simultaneously on different compute nodes. Intermediate key/value output is shuffled/sorted and then different **Reduce tasks** can aggregate independent key groups in parallel.

Causal chain:

```text
Large input split into partitions
        ↓
Many Map tasks run concurrently
        ↓
Shuffle/sort groups intermediate keys
        ↓
Many Reduce tasks run concurrently
        ↓
Higher batch throughput / shorter total processing time
```

The framework can also monitor/restart failed tasks, which supports resilient large-scale processing.

---

### 3(d) Weakness / threatened quality

**Performance** may be threatened for unsuitable workloads because Map-Reduce introduces framework startup, partitioning, shuffle/sort, disk/network I/O and synchronization overhead. Small datasets can therefore run slower than a simpler sequential solution.

Another key weakness is **data skew**: if one key receives far more data than others, one reducer becomes a straggler and limits overall completion time.

---

## Question 4 — Architectural notation, views, view template and Map-Reduce primary presentation

### 4(a) Three architectural notation types

#### Informal notation

- Free-form boxes, lines and annotations.
- **Benefit:** quick and easy for stakeholder communication.
- **Weakness:** weak semantics; different readers may interpret symbols differently.
- **Example:** simple hand-drawn Map → Shuffle → Reduce architecture sketch.

#### Semiformal notation

- Defined syntax/conventions, e.g. UML component/deployment/sequence diagrams or carefully defined architectural diagrams.
- **Benefit:** more precise and less ambiguous while still understandable to most stakeholders/developers.
- **Example:** UML deployment diagram showing Map/Reduce workers allocated to compute nodes.

#### Formal notation

- Mathematically precise language with rigorous semantics and possible automated analysis/verification.
- **Benefit:** maximum precision and analyzability.
- **Weakness:** greater cost/expertise and often unnecessary for ordinary business-system communication.
- **Example:** a formally specified architecture/behavior model used where rigorous verification is required.

**General-purpose exam recommendation:** semiformal notation usually gives the best balance of clarity and precision, but the choice should be justified by stakeholder and analysis needs.

---

### 4(b) Three architectural views

#### Module View

Shows static organization of implementation/code responsibilities and relations such as `uses`, `is-part-of` or `allowed-to-use`.

**Need:** helps developers understand decomposition, responsibility allocation and change impact.

#### Component-and-Connector (C&C) View

Shows runtime components and connectors/interactions.

**Need:** supports reasoning about runtime communication, concurrency, performance, availability and interaction behavior.

#### Allocation View

Shows mapping of software to its environment such as hardware/deployment nodes, file structures or teams.

**Need:** supports deployment, scaling, resource assignment and physical/runtime separation.

**Remember:** structure = elements/relations that exist; view = representation of one selected structure.

---

### 4(c) Four main view-template elements

1. **Primary Presentation** — main diagram/representation of the view.
2. **Element Catalog** — definitions/properties of the elements and relations appearing in the view.
3. **Context Diagram** — system/view boundary plus relevant external actors, systems or resources.
4. **Variability Guide** — optional/configurable elements, allowed alternatives, configuration points and binding decisions.

Additional useful material can include rationale, known issues and cross-view correspondence, but the four above are the core requested elements.

---

### 4(d) Primary presentation of the Map-Reduce scenario

A suitable labelled primary presentation:

```text
                     +----------------------+
                     | Large Transaction    |
                     | Dataset / File Store |
                     +----------+-----------+
                                |
                         split / partitions
                +---------------+---------------+
                |               |               |
                v               v               v
          +-----------+   +-----------+   +-----------+
          | Map Task 1|   | Map Task 2|   | Map Task N|
          +-----+-----+   +-----+-----+   +-----+-----+
                \              |              /
                 \             |             /
                  +------------+------------+
                               |
                        Shuffle / Sort
                               |
               +---------------+---------------+
               |                               |
               v                               v
        +-------------+                 +-------------+
        | Reduce Task1|                 | Reduce TaskM|
        +------+------+                 +------+------+
               \                               /
                +-------------+---------------+
                              |
                              v
                     +----------------+
                     | Aggregated     |
                     | Sales Results  |
                     +----------------+
```

Labels should make clear that:

- input is partitioned,
- Map tasks operate in parallel,
- infrastructure performs shuffle/sort,
- Reduce tasks aggregate grouped keys,
- output contains final results.
