import { defineAsyncComponent } from "vue";

import Sidebar from "./OcSidebar.vue";

const SidebarSubmenu = defineAsyncComponent(() =>
  import("./OcSidebarSubmenu.vue"),
);

export { Sidebar, SidebarSubmenu };
