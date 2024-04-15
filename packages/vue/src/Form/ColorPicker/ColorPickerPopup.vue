<script setup>
import { ref } from 'vue';
import VueColorPicker from './components/VueColorPicker.vue'
const color = ref('linear-gradient(90deg, rgb(68, 71, 119) 26%, rgb(0, 0, 255) 100%')
</script>

<template>
    <VueColorPicker 
      v-model="color" 
      mode="gradient"
      :disabled="false" />
</template>