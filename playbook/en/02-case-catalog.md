# Case catalog: when yes, when no

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

## How to read this

- **Columns.** "Case" describes the situation, "Verdict" the outcome (✅ clear · 🏷️ label required · ⚠️ grey zone), "Why" the decisive reason in one sentence, "Anchor" the source. ⚠️ always means: **grey zone — document the classification with a brief rationale (see [gate/](../../gate/README.md)).**
- **Two tests, not one.** Text asks "who checked it?" — image asks "does it look real?". The editorial exception exists **for text only** (Article 50(4), second subparagraph); for image, audio and video the deepfake test alone decides, and the art exception merely relaxes the **form** of disclosure (paras 119–123).
- **Anchor convention.** "para" = paragraph number of the Commission's guidelines C(2026) 5054 final; "box after para 116/124/131/138" = the official example catalogs there; "Code of Practice" = Code of Practice on Transparency of AI-Generated Content (10 June 2026). Verbatim quotes are given in their official English wording; all sources collected in [chapter 08](08-legal-basis.md). `[zu verifizieren: …]` marks deliberately open points — no official source covers the case there; nothing is invented.
- **What a label does not do.** It is no free pass: misleading advertising under the UWG (German Act against Unfair Competition), copyright and personality rights remain untouched (paras 124, 127–129). And the machine-readable provider marking under Art. 50(2) never replaces your own perceivable label — *"deployers cannot rely on the machine-readable marking"* (para 117; [chapter 07](07-provider-marking.md)).
- **Limits of this catalog.** Every row classifies the **typical** case; it promises no outcome: context, foreseeable audience and presentation can tip any case. To check systematically: [decision tree](01-decision-tree.md) · form of the label: [chapter 04](04-labelling-form.md) · common misconceptions: [chapter 06](06-myths-faq.md).

---

## 1. Images in advertising and e-commerce

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| Real product (e.g. a car) in front of an AI-generated background | ✅ clear | The background does not change how the product is perceived — *"as long as the ad is not likely to mislead the audience about the product's actual representation and its characteristics and use"*. | box after para 116 |
| Exposure, colour correction, denoising, cosmetic retouching; existing products cut out, arranged, scaled; background extended | ✅ clear | Para 116 counts precisely these edits *"applied in product advertisements or packaging"* among the minor ones, with only minimal effect on the perception of authenticity. | para 116 |
| AI product image shows the product differently, more attractively or of higher quality than in reality — including an AI food photo of a dish that is not served that way | 🏷️ label | It deceives *"as to the actual product appearance, characteristics or use (e.g. … more appealing or with improved quality than in real life)"*; plus misleading advertising under the UWG. | box after para 116 |
| Advertising portrait: background replaced for purely aesthetic reasons | ⚠️ grey zone → clear as a rule | *"adjustments or replacements of backgrounds for clearly aesthetic purposes"* are minor — it tips as soon as the place itself is part of the advertising message ("shot on our own premises"). Document the rationale (gate/). | para 116 |
| Property photo: bin or parked car removed | ⚠️ grey zone → clear as a rule | Pure background detail, in line with *"editing background details (e.g. removing passerby)"*. Document the rationale (gate/). | para 116 |
| Property photo: crack, damp patch or power pylon at the property retouched away | 🏷️ label | The edit affects the advertised property itself and deceives about its condition — the same logic as with a manipulated product image; plus the UWG. | para 116; box after para 116 |
| Synthetic model wears a genuinely sold product in an online shop | 🏷️ label | *"realistic AI-generated human avatars or personas"* are persons within the meaning of the definition; the impression of fit and of how the item wears is additionally relevant under the UWG. | para 113 iii |
| AI-generated place that looks realistic: hotel lobby, holiday property, restaurant interior, medical practice rooms | 🏷️ label | *"'Places' is to be understood as realistic locations"* — a room that does not exist in that form but could plausibly exist meets the deepfake definition just as an invented person does; anyone showing it as their own also deceives under the UWG. | para 113 ii, iii |
| Advertising video with an AI depiction of a celebrity, with a synthetic influencer testing the product or as a teleshopping scene | 🏷️ label (standard form) | Deepfake example from the guidelines — and expressly **not** an artistic or fictional work, so the work-appropriate relaxation does not apply; personality and trade mark rights come on top. | box after para 116; box after para 124; paras 128–129 |
| Recognisably unrealistic advertising scene (mice arguing about cheese in human language) | ✅ clear | Does not meet the "existing / plausibly existing" criterion and has no potential to mislead. | box after para 116; para 113 ii |
| The same image edit done by hand, without an AI tool | ✅ clear under the AI Act | Article 50 attaches to the use of an AI system — but generative functions in image-editing software are AI use, and misleading advertising under the UWG applies regardless of the tool (the deepfake criterion is expressly independent of the concept of misleadingness in the Unfair Commercial Practices Directive). | Art. 50(4), first subparagraph; footnote 32 |

## 2. Images in journalism and documentary work

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| Press photo: cropping, tonal values, denoising, compression by AI | ✅ clear | Standard technical processing with no effect on the perception of authenticity. | para 116 |
| Press photo: distracting passer-by in the background removed | ⚠️ grey zone | Para 116 names *"removing passerby"* as minor, but applies the stricter standard to journalistic images — what decides here is whether the scene still documents the same situation. Document the rationale (gate/). | para 116 |
| Journalistic image: background details substantially altered | 🏷️ label | *"substantial AI-powered editing of background details of journalistic images beyond standard technical, editorial practices may negatively affect a person's perception of the content's authenticity and truthfulness"*. | para 116, at the end |
| AI-manipulated image of two real professional athletes in front of a stadium-like building | 🏷️ label | Real, recognisable persons in a scene that never took place that way. | box after para 116 |
| Documentary: persons, objects, places or events not authentically represented | 🏷️ label | Para 114 expressly names *"non-authentic or untruthful representation of persons, objects, places or events in documentaries"* as a substantial intervention. | para 114 |
| Science programme: presenter in front of an AI animation of glacier retreat | ✅ clear | Recognisably illustrative animation of historical states, not a recording of a real event. | box after para 116 |
| Stylised infographic or illustration in a blog post | ✅ clear | Not a photorealistic depiction of a real scene — the fourth deepfake criterion is missing. Note: free of the label is not free of checking; the factual statement the graphic makes still has to be verified. | para 113 iv; para 114 |
| Recognisably impossible image scene, e.g. a sphinx flying over the Eiffel Tower | ✅ clear | Verbatim negative example. Motifs that *"defy the laws of nature or physics"* have *"no potential to mislead"* — the "existing / plausibly existing" criterion is missing. | box after para 116; para 113 ii |
| AI cartoon of a pre-existing image of a historical event | ✅ clear | Verbatim negative example: *"AI-generated cartoon of a pre-existing image depicting a historical event"* — the cartoon form takes the photorealistic claim to authenticity away from the image. It tips as soon as the depiction becomes photorealistic again (then para 114). | box after para 116; para 113 iv |
| Colourisation of black-and-white archive material | ⚠️ grey zone → label if in doubt | Para 116 names only *"colour correction"*; the colourisation of black-and-white material is not officially classified — and the effect on the perception of authenticity speaks for a label. Document the rationale (gate/). | para 116 |
| Satirically altered image of a real politician, recognisably humorous criticism | 🏷️ label (work-appropriate form) | Satire is a deepfake with an attenuated **form**, not with an exemption; where the satirical purpose is missing (celebrities in acts that never happened), the standard form applies. | box after para 124; paras 119, 123 |

## 3. Audio, voice and music

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| Voice cloning of the regular hosts of a news podcast | 🏷️ label (audible) | Verbatim deepfake example from the guidelines. | box after para 116 |
| Own voice cloned with consent (e.g. a foreign-language audiobook edition) | 🏷️ label (audible) | The voice is a *"personal characteristic"* of an existing person; consent settles personality rights and data protection, not the transparency duty towards the audience. | para 113 iii; Art. 50(4), first subparagraph |
| AI voices for fictional characters (audiobook, game, animation) with no deception about the identity of the speakers | ✅ clear | Verbatim negative example: *"when there is no deception as to the identity of the narrators"*. | box after para 116 |
| Entirely invented, human-sounding AI voice in a commercial | ⚠️ grey zone → label if in doubt | Persons who do not really exist also meet the criterion if they *"can plausibly exist"* — a voice recording regularly comes across as authentic. Document the rationale (gate/). | para 113 ii |
| Radio piece: levels normalised, denoised, compressed — the spoken words unchanged | ✅ clear | Verbatim negative example *"without altering the actual words spoken by speakers or their way of speaking"*. | box after para 116 |
| AI instrumental as a music bed under human presentation | ✅ clear | It depicts no existing subject — the resemblance criteria are not met. | para 113 i–iii |
| AI music in the recognisable style of existing artists | 🏷️ label (work-appropriate form) | Classified by the guidelines as artistic/creative: the form is attenuated, the duty remains; copyright and personality rights remain untouched. | box after para 124; para 124 |
| Audio-only, disclosure only in the file description or in metadata | 🏷️ not sufficient | The disclosure has to be perceivable without technical aids and without a separate action — with audio-only, therefore, audible, at the start and after interruptions. | paras 117, 142; Code of Practice Sub-measure 1.2.3 |
| Video with real footage but an AI-generated audio track | 🏷️ label — visible **and** audible | Where (also) the audio track is the deepfake, the Code of Practice governs precisely this case: for audio deepfakes, Sub-measure 1.2.2(e) requires a visual disclosure *"when a screen is available"* in addition to the audible notice; conversely, point (d) allows audible notices only **in addition to** the visual label — no discretion. That matches para 142: anyone who only listens (background playback, screen off, podcast use) does not perceive a purely visual label under normal conditions of use (*"easily overlooked or missed by natural persons under normal exposure or interaction conditions"*). The only thing left open is the prior question of whether the audio track is a deepfake at all — document that classification if in doubt (gate/). Form: [chapter 04, section 4.3](04-labelling-form.md#43-audio). | paras 142, 143; Code of Practice Sub-measure 1.2.2(d), (e) |

## 4. Video

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| AI video of a politician-like person giving a speech | 🏷️ label | Verbatim deepfake example from the guidelines. | box after para 116 |
| Feature film: AI backgrounds, special effects, pre- and post-production; real actors in front of an AI set | ✅ clear | Standard production processes do not make the content falsely appear authentic to the audience. | para 114; box after para 116 |
| Fully AI-generated actors, digital replicas of real or deceased persons, de-aging, simulated performances | 🏷️ label (work-appropriate form in an evidently fictional work) | Para 114 names precisely these interventions as substantial; in a cinema or streaming work a disclosure that does not hamper the enjoyment of the work suffices (e.g. the closing credits). | para 114; box after para 124; para 123 |
| Fictional environments (forests, castles) in a video game | ✅ clear | Verbatim negative example — a recognisably invented game world. | box after para 116 |
| Game graphics with deepfake simulations of real, existing persons | 🏷️ label (work-appropriate form) | Classified as an *"analogous creative/fictional work"*: the relaxation applies to the form only. | box after para 124 |
| Realistic re-enactment of historical acts of violence, distributed on public platforms | 🏷️ label (standard form) | Expressly not an artistic, satirical or fictional work — the attenuated form does not apply. | box after para 124 |
| Upload to a very large platform with the "AI-generated" toggle set | ⚠️ grey zone → carries only there | Where the platform provides a labelling tool that produces a clear and distinguishable disclosure, you may rely on it *"within the context of the VLOP or VLOSE used"* — *"without prejudice to the responsibility of the deployers"*, and for secondary use elsewhere (your own website, a repost, image search) the toggle does not carry. Document the rationale (gate/). | para 126 |
| Label only at the start of the video, the piece redistributed as a clip or screenshot | ⚠️ grey zone | Every person has to be informed at **their** first exposure at the latest; where it is foreseeable that people will not join at the start, a notice there is not enough — repeat it at intervals, at least after interruptions. Document the rationale (gate/). | para 143; Code of Practice Sub-measure 1.2.2(b) |

## 5. Text

Only here does the editorial exception exist (Article 50(4), second subparagraph; criteria and evidence in [chapter 03](03-editorial-exception.md)) — and it holds only if the review was the **last step that changed the content** (para 136).

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| AI summary of a human-written article about a local council decision on a newspaper website | 🏷️ label if the editorial exception does not apply | In-scope example: published, informing, public interest (local politics). | box after para 131 |
| AI-edited lifestyle article on the effect of various diets on an illness | 🏷️ label if the editorial exception does not apply | Health is expressly a matter of public interest — on a lifestyle site too; the typical SEO advice piece sits closer to this row than marketing teams assume. | box after para 131 |
| AI report from a weather service carrying a severe-weather warning on social media | 🏷️ label if the editorial exception does not apply | In-scope example (public safety). | box after para 131 |
| AI-edited corporate report containing investor information on the website of a listed company | 🏷️ label if the editorial exception does not apply | Verbatim in-scope example: *"AI-manipulated corporate reports published on a listed company's website containing investor information"*; economic and financial developments are expressly in the list of matters of public interest. | box after para 131; para 131 iii |
| AI-generated fantasy novel | ✅ clear | Out-of-scope example: it does not inform on matters of public interest. | box after para 131 |
| Advertising or product copy with no health, safety or sustainability information | ✅ clear | Out-of-scope example — the catalog's parenthetical is at the same time the built-in counter-exception. | box after para 131 |
| Product copy with a health, consumer-safety or sustainability claim | 🏷️ label if the editorial exception does not apply | These are precisely the claims the out-of-scope catalog carves out, and the topics are at the same time in the list of matters of public interest. | box after para 131; para 131 iii |
| News summary from a chatbot, seen only by the person asking — the same answer later as a website post | ✅ clear → 🏷️ once published | As long as only the person asking sees it, the *"published"* element is missing; publishing it to an indeterminate, larger readership meets it. | box after para 131; para 131 i |
| AI text written by a consultant for individual client advice | ✅ clear | Out-of-scope example: no audience, no publication. | box after para 131 |
| Very short AI texts: teasers, meta descriptions, individual phrases | ⚠️ grey zone | *"short texts which do not materially communicate knowledge, opinions or facts, cannot be deemed to inform the public"* — if the teaser carries the statement itself, it tips; for short texts the Code of Practice lets a contextual notice in the interface suffice. Document the rationale (gate/). | para 131 ii; Code of Practice Sub-measure 1.2.2(f) |
| AI article on Union policy published without any review | 🏷️ label | Verbatim negative example on the editorial exception. | box after para 138 |
| AI text checked by a second AI, with the human doing only a spelling and grammar check | 🏷️ label | *"automated review processes or cursory editorial approval without substantive engagement"* do not satisfy the exception. | para 135; box after para 138 |
| Self-published AI non-fiction book on a commercial platform, with nobody reviewing the substance | 🏷️ label | Verbatim negative example: an *"AI-generated, self-published book on climate change, made available on an e-commerce platform that has not undergone any review by a competent natural or legal person (nor by the platform)"* — the platform does not replace the review. The prior scope question remains: yes for the climate book (environmental protection), no for the fantasy novel. | box after para 138; box after para 131 |
| AI draft given a subject-matter review (fact-checking at a minimum), the responsible person named and publicly findable | ✅ no label, keep the evidence | Both cumulative conditions met: substantive review by a competent person **and** editorial responsibility. | paras 133, 134, 138 |
| Another AI rewrite or AI "SEO polish" after editorial sign-off | 🏷️ label | *"Any substantive AI intervention occurring after the human review or editorial control process has taken place will therefore cause the exception to become void."* That order is exactly what the [editorial gate](../../gate/README.md) secures technically. | para 136 |
| AI-assisted translation of a human-written article, the translation reviewed by a human | ✅ no label | Verbatim positive example of the exception. | box after para 138 |
| AI sustainability report on the website of a listed company, reviewed by the relevant function (e.g. compliance) | ✅ no label | Verbatim positive example: *"human review by professionals in relevant functions"*. | box after para 138 |
| AI-generated safety warning approved by a public official before distribution, under the responsibility of the competent authority | ✅ no label, keep the evidence | Verbatim positive example: *"AI-generated public safety warnings approved by a public official before being distributed to citizens, under the responsibility of the relevant public agency for civil protection"* — the same message without that approval falls under the severe-weather-warning row. | box after para 138 |
| Website chatbot greets visitors with no notice about the AI | 🏷️ a duty of its own | Art. 50(1) requires the notice at the first interaction at the latest — in the chat, not in the legal notice or the terms and conditions. | Art. 50(1); paras 142, 143 |

## 6. Internal content and audience

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| Internal presentation with AI illustrations | ✅ clear | Illustrations are not deepfakes, and for text the publication element is missing. | para 113 iv; para 131 i |
| Intranet text, internal circular email, closed small group in a messenger app | ✅ clear | *"organisation-internal texts or communications"* and private correspondence do not count as published. | para 131 i |
| Internal deepfake video: a synthetic CEO avatar congratulating the workforce | 🏷️ label — internally too | The deepfake provision does not require publication (para 112), and the catalog names precisely this case; those exposed are the employees. | para 112; box after para 116 |
| Deepfake only in a subscriber area or a company newsletter | 🏷️ label (audience = that circle) | Para 115 only allows you not to assume a broad public — towards the actual audience the duty remains. | para 115 |
| Customer newsletter with an AI illustration and editorially reviewed text | ⚠️ grey zone → clear as a rule | The illustration is not a deepfake; whether a large, open distribution list already counts as "published" is decided by para 131 i — with open sign-up and a web archive, rather yes. Document the rationale (gate/). | para 115; para 131 i |
| Children, older people or people with low AI literacy are foreseeably in the audience | 🏷️ stricter standard | If the content appears authentic to **that part** of the reasonably foreseeable audience, that is enough for it to be classified as a deepfake. | para 115 |
| Image on a public website, label only in the caption | ⚠️ grey zone | Displayed directly alongside, the caption is perceivable; image search, reposting and cropping, however, separate it from the image — placed inside the image, the label survives secondary use. Document the rationale (gate/). | paras 117, 142; Code of Practice Sub-measure 1.2.2(a) |

## 7. Legacy content and timing

| Case | Verdict | Why | Anchor |
|---|---|---|---|
| Campaign from before 2 August 2026 continues to run unchanged | ✅ clear | Only two groups are exempted verbatim: *"AI-generated or manipulated outputs falling within the scope of Article 50(2) AI Act and deep fakes within scope of Article 50(4), first subparagraph, AI Act, which have been generated or manipulated before 2 August 2026 do not need to be marked or labelled retroactively."* For text the exemption applies only if it was also already **published** before the cut-off date — otherwise the row "text generated before the cut-off date, published only after it" applies. No blanket licence for legacy content as such. | para 154 |
| Image or video generated before the cut-off date is distributed again afterwards | ⚠️ grey zone | For deepfakes para 154 attaches to the date of generation, for texts to the date of publication; whether a fresh distribution triggers a duty of its own is not expressly regulated — the Commission encourages voluntary labelling. Document the rationale (gate/). | para 154 |
| Legacy material is edited with AI again after the cut-off date | 🏷️ label | The edit is a new AI manipulation after the date of application — the legacy protection does not cover it. | paras 153, 154 |
| Text generated before the cut-off date, published only after it | 🏷️ label if the editorial exception does not apply | *"if texts that have been generated or manipulated before 2 August 2026 are published on or after that date, they need to be labelled."* | para 154 |
| Existing archive of unlabelled AI content | ✅ no duty, voluntary labelling recommended | Retroactive labelling is welcome, but without *"disproportionate efforts … such as auditing of pre-existing content databases or modifying already printed product packaging"*. | para 154 |
| A legacy model in use still carries no machine-readable marking until 2 December 2026 | ✅ for the provider — no effect on your own duty | The transitional period concerns only the provider marking under Art. 50(2) for systems placed on the market before 2 August 2026; your own perceivable label is owed independently of that from 2 August 2026. | para 153; para 117 |

---

## The three most common missteps

**1. "Retouching objects out always requires a label."**
Wrong in that sweeping form. Para 116 counts *"editing background details (e.g. removing
passerby)"*, lighting adjustments, colour correction and denoising — and, in product advertising and
on packaging, expressly *"adjustments or replacements of backgrounds for clearly aesthetic
purposes"* — among the minor edits. **The real dividing line does not run between "removed" and
"not removed", but between background aesthetics and the product or subject.**
As long as only the surroundings are tidied up, it stays minor; as soon as the edit affects the
advertised object itself — the defect on the house, the portion on the plate, the product *"more
appealing or with improved quality than in real life"* — it is a deepfake **and** a UWG case.
Journalistic images sit at the strict end from the outset (*"beyond standard technical,
editorial practices"*). Because the line depends on context and not on the tool, a documented
case-by-case rationale is worth more here than any rule of thumb. → para 116; box after
para 116.

**2. "Internally we don't need to label anything."**
That holds for **text** only. The text duty presupposes publication — intranet, internal
communication and closed small groups are not *"published"* (para 131 i). The deepfake provision
does not know that element at all: it requires only an AI system, professional use and a deepfake
(para 112), and the official catalog expressly names the *"AI-generated video featuring a realistic
synthetic avatar of a company CEO congratulating employees"*. An avatar video sent to the workforce
therefore has to be labelled internally too — in practice a line in the intro is enough. The only
relief left is the audience standard: anyone addressing only a subscriber area or a company
newsletter does not have to assume a broad public (para 115). → paras 112, 115, 131(i);
box after para 116.

**3. "The voice actor consented, so the voice clone is in the clear."**
Two different legal questions that are regularly confused. Consent clears personality and data
protection questions out of the way — it is the precondition for the voice being **allowed** to be
cloned at all (paras 127, 129). The transparency duty, by contrast, is owed not to the voice actor
but to the audience, which is meant to recognise that it is hearing a synthetic recording.
"Persons" expressly covers *"personal characteristics or expressions, such as image, voice,
behaviour, performances etc."* (para 113 iii). The voice clone of a really existing person
therefore still requires a label. Para 117 requires a disclosure that is perceivable without
technical aids — *"e.g. with visible or audible labels"* — but does not prescribe the channel for
every case; the Code of Practice does: with **audio-only** the audible route is the only one left
(para 142; Code of Practice Sub-measure 1.2.3 — the case *"where visual disclosure is not
possible"*), and for video with a cloned audio track Sub-measure 1.2.2(e) requires, as soon as a
screen is available, the visible label in addition to the audible notice, while point (d) allows
audible notices only as a supplement to the visual label — both channels, then, no discretion ([chapter 04,
section 4.3](04-labelling-form.md#43-audio)). The only ones in the clear are AI voices for fictional
characters, *"when there is no deception as to the identity of the narrators"*. → paras 113 iii,
117, 127, 129, 142; box after para 116; Code of Practice Sub-measures 1.2.2(d), (e) and 1.2.3.

---

Next: the order of checks in the [decision tree](01-decision-tree.md) · criteria and evidence for the exception in [chapter 03](03-editorial-exception.md) · wording and placement of the labels in [chapter 04](04-labelling-form.md) · responsibility in commissioning chains in [chapter 05](05-agencies-and-contracts.md) · sources in [chapter 08](08-legal-basis.md).
