<script setup>
import { ref } from "vue";
const props = defineProps({
  jsonForm: Array,
  modelValue: Object,
  errors: Object,
});

const emit = defineEmits(["update:modelValue"]);
const formValues = ref(props.modelValue);
const formErrors = ref(props.errors);

const onUpdateForm = (form, value = null) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName, index) => {
      formValues.value[formName.key] = value[index];
      emit("update:modelValue", formValues.value);
    });
  } else {
    formValues.value[form.name] = value;
    emit("update:modelValue", formValues.value);
  }
};
</script>
<template>
  <FormBuilder
    id="form-builder"
    class="grid gap-4"
    :errors="formErrors"
    :values="formValues"
    :json-form="jsonForm"
    @on-update="onUpdateForm"
  >
    <template #Colors="{ form }">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="name in form.name" :key="name">
          <Input
            v-model="formValues[name.key]"
            v-bind="name.props"
            form-type="color"
          />
        </div>
      </div>
    </template>
  </FormBuilder>
</template>
