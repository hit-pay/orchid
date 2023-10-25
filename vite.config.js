import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@playground": resolve(__dirname, "./src/"),
      "@orchid": resolve(__dirname, "./packages/@orchidui-vue/src/"),
    },
  },
});
