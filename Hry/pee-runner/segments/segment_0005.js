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
    length: 50,
    items: [
      { type:"coin", lane:0, z:0 },
      { type:"car", lane:2, z:0, flipped:true },
      { type:"coin", lane:1, z:10 },
      { type:"car", lane:0, z:20 },
      { type:"coin", lane:2, z:20 },
      { type:"coin", lane:1, z:30 },
      { type:"coin", lane:0, z:40 },
      { type:"car", lane:2, z:40, flipped:true },
      { type:"coin", lane:1, z:50 },
    ]
  });
})();
