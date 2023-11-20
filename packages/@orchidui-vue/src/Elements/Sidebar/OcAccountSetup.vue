<script setup lang="ts">
defineProps({
  isExpanded: Boolean,
  progress: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div
    class="account-setup-bg p-1 flex items-center justify-center mb-5"
    :class="isExpanded ? 'rounded' : 'w-fit rounded-full'"
  >
    <div
      v-if="isExpanded"
      class="p-3 bg-white rounded-[6px] w-full flex flex-col gap-y-5"
    >
      <div class="flex flex-col gap-y-3">
        <div
          class="flex items-center text-[var(--oc-sidebar-menu-active-text)] justify-between"
        >
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
      <div
        class="text-sm font-bold text-[var(--oc-sidebar-menu-active-text)] text-center"
      >
        COMPLETE NOW ->
      </div>
    </div>
    <div v-else class="bg-white rounded-full p-1">
      <div class="pie-wrapper progress style-2">
        <span class="label">{{ progress }}</span>
        <div
          class="pie"
          :style="{
            clip: progress > 50 ? 'rect(auto, auto, auto, auto)' : '',
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
