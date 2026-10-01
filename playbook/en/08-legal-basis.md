# Legal basis

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
> **As of: 24 August 2026; Article 4 updated on 1 October 2026.**

This chapter is the legal foundation every other chapter points back to: timeline, the texts of the
norms verbatim, German competent authorities, the realistic risk and what supervisors expect as
evidence. For applying it in an individual case:
[decision tree](01-decision-tree.md) · [case catalog](02-case-catalog.md) ·
[editorial exception](03-editorial-exception.md) · [form of the label](04-labelling-form.md).

## 1. Timeline 2026

| Date | Event |
|---|---|
| **10 June 2026** | **Code of Practice on Transparency of AI-Generated Content** final (38 pp.). Section 1: provider marking (Article 50(2)), Section 2: deployer disclosure (Article 50(4) and (5)). Official document: [ec.europa.eu/newsroom/dae/redirection/document/129555](https://ec.europa.eu/newsroom/dae/redirection/document/129555) |
| **8/9 July 2026** | Commission and AI Board assess the code as **adequate** within the meaning of Article 50(7) AI Act (cf. guidelines footnote 44: Commission Opinion on adequacy) |
| **8 July 2026** | **"Digital Omnibus on AI"** — Regulation (EU) 2026/1744 (OJ 24 July 2026, in force 27 July 2026): [eur-lex.europa.eu/eli/reg/2026/1744/oj](https://eur-lex.europa.eu/eli/reg/2026/1744/oj). **Does not postpone Article 50.** The only change with a bearing on Article 50: a new **Article 111(4) AI Act** grants a transitional period until **2 December 2026** exclusively for the **provider** marking duty (Article 50(2)) in the case of legacy systems (placed on the market before 2 August 2026) (cf. guidelines para 153). Also replaces **Article 4** (AI literacy) — see section 6 |
| **20 July 2026** | **Commission guidelines** on Article 50: **C(2026) 5054 final** (51 pp.) — the central interpretative document. Expressly non-binding, para 5: *"These Guidelines are non-binding. Any authoritative interpretation of the AI Act may ultimately only be given by the Court of Justice of the European Union ('CJEU')."* |
| **29 July 2026** | Germany: **KI-MIG** (the German AI Act implementing act) in force — Article 1 of the Act of 22 July 2026, promulgated in **BGBl. (the German Federal Law Gazette) 2026 I No. 223** (issued 28 July 2026). Full text: [gesetze-im-internet.de/ki-mig](https://www.gesetze-im-internet.de/ki-mig) · [recht.bund.de/bgbl/1/2026/223](https://www.recht.bund.de/bgbl/1/2026/223) |
| **2 August 2026** | **Article 50 AI Act fully applicable** (Article 113 AI Act; guidelines para 153). The **deployer** duties (deepfake label and text labelling — paragraph 4; emotion recognition/biometric categorisation — paragraph 3) and the **provider** duty in paragraph 1 (chatbot notice; paras 28, 29, 32) apply **with no grace period at all**; the 2 December 2026 deadline concerns only the provider marking under paragraph 2 in the case of legacy systems |

**No retroactivity, but mind the cut-off date (guidelines para 154):** content generated before
2 August 2026 does not have to be labelled retroactively. For **text**, however, the **date of
publication** decides: *"if texts that have been generated or manipulated before 2 August 2026 are
published on or after that date, they need to be labelled."*

## 2. The texts of the norms, verbatim

Cited from the consolidated version of Regulation (EU) 2024/1689 on EUR-Lex
([eur-lex.europa.eu](https://eur-lex.europa.eu), CELEX 02024R1689), in the original English
version.

### Article 50(4), first subparagraph — deepfakes (image, audio, video)

> "Deployers of an AI system that generates or manipulates image, audio or video content
> constituting a deep fake, shall disclose that the content has been artificially generated
> or manipulated. This obligation shall not apply where the use is authorised by law to
> detect, prevent, investigate or prosecute criminal offence. Where the content forms part
> of an evidently artistic, creative, satirical, fictional or analogous work or programme,
> the transparency obligations set out in this paragraph are limited to disclosure of the
> existence of such generated or manipulated content in an appropriate manner that does not
> hamper the display or enjoyment of the work."

### Article 50(4), second subparagraph — text + the editorial exception

> "Deployers of an AI system that generates or manipulates text which is published with the
> purpose of informing the public on matters of public interest shall disclose that the text
> has been artificially generated or manipulated. This obligation shall not apply where the
> use is authorised by law to detect, prevent, investigate or prosecute criminal offences or
> where the AI-generated content has undergone a process of human review or editorial control
> and where a natural or legal person holds editorial responsibility for the publication of
> the content."

**Remember:** the editorial exception applies **to text only** — for image, audio and video there
is none; there the deepfake test alone decides (the art exception in the first subparagraph merely
relaxes the **form** of disclosure). Mnemonic: **text asks "who checked it?" — image asks
"does it look real?"**

Alongside it, the **order rule** (guidelines para 136): any substantive AI intervention **after**
editorial sign-off renders the exception void — the review has to be the last content-changing
step (*"Any substantive AI intervention occurring after the human review or editorial control
process has taken place will therefore cause the exception to become void."*). Conditions and
technical implementation: [chapter 03](03-editorial-exception.md) and
[gate/](../../gate/README.md).

### Article 50(5) — form and timing of the information

> "The information referred to in paragraphs 1 to 4 shall be provided to the natural persons
> concerned in a clear and distinguishable manner at the latest at the time of the first
> interaction or exposure. The information shall conform to the applicable accessibility
> requirements."

On that standard, anything easily overlooked is not enough: a manual, nested menus, unread terms
and conditions (guidelines para 142). **Remember:** the machine-readable provider marking
(Article 50(2)) **never** replaces your own perceivable label — guidelines para 117:
*"deployers cannot rely on the machine-readable marking embedded in the content by the provider
under Article 50(2) AI Act, since those markings are not immediately clear and distinguishable for
the natural persons exposed to the deep fake content."* Para 117
sits in the deepfake section (6.1.2); carrying it over to the other modalities is a generalisation
from the standard in paragraph 5 — clear and distinguishable for the person concerned, without
their having to use technical aids (paras 141–142). Details on the form:
[chapter 04](04-labelling-form.md), on the provider side: [chapter 07](07-provider-marking.md).

### Article 3(60) — definition of "deep fake"

> "AI-generated or manipulated image, audio or video content that resembles existing persons,
> objects, places, entities or events and would falsely appear to a person to be authentic
> or truthful"

The four cumulative criteria and their borderline cases: [chapter 01](01-decision-tree.md)
and [chapter 02](02-case-catalog.md).

### Article 99 — the framework of penalties

Infringements of Article 50 are expressly listed in **Article 99(4)(g) AI Act**:

> "shall be subject to administrative fines of up to 15 000 000 EUR or, if the offender is an
> undertaking, up to 3 % of its total worldwide annual turnover for the preceding financial
> year, whichever is higher"

For **SMEs including start-ups**, the **lower** amount applies in each case under
**Article 99(6) AI Act** — guidelines para 152: *"In the case of small and medium-sized
enterprises (SMEs), including start-ups, each fine shall be up to the above percentages or
amount, whichever is lower."* For Union institutions the ceiling is EUR 750 000 (guidelines
para 152). *Any* affected or other person with indications has a right to complain
(guidelines para 151).

## 3. Germany: competence and enforcement

- The **Bundesnetzagentur (BNetzA, the German federal network agency)** is, under **§ 2 KI-MIG**,
  the central market surveillance, single point of contact and complaints body — including for the
  transparency duties in Article 50. Topic page: [bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/4_Transparenzpflichten](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/4_Transparenzpflichten/start.html),
  complaints portal: [bundesnetzagentur.de/ki](https://www.bundesnetzagentur.de/ki).
- **Exception in § 2(8) KI-MIG — two elements, both must be present:** where
  **media service providers** within the meaning of Article 2(2) of Regulation (EU) 2024/1083
  (European Media Freedom Act, EMFA) use AI systems **for journalistic purposes or for
  advertising purposes**, § 2(8) KI-MIG makes the authorities competent under Land law
  (in practice: the Landesmedienanstalten, the state media authorities) the market surveillance
  authority — otherwise the residual competence of the BNetzA under § 2(1) remains. A media
  service provider using an AI system outside those purposes therefore stays under BNetzA
  supervision. ⚠️ Both elements are fuzzy: where the line runs between an EMFA media service and
  any other publisher (blog, company website, solo creator), and when a use serves journalistic
  purposes or advertising purposes, is unsettled — grey zone: document the classification **on
  both elements** with a short reason (see [gate/](../../gate/README.md)).
- **How fines work:** Article 50 is **not** listed as a national administrative-offence provision
  of its own in **§ 15 KI-MIG**. Enforcement runs through the fining framework of
  **Article 99(4)(g) AI Act** in conjunction with **§ 16(1) KI-MIG** (the OWiG — Gesetz über
  Ordnungswidrigkeiten, the German Act on Regulatory Offences — applies accordingly to
  infringements under Article 99(3) to (5) AI Act, excluding § 17 OWiG and § 30(1)–(3) OWiG).
  Under **§ 17(1) KI-MIG** the fining authority is whichever market surveillance authority is
  competent under § 2 — for Article 50, therefore, regularly the BNetzA; **§ 17(2) KI-MIG** rules
  out fines against authorities and public bodies.

## 4. The realistic risk (as of 22 August 2026)

1. **No documented Article 50 proceedings.** As of 22 August 2026 there is no evidence of warning
   letters (Abmahnungen), complaints or authority proceedings over a missing AI label; no
   "wave of warning letters" is documented. There is as yet no administrative practice of the
   BNetzA on Article 50(4).
2. **The realistic route is the UWG (German Act against Unfair Competition), not the
   multi-million-euro fine.** The Wettbewerbszentrale (the German centre for protection against
   unfair competition) writes in its guide "Kennzeichnung KI-generierter Inhalte" (labelling of
   AI-generated content; v1.1, 4 February 2026, updated 29 July 2026,
   [wettbewerbszentrale.de](https://www.wettbewerbszentrale.de)) that infringements of the AI Act
   could "in the view of the Wettbewerbszentrale also be unfair competition under the UWG, so that
   competitors and associations can assert claims for injunctive relief" (translated from the
   German original). ⚠️ Whether Article 50 is a **market conduct rule within the meaning of
   § 3a UWG** has **not been settled** by the highest courts — a widely held position among law
   firms and associations, not settled law. Independently of that, **§§ 5, 5a UWG** (misleading
   practices / withholding material information) apply in their own right.
3. **A signal from a neighbouring case:** **OLG Hamm (the Higher Regional Court of Hamm),
   judgement of 12 May 2026, I-4 UKl 3/25** (Verbraucherzentrale NRW, the North Rhine-Westphalia
   consumer advice centre, v Aesthetify GmbH;
   [nrwe.justiz.nrw.de](https://www.nrwe.justiz.nrw.de)): full liability of the operator
   (Betreiber) under § 5(1), (2) no. 3 UWG for misleading chatbot statements (invented specialist
   medical titles); the chatbot is not a "third party". Leave to appeal on points of law to the
   BGH (the German Federal Court of Justice) granted (judgement, para 118); the NRWE case-law database lists the judgement as **final** as of 24 August 2026. The judgement concerns the
   attribution of AI statements, not the labelling duty — but it shows that German courts
   attribute AI output fully to the operator.
4. **Remember:** a label is no free pass: misleading practices under the UWG, copyright and
   personality rights remain (cf. guidelines para 124: third-party rights are untouched).
   A misleading AI product image stays misleading — with or without a label.

## 5. What supervisors expect as evidence

The guidelines describe two ways of demonstrating compliance with Article 50(2), (4) and (5)
(paras 146–148):

| Route | Consequence |
|---|---|
| **Code signatory** (Code of Practice, assessed as adequate under Article 50(7)) | *"a straightforward, predictable, and legally certain way of demonstrating compliance"* (para 147); supervision looks primarily at the implementation of the code |
| **Non-signatory** | Evidence by *"other adequate means"*; what is expected is a **gap analysis** against the code (para 148: *"they should carry out a gap analysis that compares the measures they have implemented with the measures set out by a code of practice that is assessed as adequate"*) — and **more requests for information** are to be expected, expressly including requests to deployers about their labelling practice (para 148) |

Commitments implemented in line with the code can also **reduce a fine** (guidelines para 149).
**Signing the code is open to every provider and deployer on an ongoing basis** (it is not a
closed circle): fill in the signatory form, have it signed by a person authorised to represent the
organisation and send it to CNECT-AIOFFICE-CODE-OF-PRACTICE-TRANSPARENCY@ec.europa.eu (the
Commission's page on the code on
[digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu)).

**Important for placing the [gate](../../gate/README.md) in context:** documenting every
individual review is legally **not** required — CoP Section 2, Commitment 4: *"This does
not entail having to document individual instances of human review or editorial control over
individual text publications."* Additional records are, however, expressly permitted:
*"Signatories may record additional information on the nature of the review or the type of
involvement of the AI system in the published text."* That is exactly where the gate comes in: it
enforces the **process** (review as the last content-changing step, para 136) and makes it
demonstrable; it does not enforce the substantive quality of the review. It is a permitted form of
documentation going beyond the legal minimum (CoP Sec. 2, Commitment 4), not a safe harbour.

## 6. Neighbouring regimes: what this playbook demarcates but does not explore in depth

| Regime | Core | Demarcation from Article 50(4) |
|---|---|---|
| **Article 50(1) AI Act** (chatbots) | **Providers** of AI systems intended to interact directly with natural persons must design and develop them in such a way that the persons concerned are informed about the AI, unless this is obvious (guidelines paras 28, 29, 32). The information has to arrive clearly perceivable within the interaction itself, at the latest at the first interaction (paragraph 5; paras 141–143); hidden in the site notice (Impressum) or in terms and conditions is not enough (para 142). **Deployers can become providers themselves:** anyone who modifies an existing system and then puts it into service under their own name or trade mark becomes the provider of the new system (Article 3(3) AI Act; example to para 11) — role check: [chapter 01](01-decision-tree.md), [chapter 07](07-provider-marking.md) section 1.3. | Interaction transparency, not content labelling. Applies since 2 August 2026 with no transitional period. |
| **Article 4 AI Act** (AI literacy) | Since 27 July 2026, as replaced by Article 1(5) of Regulation (EU) 2026/1744: providers and deployers "shall take measures to support the development of AI literacy of their staff and other persons" dealing with AI systems on their behalf; the obligation expressly "does not require providers or deployers to guarantee any specific level of AI literacy". From 2 February 2025 to 26 July 2026 the stricter version applied (ensure, to their best extent, a sufficient level of AI literacy; Article 4 in conjunction with Article 113 AI Act). | A standing organisational duty, independent of the labelling of individual pieces of content. Using this playbook does not replace your own measures under Article 4. |
| **GDPR** | Personal data in AI workflows (prompts, use for training, processing on behalf of a controller with consumer tools) have to be dealt with separately under data protection law. | Data protection ≠ transparency about artificial origin. An Article 50 label says nothing about the lawfulness of the data processing. |
| **DSA Article 35(1)(k)** | Article 35(1) DSA obliges very large platforms/search engines (VLOPs/VLOSEs) to take reasonable risk-mitigation measures; point (k) **names** prominent markings of manipulated content as a **possible** measure for that purpose (para 126: *"lists, among the possible risk-mitigation measures that providers of VLOPs and VLOSEs may adopt"*) — **tool-neutral** (it also covers non-AI fakes) and at platform level. Under guidelines para 126, deployers can use platform labelling tools to satisfy Article 50(4) (*"can rely on such tools … within the context of the VLOP or VLOSE used"*) — responsibility stays with the deployer (*"without prejudice to the responsibility of the deployers"*). | A platform toggle carries only on the platform in question, not for secondary use (your own website, image search, repost) — see [chapter 04](04-labelling-form.md). |
| **UWG, copyright and personality rights** | Prohibitions on misleading practices (§§ 5, 5a UWG), copyright and personality rights (image, voice) apply alongside and independently of the tool (cf. guidelines para 124). | A label is no free pass: misleading practices under the UWG, copyright and personality rights remain. Details on contracts and the liability chain: [chapter 05](05-agencies-and-contracts.md). |

## 7. When this chapter goes out of date

This chapter reflects the position as of **24 August 2026** — three weeks after the start of
application, with no case law and no administrative practice on Article 50. It has to be
re-checked as soon as one of the following happens:

- **A first CJEU or BGH judgement** with a bearing on Article 50 — in particular on the reach of
  the deepfake definition or on the § 3a UWG classification; that includes the outcome of the
  appeal on points of law to the BGH against OLG Hamm I-4 UKl 3/25.
- **First documented warning letters or BNetzA proceedings** over a missing
  AI label (so far: a negative finding).
- **A review of the guidelines** by the Commission — para 155 expressly announces that review
  (*"The Commission will review these Guidelines as soon as necessary…"*).
- **An amendment to the KI-MIG**, in particular a new administrative-offence provision for
  Article 50 in § 15 KI-MIG or a clarification of the supervisory demarcation in § 2(8) KI-MIG.

## Sources (official)

- Regulation (EU) 2024/1689 (AI Act), consolidated: [eur-lex.europa.eu](https://eur-lex.europa.eu) (CELEX 02024R1689) — Article 3(60), Article 4, Article 50, Article 99, Article 111, Article 113
- Regulation (EU) 2026/1744 ("Digital Omnibus on AI"): [eur-lex.europa.eu/eli/reg/2026/1744/oj](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)
- Commission guidelines C(2026) 5054 final of 20 July 2026: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu)
- Code of Practice on Transparency of AI-Generated Content (10 June 2026): [ec.europa.eu/newsroom/dae/redirection/document/129555](https://ec.europa.eu/newsroom/dae/redirection/document/129555)
- Commission FAQ on Article 50 (as of 24 July 2026): [digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- KI-MIG: [gesetze-im-internet.de/ki-mig](https://www.gesetze-im-internet.de/ki-mig) · BGBl. 2026 I No. 223: [recht.bund.de/bgbl/1/2026/223](https://www.recht.bund.de/bgbl/1/2026/223)
- BNetzA, transparency duties and complaints portal: [bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/4_Transparenzpflichten](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/4_Transparenzpflichten/start.html) · [bundesnetzagentur.de/ki](https://www.bundesnetzagentur.de/ki)
- OLG Hamm, judgement of 12 May 2026, I-4 UKl 3/25 (appeal admitted; listed as final by NRWE as of 24 August 2026): [full text on nrwe.justiz.nrw.de](https://nrwe.justiz.nrw.de/olgs/hamm/j2026/4_UKl_3_25_Urteil_20260512.html)
- Wettbewerbszentrale, guide "Kennzeichnung KI-generierter Inhalte", v1.1 (4 February 2026, updated 29 July 2026): [wettbewerbszentrale.de](https://www.wettbewerbszentrale.de)
