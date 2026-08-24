# Implementing the label correctly: form, wording, placement

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

This chapter assumes that a labelling duty **exists**. Whether it does is settled by the
[decision tree](01-decision-tree.md) and the [case catalog](02-case-catalog.md).

> 🧭 **Mnemonic:** text asks "who checked it?" — image asks "does it look real?"
> The editorial exception is **text only** ([chapter 03](03-editorial-exception.md)); for images,
> audio and video there is none. There only the deepfake test decides — the art exception merely
> relaxes the **form** of disclosure (section 6).

**Quick reference**

| Modality | Where the label belongs | Source | Detail |
|---|---|---|---|
| Image | into the image itself, with no overlay elements on top (e.g. top right) — crop check before upload | Code of Practice Sub-measure 1.2.2 lit. a | [4.1](#41-image) |
| Video | at the beginning **and** repeated, at minimum after interruptions | Code of Practice Sub-measure 1.2.2 lit. b; para 143 | [4.2](#42-video) |
| Audio | **audibly** before it starts, reminders at intervals — plus visually wherever a screen is available | Code of Practice Measure 1.1, Sub-measure 1.2.2 lit. e, Sub-measure 1.2.3 | [4.3](#43-audio) |
| Text | above or at the top, near the headline | Code of Practice Sub-measure 1.2.2 lit. f | [4.4](#44-text) |
| Chatbot | into the chat, at the start of the session | Art. 50(1); para 143 | [3](#3-label-text-library-german-and-english) |

---

## 1. Ground rules: Article 50(5) and guidelines paras 141–144

The yardstick for **every** label under Article 50(1) to (4) is set out in Article 50(5) of
Regulation (EU) 2024/1689:

> "The information referred to in paragraphs 1 to 4 shall be provided to the natural persons
> concerned in a clear and distinguishable manner at the latest at the time of the first
> interaction or exposure. The information shall conform to the applicable accessibility
> requirements."

The guidelines put that in concrete terms in paras 141–144:

| Requirement | What that means in practice | Source |
|---|---|---|
| **Clear** | conspicuous, easily understandable, accessible — expressly including for children and people with disabilities where they are foreseeably part of the audience | para 142 |
| **Distinguishable** | easily recognisable as information in its own right, separate from the rest of the content and from the environment in which it is presented | para 142 |
| **In good time** | at the latest at the **first** interaction or exposure — and **afresh for every further person**, not just for the first one (repost, joining later, scrolling the feed) | paras 141, 143 |
| **Accessible** | complying with the accessibility requirements applicable in the given case (section 7) | paras 141, 144 |

**Expressly NOT sufficient** (para 142):

> "Information will not be considered to be provided in a clear and distinguishable manner where
> it can be easily overlooked or missed by natural persons under normal exposure or interaction
> conditions (e.g. only included as part of a manual or hidden under layers of menu options on an
> online interface, part of terms of use that are often not read by users)."

Applied to the usual evasive placements, that means: **terms and conditions, the privacy policy, the
imprint page, the page footer, a notice that appears only after a click or hover, and an entry in
the metadata alone are not enough.** All of them are easily overlooked under normal conditions of
use or demand a user action of their own. The Commission's FAQ states the same yardstick
functionally: the disclosure has to be perceivable *"without need for any specific technical tools
or performing dedicated actions"* (FAQ "Transparency obligations under Article 50 of the AI Act",
[digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act),
as of 24 July 2026).

> ⚠️ **Do not confuse them — two different pieces of information in two different places:**
> The **imprint** (Impressum) is the right place for the identity and contact details of the person
> who bears the **editorial responsibility** (para 138: *"on an easily findable location"*, online
> for example via the terms and conditions or other legal user information). It is **not** the place
> for the **content label** — that belongs on the content itself (para 142). See
> [chapter 03](03-editorial-exception.md).

> 📎 **Remember: the machine-readable provider marking (Article 50(2)) NEVER replaces your own
> perceivable label.** Guidelines para 117:
> *"Therefore, deployers cannot rely on the machine-readable marking embedded in the content by
> the provider under Article 50(2) AI Act, since those markings are not immediately clear and
> distinguishable for the natural persons exposed to the deep fake content."*
> What watermarks achieve and what they do not: [chapter 07](07-provider-marking.md).

**Where the form rules in this chapter come from.** The Regulation is what binds; the guidelines
interpret it without binding force (para 5). The **Code of Practice on Transparency of AI-Generated
Content** of 10 June 2026 (below: "the code"), assessed as adequate within the meaning of
Article 50(7) by the Commission and the AI Board, contains the only concrete design and placement
specifications — it binds only its signatories directly. Anyone who has not signed is free in how
they implement, but has to demonstrate compliance *"through other adequate means"*; for that the
guidelines expressly expect a gap analysis against the code and announce more requests for
information (paras 147–148). The code is therefore the yardstick against which a non-signatory's own
solution is measured as well. Sources and document links: [chapter 08](08-legal-basis.md).

---

## 2. EU icons: optional, but user-tested

The Commission provides an official icon set — **Basic icon**, **Fully AI-Generated** and
**Partially AI-Modified**, each in four variants (black, white, and both at 50% transparency), as
SVG and PNG, free to use without attribution. Source:
[digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content)
(page as of 10 August 2026). The page itself makes clear:

> "The use of these EU icons is optional, but the labelling requirements under Article 50 AI Act
> are not. The use of these icons does not establish legal compliance by itself. Deployers remain
> responsible for ensuring that any disclosure meets the requirements of Article 50 AI Act."

What that means in practice:

- **When they make sense:** with image and video deepfakes and with labelled text publications,
  where a recognisable, language-neutral symbol helps — especially for content distributed
  internationally. Which variant is meant when is defined by the icons page:
  *"Fully AI-Generated: When the entire deepfake content (image, audio, video) or text is fully
  generated by AI with no human-created elements or human editorial control (apart from
  prompting). Partially AI-Modified: When pre-existing, human-made content was partially modified
  with AI …"*
- **Icon plus text beats icon alone.** The icons are user-tested; according to the icons page:
  *"performance improved across all measures when the basic icon was accompanied by a text label
  (e.g. modified)."*
- **Equivalent labels of your own are permitted.** The code, too, allows in Section 2,
  Commitment 1 *"an equivalent icon or label that complies with the design and placement
  specifications"*. **But:** anyone going their own way carries the interpretation risk that their
  label will not be assessed as equivalent in a dispute. The EU icon is the route the supervisory
  authorities already know.
- **The code's design specification** (Section 2, Measure 1.1 lit. a): the main element is the
  capitalised acronym *"AI"* in English; a national-language variant is provided for only where
  national language requirements stand in the way of English. The layers *"generated"* /
  *"modified"* are supplementary information — in or next to the icon, and where technically
  feasible in a second layer (Measure 1.1 lit. b; Annex 1 shows them as "AI + GENERATED" and
  "AI + MODIFIED").
- **Using the icon is no proof of compliance.** What remains decisive is that the overall
  presentation meets the criteria from section 1. Conversely, according to the icons page: use by
  non-signatories must not be read as adherence to the code.

---

## 3. Label text library: German and English

Article 50 prescribes **no wording**; the only things laid down officially are the (optional) icons
and the design and placement rules of the code. The formulations below are proposals, not
prescriptions.

**Language:** the label has to be easily understood by the audience (para 142) — for a
German-speaking audience that means German, ideally combined with the EU icon. Where children are
foreseeably part of the audience, footnote 40 to para 142 tightens the requirements:
child-friendly, age-appropriate, as simple and as brief as possible, at the point where it becomes
relevant, and in the official language or languages of the Member State in which the service is
offered.

The split into two groups is deliberate — it prevents **both** typical mistakes: labelling nothing
and labelling everything. What belongs in which group is decided by the
[decision tree](01-decision-tree.md); why "AI was involved" alone does not yet trigger a duty is
explained in the [myths FAQ](06-myths-faq.md).

### Group A — MANDATORY cases

| Situation | German | English |
|---|---|---|
| Chatbot / direct AI interaction (Art. 50(1); falls away only where the AI interaction is obvious anyway to a reasonably circumspect person) | „Sie chatten mit einem KI-Assistenten." | "You are chatting with an AI assistant." |
| Fully synthetic video (Art. 50(4), first subparagraph) | „Dieses Video enthält KI-generierte Bild- und Sprachsequenzen." | "This video contains AI-generated visuals and speech." |
| Partly manipulated video | „Einzelne Bild- oder Sprachsequenzen dieses Videos wurden mit künstlicher Intelligenz verändert." | "Parts of this video's visuals or speech have been modified using artificial intelligence." |
| Image deepfake | „KI-generiertes Bild" · „Mit KI verändertes Bild" | "AI-generated image" · "AI-modified image" |
| Audio deepfake (audible, section 4.3) | „Dieser Beitrag enthält eine KI-generierte Stimme." | "This recording contains an AI-generated voice." |
| Text subject to the labelling duty (Art. 50(4), second subparagraph; the editorial exception does not apply) | „Dieser Text wurde mit künstlicher Intelligenz erstellt." · for partial labelling: „Dieser Abschnitt wurde mit künstlicher Intelligenz erstellt." | "This text was generated using artificial intelligence." · "This section was generated using artificial intelligence." |

### Group B — VOLUNTARY transparency

No duty — set deliberately, because transparency is wanted. The typical case: the text does fall
within scope, but the editorial exception applies
([chapter 03](03-editorial-exception.md)).

| Situation | German | English |
|---|---|---|
| Editorially reviewed text, transparency wanted nonetheless | „Mithilfe künstlicher Intelligenz erstellt und redaktionell geprüft." | "Created with the help of artificial intelligence and editorially reviewed." |
| AI illustration with no appearance of authenticity (not a deepfake) | „Illustration: KI-generiert" | "Illustration: AI-generated" |
| AI-assisted translation with human review | „KI-gestützt übersetzt, menschlich geprüft." | "AI-assisted translation, reviewed by a human." |

Two brakes on Group B:

1. **Voluntary labels must not dilute the mandatory ones.** Labelling everything the same way makes
   the mandatory label indistinguishable — and "distinguishable" is precisely the requirement from
   para 142.
2. **A label is no free pass.** Misleading practices under the UWG (German Act against Unfair
   Competition) as well as copyright and personality rights remain untouched; para 124:
   *"Reliance on the attenuated transparency obligation cannot be a justification for failing to
   respect the fundamental rights of individuals or rightsholders under Union law on intellectual
   property or Union data protection law"* — and according to footnote 34 the same applies to
   published texts. See [case catalog](02-case-catalog.md) and [myths FAQ](06-myths-faq.md).

---

## 4. Placement per modality

The placement reference is the code, Section 2, Measure 1.2 (Sub-measures 1.2.1–1.2.3). The
overarching principle — Sub-measure 1.2.1 lit. a:

> "Considering the content format and dissemination context, the icon or equivalent label will be
> placed in an appropriate and perceivable manner that ensures immediate recognition by natural
> persons without requiring user (inter)action or sustained attention."

> ⚠️ **How far this reference reaches — one exception is in the code itself.** The chapeau to
> Sub-measure 1.2.1 puts the principles of Measure 1.2 under a proviso: they apply to all
> modalities and contexts *"with the exception of deep fakes that are part of artistic, creative,
> satirical, fictional or analogous works that are subject to specific disclosure regime specified
> in Commitment 3"*. For **evidently artistic, creative, satirical, fictional or analogous works**
> the yardstick is therefore not Measure 1.2 but Section 2, **Commitment 3** — its places and
> limits in section 6.

### 4.1 Image

| Option | Assessment |
|---|---|
| **Label in the image itself** — Code of Practice Sub-measure 1.2.2 lit. a: *"in an appropriate place where no intervening overlay elements exist (e.g., in the top right corner of an image or video deep fake)"* | **The safe route.** The label survives image search, repost, screenshot and loss of context — in all of those the image is perceived without the page around it. |
| **A caption visible immediately**, with no click and no scrolling, in the same field of view | ⚠️ **Grey zone — record the classification with a short justification (see [gate/](../../gate/README.md)).** Perceivable without a user action — but in Sub-measure 1.2.1 lit. c the code makes the **embedded** label the rule: *"The icon or equivalent label will be directly embedded into the content, unless equivalent alternatives to an embedded icon are available (e.g., a user interface overlay that for natural persons appears to be on the content)"*, and it additionally requires that the disclosure *"takes into account the distribution and dissemination chain of the content"*. A caption is neither embedded nor does it appear on the content — which is exactly why it does not travel along on repost and in image search. Defensible therefore **only with a documented justification and only where secondary use is practically ruled out**. Neither the guidelines nor the FAQ expressly decide the question "in the image or in the caption" — the code, by contrast, does. |
| **One click or hover away**, in the metadata only, in the file name only | **Insufficient** (para 142; FAQ: no *"dedicated actions"* may be expected; on metadata para 117). |

> ℹ️ **Exception for closed internal contexts.** The three rows above apply to content that is
> published, distributed or passed on. Where the deepfake runs exclusively in a closed internal,
> professional setting, the code allows the disclosure to be made in the interface or in the
> physical setting — section 4.5.

**Watch the responsive crops.** Platforms and themes crop images to 1:1, 4:5, 9:16 or a thumbnail.
A label sitting in the top right of the original can drop out of the crop — and then the label is no
longer perceivable at exactly the point where the person would see it. Check before publishing:
[tools/label-crop-check](../../tools/label-crop-check/README.md) simulates the common crops and
reports whether the label stays visible.

### 4.2 Video

Label at the **beginning** and **repeat** the label — Code of Practice Sub-measure 1.2.2
lit. b:

> "Signatories will display the icon or equivalent label at the beginning of the video as well
> as, where possible, at regular intervals throughout the video and, at a minimum, after
> interruptions (e.g., after commercial or advertising breaks)."

The legal reason for that is in para 143: a notice at the beginning alone does not reach anyone who
foreseeably joins in the middle of the content.

> "However, if it is reasonably foreseeable that persons may not perceive content from its
> beginning, then only disclosure at the beginning of content does not adequately inform those
> persons and should be complemented with disclosure at later moments, where possible."

In practice that concerns live streams, clips and excerpts, autoplay in the feed, and anything that
gets re-cut.

### 4.3 Audio

**Audible, before the content starts.** Code of Practice Measure 1.1 (for pure audio content): *"a
short audible disclaimer in plain and simple natural language"* at the beginning of the deepfake;
Sub-measure 1.2.3 adds reminders *"at regular intervals (e.g., disclaimers, tones or earcons)"* and
at minimum after interruptions. A notice in the description or the show notes alone does not label
the audio itself perceivably (para 142).

**Video with an AI audio track:** where the audio track is (also) the deepfake, the code requires
**both** channels — Sub-measure 1.2.2 lit. e: *"For audio deep fakes, when a screen is available, an
additional visual disclosure based on the icon or equivalent label will be made available …
in addition to the audible disclaimer."* Conversely, lit. d holds: *"For visual deep fakes, audible
disclosures may only be implemented as an additional disclosure method and will always be
accompanied by visual disclosures."* For a video with an AI voice that means: an audible notice
before it starts **and** a visible label — not a matter of discretion, but the case the code
expressly governs. It matches para 142: whoever only listens (background playback, screen off,
podcast use) does not perceive a purely visual label under normal conditions of use — it would be
*"easily overlooked or missed"*. The concession in Sub-measure 1.2.3 (*"where visual disclosure is
not possible"*) concerns the other case: pure audio with no screen.

### 4.4 Text

Code of Practice Sub-measure 1.2.2 lit. f:

> "For published text, Signatories will place the icon or equivalent label, for example above or
> at the top of the text, near the headline of the text, or in the colophon at the beginning of
> the text, as long as placement is clear, consistent, and distinguishable for the end-user."

So **above or at the top of the text, near the headline** — not at the end, not in the page footer.
The "colophon at the **beginning** of the text" is the colophon at the head of a publication, not
the imprint page of a website (see the box in section 1).

The same source permits two concessions: only the part that is AI-generated or AI-manipulated may
be labelled (*"Signatories may label only that part of the text which is AI-generated or
manipulated"*); and for short texts whose readability a label would destroy, a contextual notice in
the interface is enough — the labelling itself remains mandatory (*"Signatories must still carry out
the labelling but may ensure disclosure through a contextual notice in the user interface"*).

Whether the text is subject to the labelling duty at all, or whether the editorial exception
applies, is settled by [chapter 03](03-editorial-exception.md). The **order rule** applies there
(para 136): any substantive AI intervention **after** the editorial sign-off makes the exception
void — the review has to be the last step that changes the substance. That is enforced technically
in [gate/](../../gate/README.md).

### 4.5 Closed internal setting

Where the deepfake runs exclusively in a closed internal, professional context — the code gives
training or informing employees as its example — Sub-measure 1.2.2 lit. c permits a different place:
the disclosure may be made *"in the user interface, physical setting or any other appropriate medium
readily available to the natural persons exposed to the deep fake"*, provided it informs the exposed
persons **before** the exposure.

Three provisos:

- **What is relaxed is the place, not the duty.** The internal deepfake video remains subject to the
  labelling duty — the guidelines' example catalogue expressly names the AI avatar of a managing
  director addressing the workforce (box after para 116; see
  [decision tree](01-decision-tree.md)).
- **Article 50(5) applies unchanged:** clear, distinguishable, at the latest at first exposure
  (paras 142, 143). A notice in the intro, on the invitation or on the projection screen before it
  starts meets that — a line in an intranet policy that nobody opens does not.
- **The closed circle has to stay closed.** As soon as the content leaves it — forwarding,
  recording, clip, upload — the standard placement from 4.1 to 4.4 applies again.

---

## 5. Platform switches: what the AI toggles do

The guidelines treat the labelling tools of very large platforms and search engines (VLOPs/VLOSEs
within the meaning of the DSA) in a differentiated way — para 126:

> "Where providers of VLOPs or VLOSEs make labelling tools available to such deployers enabling
> them to label their deep fake content in compliance with Article 50(4) AI Act (i.e. a clear and
> distinguishable disclosure of the AI-origin), those deployers can rely on such tools to fulfil
> their transparency obligation under that provision within the context of the VLOP or VLOSE
> used. Providing such a functionality is without prejudice to the responsibility of the
> deployers under the AI Act to fulfil their labelling obligations under Article 50(4) AI Act."

Three consequences:

1. **The switch CAN be enough — on the platform.** The condition is that the label rendered by the
   platform actually appears clear and distinguishable. That is a **visual check** per platform and
   format: after setting the switch, open the post as an ordinary user (feed, story, search,
   embedded playback) and check whether and where the label appears. Document the result with a
   screenshot and a date (see [gate/](../../gate/README.md)).
   *[zu verifizieren: whether and how individual platforms render their AI switches visibly — there
   is no official finding on this; so check it yourself per channel and format and date the
   result.]*
2. **The switch NEVER carries for secondary use.** *"Within the context of the VLOP or VLOSE
   used"* — on your own website, in image search, on a repost outside the platform the platform
   label is gone. For content that foreseeably travels on, the in-image or in-video label remains
   the safe route (section 4.1).
3. **The responsibility stays with the deployer** (*"without prejudice to the responsibility of the
   deployers"*). A ticked box with no perceivable result does not fulfil the duty.

For context: Article 35(1) DSA obliges VLOPs and VLOSEs to take effective risk-mitigation measures;
lit. k **names** prominent markings as one **possible** such measure (*"among the possible
risk-mitigation measures that providers of VLOPs and VLOSEs may adopt"*) — and it does so
**tool-neutrally**, that is, for forgeries made entirely without AI as well, and with a different
personal scope than Article 50(4) (para 126). No labelling duty of the deployer's own follows from
it. Independently of that, platforms have **their own** labelling rules (advertising policies,
upload disclosures), which stand alongside the law as contractual duties. For commissioned work:
[chapter 05](05-agencies-and-contracts.md).

---

## 6. Art, satire, fiction: relaxed form, same duty

For deepfakes that are part of an *"evidently artistic, creative, satirical, fictional or
analogous"* work, Article 50(4), first subparagraph relaxes only the **form** — para 123:

> "Deep fakes that form part of evidently artistic, creative, satirical or fictional works or
> programmes are not excluded from the transparency obligation of Article 50(4), first
> subparagraph, AI Act. Deployers still need to disclose the AI-origin of the content or its
> manipulation, but they can do so in an appropriate manner that does not hamper the display or
> enjoyment of the work."

Three limits that are regularly overlooked in practice:

- **Which form is "appropriate" is a matter of case-by-case weighing** (para 123: *"a case-by-case
  assessment"*, by the nature of the work, the audience and the context). ⚠️ **Grey zone — record
  the classification with a short justification (see [gate/](../../gate/README.md)).** Concrete
  places are not named by the guidelines, but they are by the code: for deepfakes in artistic,
  creative, satirical, fictional or analogous works it is not Measure 1.2 that applies (see
  section 4) but the separate disclosure regime of Section 2, **Commitment 3**. It names three
  categories of place:
  1. **Accompanying notes, description, beginning or end credits** of the work — in the wording
     *"in the accompanying notes or description provided to users, at the beginning/ end credits
     etc."* (Commitment 3 lit. b).
  2. **Contextual disclosure at the surface** for digital and interactive works: a label outside
     but adjacent to the frame, a UI overlay, up to *"a non-obtrusive icon or label that by
     clicking or hovering over provides more information"* — the label itself stays visible; only
     the additional information sits behind the click or hover.
  3. **Before the work** for non-digital works: at the point of entry or sale, on the exhibition
     flyer, the ticket or the packaging.

  > ✅ **On end credits:** in an evidently artistic work they are not a place to dodge to but a
  > route the code names expressly (*"end credits"*, Commitment 3 lit. b). Para 143 builds this
  > specificity of works into the Article 50(5) test itself: what matters is the moment at which a
  > person is reasonably exposed and perceives the disclosure, *"taking into account the
  > specificities of disclosure in case of evidently creative, artistic and other works (see
  > Section 6.1.3.)"*. The line is therefore drawn not by the place but by the execution: clear,
  > distinguishable and displayed long enough (Commitment 3 lit. b/c) — and *"In any case,
  > deployers need to comply with Article 50(5) AI Act"* (para 123). Where the character of the
  > work is **not** evident, the standard case from section 4 stands: at the beginning and
  > repeated.
- **"Evidently" is to be construed narrowly** (para 122): the character has to be obvious to the
  audience; where it is *"potentially unclear or ambiguous"*, the relaxation does not apply. On
  mixed character *"the informative character should always prevail"* — then the standard label
  applies. Advertising qualifies only *"in certain, specific situations"*; the realistic synthetic
  influencer testing a real product is expressly **not** art in the guidelines' example catalogue.
- **Third-party rights remain untouched** (para 124, see section 3).

Classifications with source anchors: [case catalog](02-case-catalog.md).

---

## 7. Accessibility in practice

The second sentence of Article 50(5) requires conformity with the applicable accessibility
requirements. Para 144 gives Directives (EU) 2016/2102 and (EU) 2019/882 (European Accessibility
Act) as examples and makes clear: *"Article 50 AI Act does not impose distinct or additional
accessibility requirements."* So the existing requirements apply — but they apply to the label as
well. Whether your own product or service falls within their scope is for you to check (para 144).

- **Alt text and ARIA:** a label rendered into the image is invisible to screen readers. Include the
  label in the alt text as well (e.g. "AI-generated image: …") or mark up the label element
  accessibly, instead of setting it as a pure graphic with no text alternative.
- **Contrast:** sufficient contrast against the image background; do not use the semi-transparent
  icon variants on busy imagery. An unreadable label is not a label.
- **Display duration:** leave video overlays up long enough to be read at a normal pace — a
  one-frame label is *"easily overlooked or missed"* (para 142).
- **Serve both channels:** where the audience foreseeably does not see (audio use) or does not hear
  (subtitle use, muted in the feed), provide the disclosure in both channels — an audible disclaimer
  and a visible label, or a subtitle or transcript notice. For deepfakes that is not merely good
  practice: the code requires the additional visual disclosure alongside the audible disclaimer as
  soon as a screen is available, and for a visual deepfake it allows the audible notice only **in
  addition** to the visible label (Sub-measure 1.2.2 lit. d and e, see section 4.3).
- **Plain language:** for the audible disclaimer the code requires *"plain and simple natural
  language"* (Measure 1.1) — a usable yardstick for any label text, all the more so where children
  are part of the foreseeable audience (para 142 with footnote 40, see section 3).

---

## 8. Pre-publication checklist

1. **Mandatory or voluntary?** Group A or B settled — and the decision comes from the
   [decision tree](01-decision-tree.md), not from gut feeling.
2. **Perceivable without a user action?** No click, no hover, no menu, no terms and conditions, no
   footer, no metadata alone (para 142) — special cases with a placement rule of their own: closed
   internal setting (section 4.5) and evidently artistic works (section 6).
3. **In good time for every person?** At the latest at first exposure — for video and audio also for
   whoever joins later (para 143).
4. **Appropriate to the modality?** Image into the image (crop check run), video at the beginning
   plus repetition, audio audible (plus visible wherever a screen is available), text at the top
   near the headline.
5. **Accessible?** Alt text, contrast, display duration, second channel (section 7).
6. **Platform switch visually checked?** Screenshot and date filed — and for secondary use the
   content itself is labelled in addition (section 5).
7. **Order preserved?** After the editorial sign-off no AI step has changed the content any more
   (para 136) — otherwise the exception falls away and the content gets labelled.
8. **Documented?** The classification, the labels chosen and the justification for every grey zone
   belong in the review record (`scope.einstufung`, `scope.labels_erforderlich`,
   `scope.begruendung`, see [gate/](../../gate/README.md)). The gate enforces the **process** and
   makes it auditable; it does not enforce the substantive quality of the review. It is a
   documentation form that goes beyond the legal minimum and is expressly permitted (Code of
   Practice, Section 2, Commitment 4) — **not a safe harbour**.

Legal basis and official documents at a glance: [chapter 08](08-legal-basis.md).
