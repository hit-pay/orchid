<template>
  <div>
    <s-product-card :state="state" />
  </div>
</template>
<script setup>
defineProps({
  state: Object,
});
</script>
