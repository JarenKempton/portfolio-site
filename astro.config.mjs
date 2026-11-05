import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jarenkempton.dev",
  output: "static",
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/computer") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
