<script setup>
import { AdditionalContent } from '@/orchidui-core'

const customer = {
  name: 'Alex Turner',
  email: 'alex@arcticmonkey.io',
  phone: '+65 8373 3739',
  address: {
    street: '123 Main Street',
    city: 'Pennsylvania',
    state: 'Pennsylvania',
    postal_code: '12345',
    country: 'USA'
  }
}

const items = [
  { title: 'Purpose', content: 'Premium GYM membership' },
  { title: 'ID', content: '9a2f500c-545d-4db6-84fa-c40d65146f43' },
  { title: 'Reference', content: 'REF-20231120-001' },
  { title: 'Created at', content: '20/11/2023' },
  { title: 'Expired at', content: '20/12/2023' },
  { title: 'Status', content: 'Completed', class: 'text-oc-success' },
  { title: 'Amount', content: 'SGD 150.00' },
  {
    title: 'Channel',
    content: 'Point of sale',
    info: true,
    tooltip: 'The payment channel used for this transaction'
  },
  { title: 'Fee', content: 'SGD 2.50' }
]
</script>

<template>
  <AdditionalContent
    variant="expanding"
    :expanding-items="items"
    :expanding-initial-count="6"
    is-customer
    customer-card-variant="big"
    :customer="customer"
    @add-customer="console.log('add customer')"
  />
</template>
