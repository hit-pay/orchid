<script setup>
import { Input, Dropdown, BaseInput } from "@/orchidui";
import { defineAsyncComponent, ref } from "vue";
import dayjs from "dayjs";

const TimePopup = defineAsyncComponent(() =>
  import("@/orchidui/Form/TimePicker/OcTimePopup.vue"),
);
const time = ref();
const popup = ref();
const isDropdownOpened = ref(false);
defineProps({
  label: String,
  hint: String,
  placeholder: String,
  errorMessage: String,
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
const updateActiveTime = () =>
  setTimeout(() => popup.value.updateActiveTime(), 300);
</script>

<template>
  <Dropdown
    v-model="isDropdownOpened"
    menu-classes="min-w-fit"
    :distance="10"
    @update:model-value="updateActiveTime"
  >
    <Input
      icon="time"
      :error-message="errorMessage"
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :model-value="dayjs(time).format('hh:mm A')"
      :is-required="isRequired"
      :label-icon="labelIcon"
      :tooltip-text="tooltipText"
      :tooltip-options="tooltipOptions"
      readonly
    />

    <template #menu>
      <TimePopup ref="popup" v-model="time" />
    </template>
  </Dropdown>
</template>
