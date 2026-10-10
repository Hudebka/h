// segment_0002.js
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0002.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0002",
    name: "",
    length: 24,
    lanes: 3,
    items: [
      { type:"coin", lane:2, z:0, h:0 },
      { type:"car", lane:0, z:4, model:"truck_civil" },
      { type:"puddle", lane:2, z:4 },
      { type:"coin", lane:2, z:4, h:1.5 },
      { type:"car", lane:1, z:8, model:"combi_police" },
      { type:"coin", lane:2, z:8, h:0 },
      { type:"car", lane:1, z:16, model:"combi_civil" },
      { type:"bottle", lane:2, z:16, h:0 },
      { type:"puddle", lane:2, z:20 },
      { type:"car", lane:0, z:24, model:"truck_civil" },
      { type:"car", lane:1, z:24, model:"sport_civil" },
      { type:"bottle", lane:2, z:24, h:0 },
    ]
  });
})();
