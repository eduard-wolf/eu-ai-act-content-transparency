# The editorial gate: the review as evidence in Git and CI

> 🤖 **Made with AI — no editorial review.** This text was produced by AI agents
> and machine-verified against the official sources. It has **not undergone
> editorial review by a human with relevant subject-matter expertise**; the
> exception in Article 50(4), second subparagraph of the AI Act is therefore
> **not claimed**. What was verified and what was not:
> [Provenance](../PROVENANCE.md).

> ⚠️ **Not legal advice.** This playbook is a technical and editorial working aid. The European
> Commission's guidelines (C(2026) 5054 final) are legally non-binding; only the Court of Justice of
> the European Union can interpret the AI Act with binding effect. There is no case law on
> Article 50 yet — this playbook builds a defensible position, not a safe harbour.
> **As of: 24 August 2026.**

The editorial gate turns the editorial review into a step that the pipeline **enforces** and the
server **attests**. It consists of three parts: a **review record** per content file, a **hash
binding** between record and content, and a **CI check** that holds the two against each other.

The legal side — both conditions of the exception, what does not qualify and what documentation is
and is not required — is in
[chapter 03: the editorial exception](../playbook/en/03-editorial-exception.md).
This page is about the mechanics alone.

## The rule the gate implements

> ⏱️ **The order rule (guidelines para 136):** Any substantive AI intervention **after** editorial
> sign-off makes the exception void — the review has to be the **last step that changes the
> content**. In the original wording: *"Any substantive AI intervention occurring
> after the human review or editorial control process has taken place will therefore cause
> the exception to become void."*

A process that merely promises this is, in case of doubt, an assertion. A process that checks and
logs it is evidence. That difference is exactly what the gate builds.

## Mechanics

### 1. The review record

Every reviewed content file `<name>.md` has a **sibling file** `<name>.review.json` in the same
directory:

```
examples/
  blog-artikel.md            <- the content
  blog-artikel.review.json   <- the evidence of the review
```

Every mandatory field has a reason. The right-hand column is that reason:

| Field | Content | Why |
|---|---|---|
| `content_path` | Path to the reviewed content file | Binds record and content unambiguously to each other |
| `content_sha256` | SHA-256 of the content file in its **signed-off** state | Order rule, para 136 |
| `reviewed_at` | Date of sign-off (ISO, `YYYY-MM-DD`) | Time anchor of the sign-off |
| `reviewer.name` · `.role` | Who reviewed, in what role | Para 134: review by named natural persons |
| `reviewer.fachkompetenz` | Relevant subject-matter expertise | Para 134: *"relevant knowledge and professional judgement pertaining to the subject matter"* |
| `editorial_responsibility.traeger` | The person, body or company holding ultimate responsibility | Para 138: *"ultimate legal responsibility"*; Code of Practice Sec. 2, Commitment 4(a) |
| `editorial_responsibility.kontakt_oeffentlich` | Where identity and contact details are publicly stated (e.g. the URL of the imprint, the German Impressum) | Para 138: *"publicly available on an easily findable location"* |
| `pruefung.faktencheck` (bool) | Fact-check carried out | Para 134: *"Fact-checking … is a minimum requirement"* |
| `pruefung.quellen_geprueft` (bool) | Sources checked for reliability | Para 134: *"ensuring the trustworthiness of sources"* |
| `pruefung.aenderungen_vorgenommen` | What was actually changed, added or rejected | Para 135: the line against cursory approval |
| `scope.einstufung` | Result of the decision tree (e.g. "text, public interest, exception applies") | [Chapter 01](../playbook/en/01-decision-tree.md) |
| `scope.labels_erforderlich` (list) | Which labels are required — empty where none are | [Chapter 04](../playbook/en/04-labelling-form.md) |
| `scope.begruendung` | Two or three sentences on why it was classified that way — a mandatory field precisely in grey zones | Document grey zones instead of debating them |
| `ki_beteiligung` | Which working step AI touched, and how | Code of Practice Sec. 2, Commitment 4: *"may record additional information on … the type of involvement of the AI system"* |

Machine-readable field reference: [`review-record.schema.json`](review-record.schema.json).
Ready-to-fill template: [`templates/review-record.example.json`](templates/review-record.example.json).

Example — the record shipped in [`../examples/blog-artikel.review.json`](../examples/blog-artikel.review.json), unabridged and therefore checkable (`node gate/scripts/check-review-record.mjs examples`). The hash belongs to exactly `examples/blog-artikel.md` and is recalculated for your own content file:

```json
{
  "content_path": "examples/blog-artikel.md",
  "content_sha256": "67c02162e5e822899e5ec284e771d503fdd26dd5869c1b030ec18ad8d3c8471c",
  "reviewed_at": "2026-08-22",
  "reviewer": {
    "name": "Erika Beispiel (Demo-Datensatz)",
    "role": "Redakteurin Lokales",
    "fachkompetenz": "Kommunalpolitik und Verwaltungshandeln; berichtet seit 2019 über Gemeinderatssitzungen und kommunale Bauvorhaben"
  },
  "editorial_responsibility": {
    "traeger": "Beispielbacher Lokalredaktion (Demo-Datensatz)",
    "kontakt_oeffentlich": "https://example.org/impressum"
  },
  "pruefung": {
    "faktencheck": true,
    "quellen_geprueft": true,
    "aenderungen_vorgenommen": "Abstimmungsergebnis am Sitzungsprotokoll korrigiert (11:4 statt der im Entwurf genannten 12:3), Zustandsnote und Gewichtsbeschränkung am Prüfbericht abgeglichen, eine nicht belegte Kostenangabe zur Behelfsbrücke gestrichen, Termin der Bürgersprechstunde bei der Verwaltung rückbestätigt."
  },
  "scope": {
    "einstufung": "Text, veröffentlicht, informiert über eine Angelegenheit von öffentlichem Interesse (Gemeinderatsbeschluss, kommunale Infrastruktur) — Art. 50 Abs. 4 UAbs. 2 einschlägig; redaktionelle Ausnahme greift, daher keine Kennzeichnung",
    "labels_erforderlich": [],
    "begruendung": "Alle drei Merkmale des Anwendungsbereichs liegen vor (Rn. 130-131). Die Ausnahme trägt, weil eine fachkundige Person die Substanz geprüft hat und der Faktencheck als Mindestanforderung erfüllt ist (Rn. 133-134) und weil die redaktionelle Verantwortung benannt und über das Impressum öffentlich auffindbar ist (Rn. 138). Die Freigabe war der letzte inhaltsändernde Schritt; danach hat kein KI-System den Text mehr angefasst (Rn. 136) — der Hash in diesem Record bindet genau diese Fassung. Der Beitrag enthält weder Bild noch Audio noch Video, ein Deepfake-Test entfällt."
  },
  "ki_beteiligung": "Rohentwurf durch ein Sprachmodell aus dem öffentlichen Sitzungsprotokoll erzeugt (Auftrag: Zusammenfassung in rund 200 Wörtern), anschließend von der Redakteurin umgeschrieben, gekürzt und geprüft. Nach der Freigabe kein weiterer KI-Schritt, insbesondere keine automatische Kürzung für Social Media."
}
```

### 2. The hash binding

`content_sha256` is the SHA-256 sum of the content file — exactly what these commands print:

```bash
shasum -a 256 examples/blog-artikel.md    # macOS and Linux
sha256sum examples/blog-artikel.md        # Linux
node -e "const c=require('node:crypto'),f=require('node:fs');console.log(c.createHash('sha256').update(f.readFileSync(process.argv[1])).digest('hex'))" examples/blog-artikel.md
```

**Any** change to the file changes that value — a word slipped in later, a line break, an AI rewrite
in the build. Once the hash no longer matches the record, the record is invalid: the check ends with
an exit code other than 0, CI turns red, the merge is blocked.

The only way back is the right one: **review again**, then update `content_sha256`,
`reviewed_at` and `pruefung.aenderungen_vorgenommen`. That makes the sign-off the last step that
changes the content once more — para 136 not as a promise in a handbook, but as a state the
pipeline verifies.

### 3. The check run

```bash
node gate/scripts/check-review-record.mjs <directory> [<directory> …]
node gate/scripts/check-review-record.mjs examples
node gate/scripts/check-review-record.mjs --self-test
```

- Directories are passed **positionally**; more than one is allowed.
- ⚠️ **The scan is flat** — only `*.md` **directly** in the directory passed in, no
  subdirectories. With nested content trees, therefore, pass every subdirectory individually or
  expand them in the shell:
  ```bash
  # explicit
  node gate/scripts/check-review-record.mjs content content/blog content/blog/2026
  # portable: all subdirectories at once (macOS and Linux)
  node gate/scripts/check-review-record.mjs $(find content -type d)
  ```
  A directory **without** any `*.md` is an **error**, not a note: where the matches sit only one
  level down, the run aborts and names the subdirectories concerned; where there really is nothing,
  it reports the empty scan. A typo in a path or a forgotten subfolder therefore no longer passes as
  a green run over **zero** checked files. Anyone deliberately carrying empty directories during a
  rollout phase sets `--erlaube-leer` — then it stays at a warning. The list of directories passed
  in still needs checking itself: a directory that never appears in the call at all is one no check
  run can find.
- **Only the extension `.md` is covered** — `.mdx` and other extensions fall out of the scan;
  anyone who needs them checks them in a step of their own. **Symlinked content files are checked
  too** (the record then sits beside the link); a `*.md` symlink without a readable target is
  reported as an error instead of being silently skipped.
- **A record that contradicts itself is an error:** `pruefung.faktencheck: false` together with an
  empty `scope.labels_erforderlich` list. In that case neither the exception carries — fact-checking
  is its minimum requirement (para 134) — nor a label. That is not a quality assessment, which the
  gate does not make, but the record's own account of itself. Anyone who wants to document that case
  deliberately sets `--erlaube-ohne-faktencheck`; a warning then appears in the log instead of the
  error.
- `--self-test` runs the script's built-in self-tests — the quickest way to check that the copy in
  your own repository is intact.
- **Zero dependencies:** only `node:` builtins, no `npm install`, no lockfile to maintain.
  Node 18 or newer.
- **Exit code 0** = every record found is complete and hash-valid **and** something was actually
  checked in every directory passed in.
  **Exit code ≠ 0** = at least one finding (missing record, missing mandatory field,
  hash mismatch, self-contradiction in the record, an empty or wrongly chosen scan path,
  a symlink without a target).

### 4. The time anchor: why PR approval instead of commit timestamps

Git timestamps are set **client-side**: `git commit --date=…`, the environment variables
`GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE`, and every rebase rewrites them. As evidence of *when*
the review took place they are therefore no good.

Server-attested — logged by the forge, not set by the author — are, by contrast, the
**approval event on the pull request**, the **run of the status check** and the
**merge event on the protected branch**. Recommended combination:

| Building block | What it proves |
|---|---|
| Review record | **What** was reviewed, by whom, with what expertise, with what outcome |
| PR approval | **When** the sign-off happened and by **which account** — logged server-side |
| Branch protection + CI gate | That nothing was changed unnoticed in the **covered** files between sign-off and publication — covered are the `*.md` files in the configured directories (flat scan, see section 3) |

To be honest about it: an approval is a click. It attests time and person, not care —
see [What the gate does — and what it does not](#what-the-gate-does--and-what-it-does-not).

## Setup in five steps

1. **Take the files over.** Copy [`scripts/check-review-record.mjs`](scripts/check-review-record.mjs)
   and [`review-record.schema.json`](review-record.schema.json) into your own repository
   (the path is yours to choose; `gate/` in what follows). Run `node gate/scripts/check-review-record.mjs --self-test`
   once — exit code 0 means the copy is intact.
2. **Decide on the directories.** Which folders hold label-relevant texts
   (`content/`, `blog/`, `docs/`)? Create a review record for every content file in them:
   copy [`templates/review-record.example.json`](templates/review-record.example.json),
   fill in the fields, set the hash with `shasum -a 256`. Whatever does **not** fall within the
   scope needs no record — the decision tree sorts that out beforehand
   ([chapter 01](../playbook/en/01-decision-tree.md)).
   ⚠️ **Mind the flat scan:** with nested content trees (`content/blog/2026/…` —
   the normal case in Astro, Hugo and Next repositories) `content` is **not** enough; every
   subdirectory belongs in the list individually or gets in via `find content -type d`
   (see section 3). If only `content` is passed, the run aborts and names the
   subdirectories — so that error explains itself. A subtree can still slip through unchecked if
   its root directory never appears in the call in the first place: once the list is set up, check
   it against `find content -name '*.md'`.
3. **Take the CI workflow over.** Copy [`github-actions/editorial-gate.yml`](github-actions/editorial-gate.yml)
   to `.github/workflows/editorial-gate.yml` and adjust the list of directories in the call
   to match step 2.
4. **Activate the PR template.** Copy [`templates/PULL_REQUEST_TEMPLATE.md`](templates/PULL_REQUEST_TEMPLATE.md)
   to `.github/PULL_REQUEST_TEMPLATE.md`. The checklist asks for what para 134
   requires: substance, expertise, fact-check, sources — and whether any AI step still runs after
   sign-off.
5. **Switch on branch protection.** For the publishing branch:
   require a pull request before merging · at least one approval ·
   switch on **"Dismiss stale pull request approvals when new commits are pushed"** ·
   mark the gate's status check as **required**.

> Without step 5 the gate is a recommendation, not a gate. The "dismiss stale approvals"
> option is the order rule of para 136 in repository settings: new
> commit ⇒ sign-off lapses ⇒ the text has to be reviewed again.

## The 30-second experiment

The quickest way to understand the gate is to break it yourself — in the worked example shipped
under [`examples/`](../examples/):

```bash
# 1. Starting point: the record matches the content
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"        # expected: 0

# 2. An AI step after sign-off: append a line, leave the record untouched
printf '\nThis sentence was added after sign-off.\n' >> examples/blog-artikel.md

# 3. Check again
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"        # expected: other than 0, finding "Hash-Abweichung"

# 4. Reset (assumes the file is committed — otherwise remove the appended
#    line by hand)
git checkout -- examples/blog-artikel.md
```

The red run in step 3 is the whole point: nobody had to notice that something had been
changed. The hash noticed. In a real pipeline the merge would be blocked at this point and a fresh
review due — before the text goes online, not after.

This repository runs the same call in its own CI (`.github/workflows/ci.yml`): the gate is applied
to the repository that describes it.

## What the gate does — and what it does not

| It does | It does **not** |
|---|---|
| Enforces that a complete record exists for every `*.md` file **in the configured directories** | It does not find of its own accord what lies outside that list: the flat scan does report matches that sit only in subdirectories, but a directory never passed in stays invisible |
| Checks whether the review is documented | It does not check whether the review was any good in substance |
| Makes every change after sign-off visible — including one nobody meant to report | It does not distinguish whether a change was "substantive" within the meaning of para 136 |
| Records who reviewed with what expertise and who carries the responsibility | It does not check whether that person actually has the expertise |
| Enforces a documented rationale in grey zones | It does not decide grey zones |
| Delivers evidence you can produce: record + approval + CI run | It does not replace a label where one is required |

**The honest limit, in one sentence:** the gate enforces the **process** and makes it auditable;
the substantive **quality** of the review it does not enforce. It is a permitted documentation form
that goes beyond the legal minimum (Code of Practice on Transparency of AI-Generated Content,
Sec. 2, Commitment 4) — **not a safe harbour**.

Four points that follow from this:

- **A green gate over a review that never happened is a well-documented breach.**
  Para 135 names *"cursory editorial approval without substantive engagement"*
  expressly as **not** sufficient. Anyone who waves twenty articles through in four minutes does not
  meet the exception — they merely log cleanly that they do not meet it. The openly declared case is
  caught by the check: `faktencheck: false` without a label is an error, not a note
  (see section 3). Cursory approval **with** the box ticked it cannot see — against that,
  only the person who signs off helps.
- **Documenting individual instances is not legally required.** Code of Practice Sec. 2,
  Commitment 4: *"This does not entail having to document individual instances of human review or
  editorial control over individual text publications."* The gate is deliberate over-fulfilment —
  expressly permitted, because the same commitment allows additional records.
  Anyone who is not a signatory to the code needs "other adequate means" anyway, plus a gap analysis
  against the code (para 148) — and a verifiable process is the most obvious form for that.
- **The gate carries for text only.** The editorial exception applies **to text only** — for
  images, audio and video there is none; there the deepfake test alone decides (the art exception
  relaxes only the **form** of disclosure). A review record over an AI image changes **nothing**
  about its labelling duty — it stays useful all the same, for the fact-check and the risk of
  misleading. 🧭 Mnemonic: text asks "who checked it?" —
  image asks "does it look real?"
- **A green gate is no free pass.** Misleading practices under the UWG (German Act against Unfair
  Competition), copyright and personality rights remain
  (→ [chapter 08](../playbook/en/08-legal-basis.md)). And the
  `ki_beteiligung` field documents the AI share but replaces no label: the machine-readable
  provider marking (Article 50(2)) too **never** replaces your own perceivable label — deployers
  *"cannot rely on the machine-readable marking"* (para 117 for deepfakes; for text the same
  standard applies via para 132: *"clear and perceivable … without … any specific technical tools
  or performing dedicated actions"*).

## Files in this directory

| File | Purpose |
|---|---|
| [`review-record.schema.json`](review-record.schema.json) | Machine-readable field reference for the review record |
| [`scripts/check-review-record.mjs`](scripts/check-review-record.mjs) | The check run (zero dependencies, `--self-test`) |
| [`templates/review-record.example.json`](templates/review-record.example.json) | Ready-to-fill template |
| [`templates/PULL_REQUEST_TEMPLATE.md`](templates/PULL_REQUEST_TEMPLATE.md) | PR checklist for the review |
| [`github-actions/editorial-gate.yml`](github-actions/editorial-gate.yml) | Ready-made CI workflow |

## Further reading

- [Chapter 03: the editorial exception](../playbook/en/03-editorial-exception.md) — both
  conditions, what does not qualify, the order rule, what documentation is and is not required
- [Chapter 01: decision tree](../playbook/en/01-decision-tree.md) — does this text
  need a record at all?
- [Chapter 04: form of the label](../playbook/en/04-labelling-form.md) — where the
  exception does not apply
- [Chapter 08: legal basis](../playbook/en/08-legal-basis.md) — verbatim norms, German
  authorities, the range of sanctions, what supervisors expect as evidence
