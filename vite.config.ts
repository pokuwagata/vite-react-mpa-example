import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["chrome >= 30"],
      additionalLegacyPolyfills: ["whatwg-fetch"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        "polyfill/": "polyfill/index.html",
        "fetch/": "fetch/index.html",
      },
    },
  },
});
