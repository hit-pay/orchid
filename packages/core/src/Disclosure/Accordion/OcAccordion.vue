<script setup>
import { nextTick, ref, watch } from 'vue'
import { Icon } from '@/orchidui-core'

const upcomingAccordion = ref()

const props = defineProps({
  /** Heading text shown in the clickable accordion trigger (used when the `header` slot is empty). */
  header: {
    type: String,
    default: ''
  },
  /** Extra CSS classes applied to the header trigger element. */
  headerStyle: {
    type: String,
    default: ''
  },
  /** Body text shown when expanded (used when the `body` slot is empty). */
  body: {
    type: String,
    default: ''
  },
  /** Extra CSS classes applied to the body content element. */
  bodyStyle: {
    type: String,
    default: ''
  },
  /** Icon name shown on the right side of the header trigger. */
  icon: {
    type: String,
    default: 'chevron-down'
  },
  /** Show the toggle icon in the header. */
  showIcon: {
    type: Boolean,
    default: true
  },
  /** Animate the expand/collapse transition. */
  isAnimated: {
    type: Boolean,
    default: true
  },
  /** v-model — controls whether the accordion body is expanded. */
  isExpandable: {
    type: Boolean,
    default: false
  },
  /** Disable accordion interaction — clicking the header does nothing. */
  isDisabled: {
    type: Boolean,
    default: false
  }
})
defineEmits({
  /** Header clicked. Payload: new expanded state (`true` = open, `false` = closed). */
  'update:isExpandable': []
})

const changeAccordionHeight = async (open) => {
  await nextTick()
  if (upcomingAccordion.value) {
    upcomingAccordion.value.style.maxHeight = open ? 'max-content' : '0'
  }
}
watch(() => props.isExpandable, changeAccordionHeight, { immediate: true })
</script>

<template>
  <div :class="isDisabled && 'opacity-60'">
    <div>
      <div
        class="border-oc-accent-1-50 py-3 text-sm border z-10 justify-between px-4 gap-x-3 flex hover:border-oc-gray-200 items-center w-full text-oc-text"
        :class="[
          isExpandable ? 'rounded-t border-oc-gray-200' : 'rounded border-transparent',
          headerStyle
        ]"
        @click="!props.isDisabled ? $emit('update:isExpandable', !props.isExpandable) : null"
      >
        <slot name="header">{{ header }}</slot>
        <Icon
          v-if="showIcon"
          :name="icon"
          class="text-oc-text-400 w-4 h-4 shrink-0"
          :class="[isExpandable && '-rotate-180', isAnimated && 'transition-all duration-300']"
        />
      </div>

      <div
        ref="upcomingAccordion"
        class="max-h-0"
        :class="[isAnimated && 'transition-all duration-300', !isExpandable && 'overflow-hidden']"
      >
        <div
          class="text-oc-text text-sm p-4 rounded-b z-0 border-x border-b"
          :class="[isExpandable ? 'border-oc-gray-200' : ' border-transparent', bodyStyle]"
        >
          <slot name="body">{{ body }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
