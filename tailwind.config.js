/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0e27',
        gold: '#d4af37',
        'gold-light': '#f0d060',
        'gold-dark': '#a07820',
        purple: {
          cosmic: '#2d1b69',
          deep: '#1a0f3e',
          mid: '#4a2c9e',
        },
        star: '#f0e6d3',
        'star-dim': '#8a7a6a',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out infinite',
        'twinkle-fast': 'twinkle 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'card-in': 'cardIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.7), 0 0 50px rgba(212, 175, 55, 0.3)' },
        },
        cardIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '25%': { transform: 'scale(1.2) rotate(15deg)', opacity: '0.8' },
          '75%': { transform: 'scale(0.9) rotate(-15deg)', opacity: '0.9' },
        },
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
        'mystic-gradient': 'radial-gradient(ellipse at top, #2d1b69 0%, #0a0e27 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(45,27,105,0.6) 0%, rgba(10,14,39,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
