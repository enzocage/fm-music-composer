"use strict";

/* ============================================================
   MULTI-LAYER LOOP STACK & RECORDING ENGINE
   ============================================================ */
let loopStack = [];

const recState = {
  isRecording: false,
  synthIdx: 0,
  startTime: 0,
  recNode: null,
  leftChunks: [],
  rightChunks: [],
  totalSamples: 0
};

const recToggleBtn = document.getElementById("recToggleBtn");
const quickRecBtn = document.getElementById("quickRecBtn");
const recBtnText = document.getElementById("recBtnText");
const recStatusInfo = document.getElementById("recStatusInfo");
const loopStackContainer = document.getElementById("loopStackContainer");
const stackEmptyHint = document.getElementById("stackEmptyHint");
const stackSummaryText = document.getElementById("stackSummaryText");
const toggleAllLoopsBtn = document.getElementById("toggleAllLoopsBtn");
const clearStackBtn = document.getElementById("clearStackBtn");

function toggleRecording() {
  initAudio();
  if (ctx.state === "suspended") ctx.resume();
  recState.isRecording ? stopRecording() : startRecording();
}

function startRecording() {
  if (recState.isRecording) return;
  recState.isRecording = true;
  recState.synthIdx = activeSynthIdx;
  recState.startTime = performance.now();
  recState.leftChunks = [];
  recState.rightChunks = [];
  recState.totalSamples = 0;

  const targetInst = synthInstances[recState.synthIdx];
  const bufferSize = 4096;
  recState.recNode = ctx.createScriptProcessor(bufferSize, 2, 2);
  recState.recNode.onaudioprocess = e => {
    if (!recState.isRecording) return;
    const l = e.inputBuffer.getChannelData(0);
    const r = e.inputBuffer.getChannelData(1);
    recState.leftChunks.push(new Float32Array(l));
    recState.rightChunks.push(new Float32Array(r));
    recState.totalSamples += l.length;
  };

  targetInst.bus.connect(recState.recNode);
  recState.recNode.connect(ctx.destination);

  recToggleBtn.classList.add("recording");
  quickRecBtn.style.background = "#ff3838";
  quickRecBtn.style.color = "#05070d";
  recBtnText.textContent = `REC: [${targetInst.def.keyDisplay}] ${targetInst.def.name.slice(0, 12)}…`;
  recStatusInfo.textContent = "AUFNAHME ●";
}

function stopRecording() {
  if (!recState.isRecording) return;
  recState.isRecording = false;

  const targetInst = synthInstances[recState.synthIdx];
  try {
    targetInst.bus.disconnect(recState.recNode);
    recState.recNode.disconnect();
  } catch(e){}

  recToggleBtn.classList.remove("recording");
  quickRecBtn.style.background = "rgba(255, 71, 87, 0.1)";
  quickRecBtn.style.color = "#ff4757";
  recBtnText.textContent = "LOOP AUFNEHMEN (R)";
  recStatusInfo.textContent = "BEREIT";

  if (recState.totalSamples < ctx.sampleRate * 0.25) return;

  const audioBuf = ctx.createBuffer(2, recState.totalSamples, ctx.sampleRate);
  const outL = audioBuf.getChannelData(0);
  const outR = audioBuf.getChannelData(1);

  let offset = 0;
  for (let i = 0; i < recState.leftChunks.length; i++) {
    outL.set(recState.leftChunks[i], offset);
    outR.set(recState.rightChunks[i], offset);
    offset += recState.leftChunks[i].length;
  }

  const fadeLen = Math.min(256, Math.floor(recState.totalSamples / 4));
  for (let i = 0; i < fadeLen; i++) {
    const t = i / fadeLen;
    const endIdx = recState.totalSamples - fadeLen + i;
    outL[i] = outL[i] * t + outL[endIdx] * (1 - t);
    outR[i] = outR[i] * t + outR[endIdx] * (1 - t);
  }

  createLoopLayer(audioBuf, recState.synthIdx);
}

function startLayerPlayback(layer) {
  if (!layer.isOn || !ctx) return;
  if (layer.pauseTimerId) {
    clearTimeout(layer.pauseTimerId);
    layer.pauseTimerId = null;
  }
  if (layer.srcNode) {
    try { layer.srcNode.stop(); layer.srcNode.disconnect(); } catch(e){}
    layer.srcNode = null;
  }

  const src = ctx.createBufferSource();
  src.buffer = layer.buffer;
  src.connect(layer.gainNode);

  layer.srcNode = src;
  layer.isPaused = false;
  layer.phaseStartTime = performance.now();
  layer.phaseDuration = layer.duration * 1000;

  src.onended = () => {
    layer.srcNode = null;
    if (!layer.isOn) return;

    if (layer.pauseSec > 0) {
      layer.isPaused = true;
      layer.phaseStartTime = performance.now();
      layer.phaseDuration = layer.pauseSec * 1000;
      layer.pauseTimerId = setTimeout(() => {
        layer.pauseTimerId = null;
        if (layer.isOn) startLayerPlayback(layer);
      }, layer.pauseSec * 1000);
    } else {
      startLayerPlayback(layer);
    }
  };

  src.start();
}

function stopLayerPlayback(layer) {
  if (layer.pauseTimerId) {
    clearTimeout(layer.pauseTimerId);
    layer.pauseTimerId = null;
  }
  if (layer.srcNode) {
    try { layer.srcNode.stop(); layer.srcNode.disconnect(); } catch(e){}
    layer.srcNode = null;
  }
  layer.isPaused = false;
}

function createLoopLayer(audioBuf, synthIdx, existingParams = null) {
  const def = SYNTH_DEFS[synthIdx];
  const layerGain = ctx.createGain();
  const initVol = existingParams ? (existingParams.volume ?? 0.85) : 0.85;
  const initIsOn = existingParams ? (existingParams.isOn ?? true) : true;
  const initPauseSec = existingParams ? (existingParams.pauseSec ?? 0.0) : 0.0;

  layerGain.gain.value = initIsOn ? initVol : 0;
  layerGain.connect(stackMasterGain);

  const layer = {
    id: existingParams ? existingParams.id : ("layer_" + Date.now() + "_" + Math.floor(Math.random() * 1000)),
    synthIdx,
    synthName: def.name,
    keyDisplay: def.keyDisplay,
    color: def.color,
    buffer: audioBuf,
    duration: audioBuf.duration,
    srcNode: null,
    gainNode: layerGain,
    volume: initVol,
    isOn: initIsOn,
    pauseSec: initPauseSec,
    isPaused: false,
    phaseStartTime: performance.now(),
    phaseDuration: audioBuf.duration * 1000,
    pauseTimerId: null,
    canvas: null,
    playheadEl: null,
    statusBadgeEl: null
  };

  loopStack.push(layer);
  if (layer.isOn) {
    startLayerPlayback(layer);
  }
  renderLoopStackUI();
}

function toggleLoopLayer(id) {
  const layer = loopStack.find(l => l.id === id);
  if (!layer) return;

  layer.isOn = !layer.isOn;
  const now = ctx.currentTime;
  layer.gainNode.gain.setTargetAtTime(layer.isOn ? layer.volume : 0, now, 0.04);

  if (layer.isOn) {
    startLayerPlayback(layer);
  } else {
    stopLayerPlayback(layer);
  }

  const card = document.getElementById(layer.id);
  if (card) {
    card.classList.toggle("muted", !layer.isOn);
    const btn = card.querySelector(".loop-toggle-btn");
    if (btn) {
      btn.textContent = layer.isOn ? "AN" : "AUS";
      btn.className = "loop-toggle-btn " + (layer.isOn ? "on" : "off");
    }
  }
  updateStackSummary();
}

function setLayerVolume(id, vol) {
  const layer = loopStack.find(l => l.id === id);
  if (!layer) return;
  layer.volume = vol;
  if (layer.isOn && ctx) {
    layer.gainNode.gain.setTargetAtTime(vol, ctx.currentTime, 0.04);
  }
}

function deleteLoopLayer(id) {
  const idx = loopStack.findIndex(l => l.id === id);
  if (idx === -1) return;
  const layer = loopStack[idx];
  stopLayerPlayback(layer);
  try {
    layer.gainNode.disconnect();
  } catch(e){}
  loopStack.splice(idx, 1);
  renderLoopStackUI();
}

function toggleAllLoops() {
  const anyOn = loopStack.some(l => l.isOn);
  const targetState = !anyOn;
  loopStack.forEach(layer => {
    layer.isOn = targetState;
    if (ctx) layer.gainNode.gain.setTargetAtTime(targetState ? layer.volume : 0, ctx.currentTime, 0.05);
    if (targetState) {
      startLayerPlayback(layer);
    } else {
      stopLayerPlayback(layer);
    }
  });
  renderLoopStackUI();
}

function clearAllLoops() {
  loopStack.forEach(layer => {
    stopLayerPlayback(layer);
    try {
      layer.gainNode.disconnect();
    } catch(e){}
  });
  loopStack.length = 0;
  renderLoopStackUI();
}

function updateStackSummary() {
  const activeCount = loopStack.filter(l => l.isOn).length;
  stackSummaryText.textContent = `${activeCount}/${loopStack.length} aktiv`;
  document.getElementById("stackCount").textContent = `${activeCount}`;
}

function updateLoopKnobVisual(container, val) {
  const arc = container.querySelector(".knob-arc");
  const pointer = container.querySelector(".knob-pointer");
  const num = container.querySelector(".loop-pause-val");

  num.textContent = val > 0 ? (val < 10 ? val.toFixed(1) + "s" : Math.round(val) + "s") : "0s";
  const angle = -135 + (val / 100) * 270;
  const rad = (angle - 90) * Math.PI / 180;
  const cx = 16, cy = 16, r = 11;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  if (pointer) {
    pointer.setAttribute("x2", x);
    pointer.setAttribute("y2", y);
  }

  if (arc) {
    const startAngle = -135 - 90;
    const startRad = startAngle * Math.PI / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const largeArc = (val / 100) * 270 > 180 ? 1 : 0;
    arc.setAttribute("d", `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`);
  }
}

function renderLoopStackUI() {
  loopStackContainer.innerHTML = "";
  if (loopStack.length === 0) {
    stackEmptyHint.style.display = "block";
    loopStackContainer.appendChild(stackEmptyHint);
    updateStackSummary();
    return;
  }
  stackEmptyHint.style.display = "none";

  loopStack.forEach(layer => {
    const card = document.createElement("div");
    card.className = "loop-card" + (layer.isOn ? "" : " muted");
    card.id = layer.id;
    card.style.setProperty("--card-color", layer.color);

    card.innerHTML = `
      <div class="loop-card-header">
        <div class="loop-card-title">
          <span class="tag">[${layer.keyDisplay}]</span>
          <span>${layer.synthName}</span>
          <span class="loop-status-pill" id="badge_${layer.id}">▶ 0.0s</span>
        </div>
        <div class="loop-card-actions">
          <button class="loop-toggle-btn ${layer.isOn ? 'on' : 'off'}">${layer.isOn ? 'AN' : 'AUS'}</button>
          <button class="loop-del-btn" title="Loop löschen">✕</button>
        </div>
      </div>
      <div class="loop-card-wave">
        <canvas width="260" height="16"></canvas>
        <div class="loop-playhead-bar"></div>
      </div>
      <div class="loop-vol-row">
        <div style="display:flex;align-items:center;gap:3px;flex:1;min-width:0;">
          <span>Vol</span>
          <input type="range" min="0" max="1" step="0.01" value="${layer.volume}">
          <span class="vol-num">${Math.round(layer.volume * 100)}%</span>
        </div>
        <div class="loop-knob-wrap" data-id="${layer.id}" title="Pause nach Loop (0 bis 100s). Ziehen oder Mausrad.">
          <span class="loop-knob-lbl">Pause:</span>
          <div class="knob-dial">
            <svg class="knob-svg" viewBox="0 0 32 32">
              <circle class="knob-bg" cx="16" cy="16" r="13" />
              <path class="knob-arc" d="" />
              <line class="knob-pointer" x1="16" y1="16" x2="16" y2="4" />
            </svg>
          </div>
          <span class="loop-pause-val">${layer.pauseSec > 0 ? (layer.pauseSec < 10 ? layer.pauseSec.toFixed(1) + 's' : Math.round(layer.pauseSec) + 's') : '0s'}</span>
        </div>
      </div>
    `;

    card.querySelector(".loop-toggle-btn").addEventListener("click", () => toggleLoopLayer(layer.id));
    card.querySelector(".loop-del-btn").addEventListener("click", () => deleteLoopLayer(layer.id));
    
    const volInp = card.querySelector("input[type=range]");
    const volNum = card.querySelector(".vol-num");
    volInp.addEventListener("input", e => {
      const v = parseFloat(e.target.value);
      volNum.textContent = Math.round(v * 100) + "%";
      setLayerVolume(layer.id, v);
    });

    const knob = card.querySelector(".loop-knob-wrap");
    updateLoopKnobVisual(knob, layer.pauseSec);

    let isDraggingKnob = false, startY = 0, startPause = 0;
    knob.addEventListener("pointerdown", e => {
      e.preventDefault();
      isDraggingKnob = true;
      startY = e.clientY;
      startPause = layer.pauseSec;
      knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", e => {
      if (!isDraggingKnob) return;
      const dy = startY - e.clientY;
      let nextPause = Math.max(0, Math.min(100, startPause + dy * 0.4));
      nextPause = Math.round(nextPause * 10) / 10;
      layer.pauseSec = nextPause;
      if (layer.isPaused) {
        layer.phaseDuration = Math.max(100, layer.pauseSec * 1000);
      }
      updateLoopKnobVisual(knob, nextPause);
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
      const step = e.shiftKey ? 5 : 1;
      let nextPause = Math.max(0, Math.min(100, layer.pauseSec - Math.sign(e.deltaY) * step));
      nextPause = Math.round(nextPause * 10) / 10;
      layer.pauseSec = nextPause;
      if (layer.isPaused) {
        layer.phaseDuration = Math.max(100, layer.pauseSec * 1000);
      }
      updateLoopKnobVisual(knob, nextPause);
    }, { passive: false });

    const canvas = card.querySelector("canvas");
    layer.canvas = canvas;
    layer.playheadEl = card.querySelector(".loop-playhead-bar");
    layer.statusBadgeEl = card.querySelector(`#badge_${layer.id}`);
    drawMiniWaveform(canvas, layer.buffer, layer.color);
    loopStackContainer.appendChild(card);
  });
  updateStackSummary();
}

function drawMiniWaveform(canvas, buffer, color) {
  const g = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  g.fillStyle = "#020306";
  g.fillRect(0, 0, w, h);
  const data = buffer.getChannelData(0);
  const step = Math.ceil(data.length / w);
  const amp = h / 2;

  g.strokeStyle = color;
  g.lineWidth = 1.1;
  g.beginPath();
  for (let i = 0; i < w; i++) {
    let min = 1.0, max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = data[(i * step) + j];
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    g.moveTo(i, (1 + min) * amp);
    g.lineTo(i, (1 + max) * amp);
  }
  g.stroke();
}

recToggleBtn.addEventListener("click", toggleRecording);
quickRecBtn.addEventListener("click", toggleRecording);
toggleAllLoopsBtn.addEventListener("click", toggleAllLoops);
clearStackBtn.addEventListener("click", clearAllLoops);

/* ============================================================
   AUDIO BUFFER <-> BASE64 WAV SERIALISIERUNG
   ============================================================ */
function audioBufferToWavBase64(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 3; // 3 = IEEE Float 32-bit lossless
  const bitDepth = 32;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const numSamples = buffer.length;
  const dataByteCount = numSamples * blockAlign;
  const headerByteCount = 44;
  const totalByteCount = headerByteCount + dataByteCount;

  const arrayBuffer = new ArrayBuffer(totalByteCount);
  const view = new DataView(arrayBuffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataByteCount, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataByteCount, true);

  const channels = [];
  for (let ch = 0; ch < numChannels; ch++) channels.push(buffer.getChannelData(ch));

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      view.setFloat32(offset, channels[ch][i], true);
      offset += 4;
    }
  }

  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  const chunkSize = 0x8000;
  for (let i = 0; i < len; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunkSize, len)));
  }
  return btoa(binary);
}

async function wavBase64ToAudioBuffer(base64Str) {
  initAudio();
  const binary = atob(base64Str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return await ctx.decodeAudioData(bytes.buffer);
}
