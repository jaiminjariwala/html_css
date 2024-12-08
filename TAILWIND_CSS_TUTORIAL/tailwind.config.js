/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Matches all HTML files in the root folder
    "./src/**/*.js", // Matches all JS files inside the src folder (if any)
  ],
  theme: {
    extend: {
      screens: {
        "sm":"480px"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

