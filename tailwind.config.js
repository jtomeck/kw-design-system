// tailwind.config.js
module.exports = {
  content: [
    './_includes/*.html',
    './_guidelines/*.html',
    './_components/*.html',
    './_layouts/*.html',
    './_posts/*.html',
    './_pages/*.html',
    './assets/js/*.js'
  ],
  theme: {
    fontFamily: {
      'sans': 'Blinker, sans-serif',
      'serif': "'Zilla Slab', serif"
    },
    extend: {
      fontSize: {
        '2xs': '.6rem',
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
          'accent': '#62a4db',
          'accent-focus': '#2f87d0',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
