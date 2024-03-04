<template>
  <div class="grid my-8">
    <s-product-card 
      class="w-[200px] mx-auto" 
      :product="product" />
  </div>
</template>
<script setup>
import { ref } from "vue"

const product = ref({
            id: 1,
            name: "item 1",
            price: 100,
            image: "https://via.placeholder.com/150",
            has_variations: true,
            variations_count: 4,
          })
</script>
