// segment_0009.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0009.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0009",
    name: "",
    length: 24,
    items: [
      { type:"coin", lane:1, z:0 },
      { type:"puddle", lane:1, z:4 },
      { type:"car", lane:2, z:4, flipped:true },
      { type:"car", lane:0, z:8 },
      { type:"coin", lane:1, z:8 },
      { type:"bottle", lane:1, z:12 },
      { type:"coin", lane:1, z:16 },
      { type:"car", lane:2, z:16, flipped:true },
      { type:"car", lane:0, z:20 },
      { type:"puddle", lane:1, z:20 },
      { type:"coin", lane:1, z:24 },
    ]
  });
})();
