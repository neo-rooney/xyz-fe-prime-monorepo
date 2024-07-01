import "@xyz/react-components-button/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@xyz/react-components-button";
import { Text } from "@xyz/react-components-layout";
import { vars } from "@xyz/themes";
import React from "react";
import { useButton, useToggleButton } from "@xyz/react-hooks-button";

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

export const TextButton = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};

export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      { elementType: "button" },
      false,
    );

    return (
      <Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </Button>
    );
  },
};
