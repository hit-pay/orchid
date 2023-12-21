<script setup>
defineProps({
  i: Object,
  active: String,
});
</script>
<template>
  <div
    class="border p-5 bg-oc-bg hover:bg-oc-primary-50 hover:border-oc-primary-100 hover:shadow-lg rounded-xl flex flex-wrap"
    :class="{
      'bg-oc-primary-50 shadow-lg border-2 border-oc-primary-100': active,
    }"
  >
    <div
      v-if="i.name !== 'custom'"
      class="rounded-lg p-5 flex w-full bg-oc-bg-dark"
    >
      <div class="w-1/2 text-xl flex items-center justify-center">
        <span v-if="i.name === 'default'">Aa</span>
      </div>
      <div class="w-1/2">
        <div class="grid grid-cols-2">
          <div
            class="border h-7 rounded-lg mb-1"
            :style="`background:${i.background}`"
          ></div>
          <div
            class="border h-7 rounded-lg"
            :style="`background:${i.text}`"
          ></div>
          <div
            class="border h-7 rounded-lg"
            :style="`background:${i.primary}`"
          ></div>
          <div
            class="border h-7 rounded-lg"
            :style="`background:${i.primary_text}`"
          ></div>
        </div>
      </div>
    </div>
    <div v-else class="bg-oc-bg-dark rounded-lg p-2 flex w-full">Custom</div>
    <div class="w-full text-center mt-2 pt-2 border-t capitalize">
      {{ i.name }}
    </div>
  </div>
</template>
