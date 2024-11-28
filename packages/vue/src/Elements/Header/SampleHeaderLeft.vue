<script setup>
import { Icon, Dropdown, DropdownItem } from '@orchidui/vue'
import { ref } from 'vue'

defineProps({
  isSubHeader: Boolean
})

const isDropdownOpened = ref(false)
</script>
<template>
  <a
    class="md:w-[102px] flex items-center gap-3 text-oc-accent-1"
    :class="isSubHeader ? 'text-oc-text-100' : ''"
    href="#"
    aria-label="Home Page"
  >
    <Icon class="mt-1" name="hitpay/logo" width="26" height="28" />
    <Icon class="mt-3 hidden md:block" name="hitpay/hitpay" width="74" height="24" />
  </a>
  <Dropdown v-model="isDropdownOpened" :distance="10" class="hidden md:block">
    <div
      class="cursor-pointer flex rounded-full max-w-[150px] overflow-hidden items-center gap-x-2 py-2 px-3"
      :class="isSubHeader ? 'text-oc-text-100' : 'text-oc-text-400 bg-oc-accent-1-50'"
    >
      <Icon width="16" height="16" name="store" class="shrink-0 text-oc-accent-1-400" />
      <span class="overflow-hidden text-ellipsis whitespace-nowrap">Shenzhen Huajin test</span>
    </div>
    <template #menu>
      <div class="flex flex-col">
        <div class="p-2 border-b border-gray-200">
          <DropdownItem text="My Store" />
          <DropdownItem text="My Store" />
        </div>
      </div>
    </template>
  </Dropdown>
</template>
