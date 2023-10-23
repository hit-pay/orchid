import { Theme, Table, Chip, Icon, Toggle, TableCellContent } from "@orchid";

export default {
  component: Table,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isSelectable: true,
    headers: [
      {
        key: "image",
        variant: "image",
        label: "Image",
      },
      {
        key: "col1",
        label: "Table Header",
      },
      {
        key: "col2",
        label: "Table Header",
      },
      {
        key: "col3",
        label: "Table Header",
        isCopy: true,
      },
      {
        key: "col4",
        label: "Table Header",
      },
      {
        key: "col5",
        label: "Table Header",
      },
      {
        key: "col6",
        label: "Table Header",
      },
      {
        key: "actions",
        label: "",
        headerVariant: "text",
        variant: "icon",
      },
    ],
    fields: [
      {
        image:
          "https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg",
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell ",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        image: "",
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        image: "",
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        image: "",
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        image: "",
        col1: "asd",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
    ],
    filterTabs: [
      {
        label: "All",
        value: "",
      },
      {
        label: "Filter 01",
        value: "1",
      },
      {
        label: "Filter 02",
        value: "2",
      },
      {
        label: "Filter 03",
        value: "3",
      },
    ],
  },
  render: (args) => ({
    components: { Table, Theme, Icon, TableCellContent, Toggle, Chip },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <Table
                :is-selectable="args.isSelectable"
                :headers="args.headers"
                :fields="args.fields"
                :filter-tabs="args.filterTabs"
            >
              <template #col1>
                <TableCellContent important title="Table Cell" description="Table Cell column two"/>
              </template>
              <template #col4="{ data}">
                <span class="text-oc-text-400 text-sm">{{ data }}</span>
              </template>
              <template #col5="{ data}">
                <Chip variant="success" class="w-fit" :label="data"/>
              </template>
              <template #col6="{ data}">
                <Toggle size="small" v-model="data"/>
              </template>
              <template #actions>
                <Icon class="w-6 h-6 group-hover/row:block hidden cursor-pointer mx-auto" name="dots-vertical"/>
              </template>
            </Table>
          </Theme>
        `,
  }),
};
