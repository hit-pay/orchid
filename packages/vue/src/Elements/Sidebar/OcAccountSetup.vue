<script setup>
import OcIcon from '@orchidui/vue/MediaAndIcons/Icon/OcIcon.vue'
import OcChip from '@orchidui/vue/Feedback/Chip/OcChip.vue'

defineProps({
  isExpanded: Boolean,
  progress: {
    type: Number,
    default: 0
  },
  isPending: Boolean,
  paymentStatus: Object,
  payoutStatus: Object
})
</script>

<template>
  <div
    class="p-1 flex items-center justify-center mb-5"
    :class="[
      isExpanded ? 'rounded' : 'w-fit rounded-full',
      isPending ? 'bg-oc-warning-500' : 'account-setup-bg'
    ]"
  >
    <div v-if="isExpanded" class="p-3 bg-white rounded-[6px] w-full flex flex-col gap-y-5">
      <template v-if="isPending">
        <div class="p-2 flex gap-3">
          <div class="p-3 rounded-full border border-oc-warning-500">
            <OcIcon name="alert" width="20" height="20" class="text-oc-warning-500" />
          </div>

          <div class="text-oc-text-500 text-sm">We’re currently reviewing your account.</div>
        </div>
        <div class="mx-[-8px] mb-[-8px] rounded-b-[6px] border-t border-gray-200 bg-oc-gray-50">
          <div class="py-4 px-5 text-oc-text-400 font-medium">
            <div v-if="paymentStatus" class="flex items-center">
              <span class="flex-1">Payment</span>
              <OcChip v-bind="paymentStatus" />
            </div>
            <div v-if="paymentStatus" class="flex items-center mt-3">
              <span class="flex-1">Payout</span>
              <OcChip v-bind="payoutStatus" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col gap-y-3">
          <div class="flex items-center text-[var(--oc-sidebar-menu-active-text)] justify-between">
            <span class="font-medium">Account setup</span>
            <span class="font-bold">{{ progress }}%</span>
          </div>
          <div class="h-[12px] w-full rounded-full bg-oc-gray-100 shadow">
            <div
              class="h-[12px] rounded-full bg-[var(--oc-sidebar-menu-active-icon-active)]"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
        <div class="text-sm font-bold text-[var(--oc-sidebar-menu-active-text)] text-center">
          COMPLETE NOW ->
        </div>
      </template>
    </div>
    <div v-else class="bg-white rounded-full p-1">
      <div v-if="isPending" class="p-3 rounded-full">
        <oc-icon name="alert" width="20" height="20" class="text-oc-warning-500" />
      </div>
      <div v-else class="pie-wrapper progress style-2">
        <span class="label">{{ progress }}</span>
        <div
          class="pie"
          :style="{
            clip: progress > 50 ? 'rect(auto, auto, auto, auto)' : ''
          }"
        >
          <div
            class="left-side half-circle transition-all duration-500"
            :style="{ transform: `rotate(calc(${progress}*3.6deg))` }"
          />
          <div
            class="right-side half-circle transition-all duration-500"
            :class="progress <= 50 ? 'hidden' : 'rotate-180'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-setup-bg {
  background: linear-gradient(90deg, #ffc83c, #e027fe, #2771fe);
}

$default-size: 40px;

@mixin size($width, $height) {
  height: $height;
  width: $width;
}

.pie-wrapper {
  @include size($default-size, $default-size);
  float: left;
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;

  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, calc($default-size / 2));
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: 5px solid var(--oc-sidebar-menu-active-icon-active);
      border-radius: 50%;
      clip: rect(0, calc($default-size / 2), $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    background: none;
    border-radius: 50%;
    color: var(--oc-sidebar-menu-active-text);
    cursor: default;
    display: block;
    width: 100%;
    font-size: 12px;
    position: absolute;
    text-align: center;
  }
}
</style>
