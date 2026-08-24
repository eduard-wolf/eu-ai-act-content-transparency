# Die redaktionelle Ausnahme: wann KI-Text ohne Label auskommt

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

Art. 50 Abs. 4 UAbs. 2 KI-VO kennt für Redaktions-, Agentur- und Marketing-Arbeit genau
eine praktisch nutzbare Tür, durch die ein KI-generierter Text **ohne Kennzeichnung**
hindurchpasst: die redaktionelle Ausnahme. Daneben steht nur die Ausnahme für gesetzlich
erlaubte Strafverfolgung (Rn. 130 iii; eigener Abschnitt Rn. 139), die hier ausgeklammert
bleibt — dazu [Kapitel 01](01-entscheidungsbaum.md). Dieses Kapitel klärt, wann die
redaktionelle Ausnahme trägt — und woran sie in der Praxis scheitert. Die technische
Umsetzung steht in [gate/](../gate/README.md), die Form der Kennzeichnung für alle Fälle,
in denen die Ausnahme **nicht** greift, in [Kapitel 04](04-kennzeichnung-form.md).

> 🔑 **Merksatz vorweg:** Die redaktionelle Ausnahme gilt **nur für Text** — für Bilder,
> Audio und Video gibt es keine. Dort zählt allein der Deepfake-Test; die Kunst-Ausnahme
> lockert nur die **Form** der Offenlegung (Art. 50 Abs. 4 UAbs. 1; Leitlinien Rn. 119–123).
> Ein Deepfake bleibt kennzeichnungspflichtig, egal wie gründlich ein Mensch ihn geprüft hat.
>
> 🧭 **Eselsbrücke:** Text fragt „Wer hat's geprüft?" — Bild fragt „Wirkt's echt?"

**Erst der Anwendungsbereich, dann die Ausnahme.** Die Ausnahme braucht nur, wer überhaupt
in der Pflicht steht: veröffentlichter Text (Rn. 131 i) **und** Angelegenheit von öffentlichem
Interesse (Rn. 131 iii). Beides prüft [Kapitel 01](01-entscheidungsbaum.md), Stufen 3 und 4.
Ein interner Report oder ein reiner Produkttext ohne Gesundheits-, Sicherheits- oder
Nachhaltigkeits-Claim fällt schon gar nicht in den Anwendungsbereich — dann ist die
Gegenlese eine Qualitätsfrage, keine Rechtsfrage.

## 1. Zwei Voraussetzungen, kumulativ

Leitlinien **Rn. 133** benennt sie ausdrücklich als *kumulativ* — fehlt eine, gilt die
Kennzeichnungspflicht:

> "Article 50(4), second subparagraph, AI Act foresees an exception to the transparency
> obligation laid down in that provision where two cumulative conditions are met: (i) the
> AI generated or manipulated text must have undergone human review or editorial control
> and (ii) a legal or natural person must hold editorial responsibility for the publication."

| # | Voraussetzung | Kern | Fundstelle |
|---|---|---|---|
| 1 | **Menschliche Überprüfung oder redaktionelle Kontrolle** | Bewusste Prüfung der *Substanz*, Faktencheck als Minimum — entweder durch fachkundige Personen (*human review*) **oder** durch eine verantwortliche redaktionelle Stelle mit Ablehnungsbefugnis (*editorial control*); einer der beiden Wege genügt | Rn. 134, Negativliste Rn. 135 |
| 2 | **Redaktionelle Verantwortung** | Benannte natürliche oder juristische Person mit *letztlicher rechtlicher* Verantwortung; Identität und Kontakt öffentlich auffindbar | Rn. 138, EMFA-Bezug Rn. 140 |

Rn. 133 lässt ausdrücklich zu, sich zum Nachweis auf **Berufs- und Standesstandards** zu
stützen: *"deployers may rely on relevant applicable professional or deontological standards
to demonstrate compliance with those requirements"*.

## 2. Voraussetzung 1 — was „geprüft" heißt (Rn. 134)

Die Leitlinien definieren zwei Wege, die dasselbe Ziel erreichen. **Einer** von beiden genügt.

**Menschliche Überprüfung (human review):**

> "Human review refers to the deliberate examination of the substance of the content by one
> or more natural persons possessing relevant knowledge and professional judgement pertaining
> to the subject matter under scrutiny (e.g. academic peer review or professional validation
> chains). **Fact-checking the accuracy of the content is a minimum requirement that should
> be part of that review.**"

**Redaktionelle Kontrolle (editorial control):**

> "Editorial control refers to the control exercised in practice by a responsible editorial
> entity (e.g. an editor-in-chief) over the content having the authority to **approve, alter
> or reject** the substance of the text based on substantive grounds (incl. fact-checking of
> information and ensuring the trustworthiness of sources)."

Vier Merkmale, aus denen sich der jeweils einschlägige Weg zusammensetzt — **bewusst** und
**Substanz** gelten für beide, **Fachkunde** trägt den human-review-Weg, die **Befugnis
abzulehnen** den editorial-control-Weg:

| Merkmal | human review (Rn. 134, Sätze 2–3) | editorial control (Rn. 134, Satz 4) |
|---|---|---|
| **bewusst** (*deliberate*) — eigener Arbeitsschritt, kein Nebenprodukt | ✅ *"deliberate examination"* | ✅ *"exercised in practice"* — gelebt, nicht auf dem Papier |
| **Substanz statt Form** — geprüft werden Behauptungen, Zahlen, Zitate und Quellen, nicht Kommasetzung | ✅ *"examination of the substance of the content"* | ✅ *"the substance of the text based on substantive grounds"* |
| **Fachkunde** (*relevant knowledge and professional judgement*) — „irgendwer aus dem Team" genügt nicht | ✅ ausdrücklich verlangt | in Rn. 134 nicht eigens genannt; die verantwortliche redaktionelle Stelle steht dafür ein |
| **Befugnis abzulehnen** — wer nur abnicken darf, aber nicht verwerfen, übt keine redaktionelle Kontrolle aus | in Rn. 134 nicht eigens genannt | ✅ wörtlich: *"authority to approve, alter or reject"* |

⚠️ **Nicht kumulieren.** Rn. 133 verlangt „human review **or** editorial control" — **einer**
der beiden Wege genügt. Ein akademisches Peer-Review erfüllt die Voraussetzung, ohne dass
irgendwo eine Redaktionsleitung mit Ablehnungsbefugnis säße; umgekehrt trägt eine
Chefredaktion die Kontrolle, ohne dass jede prüfende Person Fachautorin des Themas wäre.
Wer beide Spalten als Checkliste abhakt, prüft mehr, als das Recht verlangt — das ist
zulässig, aber keine Voraussetzung.

Der Faktencheck ist auf beiden Wegen **Minimum, nicht Kür**: beim human review ausdrücklich
als *"a minimum requirement that should be part of that review"*, bei der editorial control
als Teil der *"substantive grounds"* (*"incl. fact-checking of information …"*). Die Prüfung
der Quellen-Belastbarkeit (*"ensuring the trustworthiness of sources"*) nennt Rn. 134 dagegen
nur im editorial-control-Satz.

> 🧰 **Was daraus für das Gate folgt:** Der Review-Record fragt Felder aus **beiden** Säulen ab
> — `reviewer.fachkompetenz` (human review) neben `pruefung.quellen_geprueft` und
> `pruefung.aenderungen_vorgenommen` (editorial control). Das ist eine bewusste Übererfüllung,
> damit der Nachweis unabhängig davon trägt, auf welchen Weg man sich später beruft — **nicht**,
> weil das Recht beide kumulativ verlangte (→ [gate/](../gate/README.md)).

Für **Mediendiensteanbieter** gilt Bestandsschutz für gelebte Praxis: *"This is without
prejudice to existing review and editorial procedures and professional standards applicable
to media service providers"* (Rn. 134, ebenso Rn. 140 und Code of Practice Sec. 2,
Commitment 4 Abs. 1).

## 3. Die Verbotsliste — was **nicht** genügt (Rn. 135)

Der wichtigste Absatz des ganzen Kapitels, im Wortlaut:

> "**Superficial, solely formal or procedural checks** (e.g. spell-checking or grammatical
> correction), the **mere existence of an editorial policy**, **automated review processes**
> or **cursory editorial approval without substantive engagement** by the human reviewer or
> the editorial entity, cannot fulfil the conditions for human review or editorial control
> for the purposes of this exception."

| Nicht ausreichend (Rn. 135) | Typischer Praxisfall |
|---|---|
| Oberflächliche, rein formale oder prozedurale Checks | Lektoratsdurchlauf, Rechtschreibprüfung, Grammatik-Tool, „liest sich rund" |
| Bloße Existenz einer Redaktionsrichtlinie | KI-Policy im Wiki, an die sich im Alltag niemand hält |
| Automatisierte Review-Prozesse | „KI prüft KI", LLM-as-a-judge, Fact-Check-Bot, Linter im Build |
| Kursorische Freigabe ohne substanzielle Befassung | 20 Artikel in vier Minuten durchgewinkt; Approve-Klick als Formalie |

Daraus folgt die Doppelregel dieses Kapitels: **Substanz ohne Dokumentation** muss im
Streitfall behauptet statt belegt werden — **Dokumentation ohne Substanz** ist ein sauber
protokollierter Verstoß. Gebraucht wird beides.

## 4. Die Reihenfolge-Regel (Rn. 136)

Voller Wortlaut:

> "Where AI systems are used to modify, supplement, or reformulate content following
> editorial sign-off, the resulting content must be treated as AI-generated or manipulated
> for the purposes of Article 50(4) AI Act. Any substantive AI intervention occurring after
> the human review or editorial control process has taken place will therefore cause the
> exception to become void."

⏱️ **In einem Satz:** Jeder substanzielle KI-Eingriff **nach** der redaktionellen Freigabe
macht die Ausnahme nichtig — die Gegenlese muss der **letzte inhaltsändernde Schritt** vor
der Veröffentlichung sein.

### Was das für Pipelines und CI/CD bedeutet

Diese Regel ist der Grund, warum die Ausnahme in modernen Publishing-Setups regelmäßig
still kippt: Der Mensch gibt frei — und danach fasst die Automatik den Text noch einmal an.
Typische Schritte **nach** dem Sign-off, die die Ausnahme kosten:

- **KI-Optimierung von Überschrift, Teaser oder Meta-Description** im Build oder durch ein
  CMS-/SEO-Plugin.
- **KI-Übersetzung** in weitere Sprachen nach Freigabe des Ausgangstexts. Die Leitlinien
  lösen das im Beispielkasten nach Rn. 138 ausdrücklich: begünstigt ist die *"AI-supported
  translation of a human-written article whereby **the translation** has undergone human
  review"* — jede Sprachfassung braucht ihre **eigene** Gegenlese; die Freigabe des Originals
  trägt sie nicht.
- **Automatisch erzeugte Zusammenfassungen, TL;DR-Blöcke, FAQ-Abschnitte, Social-Snippets**,
  die beim Deploy entstehen und mitveröffentlicht werden.
- **„Content-Refresh"-Jobs und Agenten**, die veröffentlichte Artikel später aktualisieren,
  kürzen oder umformulieren.
- **KI-Features des CMS**, die beim Speichern Text auf ein Zeichenlimit kürzen oder für die
  Vorschau umschreiben.

⚠️ Wo genau „substanziell" beginnt, sagen die Leitlinien nicht abschließend: Eine reine
Formatkonvertierung, Minifizierung oder ein Encoding-Fix ändert den Inhalt nicht — eine
Umformulierung oder Kürzung schon. Grauzone — Einstufung mit kurzer Begründung dokumentieren
(siehe [gate/](../gate/README.md)).

Zwei Konsequenzen fürs Handwerk:

1. **Reihenfolge umbauen.** Alle KI-Schritte vor die Freigabe ziehen. Was danach noch läuft,
   ist entweder rein technisch (Minify, Bildkompression, Deploy) — oder der Text fällt in
   die Kennzeichnungspflicht zurück.
2. **Reihenfolge beweisbar machen.** Genau das leistet die Hash-Bindung des Review-Records:
   Jede spätere Änderung — auch durch KI, auch ein Leerzeichen — invalidiert den Record und
   lässt CI rot werden (→ [gate/](../gate/README.md)).

**Lesart dieses Playbooks** (die Leitlinien sagen dazu nichts ausdrücklich): Die Ausnahme
ist nach einem substanziellen KI-Eingriff nicht dauerhaft verloren. Wer erneut fachkundig
gegenliest und freigibt, hat wieder eine Freigabe als letzten inhaltsändernden Schritt. Das
Gate bildet das als **Re-Review** ab — neuer Hash, neues Datum, neuer Prüfvermerk.

## 5. Voraussetzung 2 — redaktionelle Verantwortung (Rn. 138)

> "This entails that said person must hold the **ultimate legal responsibility** over the
> publication of the content, including the human review or editorial control (e.g. an
> individual, editorial board, or the publishing company). To ensure public accountability
> and trust, and in line with existing media professional standards, **the identity and
> contact details** of the legal person, the natural person or the function with editorial
> responsibility **should be made publicly available on an easily findable location** (if
> not yet otherwise available)."

Genannte Orte: online die Nutzungsbedingungen oder sonstige rechtliche Hinweise, offline
Kolophon oder Impressum einer Publikation. Träger kann eine Person, ein Gremium oder das
Unternehmen sein — Hauptsache benannt und auffindbar.

**In Deutschland ist das weitgehend erledigt, bevor man anfängt:**

- **§ 5 DDG** (Digitale-Dienste-Gesetz) verlangt für geschäftsmäßige digitale Dienste Name,
  Anschrift und Angaben für eine schnelle elektronische Kontaktaufnahme — „leicht erkennbar
  und unmittelbar erreichbar … ständig verfügbar zu halten"
  ([gesetze-im-internet.de/ddg](https://www.gesetze-im-internet.de/ddg/__5.html)). Das deckt
  die Erwartung aus Rn. 138 funktional ab.
- **§ 18 Abs. 2 MStV** (Medienstaatsvertrag) verlangt bei **journalistisch-redaktionell
  gestalteten Angeboten** zusätzlich, „einen Verantwortlichen mit Angabe des Namens und der
  Anschrift zu benennen"; bei mehreren Verantwortlichen ist kenntlich zu machen, für welchen
  Teil des Dienstes wer verantwortlich ist
  ([gesetze-bayern.de, MStV § 18](https://www.gesetze-bayern.de/Content/Document/MStV-18)).

Was das Impressum **nicht** automatisch mitliefert, ist die **Zuordnung**: dass genau diese
Stelle die redaktionelle Verantwortung für die publizierten Inhalte trägt. Ein Satz genügt,
zum Beispiel: „Redaktionell verantwortlich für die Inhalte dieses Angebots: *Name, Rolle,
Kontakt*." Für Signatare des Code of Practice ist die Veröffentlichung der Kontaktdaten
verbindlich: *"Where not already publicly available, Signatories commit to publish the contact
details of the function, the natural persons or the legal persons with editorial responsibility
to ensure accountability"* (CoP Sec. 2, Commitment 4).

⚠️ **EMFA-Abgrenzung:** Rn. 140 legt den Begriff im Lichte von Art. 2 Nr. 8 EMFA
(VO (EU) 2024/1083) aus, betont aber, dass er *"remains a distinct concept that may also apply
in broader contexts and to other deployers"*. Wo die Grenze zwischen EMFA-Mediendienst und
sonstigem Publisher verläuft, ist ungeklärt — und in Deutschland zugleich eine Frage der
Aufsicht (§ 2 Abs. 8 KI-MIG, → [Kapitel 08](08-rechtsgrundlagen.md)). Grauzone — Einstufung
mit kurzer Begründung dokumentieren (siehe [gate/](../gate/README.md)).

Wer Träger ist, wenn Agentur, Freelancer und Kunde beteiligt sind, klärt
[Kapitel 05](05-agentur-und-vertraege.md): Angestellte und Dritte, die das System **auf
Weisung, unter Verantwortung und Kontrolle** der juristischen Person bedienen, sind keine
eigenen Betreiber — die Verantwortung bleibt bei der juristischen Person, unter deren
Autorität das System genutzt wird (Rn. 14). Entscheidet dagegen die Agentur selbst über
das Ob und Wie des KI-Einsatzes, ist **sie** Betreiberin und der bloß beauftragende Kunde
nicht (Beispielabsatz nach Rn. 14). Fundstellen: Leitlinien Rn. 14 (Primärfundstelle);
ebenso Kommissions-FAQ zu Art. 50 [zu verifizieren: genauer FAQ-Abschnitt zur
Betreiber-Rolle].

## 6. Die amtlichen Beispiele (Kasten nach Rn. 138)

| Ausnahme greift | Ausnahme greift **nicht** |
|---|---|
| Zeitungsartikel oder KI-Zusammenfassung unter redaktioneller Kontrolle der Chefredaktion, Verantwortung beim Verlag | Website, auf der KI-Artikel zur EU-Politik erscheinen *"without any deliberate human review or editorial control"* |
| Wissenschaftsblog mit internem Peer-Review, Verantwortung beim Forschungszentrum | KI-Artikel, die *"reviewed and edited by another AI system"* sind und bei denen ein Mensch nur *"a mere superficial, grammatical check"* macht |
| KI-generierte Sicherheitswarnungen, von einem Amtsträger freigegeben, unter Verantwortung der Katastrophenschutzbehörde | KI-generiertes Selfpublishing-Buch, das *"has not undergone any review by a competent natural or legal person (nor by the platform)"* |
| KI-Nachhaltigkeitsbericht auf der Website einer börsennotierten Gesellschaft, geprüft durch Fachfunktionen (z. B. Compliance) | |
| KI-gestützte Übersetzung eines menschlich verfassten Artikels, **wenn die Übersetzung** gegengelesen wurde | |

Das Muster ist in allen fünf Positivfällen dasselbe: **eine fachlich passende Person prüft
die Substanz** — und **eine benannte Stelle trägt dafür die Verantwortung**. Es ist kein
Medienprivileg: Behörde, Forschungseinrichtung und Unternehmen stehen gleichberechtigt in
der Liste. Weitere Einzelfälle: [Fallkatalog](02-fallkatalog.md).

## 7. Dokumentation: was gefordert ist — und was nicht

Der Code of Practice on Transparency of AI-Generated Content (10.06.2026) beschreibt in
Sec. 2, **Commitment 4** das Minimum für alle Betreiber **ohne** bestehende redaktionelle
Verfahren — also für Agenturen, Selbstständige und Marketing-Teams. Verlangt ist eine
**Policy**, nicht ein Protokoll pro Artikel:

- **lit. a** — *"The identification of the natural or legal person with editorial
  responsibility (name, role and contact details)"*.
- **lit. b** — *"An overview of the concrete organisational measures as well as human
  resources, allocated to ensure adequate human review or editorial control is performed and
  editorial responsibility is assumed before publication"*.

Und ausdrücklich klargestellt:

> "**This does not entail having to document individual instances** of human review or
> editorial control over individual text publications."

Ebenso ausdrücklich erlaubt ist mehr:

> "Signatories **may record additional information** on the nature of the review or the type
> of involvement of the AI system in the published text."

Zwei Einordnungen dazu: Der Kodex bindet unmittelbar nur **Signatare** — für alle anderen ist
er der Maßstab, an dem die erwartete Gap-Analyse gemessen wird (Rn. 148, → Abschnitt 8). Und
die Einzelfall-Doku ist **freiwillig**, aber sie ist der Unterschied zwischen *behaupten* und
*belegen*, sobald jemand nachfragt.

## 8. Kein Kodex-Beitritt? Dann „other adequate means" (Rn. 146–149)

| Weg | Was die Aufsicht erwartet |
|---|---|
| **Signatar** | *"a straightforward, predictable, and legally certain way of demonstrating compliance"* (Rn. 147); geprüft wird primär die Umsetzung des Kodex |
| **Nicht-Signatar** | Nachweis über *"other adequate means"*; erwartet wird eine **Gap-Analyse**: *"they should carry out a gap analysis that compares the measures they have implemented with the measures set out by a code of practice that is assessed as adequate"* (Rn. 148) |

Rn. 148 kündigt für Nicht-Signatare außerdem **mehr Auskunftsersuchen** an und nennt Betreiber
ausdrücklich mit: *"Deployers may also be subject to such requests with regard to their
labelling practices under Article 50(4) AI Act."* Die Kommissions-FAQ formuliert dieselbe
Folge: wer nicht beitritt, *"will have to demonstrate compliance through alternative adequate
means"* und muss mit mehr Informationsanfragen rechnen. Umgekehrt können kodexkonforme
Maßnahmen **bußgeldmindernd** wirken (Rn. 149). Beitrittsweg und Sanktionsrahmen:
[Kapitel 08](08-rechtsgrundlagen.md).

Praktisch heißt das: Wer nicht beitritt, trägt die Darlegungslast selbst — und braucht etwas,
das man einer Behörde **vorlegen** kann.

## 9. Ehrliches Fazit

**Warum ein Git/CI-Gegenlese-Schritt als Nachweis taugt.** Er liefert genau die drei Punkte,
an denen die Ausnahme hängt, in vorlegbarer Form: die **benannte, fachkundige Person**
(Rn. 134), den **Zeitanker der Freigabe** und den Beleg, dass danach **nichts mehr geändert**
wurde (Rn. 136), sowie den **Träger der redaktionellen Verantwortung** (Rn. 138). Das ist
mehr, als das Minimum verlangt — Einzelfall-Dokumentation ist gerade *nicht* vorgeschrieben
(CoP Sec. 2, Commitment 4) — und genau deshalb trägt es: Zusätzliche Aufzeichnungen sind
ausdrücklich zulässig, und für Nicht-Signatare ist ein prüfbarer Prozess die naheliegendste
Form der „other adequate means" (Rn. 148).

**Und die Gegenprobe.** Ein bloßer Approve-Klick ohne substanzielle Prüfung erfüllt die
Ausnahme **nicht** — Rn. 135 nennt *"cursory editorial approval without substantive
engagement"* ausdrücklich. Ein grünes CI-Gate über einer nicht stattgefundenen Prüfung ist
ein gut dokumentierter Verstoß. **Ehrliche Grenze:** Das Gate erzwingt den **Prozess** und
macht ihn nachweisbar; die inhaltliche Qualität der Prüfung erzwingt es nicht. Es ist eine
über das rechtliche Minimum hinausgehende, zulässige Dokumentationsform (CoP Sec. 2,
Commitment 4), **kein Safe Harbour**.

**Wenn die Ausnahme nicht greift**, gilt schlicht die Kennzeichnungspflicht: Rn. 132 legt sie
für Text ausdrücklich fest — offenzulegen ist, *"that such text has been artificially generated
or manipulated"*, und zwar *"clear and perceivable by natural persons (e.g. visible or audible
measures) without them needing to rely on any specific technical tools or performing dedicated
actions"*. Form, Wortlaut und Platzierung in [Kapitel 04](04-kennzeichnung-form.md). Dabei zwei
stehende Merksätze:

- 📎 Die maschinenlesbare Anbieter-Markierung (Art. 50 Abs. 2) ersetzt **nie** die eigene
  wahrnehmbare Kennzeichnung — Betreiber *"cannot rely on the machine-readable marking"*
  (Rn. 117 für Deepfakes; für Text gilt derselbe Maßstab über Rn. 132: *"clear and perceivable
  … without … any specific technical tools or performing dedicated actions"*;
  → [Kapitel 07](07-anbieter-markierungen.md)).
- 🚧 Ein Label ist kein Freifahrtschein: UWG-Irreführung, Urheber- und Persönlichkeitsrechte
  bleiben (→ [Kapitel 08](08-rechtsgrundlagen.md)).

Verbreitete Irrtümer zu diesem Kapitel — insbesondere „Gegenlesen befreit auch Bilder" und
„eine KI-Policy reicht" — stehen in der [Mythen-FAQ](06-mythen-faq.md). Die operative
Umsetzung steht in [gate/](../gate/README.md).
