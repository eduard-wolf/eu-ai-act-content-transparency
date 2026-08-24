# Fallkatalog: wann ja, wann nein

> ⚠️ **Kein Rechtsrat.** Dieses Playbook ist eine technische und redaktionelle Arbeitshilfe.
> Die Leitlinien der EU-Kommission (C(2026) 5054 final) sind rechtlich unverbindlich; verbindlich
> auslegen kann die KI-Verordnung nur der EuGH. Zu Art. 50 gibt es noch keine Rechtsprechung —
> dieses Playbook baut eine begründbare Position, keinen Safe Harbour. **Stand: 24.08.2026.**

## Lesehilfe

- **Spalten.** „Fall" beschreibt die Situation, „Einstufung" das Ergebnis (✅ frei · 🏷️ kennzeichnungspflichtig · ⚠️ Grauzone), „Warum" den tragenden Grund in einem Satz, „Anker" die Fundstelle. ⚠️ heißt immer: **Grauzone — Einstufung mit kurzer Begründung dokumentieren (siehe [gate/](../gate/README.md)).**
- **Zwei Prüfungen, nicht eine.** Text fragt „Wer hat's geprüft?" — Bild fragt „Wirkt's echt?". Die redaktionelle Ausnahme gibt es **nur für Text** (Art. 50 Abs. 4 UAbs. 2); bei Bild, Audio und Video entscheidet allein der Deepfake-Test, und die Kunst-Ausnahme lockert lediglich die **Form** der Offenlegung (Rn. 119–123).
- **Anker-Konvention.** „Rn." = Randnummer der Kommissions-Leitlinien C(2026) 5054 final; „Kasten nach Rn. 116/124/131/138" = die dortigen amtlichen Beispielkataloge; „Kodex" = Code of Practice on Transparency of AI-Generated Content (10.06.2026). Wörtliche Zitate stehen in der englischen Originalfassung; alle Fundstellen gesammelt in [Kapitel 08](08-rechtsgrundlagen.md). `[zu verifizieren: …]` markiert bewusst offene Punkte — dort deckt keine amtliche Quelle den Fall; erfunden wird nichts.
- **Was ein Label nicht leistet.** Es ist kein Freifahrtschein: UWG-Irreführung, Urheber- und Persönlichkeitsrechte bleiben unberührt (Rn. 124, 127–129). Und die maschinenlesbare Anbieter-Markierung nach Art. 50 Abs. 2 ersetzt die eigene wahrnehmbare Kennzeichnung nie — *"deployers cannot rely on the machine-readable marking"* (Rn. 117; [Kapitel 07](07-anbieter-markierungen.md)).
- **Grenzen des Katalogs.** Jede Zeile ordnet den **typischen** Fall ein, sie sagt kein Ergebnis zu: Kontext, vorhersehbares Publikum und Aufmachung können jeden Fall kippen. Systematisch prüfen: [Entscheidungsbaum](01-entscheidungsbaum.md) · Form der Kennzeichnung: [Kapitel 04](04-kennzeichnung-form.md) · typische Irrtümer: [Kapitel 06](06-mythen-faq.md).

---

## 1. Bilder in Werbung und E-Commerce

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| Reales Produkt (z. B. Auto) vor KI-generiertem Hintergrund | ✅ frei | Der Hintergrund verändert die Produktwahrnehmung nicht — *"as long as the ad is not likely to mislead the audience about the product's actual representation and its characteristics and use"*. | Kasten nach Rn. 116 |
| Belichtung, Farbkorrektur, Entrauschen, kosmetische Retusche; vorhandene Produkte freigestellt, arrangiert, skaliert; Hintergrund erweitert | ✅ frei | Rn. 116 zählt genau diese Eingriffe *"applied in product advertisements or packaging"* zu den geringfügigen mit nur minimaler Wirkung auf die Authentizitätswahrnehmung. | Rn. 116 |
| KI-Produktbild zeigt das Produkt anders, schöner oder hochwertiger als real — auch: KI-Food-Foto eines Gerichts, das so nicht serviert wird | 🏷️ Label | Es täuscht *"as to the actual product appearance, characteristics or use (e.g. … more appealing or with improved quality than in real life)"*; zusätzlich UWG-Irreführung. | Kasten nach Rn. 116 |
| Werbe-Porträt: Hintergrund aus rein ästhetischen Gründen ersetzt | ⚠️ Grauzone → i. d. R. frei | *"adjustments or replacements of backgrounds for clearly aesthetic purposes"* sind geringfügig — es kippt, sobald der Ort selbst Teil der Werbeaussage ist („aufgenommen bei uns vor Ort"). Begründung dokumentieren (gate/). | Rn. 116 |
| Immobilienfoto: Mülleimer oder parkendes Auto entfernt | ⚠️ Grauzone → i. d. R. frei | Reines Hintergrunddetail in der Linie *"editing background details (e.g. removing passerby)"*. Begründung dokumentieren (gate/). | Rn. 116 |
| Immobilienfoto: Riss, Feuchtefleck oder Strommast am Objekt wegretuschiert | 🏷️ Label | Der Eingriff betrifft das beworbene Objekt selbst und täuscht über dessen Zustand — dieselbe Logik wie beim manipulierten Produktbild; zusätzlich UWG. | Rn. 116; Kasten nach Rn. 116 |
| Synthetisches Model trägt ein real verkauftes Produkt im Onlineshop | 🏷️ Label | *"realistic AI-generated human avatars or personas"* sind Personen im Sinne der Definition; Passform- und Trageeindruck sind zusätzlich UWG-relevant. | Rn. 113 iii |
| KI-generierter, realistisch wirkender Ort: Hotel-Lobby, Ferienobjekt, Restaurantraum, Praxisräume | 🏷️ Label | *"'Places' is to be understood as realistic locations"* — ein Raum, der so nicht existiert, aber plausibel existieren könnte, erfüllt die Deepfake-Definition genauso wie eine erfundene Person; wer ihn als den eigenen zeigt, täuscht zusätzlich nach UWG. | Rn. 113 ii, iii |
| Werbevideo mit KI-Darstellung eines Prominenten, mit synthetischem Influencer beim Produkttest oder als Teleshopping-Szene | 🏷️ Label (Standardform) | Deepfake-Beispiel der Leitlinien — und ausdrücklich **kein** künstlerisches oder fiktionales Werk, die werkgerechte Erleichterung greift nicht; Persönlichkeits- und Markenrechte kommen hinzu. | Kasten nach Rn. 116; Kasten nach Rn. 124; Rn. 128–129 |
| Erkennbar unrealistische Werbeszene (Mäuse streiten in Menschensprache über Käse) | ✅ frei | Erfüllt das Kriterium „existierend/plausibel existierend" nicht und hat kein Täuschungspotenzial. | Kasten nach Rn. 116; Rn. 113 ii |
| Derselbe Bildeingriff von Hand, ohne KI-Werkzeug | ✅ frei nach KI-VO | Art. 50 knüpft am Einsatz eines KI-Systems an — aber generative Funktionen in Bildbearbeitungs-Software sind KI-Einsatz, und die UWG-Irreführung gilt werkzeugneutral (das Deepfake-Kriterium ist vom Irreführungsbegriff der UGP-Richtlinie ausdrücklich unabhängig). | Art. 50 Abs. 4 UAbs. 1; Fn. 32 |

## 2. Bilder journalistisch und dokumentarisch

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| Pressefoto: Zuschnitt, Tonwerte, Entrauschen, Kompression per KI | ✅ frei | Technische Standardbearbeitung ohne Wirkung auf die Authentizitätswahrnehmung. | Rn. 116 |
| Pressefoto: störender Passant im Hintergrund entfernt | ⚠️ Grauzone | Rn. 116 nennt *"removing passerby"* als geringfügig, legt für journalistische Bilder aber den strengeren Maßstab an — hier entscheidet, ob die Szene noch dieselbe Situation belegt. Begründung dokumentieren (gate/). | Rn. 116 |
| Journalistisches Bild: Hintergrunddetails substanziell verändert | 🏷️ Label | *"substantial AI-powered editing of background details of journalistic images beyond standard technical, editorial practices may negatively affect a person's perception of the content's authenticity and truthfulness"*. | Rn. 116 a. E. |
| KI-manipuliertes Bild zweier realer Profisportler vor einem stadionähnlichen Gebäude | 🏷️ Label | Reale, erkennbare Personen in einer Szene, die es so nie gegeben hat. | Kasten nach Rn. 116 |
| Dokumentarfilm: Personen, Objekte, Orte oder Ereignisse nicht authentisch dargestellt | 🏷️ Label | Rn. 114 nennt *"non-authentic or untruthful representation of persons, objects, places or events in documentaries"* ausdrücklich als wesentlichen Eingriff. | Rn. 114 |
| Wissenschaftssendung: Moderator vor KI-Animation des Gletscherrückgangs | ✅ frei | Erkennbar illustrierende Animation historischer Stände, keine Aufnahme eines realen Vorgangs. | Kasten nach Rn. 116 |
| Stilisierte Infografik oder Illustration im Blogbeitrag | ✅ frei | Kein fotorealistisches Abbild einer realen Szene — das vierte Deepfake-Kriterium fehlt. Achtung: label-frei heißt nicht prüf-frei, die Faktenaussage der Grafik bleibt zu prüfen. | Rn. 113 iv; Rn. 114 |
| Erkennbar unmögliche Bildszene, z. B. eine Sphinx, die über den Eiffelturm fliegt | ✅ frei | Wörtliches Negativbeispiel. Motive, die *"defy the laws of nature or physics"*, haben *"no potential to mislead"* — das Kriterium „existierend/plausibel existierend" fehlt. | Kasten nach Rn. 116; Rn. 113 ii |
| KI-Cartoon eines vorhandenen Bildes von einem historischen Ereignis | ✅ frei | Wörtliches Negativbeispiel: *"AI-generated cartoon of a pre-existing image depicting a historical event"* — die Cartoon-Form nimmt dem Bild den fotorealistischen Authentizitätsanspruch. Es kippt, sobald die Darstellung wieder fotorealistisch wird (dann Rn. 114). | Kasten nach Rn. 116; Rn. 113 iv |
| Kolorierung von Schwarz-Weiß-Archivmaterial | ⚠️ Grauzone → im Zweifel kennzeichnen | Rn. 116 nennt nur *"colour correction"* (Farbkorrektur); die Kolorierung von S/W-Material ist amtlich nicht eingestuft — und die Wirkung auf die Authentizitätswahrnehmung spricht für ein Label. Begründung dokumentieren (gate/). | Rn. 116 |
| Satirisch verfremdetes Bild einer realen Politikerin, erkennbar humoristische Kritik | 🏷️ Label (werkgerechte Form) | Satire ist Deepfake mit abgeschwächter **Form**, nicht mit Befreiung; fehlt der satirische Zweck (Prominente in nie geschehenen Handlungen), gilt die Standardform. | Kasten nach Rn. 124; Rn. 119, 123 |

## 3. Audio, Stimme und Musik

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| Voice-Cloning der Stamm-Moderatoren eines Nachrichten-Podcasts | 🏷️ Label (hörbar) | Wörtliches Deepfake-Beispiel der Leitlinien. | Kasten nach Rn. 116 |
| Eigene Stimme mit Einwilligung geklont (z. B. fremdsprachige Hörbuchfassung) | 🏷️ Label (hörbar) | Die Stimme ist ein *"personal characteristic"* einer existierenden Person; die Einwilligung klärt Persönlichkeitsrecht und Datenschutz, nicht die Transparenzpflicht gegenüber dem Publikum. | Rn. 113 iii; Art. 50 Abs. 4 UAbs. 1 |
| KI-Stimmen für fiktive Figuren (Hörbuch, Spiel, Animation) ohne Täuschung über die Identität der Sprecher | ✅ frei | Wörtliches Negativbeispiel: *"when there is no deception as to the identity of the narrators"*. | Kasten nach Rn. 116 |
| Frei erfundene, menschlich klingende KI-Stimme im Werbespot | ⚠️ Grauzone → im Zweifel kennzeichnen | Auch nicht real existierende Personen erfüllen das Kriterium, wenn sie *"can plausibly exist"* — eine Sprecheraufnahme wirkt regelmäßig authentisch. Begründung dokumentieren (gate/). | Rn. 113 ii |
| Radiobeitrag: Pegel normalisiert, entrauscht, komprimiert — gesprochene Worte unverändert | ✅ frei | Wörtliches Negativbeispiel *"without altering the actual words spoken by speakers or their way of speaking"*. | Kasten nach Rn. 116 |
| KI-Instrumental als Musikbett unter menschlicher Moderation | ✅ frei | Bildet kein existierendes Subjekt ab — die Ähnlichkeits-Kriterien sind nicht erfüllt. | Rn. 113 i–iii |
| KI-Musik im erkennbaren Stil existierender Künstler | 🏷️ Label (werkgerechte Form) | Von den Leitlinien als künstlerisch/kreativ eingestuft: Form abgeschwächt, Pflicht bleibt; Urheber- und Persönlichkeitsrechte bleiben unberührt. | Kasten nach Rn. 124; Rn. 124 |
| Reines Audio, Hinweis nur in Dateibeschreibung oder Metadaten | 🏷️ unzureichend | Die Offenlegung muss ohne technische Hilfsmittel und ohne gesonderte Aktion wahrnehmbar sein — bei reinem Audio also hörbar, am Anfang und nach Unterbrechungen. | Rn. 117, 142; Kodex Sub-measure 1.2.3 |
| Video mit realem Bild, aber KI-generierter Tonspur | 🏷️ Label — sichtbar **und** hörbar | Ist (auch) die Tonspur der Deepfake, regelt der Kodex genau diesen Fall: Sub-measure 1.2.2 lit. e verlangt bei Audio-Deepfakes, *"when a screen is available"*, zusätzlich zum hörbaren Hinweis eine visuelle Offenlegung; lit. d lässt hörbare Hinweise umgekehrt nur **zusätzlich** zum visuellen Label zu — kein Ermessen. Das deckt sich mit Rn. 142: Wer nur hört (Hintergrundwiedergabe, Bildschirm aus, Podcast-Nutzung), nimmt ein rein visuelles Label unter normalen Nutzungsbedingungen nicht wahr (*"easily overlooked or missed by natural persons under normal exposure or interaction conditions"*). Offen bleibt allein die vorgelagerte Frage, ob die Tonspur überhaupt Deepfake ist — diese Einstufung im Zweifel dokumentieren (gate/). Form: [Kapitel 04, Abschnitt 4.3](04-kennzeichnung-form.md#43-audio). | Rn. 142, 143; Kodex Sub-measure 1.2.2 lit. d, e |

## 4. Video

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| KI-Video einer politikerähnlichen Person, die eine Rede hält | 🏷️ Label | Wörtliches Deepfake-Beispiel der Leitlinien. | Kasten nach Rn. 116 |
| Spielfilm: KI-Hintergründe, Spezialeffekte, Pre- und Postproduktion; reale Schauspieler vor KI-Kulisse | ✅ frei | Standard-Produktionsprozesse lassen den Inhalt beim Publikum nicht fälschlich authentisch erscheinen. | Rn. 114; Kasten nach Rn. 116 |
| Voll KI-generierte Schauspieler, digitale Repliken realer oder verstorbener Personen, De-Aging, simulierte Performances | 🏷️ Label (im evident fiktionalen Werk werkgerechte Form) | Rn. 114 nennt genau diese Eingriffe als wesentlich; im Kino- oder Streaming-Werk genügt eine Offenlegung, die den Werkgenuss nicht beeinträchtigt (z. B. Abspann). | Rn. 114; Kasten nach Rn. 124; Rn. 123 |
| Fiktive Umgebungen (Wälder, Burgen) im Videospiel | ✅ frei | Wörtliches Negativbeispiel — erkennbar erfundene Spielwelt. | Kasten nach Rn. 116 |
| Spielgrafik mit Deepfake-Simulationen realer, existierender Personen | 🏷️ Label (werkgerechte Form) | Als *"analogous creative/fictional work"* eingestuft: Erleichterung nur bei der Form. | Kasten nach Rn. 124 |
| Realistische Nachstellung historischer Gewaltereignisse, verbreitet auf öffentlichen Plattformen | 🏷️ Label (Standardform) | Ausdrücklich kein künstlerisches, satirisches oder fiktionales Werk — die abgeschwächte Form greift nicht. | Kasten nach Rn. 124 |
| Upload auf eine sehr große Plattform, „KI-generiert"-Schalter gesetzt | ⚠️ Grauzone → trägt nur dort | Stellt die Plattform ein Label-Werkzeug bereit, das eine klare und unterscheidbare Offenlegung erzeugt, darf man sich darauf *"within the context of the VLOP or VLOSE used"* stützen — *"without prejudice to the responsibility of the deployers"*, und für Zweitverwertung außerhalb (eigene Website, Repost, Bildersuche) trägt der Schalter nicht. Begründung dokumentieren (gate/). | Rn. 126 |
| Label nur am Videoanfang, Beitrag wird als Clip oder Screenshot weiterverbreitet | ⚠️ Grauzone | Jede Person muss spätestens bei **ihrer** ersten Exposition informiert werden; ist absehbar, dass Personen nicht am Anfang einsteigen, reicht der Hinweis dort nicht — Wiederholung in Intervallen, mindestens nach Unterbrechungen. Begründung dokumentieren (gate/). | Rn. 143; Kodex Sub-measure 1.2.2 lit. b |

## 5. Text

Nur hier existiert die redaktionelle Ausnahme (Art. 50 Abs. 4 UAbs. 2; Kriterien und Nachweis in [Kapitel 03](03-redaktions-ausnahme.md)) — und sie hält nur, wenn die Gegenlese der **letzte inhaltsändernde Schritt** war (Rn. 136).

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| KI-Zusammenfassung eines menschlichen Artikels über einen Gemeinderatsbeschluss auf einer Zeitungswebsite | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | In-Scope-Beispiel: veröffentlicht, informierend, öffentliches Interesse (Kommunalpolitik). | Kasten nach Rn. 131 |
| KI-bearbeiteter Lifestyle-Artikel über die Wirkung verschiedener Diäten auf eine Krankheit | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | Gesundheit ist ausdrücklich öffentliches Interesse — auch auf einer Lifestyle-Seite; der typische SEO-Ratgeber liegt näher an dieser Zeile, als Marketing-Teams annehmen. | Kasten nach Rn. 131 |
| KI-Meldung eines Wetterdienstes mit Unwetterwarnung auf Social Media | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | In-Scope-Beispiel (öffentliche Sicherheit). | Kasten nach Rn. 131 |
| KI-bearbeiteter Unternehmensbericht mit Investoreninformationen auf der Website eines börsennotierten Unternehmens | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | Wörtliches In-Scope-Beispiel: *"AI-manipulated corporate reports published on a listed company's website containing investor information"*; wirtschaftliche und finanzielle Entwicklungen stehen ausdrücklich in der Liste der Angelegenheiten von öffentlichem Interesse. | Kasten nach Rn. 131; Rn. 131 iii |
| KI-generierter Fantasy-Roman | ✅ frei | Out-of-Scope-Beispiel: informiert nicht über Angelegenheiten von öffentlichem Interesse. | Kasten nach Rn. 131 |
| Werbe- oder Produkttext ohne Gesundheits-, Sicherheits- oder Nachhaltigkeitsangaben | ✅ frei | Out-of-Scope-Beispiel — der Klammerzusatz des Katalogs ist zugleich die eingebaute Rückausnahme. | Kasten nach Rn. 131 |
| Produkttext mit Gesundheits-, Verbrauchersicherheits- oder Nachhaltigkeits-Claim | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | Genau diese Claims nimmt der Out-of-Scope-Katalog aus, und die Themen stehen zugleich in der Liste der Angelegenheiten von öffentlichem Interesse. | Kasten nach Rn. 131; Rn. 131 iii |
| Nachrichtenzusammenfassung eines Chatbots nur für die fragende Person — dieselbe Antwort später als Website-Beitrag | ✅ frei → 🏷️ ab Veröffentlichung | Solange nur die anfragende Person sie sieht, fehlt das Merkmal *"published"*; mit der Veröffentlichung für einen unbestimmten, größeren Leserkreis ist es erfüllt. | Kasten nach Rn. 131; Rn. 131 i |
| KI-Text eines Beraters für die individuelle Mandanten- oder Kundenberatung | ✅ frei | Out-of-Scope-Beispiel: kein Publikum, keine Veröffentlichung. | Kasten nach Rn. 131 |
| Sehr kurze KI-Texte: Teaser, Meta-Description, einzelne Phrasen | ⚠️ Grauzone | *"short texts which do not materially communicate knowledge, opinions or facts, cannot be deemed to inform the public"* — trägt der Teaser die Aussage selbst, kippt es; der Kodex lässt für Kurztexte einen kontextuellen Hinweis in der Oberfläche genügen. Begründung dokumentieren (gate/). | Rn. 131 ii; Kodex Sub-measure 1.2.2 lit. f |
| KI-Artikel zur Unionspolitik ohne jede Gegenlese veröffentlicht | 🏷️ Label | Wörtliches Negativbeispiel zur redaktionellen Ausnahme. | Kasten nach Rn. 138 |
| KI-Text von einer zweiten KI geprüft, der Mensch macht nur einen Rechtschreib- und Grammatikcheck | 🏷️ Label | *"automated review processes or cursory editorial approval without substantive engagement"* erfüllen die Ausnahme nicht. | Rn. 135; Kasten nach Rn. 138 |
| Selbstverlegtes KI-Sachbuch auf einer Handelsplattform, von niemandem inhaltlich geprüft | 🏷️ Label | Wörtliches Negativbeispiel: ein *"AI-generated, self-published book on climate change, made available on an e-commerce platform that has not undergone any review by a competent natural or legal person (nor by the platform)"* — die Plattform ersetzt die Gegenlese nicht. Vorgelagert bleibt die Scope-Frage: beim Klima-Sachbuch ja (Umweltschutz), beim Fantasy-Roman nein. | Kasten nach Rn. 138; Kasten nach Rn. 131 |
| KI-Entwurf fachlich gegengelesen (mindestens Faktencheck), verantwortliche Person benannt und öffentlich auffindbar | ✅ kein Label, Nachweis aufbewahren | Beide kumulativen Bedingungen erfüllt: substanzielle Prüfung durch eine sachkundige Person **und** redaktionelle Verantwortung. | Rn. 133, 134, 138 |
| Nach der redaktionellen Freigabe noch einmal KI-Umformulierung oder KI-„SEO-Politur" | 🏷️ Label | *"Any substantive AI intervention occurring after the human review or editorial control process has taken place will therefore cause the exception to become void."* Genau diese Reihenfolge sichert das [Editorial-Gate](../gate/README.md) technisch ab. | Rn. 136 |
| KI-gestützte Übersetzung eines menschlich verfassten Artikels, Übersetzung menschlich geprüft | ✅ kein Label | Wörtliches Positivbeispiel der Ausnahme. | Kasten nach Rn. 138 |
| KI-Nachhaltigkeitsbericht auf der Website eines börsennotierten Unternehmens, von der Fachfunktion (z. B. Compliance) geprüft | ✅ kein Label | Wörtliches Positivbeispiel: *"human review by professionals in relevant functions"*. | Kasten nach Rn. 138 |
| KI-generierte Sicherheitswarnung, vor der Verbreitung von einer Amtsperson freigegeben, unter Verantwortung der zuständigen Behörde | ✅ kein Label, Nachweis aufbewahren | Wörtliches Positivbeispiel: *"AI-generated public safety warnings approved by a public official before being distributed to citizens, under the responsibility of the relevant public agency for civil protection"* — dieselbe Meldung ohne diese Freigabe fällt unter die Zeile zur Unwetterwarnung. | Kasten nach Rn. 138 |
| Website-Chatbot begrüßt Besucher ohne Hinweis auf die KI | 🏷️ eigene Pflicht | Art. 50 Abs. 1 verlangt den Hinweis spätestens bei der ersten Interaktion — in den Chat, nicht ins Impressum oder in die AGB. | Art. 50 Abs. 1; Rn. 142, 143 |

## 6. Interne Inhalte und Publikum

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| Interne Präsentation mit KI-Illustrationen | ✅ frei | Illustrationen sind keine Deepfakes, und für Text fehlt das Merkmal der Veröffentlichung. | Rn. 113 iv; Rn. 131 i |
| Intranet-Text, interne Rundmail, geschlossene Kleingruppe im Messenger | ✅ frei | *"organisation-internal texts or communications"* und private Korrespondenz gelten nicht als veröffentlicht. | Rn. 131 i |
| Internes Deepfake-Video: synthetischer CEO-Avatar gratuliert der Belegschaft | 🏷️ Label — auch intern | Der Deepfake-Tatbestand verlangt keine Veröffentlichung (Rn. 112), und der Katalog nennt genau diesen Fall; exponiert sind die Mitarbeitenden. | Rn. 112; Kasten nach Rn. 116 |
| Deepfake nur im Abo-Bereich oder Firmen-Newsletter | 🏷️ Label (Publikum = dieser Kreis) | Rn. 115 erlaubt nur, keine breite Öffentlichkeit zu unterstellen — gegenüber dem tatsächlichen Publikum bleibt die Pflicht bestehen. | Rn. 115 |
| Kunden-Newsletter mit KI-Illustration und redaktionell geprüftem Text | ⚠️ Grauzone → i. d. R. frei | Die Illustration ist kein Deepfake; ob ein großer, offener Verteiler schon „veröffentlicht" ist, entscheidet Rn. 131 i — bei offener Anmeldung und Web-Archiv eher ja. Begründung dokumentieren (gate/). | Rn. 115; Rn. 131 i |
| Kinder, ältere Menschen oder Personen mit geringer KI-Kompetenz sind vorhersehbar im Publikum | 🏷️ strengerer Maßstab | Erscheint der Inhalt **diesem Teil** des vernünftigerweise vorhersehbaren Publikums authentisch, genügt das für die Einstufung als Deepfake. | Rn. 115 |
| Bild auf öffentlicher Website, Label nur in der Bildunterschrift | ⚠️ Grauzone | Unmittelbar mitangezeigt ist die Bildunterschrift wahrnehmbar; Bildersuche, Repost und Zuschnitt trennen sie jedoch vom Bild — im Bild platziert übersteht das Label die Zweitverwertung. Begründung dokumentieren (gate/). | Rn. 117, 142; Kodex Sub-measure 1.2.2 lit. a |

## 7. Alt-Inhalte und Zeitliches

| Fall | Einstufung | Warum | Anker |
|---|---|---|---|
| Kampagne von vor dem 02.08.2026 läuft unverändert weiter | ✅ frei | Wörtlich freigestellt sind nur zwei Gruppen: *"AI-generated or manipulated outputs falling within the scope of Article 50(2) AI Act and deep fakes within scope of Article 50(4), first subparagraph, AI Act, which have been generated or manipulated before 2 August 2026 do not need to be marked or labelled retroactively."* Für Text gilt die Freistellung nur, wenn er vor dem Stichtag auch schon **veröffentlicht** war — sonst greift die Zeile „Vor dem Stichtag erzeugter Text, erst danach veröffentlicht". Kein Freibrief für Alt-Inhalte schlechthin. | Rn. 154 |
| Vor dem Stichtag erzeugtes Bild oder Video wird danach neu ausgespielt | ⚠️ Grauzone | Rn. 154 knüpft für Deepfakes am Erzeugungs-, für Texte am Veröffentlichungsdatum an; ob eine neue Ausspielung eine eigene Pflicht auslöst, ist nicht ausdrücklich geregelt — die Kommission ermutigt zur freiwilligen Kennzeichnung. Begründung dokumentieren (gate/). | Rn. 154 |
| Altmaterial wird nach dem Stichtag erneut mit KI bearbeitet | 🏷️ Label | Die Bearbeitung ist eine neue KI-Manipulation nach Geltungsbeginn — der Altbestandsschutz greift dafür nicht. | Rn. 153, 154 |
| Vor dem Stichtag erzeugter Text, erst danach veröffentlicht | 🏷️ Label, wenn die Redaktions-Ausnahme nicht greift | *"if texts that have been generated or manipulated before 2 August 2026 are published on or after that date, they need to be labelled."* | Rn. 154 |
| Bestehendes Archiv ungelabelter KI-Inhalte | ✅ keine Pflicht, freiwillig empfohlen | Nachträgliches Kennzeichnen ist erwünscht, aber ohne *"disproportionate efforts … such as auditing of pre-existing content databases or modifying already printed product packaging"*. | Rn. 154 |
| Genutztes Bestandsmodell trägt bis 02.12.2026 noch keine maschinenlesbare Markierung | ✅ für den Anbieter — ohne Wirkung auf die eigene Pflicht | Die Übergangsfrist betrifft ausschließlich die Anbieter-Markierung nach Art. 50 Abs. 2 bei vor dem 02.08.2026 in Verkehr gebrachten Systemen; die eigene wahrnehmbare Kennzeichnung schuldet man unabhängig davon ab dem 02.08.2026. | Rn. 153; Rn. 117 |

---

## Die drei häufigsten Fehlgriffe

**1. „Objekte wegretuschieren ist immer kennzeichnungspflichtig."**
In dieser Pauschalität falsch. Rn. 116 zählt *"editing background details (e.g. removing
passerby)"*, Lichtanpassungen, Farbkorrektur, Entrauschen — und in Produktwerbung und auf
Verpackungen ausdrücklich *"adjustments or replacements of backgrounds for clearly aesthetic
purposes"* — zu den geringfügigen Eingriffen. **Die echte Trennlinie verläuft nicht zwischen
„entfernt" und „nicht entfernt", sondern zwischen Hintergrund-Ästhetik und Produkt bzw. Subjekt.**
Solange nur die Umgebung aufgeräumt wird, bleibt es geringfügig; sobald der Eingriff das beworbene
Objekt selbst betrifft — der Mangel am Haus, die Portion auf dem Teller, das Produkt *"more
appealing or with improved quality than in real life"* —, ist es ein Deepfake **und** ein UWG-Fall.
Journalistische Bilder liegen von vornherein am strengen Ende (*"beyond standard technical,
editorial practices"*). Weil die Grenze am Kontext hängt und nicht am Werkzeug, ist die
dokumentierte Einzelfallbegründung hier mehr wert als jede Faustregel. → Rn. 116; Kasten nach Rn.
116.

**2. „Intern brauchen wir nichts zu kennzeichnen."**
Das gilt nur für **Text**. Die Textpflicht setzt Veröffentlichung voraus — Intranet, interne
Kommunikation und geschlossene Kleingruppen sind nicht *"published"* (Rn. 131 i). Der
Deepfake-Tatbestand kennt dieses Merkmal überhaupt nicht: Er verlangt nur KI-System, berufliche
Nutzung und Deepfake (Rn. 112), und der amtliche Katalog nennt ausdrücklich das *"AI-generated video
featuring a realistic synthetic avatar of a company CEO congratulating employees"*. Ein Avatar-Video
an die Belegschaft ist also auch intern zu kennzeichnen — eine Zeile im Intro genügt praktisch.
Entlastend bleibt allein der Publikumsmaßstab: Wer nur einen Abo-Bereich oder Firmen-Newsletter
bespielt, muss keine breite Öffentlichkeit unterstellen (Rn. 115). → Rn. 112, 115, 131 i; Kasten
nach Rn. 116.

**3. „Die Sprecherin hat eingewilligt, also ist der Stimmklon frei."**
Zwei verschiedene Rechtsfragen, die regelmäßig verwechselt werden. Die Einwilligung räumt
Persönlichkeits- und Datenschutzfragen aus — sie ist die Voraussetzung dafür, dass die Stimme
überhaupt geklont werden **darf** (Rn. 127, 129). Die Transparenzpflicht schuldet man dagegen nicht
der Sprecherin, sondern dem Publikum: Es soll erkennen, dass es eine synthetische Aufnahme hört.
„Persons" umfasst ausdrücklich *"personal characteristics or expressions, such as image, voice,
behaviour, performances etc."* (Rn. 113 iii). Der Stimmklon einer real existierenden Person bleibt
deshalb kennzeichnungspflichtig. Rn. 117 verlangt eine Offenlegung, die ohne technische Hilfsmittel
wahrnehmbar ist — *"e.g. with visible or audible labels"* —, schreibt den Kanal aber nicht für jeden
Fall vor; der Kodex tut es: Bei **reinem Audio** bleibt nur der hörbare Weg (Rn. 142; Kodex
Sub-measure 1.2.3 — der Fall *"where visual disclosure is not possible"*), bei Video mit geklonter
Tonspur verlangt Sub-measure 1.2.2 lit. e, sobald ein Bildschirm vorhanden ist, zusätzlich zum
hörbaren Hinweis das sichtbare Label, und lit. d lässt hörbare Hinweise nur ergänzend zum visuellen
Label zu — beide Kanäle also, kein Ermessen ([Kapitel 04, Abschnitt
4.3](04-kennzeichnung-form.md#43-audio)). Frei sind allein KI-Stimmen für fiktive Figuren, *"when
there is no deception as to the identity of the narrators"*. → Rn. 113 iii, 117, 127, 129, 142;
Kasten nach Rn. 116; Kodex Sub-measure 1.2.2 lit. d, e und 1.2.3.

---

Weiter: Prüfreihenfolge im [Entscheidungsbaum](01-entscheidungsbaum.md) · Kriterien und Nachweis der Ausnahme in [Kapitel 03](03-redaktions-ausnahme.md) · Wortlaut und Platzierung der Labels in [Kapitel 04](04-kennzeichnung-form.md) · Zuständigkeit in Auftragsketten in [Kapitel 05](05-agentur-und-vertraege.md) · Fundstellen in [Kapitel 08](08-rechtsgrundlagen.md).
