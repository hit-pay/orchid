import Sidebar from "./OCSidebar.vue";
import Theme from "../../Theme/OCTheme.vue";

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
    sidebar_menu: [
      {
        title: "Payment",
        menus: [
          {
            active: true,
            name: 'overview',
            icon: 'grid', // Sidebar icon
            path: '', // path
            label: 'Overview', // Sidebar label
          },
          {
            active: false,
            name: 'transactions',
            icon: 'transaction',
            path: 'transactions',
            label: 'Transactions'
          },
          {
            active: false,
            name: 'bank-payouts',
            icon: 'dollar-paper',
            path: 'bank-payouts',
            label: 'Bank Payouts',
            children: [
              {
                active: true,
                name: 'reports-hit-pay-balance',
                path: 'balance',
                label: 'HitPay Balance'
              },
              {
                active: false,
                name: 'payouts',
                path: 'payouts',
                label: 'Payouts'
              },
            ]
          },
          {
            active: false,
            name: 'customers',
            icon: 'users',
            path: 'customers',
            label: 'Customers'
          }
        ]
      },
      {
        title: "No Code Tools",
        menus: [
          {
            active: true,
            name: 'overview',
            icon: 'grid', // Sidebar icon
            path: '', // path
            label: 'Overview', // Sidebar label
          },
          {
            active: false,
            name: 'transactions',
            icon: 'transaction',
            path: 'transactions',
            label: 'Transactions'
          },
          {
            active: false,
            name: 'bank-payouts',
            icon: 'dollar-paper',
            path: 'bank-payouts',
            label: 'Bank Payouts',
            children: [
              {
                active: true,
                name: 'reports-hit-pay-balance',
                path: 'balance',
                label: 'HitPay Balance'
              },
              {
                active: false,
                name: 'payouts',
                path: 'payouts',
                label: 'Payouts'
              },
            ]
          },
          {
            active: false,
            name: 'customers',
            icon: 'users',
            path: 'customers',
            label: 'Customers'
          }
        ]
      },
      {
        title: "", // null title will use -
        menus: [
          {
            active: true,
            name: 'overview',
            icon: 'grid', // Sidebar icon
            path: '', // path
            label: 'Overview', // Sidebar label
          },
          {
            active: false,
            name: 'transactions',
            icon: 'transaction',
            path: 'transactions',
            label: 'Transactions'
          },
          {
            active: false,
            name: 'bank-payouts',
            icon: 'dollar-paper',
            path: 'bank-payouts',
            label: 'Bank Payouts',
            children: [
              {
                active: true,
                name: 'reports-hit-pay-balance',
                path: 'balance',
                label: 'HitPay Balance'
              },
              {
                active: false,
                name: 'payouts',
                path: 'payouts',
                label: 'Payouts'
              },
            ]
          },
          {
            active: false,
            name: 'customers',
            icon: 'users',
            path: 'customers',
            label: 'Customers'
          }
        ]
      }
    ]
  },
  render: (args) => ({
    components: { Sidebar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme class="layout-payment mb-8">
            <Sidebar :title="args.title" :sidebar-menu="args.sidebar_menu" :isExpanded="args.isExpanded" @changeExpanded="args.isExpanded = $event">
              <template v-slot:label="{menu}">
                <a href="#" class="ml-3">{{menu.label}}</a>
              </template>
              <template v-slot:submenu_label="{submenu}">
                <a href="#" class="ml-3">{{submenu.label}}</a>
              </template>
            </Sidebar>
          </Theme>

          <Theme class="layout-pos mb-8">
          <Sidebar :title="args.title" :sidebar-menu="args.sidebar_menu" :isExpanded="args.isExpanded" @changeExpanded="args.isExpanded = $event">
            <template v-slot:label="{menu}">
              <a href="#" class="ml-3">{{menu.label}}</a>
            </template>
            <template v-slot:submenu_label="{submenu}">
              <a href="#" class="ml-3">{{submenu.label}}</a>
            </template>
          </Sidebar>
        </Theme>

        <Theme class="layout-online-store mb-8">
        <Sidebar :title="args.title" :sidebar-menu="args.sidebar_menu" :isExpanded="args.isExpanded" @changeExpanded="args.isExpanded = $event">
          <template v-slot:label="{menu}">
            <a href="#" class="ml-3">{{menu.label}}</a>
          </template>
          <template v-slot:submenu_label="{submenu}">
            <a href="#" class="ml-3">{{submenu.label}}</a>
          </template>
        </Sidebar>
      </Theme>

      <Theme colorMode="dark" class="layout-payment mb-8">
        <Sidebar :title="args.title" :sidebar-menu="args.sidebar_menu" :isExpanded="args.isExpanded" @changeExpanded="args.isExpanded = $event">
          <template v-slot:label="{menu}">
            <a href="#" class="ml-3">{{menu.label}}</a>
          </template>
          <template v-slot:submenu_label="{submenu}">
            <a href="#" class="ml-3">{{submenu.label}}</a>
          </template>
        </Sidebar>
      </Theme>
        `,
  }),
};