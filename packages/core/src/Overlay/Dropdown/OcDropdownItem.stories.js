/**
 * MCP documentation examples for DropdownItem.
 * DropdownItem is used inside Dropdown's default slot as clickable menu entries.
 * This file provides `code:` snippets extracted into DropdownItem.examples.json.
 */
import { DropdownItem, Dropdown, Theme } from '@/orchidui-core'

export default {
  component: DropdownItem,
  tags: ['autodocs']
}

export const Basic = {
  description: 'A clickable menu item with an optional icon on the left. Place inside a Dropdown default slot.',
  highlights: ['text — the label shown', 'icon — name string for the left icon', 'variant="destructive" — renders in red for delete/remove actions'],
  code: `<template>
  <Dropdown>
    <template #menu-content>
      <DropdownItem text="Edit"   icon="pencil" />
      <DropdownItem text="Duplicate" icon="copy" />
      <DropdownItem text="Delete" icon="bin" variant="destructive" />
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Theme, Dropdown, DropdownItem },
    template: `
      <Theme class="p-6 flex items-start gap-4">
        <Dropdown>
          <template #menu-content>
            <DropdownItem text="Edit"      icon="pencil" />
            <DropdownItem text="Duplicate" icon="copy" />
            <DropdownItem text="Delete"    icon="bin" variant="destructive" />
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const WithSubText = {
  description: 'Add a secondary description line below the item label with subText.',
  highlights: ['subText — second line of text in muted color', 'Useful for showing additional context like file size or last modified date'],
  code: `<template>
  <Dropdown>
    <template #menu-content>
      <DropdownItem
        text="Export as CSV"
        icon="download"
        subText="Download all records as a spreadsheet"
      />
      <DropdownItem
        text="Delete account"
        icon="bin"
        variant="destructive"
        subText="This action cannot be undone"
      />
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Theme, Dropdown, DropdownItem },
    template: `
      <Theme class="p-6 flex items-start gap-4">
        <Dropdown>
          <template #menu-content>
            <DropdownItem
              text="Export as CSV"
              icon="download"
              subText="Download all records as a spreadsheet"
            />
            <DropdownItem
              text="Delete account"
              icon="bin"
              variant="destructive"
              subText="This action cannot be undone"
            />
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const BadgeVariants = {
  description: 'Show a badge label on the right side of an item to highlight new, beta, or try-it features.',
  highlights: ['isNew — shows a green "NEW" badge', 'isBeta — shows a yellow "BETA" badge', 'isTryIt — shows a "TRY IT" badge'],
  code: `<template>
  <Dropdown>
    <template #menu-content>
      <DropdownItem text="AI Writer"    icon="magic"  isNew />
      <DropdownItem text="CSV Import"   icon="upload" isBeta />
      <DropdownItem text="Dark mode"    icon="moon"   isTryIt />
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Theme, Dropdown, DropdownItem },
    template: `
      <Theme class="p-6 flex items-start gap-4">
        <Dropdown>
          <template #menu-content>
            <DropdownItem text="AI Writer"  icon="magic"  :isNew="true" />
            <DropdownItem text="CSV Import" icon="upload" :isBeta="true" />
            <DropdownItem text="Dark mode"  icon="moon"   :isTryIt="true" />
          </template>
        </Dropdown>
      </Theme>
    `
  })
}

export const Variants = {
  description: 'The destructive variant renders the item in red — use it for irreversible actions like delete or remove.',
  highlights: ['variant="default" — standard text color (default)', 'variant="destructive" — red text, signals a dangerous action'],
  code: `<template>
  <Dropdown>
    <template #menu-content>
      <DropdownItem text="Rename"  icon="pencil" variant="default" />
      <DropdownItem text="Archive" icon="folder" variant="default" />
      <DropdownItem text="Delete"  icon="bin"    variant="destructive" />
    </template>
  </Dropdown>
</template>`,
  render: () => ({
    components: { Theme, Dropdown, DropdownItem },
    template: `
      <Theme class="p-6 flex items-start gap-4">
        <Dropdown>
          <template #menu-content>
            <DropdownItem text="Rename"  icon="pencil" variant="default" />
            <DropdownItem text="Archive" icon="folder" variant="default" />
            <DropdownItem text="Delete"  icon="bin"    variant="destructive" />
          </template>
        </Dropdown>
      </Theme>
    `
  })
}
