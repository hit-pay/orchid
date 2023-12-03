import { Theme } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import { SDSidebarSample } from "@/orchidui/data/SDSidebar.sample";
import { ref } from "vue";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, SDSidebar },
    setup() {
      const SDSidebarData = ref(SDSidebarSample);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "",
        section: "",
      });
      return { sidebarActive, SDSidebarData, args };
    },
    template: `
          <Theme>
          <div class="h-[800px] max-w-[500px]">
            <SDSidebar 
              v-model="sidebarActive"
              :sidebar="SDSidebarData"
              >
              <template #styles="{changeSection}">
              Select Preset Style
              ->  <div @click="sidebarActive.submenu = 'custom'">Go to Custom Style</div> 
              </template>
              <template #home>
                Header Section
              </template>
              <template #sections>
                Orderen List Section
              </template>
              <template #footer>
                Footer Section
              </template>
              <template #custom>
              Footer Section
              </template>
            </SDSidebar>
          </div>
          </Theme>
        `,
  }),
};
