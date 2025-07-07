<template>
  <div
    class="pt-4 pb-5 sticky z-[1006] bottom-0 bg-[var(--oc-sidebar-background)] left-0 px-6 shadow-[0_-12px_44px_0_var(--oc-accent-1-50-tr)]" >
    <div class="flex flex-col gap-y-3">
      <slot v-if="isExpanded"></slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    isExpanded: Boolean
  })
</script>
