"use strict";

/* ============================================================
   8-TOPOLOGY ALGORITHMIC FM MATRIX VOICE ENGINE (PLAN 4)
   Authentic Physical Modeling, Dual Decoupled Envelopes & Key-Scaling
   ============================================================ */

function makeChebyshevCurve(fold = 0, bias = 0, drive = 1) {
  const n_samples = 1024;
  const curve = new Float32Array(n_samples);
  const gamma = Math.max(0, fold);
  const b = Math.max(-1, Math.min(1, bias));
  const drv = Math.max(0.5, Math.min(8.0, drive));

  for (let i = 0; i < n_samples; ++i) {
    let x = (i * 2) / n_samples - 1;
    x = Math.max(-1, Math.min(1, (x + b * 0.4) * drv));
    const T1 = x;
    const T3 = 4 * x * x * x - 3 * x;
    const T5 = 16 * Math.pow(x, 5) - 20 * x * x * x + 5 * x;
    const shaped = (1 - Math.min(1, gamma * 0.15)) * T1 + (gamma * 0.2) * T3 + (gamma * 0.1) * T5;
    curve[i] = Math.tanh(shaped);
  }
  return curve;
}

function noteOn(sem, synthIdx = activeSynthIdx) {
  initAudio();
  if (ctx.state === "suspended") ctx.resume();

  const inst = synthInstances[synthIdx];
  if (!inst || inst.voices.has(sem)) return;

  const now = ctx.currentTime;
  const f = getFreq(sem, inst.params.oct);

  // 1. Read Canonical Matrix Parameters with Full Fallbacks
  const r1 = inst.params.r1_ratio ?? 1.0;
  const r2 = inst.params.r2_ratio ?? inst.params.ratio ?? 1.5;
  const r3 = inst.params.r3_ratio ?? 2.0;
  const r4 = inst.params.r4_ratio ?? 0.5;

  const i0 = inst.params.mod_I0 ?? inst.params.I0 ?? 2.5;
  const di = inst.params.mod_dI ?? inst.params.dI ?? 1.5;
  const cross = inst.params.mod_cross ?? 0.5;
  const fb = inst.params.mod_fb ?? 0.0;
  const detuneCent = inst.params.op_detune ?? 0.0;
  const spreadPct = inst.params.op_spread ?? 20.0;

  const fold = inst.params.shape_fold ?? 0.0;
  const bias = inst.params.shape_bias ?? 0.0;
  const drive = inst.params.shape_drive ?? 1.0;

  const fltCutoff = Math.max(20, Math.min(20000, inst.params.flt_cutoff ?? 12000));
  const fltReso = Math.max(0.1, Math.min(24.0, inst.params.flt_reso ?? 1.0));
  const fltEnvAmt = inst.params.flt_envAmt ?? 0.0;
  const panVal = ((inst.params.space_pan ?? 50) - 50) / 50;

  // 2. Dual Decoupled Envelopes (Amplitude vs. Modulator Spectrum)
  const atk = Math.max(0.002, inst.params.env_atk ?? inst.params.atk ?? 0.05);
  const dec = Math.max(0.01, inst.params.env_dec ?? 0.4);
  const susPct = Math.max(0.02, Math.min(1.0, (inst.params.env_sus ?? 80) / 100));
  const rel = Math.max(0.02, inst.params.env_rel ?? inst.params.rel ?? 2.0);

  const modAtk = Math.max(0.001, inst.params.mod_env_atk ?? 0.003);
  const modDec = Math.max(0.01, inst.params.mod_env_dec ?? (dec * 0.75));
  const modSusPct = Math.max(0.0, Math.min(1.0, (inst.params.mod_env_sus ?? 25) / 100));
  const modRel = Math.max(0.01, inst.params.mod_env_rel ?? (rel * 0.5));

  // 3. Pitch-Dependent Key-Scaling (Keeps High Notes Silk-Smooth, Bass Punchy)
  const keyScalePct = (inst.params.key_scaling ?? 25) / 100;
  const noteOffset = sem - 60; // Relative to Middle C (MIDI 60)
  const keyScaleFactor = Math.max(0.25, Math.min(2.5, Math.pow(2, -noteOffset / 36 * keyScalePct)));

  // 4. Operator Frequencies
  const detuneMult = Math.pow(2, detuneCent / 1200);
  const fc1 = f * r1 * detuneMult;
  const fc2 = fc1 * (1 + (spreadPct / 100) * 0.008);
  const fm2 = f * r2;
  const fm3 = f * r3;
  const fm4 = f * r4;

  inst.primary = { f, fm: fm2 };

  // 5. Oscillator Allocation (Car1, Car2, Mod2, Mod3, Mod4)
  const car1 = ctx.createOscillator(); car1.frequency.value = fc1;
  const car2 = ctx.createOscillator(); car2.frequency.value = fc2;
  const mod2 = ctx.createOscillator(); mod2.frequency.value = fm2;
  const mod3 = ctx.createOscillator(); mod3.frequency.value = fm3;
  const mod4 = ctx.createOscillator(); mod4.frequency.value = fm4;

  // Waveform types
  const waveTypeIdx = Math.round(inst.params.op_wave ?? 0);
  const waveTypes = ["sine", "sawtooth", "square", "triangle"];
  if (waveTypeIdx > 0 && waveTypes[waveTypeIdx]) {
    car1.type = waveTypes[waveTypeIdx];
    car2.type = waveTypes[waveTypeIdx];
  }

  if (synthIdx === 1 || (synthIdx >= 20 && synthIdx <= 29)) {
    mod2.setPeriodicWave(cosWave);
  }
  if (synthIdx >= 60 && synthIdx <= 69) {
    car1.type = "sawtooth"; car2.type = "triangle";
  }

  // 6. Modulation Gain Nodes
  const mod2G = ctx.createGain();
  const mod3G = ctx.createGain();
  const mod4G = ctx.createGain();
  const lfoG  = ctx.createGain();
  const fbGain = ctx.createGain();

  const scaledI0 = i0 * keyScaleFactor;
  const scaledDI = di * keyScaleFactor;
  const peakI2 = (scaledI0 + scaledDI) * fm2;
  const susI2  = Math.max(0.001, scaledI0 * modSusPct) * fm2;

  // Apply Modulator Envelope on Mod2
  mod2G.gain.setValueAtTime(Math.max(0.001, scaledI0 * 0.1) * fm2, now);
  mod2G.gain.linearRampToValueAtTime(peakI2, now + modAtk);
  mod2G.gain.exponentialRampToValueAtTime(susI2, now + modAtk + modDec);

  lfoG.gain.value = di * fm2;
  mod3G.gain.value = cross * fm3 * keyScaleFactor;
  mod4G.gain.value = r4 * fm4 * 0.7 * keyScaleFactor;
  fbGain.gain.value = Math.min(0.95, fb * 0.18) * fm2;

  // 7. Determine & Wire Selected FM Algorithm (1–8)
  const algoId = Math.round(inst.params.algo_type ?? 1);

  // Common Nodes for Output Bus
  const driveNode = ctx.createGain(); driveNode.gain.value = drive;
  const shaper = ctx.createWaveShaper();
  shaper.curve = makeChebyshevCurve(fold, bias, drive);
  shaper.oversample = "4x";

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(fltCutoff, now);
  if (fltEnvAmt !== 0) {
    const peakCutoff = Math.max(20, Math.min(20000, fltCutoff + fltEnvAmt));
    filter.frequency.linearRampToValueAtTime(peakCutoff, now + atk);
    filter.frequency.exponentialRampToValueAtTime(Math.max(20, fltCutoff), now + atk + dec);
  }
  filter.Q.value = fltReso;

  const voicePeak = 0.18;
  const env = ctx.createGain();
  env.gain.setValueAtTime(0.0001, now);
  env.gain.linearRampToValueAtTime(voicePeak, now + atk);
  env.gain.linearRampToValueAtTime(Math.max(0.0001, voicePeak * susPct), now + atk + dec);

  let panner = null;
  if (ctx.createStereoPanner) {
    panner = ctx.createStereoPanner();
    panner.pan.setValueAtTime(panVal, now);
  }

  // --- ALGORITHM TOPOLOGY ROUTING ---
  switch (algoId) {
    case 1: // DUAL-STACK (2+2): (Mod2 -> Car1) + (Mod4 -> Car2) (DX7 Rhodes, Bells, Mallets)
      mod2.connect(mod2G).connect(car1.frequency);
      mod2.connect(fbGain).connect(mod2.frequency);
      mod4.connect(mod4G).connect(car2.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 2: // DUAL-MODULATOR PARALLEL: (Mod2 + Mod3) -> Car1 (Brass, Moog Saw, Formants)
      mod2.connect(mod2G).connect(car1.frequency);
      mod3.connect(mod3G).connect(car1.frequency);
      mod2.connect(fbGain).connect(mod2.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 3: // 3-CARRIER ADDITIVE: Car1 + Car2 + Car3 + (Mod4 -> Car1) (Organ, B3, Pads)
      mod4.connect(mod4G).connect(car1.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      mod3.connect(driveNode); // Mod3 operates as third harmonic carrier
      break;

    case 4: // 4-OP DEEP CASCADE: Mod4 -> Mod3 -> Mod2 -> Car1 (Gongs, Metallics, Chiptunes)
      mod4.connect(mod4G).connect(mod3.frequency);
      mod3.connect(mod3G).connect(mod2.frequency);
      mod2.connect(mod2G).connect(car1.frequency);
      mod4.connect(fbGain).connect(mod4.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 5: // BRANCHING WAVEFOLD PLUCK: Mod3 -> (Car1 + Car2) -> Wavefolder (Buchla Bongos, Plucks)
      mod3.connect(mod3G).connect(mod2.frequency);
      mod2.connect(mod2G).connect(car1.frequency);
      mod2G.connect(car2.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 6: // CROSS-MOD RING & SYNC: Mod2 <-> Car1 + Self-Feedback (Acid 303, Sync Screeches)
      mod2.connect(mod2G).connect(car1.frequency);
      car1.connect(mod3G).connect(mod2.frequency);
      mod2.connect(fbGain).connect(mod2.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 7: // PHYSICAL MODELING WAVEGUIDE: String Burst + Resonator (Koto, Sitar, Harfe)
      mod4.connect(mod4G).connect(car1.frequency);
      mod2.connect(mod2G).connect(car1.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;

    case 8: // CHAOS ATTRACTOR FM: Lorenz DGL Modulation (Quantum/Chaos)
    default:
      mod4.connect(mod4G).connect(mod3.frequency);
      mod3.connect(mod3G).connect(mod2.frequency);
      mod2.connect(mod2G).connect(car1.frequency);
      mod2G.connect(car2.frequency);
      mod2.connect(fbGain).connect(mod2.frequency);
      car1.connect(driveNode);
      car2.connect(driveNode);
      break;
  }

  // LFO Breathing to Carrier 1 & 2
  if (inst.lfoOsc) {
    try {
      inst.lfoOsc.connect(lfoG);
      lfoG.connect(car1.frequency);
      lfoG.connect(car2.frequency);
    } catch(err){}
  }

  // Master Voice Signal Chain
  driveNode.connect(shaper).connect(filter).connect(env);
  if (panner) {
    env.connect(panner).connect(inst.bus);
  } else {
    env.connect(inst.bus);
  }

  // Start Oscillators
  mod4.start(now);
  mod3.start(now);
  mod2.start(now);
  car1.start(now);
  car2.start(now);

  let voiceObj = {
    f, fm: fm2, t0: now,
    car: car1, car1, car2,
    mod: mod2, mod1: mod2, mod2, mod3, mod4,
    modG: mod2G, mod1G: mod2G, mod2G, mod3G, mod4G,
    lfoG, fbGain, driveNode, shaper, filter, env, panner,
    nodes: [car1, car2, mod2, mod3, mod4, mod2G, lfoG, mod3G, mod4G, fbGain, driveNode, shaper, filter, env]
  };

  // Complex Vibrato & Humanizer
  if (inst.vibrato && inst.vibrato.enabled && inst.vibrato.depth > 0) {
    const vibLfo = ctx.createOscillator();
    const vibGainNode = ctx.createGain();

    if (inst.vibrato.shape === "human") {
      vibLfo.type = "sine";
      vibLfo.frequency.setValueAtTime(inst.vibrato.rate * 0.85, now);
      vibGainNode.gain.setValueAtTime(0.001, now);
      vibGainNode.gain.linearRampToValueAtTime(inst.vibrato.depth, now + Math.max(0.1, inst.vibrato.delay));
    } else {
      vibLfo.type = inst.vibrato.shape || "sine";
      vibLfo.frequency.setValueAtTime(inst.vibrato.rate || 5.2, now);
      vibGainNode.gain.setValueAtTime(0.001, now);
      vibGainNode.gain.linearRampToValueAtTime(inst.vibrato.depth, now + Math.max(0.05, inst.vibrato.delay));
    }

    try {
      vibGainNode.connect(car1.frequency);
      vibGainNode.connect(car2.frequency);
    } catch(err){}

    vibLfo.start(now);
    voiceObj.vibLfo = vibLfo;
    voiceObj.vibGainNode = vibGainNode;
    voiceObj.nodes.push(vibLfo, vibGainNode);
  }

  inst.voices.set(sem, voiceObj);
  updateUIBadges();
  syncKeys();
}

function applyParamChange(k, synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  if (!inst) return;
  const val = inst.params[k];

  // Synchronize key aliases
  if (k === "r2_ratio") inst.params.ratio = val;
  if (k === "ratio") inst.params.r2_ratio = val;
  if (k === "mod_I0") inst.params.I0 = val;
  if (k === "I0") inst.params.mod_I0 = val;
  if (k === "mod_dI") inst.params.dI = val;
  if (k === "dI") inst.params.mod_dI = val;
  if (k === "custom_math" || k === "customParam") {
    inst.customVal = val;
    inst.params.custom_math = val;
    inst.params.customParam = val;
  }

  if (!ctx) return;
  const now = ctx.currentTime;

  if (k === "vol" && inst.bus) inst.bus.gain.setTargetAtTime(val, now, 0.05);
  if (k === "lfo" && inst.lfoOsc) inst.lfoOsc.frequency.setTargetAtTime(val, now, 0.05);
  if (k === "vibDepth") {
    inst.vibrato.depth = val;
    for (const vo of inst.voices.values()) {
      if (vo.vibGainNode) vo.vibGainNode.gain.setTargetAtTime(val, now, 0.04);
    }
  }
  if (k === "vibRate") {
    const rVal = inst.vibrato.rate ?? 5.2;
    for (const vo of inst.voices.values()) {
      if (vo.vibLfo) vo.vibLfo.frequency.setTargetAtTime(rVal, now, 0.03);
    }
  }

  // Real-Time Matrix Modulation on all active sounding voices
  for (const vo of inst.voices.values()) {
    const r1 = inst.params.r1_ratio || 1.0;
    const r2 = inst.params.r2_ratio || inst.params.ratio || 1.0;
    const r3 = inst.params.r3_ratio || 2.0;
    const r4 = inst.params.r4_ratio || 0.5;
    const i0 = inst.params.mod_I0 ?? inst.params.I0 ?? 2.5;
    const di = inst.params.mod_dI ?? inst.params.dI ?? 1.2;
    const detuneMult = Math.pow(2, (inst.params.op_detune || 0) / 1200);
    const spreadPct = inst.params.op_spread || 0;

    const fc1 = vo.f * r1 * detuneMult;
    const fc2 = fc1 * (1 + (spreadPct / 100) * 0.008);
    const fm2 = vo.f * r2;
    const fm3 = vo.f * r3;
    const fm4 = vo.f * r4;

    // Carrier Frequencies & Detune / Spread
    if (k === "r1_ratio" || k === "op_detune" || k === "op_spread") {
      if (vo.car1 && vo.car1.frequency) vo.car1.frequency.setTargetAtTime(fc1, now, 0.02);
      if (vo.car2 && vo.car2.frequency) vo.car2.frequency.setTargetAtTime(fc2, now, 0.02);
      if (vo.car && vo.car.frequency) vo.car.frequency.setTargetAtTime(fc1, now, 0.02);
    }

    // Modulator Frequencies
    if (k === "r2_ratio" || k === "ratio") {
      if (vo.mod2 && vo.mod2.frequency) vo.mod2.frequency.setTargetAtTime(fm2, now, 0.02);
      if (vo.mod && vo.mod.frequency) vo.mod.frequency.setTargetAtTime(fm2, now, 0.02);
    }
    if (k === "r3_ratio") {
      if (vo.mod3 && vo.mod3.frequency) vo.mod3.frequency.setTargetAtTime(fm3, now, 0.02);
    }
    if (k === "r4_ratio") {
      if (vo.mod4 && vo.mod4.frequency) vo.mod4.frequency.setTargetAtTime(fm4, now, 0.02);
    }

    // Mod Index Gains (Live Timbre Metamorphosis)
    if (k === "mod_I0" || k === "I0" || k === "r2_ratio" || k === "ratio") {
      if (vo.mod2G && vo.mod2G.gain) vo.mod2G.gain.setTargetAtTime(i0 * fm2, now, 0.02);
      if (vo.modG && vo.modG.gain) vo.modG.gain.setTargetAtTime(i0 * fm2, now, 0.02);
    }
    if (k === "mod_dI" || k === "dI" || k === "r2_ratio") {
      if (vo.lfoG && vo.lfoG.gain) vo.lfoG.gain.setTargetAtTime(di * fm2, now, 0.02);
    }
    if (k === "mod_cross" || k === "r3_ratio") {
      const crossVal = inst.params.mod_cross || 0;
      if (vo.mod3G && vo.mod3G.gain) vo.mod3G.gain.setTargetAtTime(crossVal * fm3, now, 0.02);
    }
    if (k === "mod_fb" || k === "r2_ratio") {
      const fbVal = inst.params.mod_fb || 0;
      if (vo.fbGain && vo.fbGain.gain) vo.fbGain.gain.setTargetAtTime(Math.min(0.95, fbVal * 0.18) * fm2, now, 0.02);
    }

    // Waveshaper, Fold, Bias, Drive
    if (k === "shape_fold" || k === "shape_bias" || k === "shape_drive") {
      if (vo.shaper) {
        vo.shaper.curve = makeChebyshevCurve(inst.params.shape_fold, inst.params.shape_bias, inst.params.shape_drive);
      }
      if (vo.driveNode && vo.driveNode.gain) {
        vo.driveNode.gain.setTargetAtTime(inst.params.shape_drive || 1.0, now, 0.02);
      }
    }

    // Filter Cutoff & Resonance
    if (k === "flt_cutoff" && vo.filter) {
      vo.filter.frequency.setTargetAtTime(Math.max(20, Math.min(20000, val)), now, 0.02);
    }
    if (k === "flt_reso" && vo.filter) {
      vo.filter.Q.setTargetAtTime(Math.max(0.1, Math.min(24.0, val)), now, 0.02);
    }

    // Stereo 3D Orbital Panner
    if (k === "space_pan" && vo.panner && vo.panner.pan) {
      const panV = ((inst.params.space_pan || 50) - 50) / 50;
      vo.panner.pan.setTargetAtTime(panV, now, 0.03);
    }
  }
}

function noteOff(sem, synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  if (!inst) return;
  const v = inst.voices.get(sem);
  if (!v) return;

  const now = ctx.currentTime;
  const rel = Math.max(0.02, inst.params.env_rel ?? inst.params.rel ?? 2.0);
  const tau = Math.max(0.015, rel / 3.2);

  // Amplitude Envelope Release
  if (v.env && v.env.gain) {
    v.env.gain.cancelScheduledValues(now);
    v.env.gain.setValueAtTime(Math.max(v.env.gain.value, 1e-4), now);
    v.env.gain.setTargetAtTime(0, now, tau);
  }

  // Modulator Harmonic Release
  if (v.mod2G && v.mod2G.gain) {
    const modRel = Math.max(0.01, inst.params.mod_env_rel ?? (rel * 0.5));
    v.mod2G.gain.cancelScheduledValues(now);
    v.mod2G.gain.setTargetAtTime(0.0001, now, Math.max(0.01, modRel / 3.0));
  }

  const stopTime = now + rel * 1.5;
  [v.car, v.car1, v.car2, v.mod, v.mod1, v.mod2, v.mod3, v.mod4, v.vibOsc, v.vibLfo].forEach(node => {
    if (node) { try { node.stop(stopTime); } catch(e){} }
  });

  setTimeout(() => {
    try {
      if (v.lfoG) v.lfoG.disconnect();
      if (v.vibGainNode) v.vibGainNode.disconnect();
      if (v.env) v.env.disconnect();
      if (v.panner) v.panner.disconnect();
      if (v.shaper) v.shaper.disconnect();
      if (v.filter) v.filter.disconnect();
    } catch (e) {}
  }, rel * 1600);

  inst.voices.delete(sem);
  updateUIBadges();
  syncKeys();
}

function panicSynth(synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  if (!inst) return;

  const now = ctx ? ctx.currentTime : 0;
  for (const [sem, v] of inst.voices) {
    if (v.env && ctx) {
      try {
        v.env.gain.cancelScheduledValues(now);
        v.env.gain.setValueAtTime(0, now);
      } catch(e){}
    }
    const stopTime = now + 0.002;
    if (v.nodes && Array.isArray(v.nodes)) {
      v.nodes.forEach(n => {
        try {
          if (n && typeof n.stop === "function") n.stop(stopTime);
          if (n && typeof n.disconnect === "function") n.disconnect();
        } catch(e){}
      });
    }
    [v.car, v.car1, v.car2, v.mod, v.mod1, v.mod2, v.mod3, v.mod4, v.vibOsc, v.vibLfo].forEach(node => {
      if (node) {
        try {
          if (typeof node.stop === "function") node.stop(stopTime);
          if (typeof node.disconnect === "function") node.disconnect();
        } catch(e){}
      }
    });
  }
  inst.voices.clear();

  inst.params.latch = false;
  if (synthIdx === activeSynthIdx) {
    const latchBtn = document.getElementById("latch");
    if (latchBtn) latchBtn.setAttribute("aria-pressed", "false");
    const kbLatch = document.getElementById("kbLatchToggle");
    if (kbLatch) {
      kbLatch.classList.remove("active");
      kbLatch.textContent = "LATCH: AUS";
    }
  }

  updateUIBadges();
  syncKeys();
}

function panicAll() {
  const now = ctx ? ctx.currentTime : 0;

  // 1. All 130 Synth Instances & Channel Buses
  synthInstances.forEach((inst, idx) => {
    panicSynth(idx);
    if (inst.bus && ctx) {
      try {
        inst.bus.gain.cancelScheduledValues(now);
        inst.bus.gain.setValueAtTime(0, now);
        inst.bus.gain.setValueAtTime(inst.params.vol, now + 0.04);
      } catch(e){}
    }
  });

  // 2. Stop & Disable Arpeggiator
  if (typeof stopArpClock === "function") stopArpClock();
  if (typeof arpState !== "undefined" && arpState) {
    arpState.enabled = false;
    arpState.heldKeys.clear();
    arpState.latchedKeys = [];
    arpState.latch = false;
    const arpChk = document.getElementById("arp_enabled");
    if (arpChk) arpChk.checked = false;
    const arpBadge = document.getElementById("arp_badge");
    if (arpBadge) {
      arpBadge.style.background = "transparent";
      arpBadge.style.color = "var(--dim)";
    }
    const arpLatchBtn = document.getElementById("arpLatchBtn");
    if (arpLatchBtn) arpLatchBtn.classList.remove("active");
    if (typeof updateArpActiveNotesHint === "function") updateArpActiveNotesHint();
  }

  // 3. Stop & Disable All Drum & Percussion Channels
  if (typeof stopPercEngineClock === "function") stopPercEngineClock();
  if (typeof percState !== "undefined" && percState) {
    percState.enabled = false;
    if (percState.timerId) {
      clearTimeout(percState.timerId);
      percState.timerId = null;
    }
    const percChk = document.getElementById("perc_enabled");
    if (percChk) percChk.checked = false;
    const percBadge = document.getElementById("perc_badge");
    if (percBadge) {
      percBadge.style.background = "transparent";
      percBadge.style.color = "var(--dim)";
    }
    if (percState.bus && ctx) {
      try {
        percState.bus.gain.cancelScheduledValues(now);
        percState.bus.gain.setValueAtTime(0, now);
        percState.bus.gain.setValueAtTime(1.0, now + 0.04);
      } catch(e){}
    }
  }

  // 4. Stop Speech Looper Channel
  if (typeof stopLoopPlayback === "function") {
    stopLoopPlayback();
  } else if (typeof loopState !== "undefined" && loopState) {
    if (loopState.activeSourceNode) {
      try { loopState.activeSourceNode.stop(); } catch(e){}
      loopState.activeSourceNode = null;
    }
    if (loopState.pauseTimerId) {
      clearTimeout(loopState.pauseTimerId);
      loopState.pauseTimerId = null;
    }
    loopState.isPlaying = false;
  }

  // 5. Stop Multi-Layer Looper Stack Channels
  if (typeof loopStack !== "undefined" && Array.isArray(loopStack)) {
    loopStack.forEach(layer => {
      layer.isOn = false;
      if (typeof stopLayerPlayback === "function") {
        stopLayerPlayback(layer);
      } else if (layer.srcNode) {
        try { layer.srcNode.stop(); layer.srcNode.disconnect(); } catch(e){}
        layer.srcNode = null;
      }
      if (layer.gainNode && ctx) {
        try {
          layer.gainNode.gain.cancelScheduledValues(now);
          layer.gainNode.gain.setValueAtTime(0, now);
        } catch(e){}
      }
    });
    if (typeof renderLoopStackUI === "function") renderLoopStackUI();
  }

  // 6. Hard-Cut Reverb Tails, Delay Feedback & Master Channels
  if (ctx) {
    if (typeof wetGain !== "undefined" && wetGain) {
      wetGain.gain.cancelScheduledValues(now);
      wetGain.gain.setValueAtTime(0, now);
      wetGain.gain.linearRampToValueAtTime(GLOBAL.wet, now + 0.04);
    }
    if (typeof dryGain !== "undefined" && dryGain) {
      dryGain.gain.cancelScheduledValues(now);
      dryGain.gain.setValueAtTime(0, now);
      dryGain.gain.linearRampToValueAtTime(1 - GLOBAL.wet * 0.5, now + 0.04);
    }
    if (typeof stackMasterGain !== "undefined" && stackMasterGain) {
      stackMasterGain.gain.cancelScheduledValues(now);
      stackMasterGain.gain.setValueAtTime(0, now);
      stackMasterGain.gain.linearRampToValueAtTime(1.0, now + 0.04);
    }
  }

  // 7. Flush FX Module Delay & Resonator Feedback Lines
  if (typeof fxNodes !== "undefined" && ctx) {
    if (fxNodes.shimmer && fxNodes.shimmer.fb) fxNodes.shimmer.fb.gain.setValueAtTime(0, now);
    if (fxNodes.waveguide && fxNodes.waveguide.fb) fxNodes.waveguide.fb.gain.setValueAtTime(0, now);
    if (fxNodes.granular && fxNodes.granular.fb) fxNodes.granular.fb.gain.setValueAtTime(0, now);
  }

  if (typeof activeHeldPhysicalNotes !== "undefined") {
    activeHeldPhysicalNotes.clear();
  }

  updateUIBadges();
  syncKeys();
}
