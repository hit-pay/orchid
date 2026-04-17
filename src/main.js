import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/main.scss'
import App from './App.vue'
import routes from './router.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
