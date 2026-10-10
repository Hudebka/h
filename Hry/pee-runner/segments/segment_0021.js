// segment_0021.js — Konec cesty 2 pruhy
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0021.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0021",
    name: "Konec cesty 2 pruhy",
    length: 15,
    lanes: 2,
    items: [
      { type:"coin", lane:0, z:0, h:0 },
      { type:"bottle", lane:1, z:0, h:0 },
      { type:"coin", lane:0, z:3, h:0 },
      { type:"bottle", lane:1, z:3, h:0 },
      { type:"bottle", lane:0, z:6, h:0 },
      { type:"coin", lane:1, z:6, h:0 },
      { type:"arrow_left", lane:0, z:9 },
      { type:"arrow_right", lane:1, z:9 },
      { type:"car", lane:0, z:15, model:"van_police" },
      { type:"car", lane:1, z:15, model:"van_police" },
    ]
  });
})();
