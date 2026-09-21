<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Icon, Theme } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <Theme class="h-[220px] flex justify-center">
    <Dropdown v-model="isOpen" placement="bottom-end">
      <Icon name="dots-vertical" class="cursor-pointer text-oc-text-400 w-6 h-6" />

      <template #menu>
        <div class="flex flex-col p-2">
          <DropdownItem text="View details" icon="eye" @click="isOpen = false" />
          <DropdownItem text="Edit" icon="pencil" @click="isOpen = false" />
          <DropdownItem text="Delete" icon="bin" variant="destructive" @click="isOpen = false" />
        </div>
      </template>
    </Dropdown>
  </Theme>
</template>
