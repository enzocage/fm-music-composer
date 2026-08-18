"use strict";

/* ============================================================
   130 HOCHPRÄZISE FM-SYNTHESIZER DEFINITIONEN (13 PROGRESSIVE BÄNKE)
   Mit 24-Parameter Matrix, Formel-Metadaten & 3 Klangpresets
   ============================================================ */
const SYNTH_DEFS = [
  {
  "id": 0,
  "name": "Pure Chowning Sine (1:1)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Grundlegende Chowning 1:1 Frequenzmodulation. 4 Kernparameter für pure Sinus-Klangfarben.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(2π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · 4 Parameter: Ratio r2, Index I0, Attack, Release",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 30,
    "mod_I0": 2,
    "mod_dI": 1,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.02,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 1.8,
    "flt_cutoff": 14000,
    "flt_reso": 0.7,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 30,
        "mod_I0": 2,
        "mod_dI": 1,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.02,
        "env_dec": 0.5,
        "env_sus": 80,
        "env_rel": 1.8,
        "flt_cutoff": 14000,
        "flt_reso": 0.7,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 38,
        "mod_I0": 3,
        "mod_dI": 1.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.4,
        "env_atk": 0.02,
        "env_dec": 0.5,
        "env_sus": 80,
        "env_rel": 1.8,
        "flt_cutoff": 16000,
        "flt_reso": 0.98,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 30,
        "mod_I0": 1.3,
        "mod_dI": 0.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.086,
        "env_dec": 0.5,
        "env_sus": 80,
        "env_rel": 2.52,
        "flt_cutoff": 9800,
        "flt_reso": 0.52,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2
      }
    }
  }
},
  {
  "id": 1,
  "name": "Warm Electric FM Piano",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Warmes 2-Operator E-Piano mit lebendigem Glöckchen-Anschlag.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(2π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Ratio 1:1, schnelles Attack",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 35,
    "mod_I0": 2.4,
    "mod_dI": 1.2,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.005,
    "env_dec": 0.7,
    "env_sus": 45,
    "env_rel": 2.2,
    "flt_cutoff": 12000,
    "flt_reso": 0.9,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2.5
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 35,
        "mod_I0": 2.4,
        "mod_dI": 1.2,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.05,
        "env_atk": 0.005,
        "env_dec": 0.7,
        "env_sus": 45,
        "env_rel": 2.2,
        "flt_cutoff": 12000,
        "flt_reso": 0.9,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.4,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2.5
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 44,
        "mod_I0": 3.6,
        "mod_dI": 1.92,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.47,
        "env_atk": 0.005,
        "env_dec": 0.7,
        "env_sus": 45,
        "env_rel": 2.2,
        "flt_cutoff": 16000,
        "flt_reso": 1.26,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.4,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2.5
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 35,
        "mod_I0": 1.56,
        "mod_dI": 0.72,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.059,
        "env_dec": 0.7,
        "env_sus": 45,
        "env_rel": 3.08,
        "flt_cutoff": 8400,
        "flt_reso": 0.68,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.4,
        "vol": 0.88,
        "lfo": 0.1,
        "vibDepth": 2.5
      }
    }
  }
},
  {
  "id": 2,
  "name": "Classic FM Sub-Bass",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Trockener, druckvoller 2-Op Bass mit schnellem Release.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π·0.5·<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(2π·0.5·<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Ratio 0.5:0.5, harter Punch",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 15,
    "mod_I0": 3.5,
    "mod_dI": 1.5,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 10,
    "env_rel": 0.35,
    "flt_cutoff": 6500,
    "flt_reso": 1.2,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.92,
    "lfo": 0.05,
    "vibDepth": 0
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 0.5,
        "r2_ratio": 0.5,
        "r3_ratio": 1,
        "r4_ratio": 0.25,
        "op_detune": 0,
        "op_spread": 15,
        "mod_I0": 3.5,
        "mod_dI": 1.5,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.1,
        "env_atk": 0.002,
        "env_dec": 0.35,
        "env_sus": 10,
        "env_rel": 0.35,
        "flt_cutoff": 6500,
        "flt_reso": 1.2,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.5,
        "vol": 0.92,
        "lfo": 0.05,
        "vibDepth": 0
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 0.5,
        "r2_ratio": 0.5,
        "r3_ratio": 1,
        "r4_ratio": 0.25,
        "op_detune": 0,
        "op_spread": 19,
        "mod_I0": 5.25,
        "mod_dI": 2.4,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.54,
        "env_atk": 0.002,
        "env_dec": 0.35,
        "env_sus": 10,
        "env_rel": 0.35,
        "flt_cutoff": 8775,
        "flt_reso": 1.68,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.5,
        "vol": 0.92,
        "lfo": 0.05,
        "vibDepth": 0
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 0.5,
        "r2_ratio": 0.5,
        "r3_ratio": 1,
        "r4_ratio": 0.25,
        "op_detune": 0,
        "op_spread": 15,
        "mod_I0": 2.27,
        "mod_dI": 0.9,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.054,
        "env_dec": 0.35,
        "env_sus": 10,
        "env_rel": 0.49,
        "flt_cutoff": 4550,
        "flt_reso": 0.9,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.5,
        "vol": 0.92,
        "lfo": 0.05,
        "vibDepth": 0
      }
    }
  }
},
  {
  "id": 3,
  "name": "Bright FM Organ (1:2)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Brilliante Kirchen- und Rockorgel mit 1:2 Oberton-Struktur.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(4π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Ratio 1:2, voller Sustain",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 2.2,
    "mod_dI": 0.8,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 90,
    "env_rel": 0.8,
    "flt_cutoff": 14000,
    "flt_reso": 0.8,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 2
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 4,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 40,
        "mod_I0": 2.2,
        "mod_dI": 0.8,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.01,
        "env_dec": 0.5,
        "env_sus": 90,
        "env_rel": 0.8,
        "flt_cutoff": 14000,
        "flt_reso": 0.8,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.2,
        "vol": 0.86,
        "lfo": 0.12,
        "vibDepth": 2
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 4,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 3.3,
        "mod_dI": 1.28,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.4,
        "env_atk": 0.01,
        "env_dec": 0.5,
        "env_sus": 90,
        "env_rel": 0.8,
        "flt_cutoff": 16000,
        "flt_reso": 1.12,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.2,
        "vol": 0.86,
        "lfo": 0.12,
        "vibDepth": 2
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 4,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 40,
        "mod_I0": 1.43,
        "mod_dI": 0.48,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.068,
        "env_dec": 0.5,
        "env_sus": 90,
        "env_rel": 1.12,
        "flt_cutoff": 9800,
        "flt_reso": 0.6,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.2,
        "vol": 0.86,
        "lfo": 0.12,
        "vibDepth": 2
      }
    }
  }
},
  {
  "id": 4,
  "name": "Pure Bell Chime (1:3.5)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Kristalline Glocken mit inharmonischem 1:3.5 Oberton-Verhältnis.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(7π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Inharmonisches 1:3.5 Intervall",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 50,
    "mod_I0": 3.2,
    "mod_dI": 1.4,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.002,
    "env_dec": 1.2,
    "env_sus": 15,
    "env_rel": 4,
    "flt_cutoff": 15000,
    "flt_reso": 1,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.85,
    "lfo": 0.08,
    "vibDepth": 1.5
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 3.5,
        "r3_ratio": 7,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 3.2,
        "mod_dI": 1.4,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.05,
        "env_atk": 0.002,
        "env_dec": 1.2,
        "env_sus": 15,
        "env_rel": 4,
        "flt_cutoff": 15000,
        "flt_reso": 1,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.2,
        "vol": 0.85,
        "lfo": 0.08,
        "vibDepth": 1.5
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 3.5,
        "r3_ratio": 7,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 63,
        "mod_I0": 4.8,
        "mod_dI": 2.24,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.47,
        "env_atk": 0.002,
        "env_dec": 1.2,
        "env_sus": 15,
        "env_rel": 4,
        "flt_cutoff": 16000,
        "flt_reso": 1.4,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.2,
        "vol": 0.85,
        "lfo": 0.08,
        "vibDepth": 1.5
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 3.5,
        "r3_ratio": 7,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 2.08,
        "mod_dI": 0.84,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.054,
        "env_dec": 1.2,
        "env_sus": 15,
        "env_rel": 5.6,
        "flt_cutoff": 10500,
        "flt_reso": 0.75,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.2,
        "vol": 0.85,
        "lfo": 0.08,
        "vibDepth": 1.5
      }
    }
  }
},
  {
  "id": 5,
  "name": "Soft Ambient Flute (1:2)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Sanfte, weiche Sinus-Flöte mit leisem Oberton-Schimmer.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(4π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Weiches Attack (60ms), warmes Release",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 1.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 45,
    "mod_I0": 1.2,
    "mod_dI": 0.8,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.08,
    "env_dec": 0.6,
    "env_sus": 85,
    "env_rel": 2.2,
    "flt_cutoff": 10000,
    "flt_reso": 0.9,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 1.2,
    "vol": 0.88,
    "lfo": 0.12,
    "vibDepth": 4.5
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 3,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 45,
        "mod_I0": 1.2,
        "mod_dI": 0.8,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.08,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 2.2,
        "flt_cutoff": 10000,
        "flt_reso": 0.9,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.2,
        "vol": 0.88,
        "lfo": 0.12,
        "vibDepth": 4.5
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 3,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 56,
        "mod_I0": 1.8,
        "mod_dI": 1.28,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.4,
        "env_atk": 0.08,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 2.2,
        "flt_cutoff": 13500,
        "flt_reso": 1.26,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.2,
        "vol": 0.88,
        "lfo": 0.12,
        "vibDepth": 4.5
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2,
        "r3_ratio": 3,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 45,
        "mod_I0": 0.78,
        "mod_dI": 0.48,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.194,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 3.08,
        "flt_cutoff": 7000,
        "flt_reso": 0.68,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.2,
        "vol": 0.88,
        "lfo": 0.12,
        "vibDepth": 4.5
      }
    }
  }
},
  {
  "id": 6,
  "name": "Simple Brass Horn (1:1)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Klassisches 2-Op FM Blechbläser-Horn mit weichem Anblas-Verhalten.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(2π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Ratio 1:1, mittleres Attack",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 50,
    "mod_I0": 2.8,
    "mod_dI": 1.6,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.06,
    "env_dec": 0.5,
    "env_sus": 75,
    "env_rel": 1.5,
    "flt_cutoff": 9500,
    "flt_reso": 1.1,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.86,
    "lfo": 0.14,
    "vibDepth": 3.5
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 2.8,
        "mod_dI": 1.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.1,
        "env_atk": 0.06,
        "env_dec": 0.5,
        "env_sus": 75,
        "env_rel": 1.5,
        "flt_cutoff": 9500,
        "flt_reso": 1.1,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.8,
        "vol": 0.86,
        "lfo": 0.14,
        "vibDepth": 3.5
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 63,
        "mod_I0": 4.2,
        "mod_dI": 2.56,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.54,
        "env_atk": 0.06,
        "env_dec": 0.5,
        "env_sus": 75,
        "env_rel": 1.5,
        "flt_cutoff": 12825,
        "flt_reso": 1.54,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.8,
        "vol": 0.86,
        "lfo": 0.14,
        "vibDepth": 3.5
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 1.82,
        "mod_dI": 0.96,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.158,
        "env_dec": 0.5,
        "env_sus": 75,
        "env_rel": 2.1,
        "flt_cutoff": 6650,
        "flt_reso": 0.83,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.8,
        "vol": 0.86,
        "lfo": 0.14,
        "vibDepth": 3.5
      }
    }
  }
},
  {
  "id": 7,
  "name": "Plucked Kalimba Tone (1:5.4)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Holziges Daumenklavier mit metallischem 1:5.4 Oberton-Glanz.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(10.8π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Sofortiges Attack (1ms), kurzes Release",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 2.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 5.4,
    "r3_ratio": 10.8,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 2.6,
    "mod_dI": 1,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.001,
    "env_dec": 0.35,
    "env_sus": 5,
    "env_rel": 0.7,
    "flt_cutoff": 11000,
    "flt_reso": 1.2,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 2.6,
    "vol": 0.9,
    "lfo": 0.06,
    "vibDepth": 1
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 5.4,
        "r3_ratio": 10.8,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 40,
        "mod_I0": 2.6,
        "mod_dI": 1,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.05,
        "env_atk": 0.001,
        "env_dec": 0.35,
        "env_sus": 5,
        "env_rel": 0.7,
        "flt_cutoff": 11000,
        "flt_reso": 1.2,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.6,
        "vol": 0.9,
        "lfo": 0.06,
        "vibDepth": 1
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 5.4,
        "r3_ratio": 10.8,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 3.9,
        "mod_dI": 1.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.47,
        "env_atk": 0.001,
        "env_dec": 0.35,
        "env_sus": 5,
        "env_rel": 0.7,
        "flt_cutoff": 14850,
        "flt_reso": 1.68,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.6,
        "vol": 0.9,
        "lfo": 0.06,
        "vibDepth": 1
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 5.4,
        "r3_ratio": 10.8,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 40,
        "mod_I0": 1.69,
        "mod_dI": 0.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.052,
        "env_dec": 0.35,
        "env_sus": 5,
        "env_rel": 0.98,
        "flt_cutoff": 7700,
        "flt_reso": 0.9,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 2.6,
        "vol": 0.9,
        "lfo": 0.06,
        "vibDepth": 1
      }
    }
  }
},
  {
  "id": 8,
  "name": "Resonant Wood Click (1:2.5)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Kurzer, knackiger Holz-Block Impuls mit hoher FM-Modulation.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(5π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Ratio 1:2.5, ultrakurzes Decay",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 3.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 30,
    "mod_I0": 3.8,
    "mod_dI": 1.2,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.001,
    "env_dec": 0.15,
    "env_sus": 0,
    "env_rel": 0.2,
    "flt_cutoff": 8000,
    "flt_reso": 1.5,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 3.8,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2.5,
        "r3_ratio": 5,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 30,
        "mod_I0": 3.8,
        "mod_dI": 1.2,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.15,
        "env_atk": 0.001,
        "env_dec": 0.15,
        "env_sus": 0,
        "env_rel": 0.2,
        "flt_cutoff": 8000,
        "flt_reso": 1.5,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.8,
        "vol": 0.9,
        "lfo": 0,
        "vibDepth": 0
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2.5,
        "r3_ratio": 5,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 38,
        "mod_I0": 5.7,
        "mod_dI": 1.92,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.61,
        "env_atk": 0.001,
        "env_dec": 0.15,
        "env_sus": 0,
        "env_rel": 0.2,
        "flt_cutoff": 10800,
        "flt_reso": 2.1,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.8,
        "vol": 0.9,
        "lfo": 0,
        "vibDepth": 0
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 2.5,
        "r3_ratio": 5,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 30,
        "mod_I0": 2.47,
        "mod_dI": 0.72,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.052,
        "env_dec": 0.15,
        "env_sus": 0,
        "env_rel": 0.28,
        "flt_cutoff": 5600,
        "flt_reso": 1.13,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 3.8,
        "vol": 0.9,
        "lfo": 0,
        "vibDepth": 0
      }
    }
  }
},
  {
  "id": 9,
  "name": "Space Sine Lead (1:1)",
  "category": "Bank A: Pure Sine & Einstieg (4 Params)",
  "desc": "Schwebender Theremin-artiger Solo-Lead mit warmem Vibrato.",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>0</sub>·sin(2π<em>f</em><sub>c</sub><em>t</em>))",
  "formulaSub": "Stufe 1 · Schwebender Theremin-Sound",
  "dspType": "matrix24",
  "customParam": {
    "name": "Physik-Kern",
    "min": 0,
    "max": 10,
    "step": 0.01,
    "val": 1.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 50,
    "mod_I0": 1.8,
    "mod_dI": 1,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.04,
    "env_dec": 0.6,
    "env_sus": 85,
    "env_rel": 2,
    "flt_cutoff": 12000,
    "flt_reso": 1,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 1.8,
    "vol": 0.88,
    "lfo": 0.15,
    "vibDepth": 5
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": {
    "standard": {
      "name": "Standard",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 1.8,
        "mod_dI": 1,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.04,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 2,
        "flt_cutoff": 12000,
        "flt_reso": 1,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.8,
        "vol": 0.88,
        "lfo": 0.15,
        "vibDepth": 5
      }
    },
    "intensiv": {
      "name": "Intensiv",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 63,
        "mod_I0": 2.7,
        "mod_dI": 1.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0.5,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1.4,
        "env_atk": 0.04,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 2,
        "flt_cutoff": 16000,
        "flt_reso": 1.4,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.8,
        "vol": 0.88,
        "lfo": 0.15,
        "vibDepth": 5
      }
    },
    "sanft": {
      "name": "Sanft",
      "params": {
        "r1_ratio": 1,
        "r2_ratio": 1,
        "r3_ratio": 2,
        "r4_ratio": 0.5,
        "op_detune": 0,
        "op_spread": 50,
        "mod_I0": 1.17,
        "mod_dI": 0.6,
        "mod_cross": 0,
        "mod_fb": 0,
        "mod_skew": 0,
        "shape_fold": 0,
        "shape_morph": 0,
        "shape_bias": 0,
        "shape_drive": 1,
        "env_atk": 0.122,
        "env_dec": 0.6,
        "env_sus": 85,
        "env_rel": 2.8,
        "flt_cutoff": 8400,
        "flt_reso": 0.75,
        "flt_envAmt": 0,
        "space_pan": 50,
        "custom_math": 1.8,
        "vol": 0.88,
        "lfo": 0.15,
        "vibDepth": 5
      }
    }
  }
},
  {
  "id": 10,
  "name": "Pure Chowning Sine FM",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Klassische 1973 John Chowning Frequenzmodulation (Stanford CCRMA)",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Bessel-Funktionen J_n(I) bestimmen Amplituden der Seitenbänder",
  "dspType": "matrix24",
  "customParam": {
    "name": "Bessel-Ordnung n",
    "min": 1,
    "max": 8,
    "step": 1,
    "val": 3
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 30,
    "mod_I0": 2,
    "mod_dI": 1,
    "mod_cross": 0,
    "mod_fb": 0,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.02,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 2,
    "flt_cutoff": 14000,
    "flt_reso": 0.7,
    "flt_envAmt": 0,
    "space_pan": 50,
    "custom_math": 3,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2,
    "ratio": 1,
    "I0": 2,
    "dI": 1,
    "atk": 0.02,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 2,
      "mod_cross": 0,
      "shape_fold": 0,
      "flt_cutoff": 14000,
      "r": 1,
      "i": 2,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.8,
      "mod_cross": 0.5,
      "shape_fold": 0.8,
      "flt_cutoff": 18000,
      "r": 1.5,
      "i": 2.8,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.2,
      "mod_cross": 0,
      "shape_fold": 0,
      "flt_cutoff": 8400,
      "r": 0.75,
      "i": 1.2,
      "d": 0.5
    }
  ]
},
  {
  "id": 11,
  "name": "Golden Ratio FM (Φ = 1.618)",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Inharmonische Spektren basierend auf dem Goldenen Schnitt",
  "formulaLatex": "<em>f</em><sub>m</sub> = <em>f</em><sub>c</sub> · ((1 + √5) / 2)",
  "formulaSub": "Mathematisch maximale Inharmonizität ohne Perioden-Dopplung",
  "dspType": "matrix24",
  "customParam": {
    "name": "Goldene Potenz Φ^k",
    "min": 0.5,
    "max": 4,
    "step": 0.05,
    "val": 1.618
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 2.618,
    "r4_ratio": 0.618,
    "op_detune": 0,
    "op_spread": 50,
    "mod_I0": 2.5,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.05,
    "env_dec": 0.7,
    "env_sus": 75,
    "env_rel": 3,
    "flt_cutoff": 12000,
    "flt_reso": 1,
    "flt_envAmt": 500,
    "space_pan": 50,
    "custom_math": 1.618,
    "vol": 0.85,
    "lfo": 0.08,
    "vibDepth": 3,
    "ratio": 1.618,
    "I0": 2.5,
    "dI": 1.4,
    "atk": 0.05,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.618,
      "mod_I0": 2.5,
      "mod_cross": 0.5,
      "shape_fold": 0.3,
      "flt_cutoff": 12000,
      "r": 1.618,
      "i": 2.5,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.427,
      "mod_I0": 3.5,
      "mod_cross": 1.3,
      "shape_fold": 1.25,
      "flt_cutoff": 15600,
      "r": 2.427,
      "i": 3.5,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.2135,
      "mod_I0": 1.5,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 1.2135,
      "i": 1.5,
      "d": 0.7
    }
  ]
},
  {
  "id": 12,
  "name": "Fibonacci Harmonic Series",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Modulator-Frequenzen folgen der Fibonacci-Folge F_n = F_{n-1} + F_{n-2}",
  "formulaLatex": "<em>r</em><sub>k</sub> ∈ {1, 2, 3, 5, 8, 13}",
  "formulaSub": "Organisch dichte Obertonstruktur",
  "dspType": "matrix24",
  "customParam": {
    "name": "Fibonacci Stufe N",
    "min": 1,
    "max": 6,
    "step": 1,
    "val": 4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 5,
    "op_detune": 2,
    "op_spread": 60,
    "mod_I0": 2.2,
    "mod_dI": 1.3,
    "mod_cross": 0.7,
    "mod_fb": 0.15,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.03,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 2.5,
    "flt_cutoff": 11500,
    "flt_reso": 1.4,
    "flt_envAmt": 800,
    "space_pan": 50,
    "custom_math": 4,
    "vol": 0.84,
    "lfo": 0.12,
    "vibDepth": 2.5,
    "ratio": 2,
    "I0": 2.2,
    "dI": 1.3,
    "atk": 0.03,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.2,
      "mod_cross": 0.7,
      "shape_fold": 0.4,
      "flt_cutoff": 11500,
      "r": 2,
      "i": 2.2,
      "d": 1.3
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.08,
      "mod_cross": 1.6199999999999999,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 14950,
      "r": 3,
      "i": 3.08,
      "d": 1.6900000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.32,
      "mod_cross": 0.27999999999999997,
      "shape_fold": 0,
      "flt_cutoff": 6900,
      "r": 1.5,
      "i": 1.32,
      "d": 0.65
    }
  ]
},
  {
  "id": 13,
  "name": "Riemann Zeta Zeros",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Modulations-Ratios skaliert nach den ersten nicht-trivialen Nullstellen der Zeta-Funktion",
  "formulaLatex": "ζ(s) = 0 ⇒ Im(s) ∈ {14.1347, 21.0220, 25.0108}",
  "formulaSub": "Quantenchaotische Primzahl-Spektren",
  "dspType": "matrix24",
  "customParam": {
    "name": "Zeta Nullstelle γ_k",
    "min": 14,
    "max": 35,
    "step": 0.1,
    "val": 14.13
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.413,
    "r3_ratio": 2.102,
    "r4_ratio": 0.707,
    "op_detune": 1,
    "op_spread": 65,
    "mod_I0": 2.8,
    "mod_dI": 1.5,
    "mod_cross": 1.1,
    "mod_fb": 0.2,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 0.06,
    "env_dec": 0.8,
    "env_sus": 75,
    "env_rel": 3.2,
    "flt_cutoff": 10000,
    "flt_reso": 1.8,
    "flt_envAmt": 1200,
    "space_pan": 48,
    "custom_math": 14.13,
    "vol": 0.83,
    "lfo": 0.1,
    "vibDepth": 3.2,
    "ratio": 1.413,
    "I0": 2.8,
    "dI": 1.5,
    "atk": 0.06,
    "rel": 3.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.413,
      "mod_I0": 2.8,
      "mod_cross": 1.1,
      "shape_fold": 0.6,
      "flt_cutoff": 10000,
      "r": 1.413,
      "i": 2.8,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.1195,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 2.2600000000000002,
      "shape_fold": 1.7,
      "flt_cutoff": 13000,
      "r": 2.1195,
      "i": 3.9199999999999995,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.05975,
      "mod_I0": 1.68,
      "mod_cross": 0.44000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 6000,
      "r": 1.05975,
      "i": 1.68,
      "d": 0.75
    }
  ]
},
  {
  "id": 14,
  "name": "Bessel Formant Vowel FM",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Akustische Vokalformanten (A-E-I-O-U) synthetisiert via parallele Bessel-Trauben",
  "formulaLatex": "F₁ ≈ 700 Hz, F₂ ≈ 1200 Hz (Vokal /a/)",
  "formulaSub": "Menschlicher Vokaltrakt-Resonanzfilter",
  "dspType": "matrix24",
  "customParam": {
    "name": "Formant-Morph (A-E-I-O-U)",
    "min": 0,
    "max": 4,
    "step": 0.05,
    "val": 1.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 4.2,
    "r4_ratio": 0.5,
    "op_detune": 3,
    "op_spread": 70,
    "mod_I0": 3.2,
    "mod_dI": 1.6,
    "mod_cross": 1,
    "mod_fb": 0.25,
    "mod_skew": 0.15,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.08,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 2.2,
    "flt_cutoff": 3500,
    "flt_reso": 4.5,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 1.5,
    "vol": 0.85,
    "lfo": 0.15,
    "vibDepth": 4.5,
    "ratio": 2.5,
    "I0": 3.2,
    "dI": 1.6,
    "atk": 0.08,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3.2,
      "mod_cross": 1,
      "shape_fold": 0.8,
      "flt_cutoff": 3500,
      "r": 2.5,
      "i": 3.2,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.1,
      "shape_fold": 2,
      "flt_cutoff": 4550,
      "r": 3.75,
      "i": 4.4799999999999995,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 1.92,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 2100,
      "r": 1.875,
      "i": 1.92,
      "d": 0.8
    }
  ]
},
  {
  "id": 15,
  "name": "Silver Ratio (δ_S = 2.414)",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Metallische Glocken und Platten basierend auf dem Silbernen Schnitt 1 + √2",
  "formulaLatex": "δ<sub>S</sub> = 1 + √2 ≈ 2.41421356",
  "formulaSub": "Pell-Zahlen und metallische Kristall-Gitter",
  "dspType": "matrix24",
  "customParam": {
    "name": "Pell-Ordnung k",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 2.41
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.414,
    "r3_ratio": 4.828,
    "r4_ratio": 0.414,
    "op_detune": 0,
    "op_spread": 55,
    "mod_I0": 2.7,
    "mod_dI": 1.5,
    "mod_cross": 0.9,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.01,
    "env_dec": 0.9,
    "env_sus": 50,
    "env_rel": 3.8,
    "flt_cutoff": 11000,
    "flt_reso": 1.6,
    "flt_envAmt": 2200,
    "space_pan": 50,
    "custom_math": 2.41,
    "vol": 0.84,
    "lfo": 0.08,
    "vibDepth": 2.5,
    "ratio": 2.414,
    "I0": 2.7,
    "dI": 1.5,
    "atk": 0.01,
    "rel": 3.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.414,
      "mod_I0": 2.7,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 11000,
      "r": 2.414,
      "i": 2.7,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.6210000000000004,
      "mod_I0": 3.78,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 14300,
      "r": 3.6210000000000004,
      "i": 3.78,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.8105000000000002,
      "mod_I0": 1.62,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 1.8105000000000002,
      "i": 1.62,
      "d": 0.75
    }
  ]
},
  {
  "id": 16,
  "name": "Euler Inharmonicity",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Steife Saitenphysik mit Eulerschem Elastizitätsmodul",
  "formulaLatex": "<em>f</em><sub>n</sub> = n·<em>f</em><sub>0</sub>·√(1 + B·n²)",
  "formulaSub": "Klavier- und Cembalo-Inharmonizitätsfaktor B",
  "dspType": "matrix24",
  "customParam": {
    "name": "Steifigkeit B",
    "min": 0.0001,
    "max": 0.05,
    "step": 0.001,
    "val": 0.015
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.015,
    "r3_ratio": 3.06,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 40,
    "mod_I0": 2.4,
    "mod_dI": 1.2,
    "mod_cross": 0.6,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.005,
    "env_dec": 0.7,
    "env_sus": 60,
    "env_rel": 2.8,
    "flt_cutoff": 12500,
    "flt_reso": 1.2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 0.015,
    "vol": 0.86,
    "lfo": 0.1,
    "vibDepth": 2.2,
    "ratio": 2.015,
    "I0": 2.4,
    "dI": 1.2,
    "atk": 0.005,
    "rel": 2.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.015,
      "mod_I0": 2.4,
      "mod_cross": 0.6,
      "shape_fold": 0.2,
      "flt_cutoff": 12500,
      "r": 2.015,
      "i": 2.4,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.0225,
      "mod_I0": 3.36,
      "mod_cross": 1.46,
      "shape_fold": 1.1,
      "flt_cutoff": 16250,
      "r": 3.0225,
      "i": 3.36,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.51125,
      "mod_I0": 1.44,
      "mod_cross": 0.24,
      "shape_fold": 0,
      "flt_cutoff": 7500,
      "r": 1.51125,
      "i": 1.44,
      "d": 0.6
    }
  ]
},
  {
  "id": 17,
  "name": "Fourier Additive Morph",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Fourier-Synthese geradzahliger und ungeradzahliger Harmonischer",
  "formulaLatex": "<em>y</em>(<em>t</em>) = Σ (1/n)·sin(2π·n·<em>f</em><sub>c</sub><em>t</em>)",
  "formulaSub": "Rechteck- zu Sägezahn-Transformation",
  "dspType": "matrix24",
  "customParam": {
    "name": "Harmonische n_max",
    "min": 2,
    "max": 16,
    "step": 1,
    "val": 7
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 5,
    "r4_ratio": 7,
    "op_detune": 0.5,
    "op_spread": 45,
    "mod_I0": 1.8,
    "mod_dI": 0.9,
    "mod_cross": 0.4,
    "mod_fb": 0.05,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.02,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 2,
    "flt_cutoff": 13000,
    "flt_reso": 0.9,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 7,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 1.8,
    "ratio": 3,
    "I0": 1.8,
    "dI": 0.9,
    "atk": 0.02,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 1.8,
      "mod_cross": 0.4,
      "shape_fold": 0.1,
      "flt_cutoff": 13000,
      "r": 3,
      "i": 1.8,
      "d": 0.9
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.5,
      "mod_I0": 2.52,
      "mod_cross": 1.1400000000000001,
      "shape_fold": 0.9500000000000001,
      "flt_cutoff": 16900,
      "r": 4.5,
      "i": 2.52,
      "d": 1.1700000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 1.08,
      "mod_cross": 0.16000000000000003,
      "shape_fold": 0,
      "flt_cutoff": 7800,
      "r": 2.25,
      "i": 1.08,
      "d": 0.45
    }
  ]
},
  {
  "id": 18,
  "name": "Gaussian Bell Chime",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Klassische Glocken mit Gaußscher Spektralhüllkurve",
  "formulaLatex": "A(f) = exp(-(f - f₀)² / (2σ²))",
  "formulaSub": "Stochastische Dämpfung von Kirchenglocken",
  "dspType": "matrix24",
  "customParam": {
    "name": "Gauß-Breite σ",
    "min": 100,
    "max": 2000,
    "step": 20,
    "val": 650
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.76,
    "r3_ratio": 5.4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 60,
    "mod_I0": 3.5,
    "mod_dI": 1.8,
    "mod_cross": 1.2,
    "mod_fb": 0.2,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.003,
    "env_dec": 1.2,
    "env_sus": 25,
    "env_rel": 4.5,
    "flt_cutoff": 14000,
    "flt_reso": 1.5,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 650,
    "vol": 0.85,
    "lfo": 0.05,
    "vibDepth": 2,
    "ratio": 2.76,
    "I0": 3.5,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 4.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.76,
      "mod_I0": 3.5,
      "mod_cross": 1.2,
      "shape_fold": 0.3,
      "flt_cutoff": 14000,
      "r": 2.76,
      "i": 3.5,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.14,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.42,
      "shape_fold": 1.25,
      "flt_cutoff": 18000,
      "r": 4.14,
      "i": 4.8999999999999995,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.07,
      "mod_I0": 2.1,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 8400,
      "r": 2.07,
      "i": 2.1,
      "d": 0.9
    }
  ]
},
  {
  "id": 19,
  "name": "Planck Quantum Wave",
  "category": "Bank B: CCRMA & Harmonik (6 Params)",
  "desc": "Schwarzkörperstrahlung und diskrete Quanten-Energieniveaus",
  "formulaLatex": "E = h·ν, I(ν) = (2hν³/c²) / (exp(hν/kT) - 1)",
  "formulaSub": "Thermisches Rausch- und Photonenspektrum",
  "dspType": "matrix24",
  "customParam": {
    "name": "Temperatur T (Kelvin)",
    "min": 300,
    "max": 8000,
    "step": 50,
    "val": 5200
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.732,
    "r3_ratio": 3.464,
    "r4_ratio": 0.577,
    "op_detune": 4,
    "op_spread": 75,
    "mod_I0": 2.9,
    "mod_dI": 1.6,
    "mod_cross": 1,
    "mod_fb": 0.3,
    "mod_skew": 0.1,
    "shape_fold": 0.7,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.35,
    "env_atk": 0.07,
    "env_dec": 0.7,
    "env_sus": 75,
    "env_rel": 3,
    "flt_cutoff": 9500,
    "flt_reso": 2.2,
    "flt_envAmt": 1400,
    "space_pan": 50,
    "custom_math": 5200,
    "vol": 0.83,
    "lfo": 0.12,
    "vibDepth": 3.5,
    "ratio": 1.732,
    "I0": 2.9,
    "dI": 1.6,
    "atk": 0.07,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.732,
      "mod_I0": 2.9,
      "mod_cross": 1,
      "shape_fold": 0.7,
      "flt_cutoff": 9500,
      "r": 1.732,
      "i": 2.9,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.598,
      "mod_I0": 4.06,
      "mod_cross": 2.1,
      "shape_fold": 1.8499999999999999,
      "flt_cutoff": 12350,
      "r": 2.598,
      "i": 4.06,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.299,
      "mod_I0": 1.74,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 1.299,
      "i": 1.74,
      "d": 0.8
    }
  ]
},
  {
  "id": 20,
  "name": "DX7 Rhodes 1983",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Das legendäre FM E-Piano Preset 11 mit kristallenen Glocken-Tines",
  "formulaLatex": "Algorithm 5: 3 Carriers mit separaten Modulatoren",
  "formulaSub": "Typischer 80s E-Piano Sound (David Foster, Whitney Houston)",
  "dspType": "matrix24",
  "customParam": {
    "name": "Tine Brillianz",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 14,
    "r4_ratio": 0.5,
    "op_detune": 1.2,
    "op_spread": 65,
    "mod_I0": 2.4,
    "mod_dI": 1.2,
    "mod_cross": 1.8,
    "mod_fb": 0.2,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.005,
    "env_dec": 0.8,
    "env_sus": 45,
    "env_rel": 2.5,
    "flt_cutoff": 12000,
    "flt_reso": 1.2,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 3,
    "ratio": 1,
    "I0": 2.4,
    "dI": 1.2,
    "atk": 0.005,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 2.4,
      "mod_cross": 1.8,
      "shape_fold": 0.2,
      "flt_cutoff": 12000,
      "r": 1,
      "i": 2.4,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.36,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 1.1,
      "flt_cutoff": 15600,
      "r": 1.5,
      "i": 3.36,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.44,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 0.75,
      "i": 1.44,
      "d": 0.6
    }
  ]
},
  {
  "id": 21,
  "name": "Lately Bass Solid FM",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "TX81Z Preset #1 (Solid / Lately Bass) - Der Punch-König des House & R&B",
  "formulaLatex": "Alg 4: Modulator 4 -> Modulator 3 -> Carrier",
  "formulaSub": "Madonna, Janet Jackson, Classic 90s House Bassline",
  "dspType": "matrix24",
  "customParam": {
    "name": "Sub-Punch Tiefe",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 20,
    "mod_I0": 4.2,
    "mod_dI": 2,
    "mod_cross": 1.5,
    "mod_fb": 0.65,
    "mod_skew": 0.1,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 0,
    "env_rel": 0.25,
    "flt_cutoff": 4500,
    "flt_reso": 2.8,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.92,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 0.5,
    "I0": 4.2,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.25,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 0.5,
      "mod_I0": 4.2,
      "mod_cross": 1.5,
      "shape_fold": 0.5,
      "flt_cutoff": 4500,
      "r": 0.5,
      "i": 4.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 5.88,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 1.55,
      "flt_cutoff": 5850,
      "r": 0.75,
      "i": 5.88,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.375,
      "mod_I0": 2.52,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 2700,
      "r": 0.375,
      "i": 2.52,
      "d": 1
    }
  ]
},
  {
  "id": 22,
  "name": "80s FM Brass Fanfare",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Mächtige DX-Bläser mit typischem dynamischen Filter/Mod-Bite",
  "formulaLatex": "Dual Carrier Horn Kaskade",
  "formulaSub": "Toto, Michael Jackson 'Bad', Prince",
  "dspType": "matrix24",
  "customParam": {
    "name": "Blech-Biss Index",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 80,
    "mod_I0": 1.5,
    "mod_dI": 2.5,
    "mod_cross": 0.8,
    "mod_fb": 0.3,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.3,
    "env_atk": 0.07,
    "env_dec": 0.4,
    "env_sus": 75,
    "env_rel": 1.2,
    "flt_cutoff": 8000,
    "flt_reso": 1.8,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 3,
    "vol": 0.86,
    "lfo": 0.15,
    "vibDepth": 4,
    "ratio": 1,
    "I0": 1.5,
    "dI": 2.5,
    "atk": 0.07,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 1.5,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 8000,
      "r": 1,
      "i": 1.5,
      "d": 2.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.0999999999999996,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 10400,
      "r": 1.5,
      "i": 2.0999999999999996,
      "d": 3.25
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 0.8999999999999999,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 4800,
      "r": 0.75,
      "i": 0.8999999999999999,
      "d": 1.25
    }
  ]
},
  {
  "id": 23,
  "name": "Crystal Tubular Bells",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Schwere Orchester-Röhrenglocken mit metallischer Inharmonizität",
  "formulaLatex": "Inharmonic Ratio R2 = 3.52, R3 = 9.14",
  "formulaSub": "Mike Oldfield, Vangelis Chimes",
  "dspType": "matrix24",
  "customParam": {
    "name": "Röhren-Resonanz",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.52,
    "r3_ratio": 9.14,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 75,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 1.6,
    "mod_fb": 0.35,
    "mod_skew": 0.05,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.002,
    "env_dec": 1.5,
    "env_sus": 10,
    "env_rel": 5,
    "flt_cutoff": 15000,
    "flt_reso": 1.4,
    "flt_envAmt": 2000,
    "space_pan": 50,
    "custom_math": 4.2,
    "vol": 0.85,
    "lfo": 0.08,
    "vibDepth": 2,
    "ratio": 3.52,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.002,
    "rel": 5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.52,
      "mod_I0": 3.8,
      "mod_cross": 1.6,
      "shape_fold": 0.6,
      "flt_cutoff": 15000,
      "r": 3.52,
      "i": 3.8,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 5.28,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 1.7,
      "flt_cutoff": 18000,
      "r": 5.28,
      "i": 5.319999999999999,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.64,
      "mod_I0": 2.28,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 9000,
      "r": 2.64,
      "i": 2.28,
      "d": 0.75
    }
  ]
},
  {
  "id": 24,
  "name": "Log Drum Marimba",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Holzig-organisches Xylophon / Marimba mit schnellem Anschlag",
  "formulaLatex": "Resonanz-Ratio R2 = 4.0, R3 = 10.0",
  "formulaSub": "Steve Reich, African Balafon",
  "dspType": "matrix24",
  "customParam": {
    "name": "Holz-Resonanz",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 10,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 3.2,
    "mod_dI": 1,
    "mod_cross": 0.5,
    "mod_fb": 0.15,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.05,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.001,
    "env_dec": 0.28,
    "env_sus": 0,
    "env_rel": 0.3,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.88,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 4,
    "I0": 3.2,
    "dI": 1,
    "atk": 0.001,
    "rel": 0.3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4,
      "mod_I0": 3.2,
      "mod_cross": 0.5,
      "shape_fold": 0.2,
      "flt_cutoff": 11000,
      "r": 4,
      "i": 3.2,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 1.3,
      "shape_fold": 1.1,
      "flt_cutoff": 14300,
      "r": 6,
      "i": 4.4799999999999995,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 1.92,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 3,
      "i": 1.92,
      "d": 0.5
    }
  ]
},
  {
  "id": 25,
  "name": "FM Slap Funk Bass",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Drahtiger, funky Slap-Bass mit schneidendem Daumen-Attack",
  "formulaLatex": "Dual Operator FM Pluck",
  "formulaSub": "Level 42, Seinfeld Theme Bass",
  "dspType": "matrix24",
  "customParam": {
    "name": "Slap-Knack",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.8
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 7,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 2,
    "mod_cross": 2.2,
    "mod_fb": 0.45,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.2,
    "shape_drive": 1.6,
    "env_atk": 0.001,
    "env_dec": 0.25,
    "env_sus": 15,
    "env_rel": 0.4,
    "flt_cutoff": 6500,
    "flt_reso": 3.2,
    "flt_envAmt": 6000,
    "space_pan": 50,
    "custom_math": 3.8,
    "vol": 0.9,
    "lfo": 0.08,
    "vibDepth": 0,
    "ratio": 1,
    "I0": 4.5,
    "dI": 2,
    "atk": 0.001,
    "rel": 0.4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 4.5,
      "mod_cross": 2.2,
      "shape_fold": 0.8,
      "flt_cutoff": 6500,
      "r": 1,
      "i": 4.5,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 6.3,
      "mod_cross": 4,
      "shape_fold": 2,
      "flt_cutoff": 8450,
      "r": 1.5,
      "i": 6.3,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 0.8800000000000001,
      "shape_fold": 0,
      "flt_cutoff": 3900,
      "r": 0.75,
      "i": 2.6999999999999997,
      "d": 1
    }
  ]
},
  {
  "id": 26,
  "name": "Digital Glass Harp",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Schwebendes, zerbrechliches Kristallglas-Pad mit Chorus",
  "formulaLatex": "Glass Harmonics R2 = 5.0, R3 = 11.0",
  "formulaSub": "Enya, Brian Eno Glass Ambient",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kristall-Glanz",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 5,
    "r3_ratio": 11,
    "r4_ratio": 0.5,
    "op_detune": 4.5,
    "op_spread": 85,
    "mod_I0": 1.8,
    "mod_dI": 1.2,
    "mod_cross": 0.7,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.15,
    "env_dec": 0.9,
    "env_sus": 85,
    "env_rel": 3.5,
    "flt_cutoff": 13500,
    "flt_reso": 1.5,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 2.5,
    "vol": 0.85,
    "lfo": 0.18,
    "vibDepth": 3.5,
    "ratio": 5,
    "I0": 1.8,
    "dI": 1.2,
    "atk": 0.15,
    "rel": 3.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 5,
      "mod_I0": 1.8,
      "mod_cross": 0.7,
      "shape_fold": 0.3,
      "flt_cutoff": 13500,
      "r": 5,
      "i": 1.8,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 7.5,
      "mod_I0": 2.52,
      "mod_cross": 1.6199999999999999,
      "shape_fold": 1.25,
      "flt_cutoff": 17550,
      "r": 7.5,
      "i": 2.52,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 1.08,
      "mod_cross": 0.27999999999999997,
      "shape_fold": 0,
      "flt_cutoff": 8100,
      "r": 3.75,
      "i": 1.08,
      "d": 0.6
    }
  ]
},
  {
  "id": 27,
  "name": "FM Harpsichord Clavinet",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Barockes Cembalo und funkiges D6 Clavinet mit drahtigem Zupfklang",
  "formulaLatex": "Ratio 1:3 mit schnellem Dämpfungsverlauf",
  "formulaSub": "Stevie Wonder 'Superstition', Bach Cembalo",
  "dspType": "matrix24",
  "customParam": {
    "name": "Draht-Biss",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 0.5,
    "op_detune": 1,
    "op_spread": 45,
    "mod_I0": 3.5,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.3,
    "mod_skew": 0.05,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.002,
    "env_dec": 0.45,
    "env_sus": 20,
    "env_rel": 0.6,
    "flt_cutoff": 10500,
    "flt_reso": 2.2,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 1.5,
    "ratio": 3,
    "I0": 3.5,
    "dI": 1.5,
    "atk": 0.002,
    "rel": 0.6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.5,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 10500,
      "r": 3,
      "i": 3.5,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.5,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 13650,
      "r": 4.5,
      "i": 4.8999999999999995,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 2.1,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 2.25,
      "i": 2.1,
      "d": 0.75
    }
  ]
},
  {
  "id": 28,
  "name": "Shimmering FM Strings",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Weite, filmmusikalische Streicher mit warmem FM-Obertonspektrum",
  "formulaLatex": "Detuned Ensemble Strings (6 Oszillatoren)",
  "formulaSub": "Blade Runner Vangelis String Pad",
  "dspType": "matrix24",
  "customParam": {
    "name": "Ensemble-Breite",
    "min": 10,
    "max": 90,
    "step": 1,
    "val": 75
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 7.5,
    "op_spread": 90,
    "mod_I0": 1.2,
    "mod_dI": 0.8,
    "mod_cross": 0.4,
    "mod_fb": 0.15,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.25,
    "env_dec": 1,
    "env_sus": 90,
    "env_rel": 3.2,
    "flt_cutoff": 7500,
    "flt_reso": 1.1,
    "flt_envAmt": 1200,
    "space_pan": 50,
    "custom_math": 75,
    "vol": 0.86,
    "lfo": 0.15,
    "vibDepth": 4.5,
    "ratio": 1,
    "I0": 1.2,
    "dI": 0.8,
    "atk": 0.25,
    "rel": 3.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 1.2,
      "mod_cross": 0.4,
      "shape_fold": 0.2,
      "flt_cutoff": 7500,
      "r": 1,
      "i": 1.2,
      "d": 0.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.68,
      "mod_cross": 1.1400000000000001,
      "shape_fold": 1.1,
      "flt_cutoff": 9750,
      "r": 1.5,
      "i": 1.68,
      "d": 1.04
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 0.72,
      "mod_cross": 0.16000000000000003,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 0.75,
      "i": 0.72,
      "d": 0.4
    }
  ]
},
  {
  "id": 29,
  "name": "FM Synth Flute",
  "category": "Bank C: DX7 & 80s Icons (8 Params)",
  "desc": "Sanfte Panflöte / Querflöte mit natürlichem Atemrauschen",
  "formulaLatex": "Op 4 Noise Modulator -> Carrier",
  "formulaSub": "Peter Gabriel 'Sledgehammer' Flöte, Enya",
  "dspType": "matrix24",
  "customParam": {
    "name": "Atem-Anteil",
    "min": 0.1,
    "max": 2.5,
    "step": 0.05,
    "val": 1.1
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 50,
    "mod_I0": 1.4,
    "mod_dI": 0.9,
    "mod_cross": 0.5,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0.05,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.09,
    "env_dec": 0.6,
    "env_sus": 85,
    "env_rel": 1.8,
    "flt_cutoff": 6000,
    "flt_reso": 1.8,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 1.1,
    "vol": 0.87,
    "lfo": 0.12,
    "vibDepth": 5.5,
    "ratio": 2,
    "I0": 1.4,
    "dI": 0.9,
    "atk": 0.09,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 1.4,
      "mod_cross": 0.5,
      "shape_fold": 0.1,
      "flt_cutoff": 6000,
      "r": 2,
      "i": 1.4,
      "d": 0.9
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 1.9599999999999997,
      "mod_cross": 1.3,
      "shape_fold": 0.9500000000000001,
      "flt_cutoff": 7800,
      "r": 3,
      "i": 1.9599999999999997,
      "d": 1.1700000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 0.84,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 3600,
      "r": 1.5,
      "i": 0.84,
      "d": 0.45
    }
  ]
},
  {
  "id": 30,
  "name": "Mega Drive Heavy Bass",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Der legendäre Sega Genesis / Mega Drive YM2612 FM-Bass",
  "formulaLatex": "Sega YM2612 4-Op Algorithmus mit 8-Bit DAC Sättigung",
  "formulaSub": "Sonic the Hedgehog, Streets of Rage",
  "dspType": "matrix24",
  "customParam": {
    "name": "DAC Crunch",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 15,
    "mod_I0": 4.8,
    "mod_dI": 2.2,
    "mod_cross": 2,
    "mod_fb": 0.75,
    "mod_skew": 0.2,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.25,
    "shape_drive": 2.2,
    "env_atk": 0.001,
    "env_dec": 0.3,
    "env_sus": 10,
    "env_rel": 0.35,
    "flt_cutoff": 5500,
    "flt_reso": 3.2,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.92,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 1,
    "I0": 4.8,
    "dI": 2.2,
    "atk": 0.001,
    "rel": 0.35,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 4.8,
      "mod_cross": 2,
      "shape_fold": 1.2,
      "flt_cutoff": 5500,
      "r": 1,
      "i": 4.8,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 6.72,
      "mod_cross": 3.7,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 7150,
      "r": 1.5,
      "i": 6.72,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 2.88,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 3300,
      "r": 0.75,
      "i": 2.88,
      "d": 1.1
    }
  ]
},
  {
  "id": 31,
  "name": "Genesis Thunder Lead",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Schneidender 16-Bit FM Solo-Lead mit aggressivem Feedback",
  "formulaLatex": "Feedback Op 1 -> Op 1 (Beta = 0.8)",
  "formulaSub": "Yuzo Koshiro 'Streets of Rage 2'",
  "dspType": "matrix24",
  "customParam": {
    "name": "Feedback-Biss",
    "min": 0.2,
    "max": 1.5,
    "step": 0.05,
    "val": 0.85
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 60,
    "mod_I0": 3.5,
    "mod_dI": 2,
    "mod_cross": 1.4,
    "mod_fb": 0.85,
    "mod_skew": 0.1,
    "shape_fold": 1.5,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.005,
    "env_dec": 0.5,
    "env_sus": 70,
    "env_rel": 1.2,
    "flt_cutoff": 9500,
    "flt_reso": 2.5,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 0.85,
    "vol": 0.85,
    "lfo": 0.15,
    "vibDepth": 3.5,
    "ratio": 1,
    "I0": 3.5,
    "dI": 2,
    "atk": 0.005,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 3.5,
      "mod_cross": 1.4,
      "shape_fold": 1.5,
      "flt_cutoff": 9500,
      "r": 1,
      "i": 3.5,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 3.05,
      "flt_cutoff": 12350,
      "r": 1.5,
      "i": 4.8999999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 2.1,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 0.75,
      "i": 2.1,
      "d": 1
    }
  ]
},
  {
  "id": 32,
  "name": "16-Bit Cyber Pluck",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Kurzer, knackiger Arcade-Pluck für schnelle Sequenzen und Arps",
  "formulaLatex": "Ratio 1:2.5 mit exponentiellem Decay",
  "formulaSub": "OutRun, Thunder Force IV",
  "dspType": "matrix24",
  "customParam": {
    "name": "Pluck-Dämpfung",
    "min": 0.1,
    "max": 2,
    "step": 0.05,
    "val": 0.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 50,
    "mod_I0": 3.6,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.4,
    "mod_skew": 0,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.5,
    "env_atk": 0.001,
    "env_dec": 0.2,
    "env_sus": 0,
    "env_rel": 0.25,
    "flt_cutoff": 8500,
    "flt_reso": 2,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 0.6,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 0,
    "ratio": 2.5,
    "I0": 3.6,
    "dI": 1.5,
    "atk": 0.001,
    "rel": 0.25,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3.6,
      "mod_cross": 1,
      "shape_fold": 0.8,
      "flt_cutoff": 8500,
      "r": 2.5,
      "i": 3.6,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 5.04,
      "mod_cross": 2.1,
      "shape_fold": 2,
      "flt_cutoff": 11050,
      "r": 3.75,
      "i": 5.04,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 2.16,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.875,
      "i": 2.16,
      "d": 0.75
    }
  ]
},
  {
  "id": 33,
  "name": "YM2612 Distortion Lead",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Brutaler, übersteuerter FM-Gitarren-Lead mit Röhrenverzerrung",
  "formulaLatex": "Wavefolder + High Mod Index Kaskade",
  "formulaSub": "Shinobi III, Castlevania Bloodlines",
  "dspType": "matrix24",
  "customParam": {
    "name": "Drive-Verzerrung",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 8,
    "op_spread": 75,
    "mod_I0": 4.2,
    "mod_dI": 2.5,
    "mod_cross": 2.2,
    "mod_fb": 0.8,
    "mod_skew": 0.3,
    "shape_fold": 2.8,
    "shape_morph": 0.7,
    "shape_bias": 0.35,
    "shape_drive": 4.5,
    "env_atk": 0.005,
    "env_dec": 0.6,
    "env_sus": 75,
    "env_rel": 1.5,
    "flt_cutoff": 7500,
    "flt_reso": 3.5,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 4.5,
    "vol": 0.8,
    "lfo": 0.2,
    "vibDepth": 4.5,
    "ratio": 2,
    "I0": 4.2,
    "dI": 2.5,
    "atk": 0.005,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 4.2,
      "mod_cross": 2.2,
      "shape_fold": 2.8,
      "flt_cutoff": 7500,
      "r": 2,
      "i": 4.2,
      "d": 2.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 5.88,
      "mod_cross": 4,
      "shape_fold": 4.999999999999999,
      "flt_cutoff": 9750,
      "r": 3,
      "i": 5.88,
      "d": 3.25
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.52,
      "mod_cross": 0.8800000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.5,
      "i": 2.52,
      "d": 1.25
    }
  ]
},
  {
  "id": 34,
  "name": "Boss Battle FM Arp",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Dunkler, bedrohlicher Synth-Arp für epische Endgegner-Kämpfe",
  "formulaLatex": "Ratio 1:1.75 Inharmonik",
  "formulaSub": "Alien Soldier, Gunstar Heroes",
  "dspType": "matrix24",
  "customParam": {
    "name": "Spannungs-Resonanz",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.75,
    "r3_ratio": 3.5,
    "r4_ratio": 0.25,
    "op_detune": 4,
    "op_spread": 60,
    "mod_I0": 3.4,
    "mod_dI": 1.8,
    "mod_cross": 1.5,
    "mod_fb": 0.5,
    "mod_skew": 0.1,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.003,
    "env_dec": 0.25,
    "env_sus": 30,
    "env_rel": 0.5,
    "flt_cutoff": 7000,
    "flt_reso": 3,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 1.5,
    "ratio": 1.75,
    "I0": 3.4,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 0.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.75,
      "mod_I0": 3.4,
      "mod_cross": 1.5,
      "shape_fold": 1.2,
      "flt_cutoff": 7000,
      "r": 1.75,
      "i": 3.4,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.625,
      "mod_I0": 4.76,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 9100,
      "r": 2.625,
      "i": 4.76,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.3125,
      "mod_I0": 2.04,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4200,
      "r": 1.3125,
      "i": 2.04,
      "d": 0.9
    }
  ]
},
  {
  "id": 35,
  "name": "FM Metal Snarl",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Aggressiver, knurrender FM-Synthesizer mit metallischem Attack",
  "formulaLatex": "Cross-Mod + High Feedback",
  "formulaSub": "Skrillex FM Growl, Cyberpunk 2077",
  "dspType": "matrix24",
  "customParam": {
    "name": "Knurr-Tiefe",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.6
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.5,
    "r3_ratio": 4.5,
    "r4_ratio": 0.5,
    "op_detune": 6.5,
    "op_spread": 70,
    "mod_I0": 4.5,
    "mod_dI": 2.8,
    "mod_cross": 2.5,
    "mod_fb": 0.7,
    "mod_skew": 0.3,
    "shape_fold": 2.2,
    "shape_morph": 0.6,
    "shape_bias": 0.3,
    "shape_drive": 2.8,
    "env_atk": 0.01,
    "env_dec": 0.4,
    "env_sus": 65,
    "env_rel": 1,
    "flt_cutoff": 5800,
    "flt_reso": 4.2,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 3.6,
    "vol": 0.82,
    "lfo": 0.25,
    "vibDepth": 3,
    "ratio": 1.5,
    "I0": 4.5,
    "dI": 2.8,
    "atk": 0.01,
    "rel": 1,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4.5,
      "mod_cross": 2.5,
      "shape_fold": 2.2,
      "flt_cutoff": 5800,
      "r": 1.5,
      "i": 4.5,
      "d": 2.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.25,
      "mod_I0": 6.3,
      "mod_cross": 4,
      "shape_fold": 4.1000000000000005,
      "flt_cutoff": 7540,
      "r": 2.25,
      "i": 6.3,
      "d": 3.6399999999999997
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 1,
      "shape_fold": 0,
      "flt_cutoff": 3480,
      "r": 1.125,
      "i": 2.6999999999999997,
      "d": 1.4
    }
  ]
},
  {
  "id": 36,
  "name": "Arcade Metallic Zap",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Ultraschneller Laser- und Zap-Sound der Spielhallen-Automaten",
  "formulaLatex": "Exponentieller Pitch- und Filter-Drop in 50ms",
  "formulaSub": "Galaga, Space Invaders, Defender",
  "dspType": "matrix24",
  "customParam": {
    "name": "Zap-Geschwindigkeit",
    "min": 0.01,
    "max": 0.3,
    "step": 0.01,
    "val": 0.08
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 8,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 30,
    "mod_I0": 5,
    "mod_dI": 3,
    "mod_cross": 2,
    "mod_fb": 0.8,
    "mod_skew": 0.4,
    "shape_fold": 1.8,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.001,
    "env_dec": 0.12,
    "env_sus": 0,
    "env_rel": 0.15,
    "flt_cutoff": 12000,
    "flt_reso": 4,
    "flt_envAmt": 8000,
    "space_pan": 50,
    "custom_math": 0.08,
    "vol": 0.85,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 4,
    "I0": 5,
    "dI": 3,
    "atk": 0.001,
    "rel": 0.15,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4,
      "mod_I0": 5,
      "mod_cross": 2,
      "shape_fold": 1.8,
      "flt_cutoff": 12000,
      "r": 4,
      "i": 5,
      "d": 3
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6,
      "mod_I0": 7,
      "mod_cross": 3.7,
      "shape_fold": 3.5,
      "flt_cutoff": 15600,
      "r": 6,
      "i": 7,
      "d": 3.9000000000000004
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 3,
      "i": 3,
      "d": 1.5
    }
  ]
},
  {
  "id": 37,
  "name": "FM Overdrive Solo",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Singender, warmer Synth-Lead für ausdrucksstarke 80er Soli",
  "formulaLatex": "2-Carrier Unison + Weiches Wavefolding",
  "formulaSub": "Jan Hammer 'Miami Vice'",
  "dspType": "matrix24",
  "customParam": {
    "name": "Röhren-Wärme",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 5.5,
    "op_spread": 65,
    "mod_I0": 2.5,
    "mod_dI": 1.5,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "mod_skew": 0.1,
    "shape_fold": 1,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.8,
    "env_atk": 0.02,
    "env_dec": 0.6,
    "env_sus": 80,
    "env_rel": 1.8,
    "flt_cutoff": 8200,
    "flt_reso": 2,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.85,
    "lfo": 0.15,
    "vibDepth": 4.8,
    "ratio": 2,
    "I0": 2.5,
    "dI": 1.5,
    "atk": 0.02,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.5,
      "mod_cross": 0.8,
      "shape_fold": 1,
      "flt_cutoff": 8200,
      "r": 2,
      "i": 2.5,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.5,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 2.3,
      "flt_cutoff": 10660,
      "r": 3,
      "i": 3.5,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.5,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 4920,
      "r": 1.5,
      "i": 1.5,
      "d": 0.75
    }
  ]
},
  {
  "id": 38,
  "name": "16-Bit Acid Bass",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Resonanter, zwitschernder Bass mit schnellem Formant-Filter",
  "formulaLatex": "Biquad Q = 5.5 + Schneller Envelope Sweep",
  "formulaSub": "TB-303 Emulation via FM Kaskade",
  "dspType": "matrix24",
  "customParam": {
    "name": "Acid Resonanz Q",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 5.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 1,
    "op_spread": 20,
    "mod_I0": 3,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.5,
    "mod_skew": 0.1,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.002,
    "env_dec": 0.28,
    "env_sus": 10,
    "env_rel": 0.3,
    "flt_cutoff": 2800,
    "flt_reso": 5.5,
    "flt_envAmt": 6500,
    "space_pan": 50,
    "custom_math": 5.5,
    "vol": 0.9,
    "lfo": 0.08,
    "vibDepth": 0,
    "ratio": 1,
    "I0": 3,
    "dI": 1.5,
    "atk": 0.002,
    "rel": 0.3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 3,
      "mod_cross": 1,
      "shape_fold": 1.2,
      "flt_cutoff": 2800,
      "r": 1,
      "i": 3,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4.199999999999999,
      "mod_cross": 2.1,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 3640,
      "r": 1.5,
      "i": 4.199999999999999,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 1680,
      "r": 0.75,
      "i": 1.7999999999999998,
      "d": 0.75
    }
  ]
},
  {
  "id": 39,
  "name": "Retrowave FM Stabs",
  "category": "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
  "desc": "Kräftige Synthwave-Akkord-Stabs mit analogem Filter-Punch",
  "formulaLatex": "6-Op Polyphonischer Akkord-Biss",
  "formulaSub": "Kavinsky 'Nightcall', Carpenter Brut",
  "dspType": "matrix24",
  "customParam": {
    "name": "Stab Brillianz",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 80,
    "mod_I0": 2.8,
    "mod_dI": 1.6,
    "mod_cross": 1.2,
    "mod_fb": 0.45,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.15,
    "shape_drive": 1.6,
    "env_atk": 0.005,
    "env_dec": 0.45,
    "env_sus": 40,
    "env_rel": 1.2,
    "flt_cutoff": 9000,
    "flt_reso": 2.4,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2.5,
    "ratio": 1,
    "I0": 2.8,
    "dI": 1.6,
    "atk": 0.005,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 2.8,
      "mod_cross": 1.2,
      "shape_fold": 0.8,
      "flt_cutoff": 9000,
      "r": 1,
      "i": 2.8,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 2.42,
      "shape_fold": 2,
      "flt_cutoff": 11700,
      "r": 1.5,
      "i": 3.9199999999999995,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.68,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 5400,
      "r": 0.75,
      "i": 1.68,
      "d": 0.8
    }
  ]
},
  {
  "id": 40,
  "name": "Balinese Gamelan Gong",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Tiefes indonesisches Bronze-Gong mit typischer Ombak-Schwebung",
  "formulaLatex": "Inharmonic Bronze Ratio 1 : 2.76 : 5.40",
  "formulaSub": "Gamelan Gong Kebyar",
  "dspType": "matrix24",
  "customParam": {
    "name": "Ombak Schwebung (Hz)",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 2.76,
    "r3_ratio": 5.4,
    "r4_ratio": 0.25,
    "op_detune": 4.5,
    "op_spread": 70,
    "mod_I0": 3.8,
    "mod_dI": 1.8,
    "mod_cross": 1.4,
    "mod_fb": 0.4,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.005,
    "env_dec": 1.8,
    "env_sus": 20,
    "env_rel": 6,
    "flt_cutoff": 10500,
    "flt_reso": 2.2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 4.5,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 3,
    "ratio": 2.76,
    "I0": 3.8,
    "dI": 1.8,
    "atk": 0.005,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 2.76,
      "mod_I0": 3.8,
      "mod_cross": 1.4,
      "shape_fold": 0.8,
      "flt_cutoff": 10500,
      "r": 2.76,
      "i": 3.8,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 4.14,
      "mod_I0": 5.319999999999999,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 2,
      "flt_cutoff": 13650,
      "r": 4.14,
      "i": 5.319999999999999,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 2.07,
      "mod_I0": 2.28,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 2.07,
      "i": 2.28,
      "d": 0.9
    }
  ]
},
  {
  "id": 41,
  "name": "Japanese Koto Pluck",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Traditionelle japanische 13-saitige Wölbbrettzither",
  "formulaLatex": "Saiten-Modellierung mit In-Sen Skala",
  "formulaSub": "Traditionelle Gagaku Hofmusik",
  "dspType": "matrix24",
  "customParam": {
    "name": "Seiden-Spannung",
    "min": 0.5,
    "max": 3,
    "step": 0.05,
    "val": 1.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 7,
    "r4_ratio": 0.5,
    "op_detune": 1,
    "op_spread": 45,
    "mod_I0": 3.4,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.25,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.002,
    "env_dec": 0.5,
    "env_sus": 10,
    "env_rel": 1.5,
    "flt_cutoff": 9800,
    "flt_reso": 2,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 1.4,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 4,
    "ratio": 3,
    "I0": 3.4,
    "dI": 1.2,
    "atk": 0.002,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.4,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 9800,
      "r": 3,
      "i": 3.4,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.5,
      "mod_I0": 4.76,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 12740,
      "r": 4.5,
      "i": 4.76,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 2.04,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5880,
      "r": 2.25,
      "i": 2.04,
      "d": 0.6
    }
  ]
},
  {
  "id": 42,
  "name": "African Wooden Kalimba",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Daumenklavier (Mbira) mit warmem Holzkörper und summenden Metallzungen",
  "formulaLatex": "Ratio 1 : 5.4 mit Rattle-Feedback",
  "formulaSub": "Simbabwe Shona Mbira dzaVadzimu",
  "dspType": "matrix24",
  "customParam": {
    "name": "Zungen-Schnurren",
    "min": 0.1,
    "max": 2,
    "step": 0.05,
    "val": 0.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 5.4,
    "r3_ratio": 10.8,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 50,
    "mod_I0": 2.8,
    "mod_dI": 1,
    "mod_cross": 0.6,
    "mod_fb": 0.35,
    "mod_skew": 0.05,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0.05,
    "shape_drive": 1.15,
    "env_atk": 0.001,
    "env_dec": 0.4,
    "env_sus": 5,
    "env_rel": 0.8,
    "flt_cutoff": 8500,
    "flt_reso": 2.5,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 0.8,
    "vol": 0.9,
    "lfo": 0.06,
    "vibDepth": 1.5,
    "ratio": 5.4,
    "I0": 2.8,
    "dI": 1,
    "atk": 0.001,
    "rel": 0.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 5.4,
      "mod_I0": 2.8,
      "mod_cross": 0.6,
      "shape_fold": 0.3,
      "flt_cutoff": 8500,
      "r": 5.4,
      "i": 2.8,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 8.100000000000001,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 1.46,
      "shape_fold": 1.25,
      "flt_cutoff": 11050,
      "r": 8.100000000000001,
      "i": 3.9199999999999995,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 4.050000000000001,
      "mod_I0": 1.68,
      "mod_cross": 0.24,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 4.050000000000001,
      "i": 1.68,
      "d": 0.5
    }
  ]
},
  {
  "id": 43,
  "name": "Indian Sitar Drone",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Nordindische Sitar mit surrendem Jawari-Steg und Resonanzsaiten",
  "formulaLatex": "Nichtlineare Jawari-Brücke erzeugt reiche Oberton-Sättigung",
  "formulaSub": "Ravi Shankar, Raga Drone",
  "dspType": "matrix24",
  "customParam": {
    "name": "Jawari Surren",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 75,
    "mod_I0": 3.2,
    "mod_dI": 1.8,
    "mod_cross": 1.4,
    "mod_fb": 0.5,
    "mod_skew": 0.15,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.2,
    "shape_drive": 1.7,
    "env_atk": 0.01,
    "env_dec": 0.9,
    "env_sus": 65,
    "env_rel": 3,
    "flt_cutoff": 10500,
    "flt_reso": 3,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 2.6,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 6,
    "ratio": 2,
    "I0": 3.2,
    "dI": 1.8,
    "atk": 0.01,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 3.2,
      "mod_cross": 1.4,
      "shape_fold": 1.2,
      "flt_cutoff": 10500,
      "r": 2,
      "i": 3.2,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 13650,
      "r": 3,
      "i": 4.4799999999999995,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.92,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 1.5,
      "i": 1.92,
      "d": 0.9
    }
  ]
},
  {
  "id": 44,
  "name": "Zen Shakuhachi Breath",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Japanische Bambus-Längsflöte mit markantem Atemgeräusch und Pitch-Bends",
  "formulaLatex": "Noise Burst + Resonante Luftsäule",
  "formulaSub": "Honkyoku Zen-Meditation",
  "dspType": "matrix24",
  "customParam": {
    "name": "Bambus-Atem",
    "min": 0.2,
    "max": 3,
    "step": 0.05,
    "val": 1.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 3,
    "op_spread": 55,
    "mod_I0": 1.6,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.15,
    "env_atk": 0.12,
    "env_dec": 0.7,
    "env_sus": 80,
    "env_rel": 1.6,
    "flt_cutoff": 5500,
    "flt_reso": 3.2,
    "flt_envAmt": 2200,
    "space_pan": 50,
    "custom_math": 1.5,
    "vol": 0.87,
    "lfo": 0.15,
    "vibDepth": 7,
    "ratio": 2,
    "I0": 1.6,
    "dI": 1.2,
    "atk": 0.12,
    "rel": 1.6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 1.6,
      "mod_cross": 0.8,
      "shape_fold": 0.3,
      "flt_cutoff": 5500,
      "r": 2,
      "i": 1.6,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 2.2399999999999998,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.25,
      "flt_cutoff": 7150,
      "r": 3,
      "i": 2.2399999999999998,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 0.96,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 3300,
      "r": 1.5,
      "i": 0.96,
      "d": 0.6
    }
  ]
},
  {
  "id": 45,
  "name": "Caribbean Steel Pan",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Trinidad Steel Drum mit metallischer Kesselresonanz und warmer Karibik-Stimmung",
  "formulaLatex": "Dual Carrier Membran-Ratio 1 : 2.38",
  "formulaSub": "Trinidad & Tobago Calypso Steelband",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kessel-Resonanz",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.38,
    "r3_ratio": 4.76,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 60,
    "mod_I0": 3.5,
    "mod_dI": 1.4,
    "mod_cross": 1,
    "mod_fb": 0.3,
    "mod_skew": 0.05,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.3,
    "env_atk": 0.002,
    "env_dec": 0.45,
    "env_sus": 15,
    "env_rel": 1.2,
    "flt_cutoff": 11500,
    "flt_reso": 2.2,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 2.5,
    "ratio": 2.38,
    "I0": 3.5,
    "dI": 1.4,
    "atk": 0.002,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.38,
      "mod_I0": 3.5,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 11500,
      "r": 2.38,
      "i": 3.5,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.57,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 14950,
      "r": 3.57,
      "i": 4.8999999999999995,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.785,
      "mod_I0": 2.1,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 6900,
      "r": 1.785,
      "i": 2.1,
      "d": 0.7
    }
  ]
},
  {
  "id": 46,
  "name": "Tibetan Singing Bowl",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Klangschale aus 7 Metallen mit langem, tranceartigem Nachhall",
  "formulaLatex": "Reine Bessel-Kuppel-Harmonische (R2=2.76, R3=5.40)",
  "formulaSub": "Tibetische Meditation & Klangtherapie",
  "dspType": "matrix24",
  "customParam": {
    "name": "Reibungs-Sustain",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.76,
    "r3_ratio": 5.4,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 80,
    "mod_I0": 2.2,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.15,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.4,
    "env_dec": 1.5,
    "env_sus": 85,
    "env_rel": 6.5,
    "flt_cutoff": 9000,
    "flt_reso": 2.8,
    "flt_envAmt": 1200,
    "space_pan": 50,
    "custom_math": 5,
    "vol": 0.86,
    "lfo": 0.05,
    "vibDepth": 3.5,
    "ratio": 2.76,
    "I0": 2.2,
    "dI": 1.2,
    "atk": 0.4,
    "rel": 6.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.76,
      "mod_I0": 2.2,
      "mod_cross": 0.8,
      "shape_fold": 0.3,
      "flt_cutoff": 9000,
      "r": 2.76,
      "i": 2.2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.14,
      "mod_I0": 3.08,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.25,
      "flt_cutoff": 11700,
      "r": 4.14,
      "i": 3.08,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.07,
      "mod_I0": 1.32,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5400,
      "r": 2.07,
      "i": 1.32,
      "d": 0.6
    }
  ]
},
  {
  "id": 47,
  "name": "Celtic Harp FM",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Kristallklare keltische Harfe mit zartem Saitennachklang",
  "formulaLatex": "Nylon-Saiten Saitenmodellierung",
  "formulaSub": "Irische und schottische Folkharfe",
  "dspType": "matrix24",
  "customParam": {
    "name": "Harfen-Resonanz",
    "min": 0.5,
    "max": 3,
    "step": 0.05,
    "val": 1.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 1,
    "op_spread": 60,
    "mod_I0": 2.5,
    "mod_dI": 1.1,
    "mod_cross": 0.5,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.05,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.003,
    "env_dec": 0.7,
    "env_sus": 25,
    "env_rel": 2.4,
    "flt_cutoff": 12500,
    "flt_reso": 1.4,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 1.6,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 2,
    "ratio": 2,
    "I0": 2.5,
    "dI": 1.1,
    "atk": 0.003,
    "rel": 2.4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.5,
      "mod_cross": 0.5,
      "shape_fold": 0.2,
      "flt_cutoff": 12500,
      "r": 2,
      "i": 2.5,
      "d": 1.1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.5,
      "mod_cross": 1.3,
      "shape_fold": 1.1,
      "flt_cutoff": 16250,
      "r": 3,
      "i": 3.5,
      "d": 1.4300000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.5,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 7500,
      "r": 1.5,
      "i": 1.5,
      "d": 0.55
    }
  ]
},
  {
  "id": 48,
  "name": "Javanese Gender",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Javanisches Xylophon mit Bronzeröhren und Bambusresonatoren",
  "formulaLatex": "Slendro Skalen-Inharmonik",
  "formulaSub": "Javanische Hofmusik Gamelan",
  "dspType": "matrix24",
  "customParam": {
    "name": "Bambus-Röhren Q",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.16,
    "r3_ratio": 6.32,
    "r4_ratio": 0.5,
    "op_detune": 3,
    "op_spread": 65,
    "mod_I0": 3.2,
    "mod_dI": 1.3,
    "mod_cross": 0.9,
    "mod_fb": 0.25,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.25,
    "env_atk": 0.002,
    "env_dec": 0.6,
    "env_sus": 10,
    "env_rel": 2,
    "flt_cutoff": 9500,
    "flt_reso": 2.4,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.88,
    "lfo": 0.09,
    "vibDepth": 2.5,
    "ratio": 3.16,
    "I0": 3.2,
    "dI": 1.3,
    "atk": 0.002,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.16,
      "mod_I0": 3.2,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 9500,
      "r": 3.16,
      "i": 3.2,
      "d": 1.3
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.74,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 12350,
      "r": 4.74,
      "i": 4.4799999999999995,
      "d": 1.6900000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.37,
      "mod_I0": 1.92,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 2.37,
      "i": 1.92,
      "d": 0.65
    }
  ]
},
  {
  "id": 49,
  "name": "Persian Santur",
  "category": "Bank E: World Acoustic & Saiten (12 Params)",
  "desc": "Persisches Hackbrett mit 72 Stahlsaiten und Holzschlägeln (Mezrab)",
  "formulaLatex": "Chorische 4-Saiten-Stimmung mit Glanz",
  "formulaSub": "Radif der klassischen persischen Musik",
  "dspType": "matrix24",
  "customParam": {
    "name": "Mezrab-Anschlag",
    "min": 0.5,
    "max": 3.5,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 70,
    "mod_I0": 3,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.002,
    "env_dec": 0.5,
    "env_sus": 15,
    "env_rel": 1.8,
    "flt_cutoff": 11000,
    "flt_reso": 1.8,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 2.8,
    "ratio": 2.5,
    "I0": 3,
    "dI": 1.2,
    "atk": 0.002,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 11000,
      "r": 2.5,
      "i": 3,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 4.199999999999999,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 14300,
      "r": 3.75,
      "i": 4.199999999999999,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 1.875,
      "i": 1.7999999999999998,
      "d": 0.6
    }
  ]
},
  {
  "id": 50,
  "name": "Interstellar Deep Drone",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Monumentale, extrem tiefe Raumklang-Drone für Science-Fiction Soundtracks",
  "formulaLatex": "Sub-Harmonische Kaskade mit Schwebung 0.05 Hz",
  "formulaSub": "Hans Zimmer 'Interstellar', Dune",
  "dspType": "matrix24",
  "customParam": {
    "name": "Sub-Gravitation",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.505,
    "r3_ratio": 1.01,
    "r4_ratio": 0.25,
    "op_detune": 2.5,
    "op_spread": 85,
    "mod_I0": 2,
    "mod_dI": 1.5,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 1.2,
    "env_dec": 2,
    "env_sus": 90,
    "env_rel": 5.5,
    "flt_cutoff": 4200,
    "flt_reso": 1.8,
    "flt_envAmt": 800,
    "space_pan": 50,
    "custom_math": 2.5,
    "vol": 0.86,
    "lfo": 0.04,
    "vibDepth": 3,
    "ratio": 0.505,
    "I0": 2,
    "dI": 1.5,
    "atk": 1.2,
    "rel": 5.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 0.505,
      "mod_I0": 2,
      "mod_cross": 0.8,
      "shape_fold": 0.5,
      "flt_cutoff": 4200,
      "r": 0.505,
      "i": 2,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 0.7575000000000001,
      "mod_I0": 2.8,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 5460,
      "r": 0.7575000000000001,
      "i": 2.8,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.37875000000000003,
      "mod_I0": 1.2,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 2520,
      "r": 0.37875000000000003,
      "i": 1.2,
      "d": 0.75
    }
  ]
},
  {
  "id": 51,
  "name": "Void Atmosphere",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Dunkle, kalte Leere mit mikrotonalen Resonanz-Schwebungen",
  "formulaLatex": "Inharmonische Prim-Verhältnisse 1 : 1.414 : 3.141",
  "formulaSub": "Tarkovsky 'Solaris', Lustmord Dark Ambient",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kälte-Faktor",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 3.141,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 90,
    "mod_I0": 1.8,
    "mod_dI": 1.2,
    "mod_cross": 0.6,
    "mod_fb": 0.15,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.15,
    "env_atk": 1.5,
    "env_dec": 2.5,
    "env_sus": 85,
    "env_rel": 6,
    "flt_cutoff": 5500,
    "flt_reso": 2.2,
    "flt_envAmt": 500,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.84,
    "lfo": 0.03,
    "vibDepth": 4,
    "ratio": 1.414,
    "I0": 1.8,
    "dI": 1.2,
    "atk": 1.5,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.414,
      "mod_I0": 1.8,
      "mod_cross": 0.6,
      "shape_fold": 0.4,
      "flt_cutoff": 5500,
      "r": 1.414,
      "i": 1.8,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.121,
      "mod_I0": 2.52,
      "mod_cross": 1.46,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 7150,
      "r": 2.121,
      "i": 2.52,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.0605,
      "mod_I0": 1.08,
      "mod_cross": 0.24,
      "shape_fold": 0,
      "flt_cutoff": 3300,
      "r": 1.0605,
      "i": 1.08,
      "d": 0.6
    }
  ]
},
  {
  "id": 52,
  "name": "Event Horizon Sub",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Schwerer Sub-Bass am Rande des Schwarzen Lochs",
  "formulaLatex": "Sub-Carrier R1 = 0.25 mit 12 dB Resonanz-Peak",
  "formulaSub": "Sub-Audible Frequenzen (20–60 Hz)",
  "dspType": "matrix24",
  "customParam": {
    "name": "Singularitäts-Druck",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 0.25,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.125,
    "op_detune": 0.5,
    "op_spread": 30,
    "mod_I0": 3.2,
    "mod_dI": 1.6,
    "mod_cross": 1,
    "mod_fb": 0.35,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.2,
    "shape_drive": 1.8,
    "env_atk": 0.5,
    "env_dec": 1.5,
    "env_sus": 85,
    "env_rel": 4,
    "flt_cutoff": 1800,
    "flt_reso": 3.5,
    "flt_envAmt": 1200,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.92,
    "lfo": 0.05,
    "vibDepth": 1.5,
    "ratio": 0.5,
    "I0": 3.2,
    "dI": 1.6,
    "atk": 0.5,
    "rel": 4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.25,
      "r2_ratio": 0.5,
      "mod_I0": 3.2,
      "mod_cross": 1,
      "shape_fold": 0.8,
      "flt_cutoff": 1800,
      "r": 0.5,
      "i": 3.2,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.25,
      "r2_ratio": 0.75,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.1,
      "shape_fold": 2,
      "flt_cutoff": 2340,
      "r": 0.75,
      "i": 4.4799999999999995,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.25,
      "r2_ratio": 0.375,
      "mod_I0": 1.92,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 1080,
      "r": 0.375,
      "i": 1.92,
      "d": 0.8
    }
  ]
},
  {
  "id": 53,
  "name": "Solaris Evolving Shimmer",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Atmosphärisches, lebendiges Pad mit permanent wandernden Obertönen",
  "formulaLatex": "Dual LFO Kreuzmodulation mit Goldenem Verhältnis",
  "formulaSub": "Cliff Martinez 'Solaris', Brian Eno",
  "dspType": "matrix24",
  "customParam": {
    "name": "Ozean-Wanderung",
    "min": 0.5,
    "max": 3,
    "step": 0.05,
    "val": 1.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 2.618,
    "r4_ratio": 0.5,
    "op_detune": 5.5,
    "op_spread": 95,
    "mod_I0": 1.6,
    "mod_dI": 1.4,
    "mod_cross": 0.9,
    "mod_fb": 0.2,
    "mod_skew": 0.1,
    "shape_fold": 0.3,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.1,
    "env_atk": 2,
    "env_dec": 3,
    "env_sus": 80,
    "env_rel": 7,
    "flt_cutoff": 8000,
    "flt_reso": 1.6,
    "flt_envAmt": 1800,
    "space_pan": 50,
    "custom_math": 1.6,
    "vol": 0.85,
    "lfo": 0.06,
    "vibDepth": 4.5,
    "ratio": 1.618,
    "I0": 1.6,
    "dI": 1.4,
    "atk": 2,
    "rel": 7,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.618,
      "mod_I0": 1.6,
      "mod_cross": 0.9,
      "shape_fold": 0.3,
      "flt_cutoff": 8000,
      "r": 1.618,
      "i": 1.6,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.427,
      "mod_I0": 2.2399999999999998,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.25,
      "flt_cutoff": 10400,
      "r": 2.427,
      "i": 2.2399999999999998,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.2135,
      "mod_I0": 0.96,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 4800,
      "r": 1.2135,
      "i": 0.96,
      "d": 0.7
    }
  ]
},
  {
  "id": 54,
  "name": "Nebula Swarm Pad",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Schwarm aus 6 leicht verstimmten Oszillatoren im interstellaren Nebel",
  "formulaLatex": "Ensemble Unison Spread 100%",
  "formulaSub": "Ligeti 'Atmosphères', 2001 A Space Odyssey",
  "dspType": "matrix24",
  "customParam": {
    "name": "Schwarm-Dichte",
    "min": 10,
    "max": 100,
    "step": 1,
    "val": 85
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.008,
    "r3_ratio": 2.016,
    "r4_ratio": 0.5,
    "op_detune": 8.5,
    "op_spread": 100,
    "mod_I0": 1.4,
    "mod_dI": 1,
    "mod_cross": 0.5,
    "mod_fb": 0.1,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.1,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 1.8,
    "env_dec": 2.2,
    "env_sus": 90,
    "env_rel": 6.5,
    "flt_cutoff": 6800,
    "flt_reso": 1.4,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 85,
    "vol": 0.86,
    "lfo": 0.08,
    "vibDepth": 5,
    "ratio": 1.008,
    "I0": 1.4,
    "dI": 1,
    "atk": 1.8,
    "rel": 6.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.008,
      "mod_I0": 1.4,
      "mod_cross": 0.5,
      "shape_fold": 0.2,
      "flt_cutoff": 6800,
      "r": 1.008,
      "i": 1.4,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.512,
      "mod_I0": 1.9599999999999997,
      "mod_cross": 1.3,
      "shape_fold": 1.1,
      "flt_cutoff": 8840,
      "r": 1.512,
      "i": 1.9599999999999997,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.756,
      "mod_I0": 0.84,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 4080,
      "r": 0.756,
      "i": 0.84,
      "d": 0.5
    }
  ]
},
  {
  "id": 55,
  "name": "Dark Matter Rumble",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Tiefes tektonisches Grollen mit unregelmäßigen subharmonischen Stößen",
  "formulaLatex": "Sub-Oszillatoren + Tiefpass-Sättigung",
  "formulaSub": "Erdbeben- und Vulkan-Sounddesign",
  "dspType": "matrix24",
  "customParam": {
    "name": "Tektonik-Energie",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3
  },
  "defaults": {
    "r1_ratio": 0.25,
    "r2_ratio": 0.75,
    "r3_ratio": 1.5,
    "r4_ratio": 0.125,
    "op_detune": 3,
    "op_spread": 60,
    "mod_I0": 3.5,
    "mod_dI": 2,
    "mod_cross": 1.2,
    "mod_fb": 0.4,
    "mod_skew": 0.15,
    "shape_fold": 1,
    "shape_morph": 0.4,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.8,
    "env_dec": 1.8,
    "env_sus": 85,
    "env_rel": 5,
    "flt_cutoff": 2200,
    "flt_reso": 3,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 3,
    "vol": 0.9,
    "lfo": 0.05,
    "vibDepth": 2,
    "ratio": 0.75,
    "I0": 3.5,
    "dI": 2,
    "atk": 0.8,
    "rel": 5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.25,
      "r2_ratio": 0.75,
      "mod_I0": 3.5,
      "mod_cross": 1.2,
      "shape_fold": 1,
      "flt_cutoff": 2200,
      "r": 0.75,
      "i": 3.5,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.25,
      "r2_ratio": 1.125,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.42,
      "shape_fold": 2.3,
      "flt_cutoff": 2860,
      "r": 1.125,
      "i": 4.8999999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.25,
      "r2_ratio": 0.5625,
      "mod_I0": 2.1,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 1320,
      "r": 0.5625,
      "i": 2.1,
      "d": 1
    }
  ]
},
  {
  "id": 56,
  "name": "Stasis Field Resonance",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Elektronisches Schutzfeld mit hochfrequenter Phasenschwebung",
  "formulaLatex": "Dual High Modulator (R2=5.84, R3=12.2)",
  "formulaSub": "Sci-Fi Kraftfeld-Summen",
  "dspType": "matrix24",
  "customParam": {
    "name": "Feld-Intensität",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 5.84,
    "r3_ratio": 12.2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 75,
    "mod_I0": 2.2,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.3,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.25,
    "env_atk": 0.6,
    "env_dec": 1.4,
    "env_sus": 80,
    "env_rel": 4.5,
    "flt_cutoff": 9500,
    "flt_reso": 2.5,
    "flt_envAmt": 1200,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.84,
    "lfo": 0.14,
    "vibDepth": 3.5,
    "ratio": 5.84,
    "I0": 2.2,
    "dI": 1.5,
    "atk": 0.6,
    "rel": 4.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 5.84,
      "mod_I0": 2.2,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 9500,
      "r": 5.84,
      "i": 2.2,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 8.76,
      "mod_I0": 3.08,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 12350,
      "r": 8.76,
      "i": 3.08,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 4.38,
      "mod_I0": 1.32,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 4.38,
      "i": 1.32,
      "d": 0.75
    }
  ]
},
  {
  "id": 57,
  "name": "Quantum Shimmer Drone",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Gläserne, schimmernde Obertöne über warmem Bassfundament",
  "formulaLatex": "Ratio 1:8 Shimmer Kaskade",
  "formulaSub": "Ambient Shimmer Reverb Drone",
  "dspType": "matrix24",
  "customParam": {
    "name": "Shimmer-Glanz",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 4,
    "r3_ratio": 8,
    "r4_ratio": 0.25,
    "op_detune": 4,
    "op_spread": 85,
    "mod_I0": 2,
    "mod_dI": 1.2,
    "mod_cross": 1.2,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 1,
    "env_dec": 2,
    "env_sus": 85,
    "env_rel": 6,
    "flt_cutoff": 11000,
    "flt_reso": 1.8,
    "flt_envAmt": 2000,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.85,
    "lfo": 0.09,
    "vibDepth": 3.8,
    "ratio": 4,
    "I0": 2,
    "dI": 1.2,
    "atk": 1,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 4,
      "mod_I0": 2,
      "mod_cross": 1.2,
      "shape_fold": 0.4,
      "flt_cutoff": 11000,
      "r": 4,
      "i": 2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 6,
      "mod_I0": 2.8,
      "mod_cross": 2.42,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 14300,
      "r": 6,
      "i": 2.8,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 3,
      "mod_I0": 1.2,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 3,
      "i": 1.2,
      "d": 0.6
    }
  ]
},
  {
  "id": 58,
  "name": "Abyss Submarine Drone",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Tiefsee-Atmosphäre mit Echolot-Klicks und Resonanz-Druck",
  "formulaLatex": "Formant Tiefpass bei 650 Hz mit hoher Güte",
  "formulaSub": "The Abyss Soundtrack, Hydrophon-Aufnahmen",
  "dspType": "matrix24",
  "customParam": {
    "name": "Wassertiefe (Bar)",
    "min": 10,
    "max": 200,
    "step": 5,
    "val": 90
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.2,
    "r3_ratio": 2.4,
    "r4_ratio": 0.25,
    "op_detune": 2,
    "op_spread": 65,
    "mod_I0": 2.5,
    "mod_dI": 1.6,
    "mod_cross": 0.9,
    "mod_fb": 0.3,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.25,
    "shape_bias": 0.15,
    "shape_drive": 1.4,
    "env_atk": 0.9,
    "env_dec": 1.6,
    "env_sus": 85,
    "env_rel": 5.2,
    "flt_cutoff": 2400,
    "flt_reso": 3.8,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 90,
    "vol": 0.88,
    "lfo": 0.06,
    "vibDepth": 2.8,
    "ratio": 1.2,
    "I0": 2.5,
    "dI": 1.6,
    "atk": 0.9,
    "rel": 5.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.2,
      "mod_I0": 2.5,
      "mod_cross": 0.9,
      "shape_fold": 0.6,
      "flt_cutoff": 2400,
      "r": 1.2,
      "i": 2.5,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.7999999999999998,
      "mod_I0": 3.5,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.7,
      "flt_cutoff": 3120,
      "r": 1.7999999999999998,
      "i": 3.5,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.8999999999999999,
      "mod_I0": 1.5,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 1440,
      "r": 0.8999999999999999,
      "i": 1.5,
      "d": 0.8
    }
  ]
},
  {
  "id": 59,
  "name": "Supernova Aurora Pad",
  "category": "Bank F: Cinematic & Ambient Drones (14 Params)",
  "desc": "Episch aufsteigender Glanz mit unendlichem Sustain und Stereo-Orbit",
  "formulaLatex": "6-Operator Stereo Sweeping Pad",
  "formulaSub": "Tangerine Dream, Jean-Michel Jarre",
  "dspType": "matrix24",
  "customParam": {
    "name": "Aurora-Leuchtkraft",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 7,
    "op_spread": 95,
    "mod_I0": 1.8,
    "mod_dI": 1.4,
    "mod_cross": 0.8,
    "mod_fb": 0.25,
    "mod_skew": 0.1,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 1.4,
    "env_dec": 2.2,
    "env_sus": 90,
    "env_rel": 5.8,
    "flt_cutoff": 8500,
    "flt_reso": 2,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.86,
    "lfo": 0.1,
    "vibDepth": 4.2,
    "ratio": 2,
    "I0": 1.8,
    "dI": 1.4,
    "atk": 1.4,
    "rel": 5.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 1.8,
      "mod_cross": 0.8,
      "shape_fold": 0.5,
      "flt_cutoff": 8500,
      "r": 2,
      "i": 1.8,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 2.52,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 11050,
      "r": 3,
      "i": 2.52,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.08,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.5,
      "i": 1.08,
      "d": 0.7
    }
  ]
},
  {
  "id": 60,
  "name": "FM Acoustic Kick Punch",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Tiefbass-Bassdrum mit hartem Klick-Attack und 45 Hz Wucht",
  "formulaLatex": "Pitch Drop 150 Hz → 45 Hz in 40ms",
  "formulaSub": "808/909 Hybrid FM Kick",
  "dspType": "matrix24",
  "customParam": {
    "name": "Sub-Wucht (Hz)",
    "min": 35,
    "max": 70,
    "step": 1,
    "val": 48
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 10,
    "mod_I0": 4.5,
    "mod_dI": 1.8,
    "mod_cross": 1.2,
    "mod_fb": 0.7,
    "mod_skew": 0.1,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.3,
    "shape_drive": 2.5,
    "env_atk": 0.001,
    "env_dec": 0.28,
    "env_sus": 0,
    "env_rel": 0.3,
    "flt_cutoff": 3500,
    "flt_reso": 3.5,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 48,
    "vol": 0.95,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 0.5,
    "I0": 4.5,
    "dI": 1.8,
    "atk": 0.001,
    "rel": 0.3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 0.5,
      "mod_I0": 4.5,
      "mod_cross": 1.2,
      "shape_fold": 1.2,
      "flt_cutoff": 3500,
      "r": 0.5,
      "i": 4.5,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 6.3,
      "mod_cross": 2.42,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 4550,
      "r": 0.75,
      "i": 6.3,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.375,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 2100,
      "r": 0.375,
      "i": 2.6999999999999997,
      "d": 0.9
    }
  ]
},
  {
  "id": 61,
  "name": "Metallic FM Snare",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Knackige FM-Snare mit metallischem Teppich-Rauschen",
  "formulaLatex": "Dual Carrier Membran + Noise Modulator",
  "formulaSub": "Analog FM Snaredrum",
  "dspType": "matrix24",
  "customParam": {
    "name": "Teppich-Härte",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.75,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 40,
    "mod_I0": 4.2,
    "mod_dI": 2,
    "mod_cross": 1.5,
    "mod_fb": 0.6,
    "mod_skew": 0.2,
    "shape_fold": 1.5,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.001,
    "env_dec": 0.22,
    "env_sus": 0,
    "env_rel": 0.25,
    "flt_cutoff": 8500,
    "flt_reso": 2.8,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 1.75,
    "I0": 4.2,
    "dI": 2,
    "atk": 0.001,
    "rel": 0.25,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.75,
      "mod_I0": 4.2,
      "mod_cross": 1.5,
      "shape_fold": 1.5,
      "flt_cutoff": 8500,
      "r": 1.75,
      "i": 4.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.625,
      "mod_I0": 5.88,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 3.05,
      "flt_cutoff": 11050,
      "r": 2.625,
      "i": 5.88,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.3125,
      "mod_I0": 2.52,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.3125,
      "i": 2.52,
      "d": 1
    }
  ]
},
  {
  "id": 62,
  "name": "Resonant Glass Marimba",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Feines Glas-Xylophon mit klarem metallischen Nachklang",
  "formulaLatex": "Ratio 1 : 4.2 Glas-Harmonik",
  "formulaSub": "Glasharfe Percussion",
  "dspType": "matrix24",
  "customParam": {
    "name": "Glas-Brillianz",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4.2,
    "r3_ratio": 8.4,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 60,
    "mod_I0": 3.2,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.25,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.001,
    "env_dec": 0.45,
    "env_sus": 10,
    "env_rel": 1.2,
    "flt_cutoff": 12000,
    "flt_reso": 2,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.88,
    "lfo": 0.06,
    "vibDepth": 1.5,
    "ratio": 4.2,
    "I0": 3.2,
    "dI": 1.2,
    "atk": 0.001,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4.2,
      "mod_I0": 3.2,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 12000,
      "r": 4.2,
      "i": 3.2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6.300000000000001,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 15600,
      "r": 6.300000000000001,
      "i": 4.4799999999999995,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3.1500000000000004,
      "mod_I0": 1.92,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 3.1500000000000004,
      "i": 1.92,
      "d": 0.6
    }
  ]
},
  {
  "id": 63,
  "name": "Kinetic Water Drops",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Organische Wassertropfen und Flüssigkeits-Plopps mit Pitch-Sweep",
  "formulaLatex": "Schneller 200 Hz Pitch-Up Impuls",
  "formulaSub": "Hydrologische Klangsynthese",
  "dspType": "matrix24",
  "customParam": {
    "name": "Tropfen-Größe",
    "min": 0.5,
    "max": 3,
    "step": 0.05,
    "val": 1.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 35,
    "mod_I0": 3,
    "mod_dI": 1.5,
    "mod_cross": 0.6,
    "mod_fb": 0.3,
    "mod_skew": 0,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 0.001,
    "env_dec": 0.14,
    "env_sus": 0,
    "env_rel": 0.18,
    "flt_cutoff": 5500,
    "flt_reso": 4.5,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 1.4,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 2,
    "I0": 3,
    "dI": 1.5,
    "atk": 0.001,
    "rel": 0.18,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 3,
      "mod_cross": 0.6,
      "shape_fold": 0.5,
      "flt_cutoff": 5500,
      "r": 2,
      "i": 3,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 4.199999999999999,
      "mod_cross": 1.46,
      "shape_fold": 1.55,
      "flt_cutoff": 7150,
      "r": 3,
      "i": 4.199999999999999,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.24,
      "shape_fold": 0,
      "flt_cutoff": 3300,
      "r": 1.5,
      "i": 1.7999999999999998,
      "d": 0.75
    }
  ]
},
  {
  "id": 64,
  "name": "FM Log Drum Perc",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Holzblock-Trommel mit tiefem, warmem Resonanzkörper",
  "formulaLatex": "Membran-Ratio 1 : 2.5",
  "formulaSub": "Afrikanische Schlitz-Trommel",
  "dspType": "matrix24",
  "customParam": {
    "name": "Holz-Dämpfung",
    "min": 0.1,
    "max": 1.5,
    "step": 0.05,
    "val": 0.45
  },
  "defaults": {
    "r1_ratio": 0.75,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.25,
    "op_detune": 0.5,
    "op_spread": 40,
    "mod_I0": 3.5,
    "mod_dI": 1.2,
    "mod_cross": 0.7,
    "mod_fb": 0.35,
    "mod_skew": 0.05,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.001,
    "env_dec": 0.32,
    "env_sus": 0,
    "env_rel": 0.35,
    "flt_cutoff": 4800,
    "flt_reso": 3,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 0.45,
    "vol": 0.9,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 1.5,
    "I0": 3.5,
    "dI": 1.2,
    "atk": 0.001,
    "rel": 0.35,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.75,
      "r2_ratio": 1.5,
      "mod_I0": 3.5,
      "mod_cross": 0.7,
      "shape_fold": 0.6,
      "flt_cutoff": 4800,
      "r": 1.5,
      "i": 3.5,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.75,
      "r2_ratio": 2.25,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 1.6199999999999999,
      "shape_fold": 1.7,
      "flt_cutoff": 6240,
      "r": 2.25,
      "i": 4.8999999999999995,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.75,
      "r2_ratio": 1.125,
      "mod_I0": 2.1,
      "mod_cross": 0.27999999999999997,
      "shape_fold": 0,
      "flt_cutoff": 2880,
      "r": 1.125,
      "i": 2.1,
      "d": 0.6
    }
  ]
},
  {
  "id": 65,
  "name": "Resonant Cowbell Strike",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Metallische Kuhglocke mit typischem 808/DX Obertonpaar",
  "formulaLatex": "Rechteck-modulierte 540 Hz & 800 Hz Grundtöne",
  "formulaSub": "808 Cowbell Synthese",
  "dspType": "matrix24",
  "customParam": {
    "name": "Metall-Klang",
    "min": 0.5,
    "max": 3,
    "step": 0.1,
    "val": 1.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.48,
    "r3_ratio": 2.96,
    "r4_ratio": 0.5,
    "op_detune": 1,
    "op_spread": 45,
    "mod_I0": 3.8,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "mod_skew": 0.1,
    "shape_fold": 0.9,
    "shape_morph": 0.3,
    "shape_bias": 0.15,
    "shape_drive": 1.6,
    "env_atk": 0.001,
    "env_dec": 0.25,
    "env_sus": 0,
    "env_rel": 0.3,
    "flt_cutoff": 7500,
    "flt_reso": 3.2,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 1.8,
    "vol": 0.88,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 1.48,
    "I0": 3.8,
    "dI": 1.2,
    "atk": 0.001,
    "rel": 0.3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.48,
      "mod_I0": 3.8,
      "mod_cross": 0.8,
      "shape_fold": 0.9,
      "flt_cutoff": 7500,
      "r": 1.48,
      "i": 3.8,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.2199999999999998,
      "mod_I0": 5.319999999999999,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 2.1500000000000004,
      "flt_cutoff": 9750,
      "r": 2.2199999999999998,
      "i": 5.319999999999999,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.1099999999999999,
      "mod_I0": 2.28,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.1099999999999999,
      "i": 2.28,
      "d": 0.6
    }
  ]
},
  {
  "id": 66,
  "name": "Ceramic Bottle Pop",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Resonantes Keramik-Flaschen-Ploppen mit Hohlraum-Resonanz",
  "formulaLatex": "Helmholtz-Resonator FM",
  "formulaSub": "Blas- und Zupf-Flaschenklang",
  "dspType": "matrix24",
  "customParam": {
    "name": "Flaschen-Volumen",
    "min": 0.2,
    "max": 2,
    "step": 0.05,
    "val": 0.75
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 30,
    "mod_I0": 2.8,
    "mod_dI": 1,
    "mod_cross": 0.5,
    "mod_fb": 0.2,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.002,
    "env_dec": 0.22,
    "env_sus": 0,
    "env_rel": 0.25,
    "flt_cutoff": 4200,
    "flt_reso": 4.2,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 0.75,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 1.5,
    "I0": 2.8,
    "dI": 1,
    "atk": 0.002,
    "rel": 0.25,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.8,
      "mod_cross": 0.5,
      "shape_fold": 0.4,
      "flt_cutoff": 4200,
      "r": 1.5,
      "i": 2.8,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 1.3,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 5460,
      "r": 2.25,
      "i": 3.9199999999999995,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 1.68,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 2520,
      "r": 1.125,
      "i": 1.68,
      "d": 0.5
    }
  ]
},
  {
  "id": 67,
  "name": "Anvil Metal Hit",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Schwerer Amboss-Schlag mit massiven metallischen Obertönen",
  "formulaLatex": "Stahlblock-Schlag mit Schockwellen-Faltung",
  "formulaSub": "Industrielle Percussion",
  "dspType": "matrix24",
  "customParam": {
    "name": "Stahl-Masse",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.14,
    "r3_ratio": 6.28,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 60,
    "mod_I0": 4.5,
    "mod_dI": 1.8,
    "mod_cross": 1.6,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 1.8,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.2,
    "env_atk": 0.001,
    "env_dec": 0.5,
    "env_sus": 10,
    "env_rel": 1.5,
    "flt_cutoff": 11000,
    "flt_reso": 3,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 3.6,
    "vol": 0.88,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 3.14,
    "I0": 4.5,
    "dI": 1.8,
    "atk": 0.001,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.14,
      "mod_I0": 4.5,
      "mod_cross": 1.6,
      "shape_fold": 1.8,
      "flt_cutoff": 11000,
      "r": 3.14,
      "i": 4.5,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.71,
      "mod_I0": 6.3,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 3.5,
      "flt_cutoff": 14300,
      "r": 4.71,
      "i": 6.3,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.355,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 2.355,
      "i": 2.6999999999999997,
      "d": 0.9
    }
  ]
},
  {
  "id": 68,
  "name": "Deep Taiko Drone",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Gigantische japanische O-Taiko Trommel mit vibrierendem Fell",
  "formulaLatex": "Tiefe Membran-Moden (40–120 Hz)",
  "formulaSub": "Kodo Drummers Taiko",
  "dspType": "matrix24",
  "customParam": {
    "name": "Fell-Spannung",
    "min": 20,
    "max": 80,
    "step": 1,
    "val": 42
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.75,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 1,
    "op_spread": 50,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.45,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.15,
    "shape_drive": 1.7,
    "env_atk": 0.003,
    "env_dec": 0.8,
    "env_sus": 15,
    "env_rel": 2.2,
    "flt_cutoff": 3200,
    "flt_reso": 2.8,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 42,
    "vol": 0.92,
    "lfo": 0.06,
    "vibDepth": 1.5,
    "ratio": 0.75,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.003,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 3.8,
      "mod_cross": 1,
      "shape_fold": 0.8,
      "flt_cutoff": 3200,
      "r": 0.75,
      "i": 3.8,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 5.319999999999999,
      "mod_cross": 2.1,
      "shape_fold": 2,
      "flt_cutoff": 4160,
      "r": 1.125,
      "i": 5.319999999999999,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.5625,
      "mod_I0": 2.28,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 1920,
      "r": 0.5625,
      "i": 2.28,
      "d": 0.75
    }
  ]
},
  {
  "id": 69,
  "name": "Cyber Woodblock",
  "category": "Bank G: Buchla & Organic Perc (15 Params)",
  "desc": "Synthetischer Woodblock mit präzisem Klick und Formant-Resonanz",
  "formulaLatex": "Harter Bandpass Q = 6.0 auf FM Pluck",
  "formulaSub": "808 Clave / Woodblock",
  "dspType": "matrix24",
  "customParam": {
    "name": "Klick-Brillianz",
    "min": 0.5,
    "max": 3.5,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 35,
    "mod_I0": 3.2,
    "mod_dI": 1,
    "mod_cross": 0.6,
    "mod_fb": 0.3,
    "mod_skew": 0,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 0.001,
    "env_dec": 0.16,
    "env_sus": 0,
    "env_rel": 0.2,
    "flt_cutoff": 7500,
    "flt_reso": 4.8,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 2.5,
    "I0": 3.2,
    "dI": 1,
    "atk": 0.001,
    "rel": 0.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3.2,
      "mod_cross": 0.6,
      "shape_fold": 0.5,
      "flt_cutoff": 7500,
      "r": 2.5,
      "i": 3.2,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 1.46,
      "shape_fold": 1.55,
      "flt_cutoff": 9750,
      "r": 3.75,
      "i": 4.4799999999999995,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 1.92,
      "mod_cross": 0.24,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.875,
      "i": 1.92,
      "d": 0.5
    }
  ]
},
  {
  "id": 70,
  "name": "West Coast Complex Wave",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Buchla 259 inspirierter Dual-Oszillator mit Wavefolder & AM/FM Ringmodulation",
  "formulaLatex": "Don Buchla West-Coast Synthese",
  "formulaSub": "Morton Subotnick 'Silver Apples of the Moon'",
  "dspType": "matrix24",
  "customParam": {
    "name": "Timbre Faltung",
    "min": 0.5,
    "max": 6,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 75,
    "mod_I0": 3.8,
    "mod_dI": 2.2,
    "mod_cross": 2,
    "mod_fb": 0.6,
    "mod_skew": 0.2,
    "shape_fold": 2.5,
    "shape_morph": 0.6,
    "shape_bias": 0.25,
    "shape_drive": 2.2,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 70,
    "env_rel": 2.2,
    "flt_cutoff": 8500,
    "flt_reso": 3.2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.84,
    "lfo": 0.18,
    "vibDepth": 3.5,
    "ratio": 1.5,
    "I0": 3.8,
    "dI": 2.2,
    "atk": 0.01,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.8,
      "mod_cross": 2,
      "shape_fold": 2.5,
      "flt_cutoff": 8500,
      "r": 1.5,
      "i": 3.8,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.7,
      "shape_fold": 4.55,
      "flt_cutoff": 11050,
      "r": 2.25,
      "i": 5.319999999999999,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 2.28,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.125,
      "i": 2.28,
      "d": 1.1
    }
  ]
},
  {
  "id": 71,
  "name": "Buchla Lowpass Gate Bongo",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Legendäres Buchla 292 LPG mit vactrol-artigem natürlichem Ausklingverhalten",
  "formulaLatex": "Vactrol Optokoppler Dynamik (Filter + VCA simultan)",
  "formulaSub": "Buchla Bongo & Perkussion",
  "dspType": "matrix24",
  "customParam": {
    "name": "Vactrol Trägheit",
    "min": 0.05,
    "max": 0.8,
    "step": 0.02,
    "val": 0.22
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 3.5,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "mod_skew": 0.05,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.002,
    "env_dec": 0.22,
    "env_sus": 0,
    "env_rel": 0.22,
    "flt_cutoff": 6000,
    "flt_reso": 2.5,
    "flt_envAmt": 6000,
    "space_pan": 50,
    "custom_math": 0.22,
    "vol": 0.9,
    "lfo": 0.05,
    "vibDepth": 0,
    "ratio": 1.5,
    "I0": 3.5,
    "dI": 1.2,
    "atk": 0.002,
    "rel": 0.22,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.5,
      "mod_cross": 0.8,
      "shape_fold": 0.8,
      "flt_cutoff": 6000,
      "r": 1.5,
      "i": 3.5,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 2,
      "flt_cutoff": 7800,
      "r": 2.25,
      "i": 4.8999999999999995,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 2.1,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 3600,
      "r": 1.125,
      "i": 2.1,
      "d": 0.6
    }
  ]
},
  {
  "id": 72,
  "name": "Acid FM Squelch",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Brachialer 303-artiger Acid-Lead mit schreiender Resonanz und FM-Modulation",
  "formulaLatex": "Diode Ladder Filter + FM Bite",
  "formulaSub": "Chicago Acid House, Hardfloor",
  "dspType": "matrix24",
  "customParam": {
    "name": "Squelch Resonanz",
    "min": 2,
    "max": 12,
    "step": 0.2,
    "val": 7.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 1.5,
    "op_spread": 30,
    "mod_I0": 3.8,
    "mod_dI": 2,
    "mod_cross": 1.5,
    "mod_fb": 0.6,
    "mod_skew": 0.15,
    "shape_fold": 1.5,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.4,
    "env_atk": 0.002,
    "env_dec": 0.3,
    "env_sus": 20,
    "env_rel": 0.4,
    "flt_cutoff": 3200,
    "flt_reso": 7.5,
    "flt_envAmt": 7000,
    "space_pan": 50,
    "custom_math": 7.5,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 0,
    "ratio": 1,
    "I0": 3.8,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 3.8,
      "mod_cross": 1.5,
      "shape_fold": 1.5,
      "flt_cutoff": 3200,
      "r": 1,
      "i": 3.8,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 5.319999999999999,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 3.05,
      "flt_cutoff": 4160,
      "r": 1.5,
      "i": 5.319999999999999,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 2.28,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 1920,
      "r": 0.75,
      "i": 2.28,
      "d": 1
    }
  ]
},
  {
  "id": 73,
  "name": "Dual Operator Ringmod",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Klassische Ringmodulation zweier Träger für robotische Dalek-Stimmen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>1</sub><em>t</em>) · sin(2π<em>f</em><sub>2</sub><em>t</em>)",
  "formulaSub": "BBC Radiophonic Workshop, Dr. Who Dalek",
  "dspType": "matrix24",
  "customParam": {
    "name": "Ringmod Träger 2",
    "min": 0.5,
    "max": 6,
    "step": 0.1,
    "val": 2.75
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.75,
    "r3_ratio": 5.5,
    "r4_ratio": 0.5,
    "op_detune": 3,
    "op_spread": 60,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 2.2,
    "mod_fb": 0.4,
    "mod_skew": 0.2,
    "shape_fold": 1,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.6,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 75,
    "env_rel": 1.8,
    "flt_cutoff": 9000,
    "flt_reso": 2.8,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 2.75,
    "vol": 0.84,
    "lfo": 0.15,
    "vibDepth": 3,
    "ratio": 2.75,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.01,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.75,
      "mod_I0": 4,
      "mod_cross": 2.2,
      "shape_fold": 1,
      "flt_cutoff": 9000,
      "r": 2.75,
      "i": 4,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.125,
      "mod_I0": 5.6,
      "mod_cross": 4,
      "shape_fold": 2.3,
      "flt_cutoff": 11700,
      "r": 4.125,
      "i": 5.6,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.0625,
      "mod_I0": 2.4,
      "mod_cross": 0.8800000000000001,
      "shape_fold": 0,
      "flt_cutoff": 5400,
      "r": 2.0625,
      "i": 2.4,
      "d": 0.9
    }
  ]
},
  {
  "id": 74,
  "name": "Folded Buchla 259",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Komplexes Wavefolding mit dynamischer Symmetrie und Sättigung",
  "formulaLatex": "Chebyshev 5-Stufen Faltung",
  "formulaSub": "West Coast DPO Oszillator",
  "dspType": "matrix24",
  "customParam": {
    "name": "Faltungs-Stufen",
    "min": 1,
    "max": 7,
    "step": 0.1,
    "val": 4.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 70,
    "mod_I0": 3.2,
    "mod_dI": 1.8,
    "mod_cross": 1.6,
    "mod_fb": 0.55,
    "mod_skew": 0.3,
    "shape_fold": 4.2,
    "shape_morph": 0.7,
    "shape_bias": 0.3,
    "shape_drive": 2.6,
    "env_atk": 0.02,
    "env_dec": 0.5,
    "env_sus": 70,
    "env_rel": 2,
    "flt_cutoff": 8800,
    "flt_reso": 2.6,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 4.2,
    "vol": 0.82,
    "lfo": 0.16,
    "vibDepth": 3.2,
    "ratio": 1,
    "I0": 3.2,
    "dI": 1.8,
    "atk": 0.02,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 3.2,
      "mod_cross": 1.6,
      "shape_fold": 4.2,
      "flt_cutoff": 8800,
      "r": 1,
      "i": 3.2,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 6,
      "flt_cutoff": 11440,
      "r": 1.5,
      "i": 4.4799999999999995,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.92,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 5280,
      "r": 0.75,
      "i": 1.92,
      "d": 0.9
    }
  ]
},
  {
  "id": 75,
  "name": "Modular Random S&H",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Sample & Hold gesteuerter FM-Klang mit zufälligen Stufen",
  "formulaLatex": "Stochastische Quantisierung der Modulations-Parameter",
  "formulaSub": "Krell Patch, Suzanne Ciani",
  "dspType": "matrix24",
  "customParam": {
    "name": "S&H Rate (Hz)",
    "min": 0.5,
    "max": 15,
    "step": 0.2,
    "val": 4.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.33,
    "r3_ratio": 4.66,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 80,
    "mod_I0": 3.6,
    "mod_dI": 2.4,
    "mod_cross": 1.8,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 1.4,
    "shape_morph": 0.4,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.01,
    "env_dec": 0.35,
    "env_sus": 60,
    "env_rel": 1.5,
    "flt_cutoff": 7500,
    "flt_reso": 4,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 4.5,
    "vol": 0.85,
    "lfo": 0.28,
    "vibDepth": 4,
    "ratio": 2.33,
    "I0": 3.6,
    "dI": 2.4,
    "atk": 0.01,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.33,
      "mod_I0": 3.6,
      "mod_cross": 1.8,
      "shape_fold": 1.4,
      "flt_cutoff": 7500,
      "r": 2.33,
      "i": 3.6,
      "d": 2.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.495,
      "mod_I0": 5.04,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 2.8999999999999995,
      "flt_cutoff": 9750,
      "r": 3.495,
      "i": 5.04,
      "d": 3.12
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.7475,
      "mod_I0": 2.16,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.7475,
      "i": 2.16,
      "d": 1.2
    }
  ]
},
  {
  "id": 76,
  "name": "Resonant Noise Laser",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Zwitschernde, frequenzmodulierte Laserschüsse und Sweep-Effekte",
  "formulaLatex": "Schneller Tonhöhenabfall + High-Q Biquad",
  "formulaSub": "Vintage Arcade Sci-Fi FX",
  "dspType": "matrix24",
  "customParam": {
    "name": "Laser Sweep Zeit",
    "min": 0.02,
    "max": 0.4,
    "step": 0.01,
    "val": 0.12
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 4.5,
    "mod_dI": 2.5,
    "mod_cross": 1.8,
    "mod_fb": 0.7,
    "mod_skew": 0.25,
    "shape_fold": 1.6,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.001,
    "env_dec": 0.15,
    "env_sus": 0,
    "env_rel": 0.18,
    "flt_cutoff": 10000,
    "flt_reso": 5,
    "flt_envAmt": 8000,
    "space_pan": 50,
    "custom_math": 0.12,
    "vol": 0.88,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 3.5,
    "I0": 4.5,
    "dI": 2.5,
    "atk": 0.001,
    "rel": 0.18,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.5,
      "mod_I0": 4.5,
      "mod_cross": 1.8,
      "shape_fold": 1.6,
      "flt_cutoff": 10000,
      "r": 3.5,
      "i": 4.5,
      "d": 2.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 5.25,
      "mod_I0": 6.3,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 3.2,
      "flt_cutoff": 13000,
      "r": 5.25,
      "i": 6.3,
      "d": 3.25
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.625,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 6000,
      "r": 2.625,
      "i": 2.6999999999999997,
      "d": 1.25
    }
  ]
},
  {
  "id": 77,
  "name": "Feedback Distortion Lead",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Monströser Lead-Sound mit maximaler Operator-Rückkopplung und Drive",
  "formulaLatex": "Selbst-Rückkopplung Beta > 0.8 erzeugt raues Chaos",
  "formulaSub": "Nine Inch Nails, Industrial FM",
  "dspType": "matrix24",
  "customParam": {
    "name": "Feedback-Härte",
    "min": 0.2,
    "max": 1.2,
    "step": 0.02,
    "val": 0.85
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 6.5,
    "op_spread": 75,
    "mod_I0": 4,
    "mod_dI": 2.2,
    "mod_cross": 1.8,
    "mod_fb": 0.85,
    "mod_skew": 0.3,
    "shape_fold": 2.2,
    "shape_morph": 0.6,
    "shape_bias": 0.3,
    "shape_drive": 3.2,
    "env_atk": 0.005,
    "env_dec": 0.5,
    "env_sus": 75,
    "env_rel": 1.8,
    "flt_cutoff": 7200,
    "flt_reso": 3.8,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 0.85,
    "vol": 0.82,
    "lfo": 0.18,
    "vibDepth": 4,
    "ratio": 1,
    "I0": 4,
    "dI": 2.2,
    "atk": 0.005,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 4,
      "mod_cross": 1.8,
      "shape_fold": 2.2,
      "flt_cutoff": 7200,
      "r": 1,
      "i": 4,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 5.6,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 4.1000000000000005,
      "flt_cutoff": 9360,
      "r": 1.5,
      "i": 5.6,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 2.4,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4320,
      "r": 0.75,
      "i": 2.4,
      "d": 1.1
    }
  ]
},
  {
  "id": 78,
  "name": "Crossmod Warp Synth",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Gegenseitig gekoppelte Oszillatoren mit komplexen Interferenzmustern",
  "formulaLatex": "Op 3 ↔ Op 2 Kreuzmodulation",
  "formulaSub": "Autechre, Richard Devine Glitch Patch",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kreuzkopplung I_cross",
    "min": 0.2,
    "max": 5,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.732,
    "r3_ratio": 2.414,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 80,
    "mod_I0": 3.5,
    "mod_dI": 2,
    "mod_cross": 2.8,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 1.5,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.2,
    "env_atk": 0.03,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 2.5,
    "flt_cutoff": 8200,
    "flt_reso": 3.2,
    "flt_envAmt": 2800,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.84,
    "lfo": 0.2,
    "vibDepth": 3.8,
    "ratio": 1.732,
    "I0": 3.5,
    "dI": 2,
    "atk": 0.03,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.732,
      "mod_I0": 3.5,
      "mod_cross": 2.8,
      "shape_fold": 1.5,
      "flt_cutoff": 8200,
      "r": 1.732,
      "i": 3.5,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.598,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 4,
      "shape_fold": 3.05,
      "flt_cutoff": 10660,
      "r": 2.598,
      "i": 4.8999999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.299,
      "mod_I0": 2.1,
      "mod_cross": 1.1199999999999999,
      "shape_fold": 0,
      "flt_cutoff": 4920,
      "r": 1.299,
      "i": 2.1,
      "d": 1
    }
  ]
},
  {
  "id": 79,
  "name": "Buchla Touch Pluck",
  "category": "Bank H: Modular & Acid FX (16 Params)",
  "desc": "Dynamisch anschlagempfindlicher Zupfklang im Stile des Buchla Touchplates",
  "formulaLatex": "Velocity skaliert FM Index und Vactrol Decay",
  "formulaSub": "Buchla 218 Touch Keyboard Patch",
  "dspType": "matrix24",
  "customParam": {
    "name": "Druck-Empfindlichkeit",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 50,
    "mod_I0": 3.2,
    "mod_dI": 1.4,
    "mod_cross": 0.8,
    "mod_fb": 0.3,
    "mod_skew": 0.05,
    "shape_fold": 0.7,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.35,
    "env_atk": 0.002,
    "env_dec": 0.4,
    "env_sus": 10,
    "env_rel": 0.8,
    "flt_cutoff": 9200,
    "flt_reso": 2.4,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.88,
    "lfo": 0.09,
    "vibDepth": 2.2,
    "ratio": 2,
    "I0": 3.2,
    "dI": 1.4,
    "atk": 0.002,
    "rel": 0.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 3.2,
      "mod_cross": 0.8,
      "shape_fold": 0.7,
      "flt_cutoff": 9200,
      "r": 2,
      "i": 3.2,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.8499999999999999,
      "flt_cutoff": 11960,
      "r": 3,
      "i": 4.4799999999999995,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.92,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5520,
      "r": 1.5,
      "i": 1.92,
      "d": 0.7
    }
  ]
},
  {
  "id": 80,
  "name": "Lorenz Chaos FM",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Nichtlineare DGL 3. Ordnung im Phasenraum mit chaotischen Obertönen",
  "formulaLatex": "<em>y</em>(<em>t</em>) = A·sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>x</sub>·x̂·sin(2π<em>f</em><sub>m</sub><em>t</em>))",
  "formulaSub": "Lorenz DGL: ẋ = σ(y-x), ẏ = x(ρ-z)-y, ż = xy-βz",
  "dspType": "matrix24",
  "customParam": {
    "name": "Rayleigh ρ (Chaos)",
    "min": 10,
    "max": 45,
    "step": 0.1,
    "val": 28
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 4.2,
    "op_spread": 60,
    "mod_I0": 2.8,
    "mod_dI": 1.6,
    "mod_cross": 1.2,
    "mod_fb": 0.35,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.2,
    "shape_bias": 0.15,
    "shape_drive": 1.4,
    "env_atk": 0.04,
    "env_dec": 0.6,
    "env_sus": 75,
    "env_rel": 2.8,
    "flt_cutoff": 8500,
    "flt_reso": 2.2,
    "flt_envAmt": 1200,
    "space_pan": 50,
    "custom_math": 28,
    "vol": 0.85,
    "lfo": 0.12,
    "vibDepth": 3.5,
    "ratio": 1.5,
    "I0": 2.8,
    "dI": 1.6,
    "atk": 0.04,
    "rel": 2.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.8,
      "mod_cross": 1.2,
      "shape_fold": 0.8,
      "flt_cutoff": 8500,
      "r": 1.5,
      "i": 2.8,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 2.42,
      "shape_fold": 2,
      "flt_cutoff": 11050,
      "r": 2.25,
      "i": 3.9199999999999995,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 1.68,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.125,
      "i": 1.68,
      "d": 0.8
    }
  ]
},
  {
  "id": 81,
  "name": "Chebyshev Wavefolder",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Reine Oberton-Sättigung via T3(x) & T5(x) Orthogonal-Polynome",
  "formulaLatex": "<em>y</em>(<em>t</em>) = T<sub>5</sub>(cos(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em>·sin(2π<em>f</em><sub>m</sub><em>t</em>)))",
  "formulaSub": "T3(x)=4x³-3x, T5(x)=16x⁵-20x³+5x",
  "dspType": "matrix24",
  "customParam": {
    "name": "Faltungs-Faktor γ",
    "min": 0.1,
    "max": 8,
    "step": 0.05,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 45,
    "mod_I0": 2.2,
    "mod_dI": 1.1,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "mod_skew": 0.2,
    "shape_fold": 3.2,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.2,
    "env_atk": 0.01,
    "env_dec": 0.45,
    "env_sus": 70,
    "env_rel": 2.2,
    "flt_cutoff": 9800,
    "flt_reso": 1.8,
    "flt_envAmt": 2000,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.82,
    "lfo": 0.15,
    "vibDepth": 2,
    "ratio": 2,
    "I0": 2.2,
    "dI": 1.1,
    "atk": 0.01,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.2,
      "mod_cross": 0.8,
      "shape_fold": 3.2,
      "flt_cutoff": 9800,
      "r": 2,
      "i": 2.2,
      "d": 1.1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.08,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 5.6000000000000005,
      "flt_cutoff": 12740,
      "r": 3,
      "i": 3.08,
      "d": 1.4300000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.32,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5880,
      "r": 1.5,
      "i": 1.32,
      "d": 0.55
    }
  ]
},
  {
  "id": 82,
  "name": "Rössler Strange Attractor",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Kontinuierlicher Spiral-Chaos Attraktor mit Phasen-Verschränkung",
  "formulaLatex": "<em>y</em>(<em>t</em>) = sin(2π<em>f</em><sub>c</sub><em>t</em> + <em>I</em><sub>y</sub>·ŷ)",
  "formulaSub": "Rössler: ẋ = -y - z, ẏ = x + ay, ż = b + z(x - c)",
  "dspType": "matrix24",
  "customParam": {
    "name": "Chaos-Bifurkation c",
    "min": 2,
    "max": 12,
    "step": 0.1,
    "val": 5.7
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.707,
    "op_detune": 5.5,
    "op_spread": 70,
    "mod_I0": 3.5,
    "mod_dI": 2,
    "mod_cross": 1.5,
    "mod_fb": 0.45,
    "mod_skew": 0.3,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.1,
    "shape_drive": 1.6,
    "env_atk": 0.08,
    "env_dec": 0.8,
    "env_sus": 65,
    "env_rel": 3.5,
    "flt_cutoff": 7200,
    "flt_reso": 3.1,
    "flt_envAmt": 1500,
    "space_pan": 42,
    "custom_math": 5.7,
    "vol": 0.8,
    "lfo": 0.08,
    "vibDepth": 4,
    "ratio": 1.414,
    "I0": 3.5,
    "dI": 2,
    "atk": 0.08,
    "rel": 3.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.414,
      "mod_I0": 3.5,
      "mod_cross": 1.5,
      "shape_fold": 1.2,
      "flt_cutoff": 7200,
      "r": 1.414,
      "i": 3.5,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.121,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 9360,
      "r": 2.121,
      "i": 4.8999999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.0605,
      "mod_I0": 2.1,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4320,
      "r": 1.0605,
      "i": 2.1,
      "d": 1
    }
  ]
},
  {
  "id": 83,
  "name": "Duffing Dual-Well Resonator",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Getriebener nichtlinearer Oszillator mit kubischer Rückstellkraft",
  "formulaLatex": "ẍ + δẋ + αx + βx³ = γ·cos(ω<em>t</em>)",
  "formulaSub": "Dual-Well Potential V(x) = αx²/2 + βx⁴/4",
  "dspType": "matrix24",
  "customParam": {
    "name": "Antriebs-Amplitude γ",
    "min": 0.1,
    "max": 1.5,
    "step": 0.01,
    "val": 0.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.5,
    "r3_ratio": 3.5,
    "r4_ratio": 0.25,
    "op_detune": -3,
    "op_spread": 55,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 2,
    "mod_fb": 0.5,
    "mod_skew": 0,
    "shape_fold": 1.5,
    "shape_morph": 0.3,
    "shape_bias": 0.25,
    "shape_drive": 1.8,
    "env_atk": 0.05,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 3,
    "flt_cutoff": 6500,
    "flt_reso": 2.5,
    "flt_envAmt": 800,
    "space_pan": 55,
    "custom_math": 0.5,
    "vol": 0.82,
    "lfo": 0.2,
    "vibDepth": 3,
    "ratio": 1.5,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.05,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4,
      "mod_cross": 2,
      "shape_fold": 1.5,
      "flt_cutoff": 6500,
      "r": 1.5,
      "i": 4,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.25,
      "mod_I0": 5.6,
      "mod_cross": 3.7,
      "shape_fold": 3.05,
      "flt_cutoff": 8450,
      "r": 2.25,
      "i": 5.6,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 2.4,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 3900,
      "r": 1.125,
      "i": 2.4,
      "d": 0.9
    }
  ]
},
  {
  "id": 84,
  "name": "Chua Diode Chaotic Circuit",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Einfachste autonome chaotische Schaltung mit stückweise linearer Kennlinie",
  "formulaLatex": "g(V) = m₁V + 0.5(m₀ - m₁)(|V+B<sub>p</sub>| - |V-B<sub>p</sub>|)",
  "formulaSub": "Chua DGL: C₁V̇₁ = G(V₂-V₁) - g(V₁)",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kennlinien-Steigung m0",
    "min": -1.5,
    "max": -0.2,
    "step": 0.01,
    "val": -0.7
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.333,
    "r3_ratio": 4.666,
    "r4_ratio": 0.333,
    "op_detune": 8,
    "op_spread": 80,
    "mod_I0": 3.8,
    "mod_dI": 2.2,
    "mod_cross": 1.8,
    "mod_fb": 0.6,
    "mod_skew": 0.4,
    "shape_fold": 2,
    "shape_morph": 0.6,
    "shape_bias": 0.3,
    "shape_drive": 2.5,
    "env_atk": 0.02,
    "env_dec": 0.4,
    "env_sus": 70,
    "env_rel": 2,
    "flt_cutoff": 8200,
    "flt_reso": 3.5,
    "flt_envAmt": 3000,
    "space_pan": 60,
    "custom_math": -0.7,
    "vol": 0.78,
    "lfo": 0.3,
    "vibDepth": 4.5,
    "ratio": 2.333,
    "I0": 3.8,
    "dI": 2.2,
    "atk": 0.02,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.333,
      "mod_I0": 3.8,
      "mod_cross": 1.8,
      "shape_fold": 2,
      "flt_cutoff": 8200,
      "r": 2.333,
      "i": 3.8,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.4995000000000003,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 3.8,
      "flt_cutoff": 10660,
      "r": 3.4995000000000003,
      "i": 5.319999999999999,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.7497500000000001,
      "mod_I0": 2.28,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4920,
      "r": 1.7497500000000001,
      "i": 2.28,
      "d": 1.1
    }
  ]
},
  {
  "id": 85,
  "name": "Ikeda Laser Map Cavity",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Optische Ring-Kavität mit nichtlinearem dielektrischen Medium",
  "formulaLatex": "z<sub>n+1</sub> = A + B·z<sub>n</sub>·exp(i(φ - C/(1 + |z<sub>n</sub>|²)))",
  "formulaSub": "Laser Interferenz in dispersiver Faser",
  "dspType": "matrix24",
  "customParam": {
    "name": "Laser-Pumpleistung A",
    "min": 0.5,
    "max": 4,
    "step": 0.05,
    "val": 2.1
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.141,
    "r3_ratio": 6.282,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 65,
    "mod_I0": 3,
    "mod_dI": 1.5,
    "mod_cross": 1.4,
    "mod_fb": 0.3,
    "mod_skew": 0.2,
    "shape_fold": 1.8,
    "shape_morph": 0.4,
    "shape_bias": 0.1,
    "shape_drive": 1.5,
    "env_atk": 0.06,
    "env_dec": 0.7,
    "env_sus": 75,
    "env_rel": 3.2,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "flt_envAmt": 1500,
    "space_pan": 48,
    "custom_math": 2.1,
    "vol": 0.82,
    "lfo": 0.18,
    "vibDepth": 3,
    "ratio": 3.141,
    "I0": 3,
    "dI": 1.5,
    "atk": 0.06,
    "rel": 3.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.141,
      "mod_I0": 3,
      "mod_cross": 1.4,
      "shape_fold": 1.8,
      "flt_cutoff": 11000,
      "r": 3.141,
      "i": 3,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.7115,
      "mod_I0": 4.199999999999999,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 3.5,
      "flt_cutoff": 14300,
      "r": 4.7115,
      "i": 4.199999999999999,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.35575,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 2.35575,
      "i": 1.7999999999999998,
      "d": 0.75
    }
  ]
},
  {
  "id": 86,
  "name": "Mandelbrot Fractal Orbit",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Komplexe quadratische Iteration z ↦ z² + c im Phasenraum",
  "formulaLatex": "z<sub>k+1</sub> = z<sub>k</sub>² + c",
  "formulaSub": "Fluchtzeit-Mapping auf FM Modulations-Indizes",
  "dspType": "matrix24",
  "customParam": {
    "name": "Fraktal-Tiefe n",
    "min": 2,
    "max": 20,
    "step": 1,
    "val": 8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 2.618,
    "r4_ratio": 0.618,
    "op_detune": -2.5,
    "op_spread": 75,
    "mod_I0": 2.6,
    "mod_dI": 1.8,
    "mod_cross": 1.6,
    "mod_fb": 0.25,
    "mod_skew": 0.15,
    "shape_fold": 1,
    "shape_morph": 0.3,
    "shape_bias": 0.05,
    "shape_drive": 1.3,
    "env_atk": 0.1,
    "env_dec": 0.9,
    "env_sus": 80,
    "env_rel": 4,
    "flt_cutoff": 9200,
    "flt_reso": 1.5,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 8,
    "vol": 0.84,
    "lfo": 0.09,
    "vibDepth": 2.8,
    "ratio": 1.618,
    "I0": 2.6,
    "dI": 1.8,
    "atk": 0.1,
    "rel": 4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.618,
      "mod_I0": 2.6,
      "mod_cross": 1.6,
      "shape_fold": 1,
      "flt_cutoff": 9200,
      "r": 1.618,
      "i": 2.6,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.427,
      "mod_I0": 3.6399999999999997,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 2.3,
      "flt_cutoff": 11960,
      "r": 2.427,
      "i": 3.6399999999999997,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.2135,
      "mod_I0": 1.56,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 5520,
      "r": 1.2135,
      "i": 1.56,
      "d": 0.9
    }
  ]
},
  {
  "id": 87,
  "name": "Clifford Torus Attractor",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "2D Projektion eines 4D Clifford-Torus mit kontinuierlicher Drehung",
  "formulaLatex": "x<sub>n+1</sub> = sin(a y<sub>n</sub>) + c cos(a x<sub>n</sub>)",
  "formulaSub": "Rotierender 4D Phasen-Torus",
  "dspType": "matrix24",
  "customParam": {
    "name": "Torus-Krümmung a",
    "min": -2.5,
    "max": 2.5,
    "step": 0.05,
    "val": 1.7
  },
  "defaults": {
    "r1_ratio": 0.75,
    "r2_ratio": 1.75,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 85,
    "mod_I0": 3.2,
    "mod_dI": 2,
    "mod_cross": 1.3,
    "mod_fb": 0.4,
    "mod_skew": 0.25,
    "shape_fold": 1.4,
    "shape_morph": 0.5,
    "shape_bias": 0.15,
    "shape_drive": 1.7,
    "env_atk": 0.05,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 3,
    "flt_cutoff": 7800,
    "flt_reso": 2.8,
    "flt_envAmt": 1800,
    "space_pan": 52,
    "custom_math": 1.7,
    "vol": 0.8,
    "lfo": 0.14,
    "vibDepth": 3.6,
    "ratio": 1.75,
    "I0": 3.2,
    "dI": 2,
    "atk": 0.05,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.75,
      "r2_ratio": 1.75,
      "mod_I0": 3.2,
      "mod_cross": 1.3,
      "shape_fold": 1.4,
      "flt_cutoff": 7800,
      "r": 1.75,
      "i": 3.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.75,
      "r2_ratio": 2.625,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.58,
      "shape_fold": 2.8999999999999995,
      "flt_cutoff": 10140,
      "r": 2.625,
      "i": 4.4799999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.75,
      "r2_ratio": 1.3125,
      "mod_I0": 1.92,
      "mod_cross": 0.52,
      "shape_fold": 0,
      "flt_cutoff": 4680,
      "r": 1.3125,
      "i": 1.92,
      "d": 1
    }
  ]
},
  {
  "id": 88,
  "name": "Hénon Chaotic Map",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Diskrete 2D Abbildung mit quadratischer Nichtlinearität",
  "formulaLatex": "x<sub>n+1</sub> = 1 - a x<sub>n</sub>² + y<sub>n</sub>, y<sub>n+1</sub> = b x<sub>n</sub>",
  "formulaSub": "Hénon Strange Attractor (a=1.4, b=0.3)",
  "dspType": "matrix24",
  "customParam": {
    "name": "Hénon Parameter a",
    "min": 0.8,
    "max": 1.45,
    "step": 0.01,
    "val": 1.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 70,
    "mod_I0": 3.6,
    "mod_dI": 1.7,
    "mod_cross": 1.5,
    "mod_fb": 0.5,
    "mod_skew": 0.3,
    "shape_fold": 1.6,
    "shape_morph": 0.4,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.03,
    "env_dec": 0.4,
    "env_sus": 65,
    "env_rel": 2.5,
    "flt_cutoff": 8600,
    "flt_reso": 3,
    "flt_envAmt": 2500,
    "space_pan": 45,
    "custom_math": 1.4,
    "vol": 0.82,
    "lfo": 0.22,
    "vibDepth": 4.2,
    "ratio": 2.5,
    "I0": 3.6,
    "dI": 1.7,
    "atk": 0.03,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3.6,
      "mod_cross": 1.5,
      "shape_fold": 1.6,
      "flt_cutoff": 8600,
      "r": 2.5,
      "i": 3.6,
      "d": 1.7
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 5.04,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 3.2,
      "flt_cutoff": 11180,
      "r": 3.75,
      "i": 5.04,
      "d": 2.21
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 2.16,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 5160,
      "r": 1.875,
      "i": 2.16,
      "d": 0.85
    }
  ]
},
  {
  "id": 89,
  "name": "Kuramoto Synchronizer",
  "category": "Bank I: Exotik & Chaos (18 Params)",
  "desc": "Phasenmodell schwach gekoppelter nichtlinearer Oszillatoren",
  "formulaLatex": "θ̇<sub>i</sub> = ω<sub>i</sub> + (K/N) Σ sin(θ<sub>j</sub> - θ<sub>i</sub>)",
  "formulaSub": "Spontane Phasen-Synchronisation bei kritischer Kopplung K_c",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kopplungsstärke K",
    "min": 0.1,
    "max": 5,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.005,
    "r3_ratio": 2.01,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 50,
    "mod_I0": 2,
    "mod_dI": 1.2,
    "mod_cross": 0.9,
    "mod_fb": 0.2,
    "mod_skew": 0.1,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.12,
    "env_dec": 0.8,
    "env_sus": 85,
    "env_rel": 3.8,
    "flt_cutoff": 10500,
    "flt_reso": 1.2,
    "flt_envAmt": 600,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.85,
    "lfo": 0.06,
    "vibDepth": 2.5,
    "ratio": 1.005,
    "I0": 2,
    "dI": 1.2,
    "atk": 0.12,
    "rel": 3.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.005,
      "mod_I0": 2,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 10500,
      "r": 1.005,
      "i": 2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5074999999999998,
      "mod_I0": 2.8,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 13650,
      "r": 1.5074999999999998,
      "i": 2.8,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.7537499999999999,
      "mod_I0": 1.2,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 0.7537499999999999,
      "i": 1.2,
      "d": 0.6
    }
  ]
},
  {
  "id": 90,
  "name": "Orbital Doppler Beacon",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Rotierendes 3D Raumspektrum mit Doppler-Frequenzverschiebung",
  "formulaLatex": "f(t) = f₀ · (1 + (v/c)·cos(ω_rot·t))",
  "formulaSub": "Binauraler 3D Orbital Panner",
  "dspType": "matrix24",
  "customParam": {
    "name": "Orbit Drehzahl (Hz)",
    "min": 0.05,
    "max": 4,
    "step": 0.05,
    "val": 0.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 95,
    "mod_I0": 2.4,
    "mod_dI": 1.5,
    "mod_cross": 0.9,
    "mod_fb": 0.25,
    "mod_skew": 0.1,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.1,
    "env_dec": 0.8,
    "env_sus": 80,
    "env_rel": 3.5,
    "flt_cutoff": 8500,
    "flt_reso": 2.2,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 0.4,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 4,
    "ratio": 1.5,
    "I0": 2.4,
    "dI": 1.5,
    "atk": 0.1,
    "rel": 3.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.4,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 8500,
      "r": 1.5,
      "i": 2.4,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 3.36,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 11050,
      "r": 2.25,
      "i": 3.36,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 1.44,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 5100,
      "r": 1.125,
      "i": 1.44,
      "d": 0.75
    }
  ]
},
  {
  "id": 91,
  "name": "Kinetic Clockwork Pulse",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Polymetrisches Uhrwerk aus ineinandergreifenden FM-Zahnrädern",
  "formulaLatex": "Zahnrad-Übersetzungen 3:4:5:7",
  "formulaSub": "György Ligeti 'Poème Symphonique'",
  "dspType": "matrix24",
  "customParam": {
    "name": "Zahnrad-Reibung",
    "min": 0.2,
    "max": 3,
    "step": 0.05,
    "val": 1.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.33,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 1.5,
    "op_spread": 60,
    "mod_I0": 3.2,
    "mod_dI": 1.4,
    "mod_cross": 1,
    "mod_fb": 0.35,
    "mod_skew": 0.05,
    "shape_fold": 0.7,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.35,
    "env_atk": 0.003,
    "env_dec": 0.35,
    "env_sus": 20,
    "env_rel": 0.8,
    "flt_cutoff": 9200,
    "flt_reso": 2.5,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 1.2,
    "vol": 0.88,
    "lfo": 0.16,
    "vibDepth": 2,
    "ratio": 2.33,
    "I0": 3.2,
    "dI": 1.4,
    "atk": 0.003,
    "rel": 0.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.33,
      "mod_I0": 3.2,
      "mod_cross": 1,
      "shape_fold": 0.7,
      "flt_cutoff": 9200,
      "r": 2.33,
      "i": 3.2,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.495,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.1,
      "shape_fold": 1.8499999999999999,
      "flt_cutoff": 11960,
      "r": 3.495,
      "i": 4.4799999999999995,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.7475,
      "mod_I0": 1.92,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 5520,
      "r": 1.7475,
      "i": 1.92,
      "d": 0.7
    }
  ]
},
  {
  "id": 92,
  "name": "Pulsar Radio Signal",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Periodischer Neutronenstern-Puls mit kosmischem Phasen-Sweep",
  "formulaLatex": "LGM-1 Pulsar Signal (1.337 Sekunden Periode)",
  "formulaSub": "Jocelyn Bell Burnell Pulsar",
  "dspType": "matrix24",
  "customParam": {
    "name": "Pulsar Rotationsperiode",
    "min": 0.1,
    "max": 2,
    "step": 0.05,
    "val": 0.65
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.75,
    "r3_ratio": 3.5,
    "r4_ratio": 0.25,
    "op_detune": 3,
    "op_spread": 70,
    "mod_I0": 3.6,
    "mod_dI": 2,
    "mod_cross": 1.2,
    "mod_fb": 0.45,
    "mod_skew": 0.15,
    "shape_fold": 1,
    "shape_morph": 0.35,
    "shape_bias": 0.15,
    "shape_drive": 1.6,
    "env_atk": 0.01,
    "env_dec": 0.45,
    "env_sus": 40,
    "env_rel": 1.8,
    "flt_cutoff": 7500,
    "flt_reso": 3.2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 0.65,
    "vol": 0.88,
    "lfo": 0.2,
    "vibDepth": 3,
    "ratio": 1.75,
    "I0": 3.6,
    "dI": 2,
    "atk": 0.01,
    "rel": 1.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.75,
      "mod_I0": 3.6,
      "mod_cross": 1.2,
      "shape_fold": 1,
      "flt_cutoff": 7500,
      "r": 1.75,
      "i": 3.6,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.625,
      "mod_I0": 5.04,
      "mod_cross": 2.42,
      "shape_fold": 2.3,
      "flt_cutoff": 9750,
      "r": 2.625,
      "i": 5.04,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.3125,
      "mod_I0": 2.16,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.3125,
      "i": 2.16,
      "d": 1
    }
  ]
},
  {
  "id": 93,
  "name": "Polymetric FM Shifter",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Mehrschichtiges Phasen-Verschiebungsmuster über 3 Zeitebenen",
  "formulaLatex": "3 gegen 4 gegen 5 Phasenüberlagerung",
  "formulaSub": "Steve Reich Phase Music",
  "dspType": "matrix24",
  "customParam": {
    "name": "Phasenversatz Δt",
    "min": 0.01,
    "max": 0.5,
    "step": 0.01,
    "val": 0.12
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 80,
    "mod_I0": 2.8,
    "mod_dI": 1.6,
    "mod_cross": 1.1,
    "mod_fb": 0.3,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.08,
    "shape_drive": 1.3,
    "env_atk": 0.04,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 2.2,
    "flt_cutoff": 8800,
    "flt_reso": 2.4,
    "flt_envAmt": 2200,
    "space_pan": 50,
    "custom_math": 0.12,
    "vol": 0.86,
    "lfo": 0.18,
    "vibDepth": 3.5,
    "ratio": 2,
    "I0": 2.8,
    "dI": 1.6,
    "atk": 0.04,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.8,
      "mod_cross": 1.1,
      "shape_fold": 0.6,
      "flt_cutoff": 8800,
      "r": 2,
      "i": 2.8,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 2.2600000000000002,
      "shape_fold": 1.7,
      "flt_cutoff": 11440,
      "r": 3,
      "i": 3.9199999999999995,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.68,
      "mod_cross": 0.44000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5280,
      "r": 1.5,
      "i": 1.68,
      "d": 0.8
    }
  ]
},
  {
  "id": 94,
  "name": "Cosmic Ray Detector",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Stochastische Spurenkammer-Impulse hochenergetischer Myonen",
  "formulaLatex": "Cerenkov-Strahlung Impulsbreite < 10ms",
  "formulaSub": "Astroteilchenphysik Detektor",
  "dspType": "matrix24",
  "customParam": {
    "name": "Teilchen-Energie (GeV)",
    "min": 10,
    "max": 500,
    "step": 10,
    "val": 120
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4.1,
    "r3_ratio": 8.2,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 60,
    "mod_I0": 4.2,
    "mod_dI": 2,
    "mod_cross": 1.6,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 1.4,
    "shape_morph": 0.45,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.001,
    "env_dec": 0.18,
    "env_sus": 10,
    "env_rel": 0.35,
    "flt_cutoff": 11000,
    "flt_reso": 3.8,
    "flt_envAmt": 6000,
    "space_pan": 50,
    "custom_math": 120,
    "vol": 0.88,
    "lfo": 0.15,
    "vibDepth": 1.5,
    "ratio": 4.1,
    "I0": 4.2,
    "dI": 2,
    "atk": 0.001,
    "rel": 0.35,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4.1,
      "mod_I0": 4.2,
      "mod_cross": 1.6,
      "shape_fold": 1.4,
      "flt_cutoff": 11000,
      "r": 4.1,
      "i": 4.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6.1499999999999995,
      "mod_I0": 5.88,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 2.8999999999999995,
      "flt_cutoff": 14300,
      "r": 6.1499999999999995,
      "i": 5.88,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3.0749999999999997,
      "mod_I0": 2.52,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 6600,
      "r": 3.0749999999999997,
      "i": 2.52,
      "d": 1
    }
  ]
},
  {
  "id": 95,
  "name": "Gravitational Wave Whisper",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Chirp-Signal kollidierender Schwarzer Löcher (LIGO GW150914)",
  "formulaLatex": "f_GW(t) = f₀ · (1 - t/t_merge)^(-3/8)",
  "formulaSub": "LIGO Gravitationswellen-Chirp",
  "dspType": "matrix24",
  "customParam": {
    "name": "Chirp-Masse M_chirp",
    "min": 10,
    "max": 80,
    "step": 2,
    "val": 36
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2.5,
    "r4_ratio": 0.25,
    "op_detune": 4.5,
    "op_spread": 85,
    "mod_I0": 2.6,
    "mod_dI": 1.8,
    "mod_cross": 1.2,
    "mod_fb": 0.35,
    "mod_skew": 0.1,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.15,
    "shape_drive": 1.5,
    "env_atk": 0.6,
    "env_dec": 1.4,
    "env_sus": 80,
    "env_rel": 4.2,
    "flt_cutoff": 5500,
    "flt_reso": 2.8,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 36,
    "vol": 0.87,
    "lfo": 0.1,
    "vibDepth": 4.5,
    "ratio": 1,
    "I0": 2.6,
    "dI": 1.8,
    "atk": 0.6,
    "rel": 4.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 2.6,
      "mod_cross": 1.2,
      "shape_fold": 0.8,
      "flt_cutoff": 5500,
      "r": 1,
      "i": 2.6,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 3.6399999999999997,
      "mod_cross": 2.42,
      "shape_fold": 2,
      "flt_cutoff": 7150,
      "r": 1.5,
      "i": 3.6399999999999997,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 1.56,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 3300,
      "r": 0.75,
      "i": 1.56,
      "d": 0.9
    }
  ]
},
  {
  "id": 96,
  "name": "Orbital Stereo Ping",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Präziser Sonar- und Weltraum-Ping mit zirkulierendem Echo",
  "formulaLatex": "Sinus-Ping mit exponentiellem Hall-Kollaps",
  "formulaSub": "Raumschiff-Sensoren Sonar",
  "dspType": "matrix24",
  "customParam": {
    "name": "Ping Echo-Dauer",
    "min": 0.2,
    "max": 3,
    "step": 0.1,
    "val": 1.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0.5,
    "op_spread": 75,
    "mod_I0": 2.2,
    "mod_dI": 1,
    "mod_cross": 0.5,
    "mod_fb": 0.15,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0.05,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.002,
    "env_dec": 0.6,
    "env_sus": 10,
    "env_rel": 2.5,
    "flt_cutoff": 12500,
    "flt_reso": 2,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 1.4,
    "vol": 0.88,
    "lfo": 0.08,
    "vibDepth": 1.5,
    "ratio": 2,
    "I0": 2.2,
    "dI": 1,
    "atk": 0.002,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.2,
      "mod_cross": 0.5,
      "shape_fold": 0.2,
      "flt_cutoff": 12500,
      "r": 2,
      "i": 2.2,
      "d": 1
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.08,
      "mod_cross": 1.3,
      "shape_fold": 1.1,
      "flt_cutoff": 16250,
      "r": 3,
      "i": 3.08,
      "d": 1.3
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.32,
      "mod_cross": 0.2,
      "shape_fold": 0,
      "flt_cutoff": 7500,
      "r": 1.5,
      "i": 1.32,
      "d": 0.5
    }
  ]
},
  {
  "id": 97,
  "name": "Andromeda Beacon",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Intergalaktischer Leuchtfeuer-Impuls mit sanft schwebender Aura",
  "formulaLatex": "2.5 Millionen Lichtjahre Entfernungs-Dämpfung",
  "formulaSub": "Andromeda-Galaxie Orientierungssignal",
  "dspType": "matrix24",
  "customParam": {
    "name": "Signal-Reichweite",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 3.236,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 90,
    "mod_I0": 2.2,
    "mod_dI": 1.5,
    "mod_cross": 0.9,
    "mod_fb": 0.25,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.25,
    "env_atk": 0.3,
    "env_dec": 1.2,
    "env_sus": 80,
    "env_rel": 4.5,
    "flt_cutoff": 9000,
    "flt_reso": 2.2,
    "flt_envAmt": 1800,
    "space_pan": 50,
    "custom_math": 3.8,
    "vol": 0.86,
    "lfo": 0.09,
    "vibDepth": 4,
    "ratio": 1.618,
    "I0": 2.2,
    "dI": 1.5,
    "atk": 0.3,
    "rel": 4.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.618,
      "mod_I0": 2.2,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 9000,
      "r": 1.618,
      "i": 2.2,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.427,
      "mod_I0": 3.08,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 11700,
      "r": 2.427,
      "i": 3.08,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.2135,
      "mod_I0": 1.32,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 5400,
      "r": 1.2135,
      "i": 1.32,
      "d": 0.75
    }
  ]
},
  {
  "id": 98,
  "name": "Stellar Flare Rise",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Aufsteigende Sonneneruption mit dramatischem Hüllkurven- und Filteranstieg",
  "formulaLatex": "Magnetische Rekonnexion im Sonnenplasma",
  "formulaSub": "Koronaler Massenauswurf",
  "dspType": "matrix24",
  "customParam": {
    "name": "Eruptions-Intensität",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.25,
    "r3_ratio": 4.5,
    "r4_ratio": 0.5,
    "op_detune": 7.5,
    "op_spread": 85,
    "mod_I0": 3.2,
    "mod_dI": 2,
    "mod_cross": 1.5,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.8,
    "env_dec": 1.5,
    "env_sus": 85,
    "env_rel": 4,
    "flt_cutoff": 7800,
    "flt_reso": 3,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 3,
    "vol": 0.85,
    "lfo": 0.14,
    "vibDepth": 4.8,
    "ratio": 2.25,
    "I0": 3.2,
    "dI": 2,
    "atk": 0.8,
    "rel": 4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 3.2,
      "mod_cross": 1.5,
      "shape_fold": 1.2,
      "flt_cutoff": 7800,
      "r": 2.25,
      "i": 3.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.375,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 10140,
      "r": 3.375,
      "i": 4.4799999999999995,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.6875,
      "mod_I0": 1.92,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4680,
      "r": 1.6875,
      "i": 1.92,
      "d": 1
    }
  ]
},
  {
  "id": 99,
  "name": "Infinite Horizon Morph",
  "category": "Bank J: Generative Kinetic (20 Params)",
  "desc": "Permanente generative Klanglandschaft mit stufenloser Timbre-Evolution",
  "formulaLatex": "6-Operator Endlos-Schleife mit fraktaler Modulation",
  "formulaSub": "Brian Eno 'Music for Airports' Generativ",
  "dspType": "matrix24",
  "customParam": {
    "name": "Evolutions-Geschwindigkeit",
    "min": 0.01,
    "max": 1,
    "step": 0.02,
    "val": 0.15
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 2.5,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 95,
    "mod_I0": 2,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.25,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 1.5,
    "env_dec": 2.5,
    "env_sus": 85,
    "env_rel": 6,
    "flt_cutoff": 8200,
    "flt_reso": 1.8,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 0.15,
    "vol": 0.86,
    "lfo": 0.06,
    "vibDepth": 4.2,
    "ratio": 1.5,
    "I0": 2,
    "dI": 1.5,
    "atk": 1.5,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 8200,
      "r": 1.5,
      "i": 2,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 2.8,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 10660,
      "r": 2.25,
      "i": 2.8,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 1.2,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 4920,
      "r": 1.125,
      "i": 1.2,
      "d": 0.75
    }
  ]
},
  {
  "id": 100,
  "name": "Cyberpunk Bass Drone",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Massiver, verzerrter Cyberpunk 2077 Bass-Drone mit Röhren-Biss",
  "formulaLatex": "Sawtooth FM + Wavefolding Overdrive",
  "formulaSub": "Dystopian Low-End Power",
  "dspType": "matrix24",
  "customParam": {
    "name": "Cyber-Verzerrung",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4.2
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 3,
    "r4_ratio": 0.25,
    "op_detune": 6,
    "op_spread": 75,
    "mod_I0": 4.6,
    "mod_dI": 2.4,
    "mod_cross": 2.2,
    "mod_fb": 0.7,
    "mod_skew": 0.25,
    "shape_fold": 2.8,
    "shape_morph": 0.6,
    "shape_bias": 0.3,
    "shape_drive": 3.5,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 2,
    "flt_cutoff": 4800,
    "flt_reso": 4.5,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 4.2,
    "vol": 0.88,
    "lfo": 0.15,
    "vibDepth": 2.5,
    "ratio": 1,
    "I0": 4.6,
    "dI": 2.4,
    "atk": 0.01,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 4.6,
      "mod_cross": 2.2,
      "shape_fold": 2.8,
      "flt_cutoff": 4800,
      "r": 1,
      "i": 4.6,
      "d": 2.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 6.4399999999999995,
      "mod_cross": 4,
      "shape_fold": 4.999999999999999,
      "flt_cutoff": 6240,
      "r": 1.5,
      "i": 6.4399999999999995,
      "d": 3.12
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 2.76,
      "mod_cross": 0.8800000000000001,
      "shape_fold": 0,
      "flt_cutoff": 2880,
      "r": 0.75,
      "i": 2.76,
      "d": 1.2
    }
  ]
},
  {
  "id": 101,
  "name": "Neural Overdrive Lead",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Kreischender Cyber-Lead mit Feedback-Resonanz und schnellem Portamento",
  "formulaLatex": "Crossmod Feedback Kaskade",
  "formulaSub": "Ghost in the Shell Lead",
  "dspType": "matrix24",
  "customParam": {
    "name": "Neural-Resonanz",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 4.5,
    "r4_ratio": 0.5,
    "op_detune": 7.5,
    "op_spread": 80,
    "mod_I0": 3.8,
    "mod_dI": 2,
    "mod_cross": 1.8,
    "mod_fb": 0.8,
    "mod_skew": 0.2,
    "shape_fold": 1.8,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.6,
    "env_atk": 0.005,
    "env_dec": 0.45,
    "env_sus": 75,
    "env_rel": 1.6,
    "flt_cutoff": 8200,
    "flt_reso": 3.6,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.84,
    "lfo": 0.22,
    "vibDepth": 4.5,
    "ratio": 1.5,
    "I0": 3.8,
    "dI": 2,
    "atk": 0.005,
    "rel": 1.6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.8,
      "mod_cross": 1.8,
      "shape_fold": 1.8,
      "flt_cutoff": 8200,
      "r": 1.5,
      "i": 3.8,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.3800000000000003,
      "shape_fold": 3.5,
      "flt_cutoff": 10660,
      "r": 2.25,
      "i": 5.319999999999999,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.125,
      "mod_I0": 2.28,
      "mod_cross": 0.7200000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4920,
      "r": 1.125,
      "i": 2.28,
      "d": 1
    }
  ]
},
  {
  "id": 102,
  "name": "Neon Night Drive Lead",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Warm glühender Synthwave Lead für nächtliche Autobahn-Fahrten",
  "formulaLatex": "Dual Detuned Carrier mit Glanz",
  "formulaSub": "Kavinsky / The Midnight",
  "dspType": "matrix24",
  "customParam": {
    "name": "Neon-Glanz",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 70,
    "mod_I0": 2.6,
    "mod_dI": 1.4,
    "mod_cross": 0.9,
    "mod_fb": 0.35,
    "mod_skew": 0.05,
    "shape_fold": 0.7,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.5,
    "env_atk": 0.02,
    "env_dec": 0.6,
    "env_sus": 80,
    "env_rel": 2.2,
    "flt_cutoff": 9200,
    "flt_reso": 2.2,
    "flt_envAmt": 2800,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.86,
    "lfo": 0.14,
    "vibDepth": 4,
    "ratio": 2,
    "I0": 2.6,
    "dI": 1.4,
    "atk": 0.02,
    "rel": 2.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.6,
      "mod_cross": 0.9,
      "shape_fold": 0.7,
      "flt_cutoff": 9200,
      "r": 2,
      "i": 2.6,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.6399999999999997,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.8499999999999999,
      "flt_cutoff": 11960,
      "r": 3,
      "i": 3.6399999999999997,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.56,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 5520,
      "r": 1.5,
      "i": 1.56,
      "d": 0.7
    }
  ]
},
  {
  "id": 103,
  "name": "Dystopian Replicant Voice",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Synthetische Roboter-Stimme mit Vocoder-artigem Formant-Filter",
  "formulaLatex": "Dual Formant Bandpass bei 800 & 2400 Hz",
  "formulaSub": "Blade Runner Replicant Voice",
  "dspType": "matrix24",
  "customParam": {
    "name": "Vokal-Formant",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.75,
    "r3_ratio": 5.5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 75,
    "mod_I0": 3.4,
    "mod_dI": 1.8,
    "mod_cross": 1.2,
    "mod_fb": 0.45,
    "mod_skew": 0.15,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.04,
    "env_dec": 0.7,
    "env_sus": 70,
    "env_rel": 2.5,
    "flt_cutoff": 4200,
    "flt_reso": 4.8,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.85,
    "lfo": 0.18,
    "vibDepth": 3.8,
    "ratio": 2.75,
    "I0": 3.4,
    "dI": 1.8,
    "atk": 0.04,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.75,
      "mod_I0": 3.4,
      "mod_cross": 1.2,
      "shape_fold": 1.2,
      "flt_cutoff": 4200,
      "r": 2.75,
      "i": 3.4,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.125,
      "mod_I0": 4.76,
      "mod_cross": 2.42,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 5460,
      "r": 4.125,
      "i": 4.76,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.0625,
      "mod_I0": 2.04,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 2520,
      "r": 2.0625,
      "i": 2.04,
      "d": 0.9
    }
  ]
},
  {
  "id": 104,
  "name": "Cybernetic Sub-Pluck",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Kurzer, knackiger Zupfklang mit subsonischem Kick-Punch",
  "formulaLatex": "Exponentielles Decay + Sub-Impuls",
  "formulaSub": "EBM & Darkwave Sequenz",
  "dspType": "matrix24",
  "customParam": {
    "name": "Pluck-Punch",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.8
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.25,
    "op_detune": 1,
    "op_spread": 40,
    "mod_I0": 4,
    "mod_dI": 1.6,
    "mod_cross": 1.4,
    "mod_fb": 0.55,
    "mod_skew": 0.1,
    "shape_fold": 1,
    "shape_morph": 0.35,
    "shape_bias": 0.15,
    "shape_drive": 1.9,
    "env_atk": 0.002,
    "env_dec": 0.25,
    "env_sus": 10,
    "env_rel": 0.4,
    "flt_cutoff": 6500,
    "flt_reso": 3.5,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 2.8,
    "vol": 0.9,
    "lfo": 0.08,
    "vibDepth": 0,
    "ratio": 2,
    "I0": 4,
    "dI": 1.6,
    "atk": 0.002,
    "rel": 0.4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 2,
      "mod_I0": 4,
      "mod_cross": 1.4,
      "shape_fold": 1,
      "flt_cutoff": 6500,
      "r": 2,
      "i": 4,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 3,
      "mod_I0": 5.6,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 2.3,
      "flt_cutoff": 8450,
      "r": 3,
      "i": 5.6,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 2.4,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 3900,
      "r": 1.5,
      "i": 2.4,
      "d": 0.8
    }
  ]
},
  {
  "id": 105,
  "name": "AI Glitch Hive",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Surrendes, chaotisches Bienenvolk aus interagierenden KI-Synapsen",
  "formulaLatex": "Stochastische FM Modulation 15 Hz",
  "formulaSub": "Matrix AI Core",
  "dspType": "matrix24",
  "customParam": {
    "name": "Synapsen-Dichte",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.14,
    "r3_ratio": 6.28,
    "r4_ratio": 0.5,
    "op_detune": 8,
    "op_spread": 90,
    "mod_I0": 3.8,
    "mod_dI": 2.4,
    "mod_cross": 2,
    "mod_fb": 0.6,
    "mod_skew": 0.3,
    "shape_fold": 1.6,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.2,
    "env_atk": 0.01,
    "env_dec": 0.4,
    "env_sus": 65,
    "env_rel": 1.5,
    "flt_cutoff": 8800,
    "flt_reso": 4,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 4.5,
    "vol": 0.84,
    "lfo": 0.32,
    "vibDepth": 5,
    "ratio": 3.14,
    "I0": 3.8,
    "dI": 2.4,
    "atk": 0.01,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.14,
      "mod_I0": 3.8,
      "mod_cross": 2,
      "shape_fold": 1.6,
      "flt_cutoff": 8800,
      "r": 3.14,
      "i": 3.8,
      "d": 2.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.71,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.7,
      "shape_fold": 3.2,
      "flt_cutoff": 11440,
      "r": 4.71,
      "i": 5.319999999999999,
      "d": 3.12
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.355,
      "mod_I0": 2.28,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 5280,
      "r": 2.355,
      "i": 2.28,
      "d": 1.2
    }
  ]
},
  {
  "id": 106,
  "name": "Plasma Conduit",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Fließende Hochenergie-Plasmaströmung mit summender Röhrensättigung",
  "formulaLatex": "Dual Operator Plasma Wavefolding",
  "formulaSub": "Sci-Fi Energie-Generator",
  "dspType": "matrix24",
  "customParam": {
    "name": "Plasma-Hitze",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.33,
    "r3_ratio": 4.66,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 80,
    "mod_I0": 3.6,
    "mod_dI": 2,
    "mod_cross": 1.6,
    "mod_fb": 0.5,
    "mod_skew": 0.2,
    "shape_fold": 2,
    "shape_morph": 0.55,
    "shape_bias": 0.25,
    "shape_drive": 2.4,
    "env_atk": 0.05,
    "env_dec": 0.7,
    "env_sus": 80,
    "env_rel": 2.6,
    "flt_cutoff": 7500,
    "flt_reso": 3,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 3.6,
    "vol": 0.85,
    "lfo": 0.2,
    "vibDepth": 4.2,
    "ratio": 2.33,
    "I0": 3.6,
    "dI": 2,
    "atk": 0.05,
    "rel": 2.6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.33,
      "mod_I0": 3.6,
      "mod_cross": 1.6,
      "shape_fold": 2,
      "flt_cutoff": 7500,
      "r": 2.33,
      "i": 3.6,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.495,
      "mod_I0": 5.04,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 3.8,
      "flt_cutoff": 9750,
      "r": 3.495,
      "i": 5.04,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.7475,
      "mod_I0": 2.16,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.7475,
      "i": 2.16,
      "d": 1
    }
  ]
},
  {
  "id": 107,
  "name": "Dark Synthwave Horn",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Mächtiges, dröhnendes Bläser-Horn für epische Trailermusik",
  "formulaLatex": "Brass Kaskade mit Sägezahn-Faltung",
  "formulaSub": "Inception / Cyberpunk Horn",
  "dspType": "matrix24",
  "customParam": {
    "name": "Horn-Wucht",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3.4
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 6.5,
    "op_spread": 85,
    "mod_I0": 3,
    "mod_dI": 2.2,
    "mod_cross": 1.4,
    "mod_fb": 0.45,
    "mod_skew": 0.15,
    "shape_fold": 1.4,
    "shape_morph": 0.45,
    "shape_bias": 0.2,
    "shape_drive": 2,
    "env_atk": 0.15,
    "env_dec": 0.8,
    "env_sus": 85,
    "env_rel": 3,
    "flt_cutoff": 6000,
    "flt_reso": 2.8,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 3.4,
    "vol": 0.88,
    "lfo": 0.12,
    "vibDepth": 4,
    "ratio": 1,
    "I0": 3,
    "dI": 2.2,
    "atk": 0.15,
    "rel": 3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 3,
      "mod_cross": 1.4,
      "shape_fold": 1.4,
      "flt_cutoff": 6000,
      "r": 1,
      "i": 3,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4.199999999999999,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 2.8999999999999995,
      "flt_cutoff": 7800,
      "r": 1.5,
      "i": 4.199999999999999,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 3600,
      "r": 0.75,
      "i": 1.7999999999999998,
      "d": 1.1
    }
  ]
},
  {
  "id": 108,
  "name": "Hologram Shimmer",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Schwebendes, flimmerndes Hologramm-Pad mit ätherischem Glanz",
  "formulaLatex": "Glass Shimmer FM 1:7",
  "formulaSub": "Cyber Holographic Pad",
  "dspType": "matrix24",
  "customParam": {
    "name": "Flimmer-Frequenz",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 7,
    "r3_ratio": 14,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 90,
    "mod_I0": 1.8,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.15,
    "env_atk": 0.8,
    "env_dec": 1.8,
    "env_sus": 85,
    "env_rel": 5,
    "flt_cutoff": 12000,
    "flt_reso": 1.8,
    "flt_envAmt": 1500,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.85,
    "lfo": 0.16,
    "vibDepth": 4.5,
    "ratio": 7,
    "I0": 1.8,
    "dI": 1.2,
    "atk": 0.8,
    "rel": 5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 7,
      "mod_I0": 1.8,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 12000,
      "r": 7,
      "i": 1.8,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 10.5,
      "mod_I0": 2.52,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 15600,
      "r": 10.5,
      "i": 2.52,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 5.25,
      "mod_I0": 1.08,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 5.25,
      "i": 1.08,
      "d": 0.6
    }
  ]
},
  {
  "id": 109,
  "name": "Cyber Core Meltdown",
  "category": "Bank K: Cyberpunk & Dark Electro (22 Params)",
  "desc": "Instabiler Reaktor-Kern mit alarmierendem Pulsieren und weißem Rauschen",
  "formulaLatex": "Feedback Beta = 0.9 erzeugt Chaos-Kollaps",
  "formulaSub": "Reaktor-Notabschaltung",
  "dspType": "matrix24",
  "customParam": {
    "name": "Reaktor-Temperatur",
    "min": 100,
    "max": 1000,
    "step": 20,
    "val": 680
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.5,
    "r3_ratio": 4,
    "r4_ratio": 0.25,
    "op_detune": 9,
    "op_spread": 95,
    "mod_I0": 4.8,
    "mod_dI": 2.6,
    "mod_cross": 2.5,
    "mod_fb": 0.85,
    "mod_skew": 0.35,
    "shape_fold": 3,
    "shape_morph": 0.7,
    "shape_bias": 0.35,
    "shape_drive": 3.8,
    "env_atk": 0.02,
    "env_dec": 0.6,
    "env_sus": 75,
    "env_rel": 2.5,
    "flt_cutoff": 6800,
    "flt_reso": 4.6,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 680,
    "vol": 0.82,
    "lfo": 0.28,
    "vibDepth": 5.5,
    "ratio": 1.5,
    "I0": 4.8,
    "dI": 2.6,
    "atk": 0.02,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4.8,
      "mod_cross": 2.5,
      "shape_fold": 3,
      "flt_cutoff": 6800,
      "r": 1.5,
      "i": 4.8,
      "d": 2.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.25,
      "mod_I0": 6.72,
      "mod_cross": 4,
      "shape_fold": 5.3,
      "flt_cutoff": 8840,
      "r": 2.25,
      "i": 6.72,
      "d": 3.3800000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 2.88,
      "mod_cross": 1,
      "shape_fold": 0,
      "flt_cutoff": 4080,
      "r": 1.125,
      "i": 2.88,
      "d": 1.3
    }
  ]
},
  {
  "id": 110,
  "name": "Voyager Deep Beacon",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Einsames Funkfeuer der Raumsonde Voyager an der Grenze des Sonnensystems",
  "formulaLatex": "Interstellar Doppler Ping",
  "formulaSub": "Heliosphäre Grenzübergang",
  "dspType": "matrix24",
  "customParam": {
    "name": "Signal-Distanz (AU)",
    "min": 10,
    "max": 200,
    "step": 5,
    "val": 150
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 6,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 85,
    "mod_I0": 2.2,
    "mod_dI": 1.2,
    "mod_cross": 0.7,
    "mod_fb": 0.15,
    "mod_skew": 0.05,
    "shape_fold": 0.3,
    "shape_morph": 0.1,
    "shape_bias": 0.05,
    "shape_drive": 1.1,
    "env_atk": 0.005,
    "env_dec": 1.2,
    "env_sus": 30,
    "env_rel": 4.5,
    "flt_cutoff": 10500,
    "flt_reso": 2,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 150,
    "vol": 0.86,
    "lfo": 0.08,
    "vibDepth": 2.5,
    "ratio": 2,
    "I0": 2.2,
    "dI": 1.2,
    "atk": 0.005,
    "rel": 4.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.2,
      "mod_cross": 0.7,
      "shape_fold": 0.3,
      "flt_cutoff": 10500,
      "r": 2,
      "i": 2.2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.08,
      "mod_cross": 1.6199999999999999,
      "shape_fold": 1.25,
      "flt_cutoff": 13650,
      "r": 3,
      "i": 3.08,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.32,
      "mod_cross": 0.27999999999999997,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 1.5,
      "i": 1.32,
      "d": 0.6
    }
  ]
},
  {
  "id": 111,
  "name": "Andromeda Stellar Dust",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Zarte kosmische Staubwolken mit irisierenden Oberton-Spiegelungen",
  "formulaLatex": "Goldener Schnitt + Weites Stereo-Unison",
  "formulaSub": "Intergalaktischer Staub",
  "dspType": "matrix24",
  "customParam": {
    "name": "Staub-Dichte",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 3.236,
    "r4_ratio": 0.5,
    "op_detune": 6,
    "op_spread": 95,
    "mod_I0": 1.8,
    "mod_dI": 1.4,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.15,
    "env_atk": 1.2,
    "env_dec": 2.2,
    "env_sus": 85,
    "env_rel": 6,
    "flt_cutoff": 9000,
    "flt_reso": 1.8,
    "flt_envAmt": 1600,
    "space_pan": 50,
    "custom_math": 2,
    "vol": 0.85,
    "lfo": 0.07,
    "vibDepth": 4,
    "ratio": 1.618,
    "I0": 1.8,
    "dI": 1.4,
    "atk": 1.2,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.618,
      "mod_I0": 1.8,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 9000,
      "r": 1.618,
      "i": 1.8,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.427,
      "mod_I0": 2.52,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 11700,
      "r": 2.427,
      "i": 2.52,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.2135,
      "mod_I0": 1.08,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5400,
      "r": 1.2135,
      "i": 1.08,
      "d": 0.7
    }
  ]
},
  {
  "id": 112,
  "name": "Quantum Tunneling Pad",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Quantenmechanischer Tunneleffekt mit mystischen Phasen-Sprüngen",
  "formulaLatex": "T = exp(-2 · ∫ √(2m(V(x)-E)) dx / ℏ)",
  "formulaSub": "Quanten-Wahrscheinlichkeitswelle",
  "dspType": "matrix24",
  "customParam": {
    "name": "Tunnel-Wahrscheinlichkeit",
    "min": 0.1,
    "max": 1,
    "step": 0.02,
    "val": 0.65
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.5,
    "op_detune": 4.5,
    "op_spread": 90,
    "mod_I0": 2.2,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.25,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.25,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 0.8,
    "env_dec": 1.8,
    "env_sus": 80,
    "env_rel": 5.5,
    "flt_cutoff": 7500,
    "flt_reso": 2.4,
    "flt_envAmt": 2000,
    "space_pan": 50,
    "custom_math": 0.65,
    "vol": 0.85,
    "lfo": 0.1,
    "vibDepth": 4.2,
    "ratio": 1.414,
    "I0": 2.2,
    "dI": 1.5,
    "atk": 0.8,
    "rel": 5.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1.414,
      "mod_I0": 2.2,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 7500,
      "r": 1.414,
      "i": 2.2,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 2.121,
      "mod_I0": 3.08,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 9750,
      "r": 2.121,
      "i": 3.08,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.0605,
      "mod_I0": 1.32,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.0605,
      "i": 1.32,
      "d": 0.75
    }
  ]
},
  {
  "id": 113,
  "name": "Magnetar Burst",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Hochenergetischer Gammastrahlen-Ausbruch eines ultrakompakten Magnetars",
  "formulaLatex": "Magnetfeld B > 10¹¹ Tesla erzeugt Röhrenverzerrung",
  "formulaSub": "Soft Gamma Repeater",
  "dspType": "matrix24",
  "customParam": {
    "name": "Magnetfeld-Stärke (TeraTesla)",
    "min": 10,
    "max": 100,
    "step": 2,
    "val": 65
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 3,
    "r3_ratio": 7,
    "r4_ratio": 0.25,
    "op_detune": 7,
    "op_spread": 80,
    "mod_I0": 4.2,
    "mod_dI": 2.2,
    "mod_cross": 2,
    "mod_fb": 0.65,
    "mod_skew": 0.25,
    "shape_fold": 2.2,
    "shape_morph": 0.6,
    "shape_bias": 0.25,
    "shape_drive": 2.8,
    "env_atk": 0.005,
    "env_dec": 0.6,
    "env_sus": 50,
    "env_rel": 2.8,
    "flt_cutoff": 9500,
    "flt_reso": 3.5,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 65,
    "vol": 0.86,
    "lfo": 0.18,
    "vibDepth": 3.5,
    "ratio": 3,
    "I0": 4.2,
    "dI": 2.2,
    "atk": 0.005,
    "rel": 2.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 3,
      "mod_I0": 4.2,
      "mod_cross": 2,
      "shape_fold": 2.2,
      "flt_cutoff": 9500,
      "r": 3,
      "i": 4.2,
      "d": 2.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 4.5,
      "mod_I0": 5.88,
      "mod_cross": 3.7,
      "shape_fold": 4.1000000000000005,
      "flt_cutoff": 12350,
      "r": 4.5,
      "i": 5.88,
      "d": 2.8600000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 2.25,
      "mod_I0": 2.52,
      "mod_cross": 0.8,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 2.25,
      "i": 2.52,
      "d": 1.1
    }
  ]
},
  {
  "id": 114,
  "name": "Solar Flare Resonance",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Glühende Sonneneruption mit warmem, breitem Tiefpass-Filterverlauf",
  "formulaLatex": "Plasmawellen im koronalen Bogen",
  "formulaSub": "Heliosphärische Resonanz",
  "dspType": "matrix24",
  "customParam": {
    "name": "Korona-Hitze",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 5.5,
    "op_spread": 85,
    "mod_I0": 2.6,
    "mod_dI": 1.6,
    "mod_cross": 1.2,
    "mod_fb": 0.35,
    "mod_skew": 0.1,
    "shape_fold": 0.9,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.5,
    "env_atk": 0.5,
    "env_dec": 1.4,
    "env_sus": 85,
    "env_rel": 4,
    "flt_cutoff": 8000,
    "flt_reso": 2.5,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.86,
    "lfo": 0.12,
    "vibDepth": 4.5,
    "ratio": 2,
    "I0": 2.6,
    "dI": 1.6,
    "atk": 0.5,
    "rel": 4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.6,
      "mod_cross": 1.2,
      "shape_fold": 0.9,
      "flt_cutoff": 8000,
      "r": 2,
      "i": 2.6,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.6399999999999997,
      "mod_cross": 2.42,
      "shape_fold": 2.1500000000000004,
      "flt_cutoff": 10400,
      "r": 3,
      "i": 3.6399999999999997,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.56,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 4800,
      "r": 1.5,
      "i": 1.56,
      "d": 0.8
    }
  ]
},
  {
  "id": 115,
  "name": "Dark Nebula Atmosphere",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Undurchdringliche Dunkelwolke mit schweren Sub-Bässen und sanftem Rauschen",
  "formulaLatex": "Tiefbass-Kaskade + 1/f Rauschmodulation",
  "formulaSub": "Barnard 68 Dunkelnebel",
  "dspType": "matrix24",
  "customParam": {
    "name": "Absorptions-Faktor",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.75,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 3,
    "op_spread": 75,
    "mod_I0": 2.4,
    "mod_dI": 1.6,
    "mod_cross": 0.9,
    "mod_fb": 0.3,
    "mod_skew": 0.1,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 1.5,
    "env_dec": 2.5,
    "env_sus": 90,
    "env_rel": 6,
    "flt_cutoff": 3500,
    "flt_reso": 2,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.88,
    "lfo": 0.05,
    "vibDepth": 3,
    "ratio": 0.75,
    "I0": 2.4,
    "dI": 1.6,
    "atk": 1.5,
    "rel": 6,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 2.4,
      "mod_cross": 0.9,
      "shape_fold": 0.6,
      "flt_cutoff": 3500,
      "r": 0.75,
      "i": 2.4,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 3.36,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.7,
      "flt_cutoff": 4550,
      "r": 1.125,
      "i": 3.36,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.5625,
      "mod_I0": 1.44,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 2100,
      "r": 0.5625,
      "i": 1.44,
      "d": 0.8
    }
  ]
},
  {
  "id": 116,
  "name": "Titan Methane Lake",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Kühle, flüssige Methanmeere auf dem Saturnmond Titan unter dichter Atmosphäre",
  "formulaLatex": "Tieftemperatur-Resonanz bei 94 Kelvin",
  "formulaSub": "Kraken Mare Titan",
  "dspType": "matrix24",
  "customParam": {
    "name": "Mond-Temperatur (K)",
    "min": 50,
    "max": 150,
    "step": 2,
    "val": 94
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.33,
    "r3_ratio": 2.66,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 70,
    "mod_I0": 2.8,
    "mod_dI": 1.5,
    "mod_cross": 1,
    "mod_fb": 0.35,
    "mod_skew": 0.1,
    "shape_fold": 0.7,
    "shape_morph": 0.25,
    "shape_bias": 0.15,
    "shape_drive": 1.45,
    "env_atk": 0.8,
    "env_dec": 1.6,
    "env_sus": 85,
    "env_rel": 5,
    "flt_cutoff": 4800,
    "flt_reso": 3.2,
    "flt_envAmt": 1800,
    "space_pan": 50,
    "custom_math": 94,
    "vol": 0.87,
    "lfo": 0.08,
    "vibDepth": 3.5,
    "ratio": 1.33,
    "I0": 2.8,
    "dI": 1.5,
    "atk": 0.8,
    "rel": 5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.33,
      "mod_I0": 2.8,
      "mod_cross": 1,
      "shape_fold": 0.7,
      "flt_cutoff": 4800,
      "r": 1.33,
      "i": 2.8,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.995,
      "mod_I0": 3.9199999999999995,
      "mod_cross": 2.1,
      "shape_fold": 1.8499999999999999,
      "flt_cutoff": 6240,
      "r": 1.995,
      "i": 3.9199999999999995,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.9975,
      "mod_I0": 1.68,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 2880,
      "r": 0.9975,
      "i": 1.68,
      "d": 0.75
    }
  ]
},
  {
  "id": 117,
  "name": "Intergalactic String",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Kosmische Saite mit astronomischer Zugspannung und unendlicher Tonhöhe",
  "formulaLatex": "Topologische Raumzeit-Defekt Saite",
  "formulaSub": "Kosmologische Fadenstruktur",
  "dspType": "matrix24",
  "customParam": {
    "name": "Saiten-Spannung Gμ",
    "min": 1,
    "max": 8,
    "step": 0.1,
    "val": 4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 0.5,
    "op_detune": 4.5,
    "op_spread": 80,
    "mod_I0": 3,
    "mod_dI": 1.6,
    "mod_cross": 1.2,
    "mod_fb": 0.4,
    "mod_skew": 0.1,
    "shape_fold": 1,
    "shape_morph": 0.35,
    "shape_bias": 0.1,
    "shape_drive": 1.6,
    "env_atk": 0.05,
    "env_dec": 1,
    "env_sus": 80,
    "env_rel": 4.5,
    "flt_cutoff": 10000,
    "flt_reso": 2.8,
    "flt_envAmt": 3000,
    "space_pan": 50,
    "custom_math": 4,
    "vol": 0.85,
    "lfo": 0.12,
    "vibDepth": 4.8,
    "ratio": 3,
    "I0": 3,
    "dI": 1.6,
    "atk": 0.05,
    "rel": 4.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3,
      "mod_cross": 1.2,
      "shape_fold": 1,
      "flt_cutoff": 10000,
      "r": 3,
      "i": 3,
      "d": 1.6
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 4.5,
      "mod_I0": 4.199999999999999,
      "mod_cross": 2.42,
      "shape_fold": 2.3,
      "flt_cutoff": 13000,
      "r": 4.5,
      "i": 4.199999999999999,
      "d": 2.08
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.25,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 6000,
      "r": 2.25,
      "i": 1.7999999999999998,
      "d": 0.8
    }
  ]
},
  {
  "id": 118,
  "name": "Oort Cloud Shimmer",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Milliarden gefrorener Kometenkerne im Sonnenwind am Rande des Sonnensystems",
  "formulaLatex": "Glaskristallines Shimmer-Spektrum",
  "formulaSub": "Oortsche Kometenwolke",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kometen-Dichte",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4.5,
    "r3_ratio": 9,
    "r4_ratio": 0.5,
    "op_detune": 5,
    "op_spread": 95,
    "mod_I0": 2,
    "mod_dI": 1.4,
    "mod_cross": 0.9,
    "mod_fb": 0.25,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 1,
    "env_dec": 2,
    "env_sus": 85,
    "env_rel": 6.5,
    "flt_cutoff": 11500,
    "flt_reso": 2,
    "flt_envAmt": 2000,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.85,
    "lfo": 0.09,
    "vibDepth": 4,
    "ratio": 4.5,
    "I0": 2,
    "dI": 1.4,
    "atk": 1,
    "rel": 6.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4.5,
      "mod_I0": 2,
      "mod_cross": 0.9,
      "shape_fold": 0.5,
      "flt_cutoff": 11500,
      "r": 4.5,
      "i": 2,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6.75,
      "mod_I0": 2.8,
      "mod_cross": 1.9400000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 14950,
      "r": 6.75,
      "i": 2.8,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3.375,
      "mod_I0": 1.2,
      "mod_cross": 0.36000000000000004,
      "shape_fold": 0,
      "flt_cutoff": 6900,
      "r": 3.375,
      "i": 1.2,
      "d": 0.7
    }
  ]
},
  {
  "id": 119,
  "name": "Cosmic Microwave Drone",
  "category": "Bank L: Cosmic Deep Space (24 Params)",
  "desc": "Permanentes 3K Hintergrund-Summen der Urexplosion",
  "formulaLatex": "Thermisches Schwarzkörper-Spektrum",
  "formulaSub": "Reliktstrahlung aus dem Urknall",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kosmische Rotverschiebung z",
    "min": 1,
    "max": 15,
    "step": 0.5,
    "val": 11
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 3,
    "op_spread": 85,
    "mod_I0": 2,
    "mod_dI": 1.4,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.5,
    "shape_morph": 0.2,
    "shape_bias": 0.1,
    "shape_drive": 1.3,
    "env_atk": 2,
    "env_dec": 3,
    "env_sus": 90,
    "env_rel": 7.5,
    "flt_cutoff": 6000,
    "flt_reso": 1.6,
    "flt_envAmt": 1000,
    "space_pan": 50,
    "custom_math": 11,
    "vol": 0.86,
    "lfo": 0.04,
    "vibDepth": 3.5,
    "ratio": 1,
    "I0": 2,
    "dI": 1.4,
    "atk": 2,
    "rel": 7.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1,
      "mod_I0": 2,
      "mod_cross": 0.8,
      "shape_fold": 0.5,
      "flt_cutoff": 6000,
      "r": 1,
      "i": 2,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 2.8,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.55,
      "flt_cutoff": 7800,
      "r": 1.5,
      "i": 2.8,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 0.75,
      "mod_I0": 1.2,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 3600,
      "r": 0.75,
      "i": 1.2,
      "d": 0.7
    }
  ]
},
  {
  "id": 120,
  "name": "Hyperpop Detuned Supersaw FM",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Übersättigter, grell funkelnder Supersaw-Sound mit maximalem Glanz",
  "formulaLatex": "6-Op Supersaw FM Kaskade",
  "formulaSub": "100 Gecs / Charli XCX Hyperpop",
  "dspType": "matrix24",
  "customParam": {
    "name": "Hyper-Glanz",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 4.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 9.5,
    "op_spread": 100,
    "mod_I0": 3.2,
    "mod_dI": 1.8,
    "mod_cross": 1.5,
    "mod_fb": 0.55,
    "mod_skew": 0.2,
    "shape_fold": 1.8,
    "shape_morph": 0.5,
    "shape_bias": 0.2,
    "shape_drive": 2.5,
    "env_atk": 0.005,
    "env_dec": 0.45,
    "env_sus": 80,
    "env_rel": 1.4,
    "flt_cutoff": 12500,
    "flt_reso": 3.2,
    "flt_envAmt": 5500,
    "space_pan": 50,
    "custom_math": 4.2,
    "vol": 0.88,
    "lfo": 0.15,
    "vibDepth": 4.5,
    "ratio": 1,
    "I0": 3.2,
    "dI": 1.8,
    "atk": 0.005,
    "rel": 1.4,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 3.2,
      "mod_cross": 1.5,
      "shape_fold": 1.8,
      "flt_cutoff": 12500,
      "r": 1,
      "i": 3.2,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 4.4799999999999995,
      "mod_cross": 2.9000000000000004,
      "shape_fold": 3.5,
      "flt_cutoff": 16250,
      "r": 1.5,
      "i": 4.4799999999999995,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.92,
      "mod_cross": 0.6000000000000001,
      "shape_fold": 0,
      "flt_cutoff": 7500,
      "r": 0.75,
      "i": 1.92,
      "d": 0.9
    }
  ]
},
  {
  "id": 121,
  "name": "Kawaii Glass Bell",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Niedliche, süße Glockentöne mit extrem hohem Oberton-Sparkle",
  "formulaLatex": "Glass Bell R2 = 7.0 + Weiches Wavefolding",
  "formulaSub": "SOPHIE / PC Music",
  "dspType": "matrix24",
  "customParam": {
    "name": "Süße-Faktor",
    "min": 0.5,
    "max": 5,
    "step": 0.1,
    "val": 3.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 7,
    "r3_ratio": 14,
    "r4_ratio": 0.5,
    "op_detune": 2,
    "op_spread": 75,
    "mod_I0": 3.5,
    "mod_dI": 1.5,
    "mod_cross": 1.2,
    "mod_fb": 0.3,
    "mod_skew": 0.05,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.4,
    "env_atk": 0.001,
    "env_dec": 0.35,
    "env_sus": 10,
    "env_rel": 1.2,
    "flt_cutoff": 14500,
    "flt_reso": 2.8,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 3.5,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2.5,
    "ratio": 7,
    "I0": 3.5,
    "dI": 1.5,
    "atk": 0.001,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 7,
      "mod_I0": 3.5,
      "mod_cross": 1.2,
      "shape_fold": 0.8,
      "flt_cutoff": 14500,
      "r": 7,
      "i": 3.5,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 10.5,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 2.42,
      "shape_fold": 2,
      "flt_cutoff": 18000,
      "r": 10.5,
      "i": 4.8999999999999995,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 5.25,
      "mod_I0": 2.1,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 8700,
      "r": 5.25,
      "i": 2.1,
      "d": 0.75
    }
  ]
},
  {
  "id": 122,
  "name": "Future Bass Wobble Pluck",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Breiter Akkord-Pluck mit charakteristischem Filter-Wobble",
  "formulaLatex": "LFO-Modulierter Tiefpass + Unison Spread",
  "formulaSub": "Flume / San Holo Future Bass",
  "dspType": "matrix24",
  "customParam": {
    "name": "Wobble-Tiefe",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.6
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 7,
    "op_spread": 90,
    "mod_I0": 2.6,
    "mod_dI": 1.8,
    "mod_cross": 1.2,
    "mod_fb": 0.4,
    "mod_skew": 0.1,
    "shape_fold": 1,
    "shape_morph": 0.35,
    "shape_bias": 0.15,
    "shape_drive": 1.7,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 40,
    "env_rel": 1.2,
    "flt_cutoff": 8000,
    "flt_reso": 4.2,
    "flt_envAmt": 6000,
    "space_pan": 50,
    "custom_math": 2.6,
    "vol": 0.86,
    "lfo": 0.25,
    "vibDepth": 3.5,
    "ratio": 1,
    "I0": 2.6,
    "dI": 1.8,
    "atk": 0.01,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 1,
      "mod_I0": 2.6,
      "mod_cross": 1.2,
      "shape_fold": 1,
      "flt_cutoff": 8000,
      "r": 1,
      "i": 2.6,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 3.6399999999999997,
      "mod_cross": 2.42,
      "shape_fold": 2.3,
      "flt_cutoff": 10400,
      "r": 1.5,
      "i": 3.6399999999999997,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 0.75,
      "mod_I0": 1.56,
      "mod_cross": 0.48,
      "shape_fold": 0,
      "flt_cutoff": 4800,
      "r": 0.75,
      "i": 1.56,
      "d": 0.9
    }
  ]
},
  {
  "id": 123,
  "name": "8-Bit Laser Chime",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Zwitschernde Chiptune-Glocken mit schneller Arp-Resonanz",
  "formulaLatex": "Rechteck-modulierte Nadel-Impulse",
  "formulaSub": "Retro Chiptune Sparkle",
  "dspType": "matrix24",
  "customParam": {
    "name": "Chiptune-Biss",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.4
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 8,
    "r4_ratio": 0.5,
    "op_detune": 1,
    "op_spread": 50,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 1.4,
    "mod_fb": 0.5,
    "mod_skew": 0.1,
    "shape_fold": 1.2,
    "shape_morph": 0.4,
    "shape_bias": 0.15,
    "shape_drive": 1.8,
    "env_atk": 0.001,
    "env_dec": 0.22,
    "env_sus": 5,
    "env_rel": 0.3,
    "flt_cutoff": 12000,
    "flt_reso": 3.5,
    "flt_envAmt": 5500,
    "space_pan": 50,
    "custom_math": 2.4,
    "vol": 0.88,
    "lfo": 0.12,
    "vibDepth": 1.5,
    "ratio": 4,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.001,
    "rel": 0.3,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 4,
      "mod_I0": 4,
      "mod_cross": 1.4,
      "shape_fold": 1.2,
      "flt_cutoff": 12000,
      "r": 4,
      "i": 4,
      "d": 1.8
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 6,
      "mod_I0": 5.6,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 2.5999999999999996,
      "flt_cutoff": 15600,
      "r": 6,
      "i": 5.6,
      "d": 2.3400000000000003
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 2.4,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 7200,
      "r": 3,
      "i": 2.4,
      "d": 0.9
    }
  ]
},
  {
  "id": 124,
  "name": "Pitch-Shifted Bubble Pop",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Blubbernde Seifenblasen-Pop Sounds mit schnellem Pitch-Envelope",
  "formulaLatex": "Nichtlinearer 300 Hz Pitch-Up Pop",
  "formulaSub": "SOPHIE Bubble Percussion",
  "dspType": "matrix24",
  "customParam": {
    "name": "Blasen-Spannung",
    "min": 0.5,
    "max": 3.5,
    "step": 0.1,
    "val": 2.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 40,
    "mod_I0": 3.5,
    "mod_dI": 1.5,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "mod_skew": 0.05,
    "shape_fold": 0.8,
    "shape_morph": 0.3,
    "shape_bias": 0.1,
    "shape_drive": 1.5,
    "env_atk": 0.001,
    "env_dec": 0.12,
    "env_sus": 0,
    "env_rel": 0.15,
    "flt_cutoff": 7500,
    "flt_reso": 5.2,
    "flt_envAmt": 5000,
    "space_pan": 50,
    "custom_math": 2.2,
    "vol": 0.9,
    "lfo": 0,
    "vibDepth": 0,
    "ratio": 2,
    "I0": 3.5,
    "dI": 1.5,
    "atk": 0.001,
    "rel": 0.15,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 3.5,
      "mod_cross": 0.8,
      "shape_fold": 0.8,
      "flt_cutoff": 7500,
      "r": 2,
      "i": 3.5,
      "d": 1.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 4.8999999999999995,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 2,
      "flt_cutoff": 9750,
      "r": 3,
      "i": 4.8999999999999995,
      "d": 1.9500000000000002
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 2.1,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 4500,
      "r": 1.5,
      "i": 2.1,
      "d": 0.75
    }
  ]
},
  {
  "id": 125,
  "name": "Squeaky Clean Glitch Lead",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Extrem präziser, metallischer Lead-Sound für scharfe Melodien",
  "formulaLatex": "Chebyshev 4-fach Faltung + Diode Clipping",
  "formulaSub": "A. G. Cook Glitch Lead",
  "dspType": "matrix24",
  "customParam": {
    "name": "Glitch-Schärfe",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 3.8
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 0.5,
    "op_detune": 4,
    "op_spread": 75,
    "mod_I0": 3.8,
    "mod_dI": 2,
    "mod_cross": 1.6,
    "mod_fb": 0.6,
    "mod_skew": 0.2,
    "shape_fold": 2.2,
    "shape_morph": 0.55,
    "shape_bias": 0.25,
    "shape_drive": 2.6,
    "env_atk": 0.003,
    "env_dec": 0.4,
    "env_sus": 70,
    "env_rel": 1.2,
    "flt_cutoff": 10500,
    "flt_reso": 3.4,
    "flt_envAmt": 4000,
    "space_pan": 50,
    "custom_math": 3.8,
    "vol": 0.85,
    "lfo": 0.18,
    "vibDepth": 3.8,
    "ratio": 2.5,
    "I0": 3.8,
    "dI": 2,
    "atk": 0.003,
    "rel": 1.2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2.5,
      "mod_I0": 3.8,
      "mod_cross": 1.6,
      "shape_fold": 2.2,
      "flt_cutoff": 10500,
      "r": 2.5,
      "i": 3.8,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3.75,
      "mod_I0": 5.319999999999999,
      "mod_cross": 3.0600000000000005,
      "shape_fold": 4.1000000000000005,
      "flt_cutoff": 13650,
      "r": 3.75,
      "i": 5.319999999999999,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.875,
      "mod_I0": 2.28,
      "mod_cross": 0.6400000000000001,
      "shape_fold": 0,
      "flt_cutoff": 6300,
      "r": 1.875,
      "i": 2.28,
      "d": 1
    }
  ]
},
  {
  "id": 126,
  "name": "Metallic Hyperpop Snarl",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Zersplitterter, aggressiver Bass-Sound mit hohem Feedback",
  "formulaLatex": "Crossmod Feedback Snarl",
  "formulaSub": "Dorian Electra / Dylan Brady",
  "dspType": "matrix24",
  "customParam": {
    "name": "Snarl-Aggression",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 4.5
  },
  "defaults": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.5,
    "r3_ratio": 4.5,
    "r4_ratio": 0.25,
    "op_detune": 7,
    "op_spread": 70,
    "mod_I0": 4.5,
    "mod_dI": 2.5,
    "mod_cross": 2.4,
    "mod_fb": 0.75,
    "mod_skew": 0.3,
    "shape_fold": 2.6,
    "shape_morph": 0.65,
    "shape_bias": 0.3,
    "shape_drive": 3.2,
    "env_atk": 0.005,
    "env_dec": 0.35,
    "env_sus": 55,
    "env_rel": 0.8,
    "flt_cutoff": 6200,
    "flt_reso": 4.5,
    "flt_envAmt": 5500,
    "space_pan": 50,
    "custom_math": 4.5,
    "vol": 0.85,
    "lfo": 0.22,
    "vibDepth": 3,
    "ratio": 1.5,
    "I0": 4.5,
    "dI": 2.5,
    "atk": 0.005,
    "rel": 0.8,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.5,
      "r2_ratio": 1.5,
      "mod_I0": 4.5,
      "mod_cross": 2.4,
      "shape_fold": 2.6,
      "flt_cutoff": 6200,
      "r": 1.5,
      "i": 4.5,
      "d": 2.5
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.5,
      "r2_ratio": 2.25,
      "mod_I0": 6.3,
      "mod_cross": 4,
      "shape_fold": 4.7,
      "flt_cutoff": 8060,
      "r": 2.25,
      "i": 6.3,
      "d": 3.25
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.5,
      "r2_ratio": 1.125,
      "mod_I0": 2.6999999999999997,
      "mod_cross": 0.96,
      "shape_fold": 0,
      "flt_cutoff": 3720,
      "r": 1.125,
      "i": 2.6999999999999997,
      "d": 1.25
    }
  ]
},
  {
  "id": 127,
  "name": "Rainbow Sparkle Chime",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Kaskadierender Regenbogen-Akkord mit glockenreinem Nachklang",
  "formulaLatex": "Inharmonische 6-Op Glockenserie",
  "formulaSub": "Future Kawaii Chimes",
  "dspType": "matrix24",
  "customParam": {
    "name": "Sparkle-Glanz",
    "min": 1,
    "max": 5,
    "step": 0.1,
    "val": 3.2
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7,
    "r4_ratio": 0.5,
    "op_detune": 3,
    "op_spread": 85,
    "mod_I0": 3,
    "mod_dI": 1.4,
    "mod_cross": 1,
    "mod_fb": 0.3,
    "mod_skew": 0.05,
    "shape_fold": 0.6,
    "shape_morph": 0.2,
    "shape_bias": 0.05,
    "shape_drive": 1.3,
    "env_atk": 0.002,
    "env_dec": 0.6,
    "env_sus": 20,
    "env_rel": 2,
    "flt_cutoff": 13500,
    "flt_reso": 2.4,
    "flt_envAmt": 3500,
    "space_pan": 50,
    "custom_math": 3.2,
    "vol": 0.88,
    "lfo": 0.1,
    "vibDepth": 2.8,
    "ratio": 3.5,
    "I0": 3,
    "dI": 1.4,
    "atk": 0.002,
    "rel": 2,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 3.5,
      "mod_I0": 3,
      "mod_cross": 1,
      "shape_fold": 0.6,
      "flt_cutoff": 13500,
      "r": 3.5,
      "i": 3,
      "d": 1.4
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 5.25,
      "mod_I0": 4.199999999999999,
      "mod_cross": 2.1,
      "shape_fold": 1.7,
      "flt_cutoff": 17550,
      "r": 5.25,
      "i": 4.199999999999999,
      "d": 1.8199999999999998
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 2.625,
      "mod_I0": 1.7999999999999998,
      "mod_cross": 0.4,
      "shape_fold": 0,
      "flt_cutoff": 8100,
      "r": 2.625,
      "i": 1.7999999999999998,
      "d": 0.7
    }
  ]
},
  {
  "id": 128,
  "name": "Cyber Kawaii Flute",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Extrem helle, gehackte Synthesizer-Flöte mit Vibrato",
  "formulaLatex": "FM Flöte mit High-Pass Cutoff",
  "formulaSub": "Anamanaguchi / Porter Robinson",
  "dspType": "matrix24",
  "customParam": {
    "name": "Kawaii Vokaltrakt",
    "min": 0.5,
    "max": 4,
    "step": 0.1,
    "val": 2.5
  },
  "defaults": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 60,
    "mod_I0": 2.2,
    "mod_dI": 1.2,
    "mod_cross": 0.8,
    "mod_fb": 0.2,
    "mod_skew": 0.05,
    "shape_fold": 0.4,
    "shape_morph": 0.15,
    "shape_bias": 0.05,
    "shape_drive": 1.2,
    "env_atk": 0.04,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 1.5,
    "flt_cutoff": 9500,
    "flt_reso": 2.8,
    "flt_envAmt": 2500,
    "space_pan": 50,
    "custom_math": 2.5,
    "vol": 0.87,
    "lfo": 0.16,
    "vibDepth": 5.5,
    "ratio": 2,
    "I0": 2.2,
    "dI": 1.2,
    "atk": 0.04,
    "rel": 1.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 1,
      "r2_ratio": 2,
      "mod_I0": 2.2,
      "mod_cross": 0.8,
      "shape_fold": 0.4,
      "flt_cutoff": 9500,
      "r": 2,
      "i": 2.2,
      "d": 1.2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 1,
      "r2_ratio": 3,
      "mod_I0": 3.08,
      "mod_cross": 1.7800000000000002,
      "shape_fold": 1.4000000000000001,
      "flt_cutoff": 12350,
      "r": 3,
      "i": 3.08,
      "d": 1.56
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 1,
      "r2_ratio": 1.5,
      "mod_I0": 1.32,
      "mod_cross": 0.32000000000000006,
      "shape_fold": 0,
      "flt_cutoff": 5700,
      "r": 1.5,
      "i": 1.32,
      "d": 0.6
    }
  ]
},
  {
  "id": 129,
  "name": "Hyper Bass Drop",
  "category": "Bank M: Hyperpop & Future Bass (24 Params)",
  "desc": "Gigantischer 30 Hz Bass-Drop mit tonnenförmiger Sub-Kompression",
  "formulaLatex": "Sub-Carrier R1 = 0.25 mit Saturation Drive 4.0",
  "formulaSub": "Future Bass Drop Monster",
  "dspType": "matrix24",
  "customParam": {
    "name": "Sub-Kompression",
    "min": 1,
    "max": 6,
    "step": 0.1,
    "val": 4
  },
  "defaults": {
    "r1_ratio": 0.25,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.125,
    "op_detune": 0.5,
    "op_spread": 30,
    "mod_I0": 4.2,
    "mod_dI": 2,
    "mod_cross": 1.4,
    "mod_fb": 0.6,
    "mod_skew": 0.2,
    "shape_fold": 1.5,
    "shape_morph": 0.45,
    "shape_bias": 0.25,
    "shape_drive": 3,
    "env_atk": 0.005,
    "env_dec": 0.8,
    "env_sus": 70,
    "env_rel": 2.5,
    "flt_cutoff": 3500,
    "flt_reso": 3.8,
    "flt_envAmt": 4500,
    "space_pan": 50,
    "custom_math": 4,
    "vol": 0.94,
    "lfo": 0.06,
    "vibDepth": 0,
    "ratio": 0.5,
    "I0": 4.2,
    "dI": 2,
    "atk": 0.005,
    "rel": 2.5,
    "oct": 0,
    "latch": false
  },
  "oscillators": {
    "r1_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 2,
      "speed": 20
    },
    "r2_ratio": {
      "enabled": false,
      "min": 0.5,
      "max": 4,
      "speed": 25
    },
    "r3_ratio": {
      "enabled": false,
      "min": 1,
      "max": 8,
      "speed": 30
    },
    "r4_ratio": {
      "enabled": false,
      "min": 0.25,
      "max": 2,
      "speed": 15
    },
    "op_detune": {
      "enabled": false,
      "min": -10,
      "max": 10,
      "speed": 20
    },
    "op_spread": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 15
    },
    "mod_I0": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 25
    },
    "mod_dI": {
      "enabled": false,
      "min": 0.2,
      "max": 3.5,
      "speed": 30
    },
    "mod_cross": {
      "enabled": false,
      "min": 0,
      "max": 2.5,
      "speed": 20
    },
    "mod_fb": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "mod_skew": {
      "enabled": false,
      "min": 0,
      "max": 180,
      "speed": 10
    },
    "shape_fold": {
      "enabled": false,
      "min": 0,
      "max": 3,
      "speed": 20
    },
    "shape_morph": {
      "enabled": false,
      "min": 0,
      "max": 0.8,
      "speed": 15
    },
    "shape_bias": {
      "enabled": false,
      "min": -0.3,
      "max": 0.3,
      "speed": 10
    },
    "shape_drive": {
      "enabled": false,
      "min": 1,
      "max": 3,
      "speed": 20
    },
    "env_atk": {
      "enabled": false,
      "min": 0.01,
      "max": 0.5,
      "speed": 10
    },
    "env_dec": {
      "enabled": false,
      "min": 0.2,
      "max": 1.5,
      "speed": 15
    },
    "env_sus": {
      "enabled": false,
      "min": 30,
      "max": 90,
      "speed": 10
    },
    "env_rel": {
      "enabled": false,
      "min": 1,
      "max": 5,
      "speed": 10
    },
    "flt_cutoff": {
      "enabled": false,
      "min": 500,
      "max": 12000,
      "speed": 20
    },
    "flt_reso": {
      "enabled": false,
      "min": 0.8,
      "max": 6,
      "speed": 25
    },
    "flt_envAmt": {
      "enabled": false,
      "min": -2000,
      "max": 4000,
      "speed": 15
    },
    "space_pan": {
      "enabled": false,
      "min": 20,
      "max": 80,
      "speed": 25
    },
    "custom_math": {
      "enabled": false,
      "min": 0.5,
      "max": 5,
      "speed": 20
    }
  },
  "presets": [
    {
      "name": "Standard",
      "r1_ratio": 0.25,
      "r2_ratio": 0.5,
      "mod_I0": 4.2,
      "mod_cross": 1.4,
      "shape_fold": 1.5,
      "flt_cutoff": 3500,
      "r": 0.5,
      "i": 4.2,
      "d": 2
    },
    {
      "name": "Intensiv",
      "r1_ratio": 0.25,
      "r2_ratio": 0.75,
      "mod_I0": 5.88,
      "mod_cross": 2.7399999999999998,
      "shape_fold": 3.05,
      "flt_cutoff": 4550,
      "r": 0.75,
      "i": 5.88,
      "d": 2.6
    },
    {
      "name": "Sanft & Weich",
      "r1_ratio": 0.25,
      "r2_ratio": 0.375,
      "mod_I0": 2.52,
      "mod_cross": 0.5599999999999999,
      "shape_fold": 0,
      "flt_cutoff": 2100,
      "r": 0.375,
      "i": 2.52,
      "d": 1
    }
  ]
}
];
