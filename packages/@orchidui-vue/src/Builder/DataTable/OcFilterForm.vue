<script setup>
import { Button, Input, RangeInput, Dropdown } from "@orchid";
</script>

<template>
  <Dropdown :offset="9">
    <template #trigger="{ isOpen }">
      <Button :is-active="isOpen" variant="secondary" left-icon="filter" />
    </template>
    <template #default="{ close }">
      <div class="p-5 flex w-[326px] flex-col gap-y-7">
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
