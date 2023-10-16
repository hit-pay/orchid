import Theme from "../../Theme/OcTheme.vue";
import Table from "./OcTable.vue";
import Chip from "../../Feedback/Chip/OcChip.vue";
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Toggle from "../../Form/Toggle/OcToggle.vue";
import TableCellContent from "./OcTableCellContent.vue";

export default {
  component: Table,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isSelectable: true,
    headers: [
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
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
        col1: "",
        col2: "Table Cell",
        col3: "Table Cell",
        col4: "Table Cell column two",
        col5: "Label",
        col6: false,
      },
      {
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
              <template #col3="{data}">
                <div class="flex gap-x-2 items-center">
                  <span class="w-[122px]">{{ data }}</span>
                  <Icon class="cursor-pointer w-5 h-5 group-hover/row:opacity-100 opacity-0" name="copy"/>
                </div>
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
