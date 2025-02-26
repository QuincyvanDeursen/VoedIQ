
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'), 
    require('flyonui/plugin')
  ],

  flyonui: {
    themes: [
      {
        mytheme: {
          primary: "#074530",
          secondary: "8CDEC1",
          accent: "#003785",
          neutral: "#383B43",
          Warning: "#warning",
        }
      },
    ]
  }
}