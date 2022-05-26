import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "components";

export default {
  title: "Components/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: loremIpsum,
  accent: "none",
  shape: "rounded",
  elevated: true,
};

export const ColorInfo = Template.bind({});
ColorInfo.args = {
  color: "info",
  children: loremIpsum,
  accent: "none",
  shape: "rounded",
  elevated: true,
};
export const ColorWarning = Template.bind({});
ColorWarning.args = {
  color: "warning",
  children: loremIpsum,
  accent: "none",
  shape: "rounded",
  elevated: true,
};
export const ColorDanger = Template.bind({});
ColorDanger.args = {
  color: "danger",
  children: loremIpsum,
  accent: "none",
  shape: "rounded",
  elevated: true,
};

export const AccentSolid = Template.bind({});
AccentSolid.args = {
  color: "muted",
  children: loremIpsum,
  accent: "solid",
  shape: "rounded",
  elevated: true,
};
export const AccentDotted = Template.bind({});
AccentDotted.args = {
  color: "muted",
  children: loremIpsum,
  accent: "dotted",
  shape: "rounded",
  elevated: true,
};
