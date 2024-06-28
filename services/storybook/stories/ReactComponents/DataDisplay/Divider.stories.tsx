import "@xyz/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Divider, Box } from "@xyz/react-components-layout";
import { vars } from "@xyz/themes";
import React from "react";

const meta: Meta<typeof Divider> = {
  title: "React Components/DataDisplay/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
      description: "Divider의 방향",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
      description: "실선 혹은 점선 결정",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
      description: "Divider의 색",
    },
    size: {
      control: {
        type: "range",
        min: 0,
        max: 30,
        step: 1,
      },
      description: "Divider의 두께",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    color: "gray",
    size: 2,
    variant: "solid",
    orientation: "horizontal",
  },
  render: (arg) => (
    <Box p={3} style={{ width: "300px", height: "300px" }}>
      <Divider {...arg} />
    </Box>
  ),
};
