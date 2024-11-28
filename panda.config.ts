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
        },
        spacing: {
          xs: {value: "0.5rem"},
          sm: { value: "1rem" },
          md: { value: "1.5rem" },
          lg: { value: "2rem" },
          xl: { value: "2.5rem" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalFontface: {
    MetroRetroNF: {
      src: "url(/fonts/MetroRetroNF.ttf) format('ttf')",
      fontWeight: 400,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
});
