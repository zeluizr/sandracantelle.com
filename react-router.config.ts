import type { Config } from "@react-router/dev/config";

export default {
  // Server-render the dossier, then hydrate for scroll-driven motion.
  ssr: true,
  // Opt into the v8 behaviors early so v7 stops printing Future Flag warnings.
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
} satisfies Config;
