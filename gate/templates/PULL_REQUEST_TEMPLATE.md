# Redaktionelle Freigabe

> Merksatz: **Text fragt „Wer hat's geprüft?" — Bild fragt „Wirkt's echt?"**
> Einstufung offen? Erst durch den [Entscheidungsbaum](../../playbook/01-entscheidungsbaum.md),
> dann diesen PR öffnen. Feldliste und Prüfskript: [gate/](../README.md).

**Inhaltsdatei(en):**
**Review-Record(s):**
**Einstufung in einem Satz:**

## Text — redaktionelle Ausnahme (Art. 50 Abs. 4 UAbs. 2)

Die Ausnahme gilt **nur für Text**. Alle Punkte sind kumulativ.

- [ ] **Substanzielle Prüfung** durch eine namentlich benannte Person mit einschlägiger Sachkunde.
      Rechtschreib- und Grammatikkorrektur, eine bloße Redaktionsrichtlinie, ein automatisierter
      Review („KI prüft KI") oder kursorisches Abnicken genügen **nicht** (Rn. 135).
- [ ] **Faktencheck erledigt** — Mindestanforderung der Ausnahme (Rn. 134).
- [ ] **Quellen geprüft**, Änderungen und Streichungen im Record beschrieben.
- [ ] **Redaktionell Verantwortliche/r benannt** und mit Kontakt öffentlich auffindbar,
      z. B. im Impressum (Rn. 138).
- [ ] **Review-Record aktualisiert:** `content_sha256` auf die freigegebene Fassung neu berechnet
      (`shasum -a 256 <datei>`), `reviewed_at` gesetzt.
- [ ] **Keine KI-Änderung nach dem Review.** Jeder substanzielle KI-Eingriff nach der Freigabe macht
      die Ausnahme nichtig (Rn. 136) — auch automatische Kürzung, Übersetzung oder SEO-Optimierung.
      Die Gegenlese war der letzte inhaltsändernde Schritt.

## Bild, Audio, Video — keine redaktionelle Ausnahme

- [ ] **Deepfake-Einstufung** vorgenommen und in `scope.begruendung` begründet (Rn. 113).
- [ ] Falls Deepfake: **wahrnehmbares Label gesetzt**, spätestens bei der ersten Exposition, klar und
      unterscheidbar (Art. 50 Abs. 5). Eine maschinenlesbare Anbieter-Markierung oder ein
      Wasserzeichen ersetzt die eigene Kennzeichnung **nicht** (Rn. 117).
- [ ] Label übersteht die gängigen Zuschnitte →
      [tools/label-crop-check](../../tools/label-crop-check/README.md).

## Bevor gemergt wird

- [ ] `node gate/scripts/check-review-record.mjs <verzeichnis>` läuft grün.
- [ ] **Kein Freifahrtschein:** Ein Label heilt keine Irreführung. UWG, Urheber- und
      Persönlichkeitsrechte sowie Plattformregeln wurden getrennt geprüft.
- [ ] ⚠️ Grauzone? Dann ist die Begründung im Record der eigentliche Nachweis — zwei, drei Sätze,
      mit Fundstelle.

---

Ehrliche Grenze: Dieses Gate erzwingt den **Prozess** und macht ihn nachweisbar; die inhaltliche
Qualität der Prüfung erzwingt es nicht. Es ist eine über das rechtliche Minimum hinausgehende,
zulässige Dokumentationsform (Code of Practice on Transparency of AI-Generated Content, Sec. 2,
Commitment 4), kein Safe Harbour. **Stand: 24.08.2026.**

<!-- Beim Kopieren nach .github/PULL_REQUEST_TEMPLATE.md die relativen Links anpassen. -->
