<script setup>
import { computed, ref, useAttrs } from 'vue'
import { BaseInput, Icon } from '@/orchidui-core'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  iconProps: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  subLabel: {
    type: String,
    required: false
  },
  hint: {
    type: String,
    default: ''
  },
  isInlineLabel: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  icon: {
    type: String,
    default: ''
  },
  inputType: {
    type: String,
    default: 'text'
  },
  autocomplete: {
    type: String,
    default: 'one-time-code'
  },
  preFill: {
    type: String,
    default: ''
  },
  hasError: {
    type: Boolean,
    default: false
  },
  isRequired: {
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
  },
  hasLeadingSeparator: {
    type: Boolean,
    default: true
  },
  inputMode: {
    type: String,
    validator: (value) =>
      ['text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'].includes(value),
    default: 'text'
  },
  pattern: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  },
  trailingClass: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue', 'blur', 'focus', 'paste'])

const attrs = useAttrs()

const inputRef = ref()
const isPasswordVisible = ref(false)

defineExpose({
  focus: () => inputRef.value.focus()
})

const isFocused = ref(false)
const inputClasses = computed(() => [
  {
    'focused-shadow': isFocused.value && !props.isReadonly
  },
  !props.disabled && (props.errorMessage || props.hasError)
    ? 'error-shadow'
    : 'border-oc-gray-200 shadow-oc-gray-200',
  props.disabled ? 'bg-oc-bg-dark pointer-events-none' : 'bg-oc-bg-light',
  props.inputClass
])

const inputAttrs = computed(() => {
  const { class: classes, ...rest } = attrs
  const inputAttributes = {}

  if (props.pattern) {
    inputAttributes.pattern = props.pattern
  }

  return { ...inputAttributes, ...rest }
})

const isPasswordInput = computed(() => props.inputType === 'password')
</script>

<template>
  <BaseInput
    :label="isInlineLabel ? '' : label"
    :label-class="labelClass"
    :sub-label="subLabel"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <div
      class="rounded h-[36px] border input-shadow flex items-center transition-all ease-out duration-[250ms] gap-x-3 px-3 cursor-pointer"
      :class="inputClasses"
      @click="$refs.inputRef?.focus()"
    >
      <div v-if="$slots.trailing" class="border-r border-gray-200 pr-3 py-3" :class="trailingClass">
        <slot name="trailing" />
      </div>

      <slot name="icon">
        <Icon v-if="icon" class="w-5 h-5 text-oc-text-400" :name="icon" v-bind="iconProps" />
      </slot>

      <div class="flex flex-1 items-baseline gap-x-2">
        <label v-if="isInlineLabel && label" class="text-oc-text-300"> {{ label }}: </label>

        <div class="flex items-center gap-x-1 w-full">
          <span v-if="preFill" class="text-oc-text-300">{{ preFill }}</span>
          <input
            ref="inputRef"
            :value="modelValue"
            :readonly="isReadonly"
            :placeholder="placeholder"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :inputmode="inputMode"
            class="h-7 outline-none md:text-base text-lg w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
            v-bind="inputAttrs"
            :type="isPasswordInput && isPasswordVisible ? 'text' : inputType"
            @focus="
              (e) => {
                isFocused = true
                $emit('focus', e)
              }
            "
            @blur="
              () => {
                isFocused = false
                $emit('blur')
              }
            "
            @input="$emit('update:modelValue', $event.target.value)"
            @paste="$emit('paste')"
          />
        </div>
      </div>

      <div
        v-if="$slots.leading || isPasswordInput"
        class="flex items-center h-full"
      >
        <span v-if="hasLeadingSeparator" class="border-l border-gray-200 pl-3 py-3 h-full" ></span>
        <span
          v-if="!$slots.leading"
          class="text-oc-text-200"
          @click.prevent="isPasswordVisible = !isPasswordVisible"
        >
          <Icon
            :key="isPasswordVisible"
            :name="isPasswordVisible ? 'eye-open' : 'eye-close'"
            width="16"
            height="16"
          />
        </span>
        <slot name="leading" />
      </div>
    </div>

    <template v-if="$slots.hint" #hint>
      <slot name="hint" />
    </template>
  </BaseInput>
</template>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}
.focused-shadow {
  box-shadow: 0px 0px 0px 3px var(--oc-primary-200), 0px 2px 4px 0px #0000003D inset !important;
  border-color: var(--oc-primary-500);
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
.error-shadow {
  box-shadow: 0px 0px 0px 3px var(--oc-error-200), 0px 2px 4px 0px #0000003D inset !important;
  border-color: var(--oc-error-500);
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
.input-shadow {
  box-shadow: 0px 1.5px 1.5px 0px #00000017, 0px 1px 3px 0px #0000000A;
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
</style>
