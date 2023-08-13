/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./send.html",
    "./src/**/*.{js}"
  ],
  theme: {
    extend: {
      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "white": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "roboto": ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}