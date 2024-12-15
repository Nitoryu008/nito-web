import { defineConfig } from "@pandacss/dev";
import { bg_extend } from "./src/patterns/animation";

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
        bg_extend_animation: {
          "0%": {
            clipPath: "inset(0 100% 0 0)",
          },
          "50%": {
            clipPath: "inset(0)",
          },
          "100%": {
            clipPath: "inset(0 0 0 103%)",
          },
        },
        appear_animation: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slide_in_animation: {
          from: { opacity: "0", scale: "1.05" },
          to: { opacity: "1", scale: "1" },
        },
      },
      tokens: {
        fonts: {
          metro: { value: "Metro Retro NF, serif" },
          dots: { value: "Zen Dots, sans-serif" },
          gothic: { value: "'Zen Maru Gothic', sans-serif" },
          mplus: { value: "'M PLUS 1p', sans-serif" },
        },
        colors: {
          black: { value: "#1E1E1E" },
          white: { value: "#FFFFFF" },
        },
        zIndex: {
          header: { value: "100" },
          loading: { value: "1000" },
        },
        easings: {
          easeInExpo: { value: "cubic-bezier(0.95, 0.05, 0.795, 0.035)" },
          easeOutExpo: { value: "cubic-bezier(0.19, 1, 0.22, 1)" },
          easeInOutExpo: { value: "cubic-bezier(1, 0, 0, 1)" },
          easeOutCirc: { value: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: { base: "{colors.white}" },
            },
            button: { value: "#DADADA" },
            menu: {
              value: {
                base: "#FFFFFF",
              },
            },
            footer: { value: "#272727" },
            fluid: { value: "#010E01bb" },
            top: { value: "#0d1304" },
          },
          text: {
            DEFAULT: {
              value: "{colors.black}",
            },
            dark: { value: "{colors.black}" },
            light: { value: "{colors.white}" },
            gray: { value: "#555" },
            link: { value: "#5d7104" },
          },
        },
        shadows: {
          normal: {
            value: "0 0 10px 0 #DADADA",
          },
        },
        borders: {
          normal: {
            value: "1px solid #999",
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
          bg_extend: {
            value: "bg_extend_animation 1s {easings.easeOutCirc} forwards",
          },
          appear: {
            value: "appear_animation 0.8s {easings.easeOutExpo} forwards",
          },
          slide_in: {
            value: "slide_in_animation 1s {easings.easeOutExpo} 0.5s forwards",
          },
        },
      },
    },
  },
  patterns: {
    extend: {
      bg_extend,
    },
  },
  conditions: {
    extend: {
      loaded: ".loaded &",
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
      width: "100vw",
    },
  },
});
