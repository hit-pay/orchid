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
        } else if (["IconLinks", "ButtonLinks"].includes(section)) {
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

        console.log("sidebar :", item.section);
      };

      const onUpdateSidebarActive = () => {
        console.log("sidebar :", sidebarActive.value);
      };

      const options = {
        pages: [
          {
            value: "page_id",
            link: "/page-1",
            label: "page title",
          },
          {
            value: "page_id_2",
            link: "/page-2",
            label: "page title 2",
          },
        ],
        categories: [
          {
            value: "category_id",
            link: "/search?category=category_id",
            label: "Category title 1",
          },
          {
            value: "category_id_2",
            link: "/search?category=category_id",
            label: "category title 2",
          },
        ],
      };

      const onEditBanner = (data) => {
        console.log(data);
      };
      const onDeleteBanner = (data) => {
        console.log(data);
      };

      return {
        sidebarConfig,
        sidebarActive,
        storeDesignData,
        updateSidebarActive,
        onUpdateSidebarActive,

        onEditBanner,
        onDeleteBanner,
        // stories
        args,
        content,
        options,
      };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5 w-[1200px] overflow-y-auto ">
              <div class="h-[90vh] w-[535px] overflow-y-scroll">
                  <SDSidebar 
                    v-model:values="storeDesignData"
                    :sidebar="sidebarConfig.sidebar"
                    :preset="sidebarConfig.preset"
                    :preset-custom-preview="sidebarConfig.presetCustomPreview"
                    :settings="sidebarConfig.settings"
                    :options="options"
                    v-model:active="sidebarActive"
                    @update:active="onUpdateSidebarActive"
                    @edit:banner="onEditBanner"
                    @delete:banner="onDeleteBanner"
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
                    <div class="h-[80vh] overflow-auto rounded bg-black">
                      <pre v-if="content === 'data'" class="bg-black text-white p-3 rounded">{{storeDesignData}}</pre>
                      <pre v-if="content === 'sidebar'" class="bg-black text-white p-3 rounded">{{sidebarConfig.sidebar}}</pre>
                      <pre v-if="content === 'section'" class="bg-black text-white p-3 rounded">{{sidebarConfig.settings}}</pre>
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
