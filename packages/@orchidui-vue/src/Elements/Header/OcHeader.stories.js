import {
  Theme,
  Header,
  SubHeader,
  TabToSelect,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Icon,
} from "@orchid";

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
      const activeMenuValue = ref("payments");
      const activeMenuLabel = computed(() => {
        return args.menus.find((m) => m.value === activeMenuValue.value).label;
      });

      return { args, activeMenuValue, activeMenuLabel };
    },
    template: `
          <Theme>
            <div class="w-full h-[200px]">
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
              <HeaderCenter class="flex-1" :is-saved="args.isSaved"></HeaderCenter>
              <HeaderRight :is-saved="args.isSaved"></HeaderRight>
            </SubHeader>
          </Theme>
        `,
  }),
};
