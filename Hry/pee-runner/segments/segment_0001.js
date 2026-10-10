// segment_0001.js
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0001.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0001",
    name: "",
    length: 24,
    lanes: 3,
    items: [
      { type:"car", lane:2, z:2, model:"truck_police" },
      { type:"coin", lane:0, z:2, h:0 },
      { type:"car", lane:1, z:4, model:"combi_police" },
      { type:"coin", lane:0, z:4, h:0 },
      { type:"bottle", lane:0, z:6, h:0 },
      { type:"bottle", lane:0, z:8, h:0 },
      { type:"coin", lane:0, z:10, h:0 },
      { type:"bottle", lane:1, z:12, h:0 },
      { type:"car", lane:0, z:14, model:"jeep_civil" },
      { type:"car", lane:2, z:14, model:"van_civil" },
      { type:"coin", lane:1, z:14, h:0 },
      { type:"coin", lane:1, z:16, h:0 },
      { type:"coin", lane:0, z:18, h:0 },
      { type:"coin", lane:1, z:18, h:0 },
      { type:"coin", lane:2, z:18, h:0 },
      { type:"coin", lane:0, z:20, h:0 },
      { type:"coin", lane:2, z:20, h:0 },
      { type:"coin", lane:0, z:22, h:0 },
      { type:"coin", lane:2, z:22, h:0 },
      { type:"car", lane:1, z:24, model:"sport_civil" },
      { type:"coin", lane:0, z:24, h:0 },
      { type:"coin", lane:2, z:24, h:0 },
    ]
  });
})();
