/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D4AB4',
        secondary: '#AF92F0',
        pink: '#F4338F',
        light: '#E5DEF9',
        black: '#1B0909',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
