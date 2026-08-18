"use strict";

/* ============================================================
   130 CANONICAL PROGRESSIVE SYNTHESIZER PRESETS (PLAN 4)
   13 Banks A–M (4 to 24 Parameters) with 8-Topology FM Matrix Engine
   ============================================================ */

const SYNTH_DEFS = [
  {
  "id": "synth_1",
  "name": "A1: Reiner Sinus Grundton",
  "category": "Bank A (4 Params · Sinus & Grundton)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A1",
  "desc": "Sinus & Grundton",
  "formulaSub": "Algorithmus 1 (Sinus & Grundton)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=0.0]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 0,
    "mod_dI": 0,
    "mod_cross": 0,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.05,
    "env_dec": 0.8,
    "env_sus": 85,
    "env_rel": 1.5,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.48,
    "flt_cutoff": 16000,
    "flt_reso": 1,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.075,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 0,
    "dI": 0,
    "atk": 0.05,
    "rel": 1.5,
    "customParam": 0.075,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 0,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 0,
        "mod_dI": 0,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.7,
        "flt_cutoff": 12000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 0,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 0,
        "mod_dI": 0,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.7,
        "flt_cutoff": 12000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ]
},
  {
  "id": "synth_2",
  "name": "A2: Warmer Chowning 1:1 Drone",
  "category": "Bank A (4 Params · Chowning Klassik)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A2",
  "desc": "Chowning Klassik",
  "formulaSub": "Algorithmus 1 (Chowning Klassik)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=1.2]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 1.2,
    "mod_dI": 0.4,
    "mod_cross": 0.1,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.08,
    "env_dec": 1.2,
    "env_sus": 80,
    "env_rel": 2,
    "mod_env_dec": 0.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.6,
    "flt_cutoff": 14000,
    "flt_reso": 1,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.15,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 1.2,
    "dI": 0.4,
    "atk": 0.08,
    "rel": 2,
    "customParam": 0.15,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.2,
        "shape_drive": 1,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.68,
        "mod_dI": 0.6000000000000001,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.16,
        "env_rel": 3.6,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.2,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.2,
        "shape_drive": 1,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.68,
        "mod_dI": 0.6000000000000001,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.16,
        "env_rel": 3.6,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.2,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ]
},
  {
  "id": "synth_3",
  "name": "A3: Sanfte Glocke 1:1.414",
  "category": "Bank A (4 Params · Glocken & Metall)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A3",
  "desc": "Glocken & Metall",
  "formulaSub": "Algorithmus 1 (Glocken & Metall)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.41, I_0=2.4]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.707,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.4,
    "mod_dI": 0.8,
    "mod_cross": 0.2,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.005,
    "env_dec": 1.5,
    "env_sus": 30,
    "env_rel": 2.5,
    "mod_env_dec": 0.35,
    "mod_env_atk": 0.003,
    "mod_env_sus": 12,
    "mod_env_rel": 0.42,
    "flt_cutoff": 12000,
    "flt_reso": 1.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.22499999999999998,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 2.4,
    "dI": 0.8,
    "atk": 0.005,
    "rel": 2.5,
    "customParam": 0.22499999999999998,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 2.7,
        "env_rel": 4.5,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 2.7,
        "env_rel": 4.5,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ]
},
  {
  "id": "synth_4",
  "name": "A4: Klarinetten-Oberton 1:2",
  "category": "Bank A (4 Params · Holzbläser)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A4",
  "desc": "Holzbläser",
  "formulaSub": "Algorithmus 1 (Holzbläser)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=1.6]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 1.6,
    "mod_dI": 0.5,
    "mod_cross": 0.1,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.04,
    "env_dec": 0.9,
    "env_sus": 75,
    "env_rel": 1.2,
    "mod_env_dec": 0.3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.36,
    "flt_cutoff": 10000,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.3,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 1.6,
    "dI": 0.5,
    "atk": 0.04,
    "rel": 1.2,
    "customParam": 0.3,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.6,
        "shape_drive": 1,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.2399999999999998,
        "mod_dI": 0.75,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.62,
        "env_rel": 2.16,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.12,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.6,
        "shape_drive": 1,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.2399999999999998,
        "mod_dI": 0.75,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.62,
        "env_rel": 2.16,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.12,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_5",
  "name": "A5: Trompeten-Stoss 1:1",
  "category": "Bank A (4 Params · Blechbläser)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A5",
  "desc": "Blechbläser",
  "formulaSub": "Algorithmus 2 (Blechbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=3.2]",
  "color": "#38c7ff",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 3,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1.2,
    "mod_cross": 0.3,
    "mod_fb": 0.1,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.02,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 0.8,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.216,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 0.375,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.2,
    "dI": 1.2,
    "atk": 0.02,
    "rel": 0.8,
    "customParam": 0.375,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.1,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.072,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.1,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.072,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_6",
  "name": "A6: Tiefbass Fundament 1:0.5",
  "category": "Bank A (4 Params · Bässe)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A6",
  "desc": "Bässe",
  "formulaSub": "Algorithmus 1 (Bässe)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=0.50, I_0=2.0]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2,
    "mod_dI": 0.5,
    "mod_cross": 0.1,
    "mod_fb": 0.2,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.01,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 0.6,
    "mod_env_dec": 0.25,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.3,
    "flt_cutoff": 6000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.44999999999999996,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 2,
    "dI": 0.5,
    "atk": 0.01,
    "rel": 0.6,
    "customParam": 0.44999999999999996,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1.2,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 0.75,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 0.9,
        "env_rel": 1.08,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1.2,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 0.75,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 0.9,
        "env_rel": 1.08,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_7",
  "name": "A7: Ätherisches Flöten-Vibrato",
  "category": "Bank A (4 Params · Flöten)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A7",
  "desc": "Flöten",
  "formulaSub": "Algorithmus 1 (Flöten)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=0.8]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 0.8,
    "mod_dI": 0.3,
    "mod_cross": 0.05,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.12,
    "env_dec": 1,
    "env_sus": 85,
    "env_rel": 1.8,
    "mod_env_dec": 0.6,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.72,
    "flt_cutoff": 9000,
    "flt_reso": 1.1,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.525,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 0.8,
    "dI": 0.3,
    "atk": 0.12,
    "rel": 1.8,
    "customParam": 0.525,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 0.8,
        "shape_drive": 1,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.1199999999999999,
        "mod_dI": 0.44999999999999996,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.24,
        "env_dec": 1.8,
        "env_rel": 3.24,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.6500000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 0.8,
        "shape_drive": 1,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.1199999999999999,
        "mod_dI": 0.44999999999999996,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.24,
        "env_dec": 1.8,
        "env_rel": 3.24,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.6500000000000001
      }
    }
  ]
},
  {
  "id": "synth_8",
  "name": "A8: Gläsernes Mallet 1:3.5",
  "category": "Bank A (4 Params · Mallets)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A8",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 1 (Mallets)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=3.50, I_0=2.8]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7,
    "r4_ratio": 1.75,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 0.9,
    "mod_cross": 0.2,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.003,
    "env_dec": 0.8,
    "env_sus": 20,
    "env_rel": 1.6,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.24,
    "flt_cutoff": 13000,
    "flt_reso": 1.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.6,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.5,
    "I0": 2.8,
    "dI": 0.9,
    "atk": 0.003,
    "rel": 1.6,
    "customParam": 0.6,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.7
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.7
      }
    }
  ]
},
  {
  "id": "synth_9",
  "name": "A9: Warmes Streicher-Bett",
  "category": "Bank A (4 Params · Pads & Streicher)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A9",
  "desc": "Pads & Streicher",
  "formulaSub": "Algorithmus 2 (Pads & Streicher)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=1.4]",
  "color": "#38c7ff",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.002,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 1.4,
    "mod_dI": 0.6,
    "mod_cross": 0.2,
    "mod_fb": 0.1,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.25,
    "env_dec": 2,
    "env_sus": 90,
    "env_rel": 3,
    "mod_env_dec": 1.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 1.7999999999999998,
    "flt_cutoff": 8500,
    "flt_reso": 1.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.6749999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.002,
    "I0": 1.4,
    "dI": 0.6,
    "atk": 0.25,
    "rel": 3,
    "customParam": 0.6749999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.4,
        "shape_drive": 1,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.9599999999999997,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.4,
        "shape_drive": 1,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 1.9599999999999997,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ]
},
  {
  "id": "synth_10",
  "name": "A10: Subtiler Raum-Impuls",
  "category": "Bank A (4 Params · Perkussion)",
  "bank": "A",
  "bankLevel": 1,
  "paramCount": 4,
  "keyDisplay": "A10",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 1 (Perkussion)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.50, I_0=1.5]",
  "color": "#38c7ff",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 1.5,
    "mod_dI": 0.4,
    "mod_cross": 0.1,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.01,
    "env_dec": 0.4,
    "env_sus": 10,
    "env_rel": 1.2,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.18,
    "flt_cutoff": 10000,
    "flt_reso": 1,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.75,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 1.5,
    "dI": 0.4,
    "atk": 0.01,
    "rel": 1.2,
    "customParam": 0.75,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.5,
        "shape_drive": 1,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.0999999999999996,
        "mod_dI": 0.6000000000000001,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 0.7200000000000001,
        "env_rel": 2.16,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.06,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.5,
        "shape_drive": 1,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.0999999999999996,
        "mod_dI": 0.6000000000000001,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 0.7200000000000001,
        "env_rel": 2.16,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.06,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.5
      }
    }
  ]
},
  {
  "id": "synth_11",
  "name": "B1: Chowning Historische Trompete",
  "category": "Bank B (6 Params · Blechbläser)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B1",
  "desc": "Blechbläser",
  "formulaSub": "Algorithmus 2 (Blechbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=3.8]",
  "color": "#00f2fe",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 3,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 0.4,
    "mod_fb": 0.15,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.015,
    "env_dec": 0.5,
    "env_sus": 75,
    "env_rel": 0.7,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.18,
    "flt_cutoff": 12000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 0.825,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.015,
    "rel": 0.7,
    "customParam": 0.825,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.1,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.03,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.06,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.1,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.03,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.06,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_12",
  "name": "B2: Chowning Klassische Kirchenglocke",
  "category": "Bank B (6 Params · Glocken)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B2",
  "desc": "Glocken",
  "formulaSub": "Algorithmus 1 (Glocken)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.41, I_0=4.5]",
  "color": "#00f2fe",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 4.242,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 1.8,
    "mod_cross": 0.5,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.002,
    "env_dec": 2.5,
    "env_sus": 15,
    "env_rel": 4,
    "mod_env_dec": 0.3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 6,
    "mod_env_rel": 0.36,
    "flt_cutoff": 14000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.8999999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 4.5,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 4,
    "customParam": 0.8999999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 4.5,
        "env_rel": 7.2,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.12,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 4.5,
        "env_rel": 7.2,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.12,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_13",
  "name": "B3: Chowning Oboe & Doppelrohr",
  "category": "Bank B (6 Params · Holzbläser)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B3",
  "desc": "Holzbläser",
  "formulaSub": "Algorithmus 2 (Holzbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=3.00, I_0=2.6]",
  "color": "#00f2fe",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 5,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.6,
    "mod_dI": 0.8,
    "mod_cross": 0.3,
    "mod_fb": 0.2,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.03,
    "env_dec": 0.8,
    "env_sus": 80,
    "env_rel": 1,
    "mod_env_dec": 0.25,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.3,
    "flt_cutoff": 9500,
    "flt_reso": 2.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 0.975,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 2.6,
    "dI": 0.8,
    "atk": 0.03,
    "rel": 1,
    "customParam": 0.975,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.05,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.06,
        "env_dec": 1.4400000000000002,
        "env_rel": 1.8,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.05,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.06,
        "env_dec": 1.4400000000000002,
        "env_rel": 1.8,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3.75
      }
    }
  ]
},
  {
  "id": "synth_14",
  "name": "B4: Chowning Fagott Holzresonanz",
  "category": "Bank B (6 Params · Holzbläser)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B4",
  "desc": "Holzbläser",
  "formulaSub": "Algorithmus 1 (Holzbläser)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=2.2]",
  "color": "#00f2fe",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.2,
    "mod_dI": 0.7,
    "mod_cross": 0.2,
    "mod_fb": 0.25,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.04,
    "env_dec": 0.9,
    "env_sus": 78,
    "env_rel": 1.1,
    "mod_env_dec": 0.3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 31,
    "mod_env_rel": 0.36,
    "flt_cutoff": 7500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.05,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 2.2,
    "dI": 0.7,
    "atk": 0.04,
    "rel": 1.1,
    "customParam": 1.05,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.1,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.62,
        "env_rel": 1.9800000000000002,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.12,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.1,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.62,
        "env_rel": 1.9800000000000002,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.12,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_15",
  "name": "B5: Chowning Marimba Palisander",
  "category": "Bank B (6 Params · Mallets)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B5",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 1 (Mallets)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=3.98, I_0=3.2]",
  "color": "#00f2fe",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.98,
    "r3_ratio": 9,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1,
    "mod_cross": 0.2,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.003,
    "env_dec": 0.7,
    "env_sus": 10,
    "env_rel": 1.2,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.216,
    "flt_cutoff": 11000,
    "flt_reso": 1.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.125,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.98,
    "I0": 3.2,
    "dI": 1,
    "atk": 0.003,
    "rel": 1.2,
    "customParam": 1.125,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 2.16,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.4000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 2.16,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.4000000000000004
      }
    }
  ]
},
  {
  "id": "synth_16",
  "name": "B6: Chowning Vokal-Formant 'Ah'",
  "category": "Bank B (6 Params · Vocal)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B6",
  "desc": "Vocal",
  "formulaSub": "Algorithmus 2 (Vocal)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=2.85, I_0=2.9]",
  "color": "#00f2fe",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.85,
    "r3_ratio": 4.12,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.9,
    "mod_dI": 0.9,
    "mod_cross": 0.4,
    "mod_fb": 0.1,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.08,
    "env_dec": 1.4,
    "env_sus": 85,
    "env_rel": 1.8,
    "mod_env_dec": 0.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.6,
    "flt_cutoff": 8000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.2,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.85,
    "I0": 2.9,
    "dI": 0.9,
    "atk": 0.08,
    "rel": 1.8,
    "customParam": 1.2,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.9,
        "shape_drive": 1,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.06,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.52,
        "env_rel": 3.24,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.2,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.9,
        "shape_drive": 1,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.06,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.52,
        "env_rel": 3.24,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.2,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_17",
  "name": "B7: Chowning Vokal-Formant 'Oo'",
  "category": "Bank B (6 Params · Vocal)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B7",
  "desc": "Vocal",
  "formulaSub": "Algorithmus 2 (Vocal)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.35, I_0=2.0]",
  "color": "#00f2fe",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.35,
    "r3_ratio": 2.15,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2,
    "mod_dI": 0.6,
    "mod_cross": 0.2,
    "mod_fb": 0.05,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.1,
    "env_dec": 1.5,
    "env_sus": 88,
    "env_rel": 2,
    "mod_env_dec": 0.6,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 0.72,
    "flt_cutoff": 5000,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.275,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.35,
    "I0": 2,
    "dI": 0.6,
    "atk": 0.1,
    "rel": 2,
    "customParam": 1.275,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 2.7,
        "env_rel": 3.6,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 2.7,
        "env_rel": 3.6,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_18",
  "name": "B8: Chowning Perkussives Holz",
  "category": "Bank B (6 Params · Perkussion)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B8",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 5 (Perkussion)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.40, I_0=4.0]",
  "color": "#00f2fe",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.4,
    "r3_ratio": 5.2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.2,
    "mod_cross": 0.3,
    "mod_fb": 0.2,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.002,
    "env_dec": 0.25,
    "env_sus": 5,
    "env_rel": 0.5,
    "mod_env_dec": 0.08,
    "mod_env_atk": 0.003,
    "mod_env_sus": 2,
    "mod_env_rel": 0.096,
    "flt_cutoff": 9000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.3499999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.4,
    "I0": 4,
    "dI": 1.2,
    "atk": 0.002,
    "rel": 0.5,
    "customParam": 1.3499999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.2,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.45,
        "env_rel": 0.9,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.032,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.16,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.2,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.45,
        "env_rel": 0.9,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.032,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.16,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_19",
  "name": "B9: Chowning Gong Metallbecken",
  "category": "Bank B (6 Params · Glocken)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B9",
  "desc": "Glocken",
  "formulaSub": "Algorithmus 4 (Glocken)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=1.41, I_0=5.0]",
  "color": "#00f2fe",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.76,
    "r4_ratio": 4.15,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5,
    "mod_dI": 2,
    "mod_cross": 0.8,
    "mod_fb": 0.4,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.005,
    "env_dec": 3.5,
    "env_sus": 25,
    "env_rel": 5,
    "mod_env_dec": 0.45,
    "mod_env_atk": 0.003,
    "mod_env_sus": 10,
    "mod_env_rel": 0.54,
    "flt_cutoff": 13000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.425,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 5,
    "dI": 2,
    "atk": 0.005,
    "rel": 5,
    "customParam": 1.425,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 1.15,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 0.18000000000000002,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 1.15,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 0.18000000000000002,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_20",
  "name": "B10: Chowning Streicher-Sägezahn",
  "category": "Bank B (6 Params · Pads)",
  "bank": "B",
  "bankLevel": 2,
  "paramCount": 6,
  "keyDisplay": "B10",
  "desc": "Pads",
  "formulaSub": "Algorithmus 2 (Pads)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=2.4]",
  "color": "#00f2fe",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.4,
    "mod_dI": 0.8,
    "mod_cross": 0.3,
    "mod_fb": 0.35,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.18,
    "env_dec": 2.2,
    "env_sus": 90,
    "env_rel": 2.8,
    "mod_env_dec": 1.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 1.44,
    "flt_cutoff": 10000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.5,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 2.4,
    "dI": 0.8,
    "atk": 0.18,
    "rel": 2.8,
    "customParam": 1.5,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.1,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.36,
        "env_dec": 3.9600000000000004,
        "env_rel": 5.04,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.48,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.1,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.36,
        "env_dec": 3.9600000000000004,
        "env_rel": 5.04,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.48,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_21",
  "name": "C1: DX7 MkI Stage Rhodes 73",
  "category": "Bank C (8 Params · E-Pianos)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C1",
  "desc": "E-Pianos",
  "formulaSub": "Algorithmus 1 (E-Pianos)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=14.00, I_0=3.5]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 14,
    "r3_ratio": 1,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.5,
    "mod_dI": 1.4,
    "mod_cross": 0.1,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.003,
    "env_dec": 1.8,
    "env_sus": 45,
    "env_rel": 2.2,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 18,
    "mod_env_rel": 0.216,
    "flt_cutoff": 12000,
    "flt_reso": 1.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.575,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 14,
    "I0": 3.5,
    "dI": 1.4,
    "atk": 0.003,
    "rel": 2.2,
    "customParam": 1.575,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.05,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.072,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 1.7999999999999998
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.05,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.072,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 1.7999999999999998
      }
    }
  ]
},
  {
  "id": "synth_22",
  "name": "C2: DX7 Full Tine Piano",
  "category": "Bank C (8 Params · E-Pianos)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C2",
  "desc": "E-Pianos",
  "formulaSub": "Algorithmus 1 (E-Pianos)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=7.00, I_0=4.2]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 7,
    "r3_ratio": 1,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.6,
    "mod_cross": 0.2,
    "mod_fb": 0.2,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.002,
    "env_dec": 1.6,
    "env_sus": 40,
    "env_rel": 2,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 16,
    "mod_env_rel": 0.18,
    "flt_cutoff": 13500,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.65,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 7,
    "I0": 4.2,
    "dI": 1.6,
    "atk": 0.002,
    "rel": 2,
    "customParam": 1.65,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.1,
        "env_dec": 1.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 2.8800000000000003,
        "env_rel": 3.6,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.8,
        "mod_env_dec": 0.06,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.1,
        "env_dec": 1.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 2.8800000000000003,
        "env_rel": 3.6,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.8,
        "mod_env_dec": 0.06,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_23",
  "name": "C3: DX7 Solid Slap Bass 1",
  "category": "Bank C (8 Params · Bässe)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C3",
  "desc": "Bässe",
  "formulaSub": "Algorithmus 1 (Bässe)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=3.8]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.8,
    "mod_cross": 0.4,
    "mod_fb": 0.5,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.15,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.004,
    "env_dec": 0.45,
    "env_sus": 50,
    "env_rel": 0.5,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 20,
    "mod_env_rel": 0.144,
    "flt_cutoff": 7500,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.7249999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.8,
    "dI": 1.8,
    "atk": 0.004,
    "rel": 0.5,
    "customParam": 1.7249999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.3,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 0.81,
        "env_rel": 0.9,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.3,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 0.81,
        "env_rel": 0.9,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_24",
  "name": "C4: DX7 Tubular Chime Bells",
  "category": "Bank C (8 Params · Glocken)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C4",
  "desc": "Glocken",
  "formulaSub": "Algorithmus 1 (Glocken)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=3.50, I_0=4.6]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7.01,
    "r4_ratio": 10.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 1.8,
    "mod_cross": 0.5,
    "mod_fb": 0.05,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.002,
    "env_dec": 3,
    "env_sus": 20,
    "env_rel": 4.5,
    "mod_env_dec": 0.28,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.336,
    "flt_cutoff": 14000,
    "flt_reso": 1.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.7999999999999998,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.5,
    "I0": 4.6,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 4.5,
    "customParam": 1.7999999999999998,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 1,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 2.7,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.11200000000000002,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.7
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 1,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 2.7,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.11200000000000002,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.7
      }
    }
  ]
},
  {
  "id": "synth_25",
  "name": "C5: DX7 Warm Analog Brass 1",
  "category": "Bank C (8 Params · Blechbläser)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C5",
  "desc": "Blechbläser",
  "formulaSub": "Algorithmus 2 (Blechbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=3.6]",
  "color": "#00c6fb",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 1.003,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.4,
    "mod_cross": 0.4,
    "mod_fb": 0.45,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.04,
    "env_dec": 0.8,
    "env_sus": 78,
    "env_rel": 1.2,
    "mod_env_dec": 0.22,
    "mod_env_atk": 0.003,
    "mod_env_sus": 31,
    "mod_env_rel": 0.264,
    "flt_cutoff": 10500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 1.875,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.6,
    "dI": 1.4,
    "atk": 0.04,
    "rel": 1.2,
    "customParam": 1.875,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.15,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08800000000000001,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.15,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08800000000000001,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_26",
  "name": "C6: DX7 Harpsichord Clavinet",
  "category": "Bank C (8 Params · Tasten)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C6",
  "desc": "Tasten",
  "formulaSub": "Algorithmus 1 (Tasten)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=4.00, I_0=3.2]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 8,
    "r4_ratio": 2,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1.2,
    "mod_cross": 0.3,
    "mod_fb": 0.4,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.003,
    "env_dec": 0.6,
    "env_sus": 35,
    "env_rel": 0.8,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 14,
    "mod_env_rel": 0.168,
    "flt_cutoff": 11500,
    "flt_reso": 2.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 1.95,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 4,
    "I0": 3.2,
    "dI": 1.2,
    "atk": 0.003,
    "rel": 0.8,
    "customParam": 1.95,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.2,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.2,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.75
      }
    }
  ]
},
  {
  "id": "synth_27",
  "name": "C7: DX7 Super Marimba Attack",
  "category": "Bank C (8 Params · Mallets)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C7",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 1 (Mallets)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=4.00, I_0=3.8]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 10,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.2,
    "mod_cross": 0.2,
    "mod_fb": 0,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.002,
    "env_dec": 0.5,
    "env_sus": 5,
    "env_rel": 0.9,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 2,
    "mod_env_rel": 0.12,
    "flt_cutoff": 12000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.025,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 4,
    "I0": 3.8,
    "dI": 1.2,
    "atk": 0.002,
    "rel": 0.9,
    "customParam": 2.025,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.62,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.62,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_28",
  "name": "C8: DX7 Glass Harmonica Poly",
  "category": "Bank C (8 Params · Pads)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C8",
  "desc": "Pads",
  "formulaSub": "Algorithmus 1 (Pads)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=2.4]",
  "color": "#00c6fb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 6,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.4,
    "mod_dI": 0.8,
    "mod_cross": 0.2,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.06,
    "env_dec": 1.8,
    "env_sus": 80,
    "env_rel": 2.8,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.48,
    "flt_cutoff": 13000,
    "flt_reso": 1.3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.1,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.4,
    "dI": 0.8,
    "atk": 0.06,
    "rel": 2.8,
    "customParam": 2.1,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.12,
        "env_dec": 3.24,
        "env_rel": 5.04,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.9500000000000002
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.12,
        "env_dec": 3.24,
        "env_rel": 5.04,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.9500000000000002
      }
    }
  ]
},
  {
  "id": "synth_29",
  "name": "C9: DX7 Orchestral Log Drum",
  "category": "Bank C (8 Params · Perkussion)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C9",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 5 (Perkussion)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.50, I_0=4.5]",
  "color": "#00c6fb",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3.2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 1.5,
    "mod_cross": 0.5,
    "mod_fb": 0.3,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 0.35,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.35,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 10,
    "env_rel": 0.7,
    "mod_env_dec": 0.09,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.108,
    "flt_cutoff": 8000,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.175,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 4.5,
    "dI": 1.5,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 2.175,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.35,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.25,
        "shape_drive": 1.7550000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 1.26,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.036,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.85,
        "shape_drive": 2.43,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.35,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.25,
        "shape_drive": 1.7550000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 1.26,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.036,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.85,
        "shape_drive": 2.43,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_30",
  "name": "C10: DX7 Ethereal Ambient Voices",
  "category": "Bank C (8 Params · Pads)",
  "bank": "C",
  "bankLevel": 3,
  "paramCount": 8,
  "keyDisplay": "C10",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=1.00, I_0=1.8]",
  "color": "#00c6fb",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.002,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 1.8,
    "mod_dI": 0.6,
    "mod_cross": 0.3,
    "mod_fb": 0.2,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.35,
    "env_dec": 2.5,
    "env_sus": 92,
    "env_rel": 4,
    "mod_env_dec": 1.8,
    "mod_env_atk": 0.003,
    "mod_env_sus": 37,
    "mod_env_rel": 2.16,
    "flt_cutoff": 9000,
    "flt_reso": 1.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.25,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.002,
    "I0": 1.8,
    "dI": 0.6,
    "atk": 0.35,
    "rel": 4,
    "customParam": 2.25,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.7,
        "env_dec": 4.5,
        "env_rel": 7.2,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.7200000000000001,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.7,
        "env_dec": 4.5,
        "env_rel": 7.2,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.7200000000000001,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 1.7999999999999998
      }
    }
  ]
},
  {
  "id": "synth_31",
  "name": "D1: YM2612 Streets of Rage Slap Bass",
  "category": "Bank D (10 Params · Chiptune Bass)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D1",
  "desc": "Chiptune Bass",
  "formulaSub": "Algorithmus 4 (Chiptune Bass)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=1.00, I_0=4.8]",
  "color": "#ffd200",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.8,
    "mod_dI": 2,
    "mod_cross": 0.6,
    "mod_fb": 0.7,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.25,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.002,
    "env_dec": 0.38,
    "env_sus": 45,
    "env_rel": 0.4,
    "mod_env_dec": 0.09,
    "mod_env_atk": 0.003,
    "mod_env_sus": 18,
    "mod_env_rel": 0.108,
    "flt_cutoff": 8500,
    "flt_reso": 2.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.3249999999999997,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 4.8,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.4,
    "customParam": 2.3249999999999997,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.4,
        "env_dec": 0.38
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.684,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.19,
        "mod_env_dec": 0.036,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.75,
        "shape_drive": 2.52,
        "flt_reso": 3.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.4,
        "env_dec": 0.38
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.684,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.19,
        "mod_env_dec": 0.036,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.75,
        "shape_drive": 2.52,
        "flt_reso": 3.75
      }
    }
  ]
},
  {
  "id": "synth_32",
  "name": "D2: YM2612 Green Hill Square Lead",
  "category": "Bank D (10 Params · Arcade Lead)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D2",
  "desc": "Arcade Lead",
  "formulaSub": "Algorithmus 4 (Arcade Lead)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=2.00, I_0=3.6]",
  "color": "#ffd200",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.5,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.005,
    "env_dec": 0.8,
    "env_sus": 80,
    "env_rel": 0.7,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.216,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 2.4,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.6,
    "dI": 1.4,
    "atk": 0.005,
    "rel": 0.7,
    "customParam": 2.4,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.2,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.4400000000000002,
        "env_rel": 1.26,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.072,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.2,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.4400000000000002,
        "env_rel": 1.26,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.072,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_33",
  "name": "D3: YM2612 Metallic Boss Hit",
  "category": "Bank D (10 Params · Metallics)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D3",
  "desc": "Metallics",
  "formulaSub": "Algorithmus 4 (Metallics)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=3.14, I_0=5.2]",
  "color": "#ffd200",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.14,
    "r3_ratio": 5.72,
    "r4_ratio": 8.1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.2,
    "mod_cross": 0.9,
    "mod_fb": 0.8,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.001,
    "env_dec": 0.6,
    "env_sus": 20,
    "env_rel": 1,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.144,
    "flt_cutoff": 12500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.475,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.14,
    "I0": 5.2,
    "dI": 2.2,
    "atk": 0.001,
    "rel": 1,
    "customParam": 2.475,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 1.5,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.08,
        "env_rel": 1.8,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 1.5,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.08,
        "env_rel": 1.8,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_34",
  "name": "D4: YM2612 MegaDrive Power Pad",
  "category": "Bank D (10 Params · Pads)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D4",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=1.00, I_0=2.6]",
  "color": "#ffd200",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.005,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.6,
    "mod_dI": 0.9,
    "mod_cross": 0.4,
    "mod_fb": 0.4,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.15,
    "env_dec": 1.8,
    "env_sus": 88,
    "env_rel": 2.2,
    "mod_env_dec": 1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 1.2,
    "flt_cutoff": 9500,
    "flt_reso": 1.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.55,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.005,
    "I0": 2.6,
    "dI": 0.9,
    "atk": 0.15,
    "rel": 2.2,
    "customParam": 2.55,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.15,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.35,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.3,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.4,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 2.07,
        "flt_reso": 2.4000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.15,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.35,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.3,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.4,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 2.07,
        "flt_reso": 2.4000000000000004
      }
    }
  ]
},
  {
  "id": "synth_35",
  "name": "D5: YM2612 Thunder Force Laser Lead",
  "category": "Bank D (10 Params · Arcade Lead)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D5",
  "desc": "Arcade Lead",
  "formulaSub": "Algorithmus 4 (Arcade Lead)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=1.00, I_0=4.2]",
  "color": "#ffd200",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 4,
    "r4_ratio": 2,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.8,
    "mod_cross": 0.7,
    "mod_fb": 0.65,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.003,
    "env_dec": 0.55,
    "env_sus": 70,
    "env_rel": 0.6,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.168,
    "flt_cutoff": 13000,
    "flt_reso": 2.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 2.625,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 4.2,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 0.6,
    "customParam": 2.625,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.3,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.9000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.3,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.9000000000000004
      }
    }
  ]
},
  {
  "id": "synth_36",
  "name": "D6: YM2612 Shinobi Bamboo Flute",
  "category": "Bank D (10 Params · World)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D6",
  "desc": "World",
  "formulaSub": "Algorithmus 7 (World)",
  "formulaLatex": "\\text{Algo } 7: [r_1=1.00, r_2=2.00, I_0=2.2]",
  "color": "#ffd200",
  "algo_type": 7,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.2,
    "mod_dI": 0.7,
    "mod_cross": 0.3,
    "mod_fb": 0.2,
    "algo_type": 7,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.08,
    "env_dec": 1,
    "env_sus": 82,
    "env_rel": 1.4,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 33,
    "mod_env_rel": 0.48,
    "flt_cutoff": 8000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.6999999999999997,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.2,
    "dI": 0.7,
    "atk": 0.08,
    "rel": 1.4,
    "customParam": 2.6999999999999997,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 1.8,
        "env_rel": 2.52,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 1.8,
        "env_rel": 2.52,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_37",
  "name": "D7: YM2612 FM Snare Drum Crack",
  "category": "Bank D (10 Params · Drums)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D7",
  "desc": "Drums",
  "formulaSub": "Algorithmus 5 (Drums)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.70, I_0=6.0]",
  "color": "#ffd200",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.7,
    "r3_ratio": 4.3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 6,
    "mod_dI": 2.5,
    "mod_cross": 1,
    "mod_fb": 0.9,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 0.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.7,
    "env_atk": 0.001,
    "env_dec": 0.18,
    "env_sus": 0,
    "env_rel": 0.25,
    "mod_env_dec": 0.05,
    "mod_env_atk": 0.003,
    "mod_env_sus": 0,
    "mod_env_rel": 0.06,
    "flt_cutoff": 10000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.775,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.7,
    "I0": 6,
    "dI": 2.5,
    "atk": 0.001,
    "rel": 0.25,
    "customParam": 2.775,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 1.7,
        "env_dec": 0.18
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 3.75,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.324,
        "env_rel": 0.45,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.09,
        "mod_env_dec": 0.020000000000000004,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.06,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 1.7,
        "env_dec": 0.18
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 3.75,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.324,
        "env_rel": 0.45,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.09,
        "mod_env_dec": 0.020000000000000004,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.06,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_38",
  "name": "D8: YM2612 FM Hi-Hat Shimmer",
  "category": "Bank D (10 Params · Drums)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D8",
  "desc": "Drums",
  "formulaSub": "Algorithmus 4 (Drums)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=5.40, I_0=5.5]",
  "color": "#ffd200",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 5.4,
    "r3_ratio": 9.8,
    "r4_ratio": 14.2,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.5,
    "mod_dI": 2,
    "mod_cross": 0.8,
    "mod_fb": 0.85,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.001,
    "env_dec": 0.08,
    "env_sus": 0,
    "env_rel": 0.12,
    "mod_env_dec": 0.03,
    "mod_env_atk": 0.003,
    "mod_env_sus": 0,
    "mod_env_rel": 0.036,
    "flt_cutoff": 15000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.85,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 5.4,
    "I0": 5.5,
    "dI": 2,
    "atk": 0.001,
    "rel": 0.12,
    "customParam": 2.85,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 1.4,
        "env_dec": 0.08
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.14400000000000002,
        "env_rel": 0.216,
        "flt_cutoff": 11250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.04,
        "mod_env_dec": 0.012,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.52,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 1.4,
        "env_dec": 0.08
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.14400000000000002,
        "env_rel": 0.216,
        "flt_cutoff": 11250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.04,
        "mod_env_dec": 0.012,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.52,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_39",
  "name": "D9: YM2612 Dark Cyberpunk Drone",
  "category": "Bank D (10 Params · Drones)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D9",
  "desc": "Drones",
  "formulaSub": "Algorithmus 6 (Drones)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=0.50, I_0=3.4]",
  "color": "#ffd200",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.4,
    "mod_dI": 1.2,
    "mod_cross": 0.6,
    "mod_fb": 0.75,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.45,
    "env_atk": 0.2,
    "env_dec": 2.5,
    "env_sus": 90,
    "env_rel": 3,
    "mod_env_dec": 1.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 1.7999999999999998,
    "flt_cutoff": 6500,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 2.925,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 3.4,
    "dI": 1.2,
    "atk": 0.2,
    "rel": 3,
    "customParam": 2.925,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.4,
        "shape_drive": 1.45,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.76,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.885
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.4,
        "env_dec": 4.5,
        "env_rel": 5.4,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.61,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.4,
        "shape_drive": 1.45,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.76,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.885
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.4,
        "env_dec": 4.5,
        "env_rel": 5.4,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.61,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_40",
  "name": "D10: YM2612 Arcade Coin & Powerup",
  "category": "Bank D (10 Params · Chiptune FX)",
  "bank": "D",
  "bankLevel": 4,
  "paramCount": 10,
  "keyDisplay": "D10",
  "desc": "Chiptune FX",
  "formulaSub": "Algorithmus 1 (Chiptune FX)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=3.0]",
  "color": "#ffd200",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 8,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3,
    "mod_dI": 1,
    "mod_cross": 0.2,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.001,
    "env_dec": 0.25,
    "env_sus": 5,
    "env_rel": 0.4,
    "mod_env_dec": 0.06,
    "mod_env_atk": 0.003,
    "mod_env_sus": 2,
    "mod_env_rel": 0.072,
    "flt_cutoff": 14000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3,
    "dI": 1,
    "atk": 0.001,
    "rel": 0.4,
    "customParam": 3,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3,
        "shape_drive": 1,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.199999999999999,
        "mod_dI": 1.5,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.024,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3,
        "shape_drive": 1,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.199999999999999,
        "mod_dI": 1.5,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.024,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_41",
  "name": "E1: Kyoto Koto Seidenharfe",
  "category": "Bank E (12 Params · Saiten)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E1",
  "desc": "Saiten",
  "formulaSub": "Algorithmus 7 (Saiten)",
  "formulaLatex": "\\text{Algo } 7: [r_1=1.00, r_2=2.00, I_0=3.4]",
  "color": "#ffa502",
  "algo_type": 7,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 5,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.4,
    "mod_dI": 1.2,
    "mod_cross": 0.4,
    "mod_fb": 0.2,
    "algo_type": 7,
    "mod_skew": 0,
    "shape_fold": 0.05,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.003,
    "env_dec": 1.2,
    "env_sus": 25,
    "env_rel": 1.8,
    "mod_env_dec": 0.16,
    "mod_env_atk": 0.003,
    "mod_env_sus": 10,
    "mod_env_rel": 0.192,
    "flt_cutoff": 11000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.0749999999999997,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.4,
    "dI": 1.2,
    "atk": 0.003,
    "rel": 1.8,
    "customParam": 3.0749999999999997,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.4,
        "shape_drive": 1.1,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.76,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.064,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.4,
        "shape_drive": 1.1,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.76,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.064,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_42",
  "name": "E2: Varanasi Sitar Sympathie",
  "category": "Bank E (12 Params · Saiten)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E2",
  "desc": "Saiten",
  "formulaSub": "Algorithmus 7 (Saiten)",
  "formulaLatex": "\\text{Algo } 7: [r_1=1.00, r_2=3.00, I_0=4.2]",
  "color": "#ffa502",
  "algo_type": 7,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 7,
    "r4_ratio": 1.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.6,
    "mod_cross": 0.6,
    "mod_fb": 0.35,
    "algo_type": 7,
    "mod_skew": 0,
    "shape_fold": 0.15,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.004,
    "env_dec": 1.5,
    "env_sus": 35,
    "env_rel": 2.2,
    "mod_env_dec": 0.22,
    "mod_env_atk": 0.003,
    "mod_env_sus": 14,
    "mod_env_rel": 0.264,
    "flt_cutoff": 12500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.15,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 4.2,
    "dI": 1.6,
    "atk": 0.004,
    "rel": 2.2,
    "customParam": 3.15,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.2,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 2.7,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.08800000000000001,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.16,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.2,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 2.7,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.08800000000000001,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.16,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_43",
  "name": "E3: Harfe Konzert-Resonanz",
  "category": "Bank E (12 Params · Saiten)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E3",
  "desc": "Saiten",
  "formulaSub": "Algorithmus 1 (Saiten)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=2.8]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 0.9,
    "mod_cross": 0.2,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.002,
    "env_dec": 2,
    "env_sus": 30,
    "env_rel": 3,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 12,
    "mod_env_rel": 0.24,
    "flt_cutoff": 12000,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.225,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.8,
    "dI": 0.9,
    "atk": 0.002,
    "rel": 3,
    "customParam": 3.225,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.35,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_44",
  "name": "E4: Shakuhachi Bambusatem",
  "category": "Bank E (12 Params · Flöten)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E4",
  "desc": "Flöten",
  "formulaSub": "Algorithmus 2 (Flöten)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=2.00, I_0=2.2]",
  "color": "#ffa502",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.2,
    "mod_dI": 0.8,
    "mod_cross": 0.3,
    "mod_fb": 0.25,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.12,
    "env_dec": 1.2,
    "env_sus": 85,
    "env_rel": 1.6,
    "mod_env_dec": 0.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.6,
    "flt_cutoff": 8500,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.3,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.2,
    "dI": 0.8,
    "atk": 0.12,
    "rel": 1.6,
    "customParam": 3.3,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.24,
        "env_dec": 2.16,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.2,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.24,
        "env_dec": 2.16,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.2,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_45",
  "name": "E5: Kalimba Daumenklavier",
  "category": "Bank E (12 Params · Mallets)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E5",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 1 (Mallets)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=5.40, I_0=3.8]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 5.4,
    "r3_ratio": 11,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.4,
    "mod_cross": 0.3,
    "mod_fb": 0.15,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.002,
    "env_dec": 0.9,
    "env_sus": 15,
    "env_rel": 1.5,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 6,
    "mod_env_rel": 0.144,
    "flt_cutoff": 13000,
    "flt_reso": 1.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.375,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 5.4,
    "I0": 3.8,
    "dI": 1.4,
    "atk": 0.002,
    "rel": 1.5,
    "customParam": 3.375,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.05,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.62,
        "env_rel": 2.7,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.048,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.7
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.05,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.62,
        "env_rel": 2.7,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.048,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.7
      }
    }
  ]
},
  {
  "id": "synth_46",
  "name": "E6: Duduk Armenische Melancholie",
  "category": "Bank E (12 Params · Holzbläser)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E6",
  "desc": "Holzbläser",
  "formulaSub": "Algorithmus 2 (Holzbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=2.5]",
  "color": "#ffa502",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.5,
    "mod_dI": 0.9,
    "mod_cross": 0.35,
    "mod_fb": 0.3,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.05,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.09,
    "env_dec": 1.6,
    "env_sus": 88,
    "env_rel": 2,
    "mod_env_dec": 0.6,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 0.72,
    "flt_cutoff": 7000,
    "flt_reso": 2.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.4499999999999997,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 2.5,
    "dI": 0.9,
    "atk": 0.09,
    "rel": 2,
    "customParam": 3.4499999999999997,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.5,
        "shape_drive": 1.1,
        "env_dec": 1.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.5,
        "mod_dI": 1.35,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.18,
        "env_dec": 2.8800000000000003,
        "env_rel": 3.6,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.8,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.9000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.5,
        "shape_drive": 1.1,
        "env_dec": 1.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.5,
        "mod_dI": 1.35,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.18,
        "env_dec": 2.8800000000000003,
        "env_rel": 3.6,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.8,
        "mod_env_dec": 0.24,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.9000000000000004
      }
    }
  ]
},
  {
  "id": "synth_47",
  "name": "E7: Gamelan Metall-Saron",
  "category": "Bank E (12 Params · Glocken)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E7",
  "desc": "Glocken",
  "formulaSub": "Algorithmus 1 (Glocken)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.76, I_0=4.8]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.76,
    "r3_ratio": 5.52,
    "r4_ratio": 1.38,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.8,
    "mod_dI": 1.8,
    "mod_cross": 0.5,
    "mod_fb": 0.2,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.002,
    "env_dec": 2.2,
    "env_sus": 20,
    "env_rel": 3.5,
    "mod_env_dec": 0.25,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.3,
    "flt_cutoff": 13500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.525,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.76,
    "I0": 4.8,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 3.5,
    "customParam": 3.525,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.15,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 2.7,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.9600000000000004,
        "env_rel": 6.3,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.1,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.15,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 2.7,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.9600000000000004,
        "env_rel": 6.3,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.1,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_48",
  "name": "E8: Cello Warmes Legato",
  "category": "Bank E (12 Params · Streicher)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E8",
  "desc": "Streicher",
  "formulaSub": "Algorithmus 7 (Streicher)",
  "formulaLatex": "\\text{Algo } 7: [r_1=1.00, r_2=1.00, I_0=2.6]",
  "color": "#ffa502",
  "algo_type": 7,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.002,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.6,
    "mod_dI": 0.9,
    "mod_cross": 0.3,
    "mod_fb": 0.4,
    "algo_type": 7,
    "mod_skew": 0,
    "shape_fold": 0.05,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.15,
    "env_dec": 2,
    "env_sus": 90,
    "env_rel": 2.5,
    "mod_env_dec": 1.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 1.44,
    "flt_cutoff": 7500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.5999999999999996,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.002,
    "I0": 2.6,
    "dI": 0.9,
    "atk": 0.15,
    "rel": 2.5,
    "customParam": 3.5999999999999996,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.15,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.35,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.3,
        "env_dec": 3.6,
        "env_rel": 4.5,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.48,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.6,
        "shape_drive": 1.15,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.6399999999999997,
        "mod_dI": 1.35,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.3,
        "env_dec": 3.6,
        "env_rel": 4.5,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.48,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_49",
  "name": "E9: Panflöte Inka Atem",
  "category": "Bank E (12 Params · Flöten)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E9",
  "desc": "Flöten",
  "formulaSub": "Algorithmus 1 (Flöten)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=1.8]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 1.8,
    "mod_dI": 0.6,
    "mod_cross": 0.15,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1,
    "env_atk": 0.05,
    "env_dec": 0.8,
    "env_sus": 80,
    "env_rel": 1.2,
    "mod_env_dec": 0.35,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.42,
    "flt_cutoff": 9000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.675,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 1.8,
    "dI": 0.6,
    "atk": 0.05,
    "rel": 1.2,
    "customParam": 3.675,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.3
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_50",
  "name": "E10: Hang Drum Handpan Klang",
  "category": "Bank E (12 Params · Mallets)",
  "bank": "E",
  "bankLevel": 5,
  "paramCount": 12,
  "keyDisplay": "E10",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 5 (Mallets)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.00, I_0=3.6]",
  "color": "#ffa502",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.2,
    "mod_cross": 0.4,
    "mod_fb": 0.1,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 0.15,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.003,
    "env_dec": 1.4,
    "env_sus": 25,
    "env_rel": 2.4,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 10,
    "mod_env_rel": 0.24,
    "flt_cutoff": 10500,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.75,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.6,
    "dI": 1.2,
    "atk": 0.003,
    "rel": 2.4,
    "customParam": 3.75,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.1,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 2.52,
        "env_rel": 4.32,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.1,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 2.52,
        "env_rel": 4.32,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_51",
  "name": "F1: Sakralorgel Tutti 16' Plenum",
  "category": "Bank F (14 Params · Orgeln)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F1",
  "desc": "Orgeln",
  "formulaSub": "Algorithmus 3 (Orgeln)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=2.00, I_0=2.4]",
  "color": "#8fd3f4",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.4,
    "mod_dI": 0.8,
    "mod_cross": 0.3,
    "mod_fb": 0.3,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.05,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.04,
    "env_dec": 2.5,
    "env_sus": 95,
    "env_rel": 3,
    "mod_env_dec": 1.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 1.7999999999999998,
    "flt_cutoff": 14000,
    "flt_reso": 1.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.8249999999999997,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.4,
    "dI": 0.8,
    "atk": 0.04,
    "rel": 3,
    "customParam": 3.8249999999999997,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.2,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 4.5,
        "env_rel": 5.4,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 2.16,
        "flt_reso": 1.7999999999999998
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.2,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 4.5,
        "env_rel": 5.4,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 2.16,
        "flt_reso": 1.7999999999999998
      }
    }
  ]
},
  {
  "id": "synth_52",
  "name": "F2: Hammond B3 Drawbar Soul",
  "category": "Bank F (14 Params · Orgeln)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F2",
  "desc": "Orgeln",
  "formulaSub": "Algorithmus 3 (Orgeln)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=3.00, I_0=2.8]",
  "color": "#8fd3f4",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 2,
    "r4_ratio": 4,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 1,
    "mod_cross": 0.4,
    "mod_fb": 0.45,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.25,
    "env_atk": 0.008,
    "env_dec": 1.8,
    "env_sus": 90,
    "env_rel": 1.5,
    "mod_env_dec": 0.8,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 0.96,
    "flt_cutoff": 12000,
    "flt_reso": 1.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.9,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 2.8,
    "dI": 1,
    "atk": 0.008,
    "rel": 1.5,
    "customParam": 3.9,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.25,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.625
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.016,
        "env_dec": 3.24,
        "env_rel": 2.7,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.32000000000000006,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.25,
        "flt_reso": 2.4000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.25,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.625
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.016,
        "env_dec": 3.24,
        "env_rel": 2.7,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.32000000000000006,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.25,
        "flt_reso": 2.4000000000000004
      }
    }
  ]
},
  {
  "id": "synth_53",
  "name": "F3: Cathedral Shimmer Choir",
  "category": "Bank F (14 Params · Chor)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F3",
  "desc": "Chor",
  "formulaSub": "Algorithmus 3 (Chor)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=1.00, I_0=2.0]",
  "color": "#8fd3f4",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.004,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2,
    "mod_dI": 0.7,
    "mod_cross": 0.35,
    "mod_fb": 0.2,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.4,
    "env_dec": 3.5,
    "env_sus": 95,
    "env_rel": 5,
    "mod_env_dec": 2.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 2.64,
    "flt_cutoff": 9500,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 3.9749999999999996,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.004,
    "I0": 2,
    "dI": 0.7,
    "atk": 0.4,
    "rel": 5,
    "customParam": 3.9749999999999996,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1.05,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 0.8800000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2,
        "shape_drive": 1.05,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.8,
        "mod_dI": 1.0499999999999998,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 0.8800000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_54",
  "name": "F4: Interstellar Brass Pad",
  "category": "Bank F (14 Params · Cinematic)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F4",
  "desc": "Cinematic",
  "formulaSub": "Algorithmus 2 (Cinematic)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=3.5]",
  "color": "#8fd3f4",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.002,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.5,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.25,
    "env_dec": 2.8,
    "env_sus": 88,
    "env_rel": 3.5,
    "mod_env_dec": 1.8,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 2.16,
    "flt_cutoff": 9000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.05,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.002,
    "I0": 3.5,
    "dI": 1.4,
    "atk": 0.25,
    "rel": 3.5,
    "customParam": 4.05,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.2,
        "env_dec": 2.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 5.04,
        "env_rel": 6.3,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.4,
        "mod_env_dec": 0.7200000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.2,
        "env_dec": 2.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 5.04,
        "env_rel": 6.3,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.4,
        "mod_env_dec": 0.7200000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_55",
  "name": "F5: Tiefsee Abyssal Drone",
  "category": "Bank F (14 Params · Drones)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F5",
  "desc": "Drones",
  "formulaSub": "Algorithmus 8 (Drones)",
  "formulaLatex": "\\text{Algo } 8: [r_1=0.50, r_2=0.50, I_0=3.2]",
  "color": "#8fd3f4",
  "algo_type": 8,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.501,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1.2,
    "mod_cross": 0.6,
    "mod_fb": 0.6,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.25,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.35,
    "env_atk": 0.6,
    "env_dec": 4,
    "env_sus": 96,
    "env_rel": 6,
    "mod_env_dec": 3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3.5999999999999996,
    "flt_cutoff": 4500,
    "flt_reso": 2.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.125,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.501,
    "I0": 3.2,
    "dI": 1.2,
    "atk": 0.6,
    "rel": 6,
    "customParam": 4.125,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.35,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.7550000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 3375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.2000000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.75,
        "shape_drive": 2.43,
        "flt_reso": 3.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.35,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.7550000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 3375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.2000000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.75,
        "shape_drive": 2.43,
        "flt_reso": 3.75
      }
    }
  ]
},
  {
  "id": "synth_56",
  "name": "F6: Solar Flare Resonanz-Fläche",
  "category": "Bank F (14 Params · Pads)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F6",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=2.00, I_0=2.8]",
  "color": "#8fd3f4",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 1,
    "mod_cross": 0.4,
    "mod_fb": 0.35,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.15,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.15,
    "env_atk": 0.3,
    "env_dec": 3,
    "env_sus": 90,
    "env_rel": 4.5,
    "mod_env_dec": 2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 2.4,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.2,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 2.8,
    "dI": 1,
    "atk": 0.3,
    "rel": 4.5,
    "customParam": 4.2,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.15,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.6,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.15,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.4949999999999999
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.6,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.65,
        "shape_drive": 2.07,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_57",
  "name": "F7: Gothic Requiem Glocke",
  "category": "Bank F (14 Params · Glocken)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F7",
  "desc": "Glocken",
  "formulaSub": "Algorithmus 1 (Glocken)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.41, I_0=5.0]",
  "color": "#8fd3f4",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5,
    "mod_dI": 2,
    "mod_cross": 0.7,
    "mod_fb": 0.1,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.05,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.002,
    "env_dec": 4,
    "env_sus": 15,
    "env_rel": 6,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 6,
    "mod_env_rel": 0.48,
    "flt_cutoff": 12500,
    "flt_reso": 1.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.2749999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 5,
    "dI": 2,
    "atk": 0.002,
    "rel": 6,
    "customParam": 4.2749999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 1.1,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.7
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 1.1,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.55,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.7
      }
    }
  ]
},
  {
  "id": "synth_58",
  "name": "F8: Majestätischer Horn-Cluster",
  "category": "Bank F (14 Params · Blechbläser)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F8",
  "desc": "Blechbläser",
  "formulaSub": "Algorithmus 2 (Blechbläser)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=3.8]",
  "color": "#8fd3f4",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 1.5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 0.5,
    "mod_fb": 0.5,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.1,
    "env_dec": 1.8,
    "env_sus": 85,
    "env_rel": 2.2,
    "mod_env_dec": 1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 1.2,
    "flt_cutoff": 10000,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 4.35,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.1,
    "rel": 2.2,
    "customParam": 4.35,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.2,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.4,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.2,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.24,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.4,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_59",
  "name": "F9: Aurora Borealis Shimmer Pad",
  "category": "Bank F (14 Params · Pads)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F9",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=2.00, I_0=2.2]",
  "color": "#8fd3f4",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.001,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.2,
    "mod_dI": 0.8,
    "mod_cross": 0.3,
    "mod_fb": 0.25,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.05,
    "env_atk": 0.5,
    "env_dec": 3.2,
    "env_sus": 94,
    "env_rel": 5.5,
    "mod_env_dec": 2.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3,
    "flt_cutoff": 11500,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.425,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.001,
    "I0": 2.2,
    "dI": 0.8,
    "atk": 0.5,
    "rel": 5.5,
    "customParam": 4.425,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 3.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 5.760000000000001,
        "env_rel": 9.9,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.6,
        "mod_env_dec": 1,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.05,
        "env_dec": 3.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.2000000000000002,
        "shape_drive": 1.3650000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 5.760000000000001,
        "env_rel": 9.9,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.6,
        "mod_env_dec": 1,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.8900000000000001,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_60",
  "name": "F10: Sub-Terra Erdbeben Drone",
  "category": "Bank F (14 Params · Drones)",
  "bank": "F",
  "bankLevel": 6,
  "paramCount": 14,
  "keyDisplay": "F10",
  "desc": "Drones",
  "formulaSub": "Algorithmus 8 (Drones)",
  "formulaLatex": "\\text{Algo } 8: [r_1=0.50, r_2=0.25, I_0=4.0]",
  "color": "#8fd3f4",
  "algo_type": 8,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.25,
    "r3_ratio": 0.75,
    "r4_ratio": 0.125,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.6,
    "mod_cross": 0.8,
    "mod_fb": 0.7,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.35,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.8,
    "env_dec": 5,
    "env_sus": 98,
    "env_rel": 8,
    "mod_env_dec": 4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 39,
    "mod_env_rel": 4.8,
    "flt_cutoff": 3500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.5,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.25,
    "I0": 4,
    "dI": 1.6,
    "atk": 0.8,
    "rel": 8,
    "customParam": 4.5,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.5,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 2625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.6,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.85,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.5,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 2625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.6,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.85,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_61",
  "name": "G1: Buchla 259 Dual Wavefold Pluck",
  "category": "Bank G (16 Params · Westcoast)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G1",
  "desc": "Westcoast",
  "formulaSub": "Algorithmus 5 (Westcoast)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.00, I_0=3.8]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.6,
    "mod_cross": 0.6,
    "mod_fb": 0.5,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.002,
    "env_dec": 0.45,
    "env_sus": 20,
    "env_rel": 0.8,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.144,
    "flt_cutoff": 13000,
    "flt_reso": 2.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.575,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.8,
    "dI": 1.6,
    "atk": 0.002,
    "rel": 0.8,
    "customParam": 4.575,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 2.2,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.3,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 3.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 2.2,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.3,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 3.75
      }
    }
  ]
},
  {
  "id": "synth_62",
  "name": "G2: Buchla Bongo & Conga Hit",
  "category": "Bank G (16 Params · Perkussion)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G2",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 5 (Perkussion)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.50, I_0=4.5]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 2.7,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 1.8,
    "mod_cross": 0.7,
    "mod_fb": 0.6,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 4.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.4,
    "env_atk": 0.001,
    "env_dec": 0.28,
    "env_sus": 5,
    "env_rel": 0.5,
    "mod_env_dec": 0.08,
    "mod_env_atk": 0.003,
    "mod_env_sus": 2,
    "mod_env_rel": 0.096,
    "flt_cutoff": 11500,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.6499999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 4.5,
    "dI": 1.8,
    "atk": 0.001,
    "rel": 0.5,
    "customParam": 4.6499999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2.4,
        "env_dec": 0.28
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5040000000000001,
        "env_rel": 0.9,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.14,
        "mod_env_dec": 0.032,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.7,
        "shape_drive": 4.32,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2.4,
        "env_dec": 0.28
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5040000000000001,
        "env_rel": 0.9,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.14,
        "mod_env_dec": 0.032,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.7,
        "shape_drive": 4.32,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_63",
  "name": "G3: Buchla Krell Random Pluck",
  "category": "Bank G (16 Params · Westcoast)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G3",
  "desc": "Westcoast",
  "formulaSub": "Algorithmus 5 (Westcoast)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.38, I_0=4.0]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.38,
    "r3_ratio": 4.76,
    "r4_ratio": 1.19,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.5,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2,
    "env_atk": 0.004,
    "env_dec": 0.6,
    "env_sus": 25,
    "env_rel": 1.2,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 10,
    "mod_env_rel": 0.18,
    "flt_cutoff": 12000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.725,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.38,
    "I0": 4,
    "dI": 1.5,
    "atk": 0.004,
    "rel": 1.2,
    "customParam": 4.725,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.25,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.08,
        "env_rel": 2.16,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.06,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.7,
        "shape_drive": 3.6,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.25,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.08,
        "env_rel": 2.16,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.06,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.7,
        "shape_drive": 3.6,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_64",
  "name": "G4: Buchla Metall-Marimbula",
  "category": "Bank G (16 Params · Mallets)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G4",
  "desc": "Mallets",
  "formulaSub": "Algorithmus 5 (Mallets)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=3.85, I_0=4.2]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.85,
    "r3_ratio": 7.7,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.6,
    "mod_cross": 0.6,
    "mod_fb": 0.3,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.1,
    "env_atk": 0.002,
    "env_dec": 0.75,
    "env_sus": 15,
    "env_rel": 1.4,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 6,
    "mod_env_rel": 0.168,
    "flt_cutoff": 13500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.8,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.85,
    "I0": 4.2,
    "dI": 1.6,
    "atk": 0.002,
    "rel": 1.4,
    "customParam": 4.8,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 2.1,
        "env_dec": 0.75
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 2.7300000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.35,
        "env_rel": 2.52,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.375,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6,
        "shape_drive": 3.7800000000000002,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 2.1,
        "env_dec": 0.75
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 2.7300000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.35,
        "env_rel": 2.52,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.375,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 5
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6,
        "shape_drive": 3.7800000000000002,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_65",
  "name": "G5: Buchla Asymmetrischer Diode Bass",
  "category": "Bank G (16 Params · Bässe)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G5",
  "desc": "Bässe",
  "formulaSub": "Algorithmus 5 (Bässe)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=0.50, I_0=4.6]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 2,
    "mod_cross": 0.8,
    "mod_fb": 0.75,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 4.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.5,
    "env_atk": 0.003,
    "env_dec": 0.4,
    "env_sus": 45,
    "env_rel": 0.6,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 18,
    "mod_env_rel": 0.12,
    "flt_cutoff": 7500,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.875,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 4.6,
    "dI": 2,
    "atk": 0.003,
    "rel": 0.6,
    "customParam": 4.875,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.5,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.25
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 7,
        "shape_drive": 4.5,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.5,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.25
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 7,
        "shape_drive": 4.5,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_66",
  "name": "G6: Buchla Spectral Timber Morph",
  "category": "Bank G (16 Params · Westcoast)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G6",
  "desc": "Westcoast",
  "formulaSub": "Algorithmus 5 (Westcoast)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.00, I_0=3.5]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.5,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.45,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.9,
    "env_atk": 0.08,
    "env_dec": 1.4,
    "env_sus": 75,
    "env_rel": 2,
    "mod_env_dec": 0.6,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.72,
    "flt_cutoff": 10500,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 4.95,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.5,
    "dI": 1.4,
    "atk": 0.08,
    "rel": 2,
    "customParam": 4.95,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.9,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.52,
        "env_rel": 3.6,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.24,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.5,
        "shape_drive": 3.42,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.9,
        "env_dec": 1.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.16,
        "env_dec": 2.52,
        "env_rel": 3.6,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7,
        "mod_env_dec": 0.24,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.5,
        "shape_drive": 3.42,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_67",
  "name": "G7: Buchla Woodblock Transient",
  "category": "Bank G (16 Params · Perkussion)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G7",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 5 (Perkussion)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.80, I_0=5.2]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.8,
    "r3_ratio": 5.6,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.2,
    "mod_cross": 0.9,
    "mod_fb": 0.8,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.8,
    "env_atk": 0.001,
    "env_dec": 0.15,
    "env_sus": 0,
    "env_rel": 0.3,
    "mod_env_dec": 0.04,
    "mod_env_atk": 0.003,
    "mod_env_sus": 0,
    "mod_env_rel": 0.048,
    "flt_cutoff": 12500,
    "flt_reso": 3.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.0249999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.8,
    "I0": 5.2,
    "dI": 2.2,
    "atk": 0.001,
    "rel": 0.3,
    "customParam": 5.0249999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.8,
        "env_dec": 0.15
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.27,
        "env_rel": 0.54,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.075,
        "mod_env_dec": 0.016,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 7.5,
        "shape_drive": 5.04,
        "flt_reso": 5.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.8,
        "env_dec": 0.15
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.27,
        "env_rel": 0.54,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.075,
        "mod_env_dec": 0.016,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 7.5,
        "shape_drive": 5.04,
        "flt_reso": 5.25
      }
    }
  ]
},
  {
  "id": "synth_68",
  "name": "G8: Buchla Klangfarben Generator",
  "category": "Bank G (16 Params · Westcoast)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G8",
  "desc": "Westcoast",
  "formulaSub": "Algorithmus 5 (Westcoast)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.62, I_0=3.6]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 2.618,
    "r4_ratio": 0.618,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 2.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.05,
    "env_dec": 1.2,
    "env_sus": 70,
    "env_rel": 1.8,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.48,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.1,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.618,
    "I0": 3.6,
    "dI": 1.4,
    "atk": 0.05,
    "rel": 1.8,
    "customParam": 5.1,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.8,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.3,
        "shape_drive": 3.24,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.8,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.3,
        "shape_drive": 3.24,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_69",
  "name": "G9: Buchla Sub-Harmonic Fold Lead",
  "category": "Bank G (16 Params · Leads)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G9",
  "desc": "Leads",
  "formulaSub": "Algorithmus 5 (Leads)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=1.00, I_0=4.0]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.7,
    "mod_cross": 0.6,
    "mod_fb": 0.55,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.01,
    "env_dec": 0.7,
    "env_sus": 78,
    "env_rel": 1,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 31,
    "mod_env_rel": 0.24,
    "flt_cutoff": 13000,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 5.175,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 4,
    "dI": 1.7,
    "atk": 0.01,
    "rel": 1,
    "customParam": 5.175,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2.2,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 1.26,
        "env_rel": 1.8,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.1,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2.2,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 1.26,
        "env_rel": 1.8,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.1,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_70",
  "name": "G10: Buchla Organisches Tropfen-Pluck",
  "category": "Bank G (16 Params · Perkussion)",
  "bank": "G",
  "bankLevel": 7,
  "paramCount": 16,
  "keyDisplay": "G10",
  "desc": "Perkussion",
  "formulaSub": "Algorithmus 5 (Perkussion)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=3.14, I_0=3.5]",
  "color": "#2ed573",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.14,
    "r3_ratio": 6.28,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.5,
    "mod_dI": 1.3,
    "mod_cross": 0.4,
    "mod_fb": 0.2,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 2.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.7,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 10,
    "env_rel": 0.6,
    "mod_env_dec": 0.09,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.108,
    "flt_cutoff": 12000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.25,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.14,
    "I0": 3.5,
    "dI": 1.3,
    "atk": 0.002,
    "rel": 0.6,
    "customParam": 5.25,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.7,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 1.9500000000000002,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 1.08,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.036,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 3.06,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.7,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 1.9500000000000002,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 1.08,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.036,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 3.06,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_71",
  "name": "H1: TB-303 Acid Resonanz Bass",
  "category": "Bank H (18 Params · Acid)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H1",
  "desc": "Acid",
  "formulaSub": "Algorithmus 6 (Acid)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.00, I_0=4.5]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 2.2,
    "mod_cross": 0.8,
    "mod_fb": 1.2,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2,
    "env_atk": 0.002,
    "env_dec": 0.32,
    "env_sus": 40,
    "env_rel": 0.45,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 16,
    "mod_env_rel": 0.12,
    "flt_cutoff": 4500,
    "flt_reso": 4.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.325,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 4.5,
    "dI": 2.2,
    "atk": 0.002,
    "rel": 0.45,
    "customParam": 5.325,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2,
        "env_dec": 0.32
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.5760000000000001,
        "env_rel": 0.81,
        "flt_cutoff": 3375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.16,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.6,
        "flt_reso": 6.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2,
        "env_dec": 0.32
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.5760000000000001,
        "env_rel": 0.81,
        "flt_cutoff": 3375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.16,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.6,
        "flt_reso": 6.75
      }
    }
  ]
},
  {
  "id": "synth_72",
  "name": "H2: Modular Ring-Modulation Lead",
  "category": "Bank H (18 Params · Sync Lead)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H2",
  "desc": "Sync Lead",
  "formulaSub": "Algorithmus 6 (Sync Lead)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.50, I_0=4.8]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 3.5,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.8,
    "mod_dI": 2,
    "mod_cross": 1,
    "mod_fb": 0.9,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 0.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.004,
    "env_dec": 0.6,
    "env_sus": 75,
    "env_rel": 0.8,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.216,
    "flt_cutoff": 11000,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 5.3999999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 4.8,
    "dI": 2,
    "atk": 0.004,
    "rel": 0.8,
    "customParam": 5.3999999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.8,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.072,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.24,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.8,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.072,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.24,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_73",
  "name": "H3: Sync Screamer Hardcore Lead",
  "category": "Bank H (18 Params · Sync Lead)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H3",
  "desc": "Sync Lead",
  "formulaSub": "Algorithmus 6 (Sync Lead)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=2.40, I_0=5.5]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.4,
    "r3_ratio": 4.8,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.5,
    "mod_dI": 2.5,
    "mod_cross": 1.2,
    "mod_fb": 1.5,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.4,
    "env_atk": 0.003,
    "env_dec": 0.7,
    "env_sus": 82,
    "env_rel": 0.9,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 33,
    "mod_env_rel": 0.24,
    "flt_cutoff": 13500,
    "flt_reso": 3.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 5.475,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.4,
    "I0": 5.5,
    "dI": 2.5,
    "atk": 0.003,
    "rel": 0.9,
    "customParam": 5.475,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 2.4,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3.75,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 1.62,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 4.32,
        "flt_reso": 5.699999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 2.4,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3.75,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 1.62,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 4.32,
        "flt_reso": 5.699999999999999
      }
    }
  ]
},
  {
  "id": "synth_74",
  "name": "H4: Acid Square Overdrive Bass",
  "category": "Bank H (18 Params · Acid)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H4",
  "desc": "Acid",
  "formulaSub": "Algorithmus 6 (Acid)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=0.50, I_0=5.0]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5,
    "mod_dI": 2.4,
    "mod_cross": 0.9,
    "mod_fb": 1.4,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.6,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 50,
    "env_rel": 0.5,
    "mod_env_dec": 0.11,
    "mod_env_atk": 0.003,
    "mod_env_sus": 20,
    "mod_env_rel": 0.132,
    "flt_cutoff": 5500,
    "flt_reso": 4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.55,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 5,
    "dI": 2.4,
    "atk": 0.002,
    "rel": 0.5,
    "customParam": 5.55,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.6,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 4.680000000000001,
        "flt_reso": 6
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.6,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 4.680000000000001,
        "flt_reso": 6
      }
    }
  ]
},
  {
  "id": "synth_75",
  "name": "H5: Cross-Feedback Noisemaker",
  "category": "Bank H (18 Params · Modular FX)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H5",
  "desc": "Modular FX",
  "formulaSub": "Algorithmus 6 (Modular FX)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.41, I_0=6.0]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.707,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 6,
    "mod_dI": 3,
    "mod_cross": 1.5,
    "mod_fb": 2,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3,
    "env_atk": 0.005,
    "env_dec": 1,
    "env_sus": 85,
    "env_rel": 1.4,
    "mod_env_dec": 0.3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.36,
    "flt_cutoff": 12000,
    "flt_reso": 3.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.625,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 6,
    "dI": 3,
    "atk": 0.005,
    "rel": 1.4,
    "customParam": 5.625,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.5,
        "shape_drive": 3.9000000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.8,
        "env_rel": 2.52,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.12,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.4,
        "flt_reso": 5.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.5,
        "shape_drive": 3.9000000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.8,
        "env_rel": 2.52,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.12,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.4,
        "flt_reso": 5.25
      }
    }
  ]
},
  {
  "id": "synth_76",
  "name": "H6: Aggressive S&H Filter FM",
  "category": "Bank H (18 Params · Acid)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H6",
  "desc": "Acid",
  "formulaSub": "Algorithmus 6 (Acid)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=3.00, I_0=4.2]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.8,
    "mod_cross": 0.8,
    "mod_fb": 1,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.9,
    "env_atk": 0.003,
    "env_dec": 0.5,
    "env_sus": 65,
    "env_rel": 0.7,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 26,
    "mod_env_rel": 0.18,
    "flt_cutoff": 9500,
    "flt_reso": 3.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.7,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 4.2,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 0.7,
    "customParam": 5.7,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.9,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.06,
        "env_sus": 20
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.42,
        "flt_reso": 5.4
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.9,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.06,
        "env_sus": 20
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.42,
        "flt_reso": 5.4
      }
    }
  ]
},
  {
  "id": "synth_77",
  "name": "H7: Modular Drone Selbstoszillation",
  "category": "Bank H (18 Params · Drones)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H7",
  "desc": "Drones",
  "formulaSub": "Algorithmus 6 (Drones)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=0.50, I_0=3.8]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 0.7,
    "mod_fb": 1.8,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.4,
    "env_dec": 3,
    "env_sus": 94,
    "env_rel": 4,
    "mod_env_dec": 2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 2.4,
    "flt_cutoff": 7000,
    "flt_reso": 4.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.7749999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.4,
    "rel": 4,
    "customParam": 5.7749999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 2.2,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 5.4,
        "env_rel": 7.2,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.9,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 6.300000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 2.2,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 5.4,
        "env_rel": 7.2,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.9,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 6.300000000000001
      }
    }
  ]
},
  {
  "id": "synth_78",
  "name": "H8: Industrial Sync Bassline",
  "category": "Bank H (18 Params · Industrial)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H8",
  "desc": "Industrial",
  "formulaSub": "Algorithmus 6 (Industrial)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.00, I_0=5.2]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.2,
    "mod_cross": 1.1,
    "mod_fb": 1.6,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.8,
    "env_atk": 0.002,
    "env_dec": 0.4,
    "env_sus": 48,
    "env_rel": 0.55,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 19,
    "mod_env_rel": 0.144,
    "flt_cutoff": 8000,
    "flt_reso": 3.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.85,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 5.2,
    "dI": 2.2,
    "atk": 0.002,
    "rel": 0.55,
    "customParam": 5.85,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.8,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.7200000000000001,
        "env_rel": 0.9900000000000001,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.048,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.5,
        "shape_drive": 5.04,
        "flt_reso": 5.699999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.8,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.7200000000000001,
        "env_rel": 0.9900000000000001,
        "flt_cutoff": 6000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.048,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.5,
        "shape_drive": 5.04,
        "flt_reso": 5.699999999999999
      }
    }
  ]
},
  {
  "id": "synth_79",
  "name": "H9: Distorted Modular Chord Stab",
  "category": "Bank H (18 Params · Stabs)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H9",
  "desc": "Stabs",
  "formulaSub": "Algorithmus 6 (Stabs)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.50, I_0=4.0]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.5,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.7,
    "mod_cross": 0.7,
    "mod_fb": 1.1,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.1,
    "env_atk": 0.002,
    "env_dec": 0.45,
    "env_sus": 30,
    "env_rel": 0.7,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 12,
    "mod_env_rel": 0.168,
    "flt_cutoff": 10500,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 5.925,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 4,
    "dI": 1.7,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 5.925,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2.1,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.7300000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.26,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.7800000000000002,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2.1,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.7300000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.26,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.7800000000000002,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_80",
  "name": "H10: Analog Sync Sweep Lead",
  "category": "Bank H (18 Params · Sync Lead)",
  "bank": "H",
  "bankLevel": 8,
  "paramCount": 18,
  "keyDisplay": "H10",
  "desc": "Sync Lead",
  "formulaSub": "Algorithmus 6 (Sync Lead)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=2.00, I_0=4.6]",
  "color": "#ff007f",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 2,
    "mod_cross": 0.9,
    "mod_fb": 1.3,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2,
    "env_atk": 0.015,
    "env_dec": 0.8,
    "env_sus": 80,
    "env_rel": 1.2,
    "mod_env_dec": 0.25,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.3,
    "flt_cutoff": 12500,
    "flt_reso": 3.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 6,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 4.6,
    "dI": 2,
    "atk": 0.015,
    "rel": 1.2,
    "customParam": 6,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.03,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.6,
        "flt_reso": 5.1
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.03,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.16,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.1,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.6,
        "flt_reso": 5.1
      }
    }
  ]
},
  {
  "id": "synth_81",
  "name": "I1: Lorenz Strange Attractor Drone",
  "category": "Bank I (20 Params · Chaos)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I1",
  "desc": "Chaos",
  "formulaSub": "Algorithmus 8 (Chaos)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=1.00, I_0=3.6]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.6,
    "mod_cross": 0.8,
    "mod_fb": 0.8,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.5,
    "env_dec": 3.5,
    "env_sus": 95,
    "env_rel": 5,
    "mod_env_dec": 2.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3,
    "flt_cutoff": 8500,
    "flt_reso": 2.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.075,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 3.6,
    "dI": 1.6,
    "atk": 0.5,
    "rel": 5,
    "customParam": 6.075,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.4,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 1,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3,
        "shape_drive": 2.52,
        "flt_reso": 3.9000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.4,
        "env_dec": 3.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 6.3,
        "env_rel": 9,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.75,
        "mod_env_dec": 1,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3,
        "shape_drive": 2.52,
        "flt_reso": 3.9000000000000004
      }
    }
  ]
},
  {
  "id": "synth_82",
  "name": "I2: Rössler Band Chaos Orbit",
  "category": "Bank I (20 Params · Chaos)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I2",
  "desc": "Chaos",
  "formulaSub": "Algorithmus 8 (Chaos)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=1.62, I_0=4.0]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.618,
    "r3_ratio": 2.618,
    "r4_ratio": 0.618,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 0.9,
    "mod_fb": 0.9,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.4,
    "env_dec": 3,
    "env_sus": 92,
    "env_rel": 4.5,
    "mod_env_dec": 2.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 37,
    "mod_env_rel": 2.64,
    "flt_cutoff": 9500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.1499999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.618,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.4,
    "rel": 4.5,
    "customParam": 6.1499999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.5,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8800000000000001,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.5,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.8,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8800000000000001,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 2.7,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_83",
  "name": "I3: Chua Diode Chaotic Pluck",
  "category": "Bank I (20 Params · Chaos)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I3",
  "desc": "Chaos",
  "formulaSub": "Algorithmus 8 (Chaos)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=2.72, I_0=4.5]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.72,
    "r3_ratio": 5.44,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 2,
    "mod_cross": 1,
    "mod_fb": 1,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 1.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.003,
    "env_dec": 0.7,
    "env_sus": 30,
    "env_rel": 1.5,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 12,
    "mod_env_rel": 0.216,
    "flt_cutoff": 11000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.225,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.72,
    "I0": 4.5,
    "dI": 2,
    "atk": 0.003,
    "rel": 1.5,
    "customParam": 6.225,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.8,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 2.7,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.24,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.8,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 2.7,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 9
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.24,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_84",
  "name": "I4: Quanten-Fluktuation Rausch-Drone",
  "category": "Bank I (20 Params · Drones)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I4",
  "desc": "Drones",
  "formulaSub": "Algorithmus 8 (Drones)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=0.50, I_0=3.8]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 0.7,
    "mod_fb": 1.2,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.6,
    "env_atk": 0.6,
    "env_dec": 4,
    "env_sus": 96,
    "env_rel": 6,
    "mod_env_dec": 3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3.5999999999999996,
    "flt_cutoff": 6000,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.3,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.6,
    "rel": 6,
    "customParam": 6.3,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.6,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 2.08
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.2000000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 2.8800000000000003,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.6,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 2.08
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 10.8,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.2000000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 2.8800000000000003,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_85",
  "name": "I5: Kinetische Pendel-Harmonik",
  "category": "Bank I (20 Params · Physik)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I5",
  "desc": "Physik",
  "formulaSub": "Algorithmus 8 (Physik)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=1.25, I_0=3.2]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.25,
    "r3_ratio": 2.5,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1.3,
    "mod_cross": 0.6,
    "mod_fb": 0.6,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.1,
    "env_dec": 2,
    "env_sus": 88,
    "env_rel": 3,
    "mod_env_dec": 1.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 1.7999999999999998,
    "flt_cutoff": 10000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.375,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.25,
    "I0": 3.2,
    "dI": 1.3,
    "atk": 0.1,
    "rel": 3,
    "customParam": 6.375,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.3,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.9500000000000002,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.3,
        "env_dec": 2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 1.9500000000000002,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.6,
        "env_rel": 5.4,
        "flt_cutoff": 7500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_86",
  "name": "I6: Hénon Map Stochastik Lead",
  "category": "Bank I (20 Params · Chaos)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I6",
  "desc": "Chaos",
  "formulaSub": "Algorithmus 8 (Chaos)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=3.00, I_0=4.2]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.9,
    "mod_cross": 0.9,
    "mod_fb": 0.85,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.7,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.6,
    "env_atk": 0.01,
    "env_dec": 0.9,
    "env_sus": 78,
    "env_rel": 1.4,
    "mod_env_dec": 0.25,
    "mod_env_atk": 0.003,
    "mod_env_sus": 31,
    "mod_env_rel": 0.3,
    "flt_cutoff": 12000,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.45,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 4.2,
    "dI": 1.9,
    "atk": 0.01,
    "rel": 1.4,
    "customParam": 6.45,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.6,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.08
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 1.62,
        "env_rel": 2.52,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.1,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.2,
        "shape_drive": 2.8800000000000003,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.6,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.08
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 1.62,
        "env_rel": 2.52,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.1,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.2,
        "shape_drive": 2.8800000000000003,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_87",
  "name": "I7: Turbulente Wirbel-Resonanz",
  "category": "Bank I (20 Params · Drones)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I7",
  "desc": "Drones",
  "formulaSub": "Algorithmus 8 (Drones)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=0.75, I_0=4.0]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.75,
    "r3_ratio": 1.75,
    "r4_ratio": 0.375,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.7,
    "mod_cross": 0.8,
    "mod_fb": 1.1,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.7,
    "env_atk": 0.3,
    "env_dec": 2.8,
    "env_sus": 90,
    "env_rel": 4,
    "mod_env_dec": 2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 36,
    "mod_env_rel": 2.4,
    "flt_cutoff": 7500,
    "flt_reso": 3.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.5249999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 0.75,
    "I0": 4,
    "dI": 1.7,
    "atk": 0.3,
    "rel": 4,
    "customParam": 6.5249999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.7,
        "env_dec": 2.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.6,
        "env_dec": 5.04,
        "env_rel": 7.2,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.4,
        "mod_env_dec": 0.8,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.06,
        "flt_reso": 5.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.7,
        "env_dec": 2.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.55,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.6,
        "env_dec": 5.04,
        "env_rel": 7.2,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.4,
        "mod_env_dec": 0.8,
        "env_sus": 27
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.06,
        "flt_reso": 5.25
      }
    }
  ]
},
  {
  "id": "synth_88",
  "name": "I8: Plasma-Bogen Entladung",
  "category": "Bank I (20 Params · FX)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I8",
  "desc": "FX",
  "formulaSub": "Algorithmus 8 (FX)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=4.50, I_0=5.2]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 4.5,
    "r3_ratio": 9,
    "r4_ratio": 1.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.4,
    "mod_cross": 1.2,
    "mod_fb": 1.4,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 1.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.002,
    "env_dec": 0.5,
    "env_sus": 40,
    "env_rel": 0.9,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 16,
    "mod_env_rel": 0.144,
    "flt_cutoff": 13000,
    "flt_reso": 3.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.6,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 4.5,
    "I0": 5.2,
    "dI": 2.4,
    "atk": 0.002,
    "rel": 0.9,
    "customParam": 6.6,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.2,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.62,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.048,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 5.4
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.2,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.62,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.048,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 5.4
      }
    }
  ]
},
  {
  "id": "synth_89",
  "name": "I9: Schmetterlings-Effekt Flüstern",
  "category": "Bank I (20 Params · Pads)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I9",
  "desc": "Pads",
  "formulaSub": "Algorithmus 8 (Pads)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=1.00, I_0=2.2]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.003,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.2,
    "mod_dI": 0.9,
    "mod_cross": 0.4,
    "mod_fb": 0.5,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.5,
    "env_dec": 3.2,
    "env_sus": 94,
    "env_rel": 5.5,
    "mod_env_dec": 2.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3,
    "flt_cutoff": 9000,
    "flt_reso": 1.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.675,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.003,
    "I0": 2.2,
    "dI": 0.9,
    "atk": 0.5,
    "rel": 5.5,
    "customParam": 6.675,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.1,
        "env_dec": 3.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.35,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 5.760000000000001,
        "env_rel": 9.9,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.6,
        "mod_env_dec": 1,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.7
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.2,
        "shape_drive": 1.1,
        "env_dec": 3.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.08,
        "mod_dI": 1.35,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1,
        "env_dec": 5.760000000000001,
        "env_rel": 9.9,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.6,
        "mod_env_dec": 1,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.7
      }
    }
  ]
},
  {
  "id": "synth_90",
  "name": "I10: Bifurkations-Kaskade",
  "category": "Bank I (20 Params · Chaos)",
  "bank": "I",
  "bankLevel": 9,
  "paramCount": 20,
  "keyDisplay": "I10",
  "desc": "Chaos",
  "formulaSub": "Algorithmus 8 (Chaos)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=2.00, I_0=4.8]",
  "color": "#ff4757",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 8,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.8,
    "mod_dI": 2.2,
    "mod_cross": 1.1,
    "mod_fb": 1.3,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 1.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.9,
    "env_atk": 0.02,
    "env_dec": 1.2,
    "env_sus": 82,
    "env_rel": 1.8,
    "mod_env_dec": 0.35,
    "mod_env_atk": 0.003,
    "mod_env_sus": 33,
    "mod_env_rel": 0.42,
    "flt_cutoff": 11500,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.75,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 4.8,
    "dI": 2.2,
    "atk": 0.02,
    "rel": 1.8,
    "customParam": 6.75,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.9,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.6,
        "shape_drive": 3.42,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.9,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.4699999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.6,
        "shape_drive": 3.42,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_91",
  "name": "J1: Cyberpunk 2077 Night City Lead",
  "category": "Bank J (22 Params · Cyberpunk)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J1",
  "desc": "Cyberpunk",
  "formulaSub": "Algorithmus 2 (Cyberpunk)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=5.0]",
  "color": "#ffa502",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5,
    "mod_dI": 2.4,
    "mod_cross": 1,
    "mod_fb": 1.5,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 1.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.8,
    "env_atk": 0.004,
    "env_dec": 0.7,
    "env_sus": 84,
    "env_rel": 1.1,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 34,
    "mod_env_rel": 0.216,
    "flt_cutoff": 13000,
    "flt_reso": 3.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.825,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 5,
    "dI": 2.4,
    "atk": 0.004,
    "rel": 1.1,
    "customParam": 6.825,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.8,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.26,
        "env_rel": 1.9800000000000002,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 5.04,
        "flt_reso": 5.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.8,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.008,
        "env_dec": 1.26,
        "env_rel": 1.9800000000000002,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.072,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 5.04,
        "flt_reso": 5.25
      }
    }
  ]
},
  {
  "id": "synth_92",
  "name": "J2: Neurofunk Reese Morphing Bass",
  "category": "Bank J (22 Params · Neurofunk)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J2",
  "desc": "Neurofunk",
  "formulaSub": "Algorithmus 6 (Neurofunk)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=0.50, I_0=5.4]",
  "color": "#ffa502",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1.002,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.4,
    "mod_dI": 2.6,
    "mod_cross": 1.2,
    "mod_fb": 1.8,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.2,
    "env_atk": 0.003,
    "env_dec": 0.45,
    "env_sus": 60,
    "env_rel": 0.6,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 24,
    "mod_env_rel": 0.144,
    "flt_cutoff": 6500,
    "flt_reso": 4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.8999999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 5.4,
    "dI": 2.6,
    "atk": 0.003,
    "rel": 0.6,
    "customParam": 6.8999999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.4,
        "shape_drive": 3.2,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.56,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 4.16
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.81,
        "env_rel": 1.08,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 18
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.760000000000001,
        "flt_reso": 6
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.4,
        "shape_drive": 3.2,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.56,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 4.16
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.81,
        "env_rel": 1.08,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.048,
        "env_sus": 18
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.760000000000001,
        "flt_reso": 6
      }
    }
  ]
},
  {
  "id": "synth_93",
  "name": "J3: Industrial Steel Factory Hit",
  "category": "Bank J (22 Params · Industrial)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J3",
  "desc": "Industrial",
  "formulaSub": "Algorithmus 4 (Industrial)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=3.14, I_0=6.2]",
  "color": "#ffa502",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.14,
    "r3_ratio": 6.28,
    "r4_ratio": 9.42,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 6.2,
    "mod_dI": 3,
    "mod_cross": 1.4,
    "mod_fb": 1.6,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 2.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.5,
    "env_atk": 0.001,
    "env_dec": 0.35,
    "env_sus": 10,
    "env_rel": 0.5,
    "mod_env_dec": 0.06,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.072,
    "flt_cutoff": 12000,
    "flt_reso": 3.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 6.975,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.14,
    "I0": 6.2,
    "dI": 3,
    "atk": 0.001,
    "rel": 0.5,
    "customParam": 6.975,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6.2,
        "shape_drive": 3.5,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.68,
        "mod_dI": 4.5,
        "shape_drive": 4.55
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.024,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 6,
        "flt_reso": 5.699999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6.2,
        "shape_drive": 3.5,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.68,
        "mod_dI": 4.5,
        "shape_drive": 4.55
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.024,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 6,
        "flt_reso": 5.699999999999999
      }
    }
  ]
},
  {
  "id": "synth_94",
  "name": "J4: Neon Glitch Cyber Pluck",
  "category": "Bank J (22 Params · Plucks)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J4",
  "desc": "Plucks",
  "formulaSub": "Algorithmus 5 (Plucks)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.50, I_0=4.6]",
  "color": "#ffa502",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.5,
    "r3_ratio": 5,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 2,
    "mod_cross": 0.9,
    "mod_fb": 0.8,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.4,
    "env_atk": 0.002,
    "env_dec": 0.4,
    "env_sus": 25,
    "env_rel": 0.7,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 10,
    "mod_env_rel": 0.12,
    "flt_cutoff": 13500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.05,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.5,
    "I0": 4.6,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 7.05,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.4,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.26,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.5,
        "shape_drive": 4.32,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.4,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.12
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.26,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 8
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.5,
        "shape_drive": 4.32,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_95",
  "name": "J5: Dystopian Blade Runner Brass",
  "category": "Bank J (22 Params · Cinematic)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J5",
  "desc": "Cinematic",
  "formulaSub": "Algorithmus 2 (Cinematic)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=4.2]",
  "color": "#ffa502",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.003,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.8,
    "mod_cross": 0.8,
    "mod_fb": 0.9,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.25,
    "env_dec": 2.5,
    "env_sus": 88,
    "env_rel": 3.5,
    "mod_env_dec": 1.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 1.7999999999999998,
    "flt_cutoff": 9500,
    "flt_reso": 2.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.125,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.003,
    "I0": 4.2,
    "dI": 1.8,
    "atk": 0.25,
    "rel": 3.5,
    "customParam": 7.125,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 4.5,
        "env_rel": 6.3,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.24,
        "flt_reso": 3.9000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 2.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.5,
        "env_dec": 4.5,
        "env_rel": 6.3,
        "flt_cutoff": 7125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.25,
        "mod_env_dec": 0.6000000000000001,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.24,
        "flt_reso": 3.9000000000000004
      }
    }
  ]
},
  {
  "id": "synth_96",
  "name": "J6: Hacker Terminal Data Beep",
  "category": "Bank J (22 Params · Chiptune FX)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J6",
  "desc": "Chiptune FX",
  "formulaSub": "Algorithmus 1 (Chiptune FX)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=4.00, I_0=3.5]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 8,
    "r4_ratio": 16,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.5,
    "mod_dI": 1.2,
    "mod_cross": 0.4,
    "mod_fb": 0.2,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.001,
    "env_dec": 0.12,
    "env_sus": 0,
    "env_rel": 0.2,
    "mod_env_dec": 0.03,
    "mod_env_atk": 0.003,
    "mod_env_sus": 0,
    "mod_env_rel": 0.036,
    "flt_cutoff": 15000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.199999999999999,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 4,
    "I0": 3.5,
    "dI": 1.2,
    "atk": 0.001,
    "rel": 0.2,
    "customParam": 7.199999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.2,
        "env_dec": 0.12
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.216,
        "env_rel": 0.36000000000000004,
        "flt_cutoff": 11250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.06,
        "mod_env_dec": 0.012,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.5,
        "shape_drive": 1.2,
        "env_dec": 0.12
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.8999999999999995,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.216,
        "env_rel": 0.36000000000000004,
        "flt_cutoff": 11250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.06,
        "mod_env_dec": 0.012,
        "env_sus": 0
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_97",
  "name": "J7: Dark Synthwave Bass Pulse",
  "category": "Bank J (22 Params · Synthwave)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J7",
  "desc": "Synthwave",
  "formulaSub": "Algorithmus 1 (Synthwave)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=1.00, I_0=4.5]",
  "color": "#ffa502",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 2,
    "mod_cross": 0.7,
    "mod_fb": 1.2,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.002,
    "env_dec": 0.38,
    "env_sus": 50,
    "env_rel": 0.48,
    "mod_env_dec": 0.11,
    "mod_env_atk": 0.003,
    "mod_env_sus": 20,
    "mod_env_rel": 0.132,
    "flt_cutoff": 7500,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.2749999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 4.5,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.48,
    "customParam": 7.2749999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2.2,
        "env_dec": 0.38
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.684,
        "env_rel": 0.864,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.19,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 2.2,
        "env_dec": 0.38
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.684,
        "env_rel": 0.864,
        "flt_cutoff": 5625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.19,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_98",
  "name": "J8: Overdrive Mech Walker Stomp",
  "category": "Bank J (22 Params · Industrial)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J8",
  "desc": "Industrial",
  "formulaSub": "Algorithmus 5 (Industrial)",
  "formulaLatex": "\\text{Algo } 5: [r_1=0.50, r_2=1.50, I_0=6.0]",
  "color": "#ffa502",
  "algo_type": 5,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 1.5,
    "r3_ratio": 3,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 6,
    "mod_dI": 2.8,
    "mod_cross": 1.3,
    "mod_fb": 1.7,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.8,
    "env_atk": 0.001,
    "env_dec": 0.3,
    "env_sus": 5,
    "env_rel": 0.45,
    "mod_env_dec": 0.07,
    "mod_env_atk": 0.003,
    "mod_env_sus": 2,
    "mod_env_rel": 0.084,
    "flt_cutoff": 5000,
    "flt_reso": 4.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.35,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.5,
    "I0": 6,
    "dI": 2.8,
    "atk": 0.001,
    "rel": 0.45,
    "customParam": 7.35,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3.8,
        "env_dec": 0.3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.199999999999999,
        "shape_drive": 4.9399999999999995
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.54,
        "env_rel": 0.81,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.15,
        "mod_env_dec": 0.028000000000000004,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6,
        "shape_drive": 6,
        "flt_reso": 6.300000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3.8,
        "env_dec": 0.3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.199999999999999,
        "shape_drive": 4.9399999999999995
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.54,
        "env_rel": 0.81,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.15,
        "mod_env_dec": 0.028000000000000004,
        "env_sus": 2
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6,
        "shape_drive": 6,
        "flt_reso": 6.300000000000001
      }
    }
  ]
},
  {
  "id": "synth_99",
  "name": "J9: Hologram Shimmer Matrix Pad",
  "category": "Bank J (22 Params · Pads)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J9",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=2.00, I_0=2.8]",
  "color": "#ffa502",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.002,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 1.1,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.35,
    "env_dec": 3,
    "env_sus": 92,
    "env_rel": 4.5,
    "mod_env_dec": 2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 37,
    "mod_env_rel": 2.4,
    "flt_cutoff": 11000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.425,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.002,
    "I0": 2.8,
    "dI": 1.1,
    "atk": 0.35,
    "rel": 4.5,
    "customParam": 7.425,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.3,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.6500000000000001,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.7,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.3,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.6500000000000001,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.7,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 28
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_100",
  "name": "J10: Sub-Atomic Fusion Growl",
  "category": "Bank J (22 Params · Leads)",
  "bank": "J",
  "bankLevel": 10,
  "paramCount": 22,
  "keyDisplay": "J10",
  "desc": "Leads",
  "formulaSub": "Algorithmus 6 (Leads)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=0.50, I_0=5.6]",
  "color": "#ffa502",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1.5,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.6,
    "mod_dI": 2.7,
    "mod_cross": 1.4,
    "mod_fb": 2,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.6,
    "env_atk": 0.005,
    "env_dec": 0.6,
    "env_sus": 70,
    "env_rel": 0.8,
    "mod_env_dec": 0.16,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.192,
    "flt_cutoff": 7000,
    "flt_reso": 4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 7.5,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 5.6,
    "dI": 2.7,
    "atk": 0.005,
    "rel": 0.8,
    "customParam": 7.5,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.6,
        "shape_drive": 3.6,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.839999999999999,
        "mod_dI": 4.050000000000001,
        "shape_drive": 4.680000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.064,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.3,
        "shape_drive": 6,
        "flt_reso": 6
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.6,
        "shape_drive": 3.6,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.839999999999999,
        "mod_dI": 4.050000000000001,
        "shape_drive": 4.680000000000001
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.01,
        "env_dec": 1.08,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.064,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.3,
        "shape_drive": 6,
        "flt_reso": 6
      }
    }
  ]
},
  {
  "id": "synth_101",
  "name": "K1: Event Horizon Graviton Drone",
  "category": "Bank K (24 Params · Deep Space)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K1",
  "desc": "Deep Space",
  "formulaSub": "Algorithmus 8 (Deep Space)",
  "formulaLatex": "\\text{Algo } 8: [r_1=0.50, r_2=0.50, I_0=4.0]",
  "color": "#e056fd",
  "algo_type": 8,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.501,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 0.9,
    "mod_fb": 1,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.7,
    "env_atk": 0.8,
    "env_dec": 5,
    "env_sus": 96,
    "env_rel": 8,
    "mod_env_dec": 3.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 4.2,
    "flt_cutoff": 5000,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.574999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.501,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.8,
    "rel": 8,
    "customParam": 7.574999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.7,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.4000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.06,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.7,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 2.21
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.4000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.06,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_102",
  "name": "K2: Pulsar Neutronenstern Takt",
  "category": "Bank K (24 Params · Space FX)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K2",
  "desc": "Space FX",
  "formulaSub": "Algorithmus 1 (Space FX)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=6.28, I_0=4.5]",
  "color": "#e056fd",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 6.28,
    "r3_ratio": 12.56,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 2,
    "mod_cross": 0.8,
    "mod_fb": 0.6,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.002,
    "env_dec": 0.25,
    "env_sus": 10,
    "env_rel": 0.4,
    "mod_env_dec": 0.08,
    "mod_env_atk": 0.003,
    "mod_env_sus": 4,
    "mod_env_rel": 0.096,
    "flt_cutoff": 13000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.6499999999999995,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 6.28,
    "I0": 4.5,
    "dI": 2,
    "atk": 0.002,
    "rel": 0.4,
    "customParam": 7.6499999999999995,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.5,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.45,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.032,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.5,
        "env_dec": 0.25
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 3,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.45,
        "env_rel": 0.7200000000000001,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.125,
        "mod_env_dec": 0.032,
        "env_sus": 3
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_103",
  "name": "K3: Nebula Sternenstaub Shimmer",
  "category": "Bank K (24 Params · Pads)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K3",
  "desc": "Pads",
  "formulaSub": "Algorithmus 3 (Pads)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=2.00, I_0=2.4]",
  "color": "#e056fd",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.001,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 2.4,
    "mod_dI": 0.9,
    "mod_cross": 0.4,
    "mod_fb": 0.3,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.2,
    "env_atk": 0.6,
    "env_dec": 4,
    "env_sus": 95,
    "env_rel": 6.5,
    "mod_env_dec": 2.8,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3.36,
    "flt_cutoff": 12000,
    "flt_reso": 1.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.725,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.001,
    "I0": 2.4,
    "dI": 0.9,
    "atk": 0.6,
    "rel": 6.5,
    "customParam": 7.725,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.2,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.35,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 11.700000000000001,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.1199999999999999,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 2.4000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.4,
        "shape_drive": 1.2,
        "env_dec": 4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.36,
        "mod_dI": 1.35,
        "shape_drive": 1.56
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.2,
        "env_dec": 7.2,
        "env_rel": 11.700000000000001,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2,
        "mod_env_dec": 1.1199999999999999,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.16,
        "flt_reso": 2.4000000000000004
      }
    }
  ]
},
  {
  "id": "synth_104",
  "name": "K4: Wormhole Raumzeit-Verzerrung",
  "category": "Bank K (24 Params · Deep Space)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K4",
  "desc": "Deep Space",
  "formulaSub": "Algorithmus 6 (Deep Space)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.41, I_0=5.2]",
  "color": "#e056fd",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.414,
    "r3_ratio": 2.828,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.4,
    "mod_cross": 1.2,
    "mod_fb": 1.8,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 1.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.6,
    "env_atk": 0.1,
    "env_dec": 2.2,
    "env_sus": 88,
    "env_rel": 3.5,
    "mod_env_dec": 1.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 35,
    "mod_env_rel": 1.68,
    "flt_cutoff": 8500,
    "flt_reso": 3.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.8,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.414,
    "I0": 5.2,
    "dI": 2.4,
    "atk": 0.1,
    "rel": 3.5,
    "customParam": 7.8,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.6,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.9600000000000004,
        "env_rel": 6.3,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.5599999999999999,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 4.680000000000001,
        "flt_reso": 5.699999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.6,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.5999999999999996,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.2,
        "env_dec": 3.9600000000000004,
        "env_rel": 6.3,
        "flt_cutoff": 6375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.5599999999999999,
        "env_sus": 26
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.3,
        "shape_drive": 4.680000000000001,
        "flt_reso": 5.699999999999999
      }
    }
  ]
},
  {
  "id": "synth_105",
  "name": "K5: Interstellar Radio-Teleskop",
  "category": "Bank K (24 Params · Space FX)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K5",
  "desc": "Space FX",
  "formulaSub": "Algorithmus 4 (Space FX)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=3.33, I_0=4.8]",
  "color": "#e056fd",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.33,
    "r3_ratio": 6.66,
    "r4_ratio": 9.99,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.8,
    "mod_dI": 2.1,
    "mod_cross": 1,
    "mod_fb": 1.1,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 0.9,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.05,
    "env_dec": 1.5,
    "env_sus": 75,
    "env_rel": 2.2,
    "mod_env_dec": 0.8,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.96,
    "flt_cutoff": 11500,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.875,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.33,
    "I0": 4.8,
    "dI": 2.1,
    "atk": 0.05,
    "rel": 2.2,
    "customParam": 7.875,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.8,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3.1500000000000004,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.7,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.32000000000000006,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.4,
        "shape_drive": 3.24,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.8,
        "shape_drive": 1.8,
        "env_dec": 1.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.72,
        "mod_dI": 3.1500000000000004,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.7,
        "env_rel": 3.9600000000000004,
        "flt_cutoff": 8625
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.75,
        "mod_env_dec": 0.32000000000000006,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.4,
        "shape_drive": 3.24,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_106",
  "name": "K6: Dark Energy Vakuum-Fläche",
  "category": "Bank K (24 Params · Drones)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K6",
  "desc": "Drones",
  "formulaSub": "Algorithmus 8 (Drones)",
  "formulaLatex": "\\text{Algo } 8: [r_1=1.00, r_2=1.00, I_0=3.0]",
  "color": "#e056fd",
  "algo_type": 8,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.001,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3,
    "mod_dI": 1.2,
    "mod_cross": 0.6,
    "mod_fb": 0.7,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.7,
    "env_dec": 4.5,
    "env_sus": 96,
    "env_rel": 7,
    "mod_env_dec": 3.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 3.84,
    "flt_cutoff": 6500,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 7.949999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 1.001,
    "I0": 3,
    "dI": 1.2,
    "atk": 0.7,
    "rel": 7,
    "customParam": 7.949999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3,
        "shape_drive": 1.3,
        "env_dec": 4.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.199999999999999,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.4,
        "env_dec": 8.1,
        "env_rel": 12.6,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.25,
        "mod_env_dec": 1.2800000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3,
        "shape_drive": 1.3,
        "env_dec": 4.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.199999999999999,
        "mod_dI": 1.7999999999999998,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.4,
        "env_dec": 8.1,
        "env_rel": 12.6,
        "flt_cutoff": 4875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.25,
        "mod_env_dec": 1.2800000000000002,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_107",
  "name": "K7: Kometen-Schweif Glanz-Lead",
  "category": "Bank K (24 Params · Leads)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K7",
  "desc": "Leads",
  "formulaSub": "Algorithmus 1 (Leads)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=7.00, I_0=3.8]",
  "color": "#e056fd",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 7,
    "r3_ratio": 14,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.5,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.01,
    "env_dec": 1.2,
    "env_sus": 80,
    "env_rel": 1.8,
    "mod_env_dec": 0.3,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.36,
    "flt_cutoff": 14000,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 8.025,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 7,
    "I0": 3.8,
    "dI": 1.5,
    "atk": 0.01,
    "rel": 1.8,
    "customParam": 8.025,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.4,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.12,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.52,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.4,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.25,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.02,
        "env_dec": 2.16,
        "env_rel": 3.24,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.12,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.52,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_108",
  "name": "K8: Supernova Strahlungs-Burst",
  "category": "Bank K (24 Params · FX)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K8",
  "desc": "FX",
  "formulaSub": "Algorithmus 6 (FX)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=2.00, I_0=6.0]",
  "color": "#e056fd",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 6,
    "mod_dI": 3,
    "mod_cross": 1.5,
    "mod_fb": 2.2,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.5,
    "env_atk": 0.003,
    "env_dec": 0.8,
    "env_sus": 50,
    "env_rel": 1.5,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 20,
    "mod_env_rel": 0.24,
    "flt_cutoff": 12500,
    "flt_reso": 4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.1,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 6,
    "dI": 3,
    "atk": 0.003,
    "rel": 1.5,
    "customParam": 8.1,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3.5,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.5,
        "shape_drive": 4.55
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.7,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 6,
        "flt_reso": 6
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 6,
        "shape_drive": 3.5,
        "env_dec": 0.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.399999999999999,
        "mod_dI": 4.5,
        "shape_drive": 4.55
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.4400000000000002,
        "env_rel": 2.7,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.4,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 15
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5,
        "shape_drive": 6,
        "flt_reso": 6
      }
    }
  ]
},
  {
  "id": "synth_109",
  "name": "K9: Schwarzes Loch Akkretions-Drone",
  "category": "Bank K (24 Params · Deep Space)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K9",
  "desc": "Deep Space",
  "formulaSub": "Algorithmus 8 (Deep Space)",
  "formulaLatex": "\\text{Algo } 8: [r_1=0.50, r_2=0.25, I_0=4.6]",
  "color": "#e056fd",
  "algo_type": 8,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.25,
    "r3_ratio": 0.75,
    "r4_ratio": 0.125,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 2,
    "mod_cross": 1,
    "mod_fb": 1.3,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 1.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 1,
    "env_dec": 6,
    "env_sus": 98,
    "env_rel": 10,
    "mod_env_dec": 4.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 39,
    "mod_env_rel": 5.3999999999999995,
    "flt_cutoff": 4000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.174999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.25,
    "I0": 4.6,
    "dI": 2,
    "atk": 1,
    "rel": 10,
    "customParam": 8.174999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.2,
        "env_dec": 6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 2,
        "env_dec": 10.8,
        "env_rel": 18,
        "flt_cutoff": 3000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 3,
        "mod_env_dec": 1.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.2,
        "env_dec": 6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 2,
        "env_dec": 10.8,
        "env_rel": 18,
        "flt_cutoff": 3000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 3,
        "mod_env_dec": 1.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.7,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_110",
  "name": "K10: Kosmische Hintergrundstrahlung",
  "category": "Bank K (24 Params · Drones)",
  "bank": "K",
  "bankLevel": 11,
  "paramCount": 24,
  "keyDisplay": "K10",
  "desc": "Drones",
  "formulaSub": "Algorithmus 3 (Drones)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=1.00, I_0=1.8]",
  "color": "#e056fd",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.0005,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 1.8,
    "mod_dI": 0.6,
    "mod_cross": 0.3,
    "mod_fb": 0.2,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.1,
    "env_atk": 0.8,
    "env_dec": 5,
    "env_sus": 98,
    "env_rel": 8,
    "mod_env_dec": 4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 39,
    "mod_env_rel": 4.8,
    "flt_cutoff": 7000,
    "flt_reso": 1.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.25,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 1.0005,
    "I0": 1.8,
    "dI": 0.6,
    "atk": 0.8,
    "rel": 8,
    "customParam": 8.25,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1.1,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.6,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 1.8,
        "shape_drive": 1.1,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 2.52,
        "mod_dI": 0.8999999999999999,
        "shape_drive": 1.4300000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 5250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.6,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.5,
        "shape_drive": 1.9800000000000002,
        "flt_reso": 2.25
      }
    }
  ]
},
  {
  "id": "synth_111",
  "name": "L1: Hyperpop Bubblegum Squeak Lead",
  "category": "Bank L (24 Params · Hyperpop)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L1",
  "desc": "Hyperpop",
  "formulaSub": "Algorithmus 2 (Hyperpop)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=3.00, I_0=5.2]",
  "color": "#48dbfb",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.2,
    "mod_dI": 2.5,
    "mod_cross": 1.1,
    "mod_fb": 1.2,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 1.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.5,
    "env_atk": 0.002,
    "env_dec": 0.5,
    "env_sus": 80,
    "env_rel": 0.7,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.144,
    "flt_cutoff": 14500,
    "flt_reso": 3.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.325,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 5.2,
    "dI": 2.5,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 8.325,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.5,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.75,
        "shape_drive": 3.25
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 10875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.048,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 4.5,
        "flt_reso": 5.25
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.2,
        "shape_drive": 2.5,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.279999999999999,
        "mod_dI": 3.75,
        "shape_drive": 3.25
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 10875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.048,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 4.5,
        "flt_reso": 5.25
      }
    }
  ]
},
  {
  "id": "synth_112",
  "name": "L2: Bitcrush Glitch Stutter Lead",
  "category": "Bank L (24 Params · Glitch)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L2",
  "desc": "Glitch",
  "formulaSub": "Algorithmus 4 (Glitch)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=4.00, I_0=5.8]",
  "color": "#48dbfb",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 4,
    "r3_ratio": 7,
    "r4_ratio": 11,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.8,
    "mod_dI": 2.8,
    "mod_cross": 1.3,
    "mod_fb": 1.6,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 2.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3,
    "env_atk": 0.001,
    "env_dec": 0.4,
    "env_sus": 70,
    "env_rel": 0.6,
    "mod_env_dec": 0.08,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.096,
    "flt_cutoff": 13000,
    "flt_reso": 3.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.4,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 4,
    "I0": 5.8,
    "dI": 2.8,
    "atk": 0.001,
    "rel": 0.6,
    "customParam": 8.4,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.8,
        "shape_drive": 3,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.12,
        "mod_dI": 4.199999999999999,
        "shape_drive": 3.9000000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.032,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.4,
        "flt_reso": 5.699999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.8,
        "shape_drive": 3,
        "env_dec": 0.4
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.12,
        "mod_dI": 4.199999999999999,
        "shape_drive": 3.9000000000000004
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.7200000000000001,
        "env_rel": 1.08,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.2,
        "mod_env_dec": 0.032,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.7,
        "shape_drive": 5.4,
        "flt_reso": 5.699999999999999
      }
    }
  ]
},
  {
  "id": "synth_113",
  "name": "L3: Vocal Chop Synthesizer Pad",
  "category": "Bank L (24 Params · Vocal)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L3",
  "desc": "Vocal",
  "formulaSub": "Algorithmus 2 (Vocal)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=2.85, I_0=3.8]",
  "color": "#48dbfb",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.85,
    "r3_ratio": 4.15,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.8,
    "mod_dI": 1.6,
    "mod_cross": 0.7,
    "mod_fb": 0.5,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.05,
    "env_dec": 1.2,
    "env_sus": 82,
    "env_rel": 1.6,
    "mod_env_dec": 0.4,
    "mod_env_atk": 0.003,
    "mod_env_sus": 33,
    "mod_env_rel": 0.48,
    "flt_cutoff": 9000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.475,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.85,
    "I0": 3.8,
    "dI": 1.6,
    "atk": 0.05,
    "rel": 1.6,
    "customParam": 8.475,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.5,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.16,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.8,
        "shape_drive": 1.5,
        "env_dec": 1.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.319999999999999,
        "mod_dI": 2.4000000000000004,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 2.16,
        "env_rel": 2.8800000000000003,
        "flt_cutoff": 6750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.6,
        "mod_env_dec": 0.16000000000000003,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_114",
  "name": "L4: Detuned Supersaw Pluck Stab",
  "category": "Bank L (24 Params · Stabs)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L4",
  "desc": "Stabs",
  "formulaSub": "Algorithmus 2 (Stabs)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=4.0]",
  "color": "#48dbfb",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.004,
    "r3_ratio": 2.008,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 0.8,
    "mod_fb": 0.8,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.8,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2,
    "env_atk": 0.003,
    "env_dec": 0.55,
    "env_sus": 35,
    "env_rel": 0.8,
    "mod_env_dec": 0.15,
    "mod_env_atk": 0.003,
    "mod_env_sus": 14,
    "mod_env_rel": 0.18,
    "flt_cutoff": 12000,
    "flt_reso": 2.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.549999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.004,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 0.8,
    "customParam": 8.549999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.06,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.6,
        "flt_reso": 3.9000000000000004
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 2,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 2.6
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.06,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.3,
        "shape_drive": 3.6,
        "flt_reso": 3.9000000000000004
      }
    }
  ]
},
  {
  "id": "synth_115",
  "name": "L5: Modern Trap 808 Saturator Bass",
  "category": "Bank L (24 Params · Trap 808)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L5",
  "desc": "Trap 808",
  "formulaSub": "Algorithmus 1 (Trap 808)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=0.50, I_0=4.2]",
  "color": "#48dbfb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 0.5,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.8,
    "mod_cross": 0.6,
    "mod_fb": 0.9,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 1.5,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.8,
    "env_atk": 0.002,
    "env_dec": 0.65,
    "env_sus": 60,
    "env_rel": 0.7,
    "mod_env_dec": 0.16,
    "mod_env_atk": 0.003,
    "mod_env_sus": 24,
    "mod_env_rel": 0.192,
    "flt_cutoff": 5500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.625,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.5,
    "I0": 4.2,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 8.625,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 2.8,
        "env_dec": 0.65
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.1700000000000002,
        "env_rel": 1.26,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.325,
        "mod_env_dec": 0.064,
        "env_sus": 18
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 5.04,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 2.8,
        "env_dec": 0.65
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.7,
        "shape_drive": 3.6399999999999997
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.1700000000000002,
        "env_rel": 1.26,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.325,
        "mod_env_dec": 0.064,
        "env_sus": 18
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4,
        "shape_drive": 5.04,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_116",
  "name": "L6: Laser Harfe Neon Dream",
  "category": "Bank L (24 Params · Plucks)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L6",
  "desc": "Plucks",
  "formulaSub": "Algorithmus 1 (Plucks)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=3.6]",
  "color": "#48dbfb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 8,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.4,
    "mod_cross": 0.5,
    "mod_fb": 0.3,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.002,
    "env_dec": 0.9,
    "env_sus": 40,
    "env_rel": 1.5,
    "mod_env_dec": 0.2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 16,
    "mod_env_rel": 0.24,
    "flt_cutoff": 13500,
    "flt_reso": 2.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.7,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.6,
    "dI": 1.4,
    "atk": 0.002,
    "rel": 1.5,
    "customParam": 8.7,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.3,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.62,
        "env_rel": 2.7,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.3,
        "env_dec": 0.9
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.62,
        "env_rel": 2.7,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.45,
        "mod_env_dec": 0.08000000000000002,
        "env_sus": 12
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 3.3000000000000003
      }
    }
  ]
},
  {
  "id": "synth_117",
  "name": "L7: Staccato Metallic Chime Chord",
  "category": "Bank L (24 Params · Chords)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L7",
  "desc": "Chords",
  "formulaSub": "Algorithmus 1 (Chords)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=3.50, I_0=4.5]",
  "color": "#48dbfb",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3.5,
    "r3_ratio": 7,
    "r4_ratio": 10.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.5,
    "mod_dI": 1.8,
    "mod_cross": 0.7,
    "mod_fb": 0.4,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.002,
    "env_dec": 0.45,
    "env_sus": 20,
    "env_rel": 0.7,
    "mod_env_dec": 0.11,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.132,
    "flt_cutoff": 14000,
    "flt_reso": 2.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.775,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3.5,
    "I0": 4.5,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 0.7,
    "customParam": 8.775,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.4,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.26,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.52,
        "flt_reso": 3.5999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.5,
        "shape_drive": 1.4,
        "env_dec": 0.45
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.3,
        "mod_dI": 2.7,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.81,
        "env_rel": 1.26,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.225,
        "mod_env_dec": 0.044000000000000004,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.52,
        "flt_reso": 3.5999999999999996
      }
    }
  ]
},
  {
  "id": "synth_118",
  "name": "L8: Resonant Acid Squealer 2026",
  "category": "Bank L (24 Params · Acid)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L8",
  "desc": "Acid",
  "formulaSub": "Algorithmus 6 (Acid)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.00, I_0=5.5]",
  "color": "#48dbfb",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.5,
    "mod_dI": 2.6,
    "mod_cross": 1.2,
    "mod_fb": 1.9,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.2,
    "env_atk": 0.002,
    "env_dec": 0.35,
    "env_sus": 45,
    "env_rel": 0.5,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 18,
    "mod_env_rel": 0.12,
    "flt_cutoff": 5000,
    "flt_reso": 4.5,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.85,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 5.5,
    "dI": 2.6,
    "atk": 0.002,
    "rel": 0.5,
    "customParam": 8.85,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 3.2,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 4.16
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.5,
        "shape_drive": 5.760000000000001,
        "flt_reso": 6.75
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.5,
        "shape_drive": 3.2,
        "env_dec": 0.35
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.699999999999999,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 4.16
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.63,
        "env_rel": 0.9,
        "flt_cutoff": 3750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.175,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.5,
        "shape_drive": 5.760000000000001,
        "flt_reso": 6.75
      }
    }
  ]
},
  {
  "id": "synth_119",
  "name": "L9: Kawaii Future Bass Chord Wave",
  "category": "Bank L (24 Params · Future Bass)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L9",
  "desc": "Future Bass",
  "formulaSub": "Algorithmus 2 (Future Bass)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=1.00, I_0=4.2]",
  "color": "#48dbfb",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.003,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.9,
    "mod_cross": 0.8,
    "mod_fb": 0.7,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 0.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 0.02,
    "env_dec": 1,
    "env_sus": 80,
    "env_rel": 1.5,
    "mod_env_dec": 0.35,
    "mod_env_atk": 0.003,
    "mod_env_sus": 32,
    "mod_env_rel": 0.42,
    "flt_cutoff": 11000,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 8.924999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 3,
    "lfo": 0.25,
    "ratio": 1.003,
    "I0": 4.2,
    "dI": 1.9,
    "atk": 0.02,
    "rel": 1.5,
    "customParam": 8.924999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 1.8,
        "env_rel": 2.7,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.24,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 1
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.04,
        "env_dec": 1.8,
        "env_rel": 2.7,
        "flt_cutoff": 8250
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.5,
        "mod_env_dec": 0.13999999999999999,
        "env_sus": 24
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.1,
        "shape_drive": 3.24,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_120",
  "name": "L10: Sub-Bass Distortion Wall",
  "category": "Bank L (24 Params · Bässe)",
  "bank": "L",
  "bankLevel": 12,
  "paramCount": 24,
  "keyDisplay": "L10",
  "desc": "Bässe",
  "formulaSub": "Algorithmus 5 (Bässe)",
  "formulaLatex": "\\text{Algo } 5: [r_1=0.50, r_2=1.00, I_0=5.8]",
  "color": "#48dbfb",
  "algo_type": 5,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5.8,
    "mod_dI": 2.8,
    "mod_cross": 1.3,
    "mod_fb": 1.8,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 3.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.8,
    "env_atk": 0.003,
    "env_dec": 0.5,
    "env_sus": 70,
    "env_rel": 0.7,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 28,
    "mod_env_rel": 0.168,
    "flt_cutoff": 6000,
    "flt_reso": 3.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 5.8,
    "dI": 2.8,
    "atk": 0.003,
    "rel": 0.7,
    "customParam": 9,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.8,
        "shape_drive": 3.8,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.12,
        "mod_dI": 4.199999999999999,
        "shape_drive": 4.9399999999999995
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.7,
        "shape_drive": 6,
        "flt_reso": 5.4
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.8,
        "shape_drive": 3.8,
        "env_dec": 0.5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 8.12,
        "mod_dI": 4.199999999999999,
        "shape_drive": 4.9399999999999995
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 0.9,
        "env_rel": 1.26,
        "flt_cutoff": 4500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.25,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 21
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 5.7,
        "shape_drive": 6,
        "flt_reso": 5.4
      }
    }
  ]
},
  {
  "id": "synth_121",
  "name": "M1: Cosmic Masterwork: Genesis Drone",
  "category": "Bank M (24 Params · Masterwork)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M1",
  "desc": "Masterwork",
  "formulaSub": "Algorithmus 3 (Masterwork)",
  "formulaLatex": "\\text{Algo } 3: [r_1=1.00, r_2=1.00, I_0=3.2]",
  "color": "#ff9ff3",
  "algo_type": 3,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1.002,
    "r3_ratio": 2.004,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 3.2,
    "mod_dI": 1.4,
    "mod_cross": 0.7,
    "mod_fb": 0.6,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.5,
    "env_atk": 0.8,
    "env_dec": 5,
    "env_sus": 96,
    "env_rel": 8,
    "mod_env_dec": 3.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 38,
    "mod_env_rel": 4.2,
    "flt_cutoff": 10500,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.075,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1.002,
    "I0": 3.2,
    "dI": 1.4,
    "atk": 0.8,
    "rel": 8,
    "customParam": 9.075,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.5,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.4000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.2,
        "shape_drive": 1.5,
        "env_dec": 5
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 4.4799999999999995,
        "mod_dI": 2.0999999999999996,
        "shape_drive": 1.9500000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 1.6,
        "env_dec": 9,
        "env_rel": 14.4,
        "flt_cutoff": 7875
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 2.5,
        "mod_env_dec": 1.4000000000000001,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.9,
        "shape_drive": 2.7,
        "flt_reso": 3
      }
    }
  ]
},
  {
  "id": "synth_122",
  "name": "M2: Cosmic Masterwork: DX Rhodes Ultimate",
  "category": "Bank M (24 Params · E-Pianos)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M2",
  "desc": "E-Pianos",
  "formulaSub": "Algorithmus 1 (E-Pianos)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=14.00, I_0=4.0]",
  "color": "#ff9ff3",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 14,
    "r3_ratio": 1,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4,
    "mod_dI": 1.8,
    "mod_cross": 0.3,
    "mod_fb": 0.25,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.25,
    "env_atk": 0.002,
    "env_dec": 2.2,
    "env_sus": 48,
    "env_rel": 2.8,
    "mod_env_dec": 0.18,
    "mod_env_atk": 0.003,
    "mod_env_sus": 19,
    "mod_env_rel": 0.216,
    "flt_cutoff": 13000,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.15,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 14,
    "I0": 4,
    "dI": 1.8,
    "atk": 0.002,
    "rel": 2.8,
    "customParam": 9.15,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.25,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 1.625
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.9600000000000004,
        "env_rel": 5.04,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.072,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.25,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4,
        "shape_drive": 1.25,
        "env_dec": 2.2
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.6,
        "mod_dI": 2.7,
        "shape_drive": 1.625
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 3.9600000000000004,
        "env_rel": 5.04,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.1,
        "mod_env_dec": 0.072,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.25,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_123",
  "name": "M3: Cosmic Masterwork: Buchla Organic Mallet",
  "category": "Bank M (24 Params · Westcoast)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M3",
  "desc": "Westcoast",
  "formulaSub": "Algorithmus 5 (Westcoast)",
  "formulaLatex": "\\text{Algo } 5: [r_1=1.00, r_2=2.40, I_0=4.6]",
  "color": "#ff9ff3",
  "algo_type": 5,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2.4,
    "r3_ratio": 4.8,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.6,
    "mod_dI": 2,
    "mod_cross": 0.8,
    "mod_fb": 0.7,
    "algo_type": 5,
    "mod_skew": 0,
    "shape_fold": 4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.6,
    "env_atk": 0.002,
    "env_dec": 0.6,
    "env_sus": 20,
    "env_rel": 1.2,
    "mod_env_dec": 0.12,
    "mod_env_atk": 0.003,
    "mod_env_sus": 8,
    "mod_env_rel": 0.144,
    "flt_cutoff": 12500,
    "flt_reso": 2.8,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.225,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2.4,
    "I0": 4.6,
    "dI": 2,
    "atk": 0.002,
    "rel": 1.2,
    "customParam": 9.225,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.6,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.08,
        "env_rel": 2.16,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.5,
        "shape_drive": 4.680000000000001,
        "flt_reso": 4.199999999999999
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.6,
        "shape_drive": 2.6,
        "env_dec": 0.6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.4399999999999995,
        "mod_dI": 3,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 1.08,
        "env_rel": 2.16,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.3,
        "mod_env_dec": 0.048,
        "env_sus": 6
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 6.5,
        "shape_drive": 4.680000000000001,
        "flt_reso": 4.199999999999999
      }
    }
  ]
},
  {
  "id": "synth_124",
  "name": "M4: Cosmic Masterwork: Cathedral Organ 32'",
  "category": "Bank M (24 Params · Orgeln)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M4",
  "desc": "Orgeln",
  "formulaSub": "Algorithmus 3 (Orgeln)",
  "formulaLatex": "\\text{Algo } 3: [r_1=0.50, r_2=1.00, I_0=2.8]",
  "color": "#ff9ff3",
  "algo_type": 3,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.25,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 2.8,
    "mod_dI": 1,
    "mod_cross": 0.5,
    "mod_fb": 0.4,
    "algo_type": 3,
    "mod_skew": 0,
    "shape_fold": 0.1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.05,
    "env_dec": 3,
    "env_sus": 98,
    "env_rel": 4.5,
    "mod_env_dec": 2,
    "mod_env_atk": 0.003,
    "mod_env_sus": 39,
    "mod_env_rel": 2.4,
    "flt_cutoff": 13500,
    "flt_reso": 1.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.299999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 2.8,
    "dI": 1,
    "atk": 0.05,
    "rel": 4.5,
    "customParam": 9.299999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.3,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 2.0999999999999996
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 2.8,
        "shape_drive": 1.3,
        "env_dec": 3
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 3.9199999999999995,
        "mod_dI": 1.5,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.1,
        "env_dec": 5.4,
        "env_rel": 8.1,
        "flt_cutoff": 10125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 1.5,
        "mod_env_dec": 0.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.6,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 2.0999999999999996
      }
    }
  ]
},
  {
  "id": "synth_125",
  "name": "M5: Cosmic Masterwork: Acid 303 Screamer",
  "category": "Bank M (24 Params · Acid)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M5",
  "desc": "Acid",
  "formulaSub": "Algorithmus 6 (Acid)",
  "formulaLatex": "\\text{Algo } 6: [r_1=1.00, r_2=1.00, I_0=5.6]",
  "color": "#ff9ff3",
  "algo_type": 6,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 1,
    "r3_ratio": 2,
    "r4_ratio": 0.5,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.6,
    "mod_dI": 2.7,
    "mod_cross": 1.3,
    "mod_fb": 2,
    "algo_type": 6,
    "mod_skew": 0,
    "shape_fold": 2.4,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 3.4,
    "env_atk": 0.002,
    "env_dec": 0.36,
    "env_sus": 45,
    "env_rel": 0.5,
    "mod_env_dec": 0.1,
    "mod_env_atk": 0.003,
    "mod_env_sus": 18,
    "mod_env_rel": 0.12,
    "flt_cutoff": 4800,
    "flt_reso": 4.6,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.375,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 1,
    "I0": 5.6,
    "dI": 2.7,
    "atk": 0.002,
    "rel": 0.5,
    "customParam": 9.375,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.6,
        "shape_drive": 3.4,
        "env_dec": 0.36
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.839999999999999,
        "mod_dI": 4.050000000000001,
        "shape_drive": 4.42
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.648,
        "env_rel": 0.9,
        "flt_cutoff": 3600
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.18,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.9,
        "shape_drive": 6,
        "flt_reso": 6.8999999999999995
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.6,
        "shape_drive": 3.4,
        "env_dec": 0.36
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.839999999999999,
        "mod_dI": 4.050000000000001,
        "shape_drive": 4.42
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.648,
        "env_rel": 0.9,
        "flt_cutoff": 3600
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.18,
        "mod_env_dec": 0.04000000000000001,
        "env_sus": 14
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.9,
        "shape_drive": 6,
        "flt_reso": 6.8999999999999995
      }
    }
  ]
},
  {
  "id": "synth_126",
  "name": "M6: Cosmic Masterwork: Physical Sitar Ensemble",
  "category": "Bank M (24 Params · Saiten)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M6",
  "desc": "Saiten",
  "formulaSub": "Algorithmus 7 (Saiten)",
  "formulaLatex": "\\text{Algo } 7: [r_1=1.00, r_2=3.00, I_0=4.4]",
  "color": "#ff9ff3",
  "algo_type": 7,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 7,
    "r4_ratio": 1.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 4.4,
    "mod_dI": 1.8,
    "mod_cross": 0.8,
    "mod_fb": 0.5,
    "algo_type": 7,
    "mod_skew": 0,
    "shape_fold": 0.2,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.3,
    "env_atk": 0.003,
    "env_dec": 1.8,
    "env_sus": 35,
    "env_rel": 2.6,
    "mod_env_dec": 0.24,
    "mod_env_atk": 0.003,
    "mod_env_sus": 14,
    "mod_env_rel": 0.288,
    "flt_cutoff": 12000,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.45,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 4.4,
    "dI": 1.8,
    "atk": 0.003,
    "rel": 2.6,
    "customParam": 9.45,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.4,
        "shape_drive": 1.3,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.16,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 3.24,
        "env_rel": 4.680000000000001,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.096,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.4,
        "shape_drive": 1.3,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 6.16,
        "mod_dI": 2.7,
        "shape_drive": 1.6900000000000002
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 3.24,
        "env_rel": 4.680000000000001,
        "flt_cutoff": 9000
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.096,
        "env_sus": 11
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.7,
        "shape_drive": 2.3400000000000003,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_127",
  "name": "M7: Cosmic Masterwork: Deep Space Horizon",
  "category": "Bank M (24 Params · Deep Space)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M7",
  "desc": "Deep Space",
  "formulaSub": "Algorithmus 8 (Deep Space)",
  "formulaLatex": "\\text{Algo } 8: [r_1=0.50, r_2=0.50, I_0=4.2]",
  "color": "#ff9ff3",
  "algo_type": 8,
  "params": {
    "r1_ratio": 0.5,
    "r2_ratio": 0.501,
    "r3_ratio": 1,
    "r4_ratio": 0.25,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 4.2,
    "mod_dI": 1.9,
    "mod_cross": 1,
    "mod_fb": 1.1,
    "algo_type": 8,
    "mod_skew": 0,
    "shape_fold": 0.9,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.8,
    "env_atk": 1,
    "env_dec": 6,
    "env_sus": 98,
    "env_rel": 9,
    "mod_env_dec": 4.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 39,
    "mod_env_rel": 5.3999999999999995,
    "flt_cutoff": 5500,
    "flt_reso": 3,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.525,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 0.501,
    "I0": 4.2,
    "dI": 1.9,
    "atk": 1,
    "rel": 9,
    "customParam": 9.525,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 2,
        "env_dec": 10.8,
        "env_rel": 16.2,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 3,
        "mod_env_dec": 1.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.4,
        "shape_drive": 3.24,
        "flt_reso": 4.5
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 4.2,
        "shape_drive": 1.8,
        "env_dec": 6
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.88,
        "mod_dI": 2.8499999999999996,
        "shape_drive": 2.3400000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 2,
        "env_dec": 10.8,
        "env_rel": 16.2,
        "flt_cutoff": 4125
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 3,
        "mod_env_dec": 1.8,
        "env_sus": 29
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.4,
        "shape_drive": 3.24,
        "flt_reso": 4.5
      }
    }
  ]
},
  {
  "id": "synth_128",
  "name": "M8: Cosmic Masterwork: YM2612 Boss Theme Lead",
  "category": "Bank M (24 Params · Arcade Lead)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M8",
  "desc": "Arcade Lead",
  "formulaSub": "Algorithmus 4 (Arcade Lead)",
  "formulaLatex": "\\text{Algo } 4: [r_1=1.00, r_2=2.00, I_0=5.0]",
  "color": "#ff9ff3",
  "algo_type": 4,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 4,
    "r4_ratio": 1,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 5,
    "mod_dI": 2.2,
    "mod_cross": 1.1,
    "mod_fb": 1.4,
    "algo_type": 4,
    "mod_skew": 0,
    "shape_fold": 1,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.2,
    "env_atk": 0.003,
    "env_dec": 0.7,
    "env_sus": 78,
    "env_rel": 0.9,
    "mod_env_dec": 0.16,
    "mod_env_atk": 0.003,
    "mod_env_sus": 31,
    "mod_env_rel": 0.192,
    "flt_cutoff": 12500,
    "flt_reso": 3.2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 3000,
    "custom_math": 9.6,
    "op_wave": 2,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 5,
    "dI": 2.2,
    "atk": 0.003,
    "rel": 0.9,
    "customParam": 9.6,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.2,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 1.62,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.064,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.800000000000001
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5,
        "shape_drive": 2.2,
        "env_dec": 0.7
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7,
        "mod_dI": 3.3000000000000003,
        "shape_drive": 2.8600000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.006,
        "env_dec": 1.26,
        "env_rel": 1.62,
        "flt_cutoff": 9375
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.35,
        "mod_env_dec": 0.064,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 3.5,
        "shape_drive": 3.9600000000000004,
        "flt_reso": 4.800000000000001
      }
    }
  ]
},
  {
  "id": "synth_129",
  "name": "M9: Cosmic Masterwork: Hyperpop Bubble Lead",
  "category": "Bank M (24 Params · Hyperpop)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M9",
  "desc": "Hyperpop",
  "formulaSub": "Algorithmus 2 (Hyperpop)",
  "formulaLatex": "\\text{Algo } 2: [r_1=1.00, r_2=3.00, I_0=5.4]",
  "color": "#ff9ff3",
  "algo_type": 2,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 3,
    "r3_ratio": 6,
    "r4_ratio": 1,
    "op_detune": 0,
    "op_spread": 25,
    "mod_I0": 5.4,
    "mod_dI": 2.6,
    "mod_cross": 1.2,
    "mod_fb": 1.3,
    "algo_type": 2,
    "mod_skew": 0,
    "shape_fold": 1.6,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 2.6,
    "env_atk": 0.002,
    "env_dec": 0.55,
    "env_sus": 82,
    "env_rel": 0.8,
    "mod_env_dec": 0.14,
    "mod_env_atk": 0.003,
    "mod_env_sus": 33,
    "mod_env_rel": 0.168,
    "flt_cutoff": 14000,
    "flt_reso": 3.4,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.674999999999999,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 3,
    "I0": 5.4,
    "dI": 2.6,
    "atk": 0.002,
    "rel": 0.8,
    "customParam": 9.674999999999999,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.4,
        "shape_drive": 2.6,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.56,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.1,
        "shape_drive": 4.680000000000001,
        "flt_reso": 5.1
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 5.4,
        "shape_drive": 2.6,
        "env_dec": 0.55
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 7.56,
        "mod_dI": 3.9000000000000004,
        "shape_drive": 3.3800000000000003
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.004,
        "env_dec": 0.9900000000000001,
        "env_rel": 1.4400000000000002,
        "flt_cutoff": 10500
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.275,
        "mod_env_dec": 0.05600000000000001,
        "env_sus": 25
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 4.1,
        "shape_drive": 4.680000000000001,
        "flt_reso": 5.1
      }
    }
  ]
},
  {
  "id": "synth_130",
  "name": "M10: Cosmic Masterwork: 100% Controlled Omniverse",
  "category": "Bank M (24 Params · Masterwork)",
  "bank": "M",
  "bankLevel": 13,
  "paramCount": 24,
  "keyDisplay": "M10",
  "desc": "Masterwork",
  "formulaSub": "Algorithmus 1 (Masterwork)",
  "formulaLatex": "\\text{Algo } 1: [r_1=1.00, r_2=2.00, I_0=3.6]",
  "color": "#ff9ff3",
  "algo_type": 1,
  "params": {
    "r1_ratio": 1,
    "r2_ratio": 2,
    "r3_ratio": 3,
    "r4_ratio": 0.5,
    "op_detune": 3.5,
    "op_spread": 25,
    "mod_I0": 3.6,
    "mod_dI": 1.5,
    "mod_cross": 0.6,
    "mod_fb": 0.5,
    "algo_type": 1,
    "mod_skew": 0,
    "shape_fold": 0.3,
    "shape_morph": 0,
    "shape_bias": 0,
    "shape_drive": 1.4,
    "env_atk": 0.04,
    "env_dec": 1.8,
    "env_sus": 75,
    "env_rel": 2.5,
    "mod_env_dec": 0.5,
    "mod_env_atk": 0.003,
    "mod_env_sus": 30,
    "mod_env_rel": 0.6,
    "flt_cutoff": 13000,
    "flt_reso": 2,
    "key_scaling": 30,
    "space_pan": 50,
    "flt_envAmt": 0,
    "custom_math": 9.75,
    "op_wave": 0,
    "vol": 0.85,
    "oct": 4,
    "lfo": 0.25,
    "ratio": 2,
    "I0": 3.6,
    "dI": 1.5,
    "atk": 0.04,
    "rel": 2.5,
    "customParam": 9.75,
    "latch": false
  },
  "subPresets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.4,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.25,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 3.24,
        "env_rel": 4.5,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.2,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.52,
        "flt_reso": 3
      }
    }
  ],
  "presets": [
    {
      "name": "Default Pure",
      "params": {
        "mod_I0": 3.6,
        "shape_drive": 1.4,
        "env_dec": 1.8
      }
    },
    {
      "name": "Harmonic Boost",
      "params": {
        "mod_I0": 5.04,
        "mod_dI": 2.25,
        "shape_drive": 1.8199999999999998
      }
    },
    {
      "name": "Warm Ambient Tail",
      "params": {
        "env_atk": 0.08,
        "env_dec": 3.24,
        "env_rel": 4.5,
        "flt_cutoff": 9750
      }
    },
    {
      "name": "Punchy Attack Staccato",
      "params": {
        "env_atk": 0.002,
        "env_dec": 0.9,
        "mod_env_dec": 0.2,
        "env_sus": 23
      }
    },
    {
      "name": "Overdrive Fuzz",
      "params": {
        "shape_fold": 2.8,
        "shape_drive": 2.52,
        "flt_reso": 3
      }
    }
  ]
}
];

const SYNTH_PRESETS = SYNTH_DEFS;
