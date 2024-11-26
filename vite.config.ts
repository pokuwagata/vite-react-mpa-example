import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["chrome >= 30"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        "polyfill/": "polyfill/index.html",
      },
    },
  },
});
