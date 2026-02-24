/**
 * Simple deterministic hash function
 * Returns a positive integer from any string input
 */
export function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Seeded pseudo-random number generator (LCG)
 * Returns a function that produces values in [0, 1)
 */
export function seededRng(seed) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 4294967296;
  };
}

/**
 * Pick n unique integers from [min, max] using a seeded RNG
 */
export function seededUniqueIntegers(seed, count, min, max) {
  const rng = seededRng(seed);
  const pool = [];
  for (let i = min; i <= max; i++) pool.push(i);

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count).sort((a, b) => a - b);
}

/**
 * Pick an item from an array deterministically
 */
export function seededPick(arr, seed) {
  const idx = Math.abs(seed) % arr.length;
  return arr[idx];
}

/**
 * Pick an item based on a value in [0, 1)
 */
export function pickByFraction(arr, fraction) {
  const idx = Math.floor(fraction * arr.length);
  return arr[Math.min(idx, arr.length - 1)];
}
