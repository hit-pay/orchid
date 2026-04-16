<script setup>
import { ref } from 'vue'
import { FormBuilder, Button } from '@orchidui/core'

const values = ref({ username: '', avatar_url: '' })
const errors = ref({})

const jsonForm = [
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
    :json-form="jsonForm"
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
</template>
