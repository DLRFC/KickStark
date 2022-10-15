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
          teal: "#2C5D63",
          dark: "#053a42",
          darkest: "#01090a",
        },
      },
      fontFamily: {
        sans: ["JetBrains Mono"],
        year: ["Poppins"],
      },
    },
  },
  plugins: [],
};
