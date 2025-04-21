/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1B1B1B', // Background
        saffron: '#D4A017',  // Primary Accent
        chili: '#8B1E1E',    // Secondary Accent
        curry: '#3E5D42',    // Highlight / CTA
        bronze: '#A77C47',   // Luxury Accent
        sandstone: '#D6C4A8',// Text / Body
        clay: '#A38C75'      // Secondary Text
      },
    },
  },
  plugins: [],
};