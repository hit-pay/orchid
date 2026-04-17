<script setup>
import { ref } from 'vue'
import { FormBuilder } from '@orchidui/core'

const values = ref({ first_name: '', last_name: '', email: '', phone: '' })
const errors = ref({})

const grid = {
  xs: {
    area: `first_name
last_name
email
phone`,
    rows: 'auto',
    columns: '100%'
  },
  lg: {
    area: `first_name last_name
email      phone`,
    rows: 'auto',
    columns: '50% 50%'
  }
}

const jsonForm = [
  { name: 'first_name', type: 'Input',      props: { label: 'First name', placeholder: 'Jane' } },
  { name: 'last_name',  type: 'Input',      props: { label: 'Last name',  placeholder: 'Doe' } },
  { name: 'email',      type: 'Input',      props: { label: 'Email',      placeholder: 'jane@example.com' } },
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
    :json-form="jsonForm"
    :values="values"
    :errors="errors"
    :grid="grid"
    @on-update="onUpdate"
  />
</template>
