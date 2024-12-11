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
      keyframes: {
        fluid_animation: {
          "0%, 100%": { borderRadius: "59% 41% 21% 79% / 62% 53% 47% 38%" },
          "50%": { borderRadius: "26% 74% 52% 48% / 52% 32% 68% 48%" },
        },
      },
      tokens: {
        fonts: {
          metro: { value: "Metro Retro NF, serif" },
          dots: { value: "Zen Dots, sans-serif" },
          gothic: { value: "'Zen Maru Gothic', sans-serif" },
        },
        colors: {
          black: {
            DEFAULT: { value: "#1E1E1E" },
            100: { value: "#272727" },
          },
          gray: {
            50: { value: "#555" },
            100: { value: "#999" },
            200: { value: "#ADADAD" },
            300: { value: "#DADADA" },
          },
          white: { value: "#FFFFFF" },
          lightgreen: { value: "#F7FFF9" },
          darkgreen: { value: "#021402" },
          semi: {
            white: { value: "#fffe" },
            black: { value: "#010E01bb" },
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
            footer: { value: "{colors.black.100}" },
            fluid: { value: "{colors.semi.black}" },
            home: { value: "{colors.lightgreen}" },
          },
          text: {
            DEFAULT: {
              value: { base: "{colors.black}", _dark: "{colors.white}" },
            },
            dark: { value: "{colors.black}" },
            light: { value: "{colors.white}" },
            gray: { value: "{colors.gray.50}" },
          },
        },
        shadows: {
          normal: {
            value: {
              base: "0 0 10px 0 {colors.gray.300}",
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
            container: { value: "{spacing.10}" },
          },
          py: {
            section: { value: "{spacing.32}" },
          },
          pos: {
            menu: { value: "{spacing.5}" },
          },
        },
        sizes: {
          max: {
            width: {
              container: { value: "{sizes.5xl}" },
            },
          },
        },
        animations: {
          fluid: { value: "fluid_animation 20s ease 0s infinite normal" },
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
      bg: "bg",
      fontFamily: "gothic",
      fontSize: "3xl",
      overflowX: "hidden",
    },
  },
});
