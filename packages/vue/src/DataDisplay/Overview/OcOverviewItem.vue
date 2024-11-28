<script setup>
import { OverviewIcon, Icon, Tooltip, Skeleton } from '@orchidui/vue'

defineProps({
  icon: String,
  variant: String,
  title: String,
  tooltip: String,
  percentTooltip: String,
  content: String,
  info: Boolean,
  isBig: Boolean,
  isTransparent: Boolean,
  isCard: Boolean,
  isLoading: Boolean,
  percentValue: Number,
  iconWidth: {
    type: String,
    default: '22'
  },
  iconHeight: {
    type: String,
    default: '22'
  }
})
</script>

<template>
  <div
    :class="isTransparent ? 'p-3' : 'border p-4 bg-oc-bg-light border-oc-gray-200 '"
    class="flex flex-col gap-y-4 md:overflow-hidden w-full md:w-auto rounded"
  >
    <div v-if="isLoading" class="flex flex-col gap-y-3 min-w-[132px]">
      <Skeleton class="w-[80%] h-[14px] rounded-sm" />
      <Skeleton class="w-full h-[20px] rounded-sm" />
    </div>

    <template v-else>
      <div class="flex items-center" :class="isBig ? 'gap-x-[.75rem]' : 'gap-x-3'">
        <OverviewIcon
          v-if="icon"
          :icon="icon"
          :variant="variant"
          :height="iconHeight"
          :width="iconWidth"
        />
        <div class="flex flex-col gap-y-px font-medium overflow-hidden">
          <div class="flex whitespace-nowrap items-start gap-x-3 text-xs text-oc-text-300">
            <slot name="title">
              <span class="uppercase">{{ title }}</span>
            </slot>
            <Tooltip
              position="top"
              :popper-options="{ strategy: 'fixed' }"
              popper-class="rounded-sm"
            >
              <Icon
                v-if="info"
                width="16"
                height="16"
                class="text-oc-text-400"
                name="information"
              />
              <template v-if="tooltip" #popper>
                <div
                  class="px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium"
                >
                  {{ tooltip }}
                </div>
              </template>
            </Tooltip>
          </div>

          <div class="flex items-center gap-x-2 overflow-hidden">
            <Icon v-if="isCard" width="35" name="payment-methods/visa" />
            <span :class="isBig ? 'text-xl' : ''" class="truncate">
              <slot name="content">
                <div class="flex items-center gap-x-3 overflow-hidden" v-if="!isNaN(percentValue)">
                  <div class="truncate">{{ content }}</div>

                  <Tooltip
                    position="top"
                    popper-class="rounded-sm"
                    :popper-options="{ strategy: 'fixed' }"
                  >
                    <div class="flex items-center gap-x-1">
                      <Icon
                        :name="percentValue >= 0 ? 'triangle-up' : 'triangle-down'"
                        :class="percentValue >= 0 ? 'text-oc-success-500' : 'text-oc-error-500'"
                        width="10"
                        height="9"
                      />
                      <span class="text-oc-text-400 text-sm font-medium cursor-default">
                        {{ percentValue === 0 ? '-' : `${Math.abs(percentValue)}%` }}
                      </span>
                    </div>
                    <template v-if="percentTooltip" #popper>
                      <div
                        class="px-3 bg-white text-center w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium text-sm"
                      >
                        {{ percentTooltip }}
                      </div>
                    </template>
                  </Tooltip>
                </div>
                <template v-else>{{ content }}</template>
              </slot>
            </span>
          </div>

          <slot v-if="$slots.transfer" name="transfer" />
        </div>
      </div>

      <slot v-if="$slots.warning" name="warning" />
    </template>
  </div>
</template>
