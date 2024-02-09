/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#F9F5E8",
        orange: "#E17153",
        green: "#00715D"
      },
      fontFamily:{
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}