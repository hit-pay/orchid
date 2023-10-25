<script setup>
import {
  CardInput,
  // Checkbox,
  // CheckboxesGroup,
  // Criteria,
  // Input,
  // LinkInput,
  // PhoneInput,
  // Radio,
  // RadioGroup,
  // Select,
  // TextArea,
  // Toggle,
} from '@orchid'

const props = defineProps({
  jsonForm: {
    type: Array,
  },
  errors: {
    type: Object,
  },
  values: {
    type: Object,
  },
});

const emit  = defineEmits(['onUpdate'])

const onUpdate = (name, value) => {
  emit('onUpdate',name, value)
}
</script>
<template>
  <div class="form-builder">
    <template v-for="form, key in props.jsonForm" :key="key">
          <CardInput
            v-if="form.type === 'cardInput'"
            v-bind="form.props"
            :model-value="props.values[form.name]"
            :error-message="props.errors[form.name]"
            @update:model-value="onUpdate(form.name, $event)"
          />
          <slot 
            v-else 
            :name="form.type" 
            :form="form" 
            :value="props.values[form.name]"
            :error="props.values[form.name]"
           />
    </template>
  </div>
</template>
