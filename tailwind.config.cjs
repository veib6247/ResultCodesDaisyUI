/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  // add daisyUI plugin
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  // daisyUI config
  daisyui: {
    themes: ['dracula'],
  },
}
