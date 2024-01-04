<script setup>
import { Icon, Tooltip } from "@/orchidui";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  paymentMethods: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["edit", "delete"]);

const isSliced = computed(
  () => props.paymentMethods.length > blocksPerLine.value,
);
const restPaymentMethods = computed(() =>
  props.paymentMethods.slice(blocksPerLine.value, props.paymentMethods.length),
);
const cardContainer = ref();
const blocksPerLine = ref(props.paymentMethods.length);
const calculateBlocksPerLine = () => {
  const containerWidth =
    cardContainer.value.clientWidth -
    105 /* front span */ -
    32 /* padding */ -
    4 * props.paymentMethods.length /* gap */ -
    35; /* tooltip block */
  const blockWidth = 35; /* image width */

  blocksPerLine.value = Math.floor(containerWidth / blockWidth);
};

onMounted(() => {
  calculateBlocksPerLine();
  window.addEventListener("resize", calculateBlocksPerLine);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", calculateBlocksPerLine);
});
</script>

<template>
  <div
    ref="cardContainer"
    class="md:px-5 px-3 md:py-4 py-3 flex flex-col gap-y-4 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center gap-x-5">
      <div class="flex-1 flex items-center gap-x-3 font-medium capitalize">
        <slot name="logo" />
        {{ title }}
      </div>
      <div
        class="border opacity-0 group-hover:opacity-100 border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1"
      >
        <Icon
          name="pencil"
          class="cursor-pointer text-oc-text-400 p-2"
          @click="$emit('edit')"
        />
        <div class="border-r border-gray-200" />
        <Icon
          name="bin"
          class="cursor-pointer text-oc-error p-2"
          @click="$emit('delete')"
        />
      </div>
    </div>

    <div class="flex items-center gap-x-2">
      <span class="text-sm font-medium text-oc-text-300 whitespace-nowrap"
        >Payment methods</span
      >
      <img
        v-for="method in paymentMethods.slice(0, blocksPerLine)"
        :key="method.method"
        width="35"
        height="24"
        :alt="method.method"
        :src="method.svg"
      />
      <Tooltip
        v-if="isSliced"
        position="top-end"
        :popper-options="{ strategy: 'fixed' }"
      >
        <template #default="{ isShow }">
          <div
            class="text-sm w-[35px] h-[24px] flex items-center justify-center border rounded-sm font-medium whitespace-nowrap"
            :class="isShow ? ' bg-white' : 'bg-oc-bg-dark'"
          >
            +
            {{ paymentMethods.length - blocksPerLine }}
          </div>
        </template>

        <template #popper>
          <div class="py-2 px-3 flex gap-x-2 w-full z-10 relative">
            <img
              v-for="method in restPaymentMethods"
              :key="method.method"
              width="35"
              height="24"
              :alt="method.method"
              :src="method.svg"
            />
          </div>
        </template>
      </Tooltip>
    </div>
  </div>
</template>
