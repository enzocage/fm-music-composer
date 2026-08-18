# Plan 2: 10 Fortgeschrittene & Exotische FM-Synthesizer Architekturen

Dieses Dokument beschreibt 10 neuartige, mathematisch tiefgründige und klanglich radikal unterschiedliche Frequenzmodulations-Synthesizer. Die Architekturen gehen weit über klassische 2-Operator- oder 3-Operator-Kaskaden hinaus und nutzen Konzepte aus der **nichtlinearen Dynamik (Chaos-Theorie)**, **fraktionalen Analysis**, **elliptischen Funktionen nach Jacobi**, **Lie-Gruppen auf Quaternionen-Mannigfaltigkeiten**, **Kuramoto-Netzwerksynchronisation**, **Waveguide-Dispersion** und **fraktaler Wavelet-Granularsynthese**.

---

## Übersicht der 10 Synthesizer-Konzepte

| Nr. | Synthesizer-Name | Mathematischer Kern | Klangcharakter | Visuelle Signatur |
|---|---|---|---|---|
| **1** | **Lorenz-Rössler Chaos-Attraktor FM** | Gekoppelte nichtlineare DGL-Systeme 3. Ordnung | Organisch turbulente Schreie, Bifurkations-Sweeps, nicht-periodische Drones | 3D-Schmetterlings-Attraktor Projektion $(x, y, z)$ |
| **2** | **Chebyshev Wavefolder Feedback FM** | Orthogonale Tschebyscheff-Polynome $T_k(x)$ & $\tanh$-Sättigung | Industrielle Rasierklingen-Schärfe, fraktale Obertöne, Laser-Metall | Gefaltete Phasenraum-Kämme & Hyper-Spitzen |
| **3** | **Jacobi-Elliptische Soliton-FM** | Jacobian Elliptic Functions $\text{sn}(u,m), \text{cn}(u,m)$ mit Modulus $m$ | Organischer Übergang von Glas zu holzigem Reeds & Moog-Solitonen | Verformte Phaseneiflächen & Theta-Nullstellen |
| **4** | **Fraktional-Differentielle Gedächtnis-FM** | Riemann-Liouville/Caputo Ableitung $D_t^\alpha$ reeller Ordnung $\alpha$ | Zeitverzögerte Schimmer-Texturen, $1/f^\beta$-Gedächtnis-Swells | Phasen-Nachleuchten mit logarithmischem Zerfall |
| **5** | **4D-Quaternionen Hyperraum Vektor-FM** | $SO(4)$ Lie-Gruppen Rotation im 4-dimensionalen Raum | Holografisch rotierendes Stereo-Feld, 4D-Binaural-Sweeps | Stereografische Projektion eines 4D-Hyper-Torus |
| **6** | **Quanten-Walk & Lévy-Flight FM** | Schwanzlastige Lévy-Verteilungen & Poisson-Sprungprozesse | Granulare Geigerzähler-Funken, plötzliche Quantensprünge | Punktwolken mit fraktalen Orbit-Sprüngen |
| **7** | **Kuramoto-Netzwerk Schwarm-FM** | $N=6$ bis $8$ nichtlinear phasen-gekoppelte Ring-Oszillatoren | Schwarm-Synchronisation, Grillen-Zirpen, biologische Cluster | Phasen-Ordnungsparameter $r e^{i\psi}$ Kreisvektoren |
| **8** | **Dispersive Waveguide Tension FM** | Dispersionsfilter $A(z)$ & dynamische Saitenspannungs-Modulation | Gongs, gestrichene Titanstäbe, metallische Rückkopplung | Stehende Dispersionswellen & Resonanz-Schleifen |
| **9** | **Kybernetische Formant-Kaskade** | 2D-Vokaltrakt-Interpolation $\mathbf{M}_{\text{IPA}}$ & DSB-SC Modulation | Außerirdische Sprachlaute, gutturaler Kehlgesang, Bio-Roboter | 2D-Formant-Fläche (F1 vs. F2 Vokaltrakt-Raum) |
| **10** | **Multiskalen Wavelet Fraktal-FM** | Dyadische Meyer/Morlet-Wavelet Granulation mit Skalierung $2^j$ | Kristalline Kaskaden, zerberstendes Glas, Skalen-Invarianz | Multiskalen-Skalogramm & fraktale Energiebäume |

---

## Detaillierte mathematische Spezifikationen

```
                               ┌─────────────────────────────┐
                               │   Nichtlineare Dynamik      │
                               │   Lorenz/Rössler / Kuramoto │
                               └──────────────┬──────────────┘
                                              ▼
┌──────────────────────────┐      ┌──────────────────────────┐      ┌──────────────────────────┐
│ Fraktionale Analysis     │ ───► │  Exotische FM-Kerne      │ ◄─── │  Geometrische Algebren   │
│ Caputo / Riemann D_t^α   │      │  Jacobi sn, cn / 4D SO(4)│      │  Quaternionen / Hopf     │
└──────────────────────────┘      └──────────────┬───────────┘      └──────────────────────────┘
                                              ▼
                               ┌─────────────────────────────┐
                               │  Adaptive Visualisierung    │
                               │  4-Panel Phasen-Attraktor   │
                               └─────────────────────────────┘
```

---

### Synthesizer 1: Lorenz-Rössler Chaos-Attraktor FM (Nichtlineare Zustandsraum-FM)

#### 1. Konzept & Klangästhetik
Anstelle von periodischen LFOs oder simplen Hüllkurven wird die Frequenz- und Phasenmodulation durch die kontinuierliche Echtzeit-Integration des dreidimensionalen **Lorenz-Attraktors** oder des **Rössler-Systems** gesteuert. Die 3 Zustandsvariablen $x(t), y(t), z(t)$ oszillieren deterministisch-chaotisch um zwei instabile Fixpunkte (Schmetterlingsflügel). Kleine Änderungen an den Steuerparametern $\sigma, \rho, \beta$ führen zu Periodenverdopplungen (Feigenbaum-Kaskade) und abrupten Übergängen zwischen reinen Obertönen und hyper-dichtem Rausch-Turmoil.

#### 2. Vollständige mathematische Formulierung
Das System wird durch drei gekoppelte autonome Differentialgleichungen definiert:

$$\begin{aligned}
\frac{dx}{dt} &= \sigma \cdot (y - x) \\
\frac{dy}{dt} &= x \cdot (\rho - z) - y \\
\frac{dz}{dt} &= x \cdot y - \beta \cdot z
\end{aligned}$$

Standard-Parameterbereich: $\sigma \in [5, 20]$, $\rho \in [10, 50]$, $\beta \in [1, 4]$.

Die Audio-Gleichung nutzt alle drei Raumkoordinaten zur orthogonalen Kreuzmodulation:

$$y(t) = A(t) \cdot \sin\left( 2\pi f_c t + I_x \cdot \hat{x}(t) \cdot \sin\left( 2\pi f_{m1} t + \phi_y \cdot \hat{y}(t) \right) + I_z \cdot \hat{z}(t) \cdot \sin(2\pi f_{m2} t) \right)$$

wobei $\hat{x}(t), \hat{y}(t), \hat{z}(t)$ z-Score-normalisierte Zustandsvariablen darstellen:

$$\hat{x}(t) = \frac{x(t) - \mu_x}{\sigma_x}, \quad \hat{y}(t) = \frac{y(t) - \mu_y}{\sigma_y}, \quad \hat{z}(t) = \frac{z(t) - \mu_z}{\sigma_z}$$

#### 3. Numerische Integration (Runge-Kutta 4. Ordnung im Audio-Thread)
$$\begin{aligned}
\mathbf{k}_1 &= f(\mathbf{x}_n) \\
\mathbf{k}_2 &= f\left(\mathbf{x}_n + \frac{\Delta t}{2}\mathbf{k}_1\right) \\
\mathbf{k}_3 &= f\left(\mathbf{x}_n + \frac{\Delta t}{2}\mathbf{k}_2\right) \\
\mathbf{k}_4 &= f(\mathbf{x}_n + \Delta t \cdot \mathbf{k}_3) \\
\mathbf{x}_{n+1} &= \mathbf{x}_n + \frac{\Delta t}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)
\end{aligned}$$

#### 4. Parameter & Regler
- **Rayleigh-Zahl $\rho$:** Steuert das Chaos-Level (unterhalb 24.74 periodisch, darüber seltsamer Attraktor).
- **Prandtl-Zahl $\sigma$:** Beeinflusst die Kopplungsgeschwindigkeit zwischen $x$ und $y$.
- **Integrations-Geschwindigkeit $\lambda_{\text{chaos}}$:** Skaliert $\Delta t \in [0.0001, 0.05]$ für ultra-langsame Drifts bis Audio-Rate FM.
- **Attraktor-Spreizung $I_x, I_z$:** Modulationstiefen für die jeweiligen Flügelbahnen.

---

### Synthesizer 2: Chebyshev Wavefolder Feedback FM (Nichtlineare Fraktal-Sättigung)

#### 1. Konzept & Klangästhetik
Dieser Synthesizer speist das frequenzmodulierte Signal in eine geschlossene Rückkopplungsschleife ein, die nicht nur eine Phasendämpfung erfährt, sondern durch eine Kette von **Tschebyscheff-Polynomen erster Art $T_k(x)$** und hyperbolischen Tangens-Sättigern geführt wird. Tschebyscheff-Polynome erzeugen aus reinen Sinusschwingungen exakt kontrollierbare harmonische Obertöne $k$-ter Ordnung ($T_k(\cos\theta) = \cos(k\theta)$). Durch die Rückkopplung im Phasenargument entsteht eine fraktale Selbstähnlichkeit im Spektrum mit rasiermesserscharfen, metallisch-industriellen Timbres.

#### 2. Mathematische Definition
Die Tschebyscheff-Polynome sind rekursiv definiert über:

$$T_0(x) = 1, \quad T_1(x) = x, \quad T_{k+1}(x) = 2x T_k(x) - T_{k-1}(x)$$

Explizit für die ersten Ordnungen:
- $T_2(x) = 2x^2 - 1$
- $T_3(x) = 4x^3 - 3x$
- $T_4(x) = 8x^4 - 8x^2 + 1$
- $T_5(x) = 16x^5 - 20x^3 + 5x$

Die zeitdiskrete Differenzengleichung des Synthesizers lautet:

$$x[n] = \sin\left( \omega_c n + I_0 \cdot \sin(\omega_m n) + \beta \cdot \mathcal{W}\big(x[n - d]\big) \right)$$

wobei die Wavefolder-Transferfunktion $\mathcal{W}(u)$ definiert ist als:

$$\mathcal{W}(u) = \tanh\left( \gamma \sum_{k=1}^K \alpha_k T_k\left(\frac{u}{\max(1, |u|)}\right) \right)$$

wobei $d \ge 1$ ein gebrochener Verzögerungs-Offset (Fractional Delay via Allpass-Interpolation) ist.

#### 3. Spektrale Faltung
Durch die nichtlineare Verkettung entsteht im Spektrum ein Jacobi-Anger-Bessel-Kamm mit polynomialer Faltung:

$$Y(\omega) = \sum_{n=-\infty}^\infty J_n(I_0) \cdot \delta(\omega - \omega_c - n\omega_m) * \mathcal{F}\left\{ \mathcal{W}(x[n]) \right\}$$

#### 4. Parameter
- **Harmonische Gewichtung $\alpha_1 \dots \alpha_5$:** Individuelle Oberton-Präsenz der Ordnungen 1 bis 5.
- **Faltungs-Verstärkung $\gamma$:** Grad der Wavefolding-Intensität.
- **Rückkopplungs-Faktor $\beta \in [0, 2.5]$:** Übergang von subtilem Glanz zu digitalem Chaos und Limit-Cycles.

---

### Synthesizer 3: Jacobi-Elliptische Soliton-FM ($\text{sn}/\text{cn}/\text{dn}$-Phasenmodulation)

#### 1. Konzept & Klangästhetik
Herkömmliche FM basiert auf elementaren trigonometrischen Funktionen ($\sin, \cos$). Dieser Synthesizer ersetzt diese durch die **Jacobischen elliptischen Funktionen** $\text{sn}(u, m)$, $\text{cn}(u, m)$ und $\text{dn}(u, m)$, welche die Lösungen der nichtlinearen Pendelgleichung und der Korteweg-de-Vries (KdV) Solitonen-Gleichung darstellen. Der Modulus $m \in [0, 1)$ steuert die innere Krümmung der Welle:
- Für $m \to 0$ konvergiert das System exakt zur klassischen Sinus-FM.
- Für $m \to 1$ deformiert sich die Wellenform zu periodischen Solitonen-Pulszügen ($\text{sech}(u)$ und $\tanh(u)$) mit exponentiell breiten Obertönen.

#### 2. Mathematische Formulierung
Die elliptische Amplitude $\varphi = \text{am}(u, m)$ ist definiert über das unvollständige elliptische Integral erster Art:

$$u = F(\varphi, m) = \int_0^\varphi \frac{d\theta}{\sqrt{1 - m \sin^2\theta}}$$

Daraus ergeben sich die Jacobischen Funktionen:

$$\text{sn}(u, m) = \sin(\text{am}(u, m)), \quad \text{cn}(u, m) = \cos(\text{am}(u, m)), \quad \text{dn}(u, m) = \sqrt{1 - m \cdot \text{sn}^2(u, m)}$$

Die Periode $4K(m)$ wird durch das vollständige elliptische Integral bestimmt:

$$K(m) = \int_0^{\pi/2} \frac{d\theta}{\sqrt{1 - m \sin^2\theta}}$$

Die Synthese-Gleichung der Soliton-FM lautet:

$$y(t) = A(t) \cdot \text{sn}\left( 4 K(m_c) \cdot f_c t + I(t) \cdot \text{cn}\left( 4 K(m_m) \cdot f_m t, \; m_m \right), \; m_c \right)$$

#### 3. Fourier-Entwicklung über das elliptische Nomen $q$
Mit dem Nomen $q = \exp\left(-\pi \frac{K(1-m)}{K(m)}\right)$ lässt sich $\text{sn}(u, m)$ analytisch als Fourier-Reihe darstellen:

$$\text{sn}(u, m) = \frac{2\pi}{\sqrt{m} K(m)} \sum_{n=0}^\infty \frac{q^{n+1/2}}{1 - q^{2n+1}} \sin\left( (2n+1) \frac{\pi u}{2K(m)} \right)$$

Die Frequenzmodulation eines Jacobi-Carriers erzeugt daher ein zweidimensionales Gitter aus Bessel- und Theta-Harmonischen:

$$S(f) = \sum_{k=0}^\infty \sum_{n=-\infty}^\infty C_k(m_c) \cdot J_n\left( I \cdot D_k(m_m) \right) \cdot \delta\left( f - (2k+1)f_c - n f_m \right)$$

#### 4. Parameter
- **Träger-Modulus $m_c \in [0, 0.999]$:** Morpht die Grundschwingung von reinem Sinus zu scharfem Soliton.
- **Modulator-Modulus $m_m \in [0, 0.999]$:** Ändert die Steilheit des Modulationsanstiegs.
- **Elliptische Schwebung $\Delta m(t)$:** LFO-Modulation des Modulus für lebendige spektrale Formveränderungen.

---

### Synthesizer 4: Fraktional-Differentielle Gedächtnis-FM (Riemann-Liouville $\alpha$-Order)

#### 1. Konzept & Klangästhetik
Standard-FM-Synthesizer besitzen kein intrinsisches Langzeitgedächtnis (Markov-Eigenschaft). Bei der fraktionalen FM wird das Phasenintegral durch einen **fraktionalen Operator $D_t^{-\alpha}$ reeller Ordnung $\alpha \in (0, 2]$** ersetzt (gebrochene Analysis nach Caputo und Riemann-Liouville). Dies führt zu einem Potenzgesetz-Gedächtniskern ($t^{-\alpha}$), wodurch vergangene Modulationszustände mit abklingender Gewichtung kontinuierlich in die Gegenwartsphase einfließen. Der Klang besitzt eine unheimliche, zähflüssige Trägheit mit schimmernden $1/f^\beta$-Phasendrifts.

#### 2. Mathematische Definition
Das Riemann-Liouville fraktionale Integral der Ordnung $\alpha > 0$ ist definiert als:

$$I_t^\alpha f(t) = \frac{1}{\Gamma(\alpha)} \int_0^t (t - \tau)^{\alpha - 1} f(\tau) \, d\tau$$

wobei $\Gamma(z) = \int_0^\infty t^{z-1} e^{-t} dt$ die Gamma-Funktion ist.

Die zeitkontinuierliche Phasengleichung lautet:

$$\Phi(t) = 2\pi f_c t + I_0 \cdot \left( I_t^\alpha \big[ \sin(2\pi f_m \tau + \theta_0) \big] \right)(t)$$

Für einen reinen Sinusmodulator $\sin(\omega_m t)$ lässt sich das fraktionale Integral im stationären Zustand exakt analytisch berechnen:

$$I_t^\alpha [\sin(\omega_m t)] = \omega_m^{-\alpha} \cdot \sin\left( \omega_m t - \frac{\alpha \pi}{2} \right) + \mathcal{R}_{\text{transient}}(t, \alpha)$$

wobei der Einschwing-Transiente $\mathcal{R}_{\text{transient}}(t, \alpha) \sim t^{-\alpha}$ für das unverkennbare Langzeit-Gedächtnis sorgt.

#### 3. Zeitdiskrete Realisierung via Grünwald-Letnikov Approximation
Für die Echtzeitberechnung im Audio-Thread wird die GL-Differenzenapproximation mit $M$ Gedächtnis-Taps verwendet:

$$D_t^\alpha x[n] \approx \frac{1}{(\Delta t)^\alpha} \sum_{k=0}^M w_k^{(\alpha)} x[n - k], \quad w_0^{(\alpha)} = 1, \quad w_k^{(\alpha)} = w_{k-1}^{(\alpha)} \left( 1 - \frac{\alpha + 1}{k} \right)$$

#### 4. Parameter
- **Fraktionale Ordnung $\alpha \in [0.1, 1.9]$:** 
  - $\alpha = 1.0$: Klassische FM
  - $\alpha < 1.0$: Sub-diffusive Phasen mit extrem langem Oberton-Nachhall
  - $\alpha > 1.0$: Hyper-diffusives Phasengleiten mit Phasenvorlauf ($+\frac{\alpha\pi}{2}$)
- **Gedächtnistiefe $M \in [16, 512]$ Taps:** Steuert die zeitliche Reichweite des physikalischen Phasengedächtnisses.

---

### Synthesizer 5: 4D-Quaternionen Hyperraum Vektor-FM ($SO(4)$ Lie-Gruppen-Rotation)

#### 1. Konzept & Klangästhetik
Anstelle von eindimensionalen Frequenzwerten operiert dieser Synthesizer in der 4-dimensionalen Divisionsalgebra der **Quaternionen $\mathbb{H}$**. Vier Oszillatoren bilden einen 4D-Zustandsvektor $\mathbf{q}(t) = w + x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$, der durch eine 4D-Rotationsmatrix aus der Lie-Gruppe $SO(4)$ gedreht wird. Die 6 Generatoren der Lie-Algebra $\mathfrak{so}(4)$ steuern 6 orthogonale Rotationsebenen ($xy, xz, xw, yz, yw, zw$). Die Stereokanäle entstehen durch stereografische Projektion der 3-Sphäre $S^3$ auf den zweidimensionalen Hörraum. Das Ergebnis ist eine unendliche, holografische räumliche Klangfeld-Drehung mit faszinierenden Phaseninterferenzen.

#### 2. Mathematische Formulierung
Ein Quaternion $\mathbf{q} \in \mathbb{H}$ gehorcht den Multiplikationsregeln:

$$\mathbf{i}^2 = \mathbf{j}^2 = \mathbf{k}^2 = \mathbf{i}\mathbf{j}\mathbf{k} = -1$$

Die infinitesimale Zeitentwicklung unter $SO(4)$ wird beschrieben durch:

$$\frac{d\mathbf{q}}{dt} = \mathbf{\Omega}(t) \cdot \mathbf{q}(t), \quad \mathbf{\Omega}(t) = \begin{pmatrix} 0 & -\omega_{12} & -\omega_{13} & -\omega_{14} \\ \omega_{12} & 0 & -\omega_{23} & -\omega_{24} \\ \omega_{13} & \omega_{23} & 0 & -\omega_{34} \\ \omega_{14} & \omega_{24} & \omega_{34} & 0 \end{pmatrix} \in \mathfrak{so}(4)$$

Die vier Komponenten treiben zwei orthogonale Stereo-Träger:

$$\begin{aligned}
y_L(t) &= A_L \cdot \sin\Big( 2\pi f_c t + I_1 \cdot w(t) \cdot \sin(2\pi f_{m1} t) + I_2 \cdot x(t) \cdot \cos(2\pi f_{m2} t) \Big) \\
y_R(t) &= A_R \cdot \cos\Big( 2\pi (f_c + \Delta f) t + I_1 \cdot y(t) \cdot \cos(2\pi f_{m1} t) + I_2 \cdot z(t) \cdot \sin(2\pi f_{m2} t) \Big)
\end{aligned}$$

#### 3. Hopf-Faserung zur Phasenraum-Visualisierung
Die Abbildung der $S^3 \subset \mathbb{R}^4$ auf die Riemannsche 2-Sphäre $S^2$ (Hopf-Fibration):

$$\pi_{\text{Hopf}}(w, x, y, z) = \begin{pmatrix} 2(wx + yz) \\ 2(wy - xz) \\ w^2 + z^2 - x^2 - y^2 \end{pmatrix} \in S^2$$

#### 4. Parameter
- **Ebenen-Winkelgeschwindigkeiten $\omega_{12}, \omega_{34}$ (Isokline Rotationen):** Erzeugen reine, unendliche 4D-Drehungen ohne Verzerrung.
- **Anisotropie-Faktor $\kappa$:** Grad der Kopplung zwischen linker und rechter Projektionshemisphäre.
- **Hyperraum-Hub $I_1, I_2$:** Modulationsindizes der 4D-Achsen.

---

### Synthesizer 6: Stochastische Quanten-Walk & Lévy-Flight FM (Poisson-Lévy Impuls-FM)

#### 1. Konzept & Klangästhetik
Dieser Synthesizer bricht mit glatten Wellenformen und steuert die Phasen- und Frequenzmodulation über einen **stochastischen Lévy-Flug-Prozess** (stabile Pareto-Lévy-Verteilung mit schwerem Schwanz) kombiniert mit einer stochastischen Wellenfunktion nach Vorbild der Schrödinger-Gleichung. Es entstehen mikroskopische Quanten-Sprünge, knisternde Geigerzähler-Impulse, die bei höherer Dichte in dichte, fraktale Rauschbänder und kristalline Obertöne übergehen.

#### 2. Mathematische Formulierung
Die Sprungweiten $\Delta I$ des Modulationsindex folgen einer Lévy-stabilen Wahrscheinlichkeitsdichtefunktion $L_\alpha(x)$ mit Stabilitätsparameter $\alpha \in (0, 2]$:

$$P(\Delta I > x) \sim x^{-\alpha} \quad \text{für } x \to \infty$$

Die momentane Phasentrajektorie ist gegeben durch die stochastische Differentialgleichung (SDE):

$$d\Phi(t) = 2\pi f_c \, dt + I(t) \sin(2\pi f_m t) \, dt + \sigma_{\text{diff}} \, dW(t) + \sum_{k} \Delta I_k \cdot \delta(t - t_k) \, dt$$

wobei $W(t)$ ein Standard-Wiener-Prozess (Brownsche Bewegung) und $t_k$ die Sprungzeitpunkte eines inhomogenen Poisson-Prozesses mit Intensitätsrate $\lambda(t)$ sind:

$$\lambda(t) = \lambda_0 \cdot \big( 1 + \mu \cdot \sin^2(2\pi f_{\text{pulse}} t) \big)$$

Das Ausgangssignal wird über ein Quanten-Wellenpaket moduliert:

$$y(t) = \exp\left(-\frac{(t \bmod T_{\text{grain}} - \tau_0)^2}{2\sigma_t^2}\right) \cdot \sin\big(\Phi(t)\big)$$

#### 3. Spektrale Dichte
Das Leistungsspektrum $S(f)$ weist eine $1/f^{2-\alpha}$ Skaleninvarianz auf:

$$S(f) \propto \frac{1}{|f - f_c|^{2 - \alpha}} + \sum_{n=-\infty}^\infty |J_n(\langle I \rangle)|^2 \delta(f - f_c - n f_m)$$

#### 4. Parameter
- **Lévy-Index $\alpha \in [0.5, 2.0]$:** $\alpha=2$ entspricht normalverteiltem Gauss-Rauschen; $\alpha < 1$ erzeugt seltene, gigantische Quantensprünge im Timbre.
- **Poisson-Sprungrate $\lambda_0 \in [1, 5000]$ Hz:** Übergang von rhythmischem Einzelknistern zu dichtem Quantengranulat.
- **Wellenschrumpfung $\sigma_t$:** Zeitliche Ausdehnung der Quantenwellenpakete.

---

### Synthesizer 7: Zirkuläres Kuramoto-Netzwerk FM ($N$-fach Phasen-Synchronisation)

#### 1. Konzept & Klangästhetik
Ein Ensemble von $N = 8$ Oszillatoren ist in einer geschlossenen Ring-Topologie miteinander vernetzt. Jeder Oszillator beeinflusst über das **Kuramoto-Modell** die Phase seiner Nachbarn und moduliert gleichzeitig die Frequenz des nächsten Knotenpunkts. Abhängig von der Kopplungsstärke $K$ zeigt das System spontane **Selbstorganisation**: Es durchläuft Phasenübergänge von völliger Unordnung (inharmoischer Schwarm) über geordnete Phasenwellen (rotierende Akkorde) bis hin zu perfekter Phasensynchronisation (massiver Monolith-Lead).

#### 2. Mathematische Formulierung
Die Dynamik der $N$ Oszillatoren wird beschrieben durch das gekoppelte System:

$$\frac{d\theta_i}{dt} = 2\pi f_i + \frac{K}{N} \sum_{j=1}^N A_{ij} \sin(\theta_j(t) - \theta_i(t) - \alpha_{ij}), \quad i \in \{1, \dots, N\}$$

wobei $A_{ij}$ die Adjazenzmatrix des Ringnetzwerks mit Nächste-Nachbar-Kopplung darstellt ($A_{i, i\pm 1} = 1$).

Der komplexe **Kuramoto-Ordnungsparameter** $r(t) e^{i\psi(t)}$ misst den globalen Synchronisationsgrad:

$$r(t) e^{i\psi(t)} = \frac{1}{N} \sum_{j=1}^N e^{i\theta_j(t)}, \quad r(t) \in [0, 1]$$

Das Audio-Summensignal entsteht durch zirkuläre FM-Verknüpfung der Oszillatoren:

$$y(t) = \frac{1}{N} \sum_{i=1}^N \sin\Big( \theta_i(t) + I_0 \cdot (1 - r(t)) \cdot \sin\big(\theta_{(i \bmod N) + 1}(t)\big) \Big)$$

#### 3. Phasendiagramm
- **$K < K_c$ (Subkritisch):** $r \approx 0$, freie inharmonische Schwebungen, gläsernes Zirpen.
- **$K = K_c$ (Kritisch):** Maximale Fluktuationen, bio-akustisches Schwarmverhalten.
- **$K > K_c$ (Superkritisch):** $r \to 1$, vollständige Phasenverriegelung zu einem massiven Oberton-Cluster.

#### 4. Parameter
- **Kopplungskonstante $K \in [0, 50]$:** Steuert den Phasenübergang von Chaos zu Harmonie.
- **Phasenverschiebung $\alpha_{ij} \in [0, \pi]$:** Ermöglicht chirale (asymmetrisch rotierende) Wellenmuster im Ring.
- **Eigenfrequenz-Streuung $\sigma_f$:** Gaußsche Verstimmung der Grundfrequenzen $f_i \sim \mathcal{N}(f_0, \sigma_f^2)$.

---

### Synthesizer 8: Dispersive Waveguide & Tension-Feedback FM (Physikalische Resonanz)

#### 1. Konzept & Klangästhetik
Dieser Synthesizer verbindet die Theorie physikalischer Wellenleiter (Digital Waveguides) mit nichtlinearer FM. Das frequenzmodulierte Signal durchläuft eine digitale Saite mit **frequenzabhängiger Phasenlaufzeit (Dispersion)**, realisiert über Allpass-Filterketten höherer Ordnung. Die Saite besitzt eine amplitude-abhängige Spannungsmodulation ($\Delta L \propto |y(t)|^2$), wodurch hohe Anschlagstärken die Tonhöhe nach oben biegen (Pitch-Glide wie bei Gongs und gestrichenen Metallplatten).

#### 2. Mathematische Formulierung
Die Wellenleiter-Schleifenübertragungsfunktion $H_{\text{loop}}(z)$ lautet:

$$H_{\text{loop}}(z) = z^{-D_0} \cdot H_{\text{loss}}(z) \cdot H_{\text{disp}}(z)$$

wobei die Dispersionsstufe aus einer Kaskade von $M$ Allpassfiltern erster Ordnung besteht:

$$H_{\text{disp}}(z) = \prod_{k=1}^M \frac{\rho_k + z^{-1}}{1 + \rho_k z^{-1}}, \quad \rho_k \in (-1, 1)$$

Die nichtlineare Saitenspannung moduliert die effektive Verzögerungslänge $D(t)$:

$$D(t) = D_0 \cdot \left( 1 - \kappa_{\text{tension}} \cdot \mathcal{E}_{\text{RMS}}\big(y(t)\big) \right)$$

Das FM-Zusammenspiel mit dem Waveguide:

$$y[n] = \sin\left( 2\pi f_c \frac{n}{f_s} + I_0 \cdot \sin\left(2\pi f_m \frac{n}{f_s}\right) + \beta_{\text{wg}} \cdot w[n] \right)$$

$$w[n] = x[n] + H_{\text{loop}}(z)\{w[n]\}$$

#### 3. Moden-Verteilung
Durch die Dispersion spalten sich die sonst harmonischen Saitenmoden $f_k = k \cdot f_0$ nach der Steifigkeitsformel auf:

$$f_k = k \cdot f_0 \cdot \sqrt{1 + B \cdot k^2}, \quad B = \text{Inharmonizitäts-Koeffizient}$$

#### 4. Parameter
- **Inharmonizität $B$ (Dispersion):** Bestimmt die Steifigkeit (von Saite zu starrem Metallbalken/Gong).
- **Spannungs-Koeffizient $\kappa_{\text{tension}}$:** Dynamischer Pitch-Drop bei perkussivem Anschlag.
- **Waveguide-Feedback $\beta_{\text{wg}} \in [0, 0.999]$:** Abklingzeit und Resonanzschärfe.

---

### Synthesizer 9: Kybernetische Formant-Kaskade mit 2D-Vokaltrakt-Interpolation

#### 1. Konzept & Klangästhetik
Eine 3-Träger-Architektur mit **Double-Sideband Suppressed-Carrier (DSB-SC)** Phasenmodulation modelliert die menschliche Vokaltrakt-Akustik. Die Frequenzen der drei Träger sind nicht starr, sondern werden über eine nichtlineare 2D-Interpolationsmatrix im International Phonetic Alphabet (IPA) Formant-Raum ($F_1$ vs. $F_2$) gesteuert. Eine Glottis-Puls-FM simuliert die Stimmbandoberwellen samt Luftröhren-Turbulenz, wodurch verblüffend lebendige, biomechanische Sprach- und Vokal-Morphs entstehen.

#### 2. Mathematische Formulierung
Die drei primären Formanten $F_1, F_2, F_3$ werden durch die 2D-Vokaltrakt-Position $(u_{\text{open}}, u_{\text{front}}) \in [-1, 1]^2$ gesteuert:

$$\begin{pmatrix} F_1(t) \\ F_2(t) \\ F_3(t) \end{pmatrix} = \mathbf{M}_{\text{IPA}} \cdot \begin{pmatrix} 1 \\ u_{\text{open}}(t) \\ u_{\text{front}}(t) \\ u_{\text{open}}(t) \cdot u_{\text{front}}(t) \end{pmatrix}$$

mit der empirischen Formantmatrix:

$$\mathbf{M}_{\text{IPA}} = \begin{pmatrix} 500 & 300 & -150 & -50 \\ 1500 & -200 & 800 & -100 \\ 2500 & -100 & 300 & 50 \end{pmatrix}$$

Das Ausgangssignal ist die gewichtete Summe dreier formantzentrierter FM-Operatoren:

$$y(t) = \sum_{p=1}^3 A_p(t) \cdot \sin\left( 2\pi F_p(t) t + I_p(t) \cdot \sin(2\pi f_0 t) \cdot \left[ 1 + \mu_{\text{glottis}} \cos(4\pi f_0 t) \right] \right)$$

wobei die Bandbreite der Formanten über den individuellen Index $I_p = \frac{Q_p \cdot F_p}{f_0}$ geregelt wird.

#### 3. Glottal-Flow Modellierung (Rosenberg-Puls)
Die Modulationshüllkurve gehorcht dem Rosenberg-Glottal-Modell:

$$g(t) = \begin{cases} 3\left(\frac{t}{T_p}\right)^2 - 2\left(\frac{t}{T_p}\right)^3 & 0 \le t \le T_p \\ 1 - \left(\frac{t - T_p}{T_n}\right)^2 & T_p < t \le T_p + T_n \\ 0 & \text{sonst} \end{cases}$$

#### 4. Parameter
- **Vokal-Koordinaten $(u_{\text{open}}, u_{\text{front}})$:** Kontinuierliches Navigieren zwischen [a], [e], [i], [o], [u].
- **Glottis-Schärfe $\mu_{\text{glottis}}$:** Rauheit und Druck der simulierten Stimmbänder.
- **Kehlkopf-Vibrato $\delta_{\text{throat}}$:** Gekoppeltes Frequenz- und Amplitudenvibrato mit 5.2 Hz.

---

### Synthesizer 10: Multiskalen Wavelet & Fraktale Granular-FM (Selbstähnliche Texturen)

#### 1. Konzept & Klangästhetik
Dieser Synthesizer bricht mit der Annahme einer einzelnen Zeitbasis. Er erzeugt einen kontinuierlichen Strom mikroskopischer FM-Körner (Grains), deren Dauern, Träger- und Modulatorfrequenzen einer **dyadischen Multiskalen-Hierarchie nach Morlet-Wavelets** ($2^j$) folgen. Das Gesamtspektrum ist skaleninvariant und selbstähnlich (fraktal). Es entstehen zerberstende Glaskaskaden, endlose Wasserfälle aus Mikro-Obertönen und futuristische kosmische Texturen.

#### 2. Mathematische Formulierung
Ein einzelnes Grain $g_{j, k}(t)$ auf der Skala $j \in \mathbb{Z}$ zum Zeitpunkt $\tau_k$ ist definiert über das modifizierte Morlet-Wavelet:

$$\psi_{j, k}(t) = \frac{1}{\sqrt{2^j \sigma_0}} \exp\left( -\frac{(t - \tau_k)^2}{2 (2^j \sigma_0)^2} \right) \cdot \sin\left( 2\pi (2^{-j} f_0) (t - \tau_k) + I_j \sin(2\pi (2^{-j} r f_0) (t - \tau_k)) \right)$$

Der Modulationsindex skaliert mit der fraktalen Dimension $D_{\text{fractal}}$:

$$I_j = I_0 \cdot 2^{-j \cdot (2 - D_{\text{fractal}})}$$

Das Summensignal über alle Skalen $j \in \{0, \dots, J-1\}$ und Grain-Ströme $k$:

$$y(t) = \sum_{j=0}^{J-1} \frac{1}{2^{j \cdot H}} \sum_{k} \psi_{j, k}(t), \quad H = \text{Hurst-Exponent} \in (0, 1)$$

#### 3. Skalogramm-Energieverteilung
Die Energieverteilung im Wavelet-Raum gehorcht dem Potenzgesetz:

$$\mathcal{E}(j) = \int |W_y(j, \tau)|^2 d\tau \propto 2^{-j(2H + 1)}$$

#### 4. Parameter
- **Fraktale Dimension $D_{\text{fractal}} \in [1.0, 1.99]$:** Bestimmt die spektrale Rauheit und Selbstähnlichkeit.
- **Skalen-Anzahl $J \in [3, 8]$:** Anzahl gleichzeitig aktiver dyadischer Oktav-Ebenen.
- **Grain-Dichte $\rho_{\text{grain}}$:** Überlappungsfaktor der Mikrokörner pro Sekunde.

---

## Grafisches & Mathematisches Visualisierungskonzept

Für die neuen Synthesizer müssen die 4 Visualisierungs-Panels erweitert werden:

```
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ Panel 1: Zeitfunktion y(t)           │ Panel 2: Momentanfrequenz f(t)       │
│ - Mehrskalige Wavelet-Überlagerung   │ - Bifurkations-Pfade & Chaos-Flügel  │
│ - Echte Abtastung vs. Soliton-Modell │ - Fraktionale Gedächtnis-Kurven      │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ Panel 3: Spektrum & Bessel-Kamm      │ Panel 4: 3D/4D Phasen-Attraktor      │
│ - Jacobi-Theta & Chebyshev-Spitzen   │ - Lorenz-Schmetterling (x, y, z)     │
│ - Fraktale $1/f^\beta$ Energiebänder │ - Hopf-Faserung & Kuramoto-Kreise    │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

1. **Panel 1 (Zeitfunktion):** Exakte Darstellung der deformierten Soliton-Wellen $\text{sn}(u, m)$, fraktaler Wavelet-Pakete und Wavefolder-Sättigungskanten.
2. **Panel 2 (Momentanfrequenz):** Anzeige der kontinuierlichen chaotischen Frequenzpfade des Lorenz-Systems sowie stochastischer Lévy-Flug-Sprungstellen.
3. **Panel 3 (Spektrum & Bessel-Ordnungen):** Erweiterung des Bessel-Stamm-Diagramms um Tschebyscheff-Harmonische und kontinuierliche $1/f^\beta$ Fraktal-Hintergründe.
4. **Panel 4 (Phasenporträt $(y, \dot{y})$ & 3D-Projektion):**
   - Beim **Lorenz-Synthesizer**: Echte 3D-Projektion des Schmetterlings-Attraktors $(x, y, z)$ mit Nachleuchtspur.
   - Beim **Quaternionen-Synthesizer**: Stereografische 4D-Hopf-Faserung als rotierende Torus-Projektion.
   - Beim **Kuramoto-Synthesizer**: Kreisdiagramm der Phasenvektoren $e^{i\theta_j}$ mit Längenanzeige des Ordnungsparameters $r(t)$.

---

## Technische Realisierungs-Strategie in Web Audio & JavaScript

### 1. Audio-Engine (Custom AudioWorkletProcessor)
Komplexe Algorithmen wie das Lösen von Differentialgleichungen 4. Ordnung (Runge-Kutta RK4), Allpass-Waveguides und fraktionale Gedächtnisschleifen werden in einem performanten `AudioWorkletProcessor` mit 128-Sample-Blöcken ausgeführt:

```javascript
// Beispiel: Runge-Kutta 4. Ordnung im AudioWorklet
class ChaosFMProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0][0];
    for (let i = 0; i < output.length; i++) {
      this.rk4Step(this.dt);
      output[i] = Math.sin(2 * Math.PI * this.fc * this.t + this.x * this.Ix);
      this.t += 1 / sampleRate;
    }
    return true;
  }
}
```

### 2. Schnelle Berechnung elliptischer Funktionen
Verwendung des arithmetisch-geometrischen Mittels (**AGM - Arithmetic-Geometric Mean**) nach Gauß zur hocheffizienten Berechnung von $K(m)$ und $\text{sn}(u, m)$ in unter 5 Iterationen:

$$a_{n+1} = \frac{a_n + b_n}{2}, \quad b_{n+1} = \sqrt{a_n \cdot b_n}, \quad c_{n+1} = \frac{a_n - b_n}{2}$$

---

## Zusammenfassung & Nächste Schritte

Dieser Plan bildet das vollständige theoretische und mathematische Fundament für eine neue Generation visionärer FM-Synthesizer. Die 10 Modelle spannen ein breites Spektrum ab: von deterministischem Chaos über fraktale und nicht-euklidische Geometrien bis hin zu biologischen Schwarmnetzwerken.
