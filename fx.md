# FX.MD: 10 High-End Audioeffekt-Module für FM-Synthesizer

> **Technisches Konzept, mathematische DSP-Modelle & Spezifikation für 10 professionelle Effekt-Module zur spektralen, räumlichen und nichtlinearen Veredelung von FM-Klängen.**  
> *Autoren & Sound-Design: Forschungsgruppe für digitale Signalverarbeitung & Algorithmische Musikkomposition*  
> *Referenz: FM Music Composer Studio Rack*

---

## 📑 Inhaltsübersicht der 10 FX-Module

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                DIE 10 HIGH-END FX-MODULE                                        │
├──────────────────────────────────────┬──────────────────────────────────────────────────────────┤
│ 🌌 FX 1: Spectral Shimmer Diffuser   │ FDN-Hallnetzwerk mit kaskadiertem Pitch-Shift im Feed-   │
│                                      │ back-Zweig (+12st / +7st) für funkelnde Kathedralen.     │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 🪵 FX 2: Resonator Bank & Modal Body │ 16-Band IIR-Resonator-Array (Buchla 296e / Rings) für    │
│                                      │ hölzerne, metallische und glockenartige Resonanzkörper.  │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 💈 FX 3: Barberpole Shepard Phaser   │ Unendlich auf- oder absteigende Phasenfilterung mittels  │
│                                      │ Einseitenband-Modulation (SSB) ohne Umkehrpunkte.        │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 📼 FX 4: Magnetic Tape Hysteresis    │ Physikalisches Magnetband-Modell (Jiles-Atherton B-H),   │
│                                      │ Capstan-Wow (0.5 Hz) & Motor-Flutter (6 Hz).             │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 🎻 FX 5: Karplus-Strong Waveguide    │ Fraktionales Kammfilter-Netzwerk mit Allpass-Dispersion  │
│                                      │ zur Transformation von FM-Transienten in Saiten/Platten. │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ ☁️ FX 6: Granular Cloud & Scatter     │ Echtzeit-Granulator (5–400 ms Grains) mit stochastischer │
│                                      │ Poisson-Dichte & Reverse-Grain-Wahrscheinlichkeit.       │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ ⚡ FX 7: Asymmetric Diode Wavefolder │ Mehrstufiges Buchla 259 Timbre-Wavefolding mit DC-Offset │
│                                      │ und 4-fach überabgetasteter Germanium-Diodenverzerrung.  │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 🎚️ FX 8: Multi-Band Dynamic Sculptor │ 4-Band Crossover mit dynamischem Spektral-Ducking gegen   │
│                                      │ Schwellen und Mumpf im dichten FM-Akkordbereich.         │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 🪐 FX 9: Binaural 3D Spatial Orbit   │ Kopfbezogenes HRIR-Spatializing mit Doppler-Frequenz-    │
│                                      │ verschiebung für zirkulierende 3D-Kopfhörerräume.        │
├──────────────────────────────────────┼──────────────────────────────────────────────────────────┤
│ 🔀 FX 10: Probabilistic Glitch Shuffler| Rhythmisches Beat-Repeat & Slice-Shuffle Modul mit     │
│                                      │ Bitcrush, Reverse-Gating und Euclidian Glitch-Triggern.  │
└──────────────────────────────────────┴──────────────────────────────────────────────────────────┘
```

---

## 🌌 FX 1: Spectral Shimmer & Pitch-Diffuser Reverb

### 1.1 Konzept & Akustische Bedeutung
Ein traditioneller Hall verteilt Signalenergie im Raum. Der **Spectral Shimmer Reverb** integriert einen **granularen Pitch-Shifter** (typischerweise $+12$ Halbtöne Oktave aufwärts oder $+7$ Quinte) direkt in die Rückkopplungsschleife eines dichten *Feedback Delay Networks (FDN)* nach *Moorer & Stautner*.

Jede Hall-Reflexion wird bei jedem Umlauf erneut um eine Oktave nach oben transponiert. Dadurch entsteht ein kontinuierlich nach oben funkelnder, himmlischer Obertonschweif, der obertonarme FM-Sinusträger in epische Ambient-Atmosphären verwandelt.

### 1.2 Mathematischer Signalfluss
$$\mathbf{s}(t) = \mathbf{A} \cdot \mathbf{s}(t - \mathbf{\tau}) + \mathbf{b} \cdot x(t)$$
$$y(t) = \mathbf{c}^T \mathbf{s}(t) + d \cdot x(t)$$
$$\mathbf{A} = \mathbf{H}_N \cdot \text{diag}(g_1 e^{-j 2\pi \Delta f t}, \dots, g_N e^{-j 2\pi \Delta f t})$$
wobei $\mathbf{H}_N$ eine orthogonale Hadamard-Diffusionsmatrix ist und $\Delta f$ die Frequenzverschiebung repräsentiert.

### 1.3 Parameter & Wertebereich
* **`shim_decay` (Ausklingzeit):** $0.5\text{ s} \dots 45.0\text{ s}$ (bis zu unendlichem Freeze)
* **`shim_pitch` (Pitch-Shift):** $-12.0\text{ st} \dots +24.0\text{ st}$ (Default: $+12\text{ st}$)
* **`shim_mix` (Shimmer-Anteil im Hall):** $0.0\% \dots 100.0\%$
* **`shim_damp` (High-Damping Cutoff):** $500\text{ Hz} \dots 16000\text{ Hz}$
* **`shim_size` (Diffusions-Dichte):** $10\text{ ms} \dots 250\text{ ms}$

---

## 🪵 FX 2: Resonator Bank & Modal Body Filter

### 2.1 Konzept & Akustische Bedeutung
Reine FM-Synthesizer klingen oft abstrakt-elektronisch, da ihnen die physischen Dämpfungseigenschaften realer Hohlräume (Resonanzböden von Klavieren, Kalebassen von Xylophonen, Geigenkorpusse) fehlen.  
Die **Resonator Bank** besteht aus einem Verbund von **16 parallelen IIR-Bandpassfiltern 2. Ordnung**, deren Mittenfrequenzen $f_k$ harmonisch, modal oder inharmonisch gestimmt sind.

### 2.2 Mathematischer Signalfluss
$$H(z) = \sum_{k=1}^{16} \frac{g_k \cdot (1 - r_k^2)}{1 - 2 r_k \cos(\omega_k) z^{-1} + r_k^2 z^{-2}}$$
wobei $\omega_k = 2\pi \frac{f_k}{f_s}$ und $r_k = e^{-\frac{\pi B_k}{f_s}}$ den Resonanzradius bestimmen.

### 2.3 Parameter & Wertebereich
* **`res_freq` (Grund-Resonanz):** $30.0\text{ Hz} \dots 4000.0\text{ Hz}$
* **`res_struct` (Struktur-Modus):** `Harmonisch (1:2:3:4)`, `Metallisch (Bessel)`, `Holz (Bar)`, `Gourd (Vokal)`
* **`res_q` (Resonanzgüte / Nachklingzeit):** $Q = 1.0 \dots 80.0$
* **`res_inharm` (Inharmonizitäts-Spreizung):** $0.00 \dots 4.00$
* **`res_drive` (Nichtlineare Anregungs-Sättigung):** $1.0 \dots 5.0$

---

## 💈 FX 3: Barberpole Phasing & Infinite-Sweep Flanger

### 3.1 Konzept & Akustische Bedeutung
Herkömmliche Phaser und Flanger modulieren mit einem LFO auf und ab. Der **Barberpole Flanger** erzeugt durch die Kombination von **Hilbert-Transformation (Einseitenband-Modulation)** und kaskadierten Allpass-Filtern die psychoakustische Illusion einer **kontinuierlich unendlich ansteigenden (oder abfallenden) Phasenbewegung** (*Shepard-Risset Phänomen*), ohne jemals den Richtungssinn zu wechseln.

### 3.2 Mathematischer Signalfluss
$$x_{\text{analytic}}(t) = x(t) + j \cdot \mathcal{H}\{x(t)\}$$
$$x_{\text{ssb}}(t) = \text{Re}\left(x_{\text{analytic}}(t) \cdot e^{\pm j 2\pi f_{\text{barber}} t}\right)$$

### 3.3 Parameter & Wertebereich
* **`barber_rate` (Umlauf-Geschwindigkeit & Richtung):** $-5.00\text{ Hz} \dots +5.00\text{ Hz}$
* **`barber_poles` (Filter-Stufen):** $4$, $8$, $12$, $16$ oder $24$ Allpass-Pole
* **`barber_feedback` (Resonanz-Schärfe):** $0.0\% \dots 96.0\%$
* **`barber_stereo` (Stereo-Phasenversatz):** $0^\circ \dots 360^\circ$ (erzeugt rotierende Stereo-Wirbel)

---

## 📼 FX 4: Magnetic Tape Hysteresis & Wow/Flutter Warbler

### 4.1 Konzept & Akustische Bedeutung
Modelliert das physikalische Verhalten von analogem Tonband (*Roland Space Echo RE-201 / Studer A80*). Die magnetischen Dipole im Eisenoxid zeigen **Hysterese**: Die Magnetisierung $M$ folgt dem Signal $H$ mit Sättigungsverzögerung.  
Zusammen mit mechanischen Unregelmäßigkeiten des Bandantriebs (langsames Leiern = **Wow** mit $0.5\text{ Hz}$, schnelles Zittern = **Flutter** mit $6\text{ Hz}$) verleiht dieser Effekt kühlen FM-Klängen eine organische, lebendige Wärme.

### 4.2 Mathematischer Signalfluss
$$\frac{dM}{dH} = \frac{M_{\text{an}} - M}{\delta k (1 - c) \text{sgn}\left(\frac{dH}{dt}\right)} + c \frac{dM_{\text{an}}}{dH}$$
$$y_{\text{tape}}(t) = x(t - \tau(t)) \quad \text{mit} \quad \tau(t) = \tau_0 + A_{\text{wow}} \sin(2\pi f_w t) + A_{\text{flutter}} \cdot \text{Noise}(t)$$

### 4.3 Parameter & Wertebereich
* **`tape_drive` (Bandsättigung):** $1.00 \dots 8.00$
* **`tape_hysteresis` (Magnetische Nichtlinearität):** $0.0\% \dots 100.0\%$
* **`tape_wow` (Langsames Leiern):** $0.0\% \dots 100.0\%$ ($f = 0.3\text{ Hz} \dots 1.2\text{ Hz}$)
* **`tape_flutter` (Schnelles Bandflattern):** $0.0\% \dots 100.0\%$ ($f = 4.0\text{ Hz} \dots 12.0\text{ Hz}$)
* **`tape_head_age` (Tonkopf-Höhendämpfung):** $2000\text{ Hz} \dots 18000\text{ Hz}$

---

## 🎻 FX 5: Karplus-Strong Waveguide String Resonator

### 5.1 Konzept & Akustische Bedeutung
Verwandelt die harten Anblas- und Klick-Transienten von FM-Sounds in **physikalisch schwingende Saiten, Balken und Membranen**.  
Ein fraktionales Verzögerungsglied mit Verzögerungszeit $\tau = \frac{1}{f_0}$ speist das Signal über ein Dämpfungsfilter und ein Allpass-Dispersionsglied zurück.

### 5.2 Mathematischer Signalfluss
$$y[n] = x[n] + \alpha \cdot \frac{y[n - D] + y[n - D - 1]}{2}$$
wobei $D = \left\lfloor \frac{f_s}{f_0} \right\rfloor$ und $\alpha \in [0.90, 0.999]$ die Saitendämpfung steuert.

### 5.3 Parameter & Wertebereich
* **`string_pitch` (Saiten-Grundfrequenz):** Noten $C1 \dots C7$ ($32.7\text{ Hz} \dots 2093\text{ Hz}$)
* **`string_decay` (Saiten-Nachklingdauer):** $0.1\text{ s} \dots 12.0\text{ s}$
* **`string_damp` (Helligkeitsverlust / Dämpfung):** $0.0\% \dots 100.0\%$
* **`string_dispersion` (Steifigkeit / Inharmonizität):** $0.0 \dots 1.0$ (Stahldraht vs. Nylon)
* **`string_pluck_mix` (Anregungs-Verhältnis):** $0.0\% \dots 100.0\%$

---

## ☁️ FX 6: Granular Cloud & Micro-Particle Scatter Engine

### 6.1 Konzept & Akustische Bedeutung
Schneidet das eingehende FM-Signal in tausende winzige Klangpartikel (**Grains**, $5\text{ ms} \dots 400\text{ ms}$) mit glatter Tukey/Hann-Hüllkurve, transponiert sie stochastisch im Pitch, streut sie im Stereobild und spielt einen frei wählbaren Anteil rückwärts ab.

### 6.2 Mathematischer Signalfluss
$$y(t) = \sum_{k=1}^{G(t)} w(t - t_k) \cdot x\left( \alpha_k \cdot (t - t_k) + \tau_k \right) \cdot \mathbf{Pan}_k$$
mit Poisson-Verteilungsdichte $\lambda$ für den Grain-Startzeitpunkt $t_k$.

### 6.3 Parameter & Wertebereich
* **`grain_size` (Kornlänge):** $5.0\text{ ms} \dots 400.0\text{ ms}$
* **`grain_density` (Überlappende Partikel):** $1 \dots 32\text{ Grains gleichzeitig}$
* **`grain_pitch_scatter` (Zufällige Tonhöhenstreuung):** $0.0 \dots \pm 24.0\text{ Halbtöne}$
* **`grain_reverse` (Rückwärts-Wahrscheinlichkeit):** $0.0\% \dots 100.0\%$
* **`grain_spray` (Zeitliche Jitter-Streuung):** $0.0\text{ ms} \dots 500.0\text{ ms}$

---

## ⚡ FX 7: Asymmetric Diode Wavefolder & West Coast Overdrive

### 7.1 Konzept & Akustische Bedeutung
Inspiriert vom legendären **Buchla 259 Timbre Circuit**. Während herkömmliche Verzerrer das Signal abschneiden, falten Dioden-Netzwerke die Schwingungsspitzen zurück in Richtung Nulldurchgang.  
Durch einen zusätzlichen Gleichspannungs-Offset (**Asymmetry Bias**) entstehen sowohl gerade als auch ungerade Harmonische, was dem Klang eine unvergleichliche analoge Plastizität verleiht.

### 7.2 Mathematischer Signalfluss
$$y_{\text{fold}}(x) = \sin\left(\gamma \cdot x + \Delta_{\text{bias}}\right) + \frac{1}{3} \sin\left(3\gamma \cdot x\right)$$

### 7.3 Parameter & Wertebereich
* **`fold_depth` (Wellenfaltungs-Tiefe $\gamma$):** $0.00 \dots 10.00$
* **`fold_bias` (Asymmetrischer DC-Offset):** $-1.00 \dots +1.00$
* **`fold_drive` (Eingangs-Verstärkung):** $1.00 \dots 8.00$
* **`fold_mix` (Dry / Wet):** $0.0\% \dots 100.0\%$

---

## 🎚️ FX 8: Multi-Band Dynamic Spectral Sculptor

### 8.1 Konzept & Akustische Bedeutung
Komplexe FM-Klänge neigen im Akkordspiel dazu, im Bereich von $200\text{ Hz} \dots 600\text{ Hz}$ stark zu dröhnen, während zarte Glockenobertöne maskiert werden.  
Der **Spectral Sculptor** teilt das Signal über phasenkorrekte Linkwitz-Riley-Crossover in **4 Spektralbänder** auf und komprimiert/expandiert diese dynamisch in Abhängigkeit von der momentanen spektralen Energie.

### 8.2 Parameter & Wertebereich
* **`sculpt_low_duck` (Sub/Bass Ducking bei Resonanzspitzen):** $0.0\text{ dB} \dots -18.0\text{ dB}$
* **`sculpt_mid_tame` (Tiefmitten-Entzerrung):** $0.0\% \dots 100.0\%$
* **`sculpt_air_excite` (Dynamische Oberton-Präsenz):** $0.0\text{ dB} \dots +12.0\text{ dB}$
* **`sculpt_lookahead` (Lookahead-Reaktionszeit):** $0.5\text{ ms} \dots 20.0\text{ ms}$

---

## 🪐 FX 9: Binaural 3D Spatial Orbit & Doppler Motion Panner

### 3.1 Konzept & Akustische Bedeutung
Simuliert eine kopfbezogene dreidimensionale Schallfeld-Positionierung (**HRIR / Interaural Time Difference ITD**) im 3D-Kopfhörerraum. Bei kreisender Bewegung berechnet das Modul automatisch die **Doppler-Frequenzverschiebung** $f_{\text{doppler}} = f_0 \frac{c}{c - v_s}$, wodurch rotierende FM-Sounds physikalisch lebensecht an den Ohren vorbeizischen.

### 9.2 Parameter & Wertebereich
* **`orbit_speed` (Rotations-Frequenz):** $-10.0\text{ Hz} \dots +10.0\text{ Hz}$
* **`orbit_radius` (Entfernung zum Kopf):** $0.2\text{ m} \dots 15.0\text{ m}$
* **`orbit_elevation` (Höhenwinkel):** $-90^\circ\text{ (unten)} \dots +90^\circ\text{ (oben)}$
* **`orbit_doppler` (Stärke des Doppler-Effekts):** $0.0\% \dots 100.0\%$

---

## 🔀 FX 10: Probabilistic Glitch Shuffler & Beat-Repeat

### 10.1 Konzept & Akustische Bedeutung
Ein performance-orientierter Ringpuffer-Looper, der den Audiosignalstrom in rhythmische Slices zerlegt (z. B. $1/16$, $1/32$, Triolen) und nach stochastischen Wahrscheinlichkeiten neu anordnet, rückwärts abspielt, mit Bitcrusher zerschreddert oder mit Pitch-Drops nach unten zieht.

### 10.2 Parameter & Wertebereich
* **`glitch_grid` (Slice-Raster):** $1/8$, $1/16$, $1/32$, $1/64$, Triolen
* **`glitch_prob` (Zufallswahrscheinlichkeit für Glitch-Events):** $0.0\% \dots 100.0\%$
* **`glitch_reverse_prob` (Slice-Rückwärtsanteil):** $0.0\% \dots 100.0\%$
* **`glitch_bitcrush` (Bit-Tiefe):** $4\text{ Bit} \dots 16\text{ Bit}$
* **`glitch_downsample` (Sample-Rate Reduktion):** $1.0\text{ kHz} \dots 48.0\text{ kHz}$

---

## 🎛️ Modulares UI-Rack-Konzept für die 10 FX-Module

Jedes dieser 10 Module ist so konzipiert, dass es:
1. **Als zuschaltbarer Rack-Einschub** im FM Music Composer aktiviert werden kann.
2. **Über die bewährten taktilen $[A, B]$ Schieberegler mit weißer 60 FPS Wertnadel** verfügt.
3. **Vollständig mit dem `[ ~ OSC ]` Modulationssystem** synchronisierbar ist (jeder FX-Parameter kann autonom pulsieren).
4. **Vollständig im `.json`-Songformat** gespeichert und exportiert werden kann.

---

*Die 10 FX-Module verwandeln den FM Music Composer in eine vollständige, autarke Ambient- und Sounddesign-Workstation auf professionellem Studio-Niveau.*
