<script setup>
import { ref } from 'vue';
import { Button, Dropdown, DropdownItem } from "@/orchidui";
const emit = defineEmits(["save", "cancel", "addition-click", "dropdown-action"]);
defineProps({
  primaryProps: {
    type: Object,
  },
  secondaryProps: {
    type: Object,
  },
  dropdownOptions: {
    type: Array,
    default: undefined
  },
});

const isDropdownOpen = ref(false);

const onDropdownItemClick = (action) => {
  emit('dropdown-action', action)
  isDropdownOpen.value = false
}
</script>
<template>
  <div class="flex items-center gap-x-7 ml-auto">
    <slot>
      <slot name="before" />
      <div class="flex gap-x-3">
        <Button
          class="min-w-[100px]"
          variant="secondary"
          label="Cancel"
          v-bind="secondaryProps"
          @click="$emit('cancel')"
        />
        <Dropdown v-if="dropdownOptions?.length" v-model="isDropdownOpen" placement="bottom-end">
          <Button
            class="min-w-[100px]"
            label="Save"
            v-bind="primaryProps"
            is-additional-area
            additional-area-icon="chevron-down"
            @click="$emit('save')"
            @addition-click="isDropdownOpen = true"
          />
          <template #menu>
            <div class="flex flex-col">
              <div class="p-2 border-b border-gray-200">
                <DropdownItem
                  v-for="option, index in dropdownOptions"
                  :key="`option-${index}`"
                  :text="option.label"
                  :icon="option.icon ?? null"
                  @click="onDropdownItemClick(option.action)"
                />
              </div>
            </div>
          </template>

        </Dropdown>
        <Button
          v-else
          class="min-w-[100px]"
          label="Save"
          v-bind="primaryProps"
          @click="$emit('save')"
        />
      </div>
      <slot name="after" />
    </slot>
  </div>
</template>
