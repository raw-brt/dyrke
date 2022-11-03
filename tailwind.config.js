/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          50: "#E9FBF6",
          100: "#D4F7EC",
          200: "#A9EFDA",
          300: "#7EE7C7",
          400: "#53DFB5",
          500: "#28D7A2",
          600: "#20AC82",
          700: "#188161",
          800: "#105641",
          900: "#082B20"
        }
      },
      fontFamily: {
        "sans": ["Public Sans", ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp")
  ],
}