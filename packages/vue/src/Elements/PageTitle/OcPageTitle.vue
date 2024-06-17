<script setup>
import OcTitle from './OcTitle.vue'
import MobilePageTitle from './OcMobilePageTitle.vue'
import { PageTitleRight, Button } from '@/orchidui'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  titleClass: { type: String, default: '' },
  copyValue: { type: String, default: '' },
  primaryButtonProps: Object,
  secondaryButtonProps: Object,
  tooltipOptions: Object,
  chipProps: Object,
  isCopy: Boolean,
  isBack: { type: Boolean, default: false },
  isMobileCombineButtons: { type: Boolean, default: false }
})
defineEmits({
  changeTab: [],
  back: []
})
</script>

<template>
  <div class="md:pb-5 pb-4 flex flex-col">
    <div class="flex flex-col gap-y-3 pt-4 md:pt-5 px-5 md:px-10">
      <Button
        v-if="isBack"
        size="small"
        icon-class="rotate-90"
        variant="secondary"
        is-transparent
        label="Back"
        left-icon="chevron-down"
        class="self-start"
        @click="$emit('back')"
      />
      <div
        class="w-full gap-5"
        :class="[isMobileCombineButtons ? 'hidden md:flex' : 'flex', titleClass]"
      >
        <OcTitle
          :title="title"
          :description="description"
          :chip-props="chipProps"
          :copy-value="copyValue"
          :tooltip-options="tooltipOptions"
          :is-copy="isCopy"
          class="flex-1"
        >
          <template v-if="$slots.title" #title>
            <slot name="title" />
          </template>
          <template v-if="$slots.description" #description>
            <slot name="description" />
          </template>
        </OcTitle>

        <slot name="right">
          <PageTitleRight
            class="shrink-0"
            :primary-button-props="primaryButtonProps"
            :secondary-button-props="secondaryButtonProps"
          />
        </slot>
      </div>

      <MobilePageTitle
        v-if="isMobileCombineButtons"
        :secondary-button-props="secondaryButtonProps"
        :primary-button-props="primaryButtonProps"
        :description="description"
        :chip-props="chipProps"
        :title="title"
        class="md:hidden"
      >
        <template #mobile-amount>
          <slot name="mobile-amount" />
        </template>
      </MobilePageTitle>
    </div>
  </div>
</template>
