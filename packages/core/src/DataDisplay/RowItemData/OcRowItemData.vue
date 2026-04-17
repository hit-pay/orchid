<template>
  <div class="rounded flex border border-oc-text-200 bg-oc-bg-dark overflow-hidden w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-r border-oc-text-200 last:border-none px-3 py-[10px] flex-1"
    >
      <label class="text-oc-text-400">
        {{ item.label }}
      </label>
      <div class="flex items-center mt-1">
        <div class="flex-1">
          <div
            v-if="item.text"
            class="font-medium text-lg leading-[1.5]"
          >

            {{ item.text }}
          </div>
          <div v-if="item.chip" class="inline-block">
            <Chip v-bind="item.chip" />
          </div>
        </div>
        <Tooltip position="top" arrow-hidden :distance="7">
          <Icon
            v-if="item?.isCopyButton"
            class="cursor-pointer min-w-[14px] rounded-sm hover:border-oc-accent-1-50-tr text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
            width="14"
            height="14"
            :name="isCopied ? 'check' : 'copy'"
            :class="isCopied ? '!text-oc-success' : ''"
            @click="copyToClipBoard(item.text)"
          />
          <Icon
            v-else-if="item.icon"
            class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
            v-bind="item.icon"
          />

          <template #popper>
            <div class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400">
              {{
                item?.isCopyButton
                  ? isCopied
                    ? 'Copied'
                    : 'Copy'
                  : item.tooltipContent
              }}
            </div>
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Chip, Icon, Tooltip } from '@/orchidui-core'
import { onUnmounted, ref } from 'vue'

defineProps({
  /**
   * Array of data cell objects. Each item supports:
   * `label` (String), `text` (String), `chip` (Object), `icon` (Object with Icon props),
   * `isCopyButton` (Boolean), `tooltipContent` (String).
   */
  items: Array,
})

const emit = defineEmits({
  /** Copy icon clicked. Payload: the `text` value of the copied cell. */
  copy: []
})

let timeoutId = null

const isCopied = ref(false)
const copyToClipBoard = (value) => {
  window.clearTimeout(timeoutId);
  isCopied.value = true
  emit('copy', value)
  timeoutId = setTimeout(() => (isCopied.value = false), 1500)
}

onUnmounted(() => {
  window.clearTimeout(timeoutId);
})
</script>
