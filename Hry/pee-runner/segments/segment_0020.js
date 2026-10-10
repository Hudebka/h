// segment_0020.js
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0020.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0020",
    name: "",
    length: 24,
    lanes: 3,
    items: [
      { type:"coin", lane:2, z:2, h:0.5 },
      { type:"coin", lane:0, z:4, h:0 },
      { type:"coin", lane:2, z:4, h:1 },
      { type:"car", lane:1, z:6, model:"jeep_civil" },
      { type:"car", lane:2, z:6, model:"ramp_civil" },
      { type:"coin", lane:0, z:6, h:0.5 },
      { type:"coin", lane:2, z:6, h:1.5 },
      { type:"coin", lane:0, z:8, h:1 },
      { type:"coin", lane:2, z:8, h:2 },
      { type:"puddle", lane:0, z:10 },
      { type:"coin", lane:2, z:10, h:2.5 },
      { type:"coin", lane:0, z:12, h:1 },
      { type:"coin", lane:2, z:12, h:3.5 },
      { type:"coin", lane:0, z:14, h:0.5 },
      { type:"car", lane:2, z:16, model:"truck_civil" },
      { type:"coin", lane:0, z:16, h:0 },
      { type:"coin", lane:2, z:16, h:3.5 },
      { type:"bottle", lane:1, z:18, h:0 },
      { type:"bottle", lane:1, z:20, h:0 },
      { type:"coin", lane:2, z:20, h:3.5 },
      { type:"bottle", lane:1, z:22, h:0 },
    ]
  });
})();
