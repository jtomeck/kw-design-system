// tailwind.config.js
module.exports = {
  content: [
    './_includes/*.html',
    './_guidelines/*.html',
    './_components/*.html',
    './_layouts/*.html',
    './_posts/*.html',
    './_pages/*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'sans': 'Blinker, sans-serif',
      'serif': "'Zilla Slab', serif"
    },
    extend: {
      fontSize: {
        '2xs': '.6rem',
        '6xl': '3.75rem',
      },
      transitionProperty: {
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
        'top': 'top'
      },
    },
  },

  // add daisyUI plugin
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        'kw-design-system': {
          'primary': '#0068c7',
          'primary-focus': '#00559e',
          'primary-content': '#ffffff',
          'secondary': '#3eae2b',
          'secondary-focus': '#2f8b23',
          'secondary-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#f6f8fa',
          'base-200': '#e7ebf2',
          'base-300': '#dce3ec',
          'base-content': '#3d4451',
          'info': '#C6DCF1',
          'info': '#4d95d8',
          'success': '#D0EBCC',
          'success-content': '#78c66b',
          'warning': '#FFF1C0',
          'warning-content': '#DBC063',
          'error': '#FFD1D4',
          'error-content': '#D8525B',

          "--rounded-box": "0", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
        },
      },
    ],
  },
}
