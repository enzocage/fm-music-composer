"use strict";

/* ============================================================
   Multi-Voice Drum Synthesis, Stepper & Parameter Oscillation
   ============================================================ */
const masterClock = {
  bpm: 120,
  timeSignature: "4/4",
  beatsPerBar: 4,
  beatUnit: 4
};

const DRUM_VOICES_CONFIG = {
  base: {
    name: "BASE DRUM (Deep Sinus)",
    color: "#ff4757",
    vol: 0.85,
    mute: false,
    solo: false,
    steps: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
    suggestions: [
      { name: "4-on-Floor", pat: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0] },
      { name: "Downbeat (1&3)", pat: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0] },
      { name: "Syncopated Sub", pat: [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0] },
      { name: "Minimal Pulse", pat: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0] }
    ],
    params: {
      baseFreq: { name: "Sub-Frequenz f₀", min: 30, max: 100, val: 48, unit: " Hz", osc: { min: 38, max: 62, speed: 20, enabled: false, phase: 0 } },
      pitchDrop: { name: "Pitch-Drop Tiefe Δf", min: 20, max: 300, val: 120, unit: " Hz", osc: { min: 60, max: 180, speed: 25, enabled: false, phase: 0 } },
      decay: { name: "Sub-Ausklingzeit", min: 0.05, max: 1.20, val: 0.45, unit: " s", osc: { min: 0.20, max: 0.80, speed: 15, enabled: false, phase: 0 } },
      clickPunch: { name: "Click / Punch", min: 0, max: 100, val: 75, unit: " %", osc: { min: 30, max: 90, speed: 30, enabled: false, phase: 0 } }
    }
  },
  hihat: {
    name: "HI-HAT (High Short Noise)",
    color: "#38c7ff",
    vol: 0.65,
    mute: false,
    solo: false,
    steps: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
    suggestions: [
      { name: "8th Offbeat", pat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0] },
      { name: "16th Running", pat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] },
      { name: "Euclid 7/16", pat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0] },
      { name: "Flutter Wave", pat: [1,0,1,1, 0,1,0,1, 1,1,0,1, 0,1,1,0] }
    ],
    params: {
      hhCutoff: { name: "Hochpass Cutoff", min: 3000, max: 14000, val: 7500, unit: " Hz", osc: { min: 4500, max: 11000, speed: 30, enabled: false, phase: 0 } },
      hhDecay: { name: "Hat Ausklingzeit", min: 15, max: 250, val: 45, unit: " ms", osc: { min: 25, max: 120, speed: 25, enabled: false, phase: 0 } },
      metallicRing: { name: "Metallic Ring", min: 0, max: 100, val: 35, unit: " %", osc: { min: 10, max: 70, speed: 20, enabled: false, phase: 0 } },
      velResponse: { name: "Velocity Dynamik", min: 0, max: 100, val: 80, unit: " %", osc: { min: 40, max: 95, speed: 15, enabled: false, phase: 0 } }
    }
  },
  cymbal: {
    name: "CYMBAL (High Long Noise)",
    color: "#a29bfe",
    vol: 0.60,
    mute: false,
    solo: false,
    steps: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
    suggestions: [
      { name: "Bar 1 Crash", pat: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0] },
      { name: "Swell Beat 4+", pat: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1] },
      { name: "Periodic Shimmer", pat: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0] }
    ],
    params: {
      cymDecay: { name: "Cymbal Decay", min: 0.4, max: 4.5, val: 1.8, unit: " s", osc: { min: 0.8, max: 3.2, speed: 12, enabled: false, phase: 0 } },
      clusterSpread: { name: "Cluster Spreizung", min: 1.0, max: 5.0, val: 2.5, unit: " x", osc: { min: 1.5, max: 4.0, speed: 18, enabled: false, phase: 0 } },
      shimmerFilter: { name: "Air Shimmer Band", min: 2000, max: 16000, val: 6200, unit: " Hz", osc: { min: 3500, max: 9500, speed: 22, enabled: false, phase: 0 } },
      metallicRes: { name: "Resonanz Güte Q", min: 0.5, max: 8.0, val: 1.5, unit: "", osc: { min: 0.8, max: 4.5, speed: 16, enabled: false, phase: 0 } }
    }
  },
  snare: {
    name: "SNARE DRUM (Hard Noise)",
    color: "#ffc46b",
    vol: 0.75,
    mute: false,
    solo: false,
    steps: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    suggestions: [
      { name: "Backbeat (2&4)", pat: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0] },
      { name: "Ghost Notes", pat: [0,0,0,0, 1,0,0,1, 0,0,1,0, 1,0,0,0] },
      { name: "Polyrhythm 3/8", pat: [0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0] },
      { name: "Sparse Accent", pat: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0] }
    ],
    params: {
      bodyFreq: { name: "Body Tonhöhe f_sn", min: 100, max: 350, val: 195, unit: " Hz", osc: { min: 140, max: 260, speed: 22, enabled: false, phase: 0 } },
      noiseMix: { name: "Rausch-Anteil", min: 0, max: 100, val: 60, unit: " %", osc: { min: 25, max: 85, speed: 28, enabled: false, phase: 0 } },
      snareDecay: { name: "Snare Decay", min: 0.05, max: 0.60, val: 0.18, unit: " s", osc: { min: 0.10, max: 0.35, speed: 18, enabled: false, phase: 0 } },
      snappyCutoff: { name: "Snappy Hochpass", min: 500, max: 8000, val: 2400, unit: " Hz", osc: { min: 1200, max: 4800, speed: 35, enabled: false, phase: 0 } }
    }
  },
  wood: {
    name: "WOOD / PING (Buchla LPG)",
    color: "#2ed573",
    vol: 0.70,
    mute: false,
    solo: false,
    steps: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
    suggestions: [
      { name: "Euclid 5/16", pat: [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0] },
      { name: "Micro-Shuffle", pat: [0,1,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0] },
      { name: "Poisson Rain", pat: [0,0,1,0, 0,0,0,1, 0,1,0,0, 0,0,1,0] }
    ],
    params: {
      woodPitch: { name: "Holz Tonhöhe f_wd", min: 200, max: 2500, val: 720, unit: " Hz", osc: { min: 350, max: 1400, speed: 26, enabled: false, phase: 0 } },
      vactrolSlew: { name: "Vactrol Slew Decay", min: 0.01, max: 0.50, val: 0.09, unit: " s", osc: { min: 0.03, max: 0.25, speed: 20, enabled: false, phase: 0 } },
      besselHarmonics: { name: "Bessel Harmonische", min: 1.0, max: 4.0, val: 2.29, unit: "", osc: { min: 1.4, max: 3.6, speed: 15, enabled: false, phase: 0 } },
      damping: { name: "Resonanz Dämpfung", min: 0, max: 100, val: 40, unit: " %", osc: { min: 15, max: 75, speed: 22, enabled: false, phase: 0 } }
    }
  },
  shaker: {
    name: "SHAKER / DUST (Granular Noise)",
    color: "#70a1ff",
    vol: 0.55,
    mute: false,
    solo: false,
    steps: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
    suggestions: [
      { name: "Running 16th", pat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] },
      { name: "Ambient 8th", pat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0] },
      { name: "Granular Dust", pat: [0,1,1,0, 1,0,0,1, 1,1,0,1, 0,0,1,1] }
    ],
    params: {
      grainDens: { name: "Shaker Korndichte", min: 10, max: 100, val: 75, unit: " %", osc: { min: 30, max: 95, speed: 24, enabled: false, phase: 0 } },
      grainDecay: { name: "Grain Ausklingzeit", min: 10, max: 150, val: 60, unit: " ms", osc: { min: 20, max: 110, speed: 32, enabled: false, phase: 0 } },
      centerBP: { name: "Bandpass Zentrum", min: 1000, max: 10000, val: 4500, unit: " Hz", osc: { min: 2200, max: 7800, speed: 28, enabled: false, phase: 0 } },
      scatterJitter: { name: "Scatter Jitter", min: 0, max: 100, val: 35, unit: " %", osc: { min: 10, max: 80, speed: 30, enabled: false, phase: 0 } }
    }
  }
};

const OVERARCHING_PERC_MODS = {
  masterFilter: { name: "Master Filter Morph", min: 200, max: 14000, val: 5200, unit: " Hz", osc: { min: 800, max: 9500, speed: 20, enabled: false, phase: 0 } },
  grooveSwing: { name: "Swing / Groove Breathe", min: 0, max: 75, val: 15, unit: " %", osc: { min: 5, max: 45, speed: 15, enabled: false, phase: 0 } },
  chaosJitter: { name: "Chaos / Timing Jitter", min: 0, max: 40, val: 10, unit: " ms", osc: { min: 2, max: 28, speed: 25, enabled: false, phase: 0 } },
  orbitalPan: { name: "Binaural Orbital Pan", min: 0, max: 100, val: 65, unit: " %", osc: { min: 20, max: 95, speed: 18, enabled: false, phase: 0 } },
  spaceSwell: { name: "Space Reverb Swell", min: 0, max: 100, val: 40, unit: " %", osc: { min: 15, max: 80, speed: 12, enabled: false, phase: 0 } },
  loopDrive: { name: "Drive / Tape Crunch", min: 0.0, max: 5.0, val: 1.2, unit: " x", osc: { min: 0.2, max: 3.5, speed: 22, enabled: false, phase: 0 } }
};

const percState = {
  enabled: false,
  activeVoice: "base",
  volume: 0.80,
  currentStep: 0,
  timerId: null,
  noiseBuffer: null,
  bus: null,
  dryGain: null,
  wetGain: null,
  filterNode: null,
  driveNode: null,
  lfoSync: "1_1",
  voices: DRUM_VOICES_CONFIG,
  overarching: OVERARCHING_PERC_MODS
};

function getNoiseBuffer() {
  if (percState.noiseBuffer) return percState.noiseBuffer;
  if (!ctx) return null;
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  percState.noiseBuffer = buffer;
  return buffer;
}

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount * 15 : 0;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

function initPercAudio() {
  if (!ctx || percState.bus) return;
  percState.bus = ctx.createGain();
  percState.bus.gain.value = percState.volume;

  percState.filterNode = ctx.createBiquadFilter();
  percState.filterNode.type = "lowpass";
  percState.filterNode.frequency.value = percState.overarching.masterFilter.val;
  percState.filterNode.Q.value = 1.0;

  percState.driveNode = ctx.createWaveShaper();
  percState.driveNode.curve = makeDistortionCurve(percState.overarching.loopDrive.val);
  percState.driveNode.oversample = "2x";

  percState.dryGain = ctx.createGain();
  percState.dryGain.gain.value = 1.0 - (percState.overarching.spaceSwell.val / 100) * 0.4;

  percState.wetGain = ctx.createGain();
  percState.wetGain.gain.value = (percState.overarching.spaceSwell.val / 100);

  percState.bus.connect(percState.driveNode);
  percState.driveNode.connect(percState.filterNode);
  percState.filterNode.connect(percState.dryGain).connect(masterGain);
  if (conv) percState.filterNode.connect(percState.wetGain).connect(conv);
}

// ------------------------------------------------------------
// Dedicated Multi-Voice Synthesis DSP Engines
// ------------------------------------------------------------
function triggerDrumVoice(voiceKey, velocity, triggerT) {
  if (!ctx || !percState.bus) initPercAudio();
  if (!ctx) return;

  const voice = percState.voices[voiceKey];
  if (!voice) return;

  const p = voice.params;
  const vel = velocity * voice.vol;
  const noiseBuf = getNoiseBuffer();

  // Panner
  let panner = null;
  if (ctx.createStereoPanner) {
    panner = ctx.createStereoPanner();
    const panExtent = (percState.overarching.orbitalPan.val / 100);
    panner.pan.setValueAtTime((Math.random() * 2 - 1) * panExtent, triggerT);
    panner.connect(percState.bus);
  }

  const dest = panner || percState.bus;

  switch(voiceKey) {
    case "base": {
      // 1. BASE DRUM: Sub-Bass Sinus Drop + Click Transient
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();

      const f0 = p.baseFreq.val;
      const df = p.pitchDrop.val;
      const dec = p.decay.val;
      const clickAmt = p.clickPunch.val / 100;

      osc.frequency.setValueAtTime(f0 + df, triggerT);
      osc.frequency.exponentialRampToValueAtTime(f0, triggerT + 0.06);

      gain.gain.setValueAtTime(vel * 1.25, triggerT);
      gain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dec);

      if (clickAmt > 0) {
        click.type = "triangle";
        click.frequency.setValueAtTime(450, triggerT);
        click.frequency.exponentialRampToValueAtTime(40, triggerT + 0.015);
        clickGain.gain.setValueAtTime(vel * clickAmt * 0.9, triggerT);
        clickGain.gain.exponentialRampToValueAtTime(0.0001, triggerT + 0.015);
        click.connect(clickGain).connect(dest);
        click.start(triggerT);
        click.stop(triggerT + 0.02);
      }

      osc.connect(gain).connect(dest);
      osc.start(triggerT);
      osc.stop(triggerT + dec + 0.05);
      break;
    }

    case "hihat": {
      // 2. HI-HAT: High short crisp noise + metallic ring
      if (!noiseBuf) return;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;

      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(p.hhCutoff.val, triggerT);

      const gain = ctx.createGain();
      const dur = p.hhDecay.val / 1000;
      gain.gain.setValueAtTime(vel * (p.velResponse.val / 100), triggerT);
      gain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur);

      if (p.metallicRing.val > 0) {
        const ring = ctx.createOscillator();
        const rGain = ctx.createGain();
        ring.frequency.setValueAtTime(8500, triggerT);
        rGain.gain.setValueAtTime(vel * (p.metallicRing.val / 100) * 0.3, triggerT);
        rGain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur * 0.7);
        ring.connect(rGain).connect(dest);
        ring.start(triggerT);
        ring.stop(triggerT + dur);
      }

      noise.connect(filter).connect(gain).connect(dest);
      noise.start(triggerT);
      noise.stop(triggerT + dur + 0.02);
      break;
    }

    case "cymbal": {
      // 3. CYMBAL: High long airy white noise + inharmonic FM shimmer
      if (!noiseBuf) return;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;

      const nFilter = ctx.createBiquadFilter();
      nFilter.type = "bandpass";
      nFilter.frequency.setValueAtTime(p.shimmerFilter.val, triggerT);
      nFilter.Q.value = p.metallicRes.val;

      const gain = ctx.createGain();
      const dur = p.cymDecay.val;
      gain.gain.setValueAtTime(vel * 0.75, triggerT);
      gain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur);

      const spread = p.clusterSpread.val;
      const baseFreqs = [2150, 3180, 4290, 5410];
      baseFreqs.forEach((f, i) => {
        const mOsc = ctx.createOscillator();
        const mGain = ctx.createGain();
        mOsc.frequency.setValueAtTime(f * (1 + (i * 0.15 * spread)), triggerT);
        mGain.gain.setValueAtTime(vel * 0.12, triggerT);
        mGain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur * 0.75);
        mOsc.connect(mGain).connect(dest);
        mOsc.start(triggerT);
        mOsc.stop(triggerT + dur);
      });

      noise.connect(nFilter).connect(gain).connect(dest);
      noise.start(triggerT);
      noise.stop(triggerT + dur + 0.05);
      break;
    }

    case "snare": {
      // 4. SNARE DRUM: Body fundamental + Snappy filtered noise
      const bodyOsc = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      bodyOsc.frequency.setValueAtTime(p.bodyFreq.val, triggerT);
      bodyOsc.frequency.exponentialRampToValueAtTime(p.bodyFreq.val * 0.65, triggerT + 0.08);

      const noiseWeight = p.noiseMix.val / 100;
      const bodyWeight = 1.0 - noiseWeight;
      const dur = p.snareDecay.val;

      bodyGain.gain.setValueAtTime(vel * bodyWeight * 1.2, triggerT);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur * 0.8);

      bodyOsc.connect(bodyGain).connect(dest);
      bodyOsc.start(triggerT);
      bodyOsc.stop(triggerT + dur);

      if (noiseBuf && noiseWeight > 0) {
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuf;
        const nFilter = ctx.createBiquadFilter();
        nFilter.type = "highpass";
        nFilter.frequency.setValueAtTime(p.snappyCutoff.val, triggerT);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(vel * noiseWeight * 1.1, triggerT);
        nGain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur);

        noise.connect(nFilter).connect(nGain).connect(dest);
        noise.start(triggerT);
        noise.stop(triggerT + dur + 0.02);
      }
      break;
    }

    case "wood": {
      // 5. WOOD / PING: Buchla 292 LPG resonant organic woodblock
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const f = p.woodPitch.val;
      const slew = p.vactrolSlew.val;

      osc.frequency.setValueAtTime(f, triggerT);
      osc.frequency.exponentialRampToValueAtTime(f * p.besselHarmonics.val * 0.5, triggerT + slew);

      gain.gain.setValueAtTime(0.001, triggerT);
      gain.gain.linearRampToValueAtTime(vel * (1.0 - (p.damping.val / 100) * 0.4), triggerT + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.0001, triggerT + slew);

      osc.connect(gain).connect(dest);
      osc.start(triggerT);
      osc.stop(triggerT + slew + 0.02);
      break;
    }

    case "shaker": {
      // 6. SHAKER / DUST: Soft granular ambient noise burst
      if (!noiseBuf) return;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;

      const bpf = ctx.createBiquadFilter();
      bpf.type = "bandpass";
      bpf.frequency.setValueAtTime(p.centerBP.val, triggerT);
      bpf.Q.value = 2.0;

      const dur = p.grainDecay.val / 1000;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vel * (p.grainDens.val / 100) * 0.85, triggerT);
      gain.gain.exponentialRampToValueAtTime(0.0001, triggerT + dur);

      noise.connect(bpf).connect(gain).connect(dest);
      noise.start(triggerT);
      noise.stop(triggerT + dur + 0.02);
      break;
    }
  }
}

// ------------------------------------------------------------
// Generic Unified Parameter UI Row Generator & Binder
// ------------------------------------------------------------
function buildUnifiedParamRowHTML(paramKey, pObj, prefix = "perc_") {
  const pId = prefix + paramKey;
  return `
    <div class="param-row-unified${pObj.osc.enabled ? ' osc-active' : ''}" id="block_${pId}" data-param="${pId}">
      <div class="p-header">
        <span class="p-name">${pObj.name}</span>
        <div class="p-right">
          <span class="p-val" id="v_${pId}">${typeof pObj.val === 'number' ? pObj.val.toFixed(pObj.unit === ' s' ? 2 : (pObj.unit === ' x' ? 1 : 0)) : pObj.val}${pObj.unit}</span>
          <label class="osc-toggle-label" title="Oszillation An/Aus">
            <input type="checkbox" id="osc_en_${pId}" class="osc-chk"${pObj.osc.enabled ? ' checked' : ''}>
            <span class="osc-badge">~ OSC</span>
          </label>
        </div>
      </div>
      <div class="p-controls-row">
        <div class="track-area" id="trackarea_${pId}" data-param="${pId}">
          <div class="track-line"></div>
          <div class="track-span" id="span_${pId}"></div>
          <div class="handle handle-a" id="handle_a_${pId}" title="Start A"><span class="h-tag">A</span></div>
          <div class="handle handle-b" id="handle_b_${pId}" title="Ende B"><span class="h-tag">B</span></div>
          <div class="handle handle-thumb" id="thumb_${pId}" title="Wert ziehen"></div>
        </div>
        <div class="knob-mini-wrap" id="knob_${pId}" data-param="${pId}" title="Oszillations-Geschwindigkeit (0.01–10 Hz)">
          <div class="knob-dial">
            <svg class="knob-svg" viewBox="0 0 32 32">
              <circle class="knob-bg" cx="16" cy="16" r="13" />
              <path class="knob-arc" id="knob_arc_${pId}" d="" />
              <line class="knob-pointer" id="knob_ptr_${pId}" x1="16" y1="16" x2="16" y2="4" />
            </svg>
          </div>
          <span class="knob-val" id="knob_val_${pId}">${pObj.osc.speed}</span>
        </div>
      </div>
    </div>`;
}

function bindUnifiedParamRow(paramKey, pObj, prefix = "perc_", onChange = null) {
  const pId = prefix + paramKey;
  const block = document.getElementById("block_" + pId);
  const trackArea = document.getElementById("trackarea_" + pId);
  const span = document.getElementById("span_" + pId);
  const handleA = document.getElementById("handle_a_" + pId);
  const handleB = document.getElementById("handle_b_" + pId);
  const thumb = document.getElementById("thumb_" + pId);
  const chk = document.getElementById("osc_en_" + pId);
  const vDisplay = document.getElementById("v_" + pId);
  const knobWrap = document.getElementById("knob_" + pId);
  const knobArc = document.getElementById("knob_arc_" + pId);
  const knobPtr = document.getElementById("knob_ptr_" + pId);
  const knobVal = document.getElementById("knob_val_" + pId);

  function valToPct(v) { return Math.max(0, Math.min(1, (v - pObj.min) / (pObj.max - pObj.min))); }
  function pctToVal(p) { return pObj.min + p * (pObj.max - pObj.min); }

  function updateVisuals() {
    const pctVal = valToPct(pObj.val);
    const pctA = valToPct(pObj.osc.min);
    const pctB = valToPct(pObj.osc.max);

    if (thumb) thumb.style.left = (pctVal * 100) + "%";
    if (handleA) handleA.style.left = (pctA * 100) + "%";
    if (handleB) handleB.style.left = (pctB * 100) + "%";

    if (span) {
      const leftP = Math.min(pctA, pctB) * 100;
      const widthP = Math.abs(pctB - pctA) * 100;
      span.style.left = leftP + "%";
      span.style.width = Math.max(2, widthP) + "%";
    }

    if (vDisplay) {
      vDisplay.textContent = (typeof pObj.val === 'number' ? pObj.val.toFixed(pObj.unit === ' s' ? 2 : (pObj.unit === ' x' ? 1 : 0)) : pObj.val) + pObj.unit;
    }

    // Rotary Dial
    if (knobVal) knobVal.textContent = pObj.osc.speed;
    const angle = (pObj.osc.speed / 100) * 270 - 135;
    if (knobPtr) knobPtr.setAttribute("transform", "rotate(" + angle + " 16 16)");
    if (knobArc) {
      const rad = 13, cx = 16, cy = 16;
      const startAngle = -135 * Math.PI / 180;
      const endAngle = angle * Math.PI / 180;
      const x1 = cx + rad * Math.cos(startAngle);
      const y1 = cy + rad * Math.sin(startAngle);
      const x2 = cx + rad * Math.cos(endAngle);
      const y2 = cy + rad * Math.sin(endAngle);
      const largeArc = (endAngle - startAngle > Math.PI) ? 1 : 0;
      knobArc.setAttribute("d", `M ${x1} ${y1} A ${rad} ${rad} 0 ${largeArc} 1 ${x2} ${y2}`);
    }

    if (block) block.classList.toggle("osc-active", !!pObj.osc.enabled);
  }

  if (chk) {
    chk.addEventListener("change", () => {
      pObj.osc.enabled = chk.checked;
      updateVisuals();
    });
  }

  // Pointer dragging for Handles A, B and Thumb
  let dragTarget = null;
  if (trackArea) {
    trackArea.addEventListener("pointerdown", e => {
      e.preventDefault();
      trackArea.setPointerCapture(e.pointerId);
      const rect = trackArea.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

      if (e.target.closest(".handle-a")) dragTarget = "a";
      else if (e.target.closest(".handle-b")) dragTarget = "b";
      else if (e.target.closest(".handle-thumb")) dragTarget = "thumb";
      else {
        const pctA = valToPct(pObj.osc.min);
        const pctB = valToPct(pObj.osc.max);
        const dA = Math.abs(pct - pctA);
        const dB = Math.abs(pct - pctB);
        if (dA < 0.08 && dA <= dB) dragTarget = "a";
        else if (dB < 0.08) dragTarget = "b";
        else {
          dragTarget = "thumb";
          pObj.val = pctToVal(pct);
          if (onChange) onChange(pObj.val);
        }
      }
      updateVisuals();
    });

    trackArea.addEventListener("pointermove", e => {
      if (!dragTarget) return;
      const rect = trackArea.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const val = pctToVal(pct);

      if (dragTarget === "a") pObj.osc.min = val;
      else if (dragTarget === "b") pObj.osc.max = val;
      else if (dragTarget === "thumb") {
        pObj.val = val;
        if (onChange) onChange(val);
      }
      updateVisuals();
    });

    const stopDrag = e => {
      if (dragTarget) {
        try { trackArea.releasePointerCapture(e.pointerId); } catch(err){}
        dragTarget = null;
      }
    };
    trackArea.addEventListener("pointerup", stopDrag);
    trackArea.addEventListener("pointercancel", stopDrag);
  }

  // Rotary Knob Dragging
  if (knobWrap) {
    let knobStartY = 0, knobStartSpeed = 0;
    knobWrap.addEventListener("pointerdown", e => {
      e.preventDefault();
      knobWrap.setPointerCapture(e.pointerId);
      knobStartY = e.clientY;
      knobStartSpeed = pObj.osc.speed;
    });
    knobWrap.addEventListener("pointermove", e => {
      if (knobStartY === 0) return;
      const dy = knobStartY - e.clientY;
      pObj.osc.speed = Math.max(1, Math.min(100, Math.round(knobStartSpeed + dy * 0.7)));
      updateVisuals();
    });
    const stopKnob = e => {
      if (knobStartY !== 0) {
        try { knobWrap.releasePointerCapture(e.pointerId); } catch(err){}
        knobStartY = 0;
      }
    };
    knobWrap.addEventListener("pointerup", stopKnob);
    knobWrap.addEventListener("pointercancel", stopKnob);
  }

  updateVisuals();
}

// ------------------------------------------------------------
// Render and Bind Voice & Overarching Racks
// ------------------------------------------------------------
function renderPercVoiceParams() {
  const container = document.getElementById("percVoiceParamsContainer");
  const title = document.getElementById("percParamSectionTitle");
  if (!container) return;

  const activeKey = percState.activeVoice;
  const voice = percState.voices[activeKey];
  if (!voice) return;

  if (title) title.textContent = voice.name + " PARAMETER (~ OSC AUTO)";

  container.innerHTML = "";
  Object.keys(voice.params).forEach(k => {
    const pObj = voice.params[k];
    const rowHTML = buildUnifiedParamRowHTML(k, pObj, "v_" + activeKey + "_");
    container.insertAdjacentHTML("beforeend", rowHTML);
    bindUnifiedParamRow(k, pObj, "v_" + activeKey + "_");
  });
}

function renderPercOverarchingParams() {
  const container = document.getElementById("percOverarchingParamsContainer");
  if (!container) return;
  container.innerHTML = "";

  Object.keys(percState.overarching).forEach(k => {
    const pObj = percState.overarching[k];
    const rowHTML = buildUnifiedParamRowHTML(k, pObj, "oa_");
    container.insertAdjacentHTML("beforeend", rowHTML);
    bindUnifiedParamRow(k, pObj, "oa_", val => {
      if (k === "masterFilter" && percState.filterNode) percState.filterNode.frequency.value = val;
      if (k === "loopDrive" && percState.driveNode) percState.driveNode.curve = makeDistortionCurve(val);
      if (k === "spaceSwell") {
        if (percState.wetGain) percState.wetGain.gain.value = val / 100;
        if (percState.dryGain) percState.dryGain.gain.value = 1.0 - (val / 100) * 0.4;
      }
    });
  });
}

function renderPercVoiceUI() {
  const activeKey = percState.activeVoice;
  const voice = percState.voices[activeKey];
  if (!voice) return;

  const title = document.getElementById("percActiveVoiceTitle");
  if (title) {
    title.textContent = voice.name;
    title.style.color = voice.color;
  }

  const muteBtn = document.getElementById("btnVoiceMute");
  const soloBtn = document.getElementById("btnVoiceSolo");
  if (muteBtn) {
    muteBtn.style.background = voice.mute ? "rgba(255, 71, 87, 0.4)" : "rgba(255,255,255,0.06)";
    muteBtn.style.color = voice.mute ? "#ff4757" : "var(--dim)";
    muteBtn.textContent = voice.mute ? "MUTED" : "MUTE";
  }
  if (soloBtn) {
    soloBtn.style.background = voice.solo ? "rgba(46, 213, 115, 0.4)" : "rgba(255,255,255,0.06)";
    soloBtn.style.color = voice.solo ? "#2ed573" : "var(--dim)";
    soloBtn.textContent = voice.solo ? "SOLO ON" : "SOLO";
  }

  const volSlider = document.getElementById("p_voice_vol");
  if (volSlider) volSlider.value = Math.round(voice.vol * 100);

  const suggContainer = document.getElementById("percPlausibleBtns");
  if (suggContainer) {
    suggContainer.innerHTML = "";
    (voice.suggestions || []).forEach(s => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "arp-pre-btn";
      btn.style.fontSize = "6.5px";
      btn.style.padding = "1px 4px";
      btn.textContent = s.name;
      btn.addEventListener("click", () => {
        voice.steps = [...s.pat];
        renderPercStepGrid();
        renderPercOverview();
      });
      suggContainer.appendChild(btn);
    });
  }

  renderPercStepGrid();
  renderPercOverview();
  renderPercVoiceParams();
}

function renderPercStepGrid() {
  const grid = document.getElementById("percStepGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const voice = percState.voices[percState.activeVoice];
  if (!voice) return;

  for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "perc-step-btn" + (voice.steps[i] ? " on" : "");
    btn.id = "perc_step_btn_" + i;

    const dot = document.createElement("div");
    dot.className = "perc-step-dot";

    const num = document.createElement("span");
    num.className = "perc-step-num";
    num.textContent = (i + 1);

    btn.appendChild(dot);
    btn.appendChild(num);

    btn.addEventListener("click", () => {
      voice.steps[i] = voice.steps[i] ? 0 : 1;
      btn.classList.toggle("on", !!voice.steps[i]);
      renderPercOverview();
    });

    grid.appendChild(btn);
  }
}

function renderPercOverview() {
  const wrap = document.getElementById("percOverviewWrap");
  if (!wrap) return;
  wrap.innerHTML = "";

  const keys = Object.keys(percState.voices);
  keys.forEach(k => {
    const v = percState.voices[k];
    const row = document.createElement("div");
    row.className = "perc-ov-row";

    const name = document.createElement("span");
    name.className = "perc-ov-name";
    name.style.color = v.color;
    name.textContent = k.toUpperCase().slice(0, 5);

    const g = document.createElement("div");
    g.className = "perc-ov-grid";

    for (let i = 0; i < 16; i++) {
      const s = document.createElement("div");
      s.className = "perc-ov-step" + (v.steps[i] ? " on" : "");
      s.id = "perc_ov_" + k + "_" + i;
      if (v.steps[i]) s.style.background = v.color;
      g.appendChild(s);
    }

    row.appendChild(name);
    row.appendChild(g);
    wrap.appendChild(row);
  });
}

function applyLandscapePreset(type) {
  const landscapes = {
    deep: {
      base: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      hihat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      cymbal: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      snare: [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
      wood: [0,0,1,0, 0,0,0,1, 0,1,0,0, 0,0,1,0],
      shaker: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0]
    },
    forest: {
      base: [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
      hihat: [1,0,1,1, 0,1,0,1, 1,1,0,1, 0,1,1,0],
      cymbal: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      wood: [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0],
      shaker: [0,1,1,0, 1,0,0,1, 1,1,0,1, 0,0,1,1]
    },
    dub: {
      base: [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
      hihat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      cymbal: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      wood: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
      shaker: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
    },
    techno: {
      base: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      hihat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      cymbal: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      wood: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      shaker: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
    },
    cosmic: {
      base: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0],
      cymbal: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1],
      snare: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      wood: [0,0,1,0, 0,0,0,1, 0,1,0,0, 0,0,1,0],
      shaker: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
    }
  };

  const l = landscapes[type];
  if (!l) return;

  Object.keys(l).forEach(k => {
    if (percState.voices[k]) percState.voices[k].steps = [...l[k]];
  });

  renderPercVoiceUI();
}

function startPercEngineClock() {
  stopPercEngineClock();
  if (!percState.enabled) return;

  initPercAudio();
  percState.currentStep = 0;

  function stepClock() {
    if (!percState.enabled) return;

    const beatSec = 60 / masterClock.bpm;
    const stepSec = beatSec / 4;
    const swingVal = percState.overarching.grooveSwing.val;
    const isEvenStep = (percState.currentStep % 2 === 1);
    const swingSec = isEvenStep ? (stepSec * (swingVal / 100) * 0.5) : 0;
    const currentInterval = (stepSec + swingSec) * 1000;

    document.querySelectorAll(".perc-step-btn").forEach((b, idx) => {
      b.classList.toggle("active-playhead", idx === percState.currentStep);
    });
    document.querySelectorAll(".perc-ov-step").forEach(s => s.classList.remove("active-step"));
    Object.keys(percState.voices).forEach(k => {
      const el = document.getElementById("perc_ov_" + k + "_" + percState.currentStep);
      if (el) el.classList.add("active-step");
    });

    const beatNum = Math.floor(percState.currentStep / 4) + 1;
    const subNum = (percState.currentStep % 4) + 1;
    const badge = document.getElementById("percBeatBadge");
    if (badge) badge.textContent = beatNum + "." + subNum + " (" + masterClock.timeSignature + ")";

    const hasSolo = Object.values(percState.voices).some(v => v.solo);
    const now = ctx.currentTime;
    const isDownbeat = (percState.currentStep % 4 === 0);
    const accentMultiplier = isDownbeat ? 1.4 : 1.0;

    const jitterMs = percState.overarching.chaosJitter.val;
    const jitterSec = (Math.random() - 0.5) * (jitterMs / 1000);
    const triggerT = Math.max(now, now + jitterSec);

    Object.keys(percState.voices).forEach(k => {
      const v = percState.voices[k];
      if (v.mute) return;
      if (hasSolo && !v.solo) return;

      const isHit = v.steps[percState.currentStep];
      if (isHit) {
        triggerDrumVoice(k, isHit * accentMultiplier, triggerT);
      }
    });

    percState.currentStep = (percState.currentStep + 1) % 16;
    percState.timerId = setTimeout(stepClock, Math.max(15, currentInterval));
  }

  stepClock();
}

function stopPercEngineClock() {
  if (percState.timerId) {
    clearTimeout(percState.timerId);
    percState.timerId = null;
  }
  document.querySelectorAll(".perc-step-btn").forEach(b => b.classList.remove("active-playhead"));
  document.querySelectorAll(".perc-ov-step").forEach(s => s.classList.remove("active-step"));
}

function setupPercControls() {
  const chk = document.getElementById("perc_enabled");
  const badge = document.getElementById("perc_badge");

  if (chk) {
    chk.addEventListener("change", () => {
      percState.enabled = chk.checked;
      if (badge) {
        badge.style.background = percState.enabled ? "#2ed573" : "transparent";
        badge.style.color = percState.enabled ? "#05070d" : "var(--dim)";
      }
      if (percState.enabled) {
        ensureAudioActive();
        startPercEngineClock();
      } else {
        stopPercEngineClock();
      }
    });
  }

  // Master Clock controls in Top Row
  const bpmInp = document.getElementById("globalBpmInput");
  const meterSel = document.getElementById("globalMeterSelect");

  if (bpmInp) {
    bpmInp.addEventListener("input", () => {
      const val = parseInt(bpmInp.value, 10);
      if (!isNaN(val) && val >= 30 && val <= 300) {
        masterClock.bpm = val;
        const arpBpm = document.getElementById("arpBpm");
        const vArpBpm = document.getElementById("v_arpBpm");
        if (arpBpm) arpBpm.value = val;
        if (vArpBpm) vArpBpm.textContent = val;
        if (arpState) arpState.bpm = val;
      }
    });
  }

  if (meterSel) {
    meterSel.addEventListener("change", () => {
      masterClock.timeSignature = meterSel.value;
      const parts = meterSel.value.split("/");
      masterClock.beatsPerBar = parseInt(parts[0], 10) || 4;
      masterClock.beatUnit = parseInt(parts[1], 10) || 4;
    });
  }

  // Voice Selector Tabs
  document.querySelectorAll(".perc-voice-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".perc-voice-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      percState.activeVoice = tab.dataset.voice;
      renderPercVoiceUI();
    });
  });

  // Mute & Solo Buttons
  const muteBtn = document.getElementById("btnVoiceMute");
  const soloBtn = document.getElementById("btnVoiceSolo");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      const v = percState.voices[percState.activeVoice];
      if (!v) return;
      v.mute = !v.mute;
      renderPercVoiceUI();
    });
  }
  if (soloBtn) {
    soloBtn.addEventListener("click", () => {
      const v = percState.voices[percState.activeVoice];
      if (!v) return;
      v.solo = !v.solo;
      renderPercVoiceUI();
    });
  }

  // Voice Volume Slider
  const vVol = document.getElementById("p_voice_vol");
  if (vVol) {
    vVol.addEventListener("input", () => {
      const v = percState.voices[percState.activeVoice];
      if (v) v.vol = parseInt(vVol.value, 10) / 100;
    });
  }

  // Landscape Preset Buttons
  document.querySelectorAll(".perc-landscape-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".perc-landscape-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyLandscapePreset(btn.dataset.landscape);
    });
  });

  // Smart Auto-Compose All
  const smartBtn = document.getElementById("btnPercSmartCompose");
  if (smartBtn) {
    smartBtn.addEventListener("click", () => {
      const keys = Object.keys(percState.voices);
      keys.forEach(k => {
        const v = percState.voices[k];
        const suggs = v.suggestions || [];
        if (suggs.length > 0) {
          const randS = suggs[Math.floor(Math.random() * suggs.length)];
          v.steps = [...randS.pat];
        }
      });
      renderPercVoiceUI();
    });
  }

  const lfoSyncSel = document.getElementById("percLfoSyncSelect");
  if (lfoSyncSel) {
    lfoSyncSel.addEventListener("change", () => {
      percState.lfoSync = lfoSyncSel.value;
    });
  }

  const masterVol = document.getElementById("p_perc_vol");
  const masterVolV = document.getElementById("v_perc_vol");
  if (masterVol) {
    masterVol.addEventListener("input", () => {
      percState.volume = parseInt(masterVol.value, 10) / 100;
      if (masterVolV) masterVolV.textContent = masterVol.value + " %";
      if (percState.bus) percState.bus.gain.value = percState.volume;
    });
  }

  renderPercVoiceUI();
  renderPercOverarchingParams();
}

function setupArpControls() {
  const arpChk = document.getElementById("arp_enabled");
  const arpBadge = document.getElementById("arp_badge");
  const arpLatchBtn = document.getElementById("arp_latch_btn");
  const arpBpmInp = document.getElementById("arpBpm");
  const arpGateInp = document.getElementById("arpGate");
  const arpSwingInp = document.getElementById("arpSwing");

  if (arpChk) {
    arpChk.addEventListener("change", () => {
      arpState.enabled = arpChk.checked;
      if (arpBadge) {
        arpBadge.style.background = arpState.enabled ? "#ffc46b" : "transparent";
        arpBadge.style.color = arpState.enabled ? "#05070d" : "var(--dim)";
        arpBadge.style.borderColor = arpState.enabled ? "#ffc46b" : "var(--rule)";
      }
      if (!arpState.enabled) {
        stopArpClock();
        panicSynth(activeSynthIdx);
      }
      updateArpActiveNotesHint();
      syncKeys();
    });
  }

  if (arpLatchBtn) {
    arpLatchBtn.addEventListener("click", () => {
      arpState.latch = !arpState.latch;
      arpLatchBtn.classList.toggle("active", arpState.latch);
      if (!arpState.latch && arpState.heldKeys.size === 0) {
        arpState.latchedKeys = [];
        stopArpClock();
      }
      updateArpActiveNotesHint();
      syncKeys();
    });
  }

  document.querySelectorAll(".arp-mode-btn[data-dir]").forEach(btn => {
    btn.addEventListener("click", () => {
      arpState.direction = btn.dataset.dir;
      document.querySelectorAll(".arp-mode-btn[data-dir]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  document.querySelectorAll(".arp-div-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      arpState.division = btn.dataset.div;
      document.querySelectorAll(".arp-div-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  document.querySelectorAll(".arp-oct-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      arpState.octaves = parseInt(btn.dataset.oct, 10);
      document.querySelectorAll(".arp-oct-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  if (arpBpmInp) {
    arpBpmInp.addEventListener("input", () => {
      arpState.bpm = parseInt(arpBpmInp.value, 10);
      document.getElementById("v_arpBpm").textContent = arpState.bpm;
    });
  }

  if (arpGateInp) {
    arpGateInp.addEventListener("input", () => {
      arpState.gate = parseInt(arpGateInp.value, 10) / 100;
      document.getElementById("v_arpGate").textContent = Math.round(arpState.gate * 100) + " %";
    });
  }

  if (arpSwingInp) {
    arpSwingInp.addEventListener("input", () => {
      arpState.swing = parseInt(arpSwingInp.value, 10) / 100;
      document.getElementById("v_arpSwing").textContent = Math.round(arpState.swing * 100) + " %";
    });
  }

  document.querySelectorAll(".arp-pre-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const patKey = btn.dataset.pattern;
      if (ARP_PRESETS[patKey]) {
        arpState.steps = ARP_PRESETS[patKey]();
        renderArpMatrix();
      }
    });
  });

  renderArpMatrix();
}

function syncArpUI() {
  const arpChk = document.getElementById("arp_enabled");
  const arpBadge = document.getElementById("arp_badge");
  const arpLatchBtn = document.getElementById("arp_latch_btn");
  const arpBpmInp = document.getElementById("arpBpm");
  const arpGateInp = document.getElementById("arpGate");
  const arpSwingInp = document.getElementById("arpSwing");

  if (arpChk) {
    arpChk.checked = arpState.enabled;
    if (arpBadge) {
      arpBadge.style.background = arpState.enabled ? "#ffc46b" : "transparent";
      arpBadge.style.color = arpState.enabled ? "#05070d" : "var(--dim)";
      arpBadge.style.borderColor = arpState.enabled ? "#ffc46b" : "var(--rule)";
    }
  }

  if (arpLatchBtn) arpLatchBtn.classList.toggle("active", arpState.latch);

  document.querySelectorAll(".arp-mode-btn[data-dir]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.dir === arpState.direction);
  });

  document.querySelectorAll(".arp-div-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.div === arpState.division);
  });

  document.querySelectorAll(".arp-oct-btn").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.oct, 10) === arpState.octaves);
  });

  if (arpBpmInp) {
    arpBpmInp.value = arpState.bpm;
    document.getElementById("v_arpBpm").textContent = arpState.bpm;
  }

  if (arpGateInp) {
    arpGateInp.value = Math.round(arpState.gate * 100);
    document.getElementById("v_arpGate").textContent = Math.round(arpState.gate * 100) + " %";
  }

  if (arpSwingInp) {
    arpSwingInp.value = Math.round(arpState.swing * 100);
    document.getElementById("v_arpSwing").textContent = Math.round(arpState.swing * 100) + " %";
  }

  renderArpMatrix();
  updateArpActiveNotesHint();
}
