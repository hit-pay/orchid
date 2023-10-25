import { Theme, FormBuilder, Button } from "@orchid";

export default {
  component: FormBuilder,
};

export const Default = {
  args: {
    values: {
      card_input: '',
      custom_form_input: ''
    },
    errors: {
      card_input: ''
    }
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button
    },
    setup() {
      const jsonForm = [
        {
          name: 'card_input',
          type: 'cardInput',
          props: {
            hint: 'hint example',
            placeholder: 'placeholder exp',
            isInlineLabel: false,
            isDisabled: false,
            label: 'Card Input Label',
            cardType: 'mastercard',
          }
        },
        {
          name: 'custom_form_input',
          type: 'customFormInput'
        }
      ]
      const onUpdateForm = (name, value = null) => {
        // validate value
        // key / form fields
        // if key null validate all form
        console.log(name, value)
        args.values[name] = value
        // check if valid
        args.errors[name] = "invalid input"
      };
      

      return { args, onUpdateForm, jsonForm };
    },
    template: `
          <Theme class="p-8">
            <div class="grid grid-cols-2 gap-4 mb-5">
            <p>
              Values : {{ args.values }}
              </p>
              <p>
              Error : {{ args.errors }}
              </p>
            </div>
           <FormBuilder 
              class="grid grid-cols-2"
              :errors="args.errors" 
              :values="args.values" 
              :json-form="jsonForm" 
              @onUpdate="onUpdateForm"
            >
              <template #customFormInput="{form, value, error}" >
                  <div class="flex items-center">
                      <label class="mr-3">This custom form input</label>
                      <Button 
                        @click="onUpdateForm(form.name, '1')">Set Value to (1)</Button>
                      <span>
                        {{ error }}
                      </span>
                  </div>
              </template>
           </FormBuilder>
          </Theme>
        `,
  }),
};
