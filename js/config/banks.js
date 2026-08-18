"use strict";

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


/* ============================================================
   Zustand & Datenstrukturen
   ============================================================ */
let activeSynthIdx = 0;
const lorenzState = { x: 0.1, y: 0, z: 0 };
const OSC_PARAM_KEYS = ["ratio", "I0", "dI", "lfo", "customParam", "vibDepth"];

const PARAM_BOUNDS = {
  ratio: { min: 0.05, max: 9.0, step: 0.005 },
  I0: { min: 0.0, max: 12.0, step: 0.01 },
  dI: { min: 0.0, max: 8.0, step: 0.01 },
  lfo: { min: 0.005, max: 16.0, step: 0.005 },
  customParam: { min: 0, max: 10, step: 0.01 },
  vibDepth: { min: 0.0, max: 24.0, step: 0.1 }
};

const synthInstances = SYNTH_DEFS.map(def => {
  const oscs = {};
  OSC_PARAM_KEYS.forEach(k => {
    let minV = 0.5, maxV = 2.5, speed = 25;
    if (k === "ratio") { minV = Math.max(0.1, def.defaults.ratio * 0.5); maxV = def.defaults.ratio * 1.8; speed = 20; }
    if (k === "I0") { minV = Math.max(0, def.defaults.I0 * 0.4); maxV = def.defaults.I0 * 1.6; speed = 25; }
    if (k === "dI") { minV = 0.2; maxV = def.defaults.dI * 1.5; speed = 30; }
    if (k === "lfo") { minV = 0.01; maxV = Math.max(0.5, def.defaults.lfo * 3); speed = 15; }
    if (k === "customParam") { minV = def.customParam.min; maxV = def.customParam.max; speed = 30; }
    if (k === "vibDepth") { minV = 0.5; maxV = 10.0; speed = 20; }
    oscs[k] = { enabled: false, min: minV, max: maxV, speed, phase: Math.random() * Math.PI * 2 };
  });

  const defParams = { ...def.defaults };
  if (defParams.vibDepth === undefined) defParams.vibDepth = 4.5;

  return {
    def,
    params: defParams,
    customVal: def.customParam.val,
    vibrato: {
      enabled: true,
      depth: 4.5,
      rate: 5.2,
      delay: 0.25,
      shape: "sine",
      humanize: 25
    },
    oscillators: oscs,
    voices: new Map(),
    bus: null,
    lfoOsc: null,
    lfoPhase: Math.random() * Math.PI * 2,
    primary: { f: 130.813, fm: 130.813 * def.defaults.ratio }
  };
});

const GLOBAL = { master: 0.65, wet: 0.5, oct: 0 };
const BASE_FREQ = 130.813;
const NOTES = ["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","H","C"];
const LETTERS = ["a","w","s","e","d","f","t","g","z","h","u","j","k"];
const BLACK_KEYS = [1, 3, 6, 8, 10];

let ctx = null, masterGain, comp, dryGain, wetGain, conv, analyser, cosWave;
let stackMasterGain = null;
let timeData, freqData;
let lastFrameT = 0;

/* ============================================================
   Web Audio Initialisierung
   ============================================================ */
function initAudio() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();

  cosWave = ctx.createPeriodicWave(new Float32Array([0, 1]), new Float32Array([0, 0]));

  masterGain = ctx.createGain();
  masterGain.gain.value = GLOBAL.master;

  comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -12; comp.knee.value = 20; comp.ratio.value = 4.5;
  comp.attack.value = 0.015; comp.release.value = 0.35;

  masterGain.connect(comp).connect(ctx.destination);

  dryGain = ctx.createGain(); dryGain.gain.value = 1 - GLOBAL.wet * 0.5;
  wetGain = ctx.createGain(); wetGain.gain.value = GLOBAL.wet;

  conv = ctx.createConvolver();
  conv.buffer = createReverbIR(5.5, 2.5);

  dryGain.connect(masterGain);
  conv.connect(wetGain).connect(masterGain);

  stackMasterGain = ctx.createGain();
  stackMasterGain.gain.value = 1.0;
  stackMasterGain.connect(dryGain);
  stackMasterGain.connect(conv);

  analyser = ctx.createAnalyser();
  analyser.fftSize = 8192; analyser.smoothingTimeConstant = 0.6;
  analyser.minDecibels = -105; analyser.maxDecibels = -5;

  masterGain.connect(analyser);

  timeData = new Float32Array(analyser.fftSize);
  freqData = new Float32Array(analyser.frequencyBinCount);

  synthInstances.forEach(inst => {
    inst.bus = ctx.createGain();
    inst.bus.gain.value = inst.params.vol;
    inst.bus.connect(dryGain);
    inst.bus.connect(conv);

    inst.lfoOsc = ctx.createOscillator();
    inst.lfoOsc.frequency.value = inst.params.lfo;
    inst.lfoOsc.start();
  });

  initLoopAudio();
  lastFrameT = ctx.currentTime;
}

function createReverbIR(durationSec, decayFactor) {
  const len = Math.floor(ctx.sampleRate * durationSec);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / len;
      const white = Math.random() * 2 - 1;
      lp = lp * 0.72 + white * 0.28;
      const pre = i < ctx.sampleRate * 0.025 ? i / (ctx.sampleRate * 0.025) : 1;
      data[i] = lp * Math.pow(1 - t, decayFactor) * pre;
    }
  }
  return buf;
}

const getFreq = (sem, synthOct = 0) => BASE_FREQ * Math.pow(2, sem / 12 + synthOct + GLOBAL.oct);

/* ============================================================
   Stimmen-Erzeugung
   ============================================================ */
function noteOn(sem, synthIdx = activeSynthIdx) {
  initAudio();
  if (ctx.state === "suspended") ctx.resume();

  const inst = synthInstances[synthIdx];
  if (inst.voices.has(sem)) return;

  const now = ctx.currentTime;
  const f = getFreq(sem, inst.params.oct);
  const fm = f * inst.params.ratio;
  inst.primary = { f, fm };

  const voiceGain = 0.18;
  const env = ctx.createGain();
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(voiceGain, now + Math.max(0.005, inst.params.atk));

  let voiceObj = { f, fm, t0: now, env, nodes: [] };

  switch(synthIdx) {
    case 0: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm * 0.5;
      const mod2G = ctx.createGain(); mod2G.gain.value = inst.params.dI * fm * 0.8;
      mod.connect(modG).connect(car.frequency);
      mod2.connect(mod2G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); mod2.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, mod2, mod2G };
      break;
    }
    case 1: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.params.dI * 0.5) * fm;
      const shaper = ctx.createWaveShaper();
      const n_samples = 1024, curve = new Float32Array(n_samples);
      const gamma = inst.customVal;
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        const T3 = 4 * x * x * x - 3 * x;
        const T5 = 16 * Math.pow(x, 5) - 20 * x * x * x + 5 * x;
        curve[i] = Math.tanh(gamma * (0.6 * x + 0.3 * T3 + 0.2 * T5));
      }
      shaper.curve = curve; shaper.oversample = "4x";
      mod.connect(modG).connect(car.frequency);
      car.connect(shaper).connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, shaper };
      break;
    }
    case 2: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm;
      mod.connect(modG).connect(car.frequency);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, lfoG };
      break;
    }
    case 3: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const alpha = inst.customVal;
      const freqScale = Math.pow(Math.max(1, inst.params.ratio), -alpha);
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm * freqScale;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 4: {
      const carL = ctx.createOscillator(); carL.frequency.value = f;
      const carR = ctx.createOscillator(); carR.frequency.value = f * 1.003;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm;
      const mod2 = ctx.createOscillator(); mod2.setPeriodicWave(cosWave); mod2.frequency.value = fm * 1.5;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const mod2G = ctx.createGain(); mod2G.gain.value = inst.params.dI * fm;
      mod1.connect(mod1G).connect(carL.frequency);
      mod2.connect(mod2G).connect(carR.frequency);
      const merger = ctx.createChannelMerger(2);
      carL.connect(merger, 0, 0); carR.connect(merger, 0, 1);
      merger.connect(env).connect(inst.bus);
      mod1.start(now); mod2.start(now); carL.start(now); carR.start(now);
      voiceObj = { ...voiceObj, car: carL, carR, mod: mod1, mod2, modG: mod1G, mod2G };
      break;
    }
    case 5: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 6: {
      const clusterCars = [];
      const clusterMix = ctx.createGain(); clusterMix.gain.value = 0.25;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG);
      for (let k = -2; k <= 2; k++) {
        const c = ctx.createOscillator();
        c.frequency.value = f + k * (inst.customVal * 0.4);
        modG.connect(c.frequency);
        c.connect(clusterMix);
        c.start(now);
        clusterCars.push(c);
      }
      clusterMix.connect(env).connect(inst.bus);
      mod.start(now);
      voiceObj = { ...voiceObj, car: clusterCars[0], clusterCars, mod, modG };
      break;
    }
    case 7: {
      const car = ctx.createOscillator();
      const peakF = f * (1 + inst.customVal * 0.3);
      car.frequency.setValueAtTime(peakF, now);
      car.frequency.exponentialRampToValueAtTime(f, now + 0.18);
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.params.dI) * fm;
      modG.gain.setTargetAtTime(inst.params.I0 * fm, now + 0.01, 0.12);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 8: {
      const f1 = 600 + inst.customVal * 250, f2 = 1400 - inst.customVal * 400;
      const car1 = ctx.createOscillator(); car1.frequency.value = f1;
      const car2 = ctx.createOscillator(); car2.frequency.value = f2;
      const mod = ctx.createOscillator(); mod.frequency.value = f;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * f;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const vMix = ctx.createGain(); vMix.gain.value = 0.5;
      car1.connect(vMix); car2.connect(vMix);
      vMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car2, mod, modG };
      break;
    }
    case 9: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const carSub = ctx.createOscillator(); carSub.frequency.value = f * 0.5;
      const carHigh = ctx.createOscillator(); carHigh.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG);
      modG.connect(car.frequency); modG.connect(carSub.frequency); modG.connect(carHigh.frequency);
      const wMix = ctx.createGain(); wMix.gain.value = 0.35;
      car.connect(wMix); carSub.connect(wMix); carHigh.connect(wMix);
      wMix.connect(env).connect(inst.bus);
      mod.start(now); car.start(now); carSub.start(now); carHigh.start(now);
      voiceObj = { ...voiceObj, car, carSub, carHigh, mod, modG };
      break;
    }
    case 10: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm;
      mod.connect(modG).connect(car.frequency);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, lfoG };
      break;
    }
    case 11: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain();
      const peakD = (inst.params.I0 + inst.params.dI) * fm;
      const baseD = Math.max(0.1, inst.params.I0 * fm);
      modG.gain.setValueAtTime(peakD, now);
      const tau = Math.max(0.1, inst.customVal);
      modG.gain.setTargetAtTime(baseD, now + 0.01, tau);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 12: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm;
      const vibOsc = ctx.createOscillator(); vibOsc.frequency.value = 5.5;
      const vibGain = ctx.createGain(); vibGain.gain.value = inst.customVal;
      vibOsc.connect(vibGain).connect(car.frequency);
      vibOsc.start(now);
      mod.connect(modG).connect(car.frequency);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, lfoG, vibOsc, vibGain };
      break;
    }
    case 13: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.setPeriodicWave(cosWave); mod1.frequency.value = fm;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const fm2 = f * (inst.params.ratio * 1.5);
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm2;
      const mod2G = ctx.createGain(); mod2G.gain.value = inst.customVal * fm2;
      mod2.connect(mod2G).connect(mod1.frequency);
      mod1.connect(mod1G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod2.start(now); mod1.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, mod2, mod2G };
      break;
    }
    case 14: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const modA = ctx.createOscillator(); modA.frequency.value = fm;
      const modAG = ctx.createGain(); modAG.gain.value = inst.params.I0 * fm;
      const fmb = f * (inst.params.ratio * 2.0) + inst.customVal;
      const modB = ctx.createOscillator(); modB.setPeriodicWave(cosWave); modB.frequency.value = fmb;
      const modBG = ctx.createGain(); modBG.gain.value = (inst.params.I0 * 0.75) * fmb;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm;
      inst.lfoOsc.connect(lfoG).connect(modAG.gain);
      modA.connect(modAG).connect(car.frequency);
      modB.connect(modBG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      modA.start(now); modB.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: modA, modG: modAG, modB, modBG, lfoG };
      break;
    }
    case 15: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain();
      const peakD = (inst.params.I0 + inst.params.dI * inst.customVal * 0.4) * fm;
      const baseD = inst.params.I0 * fm;
      modG.gain.setValueAtTime(peakD, now);
      modG.gain.setTargetAtTime(baseD, now + 0.005, 0.08);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 16: {
      const spread = inst.customVal;
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f + spread;
      const car3 = ctx.createOscillator(); car3.frequency.value = Math.max(20, f - spread);
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm;
      mod.connect(modG);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      modG.connect(car1.frequency); modG.connect(car2.frequency); modG.connect(car3.frequency);
      const clusterMix = ctx.createGain(); clusterMix.gain.value = 0.4;
      car1.connect(clusterMix); car2.connect(clusterMix); car3.connect(clusterMix);
      clusterMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now); car3.start(now);
      voiceObj = { ...voiceObj, car: car1, car2, car3, mod, modG, lfoG };
      break;
    }
    case 17: {
      const phiRatio = 1.6180339887 * Math.pow(inst.customVal, 0.5);
      const f_phi = f * phiRatio;
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = f_phi;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * f_phi;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * f_phi;
      mod.connect(modG).connect(car.frequency);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, lfoG, f_phi };
      break;
    }
    case 18: {
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 19: {
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f;
      car2.setPeriodicWave(cosWave);
      const modSin = ctx.createOscillator(); modSin.frequency.value = fm;
      const modCos = ctx.createOscillator(); modCos.setPeriodicWave(cosWave); modCos.frequency.value = fm;
      const modSinG = ctx.createGain(); modSinG.gain.value = inst.params.I0 * fm;
      const modCosG = ctx.createGain(); modCosG.gain.value = inst.params.I0 * fm;
      modSin.connect(modSinG).connect(car1.frequency);
      modCos.connect(modCosG).connect(car2.frequency);
      const rotG1 = ctx.createGain(); rotG1.gain.value = 0.5;
      const rotG2 = ctx.createGain(); rotG2.gain.value = 0.5;
      car1.connect(rotG1).connect(env);
      car2.connect(rotG2).connect(env);
      env.connect(inst.bus);
      modSin.start(now); modCos.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car2, mod: modSin, modCos, modG: modSinG, modCosG, rotG1, rotG2 };
      break;
    }
    // ============================================================
    // BANK C: DX7 & VINTAGE 80s ICONS (20–29)
    // ============================================================
    case 20: {
      // DX7 E-Piano Rhodes: Dual Carrier (Body 1:1 + Tine 1:14)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = f;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * f;
      mod1.connect(mod1G).connect(car1.frequency);
      const car2 = ctx.createOscillator(); car2.frequency.value = f;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = f * 14.0;
      const mod2G = ctx.createGain(); mod2G.gain.value = inst.params.dI * inst.customVal * (f * 14.0);
      mod2.connect(mod2G).connect(car2.frequency);
      const tineMix = ctx.createGain(); tineMix.gain.value = 0.45 * inst.customVal;
      car1.connect(env); car2.connect(tineMix).connect(env);
      env.connect(inst.bus);
      mod1.start(now); mod2.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G, tineMix };
      break;
    }
    case 21: {
      // Tubular Bells & Glockenspiel: Inharmonic Chowning 3.52 / 5.84
      const car = ctx.createOscillator(); car.frequency.value = f;
      const fm1 = f * (inst.params.ratio * inst.customVal);
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm1;
      const mod1G = ctx.createGain(); mod1G.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * fm1, now);
      mod1G.gain.exponentialRampToValueAtTime(Math.max(0.05 * fm1, 0.1), now + Math.max(0.2, inst.params.rel));
      mod1.connect(mod1G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod1.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, modG: mod1G, mod1G };
      break;
    }
    case 22: {
      // Solid Bass TX81Z Lately Bass (Punchy Feedback Sub-Bass)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * fm, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.1, inst.params.I0 * fm * 0.3), now + 0.18);
      mod.connect(modG).connect(car.frequency);
      const subCar = ctx.createOscillator(); subCar.frequency.value = f * 0.5;
      const subG = ctx.createGain(); subG.gain.value = 0.5;
      subCar.connect(subG).connect(env);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now); subCar.start(now);
      voiceObj = { ...voiceObj, car, carSub: subCar, mod, modG, subG };
      break;
    }
    case 23: {
      // Slap Bass Percussion: 25ms pop transient
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 2.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal * 2.5) * (fm * 2.0), now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01, inst.params.I0 * fm * 0.1), now + 0.04);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 24: {
      // Blues Harmonica Reed
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 1.004;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal * 0.5) * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const mix = ctx.createGain(); mix.gain.value = 0.5;
      car1.connect(mix); car2.connect(mix);
      mix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, mix };
      break;
    }
    case 25: {
      // Marimba & Wood Balafon
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 4.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * f * 4.0, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * f, 0.1), now + 0.08);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 26: {
      // Log Drum & Schlitz
      const car = ctx.createOscillator();
      car.frequency.setValueAtTime(f * (1 + inst.customVal * 1.5), now);
      car.frequency.exponentialRampToValueAtTime(Math.max(20, f), now + 0.035);
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * fm, 0.1), now + 0.06);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 27: {
      // CS-80 Synth Brass 80s
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f + inst.customVal;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm * 0.5, now);
      modG.gain.linearRampToValueAtTime((inst.params.I0 + inst.params.dI) * fm, now + Math.max(0.05, inst.params.atk * 1.2));
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const brassMix = ctx.createGain(); brassMix.gain.value = 0.5;
      car1.connect(brassMix); car2.connect(brassMix);
      brassMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, brassMix };
      break;
    }
    case 28: {
      // Digi Clavinet D6 FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 3.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * fm * 3.0, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.02 * fm, 0.1), now + 0.09);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 29: {
      // Cembalo & Harpsichord
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 5.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * f * 5.0, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * f, 0.1), now + 0.07);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const mix = ctx.createGain(); mix.gain.value = 0.5;
      const reg4G = ctx.createGain(); reg4G.gain.value = inst.customVal;
      car1.connect(mix); car2.connect(reg4G).connect(mix);
      mix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, mix, reg4G };
      break;
    }

    // ============================================================
    // BANK D: YM2612 & ARCADE LEGENDS (30–39)
    // ============================================================
    case 30: {
      // Sonic 16-Bit Lead (4-Op Genesis style)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm * 2.0;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const mod2G = ctx.createGain(); mod2G.gain.value = (inst.params.dI + inst.customVal) * (fm * 2.0);
      mod2.connect(mod2G).connect(mod1.frequency);
      mod1.connect(mod1G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod2.start(now); mod1.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }
    case 31: {
      // Mega Drive FM Drums (Kick + Snare)
      const car = ctx.createOscillator();
      car.frequency.setValueAtTime(Math.max(200, f * 2), now);
      car.frequency.exponentialRampToValueAtTime(Math.max(35, f * 0.4), now + 0.05);
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 1.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * (fm * 1.5), now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * fm, 0.1), now + 0.08);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 32: {
      // Castlevania Cathedral Organ (8' + 4' + 2 2/3')
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.0;
      const car3 = ctx.createOscillator(); car3.frequency.value = f * 3.0;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency); modG.connect(car3.frequency);
      const orgMix = ctx.createGain(); orgMix.gain.value = 0.35 * inst.customVal;
      car1.connect(orgMix); car2.connect(orgMix); car3.connect(orgMix);
      orgMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now); car3.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, car3, mod, modG, orgMix };
      break;
    }
    case 33: {
      // AdLib Chiptune Lead (OPL2 half-sine)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.params.dI * 0.5) * fm;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 34: {
      // DOOM Cyberpunk Saw FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * fm;
      const shaper = ctx.createWaveShaper();
      const n_samples = 512, curve = new Float32Array(n_samples);
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = Math.tanh(inst.customVal * x * 1.5);
      }
      shaper.curve = curve;
      mod.connect(modG).connect(car.frequency);
      car.connect(shaper).connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, shaper };
      break;
    }
    case 35: {
      // Thunder Laser FX FM (Sci-Fi Laser Sweep)
      const car = ctx.createOscillator();
      car.frequency.setValueAtTime(f * 4.0 * inst.customVal, now);
      car.frequency.exponentialRampToValueAtTime(Math.max(20, f * 0.25), now + 0.12);
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 3.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm * 3.0, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * fm, 0.1), now + 0.15);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 36: {
      // Marble Zone Steel Drum FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.75;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * f * 2.75, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.05 * f, 0.1), now + 0.18);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 37: {
      // OutRun Synthwave Bassline
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * fm, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.05, inst.params.I0 * fm * 0.2), now + Math.max(0.05, inst.customVal));
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 38: {
      // NeoGeo Arcade Pluck FM
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f + inst.customVal;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * fm, now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * fm, 0.1), now + 0.1);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const pluckMix = ctx.createGain(); pluckMix.gain.value = 0.5;
      car1.connect(pluckMix); car2.connect(pluckMix);
      pluckMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, pluckMix };
      break;
    }
    case 39: {
      // Power Metal FM Poly-Synth
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm;
      const mod2 = ctx.createOscillator(); mod2.setPeriodicWave(cosWave); mod2.frequency.value = fm * 0.5;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const mod2G = ctx.createGain(); mod2G.gain.value = (inst.params.dI * inst.customVal) * (fm * 0.5);
      mod1.connect(mod1G).connect(car.frequency);
      mod2.connect(mod2G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod1.start(now); mod2.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }

    // ============================================================
    // BANK E: CINEMATIC & CYBERPUNK DRONES (40–49)
    // ============================================================
    case 40: {
      // Blade Runner CS-FM Pad
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 1.003;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm * 0.4, now);
      modG.gain.linearRampToValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * fm, now + Math.max(0.5, inst.params.atk));
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const padMix = ctx.createGain(); padMix.gain.value = 0.5;
      car1.connect(padMix); car2.connect(padMix);
      padMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, padMix };
      break;
    }
    case 41: {
      // Dark Nebula Sub-Drone (30Hz Sub-Rumble)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const sub = ctx.createOscillator(); sub.frequency.value = f * 0.5;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 0.5;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (fm * 0.5);
      mod.connect(modG).connect(car.frequency);
      const subMix = ctx.createGain(); subMix.gain.value = 0.6;
      car.connect(env); sub.connect(subMix).connect(env);
      env.connect(inst.bus);
      mod.start(now); car.start(now); sub.start(now);
      voiceObj = { ...voiceObj, car, carSub: sub, mod, modG, subMix };
      break;
    }
    case 42: {
      // Hyperborea Shimmer Crystal
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 3.0;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 3.0);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const shimMix = ctx.createGain(); shimMix.gain.value = 0.4;
      car1.connect(shimMix); car2.connect(shimMix);
      shimMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, shimMix };
      break;
    }
    case 43: {
      // Cryogenic Ice Whispers
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 4.12;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 4.12);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 44: {
      // Dark Matter Pulsar Drone
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      const lfoG = ctx.createGain(); lfoG.gain.value = inst.params.dI * fm * inst.customVal * 0.5;
      mod.connect(modG).connect(car.frequency);
      inst.lfoOsc.connect(lfoG).connect(modG.gain);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, lfoG };
      break;
    }
    case 45: {
      // Solar Flare Granular Drone
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 1.006;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const flareMix = ctx.createGain(); flareMix.gain.value = 0.5;
      car1.connect(flareMix); car2.connect(flareMix);
      flareMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, flareMix };
      break;
    }
    case 46: {
      // Abyss Submarine Resonator
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 1.333;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 1.333);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 47: {
      // Starlight Ethereal Voice
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const voiceMix = ctx.createGain(); voiceMix.gain.value = 0.5;
      car1.connect(voiceMix); car2.connect(voiceMix);
      voiceMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, voiceMix };
      break;
    }
    case 48: {
      // Void Walker Ambient Swell
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 1.732;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 1.732);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 49: {
      // Antimatter Reactor Drone
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm * 2.0;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const mod2G = ctx.createGain(); mod2G.gain.value = inst.customVal * (fm * 2.0);
      mod2.connect(mod2G).connect(mod1.frequency);
      mod1.connect(mod1G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod2.start(now); mod1.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }

    // ============================================================
    // BANK F: ACOUSTIC PHYSICAL & WORLD RESONANCE (50–59)
    // ============================================================
    case 50: {
      // Tibetan Singing Bowl FM
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.756;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 5.4;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * (f * 5.4);
      mod.connect(modG).connect(car2.frequency);
      const bowlMix = ctx.createGain(); bowlMix.gain.value = 0.5;
      car1.connect(bowlMix); car2.connect(bowlMix);
      bowlMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, bowlMix };
      break;
    }
    case 51: {
      // Javanese Gamelan Gong
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = f * 1.414;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = f * 2.828;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * (f * 1.414);
      const mod2G = ctx.createGain(); mod2G.gain.value = (inst.params.dI * inst.customVal) * (f * 2.828);
      mod1.connect(mod1G).connect(car.frequency);
      mod2.connect(mod2G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod1.start(now); mod2.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }
    case 52: {
      // Shakuhachi Bamboo Air
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.0;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal * 0.5) * (f * 2.0);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 53: {
      // Celtic Harp Pluck FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 3.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * (f * 3.0), now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * f, 0.1), now + 0.07);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 54: {
      // Koto Silk String FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 4.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * (f * 4.0), now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * f, 0.1), now + 0.05);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 55: {
      // Glass Armonica Resonance
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 3.0;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * (f * 3.0);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 56: {
      // Cathedral Pipe Organ 32ft
      const car1 = ctx.createOscillator(); car1.frequency.value = f * 0.5;
      const car2 = ctx.createOscillator(); car2.frequency.value = f;
      const car3 = ctx.createOscillator(); car3.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency); modG.connect(car3.frequency);
      const pipeMix = ctx.createGain(); pipeMix.gain.value = 0.35 * inst.customVal;
      car1.connect(pipeMix); car2.connect(pipeMix); car3.connect(pipeMix);
      pipeMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now); car3.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, car3, mod, modG, pipeMix };
      break;
    }
    case 57: {
      // Cello Bowed FM Model
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal * 0.4) * fm;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 58: {
      // Kalimba Thumb Piano
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.7;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * (f * 2.7), now);
      modG.gain.exponentialRampToValueAtTime(Math.max(0.01 * f, 0.1), now + 0.06);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 59: {
      // Ceramic Ocarina Flute
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = f;
      const modG = ctx.createGain(); modG.gain.value = inst.params.I0 * f;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }

    // ============================================================
    // BANK G: MODULAR & EXPERIMENTAL FX (60–69)
    // ============================================================
    case 60: {
      // Quantum Particle Collider
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm * 3.5;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * fm;
      const mod2G = ctx.createGain(); mod2G.gain.value = (inst.params.dI + inst.customVal) * (fm * 3.5);
      mod1.connect(mod1G).connect(car.frequency);
      mod2.connect(mod2G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod1.start(now); mod2.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }
    case 61: {
      // Radio Telescope Alien Glitch
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 4.0;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 4.0);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 62: {
      // Feedback Loop Screamer
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * fm;
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 63: {
      // Chaotic Bifurcation Drone
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 2.0;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal * 0.5) * (fm * 2.0);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 64: {
      // Geiger Counter Radiance
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 3.0;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 3.0);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 65: {
      // Subatomic Bass Reactor
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 0.5;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 0.5);
      const shaper = ctx.createWaveShaper();
      const n_samples = 512, curve = new Float32Array(n_samples);
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = Math.tanh(inst.customVal * x);
      }
      shaper.curve = curve;
      mod.connect(modG).connect(car.frequency);
      car.connect(shaper).connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, shaper };
      break;
    }
    case 66: {
      // Neural Network Synapse FM
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.2;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * (f * 2.2);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 67: {
      // Ringmod Laser Swarm
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod1 = ctx.createOscillator(); mod1.frequency.value = fm * 1.75;
      const mod2 = ctx.createOscillator(); mod2.frequency.value = fm * 2.5;
      const mod1G = ctx.createGain(); mod1G.gain.value = inst.params.I0 * (fm * 1.75);
      const mod2G = ctx.createGain(); mod2G.gain.value = (inst.params.dI * inst.customVal) * (fm * 2.5);
      mod1.connect(mod1G).connect(car.frequency);
      mod2.connect(mod2G).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod1.start(now); mod2.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod: mod1, mod1, mod2, modG: mod1G, mod1G, mod2G };
      break;
    }
    case 68: {
      // Black Hole Event Horizon
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 0.707;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal * 1.5) * (f * 0.707);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 69: {
      // Warp Engine Plasma Drive
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 1.5;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.value = (inst.params.I0 + inst.customVal) * fm;
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const warpMix = ctx.createGain(); warpMix.gain.value = 0.5;
      car1.connect(warpMix); car2.connect(warpMix);
      warpMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, warpMix };
      break;
    }
    // ============================================================
    // BANK H: BUCHLA & WEST COAST ORGANIC PERCUSSION (70–79)
    // ============================================================
    case 70: {
      // Buchla 292 Vactrol Bongo (LPG decay with non-linear slew)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + Math.max(0.02, inst.customVal * 0.8));
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 71: {
      // Hydro Water Droplet (surface tension pitch dive)
      const car = ctx.createOscillator();
      car.frequency.setValueAtTime(f * (1 + inst.customVal), now);
      car.frequency.exponentialRampToValueAtTime(f, now + 0.04);
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.05);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 72: {
      // Bamboo Stomp & Anklung (hollow column resonance)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 3.0;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.07);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const mix = ctx.createGain(); mix.gain.value = 0.5;
      car1.connect(mix); car2.connect(mix);
      mix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, mix };
      break;
    }
    case 73: {
      // Modal Membrane Pluck (Mutable Rings Bessel modes)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.295;
      const car3 = ctx.createOscillator(); car3.frequency.value = f * 3.598;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + Math.max(0.03, inst.customVal * 0.2));
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency); modG.connect(car3.frequency);
      const modalMix = ctx.createGain(); modalMix.gain.value = 0.35;
      car1.connect(modalMix); car2.connect(modalMix); car3.connect(modalMix);
      modalMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now); car3.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, car3, mod, modG, modalMix };
      break;
    }
    case 74: {
      // Seed Pod Shaker (Poisson micro-collision bursts)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * (inst.params.ratio * inst.customVal);
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * f * 2.0, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.06);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 75: {
      // Clay Udu Drum Breath (deep Helmholtz resonance)
      const car = ctx.createOscillator(); car.frequency.value = f * 0.5;
      const mod = ctx.createOscillator(); mod.frequency.value = f;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal * 1.5) * f, now);
      modG.gain.exponentialRampToValueAtTime(0.02 * f, now + 0.14);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 76: {
      // Micro-Kalimba Ghost Pluck (damped tines)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.75;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * f * 2.75, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + Math.max(0.03, inst.customVal * 0.4));
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 77: {
      // Bio-Acoustic Cicada Pulse (high-freq tymbal click)
      const car = ctx.createOscillator(); car.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 5.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 5.5, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.05);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 78: {
      // Raindrop on Tin Roof (plate excitation)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 3.42;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 1.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 1.5, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.07);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const tinMix = ctx.createGain(); tinMix.gain.value = 0.5;
      car1.connect(tinMix); car2.connect(tinMix);
      tinMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, tinMix };
      break;
    }
    case 79: {
      // Pebble Cascade Scatter (granular stone scatter)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 3.85;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI * inst.customVal) * f * 3.85, now);
      modG.gain.exponentialRampToValueAtTime(0.02 * f, now + 0.09);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }

    // ============================================================
    // BANK I: MICROSOUND & GLITCH FX TEXTURES (80–89)
    // ============================================================
    case 80: {
      // Pointillist Microsound Click (1ms sub-millisecond impulse)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 4.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal * 2.0) * fm * 4.0, now);
      modG.gain.exponentialRampToValueAtTime(0.001 * fm, now + 0.02);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 81: {
      // Quantum State Collapse (stochastic phase transient)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.618;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 2.618, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.04);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 82: {
      // Tape Splicer Crinkle (oxide razor transient)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm * 3.14;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 3.14, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.03);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 83: {
      // Silicon Micro-Relay Click (contact bounce)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.85;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.025);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const relayMix = ctx.createGain(); relayMix.gain.value = 0.5;
      car1.connect(relayMix); car2.connect(relayMix);
      relayMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, relayMix };
      break;
    }
    case 84: {
      // Granular Dust Cloud (5-15ms micro-grains)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * (inst.params.ratio * inst.customVal);
      const modG = ctx.createGain(); modG.gain.setValueAtTime(inst.params.I0 * f, now);
      modG.gain.exponentialRampToValueAtTime(0.02 * f, now + 0.08);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 85: {
      // Bit-Crush Kinetic Pop (quantization transient)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 2.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 2.0, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.035);
      const shaper = ctx.createWaveShaper();
      const n_samples = 512, curve = new Float32Array(n_samples);
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = Math.round(x * inst.customVal) / inst.customVal;
      }
      shaper.curve = curve;
      mod.connect(modG).connect(car.frequency);
      car.connect(shaper).connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, shaper };
      break;
    }
    case 86: {
      // Ionizing Cloud Chamber (Geiger Poisson arrivals)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 4.8;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 4.8, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.03);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 87: {
      // Sub-Bass Air Burst (pneumatic 15Hz sub-impulse)
      const car = ctx.createOscillator(); car.frequency.value = Math.max(15, f * 0.25);
      const mod = ctx.createOscillator(); mod.frequency.value = f * 0.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal * 2.0) * f, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.15);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 88: {
      // Optical CD Tracking Error (laser servo chirp)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 3.75;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 3.75, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.025);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 89: {
      // Josephson Quantum Click (superconducting step impulse)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.718;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 2.718, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.02);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }

    // ============================================================
    // BANK J: GENERATIVE KINETIC STRUCTURES & CIAT-LONBARDE (90–99)
    // ============================================================
    case 90: {
      // Ciat-Lonbarde Paper Wire (conductive paper feedback)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm * 1.732;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 1.732, now);
      modG.gain.exponentialRampToValueAtTime(0.02 * fm, now + 0.1);
      const shaper = ctx.createWaveShaper();
      const n_samples = 512, curve = new Float32Array(n_samples);
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = Math.tanh(inst.customVal * x * 1.2);
      }
      shaper.curve = curve;
      mod.connect(modG).connect(car.frequency);
      car.connect(shaper).connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG, shaper };
      break;
    }
    case 91: {
      // Chaotic Double Pendulum (2D phase collision pulse)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.414;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.08);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const pendMix = ctx.createGain(); pendMix.gain.value = 0.5;
      car1.connect(pendMix); car2.connect(pendMix);
      pendMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, pendMix };
      break;
    }
    case 92: {
      // Wind Chime Aeolian Drift (bamboo/glass collision)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 3.162;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 1.618;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 1.618, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.18);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const chimeMix = ctx.createGain(); chimeMix.gain.value = 0.5;
      car1.connect(chimeMix); car2.connect(chimeMix);
      chimeMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, chimeMix };
      break;
    }
    case 93: {
      // Turing Shift-Register Pulse (LFSR burst)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 2.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 2.5, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.05);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 94: {
      // Sub-Zero Ice Fracture (lake ice cracking)
      const car = ctx.createOscillator();
      car.frequency.setValueAtTime(f * (1 + inst.customVal * 1.2), now);
      car.frequency.exponentialRampToValueAtTime(f, now + 0.06);
      const mod = ctx.createOscillator(); mod.frequency.value = fm * 3.65;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.params.dI) * fm * 3.65, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.09);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 95: {
      // Magnetic Ferrofluid Ripple (liquid iron spikes)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.setPeriodicWave(cosWave); mod.frequency.value = fm * 1.5;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm * 1.5, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.08);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 96: {
      // Crystal Lattice Cleavage (piezoelectric fracture ring)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 4.33;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.0;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 2.0, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.12);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const cryMix = ctx.createGain(); cryMix.gain.value = 0.5;
      car1.connect(cryMix); car2.connect(cryMix);
      cryMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, cryMix };
      break;
    }
    case 97: {
      // Cosmic Ray Muon Shower (atmospheric secondary particle cascade)
      const car = ctx.createOscillator(); car.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 5.25;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal * 1.5) * f * 5.25, now);
      modG.gain.exponentialRampToValueAtTime(0.005 * f, now + 0.025);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 98: {
      // Neuronal Membrane Spike (Hodgkin-Huxley action potential click)
      const car = ctx.createOscillator(); car.frequency.value = f;
      const mod = ctx.createOscillator(); mod.frequency.value = f * 2.3;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * f * 2.3, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * f, now + 0.045);
      mod.connect(modG).connect(car.frequency);
      car.connect(env).connect(inst.bus);
      mod.start(now); car.start(now);
      voiceObj = { ...voiceObj, car, mod, modG };
      break;
    }
    case 99: {
      // Clock Divider Polymeter (Euclidean poly-temporal burst)
      const car1 = ctx.createOscillator(); car1.frequency.value = f;
      const car2 = ctx.createOscillator(); car2.frequency.value = f * 2.0;
      const mod = ctx.createOscillator(); mod.frequency.value = fm;
      const modG = ctx.createGain(); modG.gain.setValueAtTime((inst.params.I0 + inst.customVal) * fm, now);
      modG.gain.exponentialRampToValueAtTime(0.01 * fm, now + 0.06);
      mod.connect(modG);
      modG.connect(car1.frequency); modG.connect(car2.frequency);
      const polyMix = ctx.createGain(); polyMix.gain.value = 0.5;
      car1.connect(polyMix); car2.connect(polyMix);
      polyMix.connect(env).connect(inst.bus);
      mod.start(now); car1.start(now); car2.start(now);
      voiceObj = { ...voiceObj, car: car1, car1, car2, mod, modG, polyMix };
      break;
    }


  }

  // ============================================================
  // KOMPLEX-VIBRATO ROUTING (Für ausnahmslos alle 20 Synthesizer)
  // ============================================================
  if (inst.vibrato && inst.vibrato.enabled && inst.vibrato.depth > 0) {
    const vibLfo = ctx.createOscillator();
    const vibShape = inst.vibrato.shape || "sine";
    vibLfo.type = vibShape === "human" ? "sine" : vibShape;

    // Rate mit Humanizer-Jitter
    let effRate = Math.max(0.1, inst.vibrato.rate || 5.2);
    if (vibShape === "human" || (inst.vibrato.humanize && inst.vibrato.humanize > 0)) {
      const humAmount = (inst.vibrato.humanize || 25) / 100;
      effRate += (Math.random() * 0.8 - 0.4) * humAmount;
    }
    vibLfo.frequency.setValueAtTime(effRate, now);

    const vibGainNode = ctx.createGain();
    const delaySec = Math.max(0, inst.vibrato.delay ?? 0.25);
    const targetDepth = inst.vibrato.depth;

    vibGainNode.gain.setValueAtTime(0, now);
    if (delaySec > 0) {
      vibGainNode.gain.setValueAtTime(0, now + delaySec);
      vibGainNode.gain.linearRampToValueAtTime(targetDepth, now + delaySec + 0.35);
    } else {
      vibGainNode.gain.linearRampToValueAtTime(targetDepth, now + 0.15);
    }

    vibLfo.connect(vibGainNode);

    // Alle Trägeroszillatoren dieser Stimme sammeln
    const carriers = [];
    if (voiceObj.car) carriers.push(voiceObj.car);
    if (voiceObj.car1) carriers.push(voiceObj.car1);
    if (voiceObj.car2) carriers.push(voiceObj.car2);
    if (voiceObj.car3) carriers.push(voiceObj.car3);
    if (voiceObj.carR) carriers.push(voiceObj.carR);
    if (voiceObj.carSub) carriers.push(voiceObj.carSub);
    if (voiceObj.carHigh) carriers.push(voiceObj.carHigh);
    if (voiceObj.clusterCars) carriers.push(...voiceObj.clusterCars);

    carriers.forEach(c => {
      try { vibGainNode.connect(c.frequency); } catch(err){}
    });

    vibLfo.start(now);
    voiceObj.vibLfo = vibLfo;
    voiceObj.vibGainNode = vibGainNode;
  }

  inst.voices.set(sem, voiceObj);
  updateUIBadges();
  syncKeys();
}

function noteOff(sem, synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  const v = inst.voices.get(sem);
  if (!v) return;

  const now = ctx.currentTime;
  const tau = Math.max(0.02, inst.params.rel / 3.4);

  v.env.gain.cancelScheduledValues(now);
  v.env.gain.setValueAtTime(Math.max(v.env.gain.value, 1e-4), now);
  v.env.gain.setTargetAtTime(0, now, tau);

  const stopTime = now + inst.params.rel * 1.5;
  if (v.car) try { v.car.stop(stopTime); } catch(e){}
  if (v.car1) try { v.car1.stop(stopTime); } catch(e){}
  if (v.car2) try { v.car2.stop(stopTime); } catch(e){}
  if (v.car3) try { v.car3.stop(stopTime); } catch(e){}
  if (v.carL) try { v.carL.stop(stopTime); } catch(e){}
  if (v.carR) try { v.carR.stop(stopTime); } catch(e){}
  if (v.carSub) try { v.carSub.stop(stopTime); } catch(e){}
  if (v.carHigh) try { v.carHigh.stop(stopTime); } catch(e){}
  if (v.clusterCars) v.clusterCars.forEach(c => { try{ c.stop(stopTime); }catch(e){} });
  if (v.mod) try { v.mod.stop(stopTime); } catch(e){}
  if (v.mod1) try { v.mod1.stop(stopTime); } catch(e){}
  if (v.mod2) try { v.mod2.stop(stopTime); } catch(e){}
  if (v.modSin) try { v.modSin.stop(stopTime); } catch(e){}
  if (v.modCos) try { v.modCos.stop(stopTime); } catch(e){}
  if (v.vibOsc) try { v.vibOsc.stop(stopTime); } catch(e){}
  if (v.vibLfo) try { v.vibLfo.stop(stopTime); } catch(e){}

  setTimeout(() => {
    try {
      if (v.lfoG) v.lfoG.disconnect();
      if (v.vibGainNode) v.vibGainNode.disconnect();
      v.env.disconnect();
    } catch (e) {}
  }, inst.params.rel * 1600);

  inst.voices.delete(sem);
  updateUIBadges();
  syncKeys();
}

function panicSynth(synthIdx = activeSynthIdx) {
  const inst = synthInstances[synthIdx];
  [...inst.voices.keys()].forEach(sem => noteOff(sem, synthIdx));
  if (synthIdx === activeSynthIdx && typeof stopArpClock === "function") {
    stopArpClock();
    if (typeof arpState !== "undefined" && arpState) {
      arpState.heldKeys.clear();
      arpState.latchedKeys = [];
      if (typeof updateArpActiveNotesHint === "function") updateArpActiveNotesHint();
      if (typeof syncKeys === "function") syncKeys();
    }
  }
}

function panicAll() {
  synthInstances.forEach((_, idx) => panicSynth(idx));
}

/* ============================================================
   MULTI-LAYER LOOP STACK & RECORDING ENGINE
   ============================================================ */
let loopStack = [];

const recState = {
  isRecording: false,
  synthIdx: 0,
  startTime: 0,
  recNode: null,
  leftChunks: [],
  rightChunks: [],
  totalSamples: 0
};

const recToggleBtn = document.getElementById("recToggleBtn");
const quickRecBtn = document.getElementById("quickRecBtn");
const recBtnText = document.getElementById("recBtnText");
const recStatusInfo = document.getElementById("recStatusInfo");
const loopStackContainer = document.getElementById("loopStackContainer");
const stackEmptyHint = document.getElementById("stackEmptyHint");
const stackSummaryText = document.getElementById("stackSummaryText");
const toggleAllLoopsBtn = document.getElementById("toggleAllLoopsBtn");
const clearStackBtn = document.getElementById("clearStackBtn");

function toggleRecording() {
  initAudio();
  if (ctx.state === "suspended") ctx.resume();
  recState.isRecording ? stopRecording() : startRecording();
}

function startRecording() {
  if (recState.isRecording) return;
  recState.isRecording = true;
  recState.synthIdx = activeSynthIdx;
  recState.startTime = performance.now();
  recState.leftChunks = [];
  recState.rightChunks = [];
  recState.totalSamples = 0;

  const targetInst = synthInstances[recState.synthIdx];
  const bufferSize = 4096;
  recState.recNode = ctx.createScriptProcessor(bufferSize, 2, 2);
  recState.recNode.onaudioprocess = e => {
    if (!recState.isRecording) return;
    const l = e.inputBuffer.getChannelData(0);
    const r = e.inputBuffer.getChannelData(1);
    recState.leftChunks.push(new Float32Array(l));
    recState.rightChunks.push(new Float32Array(r));
    recState.totalSamples += l.length;
  };

  targetInst.bus.connect(recState.recNode);
  recState.recNode.connect(ctx.destination);

  recToggleBtn.classList.add("recording");
  quickRecBtn.style.background = "#ff3838";
  quickRecBtn.style.color = "#05070d";
  recBtnText.textContent = `REC: [${targetInst.def.keyDisplay}] ${targetInst.def.name.slice(0, 12)}…`;
  recStatusInfo.textContent = "AUFNAHME ●";
}

function stopRecording() {
  if (!recState.isRecording) return;
  recState.isRecording = false;

  const targetInst = synthInstances[recState.synthIdx];
  try {
    targetInst.bus.disconnect(recState.recNode);
    recState.recNode.disconnect();
  } catch(e){}

  recToggleBtn.classList.remove("recording");
  quickRecBtn.style.background = "rgba(255, 71, 87, 0.1)";
  quickRecBtn.style.color = "#ff4757";
  recBtnText.textContent = "LOOP AUFNEHMEN (R)";
  recStatusInfo.textContent = "BEREIT";

  if (recState.totalSamples < ctx.sampleRate * 0.25) return;

  const audioBuf = ctx.createBuffer(2, recState.totalSamples, ctx.sampleRate);
  const outL = audioBuf.getChannelData(0);
  const outR = audioBuf.getChannelData(1);

  let offset = 0;
  for (let i = 0; i < recState.leftChunks.length; i++) {
    outL.set(recState.leftChunks[i], offset);
    outR.set(recState.rightChunks[i], offset);
    offset += recState.leftChunks[i].length;
  }

  const fadeLen = Math.min(256, Math.floor(recState.totalSamples / 4));
  for (let i = 0; i < fadeLen; i++) {
    const t = i / fadeLen;
    const endIdx = recState.totalSamples - fadeLen + i;
    outL[i] = outL[i] * t + outL[endIdx] * (1 - t);
    outR[i] = outR[i] * t + outR[endIdx] * (1 - t);
  }

  createLoopLayer(audioBuf, recState.synthIdx);
}

function startLayerPlayback(layer) {
  if (!layer.isOn || !ctx) return;
  if (layer.pauseTimerId) {
    clearTimeout(layer.pauseTimerId);
    layer.pauseTimerId = null;
  }
  if (layer.srcNode) {
    try { layer.srcNode.stop(); layer.srcNode.disconnect(); } catch(e){}
    layer.srcNode = null;
  }

  const src = ctx.createBufferSource();
  src.buffer = layer.buffer;
  src.connect(layer.gainNode);

  layer.srcNode = src;
  layer.isPaused = false;
  layer.phaseStartTime = performance.now();
  layer.phaseDuration = layer.duration * 1000;

  src.onended = () => {
    layer.srcNode = null;
    if (!layer.isOn) return;

    if (layer.pauseSec > 0) {
      layer.isPaused = true;
      layer.phaseStartTime = performance.now();
      layer.phaseDuration = layer.pauseSec * 1000;
      layer.pauseTimerId = setTimeout(() => {
        layer.pauseTimerId = null;
        if (layer.isOn) startLayerPlayback(layer);
      }, layer.pauseSec * 1000);
    } else {
      startLayerPlayback(layer);
    }
  };

  src.start();
}

function stopLayerPlayback(layer) {
  if (layer.pauseTimerId) {
    clearTimeout(layer.pauseTimerId);
    layer.pauseTimerId = null;
  }
  if (layer.srcNode) {
    try { layer.srcNode.stop(); layer.srcNode.disconnect(); } catch(e){}
    layer.srcNode = null;
  }
  layer.isPaused = false;
}

function createLoopLayer(audioBuf, synthIdx, existingParams = null) {
  const def = SYNTH_DEFS[synthIdx];
  const layerGain = ctx.createGain();
  const initVol = existingParams ? (existingParams.volume ?? 0.85) : 0.85;
  const initIsOn = existingParams ? (existingParams.isOn ?? true) : true;
  const initPauseSec = existingParams ? (existingParams.pauseSec ?? 0.0) : 0.0;

  layerGain.gain.value = initIsOn ? initVol : 0;
  layerGain.connect(stackMasterGain);

  const layer = {
    id: existingParams ? existingParams.id : ("layer_" + Date.now() + "_" + Math.floor(Math.random() * 1000)),
    synthIdx,
    synthName: def.name,
    keyDisplay: def.keyDisplay,
    color: def.color,
    buffer: audioBuf,
    duration: audioBuf.duration,
    srcNode: null,
    gainNode: layerGain,
    volume: initVol,
    isOn: initIsOn,
    pauseSec: initPauseSec,
    isPaused: false,
    phaseStartTime: performance.now(),
    phaseDuration: audioBuf.duration * 1000,
    pauseTimerId: null,
    canvas: null,
    playheadEl: null,
    statusBadgeEl: null
  };

  loopStack.push(layer);
  if (layer.isOn) {
    startLayerPlayback(layer);
  }
  renderLoopStackUI();
}

function toggleLoopLayer(id) {
  const layer = loopStack.find(l => l.id === id);
  if (!layer) return;

  layer.isOn = !layer.isOn;
  const now = ctx.currentTime;
  layer.gainNode.gain.setTargetAtTime(layer.isOn ? layer.volume : 0, now, 0.04);

  if (layer.isOn) {
    startLayerPlayback(layer);
  } else {
    stopLayerPlayback(layer);
  }

  const card = document.getElementById(layer.id);
  if (card) {
    card.classList.toggle("muted", !layer.isOn);
    const btn = card.querySelector(".loop-toggle-btn");
    if (btn) {
      btn.textContent = layer.isOn ? "AN" : "AUS";
      btn.className = "loop-toggle-btn " + (layer.isOn ? "on" : "off");
    }
  }
  updateStackSummary();
}

function setLayerVolume(id, vol) {
  const layer = loopStack.find(l => l.id === id);
  if (!layer) return;
  layer.volume = vol;
  if (layer.isOn && ctx) {
    layer.gainNode.gain.setTargetAtTime(vol, ctx.currentTime, 0.04);
  }
}

function deleteLoopLayer(id) {
  const idx = loopStack.findIndex(l => l.id === id);
  if (idx === -1) return;
  const layer = loopStack[idx];
  stopLayerPlayback(layer);
  try {
    layer.gainNode.disconnect();
  } catch(e){}
  loopStack.splice(idx, 1);
  renderLoopStackUI();
}

function toggleAllLoops() {
  const anyOn = loopStack.some(l => l.isOn);
  const targetState = !anyOn;
  loopStack.forEach(layer => {
    layer.isOn = targetState;
    if (ctx) layer.gainNode.gain.setTargetAtTime(targetState ? layer.volume : 0, ctx.currentTime, 0.05);
    if (targetState) {
      startLayerPlayback(layer);
    } else {
      stopLayerPlayback(layer);
    }
  });
  renderLoopStackUI();
}

function clearAllLoops() {
  loopStack.forEach(layer => {
    stopLayerPlayback(layer);
    try {
      layer.gainNode.disconnect();
    } catch(e){}
  });
  loopStack.length = 0;
  renderLoopStackUI();
}

function updateStackSummary() {
  const activeCount = loopStack.filter(l => l.isOn).length;
  stackSummaryText.textContent = `${activeCount}/${loopStack.length} aktiv`;
  document.getElementById("stackCount").textContent = `${activeCount}`;
}

function updateLoopKnobVisual(container, val) {
  const arc = container.querySelector(".knob-arc");
  const pointer = container.querySelector(".knob-pointer");
  const num = container.querySelector(".loop-pause-val");

  num.textContent = val > 0 ? (val < 10 ? val.toFixed(1) + "s" : Math.round(val) + "s") : "0s";
  const angle = -135 + (val / 100) * 270;
  const rad = (angle - 90) * Math.PI / 180;
  const cx = 16, cy = 16, r = 11;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  if (pointer) {
    pointer.setAttribute("x2", x);
    pointer.setAttribute("y2", y);
  }

  if (arc) {
    const startAngle = -135 - 90;
    const startRad = startAngle * Math.PI / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const largeArc = (val / 100) * 270 > 180 ? 1 : 0;
    arc.setAttribute("d", `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`);
  }
}

function renderLoopStackUI() {
  loopStackContainer.innerHTML = "";
  if (loopStack.length === 0) {
    stackEmptyHint.style.display = "block";
    loopStackContainer.appendChild(stackEmptyHint);
    updateStackSummary();
    return;
  }
  stackEmptyHint.style.display = "none";

  loopStack.forEach(layer => {
    const card = document.createElement("div");
    card.className = "loop-card" + (layer.isOn ? "" : " muted");
    card.id = layer.id;
    card.style.setProperty("--card-color", layer.color);

    card.innerHTML = `
      <div class="loop-card-header">
        <div class="loop-card-title">
          <span class="tag">[${layer.keyDisplay}]</span>
          <span>${layer.synthName}</span>
          <span class="loop-status-pill" id="badge_${layer.id}">▶ 0.0s</span>
        </div>
        <div class="loop-card-actions">
          <button class="loop-toggle-btn ${layer.isOn ? 'on' : 'off'}">${layer.isOn ? 'AN' : 'AUS'}</button>
          <button class="loop-del-btn" title="Loop löschen">✕</button>
        </div>
      </div>
      <div class="loop-card-wave">
        <canvas width="260" height="16"></canvas>
        <div class="loop-playhead-bar"></div>
      </div>
      <div class="loop-vol-row">
        <div style="display:flex;align-items:center;gap:3px;flex:1;min-width:0;">
          <span>Vol</span>
          <input type="range" min="0" max="1" step="0.01" value="${layer.volume}">
          <span class="vol-num">${Math.round(layer.volume * 100)}%</span>
        </div>
        <div class="loop-knob-wrap" data-id="${layer.id}" title="Pause nach Loop (0 bis 100s). Ziehen oder Mausrad.">
          <span class="loop-knob-lbl">Pause:</span>
          <div class="knob-dial">
            <svg class="knob-svg" viewBox="0 0 32 32">
              <circle class="knob-bg" cx="16" cy="16" r="13" />
              <path class="knob-arc" d="" />
              <line class="knob-pointer" x1="16" y1="16" x2="16" y2="4" />
            </svg>
          </div>
          <span class="loop-pause-val">${layer.pauseSec > 0 ? (layer.pauseSec < 10 ? layer.pauseSec.toFixed(1) + 's' : Math.round(layer.pauseSec) + 's') : '0s'}</span>
        </div>
      </div>
    `;

    card.querySelector(".loop-toggle-btn").addEventListener("click", () => toggleLoopLayer(layer.id));
    card.querySelector(".loop-del-btn").addEventListener("click", () => deleteLoopLayer(layer.id));
    
    const volInp = card.querySelector("input[type=range]");
    const volNum = card.querySelector(".vol-num");
    volInp.addEventListener("input", e => {
      const v = parseFloat(e.target.value);
      volNum.textContent = Math.round(v * 100) + "%";
      setLayerVolume(layer.id, v);
    });

    const knob = card.querySelector(".loop-knob-wrap");
    updateLoopKnobVisual(knob, layer.pauseSec);

    let isDraggingKnob = false, startY = 0, startPause = 0;
    knob.addEventListener("pointerdown", e => {
      e.preventDefault();
      isDraggingKnob = true;
      startY = e.clientY;
      startPause = layer.pauseSec;
      knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", e => {
      if (!isDraggingKnob) return;
      const dy = startY - e.clientY;
      let nextPause = Math.max(0, Math.min(100, startPause + dy * 0.4));
      nextPause = Math.round(nextPause * 10) / 10;
      layer.pauseSec = nextPause;
      if (layer.isPaused) {
        layer.phaseDuration = Math.max(100, layer.pauseSec * 1000);
      }
      updateLoopKnobVisual(knob, nextPause);
    });

    const onKnobUp = e => {
      if (!isDraggingKnob) return;
      isDraggingKnob = false;
      try { knob.releasePointerCapture(e.pointerId); } catch(err){}
    };
    knob.addEventListener("pointerup", onKnobUp);
    knob.addEventListener("pointercancel", onKnobUp);

    knob.addEventListener("wheel", e => {
      e.preventDefault();
      const step = e.shiftKey ? 5 : 1;
      let nextPause = Math.max(0, Math.min(100, layer.pauseSec - Math.sign(e.deltaY) * step));
      nextPause = Math.round(nextPause * 10) / 10;
      layer.pauseSec = nextPause;
      if (layer.isPaused) {
        layer.phaseDuration = Math.max(100, layer.pauseSec * 1000);
      }
      updateLoopKnobVisual(knob, nextPause);
    }, { passive: false });

    const canvas = card.querySelector("canvas");
    layer.canvas = canvas;
    layer.playheadEl = card.querySelector(".loop-playhead-bar");
    layer.statusBadgeEl = card.querySelector(`#badge_${layer.id}`);
    drawMiniWaveform(canvas, layer.buffer, layer.color);
    loopStackContainer.appendChild(card);
  });
  updateStackSummary();
}

function drawMiniWaveform(canvas, buffer, color) {
  const g = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  g.fillStyle = "#020306";
  g.fillRect(0, 0, w, h);
  const data = buffer.getChannelData(0);
  const step = Math.ceil(data.length / w);
  const amp = h / 2;

  g.strokeStyle = color;
  g.lineWidth = 1.1;
  g.beginPath();
  for (let i = 0; i < w; i++) {
    let min = 1.0, max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = data[(i * step) + j];
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    g.moveTo(i, (1 + min) * amp);
    g.lineTo(i, (1 + max) * amp);
  }
  g.stroke();
}

recToggleBtn.addEventListener("click", toggleRecording);
quickRecBtn.addEventListener("click", toggleRecording);
toggleAllLoopsBtn.addEventListener("click", toggleAllLoops);
clearStackBtn.addEventListener("click", clearAllLoops);

/* ============================================================
   AUDIO BUFFER <-> BASE64 WAV SERIALISIERUNG
   ============================================================ */
function audioBufferToWavBase64(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 3; // 3 = IEEE Float 32-bit lossless
  const bitDepth = 32;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const numSamples = buffer.length;
  const dataByteCount = numSamples * blockAlign;
  const headerByteCount = 44;
  const totalByteCount = headerByteCount + dataByteCount;

  const arrayBuffer = new ArrayBuffer(totalByteCount);
  const view = new DataView(arrayBuffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataByteCount, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataByteCount, true);

  const channels = [];
  for (let ch = 0; ch < numChannels; ch++) channels.push(buffer.getChannelData(ch));

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      view.setFloat32(offset, channels[ch][i], true);
      offset += 4;
    }
  }

  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  const chunkSize = 0x8000;
  for (let i = 0; i < len; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunkSize, len)));
  }
  return btoa(binary);
}

async function wavBase64ToAudioBuffer(base64Str) {
  initAudio();
  const binary = atob(base64Str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return await ctx.decodeAudioData(bytes.buffer);
}

/* ============================================================
   SONG SPEICHERN & LADEN (.JSON)
   ============================================================ */
const saveSongBtn = document.getElementById("saveSongBtn");
const loadSongBtn = document.getElementById("loadSongBtn");
const songFileInput = document.getElementById("songFileInput");

saveSongBtn.addEventListener("click", () => {
  const songData = {
    version: "2.0",
    appName: "FM Music Composer",
    savedAt: new Date().toISOString(),
    global: {
      master: GLOBAL.master,
      wet: GLOBAL.wet,
      oct: GLOBAL.oct
    },
    activeSynthIdx,
    loopState: {
      extraPauseSec: loopState.extraPauseSec,
      volume: loopState.volume
    },
    arpState: {
      enabled: arpState.enabled,
      latch: arpState.latch,
      bpm: arpState.bpm,
      division: arpState.division,
      direction: arpState.direction,
      octaves: arpState.octaves,
      gate: arpState.gate,
      swing: arpState.swing,
      steps: arpState.steps.map(s => ({ on: !!s.on, oct: s.oct ?? 0 }))
    },
    synths: synthInstances.map(inst => ({
      id: inst.def.id,
      name: inst.def.name,
      params: { ...inst.params },
      customVal: inst.customVal,
      vibrato: { ...inst.vibrato },
      oscillators: JSON.parse(JSON.stringify(inst.oscillators))
    })),
    loops: loopStack.map(layer => ({
      id: layer.id,
      synthIdx: layer.synthIdx,
      synthName: layer.synthName,
      keyDisplay: layer.keyDisplay,
      color: layer.color,
      duration: layer.duration,
      volume: layer.volume,
      isOn: layer.isOn,
      pauseSec: layer.pauseSec,
      audioWavBase64: audioBufferToWavBase64(layer.buffer)
    }))
  };

  const jsonStr = JSON.stringify(songData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  a.href = url;
  a.download = `fm_music_composer_song_${ts}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  saveSongBtn.textContent = "✓ Saved";
  setTimeout(() => saveSongBtn.textContent = "💾 Save", 1600);
});

loadSongBtn.addEventListener("click", () => songFileInput.click());

songFileInput.addEventListener("change", async e => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  try {
    loadSongBtn.textContent = "Lädt…";
    const text = await file.text();
    const songData = JSON.parse(text);

    initAudio();
    if (ctx.state === "suspended") await ctx.resume();

    // 1. Globale Einstellungen
    if (songData.global) {
      GLOBAL.master = songData.global.master ?? 0.65;
      GLOBAL.wet = songData.global.wet ?? 0.5;
      GLOBAL.oct = songData.global.oct ?? 0;
      if (masterGain) masterGain.gain.setValueAtTime(GLOBAL.master, ctx.currentTime);
      if (wetGain) wetGain.gain.setValueAtTime(GLOBAL.wet, ctx.currentTime);
      if (dryGain) dryGain.gain.setValueAtTime(1 - GLOBAL.wet * 0.5, ctx.currentTime);
    }

    // 2. Synthesizer Parameter, Vibrato & Oszillatoren wiederherstellen
    if (Array.isArray(songData.synths)) {
      songData.synths.forEach((savedSynth, idx) => {
        if (idx < synthInstances.length) {
          const inst = synthInstances[idx];
          if (savedSynth.params) Object.assign(inst.params, savedSynth.params);
          if (savedSynth.customVal !== undefined) inst.customVal = savedSynth.customVal;
          if (savedSynth.vibrato) Object.assign(inst.vibrato, savedSynth.vibrato);
          if (savedSynth.oscillators) inst.oscillators = savedSynth.oscillators;
        }
      });
    }

    // 3. Sprach-Loop Parameter
    if (songData.loopState) {
      loopState.extraPauseSec = songData.loopState.extraPauseSec ?? 2.5;
      loopState.volume = songData.loopState.volume ?? 0.5;
      pauseDurInp.value = loopState.extraPauseSec;
      loopVolInp.value = loopState.volume;
      document.getElementById("v_pausedur").textContent = "+" + loopState.extraPauseSec.toFixed(1) + " s";
      document.getElementById("v_loopvol").textContent = Math.round(loopState.volume * 100) + " %";
    }

    // 3.5. Arpeggiator Parameter wiederherstellen
    if (songData.arpState) {
      arpState.enabled = !!songData.arpState.enabled;
      arpState.latch = !!songData.arpState.latch;
      arpState.bpm = songData.arpState.bpm ?? 124;
      arpState.division = songData.arpState.division ?? "1/16";
      arpState.direction = songData.arpState.direction ?? "up";
      arpState.octaves = songData.arpState.octaves ?? 2;
      arpState.gate = songData.arpState.gate ?? 0.65;
      arpState.swing = songData.arpState.swing ?? 0;
      if (Array.isArray(songData.arpState.steps)) {
        arpState.steps = songData.arpState.steps.map(s => ({ on: !!s.on, oct: s.oct ?? 0 }));
      }
      if (typeof syncArpUI === "function") syncArpUI();
    }

    // 4. Loops wiederherstellen
    clearAllLoops();
    if (Array.isArray(songData.loops)) {
      for (const savedLoop of songData.loops) {
        if (savedLoop.audioWavBase64) {
          const audioBuf = await wavBase64ToAudioBuffer(savedLoop.audioWavBase64);
          createLoopLayer(audioBuf, savedLoop.synthIdx ?? 0, savedLoop);
        }
      }
    }

    // 5. Aktiven Synthesizer umschalten & UI synchronisieren
    selectSynth(songData.activeSynthIdx ?? 0);

    loadSongBtn.textContent = "✓ Loaded";
    setTimeout(() => loadSongBtn.textContent = "📂 Load", 1600);
  } catch (err) {
    console.error("Fehler beim Laden des Songs:", err);
    alert("Konnte Song-Datei nicht laden: " + err.message);
    loadSongBtn.textContent = "📂 Load";
  }
  songFileInput.value = "";
});

/* ============================================================
   UNIFIED MULTI-HANDLE PARAMETER CONTROL & KNOB LOGIC
   ============================================================ */
function getParamBounds(param) {
  if (param === "customParam") {
    return synthInstances[activeSynthIdx].def.customParam;
  }
  return PARAM_BOUNDS[param];
}

function valToPct(param, val) {
  const b = getParamBounds(param);
  const span = b.max - b.min;
  if (span <= 0) return 0;
  const clamped = Math.max(b.min, Math.min(b.max, val));
  return (clamped - b.min) / span;
}

function pctToVal(param, pct) {
  const b = getParamBounds(param);
  const clamped = Math.max(0, Math.min(1, pct));
  const raw = b.min + clamped * (b.max - b.min);
  if (b.step) {
    const inv = 1 / b.step;
    return Math.round(raw * inv) / inv;
  }
  return raw;
}

function updateKnobVisual(container, val) {
  const arc = container.querySelector(".knob-arc");
  const pointer = container.querySelector(".knob-pointer");
  const num = container.querySelector(".knob-val");

  num.textContent = Math.round(val);
  const angle = -135 + (val / 100) * 270;
  const rad = (angle - 90) * Math.PI / 180;
  const cx = 16, cy = 16, r = 11;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  pointer.setAttribute("x2", x);
  pointer.setAttribute("y2", y);

  const startAngle = -135 - 90;
  const startRad = startAngle * Math.PI / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const largeArc = (val / 100) * 270 > 180 ? 1 : 0;
  arc.setAttribute("d", `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`);
}

function updateParamRowVisual(param) {
  const inst = synthInstances[activeSynthIdx];
  const osc = inst.oscillators[param];
  const block = document.getElementById("block_" + param);
  const spanEl = document.getElementById("span_" + param);
  const handleA = document.getElementById("handle_a_" + param);
  const handleB = document.getElementById("handle_b_" + param);
  const thumb = document.getElementById("thumb_" + param);
  const knob = document.getElementById("knob_" + param);
  const chk = document.getElementById("osc_en_" + param);
  const valEl = document.getElementById(param === "customParam" ? "v_custom" : ("v_" + param));

  if (!block) return;

  if (chk) chk.checked = osc.enabled;
  block.classList.toggle("osc-active", osc.enabled);

  const pctA = Math.max(0, Math.min(1, valToPct(param, osc.min)));
  const pctB = Math.max(0, Math.min(1, valToPct(param, osc.max)));
  const curVal = (param === "customParam") ? inst.customVal : inst.params[param];
  const pctThumb = Math.max(0, Math.min(1, valToPct(param, curVal)));

  if (handleA) handleA.style.left = (pctA * 100).toFixed(2) + "%";
  if (handleB) handleB.style.left = (pctB * 100).toFixed(2) + "%";
  if (thumb) thumb.style.left = (pctThumb * 100).toFixed(2) + "%";

  if (spanEl) {
    const minP = Math.min(pctA, pctB);
    const maxP = Math.max(pctA, pctB);
    spanEl.style.left = (minP * 100).toFixed(2) + "%";
    spanEl.style.width = ((maxP - minP) * 100).toFixed(2) + "%";
  }

  if (knob) updateKnobVisual(knob, osc.speed);
  if (valEl) {
    if (param === "customParam") {
      valEl.textContent = curVal.toFixed(2);
    } else if (PARAMS_MAP[param]) {
      valEl.textContent = PARAMS_MAP[param].fmt(curVal);
    }
  }
}

function setupUnifiedParamControls() {
  OSC_PARAM_KEYS.forEach(param => {
    const block = document.getElementById("block_" + param);
    const trackArea = document.getElementById("trackarea_" + param);
    const handleA = document.getElementById("handle_a_" + param);
    const handleB = document.getElementById("handle_b_" + param);
    const thumb = document.getElementById("thumb_" + param);
    const knob = document.getElementById("knob_" + param);
    const chk = document.getElementById("osc_en_" + param);

    if (chk) {
      chk.addEventListener("change", () => {
        const inst = synthInstances[activeSynthIdx];
        inst.oscillators[param].enabled = chk.checked;
        updateParamRowVisual(param);
      });
    }

    if (knob) {
      let isDraggingKnob = false, startY = 0, startSpeed = 0;
      knob.addEventListener("pointerdown", e => {
        e.preventDefault();
        isDraggingKnob = true;
        startY = e.clientY;
        const inst = synthInstances[activeSynthIdx];
        startSpeed = inst.oscillators[param].speed;
        knob.setPointerCapture(e.pointerId);
      });

      knob.addEventListener("pointermove", e => {
        if (!isDraggingKnob) return;
        const dy = startY - e.clientY;
        const inst = synthInstances[activeSynthIdx];
        const nextSpeed = Math.max(0, Math.min(100, startSpeed + dy * 0.75));
        inst.oscillators[param].speed = nextSpeed;
        updateKnobVisual(knob, nextSpeed);
      });

      const onKnobUp = e => {
        if (!isDraggingKnob) return;
        isDraggingKnob = false;
        try { knob.releasePointerCapture(e.pointerId); } catch(err){}
      };
      knob.addEventListener("pointerup", onKnobUp);
      knob.addEventListener("pointercancel", onKnobUp);

      knob.addEventListener("wheel", e => {
        e.preventDefault();
        const inst = synthInstances[activeSynthIdx];
        const osc = inst.oscillators[param];
        osc.speed = Math.max(0, Math.min(100, osc.speed - Math.sign(e.deltaY) * 3));
        updateKnobVisual(knob, osc.speed);
      }, { passive: false });
    }

    // Handles & Track Dragging
    let activeDragTarget = null; // 'a', 'b', 'thumb', 'track'

    function getTrackPct(e) {
      const rect = trackArea.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      return rect.width > 0 ? (x / rect.width) : 0;
    }

    function onPointerMoveTrack(e) {
      if (!activeDragTarget) return;
      const pct = getTrackPct(e);
      const val = pctToVal(param, pct);
      const inst = synthInstances[activeSynthIdx];

      if (activeDragTarget === "a") {
        inst.oscillators[param].min = val;
      } else if (activeDragTarget === "b") {
        inst.oscillators[param].max = val;
      } else if (activeDragTarget === "thumb" || activeDragTarget === "track") {
        if (param === "customParam") {
          inst.customVal = val;
        } else {
          inst.params[param] = val;
          applyParamChange(param);
        }
      }
      updateParamRowVisual(param);
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

    if (trackArea) {
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
          const pct = getTrackPct(e);
          const inst = synthInstances[activeSynthIdx];
          const pctA = valToPct(param, inst.oscillators[param].min);
          const pctB = valToPct(param, inst.oscillators[param].max);
          const distA = Math.abs(pct - pctA);
          const distB = Math.abs(pct - pctB);

          if (distA < 0.08 && distA <= distB) {
            activeDragTarget = "a";
            inst.oscillators[param].min = pctToVal(param, pct);
            if (handleA) handleA.classList.add("dragging");
          } else if (distB < 0.08) {
            activeDragTarget = "b";
            inst.oscillators[param].max = pctToVal(param, pct);
            if (handleB) handleB.classList.add("dragging");
          } else {
            activeDragTarget = "thumb";
            const val = pctToVal(param, pct);
            if (param === "customParam") {
              inst.customVal = val;
            } else {
              inst.params[param] = val;
              applyParamChange(param);
            }
            if (thumb) thumb.classList.add("dragging");
          }
        }
        updateParamRowVisual(param);
      });

      trackArea.addEventListener("pointermove", onPointerMoveTrack);
      trackArea.addEventListener("pointerup", onPointerUpTrack);
      trackArea.addEventListener("pointercancel", onPointerUpTrack);
    }
  });
}

function syncOscillatorsUI() {
  OSC_PARAM_KEYS.forEach(param => updateParamRowVisual(param));
}

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

        if (param === "customParam") {
          inst.customVal = val;
          if (sIdx === activeSynthIdx) {
            updateParamRowVisual("customParam");
          }
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
   UI Steuerung & Dynamisch erweiterbare Kopfzeile
   ============================================================ */
const expandHeaderBtn = document.getElementById("expandHeaderBtn");
const expandBtnTxt = document.getElementById("expandBtnTxt");
const hudCenterCapsule = document.getElementById("hudCenterCapsule");

const synthSelect = document.getElementById("synthSelect");
const microPillsBar = document.getElementById("microPillsBar");
const formulaInline = document.getElementById("formulaInline");
const drawerPillsA = document.getElementById("drawerPillsA");
const drawerPillsB = document.getElementById("drawerPillsB");
const drawerSynthName = document.getElementById("drawerSynthName");
const drawerSynthSub = document.getElementById("drawerSynthSub");
const drawerFormulaLatex = document.getElementById("drawerFormulaLatex");

const synthBadge = document.getElementById("synthBadge");
const badgeName = document.getElementById("badgeName");
const badgeVoices = document.getElementById("badgeVoices");
const activeSynthTag = document.getElementById("activeSynthTag");
// 7-Bank Definitionen & Universal Controller