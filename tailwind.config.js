module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/header.jpg')",
        'break': "url('./images/fixed-bg.jpg')",

      },
      height:{
        '90' : '80vh',
        'card' : '250px'
      },
      width: {
        'card' : '250px'
      },
      minWidth:{
        'card' : '250px'

      }
    },

  },
  plugins: [require("tailwind-scrollbar")],
}