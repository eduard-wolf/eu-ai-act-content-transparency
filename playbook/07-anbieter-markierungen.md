# Anbieter-Markierungen: die maschinenlesbare zweite Ebene

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

Über KI-Inhalten liegen **zwei getrennte Transparenz-Ebenen**: Der **Anbieter** des Generators
markiert seine Ausgaben **maschinenlesbar** (Art. 50 Abs. 2 der Verordnung (EU) 2024/1689), der
**Betreiber** kennzeichnet seine Veröffentlichung **wahrnehmbar** (Art. 50 Abs. 4). Verschiedene
Adressaten, verschiedene Fristen, verschiedene Empfänger — und die eine Ebene erfüllt die andere
nie.

**Merksatz: Die maschinenlesbare Anbieter-Markierung ersetzt NIE die eigene wahrnehmbare
Kennzeichnung.** Dieses Kapitel erklärt, was die Anbieter-Ebene leistet, was ein gefundener
Marker beweist (wenig) und warum der belastbare Nachweis nicht in der Datei steckt, sondern im
dokumentierten Prozess.

---

## 1. Zwei Ebenen, zwei Adressaten

| | **Ebene 1 — Markierung** | **Ebene 2 — Kennzeichnung** |
|---|---|---|
| Norm | Art. 50 Abs. 2 i. V. m. Abs. 5 | Art. 50 Abs. 4 i. V. m. Abs. 5 |
| Adressat | **Anbieter** des generativen KI-Systems | **Betreiber**, der veröffentlicht |
| Geschuldet | maschinenlesbare Markierung **und** Erkennbarkeit (Detektion) | für Menschen wahrnehmbares Label |
| Gerichtet an | Software, Prüf- und Plattformsysteme — das **Ergebnis** der Detektion aber auch an die exponierte Person (Rn. 55, 75, 77) | die exponierte Person |
| Geltung | seit 02.08.2026; für Bestandssysteme erst ab 02.12.2026 (Art. 111 Abs. 4) | seit 02.08.2026, **ohne jede Schonfrist** |
| Behandelt in | diesem Kapitel | [Kapitel 04](04-kennzeichnung-form.md) |

Wortlaut Art. 50 Abs. 2 Satz 1 und 2 (englische Originalfassung, VO (EU) 2024/1689):

> "Providers of AI systems, including general-purpose AI systems, generating synthetic audio,
> image, video or text content, shall ensure that the outputs of the AI system are marked in a
> machine-readable format and detectable as artificially generated or manipulated. Providers
> shall ensure their technical solutions are effective, interoperable, robust and reliable as far
> as this is technically feasible, taking into account the specificities and limitations of
> various types of content, the costs of implementation and the generally acknowledged state of
> the art, as may be reflected in relevant technical standards."

Vier Konkretisierungen der Leitlinien, die für Betreiber praktisch relevant sind:

- **Markieren allein genügt dem Anbieter nicht.** Die Pflicht hat zwei Elemente — Markierung und
  Detektion; die Erfüllung nur eines Elements *"will not suffice to comply with that provision"*
  (Rn. 69–70). Wer also ein Wasserzeichen sucht, sucht etwas, das der Anbieter zusätzlich
  **auffindbar** machen muss — nicht etwas, das im Inhalt sichtbar wäre.
- **Maschinenlesbar heißt: nicht für Menschen.** Rn. 71: *"A machine-readable format means that
  marks are structured in a way that allows software applications to easily identify, recognise
  and extract them without human intervention."* Wahrnehmbare Marken sind dem Anbieter erlaubt,
  aber nur *"as a complementary measure"* — ausdrücklich, um Betreibern die eigene Kennzeichnung
  nach Art. 50 Abs. 4 zu erleichtern (Rn. 71). Erleichtern, nicht ersetzen.
- **Kein vorgeschriebenes Verfahren.** Rn. 73 nennt die Technikliste aus Erwägungsgrund 133 —
  *"watermarks, metadata identifications, cryptographic methods for proving provenance and
  authenticity of content, logging methods, fingerprints or other techniques"* — und stellt klar,
  dass Anbieter **keine** vollständige Provenance-Kette führen müssen. Der Verhaltenskodex
  (Code of Practice on Transparency of AI-Generated Content, 10.06.2026; im Folgenden „CoP")
  verlangt von seinen Signataren in Section 1 zwei Schichten: digital signierte, zeitgestempelte
  Metadaten (Sub-measure 1.1.1) **und** ein imperzeptibles Wasserzeichen (Sub-measure 1.1.2).
  Für Freitext genügt eine Schicht, weil *"free-form text cannot transport metadata"*; ab 200 Token
  muss Text gewasserzeichnet werden.
- **Die Detektionsseite ist nach außen gerichtet.** Rn. 75: Der Anbieter *"is obliged to ensure
  that the means of detection are available to the persons potentially exposed to the content"*;
  nach Art. 50 Abs. 5 sollen solche Lösungen *"human-readable results"* liefern. Für die
  Interoperabilität verlangt Rn. 76 *"publicly-available industry standard detection solutions
  that allow any third party to implement detection"* — eine eigene, fremde oder geteilte
  Detektionslösung ist nur übergangsweise zulässig, solange solche Standards fehlen. Rn. 77:
  Bereitzustellen ist das **Ergebnis** der Detektion, nicht der Inhalt selbst, *"in a clear and
  distinguishable manner at the latest at the time of the first interaction or exposure"* —
  gemeint ist laut derselben Rn. der Moment, in dem eine Person die Herkunft prüfen will und
  auf die Detektionslösung zugreift. ⚠️ Das ist die Pflicht des **Anbieters**; sie ersetzt die
  eigene wahrnehmbare Kennzeichnung nach Abs. 4 nicht (Rn. 117, unten 1.1). Sie zeigt aber:
  Ebene 1 schuldet der exponierten Person mehr als einen Marker im Inhalt.

### 1.1 Warum Ebene 1 die Ebene 2 nicht erfüllt

Leitlinien Rn. 117 — die Kernstelle dieses Kapitels:

> "Therefore, deployers cannot rely on the machine-readable marking embedded in the content by
> the provider under Article 50(2) AI Act, since those markings are not immediately clear and
> distinguishable for the natural persons exposed to the deep fake content."

Gleichlautend die Kommissions-FAQ „Transparency obligations under Article 50 of the AI Act"
(digital-strategy.ec.europa.eu, Seitenstand 24.07.2026): *"deployers cannot simply rely on the
machine-readable marking embedded in the content by the provider under Article 50(2) of the AI
Act to fulfil their disclosure obligation."* Wie das eigene Label dann aussehen muss — klar,
unterscheidbar, spätestens bei erster Exposition, barrierefrei —, steht in
[Kapitel 04](04-kennzeichnung-form.md).

### 1.2 Die Übergangsfrist betrifft nur Ebene 1 — und nur Altsysteme

Leitlinien Rn. 153:

> "Regulation amending the AI Act (the AI Omnibus), which has been recently adopted by the Union
> legislature, envisages a targeted grandfathering rule only with regard to the marking and
> detection obligations under Article 50(2) AI Act for generative AI systems placed on the market
> or put into service before 2 August 2026. It gives providers of those existing systems a
> transitional period to bring their systems in conformity by 2 December 2026."

Umgesetzt ist das über den neuen **Art. 111 Abs. 4 KI-VO** (eingefügt durch VO (EU) 2026/1744).
Daraus folgt zweierlei — und der zweite Punkt ist der, an dem in der Praxis am häufigsten falsch
zitiert wird:

1. Die Frist **02.12.2026** gilt nur für die **Anbieter**-Markierung nach Abs. 2 und nur für
   Systeme, die **vor** dem 02.08.2026 in Verkehr gebracht wurden. Für später in Verkehr
   gebrachte Systeme gilt sie ab Inverkehrbringen.
2. Die **Betreiber**-Pflichten (Deepfake-Label und Textkennzeichnung — Abs. 4;
   Emotionserkennung/biometrische Kategorisierung — Abs. 3) und die **Anbieter**-Pflicht des
   Abs. 1 (Chatbot-Hinweis; Rn. 28, 29, 32) haben **keine** Schonfrist. Die Aussage „Art. 50
   gilt erst ab Dezember 2026" ist in dieser Pauschalität falsch. Zeitleiste und Fundstellen:
   [Kapitel 08](08-rechtsgrundlagen.md).

### 1.3 Wann man selbst zum Anbieter wird

Die Ebene-1-Pflicht trifft normalerweise nicht den Publizierenden. Sie kann aber auf ihn
übergehen — Leitlinien Rn. 11: Wer ein vorhandenes generatives KI-System modifiziert (z. B. mit
eigenen Trainingsdaten) und es danach **unter eigenem Namen oder eigener Marke** in Betrieb
nimmt, *"becomes a provider of the new system without prejudice to the responsibility of the
provider of the initial AI system for the latter"*. Ein System nur zu nutzen, per API einzubinden
oder mit Prompts zu steuern, macht dagegen nicht zum Anbieter.

---

## 2. Stand der großen Anbieter — 22.08.2026

Momentaufnahme mit Stand-Stempel, keine gepflegte Liste: Anbieter-Praxis ändert sich schneller
als ein Repo. Jede Zeile trägt ihre Beleglage. **Der Stand ändert an der eigenen Pflicht
nichts** — sie hängt am Inhalt und am Publikum, nicht am Werkzeug ([Kapitel 01](01-entscheidungsbaum.md)).

| Anbieter / System | Text | Bild, Audio, Video, Dateien | Beleglage (22.08.2026) |
|---|---|---|---|
| **Anthropic / Claude** | unsichtbares Wasserzeichen, auf Modellebene in den Text eingewoben; Modelle, die ab 02.08.2026 in der EU starten, ab Start — ältere Modelle in der Übergangsphase | signierte C2PA-Provenance-Metadaten bei unterstützten Dateitypen (z. B. .svg, .png, .jpg) | **belegt** — Anbieter-Dokumentation „How Claude marks AI-generated content" (<https://support.claude.com/en/articles/16266773>); CoP-Signatar Section 1 |
| **Google / Gemini** | SynthID: das Wasserzeichen wird über die Wahrscheinlichkeits-Scores der Token gesetzt (Gemini-App und Web) | SynthID auch für Bild, Audio und Video | **belegt** — Anbieter-Dokumentation SynthID (<https://deepmind.google/science/synthid/>); CoP-Signatar Section 1 |
| **OpenAI / ChatGPT** | zum Stand-Datum **keine** Text-Markierung dokumentiert | C2PA- und SynthID-Herkunftssignale bei unterstützten Bildern, SynthID bei unterstütztem Audio — berichtet, nicht an der Anbieter-Doku verifiziert; für Video kein Beleg | **wahrscheinlich** — CoP-Signatar Section 1 ist belegt (offizielle Liste); die Anbieter-Dokumentation war zum Stand-Datum nicht abrufbar. [zu verifizieren: aktueller Markierungs-Stand für Text und Medien direkt an der OpenAI-Dokumentation] |
| **xAI / Grok** | nicht dokumentiert | Markierung für Bild/Video wird berichtet, aus Anbieter-Dokumentation nicht belegt | **wahrscheinlich (schwach)** — xAI wird in der Kommissionsmeldung vom 31.07.2026 (Update 20.08.2026) **nicht als Signatar genannt**; die Meldung nennt aber nur eine Auswahl der Unterzeichner, der Signatarstatus ist damit **nicht verifiziert**. [zu verifizieren: Signatarstatus am vollständigen Unterzeichner-Register der Kommission; Markierungs-Stand an einer Primärquelle von xAI] |

**Signatarstatus als Anhaltspunkt, nicht als Nachweis.** Die Kommission führt die Unterzeichner
offiziell: Section 1 (Anbieter) 82, Section 2 (Betreiber) 152, insgesamt rund 190 Organisationen —
dieselbe Organisation kann beide Sections zeichnen, daher liegt die Gesamtzahl unter der Summe
(<https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content>,
Seitenstand 20.08.2026). Namentlich für Section 1 genannt sind u. a. Aleph Alpha, Anthropic,
Black Forest Labs, Cohere, Google, Meta, Microsoft, Mistral, Open AI und Synthesia — eine
Auswahl, keine vollständige Aufzählung: **Aus „nicht genannt" folgt kein „nicht
unterzeichnet".** Wer nicht unterzeichnet, ist deshalb **nicht** von Art. 50 Abs. 2 befreit —
er muss die Erfüllung über *"other adequate means"* nachweisen und rechnet mit mehr
Auskunftsersuchen (Rn. 148).

Zu Anthropic im Detail, weil dieser Fall die Grenzen der Marker-Logik besonders klar zeigt (alle
Zitate aus der oben genannten Anbieter-Dokumentation):

- Der Geltungsbereich ist breit: *"Marks will apply to output from supported Claude models across
  Claude Platform (API), Claude, Claude Code, Claude Cowork, and Claude Tag, and wherever Claude
  is offered, worldwide."*
- Markiert wird nicht nur Erzeugtes, sondern **auch Verarbeitetes**: *"Claude uses two
  complementary techniques to mark content generated and processed by Claude"* — ausdrücklich auch
  beim Korrekturlesen, Übersetzen, Zusammenfassen oder Konvertieren (Abschnitt 3).
- Die Aussagekraft ist begrenzt — der Marker sagt nur, dass der Inhalt verarbeitet worden
  **sein kann**: *"If a supported mark is found, it indicates that the content may have been
  processed by Claude"*;
  umgekehrt *"Lack of a detected mark doesn't mean the content wasn't AI-generated or processed."*
- Die Detektionsseite ist noch nicht öffentlich: *"We'll share details on detection mechanisms in
  forthcoming technical documentation."*

---

## 3. Was ein gefundener Marker beweist — und was nicht

| Behauptung | Trifft zu? | Warum |
|---|---|---|
| „Marker gefunden ⇒ der Inhalt stammt von einer KI" | **Nein** | Anbieter markieren auch bloßes Verarbeiten. Anthropic ausdrücklich: *"People often use Claude to proofread, translate, summarize, or convert files. The output can carry a Claude mark even if the underlying ideas, text, or data originated from another source"* |
| „Marker gefunden ⇒ der KI-Anteil war groß" | **Nein** | Der Marker ist binär und trägt kein Maß. Über Umfang, Rolle und Reihenfolge der KI-Beteiligung sagt er nichts |
| „Marker gefunden ⇒ es liegt ein Verstoß vor" | **Nein** | Die Kennzeichnungspflicht folgt aus Modalität, Publikum und Inhalt (Art. 50 Abs. 4), nicht aus dem Vorhandensein einer Markierung — Prüfung: [Kapitel 01](01-entscheidungsbaum.md) |
| „Kein Marker gefunden ⇒ keine KI im Spiel" | **Nein** | Fehlende Markierung beweist nichts: Altmodelle, nicht unterstützte Kanäle und Dateitypen, verlorene Metadaten, Anbieter ohne Markierung |
| „Ich kann das selbst nachprüfen" | **Meist nein — Stand der Anbieterpraxis, nicht die Rechtslage** | Rechtlich gilt eher das Gegenteil: Die Detektionsmittel müssen den exponierten Personen verfügbar sein (Rn. 75), und Rn. 76 verlangt *"publicly-available industry standard detection solutions that allow any third party to implement detection"*. In der Praxis fehlt das zum Stand-Datum teils — Anthropic kündigt die Detektions-Dokumentation erst an (*"forthcoming technical documentation"*, Abschnitt 2). [zu verifizieren: ob und wie der Kodex den Zugang zur Detektionslösung für Freitext einschränkt — Sub-measure 1.1.2] |

### 3.1 Anbieter dürfen mehr markieren, als das Gesetz verlangt

Art. 50 Abs. 2 kennt eine **Bagatell-Ausnahme**: Die Markierungspflicht greift nicht, soweit das
System *"an assistive function for standard editing"* erfüllt oder die Eingabedaten bzw. deren
Semantik nicht wesentlich verändert; dazu kommt die Strafverfolgungs-Ausnahme (Rn. 56, 89–93).
Rn. 90:

> "Standard editing should be understood as the process of preparing existing content for
> publication or distribution (e.g., small edits to improve readability and grammar, quality and
> format) and does not involve generating new content. … Editing goes beyond standard editing if
> the content is changed in a material way (substantive modifications, structural changes etc.)
> that affect its meaning, style or intent."

Die Beispielkästen nach Rn. 92 ziehen die Linie für Text konkret: **ausgenommen** sind *"Grammar
correction and spellchecking, linguistic and minor stylistic polishing that do not change the
substance, meaning, style or messaging of text, AI-generated translations of text"*;
**markierungspflichtig** sind dagegen *"AI-generated summaries of text; paraphrasing or rewriting
text that changes style, structure and meaning beyond mere grammatical and minor stylistic
correction"*.

Praktische Folge: Ein Anbieter, der pauschal jede Ausgabe markiert — auch die Übersetzung, auch
die Rechtschreibkorrektur —, markiert breiter als die Norm es verlangt. **Aus einem Marker folgt
deshalb nicht einmal, dass für diesen Vorgang überhaupt eine Markierungspflicht bestand.**

⚠️ **Nicht mit dem Deepfake-Test vermischen.** Diese Beispielkästen gehören zu **Abs. 2**
(Anbieter-Markierung). Sie sind kein Katalog dafür, was nach **Abs. 4** ein pflichtig zu
kennzeichnender Deepfake ist — dort gilt ein eigener Maßstab (Ähnlichkeit und falscher
Authentizitätseindruck, Rn. 113 f., Bagatellgrenze Rn. 116). Wer die beiden Ausnahme-Regime
mischt, kommt bei Bildern regelmäßig zum falschen Ergebnis — Grauzone: Einstufung mit kurzer
Begründung dokumentieren (siehe [gate/](../gate/README.md)); Einzelfälle im
[Fallkatalog](02-fallkatalog.md).

### 3.2 Die defensive Seite

Die Marker-Logik ist auch in umgekehrter Richtung schwach: Ein gefundener Marker ist **kein**
Beleg dafür, dass ein Text nicht vom Menschen stammt — er kann aus einem Korrekturlauf stammen.
Und ein KI-Detektor-Ergebnis ohne Markierungsbezug ist erst recht kein Nachweis. Wer eine solche
Behauptung entkräften muss, kommt mit Prozessdokumentation weiter als mit Forensik
(Abschnitt 5).

---

## 4. Markierungen nicht entfernen

Art. 50 KI-VO enthält **kein** ausdrücklich an Betreiber gerichtetes Entfernungsverbot. Der
Kodex schließt die Lücke vertraglich — Section 1, Measure 1.2 („Non-removal of markings")
verpflichtet die Anbieter-Signatare, in ihre Nutzungsbedingungen aufzunehmen:

> "a prohibition of the intentional removal of or tampering with metadata markings by deployers
> or any other third party"

Dieselbe Measure verlangt, vorhandene Metadaten-Markierungen von Eingabe-Inhalten nach
Möglichkeit zu erhalten, und untersagt es, Umgehungswerkzeuge anzubieten oder zu bewerben:
*"Signatories will neither place or make available on the market, nor promote or advertise the use
of tools whose purpose is to circumvent the machine-readable markings"*. Ergänzend werden
Plattformen und Suchmaschinen ermutigt, Markierungen zu erhalten (Rn. 98).

Für die eigene Praxis folgt daraus:

- **Absichtliches Strippen** von Markierungen verstößt typischerweise gegen die
  Nutzungsbedingungen des Anbieters — eine vertragliche, keine bußgeldbewehrte Ebene, aber eine
  reale.
- **Unabsichtlicher Verlust** ist der Normalfall: Screenshot, Re-Export, Format-Konvertierung,
  CMS-Bildskalierung und viele Social-Uploads entfernen Metadaten beiläufig. ⚠️ Ob eine Pipeline,
  die Metadaten routinemäßig verwirft, unter das vertragliche Verbot fällt, ist ungeklärt —
  Grauzone: Einstufung mit kurzer Begründung dokumentieren (siehe [gate/](../gate/README.md)).
- **Das eigene Label muss die Kette überleben.** Rn. 12 verlangt von Betreibern in
  Produktions- und Vertriebsketten *"proportionate measures to ensure that the labelling of the
  content they have implemented pursuant to Article 50(4) AI Act is displayed in a clear and
  distinguishable manner for the targeted and foreseeable audience at the point of first
  exposure"* — ausdrücklich auch über Vertragsbedingungen mit Vertriebspartnern. Umsetzung:
  [Kapitel 04](04-kennzeichnung-form.md) (Platzierung, Crop-Festigkeit) und
  [Kapitel 05](05-agentur-und-vertraege.md) (Klauseln).

---

## 5. Konsequenz für das eigene Setup: Prozess statt Forensik

Wasserzeichen-Forensik taugt nicht als Compliance-Nachweis — in **beide** Richtungen: Ein
gefundener Marker belegt allenfalls, dass ein bestimmtes System den Inhalt berührt hat (bei
Claude ausdrücklich nur *"may have been processed"*), ein fehlender belegt gar nichts, die
Detektionswerkzeuge sind zum Stand-Datum teils noch nicht veröffentlicht — obwohl die
Leitlinien ihre Verfügbarkeit für die exponierten Personen verlangen (Rn. 75 f.) —, und
markiert wird auch, was gar nicht markierungspflichtig wäre (Abschnitt 3). Wer seine
Kennzeichnungs-Entscheidungen auf Marker-Suche stützt, stützt sie auf ein Signal, das die eigene
Frage nicht beantwortet.

Belastbar ist die andere Richtung: **dokumentieren, welcher Schritt der eigenen Pipeline KI
berührt hat und wer was geprüft hat.** Genau das leistet der Review-Record im
[gate/](../gate/README.md):

- `ki_beteiligung` hält fest, **wo** im Ablauf KI gewirkt hat — die Information, die aus keinem
  Marker herauszulesen ist.
- `scope.einstufung` und `scope.begruendung` halten die Kennzeichnungs-Entscheidung samt Grund
  fest — auch und gerade in Grauzonen.
- `content_sha256` bindet die Prüfung an den exakten Inhaltsstand: Jede Änderung nach der
  Freigabe — auch eine durch KI — invalidiert den Record und lässt die CI rot werden. Das setzt
  die Reihenfolge-Regel (Rn. 136) technisch durch: Die Gegenlese muss der **letzte**
  inhaltsändernde Schritt sein ([Kapitel 03](03-redaktions-ausnahme.md)).

**Ehrliche Grenze:** Das Gate erzwingt den **Prozess** und macht ihn nachweisbar; die inhaltliche
**Qualität** der Prüfung erzwingt es nicht. Es ist eine über das rechtliche Minimum
hinausgehende, zulässige Dokumentationsform — der Kodex verlangt in Section 2, Commitment 4
ausdrücklich **keine** Einzelfall-Dokumentation (*"This does not entail having to document
individual instances of human review or editorial control over individual text publications"*),
stellt sie aber frei (*"Signatories may record additional information on the nature of the review
or the type of involvement of the AI system in the published text"*). Ein Safe Harbour ist das
nicht.

---

## Kurz-Rekapitulation

1. Zwei Ebenen: Anbieter markiert maschinenlesbar (Abs. 2) **und** hält das Detektionsergebnis
   für die exponierte Person bereit (Rn. 75, 77); Betreiber kennzeichnet wahrnehmbar (Abs. 4).
   Die erste Ebene ersetzt die zweite nie — Rn. 117.
2. Die Frist 02.12.2026 betrifft **nur** die Anbieter-Markierung und **nur** Bestandssysteme
   (Art. 111 Abs. 4, Rn. 153); Betreiber-Pflichten gelten seit 02.08.2026 ohne Schonfrist.
3. Anbieter-Stand ist datiert und volatil (Abschnitt 2) — er ändert die eigene Pflicht nicht.
4. Ein Marker beweist weder KI-Autorenschaft noch Umfang noch Rechtsverstoß; sein Fehlen beweist
   nichts. Anbieter markieren teils breiter als die Norm verlangt (Bagatell-Ausnahme, Rn. 90–92).
5. Die Bagatell-Liste des Abs. 2 ist kein Maßstab für den Deepfake-Test des Abs. 4 — und die
   redaktionelle Ausnahme gibt es ohnehin nur für Text ([Kapitel 03](03-redaktions-ausnahme.md)).
6. Markierungen nicht entfernen: vertragliches Verbot über die Anbieter-Terms (CoP Measure 1.2);
   das eigene Label muss die Verwertungskette überleben (Rn. 12).
7. Nachweis führt der dokumentierte Prozess, nicht die Forensik → [gate/](../gate/README.md).
   Und ein Label ist kein Freifahrtschein: UWG-Irreführung, Urheber- und Persönlichkeitsrechte
   bleiben unberührt ([Mythen-FAQ](06-mythen-faq.md)).
