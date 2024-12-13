import { Theme, Modal, Button } from '@/orchidui-core'
import { FormBuilder } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Modal,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'default']
    }
  },
  args: {
    title: 'Modal Title',
    description: 'Modal Description',
    isCloseIcon: true,
    cancelButtonProps: {
      label: 'Cancel',
      variant: 'secondary'
    },
    confirmButtonProps: {
      label: 'OK'
    },
    size: 'medium'
  },
  render: (args) => ({
    components: { Theme, Modal, Button },
    setup() {
      const modalValue = ref(false)
      return { modalValue, args }
    },
    template: `
          <Theme>
            <div class="h-[500px]">
              <Button label="Toggle Modal Here" @click="modalValue = !modalValue"/>

              <Modal
                  v-model="modalValue"
                  class="!w-full !h-full"
                  :title="args.title"
                  :description="args.description"
                  :size="args.size"
                  :isCloseIcon="args.isCloseIcon"
                  :cancelButtonProps="args.cancelButtonProps"
                  :confirmButtonProps="args.confirmButtonProps"
              >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              </Modal>
            </div>
          </Theme>
        `
  })
}

export const FormInModal = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'default']
    }
  },
  args: {
    title: 'Modal Title',
    description: 'Modal Description',
    isCloseIcon: true,
    cancelButtonProps: {
      label: 'Cancel',
      variant: 'secondary'
    },
    confirmButtonProps: {
      label: 'OK'
    },
    size: 'medium'
  },
  render: (args) => ({
    components: { Theme, Modal, Button, FormBuilder },
    setup() {
      const modalValue = ref(false)
      const values = ref({
        select_multiple: [],
        select: ''
      })
      const errors = ref({})

      const onUpdateForm = (form, value = null) => {
        if (typeof form.name === 'object') {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index]
          })
        } else {
          values.value[form.name] = value
        }
      }

      const JSON_FORM = [
        {
          name: 'select',
          type: 'Select',
          props: {
            label: 'Select',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
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
          name: 'select_multiple',
          type: 'Select',
          props: {
            label: 'Select Multiple',
            hint: 'This is a hint text to help user',
            placeholder: 'placeholder',
            isCheckboxes: true,
            isSelectAll: true,
            multiple: true,
            options: [
              {
                label: 'Option 1',
                value: '1'
              },
              {
                label: 'Option 2',
                value: '2'
              },
              {
                label: 'Option 3',
                value: '3'
              },
              {
                label: 'Option 4',
                value: '4'
              }
            ]
          }
        },
        {
          name: 'date_picker',
          type: 'DatePicker',
          props: {
            label: 'Select Multiple',
            hint: 'This is a hint text to help user'
          }
        }
      ]
      return { modalValue, args, values, errors, onUpdateForm, JSON_FORM }
    },
    template: `
          <Theme>
            <div class="h-[500px]">
              <Button label="Toggle Modal Here" @click="modalValue = !modalValue"/>

              <Modal
                  v-model="modalValue"
                  class="!w-full !h-full"
                  :title="args.title"
                  :description="args.description"
                  :size="args.size"
                  :isCloseIcon="args.isCloseIcon"
                  :cancelButtonProps="args.cancelButtonProps"
                  :confirmButtonProps="args.confirmButtonProps"
              >
              <FormBuilder
                id="form-builder"
                class="gap-5"
                :errors="errors"
                :values="values"
                :json-form="JSON_FORM"
                @onUpdate="onUpdateForm" />
                <div class="h-[1000px]">
                space area
                </div>
              </Modal>
            </div>
          </Theme>
        `
  })
}
export const Clean = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'default']
    }
  },
  args: {
    title: 'Are you sure?',
    cancelButtonProps: {
      label: 'Cancel',
      variant: 'secondary'
    },
    confirmButtonProps: {
      label: 'OK'
    },
    size: 'small'
  },
  render: (args) => ({
    components: { Theme, Modal, Button },
    setup() {
      const modalValue = ref(false)
      return { modalValue, args }
    },
    template: `
          <Theme>
            <div class="h-[500px]">
              <Button label="Toggle Modal Here" @click="modalValue = !modalValue"/>

              <Modal
                  is-borderless
                  :title="args.title"
                  v-model="modalValue"
                  class="!w-full !h-full"
                  :size="args.size"
                  :cancelButtonProps="args.cancelButtonProps"
                  :confirmButtonProps="args.confirmButtonProps"
              >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              </Modal>
            </div>
          </Theme>
        `
  })
}
