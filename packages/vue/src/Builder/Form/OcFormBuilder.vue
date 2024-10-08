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
  // TODO : add all form here , best load as async component
} from '@/orchidui'
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  jsonForm: {
    type: Array
  },
  /**
   * Grid needs to be defined in the following format:
   * `{`
   *   `[Responsive size (xs, sm, md, lg, xl, xxl)]: {`
   *     `area: [Grid area definition (names of areas in order)],`
   *     `rows: [Count and size of rows i.e: 'auto' | '100%' | ...],`
   *     `columns: [Count and size of columns i.e: '33% 33% 33%'],`
   *   `}`
   * `}`
   */
  grid: {
    type: Object,
    default: null
  },
  class: String,
  errors: {
    type: Object
  },
  values: {
    type: Object,
    required: true
  },
  previewMode: String // only for store design
})

const emit = defineEmits(['onUpdate'])

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

const setFormClass = (form) => {
  if (form.show_if || form.show_if_preview) {
    let formClassName = form.class ? form.class : ''

    if (form.show_if) {
      // show if by other setting value
      if (form.show_if_value !== undefined) {
        if (form.show_if_value !== modelValue.value[form.show_if]) {
          formClassName = formClassName + ' hidden'
        }
      } else if (form.show_if_not !== undefined) {
        if (form.show_if_not === modelValue.value[form.show_if]) {
          formClassName = formClassName + ' hidden'
        }
      } else if (form.show_if_min !== undefined) {
        let minValue = isNaN(parseInt(modelValue.value[form.show_if]))
          ? 1
          : parseInt(modelValue.value[form.show_if])

        if (minValue < parseInt(form.show_if_min)) {
          formClassName = formClassName + ' hidden'
        }
      }
    } else if (form.show_if_preview) {
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
    <div
      v-for="form in jsonForm"
      :key="getFormKey(form.name)"
      :style="grid ? gridArea(form.name) : ''"
      :class="[
        formClass[typeof form.name === 'object' ? getFirstName(form.name) : form.name],
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
