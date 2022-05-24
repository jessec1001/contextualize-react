import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonGroup } from "components";

interface ControlExtensions {
  /**
   * The shape of the edges of the button.
   * @default "rounded"
   */
  shape?: "rectangle" | "rounded" | "pill";
  /**
   * The variant of the button style to use.
   *
   * - "fill": The background of the button is filled with the button color.
   * - "ghost": The background of the button is transparent and the border and text are filled with the button color.
   * - "outline": The background of the button is transparent and the text is filled with the button color.
   * @default "fill"
   */
  variant?: "fill" | "ghost" | "text";
  /**
   * Whether the button should appear to be elevated.
   * @default true
   */
  elevated?: boolean;
  /**
   * Whether the button should have a fixed width across all buttons.
   * If fixed, a button will take up a width in [4em, 8em] up to 25% if possible.
   * @default true
   */
  fixed?: boolean;
}

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
  argTypes: {
    shape: {
      control: "select",
      options: ["rectangle", "rounded", "pill"],
    },
    variant: { control: "select", options: ["fill", "ghost", "text"] },
    elevated: { control: "boolean" },
    fixed: { control: "boolean" },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = ({
  shape,
  variant,
  elevated,
  fixed,
  ...args
}: React.ComponentProps<typeof ButtonGroup> & ControlExtensions) => {
  const buttonProps = { shape, variant, elevated, fixed };
  return (
    <ButtonGroup {...args}>
      <Button color="danger" {...buttonProps}>
        Danger
      </Button>
      <Button color="normal" {...buttonProps}>
        Normal
      </Button>
      <Button color="primary" {...buttonProps}>
        Primary
      </Button>
    </ButtonGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  connected: false,
  stretch: true,
  shape: "rectangle",
  variant: "fill",
  elevated: true,
  fixed: false,
} as React.ComponentProps<typeof ButtonGroup> & ControlExtensions;
export const Connected = Template.bind({});
Connected.args = {
  connected: true,
  stretch: true,
  shape: "rectangle",
  variant: "fill",
  elevated: true,
  fixed: false,
} as React.ComponentProps<typeof ButtonGroup> & ControlExtensions;
export const NotStretched = Template.bind({});
NotStretched.args = {
  connected: false,
  stretch: false,
  shape: "rectangle",
  variant: "fill",
  elevated: true,
  fixed: false,
} as React.ComponentProps<typeof ButtonGroup> & ControlExtensions;

export const TextButtons = Template.bind({});
TextButtons.args = {
  connected: true,
  stretch: true,
  shape: "rectangle",
  variant: "text",
  elevated: false,
  fixed: false,
} as React.ComponentProps<typeof ButtonGroup> & ControlExtensions;
