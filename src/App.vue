<template>
  <Theme :color-mode="(state.darkMode) ? 'dark' : ''" :class="primaryColor">
    <section class="flex flex-wrap container mx-auto min-h-screen items-start p-8">
      <section class="w-full md:w-2/3 px-8">
        <div class="grid gap-3 p-8 bg-oc-bg-dark rounded ">
          <h1 class="flex justify-end font-bold mb-3">Orchid UI Playground</h1>
          <div class="flex justify-end mb-3 gap-3">
            <a href="/docs" class="text-oc-primary"> Documentation </a> /
            <a href="https://storybook-orchidui.vercel.app/" class="text-oc-primary"> Storybook </a>
          </div>
          <!-- DEMO COMPONENT -->
          <div class="flex justify-end">
            <Accordion v-model:isExpandable="isOpen" header="Header Accordion"
              body="Lorem ipsum dolor sit amet, consectetur " />
          </div>
          <div class="flex flex-wrap justify-end gap-3">
            <Button left-icon="x" />
            <Button left-icon="circle" is-rounded-full />
            <Button left-icon="x" right-icon="circle" label="Button Text" />
            <Button left-icon="circle" label="Button Text" variant="destructive" />
            <Button left-icon="circle" label="Button Text" variant="secondary" />
            <Button label="Button Text" is-disabled />
            <Button label="Button Text" is-loading />
            <Button label="Button Text" is-transparent />
          </div>
          <div class="flex flex-wrap justify-end">
            <Chip label="Primary" />
            <Chip label="Accent 1" variant="accent-1" />
            <Chip label="Accent 2" variant="accent-2" />
            <Chip label="success" variant="success" />
            <Chip label="warning" variant="warning" />
            <Chip label="error" variant="error" />
          </div>
          <div class="flex justify-end flex-wrap gap-3">
            <Shackbar v-bind="snackbarArgs" />
            <Shackbar v-bind="snackbarArgs" color="primary" />
            <Shackbar v-bind="snackbarArgs" color="error" />
            <Shackbar v-bind="snackbarArgs" color="warning" />
            <Shackbar v-bind="snackbarArgs" color="grey" />
          </div>
        </div>
      </section>
      <section class="w-full md:w-1/3 bg-oc-primary-100 rounded p-8">
        <!-- Theme settings -->
        <h1 class="font-medium mb-3">Theme Settings</h1>
        <Button label="Enable Dark Mode" @click="toggleDarkMode" />
        <Button class="mt-3" label="Change Primary Colors" @click="changePrimaryColor" />
      </section>
    </section>
  </Theme>
</template>

<script setup>
import { Accordion, Button, Chip, Shackbar, Theme } from "@orchid";
import { ref, reactive, computed } from 'vue'
const isOpen = ref(false);
const snackbarArgs = {
  showIcon: true,
  icon: "filled-check",
  content: "Changes have been successfully saved",
}

let state = reactive({
  darkMode: false,
  primary_colors: {
    teal: `teal-primary-color`
  },
  primary_color: ''
});

const primaryColor = computed(() => {
  return state.primary_color ? state.primary_colors[state.primary_color] : ''
})

const toggleDarkMode = () => {
  state.darkMode = !state.darkMode
}
const changePrimaryColor = () =>{
  if(!state.primary_color){
    state.primary_color = 'teal'
  }else{
    state.primary_color = ''
  }
}
</script>
<style>
.teal-primary-color {
  --oc-primary-50-tr: #f0fdfa;
  --oc-primary-50: #ccfbf1;
  --oc-primary-100: #99f6e4;
  --oc-primary-200: #5eead4;
  --oc-primary-300: #2dd4bf;
  --oc-primary-400: #14b8a6;
  --oc-primary-500: #0d9488;
}
.dark-mode.teal-primary-color {
  --oc-primary-500: #2dd4bf;
  --oc-primary-400: #14b8a6;
  --oc-primary-300: #0d9488;
  --oc-primary-200: #0f766e;
  --oc-primary-100: #115e59;
  --oc-primary-50: #134e4a;
  --oc-primary-50-tr: #042f2e;
}
</style>