/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Matches all HTML files in the root folder
    "./src/**/*.js", // Matches all JS files inside the src folder (if any)
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      spacing: {
        15: "3.65rem" // Custom top value (15 * 0.24rem = 3.65rem)
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '2.5px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}

