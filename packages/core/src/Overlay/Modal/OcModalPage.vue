<script setup>
import { Icon, Button } from '@/orchidui-core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  persistent: {
    type: Boolean,
    default: false
  },
  isCloseIconVisible: {
    type: Boolean,
    default: true
  },
  isBackButtonVisible: {
    type: Boolean,
    default: false
  },
  preventClose: {
    type: Boolean,
    default: false
  },
  contentClass: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue', 'back', 'click:outside'])

const closeModal = () => {
  if (props.preventClose) {
    return
  }

  emit('update:modelValue', false)
}

const onClickOutside = async () => {
  emit('click:outside')

  if (props.persistent) {
    return
  }

  if (props.modelValue) {
    closeModal()
  }
}
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed w-screen z-[1008] bg-white top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
  >
    <div class="w-[calc(100%-40px)] h-[calc(100%-40px)]">
      <slot name="top" />

      <div
        class="relative z-[1008] shadow-normal max-w-[1440px] bg-[linear-gradient(180deg,_rgba(229,_238,_255,_0.5)_0%,_rgba(229,_238,_255,_0)_77.75%)] rounded-xl flex flex-col overflow-y-auto mx-auto"
        :class="contentClass"
      >
        <div
          v-if="isBackButtonVisible"
          class="py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 left-5"
          @click="emit('back')"
        >
          <Button variant="secondary" is-transparent label="Back" left-icon="chevron-left" />
        </div>

        <div
          class="flex gap-3 py-3 px-4 rounded cursor-pointer text-oc-gray-400 hover:bg-gray-100 hover:text-oc-text absolute top-5 right-5"
          @click="emit('update:model-value', false)"
        >
          <Icon name="x" width="18" height="18" />
          <span>Close</span>
        </div>

        <div class="modal-body p-9">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
