import { NewTable, Chip } from '@/orchidui-core'
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  component: NewTable,
  tags: ['autodocs']
}

export const Default = {
  args: {
    options:  {
      headers:  [
        {
          key: 'date',
          label: 'Date',
          class: 'font-reddit-mono',
          stickyLeft: true
        },
        {
          key: 'email',
          label: 'Email',
        },
        {
          key: 'id',
          label: 'ID',
          isCopy: true,
          class: 'text-oc-text-400'
        },
        {
          key: 'amount',
          label: 'Amount',
          class: 'font-reddit-mono font-semibold'
        },
        {
          key: 'method',
          label: 'Method',
          class: 'text-oc-text-400'
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'actions',
          label: '',
          headerClass: 'w-[100px]'
        }
      ],
      fields: [],
      isSelectable: true,
      isSticky: true
    }
  },
  render: (args) => ({
    components: {
      NewTable,
      Chip
    },
    setup() {
      const options = args.options
      const selectedRows = ref([])

      const isLoading = ref(true)

      setTimeout(() => {
        options.fields = [
          {
            date: new Date(),
            email: 'john.doe@example.com',
            id: `#${crypto.randomUUID()}`,
            amount: '2,234.56',
            currency: 'SGD',
            payment_method: 'visa',
            last4Digits: '1234',
            status: 'success'
          },
          {
            date: new Date(),
            email: 'test.doe@example.com',
            id: `#${crypto.randomUUID()}`,
            amount: '1,234.56',
            currency: 'SGD',
            payment_method: 'visa',
            last4Digits: '3214',
            status: 'neutral'
          }
        ]
        isLoading.value = false
      }, 1000)

      return {
        options,
        selectedRows,
        dayjs,
        isLoading
      }
    },
    template: `
      {{ selectedRows }}
      <NewTable v-model:selected="selectedRows" :options="options" :is-loading="isLoading">
        <template #date="{ item }">
          <div class="truncate">
            {{ dayjs(item.date).format('YYYY-MM-DD HH:mm:ss') }}
          </div>
        </template>
        <template #amount="{ item }">
          {{ item.currency }} {{ item.amount }}
        </template>
        <template #method="{ item }">
          {{ item.payment_method }} •••• {{ item.last4Digits }}
        </template>
        <template #status="{ item }">
          <Chip :variant="item.status" label="Some label" class="truncate" />
        </template>
        <template #actions="{ item }">
           Actions
        </template>
      </NewTable>
    `
  })
}
