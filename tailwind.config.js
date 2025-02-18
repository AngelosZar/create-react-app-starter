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
    },
  },
  plugins: [],
};
