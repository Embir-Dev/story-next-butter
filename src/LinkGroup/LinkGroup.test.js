import { render, screen } from "@testing-library/react";
import LinkGroup from "./index";

describe("LinkGroup", () => {
  const defaultProps = {data: [{link: "#", title: "_"}]}

  it("renders without crashing", () => {
    render(<LinkGroup {...defaultProps} />);
  });

});
