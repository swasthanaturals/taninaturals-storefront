module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['The Castle Elizah', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#BF8549"
        },
        secondary: {
          DEFAULT: "#2B3741"
        },
        background: {
          DEFAULT: "#F2EFE8"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
