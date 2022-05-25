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

const FunctionalTemplate: ComponentStory<typeof Progress> = (args) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const increase = Math.random() * 10;
      setValue((value) => (value + increase) % 100);
    }, 500);
    return () => clearInterval(interval);
  });
  return <Progress value={value} {...args} />;
};
export const Functional = FunctionalTemplate.bind({});
Functional.args = {
  min: 0,
  max: 100,

  color: "info",
  shape: "pill",
  elevated: true,
  animated: true,
  disabled: false,
};
