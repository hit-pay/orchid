import { Theme, Button } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
// config
import { Config } from "./settings/Config.sample";
// data
import { StoreDesign } from "./settings/StoreDesign.sample";

import { ref } from "vue";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, Button, SDSidebar },
    setup() {
      const sidebarConfig = ref(Config);
      const storeDesignData = ref(StoreDesign);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "",
        section: "",
        id: "",
      });

      const content = ref("data");

      const getSidebarMenu = (section) => {
        // Sidebar not stored to user store design
        if (section === "Styles") {
          return "styles";
        } else if (["IconLink", "ButtonLink"].includes(section)) {
          return "link_in_bio";
        } else {
          return "home";
        }
      };
      const updateSidebarActive = (item) => {
        sidebarActive.value = {
          sidebarMenu: getSidebarMenu(item.section),
          submenu: item.group,
          section: item.section,
          id: item.key,
        };

        console.log("sidebar :", sidebarActive.value);
      };

      const onUpdateSidebarActive = () => {
        console.log("sidebar :", sidebarActive.value);
      };

      return {
        sidebarConfig,
        sidebarActive,
        storeDesignData,
        updateSidebarActive,
        onUpdateSidebarActive,
        // stories
        args,
        content,
      };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5 w-[1200px] overflow-y-auto ">
              <div class="h-[800px] w-[500px]">
                  <SDSidebar 
                    v-model:values="storeDesignData"
                    :sidebar="sidebarConfig.sidebar"
                    :preset="sidebarConfig.preset"
                    :settings="sidebarConfig.settings"
                    v-model:active="sidebarActive"
                    @update:active="onUpdateSidebarActive"
                    >
                  </SDSidebar>
                </div>
                <div class="w-[700px]">
                    <div class="flex gap-5 mb-5 flex-wrap">
                        <div class="w-full flex gap-5">
                          <Button label="Undo" />
                          <Button label="Redo" />
                        </div>
                        <Button @click="content = 'data'" label="Store Design Data" variant="secondary"  />
                        <Button @click="content = 'sidebar'" label="Sidebar Settings" variant="secondary"  />
                        <Button @click="content = 'section'" label="Section Settings" variant="secondary"  />
                        <Button @click="content = 'preview'" label="PREVIEW" variant="secondary"  />
                    </div>
                    <div class="h-[700px] overflow-auto rounded bg-black">
                      <pre v-if="content === 'data'" class="bg-black text-white p-3 rounded">{{storeDesignData}}</pre>
                      <pre v-if="content === 'sidebar'" class="bg-black text-white p-3 rounded">{{sidebarConfig}}</pre>
                      <pre v-if="content === 'section'" class="bg-black text-white p-3 rounded">{{sectionSettings}}</pre>
                      <div class="flex flex-wrap gap-5 p-5" v-if="content === 'preview'">
                        <Button v-for="section in storeDesignData.sections" :label="section.title ?? section.section" @click="updateSidebarActive(section)" />
                      </div>
                    </div>
                </div>
            </div>
          </Theme>
        `,
  }),
};
