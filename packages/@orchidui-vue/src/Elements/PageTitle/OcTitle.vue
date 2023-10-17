<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="flex text-oc-text flex-col gap-y-3">
    <div
      class="text-xl font-medium whitespace-nowrap text-ellipsis overflow-hidden"
    >
      {{ title }}
    </div>
    <div
      class="text-oc-text-400 text-sm whitespace-nowrap text-ellipsis overflow-hidden"
    >
      {{ description }}
    </div>
  </div>
</template>
