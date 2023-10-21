<script setup>
import Input from "../Input/OcInput.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import { computed, ref } from "vue";

const props = defineProps({
  placeholder: String,
  hint: String,
  label: String,
  errorMessage: String,
  isInlineLabel: Boolean,
  isDisabled: Boolean,
  modelValue: String,
  links: {
    type: Array,
    default: () => [],
  },
});
defineEmits({
  "update:modelValue": [],
});
const selectedLink = ref(props.links?.[0]?.value || "");
const selectedLinkProps = computed(() =>
  props.links.find((link) => link.value === selectedLink.value),
);
</script>

<template>
  <Input
    :placeholder="placeholder"
    :label="label"
    :error-message="errorMessage"
    :is-inline-label="isInlineLabel"
    :disabled="isDisabled"
    :hint="hint"
    :pre-fill="selectedLinkProps.preFill"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #trailing>
      <Dropdown :offset="10">
        <template #trigger="{ isOpen }">
          <div class="flex text-oc-text-400 items-center gap-x-2">
            <Icon width="20" height="20" :name="selectedLinkProps.icon" />
            <Icon
              width="16"
              height="16"
              class="transition duration-300"
              name="chevron-down"
              :class="isOpen ? '-rotate-180' : ''"
            />
          </div>
        </template>

        <template #default="{ close }">
          <div class="flex flex-col p-2">
            <div
              v-for="link in links"
              :key="link.value"
              class="flex rounded-sm items-center px-3 py-2 gap-x-3 cursor-pointer text-oc-text-400 hover:bg-gray-50"
              @click="
                selectedLink = link.value;
                close();
              "
            >
              <Icon width="20" height="20" :name="link.icon" />
              {{ link.label }}
            </div>
          </div>
        </template>
      </Dropdown>
    </template>
  </Input>
</template>
