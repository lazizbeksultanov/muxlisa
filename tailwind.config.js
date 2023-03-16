/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/homePageBg.png')",
      },
      animation: {
        "spin-slow": 'spin 42s linear infinite;',
        "spin-slow2": 'spin 50s linear infinite;',
      },
    },
  },
  plugins: [],
}
