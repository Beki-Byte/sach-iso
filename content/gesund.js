window.TOPICS = window.TOPICS || [];
(function () {
  window.TOPICS.push({
    id: 'gesund',
    order: 3,
    title: 'Gesundes und ungesundes Essen',
    short: 'Was darf ich oft essen, was lieber selten?',
    icon: '🍎',
    color: '#d6336c',
    ytSearch: 'gesunde Ernährung Kinder Grundschule Lernvideo',
    sims: [
      { id: 'gesund', title: 'Oft oder selten?' }
    ],

    learn: [
      {
        title: 'Nicht alles ist gleich gesund (AB 4)',
        html: `
<p>Nicht alle Lebensmittel sind für uns <b>gleich gesund</b>.</p>
<ul>
<li>Manche Lebensmittel enthalten <b>viele Nährstoffe</b>. Davon darf man <b>reichlich</b> essen.</li>
<li>Andere Lebensmittel <b>schaden</b> dem Körper eher, als dass sie ihm nützen. Sie haben <b>zu viel Fett und Zucker</b>. Davon sollte man nur <b>wenig</b> essen.</li>
</ul>`
      },
      {
        title: 'Gesund: reichlich essen 🟢',
        html: `
<div class="table-wrap"><table>
<tr><th>Gruppe</th><th>Beispiele</th></tr>
<tr><td>🍎 Obst</td><td>Apfel, Banane, Birne, Erdbeeren</td></tr>
<tr><td>🥦 Gemüse</td><td>Karotte, Gurke, Paprika, Brokkoli</td></tr>
<tr><td>🍞 Getreideprodukte</td><td>Nudeln, Brot, Cornflakes</td></tr>
<tr><td>🫘 Hülsenfrüchte</td><td>Bohnen, Linsen, Erbsen</td></tr>
<tr><td>🍚 Reis</td><td>Reis</td></tr>
<tr><td>🥛 Milchprodukte</td><td>Joghurt, Quark, Käse, Milch</td></tr>
<tr><td>🐟 Fleisch und Fisch</td><td>Hähnchen, Fisch</td></tr>
</table></div>
<p>Davon sollte man <b>über den Tag verteilt</b> reichlich essen.</p>`
      },
      {
        title: 'Ungesund: lieber wenig essen 🔴',
        html: `
<p>Als <b>ungesund</b> gelten <b>fette und süße Speisen</b>:</p>
<p style="font-size:1.6rem">🍬 🍪 🍭 🧸 🍰 🎂</p>
<p>Bonbons, Kekse, Lutscher, Gummibärchen, Kuchen und Torte.</p>
<div class="warn">Zu viel Zucker ist schlecht für die <b>Zähne</b> 🦷 und kann dick machen. Zu viel Fett macht auch dick und ist schlecht fürs <b>Herz</b>.</div>
<div class="merke">Gesundes Essen (Obst, Gemüse, Brot, Nudeln, Reis, Milchprodukte, Fleisch, Fisch) → <b>reichlich</b>. Fettes und süßes Essen (Bonbons, Kekse, Kuchen) → <b>nur wenig</b>.<br>Ein Stück Kuchen am Geburtstag ist völlig okay! 🎉 Es kommt auf die <b>Menge</b> an.</div>`
      }
    ],

    videos: [
      { id: '3e2MuFxch3c', title: 'Lernvideo: Gesunde Ernährung (Sachunterricht Grundschule)', desc: 'Gesund essen, Nährstoffe und Pyramide.' },
      { id: 'DhFBb6Q0o4A', title: 'Lernvideo: gesunde Ernährung 🍎 (HSU Grundschule)', desc: 'Was ist gesund, was nicht?' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Zwei Gruppen',
        src: 'AB 4 Gesundes und ungesundes Essen',
        html: `<p>Lies den Text. Schreibe <b>5 gesunde</b> und <b>5 ungesunde</b> Lebensmittel auf.</p>`,
        solution: `<p><b>Gesund:</b> Obst, Gemüse, Nudeln, Brot, Cornflakes, Bohnen, Linsen, Erbsen, Reis, Joghurt, Quark, Käse, Milch, Fleisch, Fisch</p><p><b>Ungesund:</b> Bonbons, Kekse, Lutscher, Gummibärchen, Kuchen, Torte</p>`
      },
      {
        title: 'Aufgabe 2: Warum ungesund?',
        src: 'AB 4 Gesundes und ungesundes Essen',
        html: `<p>Warum sollte man von manchen Lebensmitteln nur wenig essen?</p>`,
        solution: `<p>Weil sie <b>zu viel Fett und Zucker</b> enthalten. Sie <b>schaden</b> dem Körper eher, als dass sie ihm <b>nutzen</b>.</p>`
      },
      {
        title: 'Aufgabe 3: Hülsenfrüchte',
        src: 'AB 4 Gesundes und ungesundes Essen',
        html: `<p>Nenne <b>drei Hülsenfrüchte</b>.</p>`,
        solution: `<p>Bohnen, Linsen, Erbsen</p>`
      },
      {
        title: 'Aufgabe 4: Pausenbrot',
        src: 'eigene Aufgabe',
        html: `<p>Paul hat in seiner Brotdose: Gummibärchen, Kekse und eine Limo. Mach ihm einen <b>gesünderen</b> Vorschlag.</p>`,
        solution: `<p>Zum Beispiel: ein <b>Vollkornbrot</b> mit Käse, <b>Apfelschnitze</b> oder Karottenstücke und eine Flasche <b>Wasser</b>. Die Gummibärchen kann er als kleine Ausnahme mal mitnehmen, aber nicht jeden Tag.</p>`
      }
    ],

    quiz: [
      { q: 'Warum sind manche Lebensmittel ungesund?', a: ['Sie enthalten zu viel Fett und Zucker', 'Sie haben zu viele Vitamine', 'Sie sind grün', 'Sie sind zu teuer'], c: 0, e: 'So steht es im Text auf AB 4.' },
      { q: 'Welches Lebensmittel ist <b>gesund</b>?', a: ['Linsen', 'Gummibärchen', 'Lutscher', 'Torte'], c: 0, e: 'Linsen sind Hülsenfrüchte, sie haben viele Nährstoffe.' },
      { q: 'Welches Lebensmittel ist <b>ungesund</b>, wenn man viel davon isst?', a: ['Kekse', 'Joghurt', 'Reis', 'Erbsen'], c: 0, e: 'Kekse sind süß und fettig.' },
      { q: 'Was sind <b>Hülsenfrüchte</b>?', a: ['Bohnen, Linsen, Erbsen', 'Äpfel, Birnen, Bananen', 'Nudeln, Brot, Reis', 'Käse, Quark, Milch'], c: 0, e: 'Sie wachsen in einer Hülse (Schote).' },
      { q: 'Wozu gehören Nudeln, Brot und Cornflakes?', a: ['Getreideprodukte', 'Milchprodukte', 'Hülsenfrüchte', 'Süßigkeiten'], c: 0, e: 'Sie werden aus Getreide gemacht.' },
      { q: 'Wozu gehören Joghurt, Quark und Käse?', a: ['Milchprodukte', 'Getreideprodukte', 'Obst', 'Hülsenfrüchte'], c: 0, e: 'Sie werden aus Milch gemacht.' },
      { q: 'Wie oft darf man gesunde Lebensmittel essen?', a: ['Über den Tag verteilt reichlich', 'Nie', 'Nur am Wochenende', 'Nur einmal im Monat'], c: 0, e: 'Davon darf man reichlich essen.' },
      { q: 'Wem schadet zu viel Zucker besonders?', a: ['Den Zähnen', 'Den Haaren', 'Den Fingernägeln', 'Den Ohren'], c: 0, e: 'Zucker kann Karies (Löcher in den Zähnen) machen.' }
    ]
  });
})();
