const StoreDesign = {
  general: {
    top_banner_closable: true,
    top_banner_content: '',
    navigation_menus: [],
    banners: [],
    banners_mobile: [],
    responsive_banner_size: true,
    banner_size: [3, 1],
    banner_size_mobile: [1, 1],
    footer_link_1_title: '',
    footer_link_1_menus: [],
    footer_link_2_title: '',
    footer_link_2_menus: [],
    footer_social_title: '',
    footer_social_menus: [],
    bio_enabled: false,
    bio_icon_links: [],
    bio_button_links: [],
    product_ratio: [1, 1]
  },
  sections: [
    {
      group: 'styles',
      key: 'Styles',
      section: 'Styles',
      preset: 'default',
      // Font
      font_heading: [
        "'Inter', sans-serif",
        'https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'
      ],
      font_body: [
        "'Inter', sans-serif",
        'https://fonts.googleapis.com/css2?family=Inter&display=swap'
      ],
      // colors
      color_bg: '#FFFFFF',
      color_text: '#03102F',
      color_primary: '#002771',
      color_primary_text: '#FFFFFF',
      color_shadow: 'rgba(0, 0, 0, 0.12)',
      card_color_bg: '#FFFFFF',
      card_color_text: '#03102F',
      // Button
      // Button Color using primary color
      button_rounded: '4',
      // card
      card_rounded: '4',
      card_shadow: '0px 0px 12px 0px var(--color-shadow)',
      card_shadow_effect: '0px 4px 30px -4px var(--color-shadow)',
      active: true
    },
    {
      group: 'header',
      key: 'TopBanner',
      section: 'TopBanner',
      color_bg: '#002771',
      color_text: '#FFFFFF',
      active: true
    },
    {
      group: 'header',
      key: 'Header',
      section: 'Header',
      alignment: 'right',
      color_bg: '#FFFFFF',
      color_text: '#03102F',
      active: true
    },
    {
      group: 'header',
      key: 'Banner',
      section: 'Banner',
      variant: 'MediaOnly',
      width: 'full',
      variant_width: 'half',
      alignment_half: 'right',
      alignment_full: 'center',
      banner_title: '',
      description: '',
      button_text: '',
      button_link: '',
      color_bg: '#FFFFFF',
      color_heading: '#03102F',
      color_text: '#03102F',
      active: true
    },
    {
      group: 'footer',
      key: 'FooterContent',
      section: 'FooterContent',
      payment_methods: [],
      footer_logo: [],
      footer_content: '',
      color_bg: '#FFFFFF',
      color_text: '#03102F',
      active: true
    },
    {
      group: 'sections',
      key: 'product_list_1',
      section: 'Products',
      title: 'Featured Product',
      variant: 'carousel',
      product_from: 'feature',
      category_id: '',
      column_grid: [2, 3, 4],
      column_carousel: [2, 3, 4],
      show_category_filter: true,
      category_color_bg: '#002771',
      category_color_text: '#FFFFFF',
      is_limit_products: false,
      limit_products: 6,
      description: '',
      color_bg: '#FFFFFF',
      color_heading: '#03102F',
      color_text: '#03102F',
      active: true
    },
    {
      group: 'sections',
      key: 'product_list_2',
      section: 'Products',
      title: 'All Products',
      variant: 'grid',
      product_from: 'all',
      category_id: '',
      column_grid: [2, 3, 4],
      column_carousel: [2, 3, 4],
      show_category_filter: false,
      is_limit_products: false,
      limit_products: 6,
      description: '',
      color_bg: '#FFFFFF',
      color_heading: '#03102F',
      color_text: '#03102F',
      active: true
    },
    {
      group: 'link_in_bio',
      key: 'IconLinks',
      section: 'IconLinks',
      title: 'Icon Links',
      active: true
    },
    {
      group: 'link_in_bio',
      key: 'ButtonLinks',
      section: 'ButtonLinks',
      title: 'Button Links',
      active: true
    }
  ]
}

export { StoreDesign }
