<template>
  <div 
    class="flex items-center gap-x-4 px-3 hover:text-[var(--oc-sidebar-menu-active-icon-active)] py-2 leading-[21px]" 
    :class="{ 
      'font-medium text-oc-text': isActive,
      'rounded-sm p-3 h-[34px] text-sm': !isExpanded
    }"
  >
    <div class="w-[18px] h-[18px] flex items-center justify-center" :class="{ 'opacity-0': !isActive }">
      <div class="w-[6px] h-[6px] rounded-full bg-[var(--oc-sidebar-menu-active-icon-active)]" />
    </div>
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
