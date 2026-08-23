# -*- coding: utf-8 -*-
"""
gen_adv3.py — Advanced Depth bank, part 3.
Modules: Lecture 8 (ASRs, QAW, PALM, business goals, utility trees),
Lecture 10 (documentation depth), Lectures 1-3 (foundations depth).
"""
import json

with open("../questions_advanced.json") as f:
    Q = json.load(f)

L1 = "Lecture1_What is Software ArchitectureV2 (1).pdf"
L2 = "Lecture2_Why Is Software Architecture Important (2).pdf"
L3 = "Lecture3_The Many Contexts of Software Architecture.pdf"
L8 = "Lecture8_Architecture and Requirements.pdf"
L10 = "Lecture10_Documenting Software Architectures.pdf"


def add(topic, sub, typ, diff, marks, prompt, ans, tags, source, trap=""):
    Q.append({
        "id": "ADV-%04d" % (len(Q) + 1),
        "bank": "Advanced Depth",
        "topic": topic,
        "subtopic": sub,
        "type": typ,
        "difficulty": diff,
        "marks": marks,
        "family": "Advanced Depth",
        "scenario": "",
        "prompt": prompt,
        "answer_outline": ans,
        "tags": tags,
        "source": source,
        "exam_trap": trap,
    })


R = "Architecture and Requirements (Depth)"
D = "Architecture Documentation (Depth)"
F = "Foundations (Depth)"

# =====================================================================
# LECTURE 8 — QAW, PALM, BUSINESS GOALS, UTILITY TREES
# =====================================================================
QAW_STEPS = [
    (1, "QAW presentation and introductions",
     "QAW facilitators describe the motivation for the QAW and explain each step of the method",
     "everyone in the room needs the same model of what is about to happen, otherwise stakeholders contribute in incompatible formats"),
    (2, "Business/mission presentation",
     "a stakeholder representing the business concerns behind the system presents the system's business context, broad functional requirements, constraints and known quality attribute requirements",
     "the quality attributes that will later be prioritised have to be traceable to business drivers, or the prioritisation has no defensible basis"),
    (3, "Architectural plan presentation",
     "an architect presents the system plans as they stand at that point, describing high-level system descriptions, context drawings, constraints and existing technologies",
     "scenarios must be brainstormed against something concrete; without a plan the scenarios float free of any realisable design"),
    (4, "Identification of architectural drivers",
     "facilitators share their list of key architectural drivers, quality attributes and architectural challenges gathered from the previous presentations, and ask stakeholders for clarifications, additions, deletions and corrections",
     "this is the first convergence point — the facilitators' reading of the drivers is checked against the stakeholders' own understanding before any scenario work begins"),
    (5, "Scenario brainstorming",
     "each stakeholder expresses a scenario representing his or her concerns with respect to the system; facilitators ensure at least one representative scenario exists for each architectural driver listed in step 4",
     "coverage matters as much as volume — a driver with no scenario is a requirement nobody has made testable"),
    (6, "Scenario consolidation",
     "similar scenarios are consolidated where reasonable, with stakeholders' consent, to prevent votes being needlessly split during prioritisation",
     "without consolidation, two phrasings of one concern each attract half the votes and the concern loses to a less important but singly-phrased one"),
    (7, "Scenario prioritization",
     "prioritisation is accomplished by allocating each stakeholder a number of votes equal to 30 percent of the total number of scenarios; stakeholders may allocate any number of their votes to any scenario or combination of scenarios",
     "the 30 percent rule is the examinable detail: it forces stakeholders to discriminate — they cannot vote for everything — while still allowing concentration on a single critical scenario"),
    (8, "Scenario refinement",
     "the top scenarios are refined and elaborated: each is described in the six-part form (stimulus, response, source, artifact, environment, response measure), with questions of concern also raised",
     "refinement is what converts a brainstormed sentence into a testable requirement; unrefined scenarios cannot drive design or evaluation"),
]

for num, name, what, why in QAW_STEPS:
    add(R, "QAW steps", "Recall a numbered method step", "Very Hard", 6,
        "State what happens at **step %d of the Quality Attribute Workshop (%s)** and explain why this step is necessary — that is, what would go wrong if it were skipped." % (num, name),
        "What happens: %s.\n\nWhy it is necessary: %s.\n\nThe QAW is described in Lecture 8 as a facilitated method that engages system stakeholders early in the life cycle to discover the driving quality attributes of a software-intensive system. It is used before a software architecture has been created." % (what, why),
        ["QAW", "step-%d" % num, name.lower().replace(" ", "-"), "requirements"], L8,
        "Listing the eight step names without content. The marks are in what each step produces and why it matters.")

add(R, "QAW prioritization", "Recall an exact numeric rule", "Brutal", 6,
    "In QAW scenario prioritization, exactly how many votes does each stakeholder receive, and what is the design rationale for that specific quantity? Explain what would go wrong with a much larger or much smaller allocation.",
    "Each stakeholder is allocated a number of votes **equal to 30 percent of the total number of scenarios**, and may allocate any number of those votes to any scenario or combination of scenarios. With 20 scenarios on the wall, each stakeholder gets 6 votes.\n\nRationale: the figure is deliberately well below 100 percent so that stakeholders are **forced to discriminate** — they cannot endorse everything, so the vote reveals genuine priority rather than general approval. It is also well above a single vote, so a stakeholder can express *intensity* by concentrating several votes on one scenario they consider critical.\n\nToo many votes (say 90 percent) and everything is voted for, so the ranking flattens and nothing is prioritised. Too few (say one each) and stakeholders can express which scenario they care about most but not how much more they care, and a stakeholder with two equally critical concerns is forced to abandon one.\n\nNote the ordering dependency: step 6 (consolidation) exists precisely so that this vote is not split across duplicate phrasings of the same concern.",
    ["QAW", "30-percent", "prioritization", "voting"], L8,
    "Guessing a round number. The lecture gives 30 percent specifically, and it is the kind of detail examiners like.")

PALM_STEPS = [
    (1, "PALM overview presentation", "the method, the steps and the expected outcomes are presented to the participants"),
    (2, "Business drivers presentation", "a business manager describes what business goals are motivating the development effort"),
    (3, "Architecture drivers presentation", "the architect presents the driving business and quality attribute requirements"),
    (4, "Business goals elicitation", "using the business goal category taxonomy to prompt discussion, stakeholders describe the business goals; goals are consolidated to merge duplicates and then prioritised"),
    (5, "Identify potential quality attributes from business goals", "for each important business goal, participants describe a quality attribute that — if the architecture provided it — would help achieve the goal"),
    (6, "Assign pedigree to existing quality attribute drivers", "for each existing quality attribute requirement, participants identify whether it is well-founded in a business goal or not; if so the business goal is recorded, and if not the requirement's pedigree is suspect"),
    (7, "Exercise conclusion", "the results are reviewed and next steps agreed"),
]

for num, name, what in PALM_STEPS:
    add(R, "PALM steps", "Recall a numbered method step", "Very Hard", 5,
        "State what happens at **step %d of PALM (%s)**, and state where this step sits in PALM's overall purpose." % (num, name),
        "At this step, %s.\n\nPALM (Pedigreed Attribute eLicitation Method) is a seven-step method carried out in a one-and-a-half-day facilitated workshop involving architects and stakeholders who can speak to the relevant business goals. Its overall purpose is to establish whether the quality attribute requirements driving the architecture are actually grounded in business goals — steps 1 to 3 establish shared context, steps 4 and 5 work forwards from goals to needed qualities, and step 6 works backwards from existing quality requirements to check their justification." % what,
        ["PALM", "step-%d" % num, name.lower().replace(" ", "-"), "business-goals"], L8,
        "Confusing PALM with QAW. QAW elicits and prioritises scenarios; PALM traces quality requirements back to business goals.")

add(R, "PALM pedigree", "Explain the pedigree concept", "Brutal", 8,
    "Explain what 'pedigree' means in PALM, describe the two directions of reasoning PALM applies (steps 5 and 6), and state what an architect should do about a quality attribute requirement found to have a suspect pedigree.",
    "**Pedigree** means the traceable justification of a quality attribute requirement in an actual business goal. A requirement with good pedigree can be traced to a stated goal; one with suspect pedigree cannot, meaning nobody can say what business purpose it serves.\n\nThe two directions:\n- **Forwards (step 5)** — for each important business goal, participants describe a quality attribute that, if provided by the architecture, would help achieve that goal. This finds *missing* requirements: goals with no quality attribute supporting them.\n- **Backwards (step 6)** — for each existing quality attribute requirement, participants identify whether it is well-founded in a business goal; if so the goal is recorded, and if not 'the requirement's pedigree is suspect'. This finds *unjustified* requirements.\n\nWhat to do about a suspect requirement: challenge it rather than silently design for it. Lecture 8 notes elsewhere that stakeholders often ask for far more than is needed and that ASRs 'often make the difference between success and failure' — an unjustified stringent quality requirement consumes architectural effort and forecloses design options for no business return. The step-6 finding is an invitation to renegotiate or delete, and to record the decision either way.",
    ["PALM", "pedigree", "traceability", "requirements-challenge"], L8,
    "Describing pedigree as documentation quality. It is specifically about traceability to a business goal.")

BG_PARTS = [
    ("Goal-source", "the people or written artifacts that provided the goal"),
    ("Goal-subject", "the stakeholders who own the goal and wish it to be true"),
    ("Goal-object", "the entities to which the goal applies — for example individuals, systems, portions of a system, or the organisation as a whole"),
    ("Environment", "the context in which the goal is to be achieved, including social, legal, competitive, customer and technological considerations"),
    ("Goal", "any business goal, articulated as an outcome"),
    ("Goal-measure", "a testable measurement to determine how one would know if the goal has been achieved"),
    ("Pedigree and value", "the degree of confidence the goal-subject has in the goal, plus the goal's volatility and value"),
]

for pname, meaning in BG_PARTS:
    add(R, "Business goal scenario", "Recall a scenario part", "Very Hard", 5,
        "Business goals in Lecture 8 are expressed using their own structured scenario, which is **not** the same as the six-part quality attribute scenario. State what the part **%s** captures, and name how many parts the business goal scenario has in total." % pname,
        "**%s**: %s.\n\nThe business goal scenario has **seven** parts: Goal-source, Goal-subject, Goal-object, Environment, Goal, Goal-measure, and Pedigree and value. Contrast the six-part quality attribute scenario (source, stimulus, artifact, environment, response, response measure) — the two share only 'environment' and a measurement slot, and confusing them is a common and costly error." % (pname, meaning),
        ["business-goals", "seven-part", pname.lower().replace(" ", "-")], L8,
        "Answering with the six-part QA scenario. Business goals have seven parts and different slot names.")

add(R, "Business goal scenario", "Apply the sentence template", "Brutal", 7,
    "Lecture 8 gives a fill-in-the-blank template for expressing business goals. State the template exactly, and use it to express this goal: the university's registrar wants the student portal to cut enrolment-period support calls, in a context where a competitor university has just launched a self-service portal.",
    "The template: *'For the system being developed, \\<goal-subject\\> desires that \\<goal-object\\> achieve \\<goal\\> in the context of \\<environment\\> and will be satisfied if \\<goal-measure\\>.'*\n\nApplied: *For the system being developed, **the university registrar** desires that **the student portal** achieve **a reduction in support calls during the enrolment period** in the context of **a competitive higher-education market in which a rival institution has just launched a self-service portal** and will be satisfied if **enrolment-period support calls fall by 40 percent against the previous intake's baseline**.*\n\nNote what the template forces: an owner (so the goal is not orphaned), an object (so it is clear what must change), an explicit environment (here competitive), and a testable measure. The remaining two parts — goal-source and pedigree/value — are recorded alongside rather than in the sentence.",
    ["business-goals", "template", "apply", "goal-measure"], L8,
    "Producing a goal with no measure. 'Will be satisfied if' is part of the template and requires something testable.")

add(R, "Business goals and architecture", "State the three relationships", "Brutal", 8,
    "Lecture 8 identifies three distinct ways business goals relate to architecture. State all three with an example of each, and explain why the third is the one most often overlooked.",
    "**One** — business goals often lead to quality attribute requirements. Every quality attribute requirement should originate from some higher purpose; the lecture's example is that if high availability is required, it is because some business goal — such as avoiding lost revenue during outages — demands it.\n\n**Two** — business goals may directly affect the architecture without an intervening quality attribute requirement. The lecture's example: a goal to keep the workforce employed may lead the architect to divide the system into modules for those staff to work on, even if no quality attribute requirement was ever written down for it.\n\n**Three** — business goals may lead to **non-architectural solutions**. Achieving high availability could be addressed by architectural means, but it might also be handled by making a side agreement with a customer — an assurance that the customer will be compensated in case of an outage.\n\nThe third is overlooked because it produces no design artifact, so it is invisible to anyone reading the architecture. Its importance is that it can *remove* an architectural requirement: if the availability concern is settled contractually, designing an expensive redundancy scheme for it is wasted effort. An architect who never asks whether a goal has a non-architectural solution over-engineers.",
    ["business-goals", "three-relationships", "non-architectural", "requirements"], L8,
    "Assuming every business goal must become a quality attribute requirement. The lecture explicitly says some do not.")

add(R, "ASR characteristics", "Define and apply a selection test", "Brutal", 7,
    "Lecture 8 defines an Architecturally Significant Requirement. State the definition and its stated characteristics, then apply it: of these four, which are ASRs and why? (a) passwords must be at least 8 characters; (b) the system must support 10,000 concurrent users; (c) the system must remain operational during a data-centre failure; (d) the login page must use the university's brand colours.",
    "Definition: an ASR is a requirement that will have a **profound effect on the architecture** — that is, the architecture might well be significantly different in the absence of such a requirement. Characteristics: ASRs have a profound effect on the architecture, and satisfying them is often what makes the difference between success and failure.\n\n(a) **Not** an ASR. A password length rule is a local validation decision implementable inside one element; the architecture is unchanged whether the number is 8 or 12.\n\n(b) **ASR**. A concurrency target of that magnitude drives decisions about tiering, replication, statelessness and resource management; the architecture without it would be significantly different.\n\n(c) **ASR**. Surviving data-centre loss forces geographic distribution, replication and failover — the deployment and coordination structures both change.\n\n(d) **Not** an ASR. Brand colours have no ramification outside a single presentation element, which fails Lecture 1's test that architecture omits information with no ramifications outside one element.\n\nThe test to state in the exam: would the architecture be significantly different if this requirement did not exist?",
    ["ASR", "definition", "selection-test", "profound-effect"], L8 + "; " + L1,
    "Marking a requirement as an ASR because it is important. Importance is not the test; architectural consequence is.")

add(R, "Utility tree", "Explain the tree's structure and purpose", "Brutal", 8,
    "Describe the structure of a utility tree as used in Lecture 8, state what the leaves must contain, explain the two-dimensional prioritisation applied to them, and say what the tree is used for afterwards.",
    "Structure: the root is **utility** — an expression of the overall goodness of the system. Beneath it are the **quality attributes** that comprise utility. Under each attribute are **refinements** of that attribute, and the **leaves** are concrete quality attribute scenarios.\n\nLeaves must be concrete scenarios in the six-part form, with a stimulus and a **response measure** — not vague attribute names. A leaf reading 'good performance' is not a leaf; 'users initiate transactions under normal operations and the system processes them with an average latency of two seconds' is.\n\nPrioritisation is on **two dimensions**: the *business value* of the scenario, and the *architectural impact* — the difficulty of achieving it. Each leaf is rated on both, commonly High/Medium/Low, giving pairs such as (H,H) or (L,M).\n\nWhat it is used for: the (H,H) scenarios are the ones that both matter most to the business and are hardest to achieve, so they are the ASRs that should drive design effort and, later, the scenarios exercised in evaluation. A scenario that is high value but low architectural impact needs attention but not architectural attention; one that is high impact but low value is a place where effort is being wasted.",
    ["utility-tree", "two-dimensional", "business-value", "architectural-impact"], L8,
    "Rating leaves on one dimension only. Both value and difficulty are required, and the pair is what identifies the drivers.")

add(R, "Gathering ASRs", "Compare three elicitation approaches", "Brutal", 8,
    "Lecture 8 describes gathering ASRs from requirements documents, by interviewing stakeholders, and by understanding the business goals. Compare the three on what each is good at and where each fails.",
    "**From requirements documents**: good at capturing what has already been formally agreed, and the natural first place to look. Fails because requirements documents are typically weak on quality attributes — the lecture notes that requirements documents, if they exist at all, are often incomplete with respect to the qualities, and that stakeholders often ask for far more than is needed, so stringent figures may be present without justification.\n\n**By interviewing stakeholders**: good at surfacing concerns nobody wrote down, and at revealing conflicting expectations between stakeholder groups. Fails because stakeholders express concerns in their own community's vocabulary (Lecture 5's third problem), because they may not know what is technically feasible or costly, and because coverage depends on which stakeholders happen to be in the room — this is precisely why QAW formalises the process with facilitators, driver identification and a coverage check.\n\n**By understanding business goals**: good at establishing pedigree and at catching requirements that have no justification, and it can reveal ASRs that no stakeholder articulated. Fails because the translation from goal to quality attribute is not mechanical — the same goal may be satisfiable architecturally *or* non-architecturally (the third relationship), so a goal does not automatically yield a requirement.\n\nThe three are complementary rather than alternatives: documents give the baseline, interviews give coverage, goals give justification.",
    ["ASR", "elicitation", "compare", "stakeholders"], L8 + "; Lecture5_UnderstandingQualityAttributes.pdf",
    "Presenting them as alternatives to choose between. The lecture treats them as three inputs to the same activity.")

# =====================================================================
# LECTURE 10 — DOCUMENTATION DEPTH
# =====================================================================
VIEW_TEMPLATE = [
    ("Primary presentation", "shows the elements and relations of the view, containing the information to be conveyed about the system first; it should contain the information you wish to present first, and it must be accompanied by a key that explains the notation",
     "presenting a diagram with no key — the lecture calls the lack of a key 'the most common mistake we see in documentation in practice'"),
    ("Element catalog", "details at least those elements and relations depicted in the primary presentation, and elaborates on other information about them that was not presented there",
     "assuming the diagram is self-explanatory, so element responsibilities are never written down and readers infer them from names"),
    ("Context diagram", "shows how the system depicted in the view relates to its environment",
     "omitting the boundary, so it is unclear what is inside the system's scope and what is an external actor"),
    ("Variability guide", "shows how to exercise any variation points that are a part of the architecture shown in this view",
     "documenting one fixed configuration when the architecture actually supports several, leaving the options undiscoverable"),
    ("Rationale", "explains why the design reflected in the view came to be, and provides a convincing argument that it is sound",
     "recording what was decided but not why, so a later team cannot tell which constraints are still binding and re-litigates settled decisions"),
]

for vname, what, failure in VIEW_TEMPLATE:
    add(D, "View documentation template", "Recall a template section", "Very Hard", 6,
        "Lecture 10 gives a standard organisation for documenting a view. State what the **%s** section contains, and state the specific documentation failure that occurs when it is omitted or done badly." % vname,
        "**%s**: %s.\n\nFailure when omitted or done badly: %s.\n\nThe full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale." % (vname, what, failure),
        ["view-template", vname.lower().replace(" ", "-"), "documentation"], L10,
        "Listing the five section names without saying what each contains. The content is what is examinable.")

BEYOND_VIEWS = [
    ("Documentation roadmap", "describes how the documentation is organised so a reader can find what they need"),
    ("How a view is documented", "explains the standard organisation used for each view, so readers learn the template once rather than per view"),
    ("System overview", "gives a short prose description of what the system's function is, who its users are, and any important background or constraints — orienting a reader before any view is read"),
    ("Mapping between views", "relates the elements of one view to those of another, since the same system element appears differently across views"),
    ("Rationale", "explains why the architecture as a whole — not just one view — is as it is"),
    ("Directory", "provides an index of terms, elements and relations, telling readers where each is defined and used"),
]

for bname, what in BEYOND_VIEWS:
    add(D, "Beyond views", "Recall a beyond-views section", "Very Hard", 5,
        "Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **%s** section provides and why a reader needs it." % bname,
        "**%s**: %s.\n\nThe complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent." % (bname, what),
        ["beyond-views", bname.lower().replace(" ", "-"), "documentation"], L10,
        "Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.")

NOTATIONS = [
    ("Informal", "Low", "Low", "Informal diagrams, English",
     "PowerPoint, informal drawing tools",
     "system aspects that do not require specification, formal analysis or verification",
     "quick, universally readable, needs no tool training — but ambiguous, unanalysable, and correctness cannot be checked"),
    ("Semiformal", "Medium", "Medium", "UML, SysML",
     "modelling tools with UML/SysML support",
     "systems requiring partial specification and limited analysis",
     "adds defined syntax and partial semantics, so some automated checking and code generation is possible — but semantics remain incomplete, so full verification is not"),
    ("Formal", "High", "High", "B-Method, Event-B, Z",
     "Atelier-B and similar provers",
     "safety-critical systems, where the lecture's real-world example is the Paris Metro Line 14 automated train control system",
     "formal analysis of both syntax and semantics is possible, so properties can be proved — but expertise cost and effort are high, and it is rarely justified outside safety-critical work"),
]

for nname, expr, formality, langs, tools, use, tradeoff in NOTATIONS:
    add(D, "Notation choice", "Compare notation classes precisely", "Brutal", 7,
        "Lecture 10 compares three classes of architectural notation on expressiveness, degree of formality, languages, tools and applicability. Give all five for **%s notation**, and state the trade-off it represents." % nname,
        "**%s notation**\n\n| Dimension | Value |\n|---|---|\n| Expressiveness | %s |\n| Degree of formality | %s |\n| Languages | %s |\n| Tools | %s |\n| Applicable to | %s |\n\nTrade-off: %s." % (nname, expr, formality, langs, tools, use, tradeoff),
        ["notation", nname.lower(), "formality", "documentation"], L10,
        "Assuming more formal is always better. The lecture ties formality to applicability — formal notation is for safety-critical work.")

add(D, "Notation choice", "Justify a notation for a context", "Brutal", 8,
    "For each of the following, choose a notation class from Lecture 10 and justify it: (a) a whiteboard sketch in a design discussion; (b) the design of a food-delivery mobile application; (c) an automated metro train control system.",
    "(a) **Informal**. Its applicability is 'system aspects that do not require specification, formal analysis or verification' — a discussion sketch is exactly that. Expressiveness and formality are both low, which is appropriate because the artifact's purpose is to support conversation, not to be analysed. The one non-negotiable is a key if the sketch is kept.\n\n(b) **Semiformal**, i.e. UML or SysML. The lecture uses a food-delivery application as its illustration of semiformal modelling. Such a system requires partial specification and limited analysis: structure and interactions must be unambiguous enough for a team to implement consistently, but proving properties would be disproportionate to the risk.\n\n(c) **Formal** — B-Method, Event-B or Z with a prover such as Atelier-B. The lecture names the Paris Metro Line 14 automated train control system as the real-world case. The applicability entry is 'safety-critical systems', and here formal analysis of both syntax and semantics is warranted because a defect can kill people, so the high effort and expertise cost are justified.\n\nThe general principle: notation is chosen against consequence of failure and analysis need, not against a preference for rigour.",
    ["notation", "justify", "safety-critical", "Paris-Metro"], L10,
    "Choosing formal notation for the mobile app because it is 'more professional'. The cost is not justified by the risk.")

add(D, "Choosing views", "Apply the three-step method", "Brutal", 8,
    "Lecture 10 gives a three-step method for choosing which views to document. State all three steps, and explain what the second step protects against.",
    "**Step 1** — build a stakeholder/view table: enumerate the stakeholders for the project's documentation down the rows, and enumerate the candidate views down the columns, then fill in each cell with how much information the stakeholder requires of that view: none, overview only, moderate detail, or high detail.\n\n**Step 2** — combine views: look for views that require only overview detail, and consider combining them with other views. A combined view shows elements and relations from more than one view in a single presentation.\n\n**Step 3** — prioritise and stage: decide what to do first, driven by which stakeholders need which information soonest, and recognise that documentation need not be complete before it is useful.\n\nWhat step 2 protects against: producing a large number of thin views that each cost effort to write and maintain but that no stakeholder reads in depth. The lecture's guidance elsewhere is that views which map well onto each other — for instance a deployment view and a component-and-connector view — combine naturally, because the mapping between them is close to one-to-one. Combining unrelated views instead produces an unreadable diagram, so the criterion is whether the overlays genuinely correspond.",
    ["choosing-views", "stakeholder-view-table", "combined-views", "documentation"], L10,
    "Documenting every candidate view at high detail. The method exists to reduce the set, not to justify all of it.")

add(D, "Documentation principles", "Explain a documentation rule", "Very Hard", 7,
    "Lecture 10 states that documentation should be written 'from the reader's point of view' and warns against 'unnecessary repetition'. Explain both rules and the tension between them, and state how the beyond-views material resolves it.",
    "**Reader's point of view**: documentation is written to be read, not to record the author's thought process. The practical consequences are avoiding unnecessary repetition, avoiding ambiguity (which is why every diagram needs a key), and using a standard organisation so readers know where to look.\n\n**Unnecessary repetition**: the same information restated in several places will drift out of step as the system changes, so the copies eventually contradict each other and the reader cannot tell which is current.\n\nThe tension: a reader-centred document wants each stakeholder to find what they need without hunting through material aimed at someone else, which pushes towards repeating shared information in each view. Avoiding repetition pushes the opposite way.\n\nResolution: state shared information **once**, in the beyond-views sections, and have views reference it. The system overview, the rationale, the mapping between views and the directory exist precisely so that cross-cutting information has a single home. The documentation roadmap and the 'how a view is documented' section then serve the reader-centred goal by making that single home findable — the reader is directed to the information rather than handed a copy of it.",
    ["documentation-principles", "repetition", "reader", "beyond-views"], L10,
    "Treating the two rules as independent. The exam value is in seeing they conflict and knowing where the shared material goes.")

# =====================================================================
# LECTURES 1-3 — FOUNDATIONS DEPTH
# =====================================================================
add(F, "Architecture definition", "Parse the definition precisely", "Brutal", 8,
    "Lecture 1 defines software architecture as 'the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both'. Analyse each of the four load-bearing terms and explain what the definition deliberately excludes.",
    "**Set of structures** (plural): architecture is not one diagram. A system has many structures — module, component-and-connector, allocation, and specific structures within each — and the architecture is the collection of those needed for reasoning.\n\n**Needed to reason about**: this is the selection criterion. A structure is architectural if it supports reasoning about the system and its properties, where the reasoning must be about an attribute important to some stakeholder. Structures that support no such reasoning are not architectural.\n\n**Elements and relations**: the things and how they are connected — the part usually drawn.\n\n**Properties of both**: the part usually omitted. Properties are what let anyone reason at all — a box labelled 'database' with no stated properties supports no inference about performance, availability or anything else. This is why the lecture says box-and-line drawings passed off as architectures 'are not architectures at all'.\n\nWhat is deliberately excluded: information with no ramifications outside a single element, and private implementation details. Architecture is an abstraction, and the lecture states we 'cannot, and do not want to, deal with all of the complexity all of the time'.",
    ["definition", "structures", "properties", "abstraction"], L1,
    "Quoting the definition without unpacking 'properties of both', which is the clause that does the work.")

add(F, "Every system has an architecture", "Resolve a paradox", "Brutal", 7,
    "Lecture 1 asserts that every software system has a software architecture, yet also that not every architecture is known. Explain both claims, and state the practical consequence for a team inheriting an undocumented system.",
    "Every system has an architecture because a system built from elements that relate to each other *has* structures, whether or not anyone chose them deliberately or wrote them down. Architecture is a property of the system, not of the documentation.\n\nNot every architecture is known because the designers may be long gone, the documentation may have vanished or never existed, the source code may have been lost, or only the executable remains. The lecture's point is that this does not make the architecture cease to exist — it makes it *unknown*.\n\nPractical consequence for a team inheriting such a system: the architecture must be **recovered**, not invented. Because it exists, the team's decisions are already constrained by it whether they know it or not, and acting in ignorance produces the drift Lecture 11 calls architecture erosion. The corollary is that the recovered architecture may not be a good one — the lecture is explicit that 'not all architectures are good architectures', so recovery must be followed by evaluation rather than acceptance.",
    ["every-system", "unknown-architecture", "recovery", "erosion"], L1,
    "Concluding 'if it isn't documented it has no architecture'. The lecture says the opposite.")

add(F, "Good architecture", "Separate two rule categories", "Brutal", 8,
    "Lecture 1 offers rules of thumb for good architecture, divided into two categories. Name both categories, give three rules from each, and explain why process rules can be checked before any design exists.",
    "The two categories are **process recommendations** and **structural (product) recommendations**.\n\nProcess rules include: the architecture should be the product of a single architect or a small group with an identified technical leader; the architect should base the architecture on a prioritised list of well-specified quality attribute requirements; the architecture should be documented using views addressing the concerns of the most important stakeholders; and the architecture should be evaluated for its ability to deliver the system's important quality attributes.\n\nStructural rules include: the architecture should feature well-defined modules whose functional responsibilities are allocated on the principles of information hiding and separation of concerns; each module should have a well-defined interface encapsulating changeable aspects; quality attributes should be achieved using well-known architectural tactics specific to each attribute; and the architecture should never depend on a particular version of a commercial product or tool.\n\nWhy process rules can be checked before design exists: they are about **how the architecture is being produced**, not about what it contains. You can ask whether there is an identified architect, whether prioritised quality attribute requirements exist, and whether an evaluation is scheduled, on day one — before a single element has been chosen. This makes them an early risk indicator: a project failing the process rules will very likely fail the structural ones later.",
    ["good-architecture", "process-rules", "structural-rules", "rules-of-thumb"], L1,
    "Mixing the categories. An examiner asking for 'process' recommendations will not accept information hiding.")

REASONS = [
    ("It inhibits or enables a system's quality attributes",
     "whether a system will be able to exhibit its desired quality attributes is substantially determined by its architecture — the structures chosen determine what is achievable, though architecture alone cannot guarantee functionality or quality since downstream implementation decisions matter too"),
    ("Reasoning about and managing change is enabled",
     "the lecture's classification of changes is the examinable part: a **local** change modifies exactly one element; a **nonlocal** change requires several element modifications but leaves the underlying architectural approach intact; and an **architectural** change affects the fundamental ways elements interact and will likely require changes all over the system. Architecture makes it possible to tell which kind a proposed change is"),
    ("Early design decisions can be predicted and analysed",
     "architecture holds the earliest design decisions, which are both the hardest to get right and the hardest to change later, so evaluating them early is where analysis pays most"),
    ("Communication among stakeholders is supported",
     "architecture provides a common language in which competing concerns can be expressed and negotiated at a level that is intellectually manageable"),
    ("Early design decisions are defined",
     "the architecture is the earliest point at which the decisions with system-wide consequence are made explicit and can be inspected"),
    ("It constrains the vocabulary of design alternatives",
     "once an architecture is chosen, the set of reasonable downstream design options narrows, which is a benefit because it reduces choice paralysis and enforces consistency"),
    ("It defines constraints on implementation",
     "implementations must conform to the resource allocation decisions and connection rules the architecture sets, which is what makes conformance checkable"),
    ("It influences the organizational structure",
     "architecture 'dictates the structure of an organization, or vice versa' and is typically used as the basis for the work-breakdown structure, dictating units of planning and budget, inter-team communication channels, configuration control, file-system organization, and integration and test plans"),
    ("It enables evolutionary prototyping",
     "once the architecture exists it can be analysed and prototyped as a skeletal system, letting the system run very early in the life cycle with elements filled in as they are completed"),
    ("It enables more accurate cost and schedule estimates",
     "cost and schedule estimates based on an understanding of the system's parts are inherently more accurate than those based on the whole, and the work-breakdown structure the architecture provides is what makes such estimates possible"),
    ("It can be the basis for training",
     "the architecture, including a description of how elements interact to carry out required behaviour, can serve as the introduction to the system for new team members"),
    ("It can be created as a transferable, reusable model",
     "the earlier reuse is applied in the life cycle the greater the benefit, and architecture-level reuse is the earliest form available — a product line shares its architecture across products"),
    ("Independently developed elements can be integrated",
     "well-defined interfaces and interaction rules are what make it possible for elements built separately to be combined without redesign"),
]

for i, (title, detail) in enumerate(REASONS, start=1):
    add(F, "Why architecture matters", "Explain one reason in depth", "Very Hard", 6,
        "Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'%s'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it." % title,
        "%s.\n\nConsequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address." % (detail[0].upper() + detail[1:]),
        ["why-architecture-matters", "thirteen-reasons", "reason-%d" % i], L2,
        "Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.")

add(F, "Managing change", "Classify changes and justify", "Brutal", 8,
    "Lecture 2 classifies changes into three categories. Define all three precisely and classify these: (a) changing a validation message's wording; (b) adding a new field that must appear in the UI, the service layer and the database; (c) moving from a single shared database to per-service databases.",
    "**Local** — a change that modifies exactly one element. **Nonlocal** — a change that requires several element modifications but leaves the underlying architectural approach intact. **Architectural** — a change that affects the fundamental ways in which elements interact with each other, and will likely require changes all over the system.\n\n(a) **Local**. One element, no interaction change.\n\n(b) **Nonlocal**. Three elements must change, but nothing about how they interact is altered — the layering, the call patterns and the data flow are all as before. This is the category students most often mis-classify as architectural simply because it touches several files; the test is not *how many* elements change but whether the *interaction approach* changes.\n\n(c) **Architectural**. Splitting a shared data store changes the fundamental interaction model: what was a Shared-Data arrangement with implicit consistency becomes distributed data requiring explicit coordination, so transaction boundaries, consistency guarantees and failure modes all change system-wide.\n\nThe practical value of the classification: it lets an architect price a change request before agreeing to it, and it is why Lecture 2 lists managing change as one of the thirteen reasons.",
    ["change", "local", "nonlocal", "architectural", "classification"], L2,
    "Classifying by number of files touched. A change touching many elements is nonlocal unless the interaction model changes.")

CONTEXTS = [
    ("Technical context", "the technical environment in which the architecture must operate — the available technologies, the state of the practice, and the technical constraints already in place",
     "the architect must know what is technically possible and what is already fixed, since a design that assumes unavailable technology cannot be built"),
    ("Project life-cycle context", "where architecture sits in the development life cycle and how it relates to the surrounding activities of requirements, design, implementation, testing and maintenance",
     "architecture is not a phase that ends — it is created early but is continually revisited, and the life-cycle model chosen determines when architectural decisions can be revised"),
    ("Business context", "the business goals, market position, competitive pressures and organisational purposes the system exists to serve",
     "architecture serves business goals, and Lecture 8's PALM exists precisely to make that link traceable; an architecture with no business justification is unmoored"),
    ("Professional context", "the architect's own role — the duties, skills and knowledge expected of the person occupying it",
     "the architecture is a product of a person or small group, so the competence and responsibilities of that role directly bound what the architecture can be; this is why Lecture 1's process rules of thumb begin with identifying a single architect or small group with a technical leader"),
]

for cname, what, why in CONTEXTS:
    add(F, "Many contexts", "Explain one context in depth", "Very Hard", 6,
        "Lecture 3 says architecture must be considered in four contexts. Explain the **%s** — what it covers and why an architect who ignores it produces a worse architecture." % cname,
        "The %s covers %s.\n\nWhy ignoring it damages the architecture: %s.\n\nThe four contexts are technical, project life-cycle, business and professional. Lecture 3's point in naming four is that architecture is never evaluated on technical merit alone — the same design can be right in one context and wrong in another." % (cname, what, why),
        ["contexts", cname.lower().replace(" ", "-"), "four-contexts"], L3,
        "Naming the four contexts without content. Each carries specific obligations for the architect.")

add(F, "Architecture Influence Cycle", "Explain bidirectional influence", "Brutal", 8,
    "Explain the Architecture Influence Cycle, giving influences in **both** directions with a concrete example of each, and state what the cycle implies about treating requirements as fixed inputs.",
    "Inbound influences — things that shape the architecture: stakeholders, whose concerns and priorities determine which quality attributes matter; the developing organisation, whose structure, skills and existing assets constrain what can be built; the technical environment, which fixes the available and mandated technologies; and the architect's own experience, which shapes which patterns are reached for.\n\nOutbound influences — things the architecture in turn shapes: the structure of the developing organisation, since Lecture 2 states architecture is typically the basis for the work-breakdown structure and thus dictates teams, budgets and communication channels; the goals of the developing organisation, since a successful architecture can become a reusable asset or a product-line platform that changes what the business sells; customer requirements for the next system, since customers who see what this architecture makes cheap will ask for more of it; and the architect's experience, which feeds forward into future designs.\n\nWhat it implies about requirements: they cannot be treated as a fixed input handed to the architect. The cycle says the architecture influences the requirements of subsequent systems, so the relationship is iterative — which is exactly why Lecture 8 pairs elicitation methods like QAW and PALM with the architecture rather than placing them strictly before it. An architect who treats the requirements document as immutable has cut the feedback edge of the cycle.",
    ["influence-cycle", "bidirectional", "organisation", "requirements"], L3 + "; " + L2 + "; " + L8,
    "Giving only the inbound half. The cycle is named a cycle because of the return edges.")

# ---------------------------------------------------------------- emit
with open("../questions_advanced.json", "w") as f:
    json.dump(Q, f, indent=1, ensure_ascii=False)
with open("../questions_advanced.js", "w") as f:
    f.write("window.QUESTIONS_ADVANCED = " + json.dumps(Q, ensure_ascii=False) + ";\n")

print("ADV total:", len(Q))
from collections import Counter
for k, v in Counter(q["topic"] for q in Q).most_common():
    print("  %3d  %s" % (v, k))
