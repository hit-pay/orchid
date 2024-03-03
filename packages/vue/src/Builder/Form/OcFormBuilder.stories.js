import {
  Theme,
  FormBuilder,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  Icon,
} from "@/orchidui";

import { ref } from "vue";
import { SampleJsonForm } from "../../data/JsonForm.sample";

export default {
  component: FormBuilder,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    values: {
      range_input: [0, 100],
    },
    errors: {
      card_input: "",
    },
    grid: {
      xs: {
        area: `
              input
              card_input
              custom_form_input
              simple_checkbox_input
              checkboxes_group
              input_2
              custom_form_input_2
              link_input
              phone_number_field
              radio_group
              radio_group_2
              select
              text_area_field
              range_input
              time_picker_test
              date_picker_test
              date_picker_range_from
              toggle_field
          `,
        rows: "auto",
        columns: "100%",
      },
      sm: {
        area: `
               input
              card_input
              custom_form_input
              simple_checkbox_input
              checkboxes_group
              input_2
              custom_form_input_2
              link_input
              phone_number_field
              radio_group
              radio_group_2
              select
              text_area_field
              range_input
              time_picker_test
              date_picker_test
              date_picker_range_from
              toggle_field
          `,
        rows: "auto",
        columns: "100%",
      },
      lg: {
        area: `
            input card_input
            custom_form_input simple_checkbox_input
            checkboxes_group input_2
            custom_form_input_2 link_input
            phone_number_field radio_group
            radio_group_2 select
            text_area_field range_input
            time_picker_test date_picker_test
            date_picker_range_from toggle_field
          `,
        rows: "auto",
        columns: "50% 50%",
      },
    },
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Input,
      Dropdown,
      DropdownItem,
      Icon,
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);
      return {
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
        SampleJsonForm,
      };
    },
    template: `
          <Theme class="p-8">
            <div class="grid md:grid-cols-2 gap-5 mb-5">
              <p>
                Values : {{ values }}
              </p>
              <p>
                Errors : {{ errors }}
              </p>
            </div>
            <Button
              label="Trigger errors"
              @click="errors = {
                phone_number_field: 'Field is invalid format',
                input: 'Field is required',
              }"
            />
            <FormBuilder
                id="form-builder"
                class="gap-5"
                :errors="errors"
                :grid="args.grid"
                :values="values"
                :json-form="SampleJsonForm"
                @onUpdate="onUpdateForm"
            >
              <template #CustomFormInput="{form, value, error}">
                <div class="flex items-center md:col-span-2 border-2 p-3">
                  <label class="mr-3">This custom form input</label>
                  <Button
                      @click="onUpdateForm(form, '1')">Set Value to (1)
                  </Button>
                  <span>
                        {{ error }}
                      </span>
                </div>
              </template>
              <template #CustomFormInput2="{form, value, error}">
                <Input
                    label="Custom Form Input 2"
                    hint="This is a hint text to help user"
                    :model-value="value"
                    :error-message="error"
                    @update:model-value="onUpdateForm(form, $event)"
                >
                  <template #trailing>
                    <Dropdown v-model="isOpenedDropdown">
                      <template #menu>
                        <div class="flex p-2 flex-col">
                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                        </div>
                      </template>
                      <div
                          class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </Dropdown>
                  </template>
                </Input>
              </template>
            </FormBuilder>
          </Theme>
        `,
  }),
};

export const ShowIfLogic = {
  args: {
    values: {
      select_product_from: "all_product",
      limit_feature_product: false,
    },
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [
        {
          name: "select_product_from_section",
          type: "SectionItem",
          props: {
            title: "Select product from",
          },
        },
        {
          name: "select_product_from",
          type: "Select",
          props: {
            options: [
              {
                value: "feature",
                label: "Feature product",
              },
              {
                value: "all_product",
                label: "All product",
              },
              {
                value: "product_category",
                label: "Product Category",
              },
              {
                value: "pick_products",
                label: "Pick Products",
              },
            ],
            hint: "Learn how to make featured products here.",
          },
        },
        {
          name: "limit_feature_product",
          type: "SectionItem",
          props: {
            title: "Limit featured products",
            isToggle: true,
          },
        },
        {
          name: "input",
          type: "Input",
          show_if: "limit_feature_product",
          show_if_value: true,
          props: {
            label: "How many featured products do you want to show?",
            placeholder: "placeholder",
          },
        },
      ];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8">

            <div class="mb-10 pb-10 border-b">
            {{ values }}
            </div>

            <FormBuilder
                id="form-builder"
                class="grid gap-4"
                :errors="errors"
                :values="values"
                :json-form="JsonForm"
                @onUpdate="onUpdateForm"
            >
            </FormBuilder>
          </Theme>
        `,
  }),
};
