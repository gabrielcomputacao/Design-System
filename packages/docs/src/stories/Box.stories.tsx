import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui/react/src/index";

export default {
  title: "Surface/Box",
  component: Box,

  args: {
    children: (
      <>
        <Text>testando elemento box</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
