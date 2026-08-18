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

  // Y is reserved exclusively for Octave Down
  if (key === "y") return null;

  if (code === "KeyA" || key === "a") return 0;
  if (code === "KeyW" || key === "w") return 1;
  if (code === "KeyS" || key === "s") return 2;
  if (code === "KeyE" || key === "e") return 3;
  if (code === "KeyD" || key === "d") return 4;
  if (code === "KeyF" || key === "f") return 5;
  if (code === "KeyT" || key === "t") return 6;
  if (code === "KeyG" || key === "g") return 7;
  // Note 8: G# on German QWERTZ is Z (home row between T/G and U/H)
  if (key === "z" || (code === "KeyZ" && key !== "y")) return 8;
  if (code === "KeyH" || key === "h") return 9;
  if (code === "KeyU" || key === "u") return 10;
  if (code === "KeyJ" || key === "j") return 11;
  if (code === "KeyK" || key === "k") return 12;

  const directIdx = LETTERS.indexOf(key);
  if (directIdx !== -1 && directIdx !== 8) return directIdx;

  return null;
}

const activeHeldPhysicalNotes = new Map();
