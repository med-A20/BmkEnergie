/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue : "#0080ff",
        white : "#FFFFFF",
        yellow1 : "#FFE69A",
        yellow2 : "#FFE61B"
    }
    },
  },
  plugins: [],
}
