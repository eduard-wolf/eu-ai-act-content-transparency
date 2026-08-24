# Herkunft und Prüfung

> 🤖 **Mit KI erstellt — ohne redaktionelle Gegenlese.** Das gilt für dieses Repository
> vollständig, diese Datei eingeschlossen. Was genau geprüft wurde und was nicht, steht unten.

**Stand: 24.08.2026.** Englische Fassung: [PROVENANCE.md](PROVENANCE.md).

Dieses Dokument beschreibt, wie die Inhalte dieses Repositorys entstanden sind, was an ihnen
maschinell geprüft wurde und was nicht. Es ist der Beleg hinter der Kennzeichnung, die jede
Inhaltsdatei trägt.

## Wie die Inhalte entstanden sind

Erzeugt haben sie **KI-Agenten in mehreren Durchgängen** — die Kapitel, die Gate- und
Werkzeug-Dokumentation, den Skill, beide Node-Skripte, die Einstiegsseiten und diese Datei.

1. **Rechtsrecherche aus den amtlichen Primärquellen.** Grundlage waren die Verordnung (EU)
   2024/1689 in der konsolidierten Fassung, die Leitlinien der Kommission C(2026) 5054 final vom
   20.07.2026, der Code of Practice on Transparency of AI-Generated Content vom 10.06.2026, die
   Kommissions-FAQ zu Art. 50, das KI-MIG und die Veröffentlichungen der Bundesnetzagentur.
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

- **73 wörtliche englische Zitate** aus den Leitlinien wurden Zeichen für Zeichen gegen das amtliche
  PDF geprüft — ohne Abweichung. Zitate aus EU-Dokumenten stehen deshalb überall in der englischen
  Originalfassung, auch mitten im deutschen Text.
- **Jede Rechtsaussage trägt ihre Fundstelle** — Artikel und Absatz der KI-VO, Randnummer der
  Leitlinien, Section oder (Sub-)Measure des Kodex, Paragraf des KI-MIG. Damit kann jede lesende
  Person jede Aussage am Original nachprüfen. Das ist die Kontrolle, die dieses Repository anbietet.
- **Alle relativen Links wurden aufgelöst** und zeigen auf vorhandene Dateien.
- **Alle Skripte laufen mitsamt ihren Selbsttests in der CI.** Bei jedem Push und jedem Pull Request
  fährt [`.github/workflows/ci.yml`](.github/workflows/ci.yml) das Gate über `examples/` und beide
  Selbsttests.

Geprüft ist damit die Maschine: Zeichenfolgen, Pfade, Code. Nicht geprüft ist damit die juristische
Würdigung.

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
Person fehlt, ist Kennzeichnen der vorgesehene Weg.

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

Alle Aussagen hier haben den **Stand 24.08.2026**, drei Wochen nach Anwendungsbeginn des Art. 50,
ohne Rechtsprechung und ohne veröffentlichte Behördenpraxis dazu. Rechtsstand-Aussagen altern. Die
Ereignisse, die die Schlussfolgerungen dieses Repositorys ändern würden, stehen als Benchmark-Liste
in [Kapitel 08: Rechtsgrundlagen](playbook/de/08-rechtsgrundlagen.md), Abschnitt 7.

Die Leitlinien der Kommission sind rechtlich unverbindlich; verbindlich auslegen kann die
KI-Verordnung nur der EuGH. Dieses Repository ist keine Rechtsberatung und baut keinen Safe Harbour.

## Fehler melden

Wer eine falsche Fundstelle, ein abweichendes Zitat oder eine unhaltbare Schlussfolgerung findet,
möge sie als Issue melden — mit der Fundstelle, an der sie sich prüfen lässt. Das ist die
Korrekturschleife, die dieses Repository hat.
