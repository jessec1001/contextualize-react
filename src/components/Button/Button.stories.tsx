import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "components";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  parameters: { actions: { handles: ["click"] } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  color: "primary",
  shape: "pill",
  elevated: true,
  fixed: true,
};
export const ShapeRectangle = Template.bind({});
ShapeRectangle.args = {
  children: "Button",
  shape: "rectangle",
  fixed: true,
};
export const ShapeRounded = Template.bind({});
ShapeRounded.args = {
  children: "Button",
  shape: "rounded",
  fixed: true,
};
export const ShapeCircle = Template.bind({});
ShapeCircle.args = {
  children: "×",
  shape: "circle",
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  children: "Warning",
  color: "warning",
  fixed: true,
};
export const ColorDanger = Template.bind({});
ColorDanger.args = {
  children: "Danger",
  color: "danger",
  fixed: true,
};

export const VariantFill = Template.bind({});
VariantFill.args = {
  children: "Button",
  variant: "fill",
  fixed: true,
};
export const VariantGhost = Template.bind({});
VariantGhost.args = {
  children: "Button",
  variant: "ghost",
  elevated: false,
  fixed: true,
};
export const VariantText = Template.bind({});
VariantText.args = {
  children: "Button",
  variant: "text",
  elevated: false,
  fixed: true,
};
