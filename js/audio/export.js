"use strict";

/* ============================================================
   Master Audio Recording & WAV / 320k MP3 Export Engine
   ============================================================ */
const masterRecState = {
  recording: false,
  startTime: 0,
  chunksL: [],
  chunksR: [],
  timerInterval: null,
  recNode: null,
  recordedBufferL: null,
  recordedBufferR: null,
  sampleRate: 44100,
  previewAudio: null,
  previewIsPlaying: false,
  previewTimerInterval: null
};

function toggleMasterRecording() {
  ensureAudioActive();
  if (!masterRecState.recording) {
    startMasterRecording();
  } else {
    stopMasterRecording();
  }
}

function startMasterRecording() {
  if (masterRecState.recording) return;
  masterRecState.recording = true;
  masterRecState.startTime = ctx.currentTime;
  masterRecState.chunksL = [];
  masterRecState.chunksR = [];
  masterRecState.sampleRate = ctx.sampleRate || 44100;

  // Create Stereo ScriptProcessorNode to tap comp (master compressor output)
  masterRecState.recNode = ctx.createScriptProcessor(4096, 2, 2);
  masterRecState.recNode.onaudioprocess = (e) => {
    if (!masterRecState.recording) return;
    const l = e.inputBuffer.getChannelData(0);
    const r = e.inputBuffer.getChannelData(1);
    masterRecState.chunksL.push(new Float32Array(l));
    masterRecState.chunksR.push(new Float32Array(r));
  };

  comp.connect(masterRecState.recNode);
  masterRecState.recNode.connect(ctx.destination);

  const btn = document.getElementById("masterRecBtn");
  const txt = document.getElementById("masterRecTxt");
  if (btn) btn.classList.add("recording");
  if (txt) txt.textContent = "REC 00:00";

  clearInterval(masterRecState.timerInterval);
  masterRecState.timerInterval = setInterval(() => {
    const elapsed = Math.floor(ctx.currentTime - masterRecState.startTime);
    const m = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const s = String(elapsed % 60).padStart(2, "0");
    if (txt) txt.textContent = "REC " + m + ":" + s;
  }, 500);
}

function stopMasterRecording() {
  if (!masterRecState.recording) return;
  masterRecState.recording = false;
  clearInterval(masterRecState.timerInterval);

  if (masterRecState.recNode) {
    try {
      masterRecState.recNode.disconnect();
      comp.disconnect(masterRecState.recNode);
    } catch(e) {}
  }

  const btn = document.getElementById("masterRecBtn");
  const txt = document.getElementById("masterRecTxt");
  if (btn) btn.classList.remove("recording");
  if (txt) txt.textContent = "REC SONG";

  // Merge chunks
  const totalLength = masterRecState.chunksL.reduce((acc, chunk) => acc + chunk.length, 0);
  if (totalLength === 0) return;

  const fullL = new Float32Array(totalLength);
  const fullR = new Float32Array(totalLength);
  let offset = 0;
  for (let i = 0; i < masterRecState.chunksL.length; i++) {
    fullL.set(masterRecState.chunksL[i], offset);
    fullR.set(masterRecState.chunksR[i], offset);
    offset += masterRecState.chunksL[i].length;
  }

  masterRecState.recordedBufferL = fullL;
  masterRecState.recordedBufferR = fullR;

  // Open Export Modal
  openAudioExportModal();
}

function openAudioExportModal() {
  const modal = document.getElementById("audioExportModal");
  if (!modal) return;
  modal.classList.remove("hidden");

  const totalSec = masterRecState.recordedBufferL.length / masterRecState.sampleRate;
  const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
  const s = String(Math.floor(totalSec % 60)).padStart(2, "0");
  const badge = document.getElementById("exportDurationBadge");
  if (badge) badge.textContent = "Dauer: " + m + ":" + s + " · " + masterRecState.sampleRate + "Hz Stereo";

  drawExportWaveform();
  setupAudioPreview();
}

function closeAudioExportModal() {
  const modal = document.getElementById("audioExportModal");
  if (modal) modal.classList.add("hidden");
  stopPreviewAudio();
}

function drawExportWaveform() {
  const canvas = document.getElementById("exportWaveformCanvas");
  if (!canvas || !masterRecState.recordedBufferL) return;
  const ctx2d = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx2d.clearRect(0, 0, w, h);

  ctx2d.fillStyle = "#030509";
  ctx2d.fillRect(0, 0, w, h);

  // Center line
  ctx2d.strokeStyle = "#141c2c";
  ctx2d.beginPath();
  ctx2d.moveTo(0, h / 2);
  ctx2d.lineTo(w, h / 2);
  ctx2d.stroke();

  const dataL = masterRecState.recordedBufferL;
  const step = Math.ceil(dataL.length / w);
  const mid = h / 2;

  const grad = ctx2d.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "#ff4757");
  grad.addColorStop(0.5, "#38c7ff");
  grad.addColorStop(1, "#2ed573");
  ctx2d.fillStyle = grad;

  for (let x = 0; x < w; x++) {
    let min = 1.0, max = -1.0;
    const start = x * step;
    for (let j = 0; j < step && start + j < dataL.length; j++) {
      const val = dataL[start + j];
      if (val < min) min = val;
      if (val > max) max = val;
    }
    const yTop = mid - max * (h / 2 - 2);
    const yBot = mid - min * (h / 2 - 2);
    ctx2d.fillRect(x, yTop, 1, Math.max(1, yBot - yTop));
  }
}

function setupAudioPreview() {
  stopPreviewAudio();
  const wavBlob = encodeWAV(masterRecState.recordedBufferL, masterRecState.recordedBufferR, masterRecState.sampleRate);
  const audioUrl = URL.createObjectURL(wavBlob);
  masterRecState.previewAudio = new Audio(audioUrl);

  const playBtn = document.getElementById("previewAudioPlayBtn");
  const timer = document.getElementById("previewAudioTimer");

  if (playBtn) playBtn.textContent = "▶ Vorhören";
  if (timer) timer.textContent = "00:00 / 00:00";

  masterRecState.previewAudio.onended = () => {
    masterRecState.previewIsPlaying = false;
    if (playBtn) playBtn.textContent = "▶ Vorhören";
    clearInterval(masterRecState.previewTimerInterval);
  };
}

function togglePreviewAudio() {
  const audio = masterRecState.previewAudio;
  const playBtn = document.getElementById("previewAudioPlayBtn");
  const timer = document.getElementById("previewAudioTimer");
  if (!audio) return;

  if (!masterRecState.previewIsPlaying) {
    audio.play();
    masterRecState.previewIsPlaying = true;
    if (playBtn) playBtn.textContent = "⏸ Pause";

    clearInterval(masterRecState.previewTimerInterval);
    masterRecState.previewTimerInterval = setInterval(() => {
      const cur = Math.floor(audio.currentTime);
      const dur = Math.floor(audio.duration || 0);
      const curM = String(Math.floor(cur / 60)).padStart(2, "0");
      const curS = String(cur % 60).padStart(2, "0");
      const durM = String(Math.floor(dur / 60)).padStart(2, "0");
      const durS = String(dur % 60).padStart(2, "0");
      if (timer) timer.textContent = curM + ":" + curS + " / " + durM + ":" + durS;
    }, 200);
  } else {
    audio.pause();
    masterRecState.previewIsPlaying = false;
    if (playBtn) playBtn.textContent = "▶ Vorhören";
    clearInterval(masterRecState.previewTimerInterval);
  }
}

function stopPreviewAudio() {
  if (masterRecState.previewAudio) {
    try {
      masterRecState.previewAudio.pause();
      masterRecState.previewAudio.currentTime = 0;
    } catch(e) {}
  }
  masterRecState.previewIsPlaying = false;
  clearInterval(masterRecState.previewTimerInterval);
}

// ------------------------------------------------------------
// Lossless 16-Bit Stereo WAV Encoder
// ------------------------------------------------------------
function encodeWAV(samplesL, samplesR, sampleRate = 44100) {
  const numChannels = 2;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const blockAlign = numChannels * bytesPerSample;
  const numSamples = samplesL.length;
  const dataSize = numSamples * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  function writeStr(offset, str) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  // RIFF header
  writeStr(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, "WAVE");

  // fmt chunk
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);

  // data chunk
  writeStr(36, "data");
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    let sL = Math.max(-1, Math.min(1, samplesL[i]));
    let sR = Math.max(-1, Math.min(1, samplesR[i]));
    view.setInt16(offset, sL < 0 ? sL * 0x8000 : sL * 0x7FFF, true);
    offset += 2;
    view.setInt16(offset, sR < 0 ? sR * 0x8000 : sR * 0x7FFF, true);
    offset += 2;
  }

  return new Blob([view], { type: "audio/wav" });
}

// ------------------------------------------------------------
// 320 kbps CBR MP3 Encoder (via lamejs with chunked processing)
// ------------------------------------------------------------
function encodeMP3_320k(samplesL, samplesR, sampleRate = 44100) {
  if (typeof lamejs !== "undefined" && lamejs.Mp3Encoder) {
    const mp3encoder = new lamejs.Mp3Encoder(2, sampleRate, 320);
    const mp3Data = [];
    const sampleBlockSize = 1152;
    const numSamples = samplesL.length;

    // Convert Float32 to Int16
    const leftInt = new Int16Array(numSamples);
    const rightInt = new Int16Array(numSamples);
    for (let i = 0; i < numSamples; i++) {
      let sL = Math.max(-1, Math.min(1, samplesL[i]));
      let sR = Math.max(-1, Math.min(1, samplesR[i]));
      leftInt[i] = sL < 0 ? sL * 0x8000 : sL * 0x7FFF;
      rightInt[i] = sR < 0 ? sR * 0x8000 : sR * 0x7FFF;
    }

    for (let i = 0; i < numSamples; i += sampleBlockSize) {
      const lChunk = leftInt.subarray(i, i + sampleBlockSize);
      const rChunk = rightInt.subarray(i, i + sampleBlockSize);
      const mp3buf = mp3encoder.encodeBuffer(lChunk, rChunk);
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }
    }

    const mp3End = mp3encoder.flush();
    if (mp3End.length > 0) {
      mp3Data.push(mp3End);
    }

    return new Blob(mp3Data, { type: "audio/mp3" });
  } else {
    // Fallback: return WAV as audio Blob
    return encodeWAV(samplesL, samplesR, sampleRate);
  }
}

function triggerAudioDownload(blob, extension = "wav") {
  const now = new Date();
  const dStr = now.toISOString().slice(0, 10) + "_" + String(now.getHours()).padStart(2, "0") + String(now.getMinutes()).padStart(2, "0");
  const filename = "fm_music_composer_song_" + dStr + "." + extension;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

// Setup Event Listeners
const masterRecBtn = document.getElementById("masterRecBtn");
const closeAudioExportBtn = document.getElementById("closeAudioExportBtn");
const finishExportBtn = document.getElementById("finishExportBtn");
const previewAudioPlayBtn = document.getElementById("previewAudioPlayBtn");
const downloadWavBtn = document.getElementById("downloadWavBtn");
const downloadMp3Btn = document.getElementById("downloadMp3Btn");

if (masterRecBtn) masterRecBtn.addEventListener("click", toggleMasterRecording);
if (closeAudioExportBtn) closeAudioExportBtn.addEventListener("click", closeAudioExportModal);
if (finishExportBtn) finishExportBtn.addEventListener("click", closeAudioExportModal);
if (previewAudioPlayBtn) previewAudioPlayBtn.addEventListener("click", togglePreviewAudio);

if (downloadWavBtn) {
  downloadWavBtn.addEventListener("click", () => {
    if (!masterRecState.recordedBufferL) return;
    const blob = encodeWAV(masterRecState.recordedBufferL, masterRecState.recordedBufferR, masterRecState.sampleRate);
    triggerAudioDownload(blob, "wav");
  });
}

if (downloadMp3Btn) {
  downloadMp3Btn.addEventListener("click", () => {
    if (!masterRecState.recordedBufferL) return;
    const blob = encodeMP3_320k(masterRecState.recordedBufferL, masterRecState.recordedBufferR, masterRecState.sampleRate);
    triggerAudioDownload(blob, "mp3");
  });
}
