/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "rgba(43, 121, 46, 1)",
        "secondary" : "rgba(35, 147, 213, 1)"
      }
    },
  },
  plugins: [],
}