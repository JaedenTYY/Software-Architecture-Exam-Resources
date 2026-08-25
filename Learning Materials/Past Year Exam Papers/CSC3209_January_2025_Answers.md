# CSC3209 January 2025 — Model Answers

> **Status:** Course-grounded model answer key, not an official university marking scheme. Alternative answers may be valid when the pattern/quality choice is correctly mapped to the scenario and justified by its mechanism.
>
> Use with: [CSC3209 January 2025 Exam](./CSC3209_January_2025_Exam.md) and [Universal Answer Frameworks](../../universal_answers.md).

---

## Question 1 — Online trading platform

### 1(a) Three suitable architectural patterns

#### Requirement 1 — Real-time stock prices shown through multiple charts, responsive UI

**Pattern: Model-View-Controller (MVC)**

- **Model:** current stock prices, portfolio/trading state and application logic.
- **Views:** line chart, bar chart, table/candlestick representations.
- **Controllers:** user interactions such as zooming, filtering, selecting a stock or placing an order.

**Why it fits:** the same Model data must be represented in several Views while UI behavior changes independently from core application logic. Controllers mediate user input and the views refresh when the model changes.

#### Requirement 2 — Notify users when a stock reaches a target value

**Pattern: Publish-Subscribe**

The market-price/alert subsystem publishes an event when a watched price reaches the configured threshold. Interested user-alert components are subscribers.

**Why it fits:** users should receive an event-driven notification when data changes, rather than repeatedly polling every user from the publisher.

#### Requirement 3 — Buy stocks using external banking/payment services

**Pattern: Service-Oriented Architecture (SOA)**

The trading platform consumes independent external payment/banking services through published network interfaces/contracts.

**Why it fits:** the requirement is integration/interoperability with independently managed external service providers.

---

### 1(b) Advantage and limitation for each selected pattern

| Pattern | Advantage / enhanced quality | Limitation / threatened quality |
|---|---|---|
| **MVC** | **Modifiability** can improve because presentation is separated from Model logic; a new chart can be added mainly as a new View without rewriting trading logic. | **Performance/complexity** may be threatened because frequent model updates can trigger multiple view refreshes and extra coordination. |
| **Publish-Subscribe** | **Modifiability/extensibility** can improve because new alert subscribers/channels can be added without changing publisher correctness. | **Performance/predictability** may be threatened by event routing, queueing, delivery-order and asynchronous-latency overhead. |
| **SOA** | **Interoperability** can improve because the platform depends on published service contracts rather than a provider’s internal technology. | **Performance/availability** may be threatened because remote provider calls add network/serialization latency and introduce external dependencies. |

---

### 1(c) Which listed quality attributes are observable at runtime?

The four listed attributes are **Modifiability, Performance, Usability and Security**.

- **Performance — runtime observable.** Measure response time, latency, throughput or resource use while the system runs.
- **Usability — runtime/user-interaction observable.** Measure task completion time, error rate, learnability or user success while users interact with the running UI.
- **Security — largely runtime observable.** Observe authentication/authorization decisions, rejected attacks, audit events and confidentiality/integrity violations during execution.
- **Modifiability — primarily design/development-time, not runtime.** It is evaluated by the effort, scope and ripple effect required to make a change to the software.

Therefore the runtime-observable qualities among the four are **Performance, Usability and Security**; **Modifiability** is primarily a development-time quality.

---

### 1(d) Formal runtime quality scenario

Example — Performance of stock-price display:

| QA part | Specification |
|---|---|
| **Source** | Market-data feed |
| **Stimulus** | A watched stock price changes |
| **Environment** | Peak trading period |
| **Artifact** | Market-data service + trading dashboard |
| **Response** | System processes the new price and refreshes the user’s current View |
| **Response Measure** | 95% of displayed price updates appear within **1 second** of receipt |

---

## Question 2 — Four QA scenarios and Utility Tree

### 2(a) Four QA scenarios for trading-platform users

#### T1 — Performance

| Part | Answer |
|---|---|
| Source | Trader |
| Stimulus | Requests current quote/order information |
| Environment | Peak market load |
| Artifact | Trading/market-data service |
| Response | System retrieves and displays the information |
| Response Measure | 95% of requests complete within 2 seconds |

#### T2 — Availability

| Part | Answer |
|---|---|
| Source | Application-server fault |
| Stimulus | One trading-service instance crashes |
| Environment | Market open |
| Artifact | Trading service |
| Response | Traffic is redirected to a healthy instance and service continues |
| Response Measure | Failover within 5 seconds; no more than one failed request |

#### T3 — Security

| Part | Answer |
|---|---|
| Source | Unauthorized attacker |
| Stimulus | Attempts to place an order or access another user’s portfolio |
| Environment | Normal Internet operation |
| Artifact | Account/order service |
| Response | System rejects the operation and records an audit event |
| Response Measure | 100% of unauthorized operations are rejected and logged |

#### T4 — Usability

| Part | Answer |
|---|---|
| Source | First-time trader |
| Stimulus | Attempts to locate a stock and submit a simple order |
| Environment | Normal operation |
| Artifact | Trading UI |
| Response | UI guides the user through search, order entry and confirmation |
| Response Measure | 90% of first-time users complete the task within 3 minutes without assistance |

---

### 2(b) Utility Tree

```text
Utility
├── Performance
│   └── Trading responsiveness
│       └── T1: 95% requests < 2 s [H,H]
├── Availability
│   └── Market-hours continuity
│       └── T2: failover within 5 s [H,H]
├── Security
│   └── Account/order protection
│       └── T3: reject/log unauthorized operations [H,H]
└── Usability
    └── Order-entry learnability
        └── T4: 90% complete order in 3 min unaided [H,M]
```

`[Business Value, Architectural Impact]`. The `[H,H]` scenarios are strong ASR candidates.

---

## Question 3 — Pipe-and-Filter

### 3(a) Concrete business scenario

Example: a financial-data processing pipeline receives raw market/transaction data and performs successive stages:

```text
Raw feed
→ Parse
→ Validate
→ Normalize
→ Enrich / calculate indicators
→ Persist / publish result
```

Each stage is an independent **Filter** and the intermediate data is carried through **Pipes**.

**Benefit:** each transformation can be developed/replaced/reused independently and different stages may operate concurrently on different data items.

---

### 3(b) Elements of Pipe-and-Filter in the scenario

1. **Filters** — independent transformation stages. Example: parser, validator, normalizer and indicator calculator.
2. **Pipes** — connectors that transport output from one filter to the next.
3. **Data stream/items** — market or transaction records flowing through the pipeline.
4. **Filter interface/contract** — each filter consumes input in an expected form and produces output for the next stage.

Example mapping:

```text
MarketFeed
   |
   v
[Parse Filter]
   |
   v
[Validate Filter]
   |
   v
[Normalize Filter]
   |
   v
[Indicator Filter]
   |
   v
Processed Data
```

The key constraint is **successive transformation**: each filter processes incoming data and forwards transformed output rather than controlling the entire pipeline.

---

### 3(c) How the pattern supports parallelization

Buffered pipes decouple adjacent filters enough for **pipeline parallelism**.

Example:

- Parser processes item 3,
- Validator processes item 2,
- Normalizer processes item 1,

at the same time.

Thus different filters can work concurrently on different data items, increasing **throughput**. This does not necessarily reduce the end-to-end latency of one individual item.

---

### 3(d) Weakness / threatened quality

**Performance** can also be threatened despite the parallelism.

> Each extra filter/pipeline boundary can introduce buffering, copying, serialization, synchronization and scheduling overhead. For a small workload, the overhead may exceed the parallelism benefit and increase latency.

Another defensible answer is **Availability**: if every item must pass through one mandatory filter, failure of that filter can stop the whole pipeline unless recovery/redundancy is provided.

---

## Question 4 — Client-Server and Layer views; mapping; design pattern

### 4(a) Architectural views for both patterns

#### Client-Server — Component-and-Connector (runtime) view

Client-Server is best represented as a **C&C view** because it describes runtime request/reply interaction.

```text
+---------------------+
| Web / Mobile Client |
+---------------------+
          |
          | HTTPS request/reply
          v
+---------------------+
| Booking Server      |
| / Booking Service   |
+---------------------+
          |
          | database calls
          v
+---------------------+
| Booking Database    |
+---------------------+
```

- Client requests current booking/boarding-pass data.
- Server provides the service and accesses central booking state.

#### Layer — Module view

Layer is best represented as a **Module structure/view** because it organizes implementation responsibilities and allowed-to-use dependencies.

```text
+--------------------------+
| Presentation Layer       |
| UI / Web Controllers     |
+--------------------------+
            |
            v
+--------------------------+
| Business / Service Layer |
| Booking rules / orders   |
+--------------------------+
            |
            v
+--------------------------+
| Data Access Layer        |
| Repositories / DB access |
+--------------------------+
```

Primary relation: **allowed-to-use** downward dependencies. The intended separation limits direct Presentation → Data Access coupling.

---

### 4(b) Mapping between the two architectural views

A mapping states how module elements correspond to runtime components.

Example:

| Layer/module view | C&C/runtime mapping |
|---|---|
| Presentation Layer | Implemented mainly by Web/Mobile Client UI and server-side presentation/controller components |
| Business/Service Layer | Implements the Booking Server / Booking Service runtime component |
| Data Access Layer | Implements repository/database-access logic used by the Booking Service |
| Persistent database | Runtime/shared data resource used through Data Access components |

In prose:

> Presentation modules implement the user-facing client/controller responsibilities; business modules implement the booking-service component; data-access modules implement the persistence logic used by that component. The module view shows code organization, while the C&C view shows runtime interaction.

---

### 4(c) Implementation-level design pattern for airline-promotion notifications

**Pattern: Observer**

- **Subject:** promotion/airline-offer object or service inside the application.
- **Observers:** notification, UI or user-preference objects interested in promotions.
- **Trigger:** a relevant promotion is added or changes state.
- **Action:** the Subject notifies registered Observers automatically.

**Why it fits:** the question asks for an implementation-level design pattern where dependent objects should react when another object’s state changes. Observer supplies a one-to-many notification relationship without hard-coding each concrete observer.

**Distinction:** Publish-Subscribe would be the broader architectural event-distribution answer; Observer is the GoF implementation-level answer requested here.
