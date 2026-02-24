import React from 'react';

export default function LuckyColor({ color, delay = '0s' }) {
  return (
    <div
      className="fortune-card glow-border rounded-2xl p-6 sm:p-8 opacity-0 animate-card-in"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-3xl mb-2 block">🎨</span>
        <h3 className="font-cinzel text-xl font-bold text-gold mb-1">Lucky Colour</h3>
        <p className="text-xs text-star-dim/60 font-quicksand tracking-wider uppercase">
          Your Colour of Fortune for 2026
        </p>
      </div>

      <div className="gold-divider mb-6" />

      {/* Color Swatch */}
      <div className="flex flex-col items-center gap-4">
        {/* Large Swatch */}
        <div
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-2xl border-4 border-white/10 animate-glow-pulse"
          style={{
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25), transparent 60%), ${color.hex}`,
            boxShadow: `0 0 30px ${color.hex}60, 0 0 60px ${color.hex}30, 0 8px 32px rgba(0,0,0,0.4)`,
          }}
        />

        {/* Color Name */}
        <div className="text-center">
          <h4 className="font-cinzel text-2xl font-bold" style={{ color: color.hex }}>
            {color.name}
          </h4>
          <p className="text-xs text-star-dim/60 font-quicksand mt-1 tracking-widest uppercase">
            {color.hex}
          </p>
        </div>

        {/* Meaning */}
        <div
          className="rounded-xl px-5 py-3 border text-center"
          style={{
            background: `${color.hex}15`,
            borderColor: `${color.hex}30`,
          }}
        >
          <p className="font-quicksand text-sm font-semibold" style={{ color: color.hex }}>
            ✦ {color.meaning} ✦
          </p>
        </div>

        {/* Small Swatches Row - decorative */}
        <div className="flex gap-2 mt-2">
          {[0.3, 0.6, 1, 0.6, 0.3].map((opacity, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color.hex, opacity }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-star-dim/40 font-quicksand mt-6 italic">
        ✦ Wear or surround yourself with this colour to amplify your fortune ✦
      </p>
    </div>
  );
}
