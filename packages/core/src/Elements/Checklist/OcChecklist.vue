<template>
  <div class="flex py-1 items-center">
    <div class="w-[14px]">
      <Icon
        v-if="completed"
        name="check-fill"
        width="14"
        height="14"
        class="text-oc-success-500"
      />

      <div v-else class="text-center">{{ indexText }}</div>
    </div>
    <div
      :class="[
        'flex-1 ml-3 mr-4',
        {
          'text-oc-text-300 line-through': completed
        }
      ]"
    >
      {{ label }}
    </div>

    <Button
      v-if="actionButton"
      is-transparent
      :variant="active ? 'primary' : 'secondary'"
      :right-icon="completed ? undefined : 'chevron-right'"
      size="small"
      class="min-w-[80px]"
      v-bind="actionButton"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Icon, Button } from '@/orchidui-core'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  },
  actionButton: {
    type: Object,
    default: undefined,
    required: false
  }
})

const indexText = computed(() => (isNaN(props.index) ? props.index : `${props.index}.`))
</script>
