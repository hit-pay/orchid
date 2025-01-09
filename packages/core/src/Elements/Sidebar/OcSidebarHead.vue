<template>
  <div>
    <div class="pb-2">
      <div
        v-if="isSidebarExpanded && label"
        class="pl-3 uppercase text-oc-accent-1-200 relative text-medium text-sm" 
      >
        <span>{{ label }}</span>
      </div>
    </div>
    <div
      class="grid transition-all grid-rows-[1fr] duration-300 ease-in-out"
      :class="{
        'overflow-hidden': isSidebarExpanded,
      }"
    >
      <div class="min-h-0 flex flex-col" :class="isSidebarExpanded ? 'gap-y-2' : 'gap-y-4'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  isSidebarExpanded: Boolean
})
</script>
