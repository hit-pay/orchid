<script setup>
import { Button } from '@/orchidui-core'

defineProps({
  title: String,
  subtitle: String,
  buttons: Array,
  headerButton: Array,
  hasFooter: {
    type: Boolean,
    default: true
  },
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
