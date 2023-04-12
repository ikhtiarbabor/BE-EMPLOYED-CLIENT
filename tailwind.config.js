/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#7E90FE',

          secondary: '#d264ea',

          accent: '#757575',

          neutral: '#302B3B',

          'base-100': 'rgba(255,255,255,255)',

          info: '#8CD6E8',

          success: '#5AE792',

          warning: '#C18D15',

          error: '#ED3169',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
