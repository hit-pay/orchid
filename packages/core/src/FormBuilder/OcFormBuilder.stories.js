import { Theme, Button, Input, Dropdown, DropdownItem, Icon } from '@/orchidui-core'
import { FormBuilder } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: FormBuilder,
  tags: ['autodocs']
}

export const Default = {
  args: {
    values: {
      range_input: [0, 100]
    },
    errors: {
      card_input: ''
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
        rows: 'auto',
        columns: '100%'
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
        rows: 'auto',
        columns: '100%'
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
        rows: 'auto',
        columns: '50% 50%'
      }
    }
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Input,
      Dropdown,
      DropdownItem,
      Icon
    },
    setup() {
      const values = ref(args.values)
      const errors = ref(args.errors)

      const onUpdateForm = (form, value = null) => {
        if (typeof form.name === 'object') {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index]
          })
        } else {
          values.value[form.name] = value
        }
      }

      const isOpenedDropdown = ref(false)

      const SampleJsonForm = [
        {
          name: 'input',
          key: 'input',
          type: 'Input',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'card_input',
          key: 'card_input',
          type: 'CardInput',
          rule: 'required',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            isInlineLabel: false,
            isDisabled: false,
            cardType: 'mastercard'
          }
        },
        {
          key: 'custom_form_input',
          name: 'custom_form_input',
          type: 'CustomFormInput'
        },
        {
          name: 'simple_checkbox_input',
          key: 'simple_checkbox_input',
          type: 'Checkbox',
          props: {
            label: 'Text'
          }
        },
        {
          name: 'checkboxes_group',
          key: 'checkboxes_group',
          type: 'CheckboxesGroup',
          rule: 'required',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            alignment: 'vertical',
            checkboxes: [
              {
                label: 'Text',
                value: 0
              },
              {
                label: 'Text',
                value: 1
              },
              {
                label: 'Text',
                value: 2,
                isDisabled: true
              }
            ]
          }
        },
        {
          name: 'input_2',
          type: 'Input',
          key: 'input_2',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            icon: 'circle'
          }
        },
        {
          name: 'custom_form_input_2',
          key: 'custom_form_input_2',
          type: 'CustomFormInput2'
        },
        {
          name: 'link_input',
          type: 'LinkInput',
          key: 'link_input',
          props: {
            hint: 'This is a hint text to help user.',
            label: 'Social',
            links: [
              {
                value: 'instagram',
                label: 'Instagram',
                icon: 'instagram',
                preFill: 'https://instagram.com/'
              },
              {
                value: 'twitter',
                label: 'Twitter',
                icon: 'twitter',
                preFill: 'https://twitter.com/'
              }
            ]
          }
        },
        {
          name: 'radio_group',
          key: 'radio_group',
          type: 'RadioGroup',
          props: {
            groupName: 'unique_group_name_1',
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            radio: [
              {
                label: 'Text',
                value: '0'
              },
              {
                label: 'Text',
                value: '1'
              },
              {
                label: 'Text',
                value: '2'
              },
              {
                label: 'Text',
                value: '3'
              },
              {
                label: 'is Disabled',
                value: '4',
                isDisabled: true
              }
            ]
          }
        },
        {
          name: 'radio_group_2',
          key: 'radio_group_2',
          type: 'RadioGroup',
          props: {
            groupName: 'unique_group_name_2',
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            radio: [
              {
                label: 'Text 2',
                value: '0'
              },
              {
                label: 'Text 2',
                value: '1'
              },
              {
                label: 'Text 2',
                value: '2'
              },
              {
                label: 'Text',
                value: '3'
              },
              {
                label: 'is Disabled',
                value: '4',
                isDisabled: true
              }
            ]
          }
        },
        {
          name: 'select',
          key: 'select',
          type: 'Select',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            isFilterable: true,
            isAddNew: true,
            multiple: true,
            options: [
              {
                label: 'Option 1',
                value: 1
              },
              {
                label: 'Option 2',
                value: 2
              },
              {
                label: 'Option 3',
                value: 3
              },
              {
                label: 'Option 4',
                value: 4
              }
            ]
          }
        },
        {
          name: 'text_area_field',
          key: 'text_area_field',
          type: 'Textarea',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'range_input',
          key: 'range_input',
          type: 'RangeInput',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'time_picker_test',
          key: 'time_picker_test',
          type: 'TimePicker',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'date_picker_test',
          type: 'DatePicker',
          props: {
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: [
            {
              key: 'date_picker_range_from',
              rule: 'required'
            },
            {
              key: 'date_picker_range_to',
              rule: 'required'
            }
          ],
          type: 'DatePicker',
          props: {
            type: 'range',
            label: 'Example Label',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'toggle_field',
          key: 'toggle_field',
          type: 'Toggle'
        }
      ]
      return {
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
        SampleJsonForm
      }
    },
    template: `
          <Theme class="p-8">
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
        `
  })
}

export const ShowIfLogic = {
  args: {
    values: {
      select_product_from: 'all_product',
      limit_feature_product: false,
      other_value: false,
      slider: 10
    },
    errors: {}
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder
    },
    setup() {
      const values = ref(args.values)
      const errors = ref(args.errors)

      const onUpdateForm = (form, value = null) => {
        console.log('onUpdateForm', form, value)
        if (typeof form.name === 'object') {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index]
          })
        } else {
          values.value[form.name] = value
        }
      }

      const isOpenedDropdown = ref(false)

      const JsonForm = [
        {
          name: 'select_product_from_section',
          type: 'SectionItem',
          props: {
            title: 'Select product from'
          }
        },
        {
          name: 'select_product_from',
          type: 'Select',
          props: {
            options: [
              {
                value: 'feature',
                label: 'Feature product'
              },
              {
                value: 'all_product',
                label: 'All product'
              },
              {
                value: 'product_category',
                label: 'Product Category'
              },
              {
                value: 'pick_products',
                label: 'Pick Products'
              }
            ],
            hint: 'Learn how to make featured products here.'
          }
        },
        {
          name: 'limit_feature_product',
          type: 'SectionItem',
          props: {
            title: 'Limit product',
            isToggle: true
          }
        },
        {
          name: 'other_value',
          type: 'SectionItem',
          props: {
            title: 'Other value',
            isToggle: true
          }
        },
        {
          name: 'input',
          type: 'Input',
          show_if: 'limit_feature_product',
          show_if_value: true,
          props: {
            label: 'show if limit product',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'input_2',
          type: 'Input',
          show_if: ['limit_feature_product', 'other_value'],
          show_if_value: [true, true],
          props: {
            label: 'show if limit product & other value?',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'slider',
          type: 'Slider',
          props: {
            label: 'How many featured products do you want to show?',
            minGap: 0,
            minLimit: 0,
            maxLimit: 100,
            type: 'default'
          }
        },
        {
          name: 'column',
          type: 'Select',
          props: {
            label: 'Select Columns',
            class: 'w-full lg:w-1/3',
            options: [
              {
                value: '1',
                label: '1 Column'
              },
              {
                value: '2',
                label: '2 Column'
              },
              {
                value: '3',
                label: '3 Column'
              }
            ],
            hint: 'Learn how to make featured products here.'
          }
        },
        {
          name: 'Content2',
          type: 'Children',
          show_if: 'columns',
          show_if_min: '2',
          label: 'Content Column 2',
          children: [
            {
              name: 'title_2',
              type: 'Input',
              props: {
                label: 'Title',
                placeholder: 'Title'
              }
            }
          ]
        },
        {
          name: 'input_column_1',
          type: 'Input',
          show_if: 'column',
          show_if_min: '1',
          props: {
            label: 'This will show if column > 1',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'input_column_2',
          type: 'Input',
          show_if: 'column',
          show_if_min: '2',
          props: {
            label: 'This will show if column > 2',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'input_column_3',
          type: 'Input',
          show_if: 'column',
          show_if_min: '3',
          props: {
            label: 'This will show if column > 3',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'multiple_select_options',
          type: 'Select',
          props: {
            label: 'Triger Show if images is not empty',
            multiple: true,
            options: [
              {
                value: '1',
                label: 'Option 1'
              },
              {
                value: '2',
                label: 'Option 2'
              },
              {
                value: '3',
                label: 'Option 3'
              }
            ]
          }
        },
        {
          name: 'select_options',
          type: 'SelectOptions',
          show_if: ['multiple_select_options'],
          show_if_value: ['arrayExist'],
          props: {
            isSmallImage: true,
            label: 'Triger Show if select options is not empty',
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
          name: 'select_options_1',
          type: 'SelectOptions',
          show_if: ['multiple_select_options'],
          show_if_value: ['arrayExist'],
          props: {
            isSmallImage: true,
            label: 'Triger Show if select options is not empty',
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
        }
      ]
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown
      }
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
             <template #Children="{form}">{{form}}</template>
            </FormBuilder>
          </Theme>
        `
  })
}
