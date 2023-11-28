import { SampleFilterForm } from "./FilterForm.sample";

const DataTableOptions = {
  pagination: {
    total: 50,
    last_page: 20,
  },
  filterOptions: {
    tabs: {
      key: "tabs",
      options: [
        { label: "All", value: "" },
        { label: "Filter 01", value: "1" },
        { label: "Filter 02", value: "2" },
        { label: "Filter 03", value: "3" },
      ],
    },
    search: {
      key: "keywords",
    },
    form: SampleFilterForm,
    grid: {
      xs: {
        area: `
              checkboxes_group
              date_picker_range
              only_date
              radio_group
              range_input
              select
              select_multiple
          `,
        rows: "auto",
        columns: "100%",
      },
      sm: {
        area: `
                 checkboxes_group
              date_picker_range
              only_date
              radio_group
              range_input
              select
              select_multiple
          `,
        rows: "auto",
        columns: "100%",
      },
      lg: {
        area: `
             checkboxes_group
              date_picker_range
              only_date
              radio_group
              range_input
              select
              select_multiple
          `,
        rows: "auto",
        columns: "100%",
      },
    },
  },
  tableOptions: {
    isSelectable: true,
    headers: [
      {
        key: "image",
        variant: "image",
        label: "Image",
        class: "w-1/2 md:w-[5%]",
      },
      {
        key: "col1",
        label: "Table Header",
        class: "w-1/2 md:w-[20%]",
      },
      {
        key: "col2",
        label: "Table Header",
        class: "w-1/2 md:w-[10%]",
      },
      {
        key: "col3",
        variant: "content",
        label: "Table Header",
        title: "col3Title",
        description: "col3Description",
        isCopy: true,
        href: "col3Url",
        class: "w-1/2 md:w-[12%]",
      },
      {
        key: "col4",
        label: "Table Header",
        class: "w-1/2 md:w-[18%]",
      },
      {
        key: "col5",
        label: "Table Header",
        class: "w-1/2 md:w-[15%]",
      },
      {
        key: "col6",
        label: "Header",
        class: "w-1/2 md:w-[10%]",
      },
      {
        key: "actions",
        label: "",
        headerVariant: "text",
        variant: "icon",
        class: "w-1/2 md:w-[5%]",
      },
    ],
    fields: [
      {
        image:
          "https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg",
        imageTitle: "Table Cell",
        imageDescription: "Table Cell column two",
        col2: "Table Cell",
        col3Title: "Table Cell ",
        col3Description: "Table cell column four",
        col3Url: "https://hitpayapp.com",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
        id: crypto.randomUUID(),
      },
      {
        image: "",
        imageTitle: "Table Cell",
        imageDescription: "",
        col2: "Table Cell",
        col3Title: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
        id: crypto.randomUUID(),
      },
      {
        image: "",
        imageTitle: "Table Cell",
        imageDescription: "Table Cell column two",
        col2: "Table Cell",
        col3Title: "",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
        id: crypto.randomUUID(),
      },
      {
        image: "",
        imageTitle: "",
        imageDescription: "Table Cell column two",
        col2: "Table Cell",
        col3Title: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
        id: crypto.randomUUID(),
      },
      {
        image: "",
        imageTitle: "Table Cell",
        imageDescription: "Table Cell column two",
        col2: "Table Cell",
        col3Title: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
        id: crypto.randomUUID(),
      },
    ],
  },
};

const Filter = {
  page: 1,
  per_page: 10,
};

export { DataTableOptions, Filter };
