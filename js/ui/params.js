"use strict";

/* ============================================================
   24-Parameter Matrix & Cluster UI Generator (PLAN 3)
   ============================================================ */
function getParamBounds(param) {
  if (param === "custom_math" || param === "customParam") {
    const inst = synthInstances[activeSynthIdx];
    return inst.def.customParam || { min: 0, max: 10, step: 0.01 };
  }
  return PARAM_BOUNDS[param] || { min: 0, max: 10, step: 0.01 };
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
  if (!arc || !pointer || !num) return;

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
  arc.setAttribute("d", "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 1 " + x + " " + y);
}

function updateParamRowVisual(param) {
  const inst = synthInstances[activeSynthIdx];
  const osc = inst.oscillators[param];
  if (!osc) return;

  const block = document.getElementById("block_" + param);
  const spanEl = document.getElementById("span_" + param);
  const handleA = document.getElementById("handle_a_" + param);
  const handleB = document.getElementById("handle_b_" + param);
  const thumb = document.getElementById("thumb_" + param);
  const knob = document.getElementById("knob_" + param);
  const chk = document.getElementById("osc_en_" + param);
  const valEl = document.getElementById("v_" + param);

  if (!block) return;

  if (chk) chk.checked = osc.enabled;
  block.classList.toggle("osc-active", osc.enabled);

  const pctA = Math.max(0, Math.min(1, valToPct(param, osc.min)));
  const pctB = Math.max(0, Math.min(1, valToPct(param, osc.max)));
  const curVal = inst.params[param] ?? (PARAM_BOUNDS[param] ? PARAM_BOUNDS[param].min : 0);
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
    const b = PARAM_BOUNDS[param];
    valEl.textContent = b && b.fmt ? b.fmt(curVal) : curVal.toFixed(2);
  }
}

function buildUnifiedParamRowHTML(paramKey, pObj) {
  const b = PARAM_BOUNDS[paramKey] || { name: paramKey, fmt: v => v.toFixed(2) };
  const curVal = pObj.val ?? (b.min ?? 0);
  const dispVal = b.fmt ? b.fmt(curVal) : curVal.toFixed(2);

  return (
    '<div class="param-row-unified" id="block_' + paramKey + '" data-param="' + paramKey + '">' +
      '<div class="p-header">' +
        '<span class="p-name">' + (b.name || paramKey) + '</span>' +
        '<div class="p-right">' +
          '<span class="p-val" id="v_' + paramKey + '">' + dispVal + '</span>' +
          '<label class="osc-toggle-label" title="Oszillation An/Aus">' +
            '<input type="checkbox" id="osc_en_' + paramKey + '" class="osc-chk" data-param="' + paramKey + '">' +
            '<span class="osc-badge">~ OSC</span>' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="p-controls-row">' +
        '<div class="track-area" id="trackarea_' + paramKey + '" data-param="' + paramKey + '">' +
          '<div class="track-line"></div>' +
          '<div class="track-span" id="span_' + paramKey + '"></div>' +
          '<div class="handle handle-a" id="handle_a_' + paramKey + '" title="Start A"><span class="h-tag">A</span></div>' +
          '<div class="handle handle-b" id="handle_b_' + paramKey + '" title="Ende B"><span class="h-tag">B</span></div>' +
          '<div class="handle handle-thumb" id="thumb_' + paramKey + '" title="Wert ziehen"></div>' +
        '</div>' +
        '<div class="knob-mini-wrap" id="knob_' + paramKey + '" data-param="' + paramKey + '" title="Oszillations-Speed (0.01–10 Hz)">' +
          '<div class="knob-dial">' +
            '<svg class="knob-svg" viewBox="0 0 32 32">' +
              '<circle class="knob-bg" cx="16" cy="16" r="13" />' +
              '<path class="knob-arc" d="" />' +
              '<line class="knob-pointer" x1="16" y1="16" x2="16" y2="4" />' +
            '</svg>' +
          '</div>' +
          '<span class="knob-val">' + Math.round(pObj.osc ? pObj.osc.speed : 25) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function bindUnifiedParamRow(paramKey) {
  const block = document.getElementById("block_" + paramKey);
  const trackArea = document.getElementById("trackarea_" + paramKey);
  const handleA = document.getElementById("handle_a_" + paramKey);
  const handleB = document.getElementById("handle_b_" + paramKey);
  const thumb = document.getElementById("thumb_" + paramKey);
  const knob = document.getElementById("knob_" + paramKey);
  const chk = document.getElementById("osc_en_" + paramKey);

  if (!block || !trackArea) return;

  if (chk) {
    chk.addEventListener("change", () => {
      const inst = synthInstances[activeSynthIdx];
      if (inst.oscillators[paramKey]) {
        inst.oscillators[paramKey].enabled = chk.checked;
        updateParamRowVisual(paramKey);
      }
    });
  }

  if (knob) {
    let isDraggingKnob = false, startY = 0, startSpeed = 0;
    knob.addEventListener("pointerdown", e => {
      e.preventDefault();
      isDraggingKnob = true;
      startY = e.clientY;
      const inst = synthInstances[activeSynthIdx];
      startSpeed = inst.oscillators[paramKey] ? inst.oscillators[paramKey].speed : 25;
      knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", e => {
      if (!isDraggingKnob) return;
      const dy = startY - e.clientY;
      const inst = synthInstances[activeSynthIdx];
      if (inst.oscillators[paramKey]) {
        const nextSpeed = Math.max(0, Math.min(100, startSpeed + dy * 0.75));
        inst.oscillators[paramKey].speed = nextSpeed;
        updateKnobVisual(knob, nextSpeed);
      }
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
      if (inst.oscillators[paramKey]) {
        const osc = inst.oscillators[paramKey];
        osc.speed = Math.max(0, Math.min(100, osc.speed - Math.sign(e.deltaY) * 3));
        updateKnobVisual(knob, osc.speed);
      }
    }, { passive: false });
  }

  let activeDragTarget = null;

  function getTrackPct(e) {
    const rect = trackArea.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    return rect.width > 0 ? (x / rect.width) : 0;
  }

  function onPointerMoveTrack(e) {
    if (!activeDragTarget) return;
    const pct = getTrackPct(e);
    const val = pctToVal(paramKey, pct);
    const inst = synthInstances[activeSynthIdx];

    if (activeDragTarget === "a" && inst.oscillators[paramKey]) {
      inst.oscillators[paramKey].min = val;
    } else if (activeDragTarget === "b" && inst.oscillators[paramKey]) {
      inst.oscillators[paramKey].max = val;
    } else if (activeDragTarget === "thumb" || activeDragTarget === "track") {
      inst.params[paramKey] = val;
      if (paramKey === "custom_math" || paramKey === "customParam") {
        inst.customVal = val;
      }
      applyParamChange(paramKey);
    }
    updateParamRowVisual(paramKey);
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
      const osc = inst.oscillators[paramKey] || { min: 0, max: 10 };
      const pctA = valToPct(paramKey, osc.min);
      const pctB = valToPct(paramKey, osc.max);
      const distA = Math.abs(pct - pctA);
      const distB = Math.abs(pct - pctB);

      if (distA < 0.08 && distA <= distB) {
        activeDragTarget = "a";
        osc.min = pctToVal(paramKey, pct);
        if (handleA) handleA.classList.add("dragging");
      } else if (distB < 0.08) {
        activeDragTarget = "b";
        osc.max = pctToVal(paramKey, pct);
        if (handleB) handleB.classList.add("dragging");
      } else {
        activeDragTarget = "thumb";
        const val = pctToVal(paramKey, pct);
        inst.params[paramKey] = val;
        if (paramKey === "custom_math" || paramKey === "customParam") {
          inst.customVal = val;
        }
        applyParamChange(paramKey);
        if (thumb) thumb.classList.add("dragging");
      }
    }
    updateParamRowVisual(paramKey);
  });

  trackArea.addEventListener("pointermove", onPointerMoveTrack);
  trackArea.addEventListener("pointerup", onPointerUpTrack);
  trackArea.addEventListener("pointercancel", onPointerUpTrack);
}

function renderSynthParamRack() {
  const container = document.getElementById("synthParamsContainer");
  if (!container) return;

  const inst = synthInstances[activeSynthIdx];
  container.innerHTML = "";

  let keysToRender = [];
  if (activeParamCluster === "all") {
    keysToRender = OSC_PARAM_KEYS.filter(k => k !== "vibDepth");
  } else if (SYNTH_PARAM_CLUSTERS[activeParamCluster]) {
    keysToRender = SYNTH_PARAM_CLUSTERS[activeParamCluster].keys;
  } else {
    keysToRender = SYNTH_PARAM_CLUSTERS.operators.keys;
  }

  keysToRender.forEach(k => {
    const b = PARAM_BOUNDS[k] || { min: 0, max: 10 };
    const pObj = {
      val: inst.params[k] ?? b.min,
      osc: inst.oscillators[k] || { min: b.min, max: b.max, speed: 25 }
    };
    container.insertAdjacentHTML("beforeend", buildUnifiedParamRowHTML(k, pObj));
    bindUnifiedParamRow(k);
    updateParamRowVisual(k);
  });
}

function setupClusterTabs() {
  const tabBtns = document.querySelectorAll(".param-cluster-tab");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      activeParamCluster = btn.dataset.cluster;
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSynthParamRack();
    });
  });

  const randBtn = document.getElementById("btnRandomizeCluster");
  if (randBtn) {
    randBtn.addEventListener("click", () => {
      const inst = synthInstances[activeSynthIdx];
      let keys = [];
      if (activeParamCluster === "all") {
        keys = OSC_PARAM_KEYS.filter(k => k !== "vibDepth");
      } else if (SYNTH_PARAM_CLUSTERS[activeParamCluster]) {
        keys = SYNTH_PARAM_CLUSTERS[activeParamCluster].keys;
      }
      keys.forEach(k => {
        const b = PARAM_BOUNDS[k] || { min: 0, max: 10 };
        const randVal = b.min + Math.random() * (b.max - b.min);
        inst.params[k] = Math.round(randVal * 100) / 100;
        applyParamChange(k);
        updateParamRowVisual(k);
      });
    });
  }
}

function syncSliderValues() {
  const inst = synthInstances[activeSynthIdx];

  renderSynthParamRack();

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

  const vibRateInp = document.getElementById("vibRate");
  if (vibRateInp) {
    vibRateInp.value = inst.vibrato.rate ?? 5.2;
    const outRate = document.getElementById("v_vibRate");
    if (outRate) outRate.textContent = (inst.vibrato.rate ?? 5.2).toFixed(2) + " Hz";
  }

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

  const synthVolInp = document.getElementById("synthVol");
  if (synthVolInp) {
    synthVolInp.value = inst.params.vol;
    const vVol = document.getElementById("v_vol");
    if (vVol) vVol.textContent = Math.round(inst.params.vol * 100) + " %";
  }

  const wetInp = document.getElementById("wet");
  if (wetInp) {
    wetInp.value = GLOBAL.wet;
    document.getElementById("v_wet").textContent = Math.round(GLOBAL.wet * 100) + " %";
  }
  const masterInp = document.getElementById("master");
  if (masterInp) {
    masterInp.value = GLOBAL.master;
    document.getElementById("v_master").textContent = Math.round(GLOBAL.master * 100) + " %";
  }
}

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

const vibRateInp = document.getElementById("vibRate");
if (vibRateInp) {
  vibRateInp.addEventListener("input", () => {
    const inst = synthInstances[activeSynthIdx];
    const val = parseFloat(vibRateInp.value);
    inst.vibrato.rate = val;
    const outRate = document.getElementById("v_vibRate");
    if (outRate) outRate.textContent = val.toFixed(2) + " Hz";
    if (ctx) {
      const now = ctx.currentTime;
      for (const vo of inst.voices.values()) {
        if (vo.vibLfo) vo.vibLfo.frequency.setTargetAtTime(val, now, 0.03);
      }
    }
  });
}

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

const synthVolInp = document.getElementById("synthVol");
if (synthVolInp) {
  synthVolInp.addEventListener("input", () => {
    const inst = synthInstances[activeSynthIdx];
    inst.params.vol = parseFloat(synthVolInp.value);
    const vVol = document.getElementById("v_vol");
    if (vVol) vVol.textContent = Math.round(inst.params.vol * 100) + " %";
    if (inst.bus && ctx) {
      inst.bus.gain.setTargetAtTime(inst.params.vol, ctx.currentTime, 0.05);
    }
  });
}

const wetInp = document.getElementById("wet");
if (wetInp) {
  wetInp.addEventListener("input", () => {
    GLOBAL.wet = parseFloat(wetInp.value);
    document.getElementById("v_wet").textContent = Math.round(GLOBAL.wet * 100) + " %";
    if (ctx && wetGain && dryGain) {
      wetGain.gain.setTargetAtTime(GLOBAL.wet, ctx.currentTime, 0.05);
      dryGain.gain.setTargetAtTime(1 - GLOBAL.wet * 0.5, ctx.currentTime, 0.05);
    }
  });
}

const masterInp = document.getElementById("master");
if (masterInp) {
  masterInp.addEventListener("input", () => {
    GLOBAL.master = parseFloat(masterInp.value);
    document.getElementById("v_master").textContent = Math.round(GLOBAL.master * 100) + " %";
    if (ctx && masterGain) {
      masterGain.gain.setTargetAtTime(GLOBAL.master, ctx.currentTime, 0.05);
    }
  });
}

function updateOctaveUI() {
  const inst = synthInstances[activeSynthIdx];
  const oct = inst.params.oct || 0;
  const octValEl = document.getElementById("kbOctVal");
  if (octValEl) {
    octValEl.textContent = (oct >= 0 ? "+" : "") + oct;
    octValEl.style.color = oct === 0 ? "var(--dim)" : (oct > 0 ? "#ffc46b" : "#38c7ff");
  }

  const octaveOffsetBadge = document.getElementById("octaveOffsetBadge");
  if (octaveOffsetBadge) {
    octaveOffsetBadge.textContent = "OKT: " + (oct >= 0 ? "+" : "") + oct;
  }

  if (typeof keyEls !== "undefined" && Array.isArray(keyEls)) {
    keyEls.forEach((kEl, i) => {
      const ntSpan = kEl.querySelector(".nt");
      if (ntSpan) {
        const baseNote = NOTES[i];
        const octaveNum = 3 + oct;
        ntSpan.textContent = baseNote + octaveNum;
      }
    });
  }

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
    if (v.car) v.car.frequency.setTargetAtTime(v.f, now, 0.12);
  }
}

const octUp = document.getElementById("octup");
const octDn = document.getElementById("octdn");
if (octUp) octUp.addEventListener("click", () => setOctave(+1));
if (octDn) octDn.addEventListener("click", () => setOctave(-1));

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
    updateOctaveUI();
    if (!inst.params.latch && typeof panicSynth === "function") panicSynth(activeSynthIdx);
  });
}
