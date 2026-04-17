<script setup>
import { Icon, CopyTooltip } from '@/orchidui-core'

defineProps({
  /** Label shown before the colon (e.g. `'Webhook URL'`). */
  title: String,
  /** The URL string displayed and optionally copied to clipboard. */
  url: String,
  /** Show a copy-to-clipboard icon next to the URL. */
  isCopy: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="flex gap-x-3 text-sm items-center group/url">
    <span class="text-oc-text-400 font-medium shrink-0">{{ title }}:</span>
    <span class="break-all">{{ url }}</span>

    <CopyTooltip v-if="isCopy" :value="url">
      <template #default="{ isShow }">
        <Icon
          width="14"
          height="14"
          class="cursor-pointer transition-all duration-500 group-hover/url:opacity-100"
          :class="isShow ? 'opacity-100' : 'md:opacity-0'"
          name="copy"
        />
      </template>
    </CopyTooltip>
  </div>
</template>
