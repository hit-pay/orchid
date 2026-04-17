import { Dropdown, DropdownItem, Button, Icon, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Dropdown,
  tags: ['autodocs'],
  kind: 'composite',
  use_for: [
    'context menu',
    'row actions menu',
    'options dropdown',
    'action menu trigger'
  ],
  understand_with: ['DropdownItem', 'Button', 'Icon'],
  parameters: {
    docs: {
      description: {
        component: `
A floating menu panel attached to a trigger element. Use \`v-model\` to control open/close state. The trigger is the default slot; the menu content goes in \`#menu\`.

Pair with \`DropdownItem\` for standard menu items, or use any custom content in the \`#menu\` slot.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | Boolean | — | v-model — open/closed state |
| \`placement\` | String | \`'bottom-start'\` | Popper.js placement: \`bottom-start\`, \`bottom-end\`, \`top-start\`, \`right\`, etc. |
| \`distance\` | Number | \`4\` | Vertical offset between trigger and menu (px) |
| \`skidding\` | Number | \`0\` | Horizontal offset between trigger and menu (px) |
| \`isDisabled\` | Boolean | \`false\` | Disable — clicks on trigger do nothing |
| \`menuClasses\` | String | — | Extra CSS class on the menu panel container |
| \`maxMenuHeight\` | Number | — | Max height of menu panel (px) — auto-calculated if not set |
| \`preventClickOutside\` | Boolean | \`false\` | Prevent closing when clicking outside |
| \`isAttachToBody\` | Boolean | \`false\` | Teleport menu to body (use inside modals) |
| \`popperStyle\` | Object | — | Inline styles on the popper element |
| \`popperClass\` | String\\|Array\\|Object | — | CSS class on the popper wrapper |
| \`popperOptions\` | Object | \`{}\` | Extra Popper.js options |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`boolean\` | Open/close state changed |
| \`scroll\` | \`Event\` | Menu panel scrolled |

---

## Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`default\` | — | Trigger element — clicking this opens/closes the menu |
| \`#menu\` | \`{ isPopoverOpen }\` | Menu content |

---

## DropdownItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`text\` | String | — | Primary label |
| \`subText\` | String | — | Secondary description below the label |
| \`icon\` | String | — | Icon name on the left |
| \`iconClasses\` | String | — | Extra class on the icon |
| \`iconProps\` | Object | — | Extra attrs forwarded to Icon |
| \`variant\` | String | \`'default'\` | \`'default'\` or \`'destructive'\` (red text) |
| \`isBeta\` | Boolean | \`false\` | Show "BETA" badge |
| \`isNew\` | Boolean | \`false\` | Show "NEW" badge |
| \`isTryIt\` | Boolean | \`false\` | Show "TRY IT" badge |
      `.trim()
      }
    }
  }
}

export const Playground = {
  argTypes: {
    placement:   { control: 'select', options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right', 'left'] },
    distance:    { control: 'number' },
    isDisabled:  { control: 'boolean' },
    menuClasses: { control: 'text' }
  },
  args: {
    placement: 'bottom-start',
    distance: 4,
    isDisabled: false,
    menuClasses: ''
  },
  render: (args) => ({
    components: { Dropdown, DropdownItem, Button, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme class="p-6 h-[300px]">
        <Dropdown v-model="isOpen" v-bind="args">
          <Button label="Open menu" variant="secondary" />
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
    `
  })
}

export const Basic = {
  description: 'Standard action menu with grouped DropdownItems. Destructive actions go in a separate section.',
  highlights: ['v-model — controls open/close', '#menu slot — menu content', 'DropdownItem with variant="destructive" — red text'],
  code: `<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Button } from '@orchidui/core'

const isOpen = ref(false)

const onEdit    = () => { /* ... */ isOpen.value = false }
const onDelete  = () => { /* ... */ isOpen.value = false }
</script>

<template>
  <Dropdown v-model="isOpen" placement="bottom-end">
    <Button label="Actions" variant="secondary" />

    <template #menu>
      <div class="flex flex-col p-2">
        <DropdownItem text="Edit"      icon="pencil"  @click="onEdit" />
        <DropdownItem text="Duplicate" icon="copy" />
        <DropdownItem text="Archive"   icon="archive" />
      </div>
      <div class="p-2 border-t border-oc-gray-100">
        <DropdownItem text="Delete" icon="bin" variant="destructive" @click="onDelete" />
      </div>
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Dropdown, DropdownItem, Button, Theme },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <Theme class="p-6 h-[260px]">
        <Dropdown v-model="isOpen" placement="bottom-end">
          <Button label="Actions" variant="secondary" />
          <template #menu>
            <div class="flex flex-col p-2">
              <DropdownItem text="Edit"      icon="pencil" />
              <DropdownItem text="Duplicate" icon="copy" />
              <DropdownItem text="Archive"   icon="archive" />
            </div>
            <div class="p-2 border-t border-oc-gray-100">
              <DropdownItem text="Delete" icon="bin" variant="destructive" />
            </div>
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const IconTrigger = {
  description: 'Use a three-dot icon as the trigger — common in table action cells.',
  highlights: ['Icon component as trigger', 'cursor-pointer on the trigger', 'placement="bottom-end" — aligns right'],
  code: `<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownItem, Icon } from '@orchidui/core'

const isOpen = ref(false)
</script>

<template>
  <Dropdown v-model="isOpen" placement="bottom-end">
    <Icon name="dots-vertical" class="cursor-pointer text-oc-text-400" />

    <template #menu>
      <div class="flex flex-col p-2">
        <DropdownItem text="View details" icon="eye" />
        <DropdownItem text="Edit"         icon="pencil" />
        <DropdownItem text="Delete"       icon="bin" variant="destructive" />
      </div>
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Dropdown, DropdownItem, Icon, Theme },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <Theme class="p-6 h-[220px] flex justify-center">
        <Dropdown v-model="isOpen" placement="bottom-end">
          <Icon name="dots-vertical" class="cursor-pointer text-oc-text-400 w-6 h-6" />
          <template #menu>
            <div class="flex flex-col p-2">
              <DropdownItem text="View details" icon="eye" />
              <DropdownItem text="Edit"         icon="pencil" />
              <DropdownItem text="Delete"       icon="bin" variant="destructive" />
            </div>
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const DropdownItemVariants = {
  description: 'DropdownItem variants — icon, subText, badges (NEW, BETA, TRY IT), and destructive.',
  highlights: ['subText — description below the label', 'isBeta / isNew / isTryIt — badge labels', 'variant="destructive" — red text'],
  render: () => ({
    components: { Dropdown, DropdownItem, Button, Theme },
    setup() {
      const isOpen = ref(true)
      return { isOpen }
    },
    template: `
      <Theme class="p-6 h-[400px]">
        <Dropdown v-model="isOpen">
          <Button label="Menu" variant="secondary" />
          <template #menu>
            <div class="flex flex-col p-2 min-w-[220px]">
              <DropdownItem text="Standard item"  icon="check" />
              <DropdownItem text="With sub text"  icon="info-circle" sub-text="More details here" />
              <DropdownItem text="New feature"    icon="star" is-new />
              <DropdownItem text="Beta feature"   icon="zap" is-beta />
              <DropdownItem text="Try it"         icon="play" is-try-it />
            </div>
            <div class="p-2 border-t border-oc-gray-100">
              <DropdownItem text="Destructive action" icon="bin" variant="destructive" />
            </div>
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const CustomMenuContent = {
  description: 'The #menu slot accepts any content — not just DropdownItems. Use for custom panels like user profile menus.',
  highlights: ['#menu slot — any HTML/component', 'isAttachToBody — required inside modals with overflow:hidden'],
  render: () => ({
    components: { Dropdown, Button, Icon, Theme },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <Theme class="p-6 h-[280px]">
        <Dropdown v-model="isOpen" placement="bottom-end">
          <Button label="Account" variant="secondary" left-icon="user" />
          <template #menu>
            <div class="min-w-[220px]">
              <div class="p-4 border-b border-oc-gray-100">
                <p class="font-medium text-sm">Alice Smith</p>
                <p class="text-xs text-oc-text-400">alice@example.com</p>
              </div>
              <div class="p-2 flex flex-col">
                <div class="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-oc-accent-1-50 text-sm">
                  <Icon name="settings" class="w-5 h-5 text-oc-text-400" />
                  <span>Settings</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-oc-accent-1-50 text-sm text-oc-error">
                  <Icon name="logout" class="w-5 h-5" />
                  <span>Sign out</span>
                </div>
              </div>
            </div>
          </template>
        </Dropdown>
      </Theme>
    `
  })
}
