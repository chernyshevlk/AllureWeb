const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['qameta', ...defaultTheme.fontFamily.sans],
    },     
    fontWeight: {
      normal: 400,
      medium: 500,
      'extra-bold': 700,
      bold: 700,
      black: 700,
     },        
    colors: {
      gray: colors.coolGray,
      transparent: 'transparent',
      current: colors.blue,
      blue: colors.blue,
      white: colors.white,
      indigo: colors.green,
      red: colors.rose,
      yellow: colors.amber,      
    },
  
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
