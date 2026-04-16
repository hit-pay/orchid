<script setup>
import { defineComponent } from 'vue'
import storyDefault, { Basic, AllFieldTypes, TwoColumnGrid, ConditionalFields, CustomSlot, WithValidation } from '../../../packages/core/src/FormBuilder/OcFormBuilder.stories.js'
import ComponentPage from '../../docs-components/ComponentPage.vue'

const meta = {
  title: 'FormBuilder',
  description: storyDefault.parameters?.docs?.description?.component ?? '',
  package: '@orchidui/core',
}

const examples = [
  {
    id: 'basic',
    title: 'Basic',
    description: Basic.description,
    highlights: Basic.highlights,
    code: Basic.code,
    preview: Basic.render ? defineComponent(Basic.render()) : null,
  },
  {
    id: 'all-field-types',
    title: 'All Field Types',
    description: AllFieldTypes.description,
    highlights: AllFieldTypes.highlights,
    code: AllFieldTypes.code,
    preview: AllFieldTypes.render ? defineComponent(AllFieldTypes.render()) : null,
  },
  {
    id: 'two-column-grid',
    title: 'Two Column Grid',
    description: TwoColumnGrid.description,
    highlights: TwoColumnGrid.highlights,
    code: TwoColumnGrid.code,
    preview: TwoColumnGrid.render ? defineComponent(TwoColumnGrid.render()) : null,
  },
  {
    id: 'conditional-fields',
    title: 'Conditional Fields',
    description: ConditionalFields.description,
    highlights: ConditionalFields.highlights,
    code: ConditionalFields.code,
    preview: ConditionalFields.render ? defineComponent(ConditionalFields.render()) : null,
  },
  {
    id: 'custom-slot',
    title: 'Custom Slot',
    description: CustomSlot.description,
    highlights: CustomSlot.highlights,
    code: CustomSlot.code,
    preview: CustomSlot.render ? defineComponent(CustomSlot.render()) : null,
  },
  {
    id: 'with-validation',
    title: 'With Validation',
    description: WithValidation.description,
    highlights: WithValidation.highlights,
    code: WithValidation.code,
    preview: WithValidation.render ? defineComponent(WithValidation.render()) : null,
  },
]
</script>

<template>
  <ComponentPage :meta="meta" :examples="examples" />
</template>
