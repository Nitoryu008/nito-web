import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rlc from "remark-link-card";

// https://astro.build/config
export default defineConfig({
  site: "https://nito008.com/",
  redirects: {
    "/apps": "/works",
  },
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      [
        rlc,
        {
          cache: true,
        },
      ],
    ],
  },
});
