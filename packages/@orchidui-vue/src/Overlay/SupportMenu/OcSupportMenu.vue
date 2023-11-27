<script setup lang="ts">
import { Dropdown, Icon, Button, DropdownItem } from "@/orchidui";
import HitPaySupportIcon from "./HitPaySupportIcon.vue";
import { ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "default",
  },
  title: {
    type: String,
    default: "Have a question?",
  },
  info: {
    type: String,
    default: "We're ready to guide you through anything you need!",
  },
  confirmButtonProps: {
    type: Object,
    default: () => ({}),
  },
  topMenu: {
    type: Array,
    default: () => [],
  },
  bottomMenu: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["update:modelValue"]);

const popperOptions = {
  arrowHidden: true,
  placement: "top-end",
};
const isFirstAppear = ref(true);
const onFirstClose = (isOpen) => {
  if (isOpen) return;
  setTimeout(() => {
    isFirstAppear.value = false;
  }, 300);
};
</script>

<template>
  <div class="fixed bottom-[30px] right-[32px]">
    <Dropdown
      :model-value="modelValue"
      :popper-options="popperOptions"
      :distance="8"
      @update:model-value="
        $emit('update:modelValue', $event);
        onFirstClose($event);
      "
    >
      <div
        class="w-[40px] flex items-center bg-oc-text active:bg-oc-gray-800 justify-center aspect-square rounded-full cursor-pointer"
      >
        <Icon name="question" width="33" height="33" />
      </div>
      <template #menu>
        <div
          v-if="isFirstAppear"
          class="shadow-tooltip rounded p-4 flex flex-col gap-y-3 max-w-[250px]"
        >
          <div class="flex gap-x-3 items-center relative">
            <HitPaySupportIcon />
            <span class="font-medium">{{ title }}</span>
            <div
              class="p-1 absolute -top-2 -right-2 cursor-pointer"
              @click="$emit('update:modelValue', false)"
            >
              <Icon width="14" height="14" class="text-oc-text-400" name="x" />
            </div>
          </div>
          <div class="text-sm text-oc-text-400">
            {{ info }}
          </div>
          <div class="pt-4">
            <Button
              label="Try Quick Assistant"
              size="small"
              v-bind="confirmButtonProps"
              @click="isFirstAppear = false"
            />
          </div>
        </div>
        <div v-else>
          <template v-for="(group, j) in topMenu" :key="j">
            <div class="p-3">
              <span class="uppercase text-oc-text-400 text-xs font-medium">
                {{ group.title }}
              </span>
            </div>

            <DropdownItem
              v-for="(item, i) in group.items"
              :key="i"
              :text="item.text"
              class="text-sm"
              :icon="item.icon"
            />
          </template>

          <div class="w-full border-t border-gray-200" />

          <DropdownItem
            v-for="(item, i) in bottomMenu"
            :key="i"
            :text="item.text"
            class="text-sm"
            :icon="item.icon"
            :pointed="item.pointed"
          />
        </div>
      </template>
    </Dropdown>
  </div>
</template>
