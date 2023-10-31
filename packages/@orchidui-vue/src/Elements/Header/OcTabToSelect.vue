<script setup>
import { computed, ref } from "vue";
import { Icon, Dropdown, DropdownItem } from "@orchid";

defineEmits({
  changePath: [],
  "update:modelValue": [],
});
const props = defineProps({
  menus: Array,
  modelValue: String,
});
const isDropdownOpened = ref(false);
const activeMenu = computed(() =>
  props.menus.find((menu) => menu.value === props.modelValue),
);
</script>
<template>
  <div class="gap-x-7 hidden md:flex">
    <div
      v-for="item in menus"
      :key="item.value"
      class="p-7 text-oc-text-500 hover:text-oc-accent-1 cursor-pointer"
      :style="{
        borderColor: activeMenu.color,
      }"
      :class="[item.value === modelValue ? 'font-medium border-b-[3px]' : '']"
      @click="
        $emit('changePath', item.path);
        $emit('update:modelValue', item.value);
      "
    >
      {{ item.label }}
    </div>
  </div>
  <Dropdown v-model="isDropdownOpened" class="flex md:hidden">
    <div class="p-3 font-medium text-oc-accent-1-500 flex items-center gap-2">
      {{ activeMenu.label }}
      <Icon name="chevron-down" width="20" height="20" />
    </div>
    <template #menu>
      <div class="p-2 border-b border-gray-200">
        <DropdownItem
          v-for="item in menus"
          :key="item.value"
          :text="item.label"
          :style="{
            borderColor: activeMenu.color,
          }"
          :class="[
            item.value === modelValue
              ? 'text-oc-accent-1 border-b-[3px]'
              : 'text-oc-text-300',
          ]"
          @click="
            $emit('changePath', item.path);
            $emit('update:modelValue', item.value);
          "
        />
      </div>
    </template>
  </Dropdown>
</template>
