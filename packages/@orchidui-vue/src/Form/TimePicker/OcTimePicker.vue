<script setup>
import { Input, Dropdown } from "@orchid";
import { defineAsyncComponent, ref } from "vue";
import dayjs from "dayjs";

const TimePopup = defineAsyncComponent(() =>
  import("@orchid/Form/TimePicker/OcTimePopup.vue"),
);
const time = ref();
const popup = ref();
defineProps({
  label: String,
  hint: String,
  placeholder: String,
  errorMessage: String,
});
const updateActiveTime = () =>
  setTimeout(() => popup.value.updateActiveTime(), 300);
</script>

<template>
  <Dropdown menu-classes="min-w-fit" :offset="10" @toggle="updateActiveTime()">
    <template #trigger>
      <Input
        icon="time"
        :error-message="errorMessage"
        :label="label"
        :hint="hint"
        :placeholder="placeholder"
        :model-value="dayjs(time).format('hh:mm A')"
        readonly
      />
    </template>

    <TimePopup ref="popup" v-model="time" />
  </Dropdown>
</template>
