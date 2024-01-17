/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenHome: "#AFD8DA",
        grayLine: "#747474",
        blueAnt: "#1890FF",
      },
    },
  },
  plugins: [],
};
