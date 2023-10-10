import Button from "./OcButton.vue";
import Theme from "../../Theme/OcTheme.vue";

export default {
  component: Button,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    leftIcon: {
      control: "select",
      options: ["", "circle"],
    },
    rightIcon: {
      control: "select",
      options: ["", "plus"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "small", "big"],
    },
  },
  args: {
    label: "Button Text",
    leftIcon: "",
    rightIcon: "",
    isDisabled: false,
    isLoading: false,
    isTransparent: false,
    isRounded: false,
    variant: "primary",
    size: "default",
  },
  render: (args) => ({
    components: { Button, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex gap-3 items-center  mb-3">
              <Button
                  :label="args.label"
                  :left-icon="args.leftIcon"
                  :rightIcon="args.rightIcon"
                  :isDisabled="args.isDisabled"
                  :isLoading="args.isLoading"
                  :variant="args.variant"
                  :size="args.size"
                  :isTransparent="args.isTransparent"
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
          <Theme colorMode="light" >

            <div class="flex gap-3 items-center  mb-3">
              <Button size="small" label="Button Text"/>
              <Button label="Button Text"/>
              <Button size="big" label="Button Text"/>
            </div>

            <div class="flex gap-3 items-center  mb-3">
              <Button size="small" variant="secondary" label="Button Text"/>
              <Button variant="secondary" label="Button Text"/>
              <Button size="big" variant="secondary" label="Button Text"/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button size="small" variant="destructive" label="Button Text"/>
              <Button variant="destructive" label="Button Text"/>
              <Button size="big" variant="destructive" label="Button Text"/>
            </div>
          </Theme>
        `,
  }),
};

export const ButtonVariant = {
  render: () => ({
    components: { Button, Theme },
    template: `
          <Theme colorMode="light">
            <div class="flex gap-3 items-center  mb-3">
              <Button left-icon="x"/>
              <Button left-icon="x" rightIcon="circle" label="Button Text"/>
              <Button label="Button Text" isDisabled/>
              <Button label="Button Text" isLoading/>
              <Button label="Button Text" isTransparent/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button variant="secondary" left-icon="x"/>
              <Button variant="secondary" left-icon="x" rightIcon="circle" label="Button Text"/>
              <Button variant="secondary" label="Button Text" isDisabled/>
              <Button variant="secondary" label="Button Text" isLoading/>
              <Button variant="secondary" label="Button Text" isTransparent/>
            </div>
            <div class="flex gap-3 items-center  mb-3">
              <Button variant="destructive" left-icon="x"/>
              <Button variant="destructive" left-icon="x" rightIcon="circle" label="Button Text"/>
              <Button variant="destructive" label="Button Text" isDisabled/>
              <Button variant="destructive" label="Button Text" isLoading/>
              <Button variant="destructive" label="Button Text" isTransparent/>
            </div>
          </Theme>
        `,
  }),
};
