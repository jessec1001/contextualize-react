import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Progress } from "components";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 75,
  min: 0,
  max: 100,

  color: "primary",
  shape: "pill",
  elevated: true,
  animated: false,
  disabled: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: undefined,
  min: 0,
  max: 100,

  color: "primary",
  shape: "pill",
  elevated: true,
  animated: true,
  disabled: false,
};
export const Determinate = Template.bind({});
Determinate.args = {
  value: 75,
  min: 0,
  max: 100,

  color: "primary",
  shape: "pill",
  elevated: true,
  animated: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 75,
  min: 0,
  max: 100,

  color: "primary",
  shape: "pill",
  elevated: true,
  animated: false,
  disabled: true,
};
