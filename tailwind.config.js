/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: (theme) => ({}),

    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "dark-primary": "#89d8d3",
        "dark-secondary": "#03c8a8",
        "dark-accent": "#e4e9f8",
        "dark-neutral": "#262738",
        "dark-base-100": "#2A303C",
        "light-primary": "#1488CC",
        "light-secondary": "#2B32B2",
        "light-accent": "#2A303C",
        "light-neutral": "#FAF9F6",
      },
    },
  },
  daisyui: {},
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
