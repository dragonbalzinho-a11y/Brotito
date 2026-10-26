/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          bg: '#d1e2d3',
          50: '#eef5ef',
          100: '#dfebe0',
          200: '#c9ddca',
          300: '#aacbab',
          400: '#86a988',
          500: '#6b8d6e',
          600: '#557357',
          700: '#436045',
          800: '#374d39',
          900: '#2c3f2e',
        },
        forest: '#4a6b4d',
        olive: '#6b7d52',
        terracotta: {
          DEFAULT: '#c87f5a',
          dark: '#a8623f',
          light: '#e0a07a',
        },
        cream: '#faf6ee',
        blush: '#f4b8b8',
      },
      fontFamily: {
        hand: ['Caveat', 'cursive'],
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(67, 96, 69, 0.18)',
        card: '0 4px 18px rgba(67, 96, 69, 0.12)',
      },
    },
  },
  plugins: [],
};
