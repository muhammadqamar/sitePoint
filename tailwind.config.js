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
      gray_500: "#E6E6E6",
      gray_600: "#D5D5D5",
    },
    boxShadow: {
      lgShadow:
        " 0px 2.201359510421753px 5.538156986236572px 0px rgba(0, 0, 0, 0.00), 0px 5.118332862854004px 12.876648902893066px 0px rgba(0, 0, 0, 0.00), 0px 9.191340446472168px 23.123476028442383px 0px rgba(0, 0, 0, 0.00), 0px 15.254220962524414px 38.376407623291016px 0px rgba(0, 0, 0, 0.01), 0px 25.130813598632812px 63.223838806152344px 0px rgba(0, 0, 0, 0.03), 0px 43.92137908935547px 110.49694061279297px 0px rgba(0, 0, 0, 0.07), 0px 95px 239px 0px rgba(0, 0, 0, 0.16);",
    },
    backgroundImage: {
      RGBImage: "url(/images/purple-RGB.png)",
      bgGradient:
        "linear-gradient(180deg, rgba(114, 50, 250, 0.00) 0%, rgba(114, 50, 250, 0.06) 50%, rgba(255, 255, 255, 0.12) 100%)",
    },

    screens: {
      xsm: "351px",
      sm: "640px",
      // @media (min-width: 640px) { ... }
      md: "768px",
      // @media (min-width: 768px) { ... }
      lg: "1024px",
      // @media (min-width: 1024px) { ... }
      xl: "	1280px",
      // @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
}
