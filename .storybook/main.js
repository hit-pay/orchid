/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { mergeConfig } from "vite";

const config = {
  stories: [
    "../stories/**/*.mdx", 
    "../packages/@orchidui-vue/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  parameters: {
    backgrounds: {
      default: '',
      values: [
      ],
    },
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
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
};
export default config;
