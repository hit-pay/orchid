<script setup>
import { computed, ref, useAttrs, watch } from 'vue'
import { BaseInput, Icon } from '@/orchidui-core'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  /** Disable the input — non-interactive, grayed out. */
  disabled: {
    type: Boolean,
    default: false
  },
  /** Validation error message shown in red below the input. Also applies red border styling. */
  errorMessage: {
    type: String,
    default: ''
  },
  /** Extra attributes forwarded to the inner Icon component (e.g. width, height). */
  iconProps: {
    type: Object,
    default: () => ({})
  },
  /** v-model value — the current input value. */
  modelValue: {
    type: [String, Number],
    default: ''
  },
  /** Field label shown above the input box. */
  label: {
    type: String,
    default: ''
  },
  /** Helper text shown below the label. */
  hint: {
    type: String,
    default: ''
  },
  /** Compact inline label — label text appears inside the input box before the value. */
  isInlineLabel: {
    type: Boolean,
    default: false
  },
  /** AI-assisted state — shows a subtle accent border indicating AI-filled content. Clears on first user focus. */
  ai: {
    type: Boolean,
    default: false
  },
  /** Make the input non-editable without the disabled appearance. Value is selectable/copyable. */
  isReadonly: {
    type: Boolean,
    default: false
  },
  /** Placeholder text shown when the input is empty. */
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  /** Icon name rendered inside the input on the left side (uses the Icon component). */
  icon: {
    type: String,
    default: ''
  },
  /**
   * HTML input type attribute.
   * Use `'password'` to show the eye toggle for visibility.
   */
  inputType: {
    type: String,
    default: 'text'
  },
  /** HTML autocomplete attribute value. Defaults to `'one-time-code'` to suppress browser autofill. */
  autocomplete: {
    type: String,
    default: 'one-time-code'
  },
  /** Static text prefix rendered before the input value (e.g. currency code like `'SGD'`). */
  preFill: {
    type: String,
    default: ''
  },
  /** Apply error border styling without showing an error message text. */
  hasError: {
    type: Boolean,
    default: false
  },
  /** Mark the field as required — shows a `*` indicator next to the label. */
  isRequired: {
    type: Boolean,
    default: false
  },
  /** Icon name rendered inside the label area (e.g. for a tooltip trigger). */
  labelIcon: {
    type: String,
    default: ''
  },
  /** Tooltip text shown when hovering the label icon. */
  tooltipText: {
    type: String,
    default: ''
  },
  /** Extra options forwarded to the label tooltip component. */
  tooltipOptions: {
    type: Object,
    default: () => ({})
  },
  /** Show a vertical separator line between the #leading slot content and the input. */
  hasLeadingSeparator: {
    type: Boolean,
    default: true
  },
  /**
   * HTML inputmode attribute — controls the virtual keyboard type on mobile.
   * @values text, decimal, numeric, tel, search, email, url
   */
  inputMode: {
    type: String,
    validator: (value) =>
      ['text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'].includes(value),
    default: 'text'
  },
  /** HTML pattern attribute for native input validation. */
  pattern: {
    type: String,
    default: ''
  },
  /** CSS class applied to the label element. */
  labelClass: {
    type: String,
    default: ''
  },
  /** CSS class applied to the inner input wrapper div. */
  inputClass: {
    type: String,
    default: ''
  },
  /** CSS class applied to the #trailing slot wrapper. */
  trailingClass: {
    type: String,
    default: ''
  },
  /** CSS class applied to the #leading slot wrapper. */
  leadingClass: {
    type: String,
    default: ''
  }
})

defineEmits([
  /** Input value changed. Payload: new string value. */
  'update:modelValue',
  /** Input lost focus. */
  'blur',
  /** Input gained focus. */
  'focus',
  /** Paste event fired. Payload: ClipboardEvent. */
  'paste'
])

const attrs = useAttrs()

const inputRef = ref()
const isPasswordVisible = ref(false)

defineExpose({
  focus: () => inputRef.value.focus()
})

const isFocused = ref(false)
const hasAi = ref(props.ai && !!props.modelValue)

const inputClasses = computed(() => [
  {
    'focused-shadow': isFocused.value && !props.isReadonly
  },
  !props.disabled && (props.errorMessage || props.hasError)
    ? 'error-shadow'
    : hasAi.value ? 'border-oc-accent-2-300 bg-oc-accent-2-50 focus-within:bg-oc-bg-light' : 'border-oc-gray-200 shadow-oc-gray-200',
  props.disabled ? 'bg-oc-bg-dark pointer-events-none' : (!hasAi.value && 'bg-oc-bg-light'),
  props.inputClass
])

const inputAttrs = computed(() => {
  // eslint-disable-next-line no-unused-vars
  const { class: _, ...rest } = attrs
  const inputAttributes = {}

  if (props.pattern) {
    inputAttributes.pattern = props.pattern
  }

  return { ...inputAttributes, ...rest }
})

const isPasswordInput = computed(() => props.inputType === 'password')

watch(isFocused, () => {
  hasAi.value = false;
}, {
  once: true
})
</script>

<template>
  <BaseInput
    :label="isInlineLabel ? '' : label"
    :label-class="labelClass"
    :hint="hint"
    :ai="hasAi"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
    :class="attrs.class"
  >
    <div
      class="rounded h-[36px] border input-shadow flex items-center transition-all ease-out duration-[250ms] gap-x-3 px-3 cursor-pointer"
      :class="inputClasses"
      @click="$refs.inputRef?.focus()"
    >
      <div
        v-if="$slots.trailing"
        class="border-r py-2 border-gray-200 pr-3 flex items-center h-full"
        :class="trailingClass"
      >
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
            class="h-7 outline-none md:text-base text-lg w-full text-oc-text bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300"
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
            @paste="$emit('paste', $event)"
          />
        </div>
      </div>

      <div
        v-if="$slots.leading || isPasswordInput"
        class="flex items-center h-full"
        :class="leadingClass"
      >
        <span v-if="hasLeadingSeparator" class="border-l border-gray-200 pl-3 py-3 h-full"></span>
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

    <template #right-label>
      <slot name="right-label" />
    </template>
  </BaseInput>
</template>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}
.focused-shadow {
  box-shadow:
    0px 0px 0px 3px var(--oc-primary-200),
    0px 2px 4px 0px #0000003d inset !important;
  border-color: var(--oc-primary-500);
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
.error-shadow {
  box-shadow:
    0px 0px 0px 3px var(--oc-error-200),
    0px 2px 4px 0px #0000003d inset !important;
  border-color: var(--oc-error-500);
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
.input-shadow {
  box-shadow:
    0px 1.5px 1.5px 0px #00000017,
    0px 1px 3px 0px #0000000a;
  &.border-none {
    box-shadow: none !important;
    border: none !important;
  }
}
</style>
