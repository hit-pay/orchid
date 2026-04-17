<script setup>
import { Icon } from '@/orchidui-core'
import { useSlots } from 'vue'

const slots = useSlots()

const hasSlot = (name) => !!slots[name]

defineProps({
  /** Show the filled/active dot indicator for this timeline entry. */
  isActive: Boolean,
  /** Primary text for the timeline entry. */
  title: String,
  /** Supporting description text. Overridable via the `description` slot. */
  description: String,
  /** Icon name shown on the right side of the entry. */
  icon: String,
  /** Extra CSS class applied to the icon element. */
  iconClass: String,
  /** Amount or badge text shown beside the icon. Overridable via the `iconText` slot. */
  iconText: String,
  /** Extra CSS class applied to the iconText element. */
  iconTextClass: String
})
</script>

<template>
  <div
    class="flex w-full relative gap-x-5 py-4 before:top-[20px] last:before:top-0 before:h-full before:left-[10px] before:absolute before:border-l last:before:hidden first:last:before:hidden"
  >
    <div>
      <div
        class="w-6 h-6 flex z-[1] relative items-center rounded-full justify-center"
        :class="isActive ? 'bg-oc-accent-1-50 shadow' : ' bg-transparent'"
      >
        <div
          class="w-3 h-3 rounded-full"
          :class="isActive ? 'bg-oc-primary-500' : ' bg-oc-gray-500'"
        />
      </div>
    </div>

    <div class="flex gap-x-7 w-full items-center">
      <div class="flex flex-1 flex-col gap-y-2">
        <span>{{ title }}</span>
        <span class="text-sm text-oc-text-400">
          <slot name="description">{{ description }}</slot>
        </span>
      </div>

      <div class="flex items-end gap-x-2">
        <Icon v-if="icon" :name="icon" :class="iconClass" />
        <span class="text-lg font-medium" :class="iconTextClass">
          <slot name="iconText">{{ iconText }} </slot>
        </span>
      </div>
    </div>
  </div>
</template>
