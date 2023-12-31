import type { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@ignite-ui/react/src/index";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", gap: "$2", flexDirection: "column" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
