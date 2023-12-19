import { Theme, Button } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
import { SDSidebarSample } from "./SDSidebar.sample";
import { ref } from "vue";
import { TOP_BANNER_FORM, HEADER_FORM, BANNER_FORM  } from './settings/SDHeaders.sample'
import { PRODUCT_FORM } from './settings/SDSections.sample'
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
          top_banner_content: "",
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
            group: "styles",
            key: "Styles",
            section: "Styles",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            background_color: "#FFFFFF",
            text_color: "#03102F",
            font_body: "Inter",
            folor_title: "Inter",
            box_rounded: "4",
            box_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
            active: true
          },
          {
            group: "header",
            key: "TopBanner",
            section: "TopBanner",
            background_color: "#FFFFFF",
            text_color: "#03102F",
            active: false
          },
          {
            key: "Header",
            group: "header",
            section: "Header",
            aligment: "right",
            background_color: "#002771",
            text_color: "#03102F",
            active: true
          },
          {
            group: "header",
            key: "Banner",
            section: "Banner",
            variant: "MediaOnly",
            width: "full",
            image_width: "half",
            aligment: "text_right",
            banner_title: "",
            description: "",
            button_text: "",
            button_link: "",
            active: true
          },
          {
            group: "footer",
            key: "FooterContent",
            section: "FooterContent",
            active: true
          },
          {
            group: "footer",
            key: "PoweredBy",
            section: "PoweredBy",
            active: true
          },
          {
            group: "sections",
            key: "product_list_1",
            section: "Products",
            title: "Feature Product",
            active: true
          },
          {
            group: "sections",
            key: "product_list_2",
            section: "Products",
            title: "All Products",
            active: true
          },
          {
            group: "sections",
            key: "product_list_4",
            section: "Products",
            title: "Pick Products",
            active: true
          }
        ]
      });

      const content = ref('data')

      const updateSidebarActive = (section) => {
        if(section === 'TopBanner'){
          sidebarActive.value = {
            sidebarMenu: "home",
            submenu: "header",
            section: "TopBanner",
            id: "TopBanner",
          }
        } else if(section === 'Header'){
          sidebarActive.value = {
            sidebarMenu: "home",
            submenu: "header",
            section: "Header",
            id: "Header",
          }
        }else{
          sidebarActive.value = {
            sidebarMenu: "home",
            submenu: "header",
            section: "Banner",
            id: "Banner",
          }
        }
      }

     const sectionSettings = [{
        group: "header",
        key: "TopBanner",
        section: "TopBanner",
        title: "Top Banner",
        icon: "circle",
        isDisable: true,
        form: TOP_BANNER_FORM
      },
      {
        group: "header",
        key: "Header",
        section: "Header",
        title: "Header",
        icon: "circle",
        isDisable: true,
        form: HEADER_FORM
      },
      {
        group: "header",
        key: "Banner",
        section: "Banner",
        title: "Banner",
        icon: "circle",
        isDisable: true,
        form: BANNER_FORM
      },
      {
        group: "footer",
        key: "FooterContent",
        section: "FooterContent",
        title: "Footer Content",
        icon: "circle",
        isDisable: true,
        form: []
      },
      {
        group: "footer",
        key: "PoweredBy",
        section: "PoweredBy",
        title: "Powered By",
        icon: "circle",
        isDisable: true,
      },
      {
        group: "sections",
        key: "Products",
        section: "Products",
        title: "Products",
        icon: "circle",
        form: PRODUCT_FORM
      }
    ]

      return { sidebarActive, storeDesignData, SidebarConfig, args, content, updateSidebarActive, sectionSettings };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5">
              <div class="h-[800px] w-[500px]">
                  <SDSidebar 
                    v-model:values="storeDesignData"
                    :sidebar="SidebarConfig"
                    :settings="sectionSettings"
                    v-model:active="sidebarActive">
                  </SDSidebar>
                </div>
                <div class="w-[800px]">
                    <div class="flex gap-5 mb-5 flex-wrap">
                        <div class="w-full flex gap-5">
                          <Button label="Undo" />
                          <Button label="Redo" />
                        </div>
                        <Button @click="content = 'data'" label="Store Design Data" variant="secondary"  />
                        <Button @click="content = 'config'" label="Config" variant="secondary"  />
                        <Button @click="content = 'preview'" label="PREVIEW" variant="secondary"  />
                    </div>
                    <div class="h-[700px] overflow-auto rounded bg-black">
                      <pre v-if="content === 'data'" class="bg-black text-white p-3 rounded">{{storeDesignData}}</pre>
                      <pre v-if="content === 'config'" class="bg-black text-white p-3 rounded">{{SidebarConfig}}</pre>
                      <div class="flex flex-wrap gap-5 p-5" v-if="content === 'preview'">
                        <Button label="Top Banner Section" @click="updateSidebarActive('TopBanner')" />
                        <Button label="Header Section" @click="updateSidebarActive('Header')" />
                        <Button label="Banner Section" @click="updateSidebarActive()" />
                      </div>
                    </div>
                </div>
            </div>
          </Theme>
        `,
  }),
};
