<template>
  <div
    class="border border-l-4 p-4 pl-7 border-oc-primary-500 rounded gap-7 flex flex-col relative bg-oc-gray-50"
  >
    <div class="flex">
      <div class="text-oc-text-500 font-medium text-lg flex-1">✨ Shortcut</div>
      <div class="absolute top-2 right-4">
        <Dropdown
          v-model="isDropdownOpened"
          :distance="4"
          placement="bottom-end"
        >
          <Button
            icon-class="text-oc-text-400"
            is-transparent
            variant="primary"
            @click="setEdit(false)"
          >
            <span v-if="isEdit" class="">Done</span>
            <Icon
              v-else
              name="dots-vertical"
              class="text-oc-text-400 mx-2"
            ></Icon>
          </Button>

          <template #menu>
            <div class="p-2">
              <DropdownItem
                @click="setEdit(true)"
                text="Edit Mode"
                icon="toggle-left-fill"
                icon-classes="text-oc-gray-300"
                :icon-props="{
                  width: 16,
                  height: 16,
                }"
              ></DropdownItem>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
    <div class="flex gap-5">
      <ShortcutIcon
        icon="link"
        icon-badge="plus"
        variant="dark-blue"
        :is-edit="isEdit"
      >
        <template #tooltip> Create Payment Link </template>
      </ShortcutIcon>
      <ShortcutIcon
        icon="receipt"
        icon-badge="plus"
        variant="purple"
        :is-edit="isEdit"
      />
      <ShortcutIcon
        icon="dollar-paper"
        icon-badge="download"
        variant="green"
        :is-edit="isEdit"
      />
      <ShortcutIcon icon="plus" />
      <ShortcutIcon icon="plus" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, ShortcutIcon, Dropdown, DropdownItem, Icon } from "@/orchidui";
import { ref } from "vue";

defineProps({});

const isDropdownOpened = ref(false);
const isEdit = ref(false);

const setEdit = (value) => {
  isEdit.value = value;
  isDropdownOpened.value = false;
};
</script>
