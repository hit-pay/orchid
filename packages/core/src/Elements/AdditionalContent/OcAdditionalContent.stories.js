import { AdditionalContent, OverviewItem, Theme } from '@/orchidui-core'
import { ref } from 'vue'
import DefaultExample from './examples/Default.vue'
import DefaultRaw from './examples/Default.vue?raw'
import DynamicExample from './examples/Dynamic.vue'
import DynamicRaw from './examples/Dynamic.vue?raw'
import BalanceExample from './examples/Balance.vue'
import BalanceRaw from './examples/Balance.vue?raw'
import ExpandingExample from './examples/Expanding.vue'
import ExpandingRaw from './examples/Expanding.vue?raw'

export default {
  component: AdditionalContent,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'A contextual header section that sits below the page title. Switches between four layout variants: default (link + chip + actions), dynamic (grouped overview boxes + optional customer card), balance (financial overview with tabs), and expanding (flat grid with show-more + optional customer card).',
  keywords: ['additional content', 'overview', 'header', 'customer card', 'expanding', 'balance', 'dynamic'],
  use_for: [
    'transaction or payment detail pages',
    'customer or entity detail headers',
    'financial overview summaries',
    'expandable metadata grids',
    'payment link detail pages'
  ],
  understand_with: ['CustomerCard', 'OverviewItem', 'PrimaryActions', 'Chip', 'Button', 'Tooltip']
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'dynamic', 'balance', 'expanding'],
      description: 'Layout variant to render'
    },
    // default variant
    additionalTitle:  { control: 'text',    description: 'default — heading text' },
    chipVariant:      { control: 'select',  options: ['accent-1', 'accent-2', 'success', 'warning', 'error', 'gray', ''], description: 'default — chip color' },
    chipLabel:        { control: 'text',    description: 'default — chip label text' },
    // shared
    isCustomer:       { control: 'boolean', description: 'dynamic / expanding — show CustomerCard' },
    customerCardVariant: { control: 'select', options: ['small', 'big', 'float'], description: 'CustomerCard size variant' },
    customerIsHover:  { control: 'boolean', description: 'dynamic — hover state on CustomerCard' },
    customerIsEdit:   { control: 'boolean', description: 'dynamic — edit state on CustomerCard' },
    isLoading:        { control: 'boolean', description: 'default — show skeleton placeholders' },
    // expanding variant
    expandingInitialCount: { control: 'number', description: 'expanding — items shown before "Show more"' },
    expandingColumns:      { control: 'number', description: 'expanding — number of grid columns' },
    // balance variant
    overviewActiveTab: { control: 'select', options: ['hitpay', 'card'], description: 'balance — active tab value' }
  },
  args: {
    variant: 'default',
    additionalTitle: 'Premium Store',
    chipVariant: 'success',
    chipLabel: 'Active',
    isCustomer: false,
    customerCardVariant: 'big',
    customerIsHover: false,
    customerIsEdit: false,
    isLoading: false,
    expandingInitialCount: 6,
    expandingColumns: 3,
    overviewActiveTab: 'hitpay'
  },
  render: (args) => ({
    components: { AdditionalContent, OverviewItem, Theme },
    setup() {
      const activeTab = ref(args.overviewActiveTab)

      const primaryActions = {
        mainLinkAction: {
          tooltipContent: 'Preview Link',
          url: 'https://securecheckout.staging.hit-pay.com/payment-request/@minstore-edit43'
        },
        copyTooltipContent: 'Copy payment link',
        copiedTooltipContent: 'Payment link copied!',
        actions: [
          { isCopyButton: true },
          { icon: 'pencil', tooltipContent: 'Edit', onClick: () => console.log('edit') }
        ]
      }

      const customer = {
        name: 'Alex Turner',
        email: 'alex@arcticmonkey.io',
        phone: '+65 8373 3739',
        address: { street: '123 Main Street', city: 'Pennsylvania', state: 'Pennsylvania', postal_code: '12345', country: 'USA' }
      }

      const dynamicBoxes = [
        {
          showInfo: false,
          items: [
            { title: 'Purpose',   content: 'Premium GYM membership' },
            { title: 'ID',        content: '9a2f500c-545d-4db6-84fa-c40d65146f43' },
            { title: 'Reference', content: '9a2f500c-545d-4db6-84fa-c40d65146f43' }
          ]
        },
        {
          showInfo: false,
          items: [
            { title: 'Created at', content: '20/11/2023' },
            { title: 'Expired at', content: '20/12/2023' }
          ]
        }
      ]

      const expandingItems = [
        { title: 'Purpose',    content: 'Premium GYM membership' },
        { title: 'ID',         content: '9a2f500c-545d-4db6-84fa-c40d65146f43' },
        { title: 'Reference',  content: 'REF-20231120-001' },
        { title: 'Created at', content: '20/11/2023' },
        { title: 'Expired at', content: '20/12/2023' },
        { title: 'Status',     content: 'Completed', class: 'text-oc-success' },
        { title: 'Amount',     content: 'SGD 150.00' },
        { title: 'Channel',    content: 'Point of sale', info: true, tooltip: 'The payment channel used for this transaction' },
        { title: 'Fee',        content: 'SGD 2.50' }
      ]

      const overviewItems = [
        { title: 'Total revenue', content: 'SGD 11,170.00', icon: 'coins',    iconProps: { class: 'text-oc-primary' },   isFooter: true },
        { title: 'This month',    content: 'SGD 1,870.00',  icon: 'coin',     iconProps: { class: 'text-oc-accent-1' } },
        { title: 'Completed',     content: '20',            icon: 'check',    iconProps: { class: 'text-oc-success' } },
        { title: 'Refunded',      content: '3',             icon: 'backward', iconProps: { class: 'text-oc-error' } }
      ]

      const overviewTabs = [
        { title: 'HitPay Balance', content: 'SGD 1,110.00', value: 'hitpay', countryIso: 'SG' },
        { title: 'Card Balance',   content: 'SGD 1,000.00', value: 'card' }
      ]

      return { args, activeTab, primaryActions, customer, dynamicBoxes, expandingItems, overviewItems, overviewTabs }
    },
    template: `
      <Theme class="min-h-[300px] p-4">
        <AdditionalContent
          :variant="args.variant"
          main-link="https://securecheckout.staging.hit-pay.com/payment-request"
          user-id="/@minstore-edit43"
          :additional-title="args.additionalTitle"
          :chip-variant="args.chipVariant"
          :chip-label="args.chipLabel"
          :primary-actions="primaryActions"
          :is-loading="args.isLoading"
          :boxes="dynamicBoxes"
          :expanding-items="expandingItems"
          :expanding-initial-count="args.expandingInitialCount"
          :expanding-columns="args.expandingColumns"
          :is-customer="args.isCustomer"
          :customer="customer"
          :customer-card-variant="args.customerCardVariant"
          :customer-is-hover="args.customerIsHover"
          :customer-is-edit="args.customerIsEdit"
          :overview-items="overviewItems"
          :overview-tabs="overviewTabs"
          :overview-active-tab="activeTab"
          @change-tab="activeTab = $event"
          @add-customer="console.log('add customer')"
          @edit-customer="console.log('edit customer', $event)"
        />
      </Theme>
    `
  })
}

// ── Stories ───────────────────────────────────────────────────────────────────

export const Default = {
  description: 'Shows a title, chip status, a full link with copy/open actions, and a dropdown. Use this variant on detail pages where the entity has a public URL (payment links, stores).',
  highlights: [
    'variant="default"',
    'main-link + user-id — compose the full URL',
    'chip-variant + chip-label — status badge',
    'primary-actions — copy / open / dropdown buttons'
  ],
  code: DefaultRaw,
  render: () => ({
    components: { DefaultExample, Theme },
    template: `<Theme class="p-4"><DefaultExample /></Theme>`
  })
}

export const Dynamic = {
  description: 'Grouped overview boxes side-by-side with an optional CustomerCard on the right. Each box group accepts a slot name for fully custom cell rendering.',
  highlights: [
    'variant="dynamic"',
    'boxes — array of { items[], showInfo, slot }',
    'is-customer + customer — show CustomerCard panel',
    '#[box.slot]="{ data, key }" — custom box slot',
    '#customer-bottom — extra content below customer info'
  ],
  code: DynamicRaw,
  render: () => ({
    components: { DynamicExample, Theme },
    template: `<Theme class="p-4"><DynamicExample /></Theme>`
  })
}

export const Balance = {
  description: 'Financial summary header with tab-switchable balances and a row of metric tiles. Emits change-tab when the user switches tabs.',
  highlights: [
    'variant="balance"',
    'overview-tabs — tab buttons with balance values',
    'overview-items — metric tiles (icon + title + content)',
    'overview-active-tab + change-tab — controlled tab state',
    '#[tab.value] slot — custom content per tab'
  ],
  code: BalanceRaw,
  render: () => ({
    components: { BalanceExample, Theme },
    template: `<Theme class="p-4"><BalanceExample /></Theme>`
  })
}

export const Expanding = {
  description: 'Flat grid of key-value items with a "Show more / Show less" toggle. Ideal for transaction detail pages where many fields exist but only the most important should be visible by default. Supports an optional CustomerCard on the right.',
  highlights: [
    'variant="expanding"',
    'expanding-items — flat array of { title, content, info, tooltip, class, button, slot }',
    'expanding-initial-count — items shown before expanding (default 6)',
    'expanding-columns — grid columns (default 3)',
    'is-customer + customer — CustomerCard on the right',
    '#[item.slot]="{ data }" — custom cell content per item'
  ],
  code: ExpandingRaw,
  render: () => ({
    components: { ExpandingExample, Theme },
    template: `<Theme class="p-4"><ExpandingExample /></Theme>`
  })
}
