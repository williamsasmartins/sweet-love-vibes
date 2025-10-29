import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Detect GitHub Actions environment to set correct base for GitHub Pages
const repoName = "sweet-love-vibes";
const isCI = process.env.GITHUB_ACTIONS === "true";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use project subpath on GitHub Pages, root locally
  base: isCI ? `/${repoName}/` : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
