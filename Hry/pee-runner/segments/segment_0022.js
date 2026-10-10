// segment_0022.js — 3 auta, mince nebo lahev
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0022.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0022",
    name: "3 auta, mince nebo lahev",
    length: 24,
    lanes: 3,
    items: [
      { type:"car", lane:2, z:0, model:"sport_civil" },
      { type:"car", lane:1, z:3 },
      { type:"bottle", lane:0, z:6, h:0 },
      { type:"coin", lane:0, z:9, h:0.5 },
      { type:"coin", lane:0, z:12, h:1 },
      { type:"bottle", lane:2, z:12, h:0 },
      { type:"coin", lane:0, z:15, h:0.5 },
      { type:"bottle", lane:2, z:15, h:0 },
      { type:"coin", lane:0, z:18, h:0 },
      { type:"bottle", lane:2, z:18, h:0 },
      { type:"car", lane:1, z:21, model:"van_police" },
    ]
  });
})();
