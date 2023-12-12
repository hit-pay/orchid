const ASSETS_URL = "/store-design/"

const TOP_BANNER_FORM = [
    {
        name: "closable",
        type: "SectionItem",
        props: {
            title: "Closable",
            isToggle: true,
        },
    },
    {
        type: "SectionItem",
        props: {
            title: "Content",
        },
    },
    {
        name: "content",
        type: "TextArea"
    },
]

const HEADER_FORM = [
    {
        type: "SectionItem",
        props: {
            title: "Choose colors",
        },
    },
    {
        name: [
            {
                props: {
                    label: 'Background Color',
                },
                key: 'background_color'
            },
            {
                props: {
                    label: 'Text Color',
                },
                key: 'text_color'
            },
        ],
        type: "Colors"
    },
    {
        name: "text_color",
        type: "Color",
        props: {
            label: 'Text Color',
        }
    },
    {
        type: "SectionItem",
        props: {
            title: "Alignment",
        },
    },
    {
        name: "alignment",
        type: "SelectOptions",
        props: {
          options: [
            {
              preview: `${ASSETS_URL}header-alignment-right.png`,
              label: "Right",
              value: "right",
            },
            {
              preview: `${ASSETS_URL}header-alignment-left.png`,
              label: "Left",
              value: "left",
            },
            {
              preview: `${ASSETS_URL}header-alignment-center.png`,
              label: "Center",
              value: "center",
            },
          ],
        },
    },
    {
        name: 'menu_enabled',
        type: "SectionItem",
        props: {
            title: "Navigation Menu",
            isToggle: true
        },
    },
    {
        name: 'menus',
        type: "NavigationMenu"
    },
]


export { 
    ASSETS_URL,
    TOP_BANNER_FORM,
    HEADER_FORM
}