<script setup>
import { FormBuilder } from "@/orchidui";
import { ref } from "vue";
const props = defineProps({
  requestForm: Object,
  generalData: Object,
  sectionData: Object,
});

const generalFormData = ref(props.generalData);
const sectionFormData = ref(props.sectionData);

const formErrors = ref({});
const formValues = ref({});

Object.values(props.requestForm).forEach((form) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName) => {
      if (form.general) {
        formValues.value[formName.key] = generalFormData.value[formName.key];
      } else {
        formValues.value[formName.key] = sectionFormData.value[formName.key];
      }
    });
  } else {
    if (form.general) {
      formValues.value[form.name] = generalFormData.value[form.name];
    } else {
      formValues.value[form.name] = sectionFormData.value[form.name];
    }
  }
});

const emit = defineEmits(["update:generalData", "update:sectionData"]);

const updateData = (general = false) => {
  if (general) {
    emit("update:generalData", generalFormData.value);
  } else {
    emit("update:sectionData", sectionFormData.value);
  }
};

const onUpdateForm = (form, value = null) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName, index) => {
      formValues.value[formName.key] = value[index];
      if (form.general) {
        generalFormData.value[formName.key] = value[index];
        updateData(true);
      } else {
        sectionFormData.value[formName.key] = value[index];
        updateData();
      }
    });
  } else {
    formValues.value[form.name] = value;
    if (form.general) {
      generalFormData.value[form.name] = value;
      updateData(true);
    } else {
      sectionFormData.value[form.name] = value;
      updateData();
    }
  }
};
</script>
<template>
  <div>
    <FormBuilder
      id="form-builder"
      class="grid gap-4"
      :errors="formErrors"
      :values="formValues"
      :json-form="requestForm"
      @on-update="onUpdateForm"
    >
    </FormBuilder>
  </div>
</template>
