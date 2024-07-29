<script setup>
import { Avatar, ListDetail, Button, Icon } from '@/orchidui'

defineProps({
  variant: {
    type: String,
    default: 'small',
    validator: (val) => ['small', 'big', 'float'].includes(val)
  },
  customer: Object,
  isHover: {
    type: Boolean,
    default: false
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  isClosable: Boolean,
  isBeneficiary: Boolean
})

const emit = defineEmits(['addCustomer', 'editCustomer', 'closeCustomer'])
</script>

<template>
  <div
    class="rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light flex items-center justify-between gap-4 px-4 py-5 customer-card relative group"
    :class="{ [variant]: true, 'hover:shadow-normal transition': isHover }"
  >
    <div class="flex flex-col items-center justify-center gap-y-3 overflow-hidden">
      <div
        v-if="isEdit"
        class="absolute right-3 top-3 transition"
        :class="{ 'opacity-0 group-hover:opacity-100': isHover }"
      >
        <Button
          right-icon="pencil"
          variant="secondary"
          size="small"
          class="*:!px-[6px]"
          @click="$emit('editCustomer', customer)"
        />
      </div>

      <Icon
        v-if="isClosable"
        class="absolute -right-1.5 -top-1.5 border-1 border-white rounded-full text-gray-500 cursor-pointer transition-all duration-300 hover:text-oc-error"
        name="filled-x-circle"
        @click="emit('closeCustomer')"
      />

      <template v-if="customer">
        <!--  Main  -->
        <div class="w-full flex gap-x-3 items-center">
          <Avatar class="shrink-0 uppercase" :size="32">
            {{ customer?.name?.[0] || 'J' }}
          </Avatar>
          <div class="flex flex-col font-medium overflow-hidden">
            <div class="flex items-center gap-2">
              <span class="truncate">{{ customer?.name || '-' }}</span>
              <span
                v-if="isBeneficiary"
                class="rounded-md py-1 px-3 text-sm text-oc-accent-1-500 bg-oc-accent-1-50"
              >
                {{ customer.currency?.toUpperCase() }}
              </span>
            </div>
            <span v-if="isBeneficiary" class="text-sm text-oc-text-400">
              {{ customer.bank_name }} / {{ customer.bank_account_number }}
            </span>
            <span v-else class="text-sm text-oc-text-400 truncate">
              {{
                customer?.email ||
                '+' + customer?.phone_number_country_code + customer?.phone_number ||
                '-'
              }}
            </span>
          </div>
        </div>

        <!--  Detail  -->
        <div v-if="variant !== 'small'" class="flex flex-col gap-y-4 pt-4 w-full">
          <ListDetail
            v-if="!isBeneficiary"
            label="Phone"
            :content="
              customer?.phone_number_country_code && customer?.phone_number
                ? `+${customer.phone_number_country_code} ${customer.phone_number}`
                : customer?.phone_number
                  ? customer.phone_number
                  : '-'
            "
          />
          <ListDetail v-if="isBeneficiary" label="Email" :content="customer.email ?? '-'" />
          <ListDetail
            v-else
            label="Address"
            :content="
              [
                customer?.address?.street || '',
                customer?.address?.city || '',
                customer?.address?.state || '',
                customer?.address?.postal_code || '',
                customer?.address?.country || ''
              ]
                .join(' ')
                .trim() || '-'
            "
          />
        </div>
      </template>

      <template v-else-if="!isBeneficiary">
        <div class="flex flex-col gap-y-2 w-full items-center">
          <Avatar :size="32">
            <Icon name="user-add" width="16" height="16" />
          </Avatar>
          <div class="flex flex-col font-medium text-center">
            <span>No customer attached</span>
            <span class="text-sm text-oc-text-400"> Add customer detail to this transaction </span>
          </div>
        </div>
        <Button
          variant="secondary"
          size="small"
          class="w-full"
          label="Add customer"
          @click="$emit('addCustomer')"
        />
      </template>

      <div v-if="$slots.bottom" :class="{ 'opacity-0 group-hover:opacity-100': isHover }">
        <slot name="bottom" />
      </div>
    </div>
    <div v-if="$slots.leading">
      <slot name="leading" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer-card {
  &.float {
    box-shadow: var(--oc-shadow-normal);
  }
}
</style>
