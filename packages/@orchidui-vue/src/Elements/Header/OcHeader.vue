<script setup>
defineProps({
  isSubHeader: Boolean,
});
</script>
<template>
  <div
    class="px-[40px] border-b border-oc-grey-200 h-[68px] w-full flex items-center relative"
    :class="isSubHeader ? 'bg-[var(--oc-accent-3-600)]' : 'bg-oc-bg'"
  >
    <slot />
    
  </div>
</template>
