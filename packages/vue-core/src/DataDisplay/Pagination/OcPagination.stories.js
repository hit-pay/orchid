import { Theme, Pagination } from '@orchidui/vue-core'
import { ref } from 'vue'

export default {
  component: Pagination,
  tags: ['autodocs']
}

export const pagination = {
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
    maxPage: 15,
    isRounded: false,
    strategy: 'default'
  },
  render: (args) => ({
    components: { Pagination, Theme },
    setup() {
      const currentPage = ref(1)
      return {
        currentPage,
        args
      }
    },
    template: `
          <Theme class="flex gap-3 items-center mb-3">
            <Pagination
                class="justify-center"
                :max-page="args.maxPage"
                :size="args.size"
                :totalVisible="args.totalVisible"
                :isRounded="args.isRounded"
                :strategy="args.strategy"
                v-model="currentPage"
            />
          </Theme>
        `
  })
}
