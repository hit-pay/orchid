<script setup>
import { RouterLink } from 'vue-router'
import sidebarConfig from './sidebar-config.js'
</script>

<template>
  <div class="max-w-4xl mx-auto px-8 py-10">
    <h1 class="text-3xl font-bold text-oc-text mb-2">Components</h1>
    <p class="text-oc-text-400 mb-10">
      Browse all OrchidUI components with live examples and API docs.
    </p>

    <div v-for="group in sidebarConfig" :key="group.category" class="mb-10">
      <h2 class="text-xs font-semibold text-oc-text-300 uppercase tracking-widest mb-3">
        {{ group.category }}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <RouterLink
          v-for="item in group.items"
          :key="item.name"
          :to="item.route"
          class="px-4 py-3 border border-oc-gray-200 rounded-lg hover:border-oc-accent-1 hover:bg-oc-accent-1-50 transition-colors text-sm text-oc-text font-medium"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>

    <div v-if="!sidebarConfig.length" class="text-center py-16 text-oc-text-300">
      <p class="text-lg font-medium mb-2">No components yet</p>
      <p class="text-sm">
        Run <code class="bg-oc-gray-100 px-2 py-0.5 rounded font-mono">npm run gen:docs</code> to
        generate component pages.
      </p>
    </div>
  </div>
</template>
