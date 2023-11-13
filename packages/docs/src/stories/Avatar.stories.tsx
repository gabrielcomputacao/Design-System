import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react/src/index";

export default {
  title: "Data/Display",
  component: Avatar,

  args: {
    src: "https:://github.com/gabrielcomputacao.png",
    alt: "gabriel henrique",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
