import React from "react";
import { render } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress", () => {
  test("renders to progress bar", () => {
    render(<Progress />);
  });
});
