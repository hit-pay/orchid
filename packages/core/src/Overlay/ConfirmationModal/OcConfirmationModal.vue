<script setup>
import { Modal } from '@/orchidui-core'
import { computed } from 'vue'
import Confirmation from './OcConfirmation.vue'

const props = defineProps({
  /** v-model — controls whether the modal is visible. */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** Modal header title text. */
  title: {
    type: String,
    default: 'Are you sure?'
  },
  /** Extra CSS class applied to the icon circle wrapper. */
  iconClass: {
    type: String,
    default: ''
  },
  /** Body description text (HTML supported). Overridden by the `description` slot. */
  description: {
    type: String,
    default: ''
  },
  /**
   * Visual variant — sets icon, colors, and default button labels.
   * @values delete, warning, success, question
   */
  variant: {
    type: String,
    default: 'delete'
  },
  /** Custom icon name that overrides the default variant icon. */
  icon: String,
  /** Override label for the confirm button. */
  labelConfirm: String,
  /** Override label for the cancel button. */
  labelCancel: String,
  /** Show a loading spinner on the confirm button and disable it. */
  isLoading: {
    type: Boolean,
    default: false
  },
  /** Hide the icon circle entirely. */
  hideIcon: {
    type: Boolean,
    default: false
  },
  /** Prevent the modal from closing when clicking the backdrop. */
  persistent: {
    type: Boolean,
    default: false
  },
  /** Extra CSS class applied to the inner Confirmation content wrapper. */
  contentClass: String,
  /** Extra props merged into the confirm Button component (label, variant, etc.). */
  confirmButtonProps: Object
})
const emit = defineEmits({
  /** Confirm button was clicked. */
  'confirm': [],
  /** Cancel button or backdrop was clicked. */
  'cancel': [],
  /** Modal open state changed. Payload: new boolean value. */
  'update:model-value': []
})
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
