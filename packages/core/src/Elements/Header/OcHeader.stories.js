import {
  Theme,
  Header,
  SubHeader,
  TabToSelect,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Icon,
  Dropdown,
  DropdownItem,
  Button
} from '@/orchidui-core'

import SampleHeaderLeft from './SampleHeaderLeft.vue'
import SampleHeaderRight from './SampleHeaderRight.vue'

import { ref, computed } from 'vue'

export default {
  component: Header,
  tags: ['autodocs']
}

export const HeaderElement = {
  args: {
    menus: [
      {
        label: 'Payments',
        value: 'payments',
        sidebarClass: 'layout-payment',
        path: 'payments'
      },
      {
        label: 'Point of Sale',
        value: 'point_of_sale',
        sidebarClass: 'layout-pos',
        path: 'point_of_sale'
      },
      {
        label: 'Online Store',
        value: 'online_store',
        sidebarClass: 'layout-online-store',
        path: 'online_store'
      }
    ]
  },
  render: (args) => ({
    components: {
      Theme,
      Icon,
      Header,
      HeaderLeft,
      HeaderCenter,
      HeaderRight,
      SampleHeaderLeft,
      TabToSelect,
      SampleHeaderRight
    },
    setup() {
      const activeMenuValue = ref('online_store')
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label
      })

      return { args, activeMenuValue, activeMenuLabel }
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              <Header class="mb-3">
                <button aria-label="Menu Button" class="p-3 md:hidden">
                  <Icon name="menu" width="24" height="24"/>
                </button>
                <HeaderLeft class="md:w-[260px]">
                  <SampleHeaderLeft/>
                </HeaderLeft>
                <HeaderCenter class="flex-1 md:flex-none ">
                  <TabToSelect v-model="activeMenuValue" :menus="args.menus"/>
                </HeaderCenter>
                <HeaderRight>
                  <SampleHeaderRight/>
                </HeaderRight>
              </Header>
            </div>
          </Theme>
        `
  })
}

export const SubHeaderElement = {
  args: {
    isSaved: true
  },
  render: (args) => ({
    components: {
      Theme,
      SubHeader,
      HeaderLeft,
      HeaderCenter,
      HeaderRight,
      SampleHeaderLeft
    },
    setup() {
      const activeMenuValue = ref('payments')
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label
      })

      return { args, activeMenuValue, activeMenuLabel }
    },
    template: `
          <Theme>
            <SubHeader class="mb-3">
              <HeaderLeft class="hidden md:flex">
                <SampleHeaderLeft is-sub-header/>
              </HeaderLeft>
              <HeaderCenter class="flex-1" :is-saved="args.isSaved">
                <template #after><span class="text-oc-text-100 ml-3">---Slot After</span></template>
              </HeaderCenter>
              <HeaderRight :is-saved="args.isSaved" :primary-props="{label: 'Update'}">
                <template #before><span class="text-oc-text-100 ml-3">Slot Before---</span></template>
              </HeaderRight>
            </SubHeader>
          </Theme>
        `
  })
}

export const SubHeaderDropdownElement = {
  args: {
    isSaved: true,
    primaryProps: {
      label: 'Create'
    },
    dropdownOptions: [
      {
        label: 'Save as Draft',
        icon: 'floppy',
        action: 'save-as-draft'
      }
    ]
  },
  render: (args) => ({
    components: {
      Theme,
      SubHeader,
      HeaderLeft,
      HeaderCenter,
      HeaderRight,
      SampleHeaderLeft,
      Dropdown,
      DropdownItem,
      Button
    },
    setup() {
      const activeMenuValue = ref('payments')
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label
      })

      const isDropdownOpen = ref(false)

      const onDropdownItemClick = (action) => {
        if (!action) return

        console.log('dropdown-action', action)
        isDropdownOpen.value = false
      }

      return {
        args,
        activeMenuValue,
        activeMenuLabel,
        isDropdownOpen,
        onDropdownItemClick
      }
    },
    template: `
          <Theme>
            <SubHeader class="mb-3">
              <HeaderLeft class="hidden md:flex">
                <SampleHeaderLeft is-sub-header/>
              </HeaderLeft>
              <HeaderCenter class="flex-1" :is-saved="args.isSaved" />
              <HeaderRight :is-saved="args.isSaved" :primary-props="args.primaryProps">
                <template #primary-button>
                  <Dropdown v-model="isDropdownOpen" placement="bottom-end">
                    <Button
                      class="min-w-[100px]"
                      label="Save"
                      v-bind="args.primaryProps"
                      is-additional-area
                      additional-area-icon="chevron-down"
                      @click="$emit('save')"
                      @addition-click="isDropdownOpen = true"
                    />
                    <template #menu>
                      <div class="flex flex-col">
                        <div class="p-2 border-b border-gray-200">
                          <DropdownItem
                            v-for="option, index in args.dropdownOptions"
                            :key="index"
                            :text="option.label"
                            :icon="option.icon ?? null"
                            @click="onDropdownItemClick(option.action)"
                          />
                        </div>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </HeaderRight>
            </SubHeader>
          </Theme>
        `
  })
}
