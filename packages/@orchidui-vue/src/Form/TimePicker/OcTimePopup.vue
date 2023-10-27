<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Date],
    default: () => new Date(),
  },
});

const emit = defineEmits(["update:modelValue"]);

const hour = ref(
  props.modelValue.getHours() <= 12
    ? props.modelValue.getHours()
    : props.modelValue.getHours() - 12,
);
const minutes = ref(props.modelValue.getMinutes());
const period = ref(props.modelValue.getHours() >= 12 ? "PM" : "AM");

const hourList = ref(null);
const minutesList = ref(null);
const periodList = ref(null);
const scrollIntoActiveDate = () => {
  // Function to scroll an element into view
  const scrollToCenter = (list, activeItem) => {
    if (list && activeItem) {
      list.scrollTo({
        top:
          activeItem.offsetTop -
          list.clientHeight / 2 +
          activeItem.clientHeight / 2,
        behavior: "smooth",
      });
    }
  };

  const activeHourElement = hourList.value.querySelector(
    `.w-7:nth-child(${hour.value})`,
  );
  const activeMinuteElement = minutesList.value.querySelector(
    `.w-7:nth-child(${minutes.value})`,
  );
  const activePeriodElement = periodList.value.querySelector(
    `.w-7:nth-child(${period.value === "AM" ? 1 : 2})`,
  );

  scrollToCenter(hourList.value, activeHourElement);
  scrollToCenter(minutesList.value, activeMinuteElement);
  scrollToCenter(periodList.value, activePeriodElement);

  emit(
    "update:modelValue",
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      period.value === "AM"
        ? hour.value === 12
          ? 0
          : hour.value
        : hour.value === 12
        ? 12
        : hour.value + 12,
      minutes.value - 1,
      59,
      0,
    ),
  );
};

onMounted(scrollIntoActiveDate);

const updateHour = (h) => {
  hour.value = h;
  scrollIntoActiveDate();
};
const updateMinute = (minute) => {
  minutes.value = minute;
  scrollIntoActiveDate();
};
const updatePeriod = (p) => {
  period.value = p;
  scrollIntoActiveDate();
};

const triggerBox = ref(null);
const targetHour = ref(null);
const targetMinute = ref(null);
const targetPeriod = ref(null);
const scrollToNearestHour = () => {
  const box = triggerBox.value;
  const hours = targetHour.value;
  hours.forEach((h, i) => {
    if (
      Math.abs(
        h.getBoundingClientRect().top - box.getBoundingClientRect().top,
      ) < 12
    ) {
      hour.value = i + 1;
      scrollIntoActiveDate();
    }
  });
};
const scrollToNearestMinute = () => {
  const box = triggerBox.value;
  const minutesArray = targetMinute.value;
  minutesArray.forEach((m, i) => {
    if (
      Math.abs(
        m.getBoundingClientRect().top - box.getBoundingClientRect().top,
      ) < 12
    ) {
      minutes.value = i + 1;
      scrollIntoActiveDate();
    }
  });
};
const scrollToNearestPeriod = () => {
  const box = triggerBox.value;
  const periods = targetPeriod.value;
  periods.forEach((p, i) => {
    if (
      Math.abs(
        p.getBoundingClientRect().top - box.getBoundingClientRect().top,
      ) < 12
    ) {
      period.value = i === 0 ? "AM" : "PM";
      scrollIntoActiveDate();
    }
  });
};

defineExpose({
  updateActiveTime: scrollIntoActiveDate,
});
</script>

<template>
  <div
    class="overflow-hidden flex items-center relative rounded shadow-normal w-fit px-3"
  >
    <div
      ref="triggerBox"
      class="bg-oc-accent-1-50-tr border-y absolute h-7 left-0 right-0"
    />

    <div
      ref="hourList"
      class="w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar"
      @scrollend="scrollToNearestHour"
    >
      <ul
        class="before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]"
      >
        <li
          v-for="i in 12"
          :key="i"
          ref="targetHour"
          class="w-7 cursor-pointer aspect-square leading-[24px] text-center"
          :class="hour === i ? 'opacity-100' : 'opacity-50'"
          @click="updateHour(i)"
        >
          {{ i.toString().padStart(2, "0") }}
        </li>
      </ul>
    </div>
    <span>:</span>
    <div
      ref="minutesList"
      class="w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar"
      @scrollend="scrollToNearestMinute"
    >
      <ul
        class="before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]"
      >
        <li
          v-for="i in 60"
          :key="i"
          ref="targetMinute"
          class="w-7 cursor-pointer aspect-square leading-[24px] text-center"
          :class="minutes === i ? 'opacity-100' : 'opacity-50'"
          @click="updateMinute(i)"
        >
          {{ (i - 1).toString().padStart(2, "0") }}
        </li>
      </ul>
    </div>
    <div
      ref="periodList"
      class="w-7 inline-block max-h-[157px] overflow-y-auto hidden-scrollbar"
      @scrollend="scrollToNearestPeriod"
    >
      <ul
        class="before:block after:block before:w-full before:h-[67px] after:w-full after:h-[67px]"
      >
        <li
          v-for="i in 2"
          :key="i"
          ref="targetPeriod"
          class="w-7 aspect-square cursor-pointer leading-[24px] text-center"
          :class="
            period === (i === 1 ? 'AM' : 'PM') ? 'opacity-100' : 'opacity-50'
          "
          @click="updatePeriod(i === 1 ? 'AM' : 'PM')"
        >
          {{ i === 1 ? "AM" : "PM" }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hidden-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
