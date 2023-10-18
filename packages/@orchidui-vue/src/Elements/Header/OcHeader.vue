<script setup>
defineProps({
  isSubHeader: Boolean,
});
</script>
<template>
  <div
    class="px-3 md:px-[40px] border-b border-oc-gray-200 h-[68px] w-full flex items-center relative"
    :class="isSubHeader ? 'bg-[var(--oc-accent-1-600)]' : 'bg-oc-bg'"
  >
    <slot />
    
  </div>
</template>
