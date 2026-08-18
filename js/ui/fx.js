"use strict";

/* ============================================================
   10 HIGH-END FX MODULES UI CONTROLLER (FX.MD)
   ============================================================ */

function getFxParamBounds(fxId, paramKey) {
  const fx = FX_CONFIG[fxId];
  if (!fx || !fx.params[paramKey]) return { min: 0, max: 10, step: 0.01 };
  return fx.params[paramKey];
}

function fxValToPct(fxId, paramKey, val) {
  const b = getFxParamBounds(fxId, paramKey);
  const span = b.max - b.min;
  if (span <= 0) return 0;
  const clamped = Math.max(b.min, Math.min(b.max, val));
  return (clamped - b.min) / span;
}

function fxPctToVal(fxId, paramKey, pct) {
  const b = getFxParamBounds(fxId, paramKey);
  const clamped = Math.max(0, Math.min(1, pct));
  const raw = b.min + clamped * (b.max - b.min);
  if (b.step) {
    const inv = 1 / b.step;
    return Math.round(raw * inv) / inv;
  }
  return raw;
}

function updateFxParamRowVisual(fxId, paramKey) {
  const fx = FX_CONFIG[fxId];
  if (!fx || !fx.oscillators || !fx.oscillators[paramKey]) return;
  const osc = fx.oscillators[paramKey];
  const p = fx.params[paramKey];

  const block = document.getElementById("fx_block_" + paramKey);
  const spanEl = document.getElementById("fx_span_" + paramKey);
  const handleA = document.getElementById("fx_handle_a_" + paramKey);
  const handleB = document.getElementById("fx_handle_b_" + paramKey);
  const thumb = document.getElementById("fx_thumb_" + paramKey);
  const knob = document.getElementById("fx_knob_" + paramKey);
  const chk = document.getElementById("fx_osc_en_" + paramKey);
  const valEl = document.getElementById("fx_v_" + paramKey);

  if (!block) return;

  if (chk) chk.checked = osc.enabled;
  block.classList.toggle("osc-active", osc.enabled);

  const pctA = Math.max(0, Math.min(1, fxValToPct(fxId, paramKey, osc.min)));
  const pctB = Math.max(0, Math.min(1, fxValToPct(fxId, paramKey, osc.max)));
  const curVal = p.val;
  const pctThumb = Math.max(0, Math.min(1, fxValToPct(fxId, paramKey, curVal)));

  if (handleA) handleA.style.left = (pctA * 100).toFixed(2) + "%";
  if (handleB) handleB.style.left = (pctB * 100).toFixed(2) + "%";
  if (thumb) thumb.style.left = (pctThumb * 100).toFixed(2) + "%";

  if (spanEl) {
    const minP = Math.min(pctA, pctB);
    const maxP = Math.max(pctA, pctB);
    spanEl.style.left = (minP * 100).toFixed(2) + "%";
    spanEl.style.width = ((maxP - minP) * 100).toFixed(2) + "%";
  }

  if (knob && typeof updateKnobVisual === "function") updateKnobVisual(knob, osc.speed);
  if (valEl) valEl.textContent = p.fmt ? p.fmt(curVal) : curVal.toFixed(2);
}

function buildFxParamRowHTML(fxId, paramKey, pObj) {
  const b = pObj;
  const curVal = pObj.val;
  const dispVal = b.fmt ? b.fmt(curVal) : curVal.toFixed(2);
  const osc = (FX_CONFIG[fxId].oscillators && FX_CONFIG[fxId].oscillators[paramKey]) || { speed: 20 };

  return (
    '<div class="param-row-unified" id="fx_block_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
      '<div class="p-header">' +
        '<span class="p-name">' + (b.name || paramKey) + '</span>' +
        '<div class="p-right">' +
          '<span class="p-val" id="fx_v_' + paramKey + '">' + dispVal + '</span>' +
          '<label class="osc-toggle-label" title="Oszillation An/Aus">' +
            '<input type="checkbox" id="fx_osc_en_' + paramKey + '" class="osc-chk" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
            '<span class="osc-badge">~ OSC</span>' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="p-controls-row">' +
        '<div class="track-area" id="fx_trackarea_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
          '<div class="track-line"></div>' +
          '<div class="track-span" id="fx_span_' + paramKey + '"></div>' +
          '<div class="handle handle-a" id="fx_handle_a_' + paramKey + '" title="Start A"><span class="h-tag">A</span></div>' +
          '<div class="handle handle-b" id="fx_handle_b_' + paramKey + '" title="Ende B"><span class="h-tag">B</span></div>' +
          '<div class="handle handle-thumb" id="fx_thumb_' + paramKey + '" title="Wert ziehen"></div>' +
        '</div>' +
        '<div class="knob-mini-wrap" id="fx_knob_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '" title="Oszillations-Speed (0.01–10 Hz)">' +
          '<div class="knob-dial">' +
            '<svg class="knob-svg" viewBox="0 0 32 32">' +
              '<circle class="knob-bg" cx="16" cy="16" r="13" />' +
              '<path class="knob-arc" d="" />' +
              '<line class="knob-pointer" x1="16" y1="16" x2="16" y2="4" />' +
            '</svg>' +
          '</div>' +
          '<span class="knob-val">' + Math.round(osc.speed || 20) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function bindFxParamRow(fxId, paramKey) {
  const block = document.getElementById("fx_block_" + paramKey);
  const trackArea = document.getElementById("fx_trackarea_" + paramKey);
  const handleA = document.getElementById("fx_handle_a_" + paramKey);
  const handleB = document.getElementById("fx_handle_b_" + paramKey);
  const thumb = document.getElementById("fx_thumb_" + paramKey);
  const knob = document.getElementById("fx_knob_" + paramKey);
  const chk = document.getElementById("fx_osc_en_" + paramKey);

  if (!block || !trackArea) return;

  if (chk) {
    chk.addEventListener("change", () => {
      const fx = FX_CONFIG[fxId];
      if (fx.oscillators && fx.oscillators[paramKey]) {
        fx.oscillators[paramKey].enabled = chk.checked;
        updateFxParamRowVisual(fxId, paramKey);
      }
    });
  }

  if (knob) {
    let isDraggingKnob = false, startY = 0, startSpeed = 0;
    knob.addEventListener("pointerdown", e => {
      e.preventDefault();
      isDraggingKnob = true;
      startY = e.clientY;
      const fx = FX_CONFIG[fxId];
      startSpeed = fx.oscillators[paramKey] ? fx.oscillators[paramKey].speed : 20;
      knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", e => {
      if (!isDraggingKnob) return;
      const dy = startY - e.clientY;
      const fx = FX_CONFIG[fxId];
      if (fx.oscillators[paramKey]) {
        const nextSpeed = Math.max(0, Math.min(100, startSpeed + dy * 0.75));
        fx.oscillators[paramKey].speed = nextSpeed;
        if (typeof updateKnobVisual === "function") updateKnobVisual(knob, nextSpeed);
      }
    });

    const onKnobUp = e => {
      if (!isDraggingKnob) return;
      isDraggingKnob = false;
      try { knob.releasePointerCapture(e.pointerId); } catch(err){}
    };
    knob.addEventListener("pointerup", onKnobUp);
    knob.addEventListener("pointercancel", onKnobUp);
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
    const val = fxPctToVal(fxId, paramKey, pct);
    const fx = FX_CONFIG[fxId];

    if (activeDragTarget === "a" && fx.oscillators[paramKey]) {
      fx.oscillators[paramKey].min = val;
    } else if (activeDragTarget === "b" && fx.oscillators[paramKey]) {
      fx.oscillators[paramKey].max = val;
    } else if (activeDragTarget === "thumb" || activeDragTarget === "track") {
      fx.params[paramKey].val = val;
      applyFxParamChange(fxId, paramKey);
    }
    updateFxParamRowVisual(fxId, paramKey);
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
      activeDragTarget = "thumb";
      const val = fxPctToVal(fxId, paramKey, getTrackPct(e));
      FX_CONFIG[fxId].params[paramKey].val = val;
      applyFxParamChange(fxId, paramKey);
      if (thumb) thumb.classList.add("dragging");
    }
    updateFxParamRowVisual(fxId, paramKey);
  });

  trackArea.addEventListener("pointermove", onPointerMoveTrack);
  trackArea.addEventListener("pointerup", onPointerUpTrack);
  trackArea.addEventListener("pointercancel", onPointerUpTrack);
}

function renderActiveFxRack() {
  const container = document.getElementById("fxParamsContainer");
  if (!container) return;

  const fx = FX_CONFIG[activeFxId];
  if (!fx) return;

  const titleEl = document.getElementById("fxActiveTitle");
  if (titleEl) titleEl.textContent = `${fx.icon} ${fx.name}`;

  const bypassBtn = document.getElementById("fxBypassBtn");
  if (bypassBtn) {
    bypassBtn.classList.toggle("active", !!fx.enabled);
    bypassBtn.textContent = fx.enabled ? "AN" : "AUS";
  }

  const mixInp = document.getElementById("fxMixSlider");
  if (mixInp) {
    mixInp.value = fx.mix;
    const mixVal = document.getElementById("v_fxMix");
    if (mixVal) mixVal.textContent = Math.round(fx.mix * 100) + " %";
  }

  container.innerHTML = "";
  Object.keys(fx.params).forEach(pKey => {
    const pObj = fx.params[pKey];
    container.insertAdjacentHTML("beforeend", buildFxParamRowHTML(activeFxId, pKey, pObj));
    bindFxParamRow(activeFxId, pKey);
    updateFxParamRowVisual(activeFxId, pKey);
  });
}

function setupFxControls() {
  const selector = document.getElementById("fxModuleSelector");
  if (selector) {
    selector.innerHTML = "";
    Object.keys(FX_CONFIG).forEach(fxId => {
      const fx = FX_CONFIG[fxId];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "fx-tab-btn" + (fxId === activeFxId ? " active" : "") + (fx.enabled ? " fx-on" : "");
      btn.id = "fxtab_" + fxId;
      btn.innerHTML = `<span>${fx.icon}</span> <span>${fx.name.split(" ")[0]}</span>`;
      btn.title = fx.name;
      btn.addEventListener("click", () => {
        activeFxId = fxId;
        document.querySelectorAll(".fx-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderActiveFxRack();
      });
      selector.appendChild(btn);
    });
  }

  const bypassBtn = document.getElementById("fxBypassBtn");
  if (bypassBtn) {
    bypassBtn.addEventListener("click", () => {
      const fx = FX_CONFIG[activeFxId];
      fx.enabled = !fx.enabled;
      bypassBtn.classList.toggle("active", fx.enabled);
      bypassBtn.textContent = fx.enabled ? "AN" : "AUS";
      const tabBtn = document.getElementById("fxtab_" + activeFxId);
      if (tabBtn) tabBtn.classList.toggle("fx-on", fx.enabled);
    });
  }

  const mixInp = document.getElementById("fxMixSlider");
  if (mixInp) {
    mixInp.addEventListener("input", () => {
      const fx = FX_CONFIG[activeFxId];
      fx.mix = parseFloat(mixInp.value);
      const mixVal = document.getElementById("v_fxMix");
      if (mixVal) mixVal.textContent = Math.round(fx.mix * 100) + " %";
    });
  }

  renderActiveFxRack();
}
