import { MonoText } from "@/components/StyledText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MonoText> = {
  component: MonoText,
};

export default meta;

export const Default: StoryObj<typeof MonoText> = {
  args: {},
};
