import { Theme, SectionItem } from '@/orchidui'
import { ref } from 'vue'

export default {
  component: SectionItem,
  tags: ['autodocs']
}

export const sectionItem = {
  argTypes: {
    icon: {
      control: 'select',
      options: ['information', 'check', 'x', '']
    }
  },
  args: {
    title: 'Title',
    description: 'Description',
    toggleProps: {},
    isToggle: true,
    icon: 'check',
    popperMessage: 'Information',
    errorMessage: ''
  },
  render: (args) => ({
    components: { Theme, SectionItem },
    setup() {
      const modelValue = ref(false)
      return { args, modelValue }
    },
    template: `
          <Theme colorMode="light">
            <div class="p-1">
              <SectionItem
                  v-model="modelValue"
                  :title="args.title"
                  :description="args.description"
                  :is-toggle="args.isToggle"
                  :toggle-props="args.toggleProps"
                  :icon="args.icon"
                  :popper-message="args.popperMessage"
                  :error-message="args.errorMessage"
              />
            </div>
          </Theme>
        `
  })
}
