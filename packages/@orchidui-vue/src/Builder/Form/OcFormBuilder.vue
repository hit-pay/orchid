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
  Checkbox
} from "@orchid";

const props = defineProps({
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
  },
});

const emit = defineEmits(["onUpdate"]);

const onUpdate = (form, value, index = undefined) => {
  emit("onUpdate", form, value, index);
};

const multipleError = (name = []) => {
  let errorMessage = "";
  name.forEach((fieldName) => {
    if (props.errors[fieldName.key]) {
      errorMessage = props.errors[fieldName.key];
    }
  });
  return errorMessage;
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
      <DatePicker
        v-if="form.type === 'DatePicker' && form.props.type === 'range'"
        :class="form.className"
        v-bind="form.props"
        :error-message="multipleError(form.name)"
        :from="values[form.name[0].key]"
        :to="values[form.name[1].key]"
        @update:from="onUpdate(form, $event, 0)"
        @update:to="onUpdate(form, $event, 1)"
      />
      <PhoneInput
        v-else-if="form.type === 'PhoneInput'"
        :class="form.className"
        v-bind="form.props"
        :error-message="multipleError(form.name)"
        :country-code="values[form.name[0].key]"
        :phone-number="values[form.name[1].key]"
        @update:country-code="onUpdate(form, $event, 0)"
        @update:phone-number="onUpdate(form, $event, 1)"
      />
      <component
        :is="getComponentByType(form.type)"
        v-else-if="getComponentByType(form.type)"
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
