/**
 * MCP documentation examples for DraggableList.
 * The main interactive stories live in OcDraggable.stories.js.
 * This file provides `code:` snippets that the build pipeline extracts
 * into DraggableList.examples.json for AI context.
 */
import { DraggableList, Toggle, DropdownItem, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DraggableList,
  tags: ['autodocs']
}

export const Basic = {
  description: 'Reorderable list where each row has a drag handle, an optional icon, and a three-dot action menu. v-model is updated when items are reordered.',
  highlights: ['v-model — updated after each drag', '#action-item slot — items inside the three-dot dropdown', 'item.isDisable — prevents dragging for that row'],
  code: `<script setup>
import { ref } from 'vue'
import { DraggableList, DropdownItem } from '@orchidui/core'

const items = ref([
  { id: '1', icon: 'home',     title: 'Home page' },
  { id: '2', icon: 'tag',      title: 'Products' },
  { id: '3', icon: 'mail',     title: 'Contact' },
  { id: '4', icon: 'settings', title: 'Settings', isDisable: true }
])
</script>

<template>
  <DraggableList v-model="items">
    <template #action-item="{ item }">
      <DropdownItem text="Edit"   icon="pencil" />
      <DropdownItem text="Delete" icon="bin" variant="destructive" />
    </template>
  </DraggableList>
</template>`,
  render: () => ({
    components: { Theme, DraggableList, DropdownItem },
    setup() {
      const items = ref([
        { id: '1', icon: 'home',    title: 'Home page' },
        { id: '2', icon: 'tag',     title: 'Products' },
        { id: '3', icon: 'mail',    title: 'Contact' },
        { id: '4', icon: 'settings',title: 'Settings', isDisable: true }
      ])
      return { items }
    },
    template: `
      <Theme class="p-6 w-[500px]">
        <DraggableList v-model="items">
          <template #action-item="{ item }">
            <DropdownItem text="Edit"   icon="pencil" />
            <DropdownItem text="Delete" icon="bin" variant="destructive" />
          </template>
        </DraggableList>
      </Theme>
    `
  })
}

export const WithToggle = {
  description: 'Replace the three-dot dropdown with a toggle switch using the #action slot. Enable-status-variant grays out inactive rows.',
  highlights: ['#action slot — replaces the default dots menu entirely', 'enableStatusVariant — grays out rows where active === false', 'v-model on item.active — updates state in place'],
  code: `<script setup>
import { ref } from 'vue'
import { DraggableList, Toggle } from '@orchidui/core'

const items = ref([
  { id: '1', title: 'Email notifications', icon: 'mail',  active: true },
  { id: '2', title: 'SMS notifications',   icon: 'phone', active: false },
  { id: '3', title: 'Push notifications',  icon: 'bell',  active: true }
])
</script>

<template>
  <DraggableList v-model="items" :enable-status-variant="true">
    <template #action="{ item }">
      <Toggle v-model="item.active" size="small" />
    </template>
  </DraggableList>
</template>`,
  render: () => ({
    components: { Theme, DraggableList, Toggle },
    setup() {
      const items = ref([
        { id: '1', title: 'Email notifications', icon: 'mail',  active: true },
        { id: '2', title: 'SMS notifications',   icon: 'phone', active: false },
        { id: '3', title: 'Push notifications',  icon: 'bell',  active: true }
      ])
      return { items }
    },
    template: `
      <Theme class="p-6 w-[500px]">
        <DraggableList v-model="items" :enable-status-variant="true">
          <template #action="{ item }">
            <Toggle v-model="item.active" size="small" />
          </template>
        </DraggableList>
      </Theme>
    `
  })
}

export const WithCustomTitle = {
  description: 'Use the #title slot to render a custom multi-line title area with secondary text.',
  highlights: ['#title slot — replaces the default truncated title', '{ item } binding — gives access to the full row data'],
  code: `<script setup>
import { ref } from 'vue'
import { DraggableList, DropdownItem } from '@orchidui/core'

const pages = ref([
  { id: '1', title: 'Home',     url: '/home',     icon: 'home' },
  { id: '2', title: 'Products', url: '/products', icon: 'tag' },
  { id: '3', title: 'Blog',     url: '/blog',     icon: 'file' }
])
</script>

<template>
  <DraggableList v-model="pages">
    <template #title="{ item }">
      <div class="flex flex-col">
        <span class="font-medium">{{ item.title }}</span>
        <span class="text-sm text-oc-text-400">{{ item.url }}</span>
      </div>
    </template>
    <template #action-item="{ item }">
      <DropdownItem text="Edit page" icon="pencil" />
      <DropdownItem text="Remove"    icon="bin" variant="destructive" />
    </template>
  </DraggableList>
</template>`,
  render: () => ({
    components: { Theme, DraggableList, DropdownItem },
    setup() {
      const pages = ref([
        { id: '1', title: 'Home',     url: '/home',     icon: 'home' },
        { id: '2', title: 'Products', url: '/products', icon: 'tag' },
        { id: '3', title: 'Blog',     url: '/blog',     icon: 'file' }
      ])
      return { pages }
    },
    template: `
      <Theme class="p-6 w-[500px]">
        <DraggableList v-model="pages">
          <template #title="{ item }">
            <div class="flex flex-col">
              <span class="font-medium">{{ item.title }}</span>
              <span class="text-sm text-oc-text-400">{{ item.url }}</span>
            </div>
          </template>
          <template #action-item="{ item }">
            <DropdownItem text="Edit page" icon="pencil" />
            <DropdownItem text="Remove"    icon="bin" variant="destructive" />
          </template>
        </DraggableList>
      </Theme>
    `
  })
}

export const Unmovable = {
  description: 'Disable drag-and-drop entirely with unmovable, or per-item with item.isDisable or item.unmovable.',
  highlights: ['unmovable prop — disables drag for all items', 'item.isDisable — disables drag for that row only', 'item.unmovable — same per-item override'],
  code: `<script setup>
import { ref } from 'vue'
import { DraggableList } from '@orchidui/core'

// Per-item: first item locked, others draggable
const items = ref([
  { id: '1', title: 'Default page (locked)', icon: 'lock', unmovable: true },
  { id: '2', title: 'About',    icon: 'info-circle' },
  { id: '3', title: 'Contact',  icon: 'mail' }
])
</script>

<template>
  <DraggableList v-model="items" />
</template>`,
  render: () => ({
    components: { Theme, DraggableList },
    setup() {
      const items = ref([
        { id: '1', title: 'Default page (locked)', icon: 'lock', unmovable: true },
        { id: '2', title: 'About',   icon: 'info-circle' },
        { id: '3', title: 'Contact', icon: 'mail' }
      ])
      return { items }
    },
    template: `
      <Theme class="p-6 w-[500px]">
        <DraggableList v-model="items" />
      </Theme>
    `
  })
}
