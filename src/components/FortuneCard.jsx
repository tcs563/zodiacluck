import React from 'react';

const CATEGORY_META = {
  finance: {
    icon: '💰',
    title: 'Finance',
    subtitle: 'Wealth & Prosperity',
    accentColor: 'rgba(212, 175, 55, 0.4)',
  },
  work: {
    icon: '💼',
    title: 'Career',
    subtitle: 'Work & Ambition',
    accentColor: 'rgba(139, 92, 246, 0.4)',
  },
  health: {
    icon: '❤️',
    title: 'Health',
    subtitle: 'Vitality & Wellbeing',
    accentColor: 'rgba(16, 185, 129, 0.4)',
  },
  overall: {
    icon: '🌟',
    title: 'Overall',
    subtitle: 'Life Fortune & Destiny',
    accentColor: 'rgba(248, 113, 113, 0.3)',
  },
};

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-lg sm:text-xl transition-all duration-300 ${
            i < rating ? 'star-filled' : 'star-empty'
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-xs text-gold/60 font-quicksand">
        {rating}/5
      </span>
    </div>
  );
}

export default function FortuneCard({ category, fortune, delay }) {
  const meta = CATEGORY_META[category];
  if (!meta || !fortune) return null;

  return (
    <div
      className="fortune-card glow-border rounded-2xl p-6 sm:p-7 opacity-0 animate-card-in"
      style={{
        animationDelay: delay,
        animationFillMode: 'forwards',
        borderTopColor: meta.accentColor,
        borderTopWidth: '2px',
      }}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{meta.icon}</span>
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold">{meta.title}</h3>
            <p className="text-xs text-star-dim/60 font-quicksand tracking-wider uppercase">
              {meta.subtitle}
            </p>
          </div>
        </div>
        <StarRating rating={fortune.rating} />
      </div>

      {/* Divider */}
      <div className="gold-divider mb-4" />

      {/* Fortune Text */}
      <p className="text-star-white/85 font-quicksand text-sm sm:text-base leading-relaxed mb-5">
        {fortune.text}
      </p>

      {/* Lucky Tip */}
      <div
        className="rounded-xl px-4 py-3 border border-gold/15"
        style={{ background: 'rgba(212, 175, 55, 0.05)' }}
      >
        <p className="text-gold/80 font-quicksand text-xs sm:text-sm font-medium leading-relaxed">
          {fortune.tip}
        </p>
      </div>
    </div>
  );
}
