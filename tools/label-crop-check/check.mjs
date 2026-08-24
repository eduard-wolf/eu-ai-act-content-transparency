#!/usr/bin/env node
/**
 * label-crop-check — prüft geometrisch, ob ein im Bild platziertes KI-Label die
 * gängigen Plattform-Zuschnitte überlebt.
 *
 * Modell: Center-Crop auf das jeweilige Zielverhältnis (optional um einen
 * Fokuspunkt, an den Bildgrenzen geklemmt). Ein Label "überlebt", wenn seine
 * Box vollständig im Zuschnitt liegt.
 *
 * Aufruf:
 *   node check.mjs --image WxH --label X,Y,WxH [--ratios 1:1,4:5,9:16,16:9]
 *                  [--focal X,Y] [--json]
 *   node check.mjs --self-test
 *
 * Exit-Codes: 0 = alle Zuschnitte halten das Label · 1 = mindestens einer
 * schneidet an · 2 = Eingabefehler.
 *
 * Zero-Dependency: nur node:-Builtins, Node >= 18.
 */

import { fileURLToPath } from 'node:url';

const DEFAULT_RATIOS = '1:1,4:5,9:16,16:9';
const EPS = 1e-9;

/** Eingabefehler des Nutzers — führt zu Exit 2, nie zu einem Stacktrace. */
export class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }
}

// ---------------------------------------------------------------- Parser ----

const NUM = '\\d+(?:\\.\\d+)?';
const SNUM = '-?' + NUM;

export function parseSize(value, flag = '--image') {
  const raw = String(value ?? '').trim();
  const m = new RegExp(`^(${SNUM})[x×](${SNUM})$`, 'i').exec(raw);
  if (!m) {
    throw new InputError(`${flag} erwartet das Format BxH (z. B. 1600x1200) — erhalten: "${raw}"`);
  }
  const width = Number(m[1]);
  const height = Number(m[2]);
  if (!(width > 0) || !(height > 0)) {
    throw new InputError(`${flag}: Breite und Höhe müssen größer als 0 sein — erhalten: "${raw}"`);
  }
  return { width, height };
}

export function parseLabel(value) {
  const raw = String(value ?? '').trim();
  const m = new RegExp(`^(${SNUM}),\\s*(${SNUM}),\\s*(${SNUM})[x×](${SNUM})$`, 'i').exec(raw);
  if (!m) {
    throw new InputError(`--label erwartet das Format X,Y,BxH (z. B. 1150,40,120x60) — erhalten: "${raw}"`);
  }
  const [x, y, width, height] = m.slice(1).map(Number);
  if (!(width > 0) || !(height > 0)) {
    throw new InputError(`--label: Breite und Höhe der Labelbox müssen größer als 0 sein — erhalten: "${raw}"`);
  }
  return { x, y, width, height };
}

export function parsePoint(value, flag = '--focal') {
  const raw = String(value ?? '').trim();
  const m = new RegExp(`^(${SNUM}),\\s*(${SNUM})$`).exec(raw);
  if (!m) {
    throw new InputError(`${flag} erwartet das Format X,Y (z. B. 1310,600) — erhalten: "${raw}"`);
  }
  return { x: Number(m[1]), y: Number(m[2]) };
}

export function parseRatios(value) {
  const parts = String(value ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  if (parts.length === 0) {
    throw new InputError('--ratios: mindestens ein Seitenverhältnis angeben (z. B. 1:1,4:5,9:16).');
  }
  return parts.map((part) => {
    const m = new RegExp(`^(${NUM}):(${NUM})$`).exec(part);
    if (!m) {
      throw new InputError(`--ratios: "${part}" ist kein Seitenverhältnis im Format B:H (z. B. 9:16).`);
    }
    const aw = Number(m[1]);
    const ah = Number(m[2]);
    if (!(aw > 0) || !(ah > 0)) {
      throw new InputError(`--ratios: "${part}" enthält eine 0 — beide Seiten müssen größer als 0 sein.`);
    }
    return { label: part, value: aw / ah };
  });
}

/** Expandiert --flag=wert zu --flag wert. */
function expandArgv(argv) {
  const out = [];
  for (const token of argv) {
    if (token.startsWith('--') && token.includes('=')) {
      const i = token.indexOf('=');
      out.push(token.slice(0, i), token.slice(i + 1));
    } else {
      out.push(token);
    }
  }
  return out;
}

export function parseArgs(argv) {
  const opts = {
    image: null, label: null, ratios: DEFAULT_RATIOS, focal: null,
    json: false, selfTest: false, help: false,
  };
  const tokens = expandArgv(argv);
  const withValue = { '--image': 'image', '--label': 'label', '--ratios': 'ratios', '--focal': 'focal' };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '--self-test') { opts.selfTest = true; continue; }
    if (token === '--json') { opts.json = true; continue; }
    if (token === '--help' || token === '-h') { opts.help = true; continue; }
    if (Object.prototype.hasOwnProperty.call(withValue, token)) {
      const value = tokens[++i];
      if (value === undefined) throw new InputError(`${token} erwartet einen Wert.`);
      opts[withValue[token]] = value;
      continue;
    }
    throw new InputError(`Unbekanntes Argument: "${token}". "--help" zeigt die Nutzung.`);
  }

  if (opts.help || opts.selfTest) return opts;
  if (opts.image === null) throw new InputError('--image fehlt (z. B. --image 1600x1200).');
  if (opts.label === null) throw new InputError('--label fehlt (z. B. --label 1150,40,120x60).');
  return opts;
}

// ------------------------------------------------------------- Geometrie ----

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const overlap = (a0, a1, b0, b1) => Math.max(0, Math.min(a1, b1) - Math.max(a0, b0));
const round1 = (n) => Math.round(n * 10) / 10;

/**
 * Größtmöglicher Ausschnitt im Zielverhältnis, zentriert bzw. um den
 * Fokuspunkt gelegt und an den Bildgrenzen geklemmt.
 */
export function cropRect(image, ratioValue, focal = null) {
  const imageRatio = image.width / image.height;
  let width;
  let height;
  if (imageRatio > ratioValue) {
    height = image.height;
    width = height * ratioValue;
  } else {
    width = image.width;
    height = width / ratioValue;
  }
  width = Math.min(width, image.width);
  height = Math.min(height, image.height);

  const centerX = focal ? focal.x : image.width / 2;
  const centerY = focal ? focal.y : image.height / 2;
  const x = clamp(centerX - width / 2, 0, image.width - width);
  const y = clamp(centerY - height / 2, 0, image.height - height);
  return { x, y, width, height };
}

function assertLabelInsideImage(image, label) {
  const right = label.x + label.width;
  const bottom = label.y + label.height;
  if (label.x < -EPS || label.y < -EPS || right > image.width + EPS || bottom > image.height + EPS) {
    throw new InputError(
      `Labelbox liegt nicht vollständig im Bild: Label ${fmt(label.x)},${fmt(label.y)} bis ` +
      `${fmt(right)},${fmt(bottom)} · Bild 0,0 bis ${fmt(image.width)},${fmt(image.height)}. ` +
      'Koordinaten prüfen (Ursprung ist oben links).'
    );
  }
}

function assertFocalInsideImage(image, focal) {
  if (focal.x < -EPS || focal.y < -EPS || focal.x > image.width + EPS || focal.y > image.height + EPS) {
    throw new InputError(
      `Fokuspunkt ${fmt(focal.x)},${fmt(focal.y)} liegt außerhalb des Bildes ` +
      `(0,0 bis ${fmt(image.width)},${fmt(image.height)}).`
    );
  }
}

/** Prüft die Labelbox gegen jeden Zuschnitt. Wirft InputError bei unmöglicher Geometrie. */
export function evaluate({ image, label, ratios, focal = null }) {
  assertLabelInsideImage(image, label);
  if (focal) assertFocalInsideImage(image, focal);

  const labelArea = label.width * label.height;
  const tolerance = Math.max(EPS, labelArea * 1e-12);

  const results = ratios.map((ratio) => {
    const crop = cropRect(image, ratio.value, focal);
    const visibleWidth = overlap(label.x, label.x + label.width, crop.x, crop.x + crop.width);
    const visibleHeight = overlap(label.y, label.y + label.height, crop.y, crop.y + crop.height);
    const visibleArea = visibleWidth * visibleHeight;
    const survives = visibleArea >= labelArea - tolerance;

    const notes = [];
    if (!survives) {
      if (visibleArea <= 0) notes.push('Label liegt vollständig außerhalb des Zuschnitts');
      if (label.width > crop.width + EPS) notes.push('Label ist breiter als der Zuschnitt');
      if (label.height > crop.height + EPS) notes.push('Label ist höher als der Zuschnitt');
      if (notes.length === 0) notes.push('Label ragt über den Rand des Zuschnitts hinaus');
    }

    return {
      ratio: ratio.label,
      crop: { x: crop.x, y: crop.y, width: crop.width, height: crop.height },
      survives,
      label_area_lost_pct: survives ? 0 : round1((1 - visibleArea / labelArea) * 100),
      note: notes.join('; '),
    };
  });

  const cut = results.filter((r) => !r.survives);
  return {
    tool: 'label-crop-check',
    model: focal ? 'crop-around-focal-point' : 'center-crop',
    image: { width: image.width, height: image.height },
    label: { x: label.x, y: label.y, width: label.width, height: label.height },
    focal: focal ? { x: focal.x, y: focal.y } : null,
    results,
    all_survive: cut.length === 0,
    cut_count: cut.length,
    exit_code: cut.length === 0 ? 0 : 1,
  };
}

// --------------------------------------------------------------- Ausgabe ----

/** Ganzzahlen ohne Nachkomma, sonst eine Nachkommastelle. */
export function fmt(n) {
  return Number.isInteger(n) ? String(n) : String(round1(n));
}

function renderRows(rows) {
  const widths = rows[0].map((_, col) => Math.max(...rows.map((row) => String(row[col]).length)));
  return rows
    .map((row) => row.map((cell, col) => String(cell).padEnd(widths[col])).join('  ').trimEnd())
    .join('\n');
}

export function renderReport(report) {
  const { image, label, focal } = report;
  const head =
    `label-crop-check — Bild ${fmt(image.width)}x${fmt(image.height)} · ` +
    `Label ${fmt(label.x)},${fmt(label.y)} ${fmt(label.width)}x${fmt(label.height)} · ` +
    (focal
      ? `Zuschnitt um Fokuspunkt ${fmt(focal.x)},${fmt(focal.y)}`
      : 'Zuschnitt mittig (Center-Crop)');

  const rows = [['Ratio', 'Zuschnitt (BxH @ X,Y)', 'Status', 'Labelfläche verloren', 'Hinweis']];
  for (const r of report.results) {
    rows.push([
      r.ratio,
      `${fmt(r.crop.width)}x${fmt(r.crop.height)} @ ${fmt(r.crop.x)},${fmt(r.crop.y)}`,
      r.survives ? 'OK' : 'ABGESCHNITTEN',
      `${fmt(r.label_area_lost_pct)} %`,
      r.note,
    ]);
  }

  const total = report.results.length;
  const cut = report.cut_count;
  const verdict = report.all_survive
    ? `Ergebnis: Das Label überlebt alle ${total} geprüften Zuschnitte. Exit 0.`
    : `Ergebnis: ${cut} von ${total} Zuschnitten ${cut === 1 ? 'schneidet' : 'schneiden'} das Label an. Exit 1.`;

  const hint = report.all_survive
    ? 'Geometrische Vorprüfung — die Sichtprüfung am realen Post ersetzt sie nicht.'
    : 'Label näher zur Bildmitte setzen, einen Fokuspunkt vorgeben oder je Zuschnitt eine eigene Fassung ausspielen.';

  return `${head}\n\n${renderRows(rows)}\n\n${verdict}\n${hint}`;
}

const USAGE = `label-crop-check — überlebt das KI-Label die Plattform-Zuschnitte?

Aufruf:
  node check.mjs --image BxH --label X,Y,BxH [--ratios 1:1,4:5,9:16,16:9]
                 [--focal X,Y] [--json]
  node check.mjs --self-test

Argumente:
  --image BxH        Maße des Originalbildes in Pixeln, z. B. 1600x1200
  --label X,Y,BxH    Labelbox in Bildkoordinaten, Ursprung oben links
  --ratios LISTE     Zielverhältnisse, kommagetrennt (Standard: ${DEFAULT_RATIOS})
  --focal X,Y        Fokuspunkt; der Zuschnitt wird darum gelegt und an den
                     Bildgrenzen geklemmt (Standard: Bildmitte)
  --json             Ergebnis als JSON statt als Tabelle
  --self-test        eingebaute Selbsttests ausführen
  --help             diese Hilfe

Exit-Codes:
  0  alle geprüften Zuschnitte zeigen das Label vollständig
  1  mindestens ein Zuschnitt schneidet das Label an
  2  Eingabefehler

Beispiel:
  node check.mjs --image 1600x1200 --label 1150,40,120x60 --ratios 1:1,4:5,9:16`;

// ------------------------------------------------------------ Selbsttests ----

function capture() {
  const out = [];
  const err = [];
  return {
    io: { out: (s) => out.push(String(s)), err: (s) => err.push(String(s)) },
    stdout: () => out.join('\n'),
    stderr: () => err.join('\n'),
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

/** Führt die CLI im Speicher aus und liefert Exit-Code plus Ausgaben. */
function cli(argv) {
  const cap = capture();
  const code = run(argv, cap.io);
  return { code, stdout: cap.stdout(), stderr: cap.stderr() };
}

function cliJson(argv) {
  const res = cli(argv.includes('--json') ? argv : [...argv, '--json']);
  res.data = res.stdout ? JSON.parse(res.stdout) : null;
  return res;
}

const SELF_TESTS = [
  {
    name: 'Zentriertes Label überlebt alle vier Standard-Zuschnitte',
    run() {
      const res = cliJson(['--image', '1600x1200', '--label', '600,540,400x120']);
      assert(res.code === 0, `Exit 0 erwartet, war ${res.code}`);
      assert(res.data.results.length === 4, 'vier Zuschnitte erwartet');
      assert(res.data.results.every((r) => r.survives), 'alle Zuschnitte sollten halten');
      assert(res.data.all_survive === true, 'all_survive sollte true sein');
    },
  },
  {
    name: 'Label oben rechts fällt bei 9:16 weg, 1:1 und 4:5 halten es',
    run() {
      const res = cliJson(['--image', '1600x1200', '--label', '1150,40,120x60', '--ratios', '1:1,4:5,9:16']);
      assert(res.code === 1, `Exit 1 erwartet, war ${res.code}`);
      const [square, portrait, story] = res.data.results;
      assert(square.survives === true, '1:1 sollte halten');
      assert(portrait.survives === true, '4:5 sollte halten');
      assert(story.survives === false, '9:16 sollte abschneiden');
      assert(story.label_area_lost_pct === 100, `100 % Verlust erwartet, war ${story.label_area_lost_pct}`);
      assert(/vollständig außerhalb/.test(story.note), `Hinweis erwartet, war "${story.note}"`);
    },
  },
  {
    name: 'Fokuspunkt rettet dasselbe Ecken-Label im 9:16-Zuschnitt',
    run() {
      const res = cliJson([
        '--image', '1600x1200', '--label', '1150,40,120x60', '--ratios', '9:16', '--focal', '1310,600',
      ]);
      assert(res.code === 0, `Exit 0 erwartet, war ${res.code}`);
      assert(res.data.results[0].survives === true, '9:16 sollte mit Fokuspunkt halten');
      assert(res.data.model === 'crop-around-focal-point', 'Modell sollte den Fokuspunkt ausweisen');
    },
  },
  {
    name: 'Fokuspunkt am Bildrand wird geklemmt — Zuschnitt bleibt im Bild',
    run() {
      const res = cliJson([
        '--image', '1600x1200', '--label', '1150,40,120x60', '--ratios', '9:16', '--focal', '1600,0',
      ]);
      const { crop } = res.data.results[0];
      assert(crop.x >= 0 && crop.y >= 0, 'Zuschnitt darf nicht negativ beginnen');
      assert(crop.x + crop.width <= 1600 + EPS, 'Zuschnitt darf rechts nicht aus dem Bild ragen');
      assert(crop.y + crop.height <= 1200 + EPS, 'Zuschnitt darf unten nicht aus dem Bild ragen');
      assert(crop.x === 925, `geklemmtes x = 925 erwartet, war ${crop.x}`);
    },
  },
  {
    name: 'Randberührung zählt als sichtbar (Label füllt den Zuschnitt exakt)',
    run() {
      const res = cliJson(['--image', '1000x1000', '--label', '0,0,1000x1000', '--ratios', '1:1']);
      assert(res.code === 0, `Exit 0 erwartet, war ${res.code}`);
      assert(res.data.results[0].survives === true, 'exakt passendes Label sollte halten');
    },
  },
  {
    name: 'Degenerat: Label größer als der Zuschnitt — definierter Befund statt Absturz',
    run() {
      const res = cliJson(['--image', '1000x1000', '--label', '40,40,900x900', '--ratios', '9:16']);
      assert(res.code === 1, `Exit 1 erwartet, war ${res.code}`);
      const r = res.data.results[0];
      assert(r.survives === false, 'zu großes Label kann nicht überleben');
      assert(r.label_area_lost_pct === 37.5, `37,5 % Verlust erwartet, war ${r.label_area_lost_pct}`);
      assert(/breiter als der Zuschnitt/.test(r.note), `Hinweis erwartet, war "${r.note}"`);
    },
  },
  {
    name: 'Degenerat: Label ragt aus dem Bild — sauberer Fehler mit Exit 2',
    run() {
      const res = cli(['--image', '800x600', '--label', '700,500,200x150']);
      assert(res.code === 2, `Exit 2 erwartet, war ${res.code}`);
      assert(res.stdout === '', 'bei einem Eingabefehler darf keine Tabelle erscheinen');
      assert(/nicht vollständig im Bild/.test(res.stderr), `Fehlertext erwartet, war "${res.stderr}"`);
    },
  },
  {
    name: 'Degenerat: Labelbox ohne Fläche — sauberer Fehler mit Exit 2',
    run() {
      const res = cli(['--image', '800x600', '--label', '100,100,0x50']);
      assert(res.code === 2, `Exit 2 erwartet, war ${res.code}`);
      assert(/größer als 0/.test(res.stderr), `Fehlertext erwartet, war "${res.stderr}"`);
    },
  },
  {
    name: 'Degenerat: Fokuspunkt außerhalb des Bildes — sauberer Fehler mit Exit 2',
    run() {
      const res = cli(['--image', '800x600', '--label', '100,100,80x40', '--focal', '900,300']);
      assert(res.code === 2, `Exit 2 erwartet, war ${res.code}`);
      assert(/Fokuspunkt/.test(res.stderr), `Fehlertext erwartet, war "${res.stderr}"`);
    },
  },
  {
    name: 'Unbrauchbare Eingaben (Ratio 1:0, Formatfehler, Unbekanntes) — jeweils Exit 2',
    run() {
      const cases = [
        ['--image', '800x600', '--label', '100,100,80x40', '--ratios', '1:0'],
        ['--image', '800x600', '--label', '100,100,80x40', '--ratios', '16-9'],
        ['--image', '800*600', '--label', '100,100,80x40'],
        ['--image', '800x600', '--label', '100,100'],
        ['--image', '800x600', '--label', '100,100,80x40', '--unbekannt'],
        ['--label', '100,100,80x40'],
      ];
      for (const argv of cases) {
        const res = cli(argv);
        assert(res.code === 2, `Exit 2 erwartet für ${argv.join(' ')}, war ${res.code}`);
        assert(res.stderr.startsWith('Fehler:'), `Fehlermeldung erwartet für ${argv.join(' ')}`);
      }
    },
  },
];

export function runSelfTest(io) {
  io.out('label-crop-check — Selbsttest');
  let failed = 0;
  SELF_TESTS.forEach((test, index) => {
    const nr = String(index + 1).padStart(2, ' ');
    try {
      test.run();
      io.out(`  ok    ${nr}. ${test.name}`);
    } catch (error) {
      failed++;
      io.out(`  FEHLT ${nr}. ${test.name}`);
      io.out(`        ${error.message}`);
    }
  });
  const passed = SELF_TESTS.length - failed;
  io.out('');
  io.out(`${passed} von ${SELF_TESTS.length} Fällen bestanden.`);
  return failed === 0 ? 0 : 1;
}

// ------------------------------------------------------------------ Main ----

export function run(argv, io = { out: (s) => console.log(s), err: (s) => console.error(s) }) {
  try {
    const opts = parseArgs(argv);
    if (opts.help) {
      io.out(USAGE);
      return 0;
    }
    if (opts.selfTest) {
      return runSelfTest(io);
    }
    const report = evaluate({
      image: parseSize(opts.image),
      label: parseLabel(opts.label),
      ratios: parseRatios(opts.ratios),
      focal: opts.focal === null ? null : parsePoint(opts.focal),
    });
    io.out(opts.json ? JSON.stringify(report, null, 2) : renderReport(report));
    return report.exit_code;
  } catch (error) {
    if (error instanceof InputError) {
      io.err(`Fehler: ${error.message}`);
      io.err('Nutzung: node check.mjs --image BxH --label X,Y,BxH [--ratios …] [--focal X,Y] [--json]');
      return 2;
    }
    throw error;
  }
}

const invokedDirectly =
  process.argv[1] !== undefined &&
  (() => {
    try {
      return fileURLToPath(import.meta.url) === process.argv[1];
    } catch {
      return false;
    }
  })();

if (invokedDirectly) {
  process.exitCode = run(process.argv.slice(2));
}
