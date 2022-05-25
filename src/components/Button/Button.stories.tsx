import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner, Button } from "components";

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
};
export const ShapeRectangle = Template.bind({});
ShapeRectangle.args = {
  children: "Button",
  shape: "rectangle",
  size: "half",
};
export const ShapeRounded = Template.bind({});
ShapeRounded.args = {
  children: "Button",
  shape: "rounded",
  size: "half",
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
  size: "half",
};
export const ColorDanger = Template.bind({});
ColorDanger.args = {
  children: "Danger",
  color: "danger",
  size: "half",
};

export const VariantFill = Template.bind({});
VariantFill.args = {
  children: "Button",
  variant: "fill",
  size: "half",
};
export const VariantGhost = Template.bind({});
VariantGhost.args = {
  children: "Button",
  variant: "ghost",
  size: "half",
  elevated: false,
};
export const VariantText = Template.bind({});
VariantText.args = {
  children: "Button",
  variant: "text",
  size: "half",
  elevated: false,
};

const LoadingTemplate: ComponentStory<typeof Button> = (args) => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button {...args} disabled={loading} onClick={handleClick}>
      {loading && <Spinner padded />}Process Data
    </Button>
  );
};

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  color: "info",
  shape: "rectangle",
  size: "half",
};
