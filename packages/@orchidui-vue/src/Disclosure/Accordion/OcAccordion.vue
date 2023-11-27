<script setup>
import { nextTick, ref, watch } from "vue";
import { Icon } from "@/orchidui";

const upcomingAccordion = ref();

const props = defineProps({
  header: {
    type: String,
    default: "",
  },
  headerStyle: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  bodyStyle: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "chevron-down",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  isAnimated: {
    type: Boolean,
    default: true,
  },
  isExpandable: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
defineEmits({
  "update:isExpandable": [],
});

const changeAccordionHeight = async (open) => {
  if (props.isDisabled) return;
  await nextTick();
  if (upcomingAccordion.value) {
    upcomingAccordion.value.style.maxHeight = open
      ? upcomingAccordion.value.scrollHeight + "px"
      : "0";
  }
};
watch(() => props.isExpandable, changeAccordionHeight);
</script>

<template>
  <div class="overflow-hidden" :class="isDisabled && 'opacity-60'">
    <div>
      <div
        class="border-oc-accent-1-50 py-3 text-sm border relative z-10 justify-between px-4 gap-x-3 flex hover:border-oc-gray-200 items-center w-full text-oc-text"
        :class="[
          isExpandable
            ? 'rounded-t border-oc-gray-200'
            : 'rounded border-transparent',
          headerStyle,
        ]"
        @click="
          !props.isDisabled
            ? $emit('update:isExpandable', !props.isExpandable)
            : null
        "
      >
        <slot name="header">{{ header }}</slot>
        <Icon
          v-if="showIcon"
          :name="icon"
          class="text-oc-text-400 w-4 h-4 shrink-0"
          :class="[
            isExpandable && '-rotate-180',
            isAnimated && 'transition-all duration-300',
          ]"
        />
      </div>

      <div
        ref="upcomingAccordion"
        class="overflow-hidden max-h-0"
        :class="isAnimated && 'transition-all duration-300'"
      >
        <div
          class="text-oc-text text-sm p-4 rounded-b relative z-0 border-x border-b"
          :class="[
            isExpandable ? 'border-oc-gray-200' : ' border-transparent',
            bodyStyle,
          ]"
        >
          <slot name="body">{{ body }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
