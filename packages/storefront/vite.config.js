import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": resolve(__dirname, "./src/"),
    },
  },
  build: {
    minify: false,
    outDir: "dist",
    rollupOptions: {
      input: {
        theme: resolve(__dirname, "theme.css"),
        index: resolve(__dirname, "index.html"),
        components: resolve(__dirname, "src/components.js"),
        // TODO : read all html in folder /components
        // common component
        "s-btn": resolve(__dirname, "/components/s-btn.html"),
        "s-logo": resolve(__dirname, "/components/s-logo.html"),
        "s-navigation-menus": resolve(__dirname, "/components/s-navigation-menus.html"),
        "s-search-icon":resolve(__dirname, "/components/s-search-icon.html"),
        "s-search-popup":resolve(__dirname, "/components/s-search-popup.html"),
        "s-cart-icon":resolve(__dirname, "/components/s-cart-icon.html"),
        "s-category-filter":resolve(__dirname, "/components/s-category-filter.html"),
        "s-product-card":resolve(__dirname, "/components/s-product-card.html"),
        // section component
        "s-banner-promotion": resolve(__dirname, "/components/s-banner-promotion.html"),
        "s-headers": resolve(__dirname, "/components/s-headers.html"),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
