"use strict";

/* ============================================================
   Zustand & Datenstrukturen: 24-Parameter 6-Operator FM Matrix (PLAN 3)
   ============================================================ */
let activeSynthIdx = 0;
const lorenzState = { x: 0.1, y: 0, z: 0 };

// 24 Canonical Parameter Keys across 6 Clusters
const OSC_PARAM_KEYS = [
  // Cluster A: Operatoren & Frequenzen (6)
  "r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread",
  // Cluster B: Modulation & Feedback (5)
  "mod_I0", "mod_dI", "mod_cross", "mod_fb", "mod_skew",
  // Cluster C: Waveshaping & Sättigung (4)
  "shape_fold", "shape_morph", "shape_bias", "shape_drive",
  // Cluster D: Multi-Stage Hüllkurven (4)
  "env_atk", "env_dec", "env_sus", "env_rel",
  // Cluster E: Formant-Filter & 3D Raum (4)
  "flt_cutoff", "flt_reso", "flt_envAmt", "space_pan",
  // Cluster F: Physikalischer Kernparameter (1)
  "custom_math",
  // Legacy / Vibrato
  "vibDepth"
];

const SYNTH_PARAM_CLUSTERS = {
  operators: {
    id: "operators",
    title: "OPERATOREN & DETUNE",
    icon: "🎛️",
    keys: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread"]
  },
  modulation: {
    id: "modulation",
    title: "MODULATION & FEEDBACK",
    icon: "🌊",
    keys: ["mod_I0", "mod_dI", "mod_cross", "mod_fb", "mod_skew"]
  },
  waveshaping: {
    id: "waveshaping",
    title: "WAVESHAPER & SÄTTIGUNG",
    icon: "📐",
    keys: ["shape_fold", "shape_morph", "shape_bias", "shape_drive"]
  },
  envelopes_filter: {
    id: "envelopes_filter",
    title: "FILTER & HÜLLKURVEN",
    icon: "🎚️",
    keys: ["flt_cutoff", "flt_reso", "flt_envAmt", "space_pan", "env_atk", "env_dec", "env_sus", "env_rel"]
  },
  custom: {
    id: "custom",
    title: "MATHEMATISCHER KERN",
    icon: "⚛️",
    keys: ["custom_math"]
  }
};

let activeParamCluster = "operators"; // 'operators' | 'modulation' | 'waveshaping' | 'envelopes_filter' | 'all'

const PARAM_BOUNDS = {
  // Cluster A
  r1_ratio: { name: "Carrier Ratio r1", min: 0.25, max: 16.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r2_ratio: { name: "Modulator Ratio r2", min: 0.05, max: 24.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r3_ratio: { name: "Harmonic 3 Ratio r3", min: 0.125, max: 32.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  r4_ratio: { name: "Sub / Air Ratio r4", min: 0.1, max: 8.0, step: 0.005, unit: "x", fmt: v => v.toFixed(3) },
  op_detune: { name: "Fein-Detune Δϕ", min: -50.0, max: 50.0, step: 0.1, unit: "¢", fmt: v => (v > 0 ? "+" : "") + v.toFixed(1) + " ¢" },
  op_spread: { name: "Stereo Unison Spread", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },

  // Cluster B
  mod_I0: { name: "Haupt-Index I0", min: 0.0, max: 16.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_dI: { name: "Dynamik-Index ΔI", min: 0.0, max: 12.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_cross: { name: "Kreuzmod-Index I3→2", min: 0.0, max: 10.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_fb: { name: "Operator-Feedback β_fb", min: 0.0, max: 8.0, step: 0.01, unit: "Idx", fmt: v => v.toFixed(2) },
  mod_skew: { name: "Quadratur-Phase θ", min: 0.0, max: 360.0, step: 1.0, unit: "°", fmt: v => Math.round(v) + " °" },

  // Cluster C
  shape_fold: { name: "Chebyshev Wavefolder γ", min: 0.0, max: 10.0, step: 0.01, unit: "Fold", fmt: v => v.toFixed(2) },
  shape_morph: { name: "Wellenform-Morphing", min: 0.0, max: 1.0, step: 0.01, unit: "Morph", fmt: v => Math.round(v * 100) + " %" },
  shape_bias: { name: "DC-Asymmetrie Offset", min: -1.0, max: 1.0, step: 0.01, unit: "Bias", fmt: v => (v > 0 ? "+" : "") + v.toFixed(2) },
  shape_drive: { name: "Tape Crunch & Drive", min: 1.0, max: 6.0, step: 0.05, unit: "Drv", fmt: v => v.toFixed(2) + " x" },

  // Cluster D
  env_atk: { name: "Einschwingzeit Attack", min: 0.001, max: 8.0, step: 0.005, unit: "s", fmt: v => v.toFixed(3) + " s" },
  env_dec: { name: "Abklingzeit Decay", min: 0.01, max: 15.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },
  env_sus: { name: "Haltepegel Sustain", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },
  env_rel: { name: "Ausklingzeit Release", min: 0.01, max: 20.0, step: 0.01, unit: "s", fmt: v => v.toFixed(2) + " s" },

  // Cluster E
  flt_cutoff: { name: "Formant Cutoff f_flt", min: 20.0, max: 16000.0, step: 5.0, unit: "Hz", fmt: v => Math.round(v) + " Hz" },
  flt_reso: { name: "Resonanz-Güte Q", min: 0.1, max: 18.0, step: 0.05, unit: "Q", fmt: v => v.toFixed(2) },
  flt_envAmt: { name: "Filter-Hüllkurvenhub", min: -8000.0, max: 8000.0, step: 10.0, unit: "Hz", fmt: v => (v > 0 ? "+" : "") + Math.round(v) + " Hz" },
  space_pan: { name: "3D Binaural Orbital Pan", min: 0.0, max: 100.0, step: 1.0, unit: "%", fmt: v => Math.round(v) + " %" },

  // Cluster F
  custom_math: { name: "Physik-Kernparameter", min: 0.0, max: 10.0, step: 0.01, unit: "Val", fmt: v => v.toFixed(2) },
  
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
  
  const defParams = {
    // Cluster A
    r1_ratio: def.defaults?.r1_ratio ?? 1.0,
    r2_ratio: def.defaults?.r2_ratio ?? def.defaults?.ratio ?? 1.0,
    r3_ratio: def.defaults?.r3_ratio ?? ((def.defaults?.r2_ratio || def.defaults?.ratio) ? (def.defaults.r2_ratio || def.defaults.ratio) * 2.0 : 2.0),
    r4_ratio: def.defaults?.r4_ratio ?? 0.5,
    op_detune: def.defaults?.op_detune ?? 0.0,
    op_spread: def.defaults?.op_spread ?? 50.0,

    // Cluster B
    mod_I0: def.defaults?.mod_I0 ?? def.defaults?.I0 ?? 2.5,
    mod_dI: def.defaults?.mod_dI ?? def.defaults?.dI ?? 1.2,
    mod_cross: def.defaults?.mod_cross ?? 0.0,
    mod_fb: def.defaults?.mod_fb ?? 0.0,
    mod_skew: def.defaults?.mod_skew ?? 0.0,

    // Cluster C
    shape_fold: def.defaults?.shape_fold ?? 0.0,
    shape_morph: def.defaults?.shape_morph ?? 0.0,
    shape_bias: def.defaults?.shape_bias ?? 0.0,
    shape_drive: def.defaults?.shape_drive ?? 1.0,

    // Cluster D
    env_atk: def.defaults?.env_atk ?? def.defaults?.atk ?? 0.02,
    env_dec: def.defaults?.env_dec ?? 0.8,
    env_sus: def.defaults?.env_sus ?? 70.0,
    env_rel: def.defaults?.env_rel ?? def.defaults?.rel ?? 1.5,

    // Cluster E
    flt_cutoff: def.defaults?.flt_cutoff ?? 12000.0,
    flt_reso: def.defaults?.flt_reso ?? 1.0,
    flt_envAmt: def.defaults?.flt_envAmt ?? 0.0,
    space_pan: def.defaults?.space_pan ?? 50.0,

    // Cluster F
    custom_math: def.customParam ? def.customParam.val : (def.defaults?.custom_math ?? 1.0),

    // Legacy Aliases
    ratio: def.defaults?.r2_ratio ?? def.defaults?.ratio ?? 1.0,
    I0: def.defaults?.mod_I0 ?? def.defaults?.I0 ?? 2.5,
    dI: def.defaults?.mod_dI ?? def.defaults?.dI ?? 1.2,
    atk: def.defaults?.env_atk ?? def.defaults?.atk ?? 0.02,
    rel: def.defaults?.env_rel ?? def.defaults?.rel ?? 1.5,
    vol: def.defaults?.vol ?? 0.85,
    oct: 0,
    latch: false,
    vibDepth: def.defaults?.vibDepth ?? 4.5,
    lfo: def.defaults?.lfo ?? 0.25
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
      enabled: true,
      depth: 4.5,
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
  stackMasterGain.connect(dryGain);
  stackMasterGain.connect(conv);

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

  if (typeof initFxEngine === "function") initFxEngine();
}

function createReverbIR(duration, decay) {
  const sampleRate = 48000;
  const length = sampleRate * duration;
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
