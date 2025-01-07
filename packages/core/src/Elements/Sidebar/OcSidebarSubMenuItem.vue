<template>
  <div 
    class="flex items-center hover:text-[var(--oc-sidebar-menu-active-icon-active)] pr-3 py-2 leading-[21px]" 
    :class="{ 
      'font-medium text-oc-text': isActive,
      'pl-[34px]': isExpanded,
      'rounded-sm p-3 h-[34px] text-sm': !isExpanded
    }"
  >
    <div class="flex-1 whitespace-nowrap">{{ label }}</div>
    <div v-if="isBeta" class="bg-oc-warning text-white shrink-0 py-1 px-3 rounded-sm uppercase text-xs font-medium">
      BETA
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  isActive: Boolean,
  isBeta: Boolean,
  isExpanded: Boolean
})
</script>
