// segment_0010.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0010.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0010",
    name: "",
    length: 24,
    items: [
      { type:"puddle", lane:0, z:0 },
      { type:"car", lane:1, z:4 },
      { type:"bottle", lane:1, z:8 },
      { type:"car", lane:2, z:8, flipped:true },
      { type:"coin", lane:1, z:12 },
      { type:"coin", lane:1, z:16 },
      { type:"bottle", lane:1, z:20 },
      { type:"car", lane:2, z:20, flipped:true },
      { type:"car", lane:1, z:24 },
    ]
  });
})();
