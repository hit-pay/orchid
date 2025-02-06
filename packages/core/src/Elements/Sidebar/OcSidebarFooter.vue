<template>
  <div
    class="pt-4 pb-5 sticky z-[1006] bottom-0 bg-[var(--oc-sidebar-background)] left-0 px-6 shadow-[0_-12px_44px_0_var(--oc-accent-1-50-tr)]" >
    <div class="flex flex-col gap-y-3">
      <slot v-if="isExpanded"></slot>
      <div
        class="flex items-center gap-x-3 min-h-[36px]"
        :class="{
            'flex-col gap-y-4': !isExpanded
        }"
      >
        <div class="px-3 flex flex-1 items-center gap-x-3 text-oc-primary cursor-pointer" @click="$emit('support-click')">
          <Icon name="chat-2" width="18" height="18" />
          <span v-if="isExpanded">Contact support</span>
        </div>
        <slot name="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/orchidui-core'

defineProps({
  displayName: String,
  isExpanded: Boolean
})

defineEmits(['user-click', 'support-click'])
</script>
