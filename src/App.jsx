import React, { useState, useRef, useEffect } from 'react';
import StarBackground from './components/StarBackground.jsx';
import InputForm from './components/InputForm.jsx';
import ZodiacDisplay from './components/ZodiacDisplay.jsx';
import FortuneCard from './components/FortuneCard.jsx';
import LuckyNumbers from './components/LuckyNumbers.jsx';
import LuckyColor from './components/LuckyColor.jsx';
import { getWesternZodiac } from './utils/westernZodiac.js';
import { getChineseZodiac } from './utils/chineseZodiac.js';
import { generateFortune } from './utils/fortuneGenerator.js';

export default function App() {
  const [result, setResult] = useState(null);
  const resultsRef = useRef(null);

  function handleReveal({ dob, location }) {
    const date = new Date(dob + 'T12:00:00'); // Noon to avoid timezone issues
    const western = getWesternZodiac(date);
    const chinese = getChineseZodiac(date);
    const fortune = generateFortune(western.name, chinese.name);

    setResult({ dob, location, date, western, chinese, fortune });
  }

  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [result]);

  function handleReset() {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="relative min-h-screen">
      {/* Animated starfield background */}
      <StarBackground />

      {/* Mystic gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(45, 27, 105, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(45, 27, 105, 0.3) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* ─── HERO / HEADER ─── */}
        <header className="text-center px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          {/* Constellation decoration */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-gold/40 text-sm animate-twinkle">✦</span>
            <span className="text-gold/60 text-base animate-twinkle-slow">✦</span>
            <span className="text-gold text-xl animate-twinkle-fast">✦</span>
            <span className="text-gold/60 text-base animate-twinkle-slow" style={{ animationDelay: '1s' }}>✦</span>
            <span className="text-gold/40 text-sm animate-twinkle" style={{ animationDelay: '0.5s' }}>✦</span>
          </div>

          {/* Main title */}
          <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-black mb-3 leading-tight">
            <span className="gold-shimmer-text">Zodiac</span>
            <span className="text-star-white">Luck</span>
          </h1>

          {/* Subtitle */}
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-gold/60 mb-6">
            ✦ Ancient Wisdom · Celestial Fortune · 2026 ✦
          </p>

          {/* Tagline */}
          <p className="font-quicksand text-star-dim/80 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Discover what the universe has written in the stars for you this year through the sacred union of Eastern and Western celestial wisdom.
          </p>
        </header>

        {/* ─── INPUT SECTION ─── */}
        {!result && (
          <section className="px-6 pb-20 max-w-2xl mx-auto">
            <div
              className="fortune-card glow-border rounded-3xl p-8 sm:p-10"
            >
              <InputForm onReveal={handleReveal} />
            </div>
          </section>
        )}

        {/* ─── RESULTS SECTION ─── */}
        {result && (
          <section ref={resultsRef} className="px-4 sm:px-6 pb-20 max-w-4xl mx-auto space-y-12">

            {/* Zodiac Signs */}
            <ZodiacDisplay
              western={result.western}
              chinese={result.chinese}
              location={result.location}
              dob={result.dob}
            />

            {/* Section Divider */}
            <div className="flex items-center gap-4">
              <div className="gold-divider flex-1" />
              <span className="font-cinzel text-gold text-sm tracking-widest uppercase whitespace-nowrap">
                ✦ Your Fortune for 2026 ✦
              </span>
              <div className="gold-divider flex-1" />
            </div>

            {/* Fortune Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FortuneCard category="finance"  fortune={result.fortune.finance}  delay="0.1s" />
              <FortuneCard category="work"     fortune={result.fortune.work}     delay="0.25s" />
              <FortuneCard category="health"   fortune={result.fortune.health}   delay="0.4s" />
              <FortuneCard category="overall"  fortune={result.fortune.overall}  delay="0.55s" />
            </div>

            {/* Lucky Items Divider */}
            <div className="flex items-center gap-4">
              <div className="gold-divider flex-1" />
              <span className="font-cinzel text-gold text-sm tracking-widest uppercase whitespace-nowrap">
                ✦ Lucky Omens ✦
              </span>
              <div className="gold-divider flex-1" />
            </div>

            {/* Lucky Color & Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LuckyColor  color={result.fortune.luckyColor}    delay="0.7s" />
              <LuckyNumbers numbers={result.fortune.luckyNumbers} delay="0.85s" />
            </div>

            {/* Reset Button */}
            <div
              className="text-center pb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="gold-divider w-16" />
                <span className="text-gold text-xl">✦</span>
                <div className="gold-divider w-16" />
              </div>
              <p className="text-star-dim/50 font-quicksand text-sm mb-6 italic">
                "May the stars guide your path and fortune follow your footsteps."
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl border border-gold/30 text-gold/80 hover:border-gold/60 hover:text-gold hover:bg-gold/5 transition-all duration-300 font-cinzel text-sm tracking-widest uppercase"
              >
                ✦ Read Another Fortune ✦
              </button>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="text-center pb-8 px-6">
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-star-dim/30 font-quicksand text-xs">
            ZodiacLuck ✦ Celestial Fortune for 2026 ✦ For entertainment purposes
          </p>
        </footer>
      </div>
    </div>
  );
}
