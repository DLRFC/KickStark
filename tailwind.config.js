/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    gray: "#fafcfc",
                    orange: "#db872e",
                    orange2: "#c7935d",
                    green: "#A2C11C",
                    green2: "#fcf18d",
                    purple: "#bfadcc",
                    teal: "#2C5D63",
                    dark: "#053a42",
                    darker: "#08292e",
                    darkest: "#01090a"
                }
            },
            fontFamily: {
                sans: ["JetBrains Mono"],
                year: ["Poppins"]
            },
            boxShadow: {
                card: "12px 22px 15px 0 rgba(0, 0, 0, 0.1)",
                menuContent: "8px 8px 15px 0 rgba(0, 0, 0, 0.1)",
                menuInfo: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
            }
        }
    },
    plugins: []
}
