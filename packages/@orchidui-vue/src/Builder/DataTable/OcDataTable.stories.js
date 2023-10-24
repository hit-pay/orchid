import {
  Theme,
  DataTable,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  Dropdown,
  DropdownItem,
} from "@orchid";

export default {
  component: DataTable,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: {
      paginationOptions: {
        total: 50,
        per_page: 10,
        current_page: 1,
        last_page: 20,
      },
      filterOptions: {
        page: {
          key: "page",
        },
        per_page: {
          key: "per_page",
        },
        tabs: {
          key: "search",
        },
        search: {
          key: "search",
        },
        form: [
          // use form builder
          {
            key: "status",
            label: "Status",
            type: "select",
            options: [
              {
                value: "status-1",
                label: "Status 1",
              },
              {
                value: "status-2",
                label: "Status 2",
              },
            ],
          },
          {
            key: "date",
            label: "Date",
            type: "date",
          },
          {
            key: ["date_from", "date_to"],
            label: "Date Range",
            type: "date_range",
          },
          {
            key: "payment_methods",
            label: "Payment Methods",
            type: "select",
            options: [
              {
                value: "method-1",
                label: "Method 1",
              },
              {
                value: "method-2",
                label: "Method 2",
              },
            ],
          },
          {
            key: ["amount_from", "amount_to"],
            label: "Amount",
            type: "range",
          },
        ],
      },
      tableOptions: {
        isSelectable: true,
        headers: [
          {
            key: "image",
            variant: "image",
            label: "Image",
            class: "w-full md:w-[5%]",
          },
          {
            key: "col1",
            label: "Table Header",
            class: "w-full md:w-[20%]",
          },
          {
            key: "col2",
            label: "Table Header",
            class: "w-full md:w-[10%]",
          },
          {
            key: "col3",
            label: "Table Header",
            isCopy: true,
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
            class: "w-3/6 md:w-[12%]",
          },
          {
            key: "col6",
            label: "Header",
            class: "w-2/6 md:w-[8%]",
          },
          {
            key: "actions",
            label: "",
            headerVariant: "text",
            variant: "icon",
            class: "w-1/6 md:w-[5%]",
          },
        ],
        fields: [
          {
            image:
              "https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg",
            title: "Table Cell",
            descriptions: "Table Cell column two",
            col2: "Table Cell",
            col3: "Table Cell ",
            col4: "Table Cell column two",
            col5: "Label",
            col6: false,
          },
          {
            image: "",
            title: "Table Cell",
            descriptions: "Table Cell column two",
            col2: "Table Cell",
            col3: "Table Cell",
            col4: "Table Cell column two",
            col5: "Label",
            col6: false,
          },
          {
            image: "",
            title: "Table Cell",
            descriptions: "Table Cell column two",
            col2: "Table Cell",
            col3: "Table Cell",
            col4: "Table Cell column two",
            col5: "Label",
            col6: false,
          },
          {
            image: "",
            title: "Table Cell",
            descriptions: "Table Cell column two",
            col2: "Table Cell",
            col3: "Table Cell",
            col4: "Table Cell column two",
            col5: "Label",
            col6: false,
          },
          {
            image: "",
            title: "Table Cell",
            descriptions: "Table Cell column two",
            col2: "Table Cell",
            col3: "Table Cell",
            col4: "Table Cell column two",
            col5: "Label",
            col6: false,
          },
        ],
      },
    },
  },
  render: (args) => ({
    components: {
      DataTable,
      Table,
      Theme,
      Icon,
      Toggle,
      Chip,
      TableCellContent,
      Dropdown,
      DropdownItem,
    },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <DataTable :options="args.options">
              <template #table>
                <Table :options="args.options.tableOptions">
                  <template #col1="{ item }">
                    <TableCellContent important :title="item.title" :description="item.descriptions"/>
                  </template>
                  <template #col4="{ data }">
                    <span class="text-oc-text-400 text-sm">{{ data }}</span>
                  </template>
                  <template #col5="{ data }">
                    <Chip variant="success" class="w-fit" :label="data"/>
                  </template>
                  <template #col6="{ data }">
                    <div class="flex gap-3 items-center">
                      <span class="md:hidden">
                      status
                      </span>
                      <Toggle size="small" v-model="data"/>
                    </div>
                  </template>
                  <template #actions>
                    <Icon class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto" name="dots-vertical"/>
                  </template>
                </Table>
              </template>
            </DataTable>
          </Theme>
        `,
  }),
};
