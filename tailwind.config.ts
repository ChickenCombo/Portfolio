/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  module: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        "dark-hover-bg": "#131313",
        "dark-border": "#444444",
        "dark-text": "#c5c4c4",
        "dark-icon": "#8c8c8c",
        "badge": "#f2ed98",
      },
      backgroundImage: {
        "dotted-light": "radial-gradient(#e0dfd3 8%, transparent 8%)",
        "dotted-dark": "radial-gradient(#262626 8%, transparent 8%)",
      },
      backgroundSize: {
        vmin: "5vmin 5vmin",
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [],
};
