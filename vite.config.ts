import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      mockData: path.resolve(__dirname, "src/data"),
      features: path.resolve(__dirname, "src/features"),
      pages: path.resolve(__dirname, "src/pages"),
      shared: path.resolve(__dirname, "src/shared"),
      theme: path.resolve(__dirname, "src/theme"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
});
