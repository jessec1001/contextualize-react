import React from "react";
import { render } from "@testing-library/react";
import { Button } from "components";

describe("Button", () => {
  test("renders the button", () => {
    render(<Button>Button</Button>);
  });
});
