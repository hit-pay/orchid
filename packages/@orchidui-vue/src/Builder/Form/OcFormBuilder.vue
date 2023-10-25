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

const emit = defineEmits(["onUpdate"]);

const onUpdate = (name, value) => {
  if (typeof name === Array) {
    name.forEach((fieldName) => {
      emit(`onUpdate:${fieldName}`, value);
    });
  } else {
    emit("onUpdate", name, value);
  }
};
</script>
<template>
  <div class="form-builder">
    <template v-for="(form, key) in props.jsonForm" :key="key">
      <CardInput
        v-if="form.type === 'CardInput'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <CheckboxesGroup
        v-else-if="form.type === 'CheckboxesGroup'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? []"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <Input
        v-else-if="form.type === 'Input'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />

      <LinkInput
        v-else-if="form.type === 'LinkInput'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <PhoneInput
        v-else-if="form.type === 'PhoneInput'"
        :class="form.className"
        v-bind="form.props"
        :model-value:country-code="props.values[form.name[0].key] ?? ''"
        :model-value:phone-number="props.values[form.name[1].key] ?? ''"
        :error-message="
          props.errors[form.name[0].key] || props.errors[form.name[1].key]
        "
        @update:model-value="
          onUpdate([form.name[0].key, form.name[1].key], $event)
        "
      />
      <RadioGroup
        v-else-if="form.type === 'RadioGroup'"
        :class="form.className"
        v-bind="form.props"
        :group-name="form.name"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <Select
        v-else-if="form.type === 'Select'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <TextArea
        v-else-if="form.type === 'Textarea'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
        :error-message="props.errors[form.name]"
        @update:model-value="onUpdate(form.name, $event)"
      />
      <Toggle
        v-else-if="form.type === 'Toggle'"
        :class="form.className"
        v-bind="form.props"
        :model-value="props.values[form.name] ?? ''"
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
