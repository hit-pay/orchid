<script setup>
import { Button, Icon, Chip } from '@/orchidui-core'

defineProps({
  /** Props forwarded to the Chip shown on the left side. Pass `null` to hide. */
  chipProps: {
    type: Object,
    required: false,
    default: null
  },
  /** Props forwarded to a secondary Button rendered before the primary link. Pass `null` to hide. */
  secondaryButton: {
    type: Object,
    required: false,
    default: null
  },
  /** Plain text shown in the center of the banner. Use `rawHtml` for rich content instead. */
  title: {
    type: String,
    default: ''
  },
  /** Raw HTML rendered in the center of the banner (v-html). Use only with trusted content. */
  rawHtml: {
    type: String,
    default: null
  },
  /** Label for the primary action link button on the right side. */
  buttonLabel: String,
  /** Extra CSS class applied to the title/rawHtml container. */
  titleClass: String
})

defineEmits({
  /** Primary action button clicked. */
  'click:button': []
})
</script>

<template>
  <div class="w-screen relative bg-oc-warning-300 flex items-center justify-center px-5">
    <Chip
      v-if="chipProps"
      v-bind="chipProps"
    />

    <div class="flex-1 flex flex-col items-center md:flex-row gap-3 md:gap-5">
      <div v-if="title" :class="['flex-1 mx-auto flex justify-center', titleClass]">
        <span class="text-sm font-medium">
          {{ title }}
        </span>
      </div>

      <div
        v-else-if="rawHtml"
        :class="['text-sm font-medium flex-1 flex justify-center', titleClass]"
        v-html="rawHtml"
      />

      <div class="md:ml-auto mr-auto flex items-center gap-2">
        <template v-if="secondaryButton">
          <Button
            class="md:ml-auto mr-auto"
            size="small"
            is-transparent
            v-bind="secondaryButton"
          />
          <span class="text-oc-warning-700"> / </span>
        </template>

        <Button
          v-if="buttonLabel"
          size="small"
          is-transparent
          @click="$emit('click:button')"
        >
          <span class="flex items-center gap-2 underline">
            {{ buttonLabel }} <Icon name="arrow-right" width="9" height="9" />
          </span>
        </Button>
      </div>
    </div>
  </div>
</template>
