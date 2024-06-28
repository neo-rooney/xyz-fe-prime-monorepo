import "@xyz/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@xyz/react-components-layout";
import { classes } from "@xyz/themes";
import React from "react";

const meta: Meta<typeof Text> = {
  title: "React Components/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "지정한 HTML Element로 랜더링됩니다.",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
      description: "글꼴의 크기, 두께 및 줄간격을 결정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Korean: Story = {
  args: {
    as: "p",
    fontSize: "xl",
    children: "다람쥐 헌 쳇바퀴에 타고파.",
  },
  render: (args) => <Text {...args} />,
};

export const English: Story = {
  args: {
    as: "p",
    fontSize: "xl",
    children: "The quick brown fox jumps over the lazy dog.",
  },
  render: (args) => <Text {...args} />,
};
