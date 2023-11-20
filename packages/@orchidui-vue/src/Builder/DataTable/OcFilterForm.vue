<script setup>
import { Button, FormBuilder } from "@/orchidui";
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  jsonForm: {
    type: Array,
  },
  values: {
    type: Object,
  },
  grid: Object,
});

const emit = defineEmits(["applyFilter", "cancel", "filter-fields-changed"]);

const valuesData = ref({});
const errorsData = ref({});
const changedFields = ref([]);

const updateChangedFields = (changedField) => {
  const index = changedFields.value.findIndex(
    (field) => field === changedField,
  );

  if (index >= 0) {
    return;
  }

  changedFields.value.push(changedField);
};

const onUpdateForm = (form, value = null, fieldName) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName, index) => {
      valuesData.value[formName.key] = value[index];
    });
  } else {
    valuesData.value[form.name] = value;
  }

  updateChangedFields(fieldName);
};

const filterAdded = computed(() => {
  return Object.values(valuesData.value).length > 0;
});
onMounted(() => {
  valuesData.value = { ...props.values };
});

const applyFilter = () => {
  emit("applyFilter", valuesData.value);
  emit("filter-fields-changed", changedFields.value);

  // reset after emit
  changedFields.value = [];
};
</script>
<template>
  <div class="flex w-[326px] flex-col gap-y-5">
    <slot
      :errors="errorsData"
      :values="valuesData"
      :json-form="jsonForm"
      :update-form="onUpdateForm"
    >
      <div class="max-h-[70vh] overflow-y-auto p-5">
        <FormBuilder
          :id="`filter-form-${id}`"
          class="grid gap-5"
          :errors="errorsData"
          :values="valuesData"
          :json-form="jsonForm"
          :grid="grid"
          @on-update="onUpdateForm"
        >
        </FormBuilder>
      </div>
    </slot>
    <div class="flex gap-x-5 p-5">
      <Button
        class="w-full"
        variant="secondary"
        label="Cancel"
        @click="$emit('cancel')"
      />
      <Button
        class="w-full"
        :is-disabled="!filterAdded"
        label="Apply"
        @click="applyFilter"
      />
    </div>
  </div>
</template>
