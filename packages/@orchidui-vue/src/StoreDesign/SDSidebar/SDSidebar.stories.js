import { Theme, Button } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import { SDSidebarSample } from "./SDSidebar.sample";
import { ref } from "vue";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, Button, SDSidebar},
    setup() {
      const SidebarConfig = ref(SDSidebarSample);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "",
        section: "",
        id: "",
      });
      const storeDesignData = ref({
        general: {
          top_banner_closable: true,
          navigation_menus: [],
          banners: [],
          footer_company_logo: "",
          footer_content: "",
          footer_link_1_title: "",
          footer_link_1_menus: "",
          footer_link_2_title: "",
          footer_link_2_menus: "",
          footer_social_title: "",
          footer_social_menus: "",
          link_in_bio_enabled: false,
          link_in_bio_icon_links: [],
          link_in_bio_button_links: []
        },
        sections: [
          {
            key: "styles",
            section: "Styles",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            background_color: "#FFFFFF",
            text_color: "#03102F",
            font_body: "Inter",
            folor_title: "Inter",
            box_rounded: "4",
            box_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)"
          },
          {
            key: "top_banner",
            section: "TopBanner",
            background_color: "#FFFFFF",
            text_color: "#03102F"
          },
          {
            key: "header",
            section: "Header",
            aligment: "right",
            background_color: "#002771",
            text_color: "#03102F"
          },
          {
            key: "banner",
            section: "Banner",
            variant: "MediaOnly",
            width: "full",
            image_width: "half",
            aligment: "text_right",
            title: "",
            description: "",
            button_text: "",
            button_link: ""
          }
        ]
      });

      const content = ref('data')
      return { sidebarActive, storeDesignData, SidebarConfig, args, content };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5">
              <div class="h-[800px] w-[500px]">
                  <SDSidebar 
                    :sidebar="SidebarConfig"
                    v-model:settings="storeDesignData"
                    v-model:active="sidebarActive">
                  </SDSidebar>
                </div>
                <div class="w-[400px]">
                    <div class="flex gap-5 mb-5 flex-wrap">
                        <div class="w-full flex gap-5">
                          <Button label="Undo" />
                          <Button label="Redo" />
                        </div>
                        <Button @click="content = 'data'" label="Store Design Data" variant="secondary"  />
                        <Button @click="content = 'config'" label="Config" variant="secondary"  />
                        <Button @click="content = 'preview'" label="PREVIEW" variant="secondary"  />
                    </div>
                    <div class="h-[700px] overflow-auto rounded">
                      <pre v-if="content === 'data'" class="bg-black text-white p-3 rounded">{{storeDesignData}}</pre>
                      <pre v-if="content === 'config'" class="bg-black text-white p-3 rounded">{{SidebarConfig}}</pre>
                      <div v-if="content === 'preview'">
                        Preview Section Focus to Settings
                      </div>
                    </div>
                </div>
            </div>
          </Theme>
        `,
  }),
};
