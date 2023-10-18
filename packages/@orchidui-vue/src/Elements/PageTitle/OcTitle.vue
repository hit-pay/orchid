<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<template>
  <div class="flex text-oc-text justify-center flex-col gap-y-3">
    <div
      class="text-xl font-medium whitespace-nowrap text-ellipsis overflow-hidden"
    >
      {{ title }}
    </div>
    <div
      v-if="description"
      class="text-oc-text-400 text-sm whitespace-nowrap text-ellipsis overflow-hidden"
    >
      {{ description }}
    </div>
  </div>
</template>
