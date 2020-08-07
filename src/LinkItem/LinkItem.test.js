import { render, screen } from "@testing-library/react";
import LinkItem from "./index";

describe("LinkItem", () => {
  const defaultProps = {link: "#", title: "_"}

  it("renders without crashing", () => {
    render(<LinkItem {...defaultProps} />);
  });

  it("has dynamic props", () => {
    const body = "My body"
    const { getByText, getByRole } = render(<LinkItem {...defaultProps} body={body} />);
    expect(getByRole('listitem').closest('a')).toHaveAttribute('href', defaultProps.link)
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  })
});
