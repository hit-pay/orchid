import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import fs from 'fs'

// Fungsi untuk mendapatkan semua komponen dari direktori components
const getComponents = () => {
  const registryDir = path.resolve(__dirname, 'src/registry')
  const components = fs.readdirSync(registryDir)
  return components.reduce<Record<string, string>>((acc, component) => {
    const componentPath = path.join(registryDir, component)
    if (fs.statSync(componentPath).isDirectory()) {
      const files = fs.readdirSync(componentPath)
      files.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.ts')) {
          const componentName = file.replace(/\.(js|ts)$/, '')
          acc[`${component}/${componentName}`] = path.join(componentPath, file)
        }
      })
    } else if (component.endsWith('.js') || component.endsWith('.ts')) {
      const componentName = component.replace(/\.(js|ts)$/, '')
      acc[componentName] = path.join(registryDir, component)
    }
    return acc
  }, {})
}

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        ...getComponents()
      },
      formats: ['es'],
      fileName: (_format, entryName) => {
        return `${entryName}.js`
      }
    },
    rollupOptions: {
      external: ['vue','reka-ui','class-variance-authority','tailwind-merge'],
      output: {
        globals: {
          vue: 'Vue'
        },
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    }
  }
})