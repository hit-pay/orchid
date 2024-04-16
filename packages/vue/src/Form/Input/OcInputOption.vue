<script setup>
import { BaseInput, Input, Chip, Icon } from "@/orchidui";
import { computed, ref, watch } from "vue";

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
  allowDuplicated: {
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
  "option-removed": [],
});

const localValue = ref([]);

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
  emit("option-removed", value);
  emit("update:modelValue", localValue.value);
};

const setNewValue = (value) => {
  if (!value?.trim()) {
    return;
  }

  if (!props.allowDuplicated && props.modelValue?.includes(value)) {
    return;
  }

  localValue.value.push(value);
  query.value = "";

  emit("update:modelValue", localValue.value);
  emit("option-added", value);
};

watch(
  () => props.modelValue,
  () => {
    localValue.value = [...(props.modelValue || [])];
  },
  {
    immediate: true,
    deep: true,
  },
);

defineExpose({
  focus: () => inputRef.value.focus(),
});
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

      <div
        class="bg-oc-bg-light flex items-center gap-x-1 w-full"
        @click="inputRef.focus()"
      >
        <div
          class="border min-h-[36px] py-3 w-full px-3 flex justify-between items-center cursor-pointer gap-x-3 rounded"
          :class="{
            'border-oc-error': errorMessage && !isDisabled,
            'pointer-events-none bg-oc-bg-dark': isDisabled,
          }"
        >
          <div class="w-full flex flex-wrap gap-2">
            <slot
              :options="optionsVisible"
              :are-all-options-visible="areAllOptionsVisible"
            >
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
            </slot>

            <input
              ref="inputRef"
              type="text"
              :value="query"
              :readonly="isReadonly"
              :placeholder="optionsVisible?.length === 0 ? placeholder : ''"
              :disabled="isDisabled"
              class="h-7 flex-1 outline-none text-oc-text disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
              :class="
                optionsVisible?.length === 0 ? 'min-w-full' : 'min-w-[80px]'
              "
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
