import { Theme } from '@orchidui/vue'

import { Toggle, DropdownItem } from '@orchidui/vue'
import { DraggableList } from '@/orchidui-core/Draggable.js'

import { ref } from 'vue'

export default {
  component: DraggableList,
  tags: ['autodocs']
}

const args = {
  classes: 'hover:shadow bg-oc-background-light hover:bg-oc-accent-1-50'
}

export const OcDraggableList = {
  args,
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
          isDisable: true
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
              title: '123 Label '
            },
            {
              id: '234',
              icon: 'banner',
              title: '234 Label '
            }
          ]
        },
        {
          id: '272',
          title: '272 Label ',
          children: [
            {
              id: '123',
              icon: 'banner',
              title: '123 Label ',
              isToggle: true,
              isDisable: true
            },
            {
              id: '234',
              title: '234 Label ',
              beforeAction: true
            },
            {
              id: '456',
              icon: 'top-banner',
              title: '456 Label ',
              isToggle: true
            },
            {
              id: '272',
              title: '272 Label ',
              children: [
                {
                  id: '123',
                  icon: 'banner',
                  title: '123 Label '
                },
                {
                  id: '234',
                  icon: 'banner',
                  title: '234 Label '
                }
              ]
            },
            {
              id: '667',
              title: '667 Label '
            },
            {
              id: '781',
              title: '781 Label '
            }
          ]
        },
        {
          id: '667',
          title: '667 Label '
        },
        {
          id: '781',
          title: '781 Label ',
          link: 'https://orchidui.vercel.app'
        }
      ])
      return { args, model }
    },
    template: `
          <Theme>
            <div class="p-4">{{ model}}</div>
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
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                </template>
                <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                <template #content="{item}">
                    <div v-if="item.children" class="flex w-full my-5">
                        <DraggableList class="w-full" v-model="item.children" is-children is-link>
                            <template #action-item="{item}">
                                <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                            </template>
                            <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                            <template #content="{item}">
                              <div v-if="item.children" class="flex w-full my-5">
                                  <DraggableList class="w-full" v-model="item.children" is-children is-link>
                                      <template #action-item="{item}">
                                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                      </template>
                                      <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                                  </DraggableList>
                              </div>
                          </template>
                        </DraggableList>
                    </div>
                </template>
              </DraggableList>
            </div>
          </Theme>
        `
  })
}
