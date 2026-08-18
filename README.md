# FM Music Composer 🎹✨

> **Advanced Web Audio 20-Synthesizer Workstation, Multi-Layer Looper & Live Parameter-Automation Engine**

![Web Audio API](https://img.shields.io/badge/Web%20Audio-API-ff4757.svg?style=flat-square)
![HTML5 Canvas](https://img.shields.io/badge/Canvas-60%20FPS-6ee7c0.svg?style=flat-square)
![Vanilla JavaScript](https://img.shields.io/badge/Vanilla-ES6+-ffc46b.svg?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-38c7ff.svg?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

**FM Music Composer** is a zero-dependency, browser-based modular music studio that combines 20 complex Frequency Modulation (FM) synthesizer architectures, a real-time multi-layer audio looper, per-parameter sine-wave automation with rotary speed knobs, complete song session serialization (`.json`), and 4 synchronized high-resolution oscilloscopes.

---

## 🌟 Key Features

### 1. 20 Distinct FM Synthesizer Engines (2 Banks)
- **Bank A (Exotik & Chaos — Keys `1` to `0`):**
  1. **`1` Lorenz Chaos FM:** Runge-Kutta 4th-order ($\text{RK4}$) chaotic attractor $\dot{x}=\sigma(y-x), \dot{y}=x(\rho-z)-y, \dot{z}=xy-\beta z$.
  2. **`2` Chebyshev Wavefolder:** Orthogonal Chebyshev polynomials $T_3(x), T_5(x)$ and hyperbolic tangent saturation in feedback loop.
  3. **`3` Jacobi Soliton FM:** Jacobian elliptic functions $\text{sn}(u, m)$ and $\text{cn}(u, m)$ with continuous modulus morphing.
  4. **`4` Fractional Memory FM:** Riemann-Liouville/Caputo fractional derivative $D_t^{-\alpha}$ with power-law phase memory.
  5. **`5` 4D-Quaternion Vector FM:** $SO(4)$ Lie-group rotation on the 3-sphere $S^3$ mapped to dual binaural phase channels.
  6. **`6` Quantum-Lévy FM:** Heavy-tailed Pareto-Lévy stochastic jump process for probabilistic quantum spectral bursts.
  7. **`7` Kuramoto Swarm FM:** 8 coupled nonlinear limit-cycle oscillators with real-time phase order parameter $r(t)$.
  8. **`8` Waveguide Tension FM:** Dispersive all-pass waveguide with nonlinear strike amplitude-dependent string tension $D(y)$.
  9. **`9` Cybernetic Vocal FM:** 3-formant vocal tract interpolation ($F_1, F_2, F_3$) with Rosenberg glottal pulse shaping.
  10. **`0` Wavelet Fractal FM:** Dyadic multiscale fractal cascade ($2^{-jH}$) based on Morlet wavelets.
- **Bank B (Classic & Laboratory — Keys `Shift + 1` to `Shift + 0`):**
  11. **`⇧1` Tiefsee-Drone:** Subharmonic 2-operator deep drone with ultra-slow modulation breathing.
  12. **`⇧2` Crystal Bell:** Inharmonic tubular chime FM with exponential Bessel transient decay.
  13. **`⇧3` Vocal Choir:** Harmonic vowel formant FM with 5.5 Hz natural vibrato modulation.
  14. **`⇧4` Cascade FM:** 3-operator nonlinear cascade ($\text{Mod}_2 \to \text{Mod}_1 \to \text{Carrier}$).
  15. **`⇧5` Cosmos Pad:** Dual parallel modulators with ultra-fine detune beating and shimmer convolution.
  16. **`⇧6` Pluck Koto / Tines:** DX-style electric piano / plucked string with steep transient attack index.
  17. **`⇧7` Swarm Texture:** 3-voice unison cluster with stereo spread detuning and phase LFO.
  18. **`⇧8` Golden Ratio FM:** Inharmonic Fibonacci ratio ($r = \phi \approx 1.618034$) with non-periodic sidebands.
  19. **`⇧9` Glitch Pulse:** Sample & Hold quantized stepped ratio and index arpeggiator.
  20. **`⇧0` Vector FM:** 2-phase quadrature Lissajous sphere rotation.

---

### 2. Multi-Layer Live Loop Stack with Individual Pause Knobs (1 to 100s)
- **One-Click Live Capture:** Press `R` or click `[ ● REC (R) ]` to record the active synthesizer output in real-time.
- **Seamless Loop Points:** 128-sample crossfading automatically eliminates clicks and pops at loop boundaries.
- **Individual Rotary Pause Knobs (0 to 100 s):**
  - Every loop layer features its own interactive rotary knob to configure a pause period between $1\text{ s}$ and $100\text{ s}$ (or $0\text{ s}$ for seamless continuous looping).
  - After playing through, the loop pauses for the designated time and **automatically restarts from the beginning**.
  - Real-time countdown timer badge (`[▶ 1.4s]` / `[⏸ 4.2s]`) and progress indicator.
  - Supports vertical dragging and mouse wheel control.
- **Dynamic Rack Cards:**
  - Real-time animated playhead tracker.
  - Mini waveform display rendered directly from the audio buffer.
  - Individual Mute / Unmute (`[ AN / AUS ]`) and dedicated track volume slider.
  - Global `[ Alle AN / AUS ]` and `[ Löschen ]` master controls.
- **Unlimited Overdubbing:** Layer infinite independent synthesizer tracks simultaneously.

---

### 3. Dynamically Expandable Intelligent HUD & Command Center
- **Compact HUD Mode (Default 38px):** Consolidated title, Bank A/B segmented switcher, 10 dynamic micro-pills with voice-activity indicators, dropdown selector, live DSP telemetry ($f_c, f_m, I, D$), song save/load, and layout presets in a single sleek row.
- **Expanded Command Center (Toggle with `[ ▾ DETAILS ]` or Key `H`):**
  - Smoothly expands to reveal both **Bank A & Bank B 20-synthesizer matrix** with individual color tags and live voice activity indicators.
  - Large-format mathematical physics description and differential equations ($\text{RK4}$, Chebyshev, Bessel, KdV-Solitons, Lie-Algebra).
- **Intelligent Responsive Scaling:** Auto-flows and scales across all viewports (Mobile, Laptop, 4K Ultrawide) using CSS Grid with zero clipping.

---

### 4. Complex Programmable & Keyboard-Playable Arpeggiator
A high-precision Web Audio lookahead arpeggiator and step sequencer usable across all 20 synthesizers:
- **`[ ~ ARP ]` Master Toggle:** Activates/deactivates live arpeggio mode.
- **Keyboard Playable / Held-Chord Input:** Press any chord on your physical computer keyboard or screen keys; the arpeggiator sequences through the chord in real time!
- **`[ Hold ]` (Latch Mode):** Keeps the arpeggio repeating continuously after you release the keys until a new chord is pressed.
- **6 Directional Modes:**
  - `▲ Up`: Ascending note sequence.
  - `▼ Down`: Descending note sequence.
  - `▲▼ Up/Dn`: Bouncing ascending and descending pattern.
  - `⚄ Rand`: Random note selection from held chord notes.
  - `▶◀ Conv`: Converging pattern (alternating outer and inner notes).
  - `■ Chord`: Staccato-gated simultaneous chord rhythm.
- **Subdivision Clock:** `1/4`, `1/8`, `1/16`, `1/16T` (Triplets), and `1/32` notes.
- **Octave Span (1 to 4 Octaves):** Cascades arpeggiated patterns across 1, 2, 3, or 4 octaves.
- **Interactive 16-Step Matrix Sequencer:**
  - 16 clickable step gate toggles with real-time running LED playhead tracker.
  - Per-step octave transposition badges (`-1`, `0`, `+1`, `+2`).
- **Groove & Articulation Controls:**
  - **Tempo:** 40 to 280 BPM.
  - **Gate-Length:** 10% (ultra-short staccato pluck) to 100% (legato sustain).
  - **Swing / Shuffle:** 0% to 65% groove shuffle.
- **Pattern Presets:** `[ 16th Straight ]`, `[ Euklid 5/16 ]`, `[ Euklid 7/16 ]`, `[ Synkope ]`, `[ Oct Dance ]`, `[ Random ]`.
- **Lossless `.json` Save/Load:** Patterns and arpeggio settings are saved and restored with your song project.

---

### 5. Complete Complex-Vibrato & Humanizer Engine (All 20 Instruments)
Every instrument includes an acoustic/electronic vibrato modulation module:
- **`[ ~ VIB ]` Master Toggle:** Activates/deactivates pitch vibrato for the selected instrument.
- **Waveform Selector:**
  - `∿ Sin`: Smooth, classic natural vibrato.
  - `⋀ Tri`: Linear acoustic violin/cello-style modulation.
  - `◈ Human`: Organic humanizer jitter and frequency micro-drift.
  - `⩘ Saw`: Aggressive synthetic pitch ramp.
- **Vibrato-Tiefe $\Delta f_{vib}$ (0–24 Hz):** Single-row parameter with tactile handles $[A, B]$, live value needle, and autonomous sine-wave oscillation.
- **Vibrato-Rate (0.1–14 Hz):** Dedicated rotary speed knob for ultra-slow cosmic pitch drifts up to fast fluttering vibrato.
- **Einsatz-Verzögerung (Delay 0.0–2.5 s):** Controls the natural bloom and onset time before vibrato kicks in after key strike.
- **Humanizer Drift & Jitter (0–100%):** Adds randomized micro-deviations to simulate real human acoustic performances.
- **Universal Carrier Audio Routing:** Directly modulates all carrier oscillators across all 20 complex synthesis algorithms.

---

### 6. Per-Parameter Visible UI Handles & Automation (`~ OSC`)
Every sound shaping parameter ($r, I_0, \Delta I, f_L, \Delta f_{vib}$, custom parameters like $\rho, \gamma, m, \alpha$) features an autonomous modulation engine:
- **`[ ~ OSC ]` Toggle Badge:** Instantly enables automated continuous sine-wave oscillation.
- **Visible Draggable Handles `[ A ]` & `[ B ]`:** Tactile handles setting the exact oscillation boundaries without numeric drawers.
- **Echtzeit-Wertnadel (White Needle):** Displays live parameter value and oscillates at 60 FPS between $A$ and $B$.
- **Integrated Single-Row Rotary Speed Knob (0 to 100):**
  - Smooth interactive rotary dial with circular SVG needle and pointer embedded in the same control row.
  - Drag vertically or use mouse wheel.
  - Rate ranges from ultra-slow organic drifts ($0.01\text{ Hz}$ / $100\text{ s}$) up to $4.5\text{ Hz}$ vibrato/wobble.

---

### 6. Complete Song Save & Load (.json)
Save your complete musical composition to a portable `.json` file:
- **Lossless Audio Serializer:** Encodes all recorded loops as 32-bit Float WAV base64 data.
- **Full Parameter Snapshot:** Preserves all 20 synthesizer configurations, custom variables, active oscillator states, speed knob settings, complete vibrato parameters, individual loop pause lengths (1–100s), global master/reverb levels, and speech pause parameters.
- **One-Click Instant Restore:** Reloads loops, reconstructs audio buffers, and restores all UI dials and switches.

---

### 7. 4-Panel Synchronized Oscilloscopes & Ultra-Compact 10% GFX Scaling
1. **$y(t)$ Time Domain:** Real-time microphone/sum measurement vs. analytical active synthesizer model.
2. **$f(t)$ Instantaneous Frequency:** Modulator trajectory and deviation bandwidth $\pm D$.
3. **Spectrum Analysis:** Real FFT magnitude vs. analytical Bessel sideband stems $|J_n(I)|$.
4. **$(y, \dot{y})$ Phase Portrait:** Phosphor-decay phase plane attractor displaying chaotic and orbital trajectories.
- **10% GFX Scaling:** Visualizer section scales seamlessly down to **10% of window width** (allocating 90% space to the control rack and loop cards).
- **Dedicated Layout Preset:** One-click `[ 10% GFX ]` button instantly expands the rack into multi-column mode and collapses the oscilloscopes into compact vertical micro-meters with zero text clipping.

---

### 8. Resizable Modular Studio Layout
- **Horizontal Splitter (`#splitH`):** Drag to adjust width between visualizer plots and the control rack (from 10% to 90%).
- **Vertical Splitter (`#splitV`):** Drag to customize piano keyboard height.
- **Dual-Rack / Multi-Column Mode:** Automatically arranges controls into parallel columns when expanded, making every dial, vibrato module, and loop card visible without scrolling.
- **Layout Presets:** One-click toggles for `[ Grid ]` (2x2), `[ Rack ]` (Wide), `[ 10% GFX ]` (90% Rack Focus), and `[ ⛶ Vollbild ]` (Fullscreen).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `A`, `W`, `S`, `E`, `D`, `F`, `T`, `G`, `Z`, `H`, `U`, `J`, `K` | Play chromatic scale (C to C') |
| `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0` | Select Bank A Synthesizers (1–10) |
| `Shift + 1` to `Shift + 0` | Select Bank B Synthesizers (11–20) |
| `Y` / `X` | Transpose Octave Down / Up (Expanded Range: $-3$ to $+3$) |
| `R` | Start / Stop Loop Recording (REC) |
| `H` | Toggle Header Expand / Compact Details |
| `Escape` | Global Panic (Silence all voices) |

---

## 🚀 Getting Started

1. Clone or download this repository:
   ```bash
   git clone https://github.com/enzocage/fm-music-composer.git
   cd fm-music-composer
   ```
2. Open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
3. Click **"Studio aktivieren"** to start the Web Audio Context.
4. Play notes with your keyboard or mouse, toggle `~ OSC` for automation, and press `R` to capture your loops!

---

## 🛠️ Technology Stack
- **Audio Core:** Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`, `WaveShaperNode`, `ConvolverNode`, `ScriptProcessorNode`, `AnalyserNode`).
- **Graphics & Visuals:** HTML5 Canvas 2D (`ResizeObserver`, sub-pixel 60 FPS rendering, device pixel ratio scaling).
- **Styling:** Modular CSS3 with Custom Properties (CSS variables) and responsive Flexbox/Grid.
- **Dependencies:** 0 (Pure Vanilla JavaScript, Single HTML file).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
