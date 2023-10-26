<script setup>
import {
  CardInput,
  CheckboxesGroup,
  Input,
  LinkInput,
  PhoneInput,
  RadioGroup,
  Select,
  TextArea,
  Toggle,
  // Range Input (waiting stories)
  // Checkbox,
  // Criteria,
  // Radio,
} from "@orchid";

defineProps({
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

const emit = defineEmits(["onUpdate"]);

const onUpdate = (form, value, index = undefined) => {
  emit("onUpdate", form, value, index);
};

const multipleError = () => {
  return "";
};
</script>
<template>
  <div class="form-builder">
    <template v-for="(form, key) in jsonForm" :key="key">
      <CardInput
        v-if="form.type === 'CardInput'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <CheckboxesGroup
        v-else-if="form.type === 'CheckboxesGroup'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? []"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <Input
        v-else-if="form.type === 'Input'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />

      <LinkInput
        v-else-if="form.type === 'LinkInput'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <PhoneInput
        v-else-if="form.type === 'PhoneInput'"
        :class="form.className"
        v-bind="form.props"
        :error-message="multipleError(form)"
        :country-code="values[form.name[0].key]"
        :phone-number="values[form.name[1].key]"
        @update:country-code="onUpdate(form, $event, 0)"
        @update:phone-number="onUpdate(form, $event, 1)"
      />
      <RadioGroup
        v-else-if="form.type === 'RadioGroup'"
        :class="form.className"
        v-bind="form.props"
        :group-name="form.name"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <Select
        v-else-if="form.type === 'Select'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? {}"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <TextArea
        v-else-if="form.type === 'Textarea'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <Toggle
        v-else-if="form.type === 'Toggle'"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name] ?? ''"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <slot
        v-else
        :name="form.type"
        :form="form"
        :value="values[form.name]"
        :error="errors[form.name]"
      />
    </template>
  </div>
</template>
