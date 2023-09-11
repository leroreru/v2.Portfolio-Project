/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    container:{
      center : false,
      padding: {
        DEFAULT: '30px',
        lg:'40px'


    },
    },
    extend: {
      colors : {
        primary : '#3b82f6',
        secondary :'#0f172a',
        textColor : '#ffffff',
        colorZinc : '#27272a',
        colorWhite : '#ffffff'
      },
    },
  },
  plugins: [],
}

