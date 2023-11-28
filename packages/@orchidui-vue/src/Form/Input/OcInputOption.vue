<script setup>
import { BaseInput, Input, Chip, Icon } from "@/orchidui";
import { computed, ref } from "vue";

const props = defineProps({
  label: String,
  hint: String,
  errorMessage: String,
  placeholder: String,
  isInlineLabel: Boolean,
  isReadonly: Boolean,
  isDisabled: Boolean,
  modelValue: Array,
  maxVisibleOptions: {
    type: Number,
    default: 2,
  },
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
  "update:modelValue": [],
  "option-added": [],
});

const localValue = ref(props.modelValue || []);

const inputRef = ref();

const query = ref("");

const areAllOptionsVisible = ref(false);
const isFocused = ref(false);

const optionsVisible = computed(() => {
  if (areAllOptionsVisible.value) {
    return localValue.value;
  }

  return localValue.value.slice(0, props.maxVisibleOptions);
});

const removeOption = (value) => {
  localValue.value = localValue.value.filter((o) => o !== value);
  emit("update:modelValue", localValue.value);
};

const setNewValue = (value) => {
  if (!value?.trim()) {
    return;
  }

  localValue.value.push(value);
  query.value = "";

  emit("update:modelValue", localValue.value);
  emit('option-added', value);
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
    <div class="flex flex-1 items-baseline gap-x-2">
      <label v-if="isInlineLabel && label" class="text-oc-text-300">
        {{ label }}:
      </label>

      <div class="flex items-center gap-x-1 w-full" @click="inputRef.focus()">
        <div
          class="border min-h-[36px] py-3 w-full px-3 flex justify-between items-center cursor-pointer gap-x-3 rounded"
          :class="{
            'border-oc-error': errorMessage && !isDisabled,
            'pointer-events-none bg-oc-bg-dark': isDisabled,
          }"
        >
          <div class="flex flex-wrap gap-2">
            <Chip
              v-for="(option, index) in optionsVisible"
              :key="`${option}-${index}`"
              closable
              :label="option"
              @remove="removeOption(option)"
            />
            <Chip
              v-if="localValue.length > maxVisibleOptions"
              variant="gray"
              @click="areAllOptionsVisible = !areAllOptionsVisible"
            >
              <Icon
                v-if="areAllOptionsVisible"
                name="minus"
                width="12"
                height="12"
              />
              <span v-else>
                {{ `+${localValue.length - maxVisibleOptions}` }}
              </span>
            </Chip>

            <input
              ref="inputRef"
              type="text"
              :value="query"
              :readonly="isReadonly"
              :placeholder="placeholder"
              :disabled="isDisabled"
              class="h-7 flex-1 min-w-[80px] outline-none text-oc-text disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              @focus="isFocused = true"
              @blur="
                isFocused = false;
                $emit('blur', $event);
              "
              @keyup.enter="setNewValue($event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseInput>
</template>
