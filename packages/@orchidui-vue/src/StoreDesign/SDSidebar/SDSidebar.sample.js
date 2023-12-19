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
        label: "Sections",
      },
      {
        name: "footer",
        label: "Footer",
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

export { SDSidebarSample };
