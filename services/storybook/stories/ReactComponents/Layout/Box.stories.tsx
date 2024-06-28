import "@xyz/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@xyz/react-components-layout";

const meta: Meta<typeof Box> = {
  title: "React Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {},
};
