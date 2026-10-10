// segment_0004.js
// Vygenerováno editorem segmentů Pee Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0004.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0004",
    name: "",
    length: 24,
    lanes: 1,
    biome: "bridge",
    items: [
      { type:"coin", lane:0, z:0, h:0 },
      { type:"coin", lane:0, z:2, h:0 },
      { type:"coin", lane:0, z:4, h:0 },
      { type:"coin", lane:0, z:6, h:0 },
      { type:"coin", lane:0, z:8, h:0.5 },
      { type:"coin", lane:0, z:10, h:1 },
      { type:"puddle", lane:0, z:12 },
      { type:"coin", lane:0, z:12, h:1.5 },
      { type:"coin", lane:0, z:14, h:1 },
      { type:"coin", lane:0, z:16, h:0.5 },
      { type:"coin", lane:0, z:18, h:0 },
      { type:"coin", lane:0, z:20, h:0 },
      { type:"coin", lane:0, z:22, h:0 },
      { type:"coin", lane:0, z:24, h:0 },
    ]
  });
})();
