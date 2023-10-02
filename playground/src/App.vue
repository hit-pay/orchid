
<template>
  <div class="w-screen h-screen flex items-center content-center justify-center flex-wrap gap-3">
    <div class="w-full p-2 text-center">Orchid UI Playground</div>
    <Btn label="Button" />
    <Chip label="Chip" />
    <Dropdown />
  </div>
</template>

<script setup>
import { Btn, Chip, Dropdown } from '@orchidui/vue'
</script>
