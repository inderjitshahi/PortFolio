/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code': "url('/components/assets/Home/shapeDark-bg.png')",
        'light-code': "url('/components/assets/Home/shapeDark-bg.png')",
       })
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  darkMode: "class",
}
