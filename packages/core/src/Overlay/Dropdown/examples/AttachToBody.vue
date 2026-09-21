<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Button, Theme } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <Theme class="h-[280px]">
    <div class="h-[200px] overflow-hidden rounded-lg border border-oc-gray-200 p-4">
      <p class="mb-4 text-xs text-oc-text-400">
        Parent has <code class="font-mono">overflow: hidden</code>. Use
        <code class="font-mono">is-attach-to-body</code> so the menu is not clipped.
      </p>

      <Dropdown v-model="isOpen" placement="bottom-start" is-attach-to-body>
        <Button label="Open in modal-like container" variant="secondary" />

        <template #menu>
          <div class="flex flex-col p-2 min-w-[200px]">
            <DropdownItem text="Edit" icon="pencil" @click="isOpen = false" />
            <DropdownItem text="Archive" icon="archive" @click="isOpen = false" />
            <DropdownItem text="Delete" icon="bin" variant="destructive" @click="isOpen = false" />
          </div>
        </template>
      </Dropdown>
    </div>
  </Theme>
</template>
