import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "components";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: undefined,
  min: 0,
  max: 100,
};
export const Determinate = Template.bind({});
Determinate.args = {
  value: 85,
  min: 0,
  max: 100,
};

const FunctionalTemplate: ComponentStory<typeof Spinner> = (args) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const increase = Math.random() * 10;
      setValue((value) => (value + increase) % 100);
    }, 500);
    return () => clearInterval(interval);
  });
  return <Spinner value={value} {...args} />;
};

export const Functional = FunctionalTemplate.bind({});
Functional.args = {
  min: 0,
  max: 100,
};
