import Theme from "../../Theme/OcTheme.vue";
import Header from "./OcHeader.vue";

import HeaderLeft from "./OcHeaderLeft.vue";
import HeaderCenter from "./OcHeaderCenter.vue";
import HeaderRight from "./OcHeaderRight.vue";
import HeaderTabs from "./OcHeaderTabs.vue";

import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Button from "../../Form/Button/OcButton.vue";

import { ref } from "vue";

export default {
  component: Header,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isSaved: false,
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
      Button,
      HeaderLeft, 
      HeaderCenter, 
      HeaderRight,
      HeaderTabs
    },
    setup() {
      const activeMenuValue = ref("payments");

      return { args, activeMenuValue };
    },
    template: `
          <Theme>
            <Header class="mb-3">
              <Button class="md:hidden mr-3" variant="secondary" left-icon="menu" />
              <HeaderLeft>
                <Icon
                    width="108"
                    height="27"
                    name="hitPay"
                    class="text-oc-accent-3"
                  />
              </HeaderLeft>
              <HeaderCenter class="hidden md:flex"  >
                <HeaderTabs v-model="activeMenuValue" :menus="args.menus" />
              </HeaderCenter>
              <HeaderRight>
                  <div class="flex gap-x-5">
                    <Button is-transparent variant="secondary"  left-icon="chat" />
                    <Button is-transparent variant="secondary"  left-icon="sparkle-2" />
                    <Button is-transparent variant="secondary"  left-icon="question-mark" />
                  </div>
              </HeaderRight>
            </Header>
            <Header is-sub-header >
              <Button class="md:hidden mr-3" variant="secondary"  left-icon="menu" />
              <HeaderLeft>
                <Icon
                    width="108"
                    height="27"
                    name="hitPay"
                    class="text-oc-text-100"
                  />
              </HeaderLeft>
              <HeaderCenter class="hidden md:flex flex-1"  >
                <span  v-if="args.isSaved" class="text-oc-text-100 flex items-center">
                  <Icon name="chevron-down" class="rotate-90" />
                  Back
                </span>
                <span class="text-oc-text-300" v-else>
                  Unsaved changes
                </span>
              </HeaderCenter>
              <HeaderRight>
                  <div class="flex gap-x-5">
                    <Button variant="secondary" label="Cancel"  />
                    <Button :label="args.isSaved ? 'Create' : 'Save'"  />
                  </div>
              </HeaderRight>
            </Header>
          </Theme>
        `,
  }),
};
