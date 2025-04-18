import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import panda from "@pandacss/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  globalIgnores([
    "postcss.config.cjs",
    "src/env.d.ts",
    ".gitignore",
    "styled-system/**/*",
    ".astro/**/*",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts.astro}"],
    plugins: {
      "@pandacss": panda,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: typescriptParser,
    },
    rules: {
      ...panda.configs.recommended.rules,
    },
  },
]);
