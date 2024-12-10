import { Theme, SubSidebar } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SubSidebar,
  tags: ['autodocs']
}

export const Default = {
  args: {
    menu: [
      {
        label: 'Sales summary',
        value: 'sales-summary'
      },
      {
        label: 'Sales trends',
        value: 'sales-trends'
      },
      {
        label: 'General settings',
        value: 'general-settings'
      },
      {
        label: 'Analytics',
        value: 'analytics'
      },
      {
        label: 'SEO',
        value: 'seo'
      },
      {
        label: 'Multi-currency converter',
        value: 'multi-currency-converter'
      },
      {
        label: 'Order form customisation',
        value: 'order-form-customisation'
      }
    ],
    title: 'Title',
    onTitleClick: () => null
  },
  render: (args) => ({
    components: { SubSidebar, Theme },
    setup() {
      const modelValue = ref()
      return { modelValue, args }
    },
    template: `
          <Theme>
            <SubSidebar v-model="modelValue" class="w-fit" :menu="args.menu" :title="args.title"
                        @titleClick="args.onTitleClick"/>
          </Theme>
        `
  })
}
