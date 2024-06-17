const ASSETS_URL = '/templates/default/images/'

const TOP_BANNER_FORM = [
  {
    general: true,
    name: 'top_banner_closable',
    type: 'SectionItem',
    props: {
      title: 'Closable',
      isToggle: true
    }
  },
  {
    type: 'SectionItem',
    props: {
      title: 'Content'
    }
  },
  {
    general: true,
    name: 'top_banner_content',
    type: 'TextArea'
  },
  {
    type: 'SectionItem',
    props: {
      title: 'Colors'
    }
  },
  {
    name: [
      {
        props: {
          label: 'Background Color'
        },
        key: 'color_bg'
      },
      {
        props: {
          label: 'Text Color'
        },
        key: 'color_text'
      }
    ],
    type: 'Colors'
  }
]

const HEADER_FORM = [
  {
    type: 'SectionItem',
    props: {
      title: 'Alignment'
    }
  },
  {
    name: 'message_device_warning',
    show_if_preview: true,
    show_if_preview_not: 'desktop',
    type: 'Snackbar',
    props: {
      size: 'small',
      icon: 'information',
      color: 'gray',
      content:
        'Switch to oc-emit[update:preview-mode|desktop|desktop-preview]oc-end-emit to see the change'
    }
  },
  {
    name: 'alignment',
    type: 'SelectOptions',
    props: {
      options: [
        {
          preview: ASSETS_URL + 'header-alignment-left.png',
          value: 'left',
          label: 'Left'
        },
        {
          preview: ASSETS_URL + 'header-alignment-center.png',
          value: 'center',
          label: 'Center'
        },
        {
          preview: ASSETS_URL + 'header-alignment-right.png',
          value: 'right',
          label: 'Right'
        }
      ]
    }
  },
  {
    name: 'active',
    type: 'SectionItem',
    props: {
      title: 'Navigation Menu',
      isToggle: true
    }
  },
  {
    general: true,
    name: 'navigation_menus',
    type: 'Menus',
    hasSubmenu: true,
    submenuLevel: '2',
    noMenuIcon: ASSETS_URL + 'no-menu-header.png'
  },
  {
    type: 'SectionItem',
    props: {
      title: 'Choose colors'
    }
  },
  {
    name: [
      {
        props: {
          label: 'Background Color'
        },
        key: 'color_bg'
      },
      {
        props: {
          label: 'Text Color'
        },
        key: 'color_text'
      }
    ],
    type: 'Colors'
  }
]

export { TOP_BANNER_FORM, HEADER_FORM }
