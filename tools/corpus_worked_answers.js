const PATTERNS = {
  "Layer": {
    category: "Module pattern",
    problem: "separate implementation responsibilities and control allowed dependencies",
    feature: s => `separate the ${s} presentation, application rules and persistence adapters so each can change locally`,
    mapping: s => `the ${s} UI is the presentation layer, use-case services form the application layer, domain rules form the domain layer and repository adapters form the data-access layer; allowed-to-use dependencies point downward through those interfaces`,
    enhanced: "Modifiability",
    benefit: "cohesive responsibilities and restricted dependencies localize most changes",
    threatened: "Performance",
    weakness: "extra layer crossings add calls, translation and indirection",
    constraint: "each software unit belongs to one layer and dependencies obey the documented allowed-to-use direction",
    failure: s => `a ${s} screen queries the database directly. A schema change then forces changes in both UI and persistence code, so the intended modifiability benefit is lost; the bypass may be faster, but it breaks the layer constraint`,
    alternative: "Multi-Tier",
    distinction: "Multi-Tier is preferable when the main problem is separate runtime deployment, scaling or security boundaries rather than source-code responsibility organization"
  },
  "Broker": {
    category: "Component-and-Connector pattern",
    problem: "invoke distributed providers without binding clients to provider identity or location",
    feature: s => `let ${s} clients invoke a replaceable remote provider through one location-transparent intermediary`,
    mapping: s => `the ${s} front end is the Client, remote capability instances are Servers, and the Broker plus optional proxies locate a Server, forward the request and return the reply`,
    enhanced: "Modifiability",
    benefit: "providers can move or be replaced while clients remain bound to the broker contract",
    threatened: "Performance",
    weakness: "broker mediation adds network hops and processing latency",
    constraint: "clients attach to the Broker rather than directly to a concrete provider",
    failure: s => `all ${s} calls pass through one unreplicated Broker that becomes overloaded. Provider location is hidden, but requests still time out, so the pattern does not guarantee performance or availability`,
    alternative: "Client-Server",
    distinction: "Client-Server is simpler when clients may bind to one known central service and location transparency is unnecessary"
  },
  "Model-View-Controller": {
    category: "Component-and-Connector pattern",
    problem: "separate application state and behavior from presentation and user-input handling",
    feature: s => `show the same ${s} state in multiple synchronized views while keeping input logic separate`,
    mapping: s => `the ${s} domain data and operations form the Model, dashboard/table/mobile representations are Views, and input handlers are Controllers; Controllers update the Model and Views refresh from Model notifications`,
    enhanced: "Modifiability",
    benefit: "presentation and input behavior can change without rewriting core application state and rules",
    threatened: "Performance",
    weakness: "frequent Model changes can trigger excessive View notifications and rendering",
    constraint: "Views present or query Model state and Controllers mediate input instead of embedding domain state independently",
    failure: s => `each ${s} View keeps its own copy of business state and writes it directly. The views become inconsistent and every rule change must be duplicated, so MVC no longer provides synchronized state or localized UI change`,
    alternative: "Layer",
    distinction: "Layer is preferable when the problem is static implementation dependency organization rather than synchronized runtime Model/View/Controller interaction"
  },
  "Pipe-and-Filter": {
    category: "Component-and-Connector pattern",
    problem: "perform successive independent transformations of data",
    feature: s => `process ${s} input through validation, normalization, enrichment and output stages`,
    mapping: s => `each ${s} transformation is a Filter and each Pipe carries one Filter's output to the next Filter without performing transformation logic itself`,
    enhanced: "Modifiability",
    benefit: "independent Filters can be replaced, reordered or reused behind stable data contracts",
    threatened: "Performance",
    weakness: "buffering, copying, conversion and synchronization across many stages add latency",
    constraint: "Filters transform data independently and Pipes only transport compatible data between stages",
    failure: s => `one ${s} Filter depends on another Filter's private state and emits an incompatible format. Stages can no longer be replaced independently and conversion failures stop the pipeline, so the claimed modifiability and throughput are not achieved`,
    alternative: "Map-Reduce",
    distinction: "Map-Reduce is preferable for infrastructure-managed parallel batch partitions with shuffle/sort and Reduce aggregation"
  },
  "Client-Server": {
    category: "Component-and-Connector pattern",
    problem: "provide shared centrally managed services to distributed requesters",
    feature: s => `let distributed ${s} clients request authoritative records and operations from a central service`,
    mapping: s => `web/mobile applications are Clients, the ${s} application service is the Server, and network request/reply connectors carry operations and results`,
    enhanced: "Modifiability",
    benefit: "a shared service or rule can be changed centrally instead of in every client",
    threatened: "Performance",
    weakness: "concentrated requests can make the Server or its shared dependencies a bottleneck",
    constraint: "Clients initiate request/reply and the Server owns the shared service or authoritative resource",
    failure: s => `the ${s} uses one Server and one database with no failover. A server crash stops every Client, while a peak burst queues all requests, so centralization alone guarantees neither Availability nor Performance`,
    alternative: "Peer-to-Peer",
    distinction: "Peer-to-Peer is preferable when participants must both request and provide resources without one fixed central provider"
  },
  "Peer-to-Peer": {
    category: "Component-and-Connector pattern",
    problem: "share resources among equal participants that can both request and provide",
    feature: s => `let ${s} participant devices contribute and retrieve shared resources as peers`,
    mapping: s => `each participating ${s} node is a Peer, optional supernodes assist discovery, and peer request/reply plus discovery connectors locate and transfer resources`,
    enhanced: "Availability",
    benefit: "overlapping providers can keep a resource available when one Peer leaves",
    threatened: "Security",
    weakness: "decentralized trust, authorization and data validation are harder to control consistently",
    constraint: "participants have symmetric requesting/providing roles and attachments may change at runtime",
    failure: s => `a required ${s} resource exists on only one Peer and discovery has no alternative route. When that Peer disconnects the resource is unavailable, proving that the P2P label alone does not guarantee Availability`,
    alternative: "Client-Server",
    distinction: "Client-Server is preferable when one authority must own and consistently control the shared data or service"
  },
  "Service-Oriented Architecture": {
    category: "Component-and-Connector pattern",
    problem: "integrate independently managed network services through published contracts",
    feature: s => `integrate the ${s} with independently managed payment, identity or external-data services`,
    mapping: s => `the ${s} is a Service Consumer, external capabilities are Service Providers, published REST/SOAP/message contracts are connectors, and a registry, ESB or orchestrator is added only where discovery, transformation or workflow is required`,
    enhanced: "Interoperability",
    benefit: "consumers depend on published syntax and semantics rather than provider implementation technology",
    threatened: "Performance",
    weakness: "remote calls and middleware add latency and independently managed providers may offer weak performance guarantees",
    constraint: "services expose published interfaces and consumers do not depend on provider internals",
    failure: s => `an external ${s} provider changes message semantics without versioning its contract. Calls still connect but data is interpreted incorrectly, so published syntax alone has not delivered meaningful Interoperability`,
    alternative: "Broker",
    distinction: "Broker is preferable when the central concern is location-transparent invocation of distributed Servers rather than a service ecosystem of independent providers and consumers"
  },
  "Publish-Subscribe": {
    category: "Component-and-Connector pattern",
    problem: "distribute events to a changing set of interested runtime consumers",
    feature: s => `send ${s} status events to all currently interested users and components without naming each recipient`,
    mapping: s => `the ${s} status component is the Publisher, interested notification/dashboard components are Subscribers, and an event distributor or publish-subscribe connector handles announce/listen delivery`,
    enhanced: "Modifiability",
    benefit: "Subscribers can be added or removed without changing Publisher correctness",
    threatened: "Performance",
    weakness: "event distribution, fan-out and queueing add latency and processing work",
    constraint: "Publishers announce through the connector and do not directly invoke every concrete Subscriber",
    failure: s => `the ${s} Publisher directly calls a fixed list of recipients and waits synchronously for each one. A slow recipient delays all delivery and adding a recipient changes the Publisher, so the intended decoupling and latency characteristics are lost`,
    alternative: "Observer",
    distinction: "Observer is preferable for implementation-level object dependencies inside one program; Publish-Subscribe describes architectural runtime components and an event-distribution connector"
  },
  "Shared-Data": {
    category: "Component-and-Connector pattern",
    problem: "let independent components communicate indirectly through a common persistent repository",
    feature: s => `let independent ${s} services read and update the same authoritative records`,
    mapping: s => `the ${s} database is the Shared-Data Store, application/reporting/processing services are Data Accessors, and read/write transactions are the data-access connectors`,
    enhanced: "Modifiability",
    benefit: "producers and consumers need not call or know one another directly",
    threatened: "Performance",
    weakness: "the central Store can bottleneck and all Accessors remain coupled to its schema and consistency rules",
    constraint: "Accessors exchange shared state through the Store rather than owning separate incompatible copies",
    failure: s => `every ${s} Accessor depends on undocumented columns and one database instance. A schema change breaks all Accessors and a store outage stops them together, so indirect communication has created schema coupling and a single failure point`,
    alternative: "Client-Server",
    distinction: "Client-Server is preferable when consumers request a service operation and the Server, rather than a repository, owns the behavior"
  },
  "Map-Reduce": {
    category: "Allocation pattern",
    problem: "process very large batch datasets using infrastructure-managed parallel work",
    feature: s => `analyze the ${s} historical event/log dataset in parallel`,
    mapping: s => `Map workers process ${s} input partitions into key/value records, infrastructure shuffles and sorts equal keys, Reduce workers aggregate each group, and the infrastructure deploys, monitors and reruns tasks`,
    enhanced: "Performance",
    benefit: "parallel Map and Reduce tasks can increase batch throughput",
    threatened: "Performance",
    weakness: "startup, shuffle/sort and synchronization overhead or partition skew can erase the parallel benefit",
    constraint: "work must be partitionable into Map, shuffle/sort and Reduce stages managed by the infrastructure",
    failure: s => `one ${s} partition contains most records for a hot key. One Reduce worker becomes the straggler while others idle, so total completion time is set by that worker and adding workers does not deliver the expected Performance gain`,
    alternative: "Pipe-and-Filter",
    distinction: "Pipe-and-Filter is preferable for successive stream transformations where each item moves through ordered Filters"
  },
  "Multi-Tier": {
    category: "Allocation pattern",
    problem: "separate runtime component groups into independently deployed tiers",
    feature: s => `deploy the ${s} presentation, application processing and data management on separate runtime tiers`,
    mapping: s => `browser/mobile components form the presentation tier, ${s} services form the application tier, and database components form the data tier; network request/reply connectors cross only permitted tier boundaries`,
    enhanced: "Security",
    benefit: "separate deployment boundaries allow different exposure, privileges and protection policies",
    threatened: "Performance",
    weakness: "cross-tier network calls, serialization and chatty interactions add latency",
    constraint: "each runtime component belongs to one tier and communication follows the documented tier rules",
    failure: s => `all ${s} tiers are placed on one host with the database publicly reachable. The diagram still has three named tiers, but there is no real failure or security isolation, so the expected Security and Availability consequences are not achieved`,
    alternative: "Layer",
    distinction: "Layer is preferable when the concern is logical module responsibilities and allowed source-code dependencies rather than runtime allocation"
  }
};

function identifier(value) {
  return String(value || "System").replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase()).replace(/^[a-z]/, char => char.toUpperCase());
}

const DESIGN_PATTERNS = {
  "Factory Method": {
    category: "Creational",
    intent: "define a creation operation while allowing subclasses to choose the concrete Product",
    mapping: s => `Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the ${s}`,
    use: "use it when framework code knows when a product is needed but should not hard-code which concrete class is created",
    alternative: "Singleton",
    rejection: "Singleton controls instance count and does not delegate the concrete product choice to subclasses"
  },
  "Singleton": {
    category: "Creational",
    intent: "ensure exactly one controlled instance and provide a global access point",
    mapping: s => `the ${s} ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies`,
    use: "use it only when the domain genuinely requires one coordinated instance",
    alternative: "Factory Method",
    rejection: "Factory Method varies concrete products but does not enforce that only one instance exists"
  },
  "Composite": {
    category: "Structural",
    intent: "represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly",
    mapping: s => `Component = NavigationItem; Leaf = a ${s} screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu`,
    use: "use it when individual objects and recursive groups must support the same operations",
    alternative: "Facade",
    rejection: "Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations"
  },
  "Facade": {
    category: "Structural",
    intent: "provide one simpler higher-level interface over a complex subsystem",
    mapping: s => `the ${identifier(s)}Facade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation`,
    use: "use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves",
    alternative: "Composite",
    rejection: "Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services"
  },
  "Observer": {
    category: "Behavioral",
    intent: "define a one-to-many dependency so registered dependents update automatically after Subject state changes",
    mapping: s => `Subject = ${identifier(s)}StatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes`,
    use: "use it for implementation-level notification where the Subject must not depend on concrete observer classes",
    alternative: "State",
    rejection: "State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects"
  },
  "State": {
    category: "Behavioral",
    intent: "allow a Context to vary its own behavior by delegating to its current State object",
    mapping: s => `Context = ${identifier(s)}Transaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State`,
    use: "use it when state-specific behavior would otherwise be spread across repeated conditionals",
    alternative: "Observer",
    rejection: "Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior"
  }
};

function architecturalPatternAnswers(question) {
  if (question.topic !== "Architectural Patterns") return;
  const patternName = PATTERNS[question.subtopic] ? question.subtopic : (question.tags || []).find(tag => PATTERNS[tag]);
  const spec = PATTERNS[patternName];
  if (!spec) return;
  const s = question.scenario || "the system";

  if (question.type === "Scenario application") {
    question.answer_outline = `**Answer: ${patternName} (${spec.category}).**\n\nIn the ${s}, apply it to ${spec.feature(s)}. The architectural problem is to ${spec.problem}.\n\n**Concrete elements and relations:** ${spec.mapping(s)}.\n\n**Quality consequence:** ${spec.enhanced} may improve because ${spec.benefit}. The main trade-off is ${spec.threatened}: ${spec.weakness}.`;
  }
  if (question.type === "Constraint / failure reasoning") {
    question.answer_outline = `**Reject the guarantee.** Selecting ${patternName} does not guarantee a quality attribute; the mechanism and constraints must actually hold.\n\n**Required constraint:** ${spec.constraint}.\n\n**Concrete ${s} edge case:** ${spec.failure(s)}.`;
  }
  if (["Quality trade-off", "Quality benefit and weakness"].includes(question.type)) {
    const threatLabel = question.type === "Quality benefit and weakness" ? "Weakness" : "Threatened quality";
    question.answer_outline = `**Enhanced quality - ${spec.enhanced}:** In the ${s}, ${spec.benefit}; concretely, ${spec.feature(s)}.\n\n**${threatLabel} - ${spec.threatened}:** ${spec.weakness}. This follows from the actual ${patternName} elements/relations: ${spec.mapping(s)}.`;
  }
  if (question.type === "Compare and distinguish") {
    question.answer_outline = `**Choose ${patternName} for the ${s}.** The requirement is to ${spec.feature(s)}, which matches ${patternName}'s problem: ${spec.problem}. Concretely, ${spec.mapping(s)}.\n\n**Decisive distinction:** ${spec.distinction}. Therefore **${spec.alternative}** becomes preferable only when that alternative concern replaces the requirement stated in this question.`;
  }
}

function designPatternAnswers(question) {
  if (question.topic !== "Design Patterns") return;
  const spec = DESIGN_PATTERNS[question.subtopic];
  const s = question.scenario || "the system";
  if (spec && question.type === "Intent/applicability/participants") {
    question.answer_outline = `**Category:** ${spec.category}.\n**Intent:** ${spec.intent}.\n**When to use:** ${spec.use}.\n**Concrete ${s} mapping:** ${spec.mapping(s)}.`;
  }
  if (spec && question.type === "Pattern selection under ambiguity") {
    question.answer_outline = `**Yes, ${question.subtopic} is suitable.** The requirement matches its intent: ${spec.intent}. ${spec.use}.\n\n**Participant mapping in the ${s}:** ${spec.mapping(s)}.\n\n**Less suitable alternative - ${spec.alternative}:** ${spec.rejection}.`;
  }
  if (question.type === "Category + examples") {
    const category = /Creational/i.test(question.prompt) ? "Creational" : /Structural/i.test(question.prompt) ? "Structural" : "Behavioral";
    const choices = category === "Creational" ? ["Factory Method", "Singleton"] : category === "Structural" ? ["Composite", "Facade"] : ["Observer", "State"];
    const [first, second] = choices.map(name => [name, DESIGN_PATTERNS[name]]);
    question.answer_outline = `**${category} patterns:** ${category === "Creational" ? "abstract object creation so clients are less dependent on concrete construction" : category === "Structural" ? "compose classes and objects into useful larger structures" : "organize algorithms, responsibilities and communication among objects"}.\n\n**1. ${first[0]}:** ${first[1].intent}. In the ${s}, ${first[1].mapping(s)}. Motivation: ${first[1].use}.\n\n**2. ${second[0]}:** ${second[1].intent}. In the ${s}, ${second[1].mapping(s)}. Motivation: ${second[1].use}.`;
  }
}

const DECISIONS = {
  "Allocation of responsibilities": s => `Place authentication and authorization policy in one ${s} IdentityService while feature modules request access decisions through its interface. Security improves because policy is enforced consistently; Performance may worsen because each protected operation adds a service call and the service can bottleneck.`,
  "Coordination model": s => `Use asynchronous publish-subscribe for ${s} status changes instead of direct calls from the producer to every recipient. Modifiability improves because recipients can change independently; Performance predictability may worsen because queueing and fan-out add latency.`,
  "Data model": s => `Define one versioned canonical ${s} record schema at the integration boundary. Interoperability improves because independent systems share syntax and semantics; Modifiability may worsen because incompatible schema changes require coordinated versioning or adapters.`,
  "Management of resources": s => `Give the ${s} application service a bounded database-connection pool with per-client quotas. Performance improves under expected load by reusing connections; Availability can be threatened if the pool is exhausted and no timeout, back-pressure or reserved capacity protects critical requests.`,
  "Mapping among architectural elements": s => `Deploy ${s} presentation, application and data components on separate tiers and replicate the application tier. Security improves through network isolation and Availability improves through replaceable application instances; Performance may worsen because calls cross process/network boundaries.`,
  "Binding-time decisions": s => `Bind the ${s} payment/provider endpoint from validated deployment configuration at startup instead of compiling one provider address into clients. Modifiability improves because providers can change without rebuilding clients; Availability or Security can be harmed by an invalid or malicious configuration, so validation and rollback are required.`,
  "Choice of technology": s => `Use a transactional relational database for authoritative ${s} records. Security and consistency-related protection improve through mature access control and atomic transactions; Modifiability may worsen if vendor-specific SQL and deployment features spread through business modules.`
};

function decisionAndFoundationAnswers(question) {
  const s = question.scenario || "the system";
  if (question.topic === "Quality-Driven Design Decisions" && question.type === "Architecture decision reasoning" && DECISIONS[question.subtopic]) {
    question.answer_outline = `**Concrete decision for the ${s}:** ${DECISIONS[question.subtopic](s)}`;
  }
  if (question.topic === "Foundations" && question.type === "Consequences and change") {
    question.answer_outline = `Four concrete reasons architecture matters to the **${s}** are:\n\n1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.\n2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.\n3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.\n4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.\n\nThese are causal applications to the ${s}, not merely four headings from the lecture list.`;
  }
  if (question.topic === "Foundations" && question.type === "Definition and boundary") {
    question.answer_outline = `Software architecture is **the set of structures needed to reason about the ${s}, comprising software elements, relations among them and properties of both**.\n\n- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.\n- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.\n- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.\n- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.`;
  }
  if (question.topic === "Foundations" && question.type === "Architecture Influence Cycle") {
    question.answer_outline = `For the **${s}**:\n\n- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.\n- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.\n- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.\n- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.\n\nThe influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.`;
  }
}

function documentationAndDesignAnswers(question) {
  const s = question.scenario || "the system";
  if (question.topic === "Architecture Documentation" && question.type === "Document a view") {
    question.answer_outline = `**Example ${s} C&C-view entry**\n\n- **Primary Presentation:** Web/Mobile Client --HTTPS request/reply--> Application Service --SQL--> Records Database. The key identifies components and connectors.\n- **Element Catalog:** Client renders input/results; Application Service owns use cases and authorization; Records Database stores authoritative records. HTTPS and SQL connector responsibilities and interfaces are listed.\n- **Context Diagram:** users and approved external systems are outside the ${s} boundary; identity/payment providers are external dependencies.\n- **Variability Guide:** additional client channels implement the same API; application-service replicas may be added behind the endpoint.\n- **Rationale:** centralized services protect authoritative state, while explicit connectors expose security, performance and availability decisions.\n- **Mistake to avoid:** an unlabeled box-and-line picture with no key, interfaces or relation semantics.`;
  }
  if (question.topic === "Architecture Documentation" && question.type === "Cross-view mapping") {
    question.answer_outline = `A cross-view mapping states how elements in different views realize the same **${s}** architecture. It is often many-to-many because several modules can implement one runtime component and one shared module can execute in several components.\n\n**Concrete correspondences:**\n1. The UI module **implements** the Web/Mobile Client component; that Client **is implemented by** the UI module.\n2. The Application and Domain modules together **implement** the Application Service component, while the Data-Access module implements its SQL connector to the Records Database.\n\nIn a deployment view, the Application Service would additionally be **allocated to** application-server nodes.`;
  }
  if (question.topic === "Designing an Architecture" && question.type === "Apply ADD") {
    question.answer_outline = `**ADD steps:** 1) choose an element to design; 2) identify the ASRs for that element; 3) generate a design solution; 4) verify/refine requirements and produce input for the next iteration; 5) repeat until the ASRs are satisfied.\n\n**One ${s} iteration:** choose the application-service element. The ASR is that the core user transaction must remain available after one service-instance failure and recover within 5 seconds. Select stateless service replicas behind a health-checking load balancer with shared durable state. Verify by killing one replica under load and measuring recovery and failed requests. The next iteration decomposes the service and designs state/session handling.\n\n**Backtracking:** backtrack if the test shows the shared database or session design still prevents the 5-second recovery target and further decomposition cannot repair that structural weakness.`;
  }
  if (question.topic === "Designing an Architecture" && question.type === "Critical design reasoning") {
    question.answer_outline = `Architecture design is **generate and test** because each design is a reasoned hypothesis about satisfying the ${s} ASRs. For example, generate a hypothesis of stateless application-service replicas behind a load balancer, then test it against a 5-second failover scenario and peak-load response target.\n\nThe initial hypothesis may come from a proven reference architecture, an existing system, known patterns/tactics, a framework or domain decomposition. If fault injection exposes a shared-database failure point, preserve the successful stateless service boundary but revise the next hypothesis with database replication/failover. Randomly replacing unrelated parts would be guess-and-test because it would not respond to the observed weakness.`;
  }
  if (question.topic === "Designing an Architecture" && question.type === "ASR allocation") {
    question.answer_outline = `Decomposition does not remove the **${s}** end-to-end Performance and Availability obligations; it allocates parts of them to collaborating elements.\n\nFor a 2-second response target, allocate at most 200 ms to the client/network, 1 second to the application service, 500 ms to persistence and 300 ms contingency, then verify the complete path. For a 5-second recovery target, require health checks and replaceable application replicas, plus database failover and recoverable session state. A pre-existing database that cannot replicate is a constraint: the architect must add a supported failover mechanism, renegotiate the target or record the unresolved risk. The composed interactions must still meet the original system-level measures.`;
  }
}

function qualityScenario(s, qa) {
  const rows = {
    Performance: [`500 concurrent authenticated users`, `submit core ${s} requests during a five-minute peak`, `peak-load operation`, `the ${s} application service`, `process and return each result without exhausting resources`, `at least 95% complete within 2 seconds while sustaining 500 requests/second`],
    Availability: [`an application-server fault`, `the active ${s} service instance crashes`, `normal operation with active user sessions`, `the ${s} service and failover infrastructure`, `detect the failure, remove the instance and route work to a healthy replica`, `service is restored within 5 seconds with no more than 1 failed request`],
    Security: [`an unauthenticated external actor`, `requests a protected ${s} record`, `normal operation while legitimate users are active`, `the ${s} API and protected store`, `reject the request, disclose no protected fields and create an audit event`, `zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written`],
    Modifiability: [`the product owner`, `requests a new validation rule for an existing ${s} transaction`, `development and test time before release`, `the ${s} application and rule modules`, `implement and regression-test the rule without changing unrelated behavior`, `one developer completes it within 2 working days and modifies no more than 2 modules`]
  }[qa];
  return { qa, source:rows[0], stimulus:rows[1], environment:rows[2], artifact:rows[3], response:rows[4], measure:rows[5] };
}

function renderSixPart(row) {
  return `Source: ${row.source}; Stimulus: ${row.stimulus}; Environment: ${row.environment}; Artifact: ${row.artifact}; Response: ${row.response}; Response Measure: ${row.measure}.`;
}

function isMissionCritical(s) {
  return /hospital|medical|bank|wallet|electricity|traffic|cybersecurity|manufacturing|telecommunications|insurance|supply chain/i.test(s);
}

function requirementsAndViewsAnswers(question) {
  const s = question.scenario || "the system";
  if (question.topic === "Architecture and Requirements" && question.type === "Identify ASRs") {
    question.answer_outline = `**Requirements (ii) and (iii) are the likely ASRs for the ${s}.** Both have high stakeholder/business value and profound architectural impact. Requirement (ii) requires distributed clients plus one authoritative service/data model, influencing Client-Server interaction, consistency, Security and Availability. Requirement (iii) requires contracts/adapters for independently managed external providers, influencing SOA-style integration and Interoperability. Renaming a menu label and changing an icon are local presentation changes, so (i) and (iv) are not ASRs unless an unusual legal, safety or system-wide Usability concern makes them architecturally significant.`;
  }
  if (question.topic === "Architecture and Requirements" && question.type === "Apply QAW") {
    const availability = qualityScenario(s, "Availability");
    question.answer_outline = `QAW is suitable because the **${s}** architecture is not final and its many stakeholders need to turn vague quality wishes into prioritized, testable scenarios.\n\n**Eight steps:** 1) QAW presentation and introductions; 2) business/mission presentation; 3) architectural-plan presentation; 4) identify architectural drivers; 5) brainstorm scenarios; 6) consolidate duplicates; 7) prioritize scenarios; 8) refine the highest priorities into six-part form.\n\n**Concrete output:** a top-ranked scenario could be: ${renderSixPart(availability)} Other outputs are an agreed driver list, consolidated/prioritized scenarios and refined ASRs ready for a Utility Tree and architecture design.`;
  }
  if (question.topic === "Architecture and Requirements" && question.type === "Business goals and pedigree") {
    question.answer_outline = `PALM helps the **${s}** trace a numerical quality target back to the business goal and evidence that created it.\n\n**Seven steps:** 1) present PALM; 2) present business drivers; 3) present architectural drivers; 4) elicit, consolidate and prioritize business goals; 5) derive potential QAs from those goals; 6) assign pedigree to existing QA drivers and investigate quantitative sources; 7) conclude and record next actions.\n\n**Worked decision:** suppose the unexplained requirement says 99.999% availability. If it comes from a legal/mission obligation and outage-cost evidence, keep it and fund redundancy/failover. If a measured business process tolerates 30 minutes of scheduled downtime, change it to a supported availability target. If no stakeholder, source or consequence can justify the number, relax or remove it and record the weak pedigree instead of forcing costly architecture around an arbitrary target.`;
  }
  if (question.topic === "Structures and Views" && question.type === "Choose view") {
    question.answer_outline = `For the **${s}**:\n\n- **(a) Module structure:** show Presentation, Application, Domain and Data-Access modules plus allowed-to-use dependencies. It answers how implementation responsibilities are organized.\n- **(b) Component-and-Connector structure:** show the runtime Client sending a registration request to the Application Service, which checks the Records Database and returns the result. It answers how runtime elements interact.\n- **(c) Allocation structure:** show the Client allocated to a user device, Application Service replicas to server nodes and the database to a managed data node. It answers where software executes.\n\nThe three are complementary, not interchangeable: module, runtime and environment-allocation questions require different element and relation types.`;
  }
  if (question.topic === "Architecture Documentation" && question.type === "Informal vs semiformal vs formal") {
    const recommendation = isMissionCritical(s)
      ? `Because the ${s} is safety/security/mission critical, choose **formal notation for critical behavior and constraints**, supplemented by UML views for communication.`
      : `For the normal commercial ${s}, choose **semiformal UML** for the main views.`;
    question.answer_outline = `**Informal notation:** flexible box-line/text, low effort and low precision; it is useful for early sketches but ambiguous and weak for automated analysis.\n**Semiformal notation:** standardized syntax such as UML, medium effort/precision and useful tools; it supports consistent team communication but not mathematical proof.\n**Formal notation:** precise mathematical syntax/semantics and rigorous analysis, but high cost and specialist skill.\n\n**Recommendation:** ${recommendation} Formal notation becomes justified when failure can threaten life, mission, major financial integrity or regulatory compliance; otherwise its extra rigor usually does not repay its cost.`;
  }
}

function implementationAndEvaluationAnswers(question) {
  const s = question.scenario || "the system";
  if (question.topic === "Architecture Implementation and Testing" && question.type === "Implementation conformance") {
    question.answer_outline = `**Architecture erosion** occurs when implemented ${s} code drifts from documented constraints. For example, a Presentation module directly calling the database bypasses the Application and Data-Access interfaces. Earlier Modifiability, Security and failure analyses are then invalid because the real dependencies no longer match the analyzed architecture.\n\nUse at least these controls: 1) encode dependency rules in build/static-analysis checks; 2) provide frameworks and code templates that make the permitted path easy; 3) keep architectural interfaces, naming and comments visible in code; 4) review architecture-sensitive changes; 5) mark stale documentation and schedule code/document synchronization. The direct database call should fail a conformance check before merge.`;
  }
  if (question.topic === "Architecture Implementation and Testing" && question.type === "Architecture-informed testing") {
    question.answer_outline = `**Unit testing:** test one ${s} module behind its interface, such as a registration-rule service with repository and clock test doubles.\n**Integration testing:** assemble the Client, Application Service, database connector and failover infrastructure to test cross-element contracts and runtime qualities. A concrete Availability test kills the active service instance under user load and passes only if routing recovers within 5 seconds with no more than 1 failed request. Architecture is essential because the harness must know the process boundary, health-check connector, shared state and fault-injection point.\n**Acceptance testing:** exercise complete stakeholder workflows and agreed QA measures on the deployed system, such as successful registration and the peak-response target. Architecture guides which critical paths and environmental dependencies must be represented.`;
  }
  if (question.topic === "Architecture Implementation and Testing" && question.type === "Testing reasoning") {
    question.answer_outline = `Reject the claim: black-box tests hide implementation details, but the **${s}** architecture still identifies critical responsibilities, interfaces, failure boundaries and QA risks.\n\n- **Black-box:** call the public registration API and verify its contract and 2-second response target without inspecting internals; architecture identifies the externally significant service boundary.\n- **White-box:** inspect Application-to-Data-Access control/dependency paths and test every branch or forbidden direct database dependency.\n- **Gray-box:** use knowledge of the Client -> Application Service -> Database interaction to inject a database timeout and verify failover/error handling while still testing through a public interface.`;
  }
  if (question.topic === "Architecture Evaluation" && question.type === "ATAM steps and outputs") {
    question.answer_outline = `ATAM is appropriate before constructing the enterprise-critical **${s}** because stakeholders can evaluate architectural approaches against business drivers and concrete QA scenarios while changes are still affordable.\n\n**Nine steps:** 1) present ATAM; 2) present business drivers; 3) present the architecture; 4) identify architectural approaches; 5) generate the QA Utility Tree; 6) analyze architectural approaches; 7) brainstorm and prioritize scenarios; 8) analyze approaches against the new high-ranked scenarios; 9) present results.\n\n**Outputs:** business goals, architecture/approach descriptions, prioritized QA scenarios and Utility Tree, risks, non-risks, sensitivity points, trade-off points, risk themes and mappings from decisions to QA requirements.\n\n**Concrete distinctions:** one unreplicated database is a **risk** to Availability; tested application-service failover meeting its target is a **non-risk** for that scenario; health-check timeout is a **sensitivity point** because small changes strongly affect recovery time; cache duration is a **trade-off point** because it improves Performance but may worsen Security/data freshness.`;
  }
  if (question.topic === "Architecture Evaluation" && question.type === "Risk reasoning") {
    question.answer_outline = `The new high-priority **${s}** scenario is itself evidence of risk: the architect's Utility Tree omitted something stakeholders consider central to business success, so the architecture may have been designed against the wrong drivers. In step 7, record, consolidate and rank the scenario against the existing tree. In step 8, walk it through the documented approaches and identify risks, non-risks, sensitivity and trade-off points. In step 9, group the findings into a risk theme, connect that theme to the threatened business goal, assign follow-up ownership and present it rather than hiding the disagreement.`;
  }
  if (question.topic === "Architecture Evaluation" && question.type === "ATAM tailoring") {
    question.answer_outline = `For the smaller, lower-risk **${s}**, use a **lightweight evaluation**: a half-day/day internal workshop that preserves business-driver review, a small prioritized scenario set, approach analysis and recorded risks, but compresses presentations and participant breadth. Full ATAM is multi-day/person-day, broader and often outsider-led; it provides deeper scenario coverage, stronger independence and better cross-stakeholder discovery. Tailoring saves time and cost, but loses depth, breadth and independent challenge, so any omitted steps and residual risks must be recorded. Escalate to full ATAM if the ${s} becomes mission critical or architectural failure becomes expensive.`;
  }
}

function specializedPatternAnswers(question) {
  const s = question.scenario || "the system";
  if (question.topic === "Architectural vs Design Patterns" && question.type === "Architecture vs implementation") {
    question.answer_outline = `For the **${s}**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.`;
  }
  if (question.topic === "Tactics and Patterns" && question.type === "Explain relationship") {
    question.answer_outline = `A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **${s} Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the ${s} scenarios.`;
  }
  if (question.topic !== "Architectural Patterns") return;
  const suffix = ` Applied to the **${s}**, this means the named ${s} elements must exhibit those exact relations; the labels alone are insufficient.`;
  if (["Bridging and upward calls", "Discovery, hops and supernodes", "Pipeline parallelism", "ESB, registry, orchestration", "Replication and coupling", "Many views and constraints", "Partition imbalance", "Distinction"].includes(question.type) && !question.answer_outline.includes(`**${s}**`)) {
    question.answer_outline += suffix;
  }
  if (question.type === "Variant selection") {
    question.answer_outline = `**Choose content-based Publish-Subscribe for the ${s}.** List-based delivery is runtime-efficient but maintains explicit subscription lists; broadcast-based is simple and decoupled but makes every subscriber inspect irrelevant events. Content-based matching evaluates event attributes against subscriber predicates, so it fits many subscribers with highly selective interests. The trade-off is extra matching/indexing complexity and latency, which should be measured against the event-delivery response target.`;
  }
  if (question.type === "Work assignment patterns") {
    question.answer_outline = `**Choose Competence Center for the ${s}.** Assign the security-sensitive modules, threat analysis and security reviews to the site with unique expertise, while other sites consume its documented interfaces and guidance. A Platform arrangement instead gives one site ownership of reusable core assets, which fits product-family reuse rather than scarce expertise. Open Source distributes work among largely independent contributors and offers autonomy, but weaker centralized assignment/control makes it unsuitable for the stated specialist-security responsibility. The Competence Center gains expert consistency but risks a bottleneck and cross-site coordination dependency, so backup ownership and review schedules are required.`;
  }
}

function integratedAnswers(question) {
  if (question.topic !== "Integrated Past-Paper Practice") return;
  const s = question.scenario || "the system";
  if (question.subtopic === "Q1 Pattern Selection") {
    const formal = qualityScenario(s, "Performance");
    question.answer_outline = question.answer_outline.replace(/Formal scenario: state all six labels and make Response Measure objectively testable\. Tie the quality to the selected feature\./, `**Part (c) worked Performance scenario for Requirement 2:** ${renderSixPart(formal)}`);
  }
  if (question.subtopic === "Q2 Quality Attributes") {
    const scenarios = ["Performance", "Availability", "Security", "Modifiability"].map(qa => qualityScenario(s, qa));
    const informal = {
      Performance:`The ${s} must respond quickly during peak demand.`,
      Availability:`The ${s} must continue serving users after one application instance fails.`,
      Security:`The ${s} must prevent unauthorised access to protected records.`,
      Modifiability:`A business-rule change in the ${s} must remain localized and inexpensive.`
    };
    const scenarioText = scenarios.map((row,index) => `**S${index + 1} ${row.qa}**\nInformal: ${informal[row.qa]}\nFormal: ${renderSixPart(row)}`).join("\n\n");
    const tree = scenarios.map((row,index) => {
      const refinement = {Performance:"Peak response",Availability:"Fault recovery",Security:"Access control",Modifiability:"Localized rule change"}[row.qa];
      const rating = row.qa === "Modifiability" ? "[M,H]" : "[H,H]";
      return `- Utility -> ${row.qa} -> ${refinement} -> **S${index + 1}: ${renderSixPart(row)}** ${rating}`;
    }).join("\n");
    const critical = isMissionCritical(s);
    const notation = critical
      ? `Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The ${s} has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.`
      : `Choose **semiformal UML** for the main ${s} views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.`;
    question.answer_outline = `**Part (a) - four worked requirements**\n\n${scenarioText}\n\n**Part (b) - Utility Tree using the exact same scenarios**\n\n${tree}\n\nThe H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.\n\n**Part (c) - notation decision**\n${notation}`;
  }
  if (question.subtopic === "Q3 Pattern Deep Dive") {
    const name = Object.keys(PATTERNS).find(pattern => (question.tags || []).includes(pattern));
    const spec = PATTERNS[name];
    if (spec) question.answer_outline = `**Part (a) - concrete feature:** In the ${s}, ${spec.feature(s)}. ${name} is suitable because its problem is to ${spec.problem}.\n\n**Part (b) - elements and relations:** ${spec.mapping(s)}.\n\n**Part (c) - enhanced quality:** **${spec.enhanced}** may improve because ${spec.benefit}.\n\n**Part (d) - trade-off/weakness:** **${spec.threatened}** may be threatened because ${spec.weakness}. A concrete failure case is that ${spec.failure(s)}`;
  }
  if (question.subtopic === "Q4 Design Patterns") {
    question.answer_outline = `**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.\n\n**Part (b), example 1 - Observer:** In the ${s}, ${DESIGN_PATTERNS.Observer.mapping(s)}. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.\n\n**Part (b), example 2 - State:** In the ${s}, ${DESIGN_PATTERNS.State.mapping(s)}. It is motivated by state-specific behavior that would otherwise be spread across conditionals.\n\n**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.`;
  }
  if (question.subtopic === "Q4 Views and Mapping") {
    question.answer_outline = `**Part (a) - Client-Server C&C view:** ${s} Web/Mobile Client --HTTPS request/reply--> ${s} Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.\n\n**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.\n\n**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.\n\n**Part (c) - Observer:** the ${s} status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.`;
  }
}

function applyWorkedAnswers(question) {
  architecturalPatternAnswers(question);
  designPatternAnswers(question);
  decisionAndFoundationAnswers(question);
  documentationAndDesignAnswers(question);
  requirementsAndViewsAnswers(question);
  implementationAndEvaluationAnswers(question);
  specializedPatternAnswers(question);
  integratedAnswers(question);
  return question;
}

module.exports = { applyWorkedAnswers };
