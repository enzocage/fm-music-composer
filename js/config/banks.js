"use strict";

const BANKS = [
  { id: "A", name: "Bank A: Exotik & Chaos (1–10)", color: "#ff4757", offset: 0 },
  { id: "B", name: "Bank B: Klassik & Labor (11–20)", color: "#38c7ff", offset: 10 },
  { id: "C", name: "Bank C: DX7 & 80s Icons (21–30)", color: "#00f2fe", offset: 20 },
  { id: "D", name: "Bank D: YM2612 & Arcade (31–40)", color: "#00c6fb", offset: 30 },
  { id: "E", name: "Bank E: Cinematic Drones (41–50)", color: "#8fd3f4", offset: 40 },
  { id: "F", name: "Bank F: World Acoustic (51–60)", color: "#ffd200", offset: 50 },
  { id: "G", name: "Bank G: Modular & FX (61–70)", color: "#ff007f", offset: 60 },
  { id: "H", name: "Bank H: Buchla & Organic Perc (71–80)", color: "#2ed573", offset: 70 },
  { id: "I", name: "Bank I: Microsound & Glitch FX (81–90)", color: "#a29bfe", offset: 80 },
  { id: "J", name: "Bank J: Generative Kinetic (91–100)", color: "#ffa502", offset: 90 }
];

let currentBankId = "A";