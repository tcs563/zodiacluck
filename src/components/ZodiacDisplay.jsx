import React from 'react';

function ZodiacCard({ sign, type, delay }) {
  return (
    <div
      className="fortune-card glow-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 opacity-0 animate-card-in"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {/* Type badge */}
      <span className="text-xs font-cinzel tracking-widest uppercase text-gold opacity-70 border border-gold/20 px-3 py-1 rounded-full">
        {type}
      </span>

      {/* Emoji */}
      <div className="text-6xl sm:text-7xl my-2 animate-float" style={{ animationDelay: delay }}>
        {sign.emoji}
      </div>

      {/* Name */}
      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold gold-shimmer-text">
        {sign.name}
      </h3>

      {/* Symbol if western */}
      {sign.symbol && (
        <span className="text-xl text-star/60">{sign.symbol}</span>
      )}

      {/* Trait */}
      <p className="text-sm text-star-dim font-quicksand font-medium tracking-wide">
        {sign.trait}
      </p>

      {/* Element */}
      <div className="flex items-center gap-2 mt-1">
        <span className="w-2 h-2 rounded-full bg-gold/60" />
        <span className="text-xs text-gold/60 font-quicksand uppercase tracking-widest">
          {sign.element} Element
        </span>
        <span className="w-2 h-2 rounded-full bg-gold/60" />
      </div>

      {/* Dates if available */}
      {sign.dates && (
        <span className="text-xs text-star-dim/60 font-quicksand">{sign.dates}</span>
      )}

      {/* Description if available */}
      {sign.description && (
        <p className="text-xs text-star-dim/70 font-quicksand leading-relaxed mt-1 max-w-xs">
          {sign.description}
        </p>
      )}
    </div>
  );
}

export default function ZodiacDisplay({ western, chinese, location, dob }) {
  const year = new Date(dob).getFullYear();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
        <p className="text-gold/60 font-quicksand text-sm tracking-widest uppercase mb-2">
          ✦ The Stars Speak For
        </p>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-star-white mb-1">
          Born in {year}
        </h2>
        {location && location !== 'The Cosmos' && (
          <p className="text-star-dim font-quicksand text-sm">
            📍 {location}
          </p>
        )}
      </div>

      {/* Zodiac Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <ZodiacCard sign={western} type="Western Zodiac" delay="0.1s" />
        <ZodiacCard sign={chinese} type="Chinese Zodiac" delay="0.3s" />
      </div>

      {/* Cosmic combination tagline */}
      <div
        className="text-center mt-8 opacity-0 animate-fade-up"
        style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
      >
        <p className="text-star-dim/70 font-quicksand text-sm italic">
          "The {western.name} and the {chinese.name} — a rare cosmic union that shapes your destiny in 2026"
        </p>
      </div>
    </div>
  );
}
