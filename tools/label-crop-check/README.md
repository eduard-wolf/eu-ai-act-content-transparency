# label-crop-check — überlebt das KI-Label den Zuschnitt?

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

Ein Zero-Dependency-CLI (Node ≥ 18), das **geometrisch** prüft, ob ein im Bild platziertes
KI-Label die gängigen Plattform-Zuschnitte übersteht. Keine Bildverarbeitung, keine Uploads,
keine Installation — das Tool rechnet mit Maßen, nicht mit Pixeln.

## Das Praxisproblem

Art. 50 Abs. 5 KI-VO verlangt die Offenlegung

> "in a clear and distinguishable manner at the latest at the time of the first interaction
> or exposure."

Für Bilder empfiehlt der Verhaltenskodex das Label **im Bild**, Sub-measure 1.2.2 lit. a:

> "in an appropriate place where no intervening overlay elements exist (e.g., in the top right
> corner of an image or video deep fake)."

Genau diese Ecke schneiden responsive Zuschnitte als Erstes weg: Feed 1:1, Hochformat 4:5,
Story/Reel 9:16, Header 16:9, Thumbnail. Ein Label, das am Desktop sichtbar ist und im
Handy-Zuschnitt fehlt, ist dort **nicht wahrnehmbar, wo die Person den Inhalt zuerst sieht** —
und wahrnehmbar schuldet es der Betreiber (Leitlinien Rn. 141–143). Wer nur verbreitet oder
überträgt — Hosting-Dienste, Online-Plattformen, Sender — ist **kein** Betreiber, solange er keine
Autorität über den KI-Einsatz hat (Rn. 16); die Plattform springt hier also nicht ein. Die
maschinenlesbare Anbieter-Markierung nach Art. 50 Abs. 2 rettet das nicht: Betreiber *"cannot
rely on the machine-readable marking"* (Rn. 117).

Dieses Tool macht die Vorprüfung **vor** dem Upload reproduzierbar: gleiche Eingabe, gleiches
Ergebnis, prüfbar im Ticket, im PR oder in CI.

## Nutzung

```
node check.mjs --image BxH --label X,Y,BxH [--ratios 1:1,4:5,9:16,16:9] [--focal X,Y] [--json]
node check.mjs --self-test
node check.mjs --help
```

| Argument | Bedeutung |
|---|---|
| `--image BxH` | Maße des Originalbildes in Pixeln, z. B. `1600x1200` |
| `--label X,Y,BxH` | Labelbox in Bildkoordinaten, **Ursprung oben links** |
| `--ratios LISTE` | Zielverhältnisse, kommagetrennt; Standard `1:1,4:5,9:16,16:9` |
| `--focal X,Y` | Fokuspunkt; der Zuschnitt wird darum gelegt und an den Bildgrenzen geklemmt (Standard: Bildmitte) |
| `--json` | Ergebnis als JSON statt als Tabelle |
| `--self-test` | eingebaute Selbsttests ausführen |

| Exit-Code | Bedeutung |
|---|---|
| `0` | alle geprüften Zuschnitte zeigen das Label vollständig |
| `1` | mindestens ein Zuschnitt schneidet das Label an |
| `2` | Eingabefehler (unbrauchbare Maße, Label außerhalb des Bildes, kaputtes Ratio) |

### Beispiel 1 — Label oben rechts, Standard-Zuschnitte

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

Im Feed hält das Label, in der Story ist es angeschnitten, im Header ist es weg.

### Beispiel 2 — derselbe Bildbereich mit gesetztem Fokuspunkt

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

Der Fokuspunkt wird an der Bildkante geklemmt (9:16 beginnt bei x = 925, nicht bei 972,5) —
das entspricht dem Verhalten von Zuschnitten mit gesetztem Fokus- bzw. Ankerpunkt.

Für Skripte und CI liefert `--json` dasselbe Ergebnis maschinenlesbar
(`results[].survives`, `results[].label_area_lost_pct`, `all_survive`, `exit_code`).

## Modell und Annahmen — ehrlich

Das Tool ist eine **Vorprüfung reiner Geometrie**. Es kennt weder das Bild noch die Plattform.

- **Center-Crop-Annahme.** Für jedes Zielverhältnis wird der größtmögliche Ausschnitt gebildet
  und mittig gelegt — mit `--focal` um den Fokuspunkt, an den Bildgrenzen geklemmt. Reale
  Plattformen schneiden abweichend zu: sie skalieren, setzen eigene Ankerpunkte, erkennen
  Motive automatisch, blenden UI-Elemente über das Bild und ändern ihre Formate. Ein `OK` hier
  ist eine begründete Erwartung, keine Zusage der Plattform.
- **„Überlebt" heißt: vollständig im Zuschnitt.** Die Labelbox muss komplett innerhalb des
  Ausschnitts liegen; Randberührung zählt als sichtbar. Ein teilweise sichtbares Label gilt als
  abgeschnitten — mit Angabe, wie viel Prozent der Labelfläche verloren geht.
- **Keine Bildverarbeitung.** Das Tool liest keine Bilddatei. Maße und Labelbox kommen aus dem
  Layout- oder Exportschritt; wer sie falsch angibt, bekommt ein falsches Ergebnis.
- **Keine Aussage über Lesbarkeit.** Kontrast, Schriftgröße, Skalierung auf Thumbnail-Maße,
  Überdeckung durch Play-Buttons oder Untertitel prüft das Tool nicht — nur Position und Fläche.
- **Die Ratio-Liste ist ein Startwert vom 22.08.2026**, kein gepflegter Plattform-Katalog.
  Eigene Zielformate gehören per `--ratios` in den Aufruf, denn maßgeblich sind die Kanäle, in
  denen tatsächlich veröffentlicht wird.
- **Das Tool ersetzt keine Sichtprüfung.** Es macht die Vorprüfung reproduzierbar und
  dokumentierbar — die Kontrolle am realen Post bleibt der letzte Schritt.

### Was das Tool nicht beantwortet

- **Ob überhaupt gekennzeichnet werden muss.** Das klären
  [Entscheidungsbaum](../../playbook/01-entscheidungsbaum.md) und
  [Fallkatalog](../../playbook/02-fallkatalog.md). Für Bilder, Audio und Video gibt es **keine**
  redaktionelle Ausnahme — dort zählt allein der Deepfake-Test; die Kunst-Ausnahme lockert nur
  die **Form** der Offenlegung.
- **Wie das Label aussehen und heißen muss.** Wortlaut, EU-Icons und Platzierung je Modalität
  stehen in [Kapitel 04, Abschnitt 4.1](../../playbook/04-kennzeichnung-form.md).
- **Ob ein Label genügt.** Es ist kein Freifahrtschein: UWG-Irreführung, Urheber- und
  Persönlichkeitsrechte bleiben davon unberührt
  ([Kapitel 06](../../playbook/06-mythen-faq.md)).

⚠️ Bleibt nach dem Lauf eine Grauzone (etwa: Label knapp am Rand, Zuschnitt der Zielplattform
unklar) — Einstufung mit kurzer Begründung dokumentieren (siehe [gate/](../../gate/README.md)).

## Selbsttest

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

Exit 0, wenn alle Fälle bestehen — damit lässt sich das Tool selbst in CI absichern.

## Fundstellen

- **Art. 50 Abs. 5 KI-VO** (VO (EU) 2024/1689) — Wahrnehmbarkeit spätestens bei der ersten
  Interaktion oder Exposition: [eur-lex.europa.eu](https://eur-lex.europa.eu) (CELEX 02024R1689)
- **Leitlinien C(2026) 5054 final** vom 20.07.2026, Rn. 16 (wer nur verbreitet oder überträgt —
  Hosting-Dienste, Online-Plattformen, Sender — ist kein Betreiber), Rn. 117 (maschinenlesbare
  Markierung ersetzt die eigene Kennzeichnung nicht), Rn. 141–143 (Wahrnehmbarkeit):
  [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu)
- **Code of Practice on Transparency of AI-Generated Content** (10.06.2026), Section 2,
  Sub-measure 1.2.2 lit. a (Platzierung im Bild):
  [ec.europa.eu/newsroom/dae/redirection/document/129555](https://ec.europa.eu/newsroom/dae/redirection/document/129555)
- **EU-Icons** zur Kennzeichnung KI-generierter Inhalte (Nutzung optional, Kennzeichnungspflicht
  nicht): [digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content)
- Normtexte, deutsche Zuständigkeiten und Sanktionsrahmen:
  [Kapitel 08](../../playbook/08-rechtsgrundlagen.md)
