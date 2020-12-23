const colors = require('tailwindcss/colors')
module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    fontFamily: {
      'sans': 'Blinker, sans-serif',
      'serif': "'Zilla Slab', serif"
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.coolGray,
        accent: colors.lime,
      },
      fontSize: {
        '2xs': '.6rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover','focus'],
    }
  },
  plugins: [],
};
