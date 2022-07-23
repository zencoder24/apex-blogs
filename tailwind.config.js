/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        apexAlpha: {
          primary: "#2b2d42",
          secondary: "#8d99ae",
          accent: "#ef233c",
          neutral: "#edf2f4",
          "base-100": "#d80032",
        },
      },
      {
        apexBeta: {
          primary: "#ffffff",
          secondary: "#3b413c",
          accent: "#9db5b2",
          neutral: "#daf0ee",
          "base-100": "#94d1be",
        },
      },
    ],
  },
}
