import React from 'react'
import { render } from "@testing-library/react";
import Home from "./index";

const defaultProps = {
  header: {
    title: "Test Title",
    body: "Test Body"
  },
  linkgroup: {
    linkitem: [
      {
        link: "https://github.com/Sivli-Embir/story-next-butter",
        title: "Github",
        body: "All work should be stored in version control so no progress is ever lost."
      },
      {
        link: "https://Sivli-Embir.github.io/story-next-butter/",
        title: "Storybook",
        body: "All elements of a website should be defined as stories."
      },
      {
        link: "https://buttercms.com/",
        title: "Butter CMS (Pending)",
        body: "All content should be dynamically loaded from a CMS API."
      },
      {
        link: "https://vercel.com/",
        title: "Vercel",
        body: "SEO ready, free no configuration hosting."
      }
    ]
  }
}

describe("Home", () => {
  it("renders without crashing", () => {
    let {getByRole} = render(<Home {...defaultProps} />);
    expect(getByRole("main")).toBeInTheDocument();
  });
  it("it has the Header", () => {
    let {getByRole} = render(<Home {...defaultProps} />);
    expect(getByRole("heading", { name: "Test Title"})).toBeInTheDocument();
  });
  it("it has the list items", () => {
    let {getAllByRole} = render(<Home {...defaultProps} />);
    expect(getAllByRole("listitem")[0]).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(4);
  });
});
