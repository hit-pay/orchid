import { Theme, Pagination } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Pagination,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small', 'big']
    },
    strategy: {
      control: 'select',
      options: ['default', 'cursor']
    }
  },
  args: {
    totalVisible: 5,
    size: 'default',
    maxPage: 10,
    isRounded: false,
    strategy: 'default'
  },
  render: (args) => ({
    components: { Pagination, Theme },
    setup() {
      const currentPage = ref(1)
      return { currentPage, args }
    },
    template: `
      <Theme class="flex gap-3 items-center mb-3">
        <Pagination
          class="justify-center"
          v-bind="args"
          v-model="currentPage"
        />
      </Theme>
    `
  })
}
