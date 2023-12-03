import { Theme } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import HeaderSettings from "./HeaderSettings.vue";
import { SDSidebarSample } from "@/orchidui/data/SDSidebar.sample";
import { ref } from "vue";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, SDSidebar, HeaderSettings },
    setup() {
      const SDSidebarData = ref(SDSidebarSample);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "header",
        section: "",
      });
      const storeDesign = ref({});
      return { sidebarActive, storeDesign, SDSidebarData, args };
    },
    template: `
          <Theme>
          <div class="h-[800px] max-w-[500px]">
            <SDSidebar 
              v-model="storeDesign"
              v-model:active="sidebarActive"
              :sidebar="SDSidebarData"
              >
              <template #styles>
              Select Preset Style
              ->  <div @click="sidebarActive.submenu = 'custom'">Go to Custom Style</div> 
              </template>
              
              <template #header>
                <HeaderSettings @changeSection="sidebarActive.section = $event" />
              </template>
              <template #sections>
                Section Settings
              </template>
              <template #footer>
              Footer Settings
              </template>
              <template #custom>
              Custom Style Settings
              </template>

              </template>
              <template #section-top_banner>
                <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
               Top Banner Section
              </template>
              <template #section-header>
              <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
              Header Section
             </template>
             <template #section-banner>
             <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
             Banner Section
            </template>
              

            </SDSidebar>
          </div>
          </Theme>
        `,
  }),
};
