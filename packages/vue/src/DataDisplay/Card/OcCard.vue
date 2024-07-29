<script setup>
import { Button } from '@/orchidui'
import { computed } from 'vue'
import CrossFeatureLogo from '@/orchidui/DataDisplay/Card/logo-animations/CrossFeatureLogo.vue'
import CrossSellPosLogo from '@/orchidui/DataDisplay/Card/logo-animations/CrossSellPosLogo.vue'
import CrossSellOsLogo from '@/orchidui/DataDisplay/Card/logo-animations/CrossSellOsLogo.vue'
import VideoLogo from '@/orchidui/DataDisplay/Card/logo-animations/VideoLogo.vue'
import EducationLogo from '@/orchidui/DataDisplay/Card/logo-animations/EducationLogo.vue'

defineEmits(['hide-all', 'learn-more'])
const props = defineProps({
  type: {
    type: String,
    default: 'education'
  },
  isFull: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  fullButtonProps: {
    type: Object,
    default: () => {}
  }
})
const isReverse = computed(() => ['cross_sell_pos', 'cross_sell_os'].includes(props.type))
const gradientBorder =
  'before:w-[calc(100%+2px)] before:absolute before:left-[-1px] before:h-[calc(100%+2px)] before:z-[-1] before:rounded-[9px] before:bg-gradient-to-r before:from-[#F8BFBC] before:to-[#CDBBF4]'
const typesClasses = {
  education: 'bg-white  ' + gradientBorder,
  cross_feature: 'bg-white ' + gradientBorder,
  cross_sell_pos: 'bg-[#F5F4EF]',
  cross_sell_os: 'bg-[#FDF2F9] ' + gradientBorder,
  video: 'bg-white ' + gradientBorder
}
</script>

<template>
  <div
    class="relative group gap-x-6 items-center flex h-[144px] rounded"
    :class="[typesClasses[type], isReverse && !isFull ? 'flex-row-reverse' : '']"
  >
    <div class="gap-x-6 items-center h-full relative flex overflow-hidden rounded w-full">
      <slot name="logo">
        <EducationLogo v-if="type === 'education'" />

        <CrossFeatureLogo v-if="type === 'cross_feature'" />

        <CrossSellPosLogo v-if="type === 'cross_sell_pos'" />

        <CrossSellOsLogo v-if="type === 'cross_sell_os'" />

        <VideoLogo v-if="type === 'video'" />
      </slot>

      <div class="max-w-[338px] flex flex-col w-full gap-y-3">
        <span class="font-medium text-xl">{{ title }}</span>
        <span class="text-oc-text-400">{{ description }}</span>
      </div>

      <Button
        is-transparent
        size="small"
        variant="secondary"
        class="group-hover:flex hidden px-3 absolute top-2 z-10"
        :class="isReverse ? 'left-2' : 'right-2'"
        label="Hide all"
        @click="$emit('hide-all')"
      />

      <div v-if="isFull" class="flex-1 flex justify-end pr-5">
        <Button
          label="Learn more ->"
          is-transparent
          v-bind="fullButtonProps"
          @click="$emit('learn-more')"
        />
      </div>

      <img
        v-if="type === 'video'"
        class="absolute right-0 group-hover:-right-8 transition-all duration-300 ease-in-out"
        alt="video_blur"
        src="./assets/video_blur.svg"
      />
    </div>
  </div>
</template>
