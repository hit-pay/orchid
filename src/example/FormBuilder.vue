<script setup>
import {
  FormBuilder,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  Icon,
} from "@orchid";

import { SampleJsonForm } from "@orchid/data/JsonForm.sample";

import { ref } from "vue";

const values = ref({
  card_input: "123123123",
});
const errors = ref({});

const onUpdateForm = (name, value = null) => {
  // validate value
  // key / form fields
  // if key null validate all form
  values.value[name] = value;
  // check if valid
  errors.value[name] = "invalid input";
};
</script>
<template>
  <article class="p-4">
    <h2>Form Builder</h2>
    <p>Create form more simple</p>
    <div>
      <div class="grid md:grid-cols-2 gap-5 mb-5">
        <p>Values : {{ values }}</p>
        <p>Errors : {{ errors }}</p>
      </div>
      <FormBuilder
        id="example-form-builder"
        class="grid md:grid-cols-2 gap-5"
        :errors="errors"
        :values="values"
        :json-form="SampleJsonForm"
        @on-update="onUpdateForm"
      >
        <template #CustomFormInput="{ form, value, error }">
          <div class="flex items-center md:col-span-2 border-2 p-3">
            <label class="mr-3">This custom form input</label>
            <Button @click="onUpdateForm(form.name, '1')"
              >Set Value to (1) : value : {{ value }}</Button
            >
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
            @update:model-value="onUpdateForm(form.name, $event)"
          >
            <template #trailing>
              <Dropdown>
                <template #default="{ close }">
                  <div class="flex p-2 flex-col">
                    <DropdownItem text="Menu" icon="pencil" @click="close" />
                    <DropdownItem text="Menu" icon="pencil" @click="close" />
                    <DropdownItem text="Menu" icon="pencil" @click="close" />
                  </div>
                </template>
                <template #trigger>
                  <div
                    class="text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                  >
                    <span class="flex items-center text-sm">USD</span>
                    <Icon class="w-[14px] h-[14px]" name="chevron-down" />
                  </div>
                </template>
              </Dropdown>
            </template>
          </Input>
        </template>
      </FormBuilder>
    </div>
  </article>
</template>
