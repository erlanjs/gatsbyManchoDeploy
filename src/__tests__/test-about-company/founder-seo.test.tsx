import { render, screen } from "@testing-library/react"
import React from "react"

import FounderSeo from "../../components/pages/about-company-pages/founder-seo"

describe("Founder Seo components test", () => {
  test("title test", () => {
    render(<FounderSeo />)
    const title = screen.getByText(/ЭСЕН СА/i)
    expect(title).toBeInTheDocument()
  })
})
