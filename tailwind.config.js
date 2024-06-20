/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#282929",
        "white-smoke": "#F6F6F6",
        "dark-gray": "#383838",
        orange: "#EC7133",
        gray: "#939393",
        "light-gray": "#BEBEBE",
      },
      fontFamily: {
        ptSans: ["PT+Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
