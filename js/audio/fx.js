"use strict";

/* ============================================================
   10 HIGH-END FX MODULES DSP ENGINE (FX.MD)
   ============================================================ */

const FX_CONFIG = {
  shimmer: {
    id: "shimmer",
    name: "Spectral Shimmer Diffuser",
    icon: "🌌",
    color: "#00f2fe",
    enabled: false,
    mix: 0.45,
    params: {
      shim_decay: { name: "Decay / Raumgröße", min: 0.5, max: 40.0, step: 0.1, val: 8.5, unit: "s", fmt: v => v.toFixed(1) + " s" },
      shim_pitch: { name: "Pitch Shift (+12st)", min: -12.0, max: 24.0, step: 1.0, val: 12.0, unit: "st", fmt: v => (v > 0 ? "+" : "") + Math.round(v) + " st" },
      shim_damp: { name: "High Damping Cutoff", min: 500.0, max: 16000.0, step: 10.0, val: 8000.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" },
      shim_size: { name: "Diffusions-Dichte", min: 10.0, max: 250.0, step: 1.0, val: 85.0, unit: "ms", fmt: v => Math.round(v) + " ms" }
    }
  },
  resonator: {
    id: "resonator",
    name: "Resonator Bank & Modal Body",
    icon: "🪵",
    color: "#e67e22",
    enabled: false,
    mix: 0.5,
    params: {
      res_freq: { name: "Grund-Resonanz f0", min: 30.0, max: 4000.0, step: 5.0, val: 260.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" },
      res_q: { name: "Resonanz-Güte Q", min: 1.0, max: 60.0, step: 0.5, val: 18.0, unit: "Q", fmt: v => v.toFixed(1) },
      res_inharm: { name: "Inharmonizität / Spreizung", min: 0.0, max: 4.0, step: 0.01, val: 1.2, unit: "Spread", fmt: v => v.toFixed(2) },
      res_decay: { name: "Körper-Dämpfung", min: 0.05, max: 8.0, step: 0.05, val: 2.4, unit: "s", fmt: v => v.toFixed(2) + " s" }
    }
  },
  barberpole: {
    id: "barberpole",
    name: "Barberpole Shepard Phaser",
    icon: "💈",
    color: "#9b59b6",
    enabled: false,
    mix: 0.5,
    params: {
      barber_rate: { name: "Umlauf-Rate / Richtung", min: -5.0, max: 5.0, step: 0.05, val: 0.45, unit: "Hz", fmt: v => (v > 0 ? "+" : "") + v.toFixed(2) + " Hz" },
      barber_feedback: { name: "Feedback Resonanz", min: 0.0, max: 96.0, step: 1.0, val: 65.0, unit: "%", fmt: v => Math.round(v) + " %" },
      barber_poles: { name: "Allpass Filter-Poles", min: 4, max: 16, step: 2, val: 8, unit: "Poles", fmt: v => Math.round(v) + " Poles" },
      barber_stereo: { name: "Stereo Phasenversatz", min: 0.0, max: 360.0, step: 1.0, val: 90.0, unit: "°", fmt: v => Math.round(v) + " °" }
    }
  },
  tape: {
    id: "tape",
    name: "Magnetic Tape Hysteresis",
    icon: "📼",
    color: "#f39c12",
    enabled: false,
    mix: 0.6,
    params: {
      tape_drive: { name: "Bandsättigung / Drive", min: 1.0, max: 8.0, step: 0.05, val: 2.8, unit: "Drv", fmt: v => v.toFixed(2) + " x" },
      tape_wow: { name: "Capstan Wow (0.5 Hz)", min: 0.0, max: 100.0, step: 1.0, val: 35.0, unit: "%", fmt: v => Math.round(v) + " %" },
      tape_flutter: { name: "Motor Flutter (6 Hz)", min: 0.0, max: 100.0, step: 1.0, val: 25.0, unit: "%", fmt: v => Math.round(v) + " %" },
      tape_head_age: { name: "Tonkopf-Höhendämpfung", min: 2000.0, max: 18000.0, step: 10.0, val: 9500.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" }
    }
  },
  waveguide: {
    id: "waveguide",
    name: "Karplus-Strong Waveguide",
    icon: "🎻",
    color: "#1abc9c",
    enabled: false,
    mix: 0.5,
    params: {
      string_pitch: { name: "Saiten-Stimmung f0", min: 40.0, max: 1200.0, step: 1.0, val: 220.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" },
      string_decay: { name: "Saiten-Nachklingzeit", min: 0.1, max: 10.0, step: 0.05, val: 3.5, unit: "s", fmt: v => v.toFixed(2) + " s" },
      string_damp: { name: "Helligkeits-Verlust", min: 0.0, max: 100.0, step: 1.0, val: 40.0, unit: "%", fmt: v => Math.round(v) + " %" },
      string_dispersion: { name: "Saitensteifigkeit / Allpass", min: 0.0, max: 1.0, step: 0.01, val: 0.35, unit: "Disp", fmt: v => v.toFixed(2) }
    }
  },
  granular: {
    id: "granular",
    name: "Granular Cloud & Scatter",
    icon: "☁️",
    color: "#3498db",
    enabled: false,
    mix: 0.5,
    params: {
      grain_size: { name: "Partikel-Länge (Grain)", min: 5.0, max: 400.0, step: 1.0, val: 65.0, unit: "ms", fmt: v => Math.round(v) + " ms" },
      grain_density: { name: "Partikel-Dichte", min: 1, max: 24, step: 1, val: 12, unit: "Grains", fmt: v => Math.round(v) },
      grain_pitch: { name: "Zufälliger Pitch-Scatter", min: 0.0, max: 24.0, step: 0.5, val: 7.0, unit: "st", fmt: v => "±" + v.toFixed(1) + " st" },
      grain_reverse: { name: "Rückwärts-Anteil", min: 0.0, max: 100.0, step: 1.0, val: 25.0, unit: "%", fmt: v => Math.round(v) + " %" }
    }
  },
  wavefolder: {
    id: "wavefolder",
    name: "Asymmetric Diode Wavefolder",
    icon: "⚡",
    color: "#ff007f",
    enabled: false,
    mix: 0.5,
    params: {
      fold_depth: { name: "Wellenfaltungs-Tiefe γ", min: 0.0, max: 10.0, step: 0.01, val: 3.8, unit: "Fold", fmt: v => v.toFixed(2) },
      fold_bias: { name: "Asymmetrischer DC-Bias", min: -1.0, max: 1.0, step: 0.01, val: 0.25, unit: "Bias", fmt: v => (v > 0 ? "+" : "") + v.toFixed(2) },
      fold_drive: { name: "Eingangs-Drive", min: 1.0, max: 8.0, step: 0.05, val: 2.2, unit: "Drv", fmt: v => v.toFixed(2) + " x" },
      fold_stages: { name: "Faltungs-Kaskaden", min: 1, max: 5, step: 1, val: 3, unit: "Stages", fmt: v => Math.round(v) + " Stufen" }
    }
  },
  sculptor: {
    id: "sculptor",
    name: "Dynamic Spectral Sculptor",
    icon: "🎚️",
    color: "#2ecc71",
    enabled: false,
    mix: 0.6,
    params: {
      sculpt_low_duck: { name: "Tiefmitten Ducking", min: -18.0, max: 0.0, step: 0.5, val: -6.5, unit: "dB", fmt: v => v.toFixed(1) + " dB" },
      sculpt_mid_tame: { name: "Resonanz-Dichte Mitten", min: 0.0, max: 100.0, step: 1.0, val: 45.0, unit: "%", fmt: v => Math.round(v) + " %" },
      sculpt_air_excite: { name: "Air / Obertonglanz Boost", min: 0.0, max: 12.0, step: 0.2, val: 3.5, unit: "dB", fmt: v => "+" + v.toFixed(1) + " dB" },
      sculpt_lookahead: { name: "Reaktions-Lookahead", min: 0.5, max: 20.0, step: 0.1, val: 4.0, unit: "ms", fmt: v => v.toFixed(1) + " ms" }
    }
  },
  orbit3d: {
    id: "orbit3d",
    name: "Binaural 3D Spatial Orbit",
    icon: "🪐",
    color: "#a29bfe",
    enabled: false,
    mix: 0.65,
    params: {
      orbit_speed: { name: "Rotations-Frequenz", min: -5.0, max: 5.0, step: 0.02, val: 0.35, unit: "Hz", fmt: v => (v > 0 ? "+" : "") + v.toFixed(2) + " Hz" },
      orbit_radius: { name: "Orbit-Radius / Distanz", min: 0.2, max: 10.0, step: 0.1, val: 3.2, unit: "m", fmt: v => v.toFixed(1) + " m" },
      orbit_elevation: { name: "Höhenwinkel Elevation", min: -90.0, max: 90.0, step: 1.0, val: 15.0, unit: "°", fmt: v => (v > 0 ? "+" : "") + Math.round(v) + " °" },
      orbit_doppler: { name: "Doppler-Shift Stärke", min: 0.0, max: 100.0, step: 1.0, val: 40.0, unit: "%", fmt: v => Math.round(v) + " %" }
    }
  },
  glitch: {
    id: "glitch",
    name: "Probabilistic Glitch Shuffler",
    icon: "🔀",
    color: "#ff4757",
    enabled: false,
    mix: 0.45,
    params: {
      glitch_prob: { name: "Glitch-Wahrscheinlichkeit", min: 0.0, max: 100.0, step: 1.0, val: 35.0, unit: "%", fmt: v => Math.round(v) + " %" },
      glitch_reverse: { name: "Reverse-Slice Anteil", min: 0.0, max: 100.0, step: 1.0, val: 30.0, unit: "%", fmt: v => Math.round(v) + " %" },
      glitch_bitcrush: { name: "Bitcrush Auflösung", min: 4, max: 16, step: 1, val: 12, unit: "Bit", fmt: v => Math.round(v) + " Bit" },
      glitch_downsample: { name: "Downsampling Rate", min: 2.0, max: 48.0, step: 0.5, val: 24.0, unit: "kHz", fmt: v => v.toFixed(1) + " kHz" }
    }
  }
};

const FX_CHAIN_ORDER = [
  "shimmer",
  "resonator",
  "barberpole",
  "tape",
  "waveguide",
  "granular",
  "wavefolder",
  "sculptor",
  "orbit3d",
  "glitch"
];

// Upfront FX State Oscillators Initialization
Object.keys(FX_CONFIG).forEach(fxId => {
  const fx = FX_CONFIG[fxId];
  if (!fx.oscillators) fx.oscillators = {};
  Object.keys(fx.params).forEach(pKey => {
    const p = fx.params[pKey];
    if (!fx.oscillators[pKey]) {
      fx.oscillators[pKey] = {
        enabled: false,
        min: p.min,
        max: p.max,
        speed: 20,
        phase: Math.random() * Math.PI * 2
      };
    }
  });
});

let activeFxId = "shimmer";
let fxMasterIn = null;
let fxMasterOut = null;
const fxNodes = {};

function initFxEngine() {
  if (!ctx) return;

  fxMasterIn = ctx.createGain();
  fxMasterIn.gain.value = 1.0;
  fxMasterOut = ctx.createGain();
  fxMasterOut.gain.value = 1.0;

  const n_samples = 1024;

  // ------------------------------------------------------------
  // 1. Shimmer Diffuser Nodes
  // ------------------------------------------------------------
  const shimIn = ctx.createGain();
  const shimDry = ctx.createGain();
  const shimWet = ctx.createGain();
  const shimOut = ctx.createGain();
  const shimDelay = ctx.createDelay(1.5);
  shimDelay.delayTime.value = 0.085;
  const shimFilter = ctx.createBiquadFilter();
  shimFilter.type = "lowpass";
  shimFilter.frequency.value = 8000;
  const shimFeedback = ctx.createGain();
  shimFeedback.gain.value = 0.75;

  shimIn.connect(shimDry).connect(shimOut);
  shimIn.connect(shimDelay).connect(shimFilter).connect(shimFeedback).connect(shimDelay);
  shimFilter.connect(shimWet).connect(shimOut);

  fxNodes.shimmer = { in: shimIn, out: shimOut, dry: shimDry, wet: shimWet, delay: shimDelay, filter: shimFilter, fb: shimFeedback };

  // ------------------------------------------------------------
  // 2. Resonator Bank (4-Band Modal Body)
  // ------------------------------------------------------------
  const resIn = ctx.createGain();
  const resDry = ctx.createGain();
  const resWet = ctx.createGain();
  const resOut = ctx.createGain();
  const resFilters = [];

  resIn.connect(resDry).connect(resOut);

  for (let k = 1; k <= 4; k++) {
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 260 * k;
    f.Q.value = 18;
    const g = ctx.createGain();
    g.gain.value = 0.6 / Math.sqrt(k);
    resIn.connect(f).connect(g).connect(resWet);
    resFilters.push({ filter: f, gain: g });
  }
  resWet.connect(resOut);

  fxNodes.resonator = { in: resIn, out: resOut, dry: resDry, wet: resWet, filters: resFilters };

  // ------------------------------------------------------------
  // 3. Barberpole Shepard Phaser
  // ------------------------------------------------------------
  const barbIn = ctx.createGain();
  const barbDry = ctx.createGain();
  const barbWet = ctx.createGain();
  const barbOut = ctx.createGain();
  const barbFeedback = ctx.createGain();
  barbFeedback.gain.value = 0.65;
  const barbAllpass = [];

  barbIn.connect(barbDry).connect(barbOut);

  let prevNode = barbIn;
  for (let i = 0; i < 4; i++) {
    const ap = ctx.createBiquadFilter();
    ap.type = "allpass";
    ap.frequency.value = 600 + i * 450;
    ap.Q.value = 3.5;
    prevNode.connect(ap);
    prevNode = ap;
    barbAllpass.push(ap);
  }
  prevNode.connect(barbFeedback).connect(barbAllpass[0]);
  prevNode.connect(barbWet).connect(barbOut);

  fxNodes.barberpole = { in: barbIn, out: barbOut, dry: barbDry, wet: barbWet, allpass: barbAllpass, fb: barbFeedback };

  // ------------------------------------------------------------
  // 4. Magnetic Tape Hysteresis & Flutter
  // ------------------------------------------------------------
  const tapeIn = ctx.createGain();
  const tapeDry = ctx.createGain();
  const tapeWet = ctx.createGain();
  const tapeOut = ctx.createGain();
  const tapeDrive = ctx.createGain();
  tapeDrive.gain.value = 2.8;
  const tapeShaper = ctx.createWaveShaper();
  const tapeDelay = ctx.createDelay(0.1);
  tapeDelay.delayTime.value = 0.015;
  const tapeFilter = ctx.createBiquadFilter();
  tapeFilter.type = "lowpass";
  tapeFilter.frequency.value = 9500;

  const tapeCurve = new Float32Array(n_samples);
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    tapeCurve[i] = Math.tanh(1.9 * x + 0.12 * x * x);
  }
  tapeShaper.curve = tapeCurve;
  tapeShaper.oversample = "4x";

  tapeIn.connect(tapeDry).connect(tapeOut);
  tapeIn.connect(tapeDrive).connect(tapeShaper).connect(tapeDelay).connect(tapeFilter).connect(tapeWet).connect(tapeOut);

  fxNodes.tape = { in: tapeIn, out: tapeOut, dry: tapeDry, wet: tapeWet, drive: tapeDrive, shaper: tapeShaper, delay: tapeDelay, filter: tapeFilter };

  // ------------------------------------------------------------
  // 5. Karplus-Strong Waveguide
  // ------------------------------------------------------------
  const wgIn = ctx.createGain();
  const wgDry = ctx.createGain();
  const wgWet = ctx.createGain();
  const wgOut = ctx.createGain();
  const wgDelay = ctx.createDelay(0.5);
  wgDelay.delayTime.value = 1 / 220;
  const wgFilter = ctx.createBiquadFilter();
  wgFilter.type = "lowpass";
  wgFilter.frequency.value = 4500;
  const wgFeedback = ctx.createGain();
  wgFeedback.gain.value = 0.92;

  wgIn.connect(wgDry).connect(wgOut);
  wgIn.connect(wgDelay).connect(wgFilter).connect(wgFeedback).connect(wgDelay);
  wgFilter.connect(wgWet).connect(wgOut);

  fxNodes.waveguide = { in: wgIn, out: wgOut, dry: wgDry, wet: wgWet, delay: wgDelay, filter: wgFilter, fb: wgFeedback };

  // ------------------------------------------------------------
  // 6. Granular Cloud Delay & Scatter
  // ------------------------------------------------------------
  const granIn = ctx.createGain();
  const granDry = ctx.createGain();
  const granWet = ctx.createGain();
  const granOut = ctx.createGain();
  const granDelay = ctx.createDelay(1.5);
  granDelay.delayTime.value = 0.065;
  const granFilter = ctx.createBiquadFilter();
  granFilter.type = "bandpass";
  granFilter.frequency.value = 2200;
  granFilter.Q.value = 2.0;
  const granFeedback = ctx.createGain();
  granFeedback.gain.value = 0.55;

  granIn.connect(granDry).connect(granOut);
  granIn.connect(granDelay).connect(granFilter).connect(granFeedback).connect(granDelay);
  granFilter.connect(granWet).connect(granOut);

  fxNodes.granular = { in: granIn, out: granOut, dry: granDry, wet: granWet, delay: granDelay, filter: granFilter, fb: granFeedback };

  // ------------------------------------------------------------
  // 7. Asymmetric Diode Wavefolder
  // ------------------------------------------------------------
  const wfIn = ctx.createGain();
  const wfDry = ctx.createGain();
  const wfWet = ctx.createGain();
  const wfOut = ctx.createGain();
  const wfDrive = ctx.createGain();
  wfDrive.gain.value = 2.2;
  const wfShaper = ctx.createWaveShaper();

  const wfCurve = new Float32Array(n_samples);
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    wfCurve[i] = Math.sin(3.8 * x + 0.25) + 0.3 * Math.sin(11.4 * x);
  }
  wfShaper.curve = wfCurve;
  wfShaper.oversample = "4x";

  wfIn.connect(wfDry).connect(wfOut);
  wfIn.connect(wfDrive).connect(wfShaper).connect(wfWet).connect(wfOut);

  fxNodes.wavefolder = { in: wfIn, out: wfOut, dry: wfDry, wet: wfWet, drive: wfDrive, shaper: wfShaper };

  // ------------------------------------------------------------
  // 8. Dynamic Spectral Sculptor
  // ------------------------------------------------------------
  const scIn = ctx.createGain();
  const scDry = ctx.createGain();
  const scWet = ctx.createGain();
  const scOut = ctx.createGain();
  const scDuck = ctx.createBiquadFilter();
  scDuck.type = "peaking";
  scDuck.frequency.value = 350;
  scDuck.Q.value = 1.8;
  scDuck.gain.value = -6.5;

  const scAir = ctx.createBiquadFilter();
  scAir.type = "highshelf";
  scAir.frequency.value = 7500;
  scAir.gain.value = 3.5;

  const scComp = ctx.createDynamicsCompressor();
  scComp.threshold.value = -18;
  scComp.knee.value = 12;
  scComp.ratio.value = 4.0;
  scComp.attack.value = 0.005;
  scComp.release.value = 0.15;

  scIn.connect(scDry).connect(scOut);
  scIn.connect(scDuck).connect(scAir).connect(scComp).connect(scWet).connect(scOut);

  fxNodes.sculptor = { in: scIn, out: scOut, dry: scDry, wet: scWet, duck: scDuck, air: scAir, comp: scComp };

  // ------------------------------------------------------------
  // 9. Binaural 3D Spatial Orbit Panner
  // ------------------------------------------------------------
  const orbIn = ctx.createGain();
  const orbDry = ctx.createGain();
  const orbWet = ctx.createGain();
  const orbOut = ctx.createGain();
  const orbPanner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

  orbIn.connect(orbDry).connect(orbOut);
  if (orbPanner) {
    orbIn.connect(orbPanner).connect(orbWet).connect(orbOut);
  } else {
    orbIn.connect(orbWet).connect(orbOut);
  }

  fxNodes.orbit3d = { in: orbIn, out: orbOut, dry: orbDry, wet: orbWet, panner: orbPanner };

  // ------------------------------------------------------------
  // 10. Probabilistic Glitch Shuffler & Bitcrush
  // ------------------------------------------------------------
  const glIn = ctx.createGain();
  const glDry = ctx.createGain();
  const glWet = ctx.createGain();
  const glOut = ctx.createGain();
  const glShaper = ctx.createWaveShaper();
  const glDelay = ctx.createDelay(1.0);
  glDelay.delayTime.value = 0.125;

  const glCurve = new Float32Array(n_samples);
  const steps = 16;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    glCurve[i] = Math.round(x * steps) / steps;
  }
  glShaper.curve = glCurve;

  glIn.connect(glDry).connect(glOut);
  glIn.connect(glShaper).connect(glDelay).connect(glWet).connect(glOut);

  fxNodes.glitch = { in: glIn, out: glOut, dry: glDry, wet: glWet, shaper: glShaper, delay: glDelay };

  // ------------------------------------------------------------
  // Wire the 10 FX Modules into a continuous serial master bus
  // ------------------------------------------------------------
  let chainCurr = fxMasterIn;
  FX_CHAIN_ORDER.forEach(id => {
    const node = fxNodes[id];
    if (node) {
      if (node.dry) node.dry.gain.value = 1.0;
      if (node.wet) node.wet.gain.value = 0.0;
      chainCurr.connect(node.in);
      chainCurr = node.out;
    }
  });
  chainCurr.connect(fxMasterOut);

  if (typeof dryGain !== "undefined" && dryGain) {
    fxMasterOut.connect(dryGain);
  }
  if (typeof conv !== "undefined" && conv) {
    fxMasterOut.connect(conv);
  }

  // Apply default Dry/Wet mixes for all modules
  FX_CHAIN_ORDER.forEach(id => updateFxModuleMix(id));
}

function updateFxModuleMix(fxId) {
  const fx = FX_CONFIG[fxId];
  const nodes = fxNodes[fxId];
  if (!fx || !nodes || !ctx) return;
  const now = ctx.currentTime;

  if (fx.enabled) {
    const mix = Math.max(0, Math.min(1, fx.mix));
    nodes.dry.gain.setTargetAtTime(1.0 - mix * 0.75, now, 0.02);
    nodes.wet.gain.setTargetAtTime(mix * 1.15, now, 0.02);
  } else {
    nodes.dry.gain.setTargetAtTime(1.0, now, 0.02);
    nodes.wet.gain.setTargetAtTime(0.0, now, 0.02);
  }
}

function toggleFx(fxId, forcedState) {
  const fx = FX_CONFIG[fxId];
  if (!fx) return;
  fx.enabled = typeof forcedState === "boolean" ? forcedState : !fx.enabled;
  updateFxModuleMix(fxId);
  if (typeof updateFxCardState === "function") {
    updateFxCardState(fxId);
  }
}

function setFxMix(fxId, mixVal) {
  const fx = FX_CONFIG[fxId];
  if (!fx) return;
  fx.mix = Math.max(0, Math.min(1, mixVal));
  updateFxModuleMix(fxId);
}

function applyFxParamChange(fxId, paramKey) {
  const fx = FX_CONFIG[fxId];
  if (!fx || !ctx) return;
  const p = fx.params[paramKey];
  if (!p) return;
  const val = p.val;
  const now = ctx.currentTime;
  const nodes = fxNodes[fxId];
  if (!nodes) return;

  if (fxId === "shimmer") {
    if (paramKey === "shim_decay") nodes.fb.gain.setTargetAtTime(Math.min(0.96, 0.4 + (val / 40) * 0.55), now, 0.05);
    if (paramKey === "shim_damp") nodes.filter.frequency.setTargetAtTime(val, now, 0.05);
    if (paramKey === "shim_size") nodes.delay.delayTime.setTargetAtTime(val / 1000, now, 0.05);
  }
  else if (fxId === "resonator") {
    if (paramKey === "res_freq" || paramKey === "res_inharm") {
      const f0 = fx.params.res_freq.val;
      const inharm = fx.params.res_inharm.val;
      nodes.filters.forEach((fObj, k) => {
        const mult = 1 + k * inharm;
        fObj.filter.frequency.setTargetAtTime(Math.min(18000, f0 * mult), now, 0.05);
      });
    }
    if (paramKey === "res_q") {
      nodes.filters.forEach(fObj => fObj.filter.Q.setTargetAtTime(val, now, 0.05));
    }
  }
  else if (fxId === "barberpole") {
    if (paramKey === "barber_feedback") {
      nodes.fb.gain.setTargetAtTime(Math.min(0.95, val / 100), now, 0.05);
    }
  }
  else if (fxId === "tape") {
    if (paramKey === "tape_drive") nodes.drive.gain.setTargetAtTime(val, now, 0.05);
    if (paramKey === "tape_head_age") nodes.filter.frequency.setTargetAtTime(val, now, 0.05);
  }
  else if (fxId === "waveguide") {
    if (paramKey === "string_pitch") nodes.delay.delayTime.setTargetAtTime(1 / Math.max(20, val), now, 0.05);
    if (paramKey === "string_decay") nodes.fb.gain.setTargetAtTime(Math.min(0.98, 0.5 + (val / 10) * 0.47), now, 0.05);
    if (paramKey === "string_damp") nodes.filter.frequency.setTargetAtTime(16000 * (1 - val / 120), now, 0.05);
  }
  else if (fxId === "granular") {
    if (paramKey === "grain_size") nodes.delay.delayTime.setTargetAtTime(val / 1000, now, 0.05);
  }
  else if (fxId === "wavefolder") {
    if (paramKey === "fold_drive") nodes.drive.gain.setTargetAtTime(val, now, 0.05);
  }
  else if (fxId === "sculptor") {
    if (paramKey === "sculpt_low_duck") nodes.duck.gain.setTargetAtTime(val, now, 0.05);
    if (paramKey === "sculpt_air_excite") nodes.air.gain.setTargetAtTime(val, now, 0.05);
  }
  else if (fxId === "orbit3d" && nodes.panner) {
    if (paramKey === "orbit_speed") {
      const panVal = Math.sin(now * val * Math.PI * 2);
      nodes.panner.pan.setTargetAtTime(panVal, now, 0.05);
    }
  }
  else if (fxId === "glitch") {
    if (paramKey === "glitch_downsample") {
      nodes.delay.delayTime.setTargetAtTime(Math.max(0.01, 1 / (val * 1000)), now, 0.05);
    }
  }
}

function tickFxOscillators(dt) {
  if (!ctx) return;
  const now = ctx.currentTime;

  FX_CHAIN_ORDER.forEach(fxId => {
    const fx = FX_CONFIG[fxId];
    if (!fx || !fx.enabled) return;

    // 1. Barberpole Dynamic Allpass Phase Sweep
    if (fxId === "barberpole" && fxNodes.barberpole && fxNodes.barberpole.allpass) {
      const rate = fx.params.barber_rate.val;
      fxNodes.barberpole.allpass.forEach((ap, idx) => {
        const ph = (now * rate + idx * 0.25) % 1;
        const f = 400 + Math.sin(ph * Math.PI * 2) * 1200 + 800;
        ap.frequency.setValueAtTime(Math.max(80, f), now);
      });
    }

    // 2. Tape Wow & Flutter LFO Modulation
    if (fxId === "tape" && fxNodes.tape && fxNodes.tape.delay) {
      const wow = (fx.params.tape_wow.val / 100) * 0.004;
      const flutter = (fx.params.tape_flutter.val / 100) * 0.0015;
      const dtVal = 0.015 + Math.sin(now * 0.5 * Math.PI * 2) * wow + Math.sin(now * 6.0 * Math.PI * 2) * flutter;
      fxNodes.tape.delay.delayTime.setValueAtTime(Math.max(0.001, dtVal), now);
    }

    // 3. Orbit 3D Rotation
    if (fxId === "orbit3d" && fxNodes.orbit3d && fxNodes.orbit3d.panner) {
      const spd = fx.params.orbit_speed.val;
      const pan = Math.sin(now * spd * Math.PI * 2);
      fxNodes.orbit3d.panner.pan.setValueAtTime(pan, now);
    }

    // 4. Parameter Oscillators
    if (fx.oscillators) {
      Object.keys(fx.oscillators).forEach(pKey => {
        const osc = fx.oscillators[pKey];
        if (!osc || !osc.enabled) return;
        const freq = 0.01 + Math.pow(osc.speed / 100, 2) * 4.5;
        osc.phase = (osc.phase + freq * dt * Math.PI * 2) % (Math.PI * 2);
        const lfo = 0.5 + 0.5 * Math.sin(osc.phase);
        const val = osc.min + lfo * (osc.max - osc.min);
        fx.params[pKey].val = val;
        applyFxParamChange(fxId, pKey);
        if (typeof updateFxParamRowVisual === "function") {
          updateFxParamRowVisual(fxId, pKey);
        }
      });
    }
  });
}
