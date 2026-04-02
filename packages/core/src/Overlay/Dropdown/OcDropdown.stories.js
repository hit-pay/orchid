import { Dropdown, DropdownItem, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Dropdown,
  tags: ['autodocs']
}

export const Default = {
  args: {
    distance: 10
  },
  render: (args) => ({
    components: { Dropdown, DropdownItem, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme>
        <div class="w-full h-[200px]">
          <Dropdown v-model="isOpen" v-bind="args">
            <button>Open Dropdown</button>

            <template #menu>
              <div class="flex flex-col">
                <div class="p-2 border-b border-gray-200">
                  <DropdownItem text="Edit" icon="pencil" />
                  <DropdownItem text="Duplicate" icon="copy" />
                  <DropdownItem text="Archive" icon="archive" />
                </div>
                <div class="p-2">
                  <DropdownItem text="Delete" icon="trash" variant="destructive" />
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
      </Theme>
    `
  })
}
