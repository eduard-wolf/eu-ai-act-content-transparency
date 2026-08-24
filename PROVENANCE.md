# Provenance

> 🤖 **Made with AI — no editorial review.** That holds for this repository in full, this file
> included. What was verified and what was not is set out below.

**As of: 24 August 2026.** German version: [PROVENANCE.de.md](PROVENANCE.de.md).

This document describes how the contents of this repository came about, what was machine-verified
about them and what was not. It is the evidence behind the label that every content file carries.

## How the content came about

It was produced by **AI agents in several passes** — the chapters, the gate and tool documentation,
the skill, both Node scripts, the entry pages and this file.

1. **Legal research from the official primary sources.** The basis was Regulation (EU) 2024/1689 in
   its consolidated version, the European Commission's guidelines C(2026) 5054 final of 20 July
   2026, the Code of Practice on Transparency of AI-Generated Content of 10 June 2026, the
   Commission's FAQ on Article 50, the German KI-MIG and the publications of the Bundesnetzagentur.
2. **Adversarial cross-check per chapter.** Each chapter was then checked by an independent agent
   against those same sources — tasked with finding deviations, not confirming them. What it found
   was corrected.
3. **Cross-cutting pass and final acceptance.** After that, a pass across all files — source
   anchors, terminology, contradictions between chapters — and a closing acceptance review.

4. **Translation.** The English version under `playbook/en/` is an AI translation of the German
   chapters, produced in the same run. Verbatim EU quotations were not translated but carried over
   unchanged from the original — they appear in English in both versions. A sample was compared
   character by character to confirm they match. The English version has likewise not undergone
   editorial review.

## What is machine-verified

- **73 verbatim English quotes** from the guidelines were checked character by character against the
  official PDF — with no deviation. Quotes from EU documents are therefore kept everywhere in their
  official English wording, including inside German text.
- **Every legal statement carries its source anchor** — article and paragraph of the AI Act,
  paragraph number of the guidelines, section or (sub-)measure of the code, section of the KI-MIG.
  Any reader can check any statement against the original. That is the control this repository
  offers.
- **All relative links were resolved** and point to files that exist.
- **All scripts run in CI together with their self-tests.** On every push and every pull request,
  [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs the gate over `examples/` and both
  self-tests.

What is verified is therefore the machine: character strings, paths, code. What is not verified is
the legal assessment.

## What did not happen

- **No editorial review by a human with relevant subject-matter expertise.** No fact-check, no
  substantive review of the statements by a named competent person.
- **No legal review.** No lawyer and no other legal adviser has seen these texts.

The exception in Article 50(4), second subparagraph of the AI Act is therefore **not claimed**. The
content is labelled instead: every content file carries the notice directly under its heading,
visible before the text starts.

## Why that is the consistent path

At this point, this playbook's decision tree has two branches: the exception or the label
([chapter 01](playbook/en/01-decision-tree.md)). The exception presupposes review by a person with
relevant subject-matter expertise — *"relevant knowledge and professional judgement pertaining to
the subject matter"* (guidelines C(2026) 5054 final, para 134). Where that person is missing,
labelling is the path the law provides.

This repository applies its own tree to itself and takes the second branch. The alternative would
have been a review record without substantive expert review — precisely the class of error the
playbook warns about: *"automated review processes"* and *"cursory editorial approval without
substantive engagement"* expressly do not satisfy the exception under para 135.

## What the gate does demonstrate here

The mechanism is fully demonstrated on [`examples/`](examples/blog-artikel.md) and runs in this
repository's CI: one content file, its [review record](examples/blog-artikel.review.json) beside it,
bound to exactly that version by SHA-256. The example file is demo content and labelled as such; the
municipality, the people, the decisions, the figures and the dates are invented, and the record is a
demo data set.

The gate therefore shows **how** the evidence works. It does not claim that the chapters of this
repository went through it — they did not.

## Currency and ageing

Everything here is **as of 24 August 2026**, three weeks after Article 50 became applicable, with no
case law and no published administrative practice on it. Statements about the state of the law age.
The events that would change this repository's conclusions are listed as a benchmark list in
[chapter 08: legal basis](playbook/en/08-legal-basis.md), section 7.

The Commission's guidelines are legally non-binding; only the Court of Justice of the European Union
can interpret the AI Act with binding effect. This repository is not legal advice and builds no safe
harbour.

## Reporting errors

Anyone who finds a wrong source anchor, a quote that deviates from the original or an untenable
conclusion is invited to open an issue — with the reference that lets it be checked. That is the
correction loop this repository has.
