<script setup>
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";

defineProps({
  theme: String,
  badgeText: String,
  badgeIcon: String,
});
</script>

<template>
  <div class="flex items-center gap-x-3">
    <Icon
      width="108"
      height="27"
      name="hitPay"
      :class="theme === 'light' ? 'text-oc-dark-blue' : 'text-white'"
    />

    <div
      class="flex rounded-full max-w-[150px] overflow-hidden items-center gap-x-2 py-2 px-3"
      :class="theme === 'light' ? 'bg-oc-dark-blue-50' : 'bg-transparent'"
    >
      <Icon
        width="16"
        height="16"
        :name="badgeIcon"
        class="shrink-0"
        :class="
          theme === 'light' ? 'text-oc-dark-blue-400' : 'text-oc-text-200'
        "
      />

      <span
        class="overflow-hidden text-ellipsis whitespace-nowrap"
        :class="theme === 'light' ? 'text-oc-text-400' : 'text-oc-text-200'"
      >
        {{ badgeText }}
      </span>
    </div>
  </div>
</template>
