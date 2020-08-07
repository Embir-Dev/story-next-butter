import React from 'react'
import { render } from "@testing-library/react";
import LinkItem from "./index";

describe("LinkItem", () => {
  const defaultProps = {link: "#", title: "_"}

  it("renders without crashing", () => {
    render(<LinkItem {...defaultProps} />);
  });

});
