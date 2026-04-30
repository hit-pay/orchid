<script setup>
import { CustomerCard, Icon, Tooltip, Button } from '@/orchidui-core'
import { ref, computed } from 'vue'

const props = defineProps({
  /** Flat array of item objects to display in the grid. */
  items: { type: Array, default: () => [] },
  /** Number of items visible before "Show more" is clicked. */
  initialCount: { type: Number, default: 6 },
  /** Number of grid columns. */
  columns: { type: Number, default: 3 },
  /** Show a CustomerCard on the right side. */
  isCustomer: { type: Boolean, default: false },
  /** Variant passed to the CustomerCard component. */
  customerCardVariant: { type: String, default: 'big' },
  /** Customer data object passed to the CustomerCard component. */
  customer: { type: Object, default: null },
  /** Enable hover state on the CustomerCard. */
  customerIsHover: { type: Boolean, default: false },
  /** Enable edit mode on the CustomerCard. */
  customerIsEdit: { type: Boolean, default: false }
})

defineEmits({
  /** "Add customer" button clicked inside the CustomerCard. */
  addCustomer: null,
  /** "Edit customer" action triggered. Payload: customer event data. */
  editCustomer: null
})

const isExpanded = ref(false)

const visibleItems = computed(() =>
  isExpanded.value ? props.items : props.items.slice(0, props.initialCount)
)

const hasMore = computed(() => props.items.length > props.initialCount)

const getBorderClasses = (index) => {
  const total = visibleItems.value.length
  const isLastInRow = (index + 1) % props.columns === 0
  const isInLastRow = index >= total - (total % props.columns || props.columns)
  return {
    'border-r': !isLastInRow,
    'border-b': !isInLastRow
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row bg-oc-gray-50 border border-oc-gray-200 rounded">
    <div class="relative flex-1" :class="[`grid grid-cols-${columns}`, hasMore ? 'mb-8 md:mb-0' : '']">
      <div
        v-for="(item, index) in visibleItems"
        :key="index"
        :class="[getBorderClasses(index), { 'cursor-pointer': typeof item.onClick === 'function' }]"
        class="p-4 flex flex-col gap-y-1 group"
        @click="item.onClick?.()"
      >
        <div class="flex items-center gap-x-2">
          <span class="text-oc-text-400">{{ item.title }}</span>
          <Tooltip v-if="item.info" :popper-options="{ strategy: 'fixed' }">
            <Icon name="information" class="text-oc-text-400" width="16" height="16" />
            <template #popper>
              <slot :name="item.tooltipSlot ?? `${item.slot}-tooltip`">
                <div class="py-2 px-3 text-oc-text-400">{{ item.tooltip }}</div>
              </slot>
            </template>
          </Tooltip>
        </div>

        <slot v-if="item.slot && $slots[item.slot]" :name="item.slot" :data="item" />
        <div
          v-else
          class="overflow-hidden text-ellipsis flex items-center"
          :class="item.class"
        >
          <span>{{ item.content }}</span>
          <Button
            v-if="item.button"
            class="ml-auto hidden group-hover:inline-block [&>button]:h-[unset]"
            v-bind="item.button"
          />
        </div>
      </div>

      <div v-if="hasMore" class="absolute -bottom-8 right-0 w-full justify-center flex items-center z-10">
        <div
          class="rounded-b border cursor-pointer border-oc-gray-200 border-t-0 h-[28px] text-oc-primary hover:text-oc-text-400 px-3 py-2 gap-x-2 flex items-center"
          @click="isExpanded = !isExpanded"
        >
          <Icon :name="isExpanded ? 'arrow-up-down-2' : 'arrow-up-down'" width="16" height="16" />
          <span>{{ isExpanded ? 'Show less' : 'Show more' }}</span>
        </div>
      </div>
    </div>

    <CustomerCard
      v-if="isCustomer"
      :variant="customerCardVariant"
      :customer="customer"
      :is-hover="customerIsHover"
      :is-edit="customerIsEdit"
      class="flex bg-oc-accent-1-50 flex-col md:border-l border-t md:border-t-0 border-oc-gray-200 md:max-w-[250px] shrink-0 w-full border-0 bg-transparent"
      @add-customer="$emit('addCustomer')"
      @edit-customer="$emit('editCustomer', $event)"
    >
      <template v-if="$slots['customer-leading']" #leading>
        <slot name="customer-leading" />
      </template>
      <template v-if="$slots['customer-bottom']" #bottom>
        <slot name="customer-bottom" />
      </template>
    </CustomerCard>
  </div>
</template>
