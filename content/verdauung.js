window.TOPICS = window.TOPICS || [];
(function () {
  var weg = '<div class="weg">' +
    '<div class="weg-step"><span class="weg-ic">👄</span><div><b>1. Mund</b><br>Dort werden die Nahrungsmittel <b>zerkleinert</b>. Die Zähne kauen, der Speichel macht das Essen weich.</div></div>' +
    '<div class="weg-arrow">⬇</div>' +
    '<div class="weg-step"><span class="weg-ic">🛝</span><div><b>2. Speiseröhre</b><br>Der <b>Speisebrei</b> wird in den <b>Magen transportiert</b>. Die Speiseröhre ist ein Schlauch vom Hals bis zum Magen.</div></div>' +
    '<div class="weg-arrow">⬇</div>' +
    '<div class="weg-step"><span class="weg-ic">🌀</span><div><b>3. Magen und Dünndarm</b><br>Dort findet die <b>Verdauung</b> statt. Der Magensaft zersetzt das Essen. Im Dünndarm gehen die Nährstoffe ins Blut.</div></div>' +
    '<div class="weg-arrow">⬇</div>' +
    '<div class="weg-step"><span class="weg-ic">🚽</span><div><b>4. Dickdarm</b><br><b>Unbrauchbare Speisereste</b> werden <b>ausgeschieden</b>. Vorher holt der Dickdarm noch Wasser heraus.</div></div>' +
    '</div>';

  window.TOPICS.push({
    id: 'verdauung',
    order: 5,
    title: 'Der Weg der Nahrung',
    short: 'Mund → Speiseröhre → Magen und Dünndarm → Dickdarm',
    icon: '👄',
    color: '#ae3ec9',
    ytSearch: 'Verdauung für Kinder erklärt',
    sims: [
      { id: 'wegordnen', title: 'Reihenfolge' },
      { id: 'wegsaetze', title: 'Sätze zuordnen' }
    ],

    learn: [
      {
        title: 'Was passiert mit dem Essen?',
        html: `
<p>Wenn du ein Butterbrot isst, macht es eine lange Reise durch deinen Körper. Diese Reise nennt man <b>Verdauung</b>. Dabei holt sich der Körper die <b>Nährstoffe</b> aus dem Essen.</p>
<p>Die Reise hat <b>4 Stationen</b>:</p>
${weg}`
      },
      {
        title: 'Die 4 Stationen genauer',
        html: `
<ul>
<li><b>👄 Mund:</b> Gut kauen ist wichtig! Je kleiner das Essen ist, desto leichter kann der Körper es verdauen.</li>
<li><b>🛝 Speiseröhre:</b> Sie drückt den Brei mit Muskeln nach unten, wie wenn man Zahnpasta aus der Tube drückt. Deshalb kannst du sogar im Handstand schlucken!</li>
<li><b>🌀 Magen:</b> Der Magen ist wie ein Sack. Er knetet den Brei und mischt ihn mit <b>Magensaft</b>.</li>
<li><b>🌀 Dünndarm:</b> Er ist ein sehr langer, dünner Schlauch. Hier werden die <b>Nährstoffe</b> herausgeholt und ins <b>Blut</b> gegeben.</li>
<li><b>🚽 Dickdarm:</b> Was der Körper nicht braucht, wird hier eingedickt und dann auf der Toilette <b>ausgeschieden</b>.</li>
</ul>
<div class="merke">Mund (zerkleinern) → Speiseröhre (transportieren) → Magen und Dünndarm (verdauen) → Dickdarm (ausscheiden).</div>`
      }
    ],

    videos: [
      { id: '5cnVF-1hdBY', title: 'Erklärfilm Verdauung für Kinder', desc: 'Ein Blick in den Körper: Wo geht das Essen hin?' },
      { id: 'zNSSMFfuILA', title: 'Wie funktioniert die Verdauung?', desc: 'Was passiert mit dem Essen in unserem Bauch?' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Sätze zuordnen',
        src: 'AB 6 Der Weg der Nahrung',
        html: `<p>Schreibe die Sätze zu den passenden Begriffen (1. Mund, 2. Speiseröhre, 3. Magen und Dünndarm, 4. Dickdarm):</p>
<div class="card soft">Dort werden die Nahrungsmittel zerkleinert – Unbrauchbare Speisereste werden ausgeschieden – Der Speisebrei wird in den Magen transportiert – Dort findet die Verdauung statt.</div>`,
        solution: `<ol><li><b>Mund:</b> Dort werden die Nahrungsmittel zerkleinert.</li><li><b>Speiseröhre:</b> Der Speisebrei wird in den Magen transportiert.</li><li><b>Magen und Dünndarm:</b> Dort findet die Verdauung statt.</li><li><b>Dickdarm:</b> Unbrauchbare Speisereste werden ausgeschieden.</li></ol>
<p class="note">Achte auf die Rechtschreibung: <b>Nahrungsmittel</b>, <b>zerkleinert</b>, <b>Speisebrei</b>, <b>transportiert</b>, <b>findet … statt</b>, <b>Speisereste</b>, <b>ausgeschieden</b>.</p>`
      },
      {
        title: 'Aufgabe 2: Reihenfolge',
        src: 'eigene Aufgabe',
        html: `<p>Bringe in die richtige Reihenfolge: <b>Dickdarm · Mund · Magen und Dünndarm · Speiseröhre</b></p>`,
        solution: `<p>Mund → Speiseröhre → Magen und Dünndarm → Dickdarm</p>`
      },
      {
        title: 'Aufgabe 3: Gut kauen',
        src: 'eigene Aufgabe',
        html: `<p>Warum soll man das Essen <b>gut kauen</b>?</p>`,
        solution: `<p>Im Mund wird das Essen <b>zerkleinert</b>. Kleine Stücke kann der Magen viel <b>leichter verdauen</b>. Außerdem macht der Speichel das Essen weich, damit man es gut schlucken kann.</p>`
      }
    ],

    quiz: [
      { q: 'Wo werden die Nahrungsmittel <b>zerkleinert</b>?', a: ['Im Mund', 'Im Dickdarm', 'In der Speiseröhre', 'Im Magen'], c: 0, e: 'Die Zähne kauen das Essen klein.' },
      { q: 'Was macht die <b>Speiseröhre</b>?', a: ['Sie transportiert den Speisebrei in den Magen', 'Sie kaut das Essen', 'Sie scheidet Reste aus', 'Sie macht Speichel'], c: 0, e: 'Sie ist der Schlauch vom Hals zum Magen.' },
      { q: 'Wo findet die <b>Verdauung</b> statt?', a: ['Im Magen und Dünndarm', 'Im Mund', 'In der Nase', 'In der Speiseröhre'], c: 0, e: 'Hier holt der Körper die Nährstoffe heraus.' },
      { q: 'Was passiert im <b>Dickdarm</b>?', a: ['Unbrauchbare Speisereste werden ausgeschieden', 'Das Essen wird gekaut', 'Der Brei wird in den Magen gebracht', 'Das Essen wird gesalzen'], c: 0, e: 'Der Rest geht auf die Toilette.' },
      { q: 'Welche Station kommt <b>nach</b> dem Mund?', a: ['Speiseröhre', 'Dickdarm', 'Dünndarm', 'Magen'], c: 0, e: 'Mund → Speiseröhre → Magen und Dünndarm → Dickdarm.' },
      { q: 'Welche Station kommt <b>zuletzt</b>?', a: ['Dickdarm', 'Mund', 'Speiseröhre', 'Magen'], c: 0, e: 'Der Dickdarm ist die letzte Station.' },
      { q: 'Wie nennt man das zerkaute Essen?', a: ['Speisebrei', 'Speisesaft', 'Speisewurst', 'Speisekarte'], c: 0, e: 'Speisebrei, er ist weich und matschig.' },
      { q: 'Wo gehen die Nährstoffe ins Blut?', a: ['Im Dünndarm', 'Im Mund', 'In der Speiseröhre', 'In den Zähnen'], c: 0, e: 'Der Dünndarm ist sehr lang und holt die Nährstoffe heraus.' }
    ]
  });
})();
