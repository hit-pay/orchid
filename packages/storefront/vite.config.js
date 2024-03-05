import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: false
  },
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
        index: resolve(__dirname, "index.html"),
        components: resolve(__dirname, "src/components.js"),
        storefront: resolve(__dirname, "src/storefront.js"),
        // TODO : read all html in folder /components
        // common component
        "s-btn": resolve(__dirname, "/default/s-btn.html"),
        "s-logo": resolve(__dirname, "/default/s-logo.html"),
        "s-navigation-menus": resolve(__dirname, "/default/s-navigation-menus.html"),
        "s-search-icon":resolve(__dirname, "/default/s-search-icon.html"),
        "s-search-popup":resolve(__dirname, "/default/s-search-popup.html"),
        "s-cart-icon":resolve(__dirname, "/default/s-cart-icon.html"),
        "s-category-filter":resolve(__dirname, "/default/s-category-filter.html"),
        "s-product-card":resolve(__dirname, "/default/s-product-card.html"),
        // section component
        "s-banner-promotion": resolve(__dirname, "/default/s-banner-promotion.html"),
        "s-headers": resolve(__dirname, "/default/s-headers.html"),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
