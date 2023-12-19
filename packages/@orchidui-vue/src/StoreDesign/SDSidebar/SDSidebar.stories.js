import { Theme } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import HeaderSettings from "./HeaderSettings.vue";
import { SDSidebarSample } from "./SDSidebar.sample";
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
        submenu: "",
        section: "",
        id: "",
      });
      const storeDesignSettings = ref({
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
      return { sidebarActive, storeDesignSettings, SDSidebarData, args };
    },
    template: `
          <Theme>
          <div class="flex gap-5">
              <div class="h-[800px] w-[500px]">
                  <SDSidebar 
                    :sidebar="SDSidebarData"
                    v-model:settings="storeDesignSettings"
                    v-model:active="sidebarActive">
                  </SDSidebar>
                </div>
                <pre  class="bg-black text-white p-3 rounded">{{storeDesignSettings}}</pre>

            </div>
          </Theme>
        `,
  }),
};
