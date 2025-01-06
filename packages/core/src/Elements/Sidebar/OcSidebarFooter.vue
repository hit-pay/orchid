<template>
  <div
    class="py-4 sticky bottom-0 left-0 px-6 bg-oc-gray-50 border-t border-oc-gray-200" >
    <div class="flex flex-col gap-y-3">
      <slot v-if="isExpanded"></slot>
      <div
        class="flex items-center gap-x-3"
        :class="{
            'flex-col gap-y-4': !isExpanded
        }"
      >
        <div class="px-3 flex flex-1 items-center gap-x-3 text-oc-primary" @click="$emit('support-click')">
          <Icon name="chat-2" width="18" height="18" />
          <span v-if="isExpanded">Contact support</span>
        </div>
        <Avatar :size="32" class="shrink-0 uppercase" @click="$emit('user-click')">{{ displayName || 'J' }}</Avatar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Avatar, Icon } from '@/orchidui-core'

defineProps({
  displayName: String,
  isExpanded: Boolean
})

defineEmits(['user-click', 'support-click'])
</script>
