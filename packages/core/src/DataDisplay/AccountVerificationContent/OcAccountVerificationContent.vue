<script setup>
import { Button } from '@/orchidui-core'

defineProps({
  /** Card heading text. */
  title: String,
  /** Supporting subtitle text shown below the title. */
  subtitle: String,
  /** Array of Button props rendered in the footer row. */
  buttons: Array,
  /** Props forwarded to the header Button shown on hover (top-right corner). */
  headerButton: Array,
  /** Show the footer section (with `footer` slot or buttons array). */
  hasFooter: {
    type: Boolean,
    default: true
  },
  /** Extra CSS classes applied to the footer buttons wrapper. */
  footerClasses: String,
})

</script>

<template>
  <div
    class="overflow-hidden rounded flex flex-col transition relative bg-oc-bg-dark p-2 group"
  >
    <div class="p-5 flex">
      <div class="flex-1">
        <h6 class="font-medium text-lg leading-[1.5] m-0 text-oc-text-500">{{ title }}</h6>
        <p v-if="subtitle" class="m-0 mt-2 text-oc-text-400">
          {{ subtitle }}
        </p>
      </div>
      <div
        v-if="headerButton"
        class="group-hover:visible invisible"
      >
        <Button is-transparent variant="secondary" v-bind="headerButton" class="m-0" />
      </div>
    </div>

    <div class="bg-white rounded shadow">
      <div class="p-5">
        <slot />
      </div>

      <div v-if="hasFooter" class="p-5 border-t border-oc-gray-200 mt-3">
        <slot name="footer">
          <div
            :class="[
            'flex gap-5',
            footerClasses,
          ]"
          >
            <Button v-for="(button, index) in buttons" :key="index" v-bind="button" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
