import { ListItem, DropdownItem, Button, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
ListItem is a versatile row component with five built-in layout types: \`timeLine\`, \`webhook\`, \`payment\`, \`general\`, and \`accordion\`.
The \`type\` prop switches the internal layout and which props/slots are active.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`type\` | String | \`'timeLine'\` | Layout variant: \`timeLine\` · \`webhook\` · \`payment\` · \`general\` · \`accordion\` |
| \`title\` | String | — | Primary text |
| \`description\` | String | — | Secondary text below the title |
| \`descriptionIcon\` | String | — | Icon name shown before the description text |
| \`icon\` | String | — | Icon name inside the dot (timeLine) or icon column |
| \`iconClass\` | String | — | CSS class applied to the icon (e.g. colour override) |
| \`iconText\` | String | — | Badge/amount text shown beside the icon (timeLine) |
| \`date\` | String | — | Date string shown in the row (webhook, general) |
| \`chips\` | Array | \`[]\` | Chip badges: \`[{ label, variant? }]\` |
| \`details\` | Array | \`[]\` | Detail badges: \`[{ label, icon?, country? }]\` |
| \`urls\` | Array | \`[]\` | URL list: \`[{ url, title }]\` (webhook type) |
| \`paymentMethods\` | Array | \`[]\` | Payment method icons: \`[{ method, md }]\` (payment type) |
| \`isActive\` | Boolean | — | Filled dot when true (timeLine type) |
| \`isDraggable\` | Boolean | \`false\` | Show drag handle (accordion type) |
| \`isDisabled\` | Boolean | \`false\` | Disabled state (reduced opacity, no interactions) |
| \`isTransparent\` | Boolean | \`false\` | Remove background and border |
| \`isOpenDefault\` | Boolean | \`false\` | Start expanded (accordion type) |
| \`isDropdownActionsVisible\` | Boolean | — | Show/hide the three-dot menu button (general/webhook) |
| \`modelValue\` | Boolean | — | v-model: controls open/closed state (accordion type) |

---

## Slots

| Slot | Types | Description |
|------|-------|-------------|
| \`#logo\` | payment, general | Custom logo or icon on the left |
| \`#menu\` | general, webhook | Content inside the three-dot dropdown |
| \`#append\` | general | Right-side content (e.g. a Button) when no dropdown |
| \`#content\` | accordion | Expanded body content |

---

## Events

| Event | Description |
|-------|-------------|
| \`update:modelValue\` | Accordion open/close toggled |
        `.trim()
      }
    }
  }
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    type: {
      control: 'select',
      options: ['timeLine', 'webhook', 'payment', 'general', 'accordion']
    },
    isActive:      { control: 'boolean' },
    isDraggable:   { control: 'boolean' },
    isDisabled:    { control: 'boolean' },
    isTransparent: { control: 'boolean' },
    title:         { control: 'text' },
    description:   { control: 'text' },
    iconText:      { control: 'text' },
    date:          { control: 'text' }
  },
  args: {
    type:          'general',
    isActive:      true,
    isDraggable:   false,
    isDisabled:    false,
    isTransparent: false,
    title:         'Standard shipping',
    description:   'Flat rate · 3–5 business days',
    iconText:      'SGD 5.00',
    date:          'Oct 20, 2024'
  },
  render: (args) => ({
    components: { ListItem, DropdownItem, Theme },
    setup() {
      const chips   = [{ label: 'Default' }, { label: 'Express', variant: 'accent-1' }]
      const details = [{ label: 'SGD 5.00', icon: 'dollar-coin' }]
      return { args, chips, details }
    },
    template: `
      <Theme class="p-6">
        <ListItem v-bind="args" :chips="chips" :details="details">
          <template #menu>
            <div class="p-2 border-b border-gray-200">
              <DropdownItem text="Edit" icon="pencil" />
            </div>
            <div class="p-2">
              <DropdownItem text="Delete" icon="bin" variant="destructive" />
            </div>
          </template>
        </ListItem>
      </Theme>
    `
  })
}

// ── TimeLine ──────────────────────────────────────────────────────────────────

export const TimeLine = {
  description: 'Timeline event row. Shows icon, title, amount text, and description. isActive controls the filled/empty dot.',
  highlights: ['type="timeLine"', 'icon — icon name inside the dot', 'iconText — amount or badge text', 'isActive — filled dot when true'],
  code: `<script setup>
import { ListItem } from '@orchidui/core'
</script>

<template>
  <div class="flex flex-col gap-3">
    <ListItem
      type="timeLine"
      title="Sep 1, 2024 at 5:01 PM"
      description="#9a2804fc-74df-4304-a7d7-79d11f9e1db8"
      icon="backward"
      icon-class="text-oc-error"
      icon-text="SGD 130.11"
      :is-active="true"
    />
    <ListItem
      type="timeLine"
      title="Aug 15, 2024 at 10:00 AM"
      description="#abc123"
      icon="check"
      icon-text="SGD 50.00"
      :is-active="false"
    />
  </div>
</template>`,
  render: () => ({
    components: { ListItem },
    template: `
      <div class="p-6 flex flex-col gap-3">
        <ListItem type="timeLine" title="Sep 1, 2024 at 5:01 PM" description="#9a2804fc" icon="backward" icon-class="text-oc-error" icon-text="SGD 130.11" :is-active="true" />
        <ListItem type="timeLine" title="Aug 15, 2024 at 10:00 AM" description="#abc123" icon="check" icon-text="SGD 50.00" :is-active="false" />
      </div>
    `
  })
}

// ── Webhook ───────────────────────────────────────────────────────────────────

export const Webhook = {
  description: 'Webhook endpoint row with title, date, URL list, and a context menu via #menu slot.',
  highlights: ['type="webhook"', 'urls — array of { url, title }', '#menu slot — dropdown menu items'],
  code: `<script setup>
import { ListItem, DropdownItem } from '@orchidui/core'
</script>

<template>
  <ListItem
    type="webhook"
    title="Order Notifications"
    date="Oct 20, 2024"
    :urls="[{ url: 'https://myapp.com/webhooks/orders', title: 'Endpoint' }]"
  >
    <template #menu>
      <div class="p-2 border-b border-gray-200">
        <DropdownItem text="Edit"   icon="pencil" />
        <DropdownItem text="Resend" icon="telegram" />
      </div>
      <div class="p-2">
        <DropdownItem text="Delete" icon="bin" variant="destructive" />
      </div>
    </template>
  </ListItem>
</template>`,
  render: () => ({
    components: { ListItem, DropdownItem },
    template: `
      <div class="p-6">
        <ListItem type="webhook" title="Order Notifications" date="Oct 20, 2024" :urls="[{ url: 'https://myapp.com/webhooks/orders', title: 'Endpoint' }]">
          <template #menu>
            <div class="p-2 border-b border-gray-200">
              <DropdownItem text="Edit" icon="pencil" />
            </div>
            <div class="p-2">
              <DropdownItem text="Delete" icon="bin" variant="destructive" />
            </div>
          </template>
        </ListItem>
      </div>
    `
  })
}

// ── Payment ───────────────────────────────────────────────────────────────────

export const Payment = {
  description: 'Payment method integration row. Uses #logo slot for provider image and paymentMethods for method icons.',
  highlights: ['type="payment"', '#logo slot — provider logo', 'paymentMethods — array of { method, md } icon URLs'],
  code: `<script setup>
import { ListItem } from '@orchidui/core'

const paymentMethods = [
  { method: 'visa',   md: 'https://cdn.example.com/icons/visa.png' },
  { method: 'master', md: 'https://cdn.example.com/icons/mastercard.png' }
]
</script>

<template>
  <ListItem
    type="payment"
    title="Shopify"
    description="Connected payment store"
    :payment-methods="paymentMethods"
  >
    <template #logo>
      <div class="rounded-sm p-2 bg-oc-accent-1-50">
        <img src="https://cdn.example.com/icons/shopify.png" class="w-8 h-8" alt="Shopify" />
      </div>
    </template>
  </ListItem>
</template>`,
  render: () => ({
    components: { ListItem },
    template: `
      <div class="p-6">
        <ListItem type="payment" title="Shopify" description="Connected payment store">
          <template #logo>
            <div class="rounded-sm p-2 bg-oc-accent-1-50 w-12 h-12 flex items-center justify-center text-xs font-bold">S</div>
          </template>
        </ListItem>
      </div>
    `
  })
}

// ── General ───────────────────────────────────────────────────────────────────

export const General = {
  description: 'Versatile row for any list item. Supports chips, detail badges, custom logo, and action menu. Use #append instead of #menu when no dropdown is needed.',
  highlights: ['type="general"', 'chips — [{ label, variant? }]', 'details — [{ label, icon?, country? }]', '#logo slot', '#append slot — right-side action without dropdown', 'is-dropdown-actions-visible — hide three-dot button'],
  code: `<script setup>
import { ListItem, DropdownItem, Button } from '@orchidui/core'

const chips = [
  { label: 'Default' },
  { label: 'Premium', variant: 'accent-1' }
]

const details = [
  { label: 'SGD 28.00', icon: 'dollar-coin' },
  { label: 'Singapore', country: 'sg' }
]
</script>

<template>
  <div class="flex flex-col gap-3">
    <!-- With dropdown menu -->
    <ListItem
      type="general"
      title="Standard shipping"
      description="Flat rate"
      :chips="chips"
      :details="details"
    >
      <template #menu>
        <div class="p-2 border-b border-gray-200">
          <DropdownItem text="Edit" icon="pencil" />
        </div>
        <div class="p-2">
          <DropdownItem text="Delete" icon="bin" variant="destructive" />
        </div>
      </template>
    </ListItem>

    <!-- With custom logo + append button, no dropdown -->
    <ListItem
      type="general"
      title="PayNow"
      :chips="[{ label: 'Primary' }]"
      :is-dropdown-actions-visible="false"
    >
      <template #logo>
        <div class="w-10 h-10 rounded bg-oc-accent-1-50 flex items-center justify-center font-bold text-sm">PN</div>
      </template>
      <template #append>
        <Button label="Disconnect" variant="secondary" size="small" />
      </template>
    </ListItem>

    <!-- Disabled state -->
    <ListItem
      type="general"
      title="Disabled integration"
      description="Cannot be modified"
      is-disabled
      :chips="[{ label: 'Inactive', variant: 'error' }]"
    />
  </div>
</template>`,
  render: () => ({
    components: { ListItem, DropdownItem, Button },
    setup() {
      const chips   = [{ label: 'Default' }, { label: 'Premium', variant: 'accent-1' }]
      const details = [{ label: 'SGD 28.00', icon: 'dollar-coin' }]
      return { chips, details }
    },
    template: `
      <div class="p-6 flex flex-col gap-3">
        <ListItem type="general" title="Standard shipping" description="Flat rate" :chips="chips" :details="details">
          <template #menu>
            <div class="p-2"><DropdownItem text="Edit" icon="pencil" /></div>
            <div class="p-2"><DropdownItem text="Delete" icon="bin" variant="destructive" /></div>
          </template>
        </ListItem>
        <ListItem type="general" title="PayNow" :chips="[{ label: 'Primary' }]" :is-dropdown-actions-visible="false">
          <template #logo>
            <div class="w-10 h-10 rounded bg-oc-accent-1-50 flex items-center justify-center font-bold text-sm">PN</div>
          </template>
          <template #append><Button label="Disconnect" variant="secondary" size="small" /></template>
        </ListItem>
        <ListItem type="general" title="Disabled integration" is-disabled :chips="[{ label: 'Inactive', variant: 'error' }]" />
      </div>
    `
  })
}

// ── Accordion ─────────────────────────────────────────────────────────────────

export const Accordion = {
  description: 'Collapsible row. v-model controls open/closed state. Use #content slot for the expanded body. isDraggable shows a drag handle for reorderable lists.',
  highlights: ['type="accordion"', 'v-model — open/closed boolean', '#content slot — expanded body', 'isDraggable — drag handle', 'isOpenDefault — start expanded'],
  code: `<script setup>
import { ref } from 'vue'
import { ListItem } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <ListItem
    v-model="isOpen"
    type="accordion"
    title="Extra Toppings"
    description="Strawberry, Chocolate, Cheese"
    :chips="[{ label: 'Required' }]"
    is-draggable
  >
    <template #content>
      <div class="p-4 flex flex-col gap-2 text-sm text-oc-text-400">
        <label><input type="checkbox" /> Strawberry (+$1.00)</label>
        <label><input type="checkbox" /> Chocolate (+$1.50)</label>
        <label><input type="checkbox" /> Cheese (+$2.00)</label>
      </div>
    </template>
  </ListItem>
</template>`,
  render: () => ({
    components: { ListItem },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div class="p-6">
        <ListItem v-model="isOpen" type="accordion" title="Extra Toppings" description="Strawberry, Chocolate" :chips="[{ label: 'Required' }]" is-draggable>
          <template #content>
            <div class="p-4 text-sm text-oc-text-400">Accordion content here</div>
          </template>
        </ListItem>
      </div>
    `
  })
}
