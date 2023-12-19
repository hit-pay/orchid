
import { TOP_BANNER_FORM, HEADER_FORM, BANNER_FORM  } from './settings/SDHeaders.sample'

const SDSidebarSample = [
  {
    type: "list",
    name: "home",
    label: "Home Settings",
    children: [
      {
        name: "header",
        label: "Header",
        sections: [
          {
            key: "TopBanner",
            title: "Top Banner",
            icon: "circle",
            active: true,
            isDisable: true,
            form: TOP_BANNER_FORM
          },
          {
            key: "Header",
            title: "Header",
            icon: "circle",
            active: true,
            isDisable: true,
            form: HEADER_FORM
          },
          {
            key: "Banner",
            title: "Banner",
            icon: "circle",
            active: true,
            isDisable: true,
            form: BANNER_FORM
          }
        ] 
      },
      {
        name: "sections",
        label: "Sections"
      },
      {
        name: "footer",
        label: "Footer"
      },
    ],
  },
  {
    type: "styles",
    name: "styles",
    label: "Styles",
    children: [
      {
        name: "custom",
        label: "Custom",
      },
    ],
  },
  {
    type: "list",
    name: "link_in_bio",
    label: "Link In Bio",
    children: [
      {
        name: "icon_links",
        label: "Icon Links",
      },
      {
        name: "button_links",
        label: "Button Links",
      },
      {
        label: "Copy URL",
        icon: "link",
        onClick: () => console.log("do somthing"),
      },
    ],
  },
  {
    type: "page",
    name: "page",
    label: "Pages",
    onClick: () => console.log("do somthing"),
  },
];

const Sections = [
  {
    preview: "/images/section_preview.jpg",
    name: "section_name",
    label: "Section Label",
    type: "form_request",
  },
  {
    preview: "/images/section_preview.jpg",
    name: "section_name_2",
    label: "Section Label 2",
    type: "form_request",
  },
];

const AvailableSections = [
  {
    preview: "/images/section_preview.jpg",
    name: "new_section_name",
    label: "New Section Label",
    type: "form_request",
  },
  {
    preview: "/images/section_preview.jpg",
    name: "new_section_name_2",
    label: "New Section Label 2",
    type: "form_request",
  },
];

const FormRequestTypes = [
  "title",
  "text",
  "longText",
  "options",
  "toggle",
  "select",
  "select_category",
  "select_products",
  "font",
];

const RequestFormStyles = [
  {
    type: "title",
    label: "Choose Font",
  },
  {
    type: "font",
    name: "font_heading",
    label: "Heading",
  },
  {
    type: "colors",
    name: "colors",
    label: "Choose Colors",
  },
  {
    type: "range",
    name: "rounded",
    range: [0, 100],
    label: "Card appearance",
    hint: "Rounded corner",
  },
  {
    type: "shadow",
    name: "shadow",
    label: "Shadow Styles",
  },
];

const RequestFormSection = [
  {
    type: "options",
    name: "variant",
    label: "Type",
    options: [
      {
        preview: "images/setting_preview.jpg",
        value: "carousel",
        label: "Carousel",
      },
      {
        preview: "images/setting_preview.jpg",
        value: "grid",
        label: "Grid",
      },
    ],
  },
  {
    type: "title",
    label: "Content",
  },
  {
    type: "text",
    name: "limit",
    label: "Limit feature products",
    hint: "How many featured products do you want to show?",
  },
  {
    name: "description",
    type: "longText",
    label: "Description",
  },
  {
    type: "toggle",
    name: "show_filter",
    label: "Show Categories Filter",
  },
  {
    type: "select",
    name: "product_from",
    label: "Select Product from",
    options: [
      {
        value: "all",
        label: "All Products",
      },
      {
        value: "feature",
        label: "Feature Product",
      },
      {
        value: "category",
        label: "Product Category",
      },
      {
        value: "pick_products",
        label: "Pick Products",
      },
    ],
  },
];

export {
  SDSidebarSample,
  Sections,
  AvailableSections,
  FormRequestTypes,
  RequestFormSection,
  RequestFormStyles,
};
