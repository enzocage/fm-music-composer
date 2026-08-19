"use strict";

/* ============================================================
   BANK DEFINITIONS & ACTIVE ENGINE SYNC
   ============================================================ */
function getBanksForEngine(engine) {
  if (!engine) engine = (typeof SYNTH_ENGINES !== "undefined" ? SYNTH_ENGINES[0] : null);
  if (!engine || !engine.banks) {
    return [
      {
        id: "A",
        name: "Bank A: Primary Presets",
        color: "#00c6fb",
        offset: 0,
        level: 1,
        paramCount: 24,
        complexityLabel: "Bank A: Primary Presets",
        visibleParams: null
      }
    ];
  }

  return engine.banks.map((b, idx) => ({
    id: b.id,
    name: b.name,
    color: b.color || engine.color || "#00c6fb",
    offset: idx * 10,
    level: idx + 1,
    paramCount: b.paramCount || 24,
    complexityLabel: b.complexityLabel || `${engine.name} · ${b.name}`,
    visibleParams: b.visibleParams || null
  }));
}

var BANKS = (typeof SYNTH_ENGINES !== "undefined") ? getBanksForEngine(SYNTH_ENGINES[0]) : [];
var currentBankId = "A";

if (typeof window !== "undefined") {
  window.getBanksForEngine = getBanksForEngine;
  window.BANKS = BANKS;
  window.currentBankId = currentBankId;
}