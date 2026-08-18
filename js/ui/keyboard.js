"use strict";

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
