<template>
  <div>
    <s-product-card :state="state" />
    <s-btn-primary label="View All" :state="state" />
  </div>
</template>
<script setup>
defineProps({
  state: Object,
});
</script>
