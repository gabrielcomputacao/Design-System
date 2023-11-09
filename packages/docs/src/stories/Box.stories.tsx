import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@ignite-ui/react/src/index";

export default {
  title: "Surface/Box",
  component: Box,

  args: {
    children: (
      <>
        <span>testando elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
