<script setup>
import { computed } from "vue";

defineEmits({
  changePath: [],
  "update:modelValue": [],
});
const props = defineProps({
  menus: Array,
  modelValue: String,
});

const activeMenu = computed(() =>
  props.menus.find((menu) => menu.value === props.modelValue),
);

</script>
<template>
  <div
      v-for="item in menus"
      :key="item.value"
      class="py-7 font-medium hover:text-oc-accent-3 cursor-pointer"
      :style="{
        borderColor: activeMenu.color,
      }"
      :class="[
        item.value === modelValue
          ? 'text-oc-accent-3 border-b-[3px]'
          : 'text-oc-text-300',
      ]"
      @click="
        $emit('changePath', item.path);
        $emit('update:modelValue', item.value);
      "
    >
      {{ item.label }}
    </div>
</template>
