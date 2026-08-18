"use strict";

/* ============================================================
   Zustand & Datenstrukturen: 8-Algorithmen FM Matrix Engine (PLAN 4)
   ============================================================ */
let activeSynthIdx = 0;
const lorenzState = { x: 0.1, y: 0, z: 0 };

const FM_ALGORITHMS = {
  1: {
    id: 1,
    key: "dual_stack",
    name: "Dual-Stack (2+2)",
    icon: "🎹",
    desc: "(Mod2 → Car1) + (Mod4 → Car2)",
    detail: "Zwei parallele 2-Op Paare. Perfekt für DX7 Rhodes, Marimba, Glocken & Vibraphon (Tine Attack + Sustained Body).",
    roles: { op1: "carrier", op2: "modulator", op3: "carrier", op4: "modulator" }
  },
  2: {
    id: 2,
    key: "dual_mod",
    name: "Dual-Modulator Parallel",
    icon: "🎺",
    desc: "(Mod2 + Mod3) → Car1",
    detail: "Zwei Modulatoren parallel auf einen Träger. Erzeugt schneidende Bläser, Moog-Sägezahn und Vokal-Formanten.",
    roles: { op1: "carrier", op2: "modulator", op3: "modulator", op4: "sub" }
  },
  3: {
    id: 3,
    key: "additive_3car",
    name: "3-Carrier Additiv",
    icon: "⛪",
    desc: "Car1 + Car2 + Car3 + (Mod4 → Car1)",
    detail: "Drei unabhängige Träger mit Shimmer-Modulator. Für Sakralorgeln, Hammond B3 Drawbars & dichte Ambient-Drones.",
    roles: { op1: "carrier", op2: "carrier", op3: "carrier", op4: "modulator" }
  },
  4: {
    id: 4,
    key: "cascade_4op",
    name: "4-Op Deep Cascade",
    icon: "🔔",
    desc: "Mod4 → Mod3 → Mod2 → Car1",
    detail: "Klassische 4-Operator Serien-Kaskade. Für Gongs, Becken, metallische Oberton-Strukturen & Arcade Chiptunes.",
    roles: { op1: "carrier", op2: "modulator", op3: "modulator", op4: "modulator" }
  },
  5: {
    id: 5,
    key: "wavefold_tree",
    name: "Branching Wavefold Pluck",
    icon: "🪕",
    desc: "Mod3 → (Car1 + Car2) → Wavefolder",
    detail: "Buchla Westcoast Pluck mit asymmetrischer Dioden-Faltung. Für organische Bongos, Mallets & Perkussion.",
    roles: { op1: "carrier", op2: "carrier", op3: "modulator", op4: "feedback" }
  },
  6: {
    id: 6,
    key: "cross_feedback",
    name: "Cross-Mod Ring & Sync",
    icon: "⚡",
    desc: "Mod2 ⇄ Car1 + Selbst-Feedback",
    detail: "Gegenseitige Frequenz-Kreuzmodulation mit Rückkopplung. Für Acid 303, Sync-Leads & Aggressive Distortions.",
    roles: { op1: "carrier", op2: "modulator", op3: "cross", op4: "noise" }
  },
  7: {
    id: 7,
    key: "waveguide_phys",
    name: "Physical Modeling String",
    icon: "🎻",
    desc: "Impulse Burst → Resonanz-Schleife",
    detail: "Karplus-Strong Saitenmodell mit Dämpfung. Für Koto, Sitar, Harfe, Cello & gezupfte Saiten.",
    roles: { op1: "string", op2: "bow_impulse", op3: "body", op4: "air" }
  },
  8: {
    id: 8,
    key: "chaos_attractor",
    name: "Chaos Attractor FM",
    icon: "🌀",
    desc: "Nichtlineare DGL (Lorenz / Rössler) → Phase",
    detail: "Chaotische Phasenmodulation über dynamische System-Differentialgleichungen für kinetische Klanglandschaften.",
    roles: { op1: "carrier", op2: "lorenz_x", op3: "lorenz_y", op4: "lorenz_z" }
  }
};

// 24 Canonical Parameter Keys across 5 Color-Coded Clusters
const OSC_PARAM_KEYS = [
  // Cluster 1: Oszillatoren & Ratios (6)
  "r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread",
  // Cluster 2: Modulation & Algorithmus (5)
  "mod_I0", "mod_dI", "mod_cross", "mod_fb", "algo_type",
  // Cluster 3: Waveshaping & Sättigung (4)
  "shape_fold", "shape_morph", "shape_bias", "shape_drive",
  // Cluster 4: ADSR & Entkoppelte Modulator-Hüllkurven (5)
  "env_atk", "env_dec", "env_sus", "env_rel", "mod_env_dec",
  // Cluster 5: Filter, Raum & Key-Scaling (4)
  "flt_cutoff", "flt_reso", "key_scaling", "space_pan",
  // Zusatz/Physik
  "custom_math", "mod_skew", "flt_envAmt", "mod_env_atk", "mod_env_sus", "mod_env_rel", "op_wave", "vibDepth"
];

const SYNTH_PARAM_CLUSTERS = {
  operators: {
    id: "operators",
    title: "OSZILLATOREN & FREQUENZ-MATRIX",
    color: "#00f2fe",
    icon: "🎛️",
    badge: "GRUPPE 1",
    keys: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread"]
  },
  modulation: {
    id: "modulation",
    title: "FM-MODULATION & TOPOLOGIE",
    color: "#ffd200",
    icon: "🌊",
    badge: "GRUPPE 2",
    keys: ["mod_I0", "mod_dI", "mod_cross", "mod_fb", "algo_type"]
  },
  waveshaping: {
    id: "waveshaping",
    title: "WAVESHAPER & SÄTTIGUNG",
    color: "#ff007f",
    icon: "📐",
    badge: "GRUPPE 3",
    keys: ["shape_fold", "shape_morph", "shape_bias", "shape_drive"]
  },
  envelopes: {
    id: "envelopes",
    title: "ADSR ZEIT- & OBERTON-DYNAMIK",
    color: "#2ed573",
    icon: "⏱️",
    badge: "GRUPPE 4",
    keys: ["env_atk", "env_dec", "env_sus", "env_rel", "mod_env_dec"]
  },
  space_filter: {
    id: "space_filter",
    title: "FILTER, 3D RAUM & KEY-SCALING",
    color: "#a29bfe",
    icon: "🌌",
    badge: "GRUPPE 5",
    keys: ["flt_cutoff", "flt_reso", "key_scaling", "space_pan", "custom_math"]
  }
};

let activeParamCluster = "focused"; // 'focused' | 'all' | 'operators' | 'modulation' | 'waveshaping' | 'envelopes' | 'space_filter'

const PARAM_BOUNDS = {
  // Cluster 1: Oszillatoren
  r1_ratio: { name: "Carrier Ratio r1", min: 0.25, max: 16.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r2_ratio: { name: "Modulator Ratio r2", min: 0.05, max: 24.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r3_ratio: { name: "Harmonic 3 Ratio r3", min: 0.125, max: 32.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r4_ratio: { name: "Sub / Air Ratio r4", min: 0.1, max: 8.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  op_detune: { name: "Fein-Detune Δϕ", min: -50.0, max: 50.0, step: 0.1, unit: "¢", fmt: v => (v > 0 ? "+" : "") + v.toFixed(1) + " ¢" },
  op_spread: { name: "Stereo Unison Spread", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },

  // Cluster 2: Modulation & Topologie
  mod_I0: { name: "Haupt-Index I0", min: 0.0, max: 16.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_dI: { name: "Dynamik-Index ΔI", min: 0.0, max: 12.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_cross: { name: "Kreuzmod-Index I3→2", min: 0.0, max: 10.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_fb: { name: "Operator-Feedback β_fb", min: 0.0, max: 8.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  algo_type: { name: "FM-Topologie Algorithmus", min: 1, max: 8, step: 1, unit: "Algo", fmt: v => "Algo " + Math.round(v) + ": " + (FM_ALGORITHMS[Math.round(v)]?.name || "") },
  mod_skew: { name: "Quadratur-Phase θ", min: 0.0, max: 360.0, step: 1.0, unit: "°", fmt: v => Math.round(v) + " °" },

  // Cluster 3: Waveshaping
  shape_fold: { name: "Chebyshev Wavefolder γ", min: 0.0, max: 10.0, step: 0.01, unit: "Fold", fmt: v => v.toFixed(2) },
  shape_morph: { name: "Wellenform-Morphing", min: 0.0, max: 1.0, step: 0.01, unit: "Morph", fmt: v => Math.round(v * 100) + " %" },
  shape_bias: { name: "DC-Asymmetrie Offset", min: -1.0, max: 1.0, step: 0.01, unit: "Bias", fmt: v => (v > 0 ? "+" : "") + v.toFixed(2) },
  shape_drive: { name: "Tape Crunch & Drive", min: 1.0, max: 6.0, step: 0.05, unit: "Drv", fmt: v => v.toFixed(2) + " x" },

  // Cluster 4: Hüllkurven & Oberton-Dynamik
  env_atk: { name: "Lautstärke-Attack", min: 0.001, max: 8.0, step: 0.005, unit: "s", fmt: v => v.toFixed(3) + " s" },
  env_dec: { name: "Lautstärke-Decay", min: 0.01, max: 15.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },
  env_sus: { name: "Haltepegel Sustain", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },
  env_rel: { name: "Ausklingzeit Release", min: 0.01, max: 20.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },
  mod_env_dec: { name: "Oberton-Decay (Tine/Bite)", min: 0.01, max: 8.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },
  mod_env_atk: { name: "Oberton-Attack", min: 0.001, max: 5.0, step: 0.005, unit: "s", fmt: v => v.toFixed(3) + " s" },
  mod_env_sus: { name: "Oberton-Sustain", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },
  mod_env_rel: { name: "Oberton-Release", min: 0.01, max: 10.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },

  // Cluster 5: Filter, Raum & Key-Scaling
  flt_cutoff: { name: "Formant Cutoff f_flt", min: 20.0, max: 16000.0, step: 5.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" },
  flt_reso: { name: "Resonanz-Güte Q", min: 0.1, max: 18.0, step: 0.05, unit: "Q", fmt: v => v.toFixed(2) },
  key_scaling: { name: "Tonhöhen Key-Scaling", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },
  space_pan: { name: "3D Binaural Orbital Pan", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },
  flt_envAmt: { name: "Filter-Hüllkurvenhub", min: -8000.0, max: 8000.0, step: 10.0, unit: "Hz", fmt: v => (v > 0 ? "+" : "") + Math.round(v) + " Hz" },
  custom_math: { name: "Physik-Kernparameter", min: 0.0, max: 10.0, step: 0.01, unit: "Val", fmt: v => v.toFixed(2) },
  op_wave: { name: "Wellenform-Typ", min: 0, max: 4, step: 1, unit: "Wave", fmt: v => ["Sinus", "Halbwellen-TX", "Sägezahn", "Rechteck", "Dreieck"][Math.round(v)] || "Sinus" },
  
  // Legacy aliases
  ratio: { name: "Legacy Ratio", min: 0.05, max: 9.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  I0: { name: "Legacy I0", min: 0.0, max: 12.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  dI: { name: "Legacy dI", min: 0.0, max: 8.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  customParam: { name: "Legacy Custom", min: 0, max: 10, step: 0.01, unit: "Val", fmt: v => v.toFixed(2) },
  vibDepth: { name: "Vibrato-Tiefe Δf_vib", min: 0.0, max: 24.0, step: 0.1, unit: "Hz", fmt: v => v.toFixed(2) + " Hz" }
};

let ctx = null, masterGain, comp, dryGain, wetGain, conv, analyser, cosWave;
let stackMasterGain = null;
let timeData, freqData;
let lastFrameT = 0;

function createSynthInstance(def) {
  const oscs = {};
  const src = Object.assign({}, def.defaults || {}, def.params || {});
  
  const defParams = {
    // Topologie & Algorithmus (Plan 4)
    algo_type: def.algo_type ?? src.algo_type ?? 1,
    op_wave: src.op_wave ?? 0,
    key_scaling: src.key_scaling ?? 25.0,

    // Cluster 1: Ratios & Detune
    r1_ratio: src.r1_ratio ?? 1.0,
    r2_ratio: src.r2_ratio ?? src.ratio ?? 1.0,
    r3_ratio: src.r3_ratio ?? (src.r2_ratio ? src.r2_ratio * 2.0 : 2.0),
    r4_ratio: src.r4_ratio ?? 0.5,
    op_detune: src.op_detune ?? 0.0,
    op_spread: src.op_spread ?? 50.0,

    // Cluster 2: Modulation & Feedback
    mod_I0: src.mod_I0 ?? src.I0 ?? 2.5,
    mod_dI: src.mod_dI ?? src.dI ?? 1.2,
    mod_cross: src.mod_cross ?? 0.0,
    mod_fb: src.mod_fb ?? 0.0,
    mod_skew: src.mod_skew ?? 0.0,

    // Cluster 3: Wavefolder
    shape_fold: src.shape_fold ?? 0.0,
    shape_morph: src.shape_morph ?? 0.0,
    shape_bias: src.shape_bias ?? 0.0,
    shape_drive: src.shape_drive ?? 1.0,

    // Cluster 4: ADSR Envelopes (Amplitude & Modulator)
    env_atk: src.env_atk ?? src.atk ?? 0.02,
    env_dec: src.env_dec ?? 0.8,
    env_sus: src.env_sus ?? 70.0,
    env_rel: src.env_rel ?? src.rel ?? 1.5,
    mod_env_atk: src.mod_env_atk ?? 0.003,
    mod_env_dec: src.mod_env_dec ?? 0.4,
    mod_env_sus: src.mod_env_sus ?? 25.0,
    mod_env_rel: src.mod_env_rel ?? 0.5,

    // Cluster 5: Filter & Space
    flt_cutoff: src.flt_cutoff ?? 12000.0,
    flt_reso: src.flt_reso ?? 1.0,
    flt_envAmt: src.flt_envAmt ?? 0.0,
    space_pan: src.space_pan ?? 50.0,

    // Cluster 6: Custom & Aliases
    custom_math: def.customParam ? def.customParam.val : (src.custom_math ?? 1.0),
    ratio: src.r2_ratio ?? src.ratio ?? 1.0,
    I0: src.mod_I0 ?? src.I0 ?? 2.5,
    dI: src.mod_dI ?? src.dI ?? 1.2,
    atk: src.env_atk ?? src.atk ?? 0.02,
    rel: src.env_rel ?? src.rel ?? 1.5,
    vol: src.vol ?? 0.85,
    oct: src.oct ?? 0,
    latch: src.latch !== undefined ? src.latch : true,
    vibDepth: src.vibDepth ?? 4.5,
    lfo: src.lfo ?? 0.25
  };

  OSC_PARAM_KEYS.forEach(k => {
    const b = PARAM_BOUNDS[k] || { min: 0, max: 10 };
    let minV = b.min, maxV = b.max, speed = 25;

    if (k === "r1_ratio") { minV = 0.5; maxV = 3.0; speed = 15; }
    else if (k === "r2_ratio") { minV = Math.max(0.1, defParams.r2_ratio * 0.5); maxV = defParams.r2_ratio * 1.8; speed = 20; }
    else if (k === "r3_ratio") { minV = 0.5; maxV = 8.0; speed = 22; }
    else if (k === "r4_ratio") { minV = 0.25; maxV = 4.0; speed = 18; }
    else if (k === "op_detune") { minV = -15.0; maxV = 15.0; speed = 20; }
    else if (k === "op_spread") { minV = 20.0; maxV = 80.0; speed = 15; }
    else if (k === "mod_I0") { minV = Math.max(0, defParams.mod_I0 * 0.4); maxV = defParams.mod_I0 * 1.6; speed = 25; }
    else if (k === "mod_dI") { minV = 0.1; maxV = defParams.mod_dI * 1.8; speed = 30; }
    else if (k === "mod_cross") { minV = 0.0; maxV = 4.0; speed = 20; }
    else if (k === "mod_fb") { minV = 0.0; maxV = 2.5; speed = 18; }
    else if (k === "shape_fold") { minV = 0.0; maxV = 4.5; speed = 20; }
    else if (k === "shape_drive") { minV = 1.0; maxV = 3.5; speed = 22; }
    else if (k === "flt_cutoff") { minV = 400.0; maxV = 10000.0; speed = 15; }
    else if (k === "flt_reso") { minV = 0.5; maxV = 6.0; speed = 20; }
    else if (k === "space_pan") { minV = 10.0; maxV = 90.0; speed = 12; }
    else if (k === "custom_math" && def.customParam) { minV = def.customParam.min; maxV = def.customParam.max; speed = 30; }
    else if (k === "vibDepth") { minV = 0.5; maxV = 10.0; speed = 20; }

    oscs[k] = { enabled: false, min: minV, max: maxV, speed, phase: Math.random() * Math.PI * 2 };
  });

  const inst = {
    def,
    params: defParams,
    customVal: def.customParam ? def.customParam.val : 1.0,
    vibrato: {
      enabled: false,
      depth: 3.5,
      rate: 5.2,
      delay: 0.25,
      shape: "sine",
      humanize: 25
    },
    oscillators: oscs,
    voices: new Map(),
    bus: null,
    lfoOsc: null,
    lfoPhase: Math.random() * Math.PI * 2,
    primary: { f: 130.813, fm: 130.813 * defParams.r2_ratio }
  };

  if (ctx && stackMasterGain) {
    inst.bus = ctx.createGain();
    inst.bus.gain.value = inst.params.vol;
    inst.bus.connect(stackMasterGain);
  }

  return inst;
}

let synthInstances = SYNTH_DEFS.map(createSynthInstance);

const GLOBAL = { master: 0.65, wet: 0.5, oct: 0 };
const BASE_FREQ = 130.813;
const NOTES = ["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","H","C"];
const LETTERS = ["a","w","s","e","d","f","t","g","z","h","u","j","k"];
const BLACK_KEYS = [1, 3, 6, 8, 10];

/* ============================================================
   Web Audio Initialisierung
   ============================================================ */
function initAudio() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();

  cosWave = ctx.createPeriodicWave(new Float32Array([0, 1]), new Float32Array([0, 0]));

  masterGain = ctx.createGain();
  masterGain.gain.value = GLOBAL.master;

  comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -12; comp.knee.value = 20; comp.ratio.value = 4.5;
  comp.attack.value = 0.015; comp.release.value = 0.35;

  masterGain.connect(comp).connect(ctx.destination);

  dryGain = ctx.createGain(); dryGain.gain.value = 1 - GLOBAL.wet * 0.5;
  wetGain = ctx.createGain(); wetGain.gain.value = GLOBAL.wet;

  conv = ctx.createConvolver();
  conv.buffer = createReverbIR(5.5, 2.5);

  dryGain.connect(masterGain);
  conv.connect(wetGain).connect(masterGain);

  stackMasterGain = ctx.createGain();
  stackMasterGain.gain.value = 1.0;

  analyser = ctx.createAnalyser();
  analyser.fftSize = 8192; analyser.smoothingTimeConstant = 0.6;
  masterGain.connect(analyser);

  timeData = new Float32Array(analyser.fftSize);
  freqData = new Float32Array(analyser.frequencyBinCount);

  synthInstances.forEach((inst, idx) => {
    inst.bus = ctx.createGain();
    inst.bus.gain.value = inst.params.vol;
    inst.bus.connect(stackMasterGain);

    inst.lfoOsc = ctx.createOscillator();
    inst.lfoOsc.frequency.value = inst.params.lfo;
    inst.lfoOsc.start();
  });

  if (typeof initFxEngine === "function") {
    initFxEngine();
    if (typeof fxMasterIn !== "undefined" && fxMasterIn) {
      stackMasterGain.connect(fxMasterIn);
    } else {
      stackMasterGain.connect(dryGain);
      stackMasterGain.connect(conv);
    }
  } else {
    stackMasterGain.connect(dryGain);
    stackMasterGain.connect(conv);
  }
}

function createReverbIR(duration, decay) {
  const sampleRate = ctx ? ctx.sampleRate : 48000;
  const length = Math.max(1, Math.floor(sampleRate * duration));
  const impulse = new AudioBuffer({ length, numberOfChannels: 2, sampleRate });
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * decay);
    const noiseL = (Math.random() * 2 - 1);
    const noiseR = (Math.random() * 2 - 1);
    left[i] = noiseL * env;
    right[i] = noiseR * env;
  }
  return impulse;
}

function getFreq(sem, octOffset = 0) {
  const totalOct = octOffset + GLOBAL.oct;
  return BASE_FREQ * Math.pow(2, sem / 12 + totalOct);
}
