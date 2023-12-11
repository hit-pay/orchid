<script setup>
import {
  BaseInput,
  Input,
  Option,
  Icon,
  Chip,
  Button,
  Dropdown,
} from "@/orchidui";
import { computed, ref } from "vue";

const props = defineProps({
  label: String,
  hint: String,
  errorMessage: String,
  placeholder: String,
  isInlineLabel: Boolean,
  isFilterable: Boolean,
  isDisabled: Boolean,
  isAddNew: Boolean,
  options: Array,
  modelValue: [Array, String, Number],
  maxVisibleOptions: {
    type: Number,
    default: 2,
  },
  multiple: Boolean,
  isRequired: {
    type: Boolean,
    default: false,
  },
  labelIcon: {
    type: String,
    default: "",
  },
  tooltipText: {
    type: String,
    default: "",
  },
  tooltipOptions: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits({
  addNew: [],
  "update:modelValue": [],
});

const localValue = ref();

const query = ref("");
const isDropdownOpened = ref(false);
const filterOptions = (options, query) => {
  const filteredOptions = [];

  for (const option of options) {
    if (option.values) {
      const filteredGroup = option.values.filter((subOption) =>
        subOption.label.toLowerCase().includes(query.toLowerCase()),
      );

      if (filteredGroup.length > 0) {
        filteredOptions.push({
          label: option.label,
          values: filteredGroup,
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
  const result = props.multiple
    ? localValue.value.find((o) => o === option.value)
      ? localValue.value.filter((o) => o !== option.value)
      : [...localValue.value, option.value]
    : option.value;

  if (!props.multiple) {
    isDropdownOpened.value = false;
  }
  localValue.value = result;
  emit("update:modelValue", result);
};

const localValueOption = computed(() => {
  if (props.multiple) {
    let selected = [];
    for (const option of props.options) {
      if (option.values) {
        option.values.forEach((o) => {
          if (localValue.value.includes(o.value)) {
            selected.push(o);
          }
        });
      } else {
        if (localValue.value.includes(option.value)) {
          selected.push(option);
        }
      }
    }
    return selected;
  } else {
    return props.options.find((o) => o.value === localValue.value);
  }
});

const removeOption = (value) => {
  localValue.value = localValue.value.filter((o) => o !== value);
  emit("update:modelValue", localValue.value);
};

const initLocalValue = () => {
  if (
    props.modelValue === null ||
    props.modelValue === undefined ||
    props.modelValue === ""
  ) {
    localValue.value = props.multiple ? [] : "";

    return;
  }

  localValue.value = props.modelValue;
};

initLocalValue();
</script>

<template>
  <BaseInput
    :label="isInlineLabel ? '' : label"
    :hint="hint"
    class="relative"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <Dropdown
      v-model="isDropdownOpened"
      class="w-full"
      :distance="4"
      popper-class="w-full"
      :is-disabled="isDisabled"
    >
      <div
        class="border min-h-[36px] w-full px-3 flex justify-between items-center cursor-pointer gap-x-3 rounded"
        :class="{
          'border-oc-error': errorMessage && !isDisabled,
          'pointer-events-none bg-oc-bg-dark': isDisabled,
          'py-3': multiple,
        }"
      >
        <div v-if="multiple" class="flex flex-wrap gap-2">
          <Chip
            v-for="option in localValueOption.slice(0, maxVisibleOptions)"
            :key="option.value"
            closable
            :label="option.label"
            @remove="removeOption(option.value)"
          />
          <Chip
            v-if="localValueOption.length > maxVisibleOptions"
            :label="`+${localValueOption.length - maxVisibleOptions}`"
          />
          <span v-if="localValueOption.length === 0" class="text-oc-text-300">{{
            placeholder
          }}</span>
        </div>
        <template v-else>
          <span class="whitespace-nowrap">
            <span v-if="isInlineLabel && label" class="text-oc-text-300">
              {{ label }}:
            </span>
            <span v-if="localValueOption">{{ localValueOption.label }}</span>
            <span v-else class="text-oc-text-300">{{ placeholder }}</span>
          </span>
        </template>
        <Icon
          class="w-5 h-5 text-oc-text-400 transition-all duration-500"
          :class="isDropdownOpened && '-rotate-180'"
          name="chevron-down"
        />
      </div>

      <template #menu>
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

          <div class="max-h-[320px] overflow-y-auto">
            <slot :f-options="filterableOptions" :select-option="selectOption">
              <Option
                v-for="option in filterableOptions"
                :key="option.value"
                :label="option.label"
                :is-selected="
                  multiple
                    ? localValue?.find((o) => o === option.value) !== undefined
                    : localValue === option.value
                "
                @click="selectOption(option)"
              />
            </slot>
          </div>

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
      </template>
    </Dropdown>
  </BaseInput>
</template>
