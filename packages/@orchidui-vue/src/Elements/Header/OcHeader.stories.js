import {
  Theme,
  Header,
  SubHeader,
  TabToSelect,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Icon,
} from "@/orchidui";

import SampleHeaderLeft from "./SampleHeaderLeft.vue";
import SampleHeaderRight from "./SampleHeaderRight.vue";

import { ref, computed } from "vue";

export default {
  component: Header,
  tags: ["autodocs"],
};

export const HeaderElement = {
  args: {
    menus: [
      {
        label: "Payments",
        value: "payments",
        sidebarClass: "layout-payment",
        path: "payments",
      },
      {
        label: "Point of Sale",
        value: "point_of_sale",
        sidebarClass: "layout-pos",
        path: "point_of_sale",
      },
      {
        label: "Online Store",
        value: "online_store",
        sidebarClass: "layout-online-store",
        path: "online_store",
      },
    ],
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
      SampleHeaderRight,
    },
    setup() {
      const activeMenuValue = ref("online_store");
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label;
      });

      return { args, activeMenuValue, activeMenuLabel };
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
        `,
  }),
};

export const SubHeaderElement = {
  args: {
    isSaved: true,
  },
  render: (args) => ({
    components: {
      Theme,
      SubHeader,
      HeaderLeft,
      HeaderCenter,
      HeaderRight,
      SampleHeaderLeft,
    },
    setup() {
      const activeMenuValue = ref("payments");
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label;
      });

      return { args, activeMenuValue, activeMenuLabel };
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
        `,
  }),
};

export const SubHeaderDropdownElement = {
  args: {
    isSaved: true,
    primaryProps: {
      label: 'Create',
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
    },
    setup() {
      const activeMenuValue = ref("payments");
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label;
      });

      return { args, activeMenuValue, activeMenuLabel };
    },
    template: `
          <Theme>
            <SubHeader class="mb-3">
              <HeaderLeft class="hidden md:flex">
                <SampleHeaderLeft is-sub-header/>
              </HeaderLeft>
              <HeaderCenter class="flex-1" :is-saved="args.isSaved" />
              <HeaderRight :is-saved="args.isSaved" :primary-props="args.primaryProps" :dropdown-options="args.dropdownOptions" />
            </SubHeader>
          </Theme>
        `,
  }),
};
