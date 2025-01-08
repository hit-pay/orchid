<template>
  <div>
    <div class="pb-2" @click="isExpanded = !isExpanded">
      <div
        v-if="isSidebarExpanded && label"
        class="pl-3 uppercase relative text-medium text-sm" 
        :class="isExpanded ? 'text-oc-accent-1-200' : 'text-oc-accent-1-300'"
      >
        <Icon 
          name="sidebar-header" 
          width="18" 
          height="18" 
          class="absolute -left-5 top-0 transition-all duration-300 ease-in-out w-[18px] h-[18px]" 
          :class="isExpanded ? '' : '-rotate-90'" 
        />
        <span>{{ label }}</span>
      </div>
    </div>
    <div
      class="grid transition-all grid-rows-[1fr] duration-300 ease-in-out"
      :class="{
        '!grid-rows-[0fr]': !isExpanded && isSidebarExpanded,
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
import { Icon } from '@/orchidui-core'
import { ref } from 'vue'

defineProps({
  label: String,
  isSidebarExpanded: Boolean
})

const isExpanded = ref(true)
</script>
