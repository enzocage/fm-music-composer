"use strict";

/* ============================================================
   Zustand & Datenstrukturen
   ============================================================ */
let activeSynthIdx = 0;
const lorenzState = { x: 0.1, y: 0, z: 0 };
const OSC_PARAM_KEYS = ["ratio", "I0", "dI", "lfo", "customParam", "vibDepth"];

const PARAM_BOUNDS = {
  ratio: { min: 0.05, max: 9.0, step: 0.005 },
  I0: { min: 0.0, max: 12.0, step: 0.01 },
  dI: { min: 0.0, max: 8.0, step: 0.01 },
  lfo: { min: 0.005, max: 16.0, step: 0.005 },
  customParam: { min: 0, max: 10, step: 0.01 },
  vibDepth: { min: 0.0, max: 24.0, step: 0.1 }
};

const synthInstances = SYNTH_DEFS.map(def => {
  const oscs = {};
  OSC_PARAM_KEYS.forEach(k => {
    let minV = 0.5, maxV = 2.5, speed = 25;
    if (k === "ratio") { minV = Math.max(0.1, def.defaults.ratio * 0.5); maxV = def.defaults.ratio * 1.8; speed = 20; }
    if (k === "I0") { minV = Math.max(0, def.defaults.I0 * 0.4); maxV = def.defaults.I0 * 1.6; speed = 25; }
    if (k === "dI") { minV = 0.2; maxV = def.defaults.dI * 1.5; speed = 30; }
    if (k === "lfo") { minV = 0.01; maxV = Math.max(0.5, def.defaults.lfo * 3); speed = 15; }
    if (k === "customParam") { minV = def.customParam.min; maxV = def.customParam.max; speed = 30; }
    if (k === "vibDepth") { minV = 0.5; maxV = 10.0; speed = 20; }
    oscs[k] = { enabled: false, min: minV, max: maxV, speed, phase: Math.random() * Math.PI * 2 };
  });

  const defParams = { ...def.defaults };
  if (defParams.vibDepth === undefined) defParams.vibDepth = 4.5;

  return {
    def,
    params: defParams,
    customVal: def.customParam.val,
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
    primary: { f: 130.813, fm: 130.813 * def.defaults.ratio }
  };
});

const GLOBAL = { master: 0.65, wet: 0.5, oct: 0 };
const BASE_FREQ = 130.813;
const NOTES = ["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","H","C"];
const LETTERS = ["a","w","s","e","d","f","t","g","z","h","u","j","k"];
const BLACK_KEYS = [1, 3, 6, 8, 10];

let ctx = null, masterGain, comp, dryGain, wetGain, conv, analyser, cosWave;
let stackMasterGain = null;
let timeData, freqData;
let lastFrameT = 0;

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
  analyser.minDecibels = -105; analyser.maxDecibels = -5;

  masterGain.connect(analyser);

  timeData = new Float32Array(analyser.fftSize);
  freqData = new Float32Array(analyser.frequencyBinCount);

  synthInstances.forEach(inst => {
    inst.bus = ctx.createGain();
    inst.bus.gain.value = inst.params.vol;
    inst.bus.connect(dryGain);
    inst.bus.connect(conv);

    inst.lfoOsc = ctx.createOscillator();
    inst.lfoOsc.frequency.value = inst.params.lfo;
    inst.lfoOsc.start();
  });

  initLoopAudio();
  lastFrameT = ctx.currentTime;
}

function createReverbIR(durationSec, decayFactor) {
  const len = Math.floor(ctx.sampleRate * durationSec);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / len;
      const white = Math.random() * 2 - 1;
      lp = lp * 0.72 + white * 0.28;
      const pre = i < ctx.sampleRate * 0.025 ? i / (ctx.sampleRate * 0.025) : 1;
      data[i] = lp * Math.pow(1 - t, decayFactor) * pre;
    }
  }
  return buf;
}

const getFreq = (sem, synthOct = 0) => BASE_FREQ * Math.pow(2, sem / 12 + synthOct + GLOBAL.oct);
