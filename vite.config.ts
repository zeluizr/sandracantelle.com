import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // Pre-bundle Motion at cold start. Otherwise Vite discovers `motion/react`
  // on first page load, re-optimizes, and forces a reload mid-session — which
  // can crash the React Router dev server (ELIFECYCLE).
  optimizeDeps: {
    include: ["motion", "motion/react"],
  },
});

