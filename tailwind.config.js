/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'darkBg' : '#0f172a',

        'lightBg' : '#e2e8f0'
      },
  },
  plugins: [],
}
}