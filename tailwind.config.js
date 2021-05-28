module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-20': '-20',
        '-10': '-10',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
       }
    },
    colors: {
      bg: {
        main: '#14213d',
      },
      white: {
        primary: '#ffffff',
        secondary: ' #e5e5e5',
      },
      black: {
        primary: '#141012',
        full: '#000000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
