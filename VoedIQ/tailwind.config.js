
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      title: ["Poppins", "sans-serif"], // Voor titels (h1, h2, etc.)
      body: ["Noto Sans", "sans-serif"], // Voor gewone tekst (p, span, etc.)
    },
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