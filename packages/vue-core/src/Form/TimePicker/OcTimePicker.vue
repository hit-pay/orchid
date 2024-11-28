<script setup>
import { Input, Dropdown } from '@orchidui/vue-core'
import { defineAsyncComponent, ref, watch } from 'vue'
import dayjs from 'dayjs'

const emit = defineEmits({
  'update:modelValue': []
})

const TimePopup = defineAsyncComponent(
  () => import('@/orchidui-core/Form/TimePicker/OcTimePopup.vue')
)

const popup = ref()
const isDropdownOpened = ref(false)
const props = defineProps({
  modelValue: [String, Date],
  label: String,
  hint: String,
  icon: {
    type: String,
    default: 'time'
  },
  preFill: String,
  placeholder: String,
  errorMessage: String,
  isRequired: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  labelIcon: {
    type: String,
    default: ''
  },
  tooltipText: {
    type: String,
    default: ''
  },
  tooltipOptions: {
    type: Object,
    default: () => ({})
  }
})
const time = ref(props.modelValue)
const updateActiveTime = () => {
  emit('update:modelValue', time.value)
  setTimeout(() => popup.value?.updateActiveTime(), 300)
}
watch(
  () => props.modelValue,
  (value) => {
    time.value = value != '' ? value : dayjs().toDate()
  },
  { immediate: true }
)
</script>

<template>
  <Dropdown
    v-model="isDropdownOpened"
    menu-classes="min-w-fit"
    :distance="10"
    :is-disabled="isDisabled"
    @update:model-value="updateActiveTime"
  >
    <Input
      :icon="icon"
      :error-message="errorMessage"
      :label="label"
      :hint="hint"
      :pre-fill="preFill"
      :placeholder="placeholder"
      :model-value="dayjs(time).format('hh:mm A')"
      :is-required="isRequired"
      :label-icon="labelIcon"
      :tooltip-text="tooltipText"
      :tooltip-options="tooltipOptions"
      :is-readonly="true"
      :disabled="isDisabled"
    />

    <template #menu>
      <TimePopup
        v-if="isDropdownOpened"
        ref="popup"
        v-model="time"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </template>
  </Dropdown>
</template>
