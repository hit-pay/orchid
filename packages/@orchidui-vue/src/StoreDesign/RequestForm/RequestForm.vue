<script setup>
import { FormBuilder, Icon, MultipleUploadFile } from "@/orchidui";
import { ref } from "vue";
import { SDMenus } from "@/orchidui/StoreDesign";
import ColorsInput from "./Form/ColorsInput.vue";

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

Object.values(props.requestForm).forEach((form) => {
  if (typeof form.name === "object") {
    form.name.forEach((formName) => {
      if (form.general) {
        formValues.value[formName.key] = generalFormData.value[formName.key];
      } else {
        formValues.value[formName.key] = sectionFormData.value[formName.key];
      }
    });
  } else if (form.name) {
    if (form.general) {
      formValues.value[form.name] = generalFormData.value[form.name];
    } else {
      formValues.value[form.name] = sectionFormData.value[form.name];
    }
  }
});

const emit = defineEmits(["update:generalData", "update:sectionData"]);

const updateData = (general = false) => {
  console.log("generalFormData.value", generalFormData.value);
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

const formatBanner = (value) => {
  let newFormatImages = []
    value.forEach((image) => {
      if(!image.file){
        newFormatImages.push(image.current)
      }else{
        newFormatImages.push({
          id: 'new_'+Date.now(),
          path: image.fileUrl,
          link: image.link ?? (image.current?.link ?? '')
        })
      }
    })
    return newFormatImages
}
const onUpdateBanner = (form, newValue) => {
  images[form.name] = newValue
  setTimeout(() => {
    onUpdateForm(form, formatBanner(images[form.name]))
  }, 100)
}

const onDeleteBanner = () => {

}

const onEditBanner = () => {

}

const imageLoaded = ref(false)
const images = ref([])

const formatImagesValue = (value, name) => {
  if (Array.isArray(value)) {
    let newFormatImages = []
    value.forEach((image) => {
      newFormatImages.push({
        current: image
      })
    })
    images.value[name] = newFormatImages
    imageLoaded.value = true
  }else {
    images.value[name] = []
    imageLoaded.value = true
  }
}

props.requestForm.forEach((f) => {
  if(f.type === 'Banners'){
    formatImagesValue(formValues.value[f.name], f.name)
  }
})

const showSubForm = ref("");
</script>
<template>
  <div>
    <FormBuilder
      v-if="Object.values(formValues).length > 0"
      id="form-builder"
      class="grid gap-4"
      :errors="formErrors"
      :values="formValues"
      :json-form="requestForm"
      @on-update="onUpdateForm"
    >
      <template #Menus="{ form, value }">
        <SDMenus
          :model-value="value"
          :no-menu-icon="form.noMenuIcon"
          :options="options"
          :variant="form.variant"
          :has-submenu="form.hasSubmenu"
          :submenu-level="form.submenuLevel"
          @update:model-value="onUpdateForm(form, $event)"
        />
      </template>
      <template #Children="{ form }">
        <div
          class="flex items-center bg-oc-accent-1-50 rounded p-4 -mt-1 cursor-pointer"
          @click="showSubForm = form.name"
        >
          <div class="w-[30px]">
            <Icon v-if="form.icon" class="text-oc-text-400" :name="form.icon" />
          </div>
          <div>{{ form.label }}</div>
        </div>
        <div
          v-if="showSubForm === form.name"
          class="bg-oc-bg-light absolute top-0 left-0 min-h-full w-full"
        >
          <div
            class="flex items-center border-b mt-5 p-4 cursor-pointer"
            @click="showSubForm = ''"
          >
            <Icon class="text-oc-text-400" name="chevron-left" />
            <div class="font-medium">{{ form.label }}</div>
          </div>
          <div class="px-7 py-4 mt-4">
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
                />
              </template>
              <template #Colors="slot">
                <ColorsInput
                  :form="slot.form"
                  :model-value="slot.value"
                  @update:model-value="onUpdateForm(slot.form, $event)"
                />
              </template>
            </FormBuilder>
          </div>
        </div>
      </template>
      <template #Colors="{ form, value }">
        <ColorsInput
          :form="form"
          :model-value="value"
          @update:model-value="onUpdateForm(form, $event)"
        />
      </template>
      <template #Banners="{form}">
        <MultipleUploadFile
            v-if="imageLoaded && images[form.name]"
            :model-value="images[form.name]"
            :hint="form.props?.hint ?? ''"
            :max-size="5"
            :important="true"
            is-image-only
            :columns-count="form.props?.columnsCount ?? 4"
            with-link
            @update:model-value="onUpdateBanner(form, $event)"
            @on-edit-file="onEditBanner "
            @on-remove-file="onDeleteBanner "
        >
        </MultipleUploadFile>
      </template>
    </FormBuilder>
  </div>
</template>
