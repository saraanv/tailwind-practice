// const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors : {
        my : {
          50 : "rgba (255,0,0,0.5)" ,
          100 : "rgba (255,0,0,1)" 
        } 
      }
    },
  },
  plugins: [],
}

