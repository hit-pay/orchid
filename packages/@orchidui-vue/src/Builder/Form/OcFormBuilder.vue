<script setup>
import {
  CardInput,
  CheckboxesGroup,
  Input,
  LinkInput,
  Select,
  TextArea,
  Toggle,
  TimePicker,
  DatePicker,
  PhoneInput,
  RadioGroup,
  RangeInput,
  Checkbox,
} from "@/orchidui";

defineProps({
  id: {
    type: String,
    required: true,
  },
  jsonForm: {
    type: Array,
  },
  errors: {
    type: Object,
  },
  values: {
    type: Object,
    required: true,

  },
});

const emit = defineEmits(["onUpdate"]);

const onUpdate = (form, value, index = undefined) => {
  emit("onUpdate", form, value, index);
};

const FormTypes = {
  CardInput: CardInput,
  CheckboxesGroup: CheckboxesGroup,
  Input: Input,
  LinkInput: LinkInput,
  Select: Select,
  TextArea: TextArea,
  Toggle: Toggle,
  RadioGroup: RadioGroup,
  TimePicker: TimePicker,
  DatePicker: DatePicker,
  Checkbox: Checkbox,
  RangeInput: RangeInput,
  PhoneInput: PhoneInput
};

const getComponentByType = (type) => {
  if (FormTypes[type]) {
    return FormTypes[type];
  } else {
    return null;
  }
};
</script>
<template>
  <div class="form-builder">
    <template v-for="(form, key) in jsonForm" :key="key">
      <component
        :is="getComponentByType(form.type)"
        v-if="getComponentByType(form.type)"
        :class="form.className"
        v-bind="form.props"
        :model-value="values[form.name]"
        :error-message="errors[form.name]"
        @update:model-value="onUpdate(form, $event)"
      />
      <slot
        v-else
        :name="form.type"
        :form-id="id"
        :form="form"
        :value="values[form.name]"
        :error="errors[form.name]"
      />
    </template>
  </div>
</template>
