<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Button, Theme } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <Theme class="h-[260px]">
    <Dropdown v-model="isOpen" placement="bottom-end">
      <Button label="Actions" variant="secondary" />

      <template #menu>
        <div class="flex flex-col p-2">
          <DropdownItem text="Edit" icon="pencil" @click="isOpen = false" />
          <DropdownItem text="Duplicate" icon="copy" @click="isOpen = false" />
          <DropdownItem text="Archive" icon="archive" @click="isOpen = false" />
        </div>
        <div class="p-2 border-t border-oc-gray-100">
          <DropdownItem text="Delete" icon="bin" variant="destructive" @click="isOpen = false" />
        </div>
      </template>
    </Dropdown>
  </Theme>
</template>
