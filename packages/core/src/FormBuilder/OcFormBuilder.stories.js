import { Theme, FormBuilder, Button } from '@/orchidui-core'
import { ref, computed } from 'vue'
import BasicExample from './examples/Basic.vue'
import BasicRaw from './examples/Basic.vue?raw'
import AllFieldTypesExample from './examples/AllFieldTypes.vue'
import AllFieldTypesRaw from './examples/AllFieldTypes.vue?raw'
import TwoColumnGridExample from './examples/TwoColumnGrid.vue'
import TwoColumnGridRaw from './examples/TwoColumnGrid.vue?raw'
import ConditionalFieldsExample from './examples/ConditionalFields.vue'
import ConditionalFieldsRaw from './examples/ConditionalFields.vue?raw'
import CustomSlotExample from './examples/CustomSlot.vue'
import CustomSlotRaw from './examples/CustomSlot.vue?raw'
import WithValidationExample from './examples/WithValidation.vue'
import WithValidationRaw from './examples/WithValidation.vue?raw'

export default {
  component: FormBuilder,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Dynamic form renderer from a JSON schema.',
  keywords: ['form', 'builder', 'dynamic', 'schema'],
  use_for: [
    'dynamic form rendering',
    'create and edit forms',
    'settings form',
    'schema-driven form fields',
    'filter form inside DataTable'
  ],
  understand_with: ['Input', 'Select', 'TextArea', 'Checkbox', 'Toggle', 'PhoneInput', 'DatePicker', 'Button', 'Modal', 'FloatContent'],
}

// ── Shared helper ─────────────────────────────────────────────────────────────

const makeUpdateHandler = (values) => (formItem, value) => {
  if (typeof formItem.name === 'object') {
    formItem.name.forEach((f, i) => { values.value[f.key] = value[i] })
  } else {
    values.value[formItem.name] = value
  }
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    layout: {
      control: 'select',
      options: ['single-column', 'two-column', 'three-column'],
      description: 'Form layout — controls the CSS grid columns'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable all fields'
    },
    isRequired: {
      control: 'boolean',
      description: 'Mark all fields as required'
    },
    showHint: {
      control: 'boolean',
      description: 'Show helper text below each field'
    },
    showValues: {
      control: 'boolean',
      description: 'Show live form values panel below the form'
    },
    showErrors: {
      control: 'boolean',
      description: 'Simulate validation errors on all fields'
    }
  },
  args: {
    layout:      'single-column',
    isDisabled:  false,
    isRequired:  false,
    showHint:    true,
    showValues:  true,
    showErrors:  false
  },
  render: (args) => ({
    components: { Theme, FormBuilder, Button },
    setup() {
      const values = ref({
        full_name:    '',
        email:        '',
        country:      '',
        plan:         '',
        newsletter:   false,
        description:  ''
      })

      const grid = computed(() => {
        const cols = {
          'single-column': null,
          'two-column':    '50% 50%',
          'three-column':  '33% 33% 33%'
        }[args.layout]

        if (!cols) return null

        const areaMap = {
          'two-column': `full_name   email
                         country     plan
                         newsletter  newsletter
                         description description`,
          'three-column': `full_name email     country
                           plan      newsletter newsletter
                           description description description`
        }

        return {
          xs: { area: 'full_name\nemail\ncountry\nplan\nnewsletter\ndescription', rows: 'auto', columns: '100%' },
          lg: { area: areaMap[args.layout], rows: 'auto', columns: cols }
        }
      })

      const jsonForm = computed(() => [
        {
          name: 'full_name',
          type: 'Input',
          props: {
            label:      'Full name',
            placeholder:'Jane Doe',
            hint:        args.showHint  ? 'Your legal full name.'           : '',
            isDisabled:  args.isDisabled,
            isRequired:  args.isRequired
          }
        },
        {
          name: 'email',
          type: 'Input',
          props: {
            label:      'Email',
            placeholder:'jane@example.com',
            inputType:  'email',
            hint:        args.showHint  ? 'Used for login and notifications.' : '',
            isDisabled:  args.isDisabled,
            isRequired:  args.isRequired
          }
        },
        {
          name: 'country',
          type: 'Select',
          props: {
            label:       'Country',
            placeholder: 'Select a country…',
            hint:         args.showHint  ? 'Your primary country of operation.' : '',
            isDisabled:   args.isDisabled,
            isRequired:   args.isRequired,
            options: [
              { label: 'Indonesia', value: 'ID' },
              { label: 'Singapore', value: 'SG' },
              { label: 'Malaysia',  value: 'MY' }
            ]
          }
        },
        {
          name: 'plan',
          type: 'Select',
          props: {
            label:       'Plan',
            placeholder: 'Select a plan…',
            hint:         args.showHint ? 'Choose your subscription tier.' : '',
            isDisabled:   args.isDisabled,
            isRequired:   args.isRequired,
            options: [
              { label: 'Free',       value: 'free' },
              { label: 'Pro',        value: 'pro' },
              { label: 'Enterprise', value: 'enterprise' }
            ]
          }
        },
        {
          name: 'newsletter',
          type: 'Toggle',
          props: {
            label:      'Subscribe to newsletter',
            hint:        args.showHint  ? 'Receive product updates and tips.' : '',
            isDisabled:  args.isDisabled
          }
        },
        {
          name: 'description',
          type: 'TextArea',
          props: {
            label:       'Bio',
            placeholder: 'Tell us a bit about yourself…',
            hint:          args.showHint ? 'Max 300 characters.' : '',
            isDisabled:    args.isDisabled,
            isRequired:    args.isRequired
          }
        }
      ])

      const errors = computed(() =>
        args.showErrors
          ? {
              full_name:   'Full name is required.',
              email:       'Please enter a valid email.',
              country:     'Country is required.',
              plan:        'Please select a plan.',
              description: 'Bio is required.'
            }
          : {}
      )

      const onUpdate = makeUpdateHandler(values)

      return { args, values, errors, jsonForm, grid, onUpdate }
    },
    template: `
      <Theme class="p-8 flex flex-col gap-6">
        <FormBuilder
          id="playground-form"
          :class="grid ? 'gap-4' : 'flex flex-col gap-4'"
          :json-form="jsonForm"
          :values="values"
          :errors="errors"
          :grid="grid"
          @on-update="onUpdate"
        />
        <div v-if="args.showValues" class="rounded border border-oc-gray-200 bg-oc-bg-2 p-4 text-xs text-oc-text-400 font-mono whitespace-pre-wrap">{{ JSON.stringify(values, null, 2) }}</div>
      </Theme>
    `
  })
}

// ── Basic ─────────────────────────────────────────────────────────────────────

export const Basic = {
  description: 'Minimal form with common field types. Shows the core pattern: jsonForm config array, external values ref, and onUpdate handler.',
  highlights: ['jsonForm config array', 'external values ref', 'onUpdate handler'],
  code: BasicRaw,
  render: () => ({
    components: { BasicExample },
    template: `<div class="p-6"><BasicExample /></div>`
  })
}

// ── All Field Types ───────────────────────────────────────────────────────────

export const AllFieldTypes = {
  description: 'Reference for every built-in type string. Each entry shows which type value maps to which component.',
  highlights: ['all built-in type strings', 'type reference'],
  code: AllFieldTypesRaw,
  render: () => ({
    components: { AllFieldTypesExample },
    template: `<div class="p-6"><AllFieldTypesExample /></div>`
  })
}

// ── Two Column Grid ───────────────────────────────────────────────────────────

export const TwoColumnGrid = {
  description: 'Responsive 2-column layout via the grid prop. Field names must match the area names in grid.lg.area. Single column on mobile, two columns on desktop.',
  highlights: ['grid prop', 'xs/lg breakpoints', 'area names must match field names'],
  code: TwoColumnGridRaw,
  render: () => ({
    components: { TwoColumnGridExample },
    template: `<div class="p-6"><TwoColumnGridExample /></div>`
  })
}

// ── Conditional Fields ────────────────────────────────────────────────────────

export const ConditionalFields = {
  description: "Fields shown/hidden based on another field's value. Supports show_if_value (equals), show_if_not (not equals), show_if_min (numeric minimum), and array syntax for multiple conditions (AND).",
  highlights: ['show_if_value', 'show_if_not', 'show_if_min', 'multiple conditions (AND)'],
  code: ConditionalFieldsRaw,
  render: () => ({
    components: { ConditionalFieldsExample },
    template: `<div class="p-6"><ConditionalFieldsExample /></div>`
  })
}

// ── Custom Slot ───────────────────────────────────────────────────────────────

export const CustomSlot = {
  description: "Unknown type strings fall through to a named slot. The slot name equals the type string. Slot receives: form (config), value, error, and on-update function.",
  highlights: ['custom slot name = type string', 'slot bindings: form / value / error / on-update'],
  code: CustomSlotRaw,
  render: () => ({
    components: { CustomSlotExample },
    template: `<div class="p-6"><CustomSlotExample /></div>`
  })
}

// ── With Validation ───────────────────────────────────────────────────────────

export const WithValidation = {
  description: 'Pass an errors object keyed by field name to show validation errors. Clear errors per-field as the user edits.',
  highlights: ['errors prop', 'per-field error messages', 'clear on edit'],
  code: WithValidationRaw,
  render: () => ({
    components: { WithValidationExample },
    template: `<div class="p-6"><WithValidationExample /></div>`
  })
}
