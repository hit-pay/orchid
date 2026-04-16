<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ delivery_method: 'pickup', express: false, column_count: '1' })
const errors = ref({})

const jsonForm = [
  {
    name: 'delivery_method',
    type: 'Select',
    props: { label: 'Delivery method', options: [{ label: 'Pickup', value: 'pickup' }, { label: 'Delivery', value: 'delivery' }] }
  },
  {
    name: 'address',
    type: 'Input',
    show_if: 'delivery_method',
    show_if_value: 'delivery',
    props: { label: 'Delivery address', placeholder: '123 Main St' }
  },
  {
    name: 'pickup_note',
    type: 'Input',
    show_if: 'delivery_method',
    show_if_not: 'delivery',
    props: { label: 'Pickup note' }
  },
  { name: 'express', type: 'SectionItem', props: { title: 'Express delivery', isToggle: true } },
  {
    name: 'express_note',
    type: 'Input',
    show_if: ['delivery_method', 'express'],
    show_if_value: ['delivery', true],
    props: { label: 'Express note' }
  },
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
    :json-form="jsonForm"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>
