import { Theme, Toggle, DropdownItem, DraggableList, Draggable, Icon } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DraggableList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Two components for drag-and-drop reordering:

- **\`Draggable\`** — low-level wrapper around \`vue-draggable-next\`. Provides the drag handle class and \`update:modelValue\` when order changes. Use this to build custom drag-and-drop UIs.
- **\`DraggableList\`** — higher-level opinionated list with built-in drag handles, icons, action dropdowns, toggles, nested children, and link display.

---

## DraggableList Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | Array | — | v-model — array of item objects |
| \`iconKey\` | String | \`'icon'\` | Object key for icon name |
| \`childrenKey\` | String | \`'children'\` | Object key for nested children array |
| \`linkKey\` | String | \`'link'\` | Object key for link URL |
| \`isLink\` | Boolean | \`false\` | Show link URL below title |
| \`isChildren\` | Boolean | \`false\` | Render as nested child list |
| \`unmovable\` | Boolean | \`false\` | Disable drag for all items |
| \`enableStatusVariant\` | Boolean | \`false\` | Gray out items where \`active === false\` |
| \`classes\` | String | \`''\` | Extra Tailwind classes per item card |
| \`titleWidth\` | String | — | Tailwind width class for the title container |

---

## DraggableList Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`(newList, element)\` | Item reordered |
| \`click:element\` | \`item\` | Item clicked |
| \`detectMove\` | drag event | Drag-over event |

---

## DraggableList Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`#title\` | \`{ item }\` | Custom title content |
| \`#action\` | \`{ item }\` | Right-side action area (replaces default three-dot dropdown) |
| \`#action-item\` | \`{ item, index }\` | Items inside the default three-dot dropdown |
| \`#before-action\` | \`{ item }\` | Content before the action area |
| \`#content\` | \`{ item, index }\` | Expanded content below the title row |

---

## Draggable Props (low-level)

| Prop | Type | Description |
|------|------|-------------|
| \`modelValue\` | Array | v-model — list of items |

## Draggable Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`default\` | \`{ list }\` | Custom item template — add class \`drag-el\` to the drag handle element |
        `.trim()
      }
    }
  }
}

export const Basic = {
  description: 'Simple reorderable list with DraggableList. Each item shows a drag handle on hover, an optional icon, and a three-dot action menu.',
  highlights: ['v-model — updated when items are reordered', '#action-item slot — menu items in the three-dot dropdown', '#action slot — replaces the three-dot dropdown with custom content'],
  code: `<script setup>
import { ref } from 'vue'
import { DraggableList, DropdownItem } from '@orchidui/core'

const items = ref([
  { id: '1', icon: 'home',     title: 'Home page' },
  { id: '2', icon: 'shopping', title: 'Products' },
  { id: '3', icon: 'tag',      title: 'Pricing' },
  { id: '4', icon: 'mail',     title: 'Contact' }
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
        { id: '4', icon: 'settings',title: 'Settings' }
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
  description: 'Replace the three-dot dropdown with a toggle switch using the #action slot.',
  highlights: ['#action slot — replaces the default dots menu', 'Toggle in the action slot — common for enable/disable per row'],
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
  <DraggableList v-model="items" enable-status-variant>
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
        <DraggableList v-model="items" enable-status-variant>
          <template #action="{ item }">
            <Toggle v-model="item.active" size="small" />
          </template>
        </DraggableList>
      </Theme>
    `
  })
}

export const CustomDraggable = {
  description: 'Low-level Draggable component for fully custom drag-and-drop UIs. Add class `drag-el` to the element that acts as the drag handle.',
  highlights: ['Draggable — low-level wrapper', 'drag-el class — marks the drag handle element', 'v-slot="{ list }" — reactive reordered list'],
  code: `<script setup>
import { ref } from 'vue'
import { Draggable, Icon } from '@orchidui/core'

const items = ref([
  { id: 1, name: 'Task A', priority: 'High' },
  { id: 2, name: 'Task B', priority: 'Medium' },
  { id: 3, name: 'Task C', priority: 'Low' }
])
</script>

<template>
  <Draggable v-model="items" v-slot="{ list }">
    <div
      v-for="item in list"
      :key="item.id"
      class="flex items-center gap-3 p-3 mb-2 rounded border border-oc-gray-200 bg-white"
    >
      <!-- drag handle — add drag-el class -->
      <Icon name="draggable" class="drag-el text-oc-text-300 cursor-grab" />
      <span class="flex-1">{{ item.name }}</span>
      <span class="text-sm text-oc-text-400">{{ item.priority }}</span>
    </div>
  </Draggable>
</template>`,
  render: () => ({
    components: { Theme, Draggable, Icon },
    setup() {
      const items = ref([
        { id: 1, name: 'Task A', priority: 'High' },
        { id: 2, name: 'Task B', priority: 'Medium' },
        { id: 3, name: 'Task C', priority: 'Low' }
      ])
      return { items }
    },
    template: `
      <Theme class="p-6 w-[400px]">
        <Draggable v-model="items" v-slot="{ list }">
          <div
            v-for="item in list"
            :key="item.id"
            class="flex items-center gap-3 p-3 mb-2 rounded border border-oc-gray-200 bg-white"
          >
            <Icon name="draggable" class="drag-el text-oc-text-300 cursor-grab w-4 h-4" />
            <span class="flex-1 text-sm">{{ item.name }}</span>
            <span class="text-sm text-oc-text-400">{{ item.priority }}</span>
          </div>
        </Draggable>
      </Theme>
    `
  })
}

export const Default = {
  args: {
    classes: 'hover:shadow bg-oc-bg-light hover:bg-oc-accent-1-50'
  },
  render: (args) => ({
    components: {
      Theme,
      DraggableList,
      Toggle,
      DropdownItem
    },
    setup() {
      const model = ref([
        {
          id: '123',
          icon: 'banner',
          title: '123 Label ',
          isToggle: true,
          isDisable: true,
          active: true
        },
        {
          id: '234',
          title: '234 Label ',
          beforeAction: true,
          link: 'https://orchidui.vercel.app'
        },
        {
          id: '456',
          icon: 'top-banner',
          title: '456 Label ',
          isToggle: true,
          children: [
            {
              id: '123',
              icon: 'banner',
              title: '123 Label ',
              active: true
            },
            {
              id: '234',
              icon: 'banner',
              title: '234 Label '
            }
          ]
        }
      ])
      return { args, model }
    },
    template: `
      <Theme>
        <div class="w-full min-h-[200px]">
          <DraggableList v-model="model" is-link :classes="args.classes">
            <template #title="{item}">
              <div class="flex w-full">
                <div class="flex justify-between w-full">
                  <div class="flex flex-col">
                    <span class="mb-2">{{ item.title }}</span>
                    <span> {{ item.link }} </span>
                  </div>
                  <div class="flex items-center">
                    <span>{{ item.id }} </span>
                  </div>
                </div>
              </div>
            </template>
            <template #action-item="{item}">
              <DropdownItem text="Menu" icon="pencil" />
              <DropdownItem text="Menu" icon="pencil" />
            </template>
            <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
            <template #content="{item}">
              <div v-if="item.children" class="flex w-full my-5">
                <DraggableList class="w-full" v-model="item.children" is-children is-link>
                  <template #action-item="{item}">
                    <DropdownItem text="Menu" icon="pencil" />
                    <DropdownItem text="Menu" icon="pencil" />
                  </template>
                  <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                </DraggableList>
              </div>
            </template>
          </DraggableList>
        </div>
      </Theme>
    `
  })
}
