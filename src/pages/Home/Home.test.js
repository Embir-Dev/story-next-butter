import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders without crashing", () => {
    let {getByRole} = render(<Home />);
    expect(getByRole("main")).toBeInTheDocument();
  });
  it("it has the Header", () => {
    let {getByRole} = render(<Home />);
    expect(getByRole("heading", { name: "Sivli Embir's Demo"})).toBeInTheDocument();
  });
});
