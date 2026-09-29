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
      { type:"bottle", lane:0, z:0 },
      { type:"puddle", lane:1, z:0 },
      { type:"bottle", lane:2, z:0 },
      { type:"bottle", lane:0, z:5 },
      { type:"bottle", lane:1, z:5 },
      { type:"bottle", lane:2, z:5 },
      { type:"bottle", lane:0, z:10 },
      { type:"bottle", lane:1, z:10 },
      { type:"bottle", lane:2, z:10 },
      { type:"puddle", lane:1, z:15 },
      { type:"puddle", lane:1, z:30 },
      { type:"puddle", lane:1, z:35 },
      { type:"coin", lane:0, z:40 },
      { type:"coin", lane:1, z:40 },
      { type:"coin", lane:2, z:40 },
      { type:"coin", lane:0, z:45 },
      { type:"coin", lane:1, z:45 },
      { type:"coin", lane:2, z:45 },
      { type:"coin", lane:0, z:50 },
      { type:"puddle", lane:1, z:50 },
      { type:"coin", lane:2, z:50 },
    ]
  });
})();
