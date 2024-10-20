/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '7fr': '7fr',
    },
    fontFamily: {
        DMSans: ['DMSans', 'sans-serif'],
      },
    colors: {
      'purple-light': 'hsl(254, 88%, 90%)',
      'purple-medium': 'hsl(256, 67%, 59%)',

      'yellow-light': 'hsl(31, 66%, 93%)',
      'yellow-medium': 'hsl(39, 100%, 71%)',

      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 7%)'
    },
    },
  },
  plugins: [],
}
