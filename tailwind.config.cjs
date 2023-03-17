/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        "light-orange": "#F0D0AA",
        "lemon-chiffon": "#FFF2C5",
          "Feldgrau": "#3b5249",
          "rose-ebony": "#63474D",
          "raisin-black": {
            100:'#F7F3F5',
            200:'#DECED6',
            300:'#C6A9B8',
            400:'#AD859A',
            500:'#93627B',
            600:'#6E495C',
            700:'#49313E',
            800:'#25181F',
            900:'#0C080A',
          },
      },
      fontFamily: {
        sans: ['Sono']
      },
    },
  },
  plugins: [],
}
