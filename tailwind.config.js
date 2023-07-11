/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#efefef",
        primary: "#f25a1a",
        primaryDark: "#00B0FF",
      },
    },
  },
  plugins: [],
}

