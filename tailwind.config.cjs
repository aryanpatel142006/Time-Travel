/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        gochi: ['"Gochi Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
}
