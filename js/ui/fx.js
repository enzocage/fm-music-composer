"use strict";

/* ============================================================
   10 HIGH-END FX MODULES UI CONTROLLER (FX.MD)
   Direct 10-Module Grid & Interactive Real-Time Controls
   ============================================================ */

let currentFxViewFilter = "all"; // 'all' | 'shimmer' | 'resonator' | ...

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

  const block = document.getElementById("fx_block_" + fxId + "_" + paramKey);
  const spanEl = document.getElementById("fx_span_" + fxId + "_" + paramKey);
  const handleA = document.getElementById("fx_handle_a_" + fxId + "_" + paramKey);
  const handleB = document.getElementById("fx_handle_b_" + fxId + "_" + paramKey);
  const thumb = document.getElementById("fx_thumb_" + fxId + "_" + paramKey);
  const knob = document.getElementById("fx_knob_" + fxId + "_" + paramKey);
  const chk = document.getElementById("fx_osc_en_" + fxId + "_" + paramKey);
  const valEl = document.getElementById("fx_v_" + fxId + "_" + paramKey);

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
    '<div class="param-row-unified" id="fx_block_' + fxId + '_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
      '<div class="p-header">' +
        '<span class="p-name">' + (b.name || paramKey) + '</span>' +
        '<div class="p-right">' +
          '<span class="p-val" id="fx_v_' + fxId + '_' + paramKey + '">' + dispVal + '</span>' +
          '<label class="osc-toggle-label" title="Oszillation An/Aus">' +
            '<input type="checkbox" id="fx_osc_en_' + fxId + '_' + paramKey + '" class="osc-chk" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
            '<span class="osc-badge">~ OSC</span>' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="p-controls-row">' +
        '<div class="track-area" id="fx_trackarea_' + fxId + '_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '">' +
          '<div class="track-line"></div>' +
          '<div class="track-span" id="fx_span_' + fxId + '_' + paramKey + '"></div>' +
          '<div class="handle handle-a" id="fx_handle_a_' + fxId + '_' + paramKey + '" title="Start A"><span class="h-tag">A</span></div>' +
          '<div class="handle handle-b" id="fx_handle_b_' + fxId + '_' + paramKey + '" title="Ende B"><span class="h-tag">B</span></div>' +
          '<div class="handle handle-thumb" id="fx_thumb_' + fxId + '_' + paramKey + '" title="Wert ziehen"></div>' +
        '</div>' +
        '<div class="knob-mini-wrap" id="fx_knob_' + fxId + '_' + paramKey + '" data-fx="' + fxId + '" data-param="' + paramKey + '" title="Oszillations-Speed (0.01–10 Hz)">' +
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
  const block = document.getElementById("fx_block_" + fxId + "_" + paramKey);
  const trackArea = document.getElementById("fx_trackarea_" + fxId + "_" + paramKey);
  const handleA = document.getElementById("fx_handle_a_" + fxId + "_" + paramKey);
  const handleB = document.getElementById("fx_handle_b_" + fxId + "_" + paramKey);
  const thumb = document.getElementById("fx_thumb_" + fxId + "_" + paramKey);
  const knob = document.getElementById("fx_knob_" + fxId + "_" + paramKey);
  const chk = document.getElementById("fx_osc_en_" + fxId + "_" + paramKey);

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

function updateFxCardState(fxId) {
  const fx = FX_CONFIG[fxId];
  if (!fx) return;

  const card = document.getElementById("fxcard_" + fxId);
  const powerBtn = document.getElementById("fxpower_" + fxId);
  const mixSlider = document.getElementById("fxmix_" + fxId);
  const mixValEl = document.getElementById("fx_v_mix_" + fxId);

  if (card) {
    card.classList.toggle("fx-active", !!fx.enabled);
  }
  if (powerBtn) {
    powerBtn.classList.toggle("active", !!fx.enabled);
    powerBtn.textContent = fx.enabled ? "● AN" : "○ AUS";
    powerBtn.style.color = fx.enabled ? "#05070d" : "var(--dim)";
    powerBtn.style.background = fx.enabled ? (fx.color || "#38c7ff") : "rgba(255,255,255,0.05)";
    powerBtn.style.borderColor = fx.enabled ? (fx.color || "#38c7ff") : "var(--rule)";
  }
  if (mixSlider) {
    mixSlider.value = fx.mix;
  }
  if (mixValEl) {
    mixValEl.textContent = Math.round(fx.mix * 100) + "%";
  }

  // Update overall active counter badge
  updateFxActiveCounter();
}

function updateFxActiveCounter() {
  const countBadge = document.getElementById("fxActiveCountBadge");
  if (!countBadge) return;
  const activeCount = Object.values(FX_CONFIG).filter(f => f.enabled).length;
  countBadge.textContent = `${activeCount} / 10 Aktiv`;
  countBadge.style.color = activeCount > 0 ? "#00ff88" : "#38c7ff";
  countBadge.style.borderColor = activeCount > 0 ? "rgba(0,255,136,0.4)" : "rgba(56,199,255,0.3)";
}

function renderAllFxRack() {
  const container = document.getElementById("fxParamsContainer");
  if (!container) return;

  container.innerHTML = "";

  const modulesToRender = (currentFxViewFilter === "all")
    ? FX_CHAIN_ORDER
    : [currentFxViewFilter];

  modulesToRender.forEach((fxId, idx) => {
    const fx = FX_CONFIG[fxId];
    if (!fx) return;

    const card = document.createElement("div");
    card.className = "param-group-card fx-module-card" + (fx.enabled ? " fx-active" : "");
    card.id = "fxcard_" + fxId;
    card.style.setProperty("--grp-color", fx.color || "#38c7ff");

    const header = document.createElement("div");
    header.className = "param-group-header";
    header.innerHTML = `
      <div class="param-group-title">
        <span class="param-group-badge" style="background:${fx.color}22; color:${fx.color}; border-color:${fx.color};">${fx.icon} FX ${FX_CHAIN_ORDER.indexOf(fxId) + 1}</span>
        <span style="color:${fx.color}; font-weight:800;">${fx.name}</span>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <button type="button" class="kb-latch-toggle fx-power-btn ${fx.enabled ? 'active' : ''}" data-fx="${fxId}" id="fxpower_${fxId}" style="padding:2px 7px; font-size:7.5px; height:18px; ${fx.enabled ? `background:${fx.color}; color:#05070d; border-color:${fx.color};` : ''}">
          ${fx.enabled ? '● AN' : '○ AUS'}
        </button>
        <div style="display:flex; align-items:center; gap:2px;" title="Wet / Dry Mix Anteil">
          <span style="font-size:7px; color:var(--dim);">MIX:</span>
          <input type="range" class="fx-card-mix-slider" data-fx="${fxId}" id="fxmix_${fxId}" min="0" max="1" step="0.01" value="${fx.mix}" style="width:42px; height:12px;">
          <span id="fx_v_mix_${fxId}" style="font-size:7px; color:${fx.color}; font-weight:700; width:22px; text-align:right;">${Math.round(fx.mix * 100)}%</span>
        </div>
      </div>
    `;

    const rowsWrap = document.createElement("div");
    rowsWrap.className = "param-group-rows";

    Object.keys(fx.params).forEach(pKey => {
      const pObj = fx.params[pKey];
      rowsWrap.insertAdjacentHTML("beforeend", buildFxParamRowHTML(fxId, pKey, pObj));
    });

    card.appendChild(header);
    card.appendChild(rowsWrap);
    container.appendChild(card);

    // Bind parameter row drag and knob events
    Object.keys(fx.params).forEach(pKey => {
      bindFxParamRow(fxId, pKey);
      updateFxParamRowVisual(fxId, pKey);
    });

    // Bind card power toggle button
    const powerBtn = header.querySelector(".fx-power-btn");
    if (powerBtn) {
      powerBtn.addEventListener("click", () => {
        toggleFx(fxId);
      });
    }

    // Bind card mix slider
    const mixSlider = header.querySelector(".fx-card-mix-slider");
    if (mixSlider) {
      mixSlider.addEventListener("input", () => {
        setFxMix(fxId, parseFloat(mixSlider.value));
        const mixValEl = document.getElementById("fx_v_mix_" + fxId);
        if (mixValEl) mixValEl.textContent = Math.round(fx.mix * 100) + "%";
      });
    }
  });

  updateFxActiveCounter();
}

function setupFxControls() {
  // Filter tabs in FX toolbar
  const filterBtns = document.querySelectorAll("#fxViewFilterBar .param-cluster-tab");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFxViewFilter = btn.dataset.fxFilter || "all";
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAllFxRack();
    });
  });

  // Global "Alle AN / AUS" button
  const btnToggleAll = document.getElementById("btnFxToggleAll");
  if (btnToggleAll) {
    btnToggleAll.addEventListener("click", () => {
      const anyActive = Object.values(FX_CONFIG).some(f => f.enabled);
      const targetState = !anyActive;
      FX_CHAIN_ORDER.forEach(id => {
        toggleFx(id, targetState);
      });
    });
  }

  // Global "FX Mutieren" button
  const btnFxMutate = document.getElementById("btnFxMutate");
  if (btnFxMutate) {
    btnFxMutate.addEventListener("click", () => {
      FX_CHAIN_ORDER.forEach(fxId => {
        const fx = FX_CONFIG[fxId];
        if (!fx) return;
        Object.keys(fx.params).forEach(pKey => {
          const p = fx.params[pKey];
          const span = p.max - p.min;
          p.val = p.min + Math.random() * span;
          if (p.step) p.val = Math.round(p.val / p.step) * p.step;
          applyFxParamChange(fxId, pKey);
          updateFxParamRowVisual(fxId, pKey);
        });
      });
      btnFxMutate.style.transform = "scale(0.95)";
      setTimeout(() => btnFxMutate.style.transform = "", 150);
    });
  }

  // Global "Reset" button
  const btnFxReset = document.getElementById("btnFxReset");
  if (btnFxReset) {
    btnFxReset.addEventListener("click", () => {
      FX_CHAIN_ORDER.forEach(id => {
        toggleFx(id, false);
      });
    });
  }

  renderAllFxRack();
}
