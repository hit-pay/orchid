<script setup>
import countryCodes from "../../../../packages/@orchidui-vue/src/data/CountryCodes.sample";
import { FormBuilder } from "@orchidui/vue";
import { ref } from "vue";

const values = ref({});
const errors = ref({});

const onUpdateForm = (form, value = null, nameIndex = undefined) => {
  // use composables validator
  if (nameIndex !== undefined) {
    values.value[form.name[nameIndex].key] = value;
    if (form.type === "PhoneInput") {
      if (nameIndex === 1) {
        errors.value[form.name[nameIndex].key] = !new RegExp(
          "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
        ).test(value)
          ? "Phone Number Invalid"
          : "";
      }
    } else {
      errors.value[form.name[nameIndex].key] = "invalid input array ";
    }
  } else {
    values.value[form.name] = value;
  }
};


const jsonFormCustomer = [
  {
    name: "name",
    rule: "required",
    type: "Input",
    props: {
      label: "Name",
      placeholder: "Enter Name",
    },
  },
  {
    name: "email",
    rule: "required",
    type: "Input",
    props: {
      inputType: "email",
      label: "Email",
      placeholder: "email@website.com",
    },
  },
  {
    name: [
      {
        key: "country_code",
        rule: "required",
      },
      {
        key: "phone_number",
        rule: "required",
      },
    ],
    type: "PhoneInput",
    props: {
      countryCodes: countryCodes,
      label: "Phone",
      placeholder: "8771268181",
    },
  },
  {
    name: "street",
    rule: "required",
    type: "Input",
    props: {
      label: "Street",
      placeholder: "Street Name",
    },
  },
  {
    name: "city",
    rule: "required",
    type: "Input",
    props: {
      label: "City",
      placeholder: "City Name",
    },
  },
  {
    name: "state",
    rule: "required",
    type: "Input",
    props: {
      label: "State",
      placeholder: "State Name",
    },
  },
  {
    name: "select",
    type: "Select",
    props: {
      label: "Country",
      placeholder: "Country Name",
      isFilterable: true,
      options: [
        {
          label: "Singapure",
          value: "sg",
        },
        {
          label: "Indonesia",
          value: "id",
        },
      ],
    },
  },
  {
    name: "postal_code",
    rule: "required",
    type: "Input",
    props: {
      label: "Postal Code",
      placeholder: "",
    },
  },
  {
    name: "remark",
    type: "Textarea",
    className: "md:col-span-2",
    props: {
      label: "Remark",
      placeholder: "Tell us more about this customer",
    },
  },
];
</script>
<template>
  <article class="p-4">
    <h2>Customer Form Builder</h2>
    <p>Create form more simple</p>
    <div>
      <div class="grid gap-5 mb-5 text-center m-8">
        <p>Values : {{ values }}</p>
        <p>Errors : {{ errors }}</p>
      </div>
      <div class="max-w-[800px] mx-auto px-7 pb-7 shadow rounded-lg">
        <h1 class="py-6">Add new customer</h1>
        <FormBuilder
          id="example-form-builder"
          class="grid md:grid-cols-2 gap-5"
          :errors="errors"
          :values="values"
          :json-form="jsonFormCustomer"
          @on-update="onUpdateForm"
        />
      </div>
    </div>
  </article>
</template>
