import { NewTable, Chip } from '@/orchidui-core'
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
        },
        {
          key: 'email',
          label: 'Email'
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
          key: 'status2',
          label: 'Status 2'
        },
        {
          key: 'status3',
          label: 'Status 3'
        },
        {
          key: 'status4',
          label: 'Status 4'
        },
        {
          key: 'status5',
          label: 'Status 5'
        },
        {
          key: 'actions',
          label: '',
          headerClass: 'w-[100px]'
        }
      ],
      fields: [],
      isSelectable: false,
      isExpand: false
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
            status: 'success',
            children: [
              {
                date: new Date(),
                email: 'john.doe@example.com',
                id: `#${crypto.randomUUID()}`,
                amount: '2,234.56',
                currency: 'SGD',
                payment_method: 'visa',
                last4Digits: '1234',
                status: 'success'
              }
            ]
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
      }, 2000)

      return {
        options,
        selectedRows,
        dayjs,
        args
      }
    },
    template: `
      {{ selectedRows }}
      <NewTable v-model:selected="selectedRows" :options="options" :loading-rows="10" :is-loading="args.isLoading">
        <template #date="{ item }">
          <div class="truncate h-[50px] bg-red-900">
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
