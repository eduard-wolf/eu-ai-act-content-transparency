# EU AI Act Content Transparency Playbook

> 🤖 **Made with AI — no editorial review.** This text was produced by AI agents
> and machine-verified against the official sources. It has **not undergone
> editorial review by a human with relevant subject-matter expertise**; the
> exception in Article 50(4), second subparagraph of the AI Act is therefore
> **not claimed**. What was verified and what was not:
> [Provenance](PROVENANCE.md).

**Deutsche Fassung: [README.de.md](README.de.md).** Language rule: the English set carries what is
portable across the EU, the German set leads wherever the enforcement layer is German (KI-MIG,
Bundesnetzagentur, UWG). Verbatim quotes from EU documents stay in their official English wording in
both.

Decision tree, case catalog and a git-native editorial-evidence gate for the AI Act's content
transparency duties (Article 50).

> ⚠️ **Not legal advice.** This playbook is a technical and editorial working aid. The European
> Commission's guidelines (C(2026) 5054 final) are legally non-binding; only the Court of Justice of
> the European Union can interpret the AI Act with binding effect. With C(2026) 5054 final the
> Commission approved the content of the draft guidelines; they will be formally adopted once all
> language versions are available. There is no case law on Article 50 yet — this playbook builds a
> defensible position, not a safe harbour.
> **As of: 24 August 2026; updated on 1 October 2026.**

## Why this exists

**Article 50 of [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) has
applied since 2 August 2026** (Art. 113; guidelines para 153). The duties that bite on the
publishing side — the deepfake label and the disclosure for published text on matters of public
interest, both deployer duties under Art. 50(4) (para 19: *"the professional deployer's transparency
obligations laid down in Article 50(3) and (4) AI Act"*) — apply with **no grace period**. The transitional period until 2 December 2026
covers only the **provider** marking duty under Art. 50(2) for systems already on the market (para 153;
Commission [FAQ on Article 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)).

For **text**, outside law-enforcement use authorised by law (para 139), the law offers exactly one
way out. Art. 50(4), second subparagraph does not apply
where *"the AI-generated content has undergone a process of human review or editorial control and
where a natural or legal person holds editorial responsibility for the publication of the content"*
(para 130). Two cumulative conditions (para 133), and the bar is substantive: fact-checking is
*"a minimum requirement"* (para 134), while *"[s]uperficial, solely formal or procedural checks
(e.g. spell-checking or grammatical correction), the mere existence of an editorial policy,
automated review processes or cursory editorial approval without substantive engagement"* do not
qualify (para 135).

The exception is also **order-sensitive**:

> *"Any substantive AI intervention occurring after the human review or editorial control process has
> taken place will therefore cause the exception to become void."* — guidelines para 136

**The form of the evidence, however, is legally open.** The Code of Practice on Transparency of
AI-Generated Content states that adhering deployers do not have *"to document individual instances
of human review or editorial control over individual text publications"* (Sec. 2, Commitment 4) —
while expressly allowing them to *"record additional information on the nature of the review or the
type of involvement of the AI system in the published text"*. Anyone who is not a signatory has to
demonstrate compliance *"through other adequate means"* and is expected to run a gap analysis
against the code (para 148).

That open space is what this repository fills. The review becomes a **review record bound to the
reviewed bytes by SHA-256**, the sign-off becomes a **server-attested PR approval**, and the order
rule of para 136 becomes a **CI check that turns red** the moment anything touches the content
afterwards.

**Two sentences that carry the whole playbook:**

- The editorial exception is **text only**. For images, audio and video there is none — there only
  the deepfake test decides, and the art exception merely relaxes the **form** of disclosure
  (Art. 50(4); paras 119–123).
- Mnemonic: **text asks "who checked it?" — image asks "does it look real?"**

## How this sits next to other AI Act tooling

There is no shortage of AI Act tooling, and this repository replaces none of it. A snapshot of the
official community marketplace for Claude plugins on 24 August 2026 lists 2,282 plugins, several of
them on the AI Act — among them `eu-ai-act-compliance` (a risk classifier under Article 6),
`gia-eu-ai-act-compliance` (classification under Regulation (EU) 2024/1689 and screening against the
prohibitions of Article 5), `norma-claude-skill` (an EU compliance methodology with templates for
the AI Act, ISO 42001 and NIS2) and `sentinal-stack` (agents for DLP, AI Act compliance and audit
evidence).

The dividing line is the object, not the quality. Those tools classify **systems** or supply
**templates**. This repository works one level down, on the **content** a system produces: which
Article 50 duty attaches to one specific text, image, audio or video file, and how the human review
behind it is anchored as evidence in Git and CI. Whoever needs to know whether a system is high-risk
reaches for the classifiers; whoever needs to know whether this article needs a label and how to
show the review happened is in the right place here. Marketplace snapshots age — re-check the
picture before relying on it.

## What's inside

```text
playbook/en/   the nine chapters, English
playbook/de/   the same nine chapters in German — the originals
plugins/       the Claude Code skill — this repository doubles as its marketplace
gate/          the editorial-evidence gate: schema, check script, PR template, CI workflow
tools/         label-crop-check, the geometric pre-check for labels set inside an image
examples/      the worked example that this repository's own CI runs over
```

For text the decision tree has two exits, and the playbook builds out both: the **exception path** — human editorial
review, evidenced through the gate (chapter 03, `gate/`) — and the **labelling path** without review (chapter 09).
This repository itself takes the second; the notice at the top of this file is the example.

Every chapter exists in both languages. The table links the English files; the German originals sit in `playbook/de/` and lead where the enforcement layer is German.

| Path | What it is |
|---|---|
| [`playbook/en/01-decision-tree.md`](playbook/en/01-decision-tree.md) | Decision tree, eight stages (0–7): exposure, chatbot, deepfake test, publication, public interest, editorial exception, form of the label, neighbouring duties |
| [`playbook/en/02-case-catalog.md`](playbook/en/02-case-catalog.md) | 71 classified cases in seven groups — image (advertising/e-commerce), image (journalistic), audio, video, text, internal content, legacy content — each with a verdict and a source anchor |
| [`playbook/en/03-editorial-exception.md`](playbook/en/03-editorial-exception.md) | The text exception in depth: both cumulative conditions, what does not qualify (para 135), the order rule (para 136), what documentation is and is not required |
| [`playbook/en/04-labelling-form.md`](playbook/en/04-labelling-form.md) | Form, wording and placement per modality; the optional EU icons; a German/English label text library; accessibility; pre-publication checklist |
| [`playbook/en/05-agencies-and-contracts.md`](playbook/en/05-agencies-and-contracts.md) | Commissioned work: who counts as deployer, who labels, who carries the unfair-competition risk, plus a contract checklist |
| [`playbook/en/06-myths-faq.md`](playbook/en/06-myths-faq.md) | Eight widespread misconceptions, corrected with sources |
| [`playbook/en/07-provider-marking.md`](playbook/en/07-provider-marking.md) | Provider marking under Art. 50(2): what a watermark proves, what it does not, why it never replaces your own label |
| [`playbook/en/08-legal-basis.md`](playbook/en/08-legal-basis.md) | Legal basis: timeline, verbatim norms, German authorities, sanctions, what supervisors expect as evidence, and when this needs re-checking |
| [`playbook/en/09-labelling-path.md`](playbook/en/09-labelling-path.md) | The labelling path: publishing without editorial review — when it is the right one, what belongs in the label line and what does not, placement without layout damage, the provenance page, the as-of date |
| [`gate/README.md`](gate/README.md) | The editorial-evidence gate: review-record schema, the zero-dependency check script, PR template, ready-made GitHub Actions workflow |
| [`plugins/eu-ai-act-content-check/skills/eu-ai-act-content-check/SKILL.md`](plugins/eu-ai-act-content-check/skills/eu-ai-act-content-check/SKILL.md) | The Claude Code skill: runs the Article 50 check before publishing and prepares — never attests — the review record |
| [`tools/label-crop-check/README.md`](tools/label-crop-check/README.md) | Geometric pre-check: does an in-image label survive the 1:1, 4:5, 9:16 and 16:9 platform crops? |
| [`examples/blog-artikel.md`](examples/blog-artikel.md) | A worked example: a fictional local-news article and its review record, used by this repo's own CI |

## The gate in 30 seconds

Every reviewed content file `<name>.md` gets a sibling record `<name>.review.json`. The record says
who reviewed the substance with what subject-matter competence (para 134), who holds editorial
responsibility and where that is publicly findable (para 138), what was actually changed or
rejected, how the content was classified — and it carries the **SHA-256 of the released version**.

Any later change — a hand edit, a build step, an AI rewriting the teaser — changes that hash,
invalidates the record and fails the check. Para 136 stops being a promise in a handbook and becomes
a state the pipeline verifies.

Break it yourself (the script needs Node 18 or newer; its console output is German):

```bash
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"   # 0 — the record matches the content

printf '\nThis sentence was added after sign-off.\n' >> examples/blog-artikel.md
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"   # 1 — "Hash-Abweichung": changed after editorial sign-off

git checkout -- examples/blog-artikel.md   # assumes the file is committed — otherwise remove the appended line by hand
```

Nobody had to notice that change. The hash noticed. In a real pipeline the merge would be blocked
and a fresh review due — before publication, not after.

**What the gate does and does not do.** It enforces the **process** and makes it auditable; it does
not enforce the **quality** of the review. A green gate over a review that never really happened is
a well-documented breach — para 135 rules out *"cursory editorial approval without substantive
engagement"*. The gate is a documentation form that goes beyond the legal minimum and is expressly
permitted (Code of Practice, Sec. 2, Commitment 4) — **not a safe harbour**.

## Quickstart

**The gate, in five steps** (details: [`gate/README.md`](gate/README.md)):

1. Copy [`gate/scripts/check-review-record.mjs`](gate/scripts/check-review-record.mjs) and
   [`gate/review-record.schema.json`](gate/review-record.schema.json) into your repository, then run
   `node gate/scripts/check-review-record.mjs --self-test` once — exit 0 means the copy is intact.
2. Decide which directories hold label-relevant content and add one record per content file: copy
   [`gate/templates/review-record.example.json`](gate/templates/review-record.example.json), fill it
   in, set `content_sha256` with `shasum -a 256 <file>`.
3. Copy [`gate/github-actions/editorial-gate.yml`](gate/github-actions/editorial-gate.yml) to
   `.github/workflows/` and point it at your directories.
4. Copy [`gate/templates/PULL_REQUEST_TEMPLATE.md`](gate/templates/PULL_REQUEST_TEMPLATE.md) to
   `.github/`.
5. Enable branch protection on the publishing branch: require a pull request and at least one
   approval, switch on *"Dismiss stale pull request approvals when new commits are pushed"*, and mark
   the gate's status check as required. **Without step 5 the gate is a recommendation, not a gate.**

**The skill.** This repository is also a plugin marketplace. Two commands install the skill:

```text
/plugin marketplace add eduard-wolf/eu-ai-act-content-transparency
/plugin install eu-ai-act-content-check@eu-ai-act-content-transparency
```

Without the plugin mechanism, copy the folder
`plugins/eu-ai-act-content-check/skills/eu-ai-act-content-check` into your project's
`.claude/skills/` directory, so that `.claude/skills/eu-ai-act-content-check/SKILL.md` exists; a
local clone of this repository also works as a marketplace source
(`/plugin marketplace add <path to this repository>`). The skill format is documented for Claude
Code — and the instructions themselves are plain Markdown, readable without installing anything:
[`SKILL.md`](plugins/eu-ai-act-content-check/skills/eu-ai-act-content-check/SKILL.md).

The skill walks the decision tree before content is published, deployed or merged, and prepares the
review record — it never fills in the reviewer, the review date, the `pruefung` booleans or the
final hash. A record produced end to end by an agent is precisely the *"automated review process"*
that para 135 excludes.

**The crop check.** `node tools/label-crop-check/check.mjs --image 1600x1200 --label 1150,40,120x60`
tells you whether a label placed inside an image survives the usual platform crops — 1:1, 4:5, 9:16
and 16:9 by default, others via `--ratios`; exit 1 if one of them cuts it. Zero dependencies,
`--self-test` built in.

## Honest scope

- **A playbook plus a verification pattern — not a framework.** No CMS plugin, no service, no
  database. Two Node scripts with zero dependencies, a JSON schema, a workflow file and nine
  chapters. Adopt the parts you need.
- **Two languages, one rule.** The English set carries what is portable across the EU; the German
  set leads where the operative enforcement layer is German: under §§ 2, 6 and 8
  [KI-MIG](https://www.gesetze-im-internet.de/ki-mig) the Bundesnetzagentur is the market
  surveillance authority, the single point of contact and the central complaints body
  ([complaints page](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/18_Beschwerdestelle/start.html)),
  and unfair-competition law (UWG) runs alongside Article 50. Since Regulation (EU) 2026/1744 the
  AI Office of the Commission is exclusively competent for providers of AI systems built on their
  own general-purpose AI model (same provider or same undertaking) and for systems of very large
  online platforms and search engines (Article 75(1) AI Act, with exceptions); deployers that merely
  use such systems remain under national supervision
  ([`playbook/en/08-legal-basis.md`](playbook/en/08-legal-basis.md), section 3). The scripts'
  console output is German. Quotes from EU documents are kept in their official English wording.
- **Non-binding sources, no case law.** Guidelines and FAQ are Commission interpretation, not law;
  the Commission itself announces a review of the guidelines (para 155). Fines under Article 50 can
  reach EUR 15 000 000 or 3% of total worldwide annual turnover, whichever is higher — for SMEs
  (Article 99(6) AI Act; para 152) and, since Regulation (EU) 2026/1744, for small mid-cap
  enterprises (Article 99(6a) AI Act) whichever is lower.
- **A label is no free pass.** *"Reliance on the attenuated transparency obligation cannot be a
  justification for failing to respect the fundamental rights of individuals or rightsholders under
  Union law on intellectual property or Union data protection law"* (para 124, whose footnote 34
  extends this to published texts informing the public on matters of public interest). German
  unfair-competition law (§§ 5, 5a UWG) applies alongside, label or no label — see
  [`playbook/en/08-legal-basis.md`](playbook/en/08-legal-basis.md). And what Article 5 AI Act
  prohibits stays prohibited — from 2 December 2026 that includes AI systems for non-consensual
  intimate material and for child sexual abuse material (Article 5(1), first subparagraph,
  points (ba) and (bb) AI Act).
- **The machine-readable provider marking never replaces your own perceivable label.**
  *"[D]eployers cannot rely on the machine-readable marking embedded in the content by the provider
  under Article 50(2) AI Act, since those markings are not immediately clear and distinguishable for
  the natural persons exposed to the deep fake content."* (para 117)
- **Grey zones stay grey zones.** Where the sources do not decide a case, the chapters say so and
  ask for a documented classification instead of manufacturing certainty. `[zu verifizieren: …]`
  marks deliberately open points — no official source covers the case there; nothing is invented.

## Status

**As of: 24 August 2026** — three weeks after Article 50 became applicable, with no case law and no
published administrative practice on it; **updated on 1 October 2026** (changes made by
Regulation (EU) 2026/1744, competence of the AI Office, status of the guidelines, updated sources).
Every legal statement in this repository carries a dated stamp and a source; the events that would
change the conclusions — a first CJEU or BGH ruling, first documented warning letters or
Bundesnetzagentur proceedings, the formal adoption or a review of the guidelines, an amendment to
the KI-MIG — are listed in
[`playbook/en/08-legal-basis.md`](playbook/en/08-legal-basis.md), section 7.

## License

MIT — see [LICENSE](LICENSE).
