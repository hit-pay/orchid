<script setup>
import { Skeleton, Chip, Button, Icon } from '@/orchidui-core'

defineProps({
  /** Highlight this card with a bold primary bottom border to indicate it is the active tab. */
  isActive: Boolean,
  /** Show skeleton placeholders while data is loading. */
  isLoading: Boolean,
  /** Label text shown above the content value. */
  title: String,
  /** Main value text displayed prominently on the card. */
  content: String,
  /** Show a dropdown Button on the right side of the card. */
  isDropdown: Boolean,
  /** Props forwarded to the Chip badge shown next to the title. */
  chipOptions: Object,
  /** Props forwarded to the Button used as the dropdown trigger. */
  dropdownOptions: Object,
  /** ISO country code (e.g. `'SG'`) — renders a circular flag icon before the content value. */
  countryIso: String
})
</script>

<template>
  <div
    class="cursor-pointer rounded group font-medium justify-center border gap-y-2 md:w-fit w-full flex flex-col hover:shadow-normal"
    :class="[
      isActive && !isLoading ? 'border-b-[3px] border-oc-primary' : 'border-oc-accent-1-100',
      !isLoading ? 'px-5 py-4 min-h-[62px] max-h-[76px]' : 'p-3'
    ]"
  >
    <div v-if="isLoading" class="min-w-[138px] flex flex-col gap-y-3">
      <Skeleton class="h-[14px] w-[80%] rounded-sm" />
      <Skeleton class="h-[20px] w-full rounded-sm" />
    </div>

    <template v-else>
      <div class="flex gap-x-4 items-center">
        <div class="flex flex-col gap-y-2">
          <div class="flex items-center gap-x-2">
            <span class="text-oc-text-400 text-sm">{{ title }}</span>
            <Chip v-if="chipOptions" v-bind="chipOptions" />
          </div>
          <span
            class="flex gap-x-4 items-center text-xl group-hover:text-oc-text"
            :class="isActive ? 'text-oc-text' : 'text-oc-text-400'"
          >
            <div
              v-if="countryIso"
              class="flex justify-center items-center w-[38px] h-[38px] shrink-0 rounded-full bg-oc-gray-100"
            >
              <Icon class="!rounded-[1px]" :name="`flags/${countryIso.toUpperCase()}`" />
            </div>
            {{ content }}
          </span>
        </div>

        <Button v-if="isDropdown" v-bind="dropdownOptions" />
      </div>
    </template>
  </div>
</template>
