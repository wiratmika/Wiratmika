import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 2,
  headerColor: "#222",
  bodyColor: "#777",
  googleFonts: [
    {
      name: "Lato",
      styles: ["700"],
    },
    {
      name: "Open Sans",
      styles: ["300"],
    },
  ],
  headerFontFamily: ["Lato", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
})

export default typography
