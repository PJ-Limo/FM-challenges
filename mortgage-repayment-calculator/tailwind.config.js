/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'Lime': 'hsl(61, 70%, 52%)',
        'Red': 'hsl(4, 69%, 50%)',
      }
    },
  },
  plugins: [],
}

