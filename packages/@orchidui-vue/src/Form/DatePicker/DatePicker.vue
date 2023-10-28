<script setup>
import { Dropdown, Calendar, Input } from "@orchid";
import { computed, ref } from "vue";
import dayjs from "dayjs";

const date = ref();

const props = defineProps({
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
const formattedDate = computed(() => {
  if (props.type === "default") {
    return dayjs(date.value).format(props.dateFormat);
  } else {
    return [
      dayjs(date.value?.[0]).format(props.dateFormat),
      dayjs(date.value?.[1]).format(props.dateFormat),
    ];
  }
});
</script>

<template>
  <Dropdown :offset="10">
    <template #trigger>
      <Input
        v-if="type === 'default'"
        :model-value="formattedDate"
        icon="calendar"
        readonly
      />

      <div v-else class="flex gap-x-4">
        <Input
          label="From"
          :model-value="formattedDate[0]"
          icon="calendar"
          readonly
        />

        <Input
          label="To"
          :model-value="formattedDate[1]"
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
