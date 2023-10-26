import {
  Theme,
  FormBuilder,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  Icon,
} from "@orchid";

import { ref } from "vue";
import { SampleJsonForm } from "../../data/JsonForm.sample";
export default {
  component: FormBuilder,
};

export const Default = {
  args: {
    values: {
      card_input: "",
      custom_form_input: "",
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
      // get all field name
      // get field rule
      // validate all
      // get all field values

      // Rule and validator
      // 1. required
      // 2. required-if:field-name=condition
      // 3. show-if:field-name=condition
      // 4. get:object-key

      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null, nameIndex = undefined) => {
        // validate value
        // key / form fields
        // if key null validate all form
        // check if valid
        if (nameIndex !== undefined) {
          values.value[form.name[nameIndex].key] = value;
          if(form.type === 'PhoneInput'){
            if(nameIndex === 1){
              errors.value[form.name[nameIndex].key] = !new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$").test(value) ? 'Phone Number Invalid' : ''
            }
          }else{
            errors.value[form.name[nameIndex].key] = "invalid input array ";
          }
        } else {
          values.value[form.name] = value;
          errors.value[form.name] = "invalid input " + form.name;
        }
      };

      return { values, errors, onUpdateForm, SampleJsonForm };
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
              class="grid md:grid-cols-2 gap-5"
              :errors="errors" 
              :values="values" 
              :json-form="SampleJsonForm" 
              @onUpdate="onUpdateForm"
            >
            <template #CustomFormInput="{form, value, error}" >
                  <div class="flex items-center md:col-span-2 border-2 p-3">
                      <label class="mr-3">This custom form input</label>
                      <Button 
                        @click="onUpdateForm(form.name, '1')">Set Value to (1)</Button>
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
                      <Dropdown>
                        <template #default="{close}">
                          <div class="flex p-2 flex-col">
                            <DropdownItem text="Menu" icon="pencil" @click="close"/>
                            <DropdownItem text="Menu" icon="pencil" @click="close"/>
                            <DropdownItem text="Menu" icon="pencil" @click="close"/>
                          </div>
                        </template>
                        <template #trigger>
                          <div
                              class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                          >
                            <span class="flex items-center text-sm">USD</span>
                            <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                          </div>
                        </template>
                      </Dropdown>
                    </template>
                  </Input>
            </template>
           </FormBuilder>
          </Theme>
        `,
  }),
};
