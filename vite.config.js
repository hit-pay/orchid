import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/orchidui-core': resolve(__dirname, './packages/core/src/'),
      '@/orchidui-dashboard': resolve(__dirname, './packages/dashboard/src/'),
      '@/orchidui-core-style.css': resolve(__dirname, './packages/core/dist/style.css'),
      '@/orchidui-dashboard-style.css': resolve(__dirname, './packages/dashboard/dist/style.css')
    }
  }
})
