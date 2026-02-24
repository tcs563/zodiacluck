export const WESTERN_SIGNS = [
  {
    name: 'Aries',
    symbol: '♈',
    emoji: '🐏',
    element: 'Fire',
    dates: 'Mar 21 – Apr 19',
    trait: 'Bold & Pioneering',
  },
  {
    name: 'Taurus',
    symbol: '♉',
    emoji: '🐂',
    element: 'Earth',
    dates: 'Apr 20 – May 20',
    trait: 'Steadfast & Abundant',
  },
  {
    name: 'Gemini',
    symbol: '♊',
    emoji: '👯',
    element: 'Air',
    dates: 'May 21 – Jun 20',
    trait: 'Curious & Versatile',
  },
  {
    name: 'Cancer',
    symbol: '♋',
    emoji: '🦀',
    element: 'Water',
    dates: 'Jun 21 – Jul 22',
    trait: 'Intuitive & Nurturing',
  },
  {
    name: 'Leo',
    symbol: '♌',
    emoji: '🦁',
    element: 'Fire',
    dates: 'Jul 23 – Aug 22',
    trait: 'Radiant & Majestic',
  },
  {
    name: 'Virgo',
    symbol: '♍',
    emoji: '🌾',
    element: 'Earth',
    dates: 'Aug 23 – Sep 22',
    trait: 'Precise & Devoted',
  },
  {
    name: 'Libra',
    symbol: '♎',
    emoji: '⚖️',
    element: 'Air',
    dates: 'Sep 23 – Oct 22',
    trait: 'Harmonious & Just',
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    emoji: '🦂',
    element: 'Water',
    dates: 'Oct 23 – Nov 21',
    trait: 'Intense & Transformative',
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    emoji: '🏹',
    element: 'Fire',
    dates: 'Nov 22 – Dec 21',
    trait: 'Adventurous & Philosophical',
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    emoji: '🐐',
    element: 'Earth',
    dates: 'Dec 22 – Jan 19',
    trait: 'Disciplined & Ambitious',
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    emoji: '🏺',
    element: 'Air',
    dates: 'Jan 20 – Feb 18',
    trait: 'Visionary & Humanitarian',
  },
  {
    name: 'Pisces',
    symbol: '♓',
    emoji: '🐟',
    element: 'Water',
    dates: 'Feb 19 – Mar 20',
    trait: 'Mystical & Compassionate',
  },
];

/**
 * Get Western zodiac sign from a Date object
 */
export function getWesternZodiac(date) {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return WESTERN_SIGNS[0]; // Aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return WESTERN_SIGNS[1]; // Taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return WESTERN_SIGNS[2]; // Gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return WESTERN_SIGNS[3]; // Cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return WESTERN_SIGNS[4]; // Leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return WESTERN_SIGNS[5]; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return WESTERN_SIGNS[6]; // Libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return WESTERN_SIGNS[7]; // Scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return WESTERN_SIGNS[8]; // Sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return WESTERN_SIGNS[9]; // Capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return WESTERN_SIGNS[10]; // Aquarius
  return WESTERN_SIGNS[11]; // Pisces
}
