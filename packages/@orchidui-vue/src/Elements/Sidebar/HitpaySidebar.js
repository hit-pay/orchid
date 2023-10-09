export const HEADER_TABS = {
    PAYMENTS: 'payments',
    POS: 'pos',
    ONLINE_STORE: 'online-store',
  }
  
  export const PAYMENT_SIDEBAR_ITEMS = [
    {
      name: 'overview',
      icon: 'grid', // Sidebar icon
      path: '', // path
      label: 'Overview', // Sidebar label
    },
    {
      name: 'transactions',
      icon: 'transaction',
      path: 'transactions',
      label: 'Transactions'
    },
    {
      name: 'reports',
      icon: 'pie-chart',
      path: 'sales-report',
      label: 'Reports'
    },
    {
      name: 'bank-payouts',
      icon: 'dollar-paper',
      path: 'bank-payouts',
      label: 'Bank Payouts',
      children: [
        {
          name: 'reports-hit-pay-balance',
          path: 'balance',
          label: 'HitPay Balance'
        },
        {
          name: 'payouts',
          path: 'payouts',
          label: 'Payouts'
        },
      ]
    },
    {
      name: 'customers',
      icon: 'users',
      path: 'customers',
      label: 'Customers'
    },
  ];
  export const NO_CODE_TOOLS_SIDEBAR_ITEMS = [
    {
      name: 'payment-links',
      icon: 'link',
      path: 'payment-links',
      label: 'Payment Links'
    },
    {
      name: 'invoicing',
      icon: 'receipt',
      path: 'invoicing',
      label: 'Invoicing',
      children: [
        {
          name: 'all-invoice',
          path: 'invoices',
          label: 'All Invoices'
        },
        {
          name: 'invoice-products',
          path: 'invoices-products',
          label: 'Products'
        },
      ]
    }
  ];
  export const PAYMENTS_OTHERS_SIDEBAR_ITEMS = [
    {
      name: 'api-keys',
      icon: 'code',
      path: 'api-keys',
      label: 'API Keys'
    },
    {
      name: 'integration',
      icon: 'puzzle',
      path: 'integrations',
      label: 'Plugins Integration'
    },
    {
      name: 'settings',
      icon: 'setting',
      path: 'settings',
      label: 'Settings',
      children: [
        {
          name: 'payment-methods',
          path: 'payment-methods',
          label: 'Payment Methods'
        },
        {
          name: 'notifications',
          path: 'notifications',
          label: 'Notifications'
        },
        {
          name: 'email-templates',
          path: 'settings/email-templates',
          label: 'Email Templates'
        },
        {
          name: 'bank-accounts',
          path: 'bank-accounts',
          label: 'Bank Accounts'
        },
        {
          name: 'connections',
          path: 'connections',
          label: 'Connections'
        },
        {
          name: 'account-verification',
          path: 'settings/account-verification',
          label: 'Account Verification'
        },
        {
          name: 'users',
          path: 'settings/users',
          label: 'Staff'
        },
        {
          name: 'business-details',
          path: 'settings/business-details',
          label: 'Business Details'
        },
        {
          name: 'settings-partners',
          path: 'partners',
          label: 'Partners'
        },
      ],
    },
    {
      name: 'Refer and Earn',
      icon: 'gift',
      path: 'referral-program',
      label: 'Refer and Earn'
    },
  ];
  
  export const PAYMENTS_SIDEBAR_GROUP = [
    {
      name: 'payment',
      label: 'Payment',
      items: PAYMENT_SIDEBAR_ITEMS,
    },
    {
      name: 'no_code_tools',
      label: 'NO-CODE TOOLS',
      items: NO_CODE_TOOLS_SIDEBAR_ITEMS,
    },
    {
      name: 'others',
      label: '',
      items: PAYMENTS_OTHERS_SIDEBAR_ITEMS,
    },
  ];
  
  export const POS_SIDEBAR_ITEMS = [
    {
      name: 'web-pos',
      icon: 'grid',
      path: '',
      label: 'Web App'
    },
    {
      name: 'reports',
      icon: 'pie-chart',
      path: 'sales-report',
      label: 'Reports'
    },
    {
      name: 'orders',
      icon: 'transaction',
      path: 'orders',
      label: 'Orders'
    },
    {
      name: 'products',
      icon: 'product',
      path: 'products',
      label: 'Products',
      children: [
        {
          name: 'all-products',
          path: 'products',
          label: 'All Products'
        },
        {
          name: 'product-categories',
          path: 'product-categories',
          label: 'Categories'
        },
        {
          name: 'product-logs',
          path: 'product-logs',
          label: 'Product Logs'
        },
      ]
    },
    {
      name: 'customers',
      icon: 'users',
      path: 'customers',
      label: 'Customers'
    },
  ];
  export const POS_SIDEBAR_TOOLS_SIDEBAR_ITEMS = [
    {
      name: 'locations',
      icon: 'location',
      path: 'locations',
      label: 'Locations'
    },
    {
      name: 'users',
      icon: 'user',
      path: 'users',
      label: 'Staff'
    },
    {
      name: 'terminal',
      icon: 'terminal',
      path: 'terminals',
      label: 'Terminal'
    },
  ];
  export const POS_SIDEBAR_OTHERS_SIDEBAR_ITEMS = [
    {
      name: 'settings',
      icon: 'setting',
      path: 'settings',
      label: 'Settings',
      children: [
        {
          name: 'business-details',
          path: 'settings/business-details',
          label: 'Business Details'
        },
        {
          name: 'taxes',
          path: 'settings/taxes',
          label: 'Taxes'
        },
      ]
    },
  ];
  
  export const POS_SIDEBAR_GROUP = [
    {
      name: 'point-of-sale',
      label: 'POINT OF SALE',
      items: POS_SIDEBAR_ITEMS,
    },
    {
      name: 'tools',
      label: 'TOOLS',
      items: POS_SIDEBAR_TOOLS_SIDEBAR_ITEMS,
    },
    {
      name: 'others',
      label: '',
      items: POS_SIDEBAR_OTHERS_SIDEBAR_ITEMS,
    },
  ];
  
  export const ONLINE_STORE_SIDEBAR_ITEMS = [
    {
      name: 'overview',
      icon: 'grid', // Sidebar icon
      path: '', // path
      label: 'Overview', // Sidebar label
    },
    {
      name: 'orders',
      icon: 'transaction',
      path: 'orders',
      label: 'Orders'
    },
    {
      name: 'products',
      icon: 'product',
      path: 'products',
      label: 'Products',
      children: [
        {
          name: 'all-products',
          path: 'products',
          label: 'All Products'
        },
        {
          name: 'categories',
          path: 'product-categories',
          label: 'Categories'
        },
        {
          name: 'product-logs',
          path: 'product-logs',
          label: 'Logs'
        },
      ],
    },
    {
      name: 'discounts',
      icon: 'discount',
      path: 'discounts',
      label: 'Discounts'
    },
    {
      name: 'coupons',
      icon: 'tax',
      path: 'coupons',
      label: 'Coupons'
    },
    {
      name: 'customers',
      icon: 'users',
      path: 'customers',
      label: 'Customers'
    },
  ];
  export const ONLINE_STORE_TOOLS_SIDEBAR_ITEMS = [
    {
      name: 'store-design',
      icon: 'brush',
      path: 'store-design',
      label: 'Store Design'
    },
    {
      name: 'domain',
      icon: 'earth',
      path: 'domain',
      label: 'Domain'
    },
    {
      name: 'shipping-pickup',
      icon: 'truck',
      path: 'shipping-pickup',
      label: 'Shipping & Pickup'
    },
  ];
  export const ONLINE_STORE_OTHERS_SIDEBAR_ITEMS = [
    {
      name: 'user-management',
      icon: 'user',
      path: 'users',
      label: 'Staff'
    },
    {
      name: 'settings',
      icon: 'setting',
      path: 'settings',
      label: 'Settings',
      children: [
        {
          name: 'store-settings',
          path: 'settings/store',
          label: 'Store Settings'
        },
        {
          name: 'business-information',
          path: 'settings/business-details',
          label: 'Business Information'
        },
        {
          name: 'tax-settings',
          path: 'settings/taxes',
          label: 'Tax Settings'
        },
        {
          name: 'email-templates',
          path: 'settings/email-templates',
          label: 'Email Templates'
        },
        {
          name: 'notifications',
          path: 'settings/notifications',
          label: 'Notifications'
        },
      ],
    },
  ];
  
  export const ONLINE_STORE_SIDEBAR_GROUP = [
    {
      name: 'online-store',
      label: 'ONLINE STORE',
      items: ONLINE_STORE_SIDEBAR_ITEMS,
    },
    {
      name: 'tools',
      label: 'TOOLS',
      items: ONLINE_STORE_TOOLS_SIDEBAR_ITEMS,
    },
    {
      name: 'others',
      label: '',
      items: ONLINE_STORE_OTHERS_SIDEBAR_ITEMS,
    },
  ];
  