import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#111111',
        'surface-light': '#1c1c1c',
        primary: '#D4A017',
        'primary-light': '#f0c040',
        'primary-dark': '#a07810',
        accent: '#1a1508',
        'text-primary': '#ffffff',
        'text-muted': '#999999',
        'text-dim': '#666666',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'Oswald', 'Impact', 'sans-serif'],
        heading: ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['var(--font-rajdhani)', 'Rajdhani', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212, 160, 23, 0.4), 0 0 60px rgba(212, 160, 23, 0.15)',
        'gold-sm': '0 0 15px rgba(212, 160, 23, 0.3), 0 0 30px rgba(212, 160, 23, 0.1)',
        'gold-intense': '0 0 40px rgba(212, 160, 23, 0.6), 0 0 80px rgba(212, 160, 23, 0.3)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}

export default config
