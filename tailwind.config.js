/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vault: {
          bg:        '#0D1B2A',
          panel:     '#0F2236',
          border:    '#1E3A5F',
          gold:      '#FFD700',
          'gold-dim':'#B8960C',
          red:       '#FF4444',
        },
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        gold:  '0 0 12px rgba(255,215,0,0.45), 0 0 24px rgba(255,215,0,0.2)',
        'gold-lg': '0 0 20px rgba(255,215,0,0.6), 0 0 40px rgba(255,215,0,0.25)',
        red:   '0 0 12px rgba(255,68,68,0.45)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.85' },
        },
        pulse_gold: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(255,215,0,0.45)' },
          '50%':      { boxShadow: '0 0 28px rgba(255,215,0,0.75)' },
        },
      },
      animation: {
        flicker:    'flicker 3s ease-in-out infinite',
        pulse_gold: 'pulse_gold 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
