<script setup>
import { Icon, Button } from '@orchidui/vue'
import { computed, ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  isBorderless: Boolean,
  footerClass: {
    type: String,
    default: 'justify-end'
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  persistent: {
    type: Boolean,
    default: false
  },
  isCloseIcon: {
    type: Boolean,
    default: true
  },
  cancelButtonProps: {
    type: Object,
    default: () => ({
      label: 'Cancel',
      variant: 'secondary'
    })
  },
  preventClose: {
    type: Boolean,
    default: false
  },
  isHeaderVisible: {
    type: Boolean,
    default: true
  },
  isFooterVisible: {
    type: Boolean,
    default: true
  },
  modalId: {
    type: String,
    default: ''
  },
  confirmButtonProps: {
    type: Object,
    default: () => ({
      label: 'OK',
      class: 'min-w-[112px]'
    })
  },
  size: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'medium', 'small'].includes(val)
  }
})
const emit = defineEmits([
  'update:modelValue',
  'confirm',
  'cancel',
  'click:outside',
  'content-scroll'
])

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

const cancel = () => {
  emit('cancel')
  closeModal()
}

const sizeClasses = computed(() => ({
  default: 'max-w-[640px]',
  medium: 'max-w-[480px]',
  small: 'max-w-[320px]'
}))

const scrollArea = ref()
const handleScroll = (e) => {
  scrollArea.value?.click()
}
watch(
  () => props.modelValue,
  () => {
    setTimeout(() => {
      scrollArea.value?.addEventListener('scroll', handleScroll)
    }, 100)
  }
)

onUnmounted(() => {
  scrollArea.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    v-if="modelValue"
    id="modal-overlay-wrapper"
    class="fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
  >
    <div class="w-full h-full absolute top-0 left-0 z-[1007]" @click="onClickOutside" />

    <div
      class="z-[1008] shadow-normal w-[calc(100%-40px)] max-h-[96vh] bg-oc-bg-light rounded-xl flex flex-col"
      :class="sizeClasses[size]"
    >
      <div
        v-if="isHeaderVisible"
        class="flex bg-inherit border-oc-gray-200 gap-x-9 justify-between p-5 items-start rounded-t-xl"
        :class="!isBorderless ? 'border-b' : ''"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 overflow-hidden">
            <span class="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap">
              {{ title }}
            </span>
            <slot name="description">
              <span
                v-if="description"
                class="text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {{ description }}
              </span>
            </slot>
          </div>
          <div
            v-if="isCloseIcon"
            class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
            @click="$emit('update:modelValue', false)"
          >
            <Icon name="x" width="20" height="20" />
          </div>
        </slot>
      </div>

      <div
        :id="modalId"
        ref="scrollArea"
        class="overflow-y-auto"
        :class="[size === 'small' ? 'p-5' : 'p-7', isBorderless ? 'py-0' : '']"
        @scroll="emit('content-scroll', $event)"
      >
        <slot></slot>
      </div>

      <div
        v-if="isFooterVisible"
        class="px-5 py-6 border-oc-gray-200 flex gap-x-4"
        :class="[
          footerClass,
          {
            'border-t': !isBorderless
          }
        ]"
      >
        <slot name="footer">
          <Button
            label="Cancel"
            variant="secondary"
            class="min-w-[112px]"
            v-bind="cancelButtonProps"
            @click="cancel"
          />
          <Button
            label="OK"
            class="min-w-[112px]"
            v-bind="confirmButtonProps"
            @click="$emit('confirm')"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
