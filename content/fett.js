window.TOPICS = window.TOPICS || [];
(function () {
  window.TOPICS.push({
    id: 'fett',
    order: 6,
    title: 'Fett und die Fettfleckprobe',
    short: 'Warum braucht der Körper Fett? Wie finde ich Fett im Essen?',
    icon: '🧈',
    color: '#f08c00',
    ytSearch: 'Fettfleckprobe Kinder',
    sims: [
      { id: 'fettfleck', title: 'Fettfleckprobe' },
      { id: 'fettaufgaben', title: 'Aufgaben von Fett' }
    ],

    learn: [
      {
        title: 'Warum braucht unser Körper Fett? (AB 8)',
        html: `
<p>Unser Körper braucht jeden Tag verschiedene Nährstoffe. Ein wichtiger Nährstoff sind die <b>Fette</b>. Sie haben <b>5 Aufgaben</b>:</p>
<div class="fett-grid">
<div class="card"><div class="g-emoji">⚡</div><h3>1. Fette liefern Energie</h3><p>Wir brauchen Energie zum Laufen, Spielen, Lernen und Denken. Fette liefern <b>besonders viel</b> Energie. Der Körper kann Energie, die übrig ist, als Fett <b>speichern</b> und diesen <b>Vorrat später nutzen</b>.</p></div>
<div class="card"><div class="g-emoji">🧣</div><h3>2. Fette halten uns warm</h3><p>Unter unserer <b>Haut</b> ist eine <b>Fettschicht</b>. Sie schützt unseren Körper vor <b>Kälte</b>.</p></div>
<div class="card"><div class="g-emoji">🛡️</div><h3>3. Fette schützen unsere Organe</h3><p>Einige Organe, zum Beispiel die <b>Nieren</b>, sind von Fettgewebe umgeben. Das ist wie ein weiches <b>Schutzpolster</b>.</p></div>
<div class="card"><div class="g-emoji">🥕</div><h3>4. Fette helfen bei Vitaminen</h3><p>Der Körper braucht Fett, um bestimmte <b>Vitamine</b> aus der Nahrung aufnehmen zu können: die Vitamine <b>A, D, E und K</b>.</p></div>
<div class="card"><div class="g-emoji">⛺</div><h3>5. Fette sind Bausteine</h3><p>Unser Körper besteht aus winzigen <b>Zellen</b>. Fett ist ein Teil der <b>Hülle</b> dieser Zellen. Die Hülle schützt die Zelle wie ein <b>Zelt</b>, damit sie nicht kaputtgeht.</p></div>
</div>
<div class="tip"><b>Eselsbrücke für die Vitamine:</b> Fett hilft bei <b>E-D-K-A</b>, sprich „Edeka“! 🛒</div>`
      },
      {
        title: 'Wo steckt Fett drin?',
        html: `
<p>Fette gibt es in <b>pflanzlichen</b> und <b>tierischen</b> Lebensmitteln:</p>
<div class="two-col">
<div class="card soft-green"><h3>🌱 pflanzlich</h3><p>🥜 Nüsse, 🫒 Öl, 🥑 Avocado, Sonnenblumenkerne</p></div>
<div class="card soft-red"><h3>🐄 tierisch</h3><p>🥛 Milch, 🧈 Butter, 🧀 Käse, 🥓 Speck, Wurst</p></div>
</div>
<p>Auch in <b>Chips</b> 🍟, <b>Pommes</b> und <b>Schokolade</b> 🍫 steckt viel Fett, weil sie mit Fett gemacht werden.</p>
<div class="merke">Fette liefern Energie, halten uns warm, schützen Organe, helfen bei der Aufnahme bestimmter Vitamine und sind Bausteine unseres Körpers. Fette kommen in pflanzlichen (z. B. Nüsse) und tierischen (z. B. Milch, Butter) Lebensmitteln vor.</div>
<div class="warn">Fett ist wichtig, aber <b>nicht zu viel</b>! Deshalb sind Fette und Öle in der Pyramide weit oben.</div>`
      },
      {
        title: 'Die Fettfleckprobe (AB 7)',
        html: `
<p>Mit der <b>Fettfleckprobe</b> kannst du wie ein <b>Lebensmitteldetektiv</b> 🕵️ herausfinden, ob in einem Lebensmittel Fett steckt.</p>
<h3>Ihr braucht:</h3>
<p>Kaffeefilter, Klebeband, wasserfesten Stift, Wattestäbchen, ein Glas Wasser, ein Glas Öl, Gurke, Walnuss, Butter, Kartoffel, Chips, Käse</p>
<h3>So geht's:</h3>
<ol>
<li><b>Vermuten:</b> In welchem Lebensmittel ist Fett? Kreuze in der Tabelle an.</li>
<li>Male <b>8 Kreise</b> auf das Filterpapier.</li>
<li>Verteile mit einem Wattestäbchen erst etwas <b>Wasser</b> in einem Kreis, dann etwas <b>Öl</b> in einem anderen. Beschrifte die Proben.</li>
<li>Drücke die Gurke, Walnuss, Butter, Kartoffel, Chips und Käse jeweils in einem eigenen Kreis aus (reiben).</li>
<li>Lass das Papier einige Minuten <b>trocknen</b>.</li>
<li>Halte das Papier gegen das <b>Licht</b>: Welche Flecken sind getrocknet, welche nicht?</li>
</ol>
<h3>Wie lese ich das Ergebnis ab?</h3>
<div class="table-wrap"><table>
<tr><th>Was siehst du?</th><th>Bedeutung</th></tr>
<tr><td>Der Fleck ist <b>weg</b> (getrocknet), <b>nicht durchsichtig</b></td><td>❌ <b>kein Fett</b>, das war nur Wasser</td></tr>
<tr><td>Der Fleck ist <b>leicht durchsichtig</b></td><td>🟡 <b>wenig Fett</b></td></tr>
<tr><td>Der Fleck ist <b>stark durchsichtig</b> und bleibt</td><td>🟠 <b>viel Fett</b></td></tr>
</table></div>
<div class="tip"><b>Warum?</b> Wasser <b>verdunstet</b>, deshalb ist der Wasserfleck nach dem Trocknen weg. Fett verdunstet <b>nicht</b>. Es bleibt im Papier und macht es durchsichtig, wie ein Fenster. 🪟</div>
<h3>Das richtige Ergebnis</h3>
<div class="table-wrap"><table>
<tr><th>Lebensmittel</th><th>wenig Fett</th><th>viel Fett</th><th>kein Fett</th></tr>
<tr><td>💧 Wasser</td><td></td><td></td><td>✔</td></tr>
<tr><td>🫒 Öl</td><td></td><td>✔</td><td></td></tr>
<tr><td>🥒 Gurke</td><td></td><td></td><td>✔</td></tr>
<tr><td>🌰 Walnuss</td><td></td><td>✔</td><td></td></tr>
<tr><td>🧈 Butter</td><td></td><td>✔</td><td></td></tr>
<tr><td>🍟 Chips</td><td></td><td>✔</td><td></td></tr>
<tr><td>🥔 Kartoffel (roh)</td><td></td><td></td><td>✔</td></tr>
<tr><td>🧀 Käse</td><td>(✔)</td><td>✔</td><td></td></tr>
</table></div>
<p class="note">Beim Käse kommt es auf die Sorte an. Die meisten Käsesorten haben viel Fett, magerer Käse hat weniger. Wasser, Gurke und Kartoffel haben <b>kein</b> Fett: Ihr Fleck trocknet weg.</p>`
      }
    ],

    videos: [
      { id: 'AHCq84lrQEc', title: 'Die Fettfleck-Probe (Nachweis von Fett)', desc: 'So weist man Fett mit Papier nach.' },
      { id: 'NPOHZlWNTPY', title: 'Die Fett-Fleck-Probe', desc: 'Kinder untersuchen als Forscher, wie viel Fett im Essen steckt.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Warum braucht unser Körper Fett?',
        src: 'AB 9, Frage 1',
        html: `<p>Warum braucht unser Körper Fett? Nenne <b>3 Beispiele</b>.</p>`,
        solution: `<p>Fette <b>liefern Energie</b>, <b>halten uns warm</b> und <b>schützen unsere Organe</b>. (Außerdem: Sie helfen bei der Aufnahme von Vitaminen und sind Bausteine der Zellen.)</p>
<p class="note">Achtung: „für Laufen, Spielen, Lernen“ ist <b>keine</b> Aufgabe von Fett. Das ist das, wofür wir <b>Energie</b> brauchen. Die Aufgabe heißt: Fette liefern Energie.</p>`
      },
      {
        title: 'Aufgabe 2: Fett als Vorrat',
        src: 'AB 9, Frage 2',
        html: `<p>Was macht unser Körper mit Fett, das er als <b>Vorrat</b> speichert?</p>`,
        solution: `<p>Der Körper speichert Energie, die übrig ist, als Fett. Diesen <b>Vorrat</b> kann er <b>später nutzen</b>, wenn er Energie braucht.</p>`
      },
      {
        title: 'Aufgabe 3: Schutz vor Kälte',
        src: 'AB 9, Frage 3',
        html: `<p>Wie schützt uns Fett vor <b>Kälte</b>?</p>`,
        solution: `<p>Unter unserer <b>Haut</b> befindet sich eine <b>Fettschicht</b>. Sie hält uns warm und schützt den Körper vor Kälte.</p>`
      },
      {
        title: 'Aufgabe 4: Fett und Vitamine',
        src: 'AB 9, Frage 4',
        html: `<p>Warum braucht unser Körper Fett, um bestimmte <b>Vitamine</b> aufzunehmen?</p>`,
        solution: `<p>Manche Vitamine kann der Körper <b>nur mit Fett</b> aus der Nahrung aufnehmen. Ohne Fett könnte er sie nicht nutzen. Das sind die Vitamine <b>A, D, E und K</b>.</p>`
      },
      {
        title: 'Aufgabe 5: Fett in den Zellen',
        src: 'AB 9, Frage 5',
        html: `<p>Welche Aufgabe hat Fett in unseren <b>Körperzellen</b>?</p>`,
        solution: `<p>Fette sind wichtige <b>Bausteine</b>. Sie sind ein Bestandteil der <b>Hülle</b> der Zellen. Diese Hülle <b>schützt die Zelle</b> wie ein Zelt, damit sie nicht kaputtgeht.</p>`
      },
      {
        title: 'Extra für Spürnasen: Ganz ohne Fett?',
        src: 'AB 9, Extra',
        html: `<p>Warum wäre es <b>nicht gesund</b>, ganz auf Fett in unserer Nahrung zu verzichten?</p>`,
        solution: `<p>Weil der Körper Fett für viele Aufgaben braucht: Ohne Fett hätten wir weniger <b>Energie</b>, wir würden schneller <b>frieren</b>, die <b>Organe</b> wären schlechter geschützt, wir könnten die <b>Vitamine A, D, E und K</b> nicht aufnehmen und den <b>Zellen</b> würde ein Baustein fehlen. Man soll also <b>wenig</b>, aber nicht <b>gar kein</b> Fett essen.</p>`
      },
      {
        title: 'Aufgabe 6: Fettfleckprobe auswerten',
        src: 'AB 7 Lebensmitteldetektive',
        html: `<p>Ihr habt Wasser, Öl, Gurke, Walnuss, Butter, Chips, Kartoffel und Käse auf das Filterpapier gegeben. Kreuze an: <b>wenig Fett</b>, <b>viel Fett</b> oder <b>kein Fett</b>?</p>`,
        solution: `<p><b>Kein Fett</b> (Fleck trocknet weg): Wasser, Gurke, Kartoffel<br><b>Viel Fett</b> (stark durchsichtig): Öl, Walnuss, Butter, Chips, Käse</p>
<p class="note">Wasser hat <b>kein</b> Fett! Der Wasserfleck ist zuerst auch nass, aber nach dem Trocknen ist er weg.</p>`
      },
      {
        title: 'Aufgabe 7: Warum verschwindet der Wasserfleck?',
        src: 'AB 7 Lebensmitteldetektive',
        html: `<p>Erkläre: Warum ist der <b>Wasserfleck</b> nach dem Trocknen weg, der <b>Ölfleck</b> aber nicht?</p>`,
        solution: `<p>Wasser <b>verdunstet</b>. Es geht in die Luft, und das Papier wird wieder wie vorher. Fett verdunstet <b>nicht</b>. Es bleibt im Papier und macht es <b>durchsichtig</b>.</p>`
      }
    ],

    quiz: [
      { q: 'Wie schützt uns Fett vor <b>Kälte</b>?', a: ['Mit einer Fettschicht unter der Haut', 'Mit Haaren', 'Mit einer Jacke', 'Mit Zucker'], c: 0, e: 'Die Fettschicht hält warm.' },
      { q: 'Welche Organe sind zum Beispiel von Fett umgeben?', a: ['Die Nieren', 'Die Haare', 'Die Zähne', 'Die Fingernägel'], c: 0, e: 'Das Fett ist wie ein weiches Schutzpolster.' },
      { q: 'Bei welchen Vitaminen hilft Fett?', a: ['A, D, E und K', 'B und C', 'nur C', 'gar keine'], c: 0, e: 'Eselsbrücke: E-D-K-A.' },
      { q: 'Was macht der Körper mit Energie, die übrig ist?', a: ['Er speichert sie als Fett als Vorrat', 'Er wirft sie weg', 'Er macht daraus Wasser', 'Nichts'], c: 0, e: 'Den Vorrat kann er später nutzen.' },
      { q: 'Fett ist Teil der <b>Hülle</b> unserer Zellen. Die Hülle ist wie …', a: ['ein Zelt', 'ein Fußball', 'ein Fenster', 'ein Auto'], c: 0, e: 'Sie schützt die Zelle, damit sie nicht kaputtgeht.' },
      { q: 'Bei der Fettfleckprobe ist der Fleck nach dem Trocknen <b>stark durchsichtig</b>. Das bedeutet:', a: ['viel Fett', 'kein Fett', 'viel Wasser', 'viel Zucker'], c: 0, e: 'Fett macht das Papier durchsichtig.' },
      { q: 'Wie sieht der <b>Wasserfleck</b> nach dem Trocknen aus?', a: ['Er ist weg, das Papier ist nicht durchsichtig', 'Stark durchsichtig', 'Blau', 'Schwarz'], c: 0, e: 'Wasser verdunstet.' },
      { q: 'Welches Lebensmittel hinterlässt einen <b>Fettfleck</b>?', a: ['Walnuss', 'Gurke', 'Wasser', 'rohe Kartoffel'], c: 0, e: 'Nüsse haben viel Fett.' },
      { q: 'Welches Lebensmittel hat <b>kein</b> Fett?', a: ['Gurke', 'Butter', 'Chips', 'Öl'], c: 0, e: 'Gurke besteht fast nur aus Wasser.' },
      { q: 'Haben <b>Chips</b> viel oder wenig Fett?', a: ['Viel Fett', 'Kein Fett', 'Nur Wasser'], c: 0, e: 'Chips werden in Fett gebacken.' },
      { q: 'Woraus besteht das Papier für die Probe?', a: ['Kaffeefilter', 'Alufolie', 'Plastik', 'Pappe'], c: 0, e: 'Filterpapier saugt gut auf.' },
      { q: 'Ist es gesund, <b>ganz ohne</b> Fett zu essen?', a: ['Nein, der Körper braucht etwas Fett', 'Ja, Fett ist immer schlecht', 'Ja, nur Wasser reicht'], c: 0, e: 'Wenig Fett ja, aber nicht gar keins.' }
    ]
  });
})();
