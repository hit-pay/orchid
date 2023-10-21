import { defineAsyncComponent } from "vue";

import Table from "./OcTable.vue";
import TableCell from "./OcTableCell.vue";
import TableHeader from "./OcTableHeader.vue";
import TableActions from "./OcTableActions.vue";
import TableCellContent from "./OcTableCellContent.vue";
import TableActionSearch from "./OcTableActionSearch.vue";
import TableSearchFor from "./OcTableSearchFor.vue";

const TableBulkActions = defineAsyncComponent(() =>
  import("./OcTableBulkActions.vue"),
);
const TableActionFilter = defineAsyncComponent(() =>
  import("./OcTableActionFilter.vue"),
);

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
