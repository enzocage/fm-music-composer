"use strict";

/* ============================================================
   10 HIGH-END FX MODULES DSP ENGINE (FX.MD)
   ============================================================ */

const FX_CONFIG = {
  shimmer: {
    id: "shimmer",
    name: "Spectral Shimmer Diffuser",
    icon: "🌌",
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

// Master FX DSP Chain Nodes
const fxNodes = {};

function initFxEngine() {
  if (!ctx) return;

  // 1. Shimmer Nodes
  const shimIn = ctx.createGain();
  const shimDelay = ctx.createDelay(1.0);
  shimDelay.delayTime.value = 0.085;
  const shimFilter = ctx.createBiquadFilter();
  shimFilter.type = "lowpass";
  shimFilter.frequency.value = 8000;
  const shimFeedback = ctx.createGain();
  shimFeedback.gain.value = 0.75;
  const shimDry = ctx.createGain();
  const shimWet = ctx.createGain();
  const shimOut = ctx.createGain();

  shimIn.connect(shimDry).connect(shimOut);
  shimIn.connect(shimDelay).connect(shimFilter).connect(shimFeedback).connect(shimDelay);
  shimFilter.connect(shimWet).connect(shimOut);

  fxNodes.shimmer = { in: shimIn, out: shimOut, delay: shimDelay, filter: shimFilter, fb: shimFeedback, dry: shimDry, wet: shimWet };

  // 2. Resonator Bank (4 Stufen Biquad)
  const resIn = ctx.createGain();
  const resOut = ctx.createGain();
  const resFilters = [];
  for (let k = 1; k <= 4; k++) {
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 260 * k;
    f.Q.value = 18;
    const g = ctx.createGain();
    g.gain.value = 0.35 / k;
    resIn.connect(f).connect(g).connect(resOut);
    resFilters.push({ filter: f, gain: g });
  }
  fxNodes.resonator = { in: resIn, out: resOut, filters: resFilters };

  // 3. Barberpole Phaser Nodes
  const barbIn = ctx.createGain();
  const barbOut = ctx.createGain();
  const barbAllpass = [];
  let prevNode = barbIn;
  for (let i = 0; i < 4; i++) {
    const ap = ctx.createBiquadFilter();
    ap.type = "allpass";
    ap.frequency.value = 800 + i * 400;
    ap.Q.value = 4.0;
    prevNode.connect(ap);
    prevNode = ap;
    barbAllpass.push(ap);
  }
  prevNode.connect(barbOut);
  fxNodes.barberpole = { in: barbIn, out: barbOut, allpass: barbAllpass };

  // 4. Tape Hysteresis / Saturator Nodes
  const tapeIn = ctx.createGain();
  const tapeDrive = ctx.createGain(); tapeDrive.gain.value = 2.8;
  const tapeShaper = ctx.createWaveShaper();
  const tapeFilter = ctx.createBiquadFilter(); tapeFilter.type = "lowpass"; tapeFilter.frequency.value = 9500;
  const tapeOut = ctx.createGain();

  // Jiles-Atherton Hysteresis curve
  const n_samples = 1024, curve = new Float32Array(n_samples);
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = Math.tanh(1.8 * x + 0.15 * x * x);
  }
  tapeShaper.curve = curve;
  tapeShaper.oversample = "4x";

  tapeIn.connect(tapeDrive).connect(tapeShaper).connect(tapeFilter).connect(tapeOut);
  fxNodes.tape = { in: tapeIn, out: tapeOut, drive: tapeDrive, shaper: tapeShaper, filter: tapeFilter };

  // 5. Waveguide String Resonator
  const wgIn = ctx.createGain();
  const wgDelay = ctx.createDelay(0.5); wgDelay.delayTime.value = 1 / 220;
  const wgFilter = ctx.createBiquadFilter(); wgFilter.type = "lowpass"; wgFilter.frequency.value = 3500;
  const wgFeedback = ctx.createGain(); wgFeedback.gain.value = 0.94;
  const wgOut = ctx.createGain();

  wgIn.connect(wgDelay).connect(wgFilter).connect(wgFeedback).connect(wgDelay);
  wgFilter.connect(wgOut);
  fxNodes.waveguide = { in: wgIn, out: wgOut, delay: wgDelay, filter: wgFilter, fb: wgFeedback };

  // 6. Granular Delay Cloud
  const granIn = ctx.createGain();
  const granDelay = ctx.createDelay(1.0); granDelay.delayTime.value = 0.065;
  const granFeedback = ctx.createGain(); granFeedback.gain.value = 0.55;
  const granOut = ctx.createGain();
  granIn.connect(granDelay).connect(granFeedback).connect(granDelay);
  granDelay.connect(granOut);
  fxNodes.granular = { in: granIn, out: granOut, delay: granDelay, fb: granFeedback };

  // 7. Asymmetric Diode Wavefolder
  const wfIn = ctx.createGain();
  const wfDrive = ctx.createGain(); wfDrive.gain.value = 2.2;
  const wfShaper = ctx.createWaveShaper();
  const wfOut = ctx.createGain();
  const wfCurve = new Float32Array(n_samples);
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    wfCurve[i] = Math.sin(3.8 * x + 0.25) + 0.3 * Math.sin(11.4 * x);
  }
  wfShaper.curve = wfCurve;
  wfShaper.oversample = "4x";
  wfIn.connect(wfDrive).connect(wfShaper).connect(wfOut);
  fxNodes.wavefolder = { in: wfIn, out: wfOut, drive: wfDrive, shaper: wfShaper };

  // 8. Multi-Band Dynamic Sculptor
  const scIn = ctx.createGain();
  const scComp = ctx.createDynamicsCompressor();
  scComp.threshold.value = -18; scComp.ratio.value = 4.0;
  const scOut = ctx.createGain();
  scIn.connect(scComp).connect(scOut);
  fxNodes.sculptor = { in: scIn, out: scOut, comp: scComp };

  // 9. 3D Spatial Orbit Panner
  const orbIn = ctx.createGain();
  const orbPanner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  const orbOut = ctx.createGain();
  if (orbPanner) {
    orbIn.connect(orbPanner).connect(orbOut);
  } else {
    orbIn.connect(orbOut);
  }
  fxNodes.orbit3d = { in: orbIn, out: orbOut, panner: orbPanner };

  // 10. Probabilistic Glitch Shuffler
  const glIn = ctx.createGain();
  const glDelay = ctx.createDelay(1.0); glDelay.delayTime.value = 0.125;
  const glOut = ctx.createGain();
  glIn.connect(glDelay).connect(glOut);
  fxNodes.glitch = { in: glIn, out: glOut, delay: glDelay };
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
    if (paramKey === "barber_rate") {
      nodes.allpass.forEach((ap, idx) => {
        ap.frequency.setTargetAtTime(Math.max(100, Math.min(14000, 600 + idx * 500 + val * 200)), now, 0.05);
      });
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
  else if (fxId === "orbit3d" && nodes.panner) {
    if (paramKey === "orbit_speed") {
      const panVal = Math.sin(now * val * Math.PI * 2);
      nodes.panner.pan.setTargetAtTime(panVal, now, 0.05);
    }
  }
}
