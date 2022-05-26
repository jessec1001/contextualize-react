import React from "react";
import { render } from "@testing-library/react";
import { Pagination } from "components";

describe("Pagination", () => {
  test("renders the pagination", () => {
    render(<Pagination />);
  });
});
