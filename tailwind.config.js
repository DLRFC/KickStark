/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: "#fafcfc",
          orange: "#db872e",
          orange2: "#ffa500",
          green: "#A2C11C",
          green2: "#acb877",
          teal: "#2C5D63",
          dark: "#053a42",
          darkest: "#01090a",
        },
      },
      fontFamily: {
        sans: ["JetBrains Mono"],
        year: ["Poppins"],
      },
      boxShadow: {
        card: "12px 22px 15px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
