(() => {
  const weights = {
    exactId: 120,
    exactSubtopic: 90,
    exactTopic: 55,
    exactPhrasePrompt: 34,
    exactPhraseTags: 30,
    exactPhraseAnswer: 18,
    lexical: 8,
    semantic: 72,
    conceptDirect: 42,
    conceptRelated: 14,
    conceptSubtopic: 34,
    conceptTopic: 24,
    conceptTag: 16,
    conceptReferenceTitle: 18,
    reference: 8
  };

  const stopWords = [
    "a","an","and","are","as","at","be","because","but","by","can","could","describe","do","does",
    "during","easy","explain","for","from","give","has","have","how","i","if","in","into","is","it",
    "its","me","need","needs","of","on","one","or","part","question","should","so","software","suitable",
    "system","than","that","the","their","this","to","use","uses","using","what","when","where","which",
    "while","who","why","with","write","you","your"
  ];

  const concepts = [
    {
      id: "availability", label: "Availability", category: "quality",
      aliases: ["availability","available","uptime","readiness to provide service","service remains available","continues working","continue operating","still works","users continue normally","service restored","recovery from faults","server crashes","component crashes","unreachable component","fault tolerance","adding more servers does not guarantee","more servers does not automatically guarantee"],
      related: ["fault","failure","failover","redundancy","single-point-of-failure","health-check","recovery"]
    },
    { id: "fault", label: "Fault", category: "quality", aliases: ["fault","internal fault","defect","bug","component crash","server crash","hardware fault","software fault","fault occurs"], related: ["failure","availability","recovery"] },
    { id: "failure", label: "Failure", category: "quality", aliases: ["failure","externally visible failure","users cannot use","service interruption","service outage","observable service failure","required service not delivered","server alive but users cannot use"], related: ["fault","availability","end-to-end-availability"] },
    { id: "end-to-end-availability", label: "End-to-End Availability", category: "quality", aliases: ["end to end availability","alive but unusable","server is alive but users still cannot use","dependency unavailable","whole service unavailable"], related: ["availability","failure","single-point-of-failure"] },
    { id: "failover", label: "Failover", category: "tactic", aliases: ["failover","fail over","switch to backup","backup takes over","standby server","hot standby","automatic recovery","continue normally after crash"], related: ["availability","redundancy","recovery"] },
    { id: "redundancy", label: "Redundancy", category: "tactic", aliases: ["redundancy","redundant","replication","replica","backup server","more than one server","duplicate component","spare component","alternative instance","multiple instances","adding more servers","more servers"], related: ["availability","failover","single-point-of-failure"] },
    { id: "single-point-of-failure", label: "Single Point of Failure", category: "risk", aliases: ["single point of failure","spof","one database crashing affects all","shared dependency","central dependency","one component brings down all","common dependency","failure coupling","shared bottleneck","does not automatically guarantee"], related: ["availability","shared-data","client-server","redundancy"] },
    { id: "health-check", label: "Health Check", category: "tactic", aliases: ["health check","heartbeat","ping echo","detect crash","detect fault","liveness check","monitor server"], related: ["availability","failover","recovery"] },
    { id: "recovery", label: "Recovery", category: "quality", aliases: ["recovery","restore service","recover service","repair fault","restart component","recover from crash"], related: ["availability","failover"] },

    {
      id: "performance", label: "Performance", category: "quality",
      aliases: ["performance","response time","latency","throughput","processing time","bottleneck","peak load","concurrent users","responsiveness","speed","how quickly system responds","under 2 seconds","requests in under","95 percent requests","response measure"],
      related: ["quality-attribute-scenario","response-measure","throughput","latency"]
    },
    { id: "latency", label: "Latency", category: "quality", aliases: ["latency","delay","response time","time to respond","under 2 seconds"], related: ["performance","response-measure"] },
    { id: "throughput", label: "Throughput", category: "quality", aliases: ["throughput","requests per second","items per second","processing rate","increase throughput"], related: ["performance","pipe-and-filter"] },
    {
      id: "modifiability", label: "Modifiability", category: "quality",
      aliases: ["modifiability","maintainability","changeability","easy to change","change one part without affecting others","change without breaking others","local change","localize changes","ripple effect","independent evolution","low coupling","separation of concerns","replaceable","changes isolated"],
      related: ["layer","low-coupling","separation-of-concerns","dependency","module-structure"]
    },
    { id: "low-coupling", label: "Low Coupling", category: "principle", aliases: ["low coupling","loosely coupled","few dependencies","independent parts","without affecting others","decoupled modules","reduced coupling"], related: ["modifiability","separation-of-concerns","layer"] },
    { id: "separation-of-concerns", label: "Separation of Concerns", category: "principle", aliases: ["separation of concerns","separate responsibilities","separate presentation business data","ui without changing business rules","business rules without persistence","concerns evolve independently"], related: ["layer","modifiability","module-structure"] },
    { id: "dependency", label: "Dependency", category: "principle", aliases: ["dependency","dependencies","allowed to use","depends on","upward call","bridging","ripple effect"], related: ["layer","low-coupling","modifiability"] },

    { id: "security", label: "Security", category: "quality", aliases: ["security","secure","attack","unauthorized access","confidentiality","integrity","access control","security boundary","attacker","reject unauthorized"], related: ["authentication","authorization","confidentiality","integrity"] },
    { id: "authentication", label: "Authentication", category: "security", aliases: ["authentication","authenticate","login","user identity","who are you","prove identity","verify identity","proof of identity","credentials","password","are you really"], related: ["security","authorization"] },
    { id: "authorization", label: "Authorization", category: "security", aliases: ["authorization","authorize","permission","allowed to do","are you allowed","access rights","privilege","role based","what are you allowed to do"], related: ["security","authentication"] },
    { id: "confidentiality", label: "Confidentiality", category: "security", aliases: ["confidentiality","secret","private data","prevent disclosure","data exposure"], related: ["security"] },
    { id: "integrity", label: "Integrity", category: "security", aliases: ["integrity","tampering","modified without permission","unauthorized modification","data correctness"], related: ["security"] },
    { id: "usability", label: "Usability", category: "quality", aliases: ["usability","ease of use","learnability","feedback","user interaction","first time users","without assistance"], related: ["quality-attribute-scenario"] },
    { id: "testability", label: "Testability", category: "quality", aliases: ["testability","easy to test","isolate defect","automated tests","observability for testing","testing time"], related: ["modifiability"] },
    { id: "interoperability", label: "Interoperability", category: "quality", aliases: ["interoperability","integrate systems","heterogeneous","standards compliant","exchange messages","external provider"], related: ["soa","broker"] },

    { id: "quality-attribute-scenario", label: "Quality Attribute Scenario", category: "framework", aliases: ["quality attribute scenario","qa scenario","six part scenario","six-part scenario","source stimulus environment artifact response response measure","source stimulus environment","formal scenario"], related: ["response-measure","availability","performance","modifiability","security"] },
    { id: "response-measure", label: "Response Measure", category: "framework", aliases: ["response measure","measurable","testable","objective criterion","95 percent","within 2 seconds","under 2 seconds","99.99 uptime"], related: ["quality-attribute-scenario","performance","availability"] },
    { id: "utility-tree", label: "Utility Tree", category: "framework", aliases: ["utility tree","business value architecture impact","business value architectural impact","high high","h h","utility refinement scenario"], related: ["asr","quality-attribute-scenario"] },
    { id: "asr", label: "ASR", category: "framework", aliases: ["asr","architecture significant requirement","architecturally significant requirement","profound effect on architecture","high business value","architectural impact"], related: ["utility-tree","business-goal"] },
    { id: "business-goal", label: "Business Goal", category: "framework", aliases: ["business goal","mission goal","business value","palm","pedigree"], related: ["asr","palm"] },
    { id: "palm", label: "PALM", category: "framework", aliases: ["palm","pedigree attribute elicitation method","business goals to quality concerns"], related: ["business-goal","asr"] },
    { id: "qaw", label: "QAW", category: "framework", aliases: ["qaw","quality attribute workshop","stakeholders brainstorm scenarios","prioritize scenarios"], related: ["quality-attribute-scenario","asr"] },
    { id: "add", label: "ADD", category: "framework", aliases: ["attribute driven design","choose element to design","generate and test","asr driven design"], related: ["asr","design-decision"] },
    { id: "design-decision", label: "Design Decision", category: "framework", aliases: ["design decision","allocation of responsibilities","coordination model","management of resources","binding time","choice of technology"], related: ["add","quality-attribute-scenario"] },

    { id: "module-structure", label: "Module Structure", category: "structure", aliases: ["module structure","static organization","code responsibilities organized","implementation responsibilities","how code responsibilities are organized","decomposition structure","uses structure","class structure"], related: ["layer","modifiability","separation-of-concerns"] },
    { id: "component-and-connector", label: "Component-and-Connector", category: "structure", aliases: ["component and connector","component-and-connector","c&c","runtime interaction","how components communicate while system is running","runtime components and interactions","connector"], related: ["publish-subscribe","client-server","pipe-and-filter","broker","soa"] },
    { id: "allocation-structure", label: "Allocation Structure", category: "structure", aliases: ["allocation structure","deployment structure","where software runs","physical machines","mapped to hardware","software to environment","deployment related","work assignment","file structure"], related: ["multi-tier","map-reduce"] },
    { id: "view-documentation", label: "View Documentation", category: "documentation", aliases: ["view documentation","primary presentation","element catalog","context diagram","variability guide","rationale","document a view"], related: ["module-structure","component-and-connector","allocation-structure"] },

    { id: "layer", label: "Layer", category: "architectural-pattern", aliases: ["layer","layered architecture","allowed-to-use","allowed to use","strict layering","bridging","upward calls","presentation business logic data access","ui without changing business rules","separate implementation responsibilities"], related: ["modifiability","separation-of-concerns","module-structure","multi-tier"] },
    { id: "client-server", label: "Client-Server", category: "architectural-pattern", aliases: ["client server","client-server","centralized server","client requests service","request reply","request/reply","distributed clients","server provides","central location stores data","asymmetric roles"], related: ["shared-data","single-point-of-failure","performance","peer-to-peer"] },
    { id: "pipe-and-filter", label: "Pipe-and-Filter", category: "architectural-pattern", aliases: ["pipe and filter","pipe-and-filter","pipeline","pipes and filters","stream","filters","data transformed","multiple transformations","successive transformations","independent stages","several stages","buffered pipes","pipeline parallelism"], related: ["throughput","component-and-connector","map-reduce"] },
    { id: "peer-to-peer", label: "Peer-to-Peer", category: "architectural-pattern", aliases: ["peer to peer","peer-to-peer","p2p","decentralized","equal peers","resource sharing","peer discovery","supernode","request and provide","everyone can request and provide","each computer can provide files","dynamic joining leaving","machines share their own resources directly"], related: ["client-server","availability","security"] },
    { id: "publish-subscribe", label: "Publish-Subscribe", category: "architectural-pattern", aliases: ["publish subscribe","publish-subscribe","pubsub","event channel","publisher","subscriber","notification","asynchronous event","event distributor","one event producer informs many","one part sends update many others know","system-level event dissemination"], related: ["observer","component-and-connector","low-coupling"] },
    { id: "shared-data", label: "Shared-Data", category: "architectural-pattern", aliases: ["shared data","shared-data","shared database","common repository","centralized data","central location stores data","multiple components access same data","blackboard","repository","one database crashing"], related: ["client-server","single-point-of-failure","modifiability"] },
    { id: "soa", label: "Service-Oriented Architecture", category: "architectural-pattern", aliases: ["soa","service oriented architecture","service-oriented architecture","service provider","service consumer","service registry","discoverable service","network service","published contract","interoperability","loose coupling between services"], related: ["broker","interoperability"] },
    { id: "broker", label: "Broker", category: "architectural-pattern", aliases: ["broker","intermediary","client proxy","server proxy","location transparency","identity transparency","dynamic binding","service discovery","forward requests"], related: ["soa","component-and-connector","interoperability"] },
    { id: "mvc", label: "MVC", category: "architectural-pattern", aliases: ["mvc","model view controller","model-view-controller","model view and controller","ui separation","presentation concerns","controller handles input"], related: ["observer","publish-subscribe","modifiability"] },
    { id: "map-reduce", label: "Map-Reduce", category: "architectural-pattern", aliases: ["map reduce","map-reduce","map tasks","reduce tasks","distributed processing","partition","parallel computation","large data set","shuffle sort","batch processing"], related: ["allocation-structure","pipe-and-filter"] },
    { id: "multi-tier", label: "Multi-Tier", category: "architectural-pattern", aliases: ["multi tier","multi-tier","deployment tier","physical separation","client tier","application tier","data tier","runtime components deployed separately","tiers mapped to platforms"], related: ["allocation-structure","layer","client-server"] },

    { id: "observer", label: "Observer", category: "design-pattern", aliases: ["observer","subject observers","many listeners","notify observers","interested objects","state changes","automatically notify many interested objects","listeners updated","subscriber objects"], related: ["publish-subscribe","behavioral"] },
    { id: "state", label: "State", category: "design-pattern", aliases: ["state pattern","state","object changes behavior","internal state","atm state","robot state","avoid conditionals for states","transition"], related: ["behavioral"] },
    { id: "factory-method", label: "Factory Method", category: "design-pattern", aliases: ["factory method","factory","creator","concrete product","object creation","client does not call new","instantiate subclass"], related: ["creational"] },
    { id: "singleton", label: "Singleton", category: "design-pattern", aliases: ["singleton","single instance","global access point","only one object","private constructor"], related: ["creational"] },
    { id: "composite", label: "Composite", category: "design-pattern", aliases: ["composite","tree structure","part whole","leaf composite","recursive structure","treat individual and group uniformly"], related: ["structural"] },
    { id: "facade", label: "Facade", category: "design-pattern", aliases: ["facade","simple interface","hide subsystem complexity","unified interface","shape maker"], related: ["structural","low-coupling"] },
    { id: "creational", label: "Creational", category: "design-pattern-category", aliases: ["creational","object creation patterns","abstract instantiation","factory method singleton"], related: ["factory-method","singleton"] },
    { id: "structural", label: "Structural", category: "design-pattern-category", aliases: ["structural","class object composition","adapter bridge composite decorator facade flyweight proxy"], related: ["composite","facade"] },
    { id: "behavioral", label: "Behavioral", category: "design-pattern-category", aliases: ["behavioral","communication among objects","assignment of responsibilities","observer state strategy command iterator"], related: ["observer","state"] },

    { id: "pattern-selection-framework", label: "Pattern Selection Framework", category: "reference", aliases: ["pattern advantage limitation","pattern selection","requirement concern pattern mechanism qa effect trade off","requirement architectural problem pattern elements connector mechanism quality consequence trade-off"], related: ["quality-attribute-scenario","asr"] }
  ];

  const byId = Object.fromEntries(concepts.map(c => [c.id, c]));
  window.CSC3209_SEARCH_CONFIG = { weights, stopWords, concepts, byId };
})();
