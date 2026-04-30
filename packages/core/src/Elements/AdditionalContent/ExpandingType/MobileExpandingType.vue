<script setup>
import { Button, CustomerCard, Icon, Tooltip } from '@/orchidui-core'
import { ref, computed } from 'vue'

const props = defineProps({
  /** Flat array of item objects to display. */
  items: { type: Array, default: () => [] },
  /** Number of items visible in the preview grid. */
  initialCount: { type: Number, default: 6 },
  /** Number of grid columns in the preview. */
  columns: { type: Number, default: 3 },
  /** Show a CustomerCard at the bottom of the details panel. */
  isCustomer: { type: Boolean, default: false },
  /** Variant passed to the CustomerCard component. */
  customerCardVariant: { type: String, default: 'big' },
  /** Customer data object passed to the CustomerCard component. */
  customer: { type: Object, default: null }
})

defineEmits({
  /** "Add customer" button clicked inside the CustomerCard. */
  addCustomer: []
})

const isDetailsOpen = ref(false)

const previewItems = computed(() => props.items.slice(0, props.columns))

const getBorderClasses = (index) => {
  const cols = props.columns
  const total = previewItems.value.length
  const isLastInRow = (index + 1) % cols === 0
  const isInLastRow = index >= total - (total % cols || cols)
  return {
    'border-r border-oc-gray-200': !isLastInRow,
    'border-b border-oc-gray-200': !isInLastRow
  }
}

const getEffectiveColSpan = (item, index) => {
  if (item.colSpan) return item.colSpan
  if (index !== previewItems.value.length - 1) return null
  const cols = props.columns
  const totalGridCols = previewItems.value.reduce((sum, it) => sum + (it.colSpan || 1), 0)
  const remainder = totalGridCols % cols
  if (remainder === 0) return null
  const posInRow = (totalGridCols - (item.colSpan || 1)) % cols
  const remaining = cols - posInRow
  return remaining > 1 ? remaining : null
}
</script>

<template>
  <div>
    <div class="flex flex-col bg-oc-gray-50 border border-oc-gray-200 rounded overflow-hidden">
      <div :class="`grid grid-cols-${columns}`">
        <div
          v-for="(item, i) in previewItems"
          :key="i"
          class="flex flex-col gap-y-1 p-3"
          :class="[getBorderClasses(i), { 'col-span-2': getEffectiveColSpan(item, i) === 2, 'col-span-3': getEffectiveColSpan(item, i) === 3 }]"
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
          <span v-else class="font-medium truncate" :class="item.class">{{ item.content }}</span>
        </div>
      </div>

      <div class="border-t border-oc-gray-200 flex justify-center">
        <Button
          class="px-3"
          label="See details ->"
          size="small"
          is-transparent
          @click="isDetailsOpen = true"
        />
      </div>
    </div>

    <Transition name="slow-fade">
      <div
        v-if="isDetailsOpen"
        class="fixed z-[1005] top-0 left-0 w-screen flex justify-end h-screen bg-black/[.45]"
        @click="isDetailsOpen = false"
      />
    </Transition>

    <Transition name="slide-from-right">
      <div
        v-if="isDetailsOpen"
        class="max-w-[280px] fixed z-[1006] top-0 right-0 transition-all duration-500 flex flex-col w-full bg-white h-screen overflow-y-auto"
      >
        <div class="p-5 flex items-center justify-between border-b border-oc-gray-200">
          <span class="font-medium">Details</span>
          <Button
            size="small"
            left-icon="x"
            label="Close"
            is-transparent
            class="px-3"
            variant="secondary"
            @click="isDetailsOpen = false"
          />
        </div>

        <div class="px-5 py-4 flex-1 flex flex-col gap-y-4">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="flex flex-col gap-y-1"
          >
            <div class="flex items-center gap-x-2">
              <span class="text-sm text-oc-text-400">{{ item.title }}</span>
              <Tooltip v-if="item.info" :popper-options="{ strategy: 'fixed' }">
                <Icon name="information" class="text-oc-text-400" width="14" height="14" />
                <template #popper>
                  <slot :name="item.tooltipSlot ?? `${item.slot}-tooltip`">
                    <div class="py-2 px-3 text-oc-text-400">{{ item.tooltip }}</div>
                  </slot>
                </template>
              </Tooltip>
            </div>
            <slot v-if="item.slot && $slots[item.slot]" :name="item.slot" :data="item" />
            <span v-else class="font-medium" :class="item.class">{{ item.content }}</span>
          </div>

          <CustomerCard
            v-if="isCustomer"
            :variant="customerCardVariant"
            :customer="customer"
            class="mt-2"
            @add-customer="$emit('addCustomer')"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.slide-from-right-enter-active,
.slide-from-right-leave-active,
.slow-fade-enter-active,
.slow-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slow-fade-enter-from { opacity: 0; }
.slow-fade-enter-to   { opacity: 1; }
.slow-fade-leave-from { opacity: 1; }
.slow-fade-leave-to   { opacity: 0; }

.slide-from-right-enter-from { transform: translateX(100%); }
.slide-from-right-enter-to   { transform: translateX(0); }
.slide-from-right-leave-from { transform: translateX(0); }
.slide-from-right-leave-to   { transform: translateX(100%); }
</style>
