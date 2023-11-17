<script setup lang="ts">
import { Icon } from "@/orchidui";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  menu: {
    type: Array,
    default: () => [],
  },
});
const selected = ref(props.menu[0].value);
defineEmits(["titleClick"]);
</script>

<template>
  <div class="py-7 flex flex-col gap-y-3 px-4">
    <div
      v-if="title"
      class="py-4 gap-x-3 cursor-pointer flex font-medium items-center"
      @click="$emit('titleClick')"
    >
      <Icon name="chevron-down" class="rotate-90" width="20" height="20" />
      {{ title }}
    </div>
    <div class="flex flex-col gap-y-2">
      <div
        v-for="(item, i) in menu"
        :key="i"
        class="py-3 rounded cursor-pointer font-medium hover:bg-oc-accent-2-50-tr px-5"
        :class="
          selected === item.value ? 'bg-oc-accent-2-50-tr text-oc-accent-1' : ''
        "
        @click="selected = item.value"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
