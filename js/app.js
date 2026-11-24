/* ===========================================================
   Sachkunde-Training – App (Router, Seiten, Quiz, Fortschritt)
   =========================================================== */
(function () {
  'use strict';

  var TOPICS = (window.TOPICS || []).slice().sort(function (a, b) { return a.order - b.order; });
  var app = document.getElementById('app');

  /* ---------- Speicher (robust, falls localStorage blockiert ist) ---------- */
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem('sk:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem('sk:' + k, JSON.stringify(v)); } catch (e) { /* egal */ }
    }
  };
  window.SK_STORE = store;

  /* ---------- Hilfsfunktionen ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function topicById(id) {
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i];
    return null;
  }
  function figs(el) { if (window.SIMS && window.SIMS.renderFigures) window.SIMS.renderFigures(el); }

  /* ---------- Fortschritt ---------- */
  function getDone(tid) { return store.get('done:' + tid, {}); }
  function setDone(tid, idx, val) {
    var d = getDone(tid); if (val) d[idx] = 1; else delete d[idx]; store.set('done:' + tid, d);
  }
  function getQuizBest(tid) { return store.get('quiz:' + tid, null); }
  function progressOf(t) {
    var total = (t.tasks || []).length;
    var done = Object.keys(getDone(t.id)).filter(function (k) { return +k < total; }).length;
    var q = getQuizBest(t.id);
    var taskPart = total ? done / total : 0;
    var quizPart = q ? q.best / q.total : 0;
    return { pct: Math.round((taskPart * 0.6 + quizPart * 0.4) * 100), done: done, total: total, quiz: q };
  }

  function starRow(pct) {
    var n = pct >= 100 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
    return '<span class="mini-stars" aria-label="' + n + ' von 3 Sternen">' + '★★★'.split('').map(function (c, i) { return '<span class="' + (i < n ? 'on' : '') + '">★</span>'; }).join('') + '</span>';
  }
  function totalStars() {
    return TOPICS.reduce(function (sum, t) {
      var q = getQuizBest(t.id); if (!q) return sum;
      var r = q.best / q.total;
      return sum + (r === 1 ? 3 : r >= 0.7 ? 2 : r >= 0.4 ? 1 : 0);
    }, 0);
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    store.set('theme', cur);
  });

  /* ---------- Router ---------- */
  function parseHash() {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    return h.split('/').filter(Boolean);
  }

  function setNav(key) {
    var links = document.querySelectorAll('[data-nav]');
    for (var i = 0; i < links.length; i++) links[i].classList.toggle('active', links[i].getAttribute('data-nav') === key);
  }

  var lastRouteKey = '';
  function route() {
    var p = parseHash();
    var key = p.slice(0, 2).join('/');
    var keepScroll = (key === lastRouteKey && p[0] === 't');
    lastRouteKey = key;

    if (window.SIMS && window.SIMS._cleanup) window.SIMS._cleanup();
    app.onclick = null;

    if (p[0] === 't' && topicById(p[1])) {
      setNav('home');
      renderTopic(topicById(p[1]), p[2] || 'lernen', p[3]);
    } else if (p[0] === 'spickzettel') {
      setNav('spick'); renderFormeln();
    } else if (p[0] === 'probe-ka') {
      setNav('probe'); renderProbe();
    } else {
      setNav('home'); renderHome();
    }
    if (!keepScroll) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- Startseite ---------- */
  function renderHome() {
    document.title = 'Sachkunde-Training für Ismail';
    var cards = TOPICS.map(function (t) {
      var pr = progressOf(t);
      return '<a class="topic-card" href="#/t/' + t.id + '" style="--tc:' + t.color + '">' +
        '<div class="topic-icon" aria-hidden="true">' + t.icon + '</div>' +
        '<div style="flex:1;min-width:0">' +
          '<h3>' + esc(t.title) + '</h3><p>' + esc(t.short) + '</p>' +
          '<div class="progress-bar" aria-hidden="true"><span style="width:' + pr.pct + '%"></span></div>' +
          '<div class="progress-label">' + starRow(pr.pct) + ' ' + pr.done + '/' + pr.total + ' Aufgaben' +
            (pr.quiz ? ' · Quiz ' + pr.quiz.best + '/' + pr.quiz.total : '') + '</div>' +
        '</div></a>';
    }).join('');

    app.innerHTML =
      '<section class="hero fade-in">' +
        '<div class="hero-deco" aria-hidden="true">🥕🍎🥛🍞</div>' +
        '<h1>Hallo Ismail! 👋</h1>' +
        '<p>Hier lernst du alles zum Sachkunde-Thema <b>Ernährung</b>. Such dir ein Thema aus. Zu jedem Thema gibt es eine Erklärung, Videos, Spiele zum Üben, Aufgaben wie auf deinen Arbeitsblättern und ein Quiz. Für jedes Quiz bekommst du bis zu 3 Sterne ⭐.</p>' +
        '<p class="star-total">Deine Sterne: <b>' + totalStars() + ' / ' + (TOPICS.length * 3) + '</b> ⭐</p>' +
        '<ol class="steps"><li>Lesen</li><li>Video</li><li>Üben</li><li>Aufgaben</li><li>Quiz</li></ol>' +
        '<div class="hero-actions">' +
          '<a class="btn primary" href="#/probe-ka">🎯 Probetest starten</a>' +
          '<a class="btn" href="#/spickzettel">📋 Merkzettel</a>' +
        '</div>' +
      '</section>' +
      '<div class="section-title"><h2>Themen</h2><span class="muted small">' + TOPICS.length + ' Themen</span></div>' +
      '<div class="topic-grid fade-in">' + cards + '</div>' +
      '<div class="quick-grid">' +
        '<a class="card quick-card" href="#/spickzettel"><span class="big">📋</span><div><b>Merkzettel</b><br><span class="muted small">Alles Wichtige auf einen Blick</span></div></a>' +
        '<a class="card quick-card" href="#/probe-ka"><span class="big">🎯</span><div><b>Probetest</b><br><span class="muted small">Gemischte Aufgaben aus allen Themen</span></div></a>' +
      '</div>';
  }

  /* ---------- Themenseite ---------- */
  function tabsFor(t) {
    var tabs = [{ id: 'lernen', label: '📖 Lernen' }];
    if (t.videos && t.videos.length) tabs.push({ id: 'videos', label: '🎬 Videos' });
    if (t.sims && t.sims.length) tabs.push({ id: 'trainer', label: '🎮 Üben' });
    tabs.push({ id: 'aufgaben', label: '✏️ Aufgaben' });
    tabs.push({ id: 'quiz', label: '❓ Quiz' });
    return tabs;
  }

  function renderTopic(t, tab, sub) {
    document.title = t.title + ' · Sachkunde-Training';
    var tabs = tabsFor(t);
    if (!tabs.some(function (x) { return x.id === tab; })) tab = 'lernen';

    var head =
      '<a class="back" href="#/">← Alle Themen</a>' +
      '<div class="topic-head"><div class="topic-icon" aria-hidden="true">' + t.icon + '</div>' +
      '<div><h1>' + esc(t.title) + '</h1><div class="muted small">' + esc(t.short) + '</div></div></div>' +
      '<nav class="tabs" aria-label="Bereiche">' + tabs.map(function (x) {
        return '<a class="tab' + (x.id === tab ? ' active' : '') + '" href="#/t/' + t.id + '/' + x.id + '">' + x.label + '</a>';
      }).join('') + '</nav>';

    app.innerHTML = '<div style="--tc:' + t.color + '">' + head + '<div id="tabBody" class="fade-in"></div></div>';
    var body = document.getElementById('tabBody');

    if (tab === 'lernen') renderLearn(t, body);
    else if (tab === 'videos') renderVideos(t, body);
    else if (tab === 'trainer') renderTrainer(t, body, sub);
    else if (tab === 'aufgaben') renderTasks(t, body);
    else if (tab === 'quiz') renderQuiz(t, body);

    // aktiven Tab in Sicht scrollen (Handy)
    var act = app.querySelector('.tab.active');
    if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  function renderLearn(t, body) {
    var toc = '<div class="toc">' + t.learn.map(function (s, i) {
      return '<a href="#" data-jump="ls-' + i + '">' + esc(s.title) + '</a>';
    }).join('') + '</div>';
    var secs = t.learn.map(function (s, i) {
      return '<section class="card learn-section" id="ls-' + i + '"><h2>' + esc(s.title) + '</h2>' + s.html + '</section>';
    }).join('');
    var next = '<div class="card" style="margin-top:14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between">' +
      '<span><b>Fertig gelesen?</b> <span class="muted">Dann probier es aus!</span></span>' +
      '<span style="display:flex;gap:8px;flex-wrap:wrap">' +
      (t.videos && t.videos.length ? '<a class="btn small" href="#/t/' + t.id + '/videos">🎬 Videos</a>' : '') +
      (t.sims && t.sims.length ? '<a class="btn small" href="#/t/' + t.id + '/trainer">🎮 Üben</a>' : '') +
      '<a class="btn small primary" href="#/t/' + t.id + '/aufgaben">✏️ Zu den Aufgaben</a></span></div>';
    body.innerHTML = toc + secs + next;
    figs(body);
    body.addEventListener('click', function (e) {
      var a = e.target.closest('[data-jump]');
      if (!a) return;
      e.preventDefault();
      var el = document.getElementById(a.getAttribute('data-jump'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function renderVideos(t, body) {
    var cards = t.videos.map(function (v) {
      return '<article class="card video-card">' +
        '<div class="video-frame" data-vid="' + esc(v.id) + '">' +
          '<button type="button" aria-label="Video abspielen: ' + esc(v.title) + '">' +
            '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg">' +
            '<span class="play" aria-hidden="true"></span></button></div>' +
        '<div class="video-body"><h3>' + esc(v.title) + '</h3>' +
          (v.desc ? '<p>' + esc(v.desc) + '</p>' : '') +
          '<div class="links"><a href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">Auf YouTube öffnen ↗</a></div>' +
        '</div></article>';
    }).join('');
    var search = t.ytSearch ? '<p class="muted small" style="margin-top:14px">Video geht nicht? <a target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(t.ytSearch) + '">Weitere Videos suchen ↗</a></p>' : '';
    body.innerHTML = '<p class="muted">Tippe auf ein Video, um es hier abzuspielen. Frag am besten einen Erwachsenen, bevor du auf YouTube weiterklickst.</p><div class="video-grid">' + cards + '</div>' + search;
    body.addEventListener('click', function (e) {
      var b = e.target.closest('.video-frame button');
      if (!b) return;
      var fr = b.parentNode, id = fr.getAttribute('data-vid');
      fr.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
        '?autoplay=1&rel=0" title="YouTube-Video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    });
  }

  function renderTrainer(t, body, sub) {
    var sims = t.sims;
    var cur = sims[0];
    for (var i = 0; i < sims.length; i++) if (sims[i].id === sub) cur = sims[i];
    var seg = sims.length > 1 ? '<div class="seg sim-tabs">' + sims.map(function (s) {
      return '<button type="button" data-sim="' + s.id + '" class="' + (s.id === cur.id ? 'active' : '') + '">' + esc(s.title) + '</button>';
    }).join('') + '</div>' : '';
    body.innerHTML = seg + '<div id="simHost"></div>';
    var host = document.getElementById('simHost');
    if (window.SIMS && window.SIMS[cur.id]) window.SIMS[cur.id](host);
    else host.innerHTML = '<p>Trainer nicht gefunden.</p>';
    body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-sim]');
      if (!b) return;
      location.hash = '#/t/' + t.id + '/trainer/' + b.getAttribute('data-sim');
    });
  }

  function taskCard(t, task, idx, opts) {
    opts = opts || {};
    var done = getDone(t.id)[idx];
    return '<article class="card task" style="--tc:' + t.color + '">' +
      '<div class="task-head"><h3>' + esc(task.title) + '</h3>' +
        (task.src ? '<span class="task-src">' + esc(task.src) + '</span>' : '') + '</div>' +
      task.html +
      '<details><summary>Lösung zeigen</summary><div class="solution">' + task.solution + '</div></details>' +
      (opts.noCheck ? '' :
      '<div class="task-foot"><label class="check' + (done ? ' done' : '') + '"><input type="checkbox" data-done="' + idx + '"' + (done ? ' checked' : '') + '> Kann ich! ✓</label></div>') +
      '</article>';
  }

  function renderTasks(t, body) {
    var intro = '<div class="card" style="margin-bottom:14px"><b>So übst du:</b> Lies die Aufgabe genau. Schreib oder sag deine Antwort, dann tippe auf „Lösung zeigen“ und vergleiche. Wenn du es kannst, hake „Kann ich!“ ab. ✓</div>';
    body.innerHTML = intro + t.tasks.map(function (task, i) { return taskCard(t, task, i); }).join('');
    figs(body);
    body.addEventListener('change', function (e) {
      var cb = e.target.closest('[data-done]');
      if (!cb) return;
      setDone(t.id, +cb.getAttribute('data-done'), cb.checked);
      cb.parentNode.classList.toggle('done', cb.checked);
    });
  }

  /* ---------- Quiz ---------- */
  function makeQuiz(container, questions, opts) {
    opts = opts || {};
    var qs = shuffle(questions).map(function (q) {
      var order = shuffle(q.a.map(function (_, i) { return i; }));
      return { q: q.q, a: order.map(function (i) { return q.a[i]; }), c: order.indexOf(q.c), e: q.e, topic: q._topic };
    });
    var idx = 0, score = 0;

    function show() {
      if (idx >= qs.length) return finish();
      var q = qs[idx];
      container.innerHTML =
        '<div class="card fade-in">' +
        '<div class="quiz-progress"><span>Frage ' + (idx + 1) + ' von ' + qs.length + (q.topic ? ' · ' + esc(q.topic) : '') + '</span><span>⭐ ' + score + '</span></div>' +
        '<div class="progress-bar" style="margin:0 0 14px"><span style="width:' + Math.round(idx / qs.length * 100) + '%"></span></div>' +
        '<div class="quiz-q">' + q.q + '</div>' +
        '<div class="options">' + q.a.map(function (a, i) {
          return '<button type="button" class="option" data-i="' + i + '">' + a + '</button>';
        }).join('') + '</div><div id="qfb"></div></div>';
    }

    function finish() {
      var pct = Math.round(score / qs.length * 100);
      var msg = pct >= 90 ? 'Super, Ismail! Das kannst du! 🏆' : pct >= 70 ? 'Toll gemacht! Schau dir die Fehler nochmal an. 👍' : pct >= 50 ? 'Gar nicht schlecht! Lies nochmal nach und probier es wieder. 📖' : 'Lies die Erklärung nochmal in Ruhe und versuch es dann wieder. Du schaffst das! 💪';
      if (opts.onFinish) opts.onFinish(score, qs.length);
      container.innerHTML = '<div class="card fade-in" style="text-align:center">' +
        (window.SIMS && window.SIMS.stars ? window.SIMS.stars(score, qs.length) : '') +
        '<div class="score-big">' + score + '/' + qs.length + '</div>' +
        '<p style="margin-top:10px;font-size:1.1rem">' + msg + '</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
        '<button type="button" class="btn primary" data-restart>🔄 Nochmal</button>' +
        (opts.backHref ? '<a class="btn" href="' + opts.backHref + '">📖 Nochmal lesen</a>' : '') +
        '</div></div>';
    }

    container.onclick = function (e) {
      if (e.target.closest('[data-restart]')) {
        makeQuiz(container, questions, opts); return;
      }
      if (e.target.closest('[data-next]')) { idx++; show(); return; }
      var b = e.target.closest('.option');
      if (!b || b.disabled) return;
      var q = qs[idx], chosen = +b.getAttribute('data-i');
      var btns = container.querySelectorAll('.option');
      for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        if (i === q.c) btns[i].classList.add('correct');
      }
      var ok = chosen === q.c;
      if (ok) score++; else b.classList.add('wrong');
      document.getElementById('qfb').innerHTML =
        '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig! 🎉' : '✗ Leider falsch.') + '</b> ' + (q.e || '') + '</div>' +
        '<div class="quiz-nav"><button type="button" class="btn primary" data-next>' + (idx + 1 < qs.length ? 'Weiter →' : 'Ergebnis anzeigen') + '</button></div>';
      var nb = container.querySelector('[data-next]'); if (nb) nb.focus({ preventScroll: true });
    };
    show();
  }

  function renderQuiz(t, body) {
    var best = getQuizBest(t.id);
    body.innerHTML = (best ? '<p class="muted">Dein bestes Ergebnis: <b>' + best.best + '/' + best.total + '</b> ' + starRow(Math.round(best.best / best.total * 100)) + '</p>' : '') + '<div id="quizHost"></div>';
    makeQuiz(document.getElementById('quizHost'), t.quiz, {
      backHref: '#/t/' + t.id + '/lernen',
      onFinish: function (s, n) {
        var b = getQuizBest(t.id);
        if (!b || s / n > b.best / b.total || n !== b.total) store.set('quiz:' + t.id, { best: s, total: n });
      }
    });
  }

  /* ---------- Formelsammlung ---------- */
  function renderFormeln() {
    document.title = 'Merkzettel · Sachkunde-Training';
    app.innerHTML = '<a class="back" href="#/">← Alle Themen</a><h1>📋 Merkzettel</h1>' +
      '<p class="muted">Alles Wichtige auf einen Blick. Lies es dir vor dem Test nochmal durch!</p>' +
      '<div class="fade-in">' + (window.FORMELN_HTML || '') + '</div>';
  }

  /* ---------- Probetest ---------- */
  function renderProbe() {
    document.title = 'Probetest · Sachkunde-Training';
    // je Thema 1–2 Aufgaben zufällig + gemischte Quizfragen
    var picked = [];
    TOPICS.forEach(function (t) {
      var pool = t.tasks.map(function (task, i) { return { t: t, task: task, i: i }; }).filter(function (x) { return !x.task.noProbe; });
      var n = t.id === 'fett' || t.id === 'staerke' ? 2 : 1;
      picked = picked.concat(shuffle(pool).slice(0, n));
    });
    var quizPool = [];
    TOPICS.forEach(function (t) {
      shuffle(t.quiz).slice(0, 2).forEach(function (q) { var c = Object.assign({}, q); c._topic = t.title; quizPool.push(c); });
    });

    var html = '<a class="back" href="#/">← Alle Themen</a><h1>🎯 Probetest</h1>' +
      '<div class="card"><p><b>So geht\'s:</b> Teil A sind Aufgaben wie im Test. Schreib deine Antwort auf ein Blatt, dann schau dir die Lösung an und sei ehrlich: ✓ = 2 Punkte, ½ = 1 Punkt, ✗ = 0 Punkte. Teil B ist ein Quiz mit Fragen aus allen Themen.</p>' +
      '<p class="muted small" style="margin:0">Jedes Mal gibt es neue Aufgaben.</p>' +
      '<div style="margin-top:10px"><button class="btn small" type="button" data-new>🔄 Neuer Probetest</button></div></div>' +
      '<h2 style="margin-top:22px">Teil A – Aufgaben</h2>' +
      picked.map(function (x, k) {
        var task = Object.assign({}, x.task, { title: 'A' + (k + 1) + ' · ' + x.t.title + ': ' + x.task.title });
        return '<div data-k="' + k + '">' + taskCard(x.t, task, x.i, { noCheck: true }).replace('</article>',
          '<div class="rate" role="group" aria-label="Selbstbewertung">' +
          '<button type="button" data-rate="2">✓ richtig</button><button type="button" data-rate="1">½ teilweise</button><button type="button" data-rate="0">✗ falsch</button></div></article>') + '</div>';
      }).join('') +
      '<h2 style="margin-top:22px">Teil B – Quiz</h2><div id="probeQuiz"></div>' +
      '<div class="sticky-score"><span><b>Teil A:</b> <span id="ptsA">0</span> / ' + (picked.length * 2) + ' Punkte</span><span id="ptsB" class="muted small">Teil B: –</span></div>';
    app.innerHTML = '<div class="fade-in">' + html + '</div>';
    figs(app);

    var rates = {};
    app.onclick = function (e) {
      if (e.target.closest('[data-new]')) { renderProbe(); window.scrollTo(0, 0); return; }
      var r = e.target.closest('[data-rate]');
      if (!r) return;
      var wrap = r.closest('[data-k]'), k = wrap.getAttribute('data-k');
      rates[k] = +r.getAttribute('data-rate');
      var bs = wrap.querySelectorAll('[data-rate]');
      for (var i = 0; i < bs.length; i++) bs[i].className = '';
      r.className = rates[k] === 2 ? 'sel-ok' : rates[k] === 1 ? 'sel-half' : 'sel-no';
      var sum = 0; for (var key in rates) sum += rates[key];
      document.getElementById('ptsA').textContent = sum;
    };
    makeQuiz(document.getElementById('probeQuiz'), quizPool, {
      onFinish: function (s, n) { document.getElementById('ptsB').textContent = 'Teil B: ' + s + '/' + n; }
    });
  }

  route();
})();
