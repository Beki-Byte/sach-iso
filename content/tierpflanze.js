window.TOPICS = window.TOPICS || [];
(function () {
  window.TOPICS.push({
    id: 'tierpflanze',
    order: 2,
    title: 'Vom Tier oder von der Pflanze?',
    short: 'Woher kommen unsere Lebensmittel?',
    icon: '🐄',
    color: '#e8590c',
    ytSearch: 'Lebensmittel vom Tier und von der Pflanze Grundschule',
    sims: [
      { id: 'tierpflanze', title: 'Tier oder Pflanze?' }
    ],

    learn: [
      {
        title: 'Zwei Herkünfte',
        html: `
<p>Alle unsere Lebensmittel kommen entweder <b>von einer Pflanze</b> 🌱 oder <b>von einem Tier</b> 🐄.</p>
<div class="two-col">
<div class="card soft-green"><h3>🌱 Von der Pflanze</h3><p>Obst, Gemüse, Getreide, Kartoffeln, Nüsse, Öl</p><p>🍓 🍎 🍐 🍌 🫑 🍅 🥒 🥬 🥔 🍞 🥜</p></div>
<div class="card soft-red"><h3>🐄 Vom Tier</h3><p>Milch, Käse, Joghurt, Butter, Eier, Fleisch, Wurst, Fisch, Honig</p><p>🥛 🧀 🥚 🍗 🥩 🐟 🍯</p></div>
</div>
<div class="tip">Auf dem Arbeitsblatt sollst du <b>rot</b> einkreisen, was vom <b>Tier</b> kommt, und <b>grün</b>, was von der <b>Pflanze</b> kommt.</div>`
      },
      {
        title: 'Knifflige Fälle',
        html: `
<ul>
<li><b>Brot</b> 🍞 kommt von der <b>Pflanze</b>: Es wird aus Mehl gebacken, und Mehl wird aus Getreide (Weizen, Roggen) gemahlen.</li>
<li><b>Käse</b> und <b>Joghurt</b> 🧀 kommen vom <b>Tier</b>: Sie werden aus <b>Milch</b> gemacht, und die Milch kommt von der Kuh.</li>
<li><b>Butter</b> 🧈 kommt vom <b>Tier</b>: Sie wird aus dem Rahm der Milch gemacht.</li>
<li><b>Öl</b> 🫒 kommt von der <b>Pflanze</b>: Es wird aus Oliven, Sonnenblumenkernen oder Raps gepresst.</li>
<li><b>Wurst</b> 🌭 kommt vom <b>Tier</b>: Sie wird aus Fleisch gemacht.</li>
<li><b>Pommes</b> und <b>Chips</b> 🍟 kommen von der <b>Pflanze</b>: Sie werden aus Kartoffeln gemacht.</li>
<li><b>Honig</b> 🍯 kommt vom <b>Tier</b>: Bienen machen ihn.</li>
</ul>
<div class="merke">Frag dich immer: <b>Woraus</b> ist es gemacht? Dann weißt du, ob es vom Tier oder von der Pflanze kommt.</div>`
      },
      {
        title: 'Welches Tier gibt uns was?',
        html: `
<div class="table-wrap"><table>
<tr><th>Tier</th><th>Lebensmittel</th></tr>
<tr><td>🐄 Kuh</td><td>Milch, Käse, Joghurt, Quark, Butter, Rindfleisch</td></tr>
<tr><td>🐔 Huhn</td><td>Eier, Hähnchenfleisch</td></tr>
<tr><td>🐖 Schwein</td><td>Schweinefleisch, Kotelett, viele Wurstsorten</td></tr>
<tr><td>🐟 Fisch</td><td>Fischstäbchen, Lachs, Thunfisch</td></tr>
<tr><td>🐝 Biene</td><td>Honig</td></tr>
</table></div>`
      }
    ],

    videos: [
      { id: 'DhFBb6Q0o4A', title: 'Lernvideo: Gesunde Ernährung (HSU Grundschule)', desc: 'Lebensmittel und gesunde Ernährung für die Grundschule.' },
      { id: 't1oTAU4L0zo', title: 'Für Kinder erklärt: Was sind Vegetarier und Veganer?', desc: 'Wer isst nichts vom Tier, und warum?' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Rot oder grün?',
        src: 'AB 3 Vom Tier oder von der Pflanze?',
        html: `<p>Ordne zu: Kommt es vom <b>Tier</b> (rot) oder von der <b>Pflanze</b> (grün)?<br>Paprika · Käse · Hähnchen · Erdbeeren · Apfel · Fisch · Joghurt · Gurke · Kotelett · Wurst · Milch · Salat · Birne · Brot · Kartoffeln · Banane · Tomate</p>`,
        solution: `<p><b class="red">🔴 Vom Tier:</b> Käse, Hähnchen, Fisch, Joghurt, Kotelett, Wurst, Milch</p><p><b class="green">🟢 Von der Pflanze:</b> Paprika, Erdbeeren, Apfel, Gurke, Salat, Birne, Brot, Kartoffeln, Banane, Tomate</p>`
      },
      {
        title: 'Aufgabe 2: Woraus ist das gemacht?',
        src: 'eigene Aufgabe',
        html: `<p>Schreibe auf, woraus diese Lebensmittel gemacht werden: <b>Brot · Käse · Pommes · Butter</b>.</p>`,
        solution: `<ul><li><b>Brot</b> → aus Mehl → aus Getreide (Pflanze)</li><li><b>Käse</b> → aus Milch → von der Kuh (Tier)</li><li><b>Pommes</b> → aus Kartoffeln (Pflanze)</li><li><b>Butter</b> → aus Milch/Rahm → von der Kuh (Tier)</li></ul>`
      },
      {
        title: 'Aufgabe 3: Tiere und ihre Lebensmittel',
        src: 'eigene Aufgabe',
        html: `<p>Nenne zu jedem Tier zwei Lebensmittel: 🐄 Kuh · 🐔 Huhn · 🐖 Schwein.</p>`,
        solution: `<ul><li>🐄 Kuh: Milch, Käse (auch Joghurt, Butter, Rindfleisch)</li><li>🐔 Huhn: Eier, Hähnchenfleisch</li><li>🐖 Schwein: Kotelett, Wurst (Schinken)</li></ul>`
      }
    ],

    quiz: [
      { q: 'Woher kommt <b>Käse</b>?', a: ['Vom Tier', 'Von der Pflanze'], c: 0, e: 'Käse wird aus Milch gemacht, und Milch kommt von der Kuh.' },
      { q: 'Woher kommt <b>Brot</b>?', a: ['Von der Pflanze', 'Vom Tier'], c: 0, e: 'Brot wird aus Mehl gebacken, Mehl kommt aus Getreide.' },
      { q: 'Woher kommt <b>Joghurt</b>?', a: ['Vom Tier', 'Von der Pflanze'], c: 0, e: 'Joghurt wird aus Milch gemacht.' },
      { q: 'Woher kommen <b>Kartoffeln</b>?', a: ['Von der Pflanze', 'Vom Tier'], c: 0, e: 'Kartoffeln wachsen in der Erde.' },
      { q: 'Woher kommt <b>Wurst</b>?', a: ['Vom Tier', 'Von der Pflanze'], c: 0, e: 'Wurst wird aus Fleisch gemacht.' },
      { q: 'Woher kommt <b>Öl</b>?', a: ['Von der Pflanze', 'Vom Tier'], c: 0, e: 'Öl wird aus Oliven, Sonnenblumenkernen oder Raps gepresst.' },
      { q: 'Welches Tier gibt uns <b>Eier</b>?', a: ['Das Huhn', 'Die Kuh', 'Das Schwein', 'Der Fisch'], c: 0, e: 'Hühner legen Eier.' },
      { q: 'Welches Tier macht <b>Honig</b>?', a: ['Die Biene', 'Das Huhn', 'Die Kuh', 'Der Schmetterling'], c: 0, e: 'Bienen sammeln Nektar und machen daraus Honig.' },
      { q: 'Welche Farbe nimmst du auf dem AB für Lebensmittel <b>vom Tier</b>?', a: ['Rot', 'Grün', 'Blau', 'Gelb'], c: 0, e: 'Rot = Tier, grün = Pflanze.' }
    ]
  });
})();
