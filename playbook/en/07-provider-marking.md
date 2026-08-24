# Provider markings: the machine-readable second layer

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

Two separate transparency layers sit over AI content: the **provider** of the generator marks its
outputs in a **machine-readable** way (Article 50(2) of Regulation (EU) 2024/1689), the **deployer**
labels its publication **perceivably** (Article 50(4)). Different addressees, different deadlines,
different recipients — and one layer never discharges the other.

**Mnemonic: the machine-readable provider marking NEVER replaces your own perceivable label.**
This chapter explains what the provider layer achieves, what a marker found in content proves
(little) and why the evidence that holds up does not sit in the file but in the documented
process.

---

## 1. Two layers, two addressees

| | **Layer 1 — marking** | **Layer 2 — labelling** |
|---|---|---|
| Provision | Article 50(2) in conjunction with (5) | Article 50(4) in conjunction with (5) |
| Addressee | **provider** of the generative AI system | **deployer** who publishes |
| Owed | machine-readable marking **and** detectability (detection) | label perceivable by humans |
| Directed at | software, audit and platform systems — the **result** of the detection, however, also at the exposed person (paras 55, 75, 77) | the exposed person |
| Applies | since 2 August 2026; for existing systems only from 2 December 2026 (Article 111(4)) | since 2 August 2026, **with no grace period whatsoever** |
| Covered in | this chapter | [chapter 04](04-labelling-form.md) |

Wording of Article 50(2), first and second sentence (original English version,
Regulation (EU) 2024/1689):

> "Providers of AI systems, including general-purpose AI systems, generating synthetic audio,
> image, video or text content, shall ensure that the outputs of the AI system are marked in a
> machine-readable format and detectable as artificially generated or manipulated. Providers
> shall ensure their technical solutions are effective, interoperable, robust and reliable as far
> as this is technically feasible, taking into account the specificities and limitations of
> various types of content, the costs of implementation and the generally acknowledged state of
> the art, as may be reflected in relevant technical standards."

Four points on which the guidelines add detail that matters in practice for deployers:

- **Marking alone is not enough for the provider.** The duty has two elements — marking and
  detection; meeting only one of them *"will not suffice to comply with that provision"*
  (paras 69–70). So anyone looking for a watermark is looking for something the provider
  additionally has to make **findable** — not something that would be visible in the content.
- **Machine-readable means: not for humans.** Para 71: *"A machine-readable format means that
  marks are structured in a way that allows software applications to easily identify, recognise
  and extract them without human intervention."* Perceivable marks are permitted to the provider,
  but only *"as a complementary measure"* — expressly in order to make the deployer's own
  labelling under Article 50(4) easier (para 71). To make it easier, not to replace it.
- **No prescribed technique.** Para 73 names the list of techniques from recital 133 —
  *"watermarks, metadata identifications, cryptographic methods for proving provenance and
  authenticity of content, logging methods, fingerprints or other techniques"* — and makes clear
  that providers do **not** have to maintain a complete provenance chain. The Code of Practice
  (Code of Practice on Transparency of AI-Generated Content, 10 June 2026; hereafter "CoP")
  requires two layers of its signatories in Section 1: digitally signed, time-stamped metadata
  (Sub-measure 1.1.1) **and** an imperceptible watermark (Sub-measure 1.1.2). For free-form text
  one layer suffices, because *"free-form text cannot transport metadata"*; from 200 tokens
  onwards, text has to be watermarked.
- **The detection side faces outwards.** Para 75: the provider *"is obliged to ensure
  that the means of detection are available to the persons potentially exposed to the content"*;
  under Article 50(5) such solutions are to deliver *"human-readable results"*. For
  interoperability, para 76 requires *"publicly-available industry standard detection solutions
  that allow any third party to implement detection"* — a proprietary, third-party or shared
  detection solution is admissible only on a transitional basis, for as long as such standards are
  missing. Para 77: what has to be made available is the **result** of the detection, not the
  content itself, *"in a clear and distinguishable manner at the latest at the time of the first
  interaction or exposure"* — which, according to the same para, means the moment at which a person
  wants to check the provenance and accesses the detection solution. ⚠️ That is the **provider's**
  duty; it does not replace your own perceivable label under Article 50(4) (para 117, section 1.1
  below). But it does show: layer 1 owes the exposed person more than a marker in the content.

### 1.1 Why layer 1 does not discharge layer 2

Guidelines para 117 — the key passage of this chapter:

> "Therefore, deployers cannot rely on the machine-readable marking embedded in the content by
> the provider under Article 50(2) AI Act, since those markings are not immediately clear and
> distinguishable for the natural persons exposed to the deep fake content."

To the same effect, the Commission's FAQ "Transparency obligations under Article 50 of the AI Act"
(digital-strategy.ec.europa.eu, page as of 24 July 2026): *"deployers cannot simply rely on the
machine-readable marking embedded in the content by the provider under Article 50(2) of the AI
Act to fulfil their disclosure obligation."* What your own label then has to look like — clear,
distinguishable, at the latest at first exposure, accessible — is set out in
[chapter 04](04-labelling-form.md).

### 1.2 The transitional period concerns only layer 1 — and only legacy systems

Guidelines para 153:

> "Regulation amending the AI Act (the AI Omnibus), which has been recently adopted by the Union
> legislature, envisages a targeted grandfathering rule only with regard to the marking and
> detection obligations under Article 50(2) AI Act for generative AI systems placed on the market
> or put into service before 2 August 2026. It gives providers of those existing systems a
> transitional period to bring their systems in conformity by 2 December 2026."

This is implemented through the new **Article 111(4) AI Act** (inserted by Regulation (EU)
2026/1744). Two things follow from it — and the second point is the one most often misquoted in
practice:

1. The **2 December 2026** deadline applies only to the **provider** marking under Article 50(2)
   and only to systems placed on the market **before** 2 August 2026. For systems placed on the
   market later, it applies from the moment they are placed on the market.
2. The **deployer** duties (deepfake label and text labelling — Article 50(4); emotion
   recognition/biometric categorisation — Article 50(3)) and the **provider** duty under
   Article 50(1) (chatbot notice; paras 28, 29, 32) have **no** grace period. The statement
   "Article 50 does not apply until December 2026" is wrong in that blanket form. Timeline and
   sources: [chapter 08](08-legal-basis.md).

### 1.3 When you become a provider yourself

The layer-1 duty does not normally fall on the publisher. But it can pass to them — guidelines
para 11: anyone who modifies an existing generative AI system (e.g. with their own training data)
and then puts it into service **under their own name or trade mark** *"becomes a provider of the
new system without prejudice to the responsibility of the provider of the initial AI system for the
latter"*. Merely using a system, integrating it via an API or steering it with prompts, by
contrast, does not make you a provider.

---

## 2. Where the major providers stand — 22 August 2026

A snapshot with an as-of stamp, not a maintained list: provider practice changes faster than a
repository does. Every row carries its evidence status. **The state of play changes nothing about
your own duty** — that duty hangs on the content and the audience, not on the tool
([chapter 01](01-decision-tree.md)).

| Provider / system | Text | Image, audio, video, files | Evidence status (22 August 2026) |
|---|---|---|---|
| **Anthropic / Claude** | invisible watermark, woven into the text at model level; models launching in the EU from 2 August 2026 onwards, from launch — older models in the transitional phase | signed C2PA provenance metadata for supported file types (e.g. .svg, .png, .jpg) | **evidenced** — provider documentation "How Claude marks AI-generated content" (<https://support.claude.com/en/articles/16266773>); CoP signatory Section 1 |
| **Google / Gemini** | SynthID: the watermark is set via the probability scores of the tokens (Gemini app and web) | SynthID for image, audio and video as well | **evidenced** — provider documentation SynthID (<https://deepmind.google/science/synthid/>); CoP signatory Section 1 |
| **OpenAI / ChatGPT** | as at the as-of date, **no** text marking documented | C2PA and SynthID provenance signals for supported images, SynthID for supported audio — reported, not verified against the provider documentation; no evidence for video | **likely** — CoP signatory Section 1 is evidenced (official list); the provider documentation was not retrievable as at the as-of date. [zu verifizieren: current marking status for text and media directly against the OpenAI documentation] |
| **xAI / Grok** | not documented | marking for image/video is reported, not evidenced from provider documentation | **likely (weak)** — xAI is **not named as a signatory** in the Commission's news item of 31 July 2026 (updated 20 August 2026); the item names only a selection of the signatories, however, so signatory status is **not verified**. [zu verifizieren: signatory status against the Commission's full register of signatories; marking status against a primary source from xAI] |

**Signatory status is an indication, not proof.** The Commission maintains the official list of
signatories: Section 1 (providers) 82, Section 2 (deployers) 152, around 190 organisations in
total — the same organisation can sign both sections, which is why the total is lower than the sum
(<https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content>,
page as of 20 August 2026). Named for Section 1 are, among others, Aleph Alpha, Anthropic,
Black Forest Labs, Cohere, Google, Meta, Microsoft, Mistral, Open AI and Synthesia — a
selection, not an exhaustive list: **"not named" does not entail "not signed".** Anyone who has not
signed is therefore **not** exempt from Article 50(2) — they have to demonstrate compliance by
*"other adequate means"* and should expect more requests for information (para 148).

On Anthropic in detail, because this case shows the limits of marker logic particularly clearly
(all quotes from the provider documentation named above):

- The scope is broad: *"Marks will apply to output from supported Claude models across
  Claude Platform (API), Claude, Claude Code, Claude Cowork, and Claude Tag, and wherever Claude
  is offered, worldwide."*
- What is marked is not only what is generated but **also what is processed**: *"Claude uses two
  complementary techniques to mark content generated and processed by Claude"* — expressly
  including proofreading, translating, summarising or converting (section 3).
- Its probative value is limited — the marker says only that the content **may** have been
  processed: *"If a supported mark is found, it indicates that the content may have been
  processed by Claude"*;
  conversely *"Lack of a detected mark doesn't mean the content wasn't AI-generated or processed."*
- The detection side is not yet public: *"We'll share details on detection mechanisms in
  forthcoming technical documentation."*

---

## 3. What a marker found in content proves — and what it does not

| Claim | Does it hold? | Why |
|---|---|---|
| "Marker found ⇒ the content came from an AI" | **No** | Providers also mark mere processing. Anthropic expressly: *"People often use Claude to proofread, translate, summarize, or convert files. The output can carry a Claude mark even if the underlying ideas, text, or data originated from another source"* |
| "Marker found ⇒ the AI share was large" | **No** | The marker is binary and carries no measure. It says nothing about the extent, role and sequence of the AI involvement |
| "Marker found ⇒ there is an infringement" | **No** | The labelling duty follows from modality, audience and content (Article 50(4)), not from the presence of a marking — the test: [chapter 01](01-decision-tree.md) |
| "No marker found ⇒ no AI involved" | **No** | A missing marking proves nothing: legacy models, unsupported channels and file types, lost metadata, providers without marking |
| "I can check this myself" | **Mostly no — the state of provider practice, not the legal position** | In law, rather the opposite applies: the means of detection have to be available to the exposed persons (para 75), and para 76 requires *"publicly-available industry standard detection solutions that allow any third party to implement detection"*. In practice this is partly missing as at the as-of date — Anthropic has so far only announced the detection documentation (*"forthcoming technical documentation"*, section 2). [zu verifizieren: whether and how the code restricts access to the detection solution for free-form text — Sub-measure 1.1.2] |

### 3.1 Providers may mark more than the law requires

Article 50(2) contains a **de-minimis exception**: the marking duty does not apply in so far as the
system performs *"an assistive function for standard editing"* or does not substantially alter the
input data or their semantics; on top of that comes the law-enforcement exception (paras 56, 89–93).
Para 90:

> "Standard editing should be understood as the process of preparing existing content for
> publication or distribution (e.g., small edits to improve readability and grammar, quality and
> format) and does not involve generating new content. … Editing goes beyond standard editing if
> the content is changed in a material way (substantive modifications, structural changes etc.)
> that affect its meaning, style or intent."

The boxes of examples after para 92 draw the line for text concretely: **excluded** are *"Grammar
correction and spellchecking, linguistic and minor stylistic polishing that do not change the
substance, meaning, style or messaging of text, AI-generated translations of text"*;
**subject to marking**, by contrast, are *"AI-generated summaries of text; paraphrasing or rewriting
text that changes style, structure and meaning beyond mere grammatical and minor stylistic
correction"*.

Practical consequence: a provider who marks every output across the board — the translation too,
the spellcheck too — marks more broadly than the provision requires. **From a marker it therefore
does not even follow that there was any marking duty for that operation at all.**

⚠️ **Do not mix this up with the deepfake test.** These boxes of examples belong to
**Article 50(2)** (provider marking). They are not a catalog of what counts under
**Article 50(4)** as a deepfake that has to be labelled — a separate yardstick applies there
(resemblance and false impression of authenticity, para 113 f., de-minimis threshold para 116).
Anyone who mixes the two exception regimes regularly arrives at the wrong result for images —
grey zone: document the classification with a brief justification (see
[gate/](../../gate/README.md)); individual cases in the [case catalog](02-case-catalog.md).

### 3.2 The defensive side

Marker logic is weak in the reverse direction too: a marker found in content is **no** evidence
that a text did not come from a human — it may stem from a proofreading run. And the result of an
AI detector with no connection to a marking is even less of a proof. Anyone who has to rebut such a
claim gets further with process documentation than with forensics (section 5).

---

## 4. Do not remove markings

Article 50 of the AI Act contains **no** removal prohibition expressly addressed to deployers. The
code closes the gap contractually — Section 1, Measure 1.2 ("Non-removal of markings") obliges the
provider signatories to include in their terms of use:

> "a prohibition of the intentional removal of or tampering with metadata markings by deployers
> or any other third party"

The same measure requires existing metadata markings on input content to be preserved where
possible, and prohibits offering or advertising circumvention tools:
*"Signatories will neither place or make available on the market, nor promote or advertise the use
of tools whose purpose is to circumvent the machine-readable markings"*. In addition, platforms
and search engines are encouraged to preserve markings (para 98).

For your own practice, this means:

- **Deliberate stripping** of markings typically breaches the provider's terms of use — a
  contractual layer, not one backed by fines, but a real one.
- **Unintentional loss** is the normal case: screenshots, re-exports, format conversions,
  CMS image scaling and many social uploads strip metadata in passing. ⚠️ Whether a pipeline
  that routinely discards metadata falls under the contractual prohibition is unsettled —
  grey zone: document the classification with a brief justification (see [gate/](../../gate/README.md)).
- **Your own label has to survive the chain.** Para 12 requires deployers in production and
  distribution chains to take *"proportionate measures to ensure that the labelling of the
  content they have implemented pursuant to Article 50(4) AI Act is displayed in a clear and
  distinguishable manner for the targeted and foreseeable audience at the point of first
  exposure"* — expressly including through contractual terms with distribution partners.
  Implementation: [chapter 04](04-labelling-form.md) (placement, crop resistance) and
  [chapter 05](05-agencies-and-contracts.md) (clauses).

---

## 5. Consequence for your own setup: process instead of forensics

Watermark forensics does not work as proof of compliance — in **both** directions: a marker found in
content shows at most that a particular system touched the content (for Claude expressly only
*"may have been processed"*), a missing one shows nothing at all, the detection tools are in part
still unpublished as at the as-of date — although the guidelines require them to be available to
the exposed persons (para 75 f.) — and things get marked that would not be subject to any marking
duty at all (section 3). Anyone basing their labelling decisions on a marker hunt is basing them on
a signal that does not answer their own question.

The other direction holds up: **document which step of your own pipeline touched AI and who checked
what.** That is exactly what the review record in [gate/](../../gate/README.md) delivers:

- `ki_beteiligung` records **where** in the workflow AI had an effect — the information that
  cannot be read out of any marker.
- `scope.einstufung` and `scope.begruendung` record the labelling decision together with its
  reason — including and especially in grey zones.
- `content_sha256` binds the review to the exact state of the content: any change after
  sign-off — including one made by AI — invalidates the record and turns CI red. That enforces
  the order rule (para 136) technically: the review has to be the **last** step that changes the
  content ([chapter 03](03-editorial-exception.md)).

**Honest limit:** the gate enforces the **process** and makes it auditable; it does not enforce the
substantive **quality** of the review. It is a permissible form of documentation that goes beyond
the legal minimum — in Section 2, Commitment 4 the code expressly does **not** require
case-by-case documentation (*"This does not entail having to document
individual instances of human review or editorial control over individual text publications"*),
but leaves it open (*"Signatories may record additional information on the nature of the review
or the type of involvement of the AI system in the published text"*). That is not a safe harbour.

---

## Quick recap

1. Two layers: the provider marks machine-readably (Article 50(2)) **and** keeps the detection
   result available for the exposed person (paras 75, 77); the deployer labels perceivably
   (Article 50(4)). The first layer never replaces the second — para 117.
2. The 2 December 2026 deadline concerns **only** the provider marking and **only** existing
   systems (Article 111(4), para 153); deployer duties have applied since 2 August 2026 with no
   grace period.
3. The state of provider practice is dated and volatile (section 2) — it does not change your own
   duty.
4. A marker proves neither AI authorship nor extent nor an infringement; its absence proves
   nothing. Providers in part mark more broadly than the provision requires (de-minimis exception,
   paras 90–92).
5. The de-minimis list in Article 50(2) is no yardstick for the deepfake test in Article 50(4) —
   and the editorial exception exists only for text anyway ([chapter 03](03-editorial-exception.md)).
6. Do not remove markings: a contractual prohibition via the provider's terms (CoP Measure 1.2);
   your own label has to survive the exploitation chain (para 12).
7. The documented process carries the proof, not forensics → [gate/](../../gate/README.md).
   And a label is no free pass: misleading practices under the UWG (German Act against Unfair
   Competition), copyright and personality rights remain untouched
   ([myths FAQ](06-myths-faq.md)).
