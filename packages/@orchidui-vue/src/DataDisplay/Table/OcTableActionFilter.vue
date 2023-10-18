<script setup>
import { defineAsyncComponent } from "vue";

const Button = defineAsyncComponent(() =>
  import("../../Form/Button/OcButton.vue"),
);
const Input = defineAsyncComponent(() =>
  import("../../Form/Input/OcInput.vue"),
);
const RangeInput = defineAsyncComponent(() =>
  import("../../Form/RangeInput/OcRangeInput.vue"),
);
const Dropdown = defineAsyncComponent(() =>
  import("../../Overlay/Dropdown/OcDropdown.vue"),
);
</script>

<template>
  <Dropdown :offset="9">
    <template #trigger="{ isOpen }">
      <Button :is-active="isOpen" variant="secondary" left-icon="filter" />
    </template>
    <template #default="{ close }">
      <div class="p-5 flex w-[326px] flex-col gap-y-7">
        <!--   Fields   -->
        <div class="flex flex-col gap-y-4">
          <Input
            placeholder="Select statuses"
            model-value="All statuses"
            label="Status"
          />

          <Input icon="calendar" placeholder="Select date" label="Date" />

          <Input
            placeholder="Select statuses"
            model-value="All payment methods"
            label="Payment Method"
          />

          <RangeInput />
        </div>

        <!--  Button groups    -->
        <div class="flex gap-x-5">
          <Button
            class="w-full"
            variant="secondary"
            label="Cancel"
            @click="close"
          />
          <Button class="w-full" is-disabled label="Apply" />
        </div>
      </div>
    </template>
  </Dropdown>
</template>
