<script setup>
import { Button, Tag } from '@/orchidui-core'

defineProps({
  buttonProps: {
    type: Object,
    default: () => ({})
  },
  tagOptions: {
    type: Object,
    default: () => null
  },
  title: String,
  imagePath: String,
  description: String
})
</script>

<template>
  <div class="flex justify-center pt-[75px] items-start backdrop-blur-sm">
    <div class="absolute w-full h-full top-0 left-0 bg-oc-gray-50 opacity-80"></div>

    <div class="bg-white relative z-10 rounded pb-3 max-w-[320px] w-[96vw] shadow">
      <div class="flex flex-col gap-y-7 p-5">
        <slot name="logo">
          <div class="min-w-[142px] pt-7 flex justify-center items-center">
            <img :src="imagePath" alt="logo" />
          </div>
        </slot>
        <div class="flex text-center flex-col gap-y-3">
          <div class="text-lg flex justify-center gap-x-3 items-center font-medium">
            {{ title }}
            <Tag v-if="tagOptions" v-bind="tagOptions" />
          </div>
          <span class="text-oc-text-400">{{ description }}</span>
        </div>
        <slot name="bottom"></slot>
      </div>
      <div class="py-6 px-5 flex items-center justify-center">
        <slot name="footer">
          <Button label="Request Access" class="w-fit" v-bind="buttonProps" />
        </slot>
      </div>
    </div>
  </div>
</template>
