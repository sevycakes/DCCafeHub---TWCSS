/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dcblack: "#000",
        dcwhite: "#fff",
        dcbrown: "#b97d73",
        dcdbrown: "#390700",
        dcbgray: "#faf7f2",
        dclgray: "#ffffff",
      },
      fontFamily: {
        'rub': ["Rubik", "sans-serif"],
        'mon': ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'banner': "url(../dist/img/bannerImage.jpg)",
      }
    },
  },
  plugins: [],
}

