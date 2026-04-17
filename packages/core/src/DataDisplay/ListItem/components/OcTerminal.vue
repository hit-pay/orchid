<script setup>
import { Chip, Button } from '@/orchidui-core'

defineProps({
  /** Terminal name/model text shown next to the image. */
  title: String,
  /** URL of the terminal product image. */
  image: String,
  /** Extra CSS class applied to the `<img>` element. */
  imageClass: String,
  /**
   * Controls the width of the image container.
   * @values small, medium, large
   */
  imageSize: {
    type: String,
    default: 'medium'
  },
  /** Small description text shown below the title (displayed in uppercase). */
  description: String,
  /** Array of Chip props rendered next to the title. */
  chips: {
    type: Array,
    default: () => []
  },
  /** Props forwarded to an optional action Button on the right. Pass `null` to hide. */
  buttonProps: {
    type: Object,
    default: () => null
  },
  /** Disable the hover shadow on the card. */
  isDisabled: Boolean
})

const imageSizes = {
  small: 'w-10',
  medium: 'w-[56px]',
  large: 'w-16'
}
</script>

<template>
  <div
    class="p-4 flex gap-x-4 rounded items-center border border-gray-200 group"
    :class="{ 'hover:shadow-normal': !isDisabled }"
  >
    <div
      class="shrink-0 aspect-square flex items-center justify-center bg-oc-bg-dark rounded overflow-hidden"
      :class="imageSizes[imageSize]"
    >
      <img :src="image" :class="imageClass" alt="terminal" class="object-contain h-full w-full" />
    </div>

    <div class="flex flex-col gap-y-1 overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex text-sm text-oc-text-400 items-center gap-x-3">
          <span v-if="title" class="text-base text-oc-text font-medium">
            {{ title }}
          </span>

          <div v-if="chips.length" class="flex gap-3">
            <Chip
              v-for="(item, i) in chips"
              :key="i"
              :label="item.label"
              :variant="item.variant"
              class="font-medium"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="text-xs whitespace-nowrap uppercase text-oc-text-300 overflow-hidden text-ellipsis"
        >
          {{ description }}
        </div>
      </div>
    </div>

    <Button v-if="buttonProps" class="shrink-0" size="small" v-bind="buttonProps" />
  </div>
</template>
