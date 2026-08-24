# EU-AI-Act-Playbook: KI-Inhalte kennzeichnen & redaktionell nachweisen

**English version: [README.md](README.md).** Die Playbook-Kapitel und die Gate-Dokumentation sind
**deutschsprachig** — diese Datei ist die deutsche Eingangstür dazu. Wörtliche Zitate aus
EU-Dokumenten stehen durchgehend in der englischen Originalfassung.

Entscheidungsbaum, Fallkatalog und ein git-natives Nachweis-Gate für die Kennzeichnungspflichten
bei KI-Inhalten (Art. 50 der Verordnung (EU) 2024/1689).

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

## Für wen das gedacht ist

Für Entwicklerinnen, Agenturen, Selbstständige und Marketing-Teams im deutschsprachigen Raum, die
mit KI Inhalte erstellen und veröffentlichen — und die wissen müssen, was gekennzeichnet werden
muss, wie das Label aussehen darf und wie sich die redaktionelle Gegenlese belegen lässt.

## Warum es dieses Repo gibt

**Art. 50 der [Verordnung (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) ist seit
dem 02.08.2026 anwendbar** (Art. 113 KI-VO; Leitlinien Rn. 153). Die Pflichten, die auf der
Veröffentlichungsseite greifen — Deepfake-Label und Offenlegung bei veröffentlichtem Text über
Angelegenheiten von öffentlichem Interesse, beides **Betreiber**-Pflichten aus Art. 50 Abs. 4
(Rn. 19: *"the professional deployer's transparency obligations laid down in Article 50(3) and (4)
AI Act"*) —, gelten **ohne jede Schonfrist**. Die Übergangsfrist bis zum 02.12.2026 betrifft
ausschließlich die **Anbieter**-Markierungspflicht nach Art. 50 Abs. 2 bei bereits in Verkehr
gebrachten Systemen (Rn. 153; Kommissions-[FAQ zu Art. 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)).

Für **Text** kennt das Gesetz — außerhalb der gesetzlich erlaubten Strafverfolgung (Rn. 139) —
genau eine Tür: Art. 50 Abs. 4 UAbs. 2 greift nicht, wenn
*"the AI-generated content has undergone a process of human review or editorial control and where a
natural or legal person holds editorial responsibility for the publication of the content"*
(Rn. 130). Zwei **kumulative** Voraussetzungen (Rn. 133) — und die Latte liegt inhaltlich hoch: Der
Faktencheck ist *"a minimum requirement"* (Rn. 134), während *"[s]uperficial, solely formal or
procedural checks (e.g. spell-checking or grammatical correction), the mere existence of an
editorial policy, automated review processes or cursory editorial approval without substantive
engagement"* ausdrücklich **nicht** genügen (Rn. 135).

Die Ausnahme ist außerdem **reihenfolgeempfindlich**:

> *"Any substantive AI intervention occurring after the human review or editorial control process has
> taken place will therefore cause the exception to become void."* — Leitlinien Rn. 136

**Die Form des Nachweises ist dagegen rechtlich offen.** Der Code of Practice on Transparency of
AI-Generated Content hält fest, dass unterzeichnende Betreiber einzelne Gegenlesen **nicht**
dokumentieren müssen — *"This does not entail having to document individual instances of human
review or editorial control over individual text publications."* (Sec. 2, Commitment 4) —, erlaubt
zusätzliche Aufzeichnungen aber ausdrücklich: *"Signatories may record additional information on the
nature of the review or the type of involvement of the AI system in the published text."* Wer nicht
Signatar ist, muss Compliance über *"other adequate means"* darlegen und soll eine Gap-Analyse gegen
den Kodex fahren (Rn. 148).

Genau diesen offenen Raum füllt dieses Repo: Aus der Gegenlese wird ein **Review-Record, der per
SHA-256 an die geprüften Bytes gebunden ist**, aus der Freigabe ein **serverseitig protokolliertes
PR-Approval**, und aus der Reihenfolge-Regel der Rn. 136 ein **CI-Lauf, der rot wird**, sobald danach
noch etwas am Inhalt geändert wird.

**Zwei Sätze, die durch das ganze Playbook tragen:**

- Die redaktionelle Ausnahme gilt **nur für Text**. Für Bilder, Audio und Video gibt es keine — dort
  entscheidet allein der Deepfake-Test, und die Kunst-Ausnahme lockert lediglich die **Form** der
  Offenlegung (Art. 50 Abs. 4; Rn. 119–123).
- 🧭 Eselsbrücke: **Text fragt „Wer hat's geprüft?" — Bild fragt „Wirkt's echt?"**

## Was drin ist

| Pfad | Inhalt |
|---|---|
| [`playbook/01-entscheidungsbaum.md`](playbook/01-entscheidungsbaum.md) | Entscheidungsbaum in acht Stufen (0–7): Exposition, Chatbot, Deepfake-Test, Veröffentlichung, öffentliches Interesse, redaktionelle Ausnahme, Form der Kennzeichnung, Nachbarrechte |
| [`playbook/02-fallkatalog.md`](playbook/02-fallkatalog.md) | 71 eingeordnete Fälle in sieben Gruppen — Bild (Werbung/E-Commerce), Bild (journalistisch), Audio, Video, Text, interne Inhalte, Alt-Inhalte — je mit Ergebnis (✅ frei · 🏷️ Label · ⚠️ Grauzone) und Fundstelle |
| [`playbook/03-redaktions-ausnahme.md`](playbook/03-redaktions-ausnahme.md) | Die Text-Ausnahme im Detail: beide Voraussetzungen, die Verbotsliste (Rn. 135), die Reihenfolge-Regel (Rn. 136), was dokumentiert werden muss — und was nicht |
| [`playbook/04-kennzeichnung-form.md`](playbook/04-kennzeichnung-form.md) | Form, Wortlaut und Platzierung je Modalität; die optionalen EU-Icons; Label-Text-Bibliothek DE + EN; Barrierefreiheit; Prüfliste vor der Veröffentlichung |
| [`playbook/05-agentur-und-vertraege.md`](playbook/05-agentur-und-vertraege.md) | Auftragsketten: Wer ist Betreiber, wer kennzeichnet, wer trägt das UWG-Risiko — samt Regelungspunkte-Checkliste für Verträge |
| [`playbook/06-mythen-faq.md`](playbook/06-mythen-faq.md) | Acht verbreitete Irrtümer, mit Fundstelle richtiggestellt |
| [`playbook/07-anbieter-markierungen.md`](playbook/07-anbieter-markierungen.md) | Anbieter-Markierung nach Art. 50 Abs. 2: was ein gefundenes Wasserzeichen beweist, was nicht, und warum es die eigene Kennzeichnung nie ersetzt |
| [`playbook/08-rechtsgrundlagen.md`](playbook/08-rechtsgrundlagen.md) | Rechtsgrundlagen: Zeitleiste, Normtexte im Wortlaut, deutsche Zuständigkeiten, Sanktionsrahmen, Nachweis-Erwartung der Aufsicht — und wann das Kapitel neu zu prüfen ist |
| [`gate/`](gate/README.md) | Das Nachweis-Gate: Schema des Review-Records, das abhängigkeitsfreie Prüfskript, PR-Vorlage, fertiger GitHub-Actions-Workflow |
| [`skill/eu-ai-act-content-check/`](skill/eu-ai-act-content-check/SKILL.md) | Claude-Code-Skill (englisch): prüft vor der Veröffentlichung die Art.-50-Lage und **bereitet** den Review-Record vor — bezeugt ihn nie |
| [`tools/label-crop-check/`](tools/label-crop-check/README.md) | Geometrische Vorprüfung: Überlebt ein ins Bild gesetztes Label die Zuschnitte 1:1, 4:5, 9:16 und 16:9? |
| [`examples/`](examples/blog-artikel.md) | Durchgerechnetes Beispiel: ein fiktiver Lokalartikel mit zugehörigem Review-Record — die eigene CI dieses Repos fährt darüber |

## Das Gate in 30 Sekunden

Zu jeder geprüften Inhaltsdatei `<name>.md` gehört die Geschwisterdatei `<name>.review.json`. Der
Record hält fest, wer die Substanz mit welcher Fachkompetenz geprüft hat (Rn. 134), wer die
redaktionelle Verantwortung trägt und wo das öffentlich auffindbar ist (Rn. 138), was tatsächlich
geändert oder verworfen wurde, wie der Inhalt eingestuft wurde — und er trägt den **SHA-256 der
freigegebenen Fassung**.

Jede spätere Änderung — von Hand, durch einen Build-Schritt oder durch ein KI-System, das den Teaser
umschreibt — verändert diesen Hash, invalidiert den Record und lässt die Prüfung fehlschlagen. Damit
ist Rn. 136 keine Zusage im Handbuch mehr, sondern ein Zustand, den die Pipeline prüft.

Selbstversuch (das Skript braucht Node 18 oder neuer):

```bash
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"   # 0 — Record passt zum Inhalt

printf '\nDieser Satz kam nach der Freigabe dazu.\n' >> examples/blog-artikel.md
node gate/scripts/check-review-record.mjs examples
echo "Exit: $?"   # 1 — „Hash-Abweichung": nach der Freigabe geändert

git checkout -- examples/blog-artikel.md   # setzt voraus, dass die Datei committet ist — sonst die angehängte Zeile von Hand entfernen
```

Niemand musste bemerken, dass da etwas geändert wurde — der Hash hat es bemerkt. In einer echten
Pipeline wäre an dieser Stelle der Merge blockiert und die Gegenlese fällig: **vor** der
Veröffentlichung, nicht danach.

**Was das Gate leistet — und was nicht.** Es erzwingt den **Prozess** und macht ihn nachweisbar; die
inhaltliche **Qualität** der Prüfung erzwingt es nicht. Ein grünes Gate über einer nie stattgefundenen
Prüfung ist ein gut dokumentierter Verstoß — Rn. 135 nennt *"cursory editorial approval without
substantive engagement"* ausdrücklich als nicht ausreichend. Das Gate ist eine über das rechtliche
Minimum hinausgehende, zulässige Dokumentationsform (Code of Practice, Sec. 2, Commitment 4) —
**kein Safe Harbour**.

## Schnellstart

**Das Gate in fünf Schritten** (Details: [`gate/README.md`](gate/README.md)):

1. [`gate/scripts/check-review-record.mjs`](gate/scripts/check-review-record.mjs) und
   [`gate/review-record.schema.json`](gate/review-record.schema.json) ins eigene Repository kopieren,
   einmal `node gate/scripts/check-review-record.mjs --self-test` fahren — Exit-Code 0 heißt: Kopie
   intakt.
2. Festlegen, welche Verzeichnisse kennzeichnungsrelevante Inhalte enthalten, und je Inhaltsdatei
   einen Record anlegen: [`gate/templates/review-record.example.json`](gate/templates/review-record.example.json)
   kopieren, ausfüllen, `content_sha256` per `shasum -a 256 <datei>` setzen.
3. [`gate/github-actions/editorial-gate.yml`](gate/github-actions/editorial-gate.yml) nach
   `.github/workflows/` kopieren und auf die eigenen Verzeichnisse zeigen lassen.
4. [`gate/templates/PULL_REQUEST_TEMPLATE.md`](gate/templates/PULL_REQUEST_TEMPLATE.md) nach
   `.github/` kopieren — die Checkliste fragt ab, was Rn. 134 verlangt.
5. Branch Protection für den Veröffentlichungs-Branch einschalten: Pull Request und mindestens ein
   Approval verlangen, *„Dismiss stale pull request approvals when new commits are pushed"*
   aktivieren, den Status-Check des Gates als **required** markieren.
   **Ohne Schritt 5 ist das Gate eine Empfehlung, kein Gate.**

**Der Skill.** Den Ordner `skill/eu-ai-act-content-check` in das Verzeichnis `.claude/skills/` des
eigenen Projekts kopieren (sodass `.claude/skills/eu-ai-act-content-check/SKILL.md` existiert). Er
geht vor Veröffentlichung, Deployment oder Merge den Entscheidungsbaum durch und **bereitet** den
Review-Record vor — Prüfperson, Prüfdatum, die `pruefung`-Booleans und den finalen Hash füllt er
nie aus. Ein Ende-zu-Ende von einem Agenten erzeugter Record wäre genau der *"automated review
process"*, den Rn. 135 ausschließt.

**Die Crop-Prüfung.** `node tools/label-crop-check/check.mjs --image 1600x1200 --label 1150,40,120x60`
zeigt, ob ein im Bild platziertes Label die üblichen Plattform-Zuschnitte überlebt — standardmäßig
1:1, 4:5, 9:16 und 16:9, weitere über `--ratios`; Exit 1, wenn einer es anschneidet.
Abhängigkeitsfrei, `--self-test` eingebaut.

## Ehrlicher Zuschnitt

- **Ein Playbook plus ein Nachweis-Muster — kein Framework.** Kein CMS-Plugin, kein Dienst, keine
  Datenbank: zwei abhängigkeitsfreie Node-Skripte, ein JSON-Schema, eine Workflow-Datei und acht
  Kapitel. Man übernimmt, was man braucht.
- **Deutschsprachiger Inhalt mit Absicht.** Die operative Durchsetzungsebene ist deutsch: Die
  Bundesnetzagentur ist nach § 2 [KI-MIG](https://www.gesetze-im-internet.de/ki-mig) zentrale
  Marktüberwachungs-, Anlauf- und Beschwerdestelle
  ([bundesnetzagentur.de/ki](https://www.bundesnetzagentur.de/ki)); setzen Mediendiensteanbieter
  (Art. 2 Nr. 2 EMFA) KI zu journalistischen oder zu Werbezwecken ein, ist nach § 2 Abs. 8 KI-MIG
  die Länderaufsicht Marktüberwachungsbehörde — sonst bleibt es bei der Auffangzuständigkeit der
  BNetzA ([`playbook/08-rechtsgrundlagen.md`](playbook/08-rechtsgrundlagen.md), Abschnitt 3).
  Daneben läuft das Lauterkeitsrecht (UWG).
  Zitate aus EU-Dokumenten bleiben in der offiziellen englischen Fassung.
- **Unverbindliche Quellen, keine Rechtsprechung.** Leitlinien und FAQ sind Auslegung der
  Kommission, kein Gesetz; die Kommission kündigt eine Überprüfung der Leitlinien selbst an
  (Rn. 155). Der Bußgeldrahmen reicht bis 15 000 000 EUR oder 3 % des weltweiten Jahresumsatzes, je
  nachdem, welcher Betrag höher ist — für KMU gilt der **niedrigere** (Rn. 152).
- **Ein Label ist kein Freifahrtschein.** *"Reliance on the attenuated transparency obligation
  cannot be a justification for failing to respect the fundamental rights of individuals or
  rightsholders under Union law on intellectual property or Union data protection law"* (Rn. 124;
  Fn. 34 dehnt das ausdrücklich auf veröffentlichte Texte über Angelegenheiten von öffentlichem
  Interesse aus). Daneben laufen §§ 5, 5a UWG — mit oder ohne Label, siehe
  [`playbook/08-rechtsgrundlagen.md`](playbook/08-rechtsgrundlagen.md).
- **Die maschinenlesbare Anbieter-Markierung ersetzt nie die eigene wahrnehmbare Kennzeichnung.**
  Die Leitlinien sind unmissverständlich: *"[D]eployers cannot rely on the machine-readable marking
  embedded in the content by the provider under Article 50(2) AI Act, since those markings are not
  immediately clear and distinguishable for the natural persons exposed to the deep fake content."*
  (Rn. 117)
- **Grauzonen bleiben Grauzonen.** Wo die Quellen einen Fall nicht entscheiden, sagen die Kapitel
  das — Grauzone: Einstufung mit kurzer Begründung dokumentieren (siehe [`gate/`](gate/README.md)) —
  statt Schein-Sicherheit zu erzeugen. `[zu verifizieren: …]` markiert bewusst offene Punkte — dort
  deckt keine amtliche Quelle den Fall; erfunden wird nichts.

## Stand

**Stand: 24.08.2026** — drei Wochen nach Anwendungsbeginn des Art. 50, ohne Rechtsprechung und ohne
veröffentlichte Verwaltungspraxis dazu. Jede Rechtsaussage in diesem Repo trägt einen datierten
Stand-Stempel und eine Fundstelle. Welche Ereignisse die Schlussfolgerungen ändern würden — ein
erstes EuGH- oder BGH-Urteil, erste dokumentierte Abmahnungen oder BNetzA-Verfahren, eine Review der
Leitlinien, eine KI-MIG-Novelle —, steht in
[`playbook/08-rechtsgrundlagen.md`](playbook/08-rechtsgrundlagen.md), Abschnitt 7.

## Lizenz

MIT — siehe [LICENSE](LICENSE).
