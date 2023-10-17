import Theme from "../../Theme/OcTheme.vue";
import Header from "./OcHeader.vue";

import HeaderLeft from "./OcHeaderLeft.vue";
import HeaderCenter from "./OcHeaderCenter.vue";
import HeaderRight from "./OcHeaderRight.vue";
import HeaderTabs from "./OcHeaderTabs.vue";

import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Avatar from "../../MediaAndIcons/Avatar/OcAvatar.vue";
import Button from "../../Form/Button/OcButton.vue";


import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";

import Tooltip from "../../Overlay/Tooltip/OcTooltip.vue";


import { ref, computed } from "vue";

export default {
  component: Header,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    unsavedChanges: false,
    menus: [
      {
        label: "Payments",
        value: "payments",
        color: "#002771",
        path: "payments",
      },
      {
        label: "Point of Sale",
        value: "point_of_sale",
        color: "#FDB012",
        path: "point_of_sale",
      },
      {
        label: "Online Store",
        value: "online_store",
        color: "#0EA81B",
        path: "online_store",
      },
    ],
  },
  render: (args) => ({
    components: { 
      Header, 
      Theme, 
      Icon,
      Avatar,
      Tooltip,
      Button,
      Dropdown,
      DropdownItem,
      HeaderLeft, 
      HeaderCenter, 
      HeaderRight,
      HeaderTabs,
    },
    setup() {
      const activeMenuValue = ref("payments");
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label
      });

      return { args, activeMenuValue, activeMenuLabel };
    },
    template: `
          <Theme>
            <Header class="mb-3">
              <Button class="md:hidden mr-3" variant="secondary" left-icon="menu" />
              <HeaderLeft class="md:w-[260px]">
                <Icon
                    width="108"
                    height="27"
                    name="hitPay"
                    class="text-oc-accent-1"
                  />
                 
                  <Dropdown :offset="10">
                      <template #trigger>
                        <div class="cursor-pointer flex rounded-full max-w-[150px] overflow-hidden items-center gap-x-2 py-2 px-3 bg-oc-accent-1-50">
                          <Icon width="16" height="16" name="store" class="shrink-0 text-oc-accent-1-400" />
                          <span class="overflow-hidden text-ellipsis whitespace-nowrap text-oc-text-400">Shenzhen Huajin test</span>
                        </div>
                      </template>
                      <div class="flex flex-col">
                        <div class="p-2 border-b border-gray-200">
                          <DropdownItem text="My Store"/>
                          <DropdownItem text="My Store"/>
                        </div>
                      </div>
                    </Dropdown>
              </HeaderLeft>
              <HeaderCenter class="hidden md:flex" >
                <HeaderTabs  v-model="activeMenuValue" :menus="args.menus" />
              </HeaderCenter>
              <HeaderRight>
                  <div class="flex gap-x-2 md:gap-x-5 ">
                    <Button is-transparent variant="secondary"  left-icon="chat" />
                    <Button is-transparent variant="secondary"  left-icon="sparkle-2" />
                    <Tooltip key="my-tooltip" trigger="hover" :offset="[0, 10]" position="bottom" 
                      popperClass="bg-oc-gray-900 text-oc-text-100">
                      <Button is-transparent variant="secondary"  left-icon="question-mark" />
                      <template #popper>
                        <div class="p-4 rounded-full z-50">
                          Help
                        </div>
                      </template>
                    </Tooltip>
                    <Dropdown :offset="10">
                      <template #trigger>
                      <Avatar class="cursor-pointer" />
                      </template>
                      <div class="flex flex-col">
                        <div class="p-2 border-b border-gray-200">
                          <DropdownItem text="Menu" icon="pencil"/>
                          <DropdownItem text="Menu" icon="pencil"/>
                        </div>
                        <div class="p-2">
                          <DropdownItem text="Logout" icon="pencil" variant="destructive"/>
                        </div>
                      </div>
                    </Dropdown>
                  </div>
              </HeaderRight>
            </Header>
            
            <Header is-sub-header class="mb-3" >
              <Button class="md:hidden mr-3" variant="secondary"  left-icon="menu" />
              <HeaderLeft class="hidden md:flex  md:w-[260px]" >
                <Icon
                    width="108"
                    height="27"
                    name="hitPay"
                    class="text-oc-text-100"
                  />
                  <Dropdown :offset="10">
                    <template #trigger>
                        <div
                            class="cursor-pointer flex rounded-full max-w-[150px] overflow-hidden items-center gap-x-2 py-2 px-3 ">
                            <Icon width="16" height="16" name="store" class="shrink-0 text-oc-text-200" />
                            <span class="overflow-hidden text-ellipsis whitespace-nowrap text-oc-text-200">Shenzhen Huajin test</span>
                        </div>
                    </template>
                    <div class="flex flex-col z-[1000]">
                        <div class="p-2 border-b border-gray-200">
                            <DropdownItem text="My Store" />
                            <DropdownItem text="My Store" />
                        </div>
                    </div>
                </Dropdown>
              </HeaderLeft>
              <HeaderCenter class="flex-1" >
                <span v-if="!args.unsavedChanges" class="text-oc-text-100 flex items-center">
                  <Icon name="chevron-down" class="rotate-90" />
                  Back
                </span>
                <span class="text-oc-text-300 text-sm lg:text-base" v-else>
                  Unsaved changes
                </span>
              </HeaderCenter>
              <HeaderRight>
                  <div class="flex gap-x-3">
                    <Button class="min-w-[100px]" variant="secondary" label="Cancel"  />
                    <Button class="min-w-[100px]" :label="!args.unsavedChanges ? 'Create' : 'Save'"  />
                  </div>
              </HeaderRight>
            </Header>

            <Header is-sub-header >
              <Button class="md:hidden mr-3" variant="secondary"  left-icon="menu" />
              <HeaderLeft class="hidden md:flex  md:w-[260px]">
                <Icon
                    width="108"
                    height="27"
                    name="hitPay"
                    class="text-oc-text-100"
                  />
                  <Dropdown :offset="10">
                      <template #trigger>
                          <div
                              class="cursor-pointer flex rounded-full max-w-[150px] overflow-hidden items-center gap-x-2 py-2 px-3 ">
                              <Icon width="16" height="16" name="store" class="shrink-0 text-oc-text-200" />
                              <span class="overflow-hidden text-ellipsis whitespace-nowrap text-oc-text-200">Shenzhen Huajin test</span>
                          </div>
                      </template>
                      <div class="flex flex-col z-[1000]">
                          <div class="p-2 border-b border-gray-200">
                              <DropdownItem text="My Store" />
                              <DropdownItem text="My Store" />
                          </div>
                      </div>
                  </Dropdown>
              </HeaderLeft>
              <HeaderCenter class="flex-1">
                <span  v-if="args.unsavedChanges" class="text-oc-text-100 flex items-center cursor-pointer">
                  <Icon name="chevron-down" class="rotate-90" />
                  Back
                </span>
                <span class="text-oc-text-300  text-sm md:text-base" v-else>
                  Unsaved changes
                </span>
              </HeaderCenter>
              <HeaderRight>
                  <div class="flex gap-x-3">
                    <Button class="min-w-[100px]" variant="secondary" label="Cancel"  />
                    <Button class="min-w-[100px]" :label="args.unsavedChanges ? 'Create' : 'Save'"  />
                  </div>
              </HeaderRight>
            </Header>
          </Theme>
        `,
  }),
};
