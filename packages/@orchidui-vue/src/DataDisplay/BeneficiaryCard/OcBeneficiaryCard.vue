<script setup>
import { Avatar, ListDetail, Icon } from '@/orchidui';

defineProps({
  variant: {
    type: String,
    default: 'small',
    validator: (val) => ['small', 'big'].includes(val),
  },

  beneficiary: {
    type: Object,
    required: true,
  },

  closable: Boolean,
});

const emit = defineEmits(['removeBeneficiary']);
</script>

<template>
  <div class="rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light px-4 py-5 relative">
    <Icon
      v-if="closable"
      class="absolute -right-1.5 -top-1.5 border-1 bg-white border-white overflow-hidden rounded-full text-gray-500 cursor-pointer transition-all duration-300 hover:text-oc-error"
      name="filled-x-circle"
      @click="emit('removeBeneficiary')"
    />

    <div class="flex flex-col items-center justify-center gap-y-3">
      <!--  Main  -->
      <div class="w-full flex gap-x-3 items-center">
        <Avatar class="shrink-0 uppercase" :size="32">
          {{ beneficiary.name?.[0] }}
        </Avatar>
        <div class="flex flex-col font-medium">
          <div class="flex items-center gap-2">
            <span>{{ beneficiary.name }}</span>
            <span class="rounded-md py-1 px-3 text-sm text-oc-accent-1-500 bg-oc-accent-1-50">{{
              beneficiary.currency
            }}</span>
          </div>

          <span class="text-sm text-oc-text-400">
            {{ beneficiary.bank_name }} / {{ beneficiary.bank_account_number }}
          </span>
        </div>
      </div>

      <!--  Detail  -->
      <div v-if="variant === 'big'" class="flex flex-col gap-y-4 pt-4 w-full">
        <ListDetail label="Phone" :content="`+${beneficiary.phone_number}`" />
        <ListDetail label="Email" :content="beneficiary.email" />
      </div>
    </div>
  </div>
</template>
