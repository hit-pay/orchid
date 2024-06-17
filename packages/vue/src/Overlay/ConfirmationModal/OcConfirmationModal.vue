<script setup>
import { Modal } from '@/orchidui'
import { computed } from 'vue'
import Confirmation from './OcConfirmation.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Are you sure?'
  },
  iconClass: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'delete'
  },
  icon: String,
  labelConfirm: String,
  labelCancel: String,
  isLoading: {
    type: Boolean,
    default: false
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  persistent: {
    type: Boolean,
    default: false
  },
  contentClass: String,
  confirmButtonProps: Object
})
const emit = defineEmits(['confirm', 'cancel', 'update:model-value'])
const cancelButton = computed(() => ({
  delete: {},
  warning: {},
  success: {
    class: 'hidden'
  },
  question: {
    label: 'No'
  }
}))
const confirmButton = computed(() => ({
  delete: {
    label: 'Delete',
    variant: 'destructive',
    isLoading: props.isLoading ?? false
  },
  warning: {
    label: 'Delete',
    variant: 'destructive',
    isLoading: props.isLoading ?? false
  },
  success: {
    isLoading: props.isLoading ?? false
  },
  question: {
    label: 'Yes',
    isLoading: props.isLoading ?? false
  }
}))

const emitModelValue = (e) => {
  emit('update:model-value', e)
  emit('cancel')
}
</script>

<template>
  <Modal
    size="small"
    :model-value="modelValue"
    :title="title"
    is-borderless
    :persistent="persistent"
    :cancel-button-props="
      labelCancel
        ? {
            ...cancelButton[variant],
            label: labelCancel
          }
        : cancelButton[variant]
    "
    :confirm-button-props="{
      ...(labelConfirm
        ? {
            ...confirmButton[variant],
            label: labelConfirm
          }
        : confirmButton[variant]),
      ...confirmButtonProps
    }"
    footer-class="justify-center"
    @update:model-value="emitModelValue"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  >
    <Confirmation
      :icon-class="iconClass"
      :variant="variant"
      :description="description"
      :content-class="contentClass"
      :icon="icon"
      :hide-icon="hideIcon"
    >
      <template v-if="$slots.description" #description>
        <slot name="description" />
      </template>
    </Confirmation>
  </Modal>
</template>
