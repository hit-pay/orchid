/**
 * Manual documentation overrides for FormBuilder.
 *
 * schemaOverrides — merged on top of the auto-generated schema from vue-component-meta.
 *   Use this for things the type system can't express: itemShape, richer event/slot
 *   descriptions, or correcting misleading inferred types.
 *
 * examples — replaces auto-generated examples entirely.
 *   Each example is a complete, copy-pasteable Vue SFC snippet focused on one pattern.
 */

export default {
  // ── Schema enrichments ────────────────────────────────────────────────────

  schemaOverrides: {
    props: {
      jsonForm: {
        type: 'FormField[]',
        description:
          'Array of field config objects. Each object describes one field rendered by FormBuilder. ' +
          'Built-in types: Input · CardInput · Checkbox · CheckboxesGroup · DatePicker · ' +
          'LinkInput · NumberInput · PhoneInput · RadioGroup · RangeInput · Select · ' +
          'SelectOptions · SectionItem · Slider · TextArea · TimePicker · Toggle. ' +
          'Any unknown type falls through to a named slot.',
        itemShape: {
          name: 'string | Array<{ key: string }>',
          type: 'string — built-in component type or custom slot name',
          props: 'Record<string, any> — props forwarded to the field component',
          show_if: 'string | string[] — watch this field name(s) for conditional visibility',
          show_if_value: 'any | any[] — show when the watched field equals this value',
          show_if_not: 'any — show when the watched field does NOT equal this value',
          show_if_min: 'number — show when the watched field numeric value is >= this',
          show_if_preview: 'string — show/hide in store-design preview mode',
          show_if_preview_only: 'string — only show in this preview mode',
          show_if_preview_not: 'string — hide in this preview mode'
        }
      }
    },
    events: {
      onUpdate: {
        description:
          'Fired whenever a field value changes. ' +
          '`form` is the full field config object from `jsonForm` (use `form.name` as the key). ' +
          '`value` is the new value from the field component. ' +
          'Standard handler: `(form, value) => { values.value[form.name] = value }`.',
        type: '(form: FormField, value: any) => void'
      }
    },
    slots: {
      '[type]': {
        description:
          'Dynamic slot for custom field types not built into FormBuilder. ' +
          'The slot name matches the `type` string in the field config ' +
          '(e.g. `type: "AvatarPicker"` → `<template #AvatarPicker>`). ' +
          'Use this to render fully custom field UIs while keeping them inside the FormBuilder lifecycle.',
        bindings: [
          { name: 'form', type: 'FormField', description: 'Full field config object from jsonForm' },
          { name: 'value', type: 'any', description: 'Current field value' },
          { name: 'error', type: 'string', description: 'Current validation error message' },
          { name: 'on-update', type: 'Function', description: 'Call as on-update(form, newValue) to propagate the change' },
          { name: 'form-id', type: 'string', description: 'The form id prop value' }
        ]
      }
    }
  },

  // ── Examples ─────────────────────────────────────────────────────────────

  examples: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Minimal form with a few common field types. Shows the core pattern: jsonForm config array, external values ref, and onUpdate handler.',
      highlights: ['jsonForm config', 'external values ref', 'onUpdate handler'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({
  full_name: '',
  country: '',
  newsletter: false
})

const errors = ref({})

const form = [
  {
    name: 'full_name',
    type: 'Input',
    props: { label: 'Full name', placeholder: 'Jane Doe' }
  },
  {
    name: 'country',
    type: 'Select',
    props: {
      label: 'Country',
      options: [
        { label: 'Indonesia', value: 'ID' },
        { label: 'Singapore', value: 'SG' },
        { label: 'Malaysia', value: 'MY' }
      ]
    }
  },
  {
    name: 'newsletter',
    type: 'Toggle',
    props: { label: 'Subscribe to newsletter' }
  }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="basic-form"
    class="flex flex-col gap-4"
    :json-form="form"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>`
      }
    },

    {
      id: 'all-field-types',
      title: 'All Field Types',
      description: 'Reference for every built-in type string. Use this to see which type value maps to which component.',
      highlights: ['all built-in types', 'type reference'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({
  range: [0, 100],
  slider: 50,
  toggle: false,
  checkbox: false
})

const errors = ref({})

const form = [
  { name: 'input',      type: 'Input',          props: { label: 'Input',          placeholder: 'Text' } },
  { name: 'number',     type: 'NumberInput',     props: { label: 'NumberInput' } },
  { name: 'textarea',   type: 'TextArea',        props: { label: 'TextArea',       placeholder: 'Multi-line text' } },
  { name: 'phone',      type: 'PhoneInput',      props: { label: 'PhoneInput' } },
  { name: 'card',       type: 'CardInput',       props: { label: 'CardInput',      placeholder: '•••• •••• •••• ••••' } },
  { name: 'select',     type: 'Select',          props: { label: 'Select',         options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }] } },
  { name: 'multiselect',type: 'Select',          props: { label: 'Select (multiple)', multiple: true, isFilterable: true, options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'checkbox',   type: 'Checkbox',        props: { label: 'Checkbox' } },
  { name: 'checkboxes', type: 'CheckboxesGroup', props: { label: 'CheckboxesGroup', checkboxes: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'radio',      type: 'RadioGroup',      props: { label: 'RadioGroup', groupName: 'rg1', radio: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'toggle',     type: 'Toggle',          props: { label: 'Toggle' } },
  { name: 'date',       type: 'DatePicker',      props: { label: 'DatePicker' } },
  { name: 'time',       type: 'TimePicker',      props: { label: 'TimePicker' } },
  { name: 'range',      type: 'RangeInput',      props: { label: 'RangeInput' } },
  { name: 'slider',     type: 'Slider',          props: { label: 'Slider', minLimit: 0, maxLimit: 100 } },
  { name: 'divider',    type: 'SectionItem',     props: { title: 'SectionItem — divider row', isToggle: false } }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="all-types-form"
    class="flex flex-col gap-4"
    :json-form="form"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>`
      }
    },

    {
      id: 'two-column-grid',
      title: 'Two-Column Grid',
      description: 'Responsive 2-column layout using the grid prop. Field names must match the area names defined in grid.lg.area. Single column on mobile (xs), two columns on desktop (lg).',
      highlights: ['grid prop', 'responsive layout', 'area names must match field names'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone: ''
})

const errors = ref({})

// Area names must exactly match the field name strings below
const grid = {
  xs: {
    area: \`first_name
last_name
email
phone\`,
    rows: 'auto',
    columns: '100%'
  },
  lg: {
    area: \`first_name last_name
email      phone\`,
    rows: 'auto',
    columns: '50% 50%'
  }
}

const form = [
  { name: 'first_name', type: 'Input',     props: { label: 'First name', placeholder: 'Jane' } },
  { name: 'last_name',  type: 'Input',     props: { label: 'Last name',  placeholder: 'Doe' } },
  { name: 'email',      type: 'Input',     props: { label: 'Email',      placeholder: 'jane@example.com' } },
  { name: 'phone',      type: 'PhoneInput', props: { label: 'Phone' } }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="grid-form"
    class="gap-4"
    :json-form="form"
    :values="values"
    :errors="errors"
    :grid="grid"
    @on-update="onUpdate"
  />
</template>`
      }
    },

    {
      id: 'conditional-fields',
      title: 'Conditional Fields',
      description: 'Fields are shown/hidden based on another field\'s value using show_if rules. Supports single condition (show_if_value), negation (show_if_not), minimum numeric value (show_if_min), and multiple conditions (array syntax).',
      highlights: ['show_if', 'show_if_value', 'show_if_not', 'show_if_min', 'multiple conditions'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({
  delivery_method: 'pickup',
  express: false,
  column_count: '1'
})

const errors = ref({})

const form = [
  // Trigger field — controls which fields below are visible
  {
    name: 'delivery_method',
    type: 'Select',
    props: {
      label: 'Delivery method',
      options: [
        { label: 'Pickup', value: 'pickup' },
        { label: 'Delivery', value: 'delivery' }
      ]
    }
  },

  // show_if_value: visible only when delivery_method === 'delivery'
  {
    name: 'address',
    type: 'Input',
    show_if: 'delivery_method',
    show_if_value: 'delivery',
    props: { label: 'Delivery address', placeholder: '123 Main St' }
  },

  // show_if_not: visible when delivery_method !== 'delivery'
  {
    name: 'pickup_note',
    type: 'Input',
    show_if: 'delivery_method',
    show_if_not: 'delivery',
    props: { label: 'Pickup note', placeholder: 'e.g. knock on door' }
  },

  { name: 'express', type: 'SectionItem', props: { title: 'Express delivery', isToggle: true } },

  // Multiple conditions (AND): both delivery_method === 'delivery' AND express === true
  {
    name: 'express_note',
    type: 'Input',
    show_if: ['delivery_method', 'express'],
    show_if_value: ['delivery', true],
    props: { label: 'Express delivery note' }
  },

  // show_if_min: visible when column_count >= 2
  {
    name: 'column_count',
    type: 'Select',
    props: { label: 'Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }] }
  },
  {
    name: 'col2_title',
    type: 'Input',
    show_if: 'column_count',
    show_if_min: '2',
    props: { label: 'Column 2 title (shows when columns >= 2)' }
  },
  {
    name: 'col3_title',
    type: 'Input',
    show_if: 'column_count',
    show_if_min: '3',
    props: { label: 'Column 3 title (shows when columns >= 3)' }
  }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="conditional-form"
    class="flex flex-col gap-4"
    :json-form="form"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>`
      }
    },

    {
      id: 'custom-slot',
      title: 'Custom Slot',
      description: 'Any field with a type not in the built-in list falls through to a named slot. The slot name equals the type string. Slot receives: form (config object), value, error, and on-update function.',
      highlights: ['custom slot', 'dynamic slot name', 'slot bindings: form / value / error / on-update'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({
  username: '',
  avatar_url: ''
})

const errors = ref({})

// 'AvatarPicker' is not a built-in type — it renders via the #AvatarPicker slot below
const form = [
  {
    name: 'username',
    type: 'Input',
    props: { label: 'Username', placeholder: 'john_doe' }
  },
  {
    name: 'avatar_url',
    type: 'AvatarPicker'
  }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="custom-slot-form"
    class="flex flex-col gap-4"
    :json-form="form"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  >
    <!--
      Slot name = the type string ('AvatarPicker').
      Bindings: form, value, error, on-update
    -->
    <template #AvatarPicker="{ form: field, value, error, onUpdate: emit }">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-oc-text">Avatar</label>
        <div class="flex items-center gap-3">
          <img
            v-if="value"
            :src="value"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div
            v-else
            class="w-10 h-10 rounded-full bg-oc-bg-2 flex items-center justify-center text-oc-text-400 text-xs"
          >
            No img
          </div>
          <Button
            variant="secondary"
            size="small"
            @click="emit(field, 'https://i.pravatar.cc/80')"
          >
            Choose avatar
          </Button>
          <Button
            v-if="value"
            variant="secondary"
            size="small"
            @click="emit(field, '')"
          >
            Remove
          </Button>
        </div>
        <span v-if="error" class="text-xs text-oc-error">{{ error }}</span>
      </div>
    </template>
  </FormBuilder>
</template>`
      }
    },

    {
      id: 'with-validation',
      title: 'With Validation',
      description: 'Pass an errors object keyed by field name to display validation errors under each field. Errors are cleared per-field as the user edits.',
      highlights: ['errors prop', 'per-field error messages', 'required fields'],
      code: {
        language: 'vue',
        snippet: `<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({ email: '', password: '' })

const errors = ref({
  email: '',
  password: ''
})

const form = [
  {
    name: 'email',
    type: 'Input',
    props: { label: 'Email', placeholder: 'jane@example.com' }
  },
  {
    name: 'password',
    type: 'Input',
    props: { label: 'Password', isPassword: true, placeholder: '••••••••' }
  }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
  // Clear error on edit
  errors.value[formItem.name] = ''
}

function submit() {
  const newErrors = {}
  if (!values.value.email)    newErrors.email    = 'Email is required'
  if (!values.value.password) newErrors.password = 'Password is required'
  errors.value = newErrors

  if (!Object.keys(newErrors).length) {
    alert('Submitted: ' + JSON.stringify(values.value))
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <FormBuilder
      id="validation-form"
      class="flex flex-col gap-4"
      :json-form="form"
      :values="values"
      :errors="errors"
      @on-update="onUpdate"
    />
    <Button @click="submit">Submit</Button>
  </div>
</template>`
      }
    }
  ]
}
