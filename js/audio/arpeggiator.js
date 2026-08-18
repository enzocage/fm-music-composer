"use strict";

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

