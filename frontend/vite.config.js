import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repositoryName?.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS && repositoryName && !isUserSite
  ? `/${repositoryName}/`
  : "/";

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: "github-pages-public-assets",
      enforce: "pre",
      transform(code, id) {
        if (!/\.(?:[jt]sx?|css)$/.test(id)) return null;

        return code.replace(
          /(["'`])\/(images|pdf|pamphlets|uploads)\//g,
          (_, quote, directory) => `${quote}${base}${directory}/`
        );
      },
    },
  ],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
      "/uploads": "http://localhost:5000",
    },
  },
});