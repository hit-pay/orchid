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

const emit = defineEmits(["applyFilter", "cancel"]);

const valuesData = ref({});
const errorsData = ref({});

const onUpdateForm = (form, value = null) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName, index) => {
      valuesData.value[formName.key] = value[index];
    });
  } else {
    valuesData.value[form.name] = value;
  }
};

const filterAdded = computed(() => {
  return Object.values(valuesData.value).length > 0;
});
onMounted(() => {
  valuesData.value = { ...props.values };
});

const applyFilter = () => {
  emit("applyFilter", valuesData.value);
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
