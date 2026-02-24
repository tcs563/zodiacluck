import { hashString, seededRng, seededUniqueIntegers } from './hashUtils.js';
import { FORTUNE_TEXTS, LUCKY_COLORS } from '../data/fortunes.js';

/**
 * Generate all fortune data from western + chinese zodiac names
 * Returns the same result for the same input (deterministic)
 */
export function generateFortune(westernName, chineseName) {
  const combo = `${westernName}::${chineseName}::2026`;
  const seed = hashString(combo);
  const rng = seededRng(seed);

  const pick = (arr) => {
    const idx = Math.floor(rng() * arr.length);
    return arr[idx];
  };

  const finance = pick(FORTUNE_TEXTS.finance);
  const work = pick(FORTUNE_TEXTS.work);
  const health = pick(FORTUNE_TEXTS.health);
  const overall = pick(FORTUNE_TEXTS.overall);

  const luckyColor = pick(LUCKY_COLORS);

  // 8 unique numbers from 1-49
  const numSeed = hashString(`${combo}::numbers`);
  const luckyNumbers = seededUniqueIntegers(numSeed, 8, 1, 49);

  return {
    finance,
    work,
    health,
    overall,
    luckyColor,
    luckyNumbers,
  };
}
