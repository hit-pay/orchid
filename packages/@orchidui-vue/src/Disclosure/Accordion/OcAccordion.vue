<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { defineAsyncComponent, nextTick, ref, watch } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);

const upcomingAccordion = ref();

const props = defineProps({
  header: {
    type: String,
    default: "",
  },
  body: {
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
    <Disclosure ref="disclosureRef">
      <DisclosureButton
        ref="disclosureButtonRef"
        class="bg-oc-accent-3-50 py-3 text-sm border relative z-10 justify-between px-4 gap-x-3 flex hover:border-oc-grey-200 items-center w-full text-oc-text"
        :class="
          isExpandable
            ? 'rounded-t border-oc-grey-200'
            : 'rounded border-transparent'
        "
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
      </DisclosureButton>

      <div
        ref="upcomingAccordion"
        class="overflow-hidden max-h-0"
        :class="isAnimated && 'transition-all duration-300'"
      >
        <DisclosurePanel
          static
          class="text-oc-text text-sm p-4 rounded-b relative z-0 border-x border-b"
          :class="isExpandable ? 'border-oc-grey-200' : ' border-transparent'"
        >
          <slot name="body">{{ body }}</slot>
        </DisclosurePanel>
      </div>
    </Disclosure>
  </div>
</template>
