import { Button } from "@/ui/Button/OCButton.js";
import { Theme } from "@/ui/Theme/OCTheme.js";

export default {
  component: Button,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    icon: {
      control: "select",
      options: ["", "circle"],
    },
    iconAfter: {
      control: "select",
      options: ["", "plus"],
    },
  },
  args: {
    label: "Button Text",
    icon: "",
    iconAfter: "",
    isSmall: false,
    isLarge: false,
    isSecondary: false,
    isDestructive: false,
    isDisabled: false,
    isLoading: false,
    isRounded: false,
    isText: false,
  },
  render: (args) => ({
    components: { Button, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" group="payment">
            <div class="flex gap-3 items-center  mb-3">
              <Button
                  :label="args.label"
                  :isSmall="args.isSmall"
                  :isLarge="args.isLarge"
                  :icon="args.icon"
                  :iconAfter="args.iconAfter"
                  :isSecondary="args.isSecondary"
                  :isDestructive="args.isDestructive"
                  :isDisabled="args.isDisabled"
                  :isLoading="args.isLoading"
                  :isRounded="args.isRounded"
                  :isText="args.isText"
              />
            </div>
          </Theme>
        `,
  }),
};

export const SizeVariant = {
  render: () => ({
    components: { Button, Theme },
    template: `
          <Theme colorMode="light" group="payment">

            <div class="flex gap-3 items-center  mb-3">
              <Button isSmall label="Button Text"/>
              <Button label="Button Text"/>
              <Button isLarge label="Button Text"/>
            </div>

            <div class="flex gap-3 items-center  mb-3">
              <Button isSmall isSecondary label="Button Text"/>
              <Button isSecondary label="Button Text"/>
              <Button isLarge isSecondary label="Button Text"/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button isSmall isDestructive label="Button Text"/>
              <Button isDestructive label="Button Text"/>
              <Button isLarge isDestructive label="Button Text"/>
            </div>
          </Theme>
        `,
  }),
};

export const ButtonVariant = {
  render: () => ({
    components: { Button, Theme },
    template: `
          <Theme colorMode="light" group="payment">
            <div class="flex gap-3 items-center  mb-3">
              <Button icon="x"/>
              <Button icon="x" isRounded/>
              <Button icon="x" iconAfter="circle" label="Button Text"/>
              <Button label="Button Text" isDisabled/>
              <Button label="Button Text" isLoading/>
              <Button label="Button Text" isText/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button isSecondary icon="x"/>
              <Button isSecondary icon="x" isRounded/>
              <Button isSecondary icon="x" iconAfter="circle" label="Button Text"/>
              <Button isSecondary label="Button Text" isDisabled/>
              <Button isSecondary label="Button Text" isLoading/>
              <Button isSecondary label="Button Text" isText/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button isDestructive icon="x"/>
              <Button isDestructive icon="x" isRounded/>
              <Button isDestructive icon="x" iconAfter="circle" label="Button Text"/>
              <Button isDestructive label="Button Text" isDisabled/>
              <Button isDestructive label="Button Text" isLoading/>
              <Button isDestructive label="Button Text" isText/>
            </div>
          </Theme>
        `,
  }),
};
