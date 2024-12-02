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
          black: { value: "#1E1E1E" },
          gray: {
            50: { value: "#555" },
            100: { value: "#999" },
            200: { value: "#ADADAD" },
            300: { value: "#DFDFDF" },
          },
          white: { value: "#FFFFFF" },
          darkgreen: { value: "#021402" },
          orange: { value: "#d38819" },
          semi: {
            white: { value: "#fffe" },
            black: { value: "#010E01ee" },
          },
        },
        zIndex: {
          header: { value: "100" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: { base: "{colors.white}", _dark: "{colors.darkgreen}" },
            },
            button: { value: "{colors.gray.300}" },
            menu: {
              value: {
                base: "{colors.white}",
                _dark: "{colors.darkgreen}",
              },
            },
          },
          text: {
            DEFAULT: {
              value: { base: "{colors.black}", _dark: "{colors.white}" },
            },
            dark: { value: "{colors.black}" },
            light: { value: "{colors.white}" },
          },
        },
        shadows: {
          normal: {
            value: {
              base: "0 0 10px 0 {colors.gray.200}",
              _dark: "0 0 10px 0 {colors.black}",
            },
          },
        },
        borders: {
          normal: {
            value: {
              base: "1px solid {colors.gray.100}",
              _dark: "1px solid {colors.gray.50}",
            },
          },
          transparent: {
            value: "1px solid transparent",
          },
        },
        spacing: {
          px: {
            menu: { value: "{spacing.4}" },
            container: { value: "{spacing.10}" },
          },
          py: {
            section: { value: "{spacing.32}" },
          },
          gap: {
            section: { value: "{spacing.20}" },
          },
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
      fontSize: "2.3vw",
      scrollbarWidth: "none",
      sm: {
        fontSize: "62.5%",
      },
    },
    body: {
      color: "text",
      fontFamily: "gothic",
      fontSize: "3xl",
    },
  },
});
