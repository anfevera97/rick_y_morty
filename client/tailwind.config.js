/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarilloNav: "#e8e83890",
        amarilloName: "#e8e83899",
        amarilloLogin:"#e8e83895" ,
        verde: "#5cad4a",
        verdeDetail: "#5cad4a90",
        azul: "rgb(51, 145, 162)",
      },
      fontFamily: {
        rick: ["rick", "sans-serif"],
      },
    },
    
  },
  plugins: [],
}

