import "@xyz/react-components-input/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { vars } from "@xyz/themes";
import React from "react";
import { Input, InputGroup, InputLeftAddon } from "@xyz/react-components-input";

const meta: Meta<typeof Input> = {
  title: "React Components/Input",
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="dd" />,
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
