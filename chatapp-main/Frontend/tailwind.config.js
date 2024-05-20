module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_b2: "#ffffffb2", A700_cc: "#ffffffcc" },
        red: { 500: "#ff3e46" },
        gray: {
          50: "#f9f9f9",
          100: "#f1f1f7",
          300: "#dfdfdf",
          400: "#bababa",
          900: "#19191a",
          "50_01": "#f7f7fd",
          "900_01": "#000929",
          "300_01": "#e5e5e5",
        },
        blue_gray: {
          100: "#0065CD",
          200: "#b4c1cd",
          900: "#2a3342",
          "800_01": "#3b4764",
          "200_a5": "#b4c1cda5",
          "100_01": "#dad7d5",
        },
        black: { 900: "#000000" },
        indigo: { 900: "#003366", "900_b2": "#003366b2" },
        deep_purple: { 50: "#efeffe" },
        green: { 600: "#33b843" },
      },
      boxShadow: {
        xs: "0px 1px 3px 0px #7314ed19",
        sm: "0px 4px 4px 0px #0000003f",
        md: "0px 4px 4px 0px #000000",
        lg: "0px 2px 10px 0px #597af09e",
      },
      backgroundImage: {
        gradient: "linear-gradient(150deg, #0066cc,#003366)",
        gradient1: "linear-gradient(90deg, #0064c8,#003366)",
      },
      fontFamily: {
        plusjakartasans: "Plus Jakarta Sans",
        roboto: "Roboto",
        poppins: "Poppins",
        raleway: "Raleway",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),
  
    require('tailwind-scrollbar-hide')
  ],}
