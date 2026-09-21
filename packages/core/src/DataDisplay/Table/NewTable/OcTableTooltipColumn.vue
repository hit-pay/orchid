<script setup lang="ts">
import { Tooltip } from '@/orchidui-core'
import { onMounted, ref, nextTick } from 'vue'

const props = defineProps({
  /** Column header definition — must have `key` and `variant: 'tooltip'`. */
  header: {
    required: true,
    type: Object
  },
  /** Row data object — the cell value is read from `row[header.key]`. */
  row: {
    required: true,
    type: Object
  }
})

const isShowTooltip = ref(false)
const textEl = ref()

const isTruncated = (el) => {
  if (!el) return false
  const style = window.getComputedStyle(el)
  const singleLine = style.whiteSpace === 'nowrap'
  return singleLine ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight
}

onMounted(async () => {
  if (props.header.variant === 'tooltip') {
    await nextTick()
    isShowTooltip.value = isTruncated(textEl.value)
  }
})
</script>

<template>
  <Tooltip
    v-if="isShowTooltip"
    :popper-options="{ strategy: 'fixed' }"
    position="top"
    arrow-hidden
    popper-class="!rounded"
    is-popover
    is-attach-to-body
    class="w-[inherit] block"
  >
    <div class="truncate">{{ row[header.key] ?? 'N/A' }}</div>

    <template #popper>
      <div class="text-oc-text-400 rounded py-2 px-3 whitespace-nowrap font-medium bg-oc-bg-light">
        {{ row[header.key] }}
      </div>
    </template>
  </Tooltip>
  <div v-else ref="textEl" class="truncate">{{ row[header.key] || 'N/A' }}</div>
</template>
