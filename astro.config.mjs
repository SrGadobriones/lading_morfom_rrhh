import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// En GitHub Actions se despliega a GitHub Pages bajo /lading_morfom_rrhh.
// En local (dev/build) el sitio vive en la raíz, sin base.
const onGitHubPages = process.env.GITHUB_ACTIONS === "true";

// https://astro.build/config
export default defineConfig({
  site: onGitHubPages ? "https://srgadobriones.github.io" : "https://morfom.cl",
  base: onGitHubPages ? "/lading_morfom_rrhh" : undefined,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-CL", en: "en-US" },
      },
    }),
  ],
});
