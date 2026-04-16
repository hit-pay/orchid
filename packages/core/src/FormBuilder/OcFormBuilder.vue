<script setup>
import {
  CardInput,
  CheckboxesGroup,
  Input,
  NumberInput,
  LinkInput,
  Select,
  TextArea,
  Toggle,
  TimePicker,
  DatePicker,
  PhoneInput,
  RadioGroup,
  RangeInput,
  Checkbox,
  SectionItem,
  SelectOptions,
  Slider
} from '@/orchidui-core'
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  /** Unique identifier for the form instance. */
  id: {
    type: String,
    required: true
  },
  /**
   * Array of form field configuration objects. Each object describes one field and supports:
   * `name` (string | array) — field key(s); `type` (string) — component type (e.g. `'Input'`,
   * `'Select'`, `'DatePicker'`); `props` (object) — props forwarded to the field component;
   * `show_if`, `show_if_value`, `show_if_not`, `show_if_min` — conditional visibility rules.
   */
  jsonForm: {
    type: Array
  },
  /**
   * Responsive CSS grid layout definition. Shape:
   * `{ [breakpoint: 'xs'|'sm'|'md'|'lg'|'xl'|'xxl']: { area: string, rows: string, columns: string } }`
   * where `area` is a multi-line CSS grid-template-areas string,
   * `rows` is grid-template-rows (e.g. `'auto'`),
   * and `columns` is grid-template-columns (e.g. `'33% 33% 33%'`).
   */
  grid: {
    type: Object,
    default: null
  },
  /** Additional CSS class(es) applied to the form wrapper element. */
  class: String,
  /**
   * Validation error messages keyed by field name.
   * Each value is a string error message displayed under the corresponding field.
   */
  errors: {
    type: Object
  },
  /**
   * Current form field values keyed by field name. Must be kept in sync externally;
   * update via the `onUpdate` event.
   */
  values: {
    type: Object,
    required: true
  },
  /**
   * Additional values used only for evaluating `show_if` conditional logic,
   * without affecting the form model. Useful when visibility depends on data
   * outside the form (e.g. a parent page state).
   */
  logicValues: {
    type: Object
  },
  /**
   * Preview mode identifier passed to store-design fields that use
   * `show_if_preview` / `show_if_preview_only` / `show_if_preview_not` rules.
   * @default undefined
   */
  previewMode: String
})

const emit = defineEmits({
  /**
   * Emitted whenever a form field value changes.
   * @param {Object} form - The field's configuration object from `jsonForm`
   * @param {*} value - The new value emitted by the field component
   */
  onUpdate: (form, value) => true
})

const onUpdate = (form, value) => {
  emit('onUpdate', form, value)
}

const FormTypes = {
  CardInput: CardInput,
  CheckboxesGroup: CheckboxesGroup,
  Input: Input,
  NumberInput: NumberInput,
  LinkInput: LinkInput,
  Select: Select,
  TextArea: TextArea,
  Toggle: Toggle,
  RadioGroup: RadioGroup,
  TimePicker: TimePicker,
  DatePicker: DatePicker,
  Checkbox: Checkbox,
  Slider: Slider,
  RangeInput: RangeInput,
  PhoneInput: PhoneInput,
  SectionItem: SectionItem,
  SelectOptions: SelectOptions
}

const getComponentByType = (type) => {
  if (FormTypes[type]) {
    return FormTypes[type]
  } else {
    return null
  }
}

// grid
const gridDefinitionVariables = computed(() => {
  const parseGridArea = (gridArea) =>
    gridArea
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `"${line}"`)
      .join(' ')

  const variables = {}
  Object.entries(props.grid).forEach(([breakpoint, grid]) => {
    Object.entries(grid).forEach(([key, value]) => {
      variables[`--grid-${breakpoint}-${key}`] = key === 'area' ? parseGridArea(value) : value
    })
  })
  return variables
})

const getFormKey = (name) => {
  if (typeof name === 'object') {
    return name[0].key
  } else {
    return name
  }
}

const gridArea = (name) => {
  return `grid-area: ${getFormKey(name)}`
}

// class
const className = computed(() => props.class)
// from data
const modelValue = ref({})
const errorMessage = ref({})
const formClass = ref({})

const getFirstName = (name) => {
  if (typeof name === 'object') {
    return name[0].key
  } else {
    return name
  }
}

const setModelValues = (newValues) => {
  props.jsonForm.forEach((form) => {
    if (typeof form.name === 'object') {
      let modelValueData = null
      form.name.forEach((formName) => {
        if (newValues[formName.key]) {
          if (modelValueData) {
            modelValueData.push(newValues[formName.key])
          } else {
            modelValueData = [newValues[formName.key]]
          }
        }
      })
      modelValue.value[getFirstName(form.name)] = modelValueData
      setFormClass(form)
    } else {
      if (!form.props?.parentKey) {
        modelValue.value[form.name] = newValues[form.name] ?? ''
      } else {
        modelValue.value[form.props.parentKey] = newValues[form.props.parentKey] ?? {}
        modelValue.value[form.props.parentKey][form.name] =
          newValues[form.props.parentKey][form.name] ?? ''
      }
      setFormClass(form)
    }
  })
}

const setErrorMessage = () => {
  props.jsonForm.forEach((form) => {
    if (typeof form.name === 'object') {
      let message = []
      form.name.forEach((formName) => {
        if (props.errors[formName.key]) {
          message.push(props.errors[formName.key])
        }
      })
      errorMessage.value[getFirstName(form.name)] = message.join(',')
    } else {
      errorMessage.value[form.name] = props.errors[form.name] ?? ''
    }
  })
}
const formLogicValues = computed(() => {
  return {
    ...props.logicValues,
    ...modelValue.value
  }
})
const setFormClass = (form) => {
 
  if (form.show_if || form.show_if_preview) {
    let formClassName = form.class ? form.class : ''

    if (form.show_if) {
      if (form.show_if_value !== undefined) {
        if (Array.isArray(form.show_if_value)) {
          // show if by other setting value
          let showThisField = 0
          form.show_if.forEach((value, arrayIndex) => {
            if(form.show_if_value[arrayIndex] === 'arrayExist'){
              if(formLogicValues.value[form.show_if[arrayIndex]]?.length){
                showThisField = showThisField + 1
              }
            }else if (form.show_if_value[arrayIndex] === formLogicValues.value[form.show_if[arrayIndex]]) {
              showThisField = showThisField + 1
            }
          })
          if(form.show_if_one && showThisField < 1){
            formClassName = formClassName + ' hidden'
          }else if(!form.show_if_one &&showThisField < form.show_if.length){
            formClassName = formClassName + ' hidden'
          }
        }else if(form.show_if_value !== formLogicValues.value[form.show_if]) {
          formClassName = formClassName + ' hidden'
        }
      } else if (form.show_if_not !== undefined) {
        if (form.show_if_not === formLogicValues.value[form.show_if]) {
          formClassName = formClassName + ' hidden'
        }
      } else if (form.show_if_min !== undefined) {
        let minValue = isNaN(parseInt(formLogicValues.value[form.show_if]))
          ? 1
          : parseInt(formLogicValues.value[form.show_if])

        if (minValue < parseInt(form.show_if_min)) {
          formClassName = formClassName + ' hidden'
        }
      }
    } else if (form.show_if_preview) {
      // for store design
      if (form.show_if_preview_only !== undefined) {
        if (form.show_if_preview_only !== props.previewMode) {
          formClassName = formClassName + ' hidden'
        }
      } else if (form.show_if_preview_not !== undefined) {
        if (form.show_if_preview_not === props.previewMode) {
          formClassName = formClassName + ' hidden'
        }
      }
    }

    if (typeof form.name === 'object') {
      formClass.value[getFirstName(form.name)] = formClassName
    } else {
      formClass.value[form.name] = formClassName
    }
  } else {
    formClass.value[form.name] = form.class ? form.class : ''
  }
}

watch(
  () => props.values,
  (newValues) => {
    setModelValues(newValues)
  },
  {
    deep: true
  }
)
watch(
  () => props.logicValues,
  () => {
    setModelValues(props.values)
  },
  {
    deep: true
  }
)

watch(
  () => props.errors,
  (newValues) => {
    setErrorMessage(newValues)
  },
  {
    deep: true
  }
)

watch(
  () => props.previewMode,
  () => {
    setModelValues(props.values)
  }
)

onMounted(() => {
  setModelValues(props.values)
  setErrorMessage(props.errors)
})
</script>
<template>
  <div
    v-if="Object.values(modelValue).length > 0"
    :class="grid ? `responsive-smart-form-grid ${className}` : className"
    :style="grid ? gridDefinitionVariables : ''"
  >
    <template v-for="form in jsonForm" :key="getFormKey(form.name)">
      <div
        :style="grid ? gridArea(form.name) : ''"
        :class="[
          form.type !== 'Children'
            ? formClass[typeof form.name === 'object' ? getFirstName(form.name) : form.name]
            : '',
          form.class
        ]"
      >
        <component
          :is="getComponentByType(form.type)"
          v-if="getComponentByType(form.type)"
          v-bind="form.props"
          :model-value="
            form.props?.parentKey
              ? modelValue?.[form.props.parentKey]?.[form.name]
              : modelValue[typeof form.name === 'object' ? getFirstName(form.name) : form.name]
          "
          :error-message="
            errorMessage[typeof form.name === 'object' ? getFirstName(form.name) : form.name]
          "
          @update:model-value="onUpdate(form, $event)"
        />
        <!--
          @slot [form.type] — Dynamic slot for any field type not built into FormBuilder.
          The slot name matches the `type` string of the field config (e.g. `<template #MyWidget>`).
          @binding {string} form-id - The form's `id` prop
          @binding {Object} form - The full field configuration object from `jsonForm`
          @binding {*} value - Current field value
          @binding {string} error - Current validation error message for this field
          @binding {Function} on-update - Call as `on-update(form, newValue)` to emit the change
        -->
        <slot
          v-else
          :name="form.type"
          :form-id="id"
          :form="form"
          :value="
            form.props?.parentKey
              ? modelValue?.[form.props.parentKey]?.[form.name]
              : modelValue[typeof form.name === 'object' ? getFirstName(form.name) : form.name]
          "
          :error="errorMessage[typeof form.name === 'object' ? getFirstName(form.name) : form.name]"
          :on-update="onUpdate"
        />
      </div>
    </template>
  </div>
</template>
<style lang="scss">
@mixin grid($breakpoint, $default: 'lg') {
  grid-template-areas: var(--grid-#{$breakpoint}-area, var(--grid-#{$default}-area));
  grid-template-rows: var(--grid-#{$breakpoint}-rows, var(--grid-#{$default}-rows));
  grid-template-columns: var(--grid-#{$breakpoint}-columns, var(--grid-#{$default}-columns));
}

.responsive-smart-form-grid {
  max-width: 100%;
  display: grid;
  @include grid(lg);

  @media (max-width: 640px) {
    @include grid(xs);
  }
  @media (min-width: 640px) {
    @include grid(sm);
  }
  @media (min-width: 768px) {
    @include grid(md);
  }
  @media (min-width: 1024px) {
    @include grid(lg);
  }
  @media (min-width: 1280px) {
    @include grid(xl);
  }
  @media (min-width: 1536px) {
    @include grid(xxl);
  }
}
</style>
