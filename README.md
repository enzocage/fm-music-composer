# FM Music Composer 🎹✨

> **Advanced Web Audio 100-Synthesizer Workstation (10 Soundbanks), Multi-Layer Looper & Live Parameter-Automation Engine**

![Web Audio API](https://img.shields.io/badge/Web%20Audio-API-ff4757.svg?style=flat-square)
![HTML5 Canvas](https://img.shields.io/badge/Canvas-60%20FPS-6ee7c0.svg?style=flat-square)
![Vanilla JavaScript](https://img.shields.io/badge/Vanilla-ES6+-ffc46b.svg?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-38c7ff.svg?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

**FM Music Composer** is a zero-dependency, browser-based modular music studio that combines 100 complex Frequency Modulation (FM) synthesizer architectures across 10 soundbanks, a real-time multi-layer audio looper, per-parameter sine-wave automation with rotary speed knobs, complete song session serialization (`.json`), a programmable 16-step arpeggiator, and 4 synchronized high-resolution oscilloscopes.

---

## 🌟 Key Features

### 1. 100 Distinct FM Synthesizer Engines (10 Soundbanks)
> **Bank Navigation:** Switch active soundbanks with keys **`ß`** *(Previous Bank)* and **`´`** *(Next Bank)* or click `A, B, C, D, E, F, G, H, I, J`.  
> **Direct Instrument Selection:** Keys **`1` to `0`** instantly select instruments 1 through 10 of the currently active soundbank without needing `Shift`!  
> **Next/Previous Instrument Stepper:** Use the tactile **`[ ◀ ]`** and **`[ ▶ ]`** buttons located directly beside the instrument dropdown in the header to effortlessly browse through all 100 synthesizers one by one!

- **Bank A (Exotik & Chaos — Instruments 1 to 10):**
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
- **Bank B (Classic & Laboratory — Bank `B`):**
  11. **`11` Tiefsee-Drone:** Subharmonic 2-operator deep drone with ultra-slow modulation breathing.
  12. **`12` Crystal Bell:** Inharmonic tubular chime FM with exponential Bessel transient decay.
  13. **`13` Vocal Choir:** Harmonic vowel formant FM with 5.5 Hz natural vibrato modulation.
  14. **`14` Cascade FM:** 3-operator nonlinear cascade ($\text{Mod}_2 \to \text{Mod}_1 \to \text{Carrier}$).
  15. **`15` Cosmos Pad:** Dual parallel modulators with ultra-fine detune beating and shimmer convolution.
  16. **`16` Pluck Koto / Tines:** DX-style electric piano / plucked string with steep transient attack index.
  17. **`17` Swarm Texture:** 3-voice unison cluster with stereo spread detuning and phase LFO.
  18. **`18` Golden Ratio FM:** Inharmonic Fibonacci ratio ($r = \phi \approx 1.618034$) with non-periodic sidebands.
  19. **`19` Glitch Pulse:** Sample & Hold quantized stepped ratio and index arpeggiator.
  20. **`20` Vector FM:** 2-phase quadrature Lissajous sphere rotation.
- **Bank C (DX7 & Vintage 80s Icons — Bank `C`):**
  21. **`21` DX7 E-Piano Rhodes:** Classic 6-Op dual-carrier Rhodes (body 1:1 + bell tine 1:14).
  22. **`22` Tubular Bells & Glocke:** Inharmonic Chowning/Bessel tubular church bell (ratios 1.0 : 3.52 : 5.84).
  23. **`23` Solid Bass TX81Z:** The legendary TX81Z / DX100 4-Op Lately Bass with punchy feedback slap.
  24. **`24` Slap Bass Percussion:** Wire string slap and pop with ultra-fast 25ms transient decay.
  25. **`25` Blues Harmonica Reed:** Dual reed simulation with asymmetrical saturation and acoustic breath vibrato.
  26. **`26` Marimba & Wood Balafon:** Wooden bar model with 4th harmonic attack and acoustic gourd resonance.
  27. **`27` Log Drum & Schlitz:** African slit drum with pitch-drop envelope and hollow chamber tone.
  28. **`28` CS-80 Synth Brass 80s:** Monumental detuned dual-carrier analog FM brass with dynamic filter sweep.
  29. **`29` Digi Clavinet D6 FM:** Crisp funky plectrum string bite with single-coil pickup phase cancellation.
  30. **`30` Cembalo & Harpsichord:** Baroque dual-register (8' + 4') quill-plucked harpsichord.
- **Bank D (YM2612 & Arcade Legends — Bank `D`):**
  31. **`31` Sonic 16-Bit Lead:** Iconic Sega Genesis 4-Op FM lead with crunchy ladder saturation.
  32. **`32` Mega Drive FM Drums:** Punchy 16-bit FM kick with fast pitch dive + metallic gated snare.
  33. **`33` Castlevania Cathedral Organ:** Gothic arcade pipe organ with 8' + 4' + 2 2/3' mixture ranks.
  34. **`34` AdLib Chiptune Lead:** Sound Blaster OPL2 retro DOS gaming lead with half-sine / rectified wave harmonics.
  35. **`35` DOOM Cyberpunk Saw FM:** Heavy industrial distorted saw FM with wavefolder drive.
  36. **`36` Thunder Laser FX FM:** Sci-fi laser blast with exponential pitch sweep and extreme modulation.
  37. **`37` Marble Zone Steel Drum:** Caribbean pan drum with ring-modulation harmonics and arcade flavor.
  38. **`38` OutRun Synthwave Bass:** Rolling 16th-note electro arcade bass with razor-sharp punch.
  39. **`39` NeoGeo Arcade Pluck:** Japanese arcade pluck with stereo chorus and shimmering decay.
  40. **`40` Power Metal FM Poly:** High-energy anime game poly-synth with soaring brassy bite.
- **Bank E (Cinematic & Cyberpunk Drones — Bank `E`):**
  41. **`41` Blade Runner CS-FM Pad:** Vangelis cinematic brass pad with slow pitch-swell and infinite space.
  42. **`42` Dark Nebula Sub-Drone:** Subterranean 30Hz atmospheric rumble with slow sweeping index.
  43. **`43` Hyperborea Shimmer Crystal:** High-octave crystalline bells shimmering in glacial space.
  44. **`44` Cryogenic Ice Whispers:** Sub-zero airy breathing textures with stochastic FM modulators.
  45. **`45` Dark Matter Pulsar Drone:** Periodic rhythmic gravitational pulse with feedback harmonics.
  46. **`46` Solar Flare Granular Drone:** Roaring warm plasma sweeps with multi-phase carrier collisions.
  47. **`47` Abyss Submarine Resonator:** Deep metal hull water pressure resonance with sonar harmonics.
  48. **`48` Starlight Ethereal Voice:** Haunting vocal drone resembling celestial Gregorian choir in deep space.
  49. **`49` Void Walker Ambient Swell:** Slowly evolving cosmic soundscape with infinite sustain.
  50. **`50` Antimatter Reactor Drone:** Sci-fi containment field with pulsating magnetic frequency modulation.
- **Bank F (Acoustic Physical & World Models — Bank `F`):**
  51. **`51` Tibetan Singing Bowl FM:** Hand-hammered bronze singing bowl with pure fundamental and beating overtones.
  52. **`52` Javanese Gamelan Gong:** Sacred metallophone gong with microtonal inharmonic spectra.
  53. **`53` Shakuhachi Bamboo Air:** Japanese bamboo flute with authentic breath turbulence and expressive bend.
  54. **`54` Celtic Harp Pluck FM:** Acoustic nylon/wire harp with delicate transient attack and wooden soundboard.
  55. **`55` Koto Silk String FM:** Traditional Japanese silk string with authentic plectrum snap and resonant bridges.
  56. **`56` Glass Armonica Resonance:** Benjamin Franklin rotating glass bowls with singing crystalline ring.
  57. **`57` Cathedral Pipe Organ 32ft:** Monumental acoustic church organ with massive 32' sub-bass pipes.
  58. **`58` Cello Bowed FM Model:** Expressive bowed cello with friction stick-slip modulations.
  59. **`59` Kalimba Thumb Piano:** African lamellophone with warm metal tine buzz and hollow resonator.
  60. **`60` Ceramic Ocarina Flute:** Gentle ceramic vessel flute with warm breath tremolo.
- **Bank G (Modular Experimental & Quantum Noise FX — Bank `G`):**
  61. **`61` Quantum Particle Collider:** Chaotic subatomic particle collision with stochastic frequency bursts.
  62. **`62` Radio Telescope Alien Glitch:** SETI interstellar digital telemetry with frequency-shifted data pulses.
  63. **`63` Feedback Loop Screamer:** Self-oscillating modular analog feedback patch screaming at the edge of stability.
  64. **`64` Chaotic Bifurcation Drone:** Feigenbaum period-doubling cascade collapsing into deterministic chaos.
  65. **`65` Geiger Counter Radiance:** Ionizing radiation clicks modulating a low sub-oscillator.
  66. **`66` Subatomic Bass Reactor:** Hyper-saturated modular sub-bass with wavefolding and tanh compression.
  67. **`67` Neural Network Synapse:** Biological neuron spike train with membrane potential FM modulation.
  68. **`68` Ringmod Laser Swarm:** Quad-ringmodulator sci-fi laser swarm with swirling sidebands.
  69. **`69` Black Hole Event Horizon:** Gravitational redshift drone dragging frequencies into deep sub-bass void.
  70. **`70` Warp Engine Plasma Drive:** Starship warp drive spooling up with roaring harmonic plasma resonance.
- **Bank H (Buchla & West Coast Organic Percussion — Bank `H`):**
  71. **`71` Buchla 292 Vactrol Bongo:** West-Coast Low Pass Gate (LPG) vactrol ping with non-linear exponential harmonic decay.
  72. **`72` Hydro Water Droplet:** Surface tension micro-pitch bend with liquid cavity resonance.
  73. **`73` Bamboo Stomp & Anklung:** Hollow woody strike with non-linear strike velocity and chamber air.
  74. **`74` Modal Membrane Pluck:** Mutable Instruments Elements/Rings 2D circular membrane Bessel modal frequencies (2.295, 3.598).
  75. **`75` Seed Pod Shaker:** Poisson stochastic seed collisions in a dried gourd with micro-friction.
  76. **`76` Clay Udu Drum Breath:** Aerophone Helmholtz cavity resonance with deep thumb slap.
  77. **`77` Micro-Kalimba Ghost Pluck:** Ultra-soft damped tine with metallic transient and wooden body.
  78. **`78` Bio-Acoustic Cicada Pulse:** Biomimetic high-frequency tymbal micro-clicks with periodic cluster bursts.
  79. **`79` Raindrop on Tin Roof:** Stochastic metal plate excitation with microtonal spread.
  80. **`80` Pebble Cascade Scatter:** Granular avalanche scattering of tiny stones on marble.
- **Bank I (Microsound & Glitch FX Textures — Bank `I`):**
  81. **`81` Pointillist Microsound Click:** Sub-millisecond impulse with spectral FM sideband flare.
  82. **`82` Quantum State Collapse:** Wavefunction collapse transient with stochastic phase jump.
  83. **`83` Tape Splicer Crinkle:** Vintage magnetic tape razor cut transient with oxide flake noise.
  84. **`84` Silicon Micro-Relay Click:** Electro-mechanical relay chatter with micro-spark resonance.
  85. **`85` Granular Dust Cloud:** Cloud of 5-15ms micro-grains floating over pitch-transposed FM.
  86. **`86` Bit-Crush Kinetic Pop:** Non-linear sample-reduced transient with downsampled jitter.
  87. **`87` Ionizing Cloud Chamber:** Geiger particle ionizing trail with Poisson arrival intervals.
  88. **`88` Sub-Bass Air Burst:** 15Hz pneumatic piston impulse with low-end pressure wave.
  89. **`89` Optical CD Tracking Error:** Laser servo tracking skip glitch with high-frequency ringmod chirp.
  90. **`90` Josephson Quantum Click:** Superconducting Josephson tunnel junction micro-voltage step impulse.
- **Bank J (Generative Kinetic Structures & Ciat-Lonbarde — Bank `J`):**
  91. **`91` Ciat-Lonbarde Paper Wire:** Peter Blasser wooden box feedback touched with conductive carbon paper.
  92. **`92` Chaotic Double Pendulum:** Non-periodic double-arm collision pulses in 2D phase space.
  93. **`93` Wind Chime Aeolian Drift:** Asynchronous kinetic bamboo/glass rods colliding in gentle wind.
  94. **`94` Turing Shift-Register Pulse:** 8-bit pseudo-random linear feedback shift register (LFSR) burst.
  95. **`95` Sub-Zero Ice Fracture:** Tectonic lake ice cracking under stress with dispersive high frequencies.
  96. **`96` Magnetic Ferrofluid Ripple:** Liquid iron ferrofluid droplets snapping under magnetic gradient.
  97. **`97` Crystal Lattice Cleavage:** Piezoelectric crystal fracturing with high harmonic ring.
  98. **`98` Cosmic Ray Muon Shower:** Atmospheric secondary muon cascade particle shower impulse.
  99. **`99` Neuronal Membrane Spike:** Hodgkin-Huxley membrane action potential depolarization click burst.
  100. **`100` Clock Divider Polymeter:** Poly-temporal Euclidean sub-clock gate bursts.

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
A high-precision Web Audio lookahead arpeggiator and step sequencer usable across all 100 synthesizers:
- **`[ ~ ARP ]` Master Toggle:** Activates/deactivates live arpeggio mode.
- **Keyboard Playable / Held-Chord Input:** Press any chord on your physical computer keyboard or screen keys; the arpeggiator sequences through the chord in real time!
- **`[ Hold ]` (Latch Mode):** Keeps the arpeggio repeating continuously after you release the keys until a new chord is pressed.
- **6 Directional Modes:** `▲ Up`, `▼ Down`, `▲▼ Up/Dn`, `⚄ Rand`, `▶◀ Conv`, `■ Chord`.
- **Subdivision Clock:** `1/4`, `1/8`, `1/16`, `1/16T` (Triplets), and `1/32` notes.
- **Octave Span (1 to 4 Octaves):** Cascades arpeggiated patterns across 1, 2, 3, or 4 octaves.
- **Interactive 16-Step Matrix Sequencer:**
  - 16 clickable step gate toggles with real-time running LED playhead tracker.
  - Per-step octave transposition badges (`-1`, `0`, `+1`, `+2`).
- **Pattern Presets:** `[ 16th Straight ]`, `[ Euklid 5/16 ]`, `[ Euklid 7/16 ]`, `[ Synkope ]`, `[ Oct Dance ]`, `[ Random ]`.

---

### 5. Multi-Voice Ambient Percussion Stepper, Parameter Oscillation & Overarching Modulators
A dedicated multi-track organic percussion and landscape sequencer featuring **6 synthesized drum voices** with individual 16-step patterns, mute/solo controls, **autonomous parameter oscillation tracks (`~ OSC`) for every single drum voice**, and an **Overarching Beat-Loop Master Modulator Suite**:
- **6 Dedicated Drum Synthesis DSP Engines with Autonomous Parameter Oscillation:**
  1. **`BASE DRUM` (Deep Sinus):** Pure sine wave sub-bass drop with 4 configurable parameter rows: *Sub-Freq $f_0$* ($30–100\text{Hz}$), *Pitch-Drop $\Delta f$* ($20–300\text{Hz}$), *Decay* ($0.05–1.2\text{s}$), *Click Transient* ($0–100\%$) — each with `[ ~ OSC ]`, draggable $[A, B]$ handles, live needle, and rotary speed knob!
  2. **`HI-HAT` (High Short Noise):** High-pass filtered white noise with 4 parameter rows: *Cutoff $f_{hh}$* ($3000–14000\text{Hz}$), *Hat Decay* ($15–250\text{ms}$), *Metallic Ring* ($0–100\%$), *Velocity Response* ($0–100\%$) [~ OSC].
  3. **`CYMBAL` (High Long Noise):** Metallic FM cluster & white noise with 4 parameter rows: *Cymbal Decay* ($0.4–4.5\text{s}$), *FM Cluster Spread* ($1.0–5.0$), *Air Shimmer Band* ($2000–16000\text{Hz}$), *Resonance Q* ($0.5–8.0$) [~ OSC].
  4. **`SNARE DRUM` (Hard Deep Noise):** Dual-layer body + noise with 4 parameter rows: *Body Freq $f_{sn}$* ($100–350\text{Hz}$), *Noise Mix* ($0–100\%$), *Snare Decay* ($0.05–0.6\text{s}$), *Snappy Cutoff* ($500–8000\text{Hz}$) [~ OSC].
  5. **`WOOD / PING` (Buchla 292 LPG):** Organic resonant woodblock with 4 parameter rows: *Wood Pitch $f_{wd}$* ($200–2500\text{Hz}$), *Vactrol LPG Slew* ($0.01–0.5\text{s}$), *Bessel Harmonics* ($1.0–4.0$), *Damping* ($0–100\%$) [~ OSC].
  6. **`SHAKER / DUST` (Granular Noise):** Ambient granular friction with 4 parameter rows: *Grain Density* ($10–100\%$), *Grain Decay* ($10–150\text{ms}$), *Center Bandpass* ($1000–10000\text{Hz}$), *Granular Scatter* ($0–100\%$) [~ OSC].
- **🌊 Overarching Beat-Loop Master Modulators (Global LFO Suite):**
  - **`Master Filter Morph` [~ OSC]:** Autonomous low-pass/band-pass filter sweeping the entire percussion stage ($200\text{Hz} \leftrightarrow 14000\text{Hz}$).
  - **`Swing / Groove Breathe` [~ OSC]:** Continuous dynamic expansion and relaxation of the 16th-note shuffle groove ($0\% \leftrightarrow 75\%$).
  - **`Chaos / Timing Jitter` [~ OSC]:** Micro-timing humanizer wave ($0\text{ms} \leftrightarrow 40\text{ms}$).
  - **`Binaural Orbital Pan` [~ OSC]:** Sweeping circular spatialization of the percussion field.
  - **`Space Reverb Swell` [~ OSC]:** Dynamic wet/dry swell into the 5.5s convolution chamber ($0\% \leftrightarrow 100\%$).
  - **`Drive / Tape Crunch` [~ OSC]:** Warm analogue wave-shaping saturation ($0.0 \leftrightarrow 5.0$).
  - **Beat-Sync LFO Quantization:** Lock loop modulators directly to musical tempo divisions (`Free Hz`, `1/4 Beat`, `1/2 Beat`, `1 Bar (4/4)`, `2 Bars`, `4 Bars`)!
- **Interactive 16-Step Grid & Multi-Track Overview:**
  - 16 clickable velocity step pads for the active voice.
  - Multi-track visualizer displaying real-time running LED playheads across all 6 tracks simultaneously.
  - Per-track **MUTE**, **SOLO**, and **VOLUME** dials.
- **Intelligent Pattern Suggestion Engine:**
  - Plausible per-element pattern generators (*4-on-Floor, Downbeat 1&3, Syncopated Sub, Backbeat 2&4, Ghost Notes, Polyrhythm 3/8, 8th Offbeat, 16th Running, Euclid 7/16, Bar 1 Crash, Swell 4+, Euclid 5/16, Poisson Rain, Granular Dust*).
  - Global Landscape Smart-Composers: `[ 🌌 Deep Ambient ]`, `[ 🍃 Forest Glitch ]`, `[ 🌊 Dub Drift ]`, `[ ⚡ Micro-Techno ]`, `[ 🪐 Cosmic Dust ]`, `[ ⚄ Smart Auto-Compose All ]`.

---

### 6. Complete Complex-Vibrato & Humanizer Engine (All 100 Instruments)
Every instrument includes an acoustic/electronic vibrato modulation module:
- **`[ ~ VIB ]` Master Toggle:** Activates/deactivates pitch vibrato for the selected instrument.
- **Waveform Selector:** `∿ Sin`, `⋀ Tri`, `◈ Human`, `⩘ Saw`.
- **Vibrato-Tiefe $\Delta f_{vib}$ (0–24 Hz):** Single-row parameter with tactile handles $[A, B]$, live value needle, and autonomous sine-wave oscillation.
- **Vibrato-Frequenz Slider ($f_{vib}$ 0.10–20.00 Hz):** Dedicated slider with real-time numerical display (`5.20 Hz`) for smooth, immediate modulation rate control across all sustaining and new voices.
- **Einsatz-Verzögerung (Delay 0.0–2.5 s):** Controls natural bloom onset time.
- **Humanizer Drift & Jitter (0–100%):** Adds randomized micro-deviations.

---

### 7. Per-Parameter Visible UI Handles & Automation (`~ OSC`)
Every sound shaping parameter ($r, I_0, \Delta I, f_L, \Delta f_{vib}$, custom parameters) features an autonomous modulation engine:
- **`[ ~ OSC ]` Toggle Badge:** Instantly enables automated continuous sine-wave oscillation.
- **Visible Draggable Handles `[ A ]` & `[ B ]`:** Tactile handles setting the exact oscillation boundaries.
- **Echtzeit-Wertnadel (White Needle):** Oscillates at 60 FPS between $A$ and $B$.
- **Integrated Single-Row Rotary Speed Knob (0 to 100):** Continuous rate control.

---

### 8. Master Song Recording & Audio Export (Lossless WAV & 320 kbps MP3)
Directly capture your entire live studio performance into pristine standalone audio files:
- **One-Click Master Recording (`[ REC SONG ]` / Key `M`):** Taps directly off the master dynamics processor, capturing live synthesizer play, the 16-step arpeggiator, ambient percussion generator, loop tracks, and convolution reverb in real time.
- **Live Elapsed Timer Badge:** Dynamic pulsing indicator (`[ 🔴 REC 01:24 ]`).
- **Master Audio Export Modal:**
  - **Lossless WAV Export:** 16-bit / 48kHz Stereo PCM `.wav`.
  - **320 kbps MP3 Export:** High-bitrate 320 kbps CBR MP3 powered by client-side pure JS encoding.
  - **Interactive Waveform Display:** Visualizes the full amplitude envelope of the recorded song.
  - **In-Browser Audio Player:** Preview and listen to your song before downloading.

---

### 7. Complete Song Save & Load (.json)
Save your complete musical composition to a portable `.json` file:
- **Lossless Audio Serializer:** Encodes all recorded loops as 32-bit Float WAV base64 data.
- **Full Parameter Snapshot:** Preserves all 100 synthesizer configurations, custom variables, active oscillator states, speed knob settings, complete vibrato parameters, individual loop pause lengths (1–100s), global master/reverb levels, and arpeggiator sequences.
- **One-Click Instant Restore:** Reloads loops, reconstructs audio buffers, and restores all UI dials and switches.

---

### 8. 4-Panel Synchronized Oscilloscopes & Ultra-Compact 10% GFX Scaling
1. **$y(t)$ Time Domain:** Real-time microphone/sum measurement vs. analytical active synthesizer model.
2. **$f(t)$ Instantaneous Frequency:** Modulator trajectory and deviation bandwidth $\pm D$.
3. **Spectrum Analysis:** Real FFT magnitude vs. analytical Bessel sideband stems $|J_n(I)|$.
4. **$(y, \dot{y})$ Phase Portrait:** Phosphor-decay phase plane attractor displaying chaotic and orbital trajectories.
- **10% GFX Scaling:** Visualizer section scales seamlessly down to **10% of window width** (allocating 90% space to the control rack and loop cards).
- **Dedicated Layout Preset:** One-click `[ 10% GFX ]` button instantly expands the rack into multi-column mode and collapses the oscilloscopes into compact vertical micro-meters with zero text clipping.

---

### 9. Resizable Modular Studio Layout
- **Horizontal Splitter (`#splitH`):** Drag to adjust width between visualizer plots and the control rack (from 10% to 90%).
- **Vertical Splitter (`#splitV`):** Drag to customize piano keyboard height.
- **Dual-Rack / Multi-Column Mode:** Automatically arranges controls into parallel columns when expanded, making every dial, vibrato module, and loop card visible without scrolling.
- **Layout Presets:** One-click toggles for `[ Grid ]` (2x2), `[ Rack ]` (Wide), `[ 10% GFX ]` (90% Rack Focus), and `[ ⛶ Vollbild ]` (Fullscreen).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `A`, `W`, `S`, `E`, `D`, `F`, `T`, `G`, `Z`, `H`, `U`, `J`, `K` | Play chromatic scale (C to C') polyphonically |
| `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0` | Direct Synth Selection (1–10 within current bank, no Shift) |
| `ß` / `´` | Previous / Next Soundbank (Cycle through Banks A to J) |
| `Y` / `X` | Transpose Octave Down / Up (Expanded Range: $-3$ to $+3$) |
| `M` | Master Song Audio Recording (Export **WAV** / **320 kbps MP3**) |
| `R` | Start / Stop Loop Layer Recording (REC) |
| `H` | Toggle Header Expand / Compact Command Center Details |
| `Ü` | Toggle Help & Keybindings Overlay (`Code by Felix Schmidt`) |
| `Escape` | Close Overlays / Global Panic (Silence all voices) |

---

## 📁 Project Architecture & Folder Structure

```
fm-music-composer/
├── index.html                   # Semantic HTML entry point
├── css/
│   ├── main.css                 # Design tokens, reset, header HUD & bank controls
│   ├── studio.css               # Studio splitters, oscilloscope canvases & layout
│   ├── modules.css              # Looper, parameter racks, arpeggio matrix & drum stepper
│   └── modals.css               # Help overlay, Audio export modal & veil
├── js/
│   ├── config/
│   │   ├── banks.js             # 10 Soundbank definitions (Banks A to J)
│   │   └── synth_defs.js        # 100 Synthesizer DSP definitions & math models
│   ├── audio/
│   │   ├── engine.js            # Web Audio Context, compressor & convolution reverb
│   │   ├── voices.js            # Polyphonic voice allocator & 100 DSP synthesis switch topologies
│   │   ├── looper.js            # Multi-layer looper recording & playback engine
│   │   ├── export.js            # Lossless WAV & 320 kbps MP3 encoder
│   │   ├── percussion.js        # 6-voice drum synthesis & multi-track step sequencer
│   │   └── arpeggiator.js       # Lookahead step scheduler & 16-step matrix
│   ├── ui/
│   │   ├── oscilloscopes.js     # 4 synchronized oscilloscopes (Wave, Freq, FFT, Phase)
│   │   ├── keyboard.js          # Interactive chromatic piano & keyboard listeners
│   │   ├── params.js            # Unified [A, B] handles & rotary speed knobs
│   │   └── modals.js            # Help modal, song project save/load & splitters
│   └── app.js                   # Master application bootstrapper & 60 FPS animation loop
├── lib/
│   └── lame.min.js              # Offline pure JS 320 kbps MP3 encoder
└── README.md
```

---

## 🚀 Getting Started

1. Clone or download this repository:
   ```bash
   git clone https://github.com/enzocage/fm-music-composer.git
   cd fm-music-composer
   ```
2. Open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) — runs 100% offline via `file:///` or via any local server!
3. Click **"Studio aktivieren"** to start the Web Audio Context.
4. Play notes with your keyboard or mouse, toggle `~ OSC` for automation, press `Ü` for help, and press `R` to capture your loops!

---

## 👨‍💻 Credits & Author
- **Code by Felix Schmidt**

---

## 🛠️ Technology Stack
- **Audio Core:** Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`, `WaveShaperNode`, `ConvolverNode`, `ScriptProcessorNode`, `AnalyserNode`).
- **Graphics & Visuals:** HTML5 Canvas 2D (`ResizeObserver`, sub-pixel 60 FPS rendering, device pixel ratio scaling).
- **Styling:** Modular CSS3 with Custom Properties (CSS variables) and responsive Flexbox/Grid.
- **Dependencies:** 0 (Pure Vanilla JavaScript, Single HTML file).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
