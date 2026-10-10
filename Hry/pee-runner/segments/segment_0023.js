// segment_0023.js — 3 kamiony nebo dole?
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0023.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0023",
    name: "3 kamiony nebo dole?",
    length: 40,
    lanes: 3,
    items: [
      { type:"arrow_left", lane:0, z:0 },
      { type:"coin", lane:1, z:0, h:0 },
      { type:"coin", lane:1, z:2, h:0 },
      { type:"bottle", lane:2, z:2, h:1 },
      { type:"car", lane:2, z:4, model:"ramp_civil" },
      { type:"coin", lane:1, z:4, h:0 },
      { type:"coin", lane:2, z:4, h:1.5 },
      { type:"coin", lane:0, z:6, h:0 },
      { type:"coin", lane:2, z:6, h:2 },
      { type:"coin", lane:2, z:8, h:2.5 },
      { type:"coin", lane:0, z:10, h:0 },
      { type:"coin", lane:2, z:10, h:3 },
      { type:"coin", lane:2, z:12, h:3.5 },
      { type:"car", lane:2, z:14, model:"truck_civil" },
      { type:"coin", lane:0, z:14, h:0 },
      { type:"bottle", lane:2, z:14, h:3.5 },
      { type:"coin", lane:2, z:16, h:3.5 },
      { type:"puddle", lane:0, z:18 },
      { type:"bottle", lane:2, z:18, h:3.5 },
      { type:"coin", lane:2, z:20, h:3.5 },
      { type:"car", lane:1, z:22, model:"truck_civil" },
      { type:"coin", lane:0, z:22, h:0 },
      { type:"coin", lane:1, z:22, h:3.5 },
      { type:"coin", lane:0, z:24, h:0 },
      { type:"coin", lane:1, z:24, h:3.5 },
      { type:"coin", lane:1, z:26, h:3.5 },
      { type:"bottle", lane:1, z:28, h:0 },
      { type:"car", lane:2, z:32, model:"truck_civil" },
      { type:"coin", lane:0, z:32, h:0 },
      { type:"bottle", lane:2, z:32, h:3.5 },
      { type:"coin", lane:0, z:34, h:0 },
      { type:"coin", lane:0, z:36, h:0 },
      { type:"bottle", lane:2, z:36, h:3.5 },
      { type:"coin", lane:0, z:38, h:0 },
      { type:"coin", lane:0, z:40, h:0 },
    ]
  });
})();
