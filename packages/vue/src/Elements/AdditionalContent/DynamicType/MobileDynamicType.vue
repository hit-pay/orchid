<script setup lang="ts">
import { Button, CustomerCard, Icon, OverviewItem, Tooltip } from '@/orchidui';
import { ref } from 'vue';
import BoxDetails from './OcBoxDetails.vue';

const isDetailsOpen = ref(false)

defineProps({
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  customerCardVariant: { type: String, default: 'big' },
  customer: { type: Object, default: null }
})
defineEmits(['addCustomer'])
</script>

<template>
  <div>
    <BoxDetails class="!flex-nowrap flex-col w-full">
      <div class="flex">
        <OverviewItem
          v-for="(field, i) in boxes[0]?.items.slice(0, 2)"
          :key="i"
          is-transparent
          :title="field.title"
          :content="field.content"
          :class="field.class"
          :is-loading="field.isLoading"
          v-bind="field"
        >
          <template v-if="field.slot && $slots[field.slot]" #content>
            <slot :name="field.slot" :data="field.content" />
          </template>
        </OverviewItem>
        <div v-if="boxes[0]?.showInfo" class="p-2">
          <Tooltip>
            <Icon
              width="16"
              height="16"
              class="!w-[20px] !h-[20px] text-oc-text-300"
              name="information"
            />
            <template #popper>
              <div class="py-2 px-3">{{ boxes[0]?.infoTooltip }}</div>
            </template>
          </Tooltip>
        </div>
      </div>
      <Button
        class="self-start px-3"
        label="See details ->"
        size="small"
        is-transparent
        @click="isDetailsOpen = true"
      />
    </BoxDetails>

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
        class="max-w-[250px] fixed z-[1006] top-0 right-0 transition-all duration-500 flex flex-col gap-y-2 w-full bg-white h-screen overflow-y-auto"
      >
        <div class="p-5 flex items-center justify-between">
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

        <div class="px-5 flex-1 flex flex-col gap-y-5">
          <BoxDetails v-for="(box, i) in boxes" :key="i">
            <OverviewItem
              v-for="(field, j) in box.items"
              :key="`${i}-${j}`"
              is-transparent
              :title="field.title"
              :content="field.content"
              :class="field.class"
              :is-loading="field.isLoading"
              v-bind="field"
            >
              <template v-if="field.slot && $slots[field.slot]" #content>
                <slot :name="field.slot" :data="field.content" />
              </template>
            </OverviewItem>
          </BoxDetails>

          <CustomerCard
            v-if="isCustomer"
            :variant="customerCardVariant"
            :customer="customer"
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

.slow-fade-enter-from {
  opacity: 0;
}

.slow-fade-enter-to {
  opacity: 1;
}

.slow-fade-leave-from {
  opacity: 1;
}

.slow-fade-leave-to {
  opacity: 0;
}

.slide-from-right-enter-from {
  transform: translateX(100%);
}

.slide-from-right-enter-to {
  transform: translateX(0);
}

.slide-from-right-leave-from {
  transform: translateX(0);
}

.slide-from-right-leave-to {
  transform: translateX(100%);
}
</style>
