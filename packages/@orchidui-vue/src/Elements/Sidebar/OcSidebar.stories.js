import { Theme, Sidebar } from "@orchid";

import {
  PAYMENTS_SIDEBAR_GROUP,
  POS_SIDEBAR_GROUP,
  ONLINE_STORE_SIDEBAR_GROUP,
} from "./HitpaySidebar.js";

export default {
  component: Sidebar,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    icon: {
      control: "select",
      options: ["", "circle"],
    },
  },
  args: {
    isExpanded: true,
    payment_sidebar_menu: PAYMENTS_SIDEBAR_GROUP,
    pos_sidebar_menu: POS_SIDEBAR_GROUP,
    online_store_sidebar_menu: ONLINE_STORE_SIDEBAR_GROUP,
  },
  render: (args) => ({
    components: { Sidebar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme class="layout-payment mb-8">
            <Sidebar 
                  :title="args.title" 
                  :sidebar-menu="args.payment_sidebar_menu"
                  :isExpanded="args.isExpanded"
                  @changeExpanded="args.isExpanded = $event">
                <template v-slot:label="{menu}">
                  <a href="#" class="whitespace-nowrap px-5 py-3">{{ menu.label }}</a>
                </template>
                <template v-slot:submenu_label="{submenu}">
                  <a href="#" class="whitespace-nowrap px-5 py-3">{{ submenu.label }}</a>
                </template>
            </Sidebar>
          </Theme>

          <Theme class="layout-pos mb-8">
            <Sidebar :title="args.title" :sidebar-menu="args.pos_sidebar_menu" :isExpanded="args.isExpanded"
                     @changeExpanded="args.isExpanded = $event">
              <template v-slot:label="{menu}">
                <a href="#" class="ml-3 px-5 py-3">{{ menu.label }}</a>
              </template>
              <template v-slot:submenu_label="{submenu}">
                <a href="#" class="ml-3 px-5 py-3">{{ submenu.label }}</a>
              </template>
              <template v-slot:after="{isExpanded}">

                <div class="mt-4 mb-6 w-full border-b border-[var(--oc-sidebar-menu-title)] opacity-50"></div>
                <div class="rounded font-medium bg-gradient-to-r from-[#FCE82E] via-[#9531F9] to-[#F77618] p-1">
                  <div class="flex gap-3 py-4 flex-wrap justify-center rounded bg-oc-bg-light">
                    <a href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1127_54645)">
                          <path
                              d="M13.0642 6.68504L13.8087 6.37922C14.4141 6.13814 15.1955 5.8939 16.1192 6.04915C18.01 6.36695 19.3145 7.38793 20.0914 8.74213C20.3908 9.26401 20.1489 9.95146 19.5887 10.1709C18.6569 10.5358 17.9999 11.4424 17.9999 12.4999C17.9999 13.6076 18.7211 14.5496 19.7222 14.8768C20.2405 15.0463 20.5317 15.6216 20.3615 16.1396C19.9201 17.4823 19.2836 18.7212 18.5305 19.7212C17.7871 20.7085 16.879 21.5295 15.868 21.9297C15.2088 22.1906 14.5002 22.0932 13.8227 21.9251L13.4206 21.8181L12.8237 21.6446C12.5528 21.5663 12.2747 21.4982 11.9999 21.4982C11.7251 21.4982 11.447 21.5663 11.1761 21.6446L10.5793 21.8181L10.1772 21.9251C9.49961 22.0932 8.79107 22.1906 8.13188 21.9297C6.85861 21.4257 5.73553 20.2497 4.88738 18.8633C4.02419 17.4522 3.37005 15.7027 3.10335 13.8774C2.87624 12.3229 2.99884 10.5784 3.71813 9.10178C4.45891 7.58105 5.81382 6.39659 7.8806 6.04915C8.72039 5.90798 9.44255 6.09701 10.0218 6.31369L10.352 6.44459L10.9357 6.68504C11.3354 6.84166 11.6515 6.93389 11.9999 6.93389C12.3484 6.93389 12.6645 6.84166 13.0642 6.68504ZM11.7677 2.76766C12.744 1.79135 14.2426 1.707 14.5961 2.06056C14.9497 2.41411 14.8653 3.91267 13.889 4.88898C12.9127 5.86529 11.4141 5.94964 11.0606 5.59609C10.707 5.24254 10.7914 3.74397 11.7677 2.76766Z"
                              fill="black"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1127_54645">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1127_54649)">
                          <path
                              d="M11.9999 13.4141L14.9467 16.3608L5.25 21.9592C4.72369 22.2631 4.12812 22.2071 3.68198 21.9175L3.57369 21.8403L11.9999 13.4141ZM3 4.41415L10.5857 11.9999L3 19.5856V4.41415ZM16.7398 8.67424L20.25 10.7009C21.25 11.2782 21.25 12.7216 20.25 13.2989L16.7398 15.3255L13.4142 11.9999L16.7398 8.67424ZM5.25 2.0406L14.9466 7.63896L11.9999 10.5857L3.57371 2.15944C4.02839 1.80454 4.67983 1.71141 5.25 2.0406Z"
                              fill="black"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1127_54649">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <span v-if="isExpanded">Download App</span>
                  </div>
                </div>
              </template>
            </Sidebar>
          </Theme>

          <Theme class="layout-online-store mb-8">
            <Sidebar :title="args.title" :sidebar-menu="args.online_store_sidebar_menu" :isExpanded="args.isExpanded"
                     @changeExpanded="args.isExpanded = $event">
              <template v-slot:label="{menu}">
                <a href="#" class="ml-3 px-5 py-3">{{ menu.label }}</a>
              </template>
              <template v-slot:submenu_label="{submenu}">
                <a href="#" class="ml-3 px-5 py-3">{{ submenu.label }}</a>
              </template>
            </Sidebar>
          </Theme>
        `,
  }),
};
