<script setup>
import { Select, Icon } from "@/orchidui";
defineEmits("update:model-value");
const props = defineProps({
  modelValue: Array,
  label: String,
  options: {
    type: Array,
  },
});

console.log("options", props.options);
</script>
<template>
  <Select
    :model-value="modelValue"
    :label="label"
    :options="options"
    is-filterable
    placeholder="Placeholder"
  >
    <template #default="{ fOptions, selectOption }">
      <div
        v-for="option in fOptions"
        :key="option"
        class="p-3 flex items-center text-oc-text-400 justify-between cursor-pointer hover:bg-oc-accent-1-50 gap-x-3 rounded-sm"
        :class="modelValue === option.value ? 'bg-oc-accent-1-50' : ''"
        @click="
          selectOption(option.value);
          $emit('update:model-value', option.value);
        "
      >
        <div
          class="flex flex-col gap-3"
          :style="`font-family: ${option.value[0]};@import url('${option.value[1]}');font-weight:${option.weight}`"
        >
          {{ option.label }}
        </div>
        <Icon
          v-if="modelValue === option.value"
          class="w-5 h-5 text-oc-primary"
          name="check-2"
        />
      </div>
    </template>
  </Select>
</template>
