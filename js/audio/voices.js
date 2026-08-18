"use strict";

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
