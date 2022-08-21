/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mydarktheme: {
          primary: "#89d8d3",
          secondary: "#03c8a8",
          accent: "#e4e9f8",
          neutral: "#262738",
          "base-100": "#2A303C",
        },
      },

      {
        mylighttheme: {
          primary: "#1488CC",
          secondary: "#2B32B2",
          accent: "#2A303C",
          neutral: "#FAF9F6",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
