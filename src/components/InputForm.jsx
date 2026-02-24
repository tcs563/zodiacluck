import React, { useState } from 'react';

export default function InputForm({ onReveal }) {
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!dob) {
      setError('Please enter your date of birth to unveil the stars.');
      return;
    }

    setLoading(true);
    // Brief dramatic pause for effect
    setTimeout(() => {
      setLoading(false);
      onReveal({ dob, location: location || 'The Cosmos' });
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative top ornament */}
      <div className="flex items-center justify-center mb-8">
        <div className="gold-divider flex-1" />
        <span className="text-gold text-2xl mx-4">✦</span>
        <div className="gold-divider flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date of Birth */}
        <div className="space-y-2">
          <label
            htmlFor="dob"
            className="block text-sm font-semibold tracking-widest uppercase text-gold opacity-80 font-cinzel"
          >
            ✦ Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className="mystical-input w-full px-5 py-4 rounded-xl text-star-white text-base"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-sm font-semibold tracking-widest uppercase text-gold opacity-80 font-cinzel"
          >
            ✦ Your Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country (e.g. Kuala Lumpur, Malaysia)"
            className="mystical-input w-full px-5 py-4 rounded-xl text-star-white text-base"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center font-quicksand">{error}</p>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-reveal w-full py-5 rounded-xl text-base font-bold tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="inline-block w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                Consulting the Stars…
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-sparkle">✨</span>
                Reveal My Fortune
                <span className="animate-sparkle">✨</span>
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Decorative bottom ornament */}
      <div className="flex items-center justify-center mt-8">
        <div className="gold-divider flex-1" />
        <span className="text-gold text-2xl mx-4">✦</span>
        <div className="gold-divider flex-1" />
      </div>
    </div>
  );
}
