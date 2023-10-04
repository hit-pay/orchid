<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { nextTick, ref, defineProps, defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() => import("../Icon/OCIcon.vue"));

const upcomingAccordion = ref();
const changeAccordionHeight = async (open) => {
  await nextTick();
  if (upcomingAccordion.value) {
    upcomingAccordion.value.style.maxHeight = open
      ? upcomingAccordion.value.scrollHeight + "px"
      : "0";
  }
};
defineProps({
  header: {
    type: String,
    default: "Additional Information",
  },
  body: {
    type: String,
    default: "Accordion content",
  },
});
</script>

<template>
  <div class="overflow-hidden">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="bg-oc-primary-50 py-2 text-sm border relative z-10 justify-between px-3 gap-x-2 flex items-center w-full text-oc-text"
        :class="
          open
            ? 'rounded-t-lg border-oc-grey-200'
            : 'rounded-lg border-transparent'
        "
        @click="changeAccordionHeight(!open)"
      >
        <slot name="header">{{ header }}</slot>
        <Icon
          name="chevron-down"
          class="text-oc-text-400 transition-all duration-300"
          :class="open && '-rotate-180'"
        />
      </DisclosureButton>

      <div
        ref="upcomingAccordion"
        class="overflow-hidden transition-all max-h-0 duration-300"
      >
        <DisclosurePanel
          static
          class="text-oc-text text-sm p-3 rounded-b-lg relative z-0 border-x border-b"
          :class="open ? 'border-oc-grey-200' : ' border-transparent'"
        >
          <slot name="body">{{ body }}</slot>
        </DisclosurePanel>
      </div>
    </Disclosure>
  </div>
</template>
