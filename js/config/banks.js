"use strict";

const BANKS = [
  {
    id: "A",
    name: "Bank A: Pure Sine & Einstieg (4 Params)",
    color: "#38c7ff",
    offset: 0,
    level: 1,
    paramCount: 4,
    complexityLabel: "Stufe 1 · 4 Parameter (Einstieg: Ratio, Index, Attack, Release)",
    visibleParams: ["r2_ratio", "mod_I0", "env_atk", "env_rel"]
  },
  {
    id: "B",
    name: "Bank B: CCRMA & Harmonik (6 Params)",
    color: "#00f2fe",
    offset: 10,
    level: 2,
    paramCount: 6,
    complexityLabel: "Stufe 2 · 6 Parameter (+ Obertöne & Dynamik-Index)",
    visibleParams: ["r2_ratio", "r3_ratio", "mod_I0", "mod_dI", "env_atk", "env_rel"]
  },
  {
    id: "C",
    name: "Bank C: DX7 & 80s Icons (8 Params)",
    color: "#00c6fb",
    offset: 20,
    level: 3,
    paramCount: 8,
    complexityLabel: "Stufe 3 · 8 Parameter (+ Träger & Voll-ADSR Hüllkurve)",
    visibleParams: ["r1_ratio", "r2_ratio", "mod_I0", "mod_dI", "env_atk", "env_dec", "env_sus", "env_rel"]
  },
  {
    id: "D",
    name: "Bank D: YM2612 & 16-Bit Arcade (10 Params)",
    color: "#ffd200",
    offset: 30,
    level: 4,
    paramCount: 10,
    complexityLabel: "Stufe 4 · 10 Parameter (+ Feedback & Drive Verzerrung)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "mod_I0", "mod_dI", "mod_fb", "shape_drive", "env_atk", "env_dec", "env_rel"]
  },
  {
    id: "E",
    name: "Bank E: World Acoustic & Saiten (12 Params)",
    color: "#ffa502",
    offset: 40,
    level: 5,
    paramCount: 12,
    complexityLabel: "Stufe 5 · 12 Parameter (+ Formant-Filter & Resonanz Q)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "mod_I0", "mod_dI", "mod_fb", "flt_cutoff", "flt_reso", "env_atk", "env_dec", "env_sus", "env_rel"]
  },
  {
    id: "F",
    name: "Bank F: Cinematic & Ambient Drones (14 Params)",
    color: "#8fd3f4",
    offset: 50,
    level: 6,
    paramCount: 14,
    complexityLabel: "Stufe 6 · 14 Parameter (+ Sub/Air r4, Detune, Spread & 3D Pan)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread", "mod_I0", "mod_dI", "flt_cutoff", "flt_reso", "space_pan", "env_atk", "env_dec", "env_rel"]
  },
  {
    id: "G",
    name: "Bank G: Buchla & Organic Perc (15 Params)",
    color: "#2ed573",
    offset: 60,
    level: 7,
    paramCount: 15,
    complexityLabel: "Stufe 7 · 15 Parameter (+ Chebyshev Wavefold & Filter-Env Sweep)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "mod_I0", "mod_dI", "mod_fb", "shape_fold", "flt_cutoff", "flt_reso", "flt_envAmt", "env_atk", "env_dec", "env_rel", "space_pan"]
  },
  {
    id: "H",
    name: "Bank H: Modular & Acid FX (16 Params)",
    color: "#ff007f",
    offset: 70,
    level: 8,
    paramCount: 16,
    complexityLabel: "Stufe 8 · 16 Parameter (+ Cross-Modulation I3→2 & Diode Squelch)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "mod_I0", "mod_dI", "mod_cross", "mod_fb", "shape_fold", "shape_drive", "flt_cutoff", "flt_reso", "flt_envAmt", "env_atk", "env_dec"]
  },
  {
    id: "I",
    name: "Bank I: Exotik & Chaos (18 Params)",
    color: "#ff4757",
    offset: 80,
    level: 9,
    paramCount: 18,
    complexityLabel: "Stufe 9 · 18 Parameter (+ Nichtlineare DGL & Physik-Kern)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread", "mod_I0", "mod_dI", "mod_cross", "mod_fb", "shape_fold", "shape_drive", "flt_cutoff", "flt_reso", "env_atk", "env_dec", "env_rel", "custom_math"]
  },
  {
    id: "J",
    name: "Bank J: Generative Kinetic (20 Params)",
    color: "#ffa502",
    offset: 90,
    level: 10,
    paramCount: 20,
    complexityLabel: "Stufe 10 · 20 Parameter (+ Quadratur-Phase θ & Doppler-Orbit)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread", "mod_I0", "mod_dI", "mod_cross", "mod_fb", "mod_skew", "shape_fold", "shape_morph", "shape_bias", "flt_cutoff", "flt_reso", "flt_envAmt", "space_pan", "env_atk", "custom_math"]
  },
  {
    id: "K",
    name: "Bank K: Cyberpunk & Dark Electro (22 Params)",
    color: "#e056fd",
    offset: 100,
    level: 11,
    paramCount: 22,
    complexityLabel: "Stufe 11 · 22 Parameter (+ Heavy Overdrive & Sub-Noise)",
    visibleParams: ["r1_ratio", "r2_ratio", "r3_ratio", "r4_ratio", "op_detune", "op_spread", "mod_I0", "mod_dI", "mod_cross", "mod_fb", "mod_skew", "shape_fold", "shape_morph", "shape_bias", "shape_drive", "flt_cutoff", "flt_reso", "flt_envAmt", "space_pan", "env_atk", "env_dec", "env_rel"]
  },
  {
    id: "L",
    name: "Bank L: Cosmic Deep Space (24 Params)",
    color: "#48dbfb",
    offset: 110,
    level: 12,
    paramCount: 24,
    complexityLabel: "Stufe 12 · 24 Parameter (Vollständige Matrix)",
    visibleParams: null
  },
  {
    id: "M",
    name: "Bank M: Hyperpop & Future Bass (24 Params)",
    color: "#ff9ff3",
    offset: 120,
    level: 13,
    paramCount: 24,
    complexityLabel: "Stufe 13 · 24 Parameter (Maximale Matrix-Tiefe)",
    visibleParams: null
  }
];

let currentBankId = "A";