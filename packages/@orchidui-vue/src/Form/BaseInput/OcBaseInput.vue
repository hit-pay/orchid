<script setup>
defineProps({
  label: String,
  hint: String,
  errorMessage: String,
});
</script>

<template>
  <div class="flex flex-col gap-y-2 w-full">
    <label
      v-if="label"
      class="flex text-sm items-center font-medium text-oc-text-400"
      >{{ label }}</label
    >
    <slot />
    <div
      v-if="hint && !errorMessage"
      class="text-sm flex items-center text-oc-text-400"
    >
      {{ hint }}
    </div>
    <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
      {{ errorMessage }}
    </div>
  </div>
</template>
