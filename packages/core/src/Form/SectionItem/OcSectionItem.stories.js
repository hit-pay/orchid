import { SectionItem, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SectionItem,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    icon: { control: 'select', options: ['', 'information', 'check', 'x'] }
  },
  args: {
    title: 'Title',
    description: 'Description',
    isToggle: true,
    icon: 'check',
    popperMessage: 'Information',
    errorMessage: ''
  },
  render: (args) => ({
    components: { SectionItem, Theme },
    setup() {
      const modelValue = ref(false)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <SectionItem
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { SectionItem, Theme },
    setup() {
      const toggle1 = ref(false)
      const toggle2 = ref(true)
      const toggle3 = ref(false)
      return { toggle1, toggle2, toggle3 }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4 p-4">
          <SectionItem
            v-model="toggle1"
            title="Default"
            description="A section item with a toggle."
            :is-toggle="true"
            icon="check"
          />
          <SectionItem
            v-model="toggle2"
            title="Enabled by default"
            description="This section item is toggled on."
            :is-toggle="true"
            icon="check"
          />
          <SectionItem
            v-model="toggle3"
            title="With error"
            description="This section item has an error message."
            :is-toggle="true"
            icon="information"
            error-message="This setting is required."
          />
        </div>
      </Theme>
    `
  })
}
