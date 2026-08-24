# Editorial-Gate: die Gegenlese als Nachweis in Git und CI

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

Das Editorial-Gate macht aus der redaktionellen Gegenlese einen Schritt, den die Pipeline
**erzwingt** und der Server **bezeugt**. Es besteht aus drei Teilen: einem **Review-Record**
je Inhaltsdatei, einer **Hash-Bindung** zwischen Record und Inhalt und einem **CI-Prüflauf**,
der beides gegeneinander hält.

Die Rechtsseite — beide Voraussetzungen der Ausnahme, die Verbotsliste und die
Dokumentationslage — steht in
[Kapitel 03: Die redaktionelle Ausnahme](../playbook/03-redaktions-ausnahme.md).
Hier geht es ausschließlich um die Mechanik.

## Die Regel, die das Gate umsetzt

> ⏱️ **Reihenfolge-Regel (Leitlinien Rn. 136):** Jeder substanzielle KI-Eingriff **nach** der
> redaktionellen Freigabe macht die Ausnahme nichtig — die Gegenlese muss der **letzte
> inhaltsändernde Schritt** sein. Im Wortlaut: *"Any substantive AI intervention occurring
> after the human review or editorial control process has taken place will therefore cause
> the exception to become void."*

Ein Prozess, der das nur zusagt, ist im Zweifel eine Behauptung. Ein Prozess, der es prüft
und protokolliert, ist ein Beleg. Genau diesen Unterschied baut das Gate.

## Mechanik

### 1. Der Review-Record

Zu jeder geprüften Inhaltsdatei `<name>.md` gehört eine **Geschwisterdatei**
`<name>.review.json` im selben Verzeichnis:

```
examples/
  blog-artikel.md            <- der Inhalt
  blog-artikel.review.json   <- der Nachweis der Gegenlese
```

Jedes Pflichtfeld hat einen Grund. Die rechte Spalte ist der Grund:

| Feld | Inhalt | Warum |
|---|---|---|
| `content_path` | Pfad zur geprüften Inhaltsdatei | Bindet Record und Inhalt eindeutig aneinander |
| `content_sha256` | SHA-256 der Inhaltsdatei im **freigegebenen** Stand | Reihenfolge-Regel, Rn. 136 |
| `reviewed_at` | Datum der Freigabe (ISO, `YYYY-MM-DD`) | Zeitanker der Freigabe |
| `reviewer.name` · `.role` | Wer geprüft hat, in welcher Rolle | Rn. 134: Prüfung durch benannte natürliche Personen |
| `reviewer.fachkompetenz` | Einschlägige Sachkunde zum Thema | Rn. 134: *"relevant knowledge and professional judgement pertaining to the subject matter"* |
| `editorial_responsibility.traeger` | Person, Gremium oder Unternehmen mit der letztlichen Verantwortung | Rn. 138: *"ultimate legal responsibility"*; CoP Sec. 2, Commitment 4 lit. a |
| `editorial_responsibility.kontakt_oeffentlich` | Wo Identität und Kontakt öffentlich stehen (z. B. Impressum-URL) | Rn. 138: *"publicly available on an easily findable location"* |
| `pruefung.faktencheck` (bool) | Faktencheck durchgeführt | Rn. 134: *"Fact-checking … is a minimum requirement"* |
| `pruefung.quellen_geprueft` (bool) | Quellen auf Belastbarkeit geprüft | Rn. 134: *"ensuring the trustworthiness of sources"* |
| `pruefung.aenderungen_vorgenommen` | Was tatsächlich geändert, ergänzt oder verworfen wurde | Rn. 135: Abgrenzung zum kursorischen Abnicken |
| `scope.einstufung` | Ergebnis des Entscheidungsbaums (z. B. „Text, öffentliches Interesse, Ausnahme greift") | [Kapitel 01](../playbook/01-entscheidungsbaum.md) |
| `scope.labels_erforderlich` (Liste) | Welche Kennzeichnungen nötig sind — leer, wenn keine | [Kapitel 04](../playbook/04-kennzeichnung-form.md) |
| `scope.begruendung` | Zwei, drei Sätze, warum so eingestuft — Pflichtfeld gerade in Grauzonen | Grauzonen dokumentieren statt diskutieren |
| `ki_beteiligung` | Welcher Arbeitsschritt KI berührt hat und wie | CoP Sec. 2, Commitment 4: *"may record additional information on … the type of involvement of the AI system"* |

Maschinenlesbare Feldreferenz: [`review-record.schema.json`](review-record.schema.json).
Ausfüllfertige Vorlage: [`templates/review-record.example.json`](templates/review-record.example.json).

Beispiel — der mitgelieferte Record aus [`../examples/blog-artikel.review.json`](../examples/blog-artikel.review.json), unverkürzt und damit nachprüfbar (`node gate/scripts/check-review-record.mjs examples`). Der Hash gehört genau zu `examples/blog-artikel.md` und wird für die eigene Inhaltsdatei neu berechnet:

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

### 2. Die Hash-Bindung

`content_sha256` ist die SHA-256-Summe der Inhaltsdatei — genau das, was diese Befehle
ausgeben:

```bash
shasum -a 256 examples/blog-artikel.md    # macOS und Linux
sha256sum examples/blog-artikel.md        # Linux
node -e "const c=require('node:crypto'),f=require('node:fs');console.log(c.createHash('sha256').update(f.readFileSync(process.argv[1])).digest('hex'))" examples/blog-artikel.md
```

**Jede** Änderung an der Datei ändert diesen Wert — ein nachgeschobenes Wort, ein
Zeilenumbruch, ein KI-Rewrite im Build. Stimmt der Hash nicht mehr mit dem Record überein,
ist der Record ungültig: Der Prüflauf endet mit einem Exit-Code ungleich 0, die CI wird rot,
der Merge ist blockiert.

Der einzige Weg zurück ist der richtige: **erneut gegenlesen**, dann `content_sha256`,
`reviewed_at` und `pruefung.aenderungen_vorgenommen` aktualisieren. Damit ist die Freigabe
wieder der letzte inhaltsändernde Schritt — Rn. 136 nicht als Zusage im Handbuch, sondern
als Zustand, den die Pipeline prüft.

### 3. Der Prüflauf

```bash
node gate/scripts/check-review-record.mjs <verzeichnis> [<verzeichnis> …]
node gate/scripts/check-review-record.mjs examples
node gate/scripts/check-review-record.mjs --self-test
```

- Verzeichnisse werden **positional** übergeben, mehrere sind erlaubt.
- ⚠️ **Der Scan ist flach** — nur `*.md` **direkt** im übergebenen Verzeichnis, keine
  Unterverzeichnisse. Verschachtelte Content-Bäume deshalb jedes Unterverzeichnis einzeln
  übergeben oder per Shell expandieren:
  ```bash
  # explizit
  node gate/scripts/check-review-record.mjs content content/blog content/blog/2026
  # portabel: alle Unterverzeichnisse auf einmal (macOS und Linux)
  node gate/scripts/check-review-record.mjs $(find content -type d)
  ```
  Ein Verzeichnis **ohne** `*.md` ist ein **Fehler**, kein Hinweis: Liegen die Treffer nur
  eine Ebene tiefer, bricht der Lauf ab und nennt die betroffenen Unterverzeichnisse; ist
  wirklich nichts da, meldet er den leeren Scan. Ein Tippfehler im Pfad oder ein vergessener
  Unterordner geht damit nicht mehr als grüner Lauf über **null** geprüften Dateien durch.
  Wer in der Einführungsphase bewusst leere Verzeichnisse mitführt, setzt `--erlaube-leer` —
  dann bleibt es bei einer Warnung. Die übergebene Verzeichnisliste ist trotzdem selbst
  prüfbedürftig: Ein Verzeichnis, das gar nicht erst im Aufruf steht, kann kein Prüflauf finden.
- **Erfasst wird ausschließlich die Endung `.md`** — `.mdx` und andere Endungen fallen aus dem
  Scan; wer sie braucht, prüft sie mit einem eigenen Schritt. **Symlinkte Inhaltsdateien werden
  mitgeprüft** (der Record liegt dann neben dem Verweis); ein `*.md`-Symlink ohne lesbares Ziel
  wird als Fehler gemeldet statt still übersprungen.
- **Ein Record, der sich selbst widerspricht, ist ein Fehler:** `pruefung.faktencheck: false`
  bei zugleich leerer `scope.labels_erforderlich`-Liste. Dann trägt weder die Ausnahme — der
  Faktencheck ist ihre Mindestanforderung (Rn. 134) — noch eine Kennzeichnung. Das ist keine
  Qualitätsbewertung, die das Gate nicht vornimmt, sondern die Selbstauskunft des Records. Wer
  den Fall bewusst dokumentieren will, setzt `--erlaube-ohne-faktencheck`; dann steht statt des
  Fehlers eine Warnung im Protokoll.
- `--self-test` fährt die eingebauten Selbsttests des Skripts — der schnellste Weg zu prüfen,
  ob die Kopie im eigenen Repo intakt ist.
- **Zero-Dependency:** nur `node:`-Builtins, kein `npm install`, keine Lockfile-Pflege.
  Node 18 oder neuer.
- **Exit-Code 0** = alle gefundenen Records vollständig und hash-gültig **und** in jedem
  übergebenen Verzeichnis tatsächlich etwas geprüft.
  **Exit-Code ≠ 0** = mindestens ein Befund (fehlender Record, fehlendes Pflichtfeld,
  Hash-Abweichung, Selbstwiderspruch im Record, leerer oder falsch gewählter Scan-Pfad,
  Symlink ohne Ziel).

### 4. Der Zeitanker: warum PR-Approval statt Commit-Zeitstempel

Git-Zeitstempel werden **clientseitig** gesetzt: `git commit --date=…`, die Umgebungsvariablen
`GIT_AUTHOR_DATE` und `GIT_COMMITTER_DATE`, und jeder Rebase schreibt sie neu. Als Beleg
dafür, *wann* die Gegenlese stattfand, taugen sie deshalb nicht.

Serverseitig attestiert — also von der Forge protokolliert, nicht vom Autor gesetzt — sind
dagegen das **Approval-Ereignis am Pull Request**, der **Lauf des Status-Checks** und das
**Merge-Ereignis am geschützten Branch**. Empfohlene Kombination:

| Baustein | Was er belegt |
|---|---|
| Review-Record | **Was** geprüft wurde, von wem, mit welcher Fachkunde, mit welchem Ergebnis |
| PR-Approval | **Wann** freigegeben wurde und durch **welches Konto** — serverseitig protokolliert |
| Branch Protection + CI-Gate | Dass an den **erfassten** Dateien zwischen Freigabe und Veröffentlichung nichts mehr unbemerkt geändert wurde — erfasst sind die `*.md` in den konfigurierten Verzeichnissen (flacher Scan, siehe § 3) |

Ehrlich dazu: Ein Approval ist ein Klick. Es bezeugt Zeitpunkt und Person, nicht die
Sorgfalt — siehe [Was das Gate leistet — und was nicht](#was-das-gate-leistet--und-was-nicht).

## Einrichtung in 5 Schritten

1. **Dateien übernehmen.** [`scripts/check-review-record.mjs`](scripts/check-review-record.mjs)
   und [`review-record.schema.json`](review-record.schema.json) ins eigene Repo kopieren
   (Pfad frei wählbar, im Folgenden `gate/`). Einmal `node gate/scripts/check-review-record.mjs --self-test`
   fahren — Exit-Code 0 bedeutet: Kopie intakt.
2. **Verzeichnisse festlegen.** Welche Ordner enthalten kennzeichnungsrelevante Texte
   (`content/`, `blog/`, `docs/`)? Für jede Inhaltsdatei dort einen Review-Record anlegen:
   [`templates/review-record.example.json`](templates/review-record.example.json) kopieren,
   Felder ausfüllen, Hash mit `shasum -a 256` setzen. Was **nicht** in den Anwendungsbereich
   fällt, braucht keinen Record — der Entscheidungsbaum sortiert das vor
   ([Kapitel 01](../playbook/01-entscheidungsbaum.md)).
   ⚠️ **Flacher Scan beachten:** Bei verschachtelten Content-Bäumen (`content/blog/2026/…` —
   in Astro-, Hugo- und Next-Repos der Normalfall) reicht `content` **nicht**; jedes
   Unterverzeichnis gehört einzeln in die Liste oder per `find content -type d` hinein
   (siehe § 3). Wird nur `content` übergeben, bricht der Lauf ab und nennt die
   Unterverzeichnisse — dieser Fehler ist also selbsterklärend. Ungeprüft durchrutschen kann
   ein Teilbaum trotzdem, wenn sein Wurzelverzeichnis gar nicht erst im Aufruf steht: Die
   Liste deshalb nach dem Anlegen einmal gegen `find content -name '*.md'` gegenprüfen.
3. **CI-Workflow übernehmen.** [`github-actions/editorial-gate.yml`](github-actions/editorial-gate.yml)
   nach `.github/workflows/editorial-gate.yml` kopieren und die Verzeichnisliste im Aufruf
   an Schritt 2 anpassen.
4. **PR-Template aktivieren.** [`templates/PULL_REQUEST_TEMPLATE.md`](templates/PULL_REQUEST_TEMPLATE.md)
   nach `.github/PULL_REQUEST_TEMPLATE.md` kopieren. Die Checkliste fragt ab, was Rn. 134
   verlangt: Substanz, Fachkunde, Faktencheck, Quellen — und ob nach der Freigabe noch ein
   KI-Schritt läuft.
5. **Branch Protection einschalten.** Für den Veröffentlichungs-Branch:
   Pull Request vor dem Merge verlangen · mindestens ein Approval ·
   **„Dismiss stale pull request approvals when new commits are pushed"** aktivieren ·
   den Status-Check des Gates als **required** markieren.

> Ohne Schritt 5 ist das Gate eine Empfehlung, kein Gate. Die Option „Stale Approvals
> verwerfen" ist die Reihenfolge-Regel aus Rn. 136 in Repository-Einstellungen: Neuer
> Commit ⇒ Freigabe verfällt ⇒ es muss neu gegengelesen werden.

## Der 30-Sekunden-Selbstversuch

Der schnellste Weg, das Gate zu verstehen, ist, es kaputtzumachen — im mitgelieferten
Beispiel unter [`examples/`](../examples/):

```bash
# 1. Ausgangslage: Record passt zum Inhalt
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"        # erwartet: 0

# 2. Ein KI-Schritt nach der Freigabe: eine Zeile anhängen, Record unverändert lassen
printf '\nDieser Satz kam nach der Freigabe dazu.\n' >> examples/blog-artikel.md

# 3. Erneut prüfen
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"        # erwartet: ungleich 0, Befund "Hash-Abweichung"

# 4. Zurücksetzen (setzt voraus, dass die Datei committet ist — sonst die angehängte
#    Zeile von Hand entfernen)
git checkout -- examples/blog-artikel.md
```

Der rote Lauf in Schritt 3 ist der ganze Punkt: Niemand musste bemerken, dass da etwas
geändert wurde. Der Hash hat es bemerkt. In einer echten Pipeline wäre an dieser Stelle der
Merge blockiert und die Gegenlese fällig — bevor der Text online geht, nicht danach.

Denselben Aufruf fährt dieses Repo in seiner eigenen CI (`.github/workflows/ci.yml`): Das
Gate wird auf das Repo angewendet, das es beschreibt.

## Was das Gate leistet — und was nicht

| Es leistet | Es leistet **nicht** |
|---|---|
| Erzwingt, dass zu jeder `*.md`-Datei **in den konfigurierten Verzeichnissen** ein vollständiger Record existiert | Es findet nicht von selbst, was außerhalb dieser Liste liegt: Der flache Scan meldet zwar, wenn Treffer nur in Unterverzeichnissen liegen, ein gar nicht übergebenes Verzeichnis bleibt aber unsichtbar |
| Prüft, ob die Gegenlese dokumentiert ist | Es prüft nicht, ob die Gegenlese inhaltlich etwas taugte |
| Macht jede Änderung nach der Freigabe sichtbar — auch eine, die niemand melden wollte | Es unterscheidet nicht, ob eine Änderung „substanziell" i. S. v. Rn. 136 war |
| Hält fest, wer mit welcher Fachkunde geprüft hat und wer die Verantwortung trägt | Es prüft nicht, ob diese Person tatsächlich fachkundig ist |
| Erzwingt eine dokumentierte Begründung in Grauzonen | Es entscheidet Grauzonen nicht |
| Liefert einen vorlegbaren Nachweis: Record + Approval + CI-Lauf | Es ersetzt keine Kennzeichnung, wo eine nötig ist |

**Die ehrliche Grenze, in einem Satz:** Das Gate erzwingt den **Prozess** und macht ihn
nachweisbar; die inhaltliche **Qualität** der Prüfung erzwingt es nicht. Es ist eine über das
rechtliche Minimum hinausgehende, zulässige Dokumentationsform (Code of Practice on
Transparency of AI-Generated Content, Sec. 2, Commitment 4) — **kein Safe Harbour**.

Vier Punkte, die daraus folgen:

- **Ein grünes Gate über einer nicht stattgefundenen Prüfung ist ein gut dokumentierter
  Verstoß.** Rn. 135 nennt *"cursory editorial approval without substantive engagement"*
  ausdrücklich als **nicht** ausreichend. Wer in vier Minuten zwanzig Artikel durchwinkt,
  erfüllt die Ausnahme nicht — er protokolliert nur sauber, dass er sie nicht erfüllt. Den
  offen erklärten Fall fängt der Prüflauf ab: `faktencheck: false` ohne Kennzeichnung ist ein
  Fehler, kein Hinweis (siehe § 3). Das kursorische Abnicken **mit** gesetztem Häkchen kann er
  nicht sehen — dagegen hilft nur die Person, die unterschreibt.
- **Einzelfall-Dokumentation ist rechtlich nicht gefordert.** CoP Sec. 2, Commitment 4:
  *"This does not entail having to document individual instances of human review or editorial
  control over individual text publications."* Das Gate ist eine bewusste Übererfüllung —
  ausdrücklich zulässig, weil derselbe Commitment zusätzliche Aufzeichnungen erlaubt.
  Wer nicht Kodex-Signatar ist, braucht ohnehin „other adequate means" und eine Gap-Analyse
  gegen den Kodex (Rn. 148) — dafür ist ein prüfbarer Prozess die naheliegendste Form.
- **Das Gate trägt nur für Text.** Die redaktionelle Ausnahme gilt **nur für Text** — für
  Bilder, Audio und Video gibt es keine; dort zählt allein der Deepfake-Test (die
  Kunst-Ausnahme lockert nur die **Form** der Offenlegung). Ein Review-Record über einem
  KI-Bild ändert an dessen Kennzeichnungspflicht **nichts** — nützlich bleibt er trotzdem,
  für Faktencheck und Irreführungsrisiko. 🧭 Eselsbrücke: Text fragt „Wer hat's geprüft?" —
  Bild fragt „Wirkt's echt?"
- **Ein grünes Gate ist kein Freifahrtschein.** UWG-Irreführung, Urheber- und
  Persönlichkeitsrechte bleiben (→ [Kapitel 08](../playbook/08-rechtsgrundlagen.md)). Und das
  Feld `ki_beteiligung` dokumentiert den KI-Anteil, ersetzt aber kein Label: Auch die
  maschinenlesbare Anbieter-Markierung (Art. 50 Abs. 2) ersetzt **nie** die eigene
  wahrnehmbare Kennzeichnung — Betreiber *"cannot rely on the machine-readable marking"*
  (Rn. 117 für Deepfakes; für Text gilt derselbe Maßstab über Rn. 132: *"clear and perceivable
  … without … any specific technical tools or performing dedicated actions"*).

## Dateien in diesem Verzeichnis

| Datei | Zweck |
|---|---|
| [`review-record.schema.json`](review-record.schema.json) | Maschinenlesbare Feldreferenz des Review-Records |
| [`scripts/check-review-record.mjs`](scripts/check-review-record.mjs) | Der Prüflauf (zero-dependency, `--self-test`) |
| [`templates/review-record.example.json`](templates/review-record.example.json) | Ausfüllfertige Vorlage |
| [`templates/PULL_REQUEST_TEMPLATE.md`](templates/PULL_REQUEST_TEMPLATE.md) | PR-Checkliste für die Gegenlese |
| [`github-actions/editorial-gate.yml`](github-actions/editorial-gate.yml) | Fertiger CI-Workflow |

## Weiterlesen

- [Kapitel 03: Die redaktionelle Ausnahme](../playbook/03-redaktions-ausnahme.md) — beide
  Voraussetzungen, Verbotsliste, Reihenfolge-Regel, Dokumentationslage
- [Kapitel 01: Entscheidungsbaum](../playbook/01-entscheidungsbaum.md) — braucht dieser Text
  überhaupt einen Record?
- [Kapitel 04: Form der Kennzeichnung](../playbook/04-kennzeichnung-form.md) — wenn die
  Ausnahme nicht greift
- [Kapitel 08: Rechtsgrundlagen](../playbook/08-rechtsgrundlagen.md) — Normtexte, deutsche
  Zuständigkeiten, Sanktionsrahmen, Nachweis-Erwartung der Aufsicht
