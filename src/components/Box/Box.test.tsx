import React from "react";
import { render } from "@testing-library/react";
import { Box } from "components";

describe("Box", () => {
  test("renders the box", () => {
    render(<Box>Box</Box>);
  });
});
