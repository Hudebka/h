// segment_0007.js
// Vygenerováno editorem segmentů Punk Runner. Stačí tenhle soubor uložit
// do složky segments/ vedle hry - nic dalšího upravovat netřeba.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0007.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0007",
    name: "",
    length: 10,
    items: [
      { type:"coin", lane:0, z:0 },
      { type:"bottle", lane:1, z:0 },
      { type:"coin", lane:2, z:0 },
      { type:"bottle", lane:0, z:5 },
      { type:"coin", lane:1, z:5 },
      { type:"bottle", lane:2, z:5 },
      { type:"coin", lane:0, z:10 },
      { type:"bottle", lane:1, z:10 },
      { type:"coin", lane:2, z:10 },
    ]
  });
})();
