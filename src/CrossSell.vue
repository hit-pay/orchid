<script setup>
import { ref } from 'vue'
import { InfoCard, Button } from '@/orchidui-core'

defineProps({
  showItems: {
    type: Array,
    default: () => []
  }
})
defineEmits(['close'])

const items = ref([])

const features = [
  {
    key: 'store',
    img: 'https://dashboard.hit-pay.com/images/features/online_store.png',
    title: 'Online Store',
    description:
      'The HitPay Online Store is the easiest way to create an online shop and start selling online.',
    buttonProps: {
      label: 'Create Your Store',
      onClick: () => {
        window.open(`https://hitpayapp.com/online-store`, '_BLANK')
      }
    }
  },
  {
    key: 'pos',
    img: 'https://dashboard.hit-pay.com/images/features/point_of_sale.png',
    title: 'Point of Sale',
    description:
      'Transform your device into a versatile payment solution that manages your sales and inventory seamlessly.',
    buttonProps: {
      label: 'Get Started',
      onClick: () => {
        window.open(`https://hitpayapp.com/pos-software`, '_BLANK')
      }
    }
  },
  {
    key: 'invoice',
    img: 'https://dashboard.hit-pay.com/images/features/invoice.png',
    title: 'Invoices',
    description:
      'Manage your cashflows and get paid faster with HitPay’s online invoicing generator.',
    buttonProps: {
      label: 'Create Invoice',
      onClick: () => {
        window.open(`https://hitpayapp.com/invoicing`, '_BLANK')
      }
    }
  }
]
items.value = features
</script>

<template>
  <InfoCard class="m-5 cursor-pointer">
    <template #header>
      <div class="flex justify-between items-center">
        <div class="text-lg font-medium">Discover more features on HitPay</div>
      </div>
    </template>

    <div class="flex flex-col gap-4 mt-4">
      <div
        v-for="feature in items"
        :key="feature.title"
        class="border border-oc-gray-200 rounded flex items-center overflow-hidden"
      >
        <img :src="feature.img" alt="Feature Image" class="hidden sm:block h-[170px]" />

        <div class="flex flex-col gap-3 p-6">
          <div class="font-medium">{{ feature.title }}</div>
          <div class="text-oc-text-400 text-sm">{{ feature.description }}</div>
          <div class="flex mt-4">
            <Button v-bind="feature.buttonProps" size="small" />
          </div>
        </div>
      </div>
    </div>
  </InfoCard>
</template>
