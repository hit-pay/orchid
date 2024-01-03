const STYLES_FORM = [
  {
    name: "Font",
    type: "Children",
    icon: "font",
    label: "Fonts",
    children: [
      {
        name: "font_heading",
        type: "Select",
        props: {
          label: "Heading",
          placeholder: "Choose Font",
          options: [
            {
              label: "Inter",
              value: "inter",
            },
          ],
        },
      },
      {
        name: "font_body",
        type: "Select",
        props: {
          label: "Body",
          placeholder: "Choose Font",
          options: [
            {
              label: "Inter",
              value: "inter",
            },
          ],
        },
      },
    ],
  },
  {
    name: "GlobalColor",
    type: "Children",
    icon: "color-circle",
    label: "Global Colors",
    children: [
      {
        type: "Colors",
        name: [
          {
            props: {
              label: "Background Color",
            },
            key: "color_bg",
          },
          {
            props: {
              label: "Text Color",
            },
            key: "color_text",
          },
        ],
      },
    ],
  },
  {
    name: "Button",
    type: "Children",
    icon: "button",
    label: "Button",
    children: [
      {
        name: [
          {
            props: {
              label: "Background Color",
            },
            key: "color_primary",
          },
          {
            props: {
              label: "Text Color",
            },
            key: "color_primary_text",
          },
        ],
        type: "Colors",
      },
      {
        name: "button_rounded",
        type: "Slider",
        props: {
          label: "Rounded Corner",
          variant: "right",
        },
      },
    ],
  },
  {
    name: "ProductCard",
    type: "Children",
    icon: "product-card",
    label: "Card",
    children: [
      {
        name: [
          {
            props: {
              label: "Background Color",
            },
            key: "card_color_bg",
          },
          {
            props: {
              label: "Text Color",
            },
            key: "card_color_text",
          },
        ],
        type: "Colors",
      },
      {
        name: "card_rounded",
        type: "Slider",
        props: {
          label: "Rounded Corner",
          variant: "right",
        },
      },
      {
        name: "card_shadow",
        type: "RadioGroup",
        props: {
          label: "Shadow size",
          alignment: "horizontal",
          radio: [
            {
              value: "none",
              label: "None",
            },
            {
              value: "0px 4px 30px -12px var(--color-shadow)",
              label: "Small",
            },
            {
              value: "0px 4px 30px -4px var(--color-shadow)",
              label: "Medium",
            },
            {
              value: "0px 4px 30px 0px var(--color-shadow)",
              label: "Large",
            },
          ],
        },
      },
      {
        name: "card_shadow_effect",
        type: "RadioGroup",
        props: {
          label: "Shadow size effect",
          alignment: "horizontal",
          radio: [
            {
              value: "none",
              label: "None",
            },
            {
              value: "0px 4px 30px -12px var(--color-shadow)",
              label: "Small",
            },
            {
              value: "0px 4px 30px -4px var(--color-shadow)",
              label: "Medium",
            },
            {
              value: "0px 4px 30px 0px var(--color-shadow)",
              label: "Large",
            },
          ],
        },
      },
      {
        name: [
          {
            props: {
              label: "Shadow Color",
            },
            key: "color_shadow",
          },
        ],
        type: "Colors",
      },
    ],
  },
];

export { STYLES_FORM };
