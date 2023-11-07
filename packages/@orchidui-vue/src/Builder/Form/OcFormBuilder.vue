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
  PhoneInput: PhoneInput,
};

const getComponentByType = (type) => {
  if (FormTypes[type]) {
    return FormTypes[type];
  } else {
    return null;
  }
};

const { values, errors } = props;
const modelValues = (name) => {
  if (typeof name === "object") {
    let modelValueData = [];
    name.forEach((formName) => {
      modelValueData.push(values[formName.key]);
    });
    return modelValueData;
  } else {
    return values[name];
  }
};
const errorValues = (name) => {
  if (typeof name === "object") {
    let errorMessage = [];
    name.forEach((formName) => {
      if(errors[formName.key]){
        errorMessage.push(errors[formName.key]);
      }
    });
    return errorMessage.join(",");
  } else {
    return errors[name];
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
        :model-value="modelValues(form.name)"
        :error-message="errorValues(form.name)"
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
