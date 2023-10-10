<script setup>
import BaseInput from "../BaseInput/OcBaseInput.vue";
import { computed, ref, defineAsyncComponent } from "vue";

const Input = defineAsyncComponent(() => import("../../Form/Input/OcInput.vue"))
const Option = defineAsyncComponent(() => import("./OcOption.vue"))
const Icon = defineAsyncComponent(() => import("../../MediaAndIcons/Icon/OcIcon.vue"))
const Chip = defineAsyncComponent(() => import("../../Feedback/Chip/OcChip.vue"))
const Button = defineAsyncComponent(() => import("../../Form/Button/OcButton.vue"))
const Dropdown = defineAsyncComponent(() => import("../../Overlay/Dropdown/OcDropdown.vue"))

const props = defineProps({
  label: String,
  hint: String,
  errorMessage: String,
  placeholder: String,
  isFilterable: Boolean,
  isAddNew: Boolean,
  options: Array,
  modelValue: [Array, Object],
  multiple: Boolean,
});
const emit = defineEmits({
  addNew: [],
  "update:modelValue": [],
});
const query = ref("");
const filterOptions = (options, query) => {
  const filteredOptions = [];

  for (const option of options) {
    if (Array.isArray(option.value)) {
      const filteredGroup = option.value.filter((subOption) =>
        subOption.label.toLowerCase().includes(query.toLowerCase()),
      );

      if (filteredGroup.length > 0) {
        filteredOptions.push({
          label: option.label,
          value: filteredGroup,
        });
      }
    } else {
      if (option.label.toLowerCase().includes(query.toLowerCase())) {
        filteredOptions.push(option);
      }
    }
  }

  return filteredOptions;
};
const filterableOptions = computed(() =>
  filterOptions(props.options, query.value),
);
const selectOption = (option) => {
  emit(
    "update:modelValue",
    props.multiple
      ? props.modelValue.find((o) => o.value === option.value)
        ? props.modelValue.filter((o) => o.value !== option.value)
        : [...props.modelValue, option]
      : option,
  );
};
</script>

<template>
  <BaseInput :label="label" :hint="hint" :error-message="errorMessage">
    <Dropdown :offset="4">
      <template #trigger="{ isOpen }">
        <div
          class="border h-[36px] px-3 flex justify-between items-center gap-x-3 rounded"
        >
          <div v-if="multiple" class="flex flex-wrap gap-2">
            <Chip
              v-for="option in modelValue"
              :key="option.value"
              closable
              :label="option.label"
              @remove="
                $emit(
                  'update:modelValue',
                  props.modelValue.filter((o) => o.value !== option.value),
                )
              "
            />
          </div>
          <template v-else>
            <span v-if="modelValue?.label">{{ modelValue.label }}</span>
            <span v-else class="text-oc-text-300">{{ placeholder }}</span>
          </template>
          <Icon
            class="w-5 h-5 text-oc-text-400 transition-all duration-500"
            :class="isOpen && '-rotate-180'"
            name="chevron-down"
          />
        </div>
      </template>

      <div class="p-3 flex flex-col gap-y-2">
        <Input
          v-if="isFilterable"
          v-model="query"
          icon="search"
          placeholder="Search"
        >
          <template #icon>
            <Icon class="w-5 h-5 text-oc-text-400" name="search" />
          </template>
        </Input>

        <slot :f-options="filterableOptions" :select-option="selectOption">
          <Option
            v-for="option in filterableOptions"
            :key="option.value"
            :label="option.label"
            :is-selected="
              multiple
                ? modelValue.find((o) => o.value === option.value)
                : modelValue?.value === option.value
            "
            @click="selectOption(option)"
          />
        </slot>

        <Button
          v-if="isAddNew"
          variant="secondary"
          class="flex items-center justify-center gap-x-[6px]"
          size="small"
          is-transparent
          @click="$emit('addNew')"
        >
          <Icon class="w-5 h-5" name="plus" />
          Add new
        </Button>
      </div>
    </Dropdown>
  </BaseInput>
</template>
