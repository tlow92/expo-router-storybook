import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/components/Themed";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: "Hello world",
  },
};
