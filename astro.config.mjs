import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://808kamalesh.github.io/portfolio1/",
  integrations: [tailwind(), icon()],
});
