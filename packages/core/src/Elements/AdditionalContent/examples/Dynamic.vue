<script setup>
import { AdditionalContent } from '@orchidui/core'

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

const boxes = [
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
</script>

<template>
  <AdditionalContent
    variant="dynamic"
    :boxes="boxes"
    is-customer
    customer-is-hover
    customer-is-edit
    customer-card-variant="big"
    :customer="customer"
    @add-customer="console.log('add customer')"
    @edit-customer="console.log('edit customer', $event)"
  />
</template>
