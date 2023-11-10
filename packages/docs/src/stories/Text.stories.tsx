import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react/src/index";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Testando esse componente que é um text. Escrenveod qualquer coisa rapidamente para ver a digitação como esta",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",

    as: "strong",
  },
};
