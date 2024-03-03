<script setup>
defineProps({
  methods: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex items-center gap-x-4">
    <span class="text-xs font-medium text-oc-text-300 uppercase">
      Payment methods
    </span>
    <div class="flex gap-x-2">
      <img
        v-for="method in methods"
        :key="method"
        width="35"
        :alt="method"
        height="24"
        :src="method"
      />
    </div>
  </div>
</template>
