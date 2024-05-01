/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinns: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F85900",
        grey: "#B9B9B9",
        softGrey: "#CACACA",
        lightGrey: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
