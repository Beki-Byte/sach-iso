window.TOPICS = window.TOPICS || [];
(function () {
  /* ---------- Ernährungspyramide als Bild ---------- */
  var LEVELS = [
    { t: 'Süßigkeiten, Snacks', e: '🍫 🍟', c: '#ffc9c9', w: 'ganz wenig' },
    { t: 'Fette, Öle', e: '🧈 🫒', c: '#ffd8a8', w: 'wenig' },
    { t: 'Milch, Fleisch, Fisch, Eier', e: '🥛 🧀 🐟 🥚', c: '#fff3bf', w: 'mäßig' },
    { t: 'Gemüse und Obst', e: '🥕 🍅 🍌 🍒', c: '#d3f9d8', w: 'viel' },
    { t: 'Vollkornbrot, Getreide, Beilagen', e: '🍞 🍚 🥔 🍝', c: '#e6d3b3', w: 'viel' },
    { t: 'gesunde Getränke', e: '💧 🫖', c: '#d0ebff', w: 'am meisten' }
  ];
  var W = 560, H = 380, top = 20, rowH = 58, cx = 280;
  var svg = '<figure class="figure"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Ernährungspyramide mit sechs Stufen" style="max-width:560px">';
  LEVELS.forEach(function (l, i) {
    var y1 = top + i * rowH, y2 = y1 + rowH;
    var half1 = 40 + i * 44, half2 = 40 + (i + 1) * 44;
    svg += '<path d="M' + (cx - half1) + ' ' + y1 + ' L' + (cx + half1) + ' ' + y1 + ' L' + (cx + half2) + ' ' + y2 + ' L' + (cx - half2) + ' ' + y2 + 'Z" fill="' + l.c + '" stroke="#555" stroke-width="1.5"/>';
    svg += '<text x="' + cx + '" y="' + (y1 + 25) + '" text-anchor="middle" font-size="' + (i < 1 ? 15 : 17) + '">' + l.e + '</text>';
    svg += '<text x="' + cx + '" y="' + (y1 + 46) + '" text-anchor="middle" font-size="' + (i < 2 ? 11 : 13) + '" font-weight="700" fill="#222">' + l.t + '</text>';
  });
  svg += '</svg><figcaption>Unten steht, wovon du viel essen und trinken sollst. Je weiter oben, desto weniger.</figcaption></figure>';

  /* ---------- Ernährungskreis als Bild ---------- */
  var SEG = [
    { t: 'Getreide, Brot, Kartoffeln', e: '🍞', v: 28, c: '#e6d3b3' },
    { t: 'Gemüse, Hülsenfrüchte', e: '🥕', v: 24, c: '#b2f2bb' },
    { t: 'Obst', e: '🍎', v: 15, c: '#d8f5a2' },
    { t: 'Getränke', e: '💧', v: 12, c: '#a5d8ff' },
    { t: 'Milch, Milchprodukte', e: '🥛', v: 12, c: '#fff3bf' },
    { t: 'Fisch, Fleisch, Eier', e: '🐟', v: 6, c: '#ffc9c9' },
    { t: 'Fette, Öle', e: '🧈', v: 3, c: '#ffd8a8' }
  ];
  var R = 130, X = 150, Y = 150, a0 = -Math.PI / 2;
  var kreis = '<figure class="figure"><div class="kreis-wrap"><svg viewBox="0 0 300 300" role="img" aria-label="Ernährungskreis mit sieben Feldern" style="max-width:300px">';
  var acc = 0;
  SEG.forEach(function (s) {
    var a1 = a0 + acc / 100 * 2 * Math.PI; acc += s.v;
    var a2 = a0 + acc / 100 * 2 * Math.PI, am = (a1 + a2) / 2;
    var large = (a2 - a1) > Math.PI ? 1 : 0;
    kreis += '<path d="M' + X + ' ' + Y + ' L' + (X + R * Math.cos(a1)).toFixed(1) + ' ' + (Y + R * Math.sin(a1)).toFixed(1) +
      ' A' + R + ' ' + R + ' 0 ' + large + ' 1 ' + (X + R * Math.cos(a2)).toFixed(1) + ' ' + (Y + R * Math.sin(a2)).toFixed(1) + 'Z" fill="' + s.c + '" stroke="#555" stroke-width="1.5"/>';
    var rr = s.v < 5 ? R - 18 : R * 0.62;
    kreis += '<text x="' + (X + rr * Math.cos(am)).toFixed(1) + '" y="' + (Y + rr * Math.sin(am) + 8).toFixed(1) + '" text-anchor="middle" font-size="' + (s.v < 5 ? 16 : 26) + '">' + s.e + '</text>';
  });
  kreis += '</svg><ul class="legend">' + SEG.map(function (s) {
    return '<li><span class="sw" style="background:' + s.c + '"></span>' + s.e + ' ' + s.t + '</li>';
  }).join('') + '</ul></div><figcaption>Großes Feld = davon viel essen. Kleines Feld = davon wenig essen.</figcaption></figure>';

  window.TOPICS.push({
    id: 'pyramide',
    order: 1,
    title: 'Ernährungskreis und Ernährungspyramide',
    short: 'Wovon soll ich viel essen, wovon wenig?',
    icon: '🥗',
    color: '#2f9e44',
    ytSearch: 'Ernährungspyramide für Kinder erklärt',
    sims: [
      { id: 'pyramide', title: 'Pyramide einräumen' },
      { id: 'menge', title: 'Viel oder wenig?' }
    ],

    learn: [
      {
        title: 'Warum müssen wir essen und trinken?',
        html: `
<p>Dein Körper ist wie ein Auto: Er braucht <b>Treibstoff</b>. Diesen Treibstoff bekommt er aus dem <b>Essen</b> und <b>Trinken</b>.</p>
<p>Mit dem Essen kannst du <b>wachsen</b>, <b>rennen</b>, <b>spielen</b>, <b>lernen</b> und <b>denken</b>. Und du bleibst <b>gesund</b>.</p>
<div class="merke">Wichtig ist: <b>abwechslungsreich</b> essen! Also von allem etwas, aber nicht von allem gleich viel.</div>`
      },
      {
        title: 'Der Ernährungskreis (AB 1)',
        html: `
<p>Der <b>Ernährungskreis</b> ist wie ein großer Teller. Er ist in <b>7 Felder</b> geteilt. Jedes Feld ist eine Gruppe von Lebensmitteln.</p>
${kreis}
<div class="tip">So liest du den Kreis: <b>Großes Feld</b> → davon darfst du <b>viel</b> essen (Brot, Kartoffeln, Gemüse). <b>Kleines Feld</b> → davon nur <b>wenig</b> (Butter, Öl).</div>`
      },
      {
        title: 'Die Ernährungspyramide (AB 2)',
        html: `
<p>Die <b>Ernährungspyramide</b> zeigt dasselbe wie der Kreis, nur als Turm. Sie hat <b>6 Stufen</b>.</p>
${svg}
<div class="table-wrap"><table>
<tr><th>Stufe</th><th>Beispiele</th><th>Wie viel?</th></tr>
<tr><td>💧 gesunde Getränke</td><td>Wasser, ungesüßter Tee, Saftschorle</td><td>🟢 am meisten (ca. 6 Gläser am Tag)</td></tr>
<tr><td>🍞 Vollkornbrot, Getreide, Beilagen</td><td>Brot, Reis, Nudeln, Kartoffeln, Müsli</td><td>🟢 viel</td></tr>
<tr><td>🥕 Gemüse und Obst</td><td>Karotte, Tomate, Banane, Kirschen</td><td>🟢 viel (5 Hände voll am Tag)</td></tr>
<tr><td>🥛 Milch, Fleisch, Fisch, Eier</td><td>Milch, Käse, Joghurt, Fisch, Wurst, Ei</td><td>🟡 mäßig</td></tr>
<tr><td>🧈 Fette, Öle</td><td>Butter, Öl, Margarine</td><td>🟠 wenig</td></tr>
<tr><td>🍫 Süßigkeiten, Snacks</td><td>Schokolade, Chips, Pommes, Kuchen</td><td>🔴 ganz wenig</td></tr>
</table></div>
<div class="merke">Unten in der Pyramide: <b>viel</b> davon essen und trinken. Oben in der Pyramide: nur <b>wenig</b> davon.</div>`
      },
      {
        title: 'Die 5-am-Tag-Regel',
        html: `
<p>Iss jeden Tag <b>5 Portionen</b> Obst und Gemüse. Eine Portion ist so viel, wie in <b>deine Hand</b> passt. ✋</p>
<p>Zum Beispiel: 🍌 eine Banane zum Frühstück, 🥕 eine Karotte in der Pause, 🍅 Tomaten zum Mittagessen, 🍎 ein Apfel am Nachmittag und 🥒 Gurke zum Abendbrot.</p>`
      }
    ],

    videos: [
      { id: 'uDVLpOBoGkk', title: 'Die Ernährungspyramide – Erklärung für Kinder', desc: 'Die Stufen der Pyramide einfach erklärt.' },
      { id: 'Jn7l3I6KaMs', title: 'Lernvideo Sachunterricht: Ernährungspyramide', desc: 'Lernvideo für die Grundschule.' },
      { id: 'b3okuZp_gH4', title: 'Die Ernährungspyramide (Lied)', desc: 'Ein Lied zum Mitsingen und Merken.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Die 7 Felder',
        src: 'AB 1 Ernährungskreis',
        html: `<p>Nenne die <b>7 Felder</b> des Ernährungskreises.</p>`,
        solution: `<ol><li>Getreide, Getreideprodukte und Kartoffeln</li><li>Gemüse und Hülsenfrüchte</li><li>Obst</li><li>Getränke</li><li>Milch und Milchprodukte</li><li>Fisch, Fleisch und Eier</li><li>Fette und Öle</li></ol>`
      },
      {
        title: 'Aufgabe 2: Großes und kleines Feld',
        src: 'AB 1 Ernährungskreis',
        html: `<p>Welches Feld im Ernährungskreis ist am <b>größten</b>? Welches ist am <b>kleinsten</b>? Was bedeutet das?</p>`,
        solution: `<p>Am größten: <b>Getreide, Brot und Kartoffeln</b> (fast genauso groß: Gemüse). Am kleinsten: <b>Fette und Öle</b>.</p><p>Das bedeutet: Von Brot, Kartoffeln und Gemüse soll man <b>viel</b> essen, von Butter und Öl nur <b>wenig</b>.</p>`
      },
      {
        title: 'Aufgabe 3: Pyramide einräumen',
        src: 'AB 2 Ernährungspyramide',
        html: `<p>In welche Stufe der Pyramide gehören diese Lebensmittel?<br>🍫 Schokolade · 🍟 Pommes · 🫒 Öl · 🧈 Butter · 🧀 Käse · 🥛 Milch · 🐟 Fisch · 🍒 Kirschen · 🍅 Tomaten · 🥕 Karotte · 🍚 Reis · 🍞 Brot · 🥔 Kartoffeln · 🫖 Tee · 💧 Wasser</p>`,
        solution: `<ul>
<li><b>Süßigkeiten, Snacks:</b> Schokolade</li>
<li><b>Fette, Öle:</b> Öl, Pommes (sind in Fett gebacken), Butter</li>
<li><b>Milch, Fleisch, Fisch, Eier:</b> Käse, Milch, Fisch</li>
<li><b>Gemüse und Obst:</b> Kirschen, Tomaten, Karotte</li>
<li><b>Vollkornbrot, Getreide, Beilagen:</b> Reis, Brot, Kartoffeln</li>
<li><b>gesunde Getränke:</b> Tee, Wasser</li></ul>
<p class="note">Pommes kann man auch zu den Snacks legen. Beides ist okay, denn beide Stufen sind ganz oben: davon nur wenig!</p>`
      },
      {
        title: 'Aufgabe 4: Mein Frühstück',
        src: 'eigene Aufgabe',
        html: `<p>Stelle dir ein <b>gesundes Frühstück</b> zusammen. Nimm Lebensmittel aus mindestens <b>3 verschiedenen</b> Stufen der Pyramide.</p>`,
        solution: `<p>Zum Beispiel: 🍞 Vollkornbrot mit 🧀 Käse, 🥒 Gurkenscheiben und ein 🍎 Apfel, dazu ein Glas 💧 Wasser oder 🥛 Milch.</p><p>Oder: 🥣 Müsli mit Milch und 🍌 Banane, dazu 🫖 ungesüßter Tee.</p>`
      },
      {
        title: 'Aufgabe 5: Was trinke ich?',
        src: 'AB 2 Ernährungspyramide',
        html: `<p>Warum stehen die <b>Getränke ganz unten</b> in der Pyramide? Welche Getränke sind gesund?</p>`,
        solution: `<p>Unser Körper besteht zum großen Teil aus <b>Wasser</b>. Er braucht jeden Tag viel davon, deshalb stehen die Getränke ganz unten: davon am meisten!</p><p>Gesund sind: <b>Wasser</b>, <b>ungesüßter Tee</b> und <b>Saftschorle</b> (Saft mit viel Wasser). Limo und Cola haben sehr viel Zucker, die gehören nach oben zu den Süßigkeiten.</p>`
      }
    ],

    quiz: [
      { q: 'Wovon sollst du am <b>meisten</b> zu dir nehmen?', a: ['Getränke wie Wasser und Tee', 'Süßigkeiten', 'Butter und Öl', 'Wurst'], c: 0, e: 'Getränke stehen ganz unten in der Pyramide.' },
      { q: 'Was steht ganz <b>oben</b> in der Pyramide?', a: ['Süßigkeiten und Snacks', 'Obst und Gemüse', 'Brot und Nudeln', 'Wasser'], c: 0, e: 'Davon nur ganz wenig essen.' },
      { q: 'Wie viele Felder hat der Ernährungskreis?', a: ['7', '3', '5', '10'], c: 0, e: 'Getreide, Gemüse, Obst, Getränke, Milch, Fleisch/Fisch/Eier, Fette.' },
      { q: 'Welches Feld ist im Ernährungskreis am <b>kleinsten</b>?', a: ['Fette und Öle', 'Obst', 'Getreide und Kartoffeln', 'Gemüse'], c: 0, e: 'Kleines Feld heißt: nur wenig davon essen.' },
      { q: 'Wie viele Portionen Obst und Gemüse sollst du am Tag essen?', a: ['5', '1', '10', 'gar keine'], c: 0, e: '„5 am Tag“, eine Portion passt in deine Hand.' },
      { q: 'In welche Stufe gehören <b>Kartoffeln</b>?', a: ['Vollkornbrot, Getreide, Beilagen', 'Gemüse und Obst', 'Fette, Öle', 'Süßigkeiten'], c: 0, e: 'Kartoffeln sind eine Beilage, wie Reis und Nudeln.' },
      { q: 'In welche Stufe gehört <b>Käse</b>?', a: ['Milch, Fleisch, Fisch, Eier', 'Fette, Öle', 'Getränke', 'Obst'], c: 0, e: 'Käse wird aus Milch gemacht.' },
      { q: 'Welches Getränk ist <b>am gesündesten</b>?', a: ['Wasser', 'Cola', 'Limonade', 'Eistee'], c: 0, e: 'Wasser hat keinen Zucker.' },
      { q: 'Was bedeutet „abwechslungsreich essen“?', a: ['Von allem etwas essen, aber nicht von allem gleich viel', 'Jeden Tag nur Nudeln', 'Nur Süßes essen', 'Gar nichts essen'], c: 0, e: 'So bekommt dein Körper alles, was er braucht.' }
    ]
  });
})();
