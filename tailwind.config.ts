import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        popp: 'var(--font-poppins)',
        inter: 'var(--font-inter)',
      },
      colors: {
        darkblue: {
          700: '#01223b',
          800: '#011422',
        },
        igreen: {
          700: '#00a651',
        },
        ired: {
          600: '#c31500',
          700: '#90070f',
          800: '#8A0000',
        },
      },
    },
  },
  plugins: [],
}
export default config
