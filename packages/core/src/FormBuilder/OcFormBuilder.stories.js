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
Each config object describes one field:

\`\`\`js
{
  name: 'field_key',      // key used in values / errors objects
  type: 'Input',          // built-in type or custom slot name
  props: { label: '...' } // props forwarded to the field component
}
\`\`\`

**Built-in types:** Input · CardInput · Checkbox · CheckboxesGroup · DatePicker ·
LinkInput · NumberInput · PhoneInput · RadioGroup · RangeInput · Select ·
SelectOptions · SectionItem · Slider · TextArea · TimePicker · Toggle

**Handling updates:** listen to \`@onUpdate="(form, value) => { values[form.name] = value }"\`

**Conditional visibility:** add \`show_if\`, \`show_if_value\`, \`show_if_not\`, or \`show_if_min\`
to any field config to show/hide it based on another field's current value.

**Grid layout:** pass a \`grid\` prop to arrange fields in a CSS grid.
Each breakpoint key (\`xs\`, \`sm\`, \`lg\`, …) takes \`{ area, rows, columns }\`.

**Custom field types:** any unknown \`type\` falls through to a slot named after the type.
The slot receives \`{ form, value, error, on-update }\`.
        `.trim()
      }
    }
  }
}

// ── Helper used in every story ────────────────────────────────────────────────

// Standard onUpdate handler — updates the values ref when any field changes.
// Use this in every FormBuilder setup() to keep the form reactive.
const makeUpdateHandler = (values) => (form, value) => {
  if (typeof form.name === 'object') {
    form.name.forEach((formName, i) => { values.value[formName.key] = value[i] })
  } else {
    values.value[form.name] = value
  }
}

// ── Story 1: Basic ────────────────────────────────────────────────────────────

/**
 * Minimal form with a few common field types.
 * Shows the simplest possible FormBuilder usage — no grid, no conditions.
 */
export const Basic = {
  render: (args) => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ toggle: false })
      const errors = ref({})
      const onUpdate = makeUpdateHandler(values)

      const form = [
        {
          name: 'full_name',
          type: 'Input',
          props: { label: 'Full name', placeholder: 'Jane Doe' }
        },
        {
          name: 'email',
          type: 'Input',
          props: { label: 'Email', placeholder: 'jane@example.com' }
        },
        {
          name: 'plan',
          type: 'Select',
          props: {
            label: 'Plan',
            placeholder: 'Choose a plan',
            options: [
              { label: 'Free', value: 'free' },
              { label: 'Pro', value: 'pro' },
              { label: 'Enterprise', value: 'enterprise' }
            ]
          }
        },
        {
          name: 'toggle',
          type: 'Toggle',
          props: { label: 'Enable notifications' }
        }
      ]

      return { values, errors, onUpdate, form }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder
          id="basic-form"
          class="flex flex-col gap-4"
          :json-form="form"
          :values="values"
          :errors="errors"
          @on-update="onUpdate"
        />
      </Theme>
    `
  })
}

// ── Story 2: AllFieldTypes ────────────────────────────────────────────────────

/**
 * Showcases every built-in field type available in FormBuilder.
 * Use this as a reference when deciding which `type` string to use.
 */
export const AllFieldTypes = {
  render: (args) => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ range: [0, 100], slider: 50 })
      const errors = ref({})
      const onUpdate = makeUpdateHandler(values)

      const form = [
        {
          name: 'input',
          type: 'Input',
          props: { label: 'Input', placeholder: 'Text input' }
        },
        {
          name: 'number',
          type: 'NumberInput',
          props: { label: 'NumberInput' }
        },
        {
          name: 'textarea',
          type: 'TextArea',
          props: { label: 'TextArea', placeholder: 'Multi-line text' }
        },
        {
          name: 'select',
          type: 'Select',
          props: {
            label: 'Select',
            options: [
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' }
            ]
          }
        },
        {
          name: 'multi_select',
          type: 'Select',
          props: {
            label: 'Select (multiple)',
            multiple: true,
            isFilterable: true,
            options: [
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' }
            ]
          }
        },
        {
          name: 'checkbox',
          type: 'Checkbox',
          props: { label: 'Single checkbox' }
        },
        {
          name: 'checkboxes',
          type: 'CheckboxesGroup',
          props: {
            label: 'CheckboxesGroup',
            checkboxes: [
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' }
            ]
          }
        },
        {
          name: 'radio',
          type: 'RadioGroup',
          props: {
            label: 'RadioGroup',
            groupName: 'radio_story',
            radio: [
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' }
            ]
          }
        },
        {
          name: 'toggle',
          type: 'Toggle',
          props: { label: 'Toggle' }
        },
        {
          name: 'date',
          type: 'DatePicker',
          props: { label: 'DatePicker' }
        },
        {
          name: 'time',
          type: 'TimePicker',
          props: { label: 'TimePicker' }
        },
        {
          name: 'phone',
          type: 'PhoneInput',
          props: { label: 'PhoneInput' }
        },
        {
          name: 'card',
          type: 'CardInput',
          props: { label: 'CardInput', placeholder: '•••• •••• •••• ••••' }
        },
        {
          name: 'range',
          type: 'RangeInput',
          props: { label: 'RangeInput' }
        },
        {
          name: 'slider',
          type: 'Slider',
          props: { label: 'Slider', minLimit: 0, maxLimit: 100 }
        },
        {
          name: 'section_divider',
          type: 'SectionItem',
          props: { title: 'SectionItem — used as a divider / toggle row' }
        }
      ]

      return { values, errors, onUpdate, form }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder
          id="all-fields-form"
          class="flex flex-col gap-4"
          :json-form="form"
          :values="values"
          :errors="errors"
          @on-update="onUpdate"
        />
      </Theme>
    `
  })
}

// ── Story 3: TwoColumnGrid ────────────────────────────────────────────────────

/**
 * Two-column layout on desktop, single column on mobile using the `grid` prop.
 * Field names must match the area names defined in `grid.lg.area`.
 */
export const TwoColumnGrid = {
  render: (args) => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({})
      const errors = ref({})
      const onUpdate = makeUpdateHandler(values)

      const grid = {
        xs: { area: `first_name\nlast_name\nemail\nphone`, rows: 'auto', columns: '100%' },
        lg: { area: `first_name last_name\nemail phone`, rows: 'auto', columns: '50% 50%' }
      }

      const form = [
        {
          name: 'first_name',
          type: 'Input',
          props: { label: 'First name', placeholder: 'Jane' }
        },
        {
          name: 'last_name',
          type: 'Input',
          props: { label: 'Last name', placeholder: 'Doe' }
        },
        {
          name: 'email',
          type: 'Input',
          props: { label: 'Email', placeholder: 'jane@example.com' }
        },
        {
          name: 'phone',
          type: 'PhoneInput',
          props: { label: 'Phone number' }
        }
      ]

      return { values, errors, onUpdate, grid, form }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder
          id="grid-form"
          class="gap-4"
          :json-form="form"
          :values="values"
          :errors="errors"
          :grid="grid"
          @on-update="onUpdate"
        />
      </Theme>
    `
  })
}

// ── Story 4: ConditionalFields ────────────────────────────────────────────────

/**
 * Fields with `show_if` rules are hidden/shown based on other field values.
 *
 * Rule properties on a field config:
 * - `show_if: 'field_name'` — watch this field's value
 * - `show_if_value: value` — show when the watched field equals this value
 * - `show_if_not: value` — show when the watched field does NOT equal this value
 * - `show_if_min: number` — show when the watched field's value is >= this number
 * - `show_if: string[]` + `show_if_value: value[]` — watch multiple fields (AND logic)
 */
export const ConditionalFields = {
  render: (args) => ({
    components: { Theme, FormBuilder },
    setup() {
      const values = ref({ delivery_method: 'pickup' })
      const errors = ref({})
      const onUpdate = makeUpdateHandler(values)

      const form = [
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
        // Only shown when delivery_method === 'delivery'
        {
          name: 'address',
          type: 'Input',
          show_if: 'delivery_method',
          show_if_value: 'delivery',
          props: { label: 'Delivery address', placeholder: '123 Main St' }
        },
        {
          name: 'city',
          type: 'Input',
          show_if: 'delivery_method',
          show_if_value: 'delivery',
          props: { label: 'City' }
        },
        {
          name: 'enable_express',
          type: 'SectionItem',
          props: { title: 'Express delivery', isToggle: true }
        },
        // Only shown when both delivery + express are selected
        {
          name: 'express_note',
          type: 'Input',
          show_if: ['delivery_method', 'enable_express'],
          show_if_value: ['delivery', true],
          props: { label: 'Express delivery note', placeholder: 'e.g. leave at door' }
        }
      ]

      return { values, errors, onUpdate, form }
    },
    template: `
      <Theme class="p-8">
        <div class="mb-6 p-3 bg-oc-bg-2 rounded text-sm text-oc-text-400">
          Current values: {{ values }}
        </div>
        <FormBuilder
          id="conditional-form"
          class="flex flex-col gap-4"
          :json-form="form"
          :values="values"
          :errors="errors"
          @on-update="onUpdate"
        />
      </Theme>
    `
  })
}

// ── Story 5: CustomSlot ───────────────────────────────────────────────────────

/**
 * Any field with an unknown `type` falls through to a named slot.
 * The slot name equals the `type` string (e.g. `type: 'CustomWidget'` → `#CustomWidget`).
 *
 * Slot bindings available:
 * - `form` — the full field config object
 * - `value` — current field value
 * - `error` — current error message
 * - `on-update` — call as `on-update(form, newValue)` to emit the change
 */
export const CustomSlot = {
  render: (args) => ({
    components: { Theme, FormBuilder, Input, Button },
    setup() {
      const values = ref({})
      const errors = ref({})
      const onUpdate = makeUpdateHandler(values)

      const form = [
        {
          name: 'username',
          type: 'Input',
          props: { label: 'Username', placeholder: 'john_doe' }
        },
        // 'AvatarPicker' is not a built-in type — rendered via the #AvatarPicker slot
        {
          name: 'avatar_url',
          type: 'AvatarPicker',
          props: { label: 'Avatar' }
        }
      ]

      return { values, errors, onUpdate, form }
    },
    template: `
      <Theme class="p-8">
        <FormBuilder
          id="custom-slot-form"
          class="flex flex-col gap-4"
          :json-form="form"
          :values="values"
          :errors="errors"
          @on-update="onUpdate"
        >
          <!-- Custom renderer for the 'AvatarPicker' type -->
          <template #AvatarPicker="{ form, value, error, onUpdate }">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium">{{ form.props.label }}</label>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-oc-bg-2 flex items-center justify-center text-xs text-oc-text-400">
                  {{ value ? '✓' : '?' }}
                </div>
                <Button variant="secondary" @click="onUpdate(form, 'https://example.com/avatar.jpg')">
                  Choose avatar
                </Button>
              </div>
              <span v-if="error" class="text-sm text-oc-error">{{ error }}</span>
            </div>
          </template>
        </FormBuilder>
      </Theme>
    `
  })
}
