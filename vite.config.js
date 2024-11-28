import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/orchidui-core-style.css': resolve(__dirname, './packages/vue-core/dist/style.css'),
      '@/orchidui-dashboard-style.css': resolve(
        __dirname,
        './packages/vue-dashboard/dist/style.css'
      ),
      '@/orchidui-core': resolve(__dirname, './packages/vue-core/src/'),
      '@/orchidui-dashboard': resolve(__dirname, './packages/vue-dashboard/src/')
    }
  }
})
