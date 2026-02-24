# ZodiacLuck — Product Requirements Document

## Overview
A single-page web app where users enter their **Date of Birth** and **Location** to receive fortune predictions based on both **Chinese Zodiac** and **Western Zodiac** signs.

## Tech Stack
- **Vite + React** (single page app)
- **Tailwind CSS** for styling
- **Dark theme** by default
- No backend needed — all zodiac logic runs client-side

## Design Direction (MUST FOLLOW — frontend-design skill)
- **Aesthetic**: Mystical, celestial, art-deco meets cosmic. Think gold foil on deep navy/black. Constellations, sacred geometry patterns.
- **Typography**: Use Google Fonts — pick something like "Cinzel" for headings (regal, mystical) and "Raleway" or "Quicksand" for body. NO Inter, Roboto, Arial.
- **Color Palette**: Deep navy (#0a0e27), rich gold (#d4af37), cosmic purple (#2d1b69), star white (#f0e6d3). CSS variables.
- **Animations**: Staggered reveal animations on fortune cards. Subtle shimmer/glow effects on gold elements. Stars twinkling in background.
- **Background**: Animated starfield or constellation pattern. Subtle gradient mesh. NOT a flat solid color.
- **Layout**: Centered, card-based. Input section at top, fortune results below with beautiful card grid.
- **Mobile responsive** — must work perfectly on phone screens.

## Features

### Input Section
1. **Date of Birth** — date picker input
2. **Location** — text input (city/country, used for thematic flavor text only — no API needed)

### Zodiac Detection (client-side logic)
From DOB, determine:
- **Western Zodiac Sign** (Aries, Taurus, etc.) with date ranges
- **Chinese Zodiac Animal** (Rat, Ox, Tiger, etc.) based on lunar year (use standard year mapping)
- Display both signs with their symbols/emojis

### Fortune Predictions for 2026
Generate fortune text based on the combination of both zodiacs. Use a seeded deterministic approach (hash of zodiac combo) so same input = same output. Fortunes should feel mystical and personalized.

**Categories (each gets its own beautiful card):**
1. **💰 Finance** — money, investments, career earnings
2. **💼 Work** — career, professional growth, opportunities
3. **❤️ Health** — physical, mental wellness
4. **🌟 Overall** — general life fortune, summary

Each fortune card should have:
- A fortune rating (1-5 stars or similar visual)
- 2-3 sentences of fortune text
- A lucky tip/advice

### Lucky Items
5. **🎨 Favourite Color for the Year** — display with a color swatch
6. **🔢 Favourite Numbers** — 8 unique numbers from 1-49 (deterministic from zodiac combo, displayed as lottery-style balls)

### UX Flow
1. User lands on beautiful mystical landing page
2. Enters DOB and location
3. Clicks "Reveal My Fortune" (with sparkle animation on button)
4. Page smoothly scrolls/transitions to show:
   - Both zodiac signs (Chinese + Western) with visuals
   - Fortune cards animate in one by one (staggered)
   - Lucky color and numbers at the bottom
5. Option to "Try Another" / reset

## GitHub Pages Deployment
- Include GitHub Actions workflow at `.github/workflows/deploy.yml`
- Use Vite's GitHub Pages deployment pattern
- Base URL: `/zodiacluck/`

## File Structure
```
zodiacluck/
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── InputForm.jsx
│   │   ├── ZodiacDisplay.jsx
│   │   ├── FortuneCard.jsx
│   │   ├── LuckyNumbers.jsx
│   │   ├── LuckyColor.jsx
│   │   └── StarBackground.jsx
│   ├── utils/
│   │   ├── westernZodiac.js
│   │   ├── chineseZodiac.js
│   │   ├── fortuneGenerator.js
│   │   └── hashUtils.js
│   └── data/
│       └── fortunes.js
└── README.md
```

## IMPORTANT
- ALL zodiac logic must be correct (proper date ranges for western, proper year mappings for Chinese zodiac)
- Numbers must be 8 UNIQUE numbers from 1-49
- Dark theme, mobile-friendly, NO generic AI aesthetics
- Make it visually STUNNING — this is a showcase app
