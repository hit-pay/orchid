<script setup>
import { Icon, Chip } from '@/orchidui-core'

defineProps({
  title: String,
  icon: String,
  description: String,
  chips: Array,
  active: Array,
})

</script>

<template>
  <div
    class="overflow-hidden rounded flex flex-col relative pt-5 px-5 pb-4 border hover:shadow"
    :class="{
      'border-[2px] border-oc-primary-500': active,
    }"
  >
    <div class="flex items-center">
      <slot name="title">
        <div class="flex items-center gap-3">
          <Icon v-if="icon" :name="icon" width="24" height="24" class="text-oc-text-400" />
          <h6 class="text-lg">{{ title }}</h6>
        </div>
      </slot>
    </div>
    <div class="mt-4 text-oc-text-400">
      {{ description }}
    </div>
    <div v-if="chips" class="mt-5 flex gap-5">
      <Chip v-for="(chip, index) in chips" :key="index" v-bind="chip" />
    </div>
  </div>
</template>
