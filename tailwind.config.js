/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["justify-self-center"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#5eb9f0",
        "paragraph-color": "#60697b",
        "heading-color": "#343f52",
        skyblue: "#e5f4fd",
        white: "#ffffff",
        "light-gray": "#f0f8fe",
        gray: "#fefefe",
      },
    },
  },
  plugins: [],
};
