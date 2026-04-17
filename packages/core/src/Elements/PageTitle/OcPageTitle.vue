<script setup>
import OcTitle from './OcTitle.vue'
import MobilePageTitle from './OcMobilePageTitle.vue'
import { PageTitleRight, Button } from '@/orchidui-core'

defineProps({
  /** Main page heading text. */
  title: { type: String, required: true },
  /** Supporting description text shown below the title. */
  description: { type: String, default: '' },
  /** Extra CSS class applied to the title row wrapper. */
  titleClass: { type: String, default: '' },
  /** Value written to clipboard when the copy icon is clicked. */
  copyValue: { type: String, default: '' },
  /** Props forwarded to the primary Button in the right action area. */
  primaryButtonProps: Object,
  /** Props forwarded to the secondary Button in the right action area. */
  secondaryButtonProps: Object,
  /** Props forwarded to the CopyTooltip component. */
  tooltipOptions: Object,
  /** Props forwarded to the Chip shown next to the title. */
  chipProps: Object,
  /** Show a copy icon next to the description. */
  isCopy: Boolean,
  /** Show a "Back" button above the title. */
  isBack: { type: Boolean, default: false },
  /** On mobile, merge title + buttons into a stacked layout using OcMobilePageTitle. */
  isMobileCombineButtons: { type: Boolean, default: false },
  /** Show skeleton placeholders while data is loading. */
  isLoading: { type: Boolean, default: false }
})
defineEmits({
  /** Tab changed (forwarded from child components). Payload: new tab value. */
  changeTab: [],
  /** Back button clicked. */
  back: []
})
</script>

<template>
  <div class="pb-4 flex flex-col">
    <div class="flex flex-col gap-y-3 pt-4 px-5 md:px-7">
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
        class="w-full gap-5 min-h-[36px]"
        :class="[isMobileCombineButtons ? 'hidden md:flex' : 'flex', titleClass]"
      >
        <OcTitle
          :title="title"
          :description="description"
          :chip-props="chipProps"
          :copy-value="copyValue"
          :tooltip-options="tooltipOptions"
          :is-copy="isCopy"
          :is-loading="isLoading"
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
            :is-loading="isLoading"
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
