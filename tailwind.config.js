/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#faefce",
          200: "#f5e09d",
          300: "#f1d06c",
          400: "#ecc13b",
          500: "#e7b10a",
          600: "#b98e08",
          700: "#8b6a06",
          800: "#5c4704",
          900: "#2e2302",
        },
      },
    },
    fontFamily: {
      montserrat: ["'Montserrat'", "sans-serif"],
      "noto-sans": ["'Noto Sans'", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
