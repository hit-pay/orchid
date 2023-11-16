<template>
  <div v-if="isVisible">
    <slot :id="fieldId" :field="field" :value="value" :loading="loading">
      <component
        :is="fieldComponent"
        :id="fieldId"
        ref="fieldElement"
        v-bind="field"
        :value="value"
        :class="field.className"
        :disabled="isFieldDisabled"
      />
    </slot>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from "vue";
import {
  TextArea,
  Select,
  TimePicker,
  Radio,
  Checkbox,
  Input,
  PhoneInput,
  CardInput,
  Criteria,
  LinkInput,
  MultipleUploadFile,
  RangeInput,
  Slider,
  Toggle,
} from "@/orchidui";
import { SingleFileUpload } from "@/orchidui/SingleFileUpload.js";
import { TextEditor } from "@/orchidui/TextEditor.js";

const ComplexDatePicker = defineAsyncComponent(() =>
  import("@/orchidui/Form/ComplexDatePicker/OcComplexDatePicker.vue"),
);

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
  formValues: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  formId: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number, Date, Boolean, Array, Object],
    default: "",
  },
  index: {
    type: Number,
    default: 0,
  },
});

defineEmits(["input"]);

const fieldElement = ref(null);
const fieldId = computed(() => `form-${props.formId}-${props.field.key}`);

const isVisible = computed(() => {
  if (props.field.hideOn) {
    return Object.entries(props.field.hideOn).every(
      (value) => !value[1].includes(props.formValues[value[0]]),
    );
  }

  return true;
});

const fieldComponent = computed(() => {
  switch (props.field.type) {
    case "textarea":
      return TextArea;
    case "select":
      return Select;
    case "date":
      return ComplexDatePicker;
    case "time":
      return TimePicker;
    case "radio":
      return Radio;
    case "checkbox":
      return Checkbox;
    case "phone_number":
      return PhoneInput;
    case "card":
      return CardInput;
    case "criteria":
      return Criteria;
    case "link":
      return LinkInput;
    case "multiple_upload":
      return MultipleUploadFile;
    case "range":
      return RangeInput;
    case "single_upload":
      return SingleFileUpload;
    case "slider":
      return Slider;
    case "text-editor":
      return TextEditor;
    case "toggle":
      return Toggle;
    default:
      return Input;
  }
});

const isFieldDisabled = computed(() => {
  return props.field.disabled ?? props.loading;
});

onMounted(() => {
  console.log(props.field.type, fieldElement.value);
  const inputElement = fieldElement.value?.$el?.querySelector("input");
  inputElement?.setAttribute("tabindex", "0");
  if (props.index === 0) setTimeout(() => inputElement?.focus(), 0);
});
</script>
