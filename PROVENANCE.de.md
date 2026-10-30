# Herkunft und Prüfung

> 🤖 **Mit KI erstellt — ohne redaktionelle Gegenlese.** Das gilt für dieses Repository
> vollständig, diese Datei eingeschlossen. Was genau geprüft wurde und was nicht, steht unten.

**Stand: 24.08.2026; aktualisiert am 30.10.2026.** Englische Fassung: [PROVENANCE.md](PROVENANCE.md).

Dieses Dokument beschreibt, wie die Inhalte dieses Repositorys entstanden sind, was an ihnen
maschinell geprüft wurde und was nicht. Es ist der Beleg hinter der Kennzeichnung, die jede
Inhaltsdatei trägt.

## Wie die Inhalte entstanden sind

Erzeugt haben sie **KI-Agenten in mehreren Durchgängen** — die Kapitel, die Gate- und
Werkzeug-Dokumentation, den Skill, beide Node-Skripte, die Einstiegsseiten und diese Datei.

1. **Rechtsrecherche aus den amtlichen Primärquellen.** Grundlage waren die Verordnung (EU)
   2024/1689 in der konsolidierten Fassung, die Leitlinien der Kommission C(2026) 5054 final vom
   20.07.2026, der Code of Practice on Transparency of AI-Generated Content vom 10.06.2026, die
   Kommissions-FAQ zu Art. 50, das KI-MIG und die Veröffentlichungen der Bundesnetzagentur. Für die
   wettbewerbs- und zivilrechtlichen Nachbarfragen ([Kapitel 08](playbook/de/08-rechtsgrundlagen.md)
   und [Kapitel 09](playbook/de/09-kennzeichnungs-weg.md)) kommen das UWG, das BGB und das DDG
   (gesetze-im-internet.de) sowie die dort zitierten Entscheidungen hinzu — OLG Hamm, Urteil vom
   12.05.2026, I-4 UKl 3/25 (Volltext und Rechtskraftvermerk:
   [nrwe.justiz.nrw.de](https://nrwe.justiz.nrw.de/olgs/hamm/j2026/4_UKl_3_25_Urteil_20260512.html)),
   BGH, EuGH und LG Itzehoe —, jeweils mit Datum und Aktenzeichen im Kapitel.
2. **Adversariale Gegenprüfung je Kapitel.** Jedes Kapitel hat anschließend ein unabhängiger Agent
   gegen dieselben Quellen geprüft — mit dem Auftrag, Abweichungen zu finden, nicht sie zu
   bestätigen. Was er fand, wurde korrigiert.
3. **Querschnittslauf und Endabnahme.** Danach ein Lauf über alle Dateien hinweg — Fundstellen,
   Begriffe, Widersprüche zwischen Kapiteln — und eine abschließende Abnahme.

4. **Übersetzung.** Die englische Fassung unter `playbook/en/` ist eine KI-Übersetzung der
   deutschen Kapitel, entstanden im selben Durchgang. Wörtliche EU-Zitate wurden dabei nicht
   übersetzt, sondern unverändert aus dem Original übernommen — sie stehen in beiden Fassungen
   im englischen Wortlaut. Stichprobenhaft wurde zeichengenau verglichen, dass sie übereinstimmen.
   Auch die englische Fassung hat keine redaktionelle Gegenlese durchlaufen.

## Was maschinell geprüft ist

- **193 wörtliche englische Zitate aus den Leitlinien** — jede unterschiedliche Zitat-Zeichenkette
  in allen veröffentlichten Markdown-Dateien des Repositorys, Kapitel 09 eingeschlossen — wurden am
  24.08.2026 maschinell gegen das amtliche PDF geprüft (Textextraktion mit pdftotext; Vergleich
  zeichengenau bis auf Zeilenumbrüche, Leerraum, Trennstriche am Zeilenende, Fußnotenziffern des
  PDFs und die Form der Anführungszeichen) — ohne Abweichung. Zitate aus EU-Dokumenten stehen
  deshalb überall in der englischen Originalfassung, auch mitten im deutschen Text. Nicht von diesem
  Abgleich erfasst waren Zitate aus dem Verordnungstext, dem Kodex, der Kommissions-FAQ, der
  EU-Icons-Seite und aus Herstellerdokumentation.
- **Wiederholt am 30.10.2026, mit erweitertem Quellenbestand.** Nach den unten beschriebenen
  Berichtigungen hat ein Skript jedes wörtliche Zitat (Schreibweise *"…"*) in den Kapiteln und im
  Skill gegen die amtlichen Texte geprüft — die Leitlinien, die KI-VO und die VO (EU) 2026/1744 in
  der Fassung des Amtsblatts, den Kodex und die übrigen zitierten Quelltexte —, nach
  Normalisierung von Leerraum, Trennstrichen am Zeilenende sowie der Form von Anführungs- und
  Gedankenstrichen. Jedes Zitat wurde an seinen Auslassungspunkten geteilt. **Skill:** 35 Fragmente,
  alle gefunden. **Kapitel (deutsch und englisch):** 606 Fragmente, 570 gefunden, 36 nicht
  gefunden. Von diesen 36 stammen 18 aus Herstellerdokumentation von Anthropic und 6 aus der
  Kommissions-FAQ — Quellen, die nicht Teil des Abgleichs waren; 10 sind keine Zitate aus einer
  Quelle, sondern Beispielsätze des Playbooks selbst (die Irrtümer in Kapitel 06 und die
  Kompetenzfrage in Kapitel 01 und 09); 2 sind dasselbe Zitat aus Rn. 12 in Kapitel 05 (deutsch und
  englisch), das sich nach einem gesonderten Vergleich vom amtlichen Text nur durch die
  Fußnotenziffer des PDFs und die Form der Anführungszeichen unterscheidet. Das Skript prüft den
  Wortlaut, nicht, ob ein Zitat der richtigen Randnummer zugeordnet ist.
- **Jede Rechtsaussage trägt ihre Fundstelle** — Artikel und Absatz der KI-VO, Randnummer der
  Leitlinien, Section oder (Sub-)Measure des Kodex, Paragraf des KI-MIG. Damit kann jede lesende
  Person jede Aussage am Original nachprüfen. Das ist die Kontrolle, die dieses Repository anbietet.
- **Alle relativen Links wurden aufgelöst** und zeigen auf vorhandene Dateien.
- **Alle Skripte laufen mitsamt ihren Selbsttests in der CI.** Bei jedem Push und jedem Pull Request
  fährt [`.github/workflows/ci.yml`](.github/workflows/ci.yml) das Gate über `examples/` und beide
  Selbsttests.

Geprüft ist damit die Maschine: Zeichenfolgen, Pfade, Code. Nicht geprüft ist damit die juristische
Würdigung.

## Berichtigung vom 30.10.2026

Am 29.10.2026 hat eine interne Prüfung, ebenfalls durch KI-Agenten, den Skill und die englischen
Kapitel durchgesehen und Fehler sowie ungenaue Fundstellen gefunden. Jeder Befund wurde gegen die
amtlichen Texte nachgeprüft und nur dort berichtigt, wo der Text ihn trägt; deutsche und englische
Kapitel wurden parallel geändert. Rechtsstand geprüft am 29.10.2026: die KI-VO in der Fassung der
VO (EU) 2026/1744 und die Leitlinien C(2026) 5054 final, deren förmliche Annahme an diesem Tag noch
ausstand. Die wichtigsten Berichtigungen:

- **Rollen.** Rn. 14 wird nur noch für das zitiert, was sie sagt — Angestellte sind keine eigenen
  Betreiber, und die juristische Person bleibt Betreiber, wenn Contractor oder Freelancer das System
  in ihrem Auftrag sowie unter ihrer Verantwortung und Kontrolle bedienen; dass diese selbst keine Betreiber sind, ist als Lesart dieses Playbooks
  zu Rn. 12 und 19 gekennzeichnet. Die Anbieterrolle folgt nun Art. 3 Nr. 3 KI-VO, Rn. 10 und den
  Beispielen nach Rn. 11 (einschließlich des Angebots einer KI-Anwendung unter eigenem Namen); die
  Übergangsfrist des Art. 111 Abs. 4 ist an in Verkehr gebrachte Systeme gebunden.
- **Deepfakes.** Die Bagatellregel der Rn. 116 steht so da, wie die Leitlinien sie fassen — solche
  Eingriffe *"may be of minor relevance"*, und Kontext und Wirkung entscheiden; stilisierte und
  fotorealistische Illustrationen werden unterschieden; Rn. 117 wird als für Deepfakes geschrieben
  zitiert, für Text Rn. 132.
- **Platzierung und Anwendungsbereich.** Rn. 142 wird nur noch für Handbuch, Menüebenen und
  Nutzungsbedingungen zitiert; die Fußzeile ist als Lesart dieses Playbooks gekennzeichnet, für
  interaktive Systeme ist Rn. 38 ergänzt. Die Liste der Angelegenheiten von öffentlichem Interesse
  verwendet den Originalbegriff *"public health"* (Rn. 131 iii).
- **Verhaltenskodex und Nachbarrecht.** Aussagen aus dem Verhaltenskodex sind seinen Unterzeichnern
  zugeordnet und so gefasst, wie der Kodex sie fasst (Measure 2.2, Commitment 4); die Verbote in
  Art. 5 Abs. 1 UAbs. 1 lit. ba und bb KI-VO und die Rolle von Art. 35 Abs. 1 lit. k DSA sind
  genauer dargestellt.

Eine frühere Aktualisierung am 01.10.2026 hat die Kapitel an die VO (EU) 2026/1744 angepasst; sie
ist in den Stand-Zeilen der betroffenen Dateien vermerkt. **An der Kennzeichnung ändert die
Berichtigung nichts:** Auch diesmal hat keine redaktionelle Gegenlese durch einen Menschen
stattgefunden; die Ausnahme des Art. 50 Abs. 4 UAbs. 2 KI-VO wird weiterhin nicht in Anspruch
genommen.

## Was nicht stattgefunden hat

- **Keine redaktionelle Gegenlese durch einen Menschen mit einschlägiger Fachkompetenz.** Kein
  Faktencheck, keine substanzielle Prüfung der Aussagen durch eine benannte fachkundige Person.
- **Keine anwaltliche Prüfung.** Kein Anwalt, keine Anwältin und keine sonstige rechtsberatende
  Stelle hat diese Texte gesehen.

Die Ausnahme des Art. 50 Abs. 4 UAbs. 2 KI-VO wird deshalb **nicht in Anspruch genommen**. Der
Inhalt ist stattdessen gekennzeichnet: Jede Inhaltsdatei trägt den Hinweis unmittelbar unter der
Überschrift, sichtbar bevor der Text beginnt.

## Warum das der konsequente Weg ist

Der Entscheidungsbaum dieses Playbooks kennt an dieser Stelle zwei Zweige: Ausnahme oder
Kennzeichnung ([Kapitel 01](playbook/de/01-entscheidungsbaum.md)). Die Ausnahme setzt eine Prüfung
durch eine Person mit einschlägiger Fachkompetenz voraus — *"relevant knowledge and professional
judgement pertaining to the subject matter"* (Leitlinien C(2026) 5054 final, Rn. 134). Wo diese
Person fehlt, ist Kennzeichnen der vorgesehene Weg — ausgebaut in
[Kapitel 09](playbook/de/09-kennzeichnungs-weg.md).

Dieses Repository wendet seinen eigenen Baum auf sich selbst an und wählt den zweiten Zweig. Die
Alternative wäre ein Review-Nachweis ohne fachliche Prüfung gewesen — genau die Fehlerklasse, vor
der das Playbook warnt: *"automated review processes"* und *"cursory editorial approval without
substantive engagement"* genügen der Ausnahme nach Rn. 135 ausdrücklich nicht.

## Was das Gate hier trotzdem zeigt

Der Mechanismus ist an [`examples/`](examples/blog-artikel.md) vollständig demonstriert und läuft in
der CI dieses Repositorys: eine Inhaltsdatei, daneben ihr
[Review-Record](examples/blog-artikel.review.json), über SHA-256 an genau diese Fassung gebunden.
Die Beispieldatei ist ein als solcher gekennzeichneter Demo-Inhalt; Gemeinde, Personen, Beschlüsse,
Zahlen und Termine sind erfunden, der Record ist ein Demo-Datensatz.

Das Gate zeigt damit, **wie** der Nachweis funktioniert. Es behauptet nicht, dass die Kapitel dieses
Repositorys ihn durchlaufen hätten — sie haben es nicht.

## Stand und Alterung

Alle Aussagen hier stammen vom **24.08.2026**, drei Wochen nach Anwendungsbeginn des Art. 50,
ohne Rechtsprechung und ohne veröffentlichte Behördenpraxis dazu; die Kapitel wurden am
01.10.2026 und 30.10.2026 aktualisiert, diese Datei am 30.10.2026, Rechtsstand geprüft am 29.10.2026. Rechtsstand-Aussagen altern. Die
Ereignisse, die die Schlussfolgerungen dieses Repositorys ändern würden, stehen als Benchmark-Liste
in [Kapitel 08: Rechtsgrundlagen](playbook/de/08-rechtsgrundlagen.md), Abschnitt 7.

Die Leitlinien der Kommission sind rechtlich unverbindlich; verbindlich auslegen kann die
KI-Verordnung nur der EuGH. Dieses Repository ist keine Rechtsberatung und baut keinen Safe Harbour.

## Verantwortliche Stelle

Veröffentlicht werden diese Inhalte von **Eduard Wolf** als Inhaber dieses Repositorys
([LICENSE](LICENSE)). Kontakt: über die Issues dieses Repositorys.

## Fehler melden

Wer eine falsche Fundstelle, ein abweichendes Zitat oder eine unhaltbare Schlussfolgerung findet,
möge sie als Issue melden — mit der Fundstelle, an der sie sich prüfen lässt. Das ist die
Korrekturschleife, die dieses Repository hat.
