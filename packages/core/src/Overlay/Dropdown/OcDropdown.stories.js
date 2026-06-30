import { Dropdown, DropdownItem, Button, Theme } from '@/orchidui-core'
import { ref } from 'vue'
import BasicExample from './examples/Basic.vue'
import BasicRaw from './examples/Basic.vue?raw'
import IconTriggerExample from './examples/IconTrigger.vue'
import IconTriggerRaw from './examples/IconTrigger.vue?raw'
import DropdownItemVariantsExample from './examples/DropdownItemVariants.vue'
import DropdownItemVariantsRaw from './examples/DropdownItemVariants.vue?raw'
import CustomMenuContentExample from './examples/CustomMenuContent.vue'
import CustomMenuContentRaw from './examples/CustomMenuContent.vue?raw'
import PlacementsExample from './examples/Placements.vue'
import PlacementsRaw from './examples/Placements.vue?raw'
import AttachToBodyExample from './examples/AttachToBody.vue'
import AttachToBodyRaw from './examples/AttachToBody.vue?raw'

export default {
  component: Dropdown,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Floating menu panel attached to a trigger. Pair with DropdownItem for standard menu rows.',
  keywords: ['dropdown', 'menu', 'popper', 'context menu', 'actions'],
  use_for: [
    'context menu',
    'row actions menu',
    'options dropdown',
    'action menu trigger'
  ],
  understand_with: ['DropdownItem', 'Button', 'Icon']
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right', 'left']
    },
    distance: { control: 'number' },
    skidding: { control: 'number' },
    isDisabled: { control: 'boolean' },
    isAttachToBody: { control: 'boolean' },
    preventClickOutside: { control: 'boolean' },
    menuClasses: { control: 'text' },
    showDestructiveAction: {
      control: 'boolean',
      description: 'Show a destructive DropdownItem in a separate footer section'
    }
  },
  args: {
    placement: 'bottom-start',
    distance: 4,
    skidding: 0,
    isDisabled: false,
    isAttachToBody: false,
    preventClickOutside: false,
    menuClasses: '',
    showDestructiveAction: true
  },
  render: (args) => ({
    components: { Dropdown, DropdownItem, Button, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme class="p-6 h-[320px]">
        <Dropdown v-model="isOpen" v-bind="args">
          <Button label="Open menu" variant="secondary" :is-disabled="args.isDisabled" />

          <template #menu>
            <div class="flex flex-col p-2">
              <DropdownItem text="Edit" icon="pencil" @click="isOpen = false" />
              <DropdownItem text="Duplicate" icon="copy" @click="isOpen = false" />
              <DropdownItem text="Archive" icon="archive" @click="isOpen = false" />
            </div>
            <div v-if="args.showDestructiveAction" class="p-2 border-t border-oc-gray-100">
              <DropdownItem text="Delete" icon="bin" variant="destructive" @click="isOpen = false" />
            </div>
          </template>
        </Dropdown>

        <p class="mt-4 text-xs text-oc-text-400 font-mono">
          placement → {{ args.placement }}
        </p>
      </Theme>
    `
  })
}

export const Basic = {
  description: 'Standard action menu with grouped DropdownItems. Destructive actions go in a separate section.',
  highlights: [
    'v-model — controls open/close',
    '#menu slot — menu content',
    'placement="bottom-end" — aligns menu to the trigger edge',
    'DropdownItem with variant="destructive" — red text'
  ],
  code: BasicRaw,
  render: () => ({
    components: { BasicExample },
    template: `<div class="p-6"><BasicExample /></div>`
  })
}

export const IconTrigger = {
  description: 'Use a three-dot icon as the trigger — common in table action cells.',
  highlights: [
    'Icon component as trigger',
    'cursor-pointer on the trigger',
    'placement="bottom-end" — aligns right in tight layouts'
  ],
  code: IconTriggerRaw,
  render: () => ({
    components: { IconTriggerExample },
    template: `<div class="p-6"><IconTriggerExample /></div>`
  })
}

export const DropdownItemVariants = {
  description: 'DropdownItem variants — icon, subText, badges (NEW, BETA, TRY IT), and destructive.',
  highlights: [
    'subText — description below the label',
    'isBeta / isNew / isTryIt — badge labels',
    'variant="destructive" — red text'
  ],
  code: DropdownItemVariantsRaw,
  render: () => ({
    components: { DropdownItemVariantsExample },
    template: `<div class="p-6"><DropdownItemVariantsExample /></div>`
  })
}

export const CustomMenuContent = {
  description: 'The #menu slot accepts any content — not just DropdownItems. Use for custom panels like user profile menus.',
  highlights: [
    '#menu slot — any HTML/component',
    'placement="bottom-end" — keeps wide panels aligned to the trigger'
  ],
  code: CustomMenuContentRaw,
  render: () => ({
    components: { CustomMenuContentExample },
    template: `<div class="p-6"><CustomMenuContentExample /></div>`
  })
}

export const Placements = {
  description: 'All supported placement values with placement-aware enter/leave animation. Each trigger opens its own menu so you can compare positioning and motion direction.',
  highlights: [
    'placement — bottom-start, bottom-end, top-start, top-end, right, left',
    'Each placement uses a different transform-origin and slide direction',
    'distance / skidding — fine-tune offset from the trigger'
  ],
  code: PlacementsRaw,
  render: () => ({
    components: { PlacementsExample },
    template: `<div class="p-6"><PlacementsExample /></div>`
  })
}

export const AttachToBody = {
  description: 'Teleport the menu to document.body when the trigger sits inside overflow:hidden containers such as modals or scrollable panels.',
  highlights: [
    'isAttachToBody — renders menu outside the parent overflow context',
    'Required inside modals with overflow:hidden',
    'Works with all placement values'
  ],
  code: AttachToBodyRaw,
  render: () => ({
    components: { AttachToBodyExample },
    template: `<div class="p-6"><AttachToBodyExample /></div>`
  })
}
