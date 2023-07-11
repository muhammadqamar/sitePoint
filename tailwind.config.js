/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      white_200: "#F1F1F1",
      white_300: "#E8E8E8",
      purple_200: "#7232FA",
      purple_300: "#8B54FF",
      purple_400: "#C9ADFF",
      purple_500: "  #EEE6FF",
      gray_300: "#ABABAB",
      gray_400: "#464646",
    },
    extend: {},
  },
  plugins: [],
}
