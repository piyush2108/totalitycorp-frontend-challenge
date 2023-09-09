/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryRed: "#EC4E20" ,
        primaryBlack: "#18181B",
        secondaryWhite: "#F2F2F2"
      },
      fontFamily: {
        primary: "DM Sans",
        secondary: "Barlow"
      }
    },
  },
  plugins: [],
}