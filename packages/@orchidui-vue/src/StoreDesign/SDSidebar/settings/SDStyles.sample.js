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

export { RequestFormStyles };
