/* ===========================================================
   Sachkunde-Training – Interaktive Trainer
   =========================================================== */
(function () {
  'use strict';

  var SIMS = {};
  SIMS._cleanup = function () {};
  SIMS.renderFigures = function () {};

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function stars(score, total) {
    var n = score === total ? 3 : score >= total * 0.7 ? 2 : score >= total * 0.4 ? 1 : 0;
    return '<div class="stars" aria-label="' + n + ' von 3 Sternen">' + [0, 1, 2].map(function (i) {
      return '<span class="' + (i < n ? 'on' : '') + '">★</span>';
    }).join('') + '</div>';
  }
  SIMS.stars = stars;

  /* ---------- Generischer Zuordnungs-Trainer ---------- */
  function classifier(host, cfg) {
    var items = cfg.keepOrder ? cfg.items.slice() : shuffle(cfg.items);
    var idx = 0, score = 0;
    function show() {
      if (idx >= items.length) return finish();
      var it = items[idx];
      var choices = it.choices || cfg.choices;
      host.innerHTML = '<div class="card fade-in" style="max-width:760px">' +
        (cfg.intro ? '<p class="muted small" style="margin-top:0">' + cfg.intro + '</p>' : '') +
        '<div class="quiz-progress"><span>' + (idx + 1) + ' von ' + items.length + '</span><span>⭐ ' + score + '</span></div>' +
        '<div class="progress-bar" style="margin:0 0 14px"><span style="width:' + Math.round(idx / items.length * 100) + '%"></span></div>' +
        '<div class="cls-item">' + (it.icon ? '<span class="cls-icon" aria-hidden="true">' + it.icon + '</span>' : '') + '<span>' + it.t + '</span></div>' +
        '<p style="margin:0 0 8px;font-weight:700">' + (it.q || cfg.question) + '</p>' +
        '<div class="choice-grid">' + choices.map(function (c) {
          return '<button type="button" class="option big-option" data-c="' + encodeURIComponent(c) + '">' + c + '</button>';
        }).join('') + '</div><div id="clsFb"></div></div>';
    }
    function finish() {
      host.innerHTML = '<div class="card fade-in" style="max-width:760px;text-align:center">' +
        stars(score, items.length) +
        '<div class="score-big">' + score + '/' + items.length + '</div>' +
        '<p style="font-size:1.1rem;margin-top:10px">' + (score === items.length ? 'Super, alles richtig! 🏆' : score >= items.length * 0.7 ? 'Toll gemacht! 👍' : 'Schau dir die Erklärungen nochmal an und versuch es nochmal. 💪') + '</p>' +
        (cfg.summary ? '<div style="text-align:left">' + cfg.summary() + '</div>' : '') +
        '<button type="button" class="btn primary" data-restart>🔄 Nochmal</button></div>';
    }
    host.onclick = function (e) {
      if (e.target.closest('[data-restart]')) { classifier(host, cfg); return; }
      if (e.target.closest('[data-next]')) { idx++; show(); return; }
      var b = e.target.closest('.option');
      if (!b || b.disabled) return;
      var it = items[idx], chosen = decodeURIComponent(b.getAttribute('data-c')), ok = chosen === it.a;
      if (ok) score++;
      var bs = host.querySelectorAll('.option');
      for (var i = 0; i < bs.length; i++) {
        bs[i].disabled = true;
        if (decodeURIComponent(bs[i].getAttribute('data-c')) === it.a) bs[i].classList.add('correct');
      }
      if (!ok) b.classList.add('wrong');
      host.querySelector('#clsFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Richtig ist: ' + it.a) + '</b> ' + (it.e || '') + '</div>' +
        '<div class="quiz-nav"><button type="button" class="btn primary" data-next>' + (idx + 1 < items.length ? 'Weiter →' : 'Ergebnis') + '</button></div>';
      var nb = host.querySelector('[data-next]'); if (nb) nb.focus({ preventScroll: true });
    };
    show();
  }

  /* ---------- Reihenfolge-Trainer ---------- */
  function orderer(host, cfg) {
    var picked = [];
    var pool = shuffle(cfg.steps);
    while (pool.length > 1 && pool.every(function (p, i) { return p === cfg.steps[i]; })) pool = shuffle(cfg.steps);
    function render(checked) {
      var ok = checked && picked.every(function (p, i) { return p === cfg.steps[i]; });
      host.innerHTML = '<div class="card fade-in" style="max-width:760px">' +
        '<p style="margin-top:0">' + cfg.intro + '</p>' +
        '<div class="zy-pool">' + pool.filter(function (p) { return picked.indexOf(p) < 0; }).map(function (p) {
          return '<button type="button" class="btn" data-pick="' + encodeURIComponent(p) + '">' + (cfg.icons[p] || '') + ' ' + p + '</button>';
        }).join('') + '</div>' +
        '<div class="zy-slots">' + cfg.steps.map(function (_, i) {
          var p = picked[i];
          var cls = 'zy-slot' + (p ? ' filled' : '') + (checked ? (p === cfg.steps[i] ? ' ok' : ' no') : '');
          return '<div class="' + cls + '">' + (p ? (cfg.icons[p] || '') + ' <b>' + p + '</b>' : '<span class="muted">…</span>') + '</div>';
        }).join('') + '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">' +
          (picked.length ? '<button type="button" class="btn" data-undo>↩ Zurück</button>' : '') +
          '<button type="button" class="btn" data-reset>🔄 Neu</button>' +
          (picked.length === cfg.steps.length && !checked ? '<button type="button" class="btn primary" data-check>✓ Prüfen</button>' : '') +
        '</div>' +
        (checked ? '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' + (ok ? stars(1, 1) + '<b>✓ Super, alles richtig!</b>' : '<b>✗ Noch nicht ganz.</b> Die roten Felder stimmen nicht. Drück auf „Neu“ und versuch es nochmal.') +
          (cfg.solution ? '<div style="margin-top:8px">' + cfg.solution + '</div>' : '') + '</div>' : '') +
        '</div>';
    }
    host.onclick = function (e) {
      var b;
      if ((b = e.target.closest('[data-pick]'))) { picked.push(decodeURIComponent(b.getAttribute('data-pick'))); render(false); }
      else if (e.target.closest('[data-undo]')) { picked.pop(); render(false); }
      else if (e.target.closest('[data-reset]')) { orderer(host, cfg); }
      else if (e.target.closest('[data-check]')) { render(true); }
    };
    render(false);
  }

  /* ---------- 1) Pyramide einräumen ---------- */
  var STUFEN = ['🍫 Süßigkeiten, Snacks', '🧈 Fette, Öle', '🥛 Milch, Fleisch, Fisch, Eier', '🥕 Gemüse und Obst', '🍞 Brot, Getreide, Beilagen', '💧 gesunde Getränke'];
  SIMS.pyramide = function (host) {
    classifier(host, {
      choices: STUFEN,
      question: 'In welche Stufe der Pyramide gehört das?',
      intro: 'Räume die Ernährungspyramide ein, wie auf dem Arbeitsblatt 2.',
      items: [
        { icon: '🍫', t: 'Schokolade', a: STUFEN[0], e: 'Süßigkeiten stehen ganz oben: nur wenig davon.' },
        { icon: '🍬', t: 'Gummibärchen', a: STUFEN[0], e: 'Süßigkeit: nur wenig.' },
        { icon: '🍩', t: 'Donut', a: STUFEN[0], e: 'Süß und fettig: ganz oben.' },
        { icon: '🫒', t: 'Öl', a: STUFEN[1], e: 'Öl ist ein Fett.' },
        { icon: '🧈', t: 'Butter', a: STUFEN[1], e: 'Butter ist ein Fett.' },
        { icon: '🧀', t: 'Käse', a: STUFEN[2], e: 'Käse ist ein Milchprodukt.' },
        { icon: '🥛', t: 'Milch', a: STUFEN[2], e: 'Milch gehört zur Milch-Stufe.' },
        { icon: '🐟', t: 'Fisch', a: STUFEN[2], e: 'Fisch, Fleisch, Eier: mäßig essen.' },
        { icon: '🥚', t: 'Ei', a: STUFEN[2], e: 'Eier gehören zu Milch, Fleisch, Fisch, Eier.' },
        { icon: '🍒', t: 'Kirschen', a: STUFEN[3], e: 'Obst: viel davon essen.' },
        { icon: '🍅', t: 'Tomaten', a: STUFEN[3], e: 'Gemüse: viel davon essen.' },
        { icon: '🍌', t: 'Banane', a: STUFEN[3], e: 'Obst.' },
        { icon: '🥕', t: 'Karotte', a: STUFEN[3], e: 'Gemüse.' },
        { icon: '🍚', t: 'Reis', a: STUFEN[4], e: 'Reis ist eine Beilage.' },
        { icon: '🍞', t: 'Vollkornbrot', a: STUFEN[4], e: 'Brot aus Getreide.' },
        { icon: '🥔', t: 'Kartoffeln', a: STUFEN[4], e: 'Kartoffeln sind eine Beilage.' },
        { icon: '🥣', t: 'Müsli', a: STUFEN[4], e: 'Müsli ist aus Getreide.' },
        { icon: '💧', t: 'Wasser', a: STUFEN[5], e: 'Ganz unten: am meisten davon trinken.' },
        { icon: '🫖', t: 'Tee (ohne Zucker)', a: STUFEN[5], e: 'Ungesüßter Tee ist ein gesundes Getränk.' },
        { icon: '🧃', t: 'Saftschorle', a: STUFEN[5], e: 'Saft mit viel Wasser gemischt.' }
      ]
    });
  };

  /* ---------- 2) Viel oder wenig? ---------- */
  var MENGE = ['🟢 viel', '🟡 mäßig', '🔴 wenig'];
  SIMS.menge = function (host) {
    classifier(host, {
      choices: MENGE,
      question: 'Wie viel davon sollst du essen oder trinken?',
      intro: 'Denk an die Pyramide: unten viel, oben wenig.',
      items: [
        { icon: '💧', t: 'Wasser', a: MENGE[0], e: 'Am meisten!' },
        { icon: '🍝', t: 'Nudeln', a: MENGE[0], e: 'Getreide: viel.' },
        { icon: '🥦', t: 'Brokkoli', a: MENGE[0], e: 'Gemüse: viel.' },
        { icon: '🍎', t: 'Apfel', a: MENGE[0], e: 'Obst: viel.' },
        { icon: '🍞', t: 'Brot', a: MENGE[0], e: 'Getreide: viel.' },
        { icon: '🧀', t: 'Käse', a: MENGE[1], e: 'Milchprodukte: mäßig.' },
        { icon: '🍗', t: 'Hähnchen', a: MENGE[1], e: 'Fleisch: mäßig.' },
        { icon: '🥚', t: 'Ei', a: MENGE[1], e: 'Eier: mäßig.' },
        { icon: '🧈', t: 'Butter', a: MENGE[2], e: 'Fett: wenig.' },
        { icon: '🍟', t: 'Pommes', a: MENGE[2], e: 'In Fett gebacken: wenig.' },
        { icon: '🍭', t: 'Lutscher', a: MENGE[2], e: 'Süßigkeit: wenig.' },
        { icon: '🥤', t: 'Cola', a: MENGE[2], e: 'Sehr viel Zucker: wenig.' }
      ]
    });
  };

  /* ---------- 3) Tier oder Pflanze ---------- */
  var TP = ['🐄 vom Tier', '🌱 von der Pflanze'];
  SIMS.tierpflanze = function (host) {
    var T = TP[0], P = TP[1];
    classifier(host, {
      choices: TP,
      question: 'Woher kommt das?',
      intro: 'Rot = vom Tier, grün = von der Pflanze (AB 3).',
      items: [
        { icon: '🫑', t: 'Paprika', a: P, e: 'Gemüse wächst an Pflanzen.' },
        { icon: '🧀', t: 'Käse', a: T, e: 'Aus Milch gemacht.' },
        { icon: '🍗', t: 'Hähnchen', a: T, e: 'Fleisch vom Huhn.' },
        { icon: '🍓', t: 'Erdbeeren', a: P, e: 'Obst.' },
        { icon: '🍎', t: 'Apfel', a: P, e: 'Wächst am Baum.' },
        { icon: '🐟', t: 'Fisch', a: T, e: 'Fisch ist ein Tier.' },
        { icon: '🥛', t: 'Joghurt', a: T, e: 'Aus Milch gemacht.' },
        { icon: '🥒', t: 'Gurke', a: P, e: 'Gemüse.' },
        { icon: '🥩', t: 'Kotelett', a: T, e: 'Fleisch vom Schwein.' },
        { icon: '🌭', t: 'Wurst', a: T, e: 'Aus Fleisch gemacht.' },
        { icon: '🥛', t: 'Milch', a: T, e: 'Von der Kuh.' },
        { icon: '🥬', t: 'Salat', a: P, e: 'Gemüse.' },
        { icon: '🍐', t: 'Birne', a: P, e: 'Obst.' },
        { icon: '🍞', t: 'Brot', a: P, e: 'Aus Mehl, und Mehl kommt aus Getreide.' },
        { icon: '🥔', t: 'Kartoffeln', a: P, e: 'Wachsen in der Erde.' },
        { icon: '🍌', t: 'Banane', a: P, e: 'Obst.' },
        { icon: '🍅', t: 'Tomate', a: P, e: 'Gemüse.' },
        { icon: '🧈', t: 'Butter', a: T, e: 'Aus Milch gemacht.' },
        { icon: '🫒', t: 'Olivenöl', a: P, e: 'Aus Oliven gepresst.' },
        { icon: '🍯', t: 'Honig', a: T, e: 'Bienen machen Honig.' },
        { icon: '🥚', t: 'Ei', a: T, e: 'Vom Huhn.' },
        { icon: '🍟', t: 'Pommes', a: P, e: 'Aus Kartoffeln.' }
      ]
    });
  };

  /* ---------- 4) Gesund oder selten? ---------- */
  var GS = ['🟢 gesund, reichlich essen', '🔴 lieber selten'];
  SIMS.gesund = function (host) {
    var G = GS[0], S = GS[1];
    classifier(host, {
      choices: GS,
      question: 'Gesund oder lieber selten?',
      intro: 'Denk an den Text auf AB 4: Zu viel Fett und Zucker → lieber selten.',
      items: [
        { icon: '🍎', t: 'Apfel', a: G }, { icon: '🥦', t: 'Brokkoli', a: G },
        { icon: '🍝', t: 'Nudeln', a: G }, { icon: '🍞', t: 'Brot', a: G },
        { icon: '🥣', t: 'Cornflakes', a: G, e: 'Laut AB ein Getreideprodukt (am besten ohne Zuckerguss).' },
        { icon: '🫘', t: 'Bohnen', a: G, e: 'Hülsenfrucht.' }, { icon: '🟢', t: 'Erbsen', a: G, e: 'Hülsenfrucht.' },
        { icon: '🍚', t: 'Reis', a: G }, { icon: '🥛', t: 'Joghurt', a: G, e: 'Milchprodukt.' },
        { icon: '🧀', t: 'Quark', a: G, e: 'Milchprodukt.' }, { icon: '🐟', t: 'Fisch', a: G },
        { icon: '🍬', t: 'Bonbons', a: S, e: 'Viel Zucker.' }, { icon: '🍪', t: 'Kekse', a: S, e: 'Zucker und Fett.' },
        { icon: '🍭', t: 'Lutscher', a: S, e: 'Viel Zucker.' }, { icon: '🧸', t: 'Gummibärchen', a: S, e: 'Viel Zucker.' },
        { icon: '🍰', t: 'Kuchen', a: S, e: 'Zucker und Fett.' }, { icon: '🎂', t: 'Torte', a: S, e: 'Zucker und Fett.' },
        { icon: '🍟', t: 'Pommes', a: S, e: 'Viel Fett.' }
      ]
    });
  };

  /* ---------- 5) Nährstoffgruppen ---------- */
  var NG = ['🧱 Baustoffe', '🔥 Brennstoffe', '☂️ Reglerstoffe'];
  SIMS.naehrstoffe = function (host) {
    var B = NG[0], Br = NG[1], R = NG[2];
    classifier(host, {
      choices: NG,
      question: 'Zu welcher Gruppe gehört das?',
      intro: 'Baustoffe = wachsen · Brennstoffe = Wärme und Kraft · Reglerstoffe = gegen Krankheiten.',
      items: [
        { icon: '🥚', t: 'Eiweiß', a: B, e: 'Eiweiß lässt den Körper wachsen.' },
        { icon: '🦴', t: 'Mineralstoffe', a: B, e: 'Zum Beispiel für Knochen und Zähne.' },
        { icon: '🍞', t: 'Kohlenhydrate', a: Br, e: 'Sie geben Kraft und Energie.' },
        { icon: '🧈', t: 'Fette', a: Br, e: 'Sie geben Wärme und Kraft.' },
        { icon: '🍊', t: 'Vitamine', a: R, e: 'Sie wehren Krankheiten ab.' },
        { icon: '💧', t: 'Wasser', a: R, e: 'Es regelt die Vorgänge im Körper.' },
        { icon: '📏', t: 'lassen den Körper wachsen und halten ihn am Leben', a: B },
        { icon: '⚽', t: 'geben dem Körper Wärme und Kraft', a: Br },
        { icon: '☂️', t: 'wehren Krankheiten ab und regeln die Vorgänge im Körper', a: R },
        { icon: '🥔', t: 'Stärke', a: Br, e: 'Stärke ist ein Kohlenhydrat, also ein Brennstoff.' }
      ]
    });
  };

  /* ---------- 6) Weg der Nahrung ---------- */
  var WEG = ['Mund', 'Speiseröhre', 'Magen und Dünndarm', 'Dickdarm'];
  var WEG_IC = { 'Mund': '👄', 'Speiseröhre': '🛝', 'Magen und Dünndarm': '🌀', 'Dickdarm': '🚽' };
  SIMS.wegordnen = function (host) {
    orderer(host, {
      steps: WEG, icons: WEG_IC,
      intro: 'Tippe die Stationen in der <b>richtigen Reihenfolge</b> an: Wo geht das Essen zuerst hin?',
      solution: 'Mund → Speiseröhre → Magen und Dünndarm → Dickdarm'
    });
  };
  SIMS.wegsaetze = function (host) {
    classifier(host, {
      choices: WEG.map(function (w) { return WEG_IC[w] + ' ' + w; }),
      question: 'Wo passiert das?',
      intro: 'Ordne die Sätze vom Arbeitsblatt 6 zu.',
      items: [
        { icon: '🦷', t: 'Dort werden die Nahrungsmittel zerkleinert.', a: '👄 Mund' },
        { icon: '⬇️', t: 'Der Speisebrei wird in den Magen transportiert.', a: '🛝 Speiseröhre' },
        { icon: '🌀', t: 'Dort findet die Verdauung statt.', a: '🌀 Magen und Dünndarm' },
        { icon: '🚽', t: 'Unbrauchbare Speisereste werden ausgeschieden.', a: '🚽 Dickdarm' },
        { icon: '💦', t: 'Der Speichel macht das Essen weich.', a: '👄 Mund' },
        { icon: '🩸', t: 'Die Nährstoffe gehen ins Blut.', a: '🌀 Magen und Dünndarm' },
        { icon: '🧪', t: 'Der Magensaft zersetzt das Essen.', a: '🌀 Magen und Dünndarm' },
        { icon: '🧵', t: 'Ein Schlauch vom Hals bis zum Magen.', a: '🛝 Speiseröhre' }
      ]
    });
  };

  /* ---------- 7) Aufgaben von Fett ---------- */
  var FA = ['⚡ Energie', '🧣 hält warm', '🛡️ schützt Organe', '🥕 hilft bei Vitaminen', '⛺ Baustein der Zellen'];
  SIMS.fettaufgaben = function (host) {
    classifier(host, {
      choices: FA,
      question: 'Welche Aufgabe von Fett ist gemeint?',
      intro: 'Fette haben 5 Aufgaben (AB 8).',
      items: [
        { icon: '🏃', t: 'Fett liefert besonders viel Kraft zum Laufen und Spielen.', a: FA[0] },
        { icon: '🗄️', t: 'Der Körper speichert übrige Energie als Vorrat.', a: FA[0] },
        { icon: '❄️', t: 'Eine Fettschicht unter der Haut schützt vor Kälte.', a: FA[1] },
        { icon: '🫘', t: 'Die Nieren sind von einem weichen Polster umgeben.', a: FA[2] },
        { icon: '🛒', t: 'Ohne Fett kann der Körper A, D, E und K nicht aufnehmen.', a: FA[3] },
        { icon: '🔬', t: 'Fett ist Teil der Hülle, die die Zelle wie ein Zelt schützt.', a: FA[4] }
      ]
    });
  };

  /* ---------- 8) Fettfleckprobe ---------- */
  var FOODS = [
    { n: 'Wasser', i: '💧', f: 0 }, { n: 'Öl', i: '🫒', f: 2 }, { n: 'Gurke', i: '🥒', f: 0 }, { n: 'Walnuss', i: '🌰', f: 2 },
    { n: 'Butter', i: '🧈', f: 2 }, { n: 'Chips', i: '🍟', f: 2 }, { n: 'Kartoffel', i: '🥔', f: 0 }, { n: 'Käse', i: '🧀', f: 2 }
  ];
  var FLABEL = ['kein Fett', 'wenig Fett', 'viel Fett'];
  SIMS.fettfleck = function (host) {
    var guess = {}, applied = {}, dry = false, answers = {}, checked = false;
    var POS = [[70, 70], [190, 50], [310, 70], [90, 170], [210, 150], [330, 170], [150, 250], [270, 250]];

    function paper() {
      var s = '<svg viewBox="0 0 400 310" class="filter-svg" role="img" aria-label="Filterpapier mit 8 Kreisen">' +
        '<path d="M10 20 L390 20 L300 300 L100 300 Z" fill="#f7e3c4" stroke="#c8a676" stroke-width="2"/>';
      FOODS.forEach(function (f, i) {
        var x = POS[i][0], y = POS[i][1];
        var spot = '';
        if (applied[i]) {
          if (!dry) spot = '<circle cx="' + x + '" cy="' + y + '" r="24" fill="#b9a07a" opacity=".55"/>';
          else if (f.f > 0) spot = '<circle cx="' + x + '" cy="' + y + '" r="24" fill="#fffbe6" opacity="' + (f.f === 2 ? .9 : .45) + '"/><circle cx="' + x + '" cy="' + y + '" r="24" fill="none" stroke="#e0b24a" stroke-width="1"/>';
        }
        s += '<g class="spot-btn" data-apply="' + i + '" tabindex="0" role="button" aria-label="' + f.n + ' auftragen">' +
          '<circle cx="' + x + '" cy="' + y + '" r="28" fill="transparent" stroke="#8a6d3b" stroke-width="2" stroke-dasharray="4 3"/>' + spot +
          '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" font-size="20">' + (applied[i] ? '' : f.i) + '</text>' +
          '<text x="' + x + '" y="' + (y + 44) + '" text-anchor="middle" font-size="12" fill="#5c4630" font-weight="700">' + f.n + '</text></g>';
      });
      if (dry) s += '<text x="200" y="14" text-anchor="middle" font-size="12" fill="#888">☀️ gegen das Licht gehalten</text>';
      return s + '</svg>';
    }

    function render() {
      var nApplied = Object.keys(applied).length, nGuess = Object.keys(guess).length;
      var step = nGuess < FOODS.length ? 1 : nApplied < FOODS.length ? 2 : !dry ? 3 : 4;
      var html = '<div class="card fade-in"><div class="ff-steps">' +
        ['Vermuten', 'Auftragen', 'Trocknen', 'Auswerten'].map(function (t, i) { return '<span class="' + (step === i + 1 ? 'on' : step > i + 1 ? 'done' : '') + '">' + (i + 1) + '. ' + t + '</span>'; }).join('') + '</div>';

      if (step === 1) {
        html += '<p><b>Schritt 1: Vermute!</b> In welchem Lebensmittel ist Fett? Tippe bei jedem auf „Fett“ oder „kein Fett“.</p><div class="guess-grid">' +
          FOODS.map(function (f, i) {
            return '<div class="guess-row"><span class="g-name">' + f.i + ' ' + f.n + '</span>' +
              '<button type="button" class="pill' + (guess[i] === 1 ? ' sel' : '') + '" data-guess="' + i + ':1">Fett</button>' +
              '<button type="button" class="pill' + (guess[i] === 0 ? ' sel' : '') + '" data-guess="' + i + ':0">kein Fett</button></div>';
          }).join('') + '</div>';
      } else {
        html += '<div class="ff-layout"><div>' + paper() + '</div><div>';
        if (step === 2) html += '<p><b>Schritt 2: Auftragen.</b> Tippe auf jeden Kreis, um das Lebensmittel mit dem Wattestäbchen aufzutragen bzw. auszudrücken. (' + nApplied + '/8)</p><button type="button" class="btn small" data-all>Alle auftragen</button>';
        if (step === 3) html += '<p><b>Schritt 3: Trocknen lassen.</b> Jetzt sind alle Flecken nass. Lass das Papier ein paar Minuten trocknen und halte es dann gegen das Licht.</p><button type="button" class="btn primary" data-dry>☀️ Trocknen lassen</button>';
        if (step === 4) {
          html += '<p><b>Schritt 4: Auswerten.</b> Schau dir das Papier an. Durchsichtige (helle) Flecken = Fett. Fleck weg = kein Fett. Kreuze an:</p><div class="guess-grid">' +
            FOODS.map(function (f, i) {
              var cls = function (v) { return 'pill' + (answers[i] === v ? ' sel' : '') + (checked ? (v === f.f ? ' right' : answers[i] === v ? ' wrongp' : '') : ''); };
              return '<div class="guess-row"><span class="g-name">' + f.i + ' ' + f.n + '</span>' +
                [2, 1, 0].map(function (v) { return '<button type="button" class="' + cls(v) + '" data-ans="' + i + ':' + v + '"' + (checked ? ' disabled' : '') + '>' + FLABEL[v] + '</button>'; }).join('') + '</div>';
            }).join('') + '</div>';
          if (!checked && Object.keys(answers).length === FOODS.length) html += '<button type="button" class="btn primary" data-checkff>✓ Prüfen</button>';
        }
        html += '</div></div>';
      }

      if (checked) {
        var sc = FOODS.filter(function (f, i) { return answers[i] === f.f; }).length;
        var gs = FOODS.filter(function (f, i) { return guess[i] === (f.f > 0 ? 1 : 0); }).length;
        html += '<div class="feedback ' + (sc === 8 ? 'ok' : 'no') + '">' + stars(sc, 8) + '<b>Auswertung: ' + sc + ' von 8 richtig.</b> Deine Vermutungen am Anfang waren ' + gs + ' von 8 richtig.<br>' +
          'Kein Fett: Wasser, Gurke, Kartoffel (der Fleck ist weggetrocknet). Viel Fett: Öl, Walnuss, Butter, Chips, Käse.</div>' +
          '<button type="button" class="btn" data-restartff style="margin-top:10px">🔄 Neues Filterpapier</button>';
      }
      html += '</div>';
      host.innerHTML = html;
    }

    host.onclick = function (e) {
      var b;
      if ((b = e.target.closest('[data-guess]'))) { var g = b.getAttribute('data-guess').split(':'); guess[g[0]] = +g[1]; render(); }
      else if ((b = e.target.closest('[data-apply]'))) { if (Object.keys(guess).length === FOODS.length && !dry) { applied[b.getAttribute('data-apply')] = 1; render(); } }
      else if (e.target.closest('[data-all]')) { FOODS.forEach(function (_, i) { applied[i] = 1; }); render(); }
      else if (e.target.closest('[data-dry]')) { dry = true; render(); }
      else if ((b = e.target.closest('[data-ans]'))) { var a = b.getAttribute('data-ans').split(':'); answers[a[0]] = +a[1]; render(); }
      else if (e.target.closest('[data-checkff]')) { checked = true; render(); }
      else if (e.target.closest('[data-restartff]')) { SIMS.fettfleck(host); }
    };
    host.onkeydown = function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-apply]')) { e.preventDefault(); e.target.closest('[data-apply]').dispatchEvent(new MouseEvent('click', { bubbles: true })); }
    };
    render();
  };

  /* ---------- 9) Jodprobe ---------- */
  var JOD = [
    { n: 'Kartoffel', i: '🥔', s: true, e: 'Die Kartoffel ist ein Stärkespeicher der Pflanze.' },
    { n: 'Brot', i: '🍞', s: true, e: 'Brot ist aus Mehl, und Mehl hat viel Stärke.' },
    { n: 'Nudeln', i: '🍝', s: true, e: 'Nudeln sind aus Mehl (Getreide).' },
    { n: 'Reis', i: '🍚', s: true, e: 'Reiskörner speichern Stärke.' },
    { n: 'Mehl', i: '🌾', s: true, e: 'Mehl ist fast nur Stärke.' },
    { n: 'Haferflocken', i: '🥣', s: true, e: 'Getreide, also Stärke.' },
    { n: 'Gurke', i: '🥒', s: false, e: 'Gurke ist fast nur Wasser.' },
    { n: 'Käse', i: '🧀', s: false, e: 'Käse hat Fett und Eiweiß, aber keine Stärke.' },
    { n: 'Butter', i: '🧈', s: false, e: 'Butter ist Fett.' },
    { n: 'Wurst', i: '🌭', s: false, e: 'Fleisch hat keine Stärke.' },
    { n: 'Zucker', i: '🧂', s: false, e: 'Zucker ist ein Kohlenhydrat, aber keine Stärke. Er färbt sich nicht.' },
    { n: 'Apfel', i: '🍎', s: false, e: 'Ein reifer Apfel hat Zucker, aber kaum Stärke.' }
  ];
  SIMS.jodprobe = function (host) {
    var order = shuffle(JOD).slice(0, 8), idx = 0, score = 0, phase = 'guess', lastGuess = null;
    function plate(item, dropped) {
      var col = !dropped ? 'none' : item.s ? '#1b1340' : '#b5651d';
      return '<svg viewBox="0 0 220 160" class="jod-svg" aria-hidden="true">' +
        '<ellipse cx="110" cy="105" rx="95" ry="40" fill="#fff" stroke="#bbb" stroke-width="2"/>' +
        '<ellipse cx="110" cy="100" rx="70" ry="28" fill="#f4f4f4"/>' +
        '<text x="110" y="115" text-anchor="middle" font-size="54">' + item.i + '</text>' +
        (dropped ? '<ellipse class="jod-drop" cx="112" cy="96" rx="22" ry="12" fill="' + col + '" opacity=".88"/>' : '') +
        '<g transform="translate(150 0)"><rect x="0" y="0" width="16" height="34" rx="4" fill="#ffd8a8" stroke="#a0522d"/><rect x="5" y="34" width="6" height="16" fill="#a0522d"/>' +
        (dropped ? '' : '<circle cx="8" cy="56" r="4" fill="#b5651d"/>') + '</g></svg>';
    }
    function render() {
      if (idx >= order.length) {
        host.innerHTML = '<div class="card fade-in" style="text-align:center;max-width:640px">' + stars(score, order.length) +
          '<div class="score-big">' + score + '/' + order.length + '</div><p>' + (score === order.length ? 'Du bist ein echter Stärke-Detektiv! 🕵️' : 'Gut geforscht! Merke: Getreide und Kartoffeln haben Stärke.') + '</p>' +
          '<button type="button" class="btn primary" data-restartj>🔄 Nochmal</button></div>';
        return;
      }
      var it = order[idx];
      var h = '<div class="card fade-in" style="max-width:640px"><div class="quiz-progress"><span>Probe ' + (idx + 1) + ' von ' + order.length + '</span><span>⭐ ' + score + '</span></div>' +
        '<div class="progress-bar" style="margin:0 0 14px"><span style="width:' + Math.round(idx / order.length * 100) + '%"></span></div>' +
        '<div style="text-align:center">' + plate(it, phase === 'result') + '<h3>' + it.n + '</h3></div>';
      if (phase === 'guess') {
        h += '<p style="font-weight:700">Was glaubst du: Wird ' + it.n + ' mit Jod blau-schwarz?</p><div class="choice-grid">' +
          '<button type="button" class="option big-option" data-jg="1">🔵 Ja, da ist Stärke drin</button><button type="button" class="option big-option" data-jg="0">🟤 Nein, keine Stärke</button></div>';
      } else {
        var ok = lastGuess === it.s;
        h += '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (it.s ? '🔵 Blau-schwarz: Stärke!' : '🟤 Bleibt gelb-braun: keine Stärke.') + '</b> ' + (ok ? '✓ Gut vermutet!' : '✗ Da hast du dich vertan.') + ' ' + it.e + '</div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" data-nextj>' + (idx + 1 < order.length ? 'Nächste Probe →' : 'Ergebnis') + '</button></div>';
      }
      host.innerHTML = h + '</div>';
    }
    host.onclick = function (e) {
      var b;
      if ((b = e.target.closest('[data-jg]'))) { lastGuess = b.getAttribute('data-jg') === '1'; if (lastGuess === order[idx].s) score++; phase = 'result'; render(); }
      else if (e.target.closest('[data-nextj]')) { idx++; phase = 'guess'; render(); }
      else if (e.target.closest('[data-restartj]')) { SIMS.jodprobe(host); }
    };
    render();
  };

  window.SIMS = SIMS;
})();
