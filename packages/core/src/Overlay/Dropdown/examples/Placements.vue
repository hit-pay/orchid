<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Button, Theme } from '@orchidui/core'

const openByPlacement = ref({})

const placements = [
  { placement: 'top-start', label: 'top-start', position: 'absolute top-6 left-6' },
  { placement: 'top-end', label: 'top-end', position: 'absolute top-6 right-6' },
  { placement: 'bottom-start', label: 'bottom-start', position: 'absolute bottom-6 left-6' },
  { placement: 'bottom-end', label: 'bottom-end', position: 'absolute bottom-6 right-6' },
  { placement: 'left', label: 'left', position: 'absolute top-1/2 left-6 -translate-y-1/2' },
  { placement: 'right', label: 'right', position: 'absolute top-1/2 right-6 -translate-y-1/2' }
]

function isOpen(placement) {
  return openByPlacement.value[placement] ?? false
}

function setOpen(placement, value) {
  openByPlacement.value = { ...openByPlacement.value, [placement]: value }
}
</script>

<template>
  <Theme>
    <div
      class="relative mx-auto h-[420px] w-full max-w-[720px] rounded-lg border border-dashed border-oc-gray-200 bg-oc-bg-2"
    >
      <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-oc-text-400">
        Click each trigger to preview placement animation
      </p>

      <div v-for="item in placements" :key="item.placement" :class="item.position">
        <Dropdown
          :model-value="isOpen(item.placement)"
          :placement="item.placement"
          @update:model-value="setOpen(item.placement, $event)"
        >
          <Button :label="item.label" size="small" variant="secondary" />

          <template #menu>
            <div class="flex flex-col p-2 min-w-[160px]">
              <DropdownItem text="Edit" icon="pencil" @click="setOpen(item.placement, false)" />
              <DropdownItem text="Duplicate" icon="copy" @click="setOpen(item.placement, false)" />
              <DropdownItem
                text="Delete"
                icon="bin"
                variant="destructive"
                @click="setOpen(item.placement, false)"
              />
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </Theme>
</template>
