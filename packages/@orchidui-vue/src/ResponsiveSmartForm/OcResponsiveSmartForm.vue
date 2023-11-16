<template>
  <div
    :style="{
      '--grid-form-width': definition.formWidth ? definition.formWidth : '100%',
    }"
  >
    <ResponsiveSmartFormGridLayout :grid="definition.grid" class="gap-5">
      <div
        v-for="(field, index) in definition.fields"
        :key="field.key"
        :style="{ 'grid-area': field.key }"
      >
        <ResponsiveSmartFormField
          v-model="formValues[field.key]"
          :index="index"
          :field="field"
          :form-id="formId"
          :form-values="formValues"
          :loading="loading"
        >
          <template #default="scope">
            <slot
              :name="`field-${field.key}`"
              v-bind="scope"
              :on-change="
                (value, key) => (formValues[key || field.key] = value)
              "
              :values="formValues"
              :loading="loading"
            />
          </template>
        </ResponsiveSmartFormField>
      </div>
    </ResponsiveSmartFormGridLayout>
  </div>
</template>

<script setup>
import ResponsiveSmartFormGridLayout from "./ResponsiveSmartFormGridLayout.vue";
import ResponsiveSmartFormField from "./ResponsiveSmartFormField.vue";
import { ref, watch } from "vue";

const props = defineProps({
  definition: {
    type: Object,
    required: true,
  },
  value: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["input", "submit", "error", "close"]);

const loading = ref(false);

const formId = (Math.random() + 1).toString(36).substring(7);

const valuesForReset = ref(JSON.parse(JSON.stringify(props.value)));

const allFields = [...props.definition.fields];
const getInitialValues = (fields, value) => {
  if (value) {
    return Object.fromEntries(
      fields.map((field) => [field.key, value[field.key] ?? null]),
    );
  }
  const initialForm = {};
  fields.forEach((field) => (initialForm[field.key] = null));
  return initialForm;
};

const formValues = ref(getInitialValues(allFields, props.value));

watch(
  formValues,
  () => {
    emit("input", formValues.value);
  },
  { deep: true, immediate: true },
);

const resetForm = () => {
  setTimeout(() => {
    formValues.value = getInitialValues(allFields, valuesForReset.value);
  }, 500);
};

defineExpose({
  resetForm,
});
</script>

<style lang="scss" scoped></style>
