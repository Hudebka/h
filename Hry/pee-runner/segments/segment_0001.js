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
    length: 50,
    items: [
      { type:"puddle", lane:1, z:0 },
      { type:"puddle", lane:1, z:10 },
      { type:"puddle", lane:1, z:20 },
      { type:"puddle", lane:1, z:30 },
      { type:"puddle", lane:1, z:40 },
      { type:"puddle", lane:1, z:50 },
    ]
  });
})();
