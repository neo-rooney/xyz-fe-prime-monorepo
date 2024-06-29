import "@xyz/react-components-layout/style.css";
import { CSSProperties } from "@vanilla-extract/css";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Box } from "@xyz/react-components-layout";
import { vars } from "@xyz/themes";
import React from "react";

const meta: Meta<typeof Flex> = {
  title: "React Components/Layout/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    basis: {
      control: "text",
    },
    direction: {
      control: "inline-radio",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    grow: {
      control: "number",
      min: 0,
    },
    justify: {
      control: "inline-radio",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    shrink: {
      control: "number",
      min: 0,
    },
    wrap: {
      control: "inline-radio",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    gap: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    p: 5,
    justify: "flex-start",
    style: {
      width: "400px",
    },
  },
  render: (args) => (
    <Flex {...args}>
      <Box bg="red" p={3} borderRadius="lg" boxShadow="xl">
        Item1
      </Box>
      <Box bg="red" p={3} borderRadius="lg" boxShadow="xl">
        Item2
      </Box>
    </Flex>
  ),
};
