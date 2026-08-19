"use strict";

/* ============================================================
   SYNTHESIZER DEFINITIONS & ACTIVE ENGINE POINTER
   ============================================================ */
var activeEngine = (typeof SYNTH_ENGINES !== "undefined") ? SYNTH_ENGINES[0] : null;
var SYNTH_DEFS = activeEngine ? activeEngine.presets : [];
var ENZO_SYNTH_DEFS = (typeof SYNTH_ENGINES !== "undefined" && SYNTH_ENGINES.find(e => e.id === "enzo_synth")) ? SYNTH_ENGINES.find(e => e.id === "enzo_synth").presets : [];

if (typeof window !== "undefined") {
  window.activeEngine = activeEngine;
  window.SYNTH_DEFS = SYNTH_DEFS;
  window.ENZO_SYNTH_DEFS = ENZO_SYNTH_DEFS;
}
