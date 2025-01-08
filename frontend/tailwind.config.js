/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#280000',
          seconday: '#570000',
          Highlight: '#DE7C5A',
        }
      }
    },
  },
  plugins: [],
}