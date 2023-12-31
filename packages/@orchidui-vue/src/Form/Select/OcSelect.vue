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
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  isInlineLabel: Boolean,
  isFilterable: Boolean,
  isDisabled: Boolean,
  isCheckboxes: Boolean,
  isSelectAll: Boolean,
  isAddNew: Boolean,
  options: Array,
  modelValue: [Array, String, Number],
  maxVisibleOptions: {
    type: Number,
    default: 0,
  },
  multiple: Boolean,
  maxOptionAllowed: Number,
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
  chipProps: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits({
  addNew: [],
  "update:modelValue": [],
  "max-option-allowed-set": [],
});

const query = ref("");
const isDropdownOpened = ref(false);

const isSelectedAll = computed(() => {
  if (props.multiple) {
    return (
      props.modelValue.length &&
      props.modelValue.length === filterableOptions.value.length
    );
  }
  return false;
});

const filterableOptions = computed(
  () => filterOptions(props.options, query.value) || [],
);

const localValueOption = computed(() => {
  if (props.multiple) {
    let selected = [];
    for (const option of props.options) {
      if (option.values) {
        option.values.forEach((o) => {
          if ((props.modelValue || []).includes(o.value)) {
            selected.push(o);
          }
        });
      } else {
        if ((props.modelValue || []).includes(option.value)) {
          selected.push(option);
        }
      }
    }
    return selected;
  } else {
    return props.options.find((o) => o.value === props.modelValue);
  }
});

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
const selectOption = (option) => {
  let result;

  if (props.multiple) {
    const isOptionHasBeenSelected = (props.modelValue || []).find(
      (o) => o === option.value,
    );

    if (
      !isOptionHasBeenSelected &&
      props.maxOptionAllowed &&
      localValueOption.value?.length >= Number(props.maxOptionAllowed)
    ) {
      emit("max-option-allowed-set");

      return;
    }

    result = isOptionHasBeenSelected
      ? (props.modelValue || []).filter((o) => o !== option.value)
      : [...(props.modelValue || []), option.value];
  } else {
    result = option.value;

    isDropdownOpened.value = false;
  }

  emit("update:modelValue", result);
};
const removeOption = (value) => {
  emit(
    "update:modelValue",
    (props.modelValue || []).filter((o) => o !== value),
  );
};
const selectAll = () => {
  if (isSelectedAll.value) {
    emit("update:modelValue", []);
  } else {
    emit(
      "update:modelValue",
      filterableOptions.value.map((o) => o.value),
    );
  }
};
</script>

<template>
  <BaseInput
    :label="isInlineLabel ? '' : label"
    :hint="hint"
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
        <div v-if="multiple" class="flex flex-wrap gap-2 overflow-hidden">
          <Chip
            v-for="option in maxVisibleOptions
              ? localValueOption.slice(0, maxVisibleOptions)
              : localValueOption"
            :key="option.value"
            closable
            :variant="option.variant"
            :label="option.label"
            v-bind="chipProps"
            should-truncate-chip
            @remove="removeOption(option.value)"
          />
          <Chip
            v-if="
              maxVisibleOptions && localValueOption.length > maxVisibleOptions
            "
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
          class="w-5 h-5 text-oc-text-400 transition-all shrink-0 duration-500"
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

          <div class="max-h-[320px] overflow-y-auto flex flex-col gap-y-2">
            <Option
              v-if="isCheckboxes && isSelectAll && filterableOptions.length"
              :is-selected="isSelectedAll"
              is-checkboxes
              label="Select All"
              @click="selectAll"
            />
            <slot :f-options="filterableOptions" :select-option="selectOption">
              <Option
                v-for="option in filterableOptions"
                :key="option.value"
                :label="option.label"
                :sub-label="option.subLabel"
                :is-checkboxes="isCheckboxes"
                :is-selected="
                  multiple
                    ? modelValue
                      ? modelValue.find((o) => o === option.value) !== undefined
                      : false
                    : modelValue === option.value
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
