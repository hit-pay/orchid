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
};

export const Default = {
  args: {
    values: {
      range_input_from_1: 1,
      range_input_to_1: 100,
    },
    errors: {
      card_input: "",
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
        console.log(form, value);
      };

      const isOpenedDropdown = ref(false);
      return { values, errors, onUpdateForm, isOpenedDropdown, SampleJsonForm };
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
            <FormBuilder
                id="form-builder"
                class="grid md:grid-cols-2 gap-5"
                :errors="errors"
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
