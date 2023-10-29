<script setup>
import { Dropdown, Calendar, Input } from "@orchid";
import { computed, ref } from "vue";
import dayjs from "dayjs";



const emit  = defineEmits(["update:modelValue","update:from","update:to"]) 
const props = defineProps({
  from : {
    type: [String, Date, Number],
  },
  to : {
    type: [String, Date, Number],
  },
  modelValue: {
    type: [String, Date, Number],
  },
  type: {
    type: String,
    default: "default",
    validator: (val) => ["default", "range"].includes(val),
  },
  disabledDate: {
    type: Function,
    default: () => false,
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

let defaultValue = props.modelValue 
if(props.type === 'range' && props.from && props.to){
  defaultValue = [props.from, props.to]
}
const date = ref(defaultValue);

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

const updateCalendar = (close) => {
  if(props.type === 'range'){
    emit("update:from", formattedDate.value[0])
    emit("update:to", formattedDate.value[1])
  }else{
    emit("update:modelValue", formattedDate.value)
  }
  close()
}
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
        @update:model-value="updateCalendar(close)"
      />
    </template>
  </Dropdown>
</template>
