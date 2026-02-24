export const CHINESE_SIGNS = [
  {
    name: 'Rat',
    emoji: '🐀',
    element: 'Water',
    trait: 'Clever & Resourceful',
    description: 'Quick-witted, imaginative and charming. Rats are natural adaptors.',
  },
  {
    name: 'Ox',
    emoji: '🐂',
    element: 'Earth',
    trait: 'Diligent & Dependable',
    description: 'Hardworking, reliable and determined. The Ox embodies perseverance.',
  },
  {
    name: 'Tiger',
    emoji: '🐅',
    element: 'Wood',
    trait: 'Brave & Magnetic',
    description: 'Courageous, competitive and unpredictable. Tigers command attention.',
  },
  {
    name: 'Rabbit',
    emoji: '🐇',
    element: 'Wood',
    trait: 'Gentle & Elegant',
    description: 'Kind, tender and sensitive. Rabbits bring grace and peace.',
  },
  {
    name: 'Dragon',
    emoji: '🐉',
    element: 'Earth',
    trait: 'Powerful & Charismatic',
    description: 'Vital, ambitious and noble. The Dragon radiates cosmic power.',
  },
  {
    name: 'Snake',
    emoji: '🐍',
    element: 'Fire',
    trait: 'Wise & Intuitive',
    description: 'Thoughtful, introspective and refined. Snakes possess deep wisdom.',
  },
  {
    name: 'Horse',
    emoji: '🐎',
    element: 'Fire',
    trait: 'Energetic & Free',
    description: 'Animated, active and energetic. Horses love freedom above all.',
  },
  {
    name: 'Goat',
    emoji: '🐐',
    element: 'Earth',
    trait: 'Creative & Mild',
    description: 'Gentle, sympathetic and creative. Goats flourish in harmony.',
  },
  {
    name: 'Monkey',
    emoji: '🐒',
    element: 'Metal',
    trait: 'Clever & Playful',
    description: 'Sharp, smart and curious. Monkeys delight in ingenuity.',
  },
  {
    name: 'Rooster',
    emoji: '🐓',
    element: 'Metal',
    trait: 'Confident & Honest',
    description: 'Observant, hardworking and courageous. Roosters shine brightly.',
  },
  {
    name: 'Dog',
    emoji: '🐕',
    element: 'Earth',
    trait: 'Loyal & Faithful',
    description: 'Loyal, reliable and honest. Dogs are humanity\'s truest companions.',
  },
  {
    name: 'Pig',
    emoji: '🐖',
    element: 'Water',
    trait: 'Generous & Sincere',
    description: 'Diligent, compassionate and generous. Pigs bring good fortune.',
  },
];

/**
 * Chinese Zodiac year cycle starts from a known year.
 * Year 2020 = Rat (index 0 in cycle from 1924).
 * The 12-year cycle: Rat=0, Ox=1, Tiger=2, Rabbit=3, Dragon=4, Snake=5,
 * Horse=6, Goat=7, Monkey=8, Rooster=9, Dog=10, Pig=11
 *
 * Reference years (Rat years): 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020
 *
 * Note: Chinese New Year is in late Jan / early Feb.
 * For simplicity, we use a table of Chinese New Year dates for 1924-2043.
 */

// Chinese New Year dates (month, day) indexed by year offset from 1924
// Format: [year]: [month (1-indexed), day]
// We'll use a simplified approach: if birth month/day is before CNY of that year,
// use the previous year's zodiac.
const CNY_DATES = {
  1924: [2, 5],  1925: [1, 24], 1926: [2, 13], 1927: [2, 2],  1928: [1, 23],
  1929: [2, 10], 1930: [1, 30], 1931: [2, 17], 1932: [2, 6],  1933: [1, 26],
  1934: [2, 14], 1935: [2, 4],  1936: [1, 24], 1937: [2, 11], 1938: [1, 31],
  1939: [2, 19], 1940: [2, 8],  1941: [1, 27], 1942: [2, 15], 1943: [2, 5],
  1944: [1, 25], 1945: [2, 13], 1946: [2, 2],  1947: [1, 22], 1948: [2, 10],
  1949: [1, 29], 1950: [2, 17], 1951: [2, 6],  1952: [1, 27], 1953: [2, 14],
  1954: [2, 3],  1955: [1, 24], 1956: [2, 12], 1957: [1, 31], 1958: [2, 18],
  1959: [2, 8],  1960: [1, 28], 1961: [2, 15], 1962: [2, 5],  1963: [1, 25],
  1964: [2, 13], 1965: [2, 2],  1966: [1, 21], 1967: [2, 9],  1968: [1, 30],
  1969: [2, 17], 1970: [2, 6],  1971: [1, 27], 1972: [2, 15], 1973: [2, 3],
  1974: [1, 23], 1975: [2, 11], 1976: [1, 31], 1977: [2, 18], 1978: [2, 7],
  1979: [1, 28], 1980: [2, 16], 1981: [2, 5],  1982: [1, 25], 1983: [2, 13],
  1984: [2, 2],  1985: [2, 20], 1986: [2, 9],  1987: [1, 29], 1988: [2, 17],
  1989: [2, 6],  1990: [1, 27], 1991: [2, 15], 1992: [2, 4],  1993: [1, 23],
  1994: [2, 10], 1995: [1, 31], 1996: [2, 19], 1997: [2, 7],  1998: [1, 28],
  1999: [2, 16], 2000: [2, 5],  2001: [1, 24], 2002: [2, 12], 2003: [2, 1],
  2004: [1, 22], 2005: [2, 9],  2006: [1, 29], 2007: [2, 18], 2008: [2, 7],
  2009: [1, 26], 2010: [2, 14], 2011: [2, 3],  2012: [1, 23], 2013: [2, 10],
  2014: [1, 31], 2015: [2, 19], 2016: [2, 8],  2017: [1, 28], 2018: [2, 16],
  2019: [2, 5],  2020: [1, 25], 2021: [2, 12], 2022: [2, 1],  2023: [1, 22],
  2024: [2, 10], 2025: [1, 29], 2026: [2, 17], 2027: [2, 6],  2028: [1, 26],
  2029: [2, 13], 2030: [2, 3],  2031: [1, 23], 2032: [2, 11], 2033: [1, 31],
  2034: [2, 19], 2035: [2, 8],  2036: [1, 28], 2037: [2, 15], 2038: [2, 4],
  2039: [1, 24], 2040: [2, 12], 2041: [2, 1],  2042: [1, 22], 2043: [2, 10],
};

// Zodiac for year (Rat = 1924, 1936, 1948...)
// 1924 is a Rat year → index 0
const REFERENCE_YEAR = 1924;

function getChineseYear(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const cny = CNY_DATES[year];
  if (cny) {
    const [cnyMonth, cnyDay] = cny;
    // If born before CNY of this year, use previous year's zodiac
    if (month < cnyMonth || (month === cnyMonth && day < cnyDay)) {
      return year - 1;
    }
  } else {
    // Fallback: approximate (CNY ≈ Feb 1 for unknown years)
    if (month === 1 || (month === 2 && day < 10)) {
      return year - 1;
    }
  }
  return year;
}

/**
 * Get Chinese zodiac sign from a Date object
 */
export function getChineseZodiac(date) {
  const chineseYear = getChineseYear(date);
  const index = ((chineseYear - REFERENCE_YEAR) % 12 + 12) % 12;
  return CHINESE_SIGNS[index];
}
