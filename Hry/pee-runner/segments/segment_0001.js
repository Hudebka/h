// segment_0001.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0001.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0001",
    name: "",
    length: 20,
    items: [
      { type:"car", lane:0, z:4, flipped:true },
      { type:"puddle", lane:1, z:4 },
      { type:"car", lane:2, z:4 },
      { type:"car", lane:0, z:8, flipped:true },
      { type:"puddle", lane:1, z:8 },
      { type:"car", lane:2, z:8 },
      { type:"car", lane:0, z:12, flipped:true },
      { type:"puddle", lane:1, z:12 },
      { type:"car", lane:2, z:12 },
      { type:"car", lane:0, z:16, flipped:true },
      { type:"puddle", lane:1, z:16 },
      { type:"car", lane:2, z:16 },
      { type:"car", lane:0, z:20, flipped:true },
      { type:"puddle", lane:1, z:20 },
      { type:"car", lane:2, z:20 },
    ]
  });
})();
