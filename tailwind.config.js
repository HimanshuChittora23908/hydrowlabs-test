module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'error': "#FFBDBD",
        'form-label': "#63B4FC",
      },
      backgroundSize: {
        '100': '100%',
      },
      fontSize: {
        '2xs': '0.6rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
