import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "webapp-ui",
      formats: ["es", "umd"],
      fileName: "webapp-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
