import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        surface: '#0d0d0d',
        'surface-light': '#161616',
        primary: '#D4A017',
        'primary-light': '#f0c040',
        'primary-dark': '#a07810',
        'primary-bright': '#ffd700',
        accent: '#1a1508',
        'text-primary': '#f0f0f0',
        'text-muted': '#888888',
        'text-dim': '#555555',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'Oswald', 'Impact', 'sans-serif'],
        heading: ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['var(--font-rajdhani)', 'Rajdhani', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 40px rgba(212, 160, 23, 0.5), 0 0 80px rgba(212, 160, 23, 0.2)',
        'gold-sm': '0 0 20px rgba(212, 160, 23, 0.35), 0 0 40px rgba(212, 160, 23, 0.12)',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'grain': 'grain 0.5s steps(10) infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
