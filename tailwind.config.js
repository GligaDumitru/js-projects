module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow:{
          250:'#f6de1d'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
