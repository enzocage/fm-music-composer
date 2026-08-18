"use strict";

/* ============================================================
   Animations- & Render-Schleife
   ============================================================ */
function renderFrame() {
  requestAnimationFrame(renderFrame);
  readColors();

  if (ctx) {
    const t = ctx.currentTime;
    const dt = Math.min(0.05, t - lastFrameT);
    lastFrameT = t;

    // Lorenz Integration
    const sigma = 10, rho = synthInstances[0].customVal || 28, beta = 8/3;
    const dx = sigma * (lorenzState.y - lorenzState.x) * dt * 4;
    const dy = (lorenzState.x * (rho - lorenzState.z) - lorenzState.y) * dt * 4;
    const dz = (lorenzState.x * lorenzState.y - beta * lorenzState.z) * dt * 4;
    lorenzState.x += dx; lorenzState.y += dy; lorenzState.z += dz;

    // LFOs
    synthInstances.forEach(inst => {
      inst.lfoPhase += 2 * Math.PI * inst.params.lfo * dt;
      if (inst.lfoPhase > Math.PI * 2) inst.lfoPhase -= Math.PI * 2;
    });

    // Auto-Oszillationen
    synthInstances.forEach((inst, sIdx) => {
      OSC_PARAM_KEYS.forEach(param => {
        const osc = inst.oscillators[param];
        if (!osc || !osc.enabled) return;

        const f_osc = 0.01 + Math.pow(osc.speed / 100, 2) * 4.5;
        osc.phase += 2 * Math.PI * f_osc * dt;
        if (osc.phase > Math.PI * 2) osc.phase -= Math.PI * 2;

        const sineVal = 0.5 * (1 + Math.sin(osc.phase));
        const val = osc.min + (osc.max - osc.min) * sineVal;

        if (param === "customParam") {
          inst.customVal = val;
          if (sIdx === activeSynthIdx) {
            updateParamRowVisual("customParam");
          }
        } else {
          inst.params[param] = val;
          if (sIdx === activeSynthIdx) {
            updateParamRowVisual(param);
          }
          if (sIdx === activeSynthIdx || inst.voices.size > 0) {
            applyParamChange(param, sIdx);
          }
        }
      });
    });

    
    // ------------------------------------------------------------
    // Percussion Multi-Voice & Overarching Parameter Oscillations
    // ------------------------------------------------------------
    if (typeof percState !== "undefined") {
      // 1. Per-Voice Parameter Oscillations
      Object.keys(percState.voices).forEach(vKey => {
        const vObj = percState.voices[vKey];
        if (!vObj || !vObj.params) return;
        Object.keys(vObj.params).forEach(pKey => {
          const pObj = vObj.params[pKey];
          if (!pObj.osc || !pObj.osc.enabled) return;

          const f_osc = 0.01 + Math.pow(pObj.osc.speed / 100, 2) * 4.5;
          pObj.osc.phase += 2 * Math.PI * f_osc * dt;
          if (pObj.osc.phase > Math.PI * 2) pObj.osc.phase -= Math.PI * 2;

          const sineVal = 0.5 * (1 + Math.sin(pObj.osc.phase));
          pObj.val = pObj.osc.min + (pObj.osc.max - pObj.osc.min) * sineVal;

          if (vKey === percState.activeVoice) {
            const thumb = document.getElementById("thumb_v_" + vKey + "_" + pKey);
            const vDisp = document.getElementById("v_v_" + vKey + "_" + pKey);
            if (thumb) {
              const pct = (pObj.val - pObj.min) / (pObj.max - pObj.min);
              thumb.style.left = (Math.max(0, Math.min(1, pct)) * 100) + "%";
            }
            if (vDisp) {
              vDisp.textContent = (typeof pObj.val === 'number' ? pObj.val.toFixed(pObj.unit === ' s' ? 2 : (pObj.unit === ' x' ? 1 : 0)) : pObj.val) + pObj.unit;
            }
          }
        });
      });

      // 2. Overarching Beat-Loop Modulators
      if (percState.overarching) {
        let lfoSpeedMultiplier = 1.0;
        if (percState.lfoSync !== "free") {
          const beatSec = 60 / masterClock.bpm;
          if (percState.lfoSync === "1_4") lfoSpeedMultiplier = 1 / (beatSec * 1);
          else if (percState.lfoSync === "1_2") lfoSpeedMultiplier = 1 / (beatSec * 2);
          else if (percState.lfoSync === "1_1") lfoSpeedMultiplier = 1 / (beatSec * 4);
          else if (percState.lfoSync === "2_1") lfoSpeedMultiplier = 1 / (beatSec * 8);
          else if (percState.lfoSync === "4_1") lfoSpeedMultiplier = 1 / (beatSec * 16);
        }

        Object.keys(percState.overarching).forEach(oaKey => {
          const oaObj = percState.overarching[oaKey];
          if (!oaObj.osc || !oaObj.osc.enabled) return;

          const baseSpeed = (percState.lfoSync === "free") ? (0.01 + Math.pow(oaObj.osc.speed / 100, 2) * 4.5) : (lfoSpeedMultiplier * (oaObj.osc.speed / 50));
          oaObj.osc.phase += 2 * Math.PI * baseSpeed * dt;
          if (oaObj.osc.phase > Math.PI * 2) oaObj.osc.phase -= Math.PI * 2;

          const sineVal = 0.5 * (1 + Math.sin(oaObj.osc.phase));
          oaObj.val = oaObj.osc.min + (oaObj.osc.max - oaObj.osc.min) * sineVal;

          const thumb = document.getElementById("thumb_oa_" + oaKey);
          const vDisp = document.getElementById("v_oa_" + oaKey);
          if (thumb) {
            const pct = (oaObj.val - oaObj.min) / (oaObj.max - oaObj.min);
            thumb.style.left = (Math.max(0, Math.min(1, pct)) * 100) + "%";
          }
          if (vDisp) {
            vDisp.textContent = (typeof oaObj.val === 'number' ? oaObj.val.toFixed(oaObj.unit === ' s' ? 2 : (oaObj.unit === ' x' ? 1 : 0)) : oaObj.val) + oaObj.unit;
          }

          // Apply live audio changes
          if (oaKey === "masterFilter" && percState.filterNode) {
            percState.filterNode.frequency.setValueAtTime(oaObj.val, ctx.currentTime);
          } else if (oaKey === "loopDrive" && percState.driveNode) {
            percState.driveNode.curve = makeDistortionCurve(oaObj.val);
          } else if (oaKey === "spaceSwell") {
            if (percState.wetGain) percState.wetGain.gain.setValueAtTime(oaObj.val / 100, ctx.currentTime);
            if (percState.dryGain) percState.dryGain.gain.setValueAtTime(1.0 - (oaObj.val / 100) * 0.4, ctx.currentTime);
          }
        });
      }
    }

    // Loop Layer Playheads & Pause Status
    if (loopStack.length > 0) {
      const nowMs = performance.now();
      loopStack.forEach(layer => {
        if (!layer.playheadEl || !layer.statusBadgeEl) return;
        if (!layer.isOn) {
          layer.playheadEl.style.left = "0%";
          layer.statusBadgeEl.textContent = "AUS";
          layer.statusBadgeEl.style.color = "var(--dimmer)";
          return;
        }

        const elapsed = nowMs - layer.phaseStartTime;
        if (layer.isPaused) {
          const totalPauseMs = Math.max(100, layer.phaseDuration);
          const progress = Math.min(1, Math.max(0, elapsed / totalPauseMs));
          const remSec = Math.max(0, (totalPauseMs - elapsed) / 1000);
          layer.playheadEl.style.left = (progress * 100).toFixed(1) + "%";
          layer.playheadEl.style.background = "#ff6b81";
          layer.statusBadgeEl.textContent = `⏸ ${remSec.toFixed(1)}s`;
          layer.statusBadgeEl.style.color = "#ff6b81";
        } else {
          const totalPlayMs = Math.max(50, layer.duration * 1000);
          const progress = Math.min(1, Math.max(0, elapsed / totalPlayMs));
          const curSec = Math.min(layer.duration, elapsed / 1000);
          layer.playheadEl.style.left = (progress * 100).toFixed(1) + "%";
          layer.playheadEl.style.background = "#ffffff";
          layer.statusBadgeEl.textContent = `▶ ${curSec.toFixed(1)}s`;
          layer.statusBadgeEl.style.color = layer.color;
        }
      });
    }

    if (recState.isRecording) {
      const recElapsed = (performance.now() - recState.startTime) / 1000;
      recStatusInfo.textContent = `REC: ${recElapsed.toFixed(1)} s ●`;
    }
  }

  const activeInst = synthInstances[activeSynthIdx];
  const currentI = Math.max(0, activeInst.params.I0 + activeInst.params.dI * Math.sin(activeInst.lfoPhase));

  if (activeInst.voices.size > 0) {
    let lo = null;
    for (const v of activeInst.voices.values()) {
      if (!lo || v.f < lo.f) lo = v;
    }
    activeInst.primary = { f: lo.f, fm: lo.fm || lo.f * activeInst.params.ratio };
  }

  drawWave(currentI, activeInst);
  drawFreq(currentI, activeInst);
  drawSpec(currentI, activeInst);
  drawOrb();

  document.getElementById("ilive").textContent = currentI.toFixed(2);
  document.getElementById("fclive").textContent = activeInst.primary.f.toFixed(1);
  document.getElementById("fmlive").textContent = (activeInst.primary.fm || activeInst.primary.f * activeInst.params.ratio).toFixed(1);
  document.getElementById("dlive").textContent = (currentI * (activeInst.primary.fm || activeInst.primary.f * activeInst.params.ratio)).toFixed(0);

  let totalVoices = 0;
  synthInstances.forEach(s => totalVoices += s.voices.size);
  document.getElementById("totVoices").textContent = totalVoices;

  updateLoopStatusFrame();
}

/* ============================================================
   UI Steuerung & Dynamisch erweiterbare Kopfzeile
   ============================================================ */
const expandHeaderBtn = document.getElementById("expandHeaderBtn");
const expandBtnTxt = document.getElementById("expandBtnTxt");
const hudCenterCapsule = document.getElementById("hudCenterCapsule");

const synthSelect = document.getElementById("synthSelect");
const microPillsBar = document.getElementById("microPillsBar");
const formulaInline = document.getElementById("formulaInline");
const drawerPillsA = document.getElementById("drawerPillsA");
const drawerPillsB = document.getElementById("drawerPillsB");
const drawerSynthName = document.getElementById("drawerSynthName");
const drawerSynthSub = document.getElementById("drawerSynthSub");
const drawerFormulaLatex = document.getElementById("drawerFormulaLatex");

const synthBadge = document.getElementById("synthBadge");
const badgeName = document.getElementById("badgeName");
const badgeVoices = document.getElementById("badgeVoices");
const activeSynthTag = document.getElementById("activeSynthTag");
// 7-Bank Definitionen & Universal Controller
const BANKS = [
  { id: "A", name: "Bank A: Exotik & Chaos (1–10)", color: "#ff4757", offset: 0 },
  { id: "B", name: "Bank B: Klassik & Labor (11–20)", color: "#38c7ff", offset: 10 },
  { id: "C", name: "Bank C: DX7 & 80s Icons (21–30)", color: "#00f2fe", offset: 20 },
  { id: "D", name: "Bank D: YM2612 & Arcade (31–40)", color: "#00c6fb", offset: 30 },
  { id: "E", name: "Bank E: Cinematic Drones (41–50)", color: "#8fd3f4", offset: 40 },
  { id: "F", name: "Bank F: World Acoustic (51–60)", color: "#ffd200", offset: 50 },
  { id: "G", name: "Bank G: Modular & FX (61–70)", color: "#ff007f", offset: 60 },
  { id: "H", name: "Bank H: Buchla & Organic Perc (71–80)", color: "#2ed573", offset: 70 },
  { id: "I", name: "Bank I: Microsound & Glitch FX (81–90)", color: "#a29bfe", offset: 80 },
  { id: "J", name: "Bank J: Generative Kinetic (91–100)", color: "#ffa502", offset: 90 }
];

let currentBankId = "A";

const bankButtons = {
  A: document.getElementById("btnBankA"),
  B: document.getElementById("btnBankB"),
  C: document.getElementById("btnBankC"),
  D: document.getElementById("btnBankD"),
  E: document.getElementById("btnBankE"),
  F: document.getElementById("btnBankF"),
  G: document.getElementById("btnBankG"),
  H: document.getElementById("btnBankH"),
  I: document.getElementById("btnBankI"),
  J: document.getElementById("btnBankJ")
};

const drawerPillContainers = {
  A: document.getElementById("drawerPillsA"),
  B: document.getElementById("drawerPillsB"),
  C: document.getElementById("drawerPillsC"),
  D: document.getElementById("drawerPillsD"),
  E: document.getElementById("drawerPillsE"),
  F: document.getElementById("drawerPillsF"),
  G: document.getElementById("drawerPillsG"),
  H: document.getElementById("drawerPillsH"),
  I: document.getElementById("drawerPillsI"),
  J: document.getElementById("drawerPillsJ")
};

function toggleHeaderExpand(forceState = null) {
  const isExpanded = forceState !== null ? forceState : !topHeader.classList.contains("expanded");
  topHeader.classList.toggle("expanded", isExpanded);
  topHeader.style.maxHeight = isExpanded ? "380px" : "";
  const expandBtnTxt = document.getElementById("expandBtnTxt");
  if (expandBtnTxt) expandBtnTxt.textContent = isExpanded ? "▴ KOMPAKT" : "▾ DETAILS";
  setTimeout(() => resize(), 100);
  setTimeout(() => resize(), 300);
}

expandHeaderBtn.addEventListener("click", () => toggleHeaderExpand());
hudCenterCapsule.addEventListener("click", () => toggleHeaderExpand());

// 70 Synths in Dropdown mit 7 Gruppen aufbauen
synthSelect.innerHTML = "";
BANKS.forEach(b => {
  const grp = document.createElement("optgroup");
  grp.label = b.name;
  for (let i = b.offset; i < b.offset + 10; i++) {
    const def = SYNTH_DEFS[i];
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `[${i + 1}] ${def.name}`;
    grp.appendChild(opt);
  }
  synthSelect.appendChild(grp);
});
synthSelect.addEventListener("change", e => selectSynth(parseInt(e.target.value, 10)));

// 10 dynamische Micro-Pills für primäre Leiste
const microPills = [];
microPillsBar.innerHTML = "";
for (let k = 0; k < 10; k++) {
  const p = document.createElement("button");
  p.type = "button";
  p.className = "micro-pill" + (k === 0 ? " active" : "");
  p.innerHTML = `<span class="p-num">${k === 9 ? '0' : (k + 1)}</span><span class="voice-dot"></span>`;
  p.addEventListener("click", () => {
    const bObj = BANKS.find(b => b.id === currentBankId) || BANKS[0];
    selectSynth(bObj.offset + k);
  });
  microPillsBar.appendChild(p);
  microPills.push(p);
}

// 70 Drawer Pills im ausfahrbaren Bereich aufbauen
const drawerPillEls = [];
SYNTH_DEFS.forEach((def, i) => {
  const pill = document.createElement("div");
  pill.className = "drawer-synth-pill" + (i === 0 ? " active" : "");
  pill.style.setProperty("--pill-color", def.color);
  pill.innerHTML = `<span class="d-key">${i + 1}</span> <span>${def.name}</span>`;
  pill.addEventListener("click", () => selectSynth(i));
  
  if (drawerPillContainers[def.bank]) {
    drawerPillContainers[def.bank].appendChild(pill);
  }

  drawerPillEls.push(pill);
});

Object.keys(bankButtons).forEach(bId => {
  const btn = bankButtons[bId];
  if (btn) {
    btn.addEventListener("click", () => setBank(bId));
  }
});

const btnBankPrev = document.getElementById("btnBankPrev");
const btnBankNext = document.getElementById("btnBankNext");
if (btnBankPrev) btnBankPrev.addEventListener("click", () => cycleBank(-1));
if (btnBankNext) btnBankNext.addEventListener("click", () => cycleBank(+1));

function cycleBank(direction = +1) {
  const curIdx = BANKS.findIndex(b => b.id === currentBankId);
  const nextIdx = (curIdx + direction + BANKS.length) % BANKS.length;
  setBank(BANKS[nextIdx].id);
}

function setBank(bId) {
  currentBankId = bId;
  const bObj = BANKS.find(b => b.id === bId) || BANKS[0];
  const offset = bObj.offset;
  const inBank = activeSynthIdx >= offset && activeSynthIdx < offset + 10;
  if (!inBank) {
    selectSynth(offset + (activeSynthIdx % 10));
  } else {
    renderMicroPills();
  }
}

function renderMicroPills() {
  const defActive = SYNTH_DEFS[activeSynthIdx];
  if (defActive) currentBankId = defActive.bank;

  Object.keys(bankButtons).forEach(bId => {
    if (bankButtons[bId]) {
      bankButtons[bId].classList.toggle("active", bId === currentBankId);
    }
  });

  const bObj = BANKS.find(b => b.id === currentBankId) || BANKS[0];
  microPills.forEach((p, k) => {
    const synthIdx = bObj.offset + k;
    const def = SYNTH_DEFS[synthIdx];
    p.style.setProperty("--pill-color", def.color);
    p.title = `[${synthIdx + 1}] ${def.name}`;
    p.querySelector(".p-num").textContent = `${k === 9 ? '0' : (k + 1)}`;
    p.classList.toggle("active", synthIdx === activeSynthIdx);
    p.classList.toggle("has-voices", synthInstances[synthIdx].voices.size > 0);
  });

  drawerPillEls.forEach((pill, i) => {
    pill.classList.toggle("active", i === activeSynthIdx);
  });
}

function selectSynth(idx) {
  if (idx < 0 || idx >= synthInstances.length) return;
  activeSynthIdx = idx;
  const inst = synthInstances[idx];

  document.documentElement.style.setProperty("--accent", inst.def.color);
  synthSelect.value = idx;

  renderMicroPills();

  formulaInline.innerHTML = inst.def.formulaLatex;
  formulaInline.title = inst.def.desc + " — " + inst.def.formulaSub;

  drawerSynthName.textContent = `[${inst.def.keyDisplay}] · ${inst.def.name}`;
  drawerSynthName.style.color = inst.def.color;
  drawerSynthSub.textContent = inst.def.desc + " — " + inst.def.formulaSub;
  drawerFormulaLatex.innerHTML = inst.def.formulaLatex;

  badgeName.textContent = `[${inst.def.keyDisplay}] · ${inst.def.name}`;
  badgeName.style.color = inst.def.color;
  synthBadge.style.borderColor = inst.def.color;
  activeSynthTag.textContent = `[${inst.def.keyDisplay}] ${inst.def.name}`;
  activeSynthTag.style.color = inst.def.color;

  const customParamTitle = document.getElementById("customParamTitle");
  const customParamLabel = document.getElementById("customParamLabel");

  customParamTitle.textContent = inst.def.customParam.name;
  customParamLabel.textContent = inst.def.customParam.name;
  PARAM_BOUNDS.customParam = {
    min: inst.def.customParam.min,
    max: inst.def.customParam.max,
    step: inst.def.customParam.step
  };

  const presetContainer = document.getElementById("presetButtons");
  presetContainer.innerHTML = "";
  inst.def.presets.forEach(p => {
    const btn = document.createElement("button");
    btn.textContent = p.name;
    btn.addEventListener("click", () => {
      inst.params.ratio = p.r;
      inst.params.I0 = p.i;
      inst.params.dI = p.d;
      syncSliderValues();
      applyParamChange("ratio");
      applyParamChange("I0");
      applyParamChange("dI");
      syncOscillatorsUI();
    });
    presetContainer.appendChild(btn);
  });

  const latchBtn = document.getElementById("latch");
  latchBtn.setAttribute("aria-pressed", inst.params.latch);

  syncSliderValues();
  syncOscillatorsUI();
  updateUIBadges();
  syncKeys();
}

function updateUIBadges() {
  const isBankB = (activeSynthIdx >= 10);
  microPills.forEach((p, k) => {
    const synthIdx = (isBankB ? 10 : 0) + k;
    p.classList.toggle("has-voices", synthInstances[synthIdx].voices.size > 0);
  });

  const activeInst = synthInstances[activeSynthIdx];
  badgeVoices.textContent = `${activeInst.voices.size} ${activeInst.voices.size === 1 ? "Stimme" : "Stimmen"} aktiv`;
  updateOctaveUI();
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

/* ============================================================
   KOMPLEXER PROGRAMMIERBARER ARPEGGIATOR (Lookahead Clock)
   ============================================================ */
const arpState = {
  enabled: false,
  latch: false,
  bpm: 124,
  division: "1/16",
  direction: "up",
  octaves: 2,
  gate: 0.65,
  swing: 0.0,
  steps: Array.from({ length: 16 }, () => ({ on: true, oct: 0 })),
  heldKeys: new Set(),
  latchedKeys: [],
  currentStepIndex: 0,
  noteSequenceIndex: 0,
  nextNoteTime: 0,
  timerId: null,
  activeNoteSem: null,
  activeNoteOffTimer: null
};

const ARP_DIV_FACTORS = {
  "1/4": 1.0,
  "1/8": 0.5,
  "1/16": 0.25,
  "1/16T": 1 / 6,
  "1/32": 0.125
};

const ARP_PRESETS = {
  straight: () => Array.from({ length: 16 }, () => ({ on: true, oct: 0 })),
  euc5: () => {
    const hits = [0, 3, 6, 10, 13];
    return Array.from({ length: 16 }, (_, i) => ({ on: hits.includes(i), oct: 0 }));
  },
  euc7: () => {
    const hits = [0, 2, 5, 7, 9, 12, 14];
    return Array.from({ length: 16 }, (_, i) => ({ on: hits.includes(i), oct: 0 }));
  },
  sync: () => {
    const hits = [0, 3, 6, 8, 11, 14];
    return Array.from({ length: 16 }, (_, i) => ({ on: hits.includes(i), oct: (i % 6 === 0 ? 1 : 0) }));
  },
  dance: () => {
    return Array.from({ length: 16 }, (_, i) => ({ on: (i % 2 === 0 || i % 3 === 0), oct: (i % 4 === 2 ? 1 : (i % 4 === 3 ? 2 : 0)) }));
  },
  rand: () => {
    const octs = [-1, 0, 0, 1, 1, 2];
    return Array.from({ length: 16 }, () => ({ on: Math.random() > 0.3, oct: octs[Math.floor(Math.random() * octs.length)] }));
  }
};

function getNoteSequence(baseNotes, direction, octaves) {
  if (!baseNotes || baseNotes.length === 0) return [];
  const sorted = [...baseNotes].sort((a, b) => a - b);
  const fullNotes = [];
  for (let oct = 0; oct < octaves; oct++) {
    for (const n of sorted) {
      fullNotes.push(n + oct * 12);
    }
  }

  if (direction === "up") {
    return fullNotes;
  } else if (direction === "down") {
    return [...fullNotes].reverse();
  } else if (direction === "up_down") {
    if (fullNotes.length <= 1) return fullNotes;
    const downPart = fullNotes.slice(1, -1).reverse();
    return fullNotes.concat(downPart);
  } else if (direction === "converge") {
    const res = [];
    let l = 0, r = fullNotes.length - 1;
    while (l <= r) {
      if (l === r) { res.push(fullNotes[l]); }
      else { res.push(fullNotes[l]); res.push(fullNotes[r]); }
      l++; r--;
    }
    return res;
  } else if (direction === "random") {
    return fullNotes;
  } else if (direction === "chord") {
    return [fullNotes];
  }
  return fullNotes;
}

function startArpClock() {
  if (arpState.timerId !== null) return;
  initAudio();
  if (ctx.state === "suspended") ctx.resume();
  arpState.nextNoteTime = ctx.currentTime + 0.01;
  arpState.currentStepIndex = 0;
  arpState.noteSequenceIndex = 0;
  arpState.timerId = setInterval(arpScheduleLoop, 25);
}

function stopArpClock() {
  if (arpState.timerId !== null) {
    clearInterval(arpState.timerId);
    arpState.timerId = null;
  }
  if (arpState.activeNoteSem !== null) {
    if (Array.isArray(arpState.activeNoteSem)) {
      arpState.activeNoteSem.forEach(n => noteOff(n, activeSynthIdx));
    } else {
      noteOff(arpState.activeNoteSem, activeSynthIdx);
    }
    arpState.activeNoteSem = null;
  }
  if (arpState.activeNoteOffTimer) {
    clearTimeout(arpState.activeNoteOffTimer);
    arpState.activeNoteOffTimer = null;
  }
  document.querySelectorAll(".arp-step-col").forEach(c => c.classList.remove("active-playhead"));
}

function arpScheduleLoop() {
  if (!ctx || !arpState.enabled) {
    stopArpClock();
    return;
  }

  const activeKeys = (arpState.heldKeys.size > 0 ? Array.from(arpState.heldKeys) : arpState.latchedKeys);
  if (activeKeys.length === 0) {
    if (!arpState.latch) {
      stopArpClock();
      return;
    }
  }

  const lookahead = 0.12;
  while (arpState.nextNoteTime < ctx.currentTime + lookahead) {
    scheduleArpStep(arpState.nextNoteTime, activeKeys);

    const beatSec = 60 / Math.max(30, arpState.bpm);
    const divFactor = ARP_DIV_FACTORS[arpState.division] || 0.25;
    let stepDur = beatSec * divFactor * 4;

    if (arpState.swing > 0 && (arpState.currentStepIndex % 2 === 1)) {
      stepDur += stepDur * (arpState.swing * 0.45);
    } else if (arpState.swing > 0 && (arpState.currentStepIndex % 2 === 0)) {
      stepDur -= stepDur * (arpState.swing * 0.45);
    }
    stepDur = Math.max(0.02, stepDur);

    arpState.nextNoteTime += stepDur;
    arpState.currentStepIndex = (arpState.currentStepIndex + 1) % 16;
  }
}

function scheduleArpStep(time, activeKeys) {
  const stepIdx = arpState.currentStepIndex;
  const step = arpState.steps[stepIdx];

  const now = ctx ? ctx.currentTime : 0;
  const delayMs = Math.max(0, (time - now) * 1000);

  setTimeout(() => {
    document.querySelectorAll(".arp-step-col").forEach((c, idx) => {
      c.classList.toggle("active-playhead", idx === stepIdx);
    });
  }, delayMs);

  if (!step || !step.on || activeKeys.length === 0) {
    return;
  }

  const seq = getNoteSequence(activeKeys, arpState.direction, arpState.octaves);
  if (seq.length === 0) return;

  let targetNote;
  if (arpState.direction === "random") {
    targetNote = seq[Math.floor(Math.random() * seq.length)] + step.oct * 12;
  } else if (arpState.direction === "chord") {
    targetNote = seq[0].map(n => n + step.oct * 12);
  } else {
    const idx = arpState.noteSequenceIndex % seq.length;
    targetNote = seq[idx] + step.oct * 12;
    arpState.noteSequenceIndex++;
  }

  const beatSec = 60 / Math.max(30, arpState.bpm);
  const divFactor = ARP_DIV_FACTORS[arpState.division] || 0.25;
  const rawStepDur = beatSec * divFactor * 4;
  const noteDuration = Math.max(0.03, rawStepDur * Math.max(0.1, Math.min(1.0, arpState.gate)));

  setTimeout(() => {
    if (!arpState.enabled) return;

    if (arpState.activeNoteSem !== null) {
      if (Array.isArray(arpState.activeNoteSem)) {
        arpState.activeNoteSem.forEach(n => noteOff(n, activeSynthIdx));
      } else {
        noteOff(arpState.activeNoteSem, activeSynthIdx);
      }
    }

    if (Array.isArray(targetNote)) {
      targetNote.forEach(n => noteOn(n, activeSynthIdx));
      arpState.activeNoteSem = targetNote;
    } else {
      noteOn(targetNote, activeSynthIdx);
      arpState.activeNoteSem = targetNote;
    }

    arpState.activeNoteOffTimer = setTimeout(() => {
      if (arpState.activeNoteSem !== null) {
        if (Array.isArray(arpState.activeNoteSem)) {
          arpState.activeNoteSem.forEach(n => noteOff(n, activeSynthIdx));
        } else {
          noteOff(arpState.activeNoteSem, activeSynthIdx);
        }
        arpState.activeNoteSem = null;
      }
    }, noteDuration * 1000);
  }, delayMs);
}

function updateArpActiveNotesHint() {
  const hintEl = document.getElementById("arpActiveNotesHint");
  if (!hintEl) return;
  const activeKeys = (arpState.heldKeys.size > 0 ? Array.from(arpState.heldKeys) : arpState.latchedKeys);
  if (activeKeys.length === 0) {
    hintEl.textContent = arpState.latch ? "Hold aktiv (Bereit)" : "Tasten halten";
    hintEl.style.color = "var(--dim)";
  } else {
    const noteNames = activeKeys.map(k => NOTES[k] || ("N" + k));
    hintEl.textContent = `Akkord: [ ${noteNames.join(" · ")} ]`;
    hintEl.style.color = "#ffc46b";
  }
}

function renderArpMatrix() {
  const container = document.getElementById("arpMatrixGrid");
  if (!container) return;
  container.innerHTML = "";

  arpState.steps.forEach((step, idx) => {
    const col = document.createElement("div");
    col.className = "arp-step-col";
    col.id = `arp_col_${idx}`;

    const led = document.createElement("div");
    led.className = "arp-step-led";

    const gateBtn = document.createElement("button");
    gateBtn.type = "button";
    gateBtn.className = "arp-step-gate" + (step.on ? " on" : "");
    gateBtn.textContent = idx + 1;
    gateBtn.title = `Step ${idx + 1}: ${step.on ? "Aktiv" : "Stumm"}`;
    gateBtn.addEventListener("click", () => {
      step.on = !step.on;
      gateBtn.classList.toggle("on", step.on);
      gateBtn.title = `Step ${idx + 1}: ${step.on ? "Aktiv" : "Stumm"}`;
    });

    const octBadge = document.createElement("div");
    octBadge.className = "arp-step-oct";
    octBadge.textContent = (step.oct > 0 ? "+" : "") + step.oct;
    octBadge.title = `Oktaven-Versatz: ${step.oct} (Klicken zum Umschalten)`;
    octBadge.addEventListener("click", () => {
      if (step.oct === 0) step.oct = 1;
      else if (step.oct === 1) step.oct = 2;
      else if (step.oct === 2) step.oct = -1;
      else step.oct = 0;
      octBadge.textContent = (step.oct > 0 ? "+" : "") + step.oct;
      octBadge.style.color = step.oct !== 0 ? "#ffc46b" : "var(--dim)";
    });
    if (step.oct !== 0) octBadge.style.color = "#ffc46b";

    col.appendChild(led);
    col.appendChild(gateBtn);
    col.appendChild(octBadge);
    container.appendChild(col);
  });
}


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

/* ============================================================
   Klaviatur & Universelles Keyboard Event Handling
   ============================================================ */
const keysEl = document.getElementById("keys");
const keyEls = [];

function ensureAudioActive() {
  const veilEl = document.getElementById("veil");
  if (veilEl) veilEl.remove();
  initAudio();
  if (ctx && ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
}

LETTERS.forEach((ltr, i) => {
  const d = document.createElement("div");
  d.className = "key" + (BLACK_KEYS.includes(i) ? " blk" : "");
  d.tabIndex = -1;
  d.innerHTML = `<span class="ltr">${ltr.toUpperCase()}</span><span class="nt">${NOTES[i]}</span>`;

  d.addEventListener("pointerdown", e => {
    e.preventDefault();
    ensureAudioActive();
    toggleKey(i);
  });
  d.addEventListener("pointerup", () => releaseKey(i));
  d.addEventListener("pointerleave", () => releaseKey(i));
  d.addEventListener("pointercancel", () => releaseKey(i));

  keysEl.appendChild(d);
  keyEls.push(d);
});

// Initiale Tonhöhen- & Oktavenanzeige im unteren Element
updateOctaveUI();

function toggleKey(i) {
  ensureAudioActive();
  const inst = synthInstances[activeSynthIdx];
  if (arpState.enabled) {
    if (arpState.latch && arpState.heldKeys.size === 0) {
      arpState.latchedKeys = [];
    }
    arpState.heldKeys.add(i);
    arpState.latchedKeys = Array.from(arpState.heldKeys).sort((a, b) => a - b);
    updateArpActiveNotesHint();
    syncKeys();
    startArpClock();
    return;
  }

  if (inst.params.latch && inst.voices.has(i)) {
    noteOff(i, activeSynthIdx);
  } else {
    noteOn(i, activeSynthIdx);
  }
}

function releaseKey(i) {
  const inst = synthInstances[activeSynthIdx];
  if (arpState.enabled) {
    arpState.heldKeys.delete(i);
    if (!arpState.latch) {
      arpState.latchedKeys = Array.from(arpState.heldKeys).sort((a, b) => a - b);
      if (arpState.latchedKeys.length === 0) {
        stopArpClock();
      }
    }
    updateArpActiveNotesHint();
    syncKeys();
    return;
  }

  if (!inst.params.latch) noteOff(i, activeSynthIdx);
}

function syncKeys() {
  const inst = synthInstances[activeSynthIdx];
  keyEls.forEach((d, i) => {
    if (arpState.enabled) {
      const isHeld = arpState.heldKeys.has(i) || (arpState.latch && arpState.latchedKeys.includes(i));
      d.classList.toggle("on", isHeld);
    } else {
      d.classList.toggle("on", inst.voices.has(i));
    }
  });
}

function resolveNoteFromKeyEvent(e) {
  const code = e.code;
  const key = e.key ? e.key.toLowerCase() : "";

  if (code === "KeyA") return 0;
  if (code === "KeyW") return 1;
  if (code === "KeyS") return 2;
  if (code === "KeyE") return 3;
  if (code === "KeyD") return 4;
  if (code === "KeyF") return 5;
  if (code === "KeyT") return 6;
  if (code === "KeyG") return 7;
  if (code === "KeyH") return 9;
  if (code === "KeyU") return 10;
  if (code === "KeyJ") return 11;
  if (code === "KeyK") return 12;

  // QWERTZ vs QWERTY Note 8 (G#) handling
  if (code === "KeyZ") {
    if (key === "z") return 8;
    return 8;
  }
  if (code === "KeyY") {
    if (key === "y") return 8;
    return 8;
  }

  const directIdx = LETTERS.indexOf(key);
  if (directIdx !== -1) return directIdx;

  return null;
}

const activeHeldPhysicalNotes = new Map();

/* ============================================================
   Hilfe- & Referenz-Modal (Taste Ü)
   ============================================================ */
function toggleHelpModal(forceState = null) {
  const helpOverlay = document.getElementById("helpOverlay");
  if (!helpOverlay) return;
  const isHidden = helpOverlay.classList.contains("hidden");
  const targetState = forceState !== null ? forceState : isHidden;
  helpOverlay.classList.toggle("hidden", !targetState);
}

const openHelpBtn = document.getElementById("openHelpBtn");
const closeHelpBtn = document.getElementById("closeHelpBtn");
const okHelpBtn = document.getElementById("okHelpBtn");
const helpOverlay = document.getElementById("helpOverlay");

if (openHelpBtn) openHelpBtn.addEventListener("click", () => toggleHelpModal(true));
if (closeHelpBtn) closeHelpBtn.addEventListener("click", () => toggleHelpModal(false));
if (okHelpBtn) okHelpBtn.addEventListener("click", () => toggleHelpModal(false));
if (helpOverlay) {
  helpOverlay.addEventListener("click", e => {
    if (e.target === helpOverlay) toggleHelpModal(false);
  });
}

window.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  // Nur echte Texteingaben blockieren (z. B. wenn Textfelder da wären), nie Slider oder Knöpfe!
  if (e.target && e.target.tagName === "INPUT" && (e.target.type === "text" || e.target.type === "password" || e.target.type === "search")) {
    return;
  }
  if (e.target && e.target.tagName === "TEXTAREA") {
    return;
  }

  // Hilfe-Modal mit Ü / ü umschalten
  const isHelpKey = (
    e.key === "ü" || e.key === "Ü" ||
    (e.code === "BracketLeft" && !e.ctrlKey && !e.altKey && !e.metaKey)
  );
  if (isHelpKey && !e.repeat) {
    e.preventDefault();
    toggleHelpModal();
    return;
  }

  if (e.key.toLowerCase() === "m" && !e.repeat) {
    e.preventDefault();
    toggleMasterRecording();
    return;
  }
  if (e.key === "Escape") {
    const exportEl = document.getElementById("audioExportModal");
    if (exportEl && !exportEl.classList.contains("hidden")) {
      closeAudioExportModal();
      return;
    }
    const helpEl = document.getElementById("helpOverlay");
    if (helpEl && !helpEl.classList.contains("hidden")) {
      toggleHelpModal(false);
      return;
    }
    panicAll();
    return;
  }
  if (e.key.toLowerCase() === "r" && !e.repeat) {
    e.preventDefault();
    toggleRecording();
    return;
  }
  if (e.key.toLowerCase() === "h" && !e.repeat) {
    e.preventDefault();
    toggleHeaderExpand();
    return;
  }

  // Bank Umschalten mit ß (Zurück) und ´ (Vorwärts)
  const isBankPrev = (
    e.key === "ß" || e.key === "SS" || e.key === "?" ||
    e.code === "Minus" || e.code === "NumpadSubtract"
  );
  if (isBankPrev && !e.repeat) {
    e.preventDefault();
    ensureAudioActive();
    cycleBank(-1);
    return;
  }

  const isBankNext = (
    e.key === "´" || e.key === "`" || e.key === "^" || e.key === "Dead" ||
    e.code === "Equal" || e.code === "Backquote" || e.code === "NumpadAdd"
  );
  if (isBankNext && !e.repeat) {
    e.preventDefault();
    ensureAudioActive();
    cycleBank(+1);
    return;
  }

  // Instrument-Auswahl mit Tasten 1 bis 0 (ohne Shift) für die aktuell aktive Bank
  const digitMatch = e.code && e.code.match(/^Digit([0-9])$/);
  if (digitMatch && !e.repeat) {
    const num = parseInt(digitMatch[1], 10);
    const digitIdx = (num === 0 ? 9 : num - 1);
    e.preventDefault();
    ensureAudioActive();
    const bObj = BANKS.find(b => b.id === currentBankId) || BANKS[0];
    selectSynth(bObj.offset + digitIdx);
    return;
  }

  if (e.code === "KeyX" || e.key.toLowerCase() === "x") {
    if (!e.repeat) {
      e.preventDefault();
      ensureAudioActive();
      setOctave(+1);
    }
    return;
  }

  const isOctDown = (
    (e.code === "KeyY" && e.key.toLowerCase() === "y") ||
    (e.code === "KeyZ" && e.key.toLowerCase() === "y") ||
    (e.code === "IntlBackslash")
  );
  if (isOctDown && e.code !== "KeyY" && e.code !== "KeyZ") {
    if (!e.repeat) {
      e.preventDefault();
      ensureAudioActive();
      setOctave(-1);
    }
    return;
  }

  const noteIdx = resolveNoteFromKeyEvent(e);
  if (noteIdx !== null && noteIdx >= 0 && noteIdx <= 12) {
    e.preventDefault();
    if (document.activeElement && document.activeElement !== document.body && document.activeElement.tagName !== "BODY") {
      try { document.activeElement.blur(); } catch(err){}
    }

    if (e.repeat) return;
    ensureAudioActive();
    activeHeldPhysicalNotes.set(e.code, noteIdx);
    toggleKey(noteIdx);
    return;
  }
});

window.addEventListener("keyup", e => {
  if (e.target && e.target.tagName === "INPUT" && (e.target.type === "text" || e.target.type === "password" || e.target.type === "search")) {
    return;
  }
  if (e.target && e.target.tagName === "TEXTAREA") {
    return;
  }

  const noteIdx = activeHeldPhysicalNotes.get(e.code) ?? resolveNoteFromKeyEvent(e);
  if (noteIdx !== null && noteIdx >= 0 && noteIdx <= 12) {
    activeHeldPhysicalNotes.delete(e.code);
    releaseKey(noteIdx);
  }
});

window.addEventListener("blur", () => {
  activeHeldPhysicalNotes.clear();
  const inst = synthInstances[activeSynthIdx];
  if (!inst.params.latch && !arpState.latch) {
    panicSynth(activeSynthIdx);
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    activeHeldPhysicalNotes.clear();
    const inst = synthInstances[activeSynthIdx];
    if (!inst.params.latch && !arpState.latch) {
      panicSynth(activeSynthIdx);
    }
  }
});

/* ============================================================
   Sprach-Zuspiel
   ============================================================ */
const MP3_URL = "https://files.catbox.moe/wknx4w.mp3";

const loopState = {
  isPlaying: false,
  extraPauseSec: 2.5,
  volume: 0.5,
  buffer: null,
  segments: [],
  currentSegmentIdx: 0,
  isPausedPhase: false,
  phaseStartTime: 0,
  phaseDuration: 0,
  activeSourceNode: null,
  pauseTimerId: null,
  gainNode: null,
  isLoading: false
};

const loopBtn = document.getElementById("loopbtn");
const loopVolInp = document.getElementById("loopvol");
const pauseDurInp = document.getElementById("pausedur");
const loopStatusText = document.getElementById("loopStatusText");
const loopStatusTimer = document.getElementById("loopStatusTimer");
const loopBar = document.getElementById("loopBar");

function initLoopAudio() {
  if (!ctx || loopState.gainNode) return;
  loopState.gainNode = ctx.createGain();
  loopState.gainNode.gain.value = loopState.volume;
  loopState.gainNode.connect(masterGain);
}

pauseDurInp.addEventListener("input", () => {
  loopState.extraPauseSec = parseFloat(pauseDurInp.value);
  document.getElementById("v_pausedur").textContent = "+" + loopState.extraPauseSec.toFixed(1) + " s";
});

loopVolInp.addEventListener("input", () => {
  loopState.volume = parseFloat(loopVolInp.value);
  document.getElementById("v_loopvol").textContent = Math.round(loopState.volume * 100) + " %";
  if (loopState.gainNode && ctx) {
    loopState.gainNode.gain.setTargetAtTime(loopState.volume, ctx.currentTime, 0.05);
  }
});

function detectSpeechSegments(audioBuf) {
  const channel = audioBuf.getChannelData(0);
  const sr = audioBuf.sampleRate;
  const winDuration = 0.04;
  const winSize = Math.floor(sr * winDuration);
  const numWins = Math.floor(channel.length / winSize);
  const energies = new Float32Array(numWins);

  for (let i = 0; i < numWins; i++) {
    let sum = 0;
    const start = i * winSize;
    for (let j = 0; j < winSize; j++) {
      const s = channel[start + j];
      sum += s * s;
    }
    energies[i] = Math.sqrt(sum / winSize);
  }

  const threshold = 0.012;
  const minSilenceDuration = 0.35;
  const minSilenceWins = Math.floor(minSilenceDuration / winDuration);

  const segments = [];
  let inSpeech = false;
  let segStart = 0;
  let silenceWins = 0;

  for (let i = 0; i < numWins; i++) {
    const isVoice = energies[i] > threshold;
    if (isVoice) {
      if (!inSpeech) {
        inSpeech = true;
        segStart = Math.max(0, (i - 2) * winDuration);
      }
      silenceWins = 0;
    } else {
      if (inSpeech) {
        silenceWins++;
        if (silenceWins >= minSilenceWins) {
          inSpeech = false;
          const segEnd = Math.min(audioBuf.duration, (i - silenceWins + 2) * winDuration);
          if (segEnd - segStart > 0.4) {
            segments.push({ start: segStart, end: segEnd });
          }
        }
      }
    }
  }
  if (inSpeech) segments.push({ start: segStart, end: audioBuf.duration });

  if (segments.length === 0) {
    const step = audioBuf.duration / 4;
    for (let k = 0; k < 4; k++) segments.push({ start: k * step, end: (k + 1) * step });
  }
  return segments;
}

async function loadLoopAudio() {
  if (loopState.buffer) return loopState.buffer;
  loopState.isLoading = true;
  loopStatusText.textContent = "Lade Sprach-Sample …";
  loopStatusTimer.textContent = "Pufferung";

  try {
    const resp = await fetch(MP3_URL);
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    const arrayBuffer = await resp.arrayBuffer();
    initAudio();
    const audioBuf = await ctx.decodeAudioData(arrayBuffer);
    loopState.buffer = audioBuf;
    loopState.segments = detectSpeechSegments(audioBuf);
    loopState.isLoading = false;
    loopStatusText.textContent = `${loopState.segments.length} Phrasen`;
    return audioBuf;
  } catch (err) {
    console.warn("Audio Fetch:", err);
    loopState.isLoading = false;
    loopStatusText.textContent = "Blockiert";
    return null;
  }
}

function playNextSegment() {
  if (!loopState.isPlaying || !loopState.buffer || !loopState.segments.length) return;
  const seg = loopState.segments[loopState.currentSegmentIdx];
  const segDuration = seg.end - seg.start;

  loopState.isPausedPhase = false;
  loopState.phaseStartTime = performance.now();
  loopState.phaseDuration = segDuration * 1000;
  loopStatusText.textContent = `Sample ${loopState.currentSegmentIdx + 1}/${loopState.segments.length}`;

  const source = ctx.createBufferSource();
  source.buffer = loopState.buffer;
  source.connect(loopState.gainNode);
  source.onended = () => { if (loopState.isPlaying) startPausePhase(); };

  loopState.activeSourceNode = source;
  source.start(0, seg.start, segDuration);
}

function startPausePhase() {
  if (!loopState.isPlaying) return;
  loopState.activeSourceNode = null;
  loopState.isPausedPhase = true;
  loopState.phaseStartTime = performance.now();

  const pauseMs = Math.max(100, loopState.extraPauseSec * 1000);
  loopState.phaseDuration = pauseMs;
  loopStatusText.textContent = `Pause (+${loopState.extraPauseSec.toFixed(1)}s)`;

  loopState.pauseTimerId = setTimeout(() => {
    if (!loopState.isPlaying) return;
    loopState.currentSegmentIdx = (loopState.currentSegmentIdx + 1) % loopState.segments.length;
    playNextSegment();
  }, pauseMs);
}

function stopLoopPlayback() {
  loopState.isPlaying = false;
  if (loopState.pauseTimerId) { clearTimeout(loopState.pauseTimerId); loopState.pauseTimerId = null; }
  if (loopState.activeSourceNode) {
    try { loopState.activeSourceNode.stop(); } catch(e){}
    loopState.activeSourceNode = null;
  }
  loopBtn.setAttribute("aria-pressed", "false");
  loopBtn.textContent = "Abspielen";
  loopStatusText.textContent = "Pausiert";
  loopStatusTimer.textContent = "0.0 s";
  loopBar.style.width = "0%";
}

loopBtn.addEventListener("click", async () => {
  initAudio();
  if (ctx.state === "suspended") ctx.resume();

  if (loopState.isPlaying) {
    stopLoopPlayback();
  } else {
    loopBtn.textContent = "Lade …";
    const buf = await loadLoopAudio();
    if (!buf) { loopBtn.textContent = "Abspielen"; return; }
    loopState.isPlaying = true;
    loopBtn.setAttribute("aria-pressed", "true");
    loopBtn.textContent = "Stopp";
    playNextSegment();
  }
});

function updateLoopStatusFrame() {
  if (!loopState.isPlaying || loopState.phaseDuration <= 0) return;
  const elapsed = performance.now() - loopState.phaseStartTime;
  const progress = Math.min(1, Math.max(0, elapsed / loopState.phaseDuration));
  loopBar.style.width = (progress * 100).toFixed(1) + "%";

  if (loopState.isPausedPhase) {
    const remainingSec = Math.max(0, (loopState.phaseDuration - elapsed) / 1000);
    loopStatusTimer.textContent = remainingSec.toFixed(1) + " s";
    loopBar.style.background = "#ff6b81";
  } else {
    const currentSec = (elapsed / 1000);
    loopStatusTimer.textContent = currentSec.toFixed(1) + " s";
    loopBar.style.background = "#ffc46b";
  }
}

/* ============================================================
   Start Overlay
   ============================================================ */
const veil = document.getElementById("veil");
const startBtn = document.getElementById("startBtn");

function startApp() {
  if (veil) veil.remove();
  initAudio();
  applyInitialLayout();
  selectSynth(0);
}

veil.addEventListener("pointerdown", startApp);
startBtn.addEventListener("click", e => { e.stopPropagation(); startApp(); });
window.addEventListener("keydown", () => { if (document.body.contains(veil)) startApp(); }, { once: true });

// Initialisierung
setupUnifiedParamControls();
setupArpControls();
  setupPercControls();
applyInitialLayout();
selectSynth(0);
readColors();
requestAnimationFrame(renderFrame);