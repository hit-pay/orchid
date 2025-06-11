<script setup>
defineProps({
  label: String
})
</script>

<template>
  <div class="flex flex-col" role="group" :aria-label="label">
    <div 
      class="px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium"
      role="presentation"
      :id="`group-label-${label?.toLowerCase().replace(/\s+/g, '-')}`"
    >
      {{ label }}
    </div>

    <slot />
  </div>
</template>