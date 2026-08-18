"use strict";

/* ============================================================
   UNIFIED MULTI-HANDLE PARAMETER CONTROL & KNOB LOGIC
   ============================================================ */
function getParamBounds(param) {
  if (param === "customParam") {
    return synthInstances[activeSynthIdx].def.customParam;
  }
  return PARAM_BOUNDS[param];
}

function valToPct(param, val) {
  const b = getParamBounds(param);
  const span = b.max - b.min;
  if (span <= 0) return 0;
  const clamped = Math.max(b.min, Math.min(b.max, val));
  return (clamped - b.min) / span;
}

function pctToVal(param, pct) {
  const b = getParamBounds(param);
  const clamped = Math.max(0, Math.min(1, pct));
  const raw = b.min + clamped * (b.max - b.min);
  if (b.step) {
    const inv = 1 / b.step;
    return Math.round(raw * inv) / inv;
  }
  return raw;
}

function updateKnobVisual(container, val) {
  const arc = container.querySelector(".knob-arc");
  const pointer = container.querySelector(".knob-pointer");
  const num = container.querySelector(".knob-val");

  num.textContent = Math.round(val);
  const angle = -135 + (val / 100) * 270;
  const rad = (angle - 90) * Math.PI / 180;
  const cx = 16, cy = 16, r = 11;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  pointer.setAttribute("x2", x);
  pointer.setAttribute("y2", y);

  const startAngle = -135 - 90;
  const startRad = startAngle * Math.PI / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const largeArc = (val / 100) * 270 > 180 ? 1 : 0;
  arc.setAttribute("d", `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`);
}

function updateParamRowVisual(param) {
  const inst = synthInstances[activeSynthIdx];
  const osc = inst.oscillators[param];
  const block = document.getElementById("block_" + param);
  const spanEl = document.getElementById("span_" + param);
  const handleA = document.getElementById("handle_a_" + param);
  const handleB = document.getElementById("handle_b_" + param);
  const thumb = document.getElementById("thumb_" + param);
  const knob = document.getElementById("knob_" + param);
  const chk = document.getElementById("osc_en_" + param);
  const valEl = document.getElementById(param === "customParam" ? "v_custom" : ("v_" + param));

  if (!block) return;

  if (chk) chk.checked = osc.enabled;
  block.classList.toggle("osc-active", osc.enabled);

  const pctA = Math.max(0, Math.min(1, valToPct(param, osc.min)));
  const pctB = Math.max(0, Math.min(1, valToPct(param, osc.max)));
  const curVal = (param === "customParam") ? inst.customVal : inst.params[param];
  const pctThumb = Math.max(0, Math.min(1, valToPct(param, curVal)));

  if (handleA) handleA.style.left = (pctA * 100).toFixed(2) + "%";
  if (handleB) handleB.style.left = (pctB * 100).toFixed(2) + "%";
  if (thumb) thumb.style.left = (pctThumb * 100).toFixed(2) + "%";

  if (spanEl) {
    const minP = Math.min(pctA, pctB);
    const maxP = Math.max(pctA, pctB);
    spanEl.style.left = (minP * 100).toFixed(2) + "%";
    spanEl.style.width = ((maxP - minP) * 100).toFixed(2) + "%";
  }

  if (knob) updateKnobVisual(knob, osc.speed);
  if (valEl) {
    if (param === "customParam") {
      valEl.textContent = curVal.toFixed(2);
    } else if (PARAMS_MAP[param]) {
      valEl.textContent = PARAMS_MAP[param].fmt(curVal);
    }
  }
}

function setupUnifiedParamControls() {
  OSC_PARAM_KEYS.forEach(param => {
    const block = document.getElementById("block_" + param);
    const trackArea = document.getElementById("trackarea_" + param);
    const handleA = document.getElementById("handle_a_" + param);
    const handleB = document.getElementById("handle_b_" + param);
    const thumb = document.getElementById("thumb_" + param);
    const knob = document.getElementById("knob_" + param);
    const chk = document.getElementById("osc_en_" + param);

    if (chk) {
      chk.addEventListener("change", () => {
        const inst = synthInstances[activeSynthIdx];
        inst.oscillators[param].enabled = chk.checked;
        updateParamRowVisual(param);
      });
    }

    if (knob) {
      let isDraggingKnob = false, startY = 0, startSpeed = 0;
      knob.addEventListener("pointerdown", e => {
        e.preventDefault();
        isDraggingKnob = true;
        startY = e.clientY;
        const inst = synthInstances[activeSynthIdx];
        startSpeed = inst.oscillators[param].speed;
        knob.setPointerCapture(e.pointerId);
      });

      knob.addEventListener("pointermove", e => {
        if (!isDraggingKnob) return;
        const dy = startY - e.clientY;
        const inst = synthInstances[activeSynthIdx];
        const nextSpeed = Math.max(0, Math.min(100, startSpeed + dy * 0.75));
        inst.oscillators[param].speed = nextSpeed;
        updateKnobVisual(knob, nextSpeed);
      });

      const onKnobUp = e => {
        if (!isDraggingKnob) return;
        isDraggingKnob = false;
        try { knob.releasePointerCapture(e.pointerId); } catch(err){}
      };
      knob.addEventListener("pointerup", onKnobUp);
      knob.addEventListener("pointercancel", onKnobUp);

      knob.addEventListener("wheel", e => {
        e.preventDefault();
        const inst = synthInstances[activeSynthIdx];
        const osc = inst.oscillators[param];
        osc.speed = Math.max(0, Math.min(100, osc.speed - Math.sign(e.deltaY) * 3));
        updateKnobVisual(knob, osc.speed);
      }, { passive: false });
    }

    // Handles & Track Dragging
    let activeDragTarget = null; // 'a', 'b', 'thumb', 'track'

    function getTrackPct(e) {
      const rect = trackArea.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      return rect.width > 0 ? (x / rect.width) : 0;
    }

    function onPointerMoveTrack(e) {
      if (!activeDragTarget) return;
      const pct = getTrackPct(e);
      const val = pctToVal(param, pct);
      const inst = synthInstances[activeSynthIdx];

      if (activeDragTarget === "a") {
        inst.oscillators[param].min = val;
      } else if (activeDragTarget === "b") {
        inst.oscillators[param].max = val;
      } else if (activeDragTarget === "thumb" || activeDragTarget === "track") {
        if (param === "customParam") {
          inst.customVal = val;
        } else {
          inst.params[param] = val;
          applyParamChange(param);
        }
      }
      updateParamRowVisual(param);
    }

    function onPointerUpTrack(e) {
      if (activeDragTarget) {
        if (handleA) handleA.classList.remove("dragging");
        if (handleB) handleB.classList.remove("dragging");
        if (thumb) thumb.classList.remove("dragging");
        try { trackArea.releasePointerCapture(e.pointerId); } catch(err){}
        activeDragTarget = null;
      }
    }

    if (trackArea) {
      trackArea.addEventListener("pointerdown", e => {
        e.preventDefault();
        trackArea.setPointerCapture(e.pointerId);

        if (e.target.closest(".handle-a")) {
          activeDragTarget = "a";
          if (handleA) handleA.classList.add("dragging");
        } else if (e.target.closest(".handle-b")) {
          activeDragTarget = "b";
          if (handleB) handleB.classList.add("dragging");
        } else if (e.target.closest(".handle-thumb")) {
          activeDragTarget = "thumb";
          if (thumb) thumb.classList.add("dragging");
        } else {
          const pct = getTrackPct(e);
          const inst = synthInstances[activeSynthIdx];
          const pctA = valToPct(param, inst.oscillators[param].min);
          const pctB = valToPct(param, inst.oscillators[param].max);
          const distA = Math.abs(pct - pctA);
          const distB = Math.abs(pct - pctB);

          if (distA < 0.08 && distA <= distB) {
            activeDragTarget = "a";
            inst.oscillators[param].min = pctToVal(param, pct);
            if (handleA) handleA.classList.add("dragging");
          } else if (distB < 0.08) {
            activeDragTarget = "b";
            inst.oscillators[param].max = pctToVal(param, pct);
            if (handleB) handleB.classList.add("dragging");
          } else {
            activeDragTarget = "thumb";
            const val = pctToVal(param, pct);
            if (param === "customParam") {
              inst.customVal = val;
            } else {
              inst.params[param] = val;
              applyParamChange(param);
            }
            if (thumb) thumb.classList.add("dragging");
          }
        }
        updateParamRowVisual(param);
      });

      trackArea.addEventListener("pointermove", onPointerMoveTrack);
      trackArea.addEventListener("pointerup", onPointerUpTrack);
      trackArea.addEventListener("pointercancel", onPointerUpTrack);
    }
  });
}

function syncOscillatorsUI() {
  OSC_PARAM_KEYS.forEach(param => updateParamRowVisual(param));
}


/* ============================================================
   Parameter Regler Verwaltung & Vibrato UI
   ============================================================ */
const PARAMS_MAP = {
  ratio: { id: "block_ratio", fmt: v => v.toFixed(3), path: "ratio" },
  I0: { id: "block_I0", fmt: v => v.toFixed(2), path: "I0" },
  dI: { id: "block_dI", fmt: v => v.toFixed(2), path: "dI" },
  lfo: { id: "block_lfo", fmt: v => v.toFixed(3) + " Hz", path: "lfo" },
  vibDepth: { id: "block_vibDepth", fmt: v => v.toFixed(2) + " Hz", path: "vibDepth" },
  atk: { id: "atk", fmt: v => v.toFixed(3) + " s", path: "atk" },
  rel: { id: "rel", fmt: v => v.toFixed(2) + " s", path: "rel" },
  vol: { id: "synthVol", fmt: v => Math.round(v * 100) + " %", path: "vol" }
};

function syncSliderValues() {
  const inst = synthInstances[activeSynthIdx];
  ["atk", "rel", "vol"].forEach(k => {
    const cfg = PARAMS_MAP[k];
    const inp = document.getElementById(cfg.id);
    const val = inst.params[cfg.path];
    if (inp) inp.value = val;
    const out = document.getElementById("v_" + k);
    if (out) out.textContent = cfg.fmt(val);
  });

  // Vibrato UI Synchronisation
  const vibChk = document.getElementById("vib_enabled");
  const vibBadge = document.getElementById("vib_badge");
  if (vibChk) {
    vibChk.checked = !!inst.vibrato.enabled;
    if (vibBadge) {
      vibBadge.style.background = inst.vibrato.enabled ? "#a29bfe" : "transparent";
      vibBadge.style.color = inst.vibrato.enabled ? "#05070d" : "var(--dim)";
    }
  }

  document.querySelectorAll(".vib-shape-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.shape === (inst.vibrato.shape || "sine"));
  });

  const vibDelayInp = document.getElementById("vibDelay");
  if (vibDelayInp) {
    vibDelayInp.value = inst.vibrato.delay ?? 0.25;
    document.getElementById("v_vibDelay").textContent = (inst.vibrato.delay ?? 0.25).toFixed(2) + " s";
  }

  const vibHumanInp = document.getElementById("vibHuman");
  if (vibHumanInp) {
    vibHumanInp.value = inst.vibrato.humanize ?? 25;
    document.getElementById("v_vibHuman").textContent = Math.round(inst.vibrato.humanize ?? 25) + " %";
  }

  const vibKnobVal = document.querySelector("#knob_vibDepth .knob-val");
  if (vibKnobVal) vibKnobVal.textContent = (inst.vibrato.rate ?? 5.2).toFixed(1) + " Hz";

  document.getElementById("wet").value = GLOBAL.wet;
  document.getElementById("v_wet").textContent = Math.round(GLOBAL.wet * 100) + " %";
  document.getElementById("master").value = GLOBAL.master;
  document.getElementById("v_master").textContent = Math.round(GLOBAL.master * 100) + " %";
}

function applyParamChange(k, synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  const val = inst.params[k];

  if (!ctx) return;
  const now = ctx.currentTime;

  if (k === "vol") inst.bus.gain.setTargetAtTime(val, now, 0.05);
  if (k === "lfo" && inst.lfoOsc) inst.lfoOsc.frequency.setTargetAtTime(val, now, 0.05);
  if (k === "vibDepth") {
    inst.vibrato.depth = val;
    for (const vo of inst.voices.values()) {
      if (vo.vibGainNode) vo.vibGainNode.gain.setTargetAtTime(val, now, 0.04);
    }
  }
  if (k === "ratio") {
    for (const vo of inst.voices.values()) {
      vo.fm = vo.f * inst.params.ratio;
      if (vo.mod) vo.mod.frequency.setTargetAtTime(vo.fm, now, 0.04);
      if (vo.modG) vo.modG.gain.setTargetAtTime(inst.params.I0 * vo.fm, now, 0.04);
      if (vo.lfoG) vo.lfoG.gain.setTargetAtTime(inst.params.dI * vo.fm, now, 0.04);
    }
  }
  if (k === "I0") {
    for (const vo of inst.voices.values()) {
      if (vo.modG) vo.modG.gain.setTargetAtTime(inst.params.I0 * (vo.fm || vo.f * inst.params.ratio), now, 0.05);
    }
  }
  if (k === "dI") {
    for (const vo of inst.voices.values()) {
      if (vo.lfoG) vo.lfoG.gain.setTargetAtTime(inst.params.dI * (vo.fm || vo.f * inst.params.ratio), now, 0.05);
    }
  }
}

// Vibrato UI Listener
const vibChk = document.getElementById("vib_enabled");
if (vibChk) {
  vibChk.addEventListener("change", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.vibrato.enabled = vibChk.checked;
    const vibBadge = document.getElementById("vib_badge");
    if (vibBadge) {
      vibBadge.style.background = inst.vibrato.enabled ? "#a29bfe" : "transparent";
      vibBadge.style.color = inst.vibrato.enabled ? "#05070d" : "var(--dim)";
    }
  });
}

document.querySelectorAll(".vib-shape-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.vibrato.shape = btn.dataset.shape;
    document.querySelectorAll(".vib-shape-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const vibDelayInp = document.getElementById("vibDelay");
if (vibDelayInp) {
  vibDelayInp.addEventListener("input", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.vibrato.delay = parseFloat(vibDelayInp.value);
    document.getElementById("v_vibDelay").textContent = inst.vibrato.delay.toFixed(2) + " s";
  });
}

const vibHumanInp = document.getElementById("vibHuman");
if (vibHumanInp) {
  vibHumanInp.addEventListener("input", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.vibrato.humanize = parseFloat(vibHumanInp.value);
    document.getElementById("v_vibHuman").textContent = Math.round(inst.vibrato.humanize) + " %";
  });
}

["atk", "rel", "vol"].forEach(k => {
  const cfg = PARAMS_MAP[k];
  const inp = document.getElementById(cfg.id);
  if (!inp) return;
  inp.addEventListener("input", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.params[cfg.path] = parseFloat(inp.value);
    const out = document.getElementById("v_" + k);
    if (out) out.textContent = cfg.fmt(inst.params[cfg.path]);
    applyParamChange(cfg.path);
  });
});

document.getElementById("wet").addEventListener("input", e => {
  GLOBAL.wet = parseFloat(e.target.value);
  document.getElementById("v_wet").textContent = Math.round(GLOBAL.wet * 100) + " %";
  if (ctx) {
    wetGain.gain.setTargetAtTime(GLOBAL.wet, ctx.currentTime, 0.08);
    dryGain.gain.setTargetAtTime(1 - GLOBAL.wet * 0.5, ctx.currentTime, 0.08);
  }
});

document.getElementById("master").addEventListener("input", e => {
  GLOBAL.master = parseFloat(e.target.value);
  document.getElementById("v_master").textContent = Math.round(GLOBAL.master * 100) + " %";
  if (ctx) masterGain.gain.setTargetAtTime(GLOBAL.master, ctx.currentTime, 0.05);
});

const latchBtn = document.getElementById("latch");
latchBtn.addEventListener("click", () => {
  const inst = synthInstances[activeSynthIdx];
  inst.params.latch = !inst.params.latch;
  latchBtn.setAttribute("aria-pressed", inst.params.latch);
  if (!inst.params.latch) panicSynth(activeSynthIdx);
});

document.getElementById("synthPanic").addEventListener("click", () => panicSynth(activeSynthIdx));
document.getElementById("globalPanic").addEventListener("click", panicAll);

function updateOctaveUI() {
  const inst = synthInstances[activeSynthIdx];
  if (!inst) return;
  const oct = inst.params.oct;
  const str = (oct > 0 ? "+" : "") + oct;

  const octlabel = document.getElementById("octlabel");
  if (octlabel) octlabel.textContent = str;

  const kbOctVal = document.getElementById("kbOctVal");
  if (kbOctVal) kbOctVal.textContent = str;

  const pips = document.querySelectorAll("#kbOctPips .oct-pip");
  pips.forEach(p => {
    const pOct = parseInt(p.getAttribute("data-oct"), 10);
    p.classList.toggle("active", pOct === oct);
  });

  // Dynamische Tonhöhen-Beschriftung auf den Klaviertasten (C3, C4, C5...)
  const baseOct = 4 + oct;
  if (typeof keyEls !== "undefined" && keyEls.length > 0) {
    keyEls.forEach((kEl, i) => {
      const ntSpan = kEl.querySelector(".nt");
      if (ntSpan) {
        const noteName = NOTES[i];
        const isTopC = (i === 12);
        const displayOct = isTopC ? (baseOct + 1) : baseOct;
        ntSpan.textContent = `${noteName}${displayOct}`;
      }
    });
  }

  // Latch-Status im unteren Element synchronisieren
  const kbLatchToggle = document.getElementById("kbLatchToggle");
  if (kbLatchToggle) {
    kbLatchToggle.classList.toggle("active", !!inst.params.latch);
    kbLatchToggle.textContent = inst.params.latch ? "LATCH: AN" : "LATCH: AUS";
  }
}

function setOctave(d) {
  const inst = synthInstances[activeSynthIdx];
  const n = Math.max(-3, Math.min(3, inst.params.oct + d));
  if (n === inst.params.oct) return;
  inst.params.oct = n;
  updateOctaveUI();

  if (!ctx) return;
  const now = ctx.currentTime;
  for (const [sem, v] of inst.voices) {
    v.f = getFreq(sem, inst.params.oct);
    v.fm = v.f * inst.params.ratio;
    if (v.car) v.car.frequency.setTargetAtTime(v.f, now, 0.12);
    if (v.car1) v.car1.frequency.setTargetAtTime(v.f, now, 0.12);
    if (v.car2) v.car2.frequency.setTargetAtTime(v.f, now, 0.12);
    if (v.car3) v.car3.frequency.setTargetAtTime(v.f, now, 0.12);
    if (v.carR) v.carR.frequency.setTargetAtTime(v.f * 1.003, now, 0.12);
    if (v.carSub) v.carSub.frequency.setTargetAtTime(v.f * 0.5, now, 0.12);
    if (v.carHigh) v.carHigh.frequency.setTargetAtTime(v.f * 2.0, now, 0.12);
    if (v.clusterCars) v.clusterCars.forEach((c, idx) => { try { c.frequency.setTargetAtTime(v.f + (idx - 2) * 0.8, now, 0.12); } catch(e){} });
    if (v.mod) v.mod.frequency.setTargetAtTime(v.fm, now, 0.12);
    if (v.modG) v.modG.gain.setTargetAtTime(inst.params.I0 * v.fm, now, 0.12);
    if (v.lfoG) v.lfoG.gain.setTargetAtTime(inst.params.dI * v.fm, now, 0.12);
  }
}

// Rack Spielhilfen Octave Buttons
document.getElementById("octup").addEventListener("click", () => setOctave(+1));
document.getElementById("octdn").addEventListener("click", () => setOctave(-1));

// Unteres Element (Klaviatur) Octave Buttons
const kbOctDn = document.getElementById("kbOctDn");
const kbOctUp = document.getElementById("kbOctUp");
const kbOctRst = document.getElementById("kbOctRst");
const flankOctDn = document.getElementById("flankOctDn");
const flankOctUp = document.getElementById("flankOctUp");
const kbLatchToggle = document.getElementById("kbLatchToggle");

if (kbOctDn) kbOctDn.addEventListener("click", () => setOctave(-1));
if (kbOctUp) kbOctUp.addEventListener("click", () => setOctave(+1));
if (kbOctRst) kbOctRst.addEventListener("click", () => {
  const inst = synthInstances[activeSynthIdx];
  setOctave(-inst.params.oct);
});
if (flankOctDn) flankOctDn.addEventListener("click", () => setOctave(-1));
if (flankOctUp) flankOctUp.addEventListener("click", () => setOctave(+1));

if (kbLatchToggle) {
  kbLatchToggle.addEventListener("click", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.params.latch = !inst.params.latch;
    latchBtn.setAttribute("aria-pressed", inst.params.latch);
    updateOctaveUI();
    if (!inst.params.latch) panicSynth(activeSynthIdx);
  });
}
