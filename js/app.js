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

        if (param === "customParam" || param === "custom_math") {
          inst.customVal = val;
          inst.params[param] = val;
          if (sIdx === activeSynthIdx) {
            updateParamRowVisual(param);
          }
          applyParamChange(param, sIdx);
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

    // ------------------------------------------------------------
    // 10 High-End Audio FX Modules Parameter Oscillations (FX.MD)
    // ------------------------------------------------------------
    if (typeof FX_CONFIG !== "undefined") {
      Object.keys(FX_CONFIG).forEach(fxId => {
        const fx = FX_CONFIG[fxId];
        if (!fx || !fx.oscillators) return;
        Object.keys(fx.params).forEach(pKey => {
          const osc = fx.oscillators[pKey];
          if (!osc || !osc.enabled) return;

          const f_osc = 0.01 + Math.pow(osc.speed / 100, 2) * 4.5;
          osc.phase += 2 * Math.PI * f_osc * dt;
          if (osc.phase > Math.PI * 2) osc.phase -= Math.PI * 2;

          const sineVal = 0.5 * (1 + Math.sin(osc.phase));
          const val = osc.min + (osc.max - osc.min) * sineVal;
          fx.params[pKey].val = val;

          if (fxId === activeFxId && typeof updateFxParamRowVisual === "function") {
            updateFxParamRowVisual(fxId, pKey);
          }
          if (typeof applyFxParamChange === "function") {
            applyFxParamChange(fxId, pKey);
          }
        });
      });
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
setupClusterTabs();
setupArpControls();
setupPercControls();
if (typeof setupFxControls === "function") setupFxControls();
applyInitialLayout();
selectSynth(0);
readColors();
requestAnimationFrame(renderFrame);
