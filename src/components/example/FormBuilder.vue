<script setup>
import { SampleJsonForm } from "../../../packages/@orchidui-vue/src/data/JsonForm.sample";
import {
  FormBuilder,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  Icon,
} from "@orchidui/vue";
import { ref } from "vue";

const values = ref({
  range_input: [0, 100],
});
const errors = ref({});
const isDropdownOpened = ref(false);
const onUpdateForm = (form, value = null) => {
  console.log(form, value);
};
</script>
<template>
  <article class="p-4">
    <h2>Form Builder</h2>
    <p>Create form more simple</p>
    <div>
      <FormBuilder
        id="example-form-builder"
        class="grid md:grid-cols-2 gap-5 max-w-[800px] mx-auto"
        :errors="errors"
        :values="values"
        :json-form="SampleJsonForm"
        @on-update="onUpdateForm"
      >
        <template #CustomFormInput="{ form, value, error }">
          <div class="flex items-center md:col-span-2 border-2 p-3">
            <label class="mr-3">This custom form input</label>
            <Button @click="onUpdateForm(form, '1')"
              >Set Value to (1) : value : {{ value }}
            </Button>
            <span>
              {{ error }}
            </span>
          </div>
        </template>
        <template #CustomFormInput2="{ form, value, error }">
          <Input
            label="Custom Form Input 2"
            hint="This is a hint text to help user"
            :model-value="value"
            :error-message="error"
            @update:model-value="onUpdateForm(form, $event)"
          >
            <template #trailing>
              <Dropdown v-model="isDropdownOpened">
                <template #menu>
                  <div class="flex p-2 flex-col">
                    <DropdownItem
                      text="Menu"
                      icon="pencil"
                      @click="isDropdownOpened = false"
                    />
                    <DropdownItem
                      text="Menu"
                      icon="pencil"
                      @click="isDropdownOpened = false"
                    />
                    <DropdownItem
                      text="Menu"
                      icon="pencil"
                      @click="isDropdownOpened = false"
                    />
                  </div>
                </template>
                <div
                  class="text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                >
                  <span class="flex items-center text-sm">USD</span>
                  <Icon class="w-[14px] h-[14px]" name="chevron-down" />
                </div>
              </Dropdown>
            </template>
          </Input>
        </template>
      </FormBuilder>
    </div>
  </article>
</template>
