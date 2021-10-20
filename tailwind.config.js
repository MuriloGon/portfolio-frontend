module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'nav-mobile': '60px 1fr 60px',
        'nav-desktop': 'auto 1fr'
      },
      animation: {
        "wiggle": "wiggle 1.25s linear infinite"
      },
      keyframes: {
        wiggle: {
          '10%': { transform: 'translateX(3px) rotate(2deg)' },
          '20%': { transform: 'translateX(-3px) rotate(-2deg)' },
          '30%': { transform: 'translateX(3px) rotate(2deg)' },
          '40%': { transform: 'translateX(-3px) rotate(-2deg)' },
          '50%': { transform: 'translateX(2px) rotate(1deg)' },
          '60%': { transform: 'translateX(-2px) rotate(-1deg)' },
          '70%': { transform: 'translateX(2px) rotate(1deg)' },
          '80%': { transform: 'translateX(-2px) rotate(-1deg)' },
          '90%': { transform: 'translateX(1px) rotate(0deg)' },
          '100%': { transform: 'translateX(-1px) rotate(0deg)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0%)' },
          '40%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
