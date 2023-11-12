import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@ignite-ui/react/src/index";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Secundary",
  },
};
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
