import { defineAsyncComponent } from "vue";

import Table from "./OcTable.vue";
import TableCell from "./OcTableCell.vue";

const TableCellContent = defineAsyncComponent(() =>
  import("./OcTableCellContent.vue"),
);

import TableHeader from "./OcTableHeader.vue";
import TableActions from "./OcTableActions.vue";
import TableActionSearch from "./OcTableActionSearch.vue";
import TableSearchFor from "./OcTableSearchFor.vue";
import TableBulkActions from './OcTableBulkActions.vue'
import TableActionFilter from './OcTableActionFilter.vue'
export {
  Table,
  TableActions,
  TableCellContent,
  TableActionSearch,
  TableCell,
  TableHeader,
  TableSearchFor,
  TableBulkActions,
  TableActionFilter
};
