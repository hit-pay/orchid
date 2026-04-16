<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Theme } from '@/orchidui-core'
import sidebarConfig from '../docs/sidebar-config.js'

const route = useRoute()
const sidebarOpen = ref(true)

function isActive(item) {
  return route.path === item.route
}

function toTitle(str) {
  return str.replace(/([A-Z])/g, (c, i) => (i === 0 ? c : ' ' + c))
}
</script>

<template>
  <Theme class="min-h-screen flex flex-col bg-oc-bg-light">
    <header class="h-14 border-b border-oc-gray-200 flex items-center px-6 gap-4 flex-shrink-0 bg-oc-bg-light z-10">
      <RouterLink to="/" class="text-sm text-oc-text-400 hover:text-oc-text transition-colors">
        ← Home
      </RouterLink>
      <span class="text-oc-gray-300">|</span>
      <RouterLink to="/docs" class="font-semibold text-oc-text">
        OrchidUI
      </RouterLink>
      <span class="text-oc-text-300 text-sm">Components</span>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <aside class="w-56 flex-shrink-0 border-r border-oc-gray-200 overflow-y-auto bg-oc-bg-light">
        <nav class="py-6 px-3">
          <div v-for="group in sidebarConfig" :key="group.category" class="mb-5">
            <p class="text-[11px] font-semibold text-oc-text-300 uppercase tracking-widest px-2 mb-1.5">
              {{ group.category }}
            </p>
            <ul class="space-y-0.5">
              <li v-for="item in group.items" :key="item.name">
                <RouterLink
                  :to="item.route"
                  class="block px-2 py-1.5 text-sm rounded-md transition-colors"
                  :class="isActive(item)
                    ? 'bg-oc-accent-1-50 text-oc-accent-1 font-medium'
                    : 'text-oc-text-400 hover:text-oc-text hover:bg-oc-gray-100'"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <main class="flex-1 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </Theme>
</template>
