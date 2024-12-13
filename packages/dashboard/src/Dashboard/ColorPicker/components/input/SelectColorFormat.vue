<template>
  <Select
    class="!w-[80px]"
    :model-value="inputType"
    :options="[
      {
        label: 'HEX',
        value: 'HEX'
      },
      {
        label: 'RGB',
        value: 'RGB'
      },
      {
        label: 'HSL',
        value: 'HSL'
      }
    ]"
    @update:model-value="handleChange"
  ></Select>
</template>
<script setup>
import { Select } from '@orchidui/core'
import { ref } from 'vue'
const props = defineProps({
  modelValue: { default: 'RGB', type: String }
})

const inputType = ref(props.modelValue)

const emits = defineEmits(['update:model-value'])
const handleChange = (val) => {
  inputType.value = val
  emits('update:model-value', val)
}
</script>
