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
  Button,
} from "@orchid";

export default {
  component: DataTable,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: {
      filter: {
        current_page: 1,
        per_page: 10,
        tabs: "",
        keywords: "",
      },
      paginationOptions: {
        total: 50,
        last_page: 20,
      },
      filterOptions: {
        current_page: {
          key: "current_page",
        },
        per_page: {
          key: "per_page",
        },
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
            class: "w-3/6 md:w-[15%]",
          },
          {
            key: "col6",
            label: "Header",
            class: "w-2/6 md:w-[10%]",
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
      Button,
    },
    setup() {
      const updateFilterData = (data) => {
        // get new data
        args.options.filter = data;
      };
      return { args, updateFilterData };
    },
    template: `
          <Theme>
            <div>
              <ul>
                <li v-for="item, key in args.options.filter">{{key}} : {{item}}</li>
              </ul>
            </div>
            <DataTable :options="args.options" @update:filter="updateFilterData">
              <template #bulk-actions="{selectedRows}">
                <Button
                  label="Publish"
                  size="small"
                  is-transparent
                  left-icon="eye-open"
                />
                <Button
                  label="Unpublish"
                  is-transparent
                  size="small"
                  variant="secondary"
                  left-icon="eye-close"
                />
                <Button
                  label="Delete"
                  is-transparent
                  size="small"
                  variant="destructive"
                  left-icon="bin"
                />
                {{ selectedRows }}
              </template>
            </DataTable>
          </Theme>
        `,
  }),
};
