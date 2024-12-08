/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 10px rgba(255, 99, 71, 0.8), 0 0 20px rgba(255, 99, 71, 0.7), 0 0 30px rgba(255, 99, 71, 0.6)",
      },
      animation: {
        typewriter: "typewriter 2s steps(30) 1s forwards",
      },
      colors: {
        "costom-blue50": "#f0f9fe",
        "costom-blue100": "#dcf0fd",
        "costom-blue200": "#c1e6fc",
        "costom-blue300": "#97d7f9",
        "costom-blue400": "#65c1f5",
        "costom-blue500": "#41a5f0",
        "costom-blue600": "#2c88e4",
        "costom-blue700": "#226dc9",
        "costom-blue800": "#235caa",
        "costom-blue900": "#224f86",
        "costom-green800": "#0c5946",
        "costom-green600": "#0f8c6b",
        "costom-green400": "#3fc89c",
        "costom-green300": "#6eddb6",
      },
    },
  },
  plugins: [],
};
