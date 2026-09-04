/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './produits/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dfe8ff',
          200: '#c1d1ff',
          300: '#93b0ff',
          400: '#6482ff',
          500: '#3e5bff',
          600: '#2438f0',
          700: '#1c2bc4',
          800: '#1c299b',
          900: '#1c297a',
          950: '#131a4a',
        },
        accent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(28, 41, 122, 0.25)',
      },
    },
  },
  plugins: [],
};
