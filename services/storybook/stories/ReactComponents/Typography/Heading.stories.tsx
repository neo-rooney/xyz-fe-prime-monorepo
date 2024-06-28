import "@xyz/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@xyz/react-components-layout";
import { classes } from "@xyz/themes";
import React from "react";

const meta: Meta<typeof Heading> = {
  title: "React Components/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "지정한 HTML Element로 랜더링됩니다.",
    },
    fontSize: {
      options: Object.keys(classes.typography.heading),
      control: "select",
      description: "글꼴의 크기, 두께 및 줄간격을 결정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Korean: Story = {
  args: {
    fontSize: "xl",
    children: "제목",
  },
  render: (args) => <Heading {...args} />,
};

export const English: Story = {
  args: {
    fontSize: "xl",
    children: "Title",
  },
  render: (args) => <Heading {...args} />,
};
