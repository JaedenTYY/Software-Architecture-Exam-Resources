# -*- coding: utf-8 -*-
"""
check_overlap.py — verifies the new banks do not duplicate the original 3,888.
Checks: ID collisions, exact prompt duplicates, exact answer duplicates,
and near-duplicate prompts by token-overlap similarity.
"""
import json, re, sys
from collections import Counter

orig = json.load(open("../../questions.json"))
adv = json.load(open("../questions_advanced.json"))
code = json.load(open("../questions_code.json"))
new = adv + code

print("=" * 62)
print("OVERLAP REPORT")
print("=" * 62)
print("Original bank : %d questions" % len(orig))
print("Advanced Depth: %d questions" % len(adv))
print("Code Impl.    : %d questions" % len(code))
print("New total     : %d questions" % len(new))
print("Grand total   : %d questions" % (len(orig) + len(new)))
print()

# 1. ID collisions
oid = set(q["id"] for q in orig)
nid = set(q["id"] for q in new)
print("1. ID COLLISIONS")
print("   original id pattern : %s ... %s" % (sorted(oid)[0], sorted(oid)[-1]))
print("   new id prefixes     : ADV-, CODE-")
print("   collisions          : %d" % len(oid & nid))
print("   duplicate new ids   : %d" % (len(new) - len(nid)))
print()

# 2. Exact prompt duplicates
op = set(q["prompt"].strip() for q in orig)
dupes = [q for q in new if q["prompt"].strip() in op]
print("2. EXACT PROMPT DUPLICATES vs original: %d" % len(dupes))
print()

# 3. Exact answer duplicates
oa = set(q["answer_outline"].strip() for q in orig)
adupes = [q for q in new if q["answer_outline"].strip() in oa]
print("3. EXACT ANSWER DUPLICATES vs original: %d" % len(adupes))
print()

# 4. Question TYPE overlap
otypes = set(q["type"] for q in orig)
ntypes = set(q["type"] for q in new)
shared = otypes & ntypes
print("4. QUESTION-TYPE OVERLAP")
print("   original types : %d" % len(otypes))
print("   new types      : %d" % len(ntypes))
print("   shared types   : %d %s" % (len(shared), sorted(shared) if shared else ""))
print()

# 5. Near-duplicate detection (Jaccard on content words)
STOP = set("""the a an of to in for and or is are be was were on at by with as that this
these those it its from which what how why when where explain state give name describe
your answer question marks lecture using use used must should would could may can not
do does did has have had will shall than then there their they them we you i he she""".split())


def toks(s):
    return set(w for w in re.findall(r"[a-z0-9]+", s.lower()) if w not in STOP and len(w) > 2)


orig_toks = [(q["id"], toks(q["prompt"])) for q in orig]
worst = []
for q in new:
    t = toks(q["prompt"])
    if not t:
        continue
    best, bid = 0.0, None
    for oid_, ot in orig_toks:
        if not ot:
            continue
        inter = len(t & ot)
        if inter == 0:
            continue
        j = inter / float(len(t | ot))
        if j > best:
            best, bid = j, oid_
    worst.append((best, q["id"], bid, q["prompt"][:70]))

worst.sort(reverse=True)
over = [w for w in worst if w[0] >= 0.50]
print("5. NEAR-DUPLICATE PROMPTS (Jaccard similarity on content words)")
print("   threshold for concern : 0.50")
print("   items at/above 0.50   : %d" % len(over))
print()
print("   Ten most similar new questions vs anything in the original bank:")
for j, nid_, oid_, txt in worst[:10]:
    print("     %.3f  %-10s vs %-8s  %s..." % (j, nid_, oid_, txt))
print()

mx = worst[0][0] if worst else 0
print("=" * 62)
ok = (len(oid & nid) == 0 and len(dupes) == 0 and len(adupes) == 0 and len(over) == 0)
print("RESULT: %s" % ("PASS - no overlap detected" if ok else "REVIEW NEEDED"))
print("Maximum similarity of any new prompt to any original prompt: %.3f" % mx)
print("=" * 62)
