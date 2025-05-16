import { Theme } from '@/orchidui-core'
import { SelectOptions } from '@/orchidui-core'
import { FormBuilder } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  tags: ['autodocs'],
  component: SelectOptions
}

export const Default = {
  args: {
    jsonForm: [
      {
        name: 'select_options_small',
        type: 'SelectOptions',
        props: {
          isSmallImage: true,
          label: 'Example Label',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          options: [
            {
              preview: '/images/request-form.svg',
              label: 'Option 1',
              value: 1
            },
            {
              preview: '/images/request-form.svg',
              label: 'Option 2',
              value: 2
            },
            {
              preview: '/images/request-form.svg',
              label: 'Option 3',
              value: 3
            }
          ]
        }
      },
      {
        name: 'select_options',
        type: 'SelectOptions',
        props: {
          label: 'Example Label',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          options: [
            {
              preview: '/images/request-form.svg',
              label: 'Option 1',
              value: 1
            },
            {
              preview: '/images/request-form.svg',
              label: 'Option 2',
              value: 2
            },
            {
              preview: '/images/request-form.svg',
              label: 'Option 3',
              value: 3
            }
          ]
        }
      },
      {
        name: 'select_options_2',
        type: 'SelectOptions',
        props: {
          label: 'Example Label',
          options: [
            {
              preview: '/images/request-form.svg',
              label: 'Option 1',
              value: 1
            },
            {
              preview: '/images/request-form.svg',
              label: 'Option 2',
              value: 2
            }
          ]
        }
      },
      {
        name: 'select_options_3',
        type: 'SelectOptions',
        props: {
          variant: 'list',
          label: 'Example Label',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          options: [
            {
              preview: '/images/request-form-1.svg',
              label: 'Option 1',
              value: 1,
              description: 'Useful if most of your product visuals are wider than taller'
            },
            {
              preview: '/images/request-form-1.svg',
              label: 'Option 2',
              value: 2,
              description: 'Useful if most of your product visuals are wider than taller'
            },
            {
              preview: '/images/request-form-1.svg',
              label: 'Option 3',
              value: 3,
              description: 'Useful if most of your product visuals are wider than taller'
            },
            {
              preview: '/images/request-form-1.svg',
              label: 'Option 4',
              value: 4,
              description: 'Useful if most of your product visuals are wider than taller'
            }
          ]
        }
      },
      {
        name: 'select_options_4',
        type: 'SelectOptions',
        props: {
          variant: 'list2',
          label: 'Example Label',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          options: [
            {
              label: 'Option 1',
              value: 1,
              description: 'Smaller height, fit to screen width'
            },
            {
              label: 'Option 2',
              value: 2,
              description: 'Smaller height, fit to screen width'
            }
          ]
        }
      },
      {
        name: 'select_options_5',
        type: 'SelectOptions',
        props: {
          variant: 'list',
          label: 'Example Label',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          options: [
            {
              label: 'Option 1',
              value: 1,
              description: 'Smaller height, fit to screen width'
            },
            {
              label: 'Option 2',
              value: 2,
              description: 'Smaller height, fit to screen width'
            }
          ]
        }
      },
      {
        name: 'select_options_6',
        type: 'SelectOptions',
        props: {
          variant: 'list',
          label: 'Borderless',
          hint: 'This is a hint text to help user',
          placeholder: 'placeholder',
          borderless: true,
          options: [
            {
              label: 'Option 1',
              value: 1,
              description: 'Smaller height, fit to screen width'
            },
            {
              label: 'Option 2',
              value: 2,
              description: 'Smaller height, fit to screen width'
            }
          ]
        }
      },
      {
        name: 'aligment',
        type: 'SelectOptions',
        props: {
          label: 'Icon Option Label',
          optionType: 'icon',
          options: [
            {
              value: 'left',
              icon_name: 'text-editor/left'
            },
            {
              value: 'center',
              icon_name: 'text-editor/center'
            },
            {
              value: 'right',
              icon_name: 'text-editor/right'
            }
          ]
        }
      }
    ]
  },
  render: (args) => ({
    components: { Theme, FormBuilder, SelectOptions },
    setup() {
      const values = ref({
        select_options: '',
        select_options_1: '',
        select_options_2: '',
        select_options_3: '',
        select_options_4: '',
        select_options_5: '',
        select_options_6: ''
      })
      const errors = ref({})

      const onUpdateForm = (form, value = null) => {
        console.log(form, value)
        if (typeof form.name === 'object') {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index]
          })
        } else {
          values.value[form.name] = value
        }
      }

      return { values, errors, onUpdateForm, args }
    },
    template: `
          <Theme>
            <div class="mb-5">
              {{ values }}
            </div>
            <div class="max-w-[550px] border p-4 rounded">
              <FormBuilder 
                  class="grid gap-5" 
                  id="section_name" 
                  :values="values" 
                  :errors="errors" :json-form="args.jsonForm" @onUpdate="onUpdateForm">
              </FormBuilder>
            </div>
          </Theme>
        `
  })
}
