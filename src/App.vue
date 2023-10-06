<template>
  <main class="flex flex-wrap container mx-auto mt-3">
    <section class="grid gap-3 p-8 bg-oc-bg-dark rounded w-full md:w-2/3">
      <h1 class="flex justify-end font-bold mb-3">Orchid UI Playground</h1>
      <div class="flex justify-end mb-3 gap-3">
        <a href="/docs" class="text-oc-primary"> Documentation </a> /
        <a href="https://storybook-orchidui.vercel.app/" class="text-oc-primary"> Storybook </a>
      </div>
      <!-- DEMO COMPONENT -->
      <div class="flex justify-end">
        <Accordion v-model:isExpandable="isOpen" header="Header Accordion" body="Lorem ipsum dolor sit amet, consectetur "/>
      </div>
      <div class="flex justify-end gap-3">
        <Button left-icon="x"/>
        <Button left-icon="x" right-icon="circle" label="Button Text"/>
        <Button label="Button Text" is-disabled/>
        <Button label="Button Text" is-loading/>
        <Button label="Button Text" is-transparent/>
      </div>
      <div class="flex justify-end gap-3">
        <Button  left-icon="circle" label="Button Text" />
        <Button  left-icon="circle" label="Button Text" variant="secondary" />
        <Button  left-icon="circle" label="Button Text" variant="destructive" />
      </div>
      <div class="flex justify-end">
        <Chip label="Primary" />
        <Chip label="Accent 1" variant="accent-1" />
        <Chip label="Accent 2" variant="accent-2" />
        <Chip label="success" variant="success" />
        <Chip label="warning" variant="warning" />
        <Chip label="error" variant="error" />
      </div>
    </section>
    <section class="w-full md:w-1/3 bg-oc-primary-100 rounded p-4">
      <!-- Theme settings -->
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus sunt deleniti ut provident tenetur, blanditiis totam ducimus id consectetur harum veritatis quaerat assumenda quo at officiis quae! Eveniet, vitae!
    </section>
  </main>
</template>

<script setup>
import {  Accordion, Button, Chip } from "@orchid";
import { ref } from 'vue'
let isOpen = ref(false);
</script>