import { ListItem, DropdownItem, Button } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: ListItem,
  tags: ['autodocs']
}

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

export const General = {
  description: 'Versatile row for any list item. Supports chips, detail badges, custom logo, and action menu.',
  highlights: ['type="general"', 'chips — array of { label, variant }', 'details — array of { label, icon?, country? }', '#logo slot — custom logo/icon', '#append slot — right-side button'],
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

    <!-- With custom logo and append button (no dropdown) -->
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
          </template>
        </ListItem>
        <ListItem type="general" title="PayNow" :chips="[{ label: 'Primary' }]" :is-dropdown-actions-visible="false">
          <template #logo>
            <div class="w-10 h-10 rounded bg-oc-accent-1-50 flex items-center justify-center font-bold text-sm">PN</div>
          </template>
          <template #append><Button label="Connect" size="small" /></template>
        </ListItem>
      </div>
    `
  })
}

export const Accordion = {
  description: 'Collapsible row. v-model controls open/closed state. Use #content slot for the expanded body.',
  highlights: ['type="accordion"', 'v-model — open/closed boolean', '#content slot — expanded body content', 'isDraggable — shows drag handle'],
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
