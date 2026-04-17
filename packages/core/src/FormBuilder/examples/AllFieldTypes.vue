<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ range: [0, 100], slider: 50, toggle: false, checkbox: false })
const errors = ref({})

const jsonForm = [
  { name: 'input',       type: 'Input',          props: { label: 'Input',          placeholder: 'Text' } },
  { name: 'number',      type: 'NumberInput',     props: { label: 'NumberInput' } },
  { name: 'textarea',    type: 'TextArea',        props: { label: 'TextArea',       placeholder: 'Multi-line text' } },
  { name: 'phone',       type: 'PhoneInput',      props: { label: 'PhoneInput' } },
  { name: 'card',        type: 'CardInput',       props: { label: 'CardInput',      placeholder: '•••• •••• •••• ••••' } },
  { name: 'link',        type: 'LinkInput',       props: { label: 'LinkInput',      placeholder: 'https://example.com' } },
  { name: 'select',      type: 'Select',          props: { label: 'Select',         options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }] } },
  { name: 'multiselect', type: 'Select',          props: { label: 'Select (multiple)', multiple: true, isFilterable: true, options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'selopts',     type: 'SelectOptions',   props: { label: 'SelectOptions',  options: [{ label: 'X', value: 'x' }, { label: 'Y', value: 'y' }] } },
  { name: 'checkbox',    type: 'Checkbox',        props: { label: 'Checkbox' } },
  { name: 'checkboxes',  type: 'CheckboxesGroup', props: { label: 'CheckboxesGroup', checkboxes: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'radio',       type: 'RadioGroup',      props: { label: 'RadioGroup (vertical)',   groupName: 'rg1', radio: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }] } },
  { name: 'radio_h',     type: 'RadioGroup',      props: { label: 'RadioGroup (horizontal)', groupName: 'rg2', alignment: 'horizontal', radio: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }] } },
  { name: 'toggle',      type: 'Toggle',          props: { label: 'Toggle' } },
  { name: 'date',        type: 'DatePicker',      props: { label: 'DatePicker (single)' } },
  { name: 'time',        type: 'TimePicker',      props: { label: 'TimePicker' } },
  { name: 'range',       type: 'RangeInput',      props: { label: 'RangeInput' } },
  { name: 'slider',      type: 'Slider',          props: { label: 'Slider', minLimit: 0, maxLimit: 100 } },
  { name: 'editor',      type: 'TextEditor',      props: { label: 'TextEditor' } },
  { name: 'divider',     type: 'SectionItem',     props: { title: 'SectionItem — static divider' } },
  { name: 'toggle_row',  type: 'SectionItem',     props: { title: 'SectionItem — toggle row', isToggle: true } }
]

function onUpdate(formItem, value) {
  values.value[formItem.name] = value
}
</script>

<template>
  <FormBuilder
    id="all-types-form"
    class="flex flex-col gap-4"
    :json-form="jsonForm"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>
