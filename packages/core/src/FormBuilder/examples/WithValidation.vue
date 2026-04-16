<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({ email: '', password: '' })
const errors = ref({ email: '', password: '' })

const jsonForm = [
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
      :json-form="jsonForm"
      :values="values"
      :errors="errors"
      @on-update="onUpdate"
    />
    <Button @click="submit">Submit</Button>
  </div>
</template>
