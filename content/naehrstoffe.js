window.TOPICS = window.TOPICS || [];
(function () {
  window.TOPICS.push({
    id: 'naehrstoffe',
    order: 4,
    title: 'Die Nährstoffe',
    short: 'Baustoffe, Brennstoffe und Reglerstoffe',
    icon: '🔋',
    color: '#1971c2',
    ytSearch: 'Nährstoffe für Kinder erklärt Baustoffe Brennstoffe Reglerstoffe',
    sims: [
      { id: 'naehrstoffe', title: 'Welche Gruppe?' }
    ],

    learn: [
      {
        title: 'Was sind Nährstoffe?',
        html: `
<p>In unserem Essen stecken winzige Stoffe, die unser Körper braucht. Man nennt sie <b>Nährstoffe</b>. Man kann sie nicht sehen, aber sie sind da!</p>
<p>Es gibt <b>6 Nährstoffe</b>, die wir brauchen, um zu <b>wachsen</b> und <b>gesund</b> zu bleiben:</p>
<p class="chips"><span>Eiweiß</span><span>Mineralstoffe</span><span>Fette</span><span>Kohlenhydrate</span><span>Vitamine</span><span>Wasser</span></p>`
      },
      {
        title: 'Die drei Gruppen (AB 5)',
        html: `
<div class="three-col">
<div class="card group-card"><div class="g-emoji">🧱</div><h3>Baustoffe</h3><p>lassen den Körper <b>wachsen</b> und halten ihn am Leben.</p><p class="g-items">Eiweiß<br>Mineralstoffe</p></div>
<div class="card group-card"><div class="g-emoji">🔥⚽</div><h3>Brennstoffe</h3><p>geben dem Körper <b>Wärme und Kraft</b>.</p><p class="g-items">Kohlenhydrate<br>Fette</p></div>
<div class="card group-card"><div class="g-emoji">☂️</div><h3>Reglerstoffe</h3><p><b>wehren Krankheiten ab</b> und regeln die Vorgänge im Körper.</p><p class="g-items">Vitamine<br>Wasser</p></div>
</div>
<div class="tip"><b>Eselsbrücke:</b> 🧱 Ein <b>Bau</b>arbeiter braucht <b>Eiweiß</b> für starke Muskeln. 🔥 Im Ofen <b>brennen</b> Kohle (<b>Kohle</b>nhydrate) und <b>Fett</b>. ☂️ Der Regenschirm (<b>Regler</b>) schützt vor Krankheit, mit <b>Vitaminen</b> und <b>Wasser</b>.</div>`
      },
      {
        title: 'Wo steckt was drin?',
        html: `
<div class="table-wrap"><table>
<tr><th>Nährstoff</th><th>steckt zum Beispiel in …</th></tr>
<tr><td><b>Eiweiß</b></td><td>🥚 Eiern, 🐟 Fisch, 🍗 Fleisch, 🥛 Milch, 🧀 Käse, 🫘 Bohnen</td></tr>
<tr><td><b>Mineralstoffe</b></td><td>🥛 Milch (Kalzium für Knochen und Zähne), 🥦 Gemüse, 💧 Mineralwasser</td></tr>
<tr><td><b>Kohlenhydrate</b></td><td>🍞 Brot, 🍝 Nudeln, 🍚 Reis, 🥔 Kartoffeln (Stärke!), 🍬 Zucker</td></tr>
<tr><td><b>Fette</b></td><td>🧈 Butter, 🫒 Öl, 🥜 Nüssen, 🧀 Käse, 🍟 Chips</td></tr>
<tr><td><b>Vitamine</b></td><td>🍎 Obst, 🥕 Gemüse</td></tr>
<tr><td><b>Wasser</b></td><td>💧 Getränken, 🍉 Obst, 🥒 Gurke</td></tr>
</table></div>
<div class="merke"><b>Baustoffe</b> = Eiweiß, Mineralstoffe. <b>Brennstoffe</b> = Kohlenhydrate, Fette. <b>Reglerstoffe</b> = Vitamine, Wasser.</div>`
      }
    ],

    videos: [
      { id: '8b_izaonY9Q', title: 'Nährstoffe: Was sind Vitamine, Mineralien, Kohlenhydrate, Proteine, Fette?', desc: 'Überblick über alle Nährstoffe. (Proteine = Eiweiß)' },
      { id: '3e2MuFxch3c', title: 'Lernvideo: Gesunde Ernährung (Sachunterricht Grundschule)', desc: 'Auch hier kommen die Nährstoffe vor.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Trage ein',
        src: 'AB 5 Nährstoffe',
        html: `<p>Trage die Nährstoffe in die richtige Gruppe ein:<br><b>Eiweiß · Mineralstoffe · Fette · Kohlenhydrate · Vitamine · Wasser</b></p>
<div class="three-col"><div class="card">🧱 <b>Baustoffe</b><br>① ________<br>② ________</div><div class="card">🔥 <b>Brennstoffe</b><br>① ________<br>② ________</div><div class="card">☂️ <b>Reglerstoffe</b><br>① ________<br>② ________</div></div>`,
        solution: `<p>🧱 <b>Baustoffe:</b> Eiweiß, Mineralstoffe<br>🔥 <b>Brennstoffe:</b> Kohlenhydrate, Fette<br>☂️ <b>Reglerstoffe:</b> Vitamine, Wasser</p>`
      },
      {
        title: 'Aufgabe 2: Was machen die Gruppen?',
        src: 'AB 5 Nährstoffe',
        html: `<p>Was machen <b>Baustoffe</b>, <b>Brennstoffe</b> und <b>Reglerstoffe</b> in unserem Körper?</p>`,
        solution: `<ul><li><b>Baustoffe</b> lassen den Körper wachsen und halten ihn am Leben.</li><li><b>Brennstoffe</b> geben dem Körper Wärme und Kraft.</li><li><b>Reglerstoffe</b> wehren Krankheiten ab und regeln die Vorgänge im Körper.</li></ul>`
      },
      {
        title: 'Aufgabe 3: Bilder erklären',
        src: 'AB 5 Nährstoffe',
        html: `<p>Auf dem Arbeitsblatt sind drei Bilder: Kinder werden <b>gemessen</b>, ein Junge <b>spielt Fußball</b>, ein Mädchen steht <b>unter einem Regenschirm</b>. Warum passen die Bilder zu den Gruppen?</p>`,
        solution: `<ul><li>📏 <b>Messen</b> → die Kinder <b>wachsen</b> → Baustoffe</li><li>⚽ <b>Fußball</b> → man braucht <b>Kraft und Energie</b> → Brennstoffe</li><li>☂️ <b>Regenschirm</b> → <b>schützt</b> (vor Krankheiten) → Reglerstoffe</li></ul>`
      }
    ],

    quiz: [
      { q: 'Zu welcher Gruppe gehört <b>Eiweiß</b>?', a: ['Baustoffe', 'Brennstoffe', 'Reglerstoffe'], c: 0, e: 'Eiweiß lässt den Körper wachsen, z. B. die Muskeln.' },
      { q: 'Zu welcher Gruppe gehören <b>Kohlenhydrate</b>?', a: ['Brennstoffe', 'Baustoffe', 'Reglerstoffe'], c: 0, e: 'Sie geben Kraft und Energie.' },
      { q: 'Zu welcher Gruppe gehören <b>Vitamine</b>?', a: ['Reglerstoffe', 'Baustoffe', 'Brennstoffe'], c: 0, e: 'Vitamine helfen gegen Krankheiten.' },
      { q: 'Zu welcher Gruppe gehören <b>Fette</b>?', a: ['Brennstoffe', 'Reglerstoffe', 'Baustoffe'], c: 0, e: 'Fette geben Wärme und Kraft.' },
      { q: 'Zu welcher Gruppe gehört <b>Wasser</b>?', a: ['Reglerstoffe', 'Brennstoffe', 'Baustoffe'], c: 0, e: 'Wasser regelt die Vorgänge im Körper.' },
      { q: 'Zu welcher Gruppe gehören <b>Mineralstoffe</b>?', a: ['Baustoffe', 'Brennstoffe', 'Reglerstoffe'], c: 0, e: 'Zum Beispiel Kalzium für starke Knochen.' },
      { q: 'Was machen <b>Brennstoffe</b>?', a: ['Sie geben dem Körper Wärme und Kraft', 'Sie lassen den Körper wachsen', 'Sie wehren Krankheiten ab', 'Sie machen müde'], c: 0, e: 'Wie Holz im Ofen.' },
      { q: 'Was machen <b>Reglerstoffe</b>?', a: ['Sie wehren Krankheiten ab und regeln die Vorgänge im Körper', 'Sie geben Kraft', 'Sie lassen den Körper wachsen', 'Sie machen satt'], c: 0, e: 'Wie ein Regenschirm, der schützt.' },
      { q: 'Wie viele Nährstoffe stehen auf dem Arbeitsblatt?', a: ['6', '3', '4', '10'], c: 0, e: 'Eiweiß, Mineralstoffe, Fette, Kohlenhydrate, Vitamine, Wasser.' },
      { q: 'Worin stecken viele <b>Vitamine</b>?', a: ['Obst und Gemüse', 'Gummibärchen', 'Chips', 'Cola'], c: 0, e: 'Darum: 5 am Tag!' }
    ]
  });
})();
