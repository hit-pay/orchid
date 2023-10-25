<script setup>
import {
  Button,
  CardInput,
  Checkbox,
  CheckboxesGroup,
  Criteria,
  Input,
  LinkInput,
  PhoneInput,
  Radio,
  RadioGroup,
  Select,
  TextArea,
  Toggle,
} from '@orchid'

const props = defineProps({
  jsonForm: {
    type: Array
  },
  error: {
    
  }
})
</script>
<template>
  <div class="form-builder">
    <template v-for="form in props.jsonForm">
        {{  form.type  }} , 
    </template>
  </div>
</template>
