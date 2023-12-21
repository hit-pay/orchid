
import { SidebarConfig } from "./SidebarConfig.sample";
import { SectionConfig } from "./SectionsConfig.sample";
const ASSETS_URL = "/templates/default/images/";

const Config = {
    sidebar: SidebarConfig, // sidebar menus
    sections: SectionConfig, // form
    preset: [{
        name: "default",
        label: "Default",
        thumnbail: ASSETS_URL+'preset-1.png',
        sections: [
            {
              key: "Styles",
              changes: {
                preset: "default",
                primary_color: "#002771",
                primary_text_color: "#03102F",
                background_color: "#FFFFFF",
                text_color: "#03102F",
                font_body: "Inter",
                folor_title: "Inter",
                box_rounded: "4",
                box_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
              }
            },
            {
                key: "Footer",
                changes: {
                  text_color: "#FFFFFF",
                  backhround_color: "#03102F"
                }
            }
        ]
    }],
}
export {  ASSETS_URL, Config };
