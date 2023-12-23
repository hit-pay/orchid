<script setup>
import { Input, Dropdown, Icon } from "@/orchidui";
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
  type: String,
  isRequired: {
    type: Boolean,
    default: false,
  },
  labelIcon: {
    type: String,
    default: "",
  },
  tooltipText: {
    type: String,
    default: "",
  },
  tooltipOptions: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits({
  "update:modelValue": [],
  "update:type": [],
});
const isDropdownOpened = ref(false);
const selectedLink = ref(props.type ?? props.links?.[0]?.value);
const selectedLinkProps = computed(() =>
  props.links.find((link) => link.value === selectedLink.value),
);

const updateLinkType = (value)=>{
  selectedLink.value = value
  emit('update:type', value)
  isDropdownOpened.value = false;
}
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
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #trailing>
      <Dropdown v-model="isDropdownOpened" :distance="10">
        <div class="flex text-oc-text-400 items-center gap-x-2">
          <Icon width="20" height="20" :name="selectedLinkProps.icon" />
          <Icon
            width="16"
            height="16"
            class="transition duration-300"
            name="chevron-down"
            :class="isDropdownOpened ? '-rotate-180' : ''"
          />
        </div>

        <template #menu>
          <div class="flex flex-col p-2">
            <div
              v-for="link in links"
              :key="link.value"
              class="flex rounded-sm items-center px-3 py-2 gap-x-3 cursor-pointer text-oc-text-400 hover:bg-gray-50"
              @click="updateLinkType(link.value)"
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
