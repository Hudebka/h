// segment_0005.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0005.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0005",
    name: "",
    length: 24,
    items: [
      { type:"bottle", lane:0, z:4 },
      { type:"bottle", lane:1, z:4 },
      { type:"bottle", lane:2, z:4 },
      { type:"puddle", lane:0, z:12 },
      { type:"puddle", lane:1, z:12 },
      { type:"puddle", lane:2, z:12 },
      { type:"coin", lane:0, z:20 },
      { type:"coin", lane:1, z:20 },
      { type:"coin", lane:2, z:20 },
    ]
  });
})();
