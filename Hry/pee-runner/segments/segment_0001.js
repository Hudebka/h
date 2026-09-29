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
    length: 38,
    items: [
      { type:"coin", lane:1, z:0 },
      { type:"bottle", lane:0, z:6 },
      { type:"car", lane:2, z:6 },
      { type:"coin", lane:1, z:12 },
      { type:"car", lane:0, z:18, flipped:true },
      { type:"bottle", lane:2, z:18 },
      { type:"coin", lane:1, z:24 },
      { type:"bottle", lane:0, z:30 },
      { type:"car", lane:2, z:30 },
      { type:"coin", lane:1, z:36 },
    ]
  });
})();
