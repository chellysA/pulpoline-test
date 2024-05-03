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
        secondary: "#FFB74B",
        yellow: "#F8C100",
        orange: "#FECB47",
        grey: "#B9B9B9",
        grey100: "#F4F5F8",
        softGrey: "#CACACA",
        lightGrey: "#EEEEEE",
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
