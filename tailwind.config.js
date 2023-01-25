/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue' : '#79c8e8',
        'dark-blue' : '#288cdd',
        'textcut-black' : '#090909',
      },
      height: {
        '120': '120vh',
        '256': '256px',
      },
      width: {
        '256': '256px',
      },
    },
  },
  plugins: [],
}
