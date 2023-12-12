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
        id: ""
      });
      const storeDesignSettings = ref({});
      return { sidebarActive, storeDesignSettings, SDSidebarData, args };
    },
    template: `
          <Theme>

           {{sidebarActive }}
          <div class="h-[800px] max-w-[500px]">
            <SDSidebar 
              :sidebar="SDSidebarData"
              v-model:settings="storeDesignSettings"
              v-model:active="sidebarActive">
              <template #styles>
                <div>
                  Select Preset Style
                ->  <div @click="sidebarActive.submenu = 'custom'">Go to Custom Style</div> 
                </div>
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

              <template #section-top_banner>
                <div>
                  <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
                Top Banner Section
                </div>
              </template>

              <template #section-header>
              <div>
                <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
                Header Section
              </div>
             </template>
             
             <template #section-banner>
              <div>
                <div @click="sidebarActive.section = ''">[Back, Save] / CLose</div>
                Banner Section
              </div>
              </template>
              

            </SDSidebar>
          </div>
          </Theme>
        `,
  }),
};
