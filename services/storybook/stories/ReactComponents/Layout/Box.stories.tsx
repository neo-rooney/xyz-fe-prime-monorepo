import "@xyz/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@xyz/react-components-layout";
import { vars } from "@xyz/themes";

const meta: Meta<typeof Box> = {
  title: "React Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "지정한 HTML Element로 랜더링됩니다.",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
      description: "Box 영역의 글꼴 색상을 지정합니다.",
    },
    bg: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
      description: "Box 영역의 배경 색상을 지정합니다.",
    },
    borderRadius: {
      options: Object.keys(vars.box.radii),
      control: "select",
      description: "테두리 경계의 꼭짓점 둥글기의 정도를 지정합니다",
    },
    boxShadow: {
      options: Object.keys(vars.box.shadows),
      control: "select",
      description: "Box 영역의 그림자 효과를 지정합니다.",
    },
    p: {
      options: Object.keys(vars.box.spacing),
      control: "select",
      description: "Box 영역의 상하좌우 padding을 지정합니다.",
    },
    m: {
      options: Object.keys(vars.box.spacing),
      control: "select",
      description: "Box 영역의 상하좌우 margin 지정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    as: "div",
    bg: "red",
    p: "10",
    borderRadius: "lg",
    boxShadow: "xl",
    color: "blue",
    m: "0",
  },
};
