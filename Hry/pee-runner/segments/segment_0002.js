// segment_0002.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
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
    items: [
      { type:"bottle", lane:0, z:6 },
      { type:"car", lane:1, z:6 },
      { type:"coin", lane:2, z:6 },
      { type:"puddle", lane:0, z:12 },
      { type:"car", lane:1, z:12 },
      { type:"coin", lane:2, z:12 },
      { type:"coin", lane:0, z:18 },
      { type:"car", lane:1, z:18 },
      { type:"coin", lane:2, z:18 },
    ]
  });
})();
