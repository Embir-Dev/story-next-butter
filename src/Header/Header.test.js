import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  const defaultProps = {title: "_"}
  it("renders without crashing", () => {
    render(<Header {...defaultProps} />);
  });
});
