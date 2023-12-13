<script setup>
import { Icon } from "@/orchidui";
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  paymentMethods: {
    type: Array,
    default: () => [
      "apple_pay",
      "atome",
      "grab_pay",
      "instapay",
      "jcb",
      "kakao_pay",
      "master_card",
      "pay_now",
      "visa",
      "wechat",
      "wechat-1",
    ],
  },
});

const paymentMethodsIcons = computed(() => {
  const icons = {
    apple_pay: "applepay",
    atome: "atome",
    grab_pay: "grabpay",
    instapay: "instapay",
    jcb: "jcb",
    kakao_pay: "kakaopay",
    master_card: "mastercard",
    pay_now: "paynow",
    visa: "visa",
    wechat: "wechat",
    "wechat-1": "wechat-1",
  };
  return props.paymentMethods.map((method) => icons[method]);
});
defineEmits(["edit", "delete"]);
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-4 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center gap-x-5">
      <div class="flex-1 font-medium">{{ title }}</div>
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
      <img
        v-for="icon in paymentMethodsIcons"
        :key="icon"
        :src="`./icons/orchidui/payment-method/${icon}.png`"
        :alt="icon"
      />
    </div>
  </div>
</template>
