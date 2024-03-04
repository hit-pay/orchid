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
        'theme': resolve(__dirname, 'theme.css'), 
        'index': resolve(__dirname, 'index.html'), 
        'btn-primary': resolve(__dirname, 'components/btn-primary.html'), 
        'product-card': resolve(__dirname, 'components/product-card.html'), 
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
  },
});
