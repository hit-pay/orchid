import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      "@": resolve(__dirname, "./src/"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'index.html'), 
      },
    },
  },
});
