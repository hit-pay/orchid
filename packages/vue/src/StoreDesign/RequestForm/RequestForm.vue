<script setup>
import {
  FormBuilder,
  Icon,
  MultipleUploadFile,
  Slider,
  Tabs,
} from "@/orchidui";
import { ref } from "vue";
import { SDMenus } from "@/orchidui/StoreDesign";
import InputColors from "./Form/InputColors.vue";
import SelectFont from "./Form/SelectFont.vue";
const props = defineProps({
  requestForm: Object,
  generalData: Object,
  sectionData: Object,
  options: {
    type: Object,
    default: () => {
      return {
        categories: [],
        pages: [],
        products: [],
      };
    },
  },
});

const generalFormData = ref(props.generalData);
const sectionFormData = ref(props.sectionData);

const formErrors = ref({});
const formValues = ref({});

const defaultValueType = (value, type) => {
  if (value === undefined) {
    if (type === "SectionItem") {
      return false;
    } else {
      return "";
    }
  } else {
    return value;
  }
};

const setDefaultData = (form) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName) => {
      if (form.general) {
        formValues.value[formName.key] = defaultValueType(
          generalFormData.value[formName.key],
          form.type
        );
      } else {
        formValues.value[formName.key] = defaultValueType(
          sectionFormData.value[formName.key],
          form.type
        );
      }
    });
  } else if (form.name) {
    if (form.general) {
      formValues.value[form.name] = defaultValueType(
        generalFormData.value[form.name],
        form.type
      );
    } else {
      formValues.value[form.name] = defaultValueType(
        sectionFormData.value[form.name],
        form.type
      );
    }
  }
};
Object.values(props.requestForm).forEach((form) => {
  if (form.type === "Children") {
    form.children.forEach((childForm) => {
      setDefaultData(childForm);
    });
  } else {
    setDefaultData(form);
  }
});

const emit = defineEmits([
  "update:generalData",
  "update:sectionData",
  "edit:images",
  "delete:images",
  "add:images",
  "update:field",
]);

const updateData = (form, value, general = false) => {
  if (general) {
    emit("update:generalData", generalFormData.value);
  } else {
    emit("update:sectionData", sectionFormData.value);
  }
  emit("update:field", {
    general: form.general ? true : false,
    field: form.name,
    value: value,
  });
};

const onUpdateForm = (form, value = null) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName, index) => {
      formValues.value[formName.key] = value[index];
      if (form.general) {
        generalFormData.value[formName.key] = value[index];
        updateData(form, value, true);
      } else {
        sectionFormData.value[formName.key] = value[index];
        updateData(form, value);
      }
    });
  } else {
    formValues.value[form.name] = value;
    if (form.general) {
      generalFormData.value[form.name] = value;
      updateData(form, value, true);
    } else {
      sectionFormData.value[form.name] = value;
      updateData(form, value);
    }
  }
};

const formatimages = (value, form) => {
  let newFormatImages = [];
  value.forEach((image) => {
    if (image.current) {
      newFormatImages.push(image.current);
    } else {
      const newFormat = {
        id: "is_new_" + Date.now(),
        path: image.fileUrl,
        link: image.link ?? image.current?.link ?? "",
      };
      newFormatImages.push(newFormat);
      emit("add:images", {
        form: form,
        value: newFormat,
      });
    }
  });
  return newFormatImages;
};
const onUpdateimages = (form, newValue) => {
  images[form.name] = newValue;
  setTimeout(() => {
    const formatValue = formatimages(images[form.name], form);
    onUpdateForm(form, formatValue);
  }, 100);
};

const onDeleteimages = (form, value) => {
  emit("delete:images", {
    form: form,
    value: value,
  });
};

const onEditimages = (form, value) => {
  emit("edit:images", {
    form: form,
    value: value,
  });
};

const imageLoaded = ref(false);
const images = ref([]);

const formatImagesValue = (value, name) => {
  if (Array.isArray(value)) {
    let newFormatImages = [];
    value.forEach((image) => {
      newFormatImages.push({
        current: image,
      });
    });
    images.value[name] = newFormatImages;
    imageLoaded.value = true;
  } else {
    images.value[name] = [];
    imageLoaded.value = true;
  }
};

props.requestForm.forEach((f) => {
  if (f.type === "Images") {
    formatImagesValue(formValues.value[f.name], f.name);
  } else if (f.type === "Children") {
    f.children.forEach((childForm) => {
      if (childForm.type === "Images") {
        formatImagesValue(formValues.value[childForm.name], childForm.name);
      }
    });
  }
});

const showSubForm = ref([]);

const toggleSubForm = (name) => {
  if (showSubForm.value.includes(name)) {
    showSubForm.value = showSubForm.value.filter((s) => s.name);
  } else {
    showSubForm.value.push(name);
  }
};
</script>
<template>
  <div>
    <FormBuilder
      v-if="Object.values(formValues).length > 0"
      id="form-builder"
      class="grid gap-x-4 gap-y-5"
      :errors="formErrors"
      :values="formValues"
      :json-form="requestForm"
      @on-update="onUpdateForm"
    >
      <template #Tabs="{ form, value }">
        <Tabs
          :model-value="value"
          v-bind="form.props"
          @update:model-value="onUpdateForm(form, $event)"
        />
      </template>
      <template #Menus="{ form, value }">
        <SDMenus
          :model-value="value"
          :no-menu-icon="form.noMenuIcon"
          :options="options"
          :variant="form.variant"
          :has-submenu="form.hasSubmenu"
          :submenu-level="form.submenuLevel"
          @update:model-value="onUpdateForm(form, $event)"
          @add:menu="
            $emit('update:field', {
              general: form.general ? true : false,
              field: form.name,
              value: value,
              child: $event,
            })
          "
        />
      </template>
      <template #Children="{ form }">
        <div
          class="font-medium flex items-center bg-oc-accent-1-50 p-3 px-7 cursor-pointer -ml-[23px] w-[calc(100%+46px)] -mt-4"
          @click="toggleSubForm(form.name)"
        >
          <div v-if="form.icon" class="w-[30px]">
            <Icon
              v-if="form.icon"
              class="text-oc-text-400"
              width="20"
              height="20"
              :name="form.icon"
            />
          </div>
          <div>{{ form.label }}</div>
          <div class="ml-auto">
            <Icon
              name="chevron-down"
              width="16"
              height="16"
              :class="showSubForm.includes(form.name) ? 'rotate-180' : ''"
            />
          </div>
        </div>
        <Transition
          enter-active-class="duration-[100ms] ease-in"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-[50ms] ease-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="showSubForm.includes(form.name)" class="bg-oc-bg-light">
            <div class="py-4 mt-4">
              <FormBuilder
                id="form-builder-children"
                class="grid gap-5"
                :errors="formErrors"
                :values="formValues"
                :json-form="form.children"
                @on-update="onUpdateForm"
              >
                <template #Menus="slot">
                  <SDMenus
                    :model-value="slot.value"
                    :no-menu-icon="slot.form.noMenuIcon"
                    :options="options"
                    :variant="slot.form.variant"
                    :has-submenu="slot.form.hasSubmenu"
                    :submenu-level="slot.form.submenuLevel"
                    @update:model-value="onUpdateForm(slot.form, $event)"
                    @add:menu="
                      $emit('update:field', {
                        general: slot.form.general ? true : false,
                        field: slot.form.name,
                        value: slot.value,
                        child: $event,
                      })
                    "
                  />
                </template>
                <template #Colors="slot">
                  <InputColors
                    :form="slot.form"
                    :model-value="slot.value"
                    @update:model-value="onUpdateForm(slot.form, $event)"
                  />
                </template>
                <template #Slider="slot">
                  <Slider
                    :key="slot.form.name"
                    :model-value="slot.value"
                    :min-limit="slot.form.props?.min ?? 0"
                    :max-limit="slot.form.props?.max ?? 50"
                    v-bind="slot.form.props"
                    @update:model-value="onUpdateForm(slot.form, $event)"
                  />
                </template>
                <template #Font="slot">
                  <SelectFont
                    :key="slot.form.name"
                    :model-value="slot.value"
                    v-bind="slot.form.props"
                    @update:model-value="onUpdateForm(slot.form, $event)"
                  />
                </template>
                <template #Images="slot">
                  <MultipleUploadFile
                    v-if="imageLoaded && images[slot.form.name]"
                    :model-value="images[slot.form.name]"
                    :hint="slot.form.props?.hint ?? ''"
                    :max-size="5"
                    :max-images="slot.form.props?.maxImages ?? 8"
                    :important="true"
                    is-image-only
                    :columns-count="slot.form.props?.columnsCount ?? 4"
                    with-link
                    @update:model-value="onUpdateimages(slot.form, $event)"
                    @on-edit-file="onEditimages(slot.form, $event)"
                    @on-remove-file="onDeleteimages(slot.form, $event)"
                  >
                  </MultipleUploadFile>
                </template>
              </FormBuilder>
            </div>
          </div>
        </Transition>
      </template>
      <template #Colors="{ form, value }">
        <InputColors
          :form="form"
          :model-value="value"
          @update:model-value="onUpdateForm(form, $event)"
        />
      </template>
      <template #Images="{ form }">
        <MultipleUploadFile
          v-if="imageLoaded && images[form.name]"
          :model-value="images[form.name]"
          :hint="form.props?.hint ?? ''"
          :max-size="5"
          :max-images="form.props?.maxImages ?? 8"
          :important="true"
          is-image-only
          :columns-count="form.props?.columnsCount ?? 4"
          with-link
          @update:model-value="onUpdateimages(form, $event)"
          @on-edit-file="onEditimages(form, $event)"
          @on-remove-file="onDeleteimages(form, $event)"
        >
        </MultipleUploadFile>
      </template>
    </FormBuilder>
  </div>
</template>
