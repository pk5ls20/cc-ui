/// <reference types="vitest" />
import { defineConfig } from "vite";
// import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true)
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
