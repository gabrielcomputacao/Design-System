import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckBoxProps } from "@ignite-ui/react/src/index";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", gap: "$2", flexDirection: "row" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {
  args: {},
};

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
};
