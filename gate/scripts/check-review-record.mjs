#!/usr/bin/env node
/**
 * check-review-record.mjs — Editorial Gate für die redaktionelle Ausnahme
 * (Art. 50 Abs. 4 UAbs. 2 der Verordnung (EU) 2024/1689).
 *
 * Prüft für jede Markdown-Datei eines Verzeichnisses, ob daneben ein gültiger
 * Review-Record „<name>.review.json" liegt und ob dessen SHA-256 noch auf die
 * aktuelle Fassung der Inhaltsdatei passt. Weicht der Hash ab, wurde der Inhalt
 * nach der redaktionellen Freigabe geändert — genau der Fall, den die
 * Reihenfolge-Regel der Leitlinien C(2026) 5054 final (Rn. 136) erfasst.
 *
 * Befund ist außerdem, was einen grünen Lauf zur Fassade machen würde: ein Verzeichnis, in dem
 * gar nichts geprüft wurde, ein *.md-Symlink ohne lesbares Ziel und ein Record, der sich selbst
 * für ungedeckt erklärt (kein Faktencheck und zugleich keine Kennzeichnung — der Faktencheck ist
 * Mindestanforderung der Ausnahme, Rn. 134).
 *
 * Ehrliche Grenze: Das Gate erzwingt den Prozess und macht ihn nachweisbar; die
 * inhaltliche Qualität der Prüfung erzwingt es nicht. Es ist eine über das
 * rechtliche Minimum hinausgehende, zulässige Dokumentationsform (Code of
 * Practice on Transparency of AI-Generated Content, Sec. 2, Commitment 4),
 * kein Safe Harbour.
 *
 * Zero-Dependency: nur node:-Builtins. Node >= 18. Stand: 24.08.2026.
 */

import { createHash } from 'node:crypto';
import {
  existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, statSync,
  symlinkSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';

const STAND = '22.08.2026';
const FLAGS = new Set(['--erlaube-leer', '--erlaube-ohne-faktencheck']);
const SHA256_HEX = /^[0-9a-f]{64}$/;
const ISO_DATUM = /^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;

/* ------------------------------------------------------------------ *
 * Feldliste — deckungsgleich mit gate/review-record.schema.json.
 * ------------------------------------------------------------------ */

const TEXT = (hinweis) => ({ typ: 'string', nichtLeer: true, hinweis });

const FELD_SPEC = {
  content_path: TEXT('Pfad zur geprüften Inhaltsdatei'),
  content_sha256: {
    typ: 'string',
    muster: SHA256_HEX,
    hinweis: '64 Hex-Zeichen in Kleinschreibung, z. B. aus „shasum -a 256 <datei>"',
  },
  reviewed_at: {
    typ: 'string',
    muster: ISO_DATUM,
    hinweis: 'ISO-8601-Datum, z. B. „2026-08-22"',
  },
  reviewer: {
    typ: 'object',
    felder: {
      name: TEXT('Name der prüfenden natürlichen Person'),
      role: TEXT('Funktion im Publikationsprozess'),
      fachkompetenz: TEXT('einschlägige Sachkunde zum Gegenstand (Rn. 134)'),
    },
  },
  editorial_responsibility: {
    typ: 'object',
    felder: {
      traeger: TEXT('Person oder Stelle mit der redaktionellen Verantwortung (Rn. 138)'),
      kontakt_oeffentlich: TEXT('öffentlich auffindbare Fundstelle, z. B. Impressum-URL (Rn. 138)'),
    },
  },
  pruefung: {
    typ: 'object',
    felder: {
      faktencheck: { typ: 'boolean', hinweis: 'true oder false' },
      quellen_geprueft: { typ: 'boolean', hinweis: 'true oder false' },
      aenderungen_vorgenommen: TEXT('was geändert, gestrichen oder zurückgewiesen wurde'),
    },
  },
  scope: {
    typ: 'object',
    felder: {
      einstufung: TEXT('Ergebnis des Entscheidungsbaums in einem Satz'),
      labels_erforderlich: {
        typ: 'array',
        hinweis: 'Liste von Zeichenketten; leere Liste = keine Kennzeichnung erforderlich',
      },
      begruendung: TEXT('Begründung der Einstufung mit Fundstelle'),
    },
  },
  ki_beteiligung: TEXT('welches KI-System an welcher Stelle beteiligt war'),
};

const TYP_DEUTSCH = {
  string: 'eine Zeichenkette',
  boolean: 'ein Wahrheitswert (true/false)',
  object: 'ein Objekt',
  array: 'eine Liste',
};

/* ------------------------------------------------------------------ *
 * Prüf-Logik (druckfrei, damit der Selbsttest sie direkt aufrufen kann)
 * ------------------------------------------------------------------ */

function typOk(wert, typ) {
  if (typ === 'array') return Array.isArray(wert);
  if (typ === 'object') return typeof wert === 'object' && wert !== null && !Array.isArray(wert);
  return typeof wert === typ;
}

function beschreibeTyp(wert) {
  if (wert === null) return 'null';
  if (Array.isArray(wert)) return 'eine Liste';
  return TYP_DEUTSCH[typeof wert] ?? typeof wert;
}

function sha256Datei(datei) {
  // Über die Bytes der Datei, nicht über den dekodierten Text: identisch mit dem, was
  // „shasum -a 256 <datei>" bzw. „sha256sum <datei>" ausgeben — auch dann, wenn eine Datei
  // wider Erwarten nicht sauber UTF-8 kodiert ist.
  return createHash('sha256').update(readFileSync(datei)).digest('hex');
}

function pruefeFelder(objekt, spec, prefix, fehler) {
  for (const [name, regel] of Object.entries(spec)) {
    const pfad = prefix ? `${prefix}.${name}` : name;
    const wert = objekt[name];

    if (wert === undefined) {
      fehler.push({ code: 'FELD_FEHLT', text: `Pflichtfeld fehlt: ${pfad} — erwartet: ${regel.hinweis ?? TYP_DEUTSCH[regel.typ]}.` });
      continue;
    }
    if (!typOk(wert, regel.typ)) {
      fehler.push({ code: 'FELD_TYP', text: `Falscher Typ: ${pfad} muss ${TYP_DEUTSCH[regel.typ]} sein, ist ${beschreibeTyp(wert)}.` });
      continue;
    }
    if (regel.typ === 'string') {
      if (regel.nichtLeer && wert.trim() === '') {
        fehler.push({ code: 'FELD_WERT', text: `Leeres Feld: ${pfad} darf nicht leer sein — erwartet: ${regel.hinweis}.` });
      } else if (regel.muster && !regel.muster.test(wert)) {
        fehler.push({ code: 'FELD_WERT', text: `Unplausibler Wert: ${pfad} = ${JSON.stringify(wert)} — erwartet: ${regel.hinweis}.` });
      }
    } else if (regel.typ === 'array') {
      wert.forEach((eintrag, i) => {
        if (typeof eintrag !== 'string' || eintrag.trim() === '') {
          fehler.push({ code: 'FELD_WERT', text: `Unplausibler Eintrag: ${pfad}[${i}] muss eine nicht leere Zeichenkette sein.` });
        }
      });
    } else if (regel.typ === 'object') {
      pruefeFelder(wert, regel.felder, pfad, fehler);
      meldeUnbekannte(wert, regel.felder, pfad, fehler);
    }
  }
}

function meldeUnbekannte(objekt, spec, prefix, fehler) {
  for (const name of Object.keys(objekt)) {
    if (name in spec) continue;
    const pfad = prefix ? `${prefix}.${name}` : name;
    fehler.push({
      code: 'FELD_UNBEKANNT',
      text: `Unbekanntes Feld: ${pfad}. Die Feldliste ist festgelegt (gate/review-record.schema.json) — Tippfehler oder Zusatzfeld?`,
    });
  }
}

/** Prüft eine einzelne Markdown-Datei samt Geschwister-Record. */
function pruefeDatei(mdPfad, optionen = {}) {
  const recordPfad = mdPfad.replace(/\.md$/i, '.review.json');
  const ergebnis = { datei: mdPfad, record: recordPfad, fehler: [], hinweise: [] };

  if (!existsSync(recordPfad)) {
    ergebnis.fehler.push({
      code: 'KEIN_RECORD',
      text: `Kein Review-Record gefunden — erwartet: ${recordPfad}\nOhne dokumentierte Gegenlese trägt die redaktionelle Ausnahme nicht (Rn. 133).`,
    });
    return ergebnis;
  }

  let daten;
  try {
    daten = JSON.parse(readFileSync(recordPfad, 'utf8'));
  } catch (fehlerObjekt) {
    ergebnis.fehler.push({ code: 'JSON_UNGUELTIG', text: `Record ist kein gültiges JSON: ${fehlerObjekt.message}` });
    return ergebnis;
  }
  if (!typOk(daten, 'object')) {
    ergebnis.fehler.push({ code: 'JSON_UNGUELTIG', text: 'Record muss ein JSON-Objekt sein.' });
    return ergebnis;
  }

  pruefeFelder(daten, FELD_SPEC, '', ergebnis.fehler);
  meldeUnbekannte(daten, FELD_SPEC, '', ergebnis.fehler);

  // content_path — gegen Record-Verzeichnis und Arbeitsverzeichnis auflösen.
  if (typeof daten.content_path === 'string' && daten.content_path.trim() !== '') {
    const ziel = path.resolve(mdPfad);
    const kandidaten = [
      path.resolve(path.dirname(recordPfad), daten.content_path),
      path.resolve(process.cwd(), daten.content_path),
    ];
    if (!kandidaten.includes(ziel)) {
      ergebnis.fehler.push({
        code: 'PFAD_MISMATCH',
        text: `content_path zeigt nicht auf die geprüfte Datei: ${JSON.stringify(daten.content_path)}\nErwartet wird ein Pfad, der auf ${mdPfad} auflöst — relativ zum Record oder zum Arbeitsverzeichnis.`,
      });
    }
  }

  // SHA-256 — die eigentliche Bindung an die freigegebene Fassung.
  if (typeof daten.content_sha256 === 'string' && SHA256_HEX.test(daten.content_sha256)) {
    const berechnet = sha256Datei(mdPfad);
    if (berechnet !== daten.content_sha256) {
      ergebnis.fehler.push({
        code: 'HASH_MISMATCH',
        text: 'Hash-Abweichung: die Inhaltsdatei wurde nach der redaktionellen Freigabe geändert.\n'
          + `  im Record: ${daten.content_sha256}\n`
          + `  berechnet: ${berechnet}\n`
          + 'Rn. 136: Jeder substanzielle KI-Eingriff nach der Gegenlese macht die Ausnahme nichtig. Diese Prüfung\n'
          + 'unterscheidet nicht, wer geändert hat — nach jeder Änderung wird erneut gegengelesen, danach\n'
          + 'content_sha256 auf den berechneten Wert und reviewed_at auf das neue Datum gesetzt.',
      });
    }
  }

  // Selbstwiderspruch im Record. Das ist keine Qualitätsfrage — die beurteilt das Gate nicht —,
  // sondern die maschinenlesbare Selbstauskunft, dass hier weder die Ausnahme noch eine
  // Kennzeichnung trägt.
  if (daten?.pruefung?.faktencheck === false
    && Array.isArray(daten?.scope?.labels_erforderlich)
    && daten.scope.labels_erforderlich.length === 0) {
    const befund = {
      code: 'OHNE_FAKTENCHECK',
      text: 'faktencheck = false und zugleich keine Kennzeichnung vorgesehen (scope.labels_erforderlich ist leer).\n'
        + 'Der Faktencheck ist Mindestanforderung der redaktionellen Ausnahme (Rn. 134) — ohne ihn trägt sie nicht,\n'
        + 'und ohne Label bleibt keine andere Grundlage. Der Record erklärt sich damit selbst für ungedeckt.\n'
        + 'Zwei Wege hinaus: den Faktencheck nachholen und faktencheck auf true setzen, oder die erforderliche\n'
        + 'Kennzeichnung setzen und in scope.labels_erforderlich eintragen.',
    };
    if (optionen.erlaubeOhneFaktencheck) {
      ergebnis.hinweise.push({
        code: befund.code,
        text: `${befund.text}\nMit --erlaube-ohne-faktencheck bewusst herabgestuft: Der Lauf bleibt grün, die Lücke bleibt.`,
      });
    } else {
      ergebnis.fehler.push(befund);
    }
  }

  return ergebnis;
}

const SCAN_IGNORIEREN = new Set(['.git', 'node_modules', 'dist', 'build', '.cache']);
const UNTERORDNER_MAX_TIEFE = 4;
const UNTERORDNER_MAX_TREFFER = 10;

/**
 * Flacher Scan: alle *.md direkt im Verzeichnis (v1 ohne Rekursion).
 *
 * Symlinks werden aufgelöst statt verworfen: readdirSync-Einträge melden für einen Symlink
 * isFile() === false, statSync folgt ihm dagegen. Eine symlinkte Inhaltsdatei ist Inhalt und
 * muss geprüft werden — sonst ginge ungeprüfter Text unbemerkt durch. Ein Symlink ohne
 * lesbares Ziel wird gemeldet, nicht verschwiegen.
 */
function sammleMarkdown(verzeichnis) {
  const abs = path.resolve(verzeichnis);
  if (!existsSync(abs) || !statSync(abs).isDirectory()) {
    return { fehler: `Verzeichnis nicht gefunden: ${verzeichnis}`, dateien: [], defekteLinks: [] };
  }

  const dateien = [];
  const defekteLinks = [];

  for (const eintrag of readdirSync(abs, { withFileTypes: true })) {
    if (!eintrag.name.toLowerCase().endsWith('.md')) continue;
    const pfad = path.join(verzeichnis, eintrag.name);
    let ziel;
    try {
      ziel = statSync(path.join(abs, eintrag.name));
    } catch {
      defekteLinks.push(pfad);
      continue;
    }
    if (ziel.isFile()) dateien.push(pfad);
  }

  return { fehler: null, dateien: dateien.sort(), defekteLinks: defekteLinks.sort() };
}

/**
 * Sucht *.md in Unterverzeichnissen — ausschließlich, um einen leeren flachen Scan erklären zu
 * können. Ein Verzeichnis, dessen Inhalte eine Ebene tiefer liegen (content/blog/…), ist der
 * Regelfall in Hugo-, Astro- und Jekyll-Repos; ohne diesen Blick prüfte eine falsch
 * konfigurierte Pipeline dauerhaft null Dateien und meldete Grün.
 */
function markdownInUnterordnern(verzeichnis, maxTiefe = UNTERORDNER_MAX_TIEFE) {
  const treffer = new Set();
  const gesehen = new Set();
  const warteschlange = [{ rel: verzeichnis, abs: path.resolve(verzeichnis), tiefe: 0 }];

  while (warteschlange.length > 0) {
    const { rel, abs, tiefe } = warteschlange.shift();
    let eintraege;
    try {
      eintraege = readdirSync(abs, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const eintrag of eintraege) {
      if (eintrag.name.startsWith('.') || SCAN_IGNORIEREN.has(eintrag.name)) continue;
      const kindAbs = path.join(abs, eintrag.name);
      let ziel;
      try {
        ziel = statSync(kindAbs);
      } catch {
        continue;
      }
      if (ziel.isDirectory()) {
        if (tiefe >= maxTiefe) continue;
        let real;
        try {
          real = realpathSync(kindAbs);
        } catch {
          continue;
        }
        if (gesehen.has(real)) continue;   // Symlink-Schleifen abfangen
        gesehen.add(real);
        warteschlange.push({ rel: path.join(rel, eintrag.name), abs: kindAbs, tiefe: tiefe + 1 });
      } else if (tiefe > 0 && ziel.isFile() && eintrag.name.toLowerCase().endsWith('.md')) {
        treffer.add(rel);
      }
    }
  }

  return [...treffer].sort();
}

/* ------------------------------------------------------------------ *
 * Ausgabe
 * ------------------------------------------------------------------ */

const MARKE_BREITE = 9;   // längste Marke: „[WARNUNG]"

function zeile(marke, text) {
  return `${marke.padEnd(MARKE_BREITE)} ${text}`;
}

function einruecken(text, marke) {
  const fortsetzung = `\n${' '.repeat(MARKE_BREITE + 3)}`;
  return `${' '.repeat(MARKE_BREITE + 1)}${marke} ${text.split('\n').join(fortsetzung)}`;
}

function drucke(ergebnis) {
  // Ein Befund, der nur als Hinweis geführt wird, darf nicht unter einem OK-Stempel stehen.
  let marke = '[OK]';
  if (ergebnis.fehler.length > 0) marke = '[FEHLER]';
  else if (ergebnis.hinweise.length > 0) marke = '[WARNUNG]';

  console.log(zeile(marke, ergebnis.datei));
  for (const f of ergebnis.fehler) console.log(einruecken(f.text, '-'));
  for (const h of ergebnis.hinweise) console.log(einruecken(h.text, '~'));
}

function hilfe() {
  console.log(`Editorial Gate — Prüfung der Review-Records (Stand: ${STAND})

  node gate/scripts/check-review-record.mjs <verzeichnis...> [optionen]
  node gate/scripts/check-review-record.mjs --self-test
  node gate/scripts/check-review-record.mjs --help

Geprüft wird für jede *.md-Datei der übergebenen Verzeichnisse:
  1. Liegt die Geschwisterdatei <name>.review.json daneben?
  2. Sind alle Pflichtfelder vorhanden und plausibel typisiert?
     (Feldliste: gate/review-record.schema.json)
  3. Zeigt content_path auf die geprüfte Datei?
  4. Stimmt content_sha256 mit dem SHA-256 der Datei überein?
  5. Widerspricht sich der Record selbst — faktencheck = false und zugleich
     keine Kennzeichnung vorgesehen? Dann trägt weder die Ausnahme (Rn. 134:
     Faktencheck als Mindestanforderung) noch ein Label.

Optionen:
  --erlaube-leer               Ein Verzeichnis ohne *.md ist dann nur eine Warnung
                               statt eines Fehlers (Einführungsphase).
  --erlaube-ohne-faktencheck   Stuft Prüfung 5 zur Warnung herab. Der Lauf bleibt
                               grün, die Lücke bleibt.

Exit-Code 0, wenn alle Dateien bestehen, sonst 1.

Der Scan ist flach: nur *.md direkt im übergebenen Verzeichnis, keine
Unterverzeichnisse. Mehrere Verzeichnisse einfach nacheinander angeben. Liegen
*.md nur eine Ebene tiefer (content/blog/…), meldet der Lauf das als Fehler und
nennt die Verzeichnisse — ein leerer Scan darf nicht grün aussehen. Erfasst wird
ausschließlich die Endung .md; .mdx und andere Endungen fallen aus dem Scan.
Symlinkte Inhaltsdateien werden mitgeprüft, ein Symlink ohne lesbares Ziel wird
gemeldet.

Den Hash einer freigegebenen Fassung liefert  shasum -a 256 <datei>  (macOS und
Linux) bzw.  sha256sum <datei>  (Linux); bei einer Abweichung nennt die
Fehlermeldung den berechneten Wert.

Ehrliche Grenze: Das Gate erzwingt den Prozess und macht ihn nachweisbar; die
inhaltliche Qualität der Prüfung erzwingt es nicht. Es ist eine über das
rechtliche Minimum hinausgehende, zulässige Dokumentationsform (Code of Practice
on Transparency of AI-Generated Content, Sec. 2, Commitment 4), kein Safe Harbour.`);
}

/* ------------------------------------------------------------------ *
 * Selbsttest — Positiv- und Negativ-Fixtures im Temp-Verzeichnis
 * ------------------------------------------------------------------ */

const BASIS_ARTIKEL = '# Demo\n\nEin kurzer Beispieltext für den Selbsttest.\n';

const basisRecord = (hash) => ({
  content_path: 'artikel.md',
  content_sha256: hash,
  reviewed_at: '2026-08-22',
  reviewer: {
    name: 'Erika Beispiel (Demo)',
    role: 'Redakteurin Lokales',
    fachkompetenz: 'Kommunalpolitik, seit Jahren Berichterstattung über Ratssitzungen',
  },
  editorial_responsibility: {
    traeger: 'Demo-Redaktion (Demo-Datensatz)',
    kontakt_oeffentlich: 'https://example.org/impressum',
  },
  pruefung: {
    faktencheck: true,
    quellen_geprueft: true,
    aenderungen_vorgenommen: 'Zahlen gegen das Sitzungsprotokoll geprüft, eine Passage gestrichen.',
  },
  scope: {
    einstufung: 'Text, veröffentlicht, Angelegenheit von öffentlichem Interesse',
    labels_erforderlich: [],
    begruendung: 'Redaktionelle Ausnahme greift (Rn. 133-138); Freigabe war der letzte inhaltsändernde Schritt.',
  },
  ki_beteiligung: 'Rohentwurf per LLM, danach redaktionell überarbeitet und geprüft.',
});

function selbsttestFaelle() {
  return [
    {
      id: 'gueltig',
      beschreibung: 'gültiger Record',
      record: (hash) => basisRecord(hash),
      erwartet: [],
    },
    {
      id: 'kein-record',
      beschreibung: 'Record fehlt',
      record: null,
      erwartet: ['KEIN_RECORD'],
    },
    {
      id: 'hash-mismatch',
      beschreibung: 'Inhalt nach der Freigabe geändert',
      record: (hash) => basisRecord(hash),
      nachtraeglicheAenderung: '\nEin Satz, den ein KI-Schritt nach der Freigabe ergänzt hat.\n',
      erwartet: ['HASH_MISMATCH'],
    },
    {
      id: 'feld-fehlt',
      beschreibung: 'Pflichtfeld fehlt',
      record: (hash) => {
        const r = basisRecord(hash);
        delete r.ki_beteiligung;
        return r;
      },
      erwartet: ['FELD_FEHLT'],
    },
    {
      id: 'feld-typ',
      beschreibung: 'Pflichtfeld falsch typisiert',
      record: (hash) => {
        const r = basisRecord(hash);
        r.pruefung.faktencheck = 'ja';
        return r;
      },
      erwartet: ['FELD_TYP'],
    },
    {
      id: 'pfad-falsch',
      beschreibung: 'content_path zeigt woanders hin',
      record: (hash) => {
        const r = basisRecord(hash);
        r.content_path = 'ein/anderes/verzeichnis/artikel.md';
        return r;
      },
      erwartet: ['PFAD_MISMATCH'],
    },
    {
      id: 'json-kaputt',
      beschreibung: 'Record ist kein gültiges JSON',
      record: () => '{ "content_path": "artikel.md",',
      erwartet: ['JSON_UNGUELTIG'],
    },
    {
      id: 'ohne-faktencheck',
      beschreibung: 'kein Faktencheck und kein Label',
      record: (hash) => {
        const r = basisRecord(hash);
        r.pruefung.faktencheck = false;
        return r;
      },
      erwartet: ['OHNE_FAKTENCHECK'],
    },
    {
      id: 'ohne-faktencheck-erlaubt',
      beschreibung: 'kein Faktencheck, bewusst zugelassen',
      record: (hash) => {
        const r = basisRecord(hash);
        r.pruefung.faktencheck = false;
        return r;
      },
      optionen: { erlaubeOhneFaktencheck: true },
      erwartet: [],
      erwarteteHinweise: ['OHNE_FAKTENCHECK'],
    },
  ];
}

/** Selbsttest des Verzeichnis-Scans: Symlinks und der leere flache Scan. */
function scanFaelle(wurzel) {
  const anlegen = (name) => {
    const verzeichnis = path.join(wurzel, name);
    mkdirSync(verzeichnis, { recursive: true });
    return verzeichnis;
  };

  return [
    {
      beschreibung: 'symlinkte Inhaltsdatei wird erfasst',
      lauf: () => {
        const basis = anlegen('scan-symlink');
        const quelle = anlegen('scan-symlink/quelle');
        writeFileSync(path.join(quelle, 'ungeprueft.md'), BASIS_ARTIKEL, 'utf8');
        try {
          symlinkSync(path.join('quelle', 'ungeprueft.md'), path.join(basis, 'ungeprueft.md'));
        } catch {
          return null;   // Umgebung ohne Symlink-Rechte
        }
        const { dateien } = sammleMarkdown(basis);
        if (dateien.length !== 1) return false;
        return pruefeDatei(dateien[0]).fehler.some((f) => f.code === 'KEIN_RECORD');
      },
    },
    {
      beschreibung: 'Symlink ohne Ziel wird gemeldet',
      lauf: () => {
        const basis = anlegen('scan-toter-link');
        try {
          symlinkSync(path.join(basis, 'gibt-es-nicht.md'), path.join(basis, 'tot.md'));
        } catch {
          return null;
        }
        const { dateien, defekteLinks } = sammleMarkdown(basis);
        return dateien.length === 0 && defekteLinks.length === 1;
      },
    },
    {
      beschreibung: 'Treffer nur im Unterverzeichnis fällt auf',
      lauf: () => {
        const basis = anlegen('scan-unterordner');
        const tief = anlegen('scan-unterordner/blog/2026');
        writeFileSync(path.join(tief, 'artikel.md'), BASIS_ARTIKEL, 'utf8');
        const { dateien } = sammleMarkdown(basis);
        const gefunden = markdownInUnterordnern(basis);
        return dateien.length === 0 && gefunden.length === 1 && gefunden[0].endsWith(path.join('blog', '2026'));
      },
    },
    {
      beschreibung: 'wirklich leeres Verzeichnis bleibt leer',
      lauf: () => {
        const basis = anlegen('scan-leer');
        return sammleMarkdown(basis).dateien.length === 0 && markdownInUnterordnern(basis).length === 0;
      },
    },
  ];
}

function gleicheCodes(a, b) {
  return a.length === b.length && a.every((code, i) => code === b[i]);
}

function selbsttest() {
  const wurzel = mkdtempSync(path.join(tmpdir(), 'editorial-gate-selbsttest-'));
  const faelle = selbsttestFaelle();
  let bestanden = 0;
  let gesamt = faelle.length;

  try {
    for (const fall of faelle) {
      const verzeichnis = path.join(wurzel, fall.id);
      mkdirSync(verzeichnis);
      const mdPfad = path.join(verzeichnis, 'artikel.md');
      writeFileSync(mdPfad, BASIS_ARTIKEL, 'utf8');

      if (fall.record !== null) {
        const gebaut = fall.record(sha256Datei(mdPfad));
        const inhalt = typeof gebaut === 'string' ? gebaut : JSON.stringify(gebaut, null, 2);
        writeFileSync(path.join(verzeichnis, 'artikel.review.json'), inhalt, 'utf8');
      }
      // Änderung NACH dem Schreiben des Records — genau der Rn.-136-Fall.
      if (fall.nachtraeglicheAenderung) {
        writeFileSync(mdPfad, BASIS_ARTIKEL + fall.nachtraeglicheAenderung, 'utf8');
      }

      const ergebnis = pruefeDatei(mdPfad, fall.optionen ?? {});
      const codes = [...new Set(ergebnis.fehler.map((f) => f.code))].sort();
      const erwartet = [...new Set(fall.erwartet)].sort();
      const hinweise = [...new Set(ergebnis.hinweise.map((h) => h.code))].sort();
      const erwarteteHinweise = [...new Set(fall.erwarteteHinweise ?? [])].sort();
      const ok = gleicheCodes(codes, erwartet) && gleicheCodes(hinweise, erwarteteHinweise);

      if (ok) bestanden += 1;
      const zusatz = (hinweise.length > 0 || erwarteteHinweise.length > 0)
        ? ` | Warnung erwartet: ${erwarteteHinweise.join(', ') || '(keine)'}, erhalten: ${hinweise.join(', ') || '(keine)'}`
        : '';
      console.log(zeile(ok ? '[OK]' : '[FEHLER]',
        `${fall.beschreibung.padEnd(38, '.')} `
        + `erwartet: ${erwartet.join(', ') || '(keine Fehler)'} | erhalten: ${codes.join(', ') || '(keine Fehler)'}${zusatz}`));
    }

    for (const fall of scanFaelle(wurzel)) {
      gesamt += 1;
      let ergebnis;
      try {
        ergebnis = fall.lauf();
      } catch (fehlerObjekt) {
        ergebnis = false;
        console.log(zeile('[FEHLER]', `${fall.beschreibung.padEnd(38, '.')} Ausnahme: ${fehlerObjekt.message}`));
        continue;
      }
      if (ergebnis === null) {
        // Umgebung ohne Symlink-Rechte (z. B. Windows ohne Entwicklermodus) — kein Befund.
        bestanden += 1;
        console.log(zeile('[OK]', `${fall.beschreibung.padEnd(38, '.')} übersprungen: keine Symlink-Rechte`));
        continue;
      }
      if (ergebnis) bestanden += 1;
      console.log(zeile(ergebnis ? '[OK]' : '[FEHLER]',
        `${fall.beschreibung.padEnd(38, '.')} ${ergebnis ? 'wie erwartet' : 'abweichend'}`));
    }
  } finally {
    rmSync(wurzel, { recursive: true, force: true });
  }

  const alleOk = bestanden === gesamt;
  console.log(alleOk
    ? `SELF-TEST OK — ${bestanden} von ${gesamt} Fällen wie erwartet.`
    : `SELF-TEST FAIL — nur ${bestanden} von ${gesamt} Fällen wie erwartet.`);
  return alleOk;
}

/* ------------------------------------------------------------------ *
 * CLI
 * ------------------------------------------------------------------ */

function main(argv) {
  const args = argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    hilfe();
    return 0;
  }
  if (args.includes('--self-test')) {
    return selbsttest() ? 0 : 1;
  }

  const uebergeben = args.filter((a) => a.startsWith('-'));
  const unbekannt = uebergeben.filter((a) => !FLAGS.has(a));
  if (unbekannt.length > 0) {
    console.error(`Unbekannte Option: ${unbekannt[0]}\n`);
    hilfe();
    return 1;
  }
  const optionen = {
    erlaubeLeer: uebergeben.includes('--erlaube-leer'),
    erlaubeOhneFaktencheck: uebergeben.includes('--erlaube-ohne-faktencheck'),
  };
  const verzeichnisse = args.filter((a) => !a.startsWith('-'));
  if (verzeichnisse.length === 0) {
    console.error('Kein Verzeichnis angegeben.\n');
    hilfe();
    return 1;
  }

  let geprueft = 0;
  let fehlerhaft = 0;
  let gewarnt = 0;
  let abbruch = false;

  for (const verzeichnis of verzeichnisse) {
    const { fehler, dateien, defekteLinks } = sammleMarkdown(verzeichnis);
    if (fehler) {
      console.log(zeile('[FEHLER]', verzeichnis));
      console.log(einruecken(`${fehler}\nBitte den Pfad im Aufruf prüfen.`, '-'));
      abbruch = true;
      continue;
    }

    // Ein *.md-Symlink ohne lesbares Ziel ist ungeprüfter Inhalt — er darf nicht stumm entfallen.
    for (const link of defekteLinks) {
      console.log(zeile('[FEHLER]', link));
      console.log(einruecken('Verweis ins Leere: Diese *.md ist ein Symlink ohne lesbares Ziel und kann nicht\n'
        + 'geprüft werden. Ziel wiederherstellen oder den Verweis entfernen.', '-'));
      abbruch = true;
    }

    // Der Leer-Befund gilt nur, wenn wirklich nichts da war: Ein gemeldeter Verweis ins Leere
    // ist bereits ein Fehler und würde hier sonst doppelt und irreführend erklärt.
    if (dateien.length === 0 && defekteLinks.length === 0) {
      const unterordner = markdownInUnterordnern(verzeichnis);
      if (unterordner.length > 0) {
        const liste = unterordner.slice(0, UNTERORDNER_MAX_TREFFER).map((d) => `  ${d}`).join('\n');
        const rest = unterordner.length > UNTERORDNER_MAX_TREFFER
          ? `\n  … und ${unterordner.length - UNTERORDNER_MAX_TREFFER} weitere`
          : '';
        console.log(zeile('[FEHLER]', verzeichnis));
        console.log(einruecken(
          `Keine *.md direkt in ${verzeichnis} — Treffer liegen nur in Unterverzeichnissen. Der Scan ist flach:\n`
          + 'Diese Verzeichnisse einzeln übergeben, sonst bleibt der Teilbaum ungeprüft und der Lauf trotzdem grün.\n'
          + `${liste}${rest}\n`
          + `Portabel alle auf einmal:  node gate/scripts/check-review-record.mjs $(find ${verzeichnis} -type d)`, '-'));
        abbruch = true;
        continue;
      }

      const text = `${verzeichnis} enthält keine *.md-Datei (flacher Scan, ohne Unterverzeichnisse).\n`
        + 'Erfasst wird ausschließlich die Endung .md — .mdx und andere Endungen fallen aus dem Scan.\n'
        + 'Bitte den Pfad im Aufruf prüfen.';
      if (optionen.erlaubeLeer) {
        console.log(zeile('[WARNUNG]', verzeichnis));
        console.log(einruecken(`${text}\nMit --erlaube-leer bewusst zugelassen: Hier wurde nichts geprüft.`, '~'));
      } else {
        console.log(zeile('[FEHLER]', verzeichnis));
        console.log(einruecken(`${text}\nBewusst leer, z. B. in der Einführungsphase? Dann --erlaube-leer setzen.`, '-'));
        abbruch = true;
      }
      continue;
    }

    for (const datei of dateien) {
      const ergebnis = pruefeDatei(datei, optionen);
      drucke(ergebnis);
      geprueft += 1;
      if (ergebnis.fehler.length > 0) fehlerhaft += 1;
      else if (ergebnis.hinweise.length > 0) gewarnt += 1;
    }
  }

  const teile = [`${geprueft - fehlerhaft - gewarnt} OK`];
  if (gewarnt > 0) teile.push(`${gewarnt} mit Warnung`);
  teile.push(`${fehlerhaft} mit Fehler`);
  console.log(`\nErgebnis: ${geprueft} Datei(en) geprüft — ${teile.join(', ')}.`);
  if (abbruch) console.log('Dazu mindestens ein Verzeichnis- oder Verweis-Befund (siehe oben).');
  return (fehlerhaft > 0 || abbruch) ? 1 : 0;
}

process.exit(main(process.argv));
