<template>
  <div class="grid my-8">
    <s-product-card class="w-[200px] mx-auto" :state="state" />
  </div>
</template>
<script setup>
defineProps({
  state: Object,
});
</script>
