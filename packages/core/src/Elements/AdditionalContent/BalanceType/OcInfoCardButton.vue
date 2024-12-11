<script setup>
import { Skeleton, Chip, Button } from '@/orchidui-core'

defineProps({
  isActive: Boolean,
  isLoading: Boolean,
  title: String,
  content: String,
  isDropdown: Boolean,
  chipOptions: Object,
  dropdownOptions: Object,
  countryIso: String
})
</script>

<template>
  <div
    class="cursor-pointer rounded group font-medium justify-center border gap-y-2 md:w-fit w-full flex flex-col hover:shadow-normal"
    :class="[
      isActive && !isLoading ? 'border-b-[3px] border-oc-primary' : 'border-oc-accent-1-100',
      !isLoading ? 'px-5 py-4 min-h-[62px] max-h-[76px]' : 'p-3'
    ]"
  >
    <div v-if="isLoading" class="min-w-[138px] flex flex-col gap-y-3">
      <Skeleton class="h-[14px] w-[80%] rounded-sm" />
      <Skeleton class="h-[20px] w-full rounded-sm" />
    </div>

    <template v-else>
      <div class="flex gap-x-4 items-center">
        <div class="flex flex-col gap-y-2">
          <div class="flex items-center gap-x-2">
            <span class="text-oc-text-400 text-sm">{{ title }}</span>
            <Chip v-if="chipOptions" v-bind="chipOptions" />
          </div>
          <span
            class="flex gap-x-4 items-center text-xl group-hover:text-oc-text"
            :class="isActive ? 'text-oc-text' : 'text-oc-text-400'"
          >
            <div
              v-if="countryIso"
              class="flex justify-center items-center w-[38px] h-[38px] shrink-0 rounded-full bg-oc-gray-100"
            >
              <Icon class="!rounded-[1px]" :name="`flags/${countryIso.toUpperCase()}`" />
            </div>
            {{ content }}
          </span>
        </div>

        <Button v-if="isDropdown" v-bind="dropdownOptions" />
      </div>
    </template>
  </div>
</template>
