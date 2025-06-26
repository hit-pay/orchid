import { NewTable, Chip } from '@/orchidui-core'
import dayjs from 'dayjs'

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
          class: 'font-reddit-mono'
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
        }
      ],
      fields: [
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
      ],
    }
  },
  render: (args) => ({
    components: {
      NewTable,
      Chip
    },
    setup() {
      const options = args.options
      return {
        options,
        dayjs
      }
    },
    template: `
      <NewTable :options="options">
        <template #date="{ row }">
          <div class="truncate">
            {{ dayjs(row.date).format('YYYY-MM-DD HH:mm:ss') }}
          </div>
        </template>
        <template #amount="{ row }">
          {{ row.currency }} {{ row.amount }}
        </template>
        <template #method="{ row }">
          {{ row.payment_method }} •••• {{ row.last4Digits }}
        </template>
        <template #status="{ row }">
          <Chip :variant="row.status" label="Some label" class="truncate" />
        </template>
      </NewTable>
    `
  })
}
