import { Theme, NewTable, Chip } from '@/orchidui-core'
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  component: NewTable,
  tags: ['autodocs'],
  kind: 'composite',
  use_for: [
    'table rendering inside DataTable',
    'standalone table with expandable rows',
    'table with column tooltips and copy buttons'
  ],
  understand_with: ['DataTable', 'Chip', 'Pagination'],
  parameters: {
    docs: {
      description: {
        component: `
NewTable is the underlying table component used by DataTable when \`is-new-table\` is set.
It can also be used standalone for tables that don't need the full DataTable filter toolbar.

---

## options object

\`\`\`js
{
  headers: [
    {
      key: 'name',           // matches field key and slot name
      label: 'Name',         // column header text
      class: 'w-[30%]',      // CSS class on body cells
      headerClass: 'w-[30%]',// CSS class on header cell (overrides class for header)
      width: 200,            // fixed pixel width
      minWidth: 150,         // minimum pixel width
      variant: 'chip'        // 'chip' | 'icon' | 'datetime' | 'image' | 'tooltip' — built-in cell renderers
                             // 'tooltip' truncates long text and shows full value on hover
      chipOptions: {         // map of value → { label, variant } — used with variant: 'chip'
        active: { label: 'Active', variant: 'success' }
      },
      tooltip: true,         // true = show cell value as tooltip; string = custom header tooltip text
      isSortable: true,      // show sort indicator
      isCopy: true,          // show copy-to-clipboard icon on cell hover
      stickyLeft: true,      // pin column to left (requires isSticky on DataTable)
      stickyRight: true,     // pin column to right
      disableClickRow: true  // prevent click:row from firing when this cell is clicked
    }
  ],
  fields: [
    {
      id: '1',
      name: 'Alice',
      // ... data matching header keys
      children: [ /* nested rows — shown when isExpand is true */ ]
    }
  ],
  isSelectable: true,        // show row checkboxes
  isExpand: true,            // enable row expansion (requires children array on rows)
  isCursorPointer: true,     // cursor:pointer on rows
  isSticky: true,            // horizontal scroll with sticky columns
  isBorderless: true         // remove outer border
}
\`\`\`

---

## Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`#[header.key]\` | \`{ item, data }\` | Override cell for a column (\`data\` = cell value, \`item\` = full row) |
| \`#header-[key]-tooltip\` | — | Custom content inside the column header tooltip |

---

## Notes

- When used inside DataTable, all options are passed via \`options.tableOptions\`
- \`variant: 'tooltip'\` truncates the cell text and shows the full value in a tooltip on hover — useful for long email/URL columns
- Row \`children\` array enables nested expandable rows when \`isExpand: true\`
        `.trim()
      }
    }
  }
}

export const Default = {
  description: 'Full-featured NewTable with expandable rows, tooltip column, copy button, and custom cell slots.',
  highlights: [
    'variant: "tooltip" — truncates + shows tooltip on hover',
    'isCopy: true — copy button on cell hover',
    'tooltip: string — header tooltip text',
    'isExpand + children — expandable nested rows',
    'minWidth / width — column sizing'
  ],
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
