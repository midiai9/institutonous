import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#1BA0D7',
        navy: '#14164F',
        magenta: '#E6194B',
        yellow: '#FFC800',
        sky: '#DCEBF5',
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 22, 79, 0.18)',
        card: '0 8px 30px -10px rgba(20, 22, 79, 0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config
