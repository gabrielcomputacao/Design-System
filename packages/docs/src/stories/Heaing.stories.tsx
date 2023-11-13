import type { StoryObj, Meta } from "@storybook/react";
import { HeadingProps, Heading } from "@ignite-ui/react/src/index";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Custom Title",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["xxs", "xs", "sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",

    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por Padrao o texto é sempre h2, mas pode ser possivel alterar com o  'as' para um h1 ou h3",
      },
    },
  },
};
