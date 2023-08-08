/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    100: "#EEE6FF",
    200: "#DCCAFF",
    300: "#C9ADFF",
    400: "#A679FF",
    500: "#9864FF",
    600: "#8A4FFF",
    700: "#7232FA",
    800: "#4A1FA5",
    900: "#170A33",
  },
  success: {
    400: "#81C784",
    500: "#4CAF50",
    600: "#388E3C",
  },
  black: "#000",
  white: "#fff",
  error: {
    400: "#E57373",
    500: "#F44336",
    600: "#D32F2F",
  },
  spBlack: "#232323",

  gray: {
    100: "#F9F8F9",
    200: "#E0DFE1",
    300: "#AFAEB2",
    400: "#7F7D83",
    500: "#4E4D51",
    600: "#3A393C",
    700: "#37363A",
    800: "#1F1E20",
  },
  blue: {
    500: "#5096f1",
    700: "#005fdb",
    800: "#0f56B3",
  },
  teal: {
    500: "#3ab6A7",
    700: "#0c8577",
    "accent-500": "#24b3b5",
    "accent-700": "#3ec9cb",
  },
  cardBorder: "#cccccc",
  categoryBadge: {
    // based on category slugs
    "html-css": "#f0c79c", // original: #ef8d24
    javascript: "#ffe7d1", // original: #f6b33c
    "design-ux": "#d1ffe4", // original: #3cbc8d
    entrepreneur: "#b5eaf5", // original: #3dbfd9
    web: "#aad4e6", // original: #1c94c6
    php: "#cbcbf7", // original: #666699
    wordpress: "#b6e8fa", // original: #248aaf
    mobile: "#99d6ff", // original: #2c5773
    computing: "#9fb9ed", // original: #334466
  },
  white_200: "#F1F1F1",
  white_300: "#E8E8E8",
  purple_300: "#8B54FF",
  gray_300: "#ABABAB",
  gray_400: "#464646",
  gray_500: "#E6E6E6",
  gray_600: "#D5D5D5",
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    boxShadow: {
      lgShadow:
        " 0px 2.201359510421753px 5.538156986236572px 0px rgba(0, 0, 0, 0.00), 0px 5.118332862854004px 12.876648902893066px 0px rgba(0, 0, 0, 0.00), 0px 9.191340446472168px 23.123476028442383px 0px rgba(0, 0, 0, 0.00), 0px 15.254220962524414px 38.376407623291016px 0px rgba(0, 0, 0, 0.01), 0px 25.130813598632812px 63.223838806152344px 0px rgba(0, 0, 0, 0.03), 0px 43.92137908935547px 110.49694061279297px 0px rgba(0, 0, 0, 0.07), 0px 95px 239px 0px rgba(0, 0, 0, 0.16);",
      smShadow: "-7px 10px 20px 0px rgba(195, 190, 190, 59%)",
      mdShadow: "0px 0px 0px 2px rgba(114, 50, 248, 0.00)",
    },
    backgroundImage: {
      RGBImage: "url(/images/purple-RGB.png)",
      bgGradient:
        "linear-gradient(180deg, rgba(114, 50, 250, 0.00) 0%, rgba(114, 50, 250, 0.06) 50%, rgba(255, 255, 255, 0.12) 100%)",
      cardGradient:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
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
