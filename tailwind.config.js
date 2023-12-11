/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        76: "19rem",
      },
      colors: {
        background: "#1D1D1F",
        text: "#FAFAF5",
        purple: "#A374FF",
        turqoise: "#17F1D1",
        gold: "#ffd074",
      },
    },
  },
  plugins: [],
};
