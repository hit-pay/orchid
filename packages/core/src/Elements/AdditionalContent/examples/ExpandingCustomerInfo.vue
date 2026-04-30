<script setup>
import { AdditionalContent } from '@/orchidui-core'

const customer = {
  created_at: '2023-11-20T00:00:00Z',
  phone_number_country_code: '65',
  phone_number: '8373 3739',
  email: 'alex@arcticmonkey.io',
  address_line: '123 Main Street, Pennsylvania, PA 12345, USA',
  remark: 'VIP customer — priority support'
}

const formatDate = (date) => (date ? new Date(date).toLocaleDateString('en-GB') : '—')

const fullPhoneNumber = customer.phone_number_country_code
  ? `+${customer.phone_number_country_code} ${customer.phone_number}`
  : customer.phone_number || '-'

const items = [
  { title: 'CREATED AT', content: formatDate(customer.created_at) },
  { title: 'PHONE NUMBER', content: fullPhoneNumber },
  { title: 'EMAIL', content: customer.email || '-' },
  { title: 'ADDRESS', content: customer.address_line || '-', colSpan: 2 },
  ...(customer.remark ? [{ title: 'REMARKS', content: customer.remark }] : [])
]
</script>

<template>
  <AdditionalContent
    variant="expanding"
    :expanding-items="items"
    :expanding-columns="3"
    :expanding-initial-count="6"
  />
</template>
