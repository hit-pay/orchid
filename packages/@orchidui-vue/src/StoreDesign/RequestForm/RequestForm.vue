
<script setup>
import { Input, Select, TextArea } from "@/orchidui";

import SelectOptions from "./types/SelectOptions.vue";
import { computed } from "vue";

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

const onUpdate = (form, value) => {
  emit("onUpdate", form, value);
};

const FormTypes = {
  Input: Input,
  Select: Select,
  TextArea: TextArea,
  SelectOptions: SelectOptions,
};

const getComponentByType = (type) => {
  if (FormTypes[type]) {
    return FormTypes[type];
  } else {
    return null;
  }
};

const modelValues = (name, defaultValue = "") => {
  if (typeof name === "object") {
    let modelValueData = null;
    name.forEach((formName) => {
      if (props.values[formName.key]) {
        if (modelValueData) {
          modelValueData.push(props.values[formName.key]);
        } else {
          modelValueData = [props.values[formName.key]];
        }
      }
    });
    return modelValueData;
  } else {
    return props.values[name] ?? defaultValue;
  }
};
const errorValues = computed(() => (name) => {
  if (typeof name === "object") {
    let errorMessage = [];
    name.forEach((formName) => {
      if (props.errors[formName.key]) {
        errorMessage.push(props.errors[formName.key]);
      }
    });
    return errorMessage.join(",");
  } else {
    return props.errors[name] ?? "";
  }
});

const getFormKey = (name) => {
  if (typeof name === "object") {
    return name[0].key;
  } else {
    return name;
  }
};
</script>
<template>
  <div>
    <div
      v-for="form in jsonForm"
      :key="getFormKey(form.name)"
      :class="form.class"
    >
      <component
        :is="getComponentByType(form.type)"
        v-if="getComponentByType(form.type)"
        v-bind="form.props"
        :model-value="modelValues(form.name, form.default)"
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
        :on-update="onUpdate"
      />
    </div>
  </div>
</template>
