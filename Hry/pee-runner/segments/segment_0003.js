// segment_0003.js
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0003.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0003",
    name: "",
    length: 24,
    lanes: 3,
    items: [
      { type:"car", lane:2, z:0, model:"truck_civil" },
      { type:"coin", lane:1, z:0, h:0 },
      { type:"puddle", lane:0, z:4 },
      { type:"coin", lane:1, z:4, h:0 },
      { type:"coin", lane:1, z:8, h:0 },
      { type:"car", lane:2, z:12, model:"van_police" },
      { type:"bottle", lane:0, z:12, h:0 },
      { type:"bottle", lane:0, z:16, h:0 },
      { type:"coin", lane:1, z:20, h:0 },
      { type:"puddle", lane:0, z:24 },
      { type:"car", lane:2, z:24, model:"van_police" },
      { type:"coin", lane:1, z:24, h:0 },
    ]
  });
})();
