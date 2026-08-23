# -*- coding: utf-8 -*-
"""
gen_packs.py — renders the two new banks into readable Markdown topic packs,
matching the collapsible <details> format used by the original topic_packs/.
"""
import json, os, re
from collections import OrderedDict


def slug(s):
    s = s.lower().replace("&", "and")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def render(q, code=False):
    out = []
    out.append("## %s — %s (%s, %s marks)" % (q["id"], q["subtopic"], q["difficulty"], q["marks"]))
    out.append("")
    out.append("**Type:** %s  " % q["type"])
    out.append("**Source:** %s" % q["source"])
    out.append("")
    out.append(q["prompt"])
    out.append("")
    out.append("<details>")
    out.append("<summary><strong>Show answer</strong></summary>")
    out.append("")
    out.append(q["answer_outline"])
    out.append("")
    if code and q.get("code_answer"):
        out.append("```%s" % q.get("language", "java"))
        out.append(q["code_answer"])
        out.append("```")
        out.append("")
    if q.get("exam_trap"):
        out.append("> **Exam trap:** %s" % q["exam_trap"])
        out.append("")
    if q.get("tags"):
        out.append("*Tags: %s*" % ", ".join(q["tags"]))
        out.append("")
    out.append("</details>")
    out.append("")
    out.append("---")
    out.append("")
    return "\n".join(out)


def build(bank_file, outdir, title, is_code):
    data = json.load(open(bank_file))
    os.makedirs(outdir, exist_ok=True)
    groups = OrderedDict()
    for q in data:
        groups.setdefault(q["topic"], []).append(q)

    index = ["# %s — Topic Packs" % title, "",
             "%d questions across %d topics. Every answer is grounded in the lecturer-supplied materials." % (len(data), len(groups)),
             "", "| Topic | Questions | File |", "|---|---:|---|"]

    for topic, qs in groups.items():
        fn = slug(topic) + ".md"
        index.append("| %s | %d | [%s](%s) |" % (topic, len(qs), fn, fn))
        body = ["# %s" % topic, "",
                "*%s bank — %d questions.*" % (title, len(qs)), "",
                "Answers are collapsed. Attempt each question before expanding.", "", "---", ""]
        for q in qs:
            body.append(render(q, is_code))
        open(os.path.join(outdir, fn), "w").write("\n".join(body))

    index.append("")
    open(os.path.join(outdir, "INDEX.md"), "w").write("\n".join(index))
    print("%s -> %d files, %d questions" % (outdir, len(groups) + 1, len(data)))


build("../questions_advanced.json", "../topic_packs_advanced", "Advanced Depth", False)
build("../questions_code.json", "../topic_packs_code", "Code Implementation", True)

# Combined all-questions files
for src, dst, isc, ttl in [("../questions_advanced.json", "../ALL_ADVANCED_QUESTIONS.md", False, "Advanced Depth"),
                           ("../questions_code.json", "../ALL_CODE_QUESTIONS.md", True, "Code Implementation")]:
    data = json.load(open(src))
    body = ["# All %s Questions" % ttl, "", "%d questions." % len(data), "", "---", ""]
    for q in data:
        body.append(render(q, isc))
    open(dst, "w").write("\n".join(body))
    print("%s -> %d questions" % (dst, len(data)))
