<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Button, Theme } from '@orchidui/core'

const isOpen = ref(true)
</script>

<template>
  <Theme class="h-[400px]">
    <Dropdown v-model="isOpen">
      <Button label="Menu" variant="secondary" />

      <template #menu>
        <div class="flex flex-col p-2 min-w-[220px]">
          <DropdownItem text="Standard item" icon="check" />
          <DropdownItem text="With sub text" icon="info-circle" sub-text="More details here" />
          <DropdownItem text="New feature" icon="star" is-new />
          <DropdownItem text="Beta feature" icon="zap" is-beta />
          <DropdownItem text="Try it" icon="play" is-try-it />
        </div>
        <div class="p-2 border-t border-oc-gray-100">
          <DropdownItem text="Destructive action" icon="bin" variant="destructive" />
        </div>
      </template>
    </Dropdown>
  </Theme>
</template>
