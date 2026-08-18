"use strict";

/* ============================================================
   SONG SPEICHERN & LADEN (.JSON)
   ============================================================ */
const saveSongBtn = document.getElementById("saveSongBtn");
const loadSongBtn = document.getElementById("loadSongBtn");
const songFileInput = document.getElementById("songFileInput");

saveSongBtn.addEventListener("click", () => {
  const songData = {
    version: "2.0",
    appName: "FM Music Composer",
    savedAt: new Date().toISOString(),
    global: {
      master: GLOBAL.master,
      wet: GLOBAL.wet,
      oct: GLOBAL.oct
    },
    activeSynthIdx,
    loopState: {
      extraPauseSec: loopState.extraPauseSec,
      volume: loopState.volume
    },
    arpState: {
      enabled: arpState.enabled,
      latch: arpState.latch,
      bpm: arpState.bpm,
      division: arpState.division,
      direction: arpState.direction,
      octaves: arpState.octaves,
      gate: arpState.gate,
      swing: arpState.swing,
      steps: arpState.steps.map(s => ({ on: !!s.on, oct: s.oct ?? 0 }))
    },
    synths: synthInstances.map(inst => ({
      id: inst.def.id,
      name: inst.def.name,
      params: { ...inst.params },
      customVal: inst.customVal,
      vibrato: { ...inst.vibrato },
      oscillators: JSON.parse(JSON.stringify(inst.oscillators))
    })),
    loops: loopStack.map(layer => ({
      id: layer.id,
      synthIdx: layer.synthIdx,
      synthName: layer.synthName,
      keyDisplay: layer.keyDisplay,
      color: layer.color,
      duration: layer.duration,
      volume: layer.volume,
      isOn: layer.isOn,
      pauseSec: layer.pauseSec,
      audioWavBase64: audioBufferToWavBase64(layer.buffer)
    }))
  };

  const jsonStr = JSON.stringify(songData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  a.href = url;
  a.download = `fm_music_composer_song_${ts}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  saveSongBtn.textContent = "✓ Saved";
  setTimeout(() => saveSongBtn.textContent = "💾 Save", 1600);
});

loadSongBtn.addEventListener("click", () => songFileInput.click());

songFileInput.addEventListener("change", async e => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  try {
    loadSongBtn.textContent = "Lädt…";
    const text = await file.text();
    const songData = JSON.parse(text);

    initAudio();
    if (ctx.state === "suspended") await ctx.resume();

    // 1. Globale Einstellungen
    if (songData.global) {
      GLOBAL.master = songData.global.master ?? 0.65;
      GLOBAL.wet = songData.global.wet ?? 0.5;
      GLOBAL.oct = songData.global.oct ?? 0;
      if (masterGain) masterGain.gain.setValueAtTime(GLOBAL.master, ctx.currentTime);
      if (wetGain) wetGain.gain.setValueAtTime(GLOBAL.wet, ctx.currentTime);
      if (dryGain) dryGain.gain.setValueAtTime(1 - GLOBAL.wet * 0.5, ctx.currentTime);
    }

    // 2. Synthesizer Parameter, Vibrato & Oszillatoren wiederherstellen
    if (Array.isArray(songData.synths)) {
      songData.synths.forEach((savedSynth, idx) => {
        if (idx < synthInstances.length) {
          const inst = synthInstances[idx];
          if (savedSynth.params) Object.assign(inst.params, savedSynth.params);
          if (savedSynth.customVal !== undefined) inst.customVal = savedSynth.customVal;
          if (savedSynth.vibrato) Object.assign(inst.vibrato, savedSynth.vibrato);
          if (savedSynth.oscillators) inst.oscillators = savedSynth.oscillators;
        }
      });
    }

    // 3. Sprach-Loop Parameter
    if (songData.loopState) {
      loopState.extraPauseSec = songData.loopState.extraPauseSec ?? 2.5;
      loopState.volume = songData.loopState.volume ?? 0.5;
      pauseDurInp.value = loopState.extraPauseSec;
      loopVolInp.value = loopState.volume;
      document.getElementById("v_pausedur").textContent = "+" + loopState.extraPauseSec.toFixed(1) + " s";
      document.getElementById("v_loopvol").textContent = Math.round(loopState.volume * 100) + " %";
    }

    // 3.5. Arpeggiator Parameter wiederherstellen
    if (songData.arpState) {
      arpState.enabled = !!songData.arpState.enabled;
      arpState.latch = !!songData.arpState.latch;
      arpState.bpm = songData.arpState.bpm ?? 124;
      arpState.division = songData.arpState.division ?? "1/16";
      arpState.direction = songData.arpState.direction ?? "up";
      arpState.octaves = songData.arpState.octaves ?? 2;
      arpState.gate = songData.arpState.gate ?? 0.65;
      arpState.swing = songData.arpState.swing ?? 0;
      if (Array.isArray(songData.arpState.steps)) {
        arpState.steps = songData.arpState.steps.map(s => ({ on: !!s.on, oct: s.oct ?? 0 }));
      }
      if (typeof syncArpUI === "function") syncArpUI();
    }

    // 4. Loops wiederherstellen
    clearAllLoops();
    if (Array.isArray(songData.loops)) {
      for (const savedLoop of songData.loops) {
        if (savedLoop.audioWavBase64) {
          const audioBuf = await wavBase64ToAudioBuffer(savedLoop.audioWavBase64);
          createLoopLayer(audioBuf, savedLoop.synthIdx ?? 0, savedLoop);
        }
      }
    }

    // 5. Aktiven Synthesizer umschalten & UI synchronisieren
    selectSynth(songData.activeSynthIdx ?? 0);

    loadSongBtn.textContent = "✓ Loaded";
    setTimeout(() => loadSongBtn.textContent = "📂 Load", 1600);
  } catch (err) {
    console.error("Fehler beim Laden des Songs:", err);
    alert("Konnte Song-Datei nicht laden: " + err.message);
    loadSongBtn.textContent = "📂 Load";
  }
  songFileInput.value = "";
});


/* ============================================================
   RESIZABLE SPLITTER LOGIK (SPLIT-H, SPLIT-V & SPLIT-HEADER)
   ============================================================ */
const splitH = document.getElementById("splitH");
const splitV = document.getElementById("splitV");
const splitHeader = document.getElementById("splitHeader");
const topHeader = document.getElementById("topHeader");
const sidebarContainer = document.getElementById("sidebarContainer");
const plotsContainer = document.getElementById("plotsContainer");
const layMiniGfx = document.getElementById("layMiniGfx");

let isResizingH = false, isResizingV = false, isResizingHeader = false;

if (splitHeader) {
  splitHeader.addEventListener("pointerdown", e => {
    e.preventDefault();
    isResizingHeader = true;
    splitHeader.classList.add("dragging");
    splitHeader.setPointerCapture(e.pointerId);
  });
}

splitH.addEventListener("pointerdown", e => {
  e.preventDefault();
  isResizingH = true;
  splitH.classList.add("dragging");
  splitH.setPointerCapture(e.pointerId);
});

window.addEventListener("pointermove", e => {
  if (isResizingHeader) {
    const newH = Math.max(44, Math.min(window.innerHeight * 0.65, e.clientY));
    topHeader.style.maxHeight = newH + "px";
    if (newH > 80) {
      topHeader.classList.add("expanded");
      const expandBtnTxt = document.getElementById("expandBtnTxt");
      if (expandBtnTxt) expandBtnTxt.textContent = "▴ KOMPAKT";
    } else {
      topHeader.classList.remove("expanded");
      const expandBtnTxt = document.getElementById("expandBtnTxt");
      if (expandBtnTxt) expandBtnTxt.textContent = "▾ DETAILS";
    }
    resize();
  }
  if (isResizingH) {
    const windowW = window.innerWidth;
    const newSidebarW = Math.max(240, Math.min(windowW * 0.92, windowW - e.clientX));
    document.documentElement.style.setProperty("--sidebar-w", newSidebarW + "px");
    const gfxW = windowW - newSidebarW;
    if (plotsContainer) plotsContainer.classList.toggle("mini-gfx", gfxW <= 220);
    sidebarContainer.classList.toggle("multi-col", newSidebarW > 480);
    resize();
  }
  if (isResizingV) {
    const windowH = window.innerHeight;
    const newKbH = Math.max(48, Math.min(160, windowH - e.clientY));
    document.documentElement.style.setProperty("--kb-h", newKbH + "px");
    resize();
  }
});

window.addEventListener("pointerup", () => {
  if (isResizingHeader) {
    isResizingHeader = false;
    if (splitHeader) splitHeader.classList.remove("dragging");
  }
  if (isResizingH) {
    isResizingH = false;
    splitH.classList.remove("dragging");
  }
  if (isResizingV) {
    isResizingV = false;
    splitV.classList.remove("dragging");
  }
});

splitV.addEventListener("pointerdown", e => {
  e.preventDefault();
  isResizingV = true;
  splitV.classList.add("dragging");
  splitV.setPointerCapture(e.pointerId);
});

// Layout Presets
const layStandard = document.getElementById("layStandard");
const layWideRack = document.getElementById("layWideRack");
const layFullscreen = document.getElementById("layFullscreen");

layStandard.addEventListener("click", () => {
  layStandard.classList.add("active");
  layWideRack.classList.remove("active");
  if (layMiniGfx) layMiniGfx.classList.remove("active");
  sidebarContainer.classList.remove("multi-col");
  if (plotsContainer) plotsContainer.classList.remove("mini-gfx");
  document.documentElement.style.setProperty("--sidebar-w", "360px");
  resize();
});

layWideRack.addEventListener("click", () => {
  layWideRack.classList.add("active");
  layStandard.classList.remove("active");
  if (layMiniGfx) layMiniGfx.classList.remove("active");
  sidebarContainer.classList.add("multi-col");
  if (plotsContainer) plotsContainer.classList.remove("mini-gfx");
  document.documentElement.style.setProperty("--sidebar-w", "580px");
  resize();
});

if (layMiniGfx) {
  layMiniGfx.addEventListener("click", () => {
    layMiniGfx.classList.add("active");
    layStandard.classList.remove("active");
    layWideRack.classList.remove("active");
    sidebarContainer.classList.add("multi-col");
    if (plotsContainer) plotsContainer.classList.add("mini-gfx");
    const winW = window.innerWidth;
    document.documentElement.style.setProperty("--sidebar-w", Math.round(winW * 0.90) + "px");
    resize();
  });
}

layFullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    layFullscreen.textContent = "✕";
  } else {
    document.exitFullscreen().catch(() => {});
    layFullscreen.textContent = "⛶";
  }
});

function applyInitialLayout() {
  const winW = window.innerWidth;
  const newSidebarW = Math.max(360, Math.min(winW * 0.90, winW - 80));
  document.documentElement.style.setProperty("--sidebar-w", Math.round(newSidebarW) + "px");
  if (plotsContainer) plotsContainer.classList.add("mini-gfx");
  if (sidebarContainer) sidebarContainer.classList.add("multi-col");
  if (layMiniGfx) layMiniGfx.classList.add("active");
  if (layStandard) layStandard.classList.remove("active");
  if (layWideRack) layWideRack.classList.remove("active");
  resize();
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

const btnSynthPrev = document.getElementById("btnSynthPrev");
const btnSynthNext = document.getElementById("btnSynthNext");
if (btnSynthPrev) {
  btnSynthPrev.addEventListener("click", () => {
    const nextIdx = (activeSynthIdx - 1 + SYNTH_DEFS.length) % SYNTH_DEFS.length;
    selectSynth(nextIdx);
  });
}
if (btnSynthNext) {
  btnSynthNext.addEventListener("click", () => {
    const nextIdx = (activeSynthIdx + 1) % SYNTH_DEFS.length;
    selectSynth(nextIdx);
  });
}

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
