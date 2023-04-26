/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        light: "#E2E8F0",
        "cv-gray": "#64748B",
        "dark-blue": "#0F172A",
        label: "#334155",
      },
    },
  },
  plugins: [],
};
