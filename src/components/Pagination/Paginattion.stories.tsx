import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "components";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { actions: { handles: ["pageChange"] } },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stretch: false,
  showPrev: false,
  showNext: false,
  showFirst: false,
  showLast: false,
  page: undefined,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};
export const WithStepButtons = Template.bind({});
WithStepButtons.args = {
  stretch: false,
  showPrev: true,
  showNext: true,
  showFirst: false,
  showLast: false,
  page: undefined,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};
export const WithJumpButtons = Template.bind({});
WithJumpButtons.args = {
  stretch: false,
  showPrev: false,
  showNext: false,
  showFirst: true,
  showLast: true,
  page: undefined,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};
export const WithAllButtons = Template.bind({});
WithAllButtons.args = {
  stretch: false,
  showPrev: true,
  showNext: true,
  showFirst: true,
  showLast: true,
  page: undefined,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};

export const NoBorderPages = Template.bind({});
NoBorderPages.args = {
  stretch: false,
  showPrev: false,
  showNext: false,
  showFirst: false,
  showLast: false,
  page: undefined,
  minPage: 1,
  maxPage: 50,
  numberBorderPages: 0,
  numberNeighborPages: 1,
};
export const MoreNeighborPages = Template.bind({});
MoreNeighborPages.args = {
  stretch: false,
  showPrev: false,
  showNext: false,
  showFirst: false,
  showLast: false,
  page: undefined,
  minPage: 1,
  maxPage: 50,
  numberBorderPages: 1,
  numberNeighborPages: 3,
};

export const Stretched = Template.bind({});
Stretched.args = {
  stretch: true,
  showPrev: false,
  showNext: false,
  showFirst: false,
  showLast: false,
  page: undefined,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};

export const Styled = Template.bind({});
Styled.args = {
  stretch: false,
  showPrev: true,
  showNext: true,
  showFirst: true,
  showLast: true,
  page: undefined,
  minPage: 1,
  maxPage: 25,
  numberBorderPages: 1,
  numberNeighborPages: 1,
  currentButtonProps: {
    shape: "squircle",
    color: "notify",
    variant: "fill",
    elevated: true,
  },
  noncurrentButtonProps: {
    shape: "squircle",
    color: "normal",
    variant: "fill",
    elevated: false,
  },
};

const ControlledTemplate: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPage(Math.floor(Math.random() * 10) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <Pagination {...args} page={page} />;
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  stretch: false,
  showPrev: false,
  showNext: false,
  showFirst: false,
  showLast: false,
  minPage: 1,
  maxPage: 10,
  numberBorderPages: 1,
  numberNeighborPages: 1,
};
