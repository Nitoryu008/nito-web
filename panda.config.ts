import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          metro: { value: "Metro Retro NF, serif" },
          dots: { value: "Zen Dots, sans-serif" },
          gothic: { value: "'Zen Maru Gothic', sans-serif" },
        },
        colors: {
          dark: { value: "#1E1E1E" },
          lightgray: { value: "#999999" },
          gray: {
            value: "#DFDFDF",
            100: { value: "#ADADAD" },
          },
        },
        zIndex: {
          header: { value: "100" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalFontface: {
    "Metro Retro NF": {
      src: ["url(/fonts/MetroRetroNF.woff) format('woff')"],
      fontWeight: 400,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  globalCss: {
    html: {
      color: "dark",
      fontSize: "2.3vw",
      fontFamily: "gothic",
      scrollbarWidth: "none",
      sm: {
        fontSize: "62.5%",
      },
    },
    body: {
      fontSize: "3xl",
    },
  },
});
