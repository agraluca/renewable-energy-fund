/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["Poppins_400Regular"],
        poppinsMedium: ["Poppins_500Medium"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
      },
      colors: {
        bg: {
          1: "#FFF",
        },
        primary: {
          1: "#3629B7",
          2: "#5655B9",
          4: "#F2F1F9",
        },
        purple: {
          4: "#E5E2FF",
        },
        text: {
          1: "#FFF",
          default: "#979797",
        },
        button: {
          disabled: "#CBCBCB",
        },
        neutral: {
          1: "#343434",
          4: "#CACACA",
          2: "#ECECEC",
          6: "#FFF",
        },
        green: {
          6: "#1CB999",
        },
      },
    },
  },
  plugins: [],
};
