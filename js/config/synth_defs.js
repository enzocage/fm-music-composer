"use strict";

/* ============================================================
   20 Synthesizer Definitionen & Architekturen
   ============================================================ */
const SYNTH_DEFS = [
  {
    "id": 0,
    "bank": "A",
    "keyDisplay": "1",
    "name": "Lorenz Chaos FM",
    "color": "#ff4757",
    "desc": "Gekoppelte nichtlineare DGL 3. Ordnung (RK4-Integration) im Phasenraum",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em><sub>x</sub>·x̂</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + <em>I</em><sub>z</sub>·ẑ·sin(2π<em>f</em><sub>m2</sub><em>t</em>))",
    "formulaSub": "Lorenz DGL: ẋ = σ(y-x), ẏ = x(ρ-z)-y, ż = xy-βz",
    "customParam": {
      "name": "Rayleigh ρ (Chaos)",
      "min": 10,
      "max": 45,
      "step": 0.1,
      "val": 28
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 2.5,
      "dI": 1.5,
      "lfo": 0.08,
      "atk": 0.08,
      "rel": 3.5,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Chaos-Flügel",
        "r": 1.5,
        "i": 2.5,
        "d": 1.5
      },
      {
        "name": "Turbulenz",
        "r": 2.75,
        "i": 3.8,
        "d": 2
      },
      {
        "name": "Fixpunkt",
        "r": 1,
        "i": 1.2,
        "d": 0.6
      }
    ]
  },
  {
    "id": 1,
    "bank": "A",
    "keyDisplay": "2",
    "name": "Chebyshev Wavefolder",
    "color": "#ffa502",
    "desc": "Orthogonale Tschebyscheff-Polynome Tₖ(x) & tanh-Sättigung in Feedback-Schleife",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + β·tanh(γ·∑ α<sub>k</sub>T<sub>k</sub>(y)))",
    "formulaSub": "Chebyshev Faltung: T₃(x)=4x³-3x, T₅(x)=16x⁵-20x³+5x",
    "customParam": {
      "name": "Wavefolder γ",
      "min": 0.5,
      "max": 6,
      "step": 0.05,
      "val": 2.8
    },
    "defaults": {
      "ratio": 2,
      "I0": 2.2,
      "dI": 1.8,
      "lfo": 0.1,
      "atk": 0.02,
      "rel": 3,
      "vol": 0.75,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Rasierklinge",
        "r": 2,
        "i": 2.2,
        "d": 1.8
      },
      {
        "name": "Laser-Metall",
        "r": 3.5,
        "i": 3.2,
        "d": 2.4
      },
      {
        "name": "Warm Fold",
        "r": 1,
        "i": 1.5,
        "d": 1
      }
    ]
  },
  {
    "id": 2,
    "bank": "A",
    "keyDisplay": "3",
    "name": "Jacobi Soliton FM",
    "color": "#2ed573",
    "desc": "Jacobische elliptische Funktionen sn(u, m) & cn(u, m) mit variablem Modulus",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sn(4K(m)·<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·cn(4K(m)·<em>f</em><sub>m</sub><em>t</em>, m), m)",
    "formulaSub": "KdV-Solitonen & Jacobi-Theta Obertöne",
    "customParam": {
      "name": "Modulus m",
      "min": 0.01,
      "max": 0.99,
      "step": 0.01,
      "val": 0.82
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.8,
      "dI": 1.2,
      "lfo": 0.06,
      "atk": 0.15,
      "rel": 4.2,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Moog-Soliton",
        "r": 1,
        "i": 1.8,
        "d": 1.2
      },
      {
        "name": "Holz-Reed",
        "r": 2,
        "i": 2.4,
        "d": 1.5
      },
      {
        "name": "Kristall-Ellips",
        "r": 4,
        "i": 1.2,
        "d": 0.8
      }
    ]
  },
  {
    "id": 3,
    "bank": "A",
    "keyDisplay": "4",
    "name": "Fraktional Memory FM",
    "color": "#1e90ff",
    "desc": "Riemann-Liouville/Caputo fraktionale Integration D_t^-α mit Potenzgesetz-Gedächtnis",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀</span>·D<sub>t</sub><sup>-α</sup>[sin(2π<em>f</em><sub>m</sub>τ)](t))",
    "formulaSub": "Fraktionale Ordnung α erzeugt 1/f-Phasendrift",
    "customParam": {
      "name": "Ordnung α",
      "min": 0.2,
      "max": 1.8,
      "step": 0.02,
      "val": 0.75
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 2.8,
      "dI": 1.4,
      "lfo": 0.04,
      "atk": 1.8,
      "rel": 5.5,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Sub-Diffusion",
        "r": 1.5,
        "i": 2.8,
        "d": 1.4
      },
      {
        "name": "Phasen-Schimmer",
        "r": 2,
        "i": 2,
        "d": 1.8
      },
      {
        "name": "Hyper-Gedächtnis",
        "r": 0.5,
        "i": 3.5,
        "d": 2
      }
    ]
  },
  {
    "id": 4,
    "bank": "A",
    "keyDisplay": "5",
    "name": "4D-Quaternion Vektor FM",
    "color": "#9b59b6",
    "desc": "SO(4) Lie-Gruppen Rotation im 4D-Hyperraum mit stereografischer Projektion",
    "formulaLatex": "<em>y</em><sub>L,R</sub>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₁</span>·w,x(t)·sin(2π<em>f</em><sub>m</sub><em>t</em>) + <em>I</em>₂·y,z(t)·cos(2π<em>f</em><sub>m2</sub><em>t</em>))",
    "formulaSub": "Quaternion q = w + xi + yj + zk rotiert auf S³",
    "customParam": {
      "name": "4D-Speed Ω",
      "min": 0.05,
      "max": 3,
      "step": 0.02,
      "val": 0.6
    },
    "defaults": {
      "ratio": 2,
      "I0": 2.2,
      "dI": 1.6,
      "lfo": 0.07,
      "atk": 1.5,
      "rel": 5,
      "vol": 0.76,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Hopf-Torus",
        "r": 2,
        "i": 2.2,
        "d": 1.6
      },
      {
        "name": "Hyper-Drehung",
        "r": 1.5,
        "i": 3,
        "d": 2
      },
      {
        "name": "4D-Binaural",
        "r": 3,
        "i": 1.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 5,
    "bank": "A",
    "keyDisplay": "6",
    "name": "Quanten-Lévy FM",
    "color": "#ff6348",
    "desc": "Stochastische Pareto-Lévy Impulsverteilung & Poisson-Sprungprozesse",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + ∑ ΔI<sub>k</sub>·δ(t-t<sub>k</sub>))",
    "formulaSub": "Lévy-Flug P(ΔI>x) ~ x^-α mit Quantensprüngen",
    "customParam": {
      "name": "Lévy-Index α",
      "min": 0.4,
      "max": 1.9,
      "step": 0.05,
      "val": 1.1
    },
    "defaults": {
      "ratio": 2.5,
      "I0": 1.5,
      "dI": 3,
      "lfo": 1.5,
      "atk": 0.01,
      "rel": 3.2,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Geiger-Funken",
        "r": 2.5,
        "i": 1.5,
        "d": 3
      },
      {
        "name": "Quanten-Glitch",
        "r": 4,
        "i": 2.5,
        "d": 4
      },
      {
        "name": "Mikro-Cluster",
        "r": 1,
        "i": 1,
        "d": 2
      }
    ]
  },
  {
    "id": 6,
    "bank": "A",
    "keyDisplay": "7",
    "name": "Kuramoto Schwarm FM",
    "color": "#00d2d3",
    "desc": "8 phasen-gekoppelte Ringoszillatoren mit Kuramoto-Ordnungsparameter r(t)",
    "formulaLatex": "<em>y</em>(<em>t</em>) = <sup>1</sup>/₈ ∑<sub>i=1</sub>⁸ sin(θ<sub>i</sub>(t) + <span class=\"idx\"><em>I</em>₀·(1-r(t))</span>·sin(θ<sub>i+1</sub>(t)))",
    "formulaSub": "Kopplung K steuert Selbstorganisation",
    "customParam": {
      "name": "Kopplung K",
      "min": 0,
      "max": 25,
      "step": 0.2,
      "val": 8.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 2.6,
      "dI": 1.8,
      "lfo": 0.12,
      "atk": 0.8,
      "rel": 4,
      "vol": 0.74,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Schwarm-Zirpen",
        "r": 1,
        "i": 2.6,
        "d": 1.8
      },
      {
        "name": "Phasen-Schloss",
        "r": 2,
        "i": 3.5,
        "d": 1.5
      },
      {
        "name": "Bio-Cluster",
        "r": 0.5,
        "i": 2,
        "d": 1.2
      }
    ]
  },
  {
    "id": 7,
    "bank": "A",
    "keyDisplay": "8",
    "name": "Waveguide Tension FM",
    "color": "#eccc68",
    "desc": "Dispersiver Allpass-Waveguide mit amplitude-abhängiger Saitenspannung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub>(t)<em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + β·w(t-D(y)))",
    "formulaSub": "Dynamische Spannung D(t)=D₀(1-κ|y|²)",
    "customParam": {
      "name": "Spannung κ",
      "min": 0.05,
      "max": 2.5,
      "step": 0.02,
      "val": 0.85
    },
    "defaults": {
      "ratio": 3.1415,
      "I0": 1.6,
      "dI": 3.2,
      "lfo": 0.15,
      "atk": 0.005,
      "rel": 4.5,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Titan-Gong",
        "r": 3.1415,
        "i": 1.6,
        "d": 3.2
      },
      {
        "name": "Gestrichener Stab",
        "r": 2.414,
        "i": 2.2,
        "d": 2
      },
      {
        "name": "Feedback-Saite",
        "r": 1,
        "i": 0.8,
        "d": 4
      }
    ]
  },
  {
    "id": 8,
    "bank": "A",
    "keyDisplay": "9",
    "name": "Kybernetik Vokal FM",
    "color": "#ff78ae",
    "desc": "3-Formant Vokaltrakt-Interpolation (F1, F2, F3) & Rosenberg-Glottal-Puls",
    "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>p=1</sub>³ A<sub>p</sub>·sin(2πF<sub>p</sub><em>t</em> + <span class=\"idx\"><em>I</em><sub>p</sub></span>·sin(2π<em>f</em><sub>0</sub><em>t</em>)·[1 + μ·cos(4πf₀t)])",
    "formulaSub": "2D-Vokaltrakt-Navigation durch Formantraum",
    "customParam": {
      "name": "Vokal Front/Open",
      "min": -1,
      "max": 1,
      "step": 0.02,
      "val": 0.2
    },
    "defaults": {
      "ratio": 1,
      "I0": 2.2,
      "dI": 1.4,
      "lfo": 0.2,
      "atk": 0.05,
      "rel": 3,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Alien Kehle",
        "r": 1,
        "i": 2.2,
        "d": 1.4
      },
      {
        "name": "Roboter-Vokal",
        "r": 2,
        "i": 3,
        "d": 1.8
      },
      {
        "name": "Formant-Morph",
        "r": 1.5,
        "i": 1.8,
        "d": 1
      }
    ]
  },
  {
    "id": 9,
    "bank": "A",
    "keyDisplay": "0",
    "name": "Wavelet Fraktal FM",
    "color": "#70a1ff",
    "desc": "Dyadische Multiskalen-Granulation (2ʲ) nach modifizierten Morlet-Wavelets",
    "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ 2<sup>-jH</sup> ψ<sub>j,k</sub>(t)·sin(2π·2<sup>-j</sup><em>f</em><sub>0</sub><em>t</em> + <span class=\"idx\"><em>I</em><sub>j</sub></span>·sin(2π·2<sup>-j</sup>r<em>f</em><sub>0</sub><em>t</em>))",
    "formulaSub": "Skaleninvariante Selbstähnlichkeit",
    "customParam": {
      "name": "Fraktal-Dim D",
      "min": 1.1,
      "max": 1.95,
      "step": 0.02,
      "val": 1.6
    },
    "defaults": {
      "ratio": 2,
      "I0": 2,
      "dI": 2.2,
      "lfo": 0.09,
      "atk": 1.2,
      "rel": 4.8,
      "vol": 0.76,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Kristall-Kaskade",
        "r": 2,
        "i": 2,
        "d": 2.2
      },
      {
        "name": "Fraktal-Spiegel",
        "r": 3,
        "i": 2.8,
        "d": 2.5
      },
      {
        "name": "Skalen-Wolke",
        "r": 0.5,
        "i": 1.5,
        "d": 1.8
      }
    ]
  },
  {
    "id": 10,
    "bank": "B",
    "keyDisplay": "1",
    "name": "Tiefsee-Drohne",
    "color": "#6ee7c0",
    "desc": "Subharmonische 2-Op FM mit ultra-langsamem Index-Atem",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Subharmonische Modulation: f_m = r·f_c",
    "customParam": {
      "name": "Sub-Pegel",
      "min": 0,
      "max": 2,
      "step": 0.01,
      "val": 1
    },
    "defaults": {
      "ratio": 0.5,
      "I0": 2.8,
      "dI": 1.8,
      "lfo": 0.045,
      "atk": 2.2,
      "rel": 5,
      "vol": 0.82,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Abgrund",
        "r": 0.25,
        "i": 3.5,
        "d": 2
      },
      {
        "name": "Tiefsee",
        "r": 0.5,
        "i": 2.8,
        "d": 1.8
      },
      {
        "name": "Swell",
        "r": 0.75,
        "i": 1.6,
        "d": 1.2
      }
    ]
  },
  {
    "id": 11,
    "bank": "B",
    "keyDisplay": "2",
    "name": "Kristall-Glocke",
    "color": "#ffc46b",
    "desc": "Inharmonische Glocken-FM mit exponentiellem Index-Decay",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A(t)·sin(2π<em>f</em><sub>c</sub><em>t</em> + (I₀ + <span class=\"idx\">I<sub>pk</sub>·e<sup>-t/τ</sup></span>)·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Inharmonisches Verhältnis r ≈ 3.414",
    "customParam": {
      "name": "Index-Decay τ",
      "min": 0.1,
      "max": 4,
      "step": 0.05,
      "val": 1.2
    },
    "defaults": {
      "ratio": 3.414,
      "I0": 0.4,
      "dI": 4.8,
      "lfo": 0.08,
      "atk": 0.01,
      "rel": 4.2,
      "vol": 0.75,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Röhrenglocke",
        "r": 3.414,
        "i": 0.4,
        "d": 4.8
      },
      {
        "name": "Tibet-Schale",
        "r": 2.756,
        "i": 0.8,
        "d": 3.2
      },
      {
        "name": "Kristallglas",
        "r": 5.12,
        "i": 0.2,
        "d": 2.5
      }
    ]
  },
  {
    "id": 12,
    "bank": "B",
    "keyDisplay": "3",
    "name": "Vokal-Chor",
    "color": "#b8a4ff",
    "desc": "Harmonische Formant-FM mit Vokal-Resonanz & Vibrato",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π(<em>f</em><sub>c</sub> + δ<sub>vib</sub>)<em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Harmonische Vokal-Formanten A-O-U",
    "customParam": {
      "name": "Vibrato-Tiefe",
      "min": 0,
      "max": 12,
      "step": 0.1,
      "val": 3.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.8,
      "dI": 1.1,
      "lfo": 0.12,
      "atk": 1.2,
      "rel": 3.6,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Chor (A-O)",
        "r": 1,
        "i": 1.8,
        "d": 1.1
      },
      {
        "name": "Tenor (E-I)",
        "r": 2,
        "i": 2.2,
        "d": 0.8
      },
      {
        "name": "Sakral",
        "r": 3,
        "i": 1.2,
        "d": 0.6
      }
    ]
  },
  {
    "id": 13,
    "bank": "B",
    "keyDisplay": "4",
    "name": "Kaskaden-FM",
    "color": "#ff6b81",
    "desc": "3-Operator Kaskade (Mod₂ → Mod₁ → Carrier) mit chaotischer Sättigung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₁</span>·sin(2π<em>f</em><sub>m1</sub><em>t</em> + <em>I</em>₂·sin(2π<em>f</em><sub>m2</sub><em>t</em>)))",
    "formulaSub": "Nichtlineare Kaskadierung",
    "customParam": {
      "name": "Kaskade I₂",
      "min": 0,
      "max": 8,
      "step": 0.05,
      "val": 2.4
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 2.2,
      "dI": 1.4,
      "lfo": 0.15,
      "atk": 0.08,
      "rel": 2.8,
      "vol": 0.68,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Kaskade Rau",
        "r": 1.5,
        "i": 2.2,
        "d": 1.4
      },
      {
        "name": "Biss-Lead",
        "r": 2.5,
        "i": 3.6,
        "d": 2
      },
      {
        "name": "Metall-Grit",
        "r": 0.75,
        "i": 4.2,
        "d": 2.5
      }
    ]
  },
  {
    "id": 14,
    "bank": "B",
    "keyDisplay": "5",
    "name": "Kosmos-Pad",
    "color": "#38c7ff",
    "desc": "Parallele Dual-Modulatoren mit feiner Schwebung & Hall",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em><sub>A</sub></span>·sin(2πr<sub>A</sub>f<sub>c</sub>t) + <em>I</em><sub>B</sub>·sin(2π(r<sub>B</sub>f<sub>c</sub>+δ)t))",
    "formulaSub": "Zwei unabhängige Modulatoren für Schwebung",
    "customParam": {
      "name": "Schwebung δ",
      "min": 0.1,
      "max": 4,
      "step": 0.05,
      "val": 0.85
    },
    "defaults": {
      "ratio": 2,
      "I0": 1.6,
      "dI": 1.2,
      "lfo": 0.065,
      "atk": 2.5,
      "rel": 6,
      "vol": 0.75,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Astral-Strings",
        "r": 2,
        "i": 1.6,
        "d": 1.2
      },
      {
        "name": "Shimmer",
        "r": 3,
        "i": 2.4,
        "d": 1.5
      },
      {
        "name": "Nebel-Pad",
        "r": 0.5,
        "i": 1.2,
        "d": 0.8
      }
    ]
  },
  {
    "id": 15,
    "bank": "B",
    "keyDisplay": "6",
    "name": "Zupf-Koto / Tines",
    "color": "#55efc4",
    "desc": "Perkussives Pluck-FM mit steilem Start-Index & perkussivem Snap",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A(t)·sin(2π<em>f</em><sub>c</sub><em>t</em> + (I₀ + <span class=\"idx\">I<sub>pk</sub>·e<sup>-t/τ</sup></span>)·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "DX-Electric-Piano / Koto-Zupfen",
    "customParam": {
      "name": "Pluck-Snap",
      "min": 1,
      "max": 12,
      "step": 0.1,
      "val": 6.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 0.2,
      "dI": 5.5,
      "lfo": 0.2,
      "atk": 0.005,
      "rel": 2.2,
      "vol": 0.85,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "E-Piano Tines",
        "r": 1,
        "i": 0.2,
        "d": 5.5
      },
      {
        "name": "Koto Zupf",
        "r": 2,
        "i": 0.1,
        "d": 7
      },
      {
        "name": "Holz-Marimba",
        "r": 3.5,
        "i": 0.3,
        "d": 4.5
      }
    ]
  },
  {
    "id": 16,
    "bank": "B",
    "keyDisplay": "7",
    "name": "Schwarm-Textur",
    "color": "#fd79a8",
    "desc": "3-stimmiger Unisono-Cluster mit Detune-Spreizung & Phasen-LFO",
    "formulaLatex": "<em>y</em>(<em>t</em>) = <sup>1</sup>/₃ ∑ sin(2π(<em>f</em><sub>c</sub>+kΔf)t + <span class=\"idx\"><em>I</em>(<em>t</em>,θ<sub>k</sub>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Dichter Unisono-Schwarm erzeugt Breite",
    "customParam": {
      "name": "Cluster-Detune",
      "min": 0.2,
      "max": 8,
      "step": 0.1,
      "val": 2.2
    },
    "defaults": {
      "ratio": 2,
      "I0": 2.5,
      "dI": 1.8,
      "lfo": 0.08,
      "atk": 1.8,
      "rel": 4.5,
      "vol": 0.72,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Hyper-Drone",
        "r": 2,
        "i": 2.5,
        "d": 1.8
      },
      {
        "name": "Mega-Schwarm",
        "r": 1,
        "i": 3.5,
        "d": 2.2
      },
      {
        "name": "Sanfter Chorus",
        "r": 2,
        "i": 1.2,
        "d": 0.8
      }
    ]
  },
  {
    "id": 17,
    "bank": "B",
    "keyDisplay": "8",
    "name": "Goldener Schnitt",
    "color": "#ffd32a",
    "desc": "Inharmonische Fibonacci-FM (r = φ ≈ 1.618034) mit Spiegelspektren",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π·1.618034 <em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Nicht-periodische Fibonacci-Seitenbänder",
    "customParam": {
      "name": "Phi-Potenz φⁿ",
      "min": 0.5,
      "max": 3,
      "step": 0.01,
      "val": 1
    },
    "defaults": {
      "ratio": 1.618034,
      "I0": 3.2,
      "dI": 2,
      "lfo": 0.05,
      "atk": 1.5,
      "rel": 4,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Goldener Schnitt φ",
        "r": 1.618034,
        "i": 3.2,
        "d": 2
      },
      {
        "name": "Silberner Schnitt δ",
        "r": 2.414213,
        "i": 2.8,
        "d": 1.6
      },
      {
        "name": "Euler e/2",
        "r": 1.35914,
        "i": 3.8,
        "d": 2.2
      }
    ]
  },
  {
    "id": 18,
    "bank": "B",
    "keyDisplay": "9",
    "name": "Glitch-Puls",
    "color": "#ff9f43",
    "desc": "Sample & Hold getaktete harmonische Ratio- & Index-Sprünge",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em><sub>step</sub>(<em>t</em>)</span>·sin(2π·r<sub>step</sub>(t)<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Rhythmisch getaktete Stufen-Modulation",
    "customParam": {
      "name": "Step-Geschw.",
      "min": 0.5,
      "max": 16,
      "step": 0.5,
      "val": 4
    },
    "defaults": {
      "ratio": 2,
      "I0": 2,
      "dI": 2.5,
      "lfo": 2,
      "atk": 0.05,
      "rel": 2.5,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Cyber Arp",
        "r": 2,
        "i": 2,
        "d": 2.5
      },
      {
        "name": "Glitch Bubbles",
        "r": 3.5,
        "i": 3,
        "d": 3
      },
      {
        "name": "8-Bit Pulse",
        "r": 1,
        "i": 4,
        "d": 2
      }
    ]
  },
  {
    "id": 19,
    "bank": "B",
    "keyDisplay": "0",
    "name": "Vektor-FM",
    "color": "#9c88ff",
    "desc": "2-Phasen Quadratur-FM mit kontinuierlicher Vektor-Raum-Drehung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = cos(θ)·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em></span>sin(2π<em>f</em><sub>m</sub><em>t</em>)) + sin(θ)·cos(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>cos(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Quadratur-Phasen erzeugen Lissajous-Sphären",
    "customParam": {
      "name": "Vektor-Drehung θ̇",
      "min": 0.01,
      "max": 2,
      "step": 0.01,
      "val": 0.25
    },
    "defaults": {
      "ratio": 2,
      "I0": 2.2,
      "dI": 1.5,
      "lfo": 0.07,
      "atk": 1.8,
      "rel": 5.2,
      "vol": 0.75,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Lissajous-Sphäre",
        "r": 2,
        "i": 2.2,
        "d": 1.5
      },
      {
        "name": "Orbital-Sweep",
        "r": 1.5,
        "i": 3,
        "d": 2
      },
      {
        "name": "Ring-Torus",
        "r": 4,
        "i": 1.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 20,
    "bank": "C",
    "keyDisplay": "1",
    "name": "DX7 E-Piano Rhodes",
    "color": "#00f2fe",
    "desc": "Klassisches 6-Op Dual-Carrier Rhodes E-Piano mit kristallinem Tine-Attack (Ratio 1.0 & 14.0)",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₁·sin(2π<em>f</em><sub>c</sub><em>t</em>)) + A₂·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₂·sin(28π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "DX7 Algorithmus 5: Dual Carrier Body (1:1) + Bell Tine (1:14)",
    "customParam": {
      "name": "Bell Tine Pegel",
      "min": 0,
      "max": 2,
      "step": 0.05,
      "val": 0.85
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.6,
      "dI": 2.2,
      "lfo": 0.1,
      "atk": 0.005,
      "rel": 2.8,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Full Tine Rhodes",
        "r": 1,
        "i": 1.8,
        "d": 2.4
      },
      {
        "name": "Dark Dyno",
        "r": 1,
        "i": 1.2,
        "d": 1.5
      },
      {
        "name": "Ballad EP",
        "r": 1,
        "i": 2.2,
        "d": 3
      }
    ]
  },
  {
    "id": 21,
    "bank": "C",
    "keyDisplay": "2",
    "name": "Tubular Bells & Glocke",
    "color": "#4facfe",
    "desc": "Inharmonische Chowning/Bessel Kirchenglocke mit Ratios 1.0 : 3.52 : 5.84 und langem Decay",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₀·e<sup>-t/τ</sup>·sin(7.04π<em>f</em><sub>c</sub><em>t</em>)) + A₂·sin(11.68π<em>f</em><sub>c</sub><em>t</em>)",
    "formulaSub": "Inharmonische Glocken-Spektren nach Chowning (1973)",
    "customParam": {
      "name": "Inharmonik Stretch",
      "min": 0.8,
      "max": 2,
      "step": 0.02,
      "val": 1
    },
    "defaults": {
      "ratio": 3.52,
      "I0": 3.2,
      "dI": 2,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 5.5,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Kirchenglocke",
        "r": 3.52,
        "i": 3.2,
        "d": 2
      },
      {
        "name": "Glockenspiel",
        "r": 4.15,
        "i": 2.5,
        "d": 1.5
      },
      {
        "name": "Chimes",
        "r": 2.76,
        "i": 4,
        "d": 3
      }
    ]
  },
  {
    "id": 22,
    "bank": "C",
    "keyDisplay": "3",
    "name": "Solid Bass TX81Z",
    "color": "#fa709a",
    "desc": "Der legendäre TX81Z / DX100 4-Op Lately Bass mit perkussivem Feedback-Attack",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>c</sub><em>t</em> + β·y<sub>mod</sub>))",
    "formulaSub": "TX81Z Preset 15 / Lately Bass Algorithmus 1",
    "customParam": {
      "name": "Feedback Punch",
      "min": 0.2,
      "max": 3.5,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 0.5,
      "I0": 2.4,
      "dI": 3,
      "lfo": 0.05,
      "atk": 0.003,
      "rel": 0.9,
      "vol": 0.88,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Classic Lately",
        "r": 0.5,
        "i": 2.4,
        "d": 3
      },
      {
        "name": "Deep Solid",
        "r": 1,
        "i": 2,
        "d": 2.2
      },
      {
        "name": "Acid Slap",
        "r": 0.5,
        "i": 3.8,
        "d": 4.5
      }
    ]
  },
  {
    "id": 23,
    "bank": "C",
    "keyDisplay": "4",
    "name": "Slap Bass Percussion",
    "color": "#fee140",
    "desc": "Drahtiger Daumenschlag (Slap & Pop) mit spitzem Modulationsindex und metallischem Reißen",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀·e<sup>-t/30ms</sup></span>·sin(4π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Slap-Transiente mit ultrakurzer Hüllkurve",
    "customParam": {
      "name": "Plectrum Bite",
      "min": 0.5,
      "max": 4,
      "step": 0.1,
      "val": 2.2
    },
    "defaults": {
      "ratio": 2,
      "I0": 3.5,
      "dI": 2.5,
      "lfo": 0.08,
      "atk": 0.002,
      "rel": 1.1,
      "vol": 0.85,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Funk Thumb",
        "r": 2,
        "i": 3.5,
        "d": 2.5
      },
      {
        "name": "High Pop",
        "r": 3,
        "i": 4.2,
        "d": 3
      },
      {
        "name": "Muted Slap",
        "r": 1,
        "i": 2.8,
        "d": 1.8
      }
    ]
  },
  {
    "id": 24,
    "bank": "C",
    "keyDisplay": "5",
    "name": "Blues Harmonica Reed",
    "color": "#30cfd0",
    "desc": "Ausdrucksstarke Mundharmonika mit Doppelzungen-Schwebung und expressivem Vibrato",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(6π<em>f</em><sub>c</sub><em>t</em>) + <em>I</em><sub>trem</sub>·sin(2π<em>f</em><sub>trem</sub><em>t</em>))",
    "formulaSub": "Asymmetrische Zungenresonanz & Blasdruck",
    "customParam": {
      "name": "Breath Blow",
      "min": 0.1,
      "max": 2,
      "step": 0.05,
      "val": 0.75
    },
    "defaults": {
      "ratio": 3,
      "I0": 1.8,
      "dI": 1.2,
      "lfo": 0.25,
      "atk": 0.04,
      "rel": 1.8,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Delta Blues",
        "r": 3,
        "i": 1.8,
        "d": 1.2
      },
      {
        "name": "Accordina",
        "r": 2,
        "i": 1.4,
        "d": 1
      },
      {
        "name": "Melodica",
        "r": 4,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 25,
    "bank": "C",
    "keyDisplay": "6",
    "name": "Marimba & Wood Balafon",
    "color": "#a18cd1",
    "desc": "Hölzernes Schlagstab-Modell mit Kalebassen-Resonanz und weichem Wollschlägel-Impuls",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₀·e<sup>-t/τ</sup>·sin(8π<em>f</em><sub>c</sub><em>t</em>) + Res(<em>f</em><sub>box</sub>))",
    "formulaSub": "Holzstab 4. Oberton Ratio 4:1 mit Körperresonanz",
    "customParam": {
      "name": "Wood Body Res",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.4
    },
    "defaults": {
      "ratio": 4,
      "I0": 2.8,
      "dI": 1.8,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 1.6,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Konzert-Marimba",
        "r": 4,
        "i": 2.8,
        "d": 1.8
      },
      {
        "name": "Balafon",
        "r": 3.85,
        "i": 3.4,
        "d": 2.2
      },
      {
        "name": "Xylophon",
        "r": 5,
        "i": 3,
        "d": 1.2
      }
    ]
  },
  {
    "id": 26,
    "bank": "C",
    "keyDisplay": "7",
    "name": "Log Drum & Schlitz",
    "color": "#f78ca0",
    "desc": "Schlitztrommel mit Tonhöhen-Abfall beim Anschlag und tiefem Hohlraum-Resonanzbauch",
    "formulaLatex": "<em>f</em>(<em>t</em>) = <em>f</em><sub>0</sub>·(1 + Δf·e<sup>-t/40ms</sup>), <em>y</em>(<em>t</em>) = A·sin(2π<em>f</em>(<em>t</em>)<em>t</em> + <em>I</em>·sin(3π<em>f</em>(<em>t</em>)<em>t</em>))",
    "formulaSub": "Membranfreier Hohlstamm mit exponentiellem Pitch-Drop",
    "customParam": {
      "name": "Pitch Drop Δf",
      "min": 0,
      "max": 1.5,
      "step": 0.05,
      "val": 0.6
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 3,
      "dI": 2,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 2.2,
      "vol": 0.85,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Afro Log Drum",
        "r": 1.5,
        "i": 3,
        "d": 2
      },
      {
        "name": "Slit Drum",
        "r": 2.25,
        "i": 3.8,
        "d": 2.5
      },
      {
        "name": "Talking Drum",
        "r": 1,
        "i": 2.5,
        "d": 1.5
      }
    ]
  },
  {
    "id": 27,
    "bank": "C",
    "keyDisplay": "8",
    "name": "CS-80 Synth Brass 80s",
    "color": "#ff0844",
    "desc": "Warme, monumentale 80er Jahre Synthesizer-Bläser mit Detune-Doppelträger und Filtersweep",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>c</sub><em>t</em>)) + A₂·sin(2π(<em>f</em><sub>c</sub>+δ)<em>t</em> + <em>I</em>(<em>t</em>)·sin(2π(<em>f</em><sub>c</sub>+δ)<em>t</em>))",
    "formulaSub": "Dual Detuned FM Brass mit analoger Emulation",
    "customParam": {
      "name": "Analog Detune δ",
      "min": 0.2,
      "max": 4,
      "step": 0.1,
      "val": 1.2
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.8,
      "dI": 2.6,
      "lfo": 0.08,
      "atk": 0.08,
      "rel": 2.4,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "80s Poly Brass",
        "r": 1,
        "i": 1.8,
        "d": 2.6
      },
      {
        "name": "CS Fanfare",
        "r": 1,
        "i": 2.4,
        "d": 3.2
      },
      {
        "name": "Mellow Horns",
        "r": 1,
        "i": 1.2,
        "d": 1.8
      }
    ]
  },
  {
    "id": 28,
    "bank": "C",
    "keyDisplay": "9",
    "name": "Digi Clavinet D6 FM",
    "color": "#f355da",
    "desc": "Knackiges Funk-Clavinet mit scharfem Plektren-Aufschlag und resonantem Single-Coil Biss",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀·e<sup>-t/80ms</sup></span>·sin(6π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Funky Hohner D6 Clavinet mit Pickup-Filter",
    "customParam": {
      "name": "Pickup Phase",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.5
    },
    "defaults": {
      "ratio": 3,
      "I0": 2.8,
      "dI": 2,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 1.2,
      "vol": 0.84,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Stevie Funk",
        "r": 3,
        "i": 2.8,
        "d": 2
      },
      {
        "name": "Wah Clav",
        "r": 4,
        "i": 3.5,
        "d": 2.8
      },
      {
        "name": "Muted Pluck",
        "r": 2,
        "i": 2.2,
        "d": 1.4
      }
    ]
  },
  {
    "id": 29,
    "bank": "C",
    "keyDisplay": "0",
    "name": "Cembalo & Harpsichord",
    "color": "#e0c3fc",
    "desc": "Barockes Doppelmanual-Cembalo mit spitzem Federkiel-Anriss und metallischem Obertonfeuer",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₁·sin(10π<em>f</em><sub>c</sub><em>t</em>)) + A₂·sin(4π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₂·sin(20π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "8-Fuß + 4-Fuß Register Koppel",
    "customParam": {
      "name": "4-Fuß Register",
      "min": 0,
      "max": 1.5,
      "step": 0.05,
      "val": 0.7
    },
    "defaults": {
      "ratio": 5,
      "I0": 2.2,
      "dI": 1.5,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 1.8,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Bach Cembalo",
        "r": 5,
        "i": 2.2,
        "d": 1.5
      },
      {
        "name": "Tutti Pluck",
        "r": 6,
        "i": 2.8,
        "d": 2
      },
      {
        "name": "Spinett",
        "r": 4,
        "i": 1.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 30,
    "bank": "D",
    "keyDisplay": "1",
    "name": "Sonic 16-Bit Lead",
    "color": "#00c6fb",
    "desc": "Klassischer Mega Drive 4-Op FM Lead mit crunchy Leiter-Verzerrung und schneidendem Glanz",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₁·sin(4π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₂·sin(2π<em>f</em><sub>c</sub><em>t</em>)))",
    "formulaSub": "Sega Genesis YM2612 4-Op Algorithmus 4",
    "customParam": {
      "name": "DAC Grit / Ladder",
      "min": 0,
      "max": 4,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 2,
      "I0": 2.6,
      "dI": 1.8,
      "lfo": 0.1,
      "atk": 0.005,
      "rel": 1.8,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Green Hill Lead",
        "r": 2,
        "i": 2.6,
        "d": 1.8
      },
      {
        "name": "Streets Of Rage",
        "r": 1,
        "i": 3.5,
        "d": 2.5
      },
      {
        "name": "Boss Fight Saw",
        "r": 3,
        "i": 4,
        "d": 3
      }
    ]
  },
  {
    "id": 31,
    "bank": "D",
    "keyDisplay": "2",
    "name": "Mega Drive FM Drums",
    "color": "#f83600",
    "desc": "16-Bit FM Kick & metallische Snare mit ultra-schnellem Frequenzabfall und Rausch-Bursts",
    "formulaLatex": "<em>f</em><sub>k</sub>(<em>t</em>) = 280·e<sup>-t/25ms</sup> + 45, <em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>k</sub>(<em>t</em>)<em>t</em>) + N·sin(2π<em>f</em><sub>m</sub><em>t</em>)",
    "formulaSub": "Perkussive FM-Trommelsynthese",
    "customParam": {
      "name": "Snare Noise Mix",
      "min": 0,
      "max": 2,
      "step": 0.05,
      "val": 0.8
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 4.5,
      "dI": 3.5,
      "lfo": 0.05,
      "atk": 0.001,
      "rel": 0.8,
      "vol": 0.9,
      "oct": -2,
      "latch": false
    },
    "presets": [
      {
        "name": "Punchy FM Kick",
        "r": 1,
        "i": 5,
        "d": 4
      },
      {
        "name": "16-Bit Snare",
        "r": 3.5,
        "i": 3.5,
        "d": 3
      },
      {
        "name": "Tom-Tom Sweep",
        "r": 1.5,
        "i": 4,
        "d": 2.5
      }
    ]
  },
  {
    "id": 32,
    "bank": "D",
    "keyDisplay": "3",
    "name": "Castlevania Organ FM",
    "color": "#fe5196",
    "desc": "Dunkle gotische 16-Bit Kirchenorgel mit multiplen Oberton-Stimmen und Raumschwebung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>k=1</sub>³ <sup>1</sup>/<sub>k</sub> sin(2π·k·<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Gotische Arcade Pfeifenorgel 8' + 4' + 2 2/3'",
    "customParam": {
      "name": "Octave Ranks",
      "min": 0.5,
      "max": 3,
      "step": 0.1,
      "val": 1.6
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.8,
      "dI": 1.2,
      "lfo": 0.06,
      "atk": 0.05,
      "rel": 3.2,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Dracula Organ",
        "r": 1,
        "i": 1.8,
        "d": 1.2
      },
      {
        "name": "Cathedral Tutti",
        "r": 2,
        "i": 2.4,
        "d": 1.6
      },
      {
        "name": "Spooky Reed",
        "r": 3,
        "i": 2,
        "d": 1
      }
    ]
  },
  {
    "id": 33,
    "bank": "D",
    "keyDisplay": "4",
    "name": "AdLib Chiptune Lead",
    "color": "#f77062",
    "desc": "Sound Blaster OPL2 Retro-PC Chiptune Rechteck/Halbwellen-Lead mit unverkennbarem DOS-Charme",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sgn(sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>)))",
    "formulaSub": "OPL2 Waveform 1 (Halbsinus & Rectified)",
    "customParam": {
      "name": "Pulse Width",
      "min": 0.1,
      "max": 0.9,
      "step": 0.02,
      "val": 0.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 2.2,
      "dI": 2,
      "lfo": 0.1,
      "atk": 0.005,
      "rel": 1.5,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Monkey Island",
        "r": 1,
        "i": 2.2,
        "d": 2
      },
      {
        "name": "Commander Keen",
        "r": 2,
        "i": 3,
        "d": 2.5
      },
      {
        "name": "Sierra Quest",
        "r": 0.5,
        "i": 1.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 34,
    "bank": "D",
    "keyDisplay": "5",
    "name": "DOOM Cyberpunk Saw FM",
    "color": "#fe5858",
    "desc": "Brutaler, industriell verzerrter FM-Sägezahn mit Wavefolder-Kante und schneidender Resonanz",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·tanh(γ·[sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>)) + β·y(t-1)])",
    "formulaSub": "Industrial Heavy Metal FM Lead",
    "customParam": {
      "name": "Distortion Drive",
      "min": 1,
      "max": 8,
      "step": 0.2,
      "val": 3.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 3.5,
      "dI": 2.5,
      "lfo": 0.1,
      "atk": 0.01,
      "rel": 2.2,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "E1M1 Riff",
        "r": 1,
        "i": 3.5,
        "d": 2.5
      },
      {
        "name": "BFG Bass",
        "r": 0.5,
        "i": 4.8,
        "d": 3.5
      },
      {
        "name": "Cyberdemon",
        "r": 2,
        "i": 4.2,
        "d": 3
      }
    ]
  },
  {
    "id": 35,
    "bank": "D",
    "keyDisplay": "6",
    "name": "Thunder Laser FX FM",
    "color": "#f6d365",
    "desc": "Sci-Fi Laserkanone mit exponentiellem Pitch-Drop von 4 kHz und extremem Modulationsindex",
    "formulaLatex": "<em>f</em>(<em>t</em>) = <em>f</em><sub>0</sub>·e<sup>-t/60ms</sup>, <em>y</em>(<em>t</em>) = sin(2π<em>f</em>(<em>t</em>)<em>t</em> + <span class=\"idx\"><em>I</em>₀</span>·sin(6π<em>f</em>(<em>t</em>)<em>t</em>))",
    "formulaSub": "Sci-Fi Arcade Laser Sweep",
    "customParam": {
      "name": "Laser Sweep Speed",
      "min": 0.2,
      "max": 4,
      "step": 0.1,
      "val": 1.5
    },
    "defaults": {
      "ratio": 3,
      "I0": 5.5,
      "dI": 4,
      "lfo": 0.1,
      "atk": 0.001,
      "rel": 1.2,
      "vol": 0.85,
      "oct": 1,
      "latch": false
    },
    "presets": [
      {
        "name": "Phaser Gun",
        "r": 3,
        "i": 5.5,
        "d": 4
      },
      {
        "name": "Space Shield",
        "r": 1.5,
        "i": 4,
        "d": 3
      },
      {
        "name": "Warp Beep",
        "r": 6,
        "i": 3.5,
        "d": 2
      }
    ]
  },
  {
    "id": 36,
    "bank": "D",
    "keyDisplay": "7",
    "name": "Marble Zone Steel Drum",
    "color": "#fda085",
    "desc": "Karibische Steel Pan Steeltrommel mit Ringmodulations-Obertönen und tropischem Arcade-Flair",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(5.5π<em>f</em><sub>c</sub><em>t</em>))·[1 + 0.3·sin(11π<em>f</em><sub>c</sub><em>t</em>)]",
    "formulaSub": "Inharmonische Kesselresonanz",
    "customParam": {
      "name": "Pan Resonance",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.2
    },
    "defaults": {
      "ratio": 2.75,
      "I0": 3,
      "dI": 2.2,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 2,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Steel Pan",
        "r": 2.75,
        "i": 3,
        "d": 2.2
      },
      {
        "name": "Tropical Bell",
        "r": 3.5,
        "i": 2.5,
        "d": 1.8
      },
      {
        "name": "Metallic Tine",
        "r": 1.75,
        "i": 3.8,
        "d": 2.5
      }
    ]
  },
  {
    "id": 37,
    "bank": "D",
    "keyDisplay": "8",
    "name": "OutRun Synthwave Bass",
    "color": "#a18cd1",
    "desc": "Rollender 80s Arcade Synthwave Bass mit blitzschnellem Decay und druckvollem 16tel-Drive",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀·e<sup>-t/120ms</sup></span>·sin(2π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "OutRun / Miami Synthwave Bass",
    "customParam": {
      "name": "Punch Decay",
      "min": 0.05,
      "max": 1,
      "step": 0.02,
      "val": 0.25
    },
    "defaults": {
      "ratio": 1,
      "I0": 3.2,
      "dI": 2.8,
      "lfo": 0.05,
      "atk": 0.002,
      "rel": 0.8,
      "vol": 0.88,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Magical Sound Shower",
        "r": 1,
        "i": 3.2,
        "d": 2.8
      },
      {
        "name": "Turbo Drive",
        "r": 0.5,
        "i": 4,
        "d": 3.5
      },
      {
        "name": "Nightcall",
        "r": 1,
        "i": 2.2,
        "d": 2
      }
    ]
  },
  {
    "id": 38,
    "bank": "D",
    "keyDisplay": "9",
    "name": "NeoGeo Arcade Pluck",
    "color": "#fbc2eb",
    "desc": "Kristallklarer japanischer Arcade-Zupfsound mit Stereo-Chorus und schimmerndem Decay",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₁·sin(6π<em>f</em><sub>c</sub><em>t</em>)) + A₂·sin(2π(<em>f</em><sub>c</sub>+δ)<em>t</em> + <em>I</em>₂·sin(6π(<em>f</em><sub>c</sub>+δ)<em>t</em>))",
    "formulaSub": "NeoGeo MVS FM Pluck",
    "customParam": {
      "name": "Shimmer Detune",
      "min": 0.2,
      "max": 5,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 3,
      "I0": 2.5,
      "dI": 2,
      "lfo": 0.1,
      "atk": 0.003,
      "rel": 2.5,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Metal Slug Crystal",
        "r": 3,
        "i": 2.5,
        "d": 2
      },
      {
        "name": "King Of Fighters",
        "r": 2,
        "i": 3.2,
        "d": 2.5
      },
      {
        "name": "Puzzle Bobble",
        "r": 4,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 39,
    "bank": "D",
    "keyDisplay": "0",
    "name": "Power Metal FM Poly",
    "color": "#84fab0",
    "desc": "Hochenergetischer Anime-Arcade Polysynth mit strahlendem Glanz und massivem Stereo-Punch",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>c</sub><em>t</em>) + <em>I</em><sub>sub</sub>·sin(π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Mega Drive Polyphonic Super Lead",
    "customParam": {
      "name": "Power Saturation",
      "min": 0.5,
      "max": 4,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 1,
      "I0": 2.4,
      "dI": 2.2,
      "lfo": 0.08,
      "atk": 0.02,
      "rel": 2.4,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Thunder Force Poly",
        "r": 1,
        "i": 2.4,
        "d": 2.2
      },
      {
        "name": "Sega Anthem",
        "r": 2,
        "i": 3,
        "d": 2.8
      },
      {
        "name": "Final Boss Synth",
        "r": 1.5,
        "i": 3.8,
        "d": 3.2
      }
    ]
  },
  {
    "id": 40,
    "bank": "E",
    "keyDisplay": "1",
    "name": "Blade Runner CS-FM Pad",
    "color": "#8fd3f4",
    "desc": "Monumentales Vangelis Brass-Pad mit langsamem Pitch-Swell, Schwebung und endlosem Raum",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π(<em>f</em><sub>c</sub>+δ·sin(ω<sub>lfo</sub>t))<em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "CS-80 / Vangelis Cinematic Pad mit Aftertouch-Swell",
    "customParam": {
      "name": "Swell Tiefe",
      "min": 0.2,
      "max": 4,
      "step": 0.1,
      "val": 1.6
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.5,
      "dI": 2.8,
      "lfo": 0.05,
      "atk": 2.8,
      "rel": 6.5,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Tears In Rain",
        "r": 1,
        "i": 1.5,
        "d": 2.8
      },
      {
        "name": "Los Angeles 2019",
        "r": 1,
        "i": 2.2,
        "d": 3.5
      },
      {
        "name": "Esper Pad",
        "r": 0.5,
        "i": 1.2,
        "d": 2
      }
    ]
  },
  {
    "id": 41,
    "bank": "E",
    "keyDisplay": "2",
    "name": "Dark Nebula Sub-Drone",
    "color": "#134e5e",
    "desc": "Subterraner 30Hz Bass-Groll mit ultra-langsamen Phasen-Verschiebungen und kosmischer Dunkelheit",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀</span>·sin(π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>sub</sub>·sin(0.5π<em>f</em><sub>c</sub><em>t</em>)))",
    "formulaSub": "Subharmonische Gravitationswellen",
    "customParam": {
      "name": "Sub-Rumble",
      "min": 0.5,
      "max": 5,
      "step": 0.1,
      "val": 2.5
    },
    "defaults": {
      "ratio": 0.5,
      "I0": 3.5,
      "dI": 2,
      "lfo": 0.02,
      "atk": 3.5,
      "rel": 8,
      "vol": 0.84,
      "oct": -2,
      "latch": false
    },
    "presets": [
      {
        "name": "Event Horizon Sub",
        "r": 0.5,
        "i": 3.5,
        "d": 2
      },
      {
        "name": "Abyssal Rumble",
        "r": 0.25,
        "i": 4.2,
        "d": 2.5
      },
      {
        "name": "Singularity",
        "r": 0.5,
        "i": 2.5,
        "d": 1.5
      }
    ]
  },
  {
    "id": 42,
    "bank": "E",
    "keyDisplay": "3",
    "name": "Hyperborea Shimmer",
    "color": "#71b280",
    "desc": "Ätherische kristalline Glazial-Drohne mit funkelnden Oktaven-Schimmern und arktischem Raum",
    "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ <sup>1</sup>/<sub>k</sub> sin(2π·2<sup>k</sup><em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·3·2<sup>k</sup><em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Kaskadierende Oktaven-Kristalle",
    "customParam": {
      "name": "Shimmer Glanz",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.5
    },
    "defaults": {
      "ratio": 3,
      "I0": 1.8,
      "dI": 1.5,
      "lfo": 0.04,
      "atk": 2,
      "rel": 6,
      "vol": 0.74,
      "oct": 1,
      "latch": false
    },
    "presets": [
      {
        "name": "Nordlicht Shimmer",
        "r": 3,
        "i": 1.8,
        "d": 1.5
      },
      {
        "name": "Eis-Dom",
        "r": 4,
        "i": 2.2,
        "d": 1.8
      },
      {
        "name": "Glazial-Swell",
        "r": 2,
        "i": 1.4,
        "d": 1
      }
    ]
  },
  {
    "id": 43,
    "bank": "E",
    "keyDisplay": "4",
    "name": "Cryogenic Ice Whispers",
    "color": "#c471ed",
    "desc": "Gefrorene Atemgeräusche mit stochastischen FM-Mikro-Fluktuationen und eisiger Kälte",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + [<em>I</em> + ξ(t)]·sin(2π·4.12<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Stochastischer Frost-Modulator",
    "customParam": {
      "name": "Frost Fluktuation",
      "min": 0.1,
      "max": 3,
      "step": 0.1,
      "val": 1.2
    },
    "defaults": {
      "ratio": 4.12,
      "I0": 2,
      "dI": 2.5,
      "lfo": 0.15,
      "atk": 1.8,
      "rel": 5.5,
      "vol": 0.72,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Sub-Zero Whisper",
        "r": 4.12,
        "i": 2,
        "d": 2.5
      },
      {
        "name": "Permafrost",
        "r": 5.23,
        "i": 2.8,
        "d": 3
      },
      {
        "name": "Blizzard Breath",
        "r": 3.14,
        "i": 1.5,
        "d": 1.8
      }
    ]
  },
  {
    "id": 44,
    "bank": "E",
    "keyDisplay": "5",
    "name": "Dark Matter Pulsar Drone",
    "color": "#12c2e9",
    "desc": "Periodischer rhythmischer Gravitationspuls mit Resonanz-Obertönen und interstellarer Weite",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>m</sub><em>t</em>))·|sin(π<em>f</em><sub>pulse</sub><em>t</em>)|<sup>γ</sup>",
    "formulaSub": "Astrophysikalische Pulsar-Rotation",
    "customParam": {
      "name": "Pulse Shape γ",
      "min": 1,
      "max": 8,
      "step": 0.2,
      "val": 3
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 2.5,
      "dI": 2,
      "lfo": 0.5,
      "atk": 1.2,
      "rel": 4.5,
      "vol": 0.78,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Neutronenstern",
        "r": 1.5,
        "i": 2.5,
        "d": 2
      },
      {
        "name": "Magnetar Pulse",
        "r": 2,
        "i": 3.5,
        "d": 2.5
      },
      {
        "name": "Cosmic Beacon",
        "r": 0.75,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 45,
    "bank": "E",
    "keyDisplay": "6",
    "name": "Solar Flare Granular Drone",
    "color": "#f64f59",
    "desc": "Brüllende Sonnenplasma-Eruptionen mit kollidierenden Trägerphasen und reicher Obertonglut",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₁·sin(2π<em>f</em><sub>m</sub><em>t</em>) + <em>I</em>₂·sin(2π·1.006<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Thermonukleare Plasma-Schwebung",
    "customParam": {
      "name": "Flare Heat",
      "min": 0.5,
      "max": 4,
      "step": 0.1,
      "val": 2.2
    },
    "defaults": {
      "ratio": 2,
      "I0": 3,
      "dI": 2.2,
      "lfo": 0.08,
      "atk": 2.5,
      "rel": 6,
      "vol": 0.76,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Koronaler Auswurf",
        "r": 2,
        "i": 3,
        "d": 2.2
      },
      {
        "name": "Protuberanz",
        "r": 1.5,
        "i": 3.8,
        "d": 2.8
      },
      {
        "name": "Solarwind",
        "r": 3,
        "i": 2.2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 46,
    "bank": "E",
    "keyDisplay": "7",
    "name": "Abyss Submarine Resonator",
    "color": "#1d2671",
    "desc": "Tiefsee-U-Boot Metallrumpf-Resonanz unter immensem Wasserdruck mit unheimlichen Sonar-Harmonischen",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + β·tanh(3y))",
    "formulaSub": "Hydrostatischer Druckrumpf-Resonator",
    "customParam": {
      "name": "Hull Strain",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.4
    },
    "defaults": {
      "ratio": 1.333,
      "I0": 2.8,
      "dI": 1.6,
      "lfo": 0.03,
      "atk": 2,
      "rel": 5.5,
      "vol": 0.8,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Mariannengraben",
        "r": 1.333,
        "i": 2.8,
        "d": 1.6
      },
      {
        "name": "Sonar Echo",
        "r": 2.666,
        "i": 3.5,
        "d": 2
      },
      {
        "name": "Druckkammer",
        "r": 0.666,
        "i": 2,
        "d": 1.2
      }
    ]
  },
  {
    "id": 47,
    "bank": "E",
    "keyDisplay": "8",
    "name": "Starlight Ethereal Voice",
    "color": "#c33764",
    "desc": "Geisterhafter kosmischer Gesang, der an einen gregorianischen Chor in der Schwerelosigkeit erinnert",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·[sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(4π<em>f</em><sub>c</sub><em>t</em>)) + 0.6·sin(4π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(8π<em>f</em><sub>c</sub><em>t</em>))]",
    "formulaSub": "Dual-Formant Celestial Choir",
    "customParam": {
      "name": "Vocal Breath",
      "min": 0.1,
      "max": 2.5,
      "step": 0.1,
      "val": 1.1
    },
    "defaults": {
      "ratio": 2,
      "I0": 1.6,
      "dI": 1.4,
      "lfo": 0.06,
      "atk": 2.2,
      "rel": 6.5,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Kosmischer Chor",
        "r": 2,
        "i": 1.6,
        "d": 1.4
      },
      {
        "name": "Sternenlicht",
        "r": 3,
        "i": 2,
        "d": 1.8
      },
      {
        "name": "Seraphim Pad",
        "r": 1,
        "i": 1.2,
        "d": 1
      }
    ]
  },
  {
    "id": 48,
    "bank": "E",
    "keyDisplay": "9",
    "name": "Void Walker Ambient Swell",
    "color": "#0f2027",
    "desc": "Langsam morphende, bodenlose Ambient-Klanglandschaft mit unendlichem Nachhall und dunklen Formanten",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π·1.732<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Wurzel-3 Inharmonik für unendliche Tiefe",
    "customParam": {
      "name": "Void Morphing",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.5
    },
    "defaults": {
      "ratio": 1.732,
      "I0": 2.2,
      "dI": 1.8,
      "lfo": 0.035,
      "atk": 3,
      "rel": 7.5,
      "vol": 0.76,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Leere des Alls",
        "r": 1.732,
        "i": 2.2,
        "d": 1.8
      },
      {
        "name": "Erebus Drone",
        "r": 2.414,
        "i": 3,
        "d": 2.2
      },
      {
        "name": "Schwarzer Nebel",
        "r": 0.866,
        "i": 1.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 49,
    "bank": "E",
    "keyDisplay": "0",
    "name": "Antimatter Reactor Drone",
    "color": "#203a43",
    "desc": "Instabiles Science-Fiction Eindämmungsfeld mit pulsierender magnetischer Frequenzmodulation",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₀·sin(2π<em>f</em><sub>m</sub><em>t</em> + <em>I</em><sub>warp</sub>·cos(4π<em>f</em><sub>m</sub><em>t</em>)))",
    "formulaSub": "Magnetohydrodynamische Reaktorschwingung",
    "customParam": {
      "name": "Containment Flux",
      "min": 0.5,
      "max": 5,
      "step": 0.1,
      "val": 2.4
    },
    "defaults": {
      "ratio": 1,
      "I0": 2.8,
      "dI": 2,
      "lfo": 0.09,
      "atk": 1.5,
      "rel": 5,
      "vol": 0.8,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Warp Kern 100%",
        "r": 1,
        "i": 2.8,
        "d": 2
      },
      {
        "name": "Plasmabruch",
        "r": 1.5,
        "i": 4.2,
        "d": 3
      },
      {
        "name": "Stasis-Feld",
        "r": 0.5,
        "i": 2,
        "d": 1.2
      }
    ]
  },
  {
    "id": 50,
    "bank": "F",
    "keyDisplay": "1",
    "name": "Tibet Klangschale FM",
    "color": "#ffd200",
    "desc": "Handgehämmerte tibetische Bronzeschale mit reinem Grundton und schwebendem Oberton-Schlag",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(2π<em>f</em><sub>c</sub><em>t</em>) + A₂·sin(2π·2.756<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·5.4<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Inharmonische Bronzeschalen-Modi",
    "customParam": {
      "name": "Bronze Beating",
      "min": 0.1,
      "max": 3,
      "step": 0.05,
      "val": 1.1
    },
    "defaults": {
      "ratio": 2.756,
      "I0": 1.2,
      "dI": 1.8,
      "lfo": 0.04,
      "atk": 0.02,
      "rel": 7,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Lhasa Tempelschale",
        "r": 2.756,
        "i": 1.2,
        "d": 1.8
      },
      {
        "name": "Meditations-Gong",
        "r": 3.24,
        "i": 1.8,
        "d": 2.5
      },
      {
        "name": "Singende Glocke",
        "r": 1.95,
        "i": 0.8,
        "d": 1.2
      }
    ]
  },
  {
    "id": 51,
    "bank": "F",
    "keyDisplay": "2",
    "name": "Javanese Gamelan Gong",
    "color": "#f7971e",
    "desc": "Heiliger indonesischer Gamelan-Gong mit mikrotonaler Schwebung und metallischer Wärme",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·1.414<em>f</em><sub>c</sub><em>t</em>) + <em>I</em>₂·sin(2π·2.828<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Slendro/Pelog Metallophon Spektren",
    "customParam": {
      "name": "Gamelan Shimmer",
      "min": 0.2,
      "max": 3.5,
      "step": 0.1,
      "val": 1.6
    },
    "defaults": {
      "ratio": 1.414,
      "I0": 2.6,
      "dI": 2.2,
      "lfo": 0.06,
      "atk": 0.005,
      "rel": 4.5,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Gong Ageng",
        "r": 1.414,
        "i": 2.6,
        "d": 2.2
      },
      {
        "name": "Bonang Metall",
        "r": 2.828,
        "i": 3.2,
        "d": 2.8
      },
      {
        "name": "Kempul Strike",
        "r": 1.732,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 52,
    "bank": "F",
    "keyDisplay": "3",
    "name": "Shakuhachi Bamboo Air",
    "color": "#00b09b",
    "desc": "Traditionelle japanische Bambusflöte mit authentischem Atemrauschen und expressivem Überblasen",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π(<em>f</em><sub>c</sub>+δ<sub>breath</sub>)<em>t</em> + <em>I</em>·sin(4π<em>f</em><sub>c</sub><em>t</em>)) + N(t)",
    "formulaSub": "Bambusrohr Resonanz & Anblasdruck",
    "customParam": {
      "name": "Atem Rauschen",
      "min": 0.1,
      "max": 2.5,
      "step": 0.1,
      "val": 0.9
    },
    "defaults": {
      "ratio": 2,
      "I0": 1.4,
      "dI": 1.6,
      "lfo": 0.18,
      "atk": 0.08,
      "rel": 2.2,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Zen Shakuhachi",
        "r": 2,
        "i": 1.4,
        "d": 1.6
      },
      {
        "name": "Überblasener Ton",
        "r": 3,
        "i": 2.4,
        "d": 2
      },
      {
        "name": "Mellow Bamboo",
        "r": 1,
        "i": 1,
        "d": 1
      }
    ]
  },
  {
    "id": 53,
    "bank": "F",
    "keyDisplay": "4",
    "name": "Celtic Harp Pluck FM",
    "color": "#96c93d",
    "desc": "Zarte keltische Nylon/Draht-Harfe mit weichem Fingerkuppen-Attack und warmem Holzkorpus",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>₀·e<sup>-t/60ms</sup></span>·sin(6π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Saiten-Impuls & Resonanzdecke",
    "customParam": {
      "name": "Harp Body Warmth",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.2
    },
    "defaults": {
      "ratio": 3,
      "I0": 2.2,
      "dI": 1.8,
      "lfo": 0.06,
      "atk": 0.003,
      "rel": 3,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Keltische Harfe",
        "r": 3,
        "i": 2.2,
        "d": 1.8
      },
      {
        "name": "Drahtsaite",
        "r": 4,
        "i": 3,
        "d": 2.2
      },
      {
        "name": "Sanfter Zupf",
        "r": 2,
        "i": 1.6,
        "d": 1.2
      }
    ]
  },
  {
    "id": 54,
    "bank": "F",
    "keyDisplay": "5",
    "name": "Koto Silk String FM",
    "color": "#e65c00",
    "desc": "Klassische japanische Koto-Seidensaite mit prägnantem Plektrumschnippen und Biegung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₀·e<sup>-t/40ms</sup>·sin(8π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "13-saitige Seiden-Wölbbrettzither",
    "customParam": {
      "name": "Bridge Snap",
      "min": 0.5,
      "max": 4,
      "step": 0.1,
      "val": 2
    },
    "defaults": {
      "ratio": 4,
      "I0": 2.8,
      "dI": 2.4,
      "lfo": 0.08,
      "atk": 0.002,
      "rel": 2.5,
      "vol": 0.84,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Traditionelle Koto",
        "r": 4,
        "i": 2.8,
        "d": 2.4
      },
      {
        "name": "Shamisen Snap",
        "r": 5,
        "i": 3.8,
        "d": 3
      },
      {
        "name": "Guzheng Zither",
        "r": 3,
        "i": 2.2,
        "d": 1.8
      }
    ]
  },
  {
    "id": 55,
    "bank": "F",
    "keyDisplay": "6",
    "name": "Glass Armonica Resonance",
    "color": "#f9d423",
    "desc": "Benjamin Franklins rotierende Glasschalen mit glasklarem, betörendem Singen",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(6π<em>f</em><sub>c</sub><em>t</em>))·[1 + 0.15·sin(2π·4.5t)]",
    "formulaSub": "Rotierende Reibungsglas-Resonanz",
    "customParam": {
      "name": "Glass Friction",
      "min": 0.1,
      "max": 2,
      "step": 0.05,
      "val": 0.75
    },
    "defaults": {
      "ratio": 3,
      "I0": 0.8,
      "dI": 1.2,
      "lfo": 0.07,
      "atk": 0.6,
      "rel": 4.8,
      "vol": 0.76,
      "oct": 1,
      "latch": false
    },
    "presets": [
      {
        "name": "Franklins Glasharmonika",
        "r": 3,
        "i": 0.8,
        "d": 1.2
      },
      {
        "name": "Kristall-Kelch",
        "r": 4,
        "i": 1.2,
        "d": 1.5
      },
      {
        "name": "Himmlisches Glas",
        "r": 2,
        "i": 0.5,
        "d": 0.8
      }
    ]
  },
  {
    "id": 56,
    "bank": "F",
    "keyDisplay": "7",
    "name": "Cathedral Pipe Organ 32ft",
    "color": "#ff4e50",
    "desc": "Monumentale Kathedral-Orgel mit bebendem 32-Fuß Sub-Bass und strahlenden Plenum-Registern",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A₁·sin(π<em>f</em><sub>c</sub><em>t</em>) + A₂·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(4π<em>f</em><sub>c</sub><em>t</em>)) + A₃·sin(4π<em>f</em><sub>c</sub><em>t</em>)",
    "formulaSub": "Grand Orgue 32' + 16' + 8' + Mixtur",
    "customParam": {
      "name": "32ft Sub-Bass",
      "min": 0.2,
      "max": 3,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 2,
      "I0": 1.8,
      "dI": 1.4,
      "lfo": 0.05,
      "atk": 0.08,
      "rel": 3.5,
      "vol": 0.84,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Toccata Tutti 32ft",
        "r": 2,
        "i": 1.8,
        "d": 1.4
      },
      {
        "name": "Prinzipal 8ft",
        "r": 1,
        "i": 1.2,
        "d": 0.8
      },
      {
        "name": "Choral Orgel",
        "r": 3,
        "i": 2.2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 57,
    "bank": "F",
    "keyDisplay": "8",
    "name": "Cello Bowed FM Model",
    "color": "#f9d423",
    "desc": "Ausdrucksstarkes gestrichenes Cello mit Bogen-Haftreibung und hölzerner Korpusresonanz",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>c</sub><em>t</em>) + β·tanh(2y))",
    "formulaSub": "Stick-Slip Bogenmodell & Korpus-Filter",
    "customParam": {
      "name": "Bow Pressure",
      "min": 0.2,
      "max": 3.5,
      "step": 0.1,
      "val": 1.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 1.6,
      "dI": 2,
      "lfo": 0.1,
      "atk": 0.12,
      "rel": 2.8,
      "vol": 0.8,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Solo Cello",
        "r": 1,
        "i": 1.6,
        "d": 2
      },
      {
        "name": "Viola da Gamba",
        "r": 2,
        "i": 2.2,
        "d": 2.4
      },
      {
        "name": "Warm String Ensemble",
        "r": 1,
        "i": 1.2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 58,
    "bank": "F",
    "keyDisplay": "9",
    "name": "Kalimba Thumb Piano",
    "color": "#b92b27",
    "desc": "Afrikanisches Daumenklavier mit warmem Metallzungen-Surren und hohlem Kalebassenkorpus",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>₀·e<sup>-t/50ms</sup>·sin(5.4π<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "Lamellophon Zungenbiegung & Kastenresonanz",
    "customParam": {
      "name": "Buzzing Sarna",
      "min": 0,
      "max": 2,
      "step": 0.05,
      "val": 0.65
    },
    "defaults": {
      "ratio": 2.7,
      "I0": 2.5,
      "dI": 2,
      "lfo": 0.06,
      "atk": 0.002,
      "rel": 2,
      "vol": 0.82,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Afrikanische Kalimba",
        "r": 2.7,
        "i": 2.5,
        "d": 2
      },
      {
        "name": "Mbira dzaVadzimu",
        "r": 3.2,
        "i": 3.2,
        "d": 2.5
      },
      {
        "name": "Music Box Tine",
        "r": 4,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 59,
    "bank": "F",
    "keyDisplay": "0",
    "name": "Ceramic Ocarina Flute",
    "color": "#1565c0",
    "desc": "Sanfte keramische Gefäßflöte mit reinem Ton, sanftem Anblas-Tremolo und natürlicher Wärme",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>c</sub><em>t</em>))·[1 + 0.08·sin(2π·5.5t)]",
    "formulaSub": "Helmholtz-Gefäßresonator",
    "customParam": {
      "name": "Helmholtz Air",
      "min": 0.1,
      "max": 1.5,
      "step": 0.05,
      "val": 0.5
    },
    "defaults": {
      "ratio": 1,
      "I0": 0.8,
      "dI": 0.9,
      "lfo": 0.15,
      "atk": 0.05,
      "rel": 2,
      "vol": 0.8,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Ocarina of Time",
        "r": 1,
        "i": 0.8,
        "d": 0.9
      },
      {
        "name": "Tonflöte",
        "r": 2,
        "i": 1.2,
        "d": 1.2
      },
      {
        "name": "Panflöte",
        "r": 1,
        "i": 1.4,
        "d": 1.5
      }
    ]
  },
  {
    "id": 60,
    "bank": "G",
    "keyDisplay": "1",
    "name": "Quantum Particle Collider",
    "color": "#ff007f",
    "desc": "Hochenergetische subatomare Teilchenkollision mit stochastischen Frequenz-Bursts",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <span class=\"idx\"><em>I</em>(<em>t</em>)</span>·sin(2π<em>f</em><sub>m</sub><em>t</em>) + ∑ δ<sub>k</sub>·sin(2π·k·f<sub>c</sub>t))",
    "formulaSub": "Hadronen-Kollisionsbursts & Quark-Zerfall",
    "customParam": {
      "name": "Collision Energy",
      "min": 0.5,
      "max": 8,
      "step": 0.2,
      "val": 3.5
    },
    "defaults": {
      "ratio": 3.5,
      "I0": 3.8,
      "dI": 4,
      "lfo": 1.8,
      "atk": 0.01,
      "rel": 3.5,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "CERN Collider",
        "r": 3.5,
        "i": 3.8,
        "d": 4
      },
      {
        "name": "Higgs Boson Burst",
        "r": 5,
        "i": 4.5,
        "d": 5
      },
      {
        "name": "Subatomarer Stream",
        "r": 2,
        "i": 2.5,
        "d": 2.5
      }
    ]
  },
  {
    "id": 61,
    "bank": "G",
    "keyDisplay": "2",
    "name": "Radio Telescope Glitch",
    "color": "#7f00ff",
    "desc": "Interstellare SETI-Funkimpulse und ausserirdische digitale Telemetrie-Artefakte",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·r<sub>step</sub>(t)<em>f</em><sub>c</sub><em>t</em>))",
    "formulaSub": "SETI Signalverarbeitung & Rauschmuster",
    "customParam": {
      "name": "Baud Rate",
      "min": 1,
      "max": 20,
      "step": 0.5,
      "val": 8
    },
    "defaults": {
      "ratio": 4,
      "I0": 3,
      "dI": 3.2,
      "lfo": 3.5,
      "atk": 0.01,
      "rel": 2.5,
      "vol": 0.76,
      "oct": 1,
      "latch": false
    },
    "presets": [
      {
        "name": "Wow! Signal",
        "r": 4,
        "i": 3,
        "d": 3.2
      },
      {
        "name": "Deep Space Beacon",
        "r": 2.5,
        "i": 4,
        "d": 3.5
      },
      {
        "name": "Alien Handshake",
        "r": 6,
        "i": 2.5,
        "d": 2
      }
    ]
  },
  {
    "id": 62,
    "bank": "G",
    "keyDisplay": "3",
    "name": "Feedback Loop Screamer",
    "color": "#ff0000",
    "desc": "Selbstoszillierende analoge modulare Rückkopplungsschleife am Rande des Chaos",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + β·y(t-1) + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Gefährliche analoge Rückkopplungsschleife",
    "customParam": {
      "name": "Scream Resonance",
      "min": 0.5,
      "max": 5,
      "step": 0.1,
      "val": 2.8
    },
    "defaults": {
      "ratio": 1,
      "I0": 4.2,
      "dI": 3.5,
      "lfo": 0.1,
      "atk": 0.005,
      "rel": 2.8,
      "vol": 0.74,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Overdrive Screamer",
        "r": 1,
        "i": 4.2,
        "d": 3.5
      },
      {
        "name": "Larsen Effekt",
        "r": 1.5,
        "i": 5,
        "d": 4
      },
      {
        "name": "Thermal Noise",
        "r": 0.5,
        "i": 3,
        "d": 2.5
      }
    ]
  },
  {
    "id": 63,
    "bank": "G",
    "keyDisplay": "4",
    "name": "Chaotic Bifurcation Drone",
    "color": "#ff7f00",
    "desc": "Feigenbaum-Periodenverdopplung und deterministische Chaos-Kaskaden",
    "formulaLatex": "<em>y</em><sub>n+1</sub> = r·y<sub>n</sub>·(1 - y<sub>n</sub>), <em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·y<sub>n</sub>(t))",
    "formulaSub": "Logistische Gleichung x_{n+1} = rx(1-x)",
    "customParam": {
      "name": "Feigenbaum r",
      "min": 2.5,
      "max": 4,
      "step": 0.01,
      "val": 3.85
    },
    "defaults": {
      "ratio": 2,
      "I0": 3,
      "dI": 2.4,
      "lfo": 0.08,
      "atk": 1,
      "rel": 4.5,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Chaos Schwelle",
        "r": 2,
        "i": 3,
        "d": 2.4
      },
      {
        "name": "Perioden-Verdopplung",
        "r": 1.5,
        "i": 2.2,
        "d": 1.8
      },
      {
        "name": "Turbulenter Attraktor",
        "r": 3,
        "i": 4,
        "d": 3
      }
    ]
  },
  {
    "id": 64,
    "bank": "G",
    "keyDisplay": "5",
    "name": "Geiger Counter Radiance",
    "color": "#00ff7f",
    "desc": "Ionisierende radioaktive Knackimpulse, die einen schweren Sub-Bassoszillator modulieren",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + ∑ <em>I</em><sub>pulse</sub>·δ(t-t<sub>k</sub>))",
    "formulaSub": "Poisson-verteilter radioaktiver Zerfall",
    "customParam": {
      "name": "Strahlungsdosis",
      "min": 0.5,
      "max": 6,
      "step": 0.2,
      "val": 2.5
    },
    "defaults": {
      "ratio": 3,
      "I0": 2.5,
      "dI": 3.5,
      "lfo": 1.2,
      "atk": 0.01,
      "rel": 3,
      "vol": 0.8,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Tschernobyl Gamma",
        "r": 3,
        "i": 2.5,
        "d": 3.5
      },
      {
        "name": "Isotopen-Puls",
        "r": 1.5,
        "i": 3.8,
        "d": 4
      },
      {
        "name": "Hintergrundstrahlung",
        "r": 4,
        "i": 1.8,
        "d": 2
      }
    ]
  },
  {
    "id": 65,
    "bank": "G",
    "keyDisplay": "6",
    "name": "Subatomic Bass Reactor",
    "color": "#007fff",
    "desc": "Hyperkomprimierter modularer Sub-Bass mit Tanh-Sättigung und monströsem Bassdruck",
    "formulaLatex": "<em>y</em>(<em>t</em>) = tanh(γ·[sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(π<em>f</em><sub>c</sub><em>t</em>))])",
    "formulaSub": "Nichtlineare Sub-Reaktorsättigung",
    "customParam": {
      "name": "Reactor Drive",
      "min": 1,
      "max": 6,
      "step": 0.1,
      "val": 3.2
    },
    "defaults": {
      "ratio": 0.5,
      "I0": 4,
      "dI": 3,
      "lfo": 0.05,
      "atk": 0.01,
      "rel": 2,
      "vol": 0.88,
      "oct": -2,
      "latch": false
    },
    "presets": [
      {
        "name": "Super-Sub 30Hz",
        "r": 0.5,
        "i": 4,
        "d": 3
      },
      {
        "name": "Fusionsreaktor",
        "r": 1,
        "i": 5,
        "d": 3.5
      },
      {
        "name": "Mega Punch",
        "r": 0.5,
        "i": 3,
        "d": 2.2
      }
    ]
  },
  {
    "id": 66,
    "bank": "G",
    "keyDisplay": "7",
    "name": "Neural Network Synapse",
    "color": "#00ffff",
    "desc": "Feuernde künstliche Neuronen mit Membranpotenzial-Spike-Trains und adaptiver Rückkopplung",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>m</sub><em>t</em>)·σ(W·y))",
    "formulaSub": "Hodgkin-Huxley Aktionspotenzial-Spikes",
    "customParam": {
      "name": "Synapsen-Gewicht W",
      "min": 0.2,
      "max": 4,
      "step": 0.1,
      "val": 1.8
    },
    "defaults": {
      "ratio": 2.2,
      "I0": 2.8,
      "dI": 2.2,
      "lfo": 0.2,
      "atk": 0.05,
      "rel": 3.2,
      "vol": 0.78,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Spikendes Neuron",
        "r": 2.2,
        "i": 2.8,
        "d": 2.2
      },
      {
        "name": "Deep Neural Layer",
        "r": 1.5,
        "i": 3.5,
        "d": 2.8
      },
      {
        "name": "Dopamin-Burst",
        "r": 3,
        "i": 2,
        "d": 1.5
      }
    ]
  },
  {
    "id": 67,
    "bank": "G",
    "keyDisplay": "8",
    "name": "Ringmod Laser Swarm",
    "color": "#ff00ff",
    "desc": "Quad-Ringmodulator Sci-Fi Laserschwarm mit wirbelnden Seitenbändern und metallischem Glanz",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em>)·sin(2π<em>f</em><sub>m1</sub><em>t</em>)·sin(2π<em>f</em><sub>m2</sub><em>t</em>)",
    "formulaSub": "Kaskadierte 4-Quadranten Ringmodulation",
    "customParam": {
      "name": "Ringmod Spread",
      "min": 0.5,
      "max": 6,
      "step": 0.1,
      "val": 2.6
    },
    "defaults": {
      "ratio": 1.75,
      "I0": 3.2,
      "dI": 2.8,
      "lfo": 0.15,
      "atk": 0.01,
      "rel": 2.8,
      "vol": 0.76,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Laserschwarm",
        "r": 1.75,
        "i": 3.2,
        "d": 2.8
      },
      {
        "name": "Alien Schwarm",
        "r": 2.5,
        "i": 4,
        "d": 3.5
      },
      {
        "name": "Sci-Fi Bell Ring",
        "r": 3.5,
        "i": 2.5,
        "d": 2
      }
    ]
  },
  {
    "id": 68,
    "bank": "G",
    "keyDisplay": "9",
    "name": "Black Hole Event Horizon",
    "color": "#400080",
    "desc": "Gravitative Rotverschiebung, die die Trägerfrequenz in den tiefen Sub-Bass-Abgrund zieht",
    "formulaLatex": "<em>f</em>(<em>t</em>) = <em>f</em><sub>0</sub>·√(1 - r<sub>s</sub>/r), <em>y</em>(<em>t</em>) = sin(2π<em>f</em>(<em>t</em>)<em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
    "formulaSub": "Schwarzschild-Metrik Gravitations-Rotverschiebung",
    "customParam": {
      "name": "Ereignishorizont r_s",
      "min": 0.1,
      "max": 2,
      "step": 0.05,
      "val": 0.8
    },
    "defaults": {
      "ratio": 0.707,
      "I0": 3.6,
      "dI": 2.5,
      "lfo": 0.04,
      "atk": 2.5,
      "rel": 7,
      "vol": 0.82,
      "oct": -1,
      "latch": false
    },
    "presets": [
      {
        "name": "Singularität",
        "r": 0.707,
        "i": 3.6,
        "d": 2.5
      },
      {
        "name": "Akkretionsscheibe",
        "r": 1.414,
        "i": 4.2,
        "d": 3
      },
      {
        "name": "Raumzeit-Kollaps",
        "r": 0.353,
        "i": 2.8,
        "d": 2
      }
    ]
  },
  {
    "id": 69,
    "bank": "G",
    "keyDisplay": "0",
    "name": "Warp Engine Plasma Drive",
    "color": "#ff0040",
    "desc": "Hochfahrender Raumschiff-Warpantrieb mit brüllender harmonischer Kraftplasma-Resonanz",
    "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub>(t)<em>t</em> + <span class=\"idx\"><em>I</em>₀</span>·sin(2π<em>f</em><sub>m</sub>(t)<em>t</em>))",
    "formulaSub": "Warpfaktor 9.9 Plasma-Spooling",
    "customParam": {
      "name": "Plasma Resonanz",
      "min": 0.5,
      "max": 5,
      "step": 0.1,
      "val": 2.5
    },
    "defaults": {
      "ratio": 1.5,
      "I0": 3.5,
      "dI": 3,
      "lfo": 0.07,
      "atk": 1.8,
      "rel": 5.5,
      "vol": 0.84,
      "oct": 0,
      "latch": false
    },
    "presets": [
      {
        "name": "Warp 9 Spool",
        "r": 1.5,
        "i": 3.5,
        "d": 3
      },
      {
        "name": "Impulsantrieb",
        "r": 2,
        "i": 4.5,
        "d": 3.8
      },
      {
        "name": "Hyperraum-Sprung",
        "r": 3,
        "i": 3,
        "d": 2.5
      }
    ]
  },
  {
  "id": 70,
  "bank": "H",
  "keyDisplay": "1",
  "name": "Buchla 292 Vactrol Bongo",
  "color": "#2ed573",
  "desc": "West-Coast Low-Pass Gate (LPG) Vactrol-Ping mit nichtlinearer Oberton-Dämpfung und natürlichem Bongo-Ausklingen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·<em>e</em><sup>-t/τ(Vactrol)</sup>·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Vactrol LPG Strike & Slew Damping",
  "customParam": {
    "name": "Vactrol Slew/Lag",
    "min": 0.02,
    "max": 0.45,
    "step": 0.01,
    "val": 0.14
  },
  "defaults": {
    "ratio": 1.414,
    "I0": 3.5,
    "dI": 2.8,
    "lfo": 0.05,
    "atk": 0.002,
    "rel": 0.35,
    "vol": 0.85,
    "oct": -1,
    "latch": false
  },
  "presets": [
    {
      "name": "West Coast Bongo",
      "r": 1.414,
      "i": 3.5,
      "d": 2.8
    },
    {
      "name": "Deep Wood Ping",
      "r": 0.707,
      "i": 4.2,
      "d": 3
    },
    {
      "name": "Snappy LPG Thud",
      "r": 2,
      "i": 2.5,
      "d": 1.8
    }
  ]
},
  {
  "id": 71,
  "bank": "H",
  "keyDisplay": "2",
  "name": "Hydro Water Droplet",
  "color": "#00d2d3",
  "desc": "Tropfendes Wasser mit Oberflächenspannungs-Pitchbend und akustischer Hohlraum-Resonanz",
  "formulaLatex": "<em>f</em><sub>c</sub>(<em>t</em>) = <em>f</em><sub>0</sub>·(1 + Δ<em>f</em>·<em>e</em><sup>-t/τ<sub>drop</sub></sup>), <em>y</em>(<em>t</em>) = A·sin(2π∫<em>f</em><sub>c</sub><em>dt</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Oberflächenspannungs-Fluidresonanz",
  "customParam": {
    "name": "Tropfen-Spannung",
    "min": 0.2,
    "max": 3,
    "step": 0.05,
    "val": 1.6
  },
  "defaults": {
    "ratio": 2.76,
    "I0": 1.8,
    "dI": 1.5,
    "lfo": 0.1,
    "atk": 0.001,
    "rel": 0.18,
    "vol": 0.82,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Höhlentropfen",
      "r": 2.76,
      "i": 1.8,
      "d": 1.5
    },
    {
      "name": "Glasklarer Tropfen",
      "r": 3.5,
      "i": 2.2,
      "d": 1.8
    },
    {
      "name": "Tiefe Wasserblase",
      "r": 1.5,
      "i": 2.8,
      "d": 2
    }
  ]
},
  {
  "id": 72,
  "bank": "H",
  "keyDisplay": "3",
  "name": "Bamboo Stomp & Anklung",
  "color": "#10ac84",
  "desc": "Hohler Bambus-Stomp mit Klick-Transiente und zylindrischer Luftkammersäule",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·[sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(6π<em>f</em><sub>c</sub><em>t</em>)) + 0.3·sin(10π<em>f</em><sub>c</sub><em>t</em>)]·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "Zylindrische Bambussäulen-Moden",
  "customParam": {
    "name": "Rohr-Hohlraum Q",
    "min": 0.3,
    "max": 4,
    "step": 0.1,
    "val": 1.8
  },
  "defaults": {
    "ratio": 3,
    "I0": 2.4,
    "dI": 2,
    "lfo": 0.08,
    "atk": 0.003,
    "rel": 0.28,
    "vol": 0.84,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Bambuswald",
      "r": 3,
      "i": 2.4,
      "d": 2
    },
    {
      "name": "Anklung Rassel",
      "r": 4.5,
      "i": 3,
      "d": 2.5
    },
    {
      "name": "Stomp Box",
      "r": 1.5,
      "i": 3.8,
      "d": 3
    }
  ]
},
  {
  "id": 73,
  "bank": "H",
  "keyDisplay": "4",
  "name": "Modal Membrane Pluck",
  "color": "#1dd1a1",
  "desc": "Modale 2D-Kreismembran-Resonanzen (Bessel-Nullstellen 2.295, 3.598, 4.90) nach Mutable Rings",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ <em>A</em><sub>n</sub>·sin(2π<em>k</em><sub>n</sub><em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>n</sub>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-d<sub>n</sub>t</sup>",
  "formulaSub": "2D Kreismembran Bessel-Moden",
  "customParam": {
    "name": "Membran-Dämpfung",
    "min": 0.1,
    "max": 2.5,
    "step": 0.05,
    "val": 0.85
  },
  "defaults": {
    "ratio": 2.295,
    "I0": 2.2,
    "dI": 1.8,
    "lfo": 0.12,
    "atk": 0.002,
    "rel": 0.45,
    "vol": 0.8,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Trommelfell Modal",
      "r": 2.295,
      "i": 2.2,
      "d": 1.8
    },
    {
      "name": "Platte Resonant",
      "r": 3.598,
      "i": 3,
      "d": 2.4
    },
    {
      "name": "Dämpfungs-Zupf",
      "r": 1.85,
      "i": 1.5,
      "d": 1.2
    }
  ]
},
  {
  "id": 74,
  "bank": "H",
  "keyDisplay": "5",
  "name": "Seed Pod Shaker",
  "color": "#54a0ff",
  "desc": "Stochastischer Samenkapsel-Shaker mit Poisson-verteilten Körnerkollisionen und Reibung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>k</sub> δ(<em>t</em> - <em>t</em><sub>k</sub>) * [<em>e</em><sup>-t/τ</sup>·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))]",
  "formulaSub": "Poisson-Körner Kollisionsmodell",
  "customParam": {
    "name": "Körner-Dichte",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "ratio": 4.2,
    "I0": 3,
    "dI": 2.5,
    "lfo": 0.15,
    "atk": 0.005,
    "rel": 0.32,
    "vol": 0.78,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Samenkapsel",
      "r": 4.2,
      "i": 3,
      "d": 2.5
    },
    {
      "name": "Feiner Sandregen",
      "r": 6,
      "i": 4,
      "d": 3.2
    },
    {
      "name": "Holzperlen",
      "r": 2.5,
      "i": 2,
      "d": 1.5
    }
  ]
},
  {
  "id": 75,
  "bank": "H",
  "keyDisplay": "6",
  "name": "Clay Udu Drum Breath",
  "color": "#e17055",
  "desc": "Afrikanische Ton-Udu mit tiefem Daumenschlag-Helmholtz-Resonator und seitlichem Luftloch-Zischen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>Helmholtz</sub><em>t</em> + <em>I</em>·sin(π<em>f</em><sub>c</sub><em>t</em>)) + N(<em>t</em>)·<em>e</em><sup>-t/τ<sub>air</sub></sup>",
  "formulaSub": "Helmholtz Tonkrug Resonanz",
  "customParam": {
    "name": "Tonkrug Resonanz",
    "min": 0.4,
    "max": 3.5,
    "step": 0.1,
    "val": 1.7
  },
  "defaults": {
    "ratio": 0.5,
    "I0": 4,
    "dI": 3.2,
    "lfo": 0.06,
    "atk": 0.008,
    "rel": 0.55,
    "vol": 0.88,
    "oct": -2,
    "latch": false
  },
  "presets": [
    {
      "name": "Tonkrug Bass",
      "r": 0.5,
      "i": 4,
      "d": 3.2
    },
    {
      "name": "Hals-Schlag",
      "r": 1.2,
      "i": 2.8,
      "d": 2.2
    },
    {
      "name": "Luftloch Zupf",
      "r": 2.4,
      "i": 1.8,
      "d": 1.4
    }
  ]
},
  {
  "id": 76,
  "bank": "H",
  "keyDisplay": "7",
  "name": "Micro-Kalimba Ghost Pluck",
  "color": "#fdcb6e",
  "desc": "Extrem zarter, gedämpfter Metallzungen-Zupf mit kurzem metallischem Klick und leisem Holzkorpus",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·<em>e</em><sup>-t/0.03</sup>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "Gedämpfte Metallzinken-Transiente",
  "customParam": {
    "name": "Zinken Dämpfung",
    "min": 0.05,
    "max": 0.8,
    "step": 0.02,
    "val": 0.22
  },
  "defaults": {
    "ratio": 2.75,
    "I0": 3.2,
    "dI": 2.6,
    "lfo": 0.08,
    "atk": 0.001,
    "rel": 0.25,
    "vol": 0.82,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Geister-Kalimba",
      "r": 2.75,
      "i": 3.2,
      "d": 2.6
    },
    {
      "name": "Gedämpfte Tines",
      "r": 3.8,
      "i": 4,
      "d": 3
    },
    {
      "name": "Holzbox Klick",
      "r": 1.7,
      "i": 2,
      "d": 1.5
    }
  ]
},
  {
  "id": 77,
  "bank": "H",
  "keyDisplay": "8",
  "name": "Bio-Acoustic Cicada Pulse",
  "color": "#6c5ce7",
  "desc": "Biomimetische Zikaden-Tymbal-Muskelkontraktionen mit hochfrequenten Klick-Salven",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>n</sub> [δ(<em>t</em> - n·Δ<em>T</em>) * A·sin(2π<em>f</em><sub>tymbal</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))]",
  "formulaSub": "Zikaden Tymbal Klick-Salven",
  "customParam": {
    "name": "Salven-Dichte",
    "min": 0.2,
    "max": 4,
    "step": 0.1,
    "val": 2.1
  },
  "defaults": {
    "ratio": 5.5,
    "I0": 3.5,
    "dI": 3,
    "lfo": 0.2,
    "atk": 0.002,
    "rel": 0.22,
    "vol": 0.76,
    "oct": 2,
    "latch": false
  },
  "presets": [
    {
      "name": "Zikadenschwarm",
      "r": 5.5,
      "i": 3.5,
      "d": 3
    },
    {
      "name": "Grillen-Chirpen",
      "r": 4,
      "i": 2.8,
      "d": 2.2
    },
    {
      "name": "Mikro-Insekten",
      "r": 7.2,
      "i": 4.2,
      "d": 3.5
    }
  ]
},
  {
  "id": 78,
  "bank": "H",
  "keyDisplay": "9",
  "name": "Raindrop on Tin Roof",
  "color": "#0984e3",
  "desc": "Stochastischer Regentropfen-Aufprall auf dünnem Blechdach mit mikrotonaler Biegung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>1</sub>·sin(2π<em>f</em><sub>m1</sub><em>t</em>) + <em>I</em><sub>2</sub>·sin(2π<em>f</em><sub>m2</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "Blechdach Platten-Resonanz",
  "customParam": {
    "name": "Blech-Spannung",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "ratio": 3.42,
    "I0": 2.8,
    "dI": 2.2,
    "lfo": 0.1,
    "atk": 0.001,
    "rel": 0.26,
    "vol": 0.8,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Blechdach Regen",
      "r": 3.42,
      "i": 2.8,
      "d": 2.2
    },
    {
      "name": "Metallwanne",
      "r": 2.15,
      "i": 3.6,
      "d": 2.8
    },
    {
      "name": "Tropfenfeuer",
      "r": 5.1,
      "i": 4.2,
      "d": 3.5
    }
  ]
},
  {
  "id": 79,
  "bank": "H",
  "keyDisplay": "0",
  "name": "Pebble Cascade Scatter",
  "color": "#636e72",
  "desc": "Granulare Lawine kleiner Kieselsteine auf Marmor mit stochastischem Zerfall",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ <em>a</em><sub>i</sub>·sin(2π<em>f</em><sub>i</sub><em>t</em> + <em>I</em><sub>i</sub>·sin(2π<em>r</em><sub>i</sub><em>f</em><sub>i</sub><em>t</em>))·<em>e</em><sup>-(t-t<sub>i</sub>)/τ<sub>i</sub></sup>",
  "formulaSub": "Granulare Kiesel-Kaskade",
  "customParam": {
    "name": "Kiesel-Streuung",
    "min": 0.3,
    "max": 3.5,
    "step": 0.1,
    "val": 1.9
  },
  "defaults": {
    "ratio": 3.85,
    "I0": 3.2,
    "dI": 2.6,
    "lfo": 0.14,
    "atk": 0.002,
    "rel": 0.38,
    "vol": 0.79,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Kiesel Kaskade",
      "r": 3.85,
      "i": 3.2,
      "d": 2.6
    },
    {
      "name": "Marmor Klicker",
      "r": 5.2,
      "i": 4,
      "d": 3
    },
    {
      "name": "Schiefer Rutsch",
      "r": 2.4,
      "i": 2.5,
      "d": 2
    }
  ]
},
  {
  "id": 80,
  "bank": "I",
  "keyDisplay": "1",
  "name": "Pointillist Microsound Click",
  "color": "#a29bfe",
  "desc": "1ms Sub-Millisekunden Impuls mit ultrakurzer spektraler FM-Seitenband-Aufflackerung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·δ<sub>1ms</sub>(<em>t</em>)·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>pulse</sub>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Sub-Millisekunden Spektral-Impuls",
  "customParam": {
    "name": "Impuls-Schärfe",
    "min": 0.5,
    "max": 6,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "ratio": 4,
    "I0": 5,
    "dI": 4,
    "lfo": 0.05,
    "atk": 0.0005,
    "rel": 0.04,
    "vol": 0.88,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Pointillist Click",
      "r": 4,
      "i": 5,
      "d": 4
    },
    {
      "name": "Laser Needle",
      "r": 7.5,
      "i": 6,
      "d": 5
    },
    {
      "name": "Sub-Tick",
      "r": 1,
      "i": 4,
      "d": 3
    }
  ]
},
  {
  "id": 81,
  "bank": "I",
  "keyDisplay": "2",
  "name": "Quantum State Collapse",
  "color": "#e056fd",
  "desc": "Wellenfunktions-Kollaps mit stochastischem Phasensprung und Quantenrauschen",
  "formulaLatex": "Ψ(<em>t</em>) → |ψ<sub>n</sub>⟩, <em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + θ<sub>rand</sub> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "Stochastischer Wellenfunktions-Kollaps",
  "customParam": {
    "name": "Quanten-Fluktuation",
    "min": 0.2,
    "max": 4.5,
    "step": 0.1,
    "val": 2.3
  },
  "defaults": {
    "ratio": 2.618,
    "I0": 3.6,
    "dI": 3,
    "lfo": 0.18,
    "atk": 0.001,
    "rel": 0.12,
    "vol": 0.84,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Zustands-Kollaps",
      "r": 2.618,
      "i": 3.6,
      "d": 3
    },
    {
      "name": "Vakuum-Fluktuation",
      "r": 4.236,
      "i": 4.8,
      "d": 3.8
    },
    {
      "name": "Spin-Flip",
      "r": 1.618,
      "i": 2.5,
      "d": 2
    }
  ]
},
  {
  "id": 82,
  "bank": "I",
  "keyDisplay": "3",
  "name": "Tape Splicer Crinkle",
  "color": "#ff7979",
  "desc": "Analoger Tonband-Rasierklingen-Klebeschnitt mit Oxidpartikel-Knacks",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·[sin(2π<em>f</em><sub>c</sub><em>t</em>) + <em>I</em>·N(<em>t</em>)]·<em>e</em><sup>-t/0.02</sup>",
  "formulaSub": "Oxidband Schnitt-Transiente",
  "customParam": {
    "name": "Bandoxid-Rauheit",
    "min": 0.3,
    "max": 4,
    "step": 0.1,
    "val": 1.8
  },
  "defaults": {
    "ratio": 3.14,
    "I0": 4,
    "dI": 3.2,
    "lfo": 0.08,
    "atk": 0.0008,
    "rel": 0.06,
    "vol": 0.82,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Klebeschnitt",
      "r": 3.14,
      "i": 4,
      "d": 3.2
    },
    {
      "name": "Tonband-Knistern",
      "r": 5.5,
      "i": 4.5,
      "d": 3.8
    },
    {
      "name": "Kassetten-Klick",
      "r": 1.8,
      "i": 3,
      "d": 2.2
    }
  ]
},
  {
  "id": 83,
  "bank": "I",
  "keyDisplay": "4",
  "name": "Silicon Micro-Relay Click",
  "color": "#686de0",
  "desc": "Elektromechanisches Miniatur-Relais-Prellen mit Mikro-Funkenentladung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·[δ(<em>t</em>) + 0.4·δ(<em>t</em>-0.003)] * [sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))]",
  "formulaSub": "Relais Kontakt-Prellen",
  "customParam": {
    "name": "Kontakt-Prellen",
    "min": 0.1,
    "max": 3,
    "step": 0.05,
    "val": 1.4
  },
  "defaults": {
    "ratio": 2.85,
    "I0": 3.8,
    "dI": 3,
    "lfo": 0.06,
    "atk": 0.0006,
    "rel": 0.08,
    "vol": 0.85,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Silizium-Relais",
      "r": 2.85,
      "i": 3.8,
      "d": 3
    },
    {
      "name": "Schaltkreis-Funke",
      "r": 6.2,
      "i": 5,
      "d": 4
    },
    {
      "name": "Mikroschalter",
      "r": 1.4,
      "i": 2.8,
      "d": 2
    }
  ]
},
  {
  "id": 84,
  "bank": "I",
  "keyDisplay": "5",
  "name": "Granular Dust Cloud",
  "color": "#be2edd",
  "desc": "Wolke aus 5-15ms Mikrokörnern über tonhöhenversetzter FM-Trägerstruktur",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>g</sub> G(<em>t</em> - <em>t</em><sub>g</sub>)·sin(2π<em>f</em><sub>g</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Asynchrones Granular-Staub Partikelfeld",
  "customParam": {
    "name": "Korn-Dichte",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.6
  },
  "defaults": {
    "ratio": 3.33,
    "I0": 2.8,
    "dI": 2.4,
    "lfo": 0.16,
    "atk": 0.003,
    "rel": 0.28,
    "vol": 0.78,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Granularstaub",
      "r": 3.33,
      "i": 2.8,
      "d": 2.4
    },
    {
      "name": "Mikro-Pollen",
      "r": 5.8,
      "i": 3.8,
      "d": 3.2
    },
    {
      "name": "Nebel-Körner",
      "r": 1.9,
      "i": 2,
      "d": 1.6
    }
  ]
},
  {
  "id": 85,
  "bank": "I",
  "keyDisplay": "6",
  "name": "Bit-Crush Kinetic Pop",
  "color": "#ff5252",
  "desc": "Nichtlinear heruntergerechneter kinetischer Transienten-Pop mit Samplerate-Jitter",
  "formulaLatex": "<em>y</em>(<em>t</em>) = Q<sub>bit</sub>(sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>)))·<em>e</em><sup>-t/0.05</sup>",
  "formulaSub": "Quantisierungs-Transienten-Reduktion",
  "customParam": {
    "name": "Crush-Tiefe",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.4
  },
  "defaults": {
    "ratio": 2,
    "I0": 4.5,
    "dI": 3.5,
    "lfo": 0.1,
    "atk": 0.001,
    "rel": 0.09,
    "vol": 0.86,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Bitcrush Pop",
      "r": 2,
      "i": 4.5,
      "d": 3.5
    },
    {
      "name": "8-Bit Holzblock",
      "r": 3.5,
      "i": 5.2,
      "d": 4
    },
    {
      "name": "Chiptune Zap",
      "r": 1,
      "i": 3,
      "d": 2.2
    }
  ]
},
  {
  "id": 86,
  "bank": "I",
  "keyDisplay": "7",
  "name": "Ionizing Cloud Chamber",
  "color": "#48dbfb",
  "desc": "Geiger-Partikel-Ionisierungsspuren mit unvorhersehbaren Poisson-Eintreffintervallen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>k</sub> [P(Δ<em>t</em>) * A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/0.015</sup>]",
  "formulaSub": "Nebelkammer Ionisationsspuren",
  "customParam": {
    "name": "Strahlungs-Rate",
    "min": 0.2,
    "max": 4,
    "step": 0.1,
    "val": 1.9
  },
  "defaults": {
    "ratio": 4.8,
    "I0": 3.8,
    "dI": 3,
    "lfo": 0.12,
    "atk": 0.0005,
    "rel": 0.07,
    "vol": 0.8,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Nebelkammer",
      "r": 4.8,
      "i": 3.8,
      "d": 3
    },
    {
      "name": "Alpha-Teilchen",
      "r": 7,
      "i": 5,
      "d": 4.2
    },
    {
      "name": "Gammastrom",
      "r": 2.2,
      "i": 2.8,
      "d": 2
    }
  ]
},
  {
  "id": 87,
  "bank": "I",
  "keyDisplay": "8",
  "name": "Sub-Bass Air Burst",
  "color": "#222f3e",
  "desc": "15Hz Druckluft-Kolbenstoß mit extrem tiefem Infraschall-Impuls und weichem Ausatmen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π·15<em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>c</sub><em>t</em>))·<em>e</em><sup>-t/0.25</sup>",
  "formulaSub": "Pneumatischer Sub-Druckimpuls",
  "customParam": {
    "name": "Druckluft-Schub",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "ratio": 0.25,
    "I0": 4.8,
    "dI": 3.8,
    "lfo": 0.04,
    "atk": 0.005,
    "rel": 0.35,
    "vol": 0.9,
    "oct": -3,
    "latch": false
  },
  "presets": [
    {
      "name": "Druckluftstoß",
      "r": 0.25,
      "i": 4.8,
      "d": 3.8
    },
    {
      "name": "Sub-Impuls 20Hz",
      "r": 0.5,
      "i": 3.5,
      "d": 2.8
    },
    {
      "name": "Kammervakuum",
      "r": 0.125,
      "i": 5.5,
      "d": 4.5
    }
  ]
},
  {
  "id": 88,
  "bank": "I",
  "keyDisplay": "9",
  "name": "Optical CD Tracking Error",
  "color": "#ff9ff3",
  "desc": "Optischer Laser-Spurfehler mit hochfrequentem Ringmodulator-Chirp und Servo-Sprung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em>)·sin(2π(<em>f</em><sub>m</sub> + Δ<em>f</em>·sin(2π500<em>t</em>))<em>t</em>)·<em>e</em><sup>-t/0.03</sup>",
  "formulaSub": "Laser-Servo Tracking Glitch",
  "customParam": {
    "name": "Tracking-Glitch",
    "min": 0.5,
    "max": 6,
    "step": 0.1,
    "val": 3.1
  },
  "defaults": {
    "ratio": 3.75,
    "I0": 4.2,
    "dI": 3.5,
    "lfo": 0.15,
    "atk": 0.0004,
    "rel": 0.05,
    "vol": 0.82,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Laser Tracking Error",
      "r": 3.75,
      "i": 4.2,
      "d": 3.5
    },
    {
      "name": "CD-Glitch Chirp",
      "r": 6.5,
      "i": 5.5,
      "d": 4.5
    },
    {
      "name": "Servo Stutter",
      "r": 1.8,
      "i": 3,
      "d": 2.2
    }
  ]
},
  {
  "id": 89,
  "bank": "I",
  "keyDisplay": "0",
  "name": "Josephson Quantum Click",
  "color": "#5f27cd",
  "desc": "Supraleitender Josephson-Tunneleffekt-Spannungsstufen-Impuls mit ultrapräzisem Transienten-Biss",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·2.718<em>f</em><sub>c</sub><em>t</em>))·<em>e</em><sup>-t/0.025</sup>",
  "formulaSub": "Josephson Tunnelkontakt Quantensprung",
  "customParam": {
    "name": "Tunnel-Spannung",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.7
  },
  "defaults": {
    "ratio": 2.718,
    "I0": 4,
    "dI": 3.2,
    "lfo": 0.08,
    "atk": 0.0005,
    "rel": 0.045,
    "vol": 0.86,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Josephson Click",
      "r": 2.718,
      "i": 4,
      "d": 3.2
    },
    {
      "name": "Supraleiter-Schlag",
      "r": 4.5,
      "i": 5,
      "d": 4
    },
    {
      "name": "Quanten-Tick",
      "r": 1.414,
      "i": 3,
      "d": 2.5
    }
  ]
},
  {
  "id": 90,
  "bank": "J",
  "keyDisplay": "1",
  "name": "Ciat-Lonbarde Paper Wire",
  "color": "#ffa502",
  "desc": "Peter Blasser Holzschaltungs-Rückkopplung berührt mit leitfähigem Kohlepapier",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·tanh(γ·[sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em> + φ<sub>paper</sub>))])",
  "formulaSub": "Ciat-Lonbarde Papier-Rückkopplung",
  "customParam": {
    "name": "Papier-Leitwert",
    "min": 0.2,
    "max": 4.5,
    "step": 0.1,
    "val": 2.1
  },
  "defaults": {
    "ratio": 1.732,
    "I0": 3.5,
    "dI": 2.8,
    "lfo": 0.1,
    "atk": 0.003,
    "rel": 0.32,
    "vol": 0.82,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Papierdraht",
      "r": 1.732,
      "i": 3.5,
      "d": 2.8
    },
    {
      "name": "Holzbox Resonanz",
      "r": 2.5,
      "i": 4.2,
      "d": 3.5
    },
    {
      "name": "Tast-Kollision",
      "r": 0.866,
      "i": 2.6,
      "d": 2
    }
  ]
},
  {
  "id": 91,
  "bank": "J",
  "keyDisplay": "2",
  "name": "Chaotic Double Pendulum",
  "color": "#ff6348",
  "desc": "Nicht-periodische Doppelpendel-Gelenkkollisionen im 2-Achsen-Phasenraum",
  "formulaLatex": "θ̈<sub>1,2</sub>(<em>t</em>) = f(θ<sub>1</sub>, θ<sub>2</sub>, θ̇<sub>1</sub>, θ̇<sub>2</sub>), <em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub>(θ)<em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Doppelpendel Phasen-Kollision",
  "customParam": {
    "name": "Pendel-Energie",
    "min": 0.3,
    "max": 4,
    "step": 0.1,
    "val": 1.9
  },
  "defaults": {
    "ratio": 2.414,
    "I0": 3,
    "dI": 2.5,
    "lfo": 0.15,
    "atk": 0.002,
    "rel": 0.24,
    "vol": 0.8,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Doppelpendel",
      "r": 2.414,
      "i": 3,
      "d": 2.5
    },
    {
      "name": "Chaotischer Stoß",
      "r": 3.8,
      "i": 4.2,
      "d": 3.6
    },
    {
      "name": "Schwung-Klick",
      "r": 1.2,
      "i": 2,
      "d": 1.5
    }
  ]
},
  {
  "id": 92,
  "bank": "J",
  "keyDisplay": "3",
  "name": "Wind Chime Aeolian Drift",
  "color": "#7bed9f",
  "desc": "Asynchrone kinetische Bambus- und Glasstäbe im sanften Windhauch kollidierend",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ <em>A</em><sub>k</sub>·sin(2π<em>f</em><sub>k</sub><em>t</em> + <em>I</em><sub>k</sub>·sin(2π<em>r</em><sub>k</sub><em>f</em><sub>k</sub><em>t</em>))·<em>e</em><sup>-(t-t<sub>k</sub>)/τ</sup>",
  "formulaSub": "Äolische Windspiel-Kollisionen",
  "customParam": {
    "name": "Wind-Böen Dichte",
    "min": 0.4,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "ratio": 3.162,
    "I0": 2.6,
    "dI": 2,
    "lfo": 0.12,
    "atk": 0.002,
    "rel": 0.48,
    "vol": 0.78,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Windspiel Drift",
      "r": 3.162,
      "i": 2.6,
      "d": 2
    },
    {
      "name": "Glastropfen Spiel",
      "r": 5.5,
      "i": 3.8,
      "d": 3
    },
    {
      "name": "Bambus Röhren",
      "r": 2,
      "i": 2.2,
      "d": 1.6
    }
  ]
},
  {
  "id": 93,
  "bank": "J",
  "keyDisplay": "4",
  "name": "Turing Shift-Register Pulse",
  "color": "#70a1ff",
  "desc": "8-Bit pseudo-zufälliges lineares Feedback-Schieberegister (LFSR) mit getakteten Klickfolgen",
  "formulaLatex": "<em>b</em><sub>n</sub> = <em>b</em><sub>n-1</sub> ⊕ <em>b</em><sub>n-3</sub>, <em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub>(<em>b</em><sub>n</sub>)<em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "8-Bit Galois LFSR Schieberegister",
  "customParam": {
    "name": "Register-Feedback",
    "min": 0.2,
    "max": 4.5,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "ratio": 2.5,
    "I0": 3.6,
    "dI": 3,
    "lfo": 0.18,
    "atk": 0.001,
    "rel": 0.15,
    "vol": 0.84,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Turing Puls",
      "r": 2.5,
      "i": 3.6,
      "d": 3
    },
    {
      "name": "Pseudo-Random Loop",
      "r": 4,
      "i": 4.8,
      "d": 3.8
    },
    {
      "name": "LFSR Takt-Klick",
      "r": 1.25,
      "i": 2.4,
      "d": 1.8
    }
  ]
},
  {
  "id": 94,
  "bank": "J",
  "keyDisplay": "5",
  "name": "Sub-Zero Ice Fracture",
  "color": "#70d6ff",
  "desc": "Tektonisches Brechen von gefrorenem Seeeis unter Spannung mit dispersiven Hochton-Peitschen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>crack</sub>(<em>t</em>)<em>t</em> + <em>I</em>(<em>t</em>)·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>",
  "formulaSub": "Dispersive See-Eis Riss-Akustik",
  "customParam": {
    "name": "Eis-Spannung",
    "min": 0.4,
    "max": 5,
    "step": 0.1,
    "val": 2.9
  },
  "defaults": {
    "ratio": 3.65,
    "I0": 3.8,
    "dI": 3.2,
    "lfo": 0.08,
    "atk": 0.0008,
    "rel": 0.28,
    "vol": 0.82,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Seeeis-Bruch",
      "r": 3.65,
      "i": 3.8,
      "d": 3.2
    },
    {
      "name": "Eis-Peitsche",
      "r": 6.2,
      "i": 5,
      "d": 4.2
    },
    {
      "name": "Gletscher-Knacks",
      "r": 1.8,
      "i": 3,
      "d": 2.2
    }
  ]
},
  {
  "id": 95,
  "bank": "J",
  "keyDisplay": "6",
  "name": "Magnetic Ferrofluid Ripple",
  "color": "#2f3542",
  "desc": "Flüssiges Eisen-Ferrofluid formt stachelige Spitzen unter pulsierendem Magnetfeld-Gradienten",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·tanh(sin(2π<em>f</em><sub>m</sub><em>t</em>)))·<em>e</em><sup>-t/0.18</sup>",
  "formulaSub": "Ferromagnetische Flüssigkeits-Spitzen",
  "customParam": {
    "name": "Magnetfeld-Gradient",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.7
  },
  "defaults": {
    "ratio": 1.5,
    "I0": 4.2,
    "dI": 3.4,
    "lfo": 0.1,
    "atk": 0.004,
    "rel": 0.22,
    "vol": 0.86,
    "oct": -1,
    "latch": false
  },
  "presets": [
    {
      "name": "Ferrofluid Ripple",
      "r": 1.5,
      "i": 4.2,
      "d": 3.4
    },
    {
      "name": "Magnet-Stacheln",
      "r": 2.8,
      "i": 5,
      "d": 4
    },
    {
      "name": "Flüssiges Metall",
      "r": 0.75,
      "i": 3,
      "d": 2.4
    }
  ]
},
  {
  "id": 96,
  "bank": "J",
  "keyDisplay": "7",
  "name": "Crystal Lattice Cleavage",
  "color": "#eccc68",
  "desc": "Piezoelektrische Kristall-Spaltung entlang atomarer Gitterebenen mit obertonreichem Nachklingen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π·4.33<em>f</em><sub>c</sub><em>t</em>))·<em>e</em><sup>-t/0.35</sup>",
  "formulaSub": "Piezoelektrische Kristall-Gitterspaltung",
  "customParam": {
    "name": "Gitter-Härte",
    "min": 0.4,
    "max": 4,
    "step": 0.1,
    "val": 2.1
  },
  "defaults": {
    "ratio": 4.33,
    "I0": 3.4,
    "dI": 2.8,
    "lfo": 0.08,
    "atk": 0.0006,
    "rel": 0.35,
    "vol": 0.8,
    "oct": 1,
    "latch": false
  },
  "presets": [
    {
      "name": "Kristallgitter",
      "r": 4.33,
      "i": 3.4,
      "d": 2.8
    },
    {
      "name": "Quarz-Spaltung",
      "r": 6.8,
      "i": 4.5,
      "d": 3.8
    },
    {
      "name": "Saphir-Klick",
      "r": 2.5,
      "i": 2.6,
      "d": 2
    }
  ]
},
  {
  "id": 97,
  "bank": "J",
  "keyDisplay": "8",
  "name": "Cosmic Ray Muon Shower",
  "color": "#ff4757",
  "desc": "Sekundärer Myonen-Teilchenschauer aus der oberen Atmosphäre trifft Szintillationsdetektor",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑ δ(<em>t</em> - <em>t</em><sub>muon</sub>) * [A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/0.012</sup>]",
  "formulaSub": "Atmosphärischer Myonen-Schauer",
  "customParam": {
    "name": "Myonen-Energie",
    "min": 0.5,
    "max": 5.5,
    "step": 0.1,
    "val": 3
  },
  "defaults": {
    "ratio": 5.25,
    "I0": 4.5,
    "dI": 3.8,
    "lfo": 0.14,
    "atk": 0.0004,
    "rel": 0.05,
    "vol": 0.85,
    "oct": 2,
    "latch": false
  },
  "presets": [
    {
      "name": "Myonen-Schauer",
      "r": 5.25,
      "i": 4.5,
      "d": 3.8
    },
    {
      "name": "Höhenstrahlung",
      "r": 8,
      "i": 5.8,
      "d": 4.8
    },
    {
      "name": "Szintillator",
      "r": 3,
      "i": 3.2,
      "d": 2.5
    }
  ]
},
  {
  "id": 98,
  "bank": "J",
  "keyDisplay": "9",
  "name": "Neuronal Membrane Spike",
  "color": "#2ed573",
  "desc": "Hodgkin-Huxley Aktionspotenzial-Depolarisationsklick mit Ionenkanal-Porenöffnung",
  "formulaLatex": "<em>V</em>(<em>t</em>) = <em>V</em><sub>rest</sub> + Δ<em>V</em>·(<em>t</em>/τ)·<em>e</em><sup>-t/τ</sup>, <em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Hodgkin-Huxley Ionen-Spike",
  "customParam": {
    "name": "Ionen-Kanal Leitwert",
    "min": 0.3,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "ratio": 2.3,
    "I0": 3.2,
    "dI": 2.6,
    "lfo": 0.1,
    "atk": 0.001,
    "rel": 0.14,
    "vol": 0.82,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Neuronaler Spike",
      "r": 2.3,
      "i": 3.2,
      "d": 2.6
    },
    {
      "name": "Axon-Feuer",
      "r": 4.1,
      "i": 4.2,
      "d": 3.5
    },
    {
      "name": "Dendriten-Puls",
      "r": 1.15,
      "i": 2.2,
      "d": 1.6
    }
  ]
},
  {
  "id": 99,
  "bank": "J",
  "keyDisplay": "0",
  "name": "Clock Divider Polymeter",
  "color": "#e84118",
  "desc": "Poly-temporale euklidische Sub-Taktteiler-Gatterimpulse für organisch verschobene Mikrorhythmen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = ∑<sub>m=2,3,5</sub> [A<sub>m</sub>·sin(2π·(<em>f</em><sub>c</sub>/m)<em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))·<em>e</em><sup>-t/τ</sup>]",
  "formulaSub": "Euklidische Sub-Takt Polymetrik",
  "customParam": {
    "name": "Teiler-Ratio",
    "min": 0.5,
    "max": 4.5,
    "step": 0.1,
    "val": 2.5
  },
  "defaults": {
    "ratio": 2,
    "I0": 3.8,
    "dI": 3,
    "lfo": 0.12,
    "atk": 0.001,
    "rel": 0.18,
    "vol": 0.84,
    "oct": 0,
    "latch": false
  },
  "presets": [
    {
      "name": "Polymeter Takt",
      "r": 2,
      "i": 3.8,
      "d": 3
    },
    {
      "name": "Euklid 3:5:7",
      "r": 3.33,
      "i": 4.5,
      "d": 3.6
    },
    {
      "name": "Mikro-Gatter",
      "r": 1,
      "i": 2.6,
      "d": 2
    }
  ]
}
];

