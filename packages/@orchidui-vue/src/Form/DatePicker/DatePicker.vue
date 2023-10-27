<script setup>
import { Dropdown, Calendar, Input } from "@orchid";
import { ref } from "vue";
import dayjs from "dayjs";

const date = ref();

defineProps({
  type: {
    type: String,
    default: "default",
    validator: (val) => ["default", "range"].includes(val),
  },
  disabledDate: {
    type: Function,
    default: (timestamp) => false,
  },
  minDate: {
    type: [String, Date, Number],
    default: null,
  },
  maxDate: {
    type: [String, Date, Number],
    default: null,
  },
  dateFormat: {
    type: String,
    default: "DD/MM/YYYY",
  },
});
</script>

<template>
  <Dropdown :offset="10">
    <template #trigger>
      <Input
        v-if="type === 'default'"
        :model-value="dayjs(date).format(dateFormat)"
        icon="calendar"
        readonly
      />

      <div v-else class="flex gap-x-4">
        <Input
          label="From"
          :model-value="dayjs(date?.[0]).format(dateFormat)"
          icon="calendar"
          readonly
        />

        <Input
          label="To"
          :model-value="dayjs(date?.[1]).format(dateFormat)"
          icon="calendar"
          readonly
        />
      </div>
    </template>

    <template #default="{ close }">
      <Calendar
        v-model="date"
        :disabled-date="disabledDate"
        :max-date="maxDate"
        :min-date="minDate"
        position="inline"
        :type="type"
        @update:model-value="close()"
      />
    </template>
  </Dropdown>
</template>
