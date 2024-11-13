/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': {'max': '600px'},
        'md':{'max': '800px'},
        'lg': {'max': '1200px'}

      }
    },
  },
  plugins: [],
}

