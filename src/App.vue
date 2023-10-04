<template>
  <div
    class="w-screen h-screen flex items-center content-center justify-center flex-wrap gap-3"
  >
    <h1 class="w-full p-2 text-center font-bold">Orchid UI Playground</h1>

    <Button label="Button" />
    <Chip label="Chip" />
    <Dropdown />

    <div class="w-full text-center mt-3">
      <a href="/docs" class="text-oc-primary"> Documentation </a>
    </div>
  </div>
</template>

<script setup>
import { Button, Chip, Dropdown } from "@orchidui/vue";
</script>
