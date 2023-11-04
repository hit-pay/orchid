/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { mergeConfig } from "vite";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../packages/@orchidui-vue/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {},
  async viteFinal(baseConfig, { configType }) {
    let basePath = "/";

    // if (configType === "PRODUCTION") {
    //   // Your production configuration goes here.
    //   basePath = "/storybook/";
    // }

    return mergeConfig(baseConfig, {
      base: basePath,
    });
  },
  previewHead: (head) => `
   <script>
    let params = new URL(location.href);
    let storybookGlobalsThemes = params.searchParams.get("globals");
    if (storybookGlobalsThemes?.includes("theme:dark")) {
      document.querySelector("body").setAttribute("class", "dark");
    } else {
      document.querySelector("body").setAttribute("class", "light");
    }
    </script>
  `,
};
export default config;
