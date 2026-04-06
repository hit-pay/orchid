import { Theme, FormBuilder, Input, Button } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: FormBuilder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
FormBuilder renders a dynamic form from a \`jsonForm\` array of field config objects.
Each config describes one field: \`name\` (key), \`type\` (component type), \`props\` (forwarded props).

**Built-in types:** Input · CardInput · Checkbox · CheckboxesGroup · DatePicker ·
LinkInput · NumberInput · PhoneInput · RadioGroup · RangeInput · Select ·
SelectOptions · SectionItem · Slider · TextArea · TimePicker · Toggle

**Updates:** listen to \`@on-update="(formItem, value) => { values[formItem.name] = value }"\`

**Conditional visibility:** add \`show_if\` / \`show_if_value\` / \`show_if_not\` / \`show_if_min\` to any field.

**Grid layout:** pass a \`grid\` prop to arrange fields in a responsive CSS grid.

**Custom types:** any unknown \`type\` falls through to a slot named after the type.
        `.trim()
      }
    }
  }
}

// ── Shared helper ─────────────────────────────────────────────────────────────

const makeUpdateHandler = (values) => (formItem, value) => {
  if (typeof formItem.name === 'object') {
    formItem.name.forEach((f, i) => { values.value[f.key] = value[i] })
  } else {
    values.value[formItem.name] = value
  }
}

// ── Basic ─────────────────────────────────────────────────────────────────────

export const Basic = {
  description: 'Minimal form with common field types. Shows the core pattern: jsonForm config array, external values ref, and onUpdate handler.',
  highlights: ['jsonForm config array', 'external values ref', 'onUpdate handler'],
  code: `<script setup>
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
</template>`,
  render: () => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ full_name: '', country: '', newsletter: false })
      const errors = ref({})
      const form = [
        { name: 'full_name', type: 'Input',  props: { label: 'Full name', placeholder: 'Jane Doe' } },
        { name: 'country',   type: 'Select', props: { label: 'Country', options: [{ label: 'Indonesia', value: 'ID' }, { label: 'Singapore', value: 'SG' }] } },
        { name: 'newsletter',type: 'Toggle', props: { label: 'Subscribe to newsletter' } }
      ]
      const onUpdate = makeUpdateHandler(values)
      return { values, errors, form, onUpdate }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder id="basic-form" class="flex flex-col gap-4"
          :json-form="form" :values="values" :errors="errors" @on-update="onUpdate" />
      </Theme>
    `
  })
}

// ── All Field Types ───────────────────────────────────────────────────────────

export const AllFieldTypes = {
  description: 'Reference for every built-in type string. Each entry shows which type value maps to which component.',
  highlights: ['all built-in type strings', 'type reference'],
  code: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ range: [0, 100], slider: 50, toggle: false, checkbox: false })
const errors = ref({})

const form = [
  { name: 'input',       type: 'Input',          props: { label: 'Input',          placeholder: 'Text' } },
  { name: 'number',      type: 'NumberInput',     props: { label: 'NumberInput' } },
  { name: 'textarea',    type: 'TextArea',        props: { label: 'TextArea',       placeholder: 'Multi-line text' } },
  { name: 'phone',       type: 'PhoneInput',      props: { label: 'PhoneInput' } },
  { name: 'card',        type: 'CardInput',       props: { label: 'CardInput',      placeholder: '•••• •••• •••• ••••' } },
  { name: 'select',      type: 'Select',          props: { label: 'Select',         options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }] } },
  { name: 'multiselect', type: 'Select',          props: { label: 'Select (multiple)', multiple: true, isFilterable: true, options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'checkbox',    type: 'Checkbox',        props: { label: 'Checkbox' } },
  { name: 'checkboxes',  type: 'CheckboxesGroup', props: { label: 'CheckboxesGroup', checkboxes: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'radio',       type: 'RadioGroup',      props: { label: 'RadioGroup', groupName: 'rg1', radio: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'toggle',      type: 'Toggle',          props: { label: 'Toggle' } },
  { name: 'date',        type: 'DatePicker',      props: { label: 'DatePicker' } },
  { name: 'time',        type: 'TimePicker',      props: { label: 'TimePicker' } },
  { name: 'range',       type: 'RangeInput',      props: { label: 'RangeInput' } },
  { name: 'slider',      type: 'Slider',          props: { label: 'Slider', minLimit: 0, maxLimit: 100 } },
  { name: 'divider',     type: 'SectionItem',     props: { title: 'SectionItem — divider / toggle row' } }
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
</template>`,
  render: () => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ range: [0, 100], slider: 50, toggle: false, checkbox: false })
      const errors = ref({})
      const form = [
        { name: 'input',      type: 'Input',          props: { label: 'Input', placeholder: 'Text' } },
        { name: 'number',     type: 'NumberInput',     props: { label: 'NumberInput' } },
        { name: 'textarea',   type: 'TextArea',        props: { label: 'TextArea', placeholder: 'Multi-line' } },
        { name: 'select',     type: 'Select',          props: { label: 'Select', options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
        { name: 'checkbox',   type: 'Checkbox',        props: { label: 'Checkbox' } },
        { name: 'checkboxes', type: 'CheckboxesGroup', props: { label: 'CheckboxesGroup', checkboxes: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
        { name: 'radio',      type: 'RadioGroup',      props: { label: 'RadioGroup', groupName: 'rg1', radio: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
        { name: 'toggle',     type: 'Toggle',          props: { label: 'Toggle' } },
        { name: 'date',       type: 'DatePicker',      props: { label: 'DatePicker' } },
        { name: 'slider',     type: 'Slider',          props: { label: 'Slider', minLimit: 0, maxLimit: 100 } },
      ]
      const onUpdate = makeUpdateHandler(values)
      return { values, errors, form, onUpdate }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder id="all-types-form" class="flex flex-col gap-4"
          :json-form="form" :values="values" :errors="errors" @on-update="onUpdate" />
      </Theme>
    `
  })
}

// ── Two Column Grid ───────────────────────────────────────────────────────────

export const TwoColumnGrid = {
  description: 'Responsive 2-column layout via the grid prop. Field names must match the area names in grid.lg.area. Single column on mobile, two columns on desktop.',
  highlights: ['grid prop', 'xs/lg breakpoints', 'area names must match field names'],
  code: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ first_name: '', last_name: '', email: '', phone: '' })
const errors = ref({})

// Area names must exactly match the field name strings
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
</template>`,
  render: () => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ first_name: '', last_name: '', email: '', phone: '' })
      const errors = ref({})
      const grid = {
        xs: { area: 'first_name\nlast_name\nemail\nphone', rows: 'auto', columns: '100%' },
        lg: { area: 'first_name last_name\nemail phone', rows: 'auto', columns: '50% 50%' }
      }
      const form = [
        { name: 'first_name', type: 'Input',     props: { label: 'First name', placeholder: 'Jane' } },
        { name: 'last_name',  type: 'Input',     props: { label: 'Last name',  placeholder: 'Doe' } },
        { name: 'email',      type: 'Input',     props: { label: 'Email',      placeholder: 'jane@example.com' } },
        { name: 'phone',      type: 'PhoneInput', props: { label: 'Phone' } }
      ]
      const onUpdate = makeUpdateHandler(values)
      return { values, errors, grid, form, onUpdate }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder id="grid-form" class="gap-4"
          :json-form="form" :values="values" :errors="errors" :grid="grid" @on-update="onUpdate" />
      </Theme>
    `
  })
}

// ── Conditional Fields ────────────────────────────────────────────────────────

export const ConditionalFields = {
  description: "Fields shown/hidden based on another field's value. Supports show_if_value (equals), show_if_not (not equals), show_if_min (numeric minimum), and array syntax for multiple conditions (AND).",
  highlights: ['show_if_value', 'show_if_not', 'show_if_min', 'multiple conditions (AND)'],
  code: `<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ delivery_method: 'pickup', express: false, column_count: '1' })
const errors = ref({})

const form = [
  // Trigger field
  {
    name: 'delivery_method',
    type: 'Select',
    props: { label: 'Delivery method', options: [{ label: 'Pickup', value: 'pickup' }, { label: 'Delivery', value: 'delivery' }] }
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
    props: { label: 'Pickup note' }
  },
  { name: 'express', type: 'SectionItem', props: { title: 'Express delivery', isToggle: true } },
  // Multiple conditions (AND): delivery === 'delivery' AND express === true
  {
    name: 'express_note',
    type: 'Input',
    show_if: ['delivery_method', 'express'],
    show_if_value: ['delivery', true],
    props: { label: 'Express note' }
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
    props: { label: 'Column 2 title (visible when columns >= 2)' }
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
</template>`,
  render: () => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ delivery_method: 'pickup', express: false, column_count: '1' })
      const errors = ref({})
      const form = [
        { name: 'delivery_method', type: 'Select', props: { label: 'Delivery method', options: [{ label: 'Pickup', value: 'pickup' }, { label: 'Delivery', value: 'delivery' }] } },
        { name: 'address',         type: 'Input',  show_if: 'delivery_method', show_if_value: 'delivery', props: { label: 'Delivery address' } },
        { name: 'pickup_note',     type: 'Input',  show_if: 'delivery_method', show_if_not: 'delivery',   props: { label: 'Pickup note' } },
        { name: 'express',         type: 'SectionItem', props: { title: 'Express delivery', isToggle: true } },
        { name: 'express_note',    type: 'Input',  show_if: ['delivery_method', 'express'], show_if_value: ['delivery', true], props: { label: 'Express note' } },
        { name: 'column_count',    type: 'Select', props: { label: 'Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }] } },
        { name: 'col2_title',      type: 'Input',  show_if: 'column_count', show_if_min: '2', props: { label: 'Column 2 title (shows when >= 2)' } }
      ]
      const onUpdate = makeUpdateHandler(values)
      return { values, errors, form, onUpdate }
    },
    template: `
      <Theme class="p-8">
        <div class="mb-4 p-3 rounded bg-oc-bg-2 text-sm text-oc-text-400">{{ values }}</div>
        <FormBuilder id="conditional-form" class="flex flex-col gap-4"
          :json-form="form" :values="values" :errors="errors" @on-update="onUpdate" />
      </Theme>
    `
  })
}

// ── Custom Slot ───────────────────────────────────────────────────────────────

export const CustomSlot = {
  description: "Unknown type strings fall through to a named slot. The slot name equals the type string. Slot receives: form (config), value, error, and on-update function.",
  highlights: ['custom slot name = type string', 'slot bindings: form / value / error / on-update'],
  code: `<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({ username: '', avatar_url: '' })
const errors = ref({})

// 'AvatarPicker' is not a built-in type — rendered via the #AvatarPicker slot
const form = [
  { name: 'username',   type: 'Input',       props: { label: 'Username', placeholder: 'john_doe' } },
  { name: 'avatar_url', type: 'AvatarPicker' }
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
    <!-- slot name = type string ('AvatarPicker') -->
    <template #AvatarPicker="{ form: field, value, error, onUpdate: emit }">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-oc-text">Avatar</label>
        <div class="flex items-center gap-3">
          <img v-if="value" :src="value" class="w-10 h-10 rounded-full object-cover" />
          <div v-else class="w-10 h-10 rounded-full bg-oc-bg-2" />
          <Button variant="secondary" size="small" @click="emit(field, 'https://i.pravatar.cc/80')">
            Choose avatar
          </Button>
        </div>
        <span v-if="error" class="text-xs text-oc-error">{{ error }}</span>
      </div>
    </template>
  </FormBuilder>
</template>`,
  render: () => ({
    components: { Theme, FormBuilder, Input, Button },
    setup() {
      const values = ref({ username: '', avatar_url: '' })
      const errors = ref({})
      const form = [
        { name: 'username',   type: 'Input',       props: { label: 'Username', placeholder: 'john_doe' } },
        { name: 'avatar_url', type: 'AvatarPicker' }
      ]
      const onUpdate = makeUpdateHandler(values)
      return { values, errors, form, onUpdate }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder id="custom-slot-form" class="flex flex-col gap-4"
          :json-form="form" :values="values" :errors="errors" @on-update="onUpdate">
          <template #AvatarPicker="{ form: field, value, error, onUpdate: emit }">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium">Avatar</label>
              <div class="flex items-center gap-3">
                <img v-if="value" :src="value" class="w-10 h-10 rounded-full object-cover" />
                <div v-else class="w-10 h-10 rounded-full bg-oc-bg-2" />
                <Button variant="secondary" size="small" @click="emit(field, 'https://i.pravatar.cc/80')">Choose avatar</Button>
              </div>
              <span v-if="error" class="text-xs text-oc-error">{{ error }}</span>
            </div>
          </template>
        </FormBuilder>
      </Theme>
    `
  })
}

// ── With Validation ───────────────────────────────────────────────────────────

export const WithValidation = {
  description: 'Pass an errors object keyed by field name to show validation errors. Clear errors per-field as the user edits.',
  highlights: ['errors prop', 'per-field error messages', 'clear on edit'],
  code: `<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({ email: '', password: '' })
const errors = ref({ email: '', password: '' })

const form = [
  { name: 'email',    type: 'Input', props: { label: 'Email',    placeholder: 'jane@example.com' } },
  { name: 'password', type: 'Input', props: { label: 'Password', isPassword: true } }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
  errors.value[formItem.name] = '' // clear error on edit
}

function submit() {
  errors.value = {
    email:    values.value.email    ? '' : 'Email is required',
    password: values.value.password ? '' : 'Password is required'
  }
  if (!errors.value.email && !errors.value.password) {
    alert('Submitted!')
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
</template>`,
  render: () => ({
    components: { Theme, FormBuilder, Button },
    setup() {
      const values = ref({ email: '', password: '' })
      const errors = ref({ email: '', password: '' })
      const form = [
        { name: 'email',    type: 'Input', props: { label: 'Email',    placeholder: 'jane@example.com' } },
        { name: 'password', type: 'Input', props: { label: 'Password', isPassword: true } }
      ]
      function onUpdate(formItem, value) {
        values.value[formItem.name] = value
        errors.value[formItem.name] = ''
      }
      function submit() {
        errors.value = {
          email:    values.value.email    ? '' : 'Email is required',
          password: values.value.password ? '' : 'Password is required'
        }
      }
      return { values, errors, form, onUpdate, submit }
    },
    template: `
      <Theme class="p-8 flex flex-col gap-4">
        <FormBuilder id="validation-form" class="flex flex-col gap-4"
          :json-form="form" :values="values" :errors="errors" @on-update="onUpdate" />
        <Button @click="submit">Submit</Button>
      </Theme>
    `
  })
}
