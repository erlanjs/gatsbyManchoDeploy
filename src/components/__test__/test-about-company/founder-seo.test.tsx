import FounderSeo from "../../pages/about-company/founder-seo";
import { render, screen } from "@testing-library/react";
import React from "react";


describe("Founder Seo components test", () => {
  test("title test", () => {
    render(<FounderSeo/>)
    const title = screen.getByText(/ЭСЕН СА/i)
    expect(title).toBeInTheDocument()
  });


})
