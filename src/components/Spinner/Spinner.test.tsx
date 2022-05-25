import React from "react";
import { render } from "@testing-library/react";
import { Spinner } from "components";

describe("Spinner", () => {
  test("renders the spinner", () => {
    render(<Spinner />);
  });
});
