const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: 500,
      },
      colors: {
        primary: colors.gray,
        dark: colors.black,
        light: colors.white,
      },
    },
  },
  plugins: [],
};
