import "@xyz/react-components-accordion/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@xyz/react-components-accordion";

import { Heading, Text } from "@xyz/react-components-layout";
const meta: Meta<typeof Accordion> = {
  title: "React Components/Disclosure/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render() {
    return (
      <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
        <AccordionItem itemName="목록1">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 1
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem itemName="목록2">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 2
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
              <br />
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};
