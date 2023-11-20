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
  // TODO : add all form here , best load as async component
} from "@/orchidui";
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  jsonForm: {
    type: Array,
  },
  /**
   * Grid needs to be defined in the following format:
   * `{`
   *   `[Responsive size (xs, sm, md, lg, xl, xxl)]: {`
   *     `area: [Grid area definition (names of areas in order)],`
   *     `rows: [Count and size of rows i.e: 'auto' | '100%' | ...],`
   *     `columns: [Count and size of columns i.e: '33% 33% 33%'],`
   *   `}`
   * `}`
   */
  grid: Object,
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
const errorValues = (name) => {
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
};
const gridDefinitionVariables = computed(() => {
  const parseGridArea = (gridArea) =>
    gridArea
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `"${line}"`)
      .join(" ");

  const variables = {};
  Object.entries(props.grid).forEach(([breakpoint, grid]) => {
    Object.entries(grid).forEach(([key, value]) => {
      variables[`--grid-${breakpoint}-${key}`] =
        key === "area" ? parseGridArea(value) : value;
    });
  });
  return variables;
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
  <div
    :class="grid ? 'responsive-smart-form-grid' : ''"
    :style="grid ? gridDefinitionVariables : ''"
  >
    <div
      v-for="form in jsonForm"
      :key="getFormKey(form.name)"
      :style="{ 'grid-area': getFormKey(form.name) }"
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
      />
    </div>
  </div>
</template>
<style lang="scss">
@mixin grid($breakpoint, $default: "lg") {
  grid-template-areas: var(
    --grid-#{$breakpoint}-area,
    var(--grid-#{$default}-area)
  );
  grid-template-rows: var(
    --grid-#{$breakpoint}-rows,
    var(--grid-#{$default}-rows)
  );
  grid-template-columns: var(
    --grid-#{$breakpoint}-columns,
    var(--grid-#{$default}-columns)
  );
}

.responsive-smart-form-grid {
  max-width: 100%;
  display: grid;
  @include grid(lg);

  @media (max-width: 640px) {
    @include grid(xs);
  }
  @media (min-width: 640px) {
    @include grid(sm);
  }
  @media (min-width: 768px) {
    @include grid(md);
  }
  @media (min-width: 1024px) {
    @include grid(lg);
  }
  @media (min-width: 1280px) {
    @include grid(xl);
  }
  @media (min-width: 1536px) {
    @include grid(xxl);
  }
}
</style>
