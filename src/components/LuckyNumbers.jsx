import React from 'react';

export default function LuckyNumbers({ numbers, delay = '0s' }) {
  return (
    <div
      className="fortune-card glow-border rounded-2xl p-6 sm:p-8 opacity-0 animate-card-in"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-3xl mb-2 block">🔢</span>
        <h3 className="font-cinzel text-xl font-bold text-gold mb-1">Lucky Numbers</h3>
        <p className="text-xs text-star-dim/60 font-quicksand tracking-wider uppercase">
          Your 2026 Celestial Numbers
        </p>
      </div>

      <div className="gold-divider mb-6" />

      {/* Lottery Balls */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {numbers.map((num, idx) => (
          <div
            key={num}
            className="lottery-ball w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 animate-card-in"
            style={{
              animationDelay: `calc(${delay} + ${idx * 0.08}s)`,
              animationFillMode: 'forwards',
            }}
          >
            <span className="font-cinzel font-bold text-navy text-sm sm:text-base">
              {num.toString().padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-star-dim/40 font-quicksand mt-6 italic">
        ✦ Divined from the confluence of your celestial signatures ✦
      </p>
    </div>
  );
}
