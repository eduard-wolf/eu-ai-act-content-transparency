# label-crop-check — does the AI label survive the crop?

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

A zero-dependency CLI (Node ≥ 18) that checks **geometrically** whether an AI label placed inside an
image survives the common platform crops. No image processing, no uploads, no installation — the
tool computes with dimensions, not with pixels.

## The problem in practice

Article 50(5) AI Act requires the disclosure to be made

> "in a clear and distinguishable manner at the latest at the time of the first interaction
> or exposure."

For images, the Code of Practice recommends the label **inside the image**, Sub-measure 1.2.2 lit. a:

> "in an appropriate place where no intervening overlay elements exist (e.g., in the top right
> corner of an image or video deep fake)."

That is exactly the corner responsive crops cut away first: feed 1:1, portrait 4:5, story/reel 9:16,
header 16:9, thumbnail. A label that is visible on the desktop and missing from the mobile crop is
**not perceivable where the person first sees the content** — and perceivable is what the deployer
owes (guidelines paras 141–143). Whoever merely disseminates or transmits — hosting services, online
platforms, broadcasters — is **not** a deployer as long as they hold no authority over the use of the
AI (para 16); the platform therefore does not step in here. The machine-readable provider marking
under Article 50(2) does not save it: deployers *"cannot rely on the machine-readable marking"*
(para 117).

This tool makes the pre-check **before** the upload reproducible: same input, same result, verifiable
in the ticket, in the PR or in CI.

## Usage

```
node check.mjs --image BxH --label X,Y,BxH [--ratios 1:1,4:5,9:16,16:9] [--focal X,Y] [--json]
node check.mjs --self-test
node check.mjs --help
```

| Argument | Meaning |
|---|---|
| `--image BxH` | dimensions of the original image in pixels, e.g. `1600x1200` |
| `--label X,Y,BxH` | label box in image coordinates, **origin top left** |
| `--ratios LISTE` | target ratios, comma-separated; default `1:1,4:5,9:16,16:9` |
| `--focal X,Y` | focal point; the crop is placed around it and clamped to the image bounds (default: image centre) |
| `--json` | result as JSON instead of a table |
| `--self-test` | run the built-in self-tests |

| Exit code | Meaning |
|---|---|
| `0` | all crops checked show the label in full |
| `1` | at least one crop cuts into the label |
| `2` | input error (unusable dimensions, label outside the image, malformed ratio) |

### Example 1 — label top right, default crops

```
$ node check.mjs --image 1600x1200 --label 1080,40,160x60

label-crop-check — Bild 1600x1200 · Label 1080,40 160x60 · Zuschnitt mittig (Center-Crop)

Ratio  Zuschnitt (BxH @ X,Y)  Status         Labelfläche verloren  Hinweis
1:1    1200x1200 @ 200,0      OK             0 %
4:5    960x1200 @ 320,0       OK             0 %
9:16   675x1200 @ 462.5,0     ABGESCHNITTEN  64.1 %                Label ragt über den Rand des Zuschnitts hinaus
16:9   1600x900 @ 0,150       ABGESCHNITTEN  100 %                 Label liegt vollständig außerhalb des Zuschnitts

Ergebnis: 2 von 4 Zuschnitten schneiden das Label an. Exit 1.
Label näher zur Bildmitte setzen, einen Fokuspunkt vorgeben oder je Zuschnitt eine eigene Fassung ausspielen.
```

In the feed the label holds, in the story it is clipped, in the header it is gone.

### Example 2 — the same image area with a focal point set

```
$ node check.mjs --image 1600x1200 --label 1150,40,120x60 --ratios 1:1,4:5,9:16 --focal 1310,600

label-crop-check — Bild 1600x1200 · Label 1150,40 120x60 · Zuschnitt um Fokuspunkt 1310,600

Ratio  Zuschnitt (BxH @ X,Y)  Status  Labelfläche verloren  Hinweis
1:1    1200x1200 @ 400,0      OK      0 %
4:5    960x1200 @ 640,0       OK      0 %
9:16   675x1200 @ 925,0       OK      0 %

Ergebnis: Das Label überlebt alle 3 geprüften Zuschnitte. Exit 0.
Geometrische Vorprüfung — die Sichtprüfung am realen Post ersetzt sie nicht.
```

The focal point is clamped at the image edge (9:16 starts at x = 925, not at 972.5) — that matches
the behaviour of crops with a focal or anchor point set.

For scripts and CI, `--json` returns the same result in machine-readable form
(`results[].survives`, `results[].label_area_lost_pct`, `all_survive`, `exit_code`).

## Model and assumptions — honestly

The tool is a **pre-check of pure geometry**. It knows neither the image nor the platform.

- **Center-crop assumption.** For every target ratio the largest possible section is formed and
  placed centrally — with `--focal` around the focal point, clamped to the image bounds. Real
  platforms crop differently: they scale, set anchor points of their own, detect subjects
  automatically, overlay UI elements on the image and change their formats. An `OK` here is a
  reasoned expectation, not a commitment from the platform.
- **"Survives" means: fully inside the crop.** The label box has to lie completely within the
  section; touching the edge counts as visible. A partially visible label counts as cut off — stating
  what percentage of the label area is lost.
- **No image processing.** The tool does not read any image file. Dimensions and label box come from
  the layout or export step; state them wrongly and the result is wrong.
- **No statement about legibility.** Contrast, font size, scaling down to thumbnail dimensions, being
  covered by play buttons or subtitles — the tool checks none of that, only position and area.
- **The ratio list is a starting value as of 22 August 2026**, not a maintained platform catalogue.
  Your own target formats belong in the call via `--ratios`, because what is decisive are the
  channels actually published to.
- **The tool does not replace a visual check.** It makes the pre-check reproducible and documentable
  — the check on the real post remains the last step.

### What the tool does not answer

- **Whether a label is required at all.** That is settled by the
  [decision tree](../../playbook/en/01-decision-tree.md) and the
  [case catalog](../../playbook/en/02-case-catalog.md). For images, audio and video there is **no**
  editorial exception — there the deepfake test alone counts; the art exception merely relaxes the
  **form** of the disclosure.
- **What the label has to look like and be called.** Wording, EU icons and placement per modality are
  in [chapter 04, section 4.1](../../playbook/en/04-labelling-form.md).
- **Whether a label is enough.** It is no free pass: misleading practices under the UWG (German Act
  against Unfair Competition), copyright and personality rights remain untouched by it
  ([chapter 06](../../playbook/en/06-myths-faq.md)).

⚠️ If a grey zone remains after the run (for instance: label right at the edge, crop of the target
platform unclear) — record the classification with a short justification (see
[gate/](../../gate/README.md)).

## Self-test

```
$ node check.mjs --self-test

label-crop-check — Selbsttest
  ok     1. Zentriertes Label überlebt alle vier Standard-Zuschnitte
  ok     2. Label oben rechts fällt bei 9:16 weg, 1:1 und 4:5 halten es
  ok     3. Fokuspunkt rettet dasselbe Ecken-Label im 9:16-Zuschnitt
  ok     4. Fokuspunkt am Bildrand wird geklemmt — Zuschnitt bleibt im Bild
  ok     5. Randberührung zählt als sichtbar (Label füllt den Zuschnitt exakt)
  ok     6. Degenerat: Label größer als der Zuschnitt — definierter Befund statt Absturz
  ok     7. Degenerat: Label ragt aus dem Bild — sauberer Fehler mit Exit 2
  ok     8. Degenerat: Labelbox ohne Fläche — sauberer Fehler mit Exit 2
  ok     9. Degenerat: Fokuspunkt außerhalb des Bildes — sauberer Fehler mit Exit 2
  ok    10. Unbrauchbare Eingaben (Ratio 1:0, Formatfehler, Unbekanntes) — jeweils Exit 2

10 von 10 Fällen bestanden.
```

Exit 0 when all cases pass — which lets the tool itself be safeguarded in CI.

## Sources

- **Article 50(5) AI Act** (Regulation (EU) 2024/1689) — perceivability at the latest at the first
  interaction or exposure: [eur-lex.europa.eu](https://eur-lex.europa.eu) (CELEX 02024R1689)
- **Guidelines C(2026) 5054 final** of 20 July 2026, para 16 (whoever merely disseminates or
  transmits — hosting services, online platforms, broadcasters — is not a deployer), para 117 (the
  machine-readable marking does not replace your own label), paras 141–143 (perceivability):
  [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu)
- **Code of Practice on Transparency of AI-Generated Content** (10 June 2026), Section 2,
  Sub-measure 1.2.2 lit. a (placement inside the image):
  [ec.europa.eu/newsroom/dae/redirection/document/129555](https://ec.europa.eu/newsroom/dae/redirection/document/129555)
- **EU icons** for labelling AI-generated content (their use is optional, the labelling duty is
  not): [digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content)
- Norm texts, German competent authorities and the sanctions framework:
  [chapter 08](../../playbook/en/08-legal-basis.md)
