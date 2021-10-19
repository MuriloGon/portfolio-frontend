module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'nav-mobile': '60px 1fr 60px',
        'nav-desktop': 'auto 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
