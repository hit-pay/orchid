<script setup>
import { Button, Icon } from '@orchidui/core'
import { computed, defineAsyncComponent } from 'vue'

const CrossFeatureLogo = defineAsyncComponent(() => import('@/orchidui-dashboard/Dashboard/Card/logo-animations/CrossFeatureLogo.vue'))
const CrossSellPosLogo = defineAsyncComponent(() => import('@/orchidui-dashboard/Dashboard/Card/logo-animations/CrossSellPosLogo.vue'))
const CrossSellOsLogo = defineAsyncComponent(() => import('@/orchidui-dashboard/Dashboard/Card/logo-animations/CrossSellOsLogo.vue'))
const VideoLogo = defineAsyncComponent(() => import('@/orchidui-dashboard/Dashboard/Card/logo-animations/VideoLogo.vue'))
const EducationLogo = defineAsyncComponent(() => import('@/orchidui-dashboard/Dashboard/Card/logo-animations/EducationLogo.vue'))

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
  version: {
    type: String,
    default: 'v2'
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
  },
  hideButtonProps: {
    type: Object,
    default: () => {}
  }
})
const gradientBorder =
  'w-full absolute left-0 top-0 h-full z-[1] rounded-[9px] bg-gradient-to-r from-[#F8BFBC] to-[#CDBBF4]'
const typesClasses = {
  education: 'bg-white',
  cross_feature: 'bg-white ',
  cross_sell_pos: 'bg-[#F5F4EF]',
  cross_sell_os: 'bg-[#FDF2F9] ',
  video: 'bg-white '
}
const versionBg = {
  education: '!bg-oc-accent-1-600',
  cross_feature: '!bg-oc-accent-2',
  cross_sell_pos: '!bg-[#FDB012]',
  cross_sell_os: '!bg-[#EC6ABC]',
  video: '!bg-oc-gray-800'
}
const mobileIcon = computed(() => {
  const icons = {
    education: 'book',
    cross_feature: 'receipt',
    cross_sell_pos: 'counter',
    cross_sell_os: 'shopping_cart',
    video: 'play'
  }
  return icons[props.type]
})
</script>

<template>
  <div class="relative group gap-x-6 items-center px-px flex rounded">
    <div v-if="type !== 'cross_sell_pos'" :class="gradientBorder" />
    <div
      class="md:gap-x-6 pr-7 z-[1] py-7 pl-5 my-px md:h-[144px] md:p-0 items-center h-full relative flex overflow-hidden rounded w-full"
      :class="[version === 'v1' ? versionBg[type] : '', typesClasses[type]]"
    >
      <slot name="logo">
        <EducationLogo v-if="type === 'education'" />

        <CrossFeatureLogo v-else-if="type === 'cross_feature'" />

        <CrossSellPosLogo v-else-if="type === 'cross_sell_pos'" />

        <CrossSellOsLogo v-else-if="type === 'cross_sell_os'" />

        <VideoLogo v-else-if="type === 'video'" />
      </slot>

      <div class="max-w-[338px] relative z-10 flex flex-col w-full gap-y-3">
        <div class="md:hidden w-fit p-2 rounded-sm bg-white text-oc-text">
          <Icon :name="mobileIcon" width="20" height="20" />
        </div>
        <slot name="title">
          <span class="font-medium md:text-xl" :class="version === 'v2' ? '' : 'text-white'">{{
            title
          }}</span>
        </slot>
        <slot name="description">
          <span
            class="md:text-base text-sm"
            :class="version === 'v2' ? 'text-oc-text-400' : 'text-oc-accent-1-100'"
            >{{ description }}</span
          >
        </slot>
      </div>

      <Button
        is-transparent
        size="small"
        variant="secondary"
        class="md:group-hover:flex hidden px-3 absolute top-2 z-10 right-2"
        label="Hide all"
        v-bind="hideButtonProps"
        @click="$emit('hide-all')"
      />

      <Icon
        name="filled-x-circle"
        width="20"
        height="20"
        class="md:hidden absolute top-3 z-10 right-3 text-oc-text-200"
        @click.stop="$emit('hide-all')"
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
        v-if="type === 'video' && version !== 'v1'"
        class="absolute right-0 group-hover:-right-8 transition-all duration-[400ms] ease-in-out"
        alt="video_blur"
        src="./assets/video_blur.svg"
      />
    </div>
  </div>
</template>
