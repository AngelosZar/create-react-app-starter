/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Outfit', 'sans-serif'],
        primary: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        1440: '1440px',
      },
      colors: {
        body: {
          dark: '#0B1423',
          // light: '#F5F5EF',
          light: '#f1f1f1',
        },
        text: {
          dark: '#000',
          white: '#fff',
          grey: '#5e5e5e',
          blue: '#003049',
        },
        blue: {
          1: '#003049',
          2: '#014e76',
          3: '#118ab2',
        },
      },
    },
  },
  plugins: [],
};
