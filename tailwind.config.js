/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway: ['Raleway', 'sans-serif' ]
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        apexBeta: {
          primary: "#2b2d42",
          secondary: "#8d99ae",
          accent: "#ef233c",
          neutral: "#edf2f4",
          "base-100": "#d80032",
        },
      },
      {
        apexAlpha: {
          secondary: "#ffffff",
          primary: "#3b413c",
          accent: "#9db5b2",
          neutral: "#daf0ee",
          "base-100": "#94d1be",
        },
      },
    ],
  },
}
