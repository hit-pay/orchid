<script setup>
import { ref } from 'vue'
import { Dropdown, Button, Icon, Theme } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <Theme class="h-[280px]">
    <Dropdown v-model="isOpen" placement="bottom-end">
      <Button label="Account" variant="secondary" left-icon="user" />

      <template #menu>
        <div class="min-w-[220px]">
          <div class="p-4 border-b border-oc-gray-100">
            <p class="font-medium text-sm">Alice Smith</p>
            <p class="text-xs text-oc-text-400">alice@example.com</p>
          </div>
          <div class="p-2 flex flex-col">
            <div
              class="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-oc-accent-1-50 text-sm"
              @click="isOpen = false"
            >
              <Icon name="settings" class="w-5 h-5 text-oc-text-400" />
              <span>Settings</span>
            </div>
            <div
              class="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-oc-accent-1-50 text-sm text-oc-error"
              @click="isOpen = false"
            >
              <Icon name="logout" class="w-5 h-5" />
              <span>Sign out</span>
            </div>
          </div>
        </div>
      </template>
    </Dropdown>
  </Theme>
</template>
