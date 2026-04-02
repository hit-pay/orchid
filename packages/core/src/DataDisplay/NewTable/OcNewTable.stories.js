import { Theme, NewTable, Chip } from '@/orchidui-core'
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  component: NewTable,
  tags: ['autodocs']
}

export const Default = {
  args: {
    isLoading: false,
    options: {
      headers: [
        {
          key: 'date',
          label: 'Date',
          class: 'font-reddit-mono',
          minWidth: 200,
          tooltip: 'Transaction date and time'
        },
        {
          key: 'email',
          label: 'Email',
          variant: 'tooltip',
          width: 300,
          tooltip: true
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
      fields: [
        {
          date: new Date('2024-03-15T10:23:00Z'),
          email: 'john.doe@example.com',
          id: '#TXN-001-2024',
          amount: '2,234.56',
          currency: 'SGD',
          payment_method: 'visa',
          last4Digits: '1234',
          status: 'success'
        },
        {
          date: new Date('2024-03-14T08:45:00Z'),
          email: 'jane.smith@example.com',
          id: '#TXN-002-2024',
          amount: '1,050.00',
          currency: 'SGD',
          payment_method: 'mastercard',
          last4Digits: '5678',
          status: 'neutral',
          children: [
            {
              date: new Date('2024-03-14T08:50:00Z'),
              email: 'jane.smith@example.com',
              id: '#TXN-002A-2024',
              amount: '525.00',
              currency: 'SGD',
              payment_method: 'mastercard',
              last4Digits: '5678',
              status: 'success'
            }
          ]
        }
      ],
      isSelectable: false,
      isExpand: true
    }
  },
  render: (args) => ({
    components: { Theme, NewTable, Chip },
    setup() {
      const selectedRows = ref([])
      return { options: args.options, selectedRows, dayjs, args }
    },
    template: `
      <Theme>
        <NewTable v-model:selected="selectedRows" :options="options" :loading-rows="10" :is-loading="args.isLoading">
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
          <template #header-email-tooltip>
            <div class="text-oc-text-400 text-sm normal-case font-medium px-3 py-2">
              This is a tooltip for the email column
            </div>
          </template>
        </NewTable>
      </Theme>
    `
  })
}
