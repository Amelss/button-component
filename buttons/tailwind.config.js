/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: "Noto Sans",
        ubuntu: "Ubuntu Mono",
      },
      colors: {
        textGrey: "#3F3F3F",
        grey: "#E0E0E0",
        hoverGrey: "#AEAEAE",
        textBlue: "#3D5AFE",
        hoverBlue: "#DCE5FF",
        disabledGrey: "#9E9E9E",
        secondary: "#455A64",
        danger: "#D32F2F",
        darkBlue: "#0039CB",
        hoverSecondary: "#1C313A",
        hoverDanger: "#9A0007",
        textLightGrey: "#828282",
      },
    },
  },
  plugins: [],
};
