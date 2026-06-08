/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          950: '#0a0b0f',
          900: '#0f1117',
          850: '#151720',
          800: '#1a1d28',
          700: '#22262f',
          600: '#2a2d38',
          500: '#3a3e4a',
          400: '#5a5f6b',
          300: '#7a7f8b',
          200: '#9ca3af',
          100: '#c5c9d1',
          50: '#e0e3e8',
        },
        accent: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
          light: '#4ade80',
          muted: 'rgba(34, 197, 94, 0.15)',
          glow: 'rgba(34, 197, 94, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
