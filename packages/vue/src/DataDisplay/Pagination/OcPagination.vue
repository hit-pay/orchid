<script setup>
import { PrevNext, PaginationNumber } from "@/orchidui";
import { computed } from "vue";

const props = defineProps({
  maxPage: {
    type: [String, Number],
    default: 1,
  },
  totalVisible: {
    type: [String, Number],
    default: 1,
    validator: (value) => Number(value),
  },
  modelValue: {
    type: [String, Number],
    default: 1,
  },
  isRounded: Boolean,
  size: String,
});
defineEmits({
  "update:modelValue": [],
});
const pagination = computed(() => {
  let totalVisible = Number(props.totalVisible);
  if (totalVisible <= 3 && props.maxPage > totalVisible) {
    totalVisible = 3;
  }

  // Case when totalVisible is bigger than maxPage
  if (props.maxPage <= totalVisible) {
    return Array.from({ length: props.maxPage }, (_, index) => 1 + index);
  }

  // Case 1: Current page is less than or equal to the totalVisible (pages in left)
  if (props.modelValue <= totalVisible - 1) {
    return [
      ...Array.from(
        { length: Math.min(totalVisible - 1, props.maxPage) },
        (_, index) => index + 1,
      ),
      "...",
      props.maxPage,
    ];
  }

  // Case 2: Current page is greater than or equal to maxPage - totalVisible (pages in right)
  if (props.modelValue >= props.maxPage - (totalVisible - 2)) {
    return [
      1,
      "...",
      ...Array.from(
        { length: totalVisible - 1 },
        (_, index) => props.maxPage - (totalVisible - 2) + index,
      ),
    ];
  }
  // Case 3: Current page is lower than maxPage - totalVisible and greater than totalVisible (pages in middle)
  const leftGap = props.modelValue - Math.floor((totalVisible - 2) / 2);
  return [
    1,
    "...",
    ...Array.from({ length: totalVisible - 2 }, (_, index) => leftGap + index),
    "...",
    props.maxPage,
  ];
});
</script>

<template>
  <div class="w-full items-center flex relative">
    <div class="flex items-center gap-x-6">
      <PrevNext
        :disabled="modelValue <= 1"
        :size="size"
        @click="
          $emit(
            'update:modelValue',
            modelValue > 1 ? modelValue - 1 : modelValue,
          )
        "
      />
      <div class="hidden md:flex items-center gap-x-3">
        <PaginationNumber
          v-for="page in pagination"
          :key="page"
          :size="size"
          :is-rounded="isRounded"
          :active="page === modelValue"
          @click="
            $emit('update:modelValue', page === '...' ? modelValue : page)
          "
        >
          {{ page }}
        </PaginationNumber>
      </div>
      <div class="md:hidden mx-[30px]">
        <PaginationNumber :size="size" :is-rounded="isRounded" :active="true">
          {{ modelValue }}
        </PaginationNumber>
      </div>
      <PrevNext
        is-next
        :size="size"
        :disabled="modelValue >= maxPage"
        @click="
          $emit(
            'update:modelValue',
            modelValue < Number(maxPage) ? modelValue + 1 : Number(maxPage),
          )
        "
      />
    </div>
  </div>
</template>
