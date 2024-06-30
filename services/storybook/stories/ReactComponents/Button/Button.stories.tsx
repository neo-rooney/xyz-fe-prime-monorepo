import "@xyz/react-components-button/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@xyz/react-components-button";
import { vars } from "@xyz/themes";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "React Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "button",
    variant: "outline",
    leftIcon: "😀",
    isLoading: false,
  },
};
