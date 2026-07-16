/**
 * Soft metallic chimes for string cloth interaction.
 * Country-tuned timbres (synthesized — no sample files):
 *  - China  → deep bronze temple / bianzhong-like bells
 *  - Japan  → bright glass furin (風鈴) wind chimes
 *  - Vietnam → warm mid bronze, soft temple-bell body
 *  - Kazakhstan → open steppe metal / temir-komuz twang
 *  - Russia → deeper church / kolokol bells
 *  - France → bright café / carillon sparkle
 *  - India → warm temple bronze / ghanta body
 *  - UK → soft handbell / village peal
 *  - Norway → clear cold glass / icy partials
 *  - Italy → warm mid bronze / campanile ring
 *  - USA → bright porch / handbell sparkle
 *  - Brazil → warm mid bronze / festa ring
 *  - Iran → deep courtyard / metallic windcatcher hum
 */

/** @typedef {{ freqs: number[], partials: { ratio: number, gain: number }[], duration: number, attack: number, peak: number, droop: number, noiseDur: number, noiseGain: number, noiseQ: number, noiseMul: number, shelfHz: number, shelfGain: number, minIntervalMs: number }} ChimeProfile */

/** @type {Record<string, ChimeProfile>} */
export const COUNTRY_CHIMES = {
  // Lower bronze bells — longer sustain, darker partials
  china: {
    freqs: [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25],
    partials: [
      { ratio: 1.0, gain: 0.62 },
      { ratio: 1.5, gain: 0.12 },
      { ratio: 2.0, gain: 0.2 },
      { ratio: 2.76, gain: 0.22 },
      { ratio: 4.07, gain: 0.06 }
    ],
    duration: 1.45,
    attack: 0.018,
    peak: 0.2,
    droop: 0.988,
    noiseDur: 0.05,
    noiseGain: 0.06,
    noiseQ: 2.5,
    noiseMul: 1.6,
    shelfHz: 1200,
    shelfGain: 1,
    minIntervalMs: 70
  },
  // High crystalline furin — short, sparkly, glassy
  japan: {
    freqs: [659.25, 783.99, 880.0, 987.77, 1046.5, 1174.7, 1318.5, 1568.0],
    partials: [
      { ratio: 1.0, gain: 0.45 },
      { ratio: 2.0, gain: 0.28 },
      { ratio: 3.01, gain: 0.18 },
      { ratio: 4.2, gain: 0.1 },
      { ratio: 6.7, gain: 0.05 }
    ],
    duration: 0.85,
    attack: 0.004,
    peak: 0.16,
    droop: 0.996,
    noiseDur: 0.025,
    noiseGain: 0.12,
    noiseQ: 8,
    noiseMul: 3.4,
    shelfHz: 2800,
    shelfGain: 6,
    minIntervalMs: 42
  },
  // Warm mid bronze — rounder body, gentle shimmer
  vietnam: {
    freqs: [349.23, 392.0, 440.0, 523.25, 587.33, 659.25, 698.46, 784.0],
    partials: [
      { ratio: 1.0, gain: 0.58 },
      { ratio: 2.0, gain: 0.22 },
      { ratio: 2.4, gain: 0.16 },
      { ratio: 3.6, gain: 0.1 },
      { ratio: 5.0, gain: 0.05 }
    ],
    duration: 1.15,
    attack: 0.01,
    peak: 0.18,
    droop: 0.991,
    noiseDur: 0.035,
    noiseGain: 0.08,
    noiseQ: 4,
    noiseMul: 2.1,
    shelfHz: 1600,
    shelfGain: 3,
    minIntervalMs: 55
  },
  // Kazakhstan — open steppe metal / temir-komuz-ish twang
  kazakhstan: {
    freqs: [311.13, 369.99, 415.3, 466.16, 554.37, 622.25, 739.99, 830.61],
    partials: [
      { ratio: 1.0, gain: 0.5 },
      { ratio: 1.48, gain: 0.22 },
      { ratio: 2.15, gain: 0.2 },
      { ratio: 3.3, gain: 0.12 },
      { ratio: 4.8, gain: 0.06 }
    ],
    duration: 1.05,
    attack: 0.006,
    peak: 0.17,
    droop: 0.994,
    noiseDur: 0.03,
    noiseGain: 0.1,
    noiseQ: 5.5,
    noiseMul: 2.6,
    shelfHz: 2000,
    shelfGain: 4,
    minIntervalMs: 48
  },
  // Russia — deeper church / kolokol bells
  russia: {
    freqs: [196.0, 246.94, 293.66, 349.23, 392.0, 466.16, 523.25, 587.33],
    partials: [
      { ratio: 1.0, gain: 0.65 },
      { ratio: 2.0, gain: 0.25 },
      { ratio: 3.01, gain: 0.14 },
      { ratio: 4.2, gain: 0.08 },
      { ratio: 5.4, gain: 0.04 }
    ],
    duration: 1.6,
    attack: 0.02,
    peak: 0.22,
    droop: 0.986,
    noiseDur: 0.055,
    noiseGain: 0.05,
    noiseQ: 2.2,
    noiseMul: 1.4,
    shelfHz: 900,
    shelfGain: 0.5,
    minIntervalMs: 75
  },
  // France — bright café carillon / light sparkle
  france: {
    freqs: [392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 987.77],
    partials: [
      { ratio: 1.0, gain: 0.48 },
      { ratio: 2.0, gain: 0.26 },
      { ratio: 3.0, gain: 0.16 },
      { ratio: 4.5, gain: 0.1 },
      { ratio: 6.0, gain: 0.05 }
    ],
    duration: 1.0,
    attack: 0.006,
    peak: 0.17,
    droop: 0.993,
    noiseDur: 0.028,
    noiseGain: 0.1,
    noiseQ: 6,
    noiseMul: 2.8,
    shelfHz: 2200,
    shelfGain: 4.5,
    minIntervalMs: 48
  },
  // India — warm temple bronze / ghanta body
  india: {
    freqs: [220.0, 261.63, 311.13, 349.23, 392.0, 466.16, 523.25, 622.25],
    partials: [
      { ratio: 1.0, gain: 0.6 },
      { ratio: 1.5, gain: 0.18 },
      { ratio: 2.0, gain: 0.2 },
      { ratio: 2.85, gain: 0.14 },
      { ratio: 4.1, gain: 0.06 }
    ],
    duration: 1.35,
    attack: 0.014,
    peak: 0.2,
    droop: 0.989,
    noiseDur: 0.045,
    noiseGain: 0.07,
    noiseQ: 3.2,
    noiseMul: 1.8,
    shelfHz: 1400,
    shelfGain: 2,
    minIntervalMs: 62
  },
  // UK — soft handbell / village peal
  uk: {
    freqs: [293.66, 329.63, 392.0, 440.0, 493.88, 587.33, 659.25, 783.99],
    partials: [
      { ratio: 1.0, gain: 0.55 },
      { ratio: 2.0, gain: 0.24 },
      { ratio: 2.5, gain: 0.14 },
      { ratio: 3.8, gain: 0.1 },
      { ratio: 5.2, gain: 0.05 }
    ],
    duration: 1.2,
    attack: 0.01,
    peak: 0.18,
    droop: 0.991,
    noiseDur: 0.032,
    noiseGain: 0.08,
    noiseQ: 4.5,
    noiseMul: 2.2,
    shelfHz: 1700,
    shelfGain: 3,
    minIntervalMs: 55
  },
  // Norway — clear cold glass / icy partials
  norway: {
    freqs: [523.25, 587.33, 659.25, 783.99, 880.0, 987.77, 1174.7, 1318.5],
    partials: [
      { ratio: 1.0, gain: 0.42 },
      { ratio: 2.0, gain: 0.3 },
      { ratio: 3.2, gain: 0.16 },
      { ratio: 5.0, gain: 0.1 },
      { ratio: 7.1, gain: 0.05 }
    ],
    duration: 0.9,
    attack: 0.004,
    peak: 0.15,
    droop: 0.995,
    noiseDur: 0.022,
    noiseGain: 0.11,
    noiseQ: 7.5,
    noiseMul: 3.2,
    shelfHz: 2600,
    shelfGain: 5.5,
    minIntervalMs: 44
  },
  // Italy — warm mid bronze / campanile ring
  italy: {
    freqs: [246.94, 293.66, 349.23, 392.0, 466.16, 523.25, 587.33, 698.46],
    partials: [
      { ratio: 1.0, gain: 0.58 },
      { ratio: 2.0, gain: 0.24 },
      { ratio: 2.7, gain: 0.15 },
      { ratio: 3.9, gain: 0.1 },
      { ratio: 5.1, gain: 0.05 }
    ],
    duration: 1.4,
    attack: 0.016,
    peak: 0.2,
    droop: 0.988,
    noiseDur: 0.04,
    noiseGain: 0.065,
    noiseQ: 3,
    noiseMul: 1.7,
    shelfHz: 1300,
    shelfGain: 1.5,
    minIntervalMs: 65
  },
  // USA — bright porch / handbell sparkle
  usa: {
    freqs: [392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 987.77],
    partials: [
      { ratio: 1.0, gain: 0.5 },
      { ratio: 2.0, gain: 0.28 },
      { ratio: 3.0, gain: 0.14 },
      { ratio: 4.2, gain: 0.08 },
      { ratio: 6.0, gain: 0.04 }
    ],
    duration: 1.05,
    attack: 0.008,
    peak: 0.17,
    droop: 0.992,
    noiseDur: 0.028,
    noiseGain: 0.09,
    noiseQ: 5.5,
    noiseMul: 2.4,
    shelfHz: 2200,
    shelfGain: 4,
    minIntervalMs: 50
  },
  // Brazil — warm mid bronze / festa ring
  brazil: {
    freqs: [293.66, 349.23, 392.0, 466.16, 523.25, 587.33, 698.46, 783.99],
    partials: [
      { ratio: 1.0, gain: 0.55 },
      { ratio: 2.0, gain: 0.26 },
      { ratio: 2.8, gain: 0.14 },
      { ratio: 3.7, gain: 0.09 },
      { ratio: 5.0, gain: 0.05 }
    ],
    duration: 1.25,
    attack: 0.012,
    peak: 0.19,
    droop: 0.989,
    noiseDur: 0.036,
    noiseGain: 0.075,
    noiseQ: 3.5,
    noiseMul: 1.9,
    shelfHz: 1600,
    shelfGain: 2.5,
    minIntervalMs: 58
  },
  // Iran — deep courtyard / metallic windcatcher hum
  iran: {
    freqs: [220.0, 261.63, 311.13, 349.23, 415.3, 466.16, 523.25, 622.25],
    partials: [
      { ratio: 1.0, gain: 0.6 },
      { ratio: 1.5, gain: 0.14 },
      { ratio: 2.0, gain: 0.22 },
      { ratio: 2.9, gain: 0.12 },
      { ratio: 4.5, gain: 0.06 }
    ],
    duration: 1.5,
    attack: 0.02,
    peak: 0.2,
    droop: 0.987,
    noiseDur: 0.045,
    noiseGain: 0.055,
    noiseQ: 2.8,
    noiseMul: 1.5,
    shelfHz: 1100,
    shelfGain: 1.2,
    minIntervalMs: 68
  }
};

const FALLBACK = COUNTRY_CHIMES.china;

export class StringChimes {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.shelf = null;
    this.enabled = true;
    this.volume = 0.28;
    this.countryId = "china";
    this.profile = FALLBACK;
    this.lastStrikeAt = 0;
    this.activeVoices = 0;
    this.maxVoices = 10;
    this.lastParticleId = -1;
    this.prevX = 0;
    this.prevY = 0;
  }

  setCountry(id) {
    this.countryId = id;
    this.profile = COUNTRY_CHIMES[id] || FALLBACK;
    this.lastParticleId = -1;
    if (this.shelf) {
      this.shelf.frequency.value = this.profile.shelfHz;
      this.shelf.gain.value = this.profile.shelfGain;
    }
  }

  async ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;

      this.shelf = this.ctx.createBiquadFilter();
      this.shelf.type = "highshelf";
      this.shelf.frequency.value = this.profile.shelfHz;
      this.shelf.gain.value = this.profile.shelfGain;

      this.master.connect(this.shelf);
      this.shelf.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      try {
        await this.ctx.resume();
      } catch (_) {
        return false;
      }
    }
    return true;
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.master) this.master.gain.value = this.volume;
  }

  /**
   * @param {{ x: number, y: number, particle?: { id: number }, gridW?: number, intensity?: number, force?: boolean }} opts
   */
  async strike(opts = {}) {
    if (!this.enabled) return;
    const ok = await this.ensure();
    if (!ok || !this.ctx) return;

    const profile = this.profile;
    const now = performance.now();
    const force = !!opts.force;
    if (!force && now - this.lastStrikeAt < profile.minIntervalMs) return;
    if (this.activeVoices >= this.maxVoices) return;

    const particle = opts.particle;
    if (particle && particle.id === this.lastParticleId && !force) return;

    const dx = (opts.x ?? 0) - this.prevX;
    const dy = (opts.y ?? 0) - this.prevY;
    const speed = Math.hypot(dx, dy);
    this.prevX = opts.x ?? this.prevX;
    this.prevY = opts.y ?? this.prevY;

    let intensity = opts.intensity;
    if (intensity == null) {
      intensity = Math.min(1, 0.25 + speed / 40);
    }
    if (!force && intensity < 0.2 && speed < 1.5) return;

    this.lastStrikeAt = now;
    if (particle) this.lastParticleId = particle.id;

    const freqs = profile.freqs;
    const pitchT =
      particle && opts.gridW > 1
        ? (particle.id % opts.gridW) / (opts.gridW - 1)
        : Math.random();
    const idx = Math.min(
      freqs.length - 1,
      Math.max(
        0,
        Math.round(pitchT * (freqs.length - 1) + (Math.random() - 0.5))
      )
    );
    const freq = freqs[idx] * (0.985 + Math.random() * 0.03);

    this.#playBell(freq, intensity, profile);
  }

  #playBell(freq, intensity, profile) {
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const duration = profile.duration * (0.75 + intensity * 0.5);

    const voice = ctx.createGain();
    const peak = profile.peak * (0.55 + intensity * 0.7);
    voice.gain.setValueAtTime(0.0001, t);
    voice.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + profile.attack);
    voice.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    voice.connect(this.master);

    this.activeVoices += 1;
    window.setTimeout(() => {
      this.activeVoices = Math.max(0, this.activeVoices - 1);
    }, (duration + 0.05) * 1000);

    for (const { ratio, gain } of profile.partials) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      const f0 = freq * ratio;
      osc.frequency.setValueAtTime(f0, t);
      osc.frequency.exponentialRampToValueAtTime(
        Math.max(20, f0 * profile.droop),
        t + duration
      );
      g.gain.value = gain;
      osc.connect(g);
      g.connect(voice);
      osc.start(t);
      osc.stop(t + duration + 0.02);
    }

    const noiseDur = profile.noiseDur;
    const buffer = ctx.createBuffer(
      1,
      Math.max(1, Math.floor(ctx.sampleRate * noiseDur)),
      ctx.sampleRate
    );
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = freq * profile.noiseMul;
    noiseFilter.Q.value = profile.noiseQ;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(
      Math.max(0.0001, profile.noiseGain * intensity),
      t
    );
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + noiseDur);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(voice);
    noise.start(t);
    noise.stop(t + noiseDur + 0.01);
  }
}

export const chimes = new StringChimes();
