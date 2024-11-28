<template>
  <Input
    class="w-[75px]"
    placeholder="100"
    :model-value="internal"
    @update:model-value="handleInput"
    @blur="emitModelValue"
    @keyup.enter="emitModelValue"
  >
    <template #leading>%</template></Input
  >
</template>

<script setup>
import { Input } from '@orchidui/vue-core'
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number
  }
})

const emits = defineEmits({
  'update:modelValue': []
})

const internal = ref('')

const handleInput = (value) => {
  internal.value = value
}

const emitModelValue = () => {
  let newValue = parseInt(internal.value)

  if (newValue && newValue <= 100) {
    emits('update:modelValue', newValue)
  } else {
    internal.value = props.modelValue
  }
}

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue !== oldValue) internal.value = newValue
  },
  { immediate: true }
)
</script>
