<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <div class="flex flex-col">
    <div
      class="px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium"
    >
      {{ label }}
    </div>

    <slot />
  </div>
</template>
