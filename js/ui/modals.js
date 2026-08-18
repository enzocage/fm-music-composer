"use strict";

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
   Bessel-Funktion J_n(x)
   ============================================================ */
function besselJ(n, x) {
  n = Math.abs(n);
  if (x === 0) return n === 0 ? 1 : 0;
  const h = x / 2;
  let term = 1;
  for (let i = 1; i <= n; i++) term *= h / i;
  let sum = term;
  for (let k = 1; k < 75; k++) {
    term *= -(h * h) / (k * (n + k));
    sum += term;
    if (Math.abs(term) < 1e-16 * Math.abs(sum) && k > x) break;
  }
  return sum;
}

/* ============================================================
   Canvas-Grafik & Visualisierung mit ResizeObserver
   ============================================================ */
const CV = {};
["cWave", "cFreq", "cSpec", "cOrb"].forEach(id => {
  const c = document.getElementById(id);
  CV[id] = { c, g: c.getContext("2d"), w: 0, h: 0 };
});

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  for (const k in CV) {
    const o = CV[k];
    const r = o.c.getBoundingClientRect();
    o.w = Math.max(1, Math.round(r.width));
    o.h = Math.max(1, Math.round(r.height));
    o.c.width = o.w * dpr;
    o.c.height = o.h * dpr;
    o.g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  orbFirst = true;
}
window.addEventListener("resize", resize);

if (window.ResizeObserver && plotsContainer) {
  const ro = new ResizeObserver(() => resize());
  ro.observe(plotsContainer);
}

const cssVal = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
let COLORS = {};
function readColors() {
  COLORS = {
    panel: cssVal("--panel"),
    grid: cssVal("--grid"),
    rule: cssVal("--rule"),
    dim: cssVal("--dim"),
    dimmer: cssVal("--dimmer"),
    fg: cssVal("--fg"),
    mess: cssVal("--mess"),
    modl: cssVal("--modl"),
    phos: cssVal("--phos"),
    hot: cssVal("--hot"),
    rec: cssVal("--rec"),
    accent: synthInstances[activeSynthIdx].def.color
  };
}

function drawGrid(g, w, h, rows, cols) {
  g.strokeStyle = COLORS.grid;
  g.lineWidth = 1;
  g.beginPath();
  for (let i = 1; i < rows; i++) {
    const y = Math.round(h * i / rows) + 0.5;
    g.moveTo(0, y); g.lineTo(w, y);
  }
  for (let i = 1; i < cols; i++) {
    const x = Math.round(w * i / cols) + 0.5;
    g.moveTo(x, 0); g.lineTo(x, h);
  }
  g.stroke();
}

function drawLabel(g, txt, x, y, col, size, align) {
  g.fillStyle = col;
  g.font = (size || 9) + "px " + cssVal("--mono");
  g.textAlign = align || "left";
  g.fillText(txt, x, y);
  g.textAlign = "left";
}

/* ------------------------------------------------------------
   Panel 1: Zeitfunktion y(t)
   ------------------------------------------------------------ */
function drawWave(currentI, activeInst) {
  const o = CV.cWave, g = o.g, w = o.w, h = o.h, mid = h * 0.54;
  g.fillStyle = "#070c18";
  g.fillRect(0, 0, w, h);
  drawGrid(g, w, h, 4, 8);

  g.strokeStyle = COLORS.rule;
  g.beginPath(); g.moveTo(0, Math.round(mid) + 0.5); g.lineTo(w, Math.round(mid) + 0.5); g.stroke();

  const prim = activeInst.primary;
  const span = 2 / Math.min(prim.f, prim.fm || prim.f * 2);
  const N = Math.min(w * 2, 1400);

  const activeVoices = [...activeInst.voices.values()];
  const ys = new Float64Array(N);
  let mx = 1e-9;

  for (let i = 0; i < N; i++) {
    const t = (i / (N - 1)) * span;
    let s = 0;
    if (activeVoices.length) {
      for (const v of activeVoices) {
        const a = v.env.gain.value;
        if (activeSynthIdx === 0) {
          const lx = lorenzState.x * 0.15;
          s += a * Math.sin(2 * Math.PI * v.f * t + currentI * lx * Math.sin(2 * Math.PI * v.fm * t));
        } else if (activeSynthIdx === 1) {
          const raw = Math.sin(2 * Math.PI * v.f * t + currentI * Math.sin(2 * Math.PI * v.fm * t));
          s += a * Math.tanh(activeInst.customVal * raw);
        } else if (activeSynthIdx === 13) {
          const I2 = activeInst.customVal;
          s += a * Math.sin(2 * Math.PI * v.f * t + currentI * Math.sin(2 * Math.PI * v.fm * t + I2 * Math.sin(2 * Math.PI * (v.f * 3) * t)));
        } else {
          s += a * Math.sin(2 * Math.PI * v.f * t + currentI * Math.sin(2 * Math.PI * v.fm * t));
        }
      }
    } else {
      s = 0.18 * Math.sin(2 * Math.PI * prim.f * t + currentI * Math.sin(2 * Math.PI * prim.fm * t));
    }
    ys[i] = s;
    if (Math.abs(s) > mx) mx = Math.abs(s);
  }
  const amp = (h * 0.34) / mx;

  g.strokeStyle = "rgba(159,168,255,0.16)";
  g.lineWidth = 1;
  g.beginPath();
  for (let i = 0; i < N; i++) {
    const t = (i / (N - 1)) * span, x = (i / (N - 1)) * w;
    const y = mid - h * 0.38 * Math.sin(2 * Math.PI * prim.fm * t);
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.stroke();

  let totalActiveVoices = 0;
  synthInstances.forEach(inst => totalActiveVoices += inst.voices.size);
  const activeStackLayers = loopStack.filter(l => l.isOn).length;

  if (analyser && (totalActiveVoices > 0 || activeStackLayers > 0)) {
    analyser.getFloatTimeDomainData(timeData);
    const need = Math.min(timeData.length - 2, Math.floor(span * ctx.sampleRate));
    let st = 0;
    for (let i = 1; i < timeData.length - need - 1; i++) {
      if (timeData[i - 1] <= 0 && timeData[i] > 0) { st = i; break; }
    }
    let mm = 1e-9;
    for (let i = st; i < st + need; i++) mm = Math.max(mm, Math.abs(timeData[i]));

    g.strokeStyle = COLORS.mess;
    g.lineWidth = 1.5;
    g.globalAlpha = 0.92;
    g.beginPath();
    for (let i = 0; i <= need; i++) {
      const x = (i / need) * w;
      const y = mid - (timeData[st + i] / mm) * h * 0.34;
      i ? g.lineTo(x, y) : g.moveTo(x, y);
    }
    g.stroke();
    g.globalAlpha = 1;
  }

  g.strokeStyle = activeInst.def.color;
  g.lineWidth = 1.3;
  g.globalAlpha = activeVoices.length ? 0.95 : 0.45;
  g.setLineDash([4, 3]);
  g.beginPath();
  for (let i = 0; i < N; i++) {
    const x = (i / (N - 1)) * w;
    const y = mid - ys[i] * amp;
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.stroke();
  g.setLineDash([]);
  g.globalAlpha = 1;

  drawLabel(g, (span * 1000).toFixed(1) + " ms", w - 6, h - 6, COLORS.dimmer, 8.5, "right");
  drawLabel(g, activeInst.def.name + " (Modell)", 6, h - 6, activeInst.def.color, 8.5);
}

/* ------------------------------------------------------------
   Panel 2: Momentanfrequenz & Modulationsraum f(t)
   ------------------------------------------------------------ */
function drawFreq(currentI, activeInst) {
  const o = CV.cFreq, g = o.g, w = o.w, h = o.h;
  g.fillStyle = "#090a16";
  g.fillRect(0, 0, w, h);

  const fc = activeInst.primary.f, fm = activeInst.primary.fm;
  const D = currentI * fm;
  const span = 2 / Math.min(fc, fm || fc * 2);
  const top = Math.max(fc + D * 1.15, fc * 1.7);
  const bot = Math.min(fc - D * 1.15, -fc * 0.2);
  const Y = f => h - 12 - ((f - bot) / (top - bot)) * (h - 36);

  drawGrid(g, w, h, 4, 8);

  if (bot < 0) {
    g.strokeStyle = COLORS.hot;
    g.globalAlpha = 0.55;
    g.setLineDash([3, 3]);
    g.beginPath(); g.moveTo(0, Y(0)); g.lineTo(w, Y(0)); g.stroke();
    g.setLineDash([]);
    g.globalAlpha = 1;
    drawLabel(g, "f = 0 · Phasenumkehr", 6, Y(0) - 4, COLORS.hot, 8);
  }

  g.fillStyle = "rgba(255, 71, 87, 0.05)";
  g.fillRect(0, Y(fc + D), w, Math.max(1, Y(fc - D) - Y(fc + D)));

  g.strokeStyle = COLORS.rule;
  g.beginPath(); g.moveTo(0, Y(fc)); g.lineTo(w, Y(fc)); g.stroke();

  g.strokeStyle = activeInst.def.color;
  g.lineWidth = 1.5;
  g.beginPath();
  const N = Math.min(w, 900);
  for (let i = 0; i < N; i++) {
    const t = (i / (N - 1)) * span;
    let instFreq = fc + D * Math.cos(2 * Math.PI * fm * t);
    if (activeSynthIdx === 0) {
      instFreq += lorenzState.x * 12 * Math.sin(2 * Math.PI * fm * 0.5 * t);
    }
    const x = (i / (N - 1)) * w;
    i ? g.lineTo(x, Y(instFreq)) : g.moveTo(x, Y(instFreq));
  }
  g.stroke();

  drawLabel(g, "f_c = " + fc.toFixed(1) + " Hz", 6, Y(fc) - 4, COLORS.dim, 8.5);
  drawLabel(g, "+D = " + (fc + D).toFixed(0) + " Hz", w - 6, Y(fc + D) + 10, COLORS.dimmer, 8.5, "right");
  drawLabel(g, "−D = " + (fc - D).toFixed(0) + " Hz", w - 6, Y(fc - D) - 4, COLORS.dimmer, 8.5, "right");
}

/* ------------------------------------------------------------
   Panel 3: Spektrum & Bessel-Seitenbänder J_n(I)
   ------------------------------------------------------------ */
function drawSpec(currentI, activeInst) {
  const o = CV.cSpec, g = o.g, w = o.w, h = o.h;
  g.fillStyle = "#0a0818";
  g.fillRect(0, 0, w, h);

  const fc = activeInst.primary.f, fm = activeInst.primary.fm;
  const nMax = Math.min(28, Math.ceil(currentI) + 6);
  const fMax = Math.min(9500, Math.max(1600, fc + (nMax + 1) * fm));
  const X = f => (f / fMax) * w;
  const base = h - 16, topPx = 14;
  const dB2y = d => base - Math.max(0, Math.min(1, (d + 98) / 98)) * (base - topPx);

  drawGrid(g, w, h, 4, 8);
  g.strokeStyle = COLORS.rule;
  g.beginPath(); g.moveTo(0, base + 0.5); g.lineTo(w, base + 0.5); g.stroke();

  let peak = -200;
  let hasAnyVoices = false;
  synthInstances.forEach(s => { if (s.voices.size > 0) hasAnyVoices = true; });
  if (loopStack.some(l => l.isOn)) hasAnyVoices = true;

  if (analyser && hasAnyVoices) {
    analyser.getFloatFrequencyData(freqData);
    const binSize = ctx.sampleRate / analyser.fftSize;
    g.beginPath(); g.moveTo(0, base);
    for (let i = 0; i < freqData.length; i++) {
      const f = i * binSize;
      if (f > fMax) break;
      peak = Math.max(peak, freqData[i]);
      g.lineTo(X(f), dB2y(freqData[i]));
    }
    g.lineTo(w, base);
    g.closePath();
    g.fillStyle = "rgba(255,196,107,0.15)";
    g.fill();
    g.strokeStyle = COLORS.mess;
    g.lineWidth = 1.1;
    g.stroke();
  }

  let tmax = 0;
  const lines = [];
  for (let n = -nMax; n <= nMax; n++) {
    const a = Math.abs(besselJ(n, currentI));
    if (a < 0.005) continue;
    const f = fc + n * fm;
    lines.push({ f: Math.abs(f), a, fold: f < 0, n });
    tmax = Math.max(tmax, a);
  }

  const off = (hasAnyVoices && peak > -185) ? peak - 20 * Math.log10(Math.max(1e-4, tmax)) : -15;
  for (const L of lines) {
    if (L.f > fMax) continue;
    const y = dB2y(20 * Math.log10(L.a) + off);
    const x = Math.round(X(L.f)) + 0.5;

    g.strokeStyle = L.fold ? COLORS.hot : activeInst.def.color;
    g.globalAlpha = L.fold ? 0.85 : 0.8;
    g.lineWidth = 1;
    g.beginPath(); g.moveTo(x, base); g.lineTo(x, y); g.stroke();

    g.fillStyle = L.fold ? COLORS.hot : activeInst.def.color;
    g.beginPath(); g.arc(x, y, 2.0, 0, Math.PI * 2); g.fill();
    g.globalAlpha = 1;

    if (Math.abs(L.n) <= 3 && L.a > 0.09) {
      drawLabel(g, (L.n > 0 ? "+" : "") + L.n, x + 2, y - 4, COLORS.dimmer, 7.5);
    }
  }

  for (let f = 0; f <= fMax; f += fMax > 4000 ? 2000 : (fMax > 1800 ? 500 : 250)) {
    drawLabel(g, (f / 1000).toFixed(f >= 1000 ? 1 : 2).replace(/\.00$/, "0") + "k", X(f) + 2, h - 4, COLORS.dimmer, 7.5);
  }
  drawLabel(g, "|J_n(I)| · f_m = " + fm.toFixed(1) + " Hz", w - 6, topPx + 2, COLORS.dimmer, 8.5, "right");
}

/* ------------------------------------------------------------
   Panel 4: Phasenporträt (y, ẏ)
   ------------------------------------------------------------ */
let orbFirst = true;
function drawOrb() {
  const o = CV.cOrb, g = o.g, w = o.w, h = o.h;
  if (orbFirst) {
    g.fillStyle = "#060e14";
    g.fillRect(0, 0, w, h);
    orbFirst = false;
  }
  g.fillStyle = "rgba(6,14,20,0.14)";
  g.fillRect(0, 0, w, h);

  const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.38;
  g.strokeStyle = COLORS.grid;
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(cx - R * 1.25, cy); g.lineTo(cx + R * 1.25, cy);
  g.moveTo(cx, cy - R * 1.25); g.lineTo(cx + R * 1.25, cy);
  g.stroke();

  let hasAnyVoices = false;
  synthInstances.forEach(s => { if (s.voices.size > 0) hasAnyVoices = true; });
  if (loopStack.some(l => l.isOn)) hasAnyVoices = true;

  if (!analyser || !hasAnyVoices) return;

  analyser.getFloatTimeDomainData(timeData);
  const n = Math.min(timeData.length - 2, 2600);
  let my = 1e-9, md = 1e-9;
  for (let i = 1; i < n; i++) {
    my = Math.max(my, Math.abs(timeData[i]));
    md = Math.max(md, Math.abs(timeData[i + 1] - timeData[i - 1]));
  }

  g.strokeStyle = synthInstances[activeSynthIdx].def.color;
  g.lineWidth = 1.1;
  g.globalAlpha = 0.6;
  g.beginPath();
  for (let i = 1; i < n; i++) {
    const x = cx + (timeData[i] / my) * R;
    const y = cy - ((timeData[i + 1] - timeData[i - 1]) / md) * R;
    i > 1 ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.stroke();
  g.globalAlpha = 1;

  drawLabel(g, "y →", cx + R * 1.25 - 18, cy - 4, COLORS.dimmer, 8);
  drawLabel(g, "ẏ ↑", cx + 4, cy - R * 1.25 + 10, COLORS.dimmer, 8);
}