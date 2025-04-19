
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1B1B1B",
        saffron: "#D4A017",
        chili: "#8B1E1E",
        curry: "#3E5D42",
        bronze: "#A77C47",
        sandstone: "#D6C4A8",
        clay: "#A38C75"
      }
    },
  },
  plugins: [],
}
