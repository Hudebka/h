// segment_0001.js — Ukázkový segment (mince uprostřed)
// Ukazuje formát, který generuje editor. Klidně smaž a nahraď vlastními.
(function(){
  if(!window.PunkRunner || typeof window.PunkRunner.registerSegment !== 'function'){
    console.warn('PunkRunner registr nenalezen - segment_0001.js se nenačetl.');
    return;
  }
  window.PunkRunner.registerSegment({
    id: "0001",
    name: "Ukázkový segment",
    length: 24,
    items: [
      { type:"coin", lane:1, z:2 },
      { type:"coin", lane:1, z:5 },
      { type:"car", lane:0, z:12 },
      { type:"coin", lane:2, z:12 },
      { type:"puddle", lane:1, z:18 }
    ]
  });
})();
