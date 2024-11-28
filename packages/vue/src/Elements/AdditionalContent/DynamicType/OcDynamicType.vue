<script setup>
import { CustomerCard, OverviewItem, Icon, Tooltip } from '@orchidui/vue'
import BoxDetails from './OcBoxDetails.vue'
import MobileDynamicType from './MobileDynamicType.vue'

defineProps({
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  customerCardVariant: { type: String, default: 'big' },
  customer: { type: Object, default: null },
  customerIsHover: { type: Boolean, default: false },
  customerIsEdit: { type: Boolean, default: false }
})
defineEmits(['addCustomer', 'editCustomer'])
</script>

<template>
  <div class="hidden md:flex md:gap-5 gap-3 md:flex-row flex-col">
    <BoxDetails
      v-for="(box, i) in boxes"
      :key="i"
      :class="
        (isCustomer ? '!grid grid-cols-4 grid-rows-2 gap-y-4 w-full !py-4 ' : ' ') + box?.style
      "
    >
      <slot v-if="box.slot && $slots[box.slot]" :name="box.slot" :data="{ ...box, key: i }" />
      <template v-else>
        <OverviewItem
          v-for="(field, j) in box.items"
          :key="`${i}-${j}`"
          is-transparent
          :title="field.title"
          :class="field.class"
          :is-loading="field.isLoading"
          :content="field.content"
          v-bind="field"
        >
          <template v-if="field.slot && $slots[field.slot]" #content>
            <slot :name="field.slot" :data="field.content" />
          </template>
        </OverviewItem>
      </template>
      <div v-if="box.showInfo" class="p-2" :class="box.infoTooltipStyle">
        <Tooltip :popper-options="{ strategy: 'fixed' }">
          <Icon
            width="16"
            height="16"
            class="!w-[20px] !h-[20px] text-oc-text-300"
            name="information"
          />
          <template #popper>
            <slot :name="box.infoTooltipSlot">
              <div class="py-2 px-3">{{ box.infoTooltip }}</div>
            </slot>
          </template>
        </Tooltip>
      </div>
    </BoxDetails>
    <CustomerCard
      v-if="isCustomer"
      :variant="customerCardVariant"
      :customer="customer"
      :is-hover="customerIsHover"
      :is-edit="customerIsEdit"
      class="max-w-[300px]"
      @add-customer="$emit('addCustomer')"
      @edit-customer="$emit('editCustomer', $event)"
    >
      <template v-if="$slots['customer-leading']" #leading>
        <slot name="customer-leading"></slot>
      </template>

      <template v-if="$slots['customer-bottom']" #bottom>
        <slot name="customer-bottom"></slot>
      </template>
    </CustomerCard>
  </div>

  <MobileDynamicType
    class="flex md:hidden"
    :boxes="boxes"
    :is-customer="isCustomer"
    :customer-card-variant="customerCardVariant"
    :customer="customer"
    @add-customer="$emit('addCustomer')"
  />
</template>
