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
        yellow: "#F8C100",
        orange: "#FECB47",
        grey: "#B9B9B9",
        grey100: "#F4F5F8",
        softGrey: "#CACACA",
        lightGrey: "#EEEEEE",
      },
      images: {
        cutlery: "url('img/Cutlery.png')",
      },
    },
  },
  plugins: [],
};
