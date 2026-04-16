<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({
  full_name: '',
  country: '',
  newsletter: false
})

const errors = ref({})

const jsonForm = [
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
    :json-form="jsonForm"
    :values="values"
    :errors="errors"
    @on-update="onUpdate"
  />
</template>
