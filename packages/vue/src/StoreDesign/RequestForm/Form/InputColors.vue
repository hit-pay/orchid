<script setup>
import { defineAsyncComponent } from 'vue'
const ColorPicker = defineAsyncComponent(() => import('../../../Form/ColorPicker/ColorPicker.vue'))
import { Icon } from '@/orchidui'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  form: Object
})

defineEmits({
  'update:modelValue': []
})

const getNewValues = (index, newVal) => {
  let newValues = props.modelValue && props.modelValue.length > 0 ? props.modelValue : []
  newValues[index] = newVal
  return newValues
}
</script>

<template>
  <div class="w-full grid grid-cols-2 gap-3">
    <div v-for="(name, index) in form.name" :key="index">
      <ColorPicker
        :model-value="
          modelValue && modelValue.length > 0
            ? modelValue[index]
              ? modelValue[index]
              : '#FFFFFF'
            : '#FFFFFF'
        "
        v-bind="name.props"
        @update:model-value="$emit('update:modelValue', getNewValues(index, $event))"
      >
        <template #leading>
          <Icon class="ml-auto" name="paint" />
        </template>
      </ColorPicker>
    </div>
    <div
      v-if="form.props && form.props.description"
      class="text-sm flex items-center text-oc-text-400"
    >
      {{ form.props.description }}
    </div>
  </div>
</template>
