/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '300px',
      lg: '700px',
    },
    colors: {
      'dark-blue': ' #2B3945',
      'dark-bg': '#333E48',
      'light-text': '#111517',
      'light-bg': '#FAFAFA',
      'dark-text': '#FFFFFF',
      'light-input': '#858585',
    },
    extend: {},
  },
  plugins: [],
}
