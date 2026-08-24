# The editorial exception: when AI text needs no label

> 🤖 **Made with AI — no editorial review.** This text was produced by AI agents
> and machine-verified against the official sources. It has **not undergone
> editorial review by a human with relevant subject-matter expertise**; the
> exception in Article 50(4), second subparagraph of the AI Act is therefore
> **not claimed**. What was verified and what was not:
> [Provenance](../../PROVENANCE.md).

> ⚠️ **Not legal advice.** This playbook is a technical and editorial working aid. The European
> Commission's guidelines (C(2026) 5054 final) are legally non-binding; only the Court of Justice of
> the European Union can interpret the AI Act with binding effect. There is no case law on
> Article 50 yet — this playbook builds a defensible position, not a safe harbour.
> **As of: 24 August 2026.**

For editorial, agency and marketing work, Article 50(4), second subparagraph, AI Act holds exactly
one practically usable door through which AI-generated text fits **without a label**: the editorial
exception. Beside it stands only the exception for law enforcement authorised by law (para 130 iii;
its own section at para 139), which is left aside here — on that, [chapter 01](01-decision-tree.md).
This chapter sets out when the editorial exception holds — and where it fails in practice. The
technical implementation is in [gate/](../../gate/README.md); the form of the label for all cases in
which the exception does **not** apply is in [chapter 04](04-labelling-form.md).

> 🔑 **Key point up front:** The editorial exception is **text only** — for images,
> audio and video there is none. There, the deepfake test alone decides; the art exception
> relaxes only the **form** of disclosure (Article 50(4), first subparagraph; guidelines
> paras 119–123). A deepfake stays subject to labelling no matter how thoroughly a human has
> reviewed it.
>
> 🧭 **Mnemonic:** Text asks "who checked it?" — image asks "does it look real?"

**Scope first, then the exception.** Only those who are under the duty at all need the exception:
published text (para 131 i) **and** a matter of public interest (para 131 iii). Both are tested by
[chapter 01](01-decision-tree.md), stages 3 and 4. An internal report or a pure product text with no
health, safety or sustainability claim does not fall within the scope in the first place — in that
case the review is a question of quality, not a question of law.

## 1. Two conditions, cumulative

Guidelines **para 133** expressly calls them *cumulative* — if one is missing, the labelling duty
applies:

> "Article 50(4), second subparagraph, AI Act foresees an exception to the transparency
> obligation laid down in that provision where two cumulative conditions are met: (i) the
> AI generated or manipulated text must have undergone human review or editorial control
> and (ii) a legal or natural person must hold editorial responsibility for the publication."

| # | Condition | Core | Source |
|---|---|---|---|
| 1 | **Human review or editorial control** | Deliberate examination of the *substance*, fact-checking as the minimum — either by persons with the relevant expertise (*human review*) **or** by a responsible editorial entity with the authority to reject (*editorial control*); either one of the two routes suffices | para 134, negative list para 135 |
| 2 | **Editorial responsibility** | A named natural or legal person with *ultimate legal* responsibility; identity and contact publicly findable | para 138, EMFA reference para 140 |

Para 133 expressly allows reliance on **professional and deontological standards** as evidence:
*"deployers may rely on relevant applicable professional or deontological standards
to demonstrate compliance with those requirements"*.

## 2. Condition 1 — what "reviewed" means (para 134)

The guidelines define two routes that reach the same goal. **One** of the two suffices.

**Human review:**

> "Human review refers to the deliberate examination of the substance of the content by one
> or more natural persons possessing relevant knowledge and professional judgement pertaining
> to the subject matter under scrutiny (e.g. academic peer review or professional validation
> chains). **Fact-checking the accuracy of the content is a minimum requirement that should
> be part of that review.**"

**Editorial control:**

> "Editorial control refers to the control exercised in practice by a responsible editorial
> entity (e.g. an editor-in-chief) over the content having the authority to **approve, alter
> or reject** the substance of the text based on substantive grounds (incl. fact-checking of
> information and ensuring the trustworthiness of sources)."

Four features make up the route that applies in each case — **deliberate** and **substance** apply
to both, **subject-matter expertise** carries the human-review route, the **authority to reject**
carries the editorial-control route:

| Feature | human review (para 134, sentences 2–3) | editorial control (para 134, sentence 4) |
|---|---|---|
| **deliberate** — a work step of its own, not a by-product | ✅ *"deliberate examination"* | ✅ *"exercised in practice"* — lived, not on paper |
| **substance rather than form** — what is examined are claims, figures, quotations and sources, not comma placement | ✅ *"examination of the substance of the content"* | ✅ *"the substance of the text based on substantive grounds"* |
| **subject-matter expertise** (*relevant knowledge and professional judgement*) — "somebody from the team" is not enough | ✅ expressly required | not named separately in para 134; the responsible editorial entity vouches for it |
| **authority to reject** — anyone who may only wave things through but not discard them exercises no editorial control | not named separately in para 134 | ✅ verbatim: *"authority to approve, alter or reject"* |

⚠️ **Do not cumulate.** Para 133 requires "human review **or** editorial control" — **one** of the
two routes suffices. An academic peer review satisfies the condition without any editorial
management with authority to reject sitting anywhere; conversely, an editor-in-chief carries the
control without every reviewing person being a specialist author on the subject. Anyone who ticks
off both columns as a checklist checks more than the law requires — that is permissible, but not a
condition.

On both routes the fact-check is the **minimum, not a bonus**: for human review expressly as
*"a minimum requirement that should be part of that review"*, for editorial control as part of the
*"substantive grounds"* (*"incl. fact-checking of information …"*). Checking how well sources hold
up (*"ensuring the trustworthiness of sources"*), by contrast, is named by para 134 only in the
editorial-control sentence.

> 🧰 **What follows from this for the gate:** The review record asks for fields from **both** pillars
> — `reviewer.fachkompetenz` (human review) alongside `pruefung.quellen_geprueft` and
> `pruefung.aenderungen_vorgenommen` (editorial control). That is deliberate over-fulfilment,
> so that the evidence holds regardless of which route is invoked later — **not** because the law
> required both cumulatively (→ [gate/](../../gate/README.md)).

For **media service providers**, existing practice as actually lived is preserved: *"This is without
prejudice to existing review and editorial procedures and professional standards applicable
to media service providers"* (para 134, likewise para 140 and Code of Practice Sec. 2,
Commitment 4, first paragraph).

## 3. The competence test: can I review **this** text?

The sharpest filter of the whole exception in practice has no paragraph of its own. It sits in a
phrase from para 134 that is easily skimmed over when reading:

> "Human review refers to the deliberate examination of the substance of the content by one
> or more natural persons **possessing relevant knowledge and professional judgement
> pertaining to the subject matter under scrutiny** (e.g. academic peer review or professional
> validation chains). **Fact-checking the accuracy of the content is a minimum requirement
> that should be part of that review.**"

**Competence is determined per content item, not per person.** The reference point is *"the subject
matter under scrutiny"* — the specific matter under review, not the title, the role or the
professional experience of the reviewing person. The exception therefore does not ask "does this
person have the relevant expertise?", but "does this person have the relevant expertise **for this
text**?". The same person can answer the question yes for one article and no for the next without
anything about them having changed.

In the first person the question can no longer be dodged — and that is exactly how it belongs at
the start of every review: **not "am I an expert?", but "can I review THIS text on the merits?"**.

### 3.1 Self-assessment: four test questions

Before the review, for the specific text at hand. All four must honestly be answerable with yes:

| # | Test question | What it hangs on |
|---|---|---|
| 1 | Can I tell whether the central **factual statements** are right or wrong? | The core of the *"examination of the substance"* (para 134) — anyone who can only regard a statement as plausible is examining the style, not the substance |
| 2 | Can I assess the **sources** — whether they hold, are current and are on point? | *"ensuring the trustworthiness of sources"* (para 134); that requires knowing the source landscape of the subject |
| 3 | **Would I notice mistakes** — including the ones that sound plausible? | The fact-check is *"a minimum requirement"* (para 134) — but only someone who knows what the correct state is can notice mistakes |
| 4 | Can I change or reject the text **on substantive grounds**? | Two halves: the **authority** (*"authority to approve, alter or reject"* on *"substantive grounds"*, para 134) and the **ability** to name substantive grounds at all |

Test question 3 is the most uncomfortable one, because it targets one's own ignorance: an AI text is
linguistically flawless even when it is factually wrong. Where subject-matter expertise is missing,
so is exactly the signal one would otherwise stumble over — the crooked sentence, the ill-fitting
phrase, the wrong figure in familiar territory. **"It reads right" is not a review result.**

### 3.2 Subject-matter dependence: the same person, two results

Because competence hangs on the subject matter, the line runs straight through persons and teams:

| Regularly **present** | Regularly **absent** |
|---|---|
| Someone writing about **their own product**, which they built, ran and measured — the factual statements are their own knowledge, mistakes stand out | Someone writing about **a field that is not their own**: law, medicine, tax, unfamiliar technology |
| Someone writing about **their own specialist area** and knowing the state of the sources | Someone writing about an adjacent field that only *looks* familiar |
| Someone who **gathered the figures themselves** or can trace where they come from | Someone who knows the figures only from the AI output and has nothing to hold against them |

This matches the official positive examples (box after para 138, → section 7): the science blog has
it **peer-reviewed internally**, the sustainability report goes through the company's **specialist
functions**, the safety warning is signed off by a **public official** of the competent authority.
In all three, the reviewer is not "somebody" but somebody from the field **for precisely this
subject matter**.

### 3.3 Does the test apply on the editorial-control route too?

Read literally, para 134 requires subject-matter expertise only in the **human-review** sentence.
For **editorial control**, the same paragraph names instead the authority to *"approve, alter or
reject"* the text on *"substantive grounds (incl. fact-checking of information and ensuring the
trustworthiness of sources)"* — expertise does not appear there as a feature of its own (so too the
feature table in section 2).

**This playbook's reading** (the guidelines say nothing express on the point): the difference is
smaller than it looks. Anyone who needs *"substantive grounds"* in order to reject must be able to
assess the substance — otherwise all that is left of the authority is an empty form. The editorial
entity may, however, **organise** that assessment instead of performing it itself: it can interpose
a specialist desk, a specialist function or an external opinion. What it cannot do without is the
assessment as such — the fact-check remains the minimum on both routes (section 2).

In practice that means: the competence test is not disposed of by choosing the editorial-control
route. It merely moves from the reviewing person to the question of **whom** the editorial entity
puts on this subject matter.

### 3.4 If the test comes out negative: label

Put without any value judgement, because there is nothing here to devalue: if one of the four
answers comes out "no", the editorial exception is **not available for this text** — then it is
labelled. That is neither a failure nor an evasion, but the standard route of the law.
Article 50(4), second subparagraph, AI Act orders disclosure (*"shall disclose"*) and sets the
exception beside it (*"This obligation shall not apply where …"*) — the label is the normal case,
not the penalty for a botched review.

Recording the test at the same time documents **why** a label was applied. In an inspection that
carries further than an unsubstantiated claim of expertise.

> ⛔ **The warning of this chapter:** A documented review record from someone who cannot assess the
> substance is **worse than none**. Without a record, what stands in the room is an omission; with a
> record, what stands in the room is a **documented false statement** — with a date, a name and a
> review note, supplied by your own side.
>
> **Not a new legal statement, but an inference** from para 134 (subject-matter expertise as part of
> human review) and para 135, which expressly rules out *"cursory editorial approval without
> substantive engagement"* (→ section 4): anyone who cannot assess the substance delivers exactly
> the cursory approval that the provision does not let suffice — and logs it on top. The guidelines
> say nothing specific on this.

This is the inversion of the double rule from section 4: **documentation without substance** is a
neatly logged breach. The gate does not make up for the difference — it records who reviewed with
what subject-matter expertise, but it does not check whether that person actually **had** it
(→ [gate/](../../gate/README.md)). That is precisely why the field `reviewer.fachkompetenz` in the
review record requires the expertise to be **substantiated in one sentence**, not merely asserted.

Short version and place in the test sequence: [chapter 01](01-decision-tree.md), stage 5.

## 4. The exclusion list — what does **not** qualify (para 135)

The most important passage of the whole chapter, verbatim:

> "**Superficial, solely formal or procedural checks** (e.g. spell-checking or grammatical
> correction), the **mere existence of an editorial policy**, **automated review processes**
> or **cursory editorial approval without substantive engagement** by the human reviewer or
> the editorial entity, cannot fulfil the conditions for human review or editorial control
> for the purposes of this exception."

| Not sufficient (para 135) | Typical case in practice |
|---|---|
| Superficial, solely formal or procedural checks | A copy-editing pass, a spell-check, a grammar tool, "reads smoothly" |
| The mere existence of an editorial policy | An AI policy in the wiki that nobody follows day to day |
| Automated review processes | "AI checks AI", LLM-as-a-judge, fact-check bot, linter in the build |
| Cursory approval without substantive engagement | 20 articles waved through in four minutes; the approve click as a formality |

From this follows the double rule of this chapter: **substance without documentation** has to be
asserted rather than proven if it comes to a dispute — **documentation without substance** is a
neatly logged breach. Both are needed.

## 5. The order rule (para 136)

Full wording:

> "Where AI systems are used to modify, supplement, or reformulate content following
> editorial sign-off, the resulting content must be treated as AI-generated or manipulated
> for the purposes of Article 50(4) AI Act. Any substantive AI intervention occurring after
> the human review or editorial control process has taken place will therefore cause the
> exception to become void."

⏱️ **In one sentence:** Any substantive AI intervention **after** editorial sign-off makes the
exception void — the review must be the **last step that changes the content** before publication.

### What this means for pipelines and CI/CD

This rule is why the exception regularly collapses quietly in modern publishing setups: the human
signs off — and then the automation touches the text once more. Typical steps **after** sign-off
that cost the exception:

- **AI optimisation of the headline, teaser or meta description** in the build or by a
  CMS/SEO plugin.
- **AI translation** into further languages after the source text has been signed off. The
  guidelines resolve this expressly in the example box after para 138: what benefits from the
  exception is the *"AI-supported translation of a human-written article whereby **the translation**
  has undergone human review"* — every language version needs **its own** review; the sign-off on
  the original does not carry it.
- **Automatically generated summaries, TL;DR blocks, FAQ sections, social snippets** that come into
  being at deploy time and are published along with the text.
- **"Content refresh" jobs and agents** that later update, shorten or rephrase published articles.
- **AI features of the CMS** that shorten text to a character limit on save or rewrite it for the
  preview.

⚠️ Where exactly "substantive" begins is not settled conclusively by the guidelines: a pure format
conversion, minification or an encoding fix does not change the content — a rephrasing or a cut
does. Grey zone — document the classification with a short reason
(see [gate/](../../gate/README.md)).

Two consequences for the craft:

1. **Rebuild the order.** Pull all AI steps ahead of the sign-off. Whatever still runs afterwards
   is either purely technical (minify, image compression, deploy) — or the text falls back under
   the labelling duty.
2. **Make the order provable.** That is exactly what the hash binding of the review record
   delivers: every later change — by AI too, even a single space — invalidates the record and
   turns CI red (→ [gate/](../../gate/README.md)).

**This playbook's reading** (the guidelines say nothing express on the point): the exception is not
permanently lost after a substantive AI intervention. Anyone who reviews again with the relevant
expertise and signs off again has a sign-off as the last step that changes the content. The gate
models this as a **re-review** — new hash, new date, new review note.

## 6. Condition 2 — editorial responsibility (para 138)

> "This entails that said person must hold the **ultimate legal responsibility** over the
> publication of the content, including the human review or editorial control (e.g. an
> individual, editorial board, or the publishing company). To ensure public accountability
> and trust, and in line with existing media professional standards, **the identity and
> contact details** of the legal person, the natural person or the function with editorial
> responsibility **should be made publicly available on an easily findable location** (if
> not yet otherwise available)."

The places named: online, the terms of use or other legal notices; offline, the colophon or imprint
of a publication. The bearer can be a person, a body or the company — the point is that it is named
and findable.

**In Germany this is largely done before you start:**

- **§ 5 DDG** (Digitale-Dienste-Gesetz, the German Digital Services Act) requires, for digital
  services provided on a commercial basis, the name, the address and details allowing rapid
  electronic contact — to be kept "easily recognisable, directly accessible … permanently
  available" ([gesetze-im-internet.de/ddg](https://www.gesetze-im-internet.de/ddg/__5.html)).
  That functionally covers the expectation from para 138.
- **§ 18(2) MStV** (Medienstaatsvertrag, the German interstate media treaty) additionally requires,
  for **journalistic and editorial offerings**, that "a responsible person be named, stating their
  name and address"; where there is more than one responsible person, it must be made clear who is
  responsible for which part of the service
  ([gesetze-bayern.de, MStV § 18](https://www.gesetze-bayern.de/Content/Document/MStV-18)).

What the Impressum (the legally required site notice) does **not** automatically supply is the
**attribution**: that this very entity carries the editorial responsibility for the published
content. One sentence is enough, for example: "Editorially responsible for the content of this
service: *name, role, contact*." For signatories to the Code of Practice, publishing the contact
details is binding: *"Where not already publicly available, Signatories commit to publish the
contact details of the function, the natural persons or the legal persons with editorial
responsibility to ensure accountability"* (CoP Sec. 2, Commitment 4).

⚠️ **EMFA demarcation:** Para 140 construes the term in the light of Article 2(8) EMFA
(Regulation (EU) 2024/1083), but stresses that it *"remains a distinct concept that may also apply
in broader contexts and to other deployers"*. Where the line runs between an EMFA media service and
any other publisher is unsettled — and in Germany it is at the same time a question of supervision
(§ 2(8) KI-MIG, the German AI Act implementing act, → [chapter 08](08-legal-basis.md)). Grey zone —
document the classification with a short reason (see [gate/](../../gate/README.md)).

Who the bearer is when an agency, a freelancer and a client are involved is settled in
[chapter 05](05-agencies-and-contracts.md): employees and third parties who operate the system
**on instruction and under the responsibility and control** of the legal person are not deployers
in their own right — the responsibility stays with the legal person under whose authority the
system is used (para 14). Where, by contrast, the agency itself decides whether and how AI is
used, **it** is the deployer and the merely commissioning client is not (example paragraph after
para 14). Sources: guidelines para 14 (primary source); likewise the Commission's FAQ on
Article 50 [zu verifizieren: exact FAQ section on the deployer role].

## 7. The official examples (box after para 138)

| Exception applies | Exception does **not** apply |
|---|---|
| A newspaper article or AI summary under the editorial control of the editor-in-chief, responsibility with the publisher | A website on which AI articles about EU politics appear *"without any deliberate human review or editorial control"* |
| A science blog with internal peer review, responsibility with the research centre | AI articles that are *"reviewed and edited by another AI system"* and where a human only performs *"a mere superficial, grammatical check"* |
| AI-generated safety warnings, signed off by a public official, under the responsibility of the civil protection authority | An AI-generated self-published book that *"has not undergone any review by a competent natural or legal person (nor by the platform)"* |
| An AI sustainability report on the website of a listed company, reviewed by specialist functions (e.g. compliance) | |
| AI-supported translation of a human-written article, **where the translation** has been reviewed | |

The pattern is the same in all five positive cases: **a person with fitting expertise examines
the substance** — and **a named entity carries the responsibility for it**. It is not a media
privilege: an authority, a research institution and a company stand in the list on equal footing.
Further individual cases: [case catalog](02-case-catalog.md).

## 8. Documentation: what is required — and what is not

The Code of Practice on Transparency of AI-Generated Content (10 June 2026) describes in Sec. 2,
**Commitment 4** the minimum for all deployers **without** existing editorial procedures — that is,
for agencies, freelancers and marketing teams. What is required is a **policy**, not a log per
article:

- **lit. a** — *"The identification of the natural or legal person with editorial
  responsibility (name, role and contact details)"*.
- **lit. b** — *"An overview of the concrete organisational measures as well as human
  resources, allocated to ensure adequate human review or editorial control is performed and
  editorial responsibility is assumed before publication"*.

And expressly clarified:

> "**This does not entail having to document individual instances** of human review or
> editorial control over individual text publications."

Just as expressly, more is permitted:

> "Signatories **may record additional information** on the nature of the review or the type
> of involvement of the AI system in the published text."

Two points of classification: the code binds only **signatories** directly — for everyone else it
is the yardstick against which the expected gap analysis is measured (para 148, → section 9). And
per-case documentation is **voluntary**, but it is the difference between *asserting* and *proving*
the moment anyone asks.

## 9. Not adhering to the code? Then "other adequate means" (paras 146–149)

| Route | What the supervisory authority expects |
|---|---|
| **Signatory** | *"a straightforward, predictable, and legally certain way of demonstrating compliance"* (para 147); what is examined is primarily the implementation of the code |
| **Non-signatory** | Evidence via *"other adequate means"*; what is expected is a **gap analysis**: *"they should carry out a gap analysis that compares the measures they have implemented with the measures set out by a code of practice that is assessed as adequate"* (para 148) |

For non-signatories, para 148 also announces **more requests for information** and names deployers
expressly: *"Deployers may also be subject to such requests with regard to their labelling
practices under Article 50(4) AI Act."* The Commission's FAQ states the same consequence: anyone
who does not adhere *"will have to demonstrate compliance through alternative adequate means"* and
must expect more requests for information. Conversely, measures in line with the code can
**reduce fines** (para 149). How to adhere and the sanctions framework:
[chapter 08](08-legal-basis.md).

In practice that means: anyone who does not adhere carries the burden of demonstration themselves —
and needs something that can actually be **put in front of** an authority.

## 10. Honest conclusion

**Why a Git/CI review step works as evidence.** It supplies exactly the three points on which the
exception hangs, in a form that can be produced: the **named person with the relevant expertise**
(para 134), the **time anchor of the sign-off** and the proof that **nothing was changed
afterwards** (para 136), plus the **bearer of editorial responsibility** (para 138). That is more
than the minimum requires — per-case documentation is precisely *not* mandated
(CoP Sec. 2, Commitment 4) — and that is exactly why it holds: additional records are expressly
permitted, and for non-signatories an auditable process is the most obvious form of the
"other adequate means" (para 148).

**And the counter-test.** A mere approve click without a substantive examination does **not**
satisfy the exception — para 135 names *"cursory editorial approval without substantive
engagement"* expressly. A green CI gate over an examination that never took place is a
well-documented breach. **Honest limit:** the gate enforces the **process** and makes it auditable;
it does not enforce the substantive quality of the examination. It is a permissible documentation
form that goes beyond the legal minimum (CoP Sec. 2, Commitment 4), **not a safe harbour**.

**Where the exception does not apply**, the labelling duty simply applies: para 132 lays it down
expressly for text — what has to be disclosed is *"that such text has been artificially generated
or manipulated"*, and in a way that is *"clear and perceivable by natural persons (e.g. visible or
audible measures) without them needing to rely on any specific technical tools or performing
dedicated actions"*. Form, wording and placement in [chapter 04](04-labelling-form.md). Two standing
key points go with that:

- 📎 The machine-readable provider marking (Art. 50(2)) **never** replaces your own perceivable
  label — deployers *"cannot rely on the machine-readable marking"* (para 117 for deepfakes; the
  same standard applies to text via para 132: *"clear and perceivable … without … any specific
  technical tools or performing dedicated actions"*; → [chapter 07](07-provider-marking.md)).
- 🚧 A label is no free pass: misleading advertising under the UWG (German Act against Unfair
  Competition), copyright and personality rights remain (→ [chapter 08](08-legal-basis.md)).

Widespread misconceptions about this chapter — in particular "review also exempts images" and
"an AI policy is enough" — are in the [myths FAQ](06-myths-faq.md). The operational implementation
is in [gate/](../../gate/README.md).
