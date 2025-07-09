/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // <-- Add this line to enable dark mode with the 'dark' class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mbts: {
          blue: '#1D3557',       // Navy Blue
          blueHover: '#457B9D',  // Lighter Blue for hover
          orange: '#f85924',     // Main Orange
          orangeHover: '#d13602',// Darker Orange for hover
          light: '#F1FAEE',
          lightmore: '#051a38',
          gray: '#A8A8A8',
          dark: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
};
