<script setup>
import { Button, Icon } from '@/orchidui-core'
import { computed } from 'vue'

defineEmits({
  /** Emitted when the primary action button is clicked. */
  'click:button': null
})

defineProps({
  /**
   * Whether to show the primary action button below the icon and text.
   * Set to false to render a read-only empty state with no CTA.
   */
  isButton: {
    type: Boolean,
    default: true
  },
  /** Main heading displayed below the icon. */
  title: {
    type: String,
    default: ''
  },
  /** Supporting text shown below the title. Can be replaced with the #description slot for richer content. */
  description: {
    type: String,
    default: ''
  },
  /**
   * When true, renders an upgrade/upsell variant: warning-coloured icon ring and
   * uses upgradeLabel instead of addButtonLabel on the primary button.
   */
  isUpgrade: {
    type: Boolean,
    default: false
  },
  /**
   * Extra CSS class(es) applied to the icon container circle.
   * Overrides the default colour that isUpgrade would otherwise set.
   */
  containerClass: {
    type: [Array, String],
    required: false
  },
  /** Button label used when isUpgrade is true. */
  upgradeLabel: {
    type: String,
    default: 'Upgrade now'
  },
  /** Button label used when isUpgrade is false. */
  addButtonLabel: {
    type: String,
    default: 'Add new'
  },
  /** Left-icon name on the primary action button (ignored when isUpgrade is true). */
  addButtonIcon: {
    type: String,
    default: 'plus'
  },
  /** Icon name rendered inside the circle badge. Any icon supported by the Icon component. */
  icon: {
    type: String,
    default: 'document'
  },
  /**
   * Controls the overall size of the component.
   * @values large, default, small
   */
  size: {
    type: String,
    validator: (value) => ['large', 'default', 'small'].includes(value),
    default: 'default'
  },
  /** Hide the small exclamation badge overlaid on the icon circle (only applies when isUpgrade is false). */
  hideBadge: {
    type: Boolean,
    default: false
  },
  /**
   * Optional secondary button rendered to the left of the primary button.
   * Pass a props object accepted by the Button component, e.g. { label: 'Learn more', variant: 'secondary' }.
   */
  secondaryButton: {
    type: Object,
    default: () => null
  }
})

const sizes = computed(() => ({
  default: {
    icon: {
      container: 'w-[64px]',
      size: '32'
    },
    badge: {
      class: 'right-0 top-[2px]',
      size: '20'
    },
    containerInfo: 'gap-y-3',
    box: 'gap-y-7',
    title: 'text-lg',
    description: ''
  },
  large: {
    icon: {
      container: 'w-[128px]',
      size: '64'
    },
    badge: {
      class: 'right-0 top-[2px]',
      size: '32'
    },
    containerInfo: 'gap-y-3',
    box: 'gap-y-7',
    title: 'text-lg',
    description: ''
  },
  small: {
    icon: {
      container: 'w-[48px]',
      size: '24'
    },
    badge: {
      class: 'right-[-2px] top-[-2px]',
      size: '20'
    },
    containerInfo: 'gap-y-1',
    box: 'gap-y-5',
    title: 'text-[14px] font-medium',
    description: 'text-[12px]'
  }
}))
</script>

<template>
  <div class="flex flex-col items-center" :class="sizes[size].box">
    <slot name="icon">
      <div class="relative">
      <div
        class="flex justify-center border rounded-full items-center aspect-square"
        :class="[
          containerClass
            ? containerClass
            : isUpgrade
              ? 'text-oc-warning-600 border-oc-warning-300 bg-oc-warning-50'
              : 'text-oc-text-400 border-oc-gray-200 bg-oc-gray-50',
          sizes[size].icon.container
        ]"
      >
        <Icon :name="icon" :width="sizes[size].icon.size" :height="sizes[size].icon.size" />
      </div>
      <Icon
        v-if="!isUpgrade && !hideBadge"
        name="exclamation"
        :width="sizes[size].badge.size"
        :height="sizes[size].badge.size"
        class="absolute"
        :class="sizes[size].badge.class"
      />
    </div>
    </slot>
    <div class="flex flex-col items-center" :class="sizes[size].containerInfo">
      <span :class="sizes[size].title" class="font-medium">{{ title }}</span>
      <slot name="description">
        <span :class="sizes[size].description" class="text-oc-text-400 text-center">{{
          description
        }}</span>
      </slot>
    </div>
    <div v-if="isButton" class="flex items-center gap-x-2">
      <Button
        v-if="secondaryButton"
         label="Docs Button"
         variant="secondary"
         size="small"
         v-bind="secondaryButton"
      />

      <Button
        :label="isUpgrade ? upgradeLabel : addButtonLabel"
        :left-icon="isUpgrade ? '' : addButtonIcon"
        size="small"
        @click="$emit('click:button')"
      />
    </div>
  </div>
</template>
