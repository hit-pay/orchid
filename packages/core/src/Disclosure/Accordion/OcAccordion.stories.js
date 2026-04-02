import { Accordion, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Accordion,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    icon: {
      control: 'select',
      options: ['chevron-down', 'x', 'plus']
    }
  },
  args: {
    header: 'Additional Information',
    body: 'Accordion content',
    icon: 'chevron-down',
    showIcon: true,
    isAnimated: true,
    isDisabled: false
  },
  render: (args) => ({
    components: { Accordion, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme class="h-[500px]">
        <Accordion v-model:isExpandable="isOpen" v-bind="args">
          <template #body>
            <p class="text-oc-text-400 text-sm">
              This is the accordion body content. You can place any content here, such as text, forms, or other components.
            </p>
          </template>
        </Accordion>
      </Theme>
    `
  })
}
