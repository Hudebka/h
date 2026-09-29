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
    length: 50,
    items: [
      { type:"coin", lane:0, z:0 },
      { type:"coin", lane:1, z:0 },
      { type:"coin", lane:2, z:0 },
      { type:"coin", lane:0, z:4 },
      { type:"bottle", lane:1, z:4 },
      { type:"coin", lane:2, z:4 },
      { type:"coin", lane:0, z:8 },
      { type:"puddle", lane:1, z:8 },
      { type:"coin", lane:2, z:8 },
      { type:"coin", lane:0, z:12 },
      { type:"coin", lane:2, z:12 },
      { type:"car", lane:0, z:16 },
      { type:"car", lane:2, z:16, flipped:true },
      { type:"car", lane:0, z:20 },
      { type:"car", lane:2, z:20, flipped:true },
      { type:"car", lane:0, z:24 },
      { type:"car", lane:2, z:24, flipped:true },
      { type:"coin", lane:0, z:28 },
      { type:"coin", lane:2, z:28 },
      { type:"coin", lane:0, z:32 },
      { type:"car", lane:1, z:32 },
      { type:"coin", lane:2, z:32 },
      { type:"coin", lane:0, z:36 },
      { type:"bottle", lane:1, z:36 },
      { type:"coin", lane:2, z:36 },
      { type:"coin", lane:0, z:40 },
      { type:"coin", lane:2, z:40 },
      { type:"car", lane:0, z:44 },
      { type:"car", lane:2, z:44 },
      { type:"car", lane:0, z:48 },
      { type:"car", lane:2, z:48 }
    ]
  });
})();
