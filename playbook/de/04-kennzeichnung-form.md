# Kennzeichnung richtig umsetzen: Form, Wortlaut, Platzierung

> 🤖 **Mit KI erstellt — ohne redaktionelle Gegenlese.** Dieser Text wurde von
> KI-Agenten erzeugt und maschinell gegen die amtlichen Quellen geprüft. Er hat
> **keine redaktionelle Gegenlese durch einen Menschen mit einschlägiger
> Fachkompetenz** durchlaufen; die Ausnahme des Art. 50 Abs. 4 UAbs. 2 KI-VO wird
> daher **nicht in Anspruch genommen**. Was genau geprüft wurde und was nicht:
> [Herkunft und Prüfung](../../PROVENANCE.de.md).

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

Dieses Kapitel setzt voraus, dass eine Kennzeichnungspflicht **besteht**. Die Prüfung, *ob* sie
besteht, liefern [Entscheidungsbaum](01-entscheidungsbaum.md) und [Fallkatalog](02-fallkatalog.md).

> 🧭 **Eselsbrücke:** Text fragt „Wer hat's geprüft?" — Bild fragt „Wirkt's echt?"
> Die redaktionelle Ausnahme gilt **nur für Text** ([Kapitel 03](03-redaktions-ausnahme.md)); für
> Bilder, Audio und Video gibt es keine. Dort zählt allein der Deepfake-Test — die Kunst-Ausnahme
> lockert nur die **Form** der Offenlegung (Abschnitt 6).

**Schnellwahl**

| Modalität | Wo das Label hingehört | Fundstelle | Detail |
|---|---|---|---|
| Bild | ins Bild selbst, ohne überlagernde Elemente (z. B. oben rechts) — Crop-Check vor dem Upload | Kodex Sub-measure 1.2.2 lit. a | [4.1](#41-bild) |
| Video | am Anfang **und** wiederholt, mindestens nach Unterbrechungen | Kodex Sub-measure 1.2.2 lit. b; Rn. 143 | [4.2](#42-video) |
| Audio | **hörbar** vor Beginn, Erinnerungen in Intervallen — bei vorhandenem Bildschirm zusätzlich visuell | Kodex Measure 1.1, Sub-measure 1.2.2 lit. e, Sub-measure 1.2.3 | [4.3](#43-audio) |
| Text | oberhalb bzw. zu Beginn, nahe der Überschrift | Kodex Sub-measure 1.2.2 lit. f | [4.4](#44-text) |
| Chatbot | in den Chat, beim Start der Sitzung | Art. 50 Abs. 1; Rn. 143 | [3](#3-label-text-bibliothek-de--en) |

---

## 1. Grundregeln: Art. 50 Abs. 5 und Leitlinien Rn. 141–144

Der Maßstab für **jede** Kennzeichnung nach Art. 50 Abs. 1–4 steht in Art. 50 Abs. 5 der
Verordnung (EU) 2024/1689:

> "The information referred to in paragraphs 1 to 4 shall be provided to the natural persons
> concerned in a clear and distinguishable manner at the latest at the time of the first
> interaction or exposure. The information shall conform to the applicable accessibility
> requirements."

Die Leitlinien konkretisieren das in Rn. 141–144:

| Anforderung | Bedeutet konkret | Fundstelle |
|---|---|---|
| **Klar** | auffällig, leicht verständlich, zugänglich — ausdrücklich auch für Kinder und Menschen mit Behinderung, wenn sie vorhersehbar zum Publikum gehören | Rn. 142 |
| **Unterscheidbar** | leicht als eigene Information zu erkennen, getrennt vom übrigen Inhalt und von der Umgebung, in der er präsentiert wird | Rn. 142 |
| **Rechtzeitig** | spätestens bei der **ersten** Interaktion oder Exposition — und zwar für **jede weitere Person neu**, nicht nur für die erste (Repost, späterer Einstieg, Scrollen im Feed) | Rn. 141, 143 |
| **Barrierefrei** | die jeweils anwendbaren Barrierefreiheitsanforderungen einhalten (Abschnitt 7) | Rn. 141, 144 |

**Ausdrücklich NICHT ausreichend** (Rn. 142):

> "Information will not be considered to be provided in a clear and distinguishable manner where
> it can be easily overlooked or missed by natural persons under normal exposure or interaction
> conditions (e.g. only included as part of a manual or hidden under layers of menu options on an
> online interface, part of terms of use that are often not read by users)."

Auf die üblichen Ausweichorte angewendet heißt das: **AGB, Datenschutzerklärung,
Impressum-Seite, Seitenfußzeile, ein Hinweis erst nach Klick oder Hover und eine Angabe nur in
den Metadaten genügen nicht.** Sie alle werden unter normalen Nutzungsbedingungen leicht
übersehen oder verlangen eine eigene Nutzeraktion. Die Kommissions-FAQ formuliert denselben
Maßstab funktional: Die Offenlegung muss wahrnehmbar sein *"without need for any specific
technical tools or performing dedicated actions"* (FAQ „Transparency obligations under
Article 50 of the AI Act", [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act),
Stand 24.07.2026).

> ⚠️ **Nicht verwechseln — zwei verschiedene Angaben an zwei verschiedenen Orten:**
> Das **Impressum** ist der richtige Ort für Identität und Kontakt der Person, die die
> **redaktionelle Verantwortung** trägt (Rn. 138: *"on an easily findable location"*, online
> z. B. über AGB oder andere rechtliche Nutzerinformationen). Es ist **nicht** der Ort für das
> **Inhalts-Label** — das gehört an den Inhalt selbst (Rn. 142). Siehe
> [Kapitel 03](03-redaktions-ausnahme.md).

> 📎 **Merksatz: Die maschinenlesbare Anbieter-Markierung (Art. 50 Abs. 2) ersetzt NIE die
> eigene wahrnehmbare Kennzeichnung.** Leitlinien Rn. 117:
> *"Therefore, deployers cannot rely on the machine-readable marking embedded in the content by
> the provider under Article 50(2) AI Act, since those markings are not immediately clear and
> distinguishable for the natural persons exposed to the deep fake content."*
> Was Wasserzeichen leisten und was nicht: [Kapitel 07](07-anbieter-markierungen.md).

**Woher die Formregeln in diesem Kapitel stammen.** Verbindlich ist die Verordnung; die
Leitlinien legen sie unverbindlich aus (Rn. 5). Der **Code of Practice on Transparency of
AI-Generated Content** vom 10.06.2026 (im Folgenden „Kodex"), von Kommission und AI Board als
adäquat i. S. v. Art. 50 Abs. 7 bewertet, enthält die einzigen konkreten Design- und
Platzierungsvorgaben — er bindet unmittelbar nur seine Unterzeichner. Wer nicht unterzeichnet
hat, ist frei in der Umsetzung, muss die Einhaltung aber „through other adequate means"
darlegen; die Leitlinien erwarten dafür ausdrücklich eine Lückenanalyse gegen den Kodex und
kündigen mehr Auskunftsersuchen an (Rn. 147–148). Der Kodex ist damit auch für
Nicht-Unterzeichner der Maßstab, an dem die eigene Lösung gemessen wird. Fundstellen und
Dokumentlinks: [Kapitel 08](08-rechtsgrundlagen.md).

---

## 2. EU-Icons: optional, aber nutzergetestet

Die Kommission stellt ein amtliches Icon-Set bereit — **Basic-Icon**, **Fully AI-Generated**
und **Partially AI-Modified**, jeweils in vier Varianten (schwarz, weiß und beide zu 50 %
transparent), als SVG und PNG, frei nutzbar ohne Namensnennung. Bezugsquelle:
[digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content)
(Seitenstand 10.08.2026). Die Seite stellt selbst klar:

> "The use of these EU icons is optional, but the labelling requirements under Article 50 AI Act
> are not. The use of these icons does not establish legal compliance by itself. Deployers remain
> responsible for ensuring that any disclosure meets the requirements of Article 50 AI Act."

Einordnung für die Praxis:

- **Wann sinnvoll:** bei Bild- und Video-Deepfakes und bei gekennzeichneten Textpublikationen,
  wo ein wiedererkennbares, sprachneutrales Symbol hilft — besonders für Inhalte, die
  international ausgespielt werden. Wann welche Variante gemeint ist, definiert die Icons-Seite:
  *"Fully AI-Generated: When the entire deepfake content (image, audio, video) or text is fully
  generated by AI with no human-created elements or human editorial control (apart from
  prompting). Partially AI-Modified: When pre-existing, human-made content was partially modified
  with AI …"*
- **Icon plus Text schlägt Icon allein.** Die Icons sind nutzergetestet; laut Icons-Seite gilt:
  *"performance improved across all measures when the basic icon was accompanied by a text label
  (e.g. modified)."*
- **Gleichwertige eigene Labels sind zulässig.** Auch der Kodex lässt in Section 2,
  Commitment 1 *"an equivalent icon or label that complies with the design and placement
  specifications"* zu. **Aber:** Wer eigene Wege geht, trägt das Auslegungsrisiko, dass sein
  Label im Streitfall nicht als gleichwertig bewertet wird. Das EU-Icon ist der Weg, den die
  Aufsicht kennt.
- **Design-Vorgabe des Kodex** (Section 2, Measure 1.1 lit. a): Hauptelement ist das
  kapitalisierte Akronym *"AI"* in englischer Sprache; eine nationalsprachliche Variante ist nur
  vorgesehen, wenn nationale Sprachvorschriften dem Englischen entgegenstehen. Die Ebenen
  *"generated"* / *"modified"* sind ergänzende Information — im oder neben dem Icon, wo technisch
  umsetzbar in einer zweiten Ebene (Measure 1.1 lit. b; Annex 1 zeigt sie als „AI + GENERATED"
  und „AI + MODIFIED").
- **Icon-Nutzung ist kein Compliance-Nachweis.** Entscheidend bleibt, dass die
  Gesamtdarstellung die Kriterien aus Abschnitt 1 erfüllt. Umgekehrt gilt laut Icons-Seite:
  Verwendung durch Nicht-Unterzeichner darf nicht als Beitritt zum Kodex gelesen werden.

---

## 3. Label-Text-Bibliothek DE + EN

Art. 50 schreibt **keinen Wortlaut** vor; amtlich vorgegeben sind nur die (optionalen) Icons und
die Design- und Platzierungsregeln des Kodex. Die folgenden Formulierungen sind Vorschläge, keine
Vorschrift.

**Sprache:** Das Label muss vom Publikum leicht verstanden werden (Rn. 142) — für ein
deutschsprachiges Publikum also deutsch, gern kombiniert mit dem EU-Icon. Gehören Kinder
vorhersehbar zum Publikum, verschärft Fn. 40 zu Rn. 142 die Anforderungen: kindgerecht,
altersgerecht, so einfach und knapp wie möglich, an der Stelle, an der es relevant wird, und in
der bzw. den Amtssprachen des Mitgliedstaats, in dem der Dienst angeboten wird.

Die Trennung in zwei Gruppen ist Absicht — sie verhindert **beide** typischen Fehler: gar nicht
labeln und alles labeln. Was in welche Gruppe gehört, entscheidet der
[Entscheidungsbaum](01-entscheidungsbaum.md); warum „KI war beteiligt" allein noch keine Pflicht
auslöst, erklärt die [Mythen-FAQ](06-mythen-faq.md).

Was in eine Kennzeichnungszeile für Text hineingehört und was nicht — der Pflicht-Kern der
Herkunftsaussage, darüber hinaus nur wahre Prozess-Tatsachen, keine Wertungen —, steht als
Grammatik der Zeile in [Kapitel 09](09-kennzeichnungs-weg.md), Abschnitt 3.

### Gruppe A — PFLICHT-Fälle

| Situation | DE | EN |
|---|---|---|
| Chatbot / direkte KI-Interaktion (Art. 50 Abs. 1; entfällt nur, wenn die KI-Interaktion für eine verständige Person ohnehin offensichtlich ist) | „Sie chatten mit einem KI-Assistenten." | "You are chatting with an AI assistant." |
| Vollsynthetisches Video (Art. 50 Abs. 4 UAbs. 1) | „Dieses Video enthält KI-generierte Bild- und Sprachsequenzen." | "This video contains AI-generated visuals and speech." |
| Teilmanipuliertes Video | „Einzelne Bild- oder Sprachsequenzen dieses Videos wurden mit künstlicher Intelligenz verändert." | "Parts of this video's visuals or speech have been modified using artificial intelligence." |
| Bild-Deepfake | „KI-generiertes Bild" · „Mit KI verändertes Bild" | "AI-generated image" · "AI-modified image" |
| Audio-Deepfake (hörbar, Abschnitt 4.3) | „Dieser Beitrag enthält eine KI-generierte Stimme." | "This recording contains an AI-generated voice." |
| Kennzeichnungspflichtiger Text (Art. 50 Abs. 4 UAbs. 2, redaktionelle Ausnahme greift nicht) | „Dieser Text wurde mit künstlicher Intelligenz erstellt." · bei Teil-Kennzeichnung: „Dieser Abschnitt wurde mit künstlicher Intelligenz erstellt." | "This text was generated using artificial intelligence." · "This section was generated using artificial intelligence." |

### Gruppe B — FREIWILLIGE Transparenz

Keine Pflicht — bewusst gesetzt, weil Transparenz gewollt ist. Typischer Fall: Der Text fällt
zwar in den Anwendungsbereich, die redaktionelle Ausnahme greift aber
([Kapitel 03](03-redaktions-ausnahme.md)).

| Situation | DE | EN |
|---|---|---|
| Redaktionell geprüfter Text, Transparenz trotzdem gewünscht | „Mithilfe künstlicher Intelligenz erstellt und redaktionell geprüft." | "Created with the help of artificial intelligence and editorially reviewed." |
| KI-Illustration ohne Echtheitsanmutung (kein Deepfake) | „Illustration: KI-generiert" | "Illustration: AI-generated" |
| KI-gestützte Übersetzung mit menschlicher Prüfung | „KI-gestützt übersetzt, menschlich geprüft." | "AI-assisted translation, reviewed by a human." |

Zwei Bremsen für Gruppe B:

1. **Freiwillige Labels dürfen die Pflicht-Labels nicht verwässern.** Wer alles gleich
   beschriftet, macht das Pflicht-Label ununterscheidbar — und „unterscheidbar" ist genau die
   Anforderung aus Rn. 142.
2. **Ein Label ist kein Freifahrtschein.** UWG-Irreführung sowie Urheber- und
   Persönlichkeitsrechte bleiben unberührt; Rn. 124: *"Reliance on the attenuated transparency
   obligation cannot be a justification for failing to respect the fundamental rights of
   individuals or rightsholders under Union law on intellectual property or Union data protection
   law"* — und laut Fn. 34 gilt das genauso für veröffentlichte Texte. Siehe
   [Fallkatalog](02-fallkatalog.md) und [Mythen-FAQ](06-mythen-faq.md).

---

## 4. Platzierung je Modalität

Platzierungs-Referenz ist der Kodex, Section 2, Measure 1.2 (Sub-measures 1.2.1–1.2.3).
Übergreifendes Prinzip — Sub-measure 1.2.1 lit. a:

> "Considering the content format and dissemination context, the icon or equivalent label will be
> placed in an appropriate and perceivable manner that ensures immediate recognition by natural
> persons without requiring user (inter)action or sustained attention."

> ⚠️ **Reichweite dieser Referenz — eine Ausnahme steht im Kodex selbst.** Der Vorspann der
> Sub-measure 1.2.1 stellt die Grundsätze der Measure 1.2 unter einen Vorbehalt: Sie gelten für
> alle Modalitäten und Kontexte *"with the exception of deep fakes that are part of artistic,
> creative, satirical, fictional or analogous works that are subject to specific disclosure
> regime specified in Commitment 3"*. Für **evident künstlerische, kreative, satirische,
> fiktionale oder vergleichbare Werke** ist damit nicht Measure 1.2 der Maßstab, sondern
> Section 2, **Commitment 3** — Orte und Grenzen dort in Abschnitt 6.

### 4.1 Bild

| Variante | Bewertung |
|---|---|
| **Label im Bild selbst** — Kodex Sub-measure 1.2.2 lit. a: *"in an appropriate place where no intervening overlay elements exist (e.g., in the top right corner of an image or video deep fake)"* | **Sicherer Weg.** Das Label überlebt Bildersuche, Repost, Screenshot und Kontextverlust — überall dort wird das Bild ohne die umgebende Seite wahrgenommen. |
| **Unmittelbar sichtbare Bildunterschrift**, ohne Klick und ohne Scrollen im selben Sichtfeld | ⚠️ **Grauzone — Einstufung mit kurzer Begründung dokumentieren (siehe [gate/](../../gate/README.de.md)).** Ohne Nutzeraktion wahrnehmbar — der Kodex setzt in Sub-measure 1.2.1 lit. c aber das **eingebettete** Label als Regel: *"The icon or equivalent label will be directly embedded into the content, unless equivalent alternatives to an embedded icon are available (e.g., a user interface overlay that for natural persons appears to be on the content)"*, und verlangt zusätzlich, dass die Offenlegung *"takes into account the distribution and dissemination chain of the content"*. Eine Bildunterschrift ist weder eingebettet, noch erscheint sie auf dem Inhalt — genau deshalb reist sie bei Repost und Bildersuche nicht mit. Vertretbar daher **nur mit dokumentierter Begründung und nur, wo Zweitverwertung praktisch ausgeschlossen ist**. Weder Leitlinien noch FAQ entscheiden die Frage „im Bild oder Bildunterschrift" ausdrücklich — der Kodex dagegen schon. |
| **Einen Klick oder Hover entfernt**, nur in Metadaten, nur im Dateinamen | **Unzureichend** (Rn. 142; FAQ: keine *"dedicated actions"* zumutbar; zu Metadaten Rn. 117). |

> ℹ️ **Ausnahme für geschlossene interne Kontexte.** Die drei Zeilen oben gelten für Inhalte, die
> veröffentlicht, verbreitet oder weitergegeben werden. Läuft der Deepfake ausschließlich in einem
> geschlossenen internen, beruflichen Umfeld, lässt der Kodex die Offenlegung im Interface oder im
> physischen Umfeld zu — Abschnitt 4.5.

**Responsive Zuschnitte beachten.** Plattformen und Themes schneiden Bilder auf 1:1, 4:5, 9:16
oder Thumbnail zu. Ein Label, das im Original oben rechts sitzt, kann im Zuschnitt wegfallen —
dann ist die Kennzeichnung genau dort nicht mehr wahrnehmbar, wo die Person sie sehen würde. Vor
der Veröffentlichung prüfen: [tools/label-crop-check](../../tools/label-crop-check/README.de.md)
simuliert die gängigen Zuschnitte und meldet, ob das Label sichtbar bleibt.

### 4.2 Video

Am **Anfang** kennzeichnen und die Kennzeichnung **wiederholen** — Kodex Sub-measure 1.2.2
lit. b:

> "Signatories will display the icon or equivalent label at the beginning of the video as well
> as, where possible, at regular intervals throughout the video and, at a minimum, after
> interruptions (e.g., after commercial or advertising breaks)."

Der rechtliche Grund dafür steht in Rn. 143: Ein Hinweis nur am Anfang erreicht nicht, wer
vorhersehbar erst mitten im Inhalt einsteigt.

> "However, if it is reasonably foreseeable that persons may not perceive content from its
> beginning, then only disclosure at the beginning of content does not adequately inform those
> persons and should be complemented with disclosure at later moments, where possible."

Praktisch betrifft das Live-Streams, Clips und Ausschnitte, Autoplay im Feed und alles, was
weitergeschnitten wird.

### 4.3 Audio

**Hörbar, vor Beginn des Inhalts.** Kodex Measure 1.1 (für reine Audio-Inhalte): *"a short
audible disclaimer in plain and simple natural language"* am Anfang des Deepfakes;
Sub-measure 1.2.3 ergänzt Erinnerungen *"at regular intervals (e.g., disclaimers, tones or
earcons)"* und mindestens nach Unterbrechungen. Ein Hinweis nur in Beschreibung oder Shownotes
kennzeichnet das Audio selbst nicht wahrnehmbar (Rn. 142).

**Video mit KI-Tonspur:** Ist (auch) die Tonspur der Deepfake, verlangt der Kodex **beide**
Kanäle — Sub-measure 1.2.2 lit. e: *"For audio deep fakes, when a screen is available, an
additional visual disclosure based on the icon or equivalent label will be made available …
in addition to the audible disclaimer."* Umgekehrt gilt lit. d: *"For visual deep fakes, audible
disclosures may only be implemented as an additional disclosure method and will always be
accompanied by visual disclosures."* Für das Video mit KI-Stimme heißt das: hörbarer Hinweis vor
Beginn **und** sichtbares Label — kein Ermessen, sondern der im Kodex geregelte Fall. Er deckt
sich mit Rn. 142: Wer nur hört (Hintergrundwiedergabe, Bildschirm aus, Podcast-Nutzung), nimmt
ein rein visuelles Label unter normalen Nutzungsbedingungen nicht wahr — es wäre *"easily
overlooked or missed"*. Die Erleichterung der Sub-measure 1.2.3 (*"where visual disclosure is not
possible"*) betrifft den anderen Fall: reines Audio ohne Bildschirm.

### 4.4 Text

Kodex Sub-measure 1.2.2 lit. f:

> "For published text, Signatories will place the icon or equivalent label, for example above or
> at the top of the text, near the headline of the text, or in the colophon at the beginning of
> the text, as long as placement is clear, consistent, and distinguishable for the end-user."

Also **oberhalb bzw. zu Beginn des Textes, nahe der Überschrift** — nicht am Ende, nicht in der
Seitenfußzeile. Der „colophon at the **beginning** of the text" ist der Textkopf einer
Publikation, nicht die Impressum-Seite einer Website (siehe den Kasten in Abschnitt 1).

Dieselbe Fundstelle erlaubt zwei Erleichterungen: Gekennzeichnet werden darf nur der Teil, der
KI-generiert oder -manipuliert ist (*"Signatories may label only that part of the text which is
AI-generated or manipulated"*); und bei Kurztexten, deren Lesbarkeit ein Label zerstören würde,
genügt ein kontextueller Hinweis im Interface — die Kennzeichnung selbst bleibt Pflicht
(*"Signatories must still carry out the labelling but may ensure disclosure through a contextual
notice in the user interface"*).

Ob der Text überhaupt kennzeichnungspflichtig ist oder die redaktionelle Ausnahme greift, klärt
[Kapitel 03](03-redaktions-ausnahme.md). Dort gilt die **Reihenfolge-Regel** (Rn. 136): Jeder
substanzielle KI-Eingriff **nach** der redaktionellen Freigabe macht die Ausnahme nichtig — die
Gegenlese muss der letzte inhaltsändernde Schritt sein. Technisch erzwungen wird das im
[gate/](../../gate/README.de.md).

### 4.5 Geschlossenes internes Umfeld

Läuft der Deepfake ausschließlich in einem geschlossenen internen, beruflichen Kontext — der
Kodex nennt als Beispiel Schulung oder Information von Beschäftigten —, lässt Sub-measure 1.2.2
lit. c einen anderen Ort zu: Die Offenlegung darf *"in the user interface, physical setting or
any other appropriate medium readily available to the natural persons exposed to the deep fake"*
erfolgen, sofern sie die exponierten Personen **vor** der Exposition informiert.

Drei Vorbehalte:

- **Erleichtert ist der Ort, nicht die Pflicht.** Das interne Deepfake-Video bleibt
  kennzeichnungspflichtig — der Beispielkatalog der Leitlinien nennt ausdrücklich den KI-Avatar
  eines Geschäftsführers, der die Belegschaft anspricht (Kasten nach Rn. 116; siehe
  [Entscheidungsbaum](01-entscheidungsbaum.md)).
- **Art. 50 Abs. 5 gilt unverändert:** klar, unterscheidbar, spätestens bei der ersten Exposition
  (Rn. 142, 143). Ein Hinweis im Intro, auf der Einladung oder auf der Leinwand vor dem Start
  erfüllt das — eine Zeile in einer Intranet-Richtlinie, die niemand aufruft, nicht.
- **Der geschlossene Kreis muss geschlossen bleiben.** Sobald der Inhalt ihn verlässt —
  Weiterleitung, Mitschnitt, Clip, Upload —, gilt wieder die Regel-Platzierung aus 4.1 bis 4.4.

---

## 5. Plattform-Schalter: was die KI-Toggles leisten

Die Leitlinien behandeln die Label-Werkzeuge sehr großer Plattformen und Suchmaschinen
(VLOPs/VLOSEs i. S. d. DSA) differenziert — Rn. 126:

> "Where providers of VLOPs or VLOSEs make labelling tools available to such deployers enabling
> them to label their deep fake content in compliance with Article 50(4) AI Act (i.e. a clear and
> distinguishable disclosure of the AI-origin), those deployers can rely on such tools to fulfil
> their transparency obligation under that provision within the context of the VLOP or VLOSE
> used. Providing such a functionality is without prejudice to the responsibility of the
> deployers under the AI Act to fulfil their labelling obligations under Article 50(4) AI Act."

Drei Konsequenzen:

1. **Der Schalter KANN genügen — auf der Plattform.** Bedingung ist, dass das von der Plattform
   gerenderte Label tatsächlich klar und unterscheidbar erscheint. Das ist eine **Sichtprüfung**
   pro Plattform und Format: Beitrag nach dem Setzen des Schalters als normaler Nutzer aufrufen
   (Feed, Story, Suche, eingebettete Wiedergabe) und prüfen, ob und wo das Label erscheint.
   Ergebnis mit Screenshot und Datum dokumentieren (siehe [gate/](../../gate/README.de.md)).
   *[zu verifizieren: ob und wie einzelne Plattformen ihre KI-Schalter sichtbar rendern — dazu
   liegt keine amtliche Feststellung vor; deshalb pro Kanal und Format selbst prüfen und den
   Stand datieren.]*
2. **Der Schalter trägt NIE für die Zweitverwertung.** *"Within the context of the VLOP or VLOSE
   used"* — auf der eigenen Website, in der Bildersuche, beim Repost außerhalb der Plattform ist
   das Plattform-Label weg. Für Inhalte, die vorhersehbar weiterwandern, bleibt das
   In-Bild- bzw. In-Video-Label der sichere Weg (Abschnitt 4.1).
3. **Die Verantwortung bleibt beim Betreiber** (*"without prejudice to the responsibility of the
   deployers"*). Ein gesetzter Haken ohne wahrnehmbares Ergebnis erfüllt die Pflicht nicht.

Zur Einordnung: Art. 35 Abs. 1 DSA verpflichtet VLOPs und VLOSEs zu wirksamen
Risikominderungsmaßnahmen; lit. k **nennt** prominente Markierungen als eine **mögliche** solche
Maßnahme (*"among the possible risk-mitigation measures that providers of VLOPs and VLOSEs may
adopt"*) — und zwar **werkzeugneutral**, also auch für Fälschungen ganz ohne KI, und mit anderem
persönlichem Anwendungsbereich als Art. 50 Abs. 4 (Rn. 126). Eine eigene Kennzeichnungspflicht
des Betreibers folgt daraus nicht. Unabhängig davon haben Plattformen **eigene**
Kennzeichnungsregeln (Werberichtlinien, Upload-Disclosures), die als Vertragspflichten neben dem
Gesetz stehen. Für Auftragsverhältnisse: [Kapitel 05](05-agentur-und-vertraege.md).

---

## 6. Kunst, Satire, Fiktion: lockere Form, gleiche Pflicht

Für Deepfakes, die Teil eines *"evidently artistic, creative, satirical, fictional or analogous"*
Werks sind, lockert Art. 50 Abs. 4 UAbs. 1 nur die **Form** — Rn. 123:

> "Deep fakes that form part of evidently artistic, creative, satirical or fictional works or
> programmes are not excluded from the transparency obligation of Article 50(4), first
> subparagraph, AI Act. Deployers still need to disclose the AI-origin of the content or its
> manipulation, but they can do so in an appropriate manner that does not hamper the display or
> enjoyment of the work."

Drei Grenzen, die in der Praxis regelmäßig übersehen werden:

- **Welche Form „appropriate" ist, ist Einzelfallabwägung** (Rn. 123: *"a case-by-case
  assessment"*, nach Art des Werks, Publikum und Kontext). ⚠️ **Grauzone — Einstufung mit kurzer
  Begründung dokumentieren (siehe [gate/](../../gate/README.de.md)).** Konkrete Orte nennen zwar nicht
  die Leitlinien, wohl aber der Kodex: Für Deepfakes in künstlerischen, kreativen, satirischen,
  fiktionalen oder vergleichbaren Werken gilt nicht Measure 1.2 (siehe Abschnitt 4), sondern das
  eigene Offenlegungsregime der Section 2, **Commitment 3**. Es benennt drei Ortskategorien:
  1. **Begleittext, Beschreibung, Anfang oder Abspann** des Werks — im Wortlaut *"in the
     accompanying notes or description provided to users, at the beginning/ end credits etc."*
     (Commitment 3 lit. b).
  2. **Kontextuelle Offenlegung an der Oberfläche** bei digitalen und interaktiven Werken: ein
     Label außerhalb, aber angrenzend an den Frame, ein UI-Overlay, bis hin zu *"a non-obtrusive
     icon or label that by clicking or hovering over provides more information"* — sichtbar
     bleibt das Label selbst, hinter Klick oder Hover liegt nur die Zusatzinformation.
  3. **Vor dem Werk** bei nicht-digitalen Werken: am Eintritts- oder Verkaufspunkt, auf dem
     Ausstellungs-Flyer, der Eintrittskarte oder der Verpackung.

  > ✅ **Zum Abspann:** Er ist im evident künstlerischen Werk kein Ausweichort, sondern ein vom
  > Kodex ausdrücklich benannter Weg (*"end credits"*, Commitment 3 lit. b). Rn. 143 baut die
  > Werk-Besonderheit selbst in den Test des Art. 50 Abs. 5 ein: Maßgeblich ist der Moment, in
  > dem eine Person vernünftigerweise exponiert ist und die Offenlegung wahrnimmt, *"taking into
  > account the specificities of disclosure in case of evidently creative, artistic and other
  > works (see Section 6.1.3.)"*. Die Grenze zieht daher nicht der Ort, sondern die Ausführung:
  > klar, unterscheidbar und lang genug stehend (Commitment 3 lit. b/c) — und *"In any case,
  > deployers need to comply with Article 50(5) AI Act"* (Rn. 123). Ist der Werkcharakter **nicht**
  > evident, bleibt es beim Regelfall aus Abschnitt 4: am Anfang und wiederholt.
- **„Evidently" ist eng auszulegen** (Rn. 122): Der Charakter muss für das Publikum offensichtlich
  sein; ist er *"potentially unclear or ambiguous"*, greift die Erleichterung nicht. Bei
  Mischcharakter *"the informative character should always prevail"* — dann gilt das
  Standard-Label. Werbung qualifiziert nur *"in certain, specific situations"*; der realistische
  synthetische Influencer, der ein reales Produkt testet, ist im Beispielkatalog der Leitlinien
  ausdrücklich **keine** Kunst.
- **Drittrechte bleiben unberührt** (Rn. 124, siehe Abschnitt 3).

Einstufungen mit Fundstellen: [Fallkatalog](02-fallkatalog.md).

---

## 7. Barrierefreiheit konkret

Art. 50 Abs. 5 Satz 2 verlangt Konformität mit den anwendbaren Barrierefreiheitsanforderungen.
Rn. 144 nennt als Beispiele die Richtlinien (EU) 2016/2102 und (EU) 2019/882 (European
Accessibility Act) und stellt klar: *"Article 50 AI Act does not impose distinct or additional
accessibility requirements."* Es gelten also die bestehenden Anforderungen — aber sie gelten eben
auch für das Label. Ob das eigene Produkt oder Angebot in deren Anwendungsbereich fällt, ist
selbst zu prüfen (Rn. 144).

- **Alt-Text und ARIA:** Ein ins Bild gerendertes Label ist für Screenreader unsichtbar. Die
  Kennzeichnung zusätzlich in den Alt-Text aufnehmen (z. B. „KI-generiertes Bild: …") bzw. das
  Label-Element zugänglich auszeichnen, statt es als reine Grafik ohne Textalternative zu setzen.
- **Kontrast:** ausreichender Kontrast zum Bildhintergrund; die halbtransparenten Icon-Varianten
  nicht auf unruhigen Motiven einsetzen. Ein unlesbares Label ist kein Label.
- **Einblenddauer:** Video-Einblendungen lang genug stehen lassen, um in normalem Tempo gelesen
  zu werden — ein Ein-Frame-Label ist *"easily overlooked or missed"* (Rn. 142).
- **Beide Kanäle bedienen:** Wo das Publikum vorhersehbar nicht sieht (Audio-Nutzung) oder nicht
  hört (Untertitel-Nutzung, stumm im Feed), die Offenlegung in beiden Kanälen bereitstellen —
  hörbarer Disclaimer und sichtbares Label bzw. Untertitel-/Transkript-Hinweis. Bei Deepfakes ist
  das nicht bloß gute Praxis: Der Kodex verlangt zum hörbaren Disclaimer die zusätzliche visuelle
  Offenlegung, sobald ein Bildschirm vorhanden ist, und lässt beim visuellen Deepfake den
  hörbaren Hinweis nur **zusätzlich** zum sichtbaren Label zu (Sub-measure 1.2.2 lit. d und e,
  siehe Abschnitt 4.3).
- **Einfache Sprache:** Der Kodex verlangt für den hörbaren Disclaimer *"plain and simple natural
  language"* (Measure 1.1) — ein brauchbarer Maßstab für jeden Label-Text, erst recht wenn Kinder
  zum vorhersehbaren Publikum gehören (Rn. 142 mit Fn. 40, siehe Abschnitt 3).

---

## 8. Prüfliste vor der Veröffentlichung

1. **Pflicht oder freiwillig?** Gruppe A oder B geklärt — und die Entscheidung stammt aus dem
   [Entscheidungsbaum](01-entscheidungsbaum.md), nicht aus dem Bauch.
2. **Wahrnehmbar ohne Nutzeraktion?** Kein Klick, kein Hover, kein Menü, keine AGB, keine
   Fußzeile, keine reinen Metadaten (Rn. 142) — Sonderfälle mit eigener Platzierungsregel:
   geschlossenes internes Umfeld (Abschnitt 4.5) und evident künstlerische Werke (Abschnitt 6).
3. **Rechtzeitig für jede Person?** Spätestens bei der ersten Exposition — bei Video und Audio
   auch für den, der später einsteigt (Rn. 143).
4. **Modalitätsgerecht?** Bild ins Bild (Crop-Check gelaufen), Video Anfang plus Wiederholung,
   Audio hörbar — bei vorhandenem Bildschirm zusätzlich sichtbar —, Text oben nahe der
   Überschrift.
5. **Barrierefrei?** Alt-Text, Kontrast, Standzeit, zweiter Kanal (Abschnitt 7).
6. **Plattform-Schalter sichtgeprüft?** Screenshot und Datum abgelegt — und für die
   Zweitverwertung ist zusätzlich am Inhalt selbst gekennzeichnet (Abschnitt 5).
7. **Reihenfolge gewahrt?** Nach der redaktionellen Freigabe hat kein KI-Schritt den Inhalt mehr
   verändert (Rn. 136) — sonst entfällt die Ausnahme und es wird gelabelt.
8. **Dokumentiert?** Einstufung, gewählte Labels und die Begründung für jede Grauzone gehören in
   den Review-Record (`scope.einstufung`, `scope.labels_erforderlich`, `scope.begruendung`,
   siehe [gate/](../../gate/README.de.md)). Das Gate erzwingt den **Prozess** und macht ihn
   nachweisbar; die inhaltliche Qualität der Prüfung erzwingt es nicht. Es ist eine über das
   rechtliche Minimum hinausgehende, zulässige Dokumentationsform (Kodex Section 2,
   Commitment 4) — **kein Safe Harbour**.

Rechtsgrundlagen und amtliche Dokumente im Überblick: [Kapitel 08](08-rechtsgrundlagen.md).
