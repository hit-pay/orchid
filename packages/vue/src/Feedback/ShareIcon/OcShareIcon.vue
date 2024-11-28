<script setup>
import { Icon, Tooltip } from '@orchidui/vue'

defineProps({
  text: String,
  icon: String,
  isOnlyIcon: Boolean,
  tooltipOptions: {
    type: Object
  }
})
</script>

<template>
  <Tooltip v-if="isOnlyIcon" v-bind="tooltipOptions">
    <div
      class="rounded-full share-icon w-fit cursor-pointer text-oc-text-400 p-3 border border-gray-200"
    >
      <Icon :name="icon" width="20" height="20" />
    </div>

    <template #popper>
      <div class="px-3 py-2 text-oc-text-400 text-sm font-medium">
        {{ text }}
      </div>
    </template>
  </Tooltip>
  <div
    v-else
    class="px-3 share-icon border border-oc-gray-200 rounded-full w-fit py-[6px] flex items-center gap-x-2"
  >
    <Icon :name="icon" width="20" height="20" />
    <span class="text-sm">{{ text }}</span>
  </div>
</template>
<style lang="scss">
.share-icon {
  background: var(--button-secondary-default);

  &:hover {
    background: var(--button-secondary-hover);
  }

  &:active {
    background: var(--button-secondary-pressed);
  }
}
</style>
