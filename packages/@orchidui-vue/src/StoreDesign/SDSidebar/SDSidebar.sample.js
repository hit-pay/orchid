
const SDSidebarSample = [
  {
    type: "list",
    name: "home",
    label: "Home Settings",
    children: [
      {
        name: "header",
        label: "Header",
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

export {
  SDSidebarSample,
  RequestFormStyles,
};
