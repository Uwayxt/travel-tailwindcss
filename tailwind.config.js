/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            "inter" : ['inter'],
        },
        colors: {
            "primary" : '#5D50C6',
            "secondary" : '#F85E9F',
            "orange" : '#FF5722',
            "yellow" : '#FACD49',
            "gray" : '#191825',
        }
    },
  },
  plugins: [],
}
