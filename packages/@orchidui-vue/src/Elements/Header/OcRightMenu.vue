<script setup>
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Avatar from "../../MediaAndIcons/Avatar/OcAvatar.vue";
</script>

<template>
  <div class="flex gap-x-7 items-center">
    <slot>
      <div class="flex gap-x-5 text-oc-text-400">
        <Icon class="w-7 h-7" name="chat" />
        <div class="relative">
          <Icon class="w-7 h-7" name="sparkle-2" />
          <Icon
            name="new"
            class="absolute top-0 -right-[1px]"
            width="10"
            height="10"
          />
        </div>
        <Icon class="w-7 h-7" name="question-mark" />
      </div>
      <Avatar :size="32" />
    </slot>
  </div>
</template>
