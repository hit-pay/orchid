import { Theme, Button } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import { SDSidebarSample } from "./SDSidebar.sample";
import { SDSectionSample } from "./SDSections.sample";
import { SDSample } from "./SDSample.sample";
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
      const storeDesignData = ref(SDSample);
      const sectionSettings = ref(SDSectionSample);

      const sidebarConfig = ref(SDSidebarSample);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "",
        section: "",
        id: "",
      });

      const content = ref("data");

      const getSidebarMenu = (section) => {
        // Sidebar not stored to user store design

        if(section === 'Styles'){
          return "styles"
        }
        else if(["FooterContent","PoweredBy"].includes(section)){
            return "footer"
        }else if(["IconLink","ButtonLink"].includes(section)){
          return "link_in_bio"
        }
        else{
          return "home"
        }
      }
      const updateSidebarActive = (item) => {
        sidebarActive.value = {
          sidebarMenu: getSidebarMenu(item.section),
          submenu: item.group,
          section: item.section,
          id: item.key,
        };
      };

      return {
        sidebarActive,
        storeDesignData,
        sidebarConfig,
        args,
        content,
        updateSidebarActive,
        sectionSettings,
      };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5 w-[1200px] overflow-y-auto ">
              <div class="h-[800px] w-[500px]">
                  <SDSidebar 
                    v-model:values="storeDesignData"
                    :sidebar="sidebarConfig"
                    :settings="sectionSettings"
                    v-model:active="sidebarActive">
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
