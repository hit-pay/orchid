<script setup>
import { Icon, Tooltip } from '@/orchidui-core'

defineProps({
  icon: String,
  title: String,
  tooltip: String,
  percentTooltip: String,
  content: String,
  info: Boolean,
  isLoading: Boolean,
  percentValue: Number,
  tooltipOptions: Object,
  iconProps: Object,
  isFooter: Boolean,
  isTransparent: Boolean
})
</script>

<template>
  <div
    class="flex flex-col md:overflow-hidden w-full md:w-auto rounded border bg-oc-bg-light "
    :class="isTransparent ? 'border-transparent' : 'border-oc-gray-200'"
  >
    <div v-if="isLoading" class="flex flex-col gap-y-3 items-center justify-center h-[90px]">
      <Icon name="loading-2" width="28" height="28" class="text-oc-text-400 motion-safe:animate-spin" />
    </div>

    <template v-else>
      <div class="flex flex-col ">
        <div class="flex items-center gap-x-3 border-b " :class="isTransparent ? 'border-b-transparent px-3 pt-3 pb-0' : 'border-oc-gray-200 pl-4 pr-5 py-3'">
          <Icon
            v-if="icon"
            :name="icon"
            v-bind="iconProps"
          />

          <slot name="title">
            <div class="text-sm flex-1">{{ title }}</div>
          </slot>

          <Tooltip
            position="top"
            :popper-options="{ strategy: 'fixed'  }"
            popper-class="rounded-sm"
            v-bind="tooltipOptions"
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
                class="px-3 bg-white text-center text-xs w-[175px] rounded py-2 text-oc-text-400 whitespace-break-spaces font-medium"
              >
                {{ tooltip }}
              </div>
            </template>
          </Tooltip>
       </div>

        <div class="text-xl font-medium font-reddit-mono" :class="isTransparent ? 'px-3 pt-0 pb-3' : 'px-5 py-4'">
          <div class="flex items-center gap-x-2 overflow-hidden">
            <slot name="content">
              <div class="truncate flex-1">{{ content }}</div>

              <Tooltip
                v-if="percentValue"
                position="top"
                popper-class="rounded-sm"
                :popper-options="{ strategy: 'fixed' }"
              >
                <div class="flex items-center gap-x-1 border rounded-sm px-3 py-2 borrder-oc-gray-200">
                  <Icon
                    :name="percentValue >= 0 ? 'triangle-up' : 'triangle-down'"
                    :class="percentValue >= 0 ? 'text-oc-success-500' : 'text-oc-error-500'"
                    width="10"
                    height="9"
                  />
                  <span class="text-oc-text-400 font-reddit-mono text-sm font-medium cursor-default">
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
            </slot>
          </div>
        </div>
      </div>
    </template>

    <slot v-if="!isLoading && isFooter" name="footer" />
  </div>
</template>
