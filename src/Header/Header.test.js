import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("has dynamic a header title", () => {
    const title = "Title"
    const { getByRole } = render(<Header title={title} />);
    expect(getByRole('heading', { name: title })).toBeInTheDocument();
  })

  it("has dynamic a body", () => {
    const body = "Body text"
    const { getByText } = render(<Header body={body} />);
    expect(getByText(body)).toBeInTheDocument();
  })
});
