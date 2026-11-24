window.TOPICS = window.TOPICS || [];
(function () {
  window.TOPICS.push({
    id: 'staerke',
    order: 7,
    title: 'Stärke und die Jodprobe',
    short: 'Ein Kohlenhydrat und Energiehelfer, nachweisbar mit Jod',
    icon: '🥔',
    color: '#6741d9',
    ytSearch: 'Stärke nachweisen Jod Kinder',
    sims: [
      { id: 'jodprobe', title: 'Jodprobe' }
    ],

    learn: [
      {
        title: 'Was ist Stärke? (AB 11)',
        html: `
<p>Unser Körper braucht jeden Tag <b>Energie</b>. Wir brauchen sie zum <b>Laufen</b>, <b>Spielen</b>, <b>Lernen</b> und <b>Denken</b>. Die Energie bekommen wir aus unserer <b>Nahrung</b>.</p>
<p>Ein wichtiger Energielieferant ist die <b>Stärke</b>. Stärke gehört zu den <b>Kohlenhydraten</b>. 🔥 (Kohlenhydrate sind <b>Brennstoffe</b>!)</p>
<p>Bei der <b>Verdauung</b> zerlegt unser Körper die Stärke in kleine <b>Zuckerbausteine</b>. Daraus kann er Energie gewinnen.</p>
<div class="example">🧱🧱🧱🧱 Stärke ist wie eine lange <b>Kette</b> aus Zuckerbausteinen. Der Körper bricht die Kette in einzelne Bausteine 🧱 auseinander und nutzt sie als Energie ⚡.</div>
<div class="tip"><b>Probier mal:</b> Kau ein Stück Brot ganz lange (1 Minute). Es fängt an, <b>süß</b> zu schmecken! Schon im Mund wird die Stärke in Zucker zerlegt.</div>`
      },
      {
        title: 'Auch Pflanzen brauchen Stärke',
        html: `
<p>Pflanzen stellen mithilfe des <b>Sonnenlichts</b> ☀️ <b>Zucker</b> her. Einen Teil davon können sie als <b>Stärke speichern</b>. So haben sie einen <b>Vorrat für später</b>.</p>
<p>Die Kartoffel 🥔 ist so ein Vorratsspeicher! Aus ihr kann im nächsten Jahr eine neue Pflanze wachsen. Auch Getreidekörner (Weizen, Reis, Mais) speichern Stärke.</p>
<div class="table-wrap"><table>
<tr><th>Viel Stärke steckt in …</th><th>Keine oder kaum Stärke in …</th></tr>
<tr><td>🥔 Kartoffeln, 🍞 Brot, 🍝 Nudeln, 🍚 Reis, 🌽 Mais, Mehl, Haferflocken, 🫘 Bohnen</td><td>🥒 Gurke, 🧀 Käse, 🧈 Butter, 🥛 Milch, 🥚 Ei, 🍗 Fleisch, Zucker, 💧 Wasser</td></tr>
</table></div>`
      },
      {
        title: 'Der Stärkenachweis mit Jod',
        html: `
<p>Mit <b>Jodlösung</b> (Lugolsche Lösung) kann man Stärke nachweisen. Die Lösung ist <b>gelb-braun</b>.</p>
<div class="two-col">
<div class="card"><h3>🔵 Stärke ist da</h3><p>Die Stelle wird <b>blau-schwarz</b> (dunkelviolett).</p><div class="jod-demo"><span class="spot dark"></span></div></div>
<div class="card"><h3>🟤 keine Stärke</h3><p>Die Stelle bleibt <b>gelb-braun</b>, so wie die Jodlösung.</p><div class="jod-demo"><span class="spot brown"></span></div></div>
</div>
<div class="warn">⚠️ Jodlösung macht Flecken und darf <b>nicht</b> getrunken oder gegessen werden! Lebensmittel, auf die Jod getropft wurde, <b>nicht mehr essen</b>. Nur mit Erwachsenen benutzen.</div>
<div class="merke">Stärke ist ein <b>Kohlenhydrat</b>. Sie liefert unserem Körper <b>Energie</b>. Pflanzen können Stärke als <b>Vorrat</b> speichern. Mit <b>Jodlösung</b> lässt sich Stärke <b>nachweisen</b>.</div>`
      }
    ],

    videos: [
      { id: '12Ms2GSfvpU', title: 'Stärkedetektive: Das komische Zeug in Kartoffeln', desc: 'Spurensuche mit Jod in der Kartoffel.' },
      { id: 'LyJ53Xr3IdM', title: 'Wie weist man Stärke mit Jod nach?', desc: 'Der Versuch Schritt für Schritt.' },
      { id: 'n3Dx1465v2w', title: 'Nährstoffe: Nachweis von Stärke in Lebensmitteln', desc: 'Welche Lebensmittel werden blau?' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Wofür braucht dein Körper Energie?',
        src: 'AB 10, Frage 1',
        html: `<p>Wofür braucht dein Körper Energie? Nenne <b>zwei Beispiele</b>.</p>`,
        solution: `<p>Zum <b>Laufen</b> und zum <b>Lernen</b>. (Auch richtig: Spielen, Denken.)</p>`
      },
      {
        title: 'Aufgabe 2: Woher kommt die Energie?',
        src: 'AB 10, Frage 2',
        html: `<p>Woher bekommt unser Körper seine Energie?</p>`,
        solution: `<p>Aus unserer <b>Nahrung</b> (aus dem Essen).</p>
<p class="note">Achtung, nicht verwechseln: „Bei der Verdauung zerlegt der Körper die Stärke …“ ist die Antwort auf <b>Frage 4</b>, nicht auf Frage 2.</p>`
      },
      {
        title: 'Aufgabe 3: Ankreuzen',
        src: 'AB 10, Frage 3',
        html: `<p>Stärke gehört zu den …<br>☐ Vitaminen &nbsp; ☐ Kohlenhydraten &nbsp; ☐ Mineralstoffen</p>`,
        solution: `<p>☒ <b>Kohlenhydraten</b></p>`
      },
      {
        title: 'Aufgabe 4: Verdauung von Stärke',
        src: 'AB 10, Frage 4',
        html: `<p>Was macht unser Körper bei der <b>Verdauung</b> mit Stärke?</p>`,
        solution: `<p>Er <b>zerlegt</b> die Stärke in kleine <b>Zuckerbausteine</b>. Daraus kann er <b>Energie</b> gewinnen.</p>
<p class="note">„Aus unserer Nahrung“ ist die Antwort auf Frage 2.</p>`
      },
      {
        title: 'Aufgabe 5: Warum speichern Pflanzen Stärke?',
        src: 'AB 10, Frage 5',
        html: `<p>Warum speichern Pflanzen Stärke?</p>`,
        solution: `<p>Damit sie einen <b>Vorrat für später</b> haben.</p>`
      },
      {
        title: 'Aufgabe 6: Ergänze den Satz',
        src: 'AB 10, Frage 6',
        html: `<p>Mit ______________ kann man Stärke nachweisen.</p>`,
        solution: `<p>Mit <b>Jodlösung</b> kann man Stärke nachweisen.</p>`
      },
      {
        title: 'Extra für Spürnasen: Stärke für Mensch und Pflanze',
        src: 'AB 10, Extra',
        html: `<p>Erkläre: Warum ist Stärke für <b>Menschen</b> und für <b>Pflanzen</b> wichtig?</p>`,
        solution: `<p><b>Für Menschen:</b> Stärke liefert <b>Energie</b>. Der Körper zerlegt sie bei der Verdauung in Zuckerbausteine und gewinnt daraus Kraft zum Laufen, Spielen, Lernen und Denken.</p><p><b>Für Pflanzen:</b> Pflanzen machen mit Sonnenlicht Zucker und speichern einen Teil davon als Stärke. So haben sie einen <b>Vorrat für später</b>, z. B. die Kartoffel.</p>`
      }
    ],

    quiz: [
      { q: 'Zu welcher Gruppe gehört <b>Stärke</b>?', a: ['Kohlenhydrate', 'Vitamine', 'Mineralstoffe', 'Fette'], c: 0, e: 'Stärke ist ein Kohlenhydrat.' },
      { q: 'Woher bekommt unser Körper seine Energie?', a: ['Aus der Nahrung', 'Aus dem Schlaf', 'Aus der Luft', 'Aus dem Fernseher'], c: 0, e: 'Aus dem Essen.' },
      { q: 'Was macht der Körper bei der Verdauung mit Stärke?', a: ['Er zerlegt sie in kleine Zuckerbausteine', 'Er macht daraus Fett', 'Er speichert sie im Kopf', 'Nichts'], c: 0, e: 'Aus den Zuckerbausteinen gewinnt er Energie.' },
      { q: 'Wie stellen Pflanzen Zucker her?', a: ['Mithilfe des Sonnenlichts', 'Mit Salz', 'Im Dunkeln', 'Gar nicht'], c: 0, e: 'Pflanzen brauchen Sonnenlicht.' },
      { q: 'Warum speichern Pflanzen Stärke?', a: ['Als Vorrat für später', 'Damit sie blau werden', 'Damit sie schwer werden', 'Zum Spaß'], c: 0, e: 'So haben sie einen Vorrat.' },
      { q: 'Womit kann man Stärke nachweisen?', a: ['Mit Jodlösung', 'Mit Filterpapier', 'Mit Salzwasser', 'Mit einer Lupe'], c: 0, e: 'Filterpapier ist für die Fettfleckprobe!' },
      { q: 'Welche Farbe zeigt Jod, wenn <b>Stärke</b> da ist?', a: ['Blau-schwarz', 'Gelb', 'Rot', 'Grün'], c: 0, e: 'Ohne Stärke bleibt es gelb-braun.' },
      { q: 'In welchem Lebensmittel steckt <b>viel Stärke</b>?', a: ['Kartoffel', 'Gurke', 'Käse', 'Wasser'], c: 0, e: 'Die Kartoffel ist ein Stärkespeicher.' },
      { q: 'Welches Lebensmittel wird mit Jod <b>nicht</b> blau?', a: ['Butter', 'Brot', 'Nudeln', 'Reis'], c: 0, e: 'Butter ist Fett, keine Stärke.' },
      { q: 'Darf man ein Lebensmittel mit Jodlösung noch essen?', a: ['Nein', 'Ja', 'Nur, wenn es blau ist'], c: 0, e: 'Jodlösung nicht essen!' }
    ]
  });
})();
